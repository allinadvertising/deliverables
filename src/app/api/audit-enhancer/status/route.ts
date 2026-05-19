import { getEnhancementRun } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const runId = new URL(request.url).searchParams.get("runId")?.trim();

  if (!runId) {
    return Response.json({ error: "Missing runId." }, { status: 400 });
  }

  const run = await getEnhancementRun(runId);

  if (!run) {
    return Response.json({ error: "Enhancement job not found." }, { status: 404 });
  }

  const audit = run.audits ?? null;
  const clientName = audit?.clients?.name ?? "";
  const auditType = audit?.audit_type ?? "";

  return Response.json({
    auditId: run.audit_id,
    auditType,
    clientName,
    error: run.error_message,
    jobId: run.id,
    logId: run.log_id,
    model: run.model,
    provider: run.provider,
    status: run.status,
    title: audit?.title ?? "",
  });
}
