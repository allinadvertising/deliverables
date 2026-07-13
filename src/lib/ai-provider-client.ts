import {
  serializeError,
  type AuditEnhancerLogger,
} from "./audit-enhancer-logs";

export type ProviderId = "openai" | "deepseek";

export type AuditEnhancerErrorDiagnostics = {
  logId?: string;
  logPath?: string;
  provider?: ProviderId;
  providerRequestId?: string;
  providerResponsePath?: string;
  providerStatus?: number;
};

export class AuditEnhancerError extends Error {
  diagnostics: AuditEnhancerErrorDiagnostics;
  status: number;

  constructor(
    message: string,
    status = 500,
    diagnostics: AuditEnhancerErrorDiagnostics = {},
  ) {
    super(message);
    this.name = "AuditEnhancerError";
    this.diagnostics = diagnostics;
    this.status = status;
  }
}

export type CallModelOptions = {
  logger?: AuditEnhancerLogger;
  model?: string;
  provider: ProviderId;
  systemPrompt: string;
  userPrompt: string;
};

export async function callModel(options: CallModelOptions): Promise<string> {
  if (options.provider === "openai") {
    return callOpenAI(options);
  }

  if (options.provider === "deepseek") {
    return callDeepSeek(options);
  }

  throw new AuditEnhancerError("Unsupported AI provider.", 400);
}

async function callOpenAI(options: CallModelOptions) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new AuditEnhancerError(
      "Missing OPENAI_API_KEY. Add it to your environment before using OpenAI.",
      400,
      withLogDiagnostics(options.logger, { provider: "openai" }),
    );
  }

  const endpoint =
    process.env.OPENAI_API_URL ?? "https://api.openai.com/v1/responses";
  const instructions = options.systemPrompt;
  const input = options.userPrompt;
  const model = resolveModel("openai", options.model);
  const reasoning = getOpenAIReasoning();
  const textConfig = getOpenAITextConfig();
  const background = shouldUseOpenAIBackgroundMode();
  const clientRequestId = options.logger?.id ?? `audit-enhancer-${Date.now()}`;
  const requestBody = withOptionalNumber(
    withOptionalObject(
      {
        background,
        input,
        instructions,
        max_output_tokens: getMaxOutputTokens(),
        model,
        store: background,
        text: textConfig,
      },
      "reasoning",
      reasoning,
    ),
    "temperature",
    getOpenAITemperature(model),
  );
  const startedAt = Date.now();

  await options.logger?.info("provider_request", {
    background,
    clientRequestId,
    endpoint,
    inputChars: input.length,
    instructionsChars: instructions.length,
    maxOutputTokens: requestBody.max_output_tokens,
    model,
    provider: "openai",
    reasoning: reasoning ?? "provider-default",
    responseFormat: textConfig.format,
    textVerbosity: textConfig.verbosity ?? "provider-default",
    timeoutMs: getTimeoutMs(),
  });

  const response = await fetchJsonWithTimeout(
    endpoint,
    requestBody,
    {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "X-Client-Request-Id": clientRequestId,
    },
    options.logger,
    "openai",
  );

  const parsed = await parseResponseBody(response);
  const providerRequestId = getProviderRequestId(response);
  const rawPath = await maybeSaveProviderResponse({
    logger: options.logger,
    ok: response.ok,
    provider: "openai",
    requestId: providerRequestId,
    rawText: parsed.text,
  });
  const apiError = extractApiError(parsed.payload);

  await options.logger?.[response.ok ? "info" : "warn"]("provider_response", {
    elapsedMs: Date.now() - startedAt,
    error: apiError || undefined,
    ok: response.ok,
    provider: "openai",
    providerRequestId,
    rawPath,
    status: response.status,
    summary: summarizeProviderPayload(parsed.payload),
  });

  if (!response.ok) {
    throw new AuditEnhancerError(
      apiError || "OpenAI returned an error.",
      response.status,
      withLogDiagnostics(options.logger, {
        provider: "openai",
        providerRequestId,
        providerResponsePath: rawPath,
        providerStatus: response.status,
      }),
    );
  }

  const final = background
    ? await pollOpenAIResponse({
        apiKey,
        clientRequestId,
        endpoint,
        initialPayload: parsed.payload,
        initialProviderRequestId: providerRequestId,
        initialProviderStatus: response.status,
        initialText: parsed.text,
        logger: options.logger,
        startedAt,
      })
    : {
        payload: parsed.payload,
        providerRequestId,
        providerResponsePath: rawPath,
        providerStatus: response.status,
        text: parsed.text,
      };
  const text = extractOpenAIText(final.payload);

  if (!text) {
    const emptyPath = await options.logger?.saveRaw(
      "openai-empty-response",
      final.text,
    );
    throw new AuditEnhancerError(
      describeEmptyOpenAIResponse(final.payload),
      502,
      withLogDiagnostics(options.logger, {
        provider: "openai",
        providerRequestId: final.providerRequestId,
        providerResponsePath: emptyPath ?? final.providerResponsePath,
        providerStatus: final.providerStatus,
      }),
    );
  }

  await options.logger?.info("provider_text_extracted", {
    outputChars: text.length,
    provider: "openai",
  });

  return text;
}

