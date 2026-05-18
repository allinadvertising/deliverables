import { supabaseServer } from "./supabase-server";
import type { AuditDisplay, EnhancementStatus } from "./db-types";

// ── Audit listing (replaces filesystem scan) ──────────────────────

export async function getAudits(userId?: string): Promise<AuditDisplay[]> {
  let query = supabaseServer
    .from("audits")
    .select(
      `
      id,
      title,
      audit_type,
      year,
      month,
      file_path,
      file_size,
      share_token,
      created_at,
      updated_at,
      owner_id,
      clients ( slug, name ),
      audit_views ( count )
    `,
    );

  // Filter by owner_id when a user is authenticated.
  // Also include audits with NULL owner_id (existing audits before backfill).
  if (userId) {
    query = query.or(`owner_id.eq.${userId},owner_id.is.null`);
  }

  const { data, error } = await query.order("updated_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch audits from Supabase:", error);
    return [];
  }

  return (data ?? []).map((row: Record<string, unknown>) => {
    const client =
      (row.clients as { slug?: string; name?: string } | null) ?? {};
    const clientSlug = (client.slug ?? "general") as string;
    const clientName = (client.name ?? clientSlug) as string;
    const auditType = (row.audit_type ?? "audit") as string;
    const title = (row.title ?? auditType) as string;
    const month = (row.month ?? "") as string;
    const year = (row.year ?? 0) as number;
    const filePath = (row.file_path ?? "") as string;
    const fileSize = (row.file_size ?? 0) as number;
    const updatedAt = (row.updated_at ?? row.created_at ?? "") as string;
    const updatedTime = new Date(updatedAt).getTime();
    const pathLabel = [clientSlug, String(year), month ?? ""]
      .filter(Boolean)
      .join(" / ");

    return {
      id: row.id as string,
      href: "/" + filePath.replace(/\\/g, "/"),
      title: titleCase(title),
      client: clientName.toUpperCase(),
      period: [titleCase(month), String(year)].filter(Boolean).join(" ") || "Current",
      pathLabel,
      updatedAt: formatDate(updatedAt),
      updatedTime,
      size: formatBytes(fileSize),
      hasToken: Boolean(row.share_token),
      views: extractViewCount(row.audit_views),
    } satisfies AuditDisplay;
  });
}

// ── Client management ─────────────────────────────────────────────

export async function upsertClient(params: {
  slug: string;
  name: string;
}): Promise<string> {
  const { data, error } = await supabaseServer
    .from("clients")
    .upsert(
      { slug: params.slug, name: params.name, updated_at: new Date().toISOString() },
      { onConflict: "slug" },
    )
    .select("id")
    .single();

  if (error) {
    throw new Error(`Failed to upsert client "${params.slug}": ${error.message}`);
  }

  return data.id as string;
}

// ── Audit CRUD ────────────────────────────────────────────────────

export async function insertAudit(params: {
  clientId: string;
  auditType: string;
  title: string;
  year: number;
  month: string;
  filePath: string;
  fileSize: number;
  ownerId?: string;
}): Promise<string> {
  const row: Record<string, unknown> = {
    client_id: params.clientId,
    audit_type: params.auditType,
    title: params.title,
    year: params.year,
    month: params.month,
    file_path: params.filePath,
    file_size: params.fileSize,
  };

  if (params.ownerId) {
    row.owner_id = params.ownerId;
  }

  const { data, error } = await supabaseServer
    .from("audits")
    .insert(row)
    .select("id")
    .single();

  if (error) {
    throw new Error(`Failed to insert audit: ${error.message}`);
  }

  return data.id as string;
}

export async function deleteAuditByFilePath(filePath: string): Promise<void> {
  const { error } = await supabaseServer
    .from("audits")
    .delete()
    .eq("file_path", filePath);

  if (error) {
    console.error(`Failed to delete audit "${filePath}":`, error);
  }
}

// ── Enhancement runs ──────────────────────────────────────────────

export async function insertEnhancementRun(params: {
  auditId: string | null;
  provider: "openai" | "deepseek";
  model: string;
  status: EnhancementStatus;
  logId: string | null;
  outputPath: string | null;
  errorMessage?: string | null;
}): Promise<string> {
  const { data, error } = await supabaseServer
    .from("enhancement_runs")
    .insert({
      audit_id: params.auditId,
      provider: params.provider,
      model: params.model,
      status: params.status,
      log_id: params.logId,
      output_path: params.outputPath,
      error_message: params.errorMessage ?? null,
      completed_at:
        params.status === "completed" || params.status === "failed"
          ? new Date().toISOString()
          : null,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Failed to insert enhancement run:", error);
    throw new Error(`Failed to insert enhancement run: ${error.message}`);
  }

  return data.id as string;
}

export async function updateEnhancementRun(
  id: string,
  params: {
    auditId?: string | null;
    status?: EnhancementStatus;
    outputPath?: string | null;
    errorMessage?: string | null;
  },
): Promise<void> {
  const update: Record<string, unknown> = {};

  if (params.auditId !== undefined) update.audit_id = params.auditId;
  if (params.status !== undefined) {
    update.status = params.status;
    if (params.status === "completed" || params.status === "failed") {
      update.completed_at = new Date().toISOString();
    }
  }
  if (params.outputPath !== undefined) update.output_path = params.outputPath;
  if (params.errorMessage !== undefined) update.error_message = params.errorMessage;

  if (Object.keys(update).length === 0) return;

  const { error } = await supabaseServer
    .from("enhancement_runs")
    .update(update)
    .eq("id", id);

  if (error) {
    console.error(`Failed to update enhancement run "${id}":`, error);
  }
}

// ── Helpers ───────────────────────────────────────────────────────

function titleCase(value: string): string {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(iso));
}

function extractViewCount(views: unknown): number {
  if (Array.isArray(views) && views.length > 0) {
    const first = views[0] as { count?: number };
    return typeof first.count === "number" ? first.count : 0;
  }
  return 0;
}
