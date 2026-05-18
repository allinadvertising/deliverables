import { supabaseServer } from "@/lib/supabase-server";
import { createClient } from "@/lib/supabase-middleware";

export const runtime = "nodejs";

/**
 * Share token management.
 *
 * POST   /api/share-token  { auditId }   → generate new token
 * DELETE /api/share-token  { auditId }   → revoke token
 * PUT    /api/share-token  { auditId }   → regenerate (new token, old invalidated)
 */
export async function POST(request: Request) {
  return handleTokenAction(request, "generate");
}

export async function DELETE(request: Request) {
  return handleTokenAction(request, "revoke");
}

export async function PUT(request: Request) {
  return handleTokenAction(request, "regenerate");
}

async function handleTokenAction(
  request: Request,
  action: "generate" | "revoke" | "regenerate",
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
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
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Verify ownership
  const { data: audit } = await supabaseServer
    .from("audits")
    .select("owner_id, share_token, title")
    .eq("id", auditId)
    .maybeSingle();

  if (!audit) {
    return Response.json({ error: "Audit not found." }, { status: 404 });
  }

  if (audit.owner_id !== user.id) {
    return Response.json(
      { error: "You can only manage tokens for your own audits." },
      { status: 403 },
    );
  }

  if (action === "revoke") {
    if (!audit.share_token) {
      return Response.json(
        { error: "No share token to revoke." },
        { status: 400 },
      );
    }

    const { error } = await supabaseServer
      .from("audits")
      .update({ share_token: null, share_token_created_at: null })
      .eq("id", auditId);

    if (error) {
      console.error("Failed to revoke share token:", error);

      return Response.json(
        { error: "Failed to revoke share token." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true, action: "revoked" });
  }

  // generate or regenerate
  const token = crypto.randomUUID();

  const { error } = await supabaseServer
    .from("audits")
    .update({
      share_token: token,
      share_token_created_at: new Date().toISOString(),
    })
    .eq("id", auditId);

  if (error) {
    console.error("Failed to generate share token:", error);

    return Response.json(
      { error: "Failed to generate share token." },
      { status: 500 },
    );
  }

  return Response.json({
    ok: true,
    action: action === "regenerate" ? "regenerated" : "generated",
    token,
  });
}