async function callDeepSeek(options: CallModelOptions) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    throw new AuditEnhancerError(
      "Missing DEEPSEEK_API_KEY. Add it to your environment before using DeepSeek.",
      400,
      withLogDiagnostics(options.logger, { provider: "deepseek" }),
    );
  }

  const endpoint =
    process.env.DEEPSEEK_API_URL ?? "https://api.deepseek.com/chat/completions";
  const systemPrompt = options.systemPrompt;
  const userPrompt = options.userPrompt;
  const model = resolveModel("deepseek", options.model);
  const responseFormat = getDeepSeekResponseFormat();
  const thinking = getDeepSeekThinking();
  const temperature = getTemperature() ?? 0.2;
  const requestBody = withOptionalObject(
    withOptionalObject(
      {
        max_tokens: getMaxOutputTokens(),
        messages: [
          { content: systemPrompt, role: "system" },
          { content: userPrompt, role: "user" },
        ],
        model,
        stream: false,
        temperature,
      },
      "response_format",
      responseFormat ? { type: responseFormat } : undefined,
    ),
    "thinking",
    thinking,
  );
  const startedAt = Date.now();

  await options.logger?.info("provider_request", {
    endpoint,
    maxOutputTokens: requestBody.max_tokens,
    model,
    provider: "deepseek",
    responseFormat: responseFormat ?? "none",
    systemPromptChars: systemPrompt.length,
    thinking: thinking ?? "provider-default",
    timeoutMs: getTimeoutMs(),
    userPromptChars: userPrompt.length,
  });

  const response = await fetchJsonWithTimeout(
    endpoint,
    requestBody,
    {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    options.logger,
    "deepseek",
  );

  const parsed = await parseResponseBody(response);
  const providerRequestId = getProviderRequestId(response);
  const rawPath = await maybeSaveProviderResponse({
    logger: options.logger,
    ok: response.ok,
    provider: "deepseek",
    requestId: providerRequestId,
    rawText: parsed.text,
  });
  const apiError = extractApiError(parsed.payload);

  await options.logger?.[response.ok ? "info" : "warn"]("provider_response", {
    elapsedMs: Date.now() - startedAt,
    error: apiError || undefined,
    ok: response.ok,
    provider: "deepseek",
    providerRequestId,
    rawPath,
    status: response.status,
    summary: summarizeProviderPayload(parsed.payload),
  });

  if (!response.ok) {
    throw new AuditEnhancerError(
      apiError || "DeepSeek returned an error.",
      response.status,
      withLogDiagnostics(options.logger, {
        provider: "deepseek",
        providerRequestId,
        providerResponsePath: rawPath,
        providerStatus: response.status,
      }),
    );
  }

  const text = extractDeepSeekText(parsed.payload);

  if (!text) {
    const emptyPath = await options.logger?.saveRaw(
      "deepseek-empty-response",
      parsed.text,
    );
    throw new AuditEnhancerError(
      "DeepSeek returned an empty response.",
      502,
      withLogDiagnostics(options.logger, {
        provider: "deepseek",
        providerRequestId,
        providerResponsePath: emptyPath,
        providerStatus: response.status,
      }),
    );
  }

  await options.logger?.info("provider_text_extracted", {
    outputChars: text.length,
    provider: "deepseek",
  });

  return text;
}

