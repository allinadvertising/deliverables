import { supabaseServer } from "@/lib/supabase-server";
import { createClient } from "@/lib/supabase-middleware";
import type { AuditContent } from "@/lib/audit/types";

export const runtime = "nodejs";

/**
 * PATCH /api/audits  { auditId, supportingWorkbookLink }
 * Updates the audit's supporting workbook link only.
 */
export async function PATCH(request: Request) {
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
  let supportingWorkbookLink: string | null;

  try {
    const payload = (await request.json()) as {
      auditId?: unknown;
      supportingWorkbookLink?: unknown;
    };

    auditId = typeof payload.auditId === "string" ? payload.auditId : "";
    const rawLink =
      typeof payload.supportingWorkbookLink === "string"
        ? payload.supportingWorkbookLink.trim()
        : "";
    supportingWorkbookLink = rawLink ? normalizeWorkbookUrl(rawLink) : null;

    if (!auditId) {
      return Response.json(
        { error: "Missing auditId." },
        { status: 400 },
      );
    }

    if (rawLink && !supportingWorkbookLink) {
      return Response.json(
        { error: "Workbook link must be a valid http or https URL." },
        { status: 400 },
      );
    }
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { data: audit } = await supabaseServer
    .from("audits")
    .select("owner_id, content")
    .eq("id", auditId)
    .maybeSingle();

  if (!audit) {
    return Response.json({ error: "Audit not found." }, { status: 404 });
  }

  if (audit.owner_id && audit.owner_id !== user.id) {
    return Response.json(
      { error: "You can only edit your own audits." },
      { status: 403 },
    );
  }

  const content = audit.content as AuditContent | null;

  if (!content?.meta) {
    return Response.json(
      { error: "This audit does not have editable JSON content." },
      { status: 400 },
    );
  }

  const updatedContent: AuditContent = {
    ...content,
    meta: {
      ...content.meta,
      supportingFile: supportingWorkbookLink,
    },
  };

  const { error } = await supabaseServer
    .from("audits")
    .update({
      content: updatedContent,
      updated_at: new Date().toISOString(),
    })
    .eq("id", auditId);

  if (error) {
    console.error("Failed to update audit:", error);

    return Response.json(
      { error: "Failed to update audit." },
      { status: 500 },
    );
  }

  return Response.json({
    ok: true,
    supportingWorkbookLink,
  });
}

/**
 * DELETE /api/audits  { auditId }
 * Deletes an audit from Supabase. The authenticated user must own the audit.
 * File cleanup from public/ is no longer performed (HTML pipeline deprecated).
 */
export async function DELETE(request: Request) {
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

  try {
    const payload = (await request.json()) as { auditId?: unknown };
    auditId = typeof payload.auditId === "string" ? payload.auditId : "";

    if (!auditId) {
      return Response.json(
        { error: "Missing auditId." },
        { status: 400 },
      );
    }
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Verify ownership
  const { data: audit } = await supabaseServer
    .from("audits")
    .select("owner_id, title")
    .eq("id", auditId)
    .maybeSingle();

  if (!audit) {
    return Response.json({ error: "Audit not found." }, { status: 404 });
  }

  // Allow deletion if owner_id is NULL (legacy) or matches current user
  if (audit.owner_id && audit.owner_id !== user.id) {
    return Response.json(
      { error: "You can only delete your own audits." },
      { status: 403 },
    );
  }

  const { error } = await supabaseServer
    .from("audits")
    .delete()
    .eq("id", auditId);

  if (error) {
    console.error("Failed to delete audit:", error);

    return Response.json(
      { error: "Failed to delete audit." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}

function normalizeWorkbookUrl(value: string): string | null {
  try {
    const url = new URL(value);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}
