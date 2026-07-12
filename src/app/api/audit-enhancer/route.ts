import {
  AuditEnhancerError,
  enhanceAuditMarkdown,
  resolveModel,
  type ProviderId,
} from "@/lib/audit-enhancer";
import {
  createAuditEnhancerLogger,
  serializeError,
} from "@/lib/audit-enhancer-logs";
import { insertEnhancementRun, updateEnhancementRun } from "@/lib/db";
import { createClient } from "@/lib/supabase-middleware";
import { after } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 300;

const supportedProviders = new Set<ProviderId>(["openai", "deepseek"]);

export async function POST(request: Request) {
  const logger = createAuditEnhancerLogger();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    await logger.info("request_received", {
      contentLength: request.headers.get("content-length"),
      contentType: request.headers.get("content-type"),
    });

    const formData = await request.formData();
    const file = formData.get("file");
    const provider = String(formData.get("provider") ?? "");

    if (!supportedProviders.has(provider as ProviderId)) {
      await logger.warn("validation_failed", { provider });

      return Response.json(
        {
          error: "Choose either OpenAI or DeepSeek.",
          logId: logger.id,
          logPath: logger.filePath,
        },
        { status: 400 },
      );
    }

    if (
      !file ||
      typeof file === "string" ||
      typeof file.arrayBuffer !== "function"
    ) {
      await logger.warn("validation_failed", { reason: "missing_file" });

      return Response.json(
        {
          error: "Upload a markdown file before enhancing the audit.",
          logId: logger.id,
          logPath: logger.filePath,
        },
        { status: 400 },
      );
    }

    const fileName = file.name || "audit.md";

    if (!/\.(md|markdown)$/i.test(fileName)) {
      await logger.warn("validation_failed", {
        fileName,
        reason: "unsupported_extension",
      });

      return Response.json(
        {
          error: "Only .md and .markdown files are supported.",
          logId: logger.id,
          logPath: logger.filePath,
        },
        { status: 400 },
      );
    }

    const markdown = Buffer.from(await file.arrayBuffer()).toString("utf8");
    await logger.info("request_payload_ready", {
      auditType: stringValue(formData.get("auditType")),
      clientName: stringValue(formData.get("clientName")),
      fileName,
      markdownBytes: Buffer.byteLength(markdown, "utf8"),
      model: stringValue(formData.get("model")),
      provider,
      hasSupportingWorkbookLink: Boolean(
        stringValue(formData.get("supportingWorkbookLink")),
      ),
    });

    const selectedProvider = provider as ProviderId;
    const selectedModel = resolveModel(
      selectedProvider,
      stringValue(formData.get("model")),
    );
    const runId = await insertEnhancementRun({
      auditId: null,
      provider: selectedProvider,
      model: selectedModel,
      status: "running",
      logId: logger.id,
      outputPath: null,
    });

    const job = {
      auditType: stringValue(formData.get("auditType")),
      clientName: stringValue(formData.get("clientName")),
      fileName,
      markdown,
      model: selectedModel,
      ownerId: user?.id,
      provider: selectedProvider,
      supportingWorkbookLink: stringValue(
        formData.get("supportingWorkbookLink"),
      ),
    };

    after(async () => {
      try {
        const result = await enhanceAuditMarkdown({
          ...job,
          enhancementRunId: runId,
          logger,
        });

        await logger.info("background_job_completed", {
          auditId: result.auditId,
          model: result.model,
          provider: result.provider,
          runId,
        });
      } catch (error) {
        await logger.error("background_job_failed", serializeError(error));
        await updateEnhancementRun(runId, {
          errorMessage:
            error instanceof Error ? error.message : String(error),
          status: "failed",
        });
      }
    });

    await logger.info("background_job_started", {
      model: selectedModel,
      provider: selectedProvider,
      runId,
    });

    return Response.json(
      {
        jobId: runId,
        logId: logger.id,
        logPath: logger.filePath,
        model: selectedModel,
        provider: selectedProvider,
        schemaVersion: 2,
        status: "running",
      },
      { status: 202 },
    );
  } catch (error) {
    await logger.error("request_failed", serializeError(error));

    // Track failed enhancement run in Supabase
    insertEnhancementRun({
      auditId: null,
      provider: "openai", // best-effort default
      model: "unknown",
      status: "failed",
      logId: logger.id,
      outputPath: null,
      errorMessage: error instanceof Error ? error.message : String(error),
    }).catch(() => {}); // fire-and-forget, don't block the error response

    if (error instanceof AuditEnhancerError) {
      return Response.json(
        {
          error: error.message,
          logId: error.diagnostics.logId ?? logger.id,
          logPath: error.diagnostics.logPath ?? logger.filePath,
          providerRequestId: error.diagnostics.providerRequestId,
          providerResponsePath: error.diagnostics.providerResponsePath,
          providerStatus: error.diagnostics.providerStatus,
        },
        { status: error.status },
      );
    }

    console.error(error);

    return Response.json(
      {
        error: "The audit enhancer failed unexpectedly.",
        logId: logger.id,
        logPath: logger.filePath,
      },
      { status: 500 },
    );
  }
}

function stringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}