export function resolveModel(provider: ProviderId, selectedModel?: string) {
  const cleanModel = normalizeText(selectedModel);

  if (cleanModel) {
    return cleanModel;
  }

  if (provider === "openai") {
    return process.env.OPENAI_MODEL ?? "gpt-5";
  }

  return process.env.DEEPSEEK_MODEL ?? "deepseek-v4-pro";
}

function getMaxOutputTokens() {
  const configured = Number(process.env.AUDIT_ENHANCER_MAX_OUTPUT_TOKENS);

  if (Number.isFinite(configured) && configured >= 4096) {
    return Math.floor(configured);
  }

  return 30000;
}

function getTimeoutMs() {
  const configured = Number(process.env.AUDIT_ENHANCER_TIMEOUT_MS);

  if (Number.isFinite(configured) && configured >= 10000) {
    return Math.floor(configured);
  }

  return 120000;
}

function getTemperature() {
  const raw = process.env.AUDIT_ENHANCER_TEMPERATURE?.trim();

  if (!raw) {
    return undefined;
  }

  const configured = Number(raw);

  if (Number.isFinite(configured) && configured >= 0 && configured <= 2) {
    return configured;
  }

  return undefined;
}

function getOpenAITemperature(model: string) {
  if (isOpenAIModelWithoutTemperature(model)) {
    return undefined;
  }

  return getTemperature();
}

function isOpenAIModelWithoutTemperature(model: string) {
  const normalized = model.trim().toLowerCase();

  return (
    normalized === "gpt-5" ||
    normalized.startsWith("gpt-5-") ||
    normalized.startsWith("gpt-5.")
  );
}

function getOpenAITextFormat() {
  const format = (
    process.env.AUDIT_ENHANCER_OPENAI_RESPONSE_FORMAT ?? "json_object"
  )
    .trim()
    .toLowerCase();

  if (format === "text") {
    return { type: "text" };
  }

  if (format === "json_schema") {
    return {
      name: "audit_content",
      schema: {
        type: "object",
      },
      strict: true,
      type: "json_schema",
    };
  }

  return { type: "json_object" };
}

function getOpenAITextConfig(): Record<string, unknown> {
  const format = getOpenAITextFormat();
  const verbosity = getOpenAIVerbosity();

  return verbosity ? { format, verbosity } : { format };
}

function getOpenAIVerbosity() {
  const verbosity = (
    process.env.AUDIT_ENHANCER_OPENAI_VERBOSITY ?? ""
  )
    .trim()
    .toLowerCase();

  if (
    verbosity === "low" ||
    verbosity === "medium" ||
    verbosity === "high"
  ) {
    return verbosity;
  }

  return undefined;
}

function getOpenAIReasoning() {
  const effort = (
    process.env.AUDIT_ENHANCER_OPENAI_REASONING_EFFORT ?? "low"
  )
    .trim()
    .toLowerCase();

  if (effort === "provider-default" || effort === "default") {
    return undefined;
  }

  if (
    effort === "none" ||
    effort === "minimal" ||
    effort === "low" ||
    effort === "medium" ||
    effort === "high" ||
    effort === "xhigh"
  ) {
    return { effort };
  }

  return { effort: "low" };
}

function shouldUseOpenAIBackgroundMode() {
  return (
    process.env.AUDIT_ENHANCER_OPENAI_BACKGROUND?.trim().toLowerCase() !==
    "false"
  );
}

function getOpenAIPollIntervalMs() {
  const configured = Number(process.env.AUDIT_ENHANCER_OPENAI_POLL_INTERVAL_MS);

  if (Number.isFinite(configured) && configured >= 500) {
    return Math.floor(configured);
  }

  return 3000;
}

