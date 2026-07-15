import { supabaseServer } from "./supabase-server";
import { deleteBrandedHtml } from "./storage";
import type {
  AuditDisplay,
  AuditSourceType,
  EnhancementJobKind,
  EnhancementStatus,
  HtmlDeliverableDisplay,
} from "./db-types";

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
      content,
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
    const content = (row.content ?? null) as
      | { meta?: { supportingFile?: unknown }; schemaVersion?: unknown }
      | null;
    const supportingWorkbookLink =
      typeof content?.meta?.supportingFile === "string"
        ? content.meta.supportingFile
        : null;
    const sourceType: AuditSourceType =
      content?.schemaVersion === 3
        ? "html"
        : content?.schemaVersion === 2
          ? "markdown"
          : "legacy";
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
      shareToken: (row.share_token as string | null) ?? null,
      sourceType,
      supportingWorkbookLink,
      views: extractViewCount(row.audit_views),
    } satisfies AuditDisplay;
  });
}

// ── Client management ─────────────────────────────────────────────

export async function upsertClient(params: {
  slug: string;
  name: string;
}): Promise<string> {
  const { data: existing } = await supabaseServer
    .from("clients")
    .select("id")
    .eq("slug", params.slug)
    .maybeSingle();

  if (existing?.id) {
    return existing.id as string;
  }

  const { data, error } = await supabaseServer
    .from("clients")
    .insert({ slug: params.slug, name: params.name })
    .select("id")
    .single();

  if (error) {
    // Race condition: another request inserted the same slug between our SELECT and INSERT.
    // Re-fetch and return the winner's id.
    if (error.code === "23505") {
      const { data: retry } = await supabaseServer
        .from("clients")
        .select("id")
        .eq("slug", params.slug)
        .maybeSingle();

      if (retry?.id) return retry.id as string;
    }

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
  content?: Record<string, unknown>;
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

  if (params.content) {
    row.content = params.content;
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

export async function getAuditContent(auditId: string): Promise<{
  content: Record<string, unknown> | null;
  ownerId: string | null;
} | null> {
  const { data, error } = await supabaseServer
    .from("audits")
    .select("content, owner_id")
    .eq("id", auditId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return {
    content: (data.content as Record<string, unknown> | null) ?? null,
    ownerId: (data.owner_id as string | null) ?? null,
  };
}

export async function updateAuditContent(
  auditId: string,
  content: Record<string, unknown>,
): Promise<void> {
  const { error } = await supabaseServer
    .from("audits")
    .update({ content, updated_at: new Date().toISOString() })
    .eq("id", auditId);

  if (error) {
    throw new Error(`Failed to update audit content: ${error.message}`);
  }
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
  jobKind?: EnhancementJobKind;
  instructions?: string | null;
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
      job_kind: params.jobKind ?? "create",
      instructions: params.instructions ?? null,
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

export async function getEnhancementRun(id: string) {
  const { data, error } = await supabaseServer
    .from("enhancement_runs")
    .select(
      `
      id,
      audit_id,
      provider,
      model,
      status,
      log_id,
      output_path,
      error_message,
      created_at,
      completed_at,
      audits (
        title,
        audit_type,
        clients ( name )
      )
    `,
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch enhancement run: ${error.message}`);
  }

  return data as
    | (Record<string, unknown> & {
        audits?: {
          audit_type?: string;
          clients?: { name?: string } | null;
          title?: string;
        } | null;
      })
    | null;
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

// ── Direct HTML deliverables (no-LLM pipeline) ──────────────────────

/**
 * Inserts a row for the direct HTML pipeline, retrying with a numeric
 * suffix on the audit slug if (client_slug, date_slug, audit_slug) already
 * exists — mirrors the race/collision handling in upsertClient() above.
 */
export async function insertHtmlDeliverable(params: {
  clientId: string;
  clientSlug: string;
  auditSlug: string;
  dateSlug: string;
  title: string;
  storagePath: string;
  fileSize: number;
  ownerId?: string;
}): Promise<{ id: string; auditSlug: string }> {
  const maxAttempts = 10;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const auditSlug =
      attempt === 0 ? params.auditSlug : `${params.auditSlug}-${attempt + 1}`;

    const { data, error } = await supabaseServer
      .from("html_deliverables")
      .insert({
        audit_slug: auditSlug,
        client_id: params.clientId,
        client_slug: params.clientSlug,
        date_slug: params.dateSlug,
        file_size: params.fileSize,
        owner_id: params.ownerId ?? null,
        storage_path: params.storagePath,
        title: params.title,
      })
      .select("id")
      .single();

    if (!error) {
      return { auditSlug, id: data.id as string };
    }

    // Unique-violation on (client_slug, date_slug, audit_slug): retry with
    // the next suffix instead of overwriting or failing the upload.
    if (error.code !== "23505") {
      throw new Error(`Failed to insert HTML deliverable: ${error.message}`);
    }
  }

  throw new Error(
    "Failed to insert HTML deliverable: exhausted slug collision retries.",
  );
}

export async function getHtmlDeliverableBySlug(params: {
  clientSlug: string;
  dateSlug: string;
  auditSlug: string;
}): Promise<{ storagePath: string; title: string } | null> {
  const { data, error } = await supabaseServer
    .from("html_deliverables")
    .select("storage_path, title")
    .eq("client_slug", params.clientSlug)
    .eq("date_slug", params.dateSlug)
    .eq("audit_slug", params.auditSlug)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return { storagePath: data.storage_path as string, title: data.title as string };
}

export async function listHtmlDeliverables(
  userId?: string,
): Promise<HtmlDeliverableDisplay[]> {
  let query = supabaseServer
    .from("html_deliverables")
    .select(
      `
      id,
      title,
      client_slug,
      audit_slug,
      date_slug,
      file_size,
      updated_at,
      owner_id,
      clients ( name )
    `,
    );

  if (userId) {
    query = query.or(`owner_id.eq.${userId},owner_id.is.null`);
  }

  const { data, error } = await query.order("updated_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch HTML deliverables from Supabase:", error);
    return [];
  }

  return (data ?? []).map((row: Record<string, unknown>) => {
    const client = (row.clients as { name?: string } | null) ?? {};
    const clientSlug = row.client_slug as string;
    const dateSlug = row.date_slug as string;
    const auditSlug = row.audit_slug as string;

    return {
      client: (client.name ?? clientSlug) as string,
      dateSlug,
      id: row.id as string,
      size: formatBytes((row.file_size ?? 0) as number),
      title: row.title as string,
      updatedAt: formatDate(row.updated_at as string),
      url: `/html-audits/${clientSlug}/${dateSlug}/${auditSlug}`,
    } satisfies HtmlDeliverableDisplay;
  });
}

export async function deleteHtmlDeliverable(
  id: string,
  userId?: string,
): Promise<{ ok: true } | { ok: false; error: string; status: number }> {
  const { data: row } = await supabaseServer
    .from("html_deliverables")
    .select("owner_id, storage_path")
    .eq("id", id)
    .maybeSingle();

  if (!row) {
    return { error: "HTML deliverable not found.", ok: false, status: 404 };
  }

  if (row.owner_id && row.owner_id !== userId) {
    return {
      error: "You can only delete your own HTML deliverables.",
      ok: false,
      status: 403,
    };
  }

  const { error } = await supabaseServer
    .from("html_deliverables")
    .delete()
    .eq("id", id);

  if (error) {
    return {
      error: "Failed to delete HTML deliverable.",
      ok: false,
      status: 500,
    };
  }

  await deleteBrandedHtml(row.storage_path as string);

  return { ok: true };
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
