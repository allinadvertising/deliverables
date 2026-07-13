import { resolveModel, type ProviderId } from "@/lib/ai-provider-client";
import { reviseHtmlDeliverable } from "@/lib/html-enhancer";
import { isAuditContentV3 } from "@/lib/audit/types";
import {
  createAuditEnhancerLogger,
  serializeError,
} from "@/lib/audit-enhancer-logs";
import { getAuditContent, insertEnhancementRun, updateEnhancementRun } from "@/lib/db";
import { createClient } from "@/lib/supabase-middleware";
import { after } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 300;

const provider: ProviderId = "openai";

/**
 * POST /api/html-enhancer/revise  { auditId, instructions }
 * Re-runs the LLM against an existing HTML-sourced audit's current content
 * plus the original uploaded HTML, applying only the requested change.
 */
export async function POST(request: Request) {
  const logger = createAuditEnhancerLogger();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.json(
      { error: "Authentication required." },
      { status: 401 },
    );
  }

  let auditId: string;
  let instructions: string;

  try {
    const payload = (await request.json()) as {
      auditId?: unknown;
      instructions?: unknown;
    };

    auditId = typeof payload.auditId === "string" ? payload.auditId : "";
    instructions =
      typeof payload.instructions === "string"
        ? payload.instructions.trim()
        : "";

    if (!auditId) {
      return Response.json({ error: "Missing auditId." }, { status: 400 });
    }

    if (!instructions) {
      return Response.json(
        { error: "Describe the change you want before regenerating." },
        { status: 400 },
      );
    }
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const audit = await getAuditContent(auditId);

  if (!audit) {
    return Response.json({ error: "Audit not found." }, { status: 404 });
  }

  if (audit.ownerId && audit.ownerId !== user.id) {
    return Response.json(
      { error: "You can only edit your own audits." },
      { status: 403 },
    );
  }

  if (!isAuditContentV3(audit.content)) {
    return Response.json(
      {
        error:
          "This audit is not an HTML-sourced deliverable and cannot be revised this way.",
      },
      { status: 400 },
    );
  }

  const model = resolveModel(provider);
  const runId = await insertEnhancementRun({
    auditId,
    provider,
    model,
    status: "running",
    logId: logger.id,
    outputPath: null,
    jobKind: "revise",
    instructions,
  });

  after(async () => {
    try {
      const result = await reviseHtmlDeliverable({
        auditId,
        instructions,
        logger,
        model,
        provider,
      });

      await logger.info("html_revision_job_completed", {
        auditId: result.auditId,
        runId,
      });
      await updateEnhancementRun(runId, { status: "completed" });
    } catch (error) {
      await logger.error("html_revision_job_failed", serializeError(error));
      await updateEnhancementRun(runId, {
        errorMessage:
          error instanceof Error ? error.message : String(error),
        status: "failed",
      });
    }
  });

  await logger.info("html_revision_job_started", { model, provider, runId });

  return Response.json(
    {
      jobId: runId,
      logId: logger.id,
      logPath: logger.filePath,
      model,
      provider,
      status: "running",
    },
    { status: 202 },
  );
}