function getOpenAIPollTimeoutMs() {
  const configured = Number(process.env.AUDIT_ENHANCER_OPENAI_POLL_TIMEOUT_MS);
  const platformLimit = getFunctionSafeTimeoutMs();

  if (Number.isFinite(configured) && configured >= 30000) {
    return Math.min(Math.floor(configured), platformLimit);
  }

  return platformLimit;
}

function getFunctionSafeTimeoutMs() {
  const configured = Number(process.env.AUDIT_ENHANCER_FUNCTION_BUDGET_MS);

  if (Number.isFinite(configured) && configured >= 45000) {
    return Math.floor(configured);
  }

  if (process.env.VERCEL) {
    return 240000;
  }

  return 600000;
}

function getDeepSeekResponseFormat() {
  const format = (
    process.env.AUDIT_ENHANCER_DEEPSEEK_RESPONSE_FORMAT ?? "json_object"
  )
    .trim()
    .toLowerCase();

  if (format === "none") {
    return undefined;
  }

  if (format === "text") {
    return "text";
  }

  return "json_object";
}

function getDeepSeekThinking() {
  const type = (
    process.env.AUDIT_ENHANCER_DEEPSEEK_THINKING ?? "disabled"
  )
    .trim()
    .toLowerCase();
  const effort = (
    process.env.AUDIT_ENHANCER_DEEPSEEK_REASONING_EFFORT ?? ""
  )
    .trim()
    .toLowerCase();

  if (type === "provider-default" || type === "default" || type === "none") {
    return undefined;
  }

  if (type !== "enabled" && type !== "disabled") {
    return undefined;
  }

  return effort === "high" || effort === "max"
    ? { reasoning_effort: effort, type }
    : { type };
}

async function pollOpenAIResponse({
  apiKey,
  clientRequestId,
  endpoint,
  initialPayload,
  initialProviderRequestId,
  initialProviderStatus,
  initialText,
  logger,
  startedAt,
}: {
  apiKey: string;
  clientRequestId: string;
  endpoint: string;
  initialPayload: unknown;
  initialProviderRequestId: string;
  initialProviderStatus: number;
  initialText: string;
  logger?: AuditEnhancerLogger;
  startedAt: number;
}) {
  if (!isRecord(initialPayload) || typeof initialPayload.id !== "string") {
    const rawPath = await logger?.saveRaw(
      "openai-background-missing-id",
      initialPayload,
    );

    throw new AuditEnhancerError(
      "OpenAI background response did not include a response id.",
      502,
      withLogDiagnostics(logger, {
        provider: "openai",
        providerResponsePath: rawPath,
      }),
    );
  }

  let payload: unknown = initialPayload;
  let responseText = initialText;
  let providerRequestId = initialProviderRequestId;
  let providerResponsePath: string | undefined;
  let providerStatus = initialProviderStatus;
  const responseId = initialPayload.id;
  const retrieveEndpoint = `${endpoint.replace(/\/$/, "")}/${encodeURIComponent(
    responseId,
  )}`;
  const deadline = Date.now() + getOpenAIPollTimeoutMs();
  let attempt = 0;

  await logger?.info("openai_background_started", {
    clientRequestId,
    elapsedMs: Date.now() - startedAt,
    responseId,
    status: initialPayload.status,
  });

  while (
    isRecord(payload) &&
    (payload.status === "queued" || payload.status === "in_progress")
  ) {
    if (Date.now() >= deadline) {
      const timeoutPath = await logger?.saveRaw(
        "openai-background-timeout",
        responseText,
      );

      throw new AuditEnhancerError(
        `OpenAI background response did not finish within ${getOpenAIPollTimeoutMs()}ms.`,
        504,
        withLogDiagnostics(logger, {
          provider: "openai",
          providerRequestId,
          providerResponsePath: timeoutPath,
          providerStatus,
        }),
      );
    }

    attempt += 1;
    await sleep(getOpenAIPollIntervalMs());

    const pollResponse = await fetchJsonWithTimeout(
      retrieveEndpoint,
      undefined,
      {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "X-Client-Request-Id": `${clientRequestId}-poll-${attempt}`,
      },
      logger,
      "openai",
      "GET",
    );
    const parsed = await parseResponseBody(pollResponse);
    providerRequestId = getProviderRequestId(pollResponse);
    providerStatus = pollResponse.status;
    responseText = parsed.text;
    payload = parsed.payload;

    await logger?.[pollResponse.ok ? "info" : "warn"]("openai_background_poll", {
      attempt,
      elapsedMs: Date.now() - startedAt,
      ok: pollResponse.ok,
      providerRequestId,
      responseId,
      status: isRecord(payload) ? payload.status : undefined,
      statusCode: pollResponse.status,
      summary: summarizeProviderPayload(payload),
    });

    if (!pollResponse.ok) {
      providerResponsePath = await maybeSaveProviderResponse({
        logger,
        ok: false,
        provider: "openai",
        requestId: providerRequestId,
        rawText: parsed.text,
      });

      throw new AuditEnhancerError(
        extractApiError(payload) || "OpenAI background polling returned an error.",
        pollResponse.status,
        withLogDiagnostics(logger, {
          provider: "openai",
          providerRequestId,
          providerResponsePath,
          providerStatus: pollResponse.status,
        }),
      );
    }
  }

  providerResponsePath = await maybeSaveProviderResponse({
    logger,
    ok: true,
    provider: "openai",
    requestId: providerRequestId,
    rawText: responseText,
  });

  await logger?.info("openai_background_finished", {
    attempt,
    elapsedMs: Date.now() - startedAt,
    providerRequestId,
    responseId,
    status: isRecord(payload) ? payload.status : undefined,
    summary: summarizeProviderPayload(payload),
  });

  return {
    payload,
    providerRequestId,
    providerResponsePath,
    providerStatus,
    text: responseText,
  };
}

