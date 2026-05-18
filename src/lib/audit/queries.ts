import { supabaseServer } from "@/lib/supabase-server";
import type { AuditContent } from "./types";

/**
 * Fetch an audit by its public share token.
 * Used by the public /audit?token=*** page.
 * Returns null if no audit matches or token is invalid.
 */
export async function getAuditByToken(token: string): Promise<{
  id: string;
  title: string;
  content: AuditContent | null;
  file_path: string;
  clientName: string;
} | null> {
  const { data } = await supabaseServer
    .from("audits")
    .select("id, title, content, file_path, client_name:clients(name)")
    .eq("share_token", token)
    .maybeSingle();

  if (!data) return null;

  return {
    id: data.id as string,
    title: data.title as string,
    content: (data.content as AuditContent) ?? null,
    file_path: data.file_path as string,
    clientName:
      (data.client_name as { name?: string } | null)?.name ??
      (data.title as string),
  };
}

/**
 * Fetch audit content as typed JSON.
 * Returns null if the audit has no content JSON (not yet migrated).
 */
export async function getAuditContentByToken(
  token: string,
): Promise<AuditContent | null> {
  const { data } = await supabaseServer
    .from("audits")
    .select("content")
    .eq("share_token", token)
    .maybeSingle();

  if (!data?.content) return null;

  const content = data.content as AuditContent;

  // Basic structural validation
  if (
    typeof content.meta !== "object" ||
    !content.meta ||
    typeof content.executiveSummary !== "object" ||
    !Array.isArray(content.actionItems)
  ) {
    return null;
  }

  return content;
}

/**
 * Fetch an audit by ID, verifying ownership.
 * Used by the authenticated /dashboard/audits/[id] page.
 * Returns null if not found or not owned by userId.
 */
export async function getAuditById(
  id: string,
  userId: string,
): Promise<{
  id: string;
  title: string;
  content: AuditContent | null;
  file_path: string;
  clientName: string;
} | null> {
  const { data } = await supabaseServer
    .from("audits")
    .select("id, title, content, file_path, owner_id, client_name:clients(name)")
    .eq("id", id)
    .maybeSingle();

  if (!data) return null;

  // Ownership check: user must own the audit (or it must be unowned legacy)
  if (data.owner_id && data.owner_id !== userId) return null;

  return {
    id: data.id as string,
    title: data.title as string,
    content: (data.content as AuditContent) ?? null,
    file_path: data.file_path as string,
    clientName:
      (data.client_name as { name?: string } | null)?.name ??
      (data.title as string),
  };
}
