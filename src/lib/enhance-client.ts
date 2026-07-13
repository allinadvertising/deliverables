// Client-side helpers shared by every enhancement upload form (markdown,
// HTML, ...). The status endpoint (/api/audit-enhancer/status) is already
// job-kind-agnostic, so both forms poll the same route.

export type ProviderId = "openai" | "deepseek";

export type EnhanceJob = {
  jobId: string;
  logId?: string;
  logPath?: string;
  model: string;
  provider: ProviderId;
  status: "running";
};

export type EnhanceJobStatus = {
  auditId: string | null;
  auditType: string;
  clientName: string;
  error?: string | null;
  jobId: string;
  logId?: string | null;
  model: string;
  provider: ProviderId;
  status: "pending" | "running" | "completed" | "failed";
  title: string;
};

export type ErrorPayload = {
  error?: string;
  logId?: string;
  logPath?: string;
  rawBody?: string;
  responseStatus?: number;
  responseStatusText?: string;
  providerRequestId?: string;
  providerResponsePath?: string;
  providerStatus?: number;
};

export async function parseEnhanceResponse(response: Response) {
  const text = await response.text();

  if (!text.trim()) {
    return {
      error:
        "The server returned an empty response. Check the Vercel function logs.",
      responseStatus: response.status,
      responseStatusText: response.statusText,
    } satisfies ErrorPayload;
  }

  try {
    return JSON.parse(text) as
      | Record<string, unknown>
      | EnhanceJob
      | ErrorPayload;
  } catch {
    return {
      error: "The server returned a non-JSON response. Check the Vercel function logs.",
      rawBody: text.slice(0, 500),
      responseStatus: response.status,
      responseStatusText: response.statusText,
    } satisfies ErrorPayload;
  }
}

export function isEnhanceJob(payload: unknown): payload is EnhanceJob {
  return (
    Boolean(payload) &&
    typeof payload === "object" &&
    typeof (payload as { jobId?: unknown }).jobId === "string"
  );
}

export async function pollEnhancementJob(
  jobId: string,
): Promise<EnhanceJobStatus> {
  const startedAt = Date.now();
  const timeoutMs = 14 * 60 * 1000;

  while (Date.now() - startedAt < timeoutMs) {
    await sleep(3000);

    const response = await fetch(
      `/api/audit-enhancer/status?runId=${encodeURIComponent(jobId)}`,
      { cache: "no-store" },
    );
    const payload = (await parseEnhanceResponse(response)) as
      | EnhanceJobStatus
      | ErrorPayload;

    if (!response.ok) {
      throw new Error(
        (payload as ErrorPayload).error ||
          `Enhancement status request failed with HTTP ${response.status}.`,
      );
    }

    const status = payload as EnhanceJobStatus;

    if (status.status === "completed" || status.status === "failed") {
      return status;
    }
  }

  throw new Error(
    "Enhancement is still running after 14 minutes. Refresh the dashboard or check Vercel logs for the background job.",
  );
}

export function sleep(milliseconds: number) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