async function fetchJsonWithTimeout(
  endpoint: string,
  body: unknown,
  headers: Record<string, string>,
  logger: AuditEnhancerLogger | undefined,
  provider: ProviderId,
  method: "GET" | "POST" = "POST",
) {
  const timeoutMs = getTimeoutMs();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const startedAt = Date.now();

  try {
    const init: RequestInit = {
      headers,
      method,
      signal: controller.signal,
    };

    if (typeof body !== "undefined") {
      init.body = JSON.stringify(body);
    }

    return await fetch(endpoint, {
      ...init,
    });
  } catch (error) {
    const timedOut =
      error instanceof DOMException && error.name === "AbortError";

    await logger?.error("provider_fetch_failed", {
      elapsedMs: Date.now() - startedAt,
      endpoint,
      error: serializeError(error),
      method,
      provider,
      timedOut,
      timeoutMs,
    });

    throw new AuditEnhancerError(
      timedOut
        ? `${provider} request timed out after ${timeoutMs}ms.`
        : `${provider} request failed before receiving a response.`,
      timedOut ? 504 : 502,
      withLogDiagnostics(logger, { provider }),
    );
  } finally {
    clearTimeout(timeout);
  }
}

async function maybeSaveProviderResponse({
  logger,
  ok,
  provider,
  rawText,
  requestId,
}: {
  logger?: AuditEnhancerLogger;
  ok: boolean;
  provider: ProviderId;
  rawText: string;
  requestId: string;
}) {
  if (!logger || (ok && !shouldLogSuccessfulProviderResponses())) {
    return undefined;
  }

  return logger.saveRaw(
    `${provider}-${ok ? "success" : "error"}-${
      requestId || "no-request-id"
    }`,
    rawText,
  );
}

function shouldLogSuccessfulProviderResponses() {
  return (
    process.env.AUDIT_ENHANCER_LOG_SUCCESS_RESPONSES?.trim().toLowerCase() ===
    "true"
  );
}

