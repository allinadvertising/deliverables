import { supabaseServer } from "@/lib/supabase-server";
import { createClient } from "@/lib/supabase-middleware";

export const runtime = "nodejs";

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