function getProviderRequestId(response: Response) {
  return (
    response.headers.get("x-request-id") ??
    response.headers.get("request-id") ??
    response.headers.get("x-ds-trace-id") ??
    response.headers.get("cf-ray") ??
    ""
  );
}

function summarizeProviderPayload(payload: unknown) {
  if (!isRecord(payload)) {
    return { type: typeof payload };
  }

  const choice = Array.isArray(payload.choices) ? payload.choices[0] : null;

  return {
    error: payload.error,
    id: payload.id,
    incompleteDetails: payload.incomplete_details,
    model: payload.model,
    object: payload.object,
    outputLength: Array.isArray(payload.output) ? payload.output.length : null,
    status: payload.status,
    usage: payload.usage,
    choice:
      isRecord(choice) && isRecord(choice.message)
        ? {
            finishReason: choice.finish_reason,
            messageContentChars:
              typeof choice.message.content === "string"
                ? choice.message.content.length
                : null,
          }
        : undefined,
  };
}

function withOptionalNumber<T extends Record<string, unknown>>(
  value: T,
  key: string,
  entry?: number,
) {
  if (typeof entry === "number") {
    return { ...value, [key]: entry };
  }

  return value;
}

function withOptionalObject<T extends Record<string, unknown>>(
  value: T,
  key: string,
  entry?: Record<string, unknown>,
) {
  if (entry) {
    return { ...value, [key]: entry };
  }

  return value;
}

function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function parseResponseBody(response: Response) {
  const text = await response.text();

  if (!text) {
    return { payload: null, text };
  }

  try {
    return { payload: JSON.parse(text) as unknown, text };
  } catch {
    return { payload: text, text };
  }
}

function extractApiError(payload: unknown) {
  if (typeof payload === "string") {
    return payload.slice(0, 500);
  }

  if (!isRecord(payload)) {
    return "";
  }

  const error = payload.error;

  if (isRecord(error) && typeof error.message === "string") {
    return error.message;
  }

  if (typeof payload.message === "string") {
    return payload.message;
  }

  return "";
}

function extractOpenAIText(payload: unknown) {
  if (!isRecord(payload)) {
    return "";
  }

  if (typeof payload.output_text === "string") {
    return payload.output_text;
  }

  if (!Array.isArray(payload.output)) {
    return "";
  }

  return payload.output
    .flatMap((item) => {
      if (!isRecord(item) || !Array.isArray(item.content)) {
        return [];
      }

      return item.content;
    })
    .map((part) => {
      if (isRecord(part) && typeof part.text === "string") {
        return part.text;
      }

      return "";
    })
    .join("");
}

function describeEmptyOpenAIResponse(payload: unknown) {
  if (isRecord(payload)) {
    if (isRecord(payload.error) && typeof payload.error.message === "string") {
      return `OpenAI returned no output text: ${payload.error.message}`;
    }

    if (
      payload.status === "incomplete" &&
      isRecord(payload.incomplete_details) &&
      typeof payload.incomplete_details.reason === "string"
    ) {
      return `OpenAI response was incomplete: ${payload.incomplete_details.reason}.`;
    }

    if (typeof payload.status === "string") {
      return `OpenAI returned no output text. Response status: ${payload.status}.`;
    }
  }

  return "OpenAI returned an empty response.";
}

function extractDeepSeekText(payload: unknown) {
  if (!isRecord(payload) || !Array.isArray(payload.choices)) {
    return "";
  }

  const [choice] = payload.choices;

  if (!isRecord(choice) || !isRecord(choice.message)) {
    return "";
  }

  return typeof choice.message.content === "string"
    ? choice.message.content
    : "";
}

export function stripCodeFence(value: string) {
  return value
    .trim()
    .replace(/^```(?:html|json)?\s*/i, "")
    .replace(/\s*```$/i, "");
}

function normalizeText(value?: string) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

export function withLogDiagnostics(
  logger?: AuditEnhancerLogger,
  diagnostics: AuditEnhancerErrorDiagnostics = {},
) {
  return {
    ...diagnostics,
    logId: logger?.id,
    logPath: logger?.filePath,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
