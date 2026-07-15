import { supabaseServer } from "./supabase-server";

const SOURCE_HTML_BUCKET = "audit-source-html";

/**
 * Stores the original self-contained HTML upload for an enhancement run.
 * Grounds the re-LLM revise flow in the true source instead of only the AI's
 * prior interpretation, and gives provenance for debugging.
 */
export async function uploadSourceHtml(
  runId: string,
  html: string,
): Promise<string> {
  const objectPath = `${runId}.html`;
  const { error } = await supabaseServer.storage
    .from(SOURCE_HTML_BUCKET)
    .upload(objectPath, html, {
      contentType: "text/html",
      upsert: true,
    });

  if (error) {
    throw new Error(`Failed to upload source HTML: ${error.message}`);
  }

  return objectPath;
}

export async function getSourceHtml(objectPath: string): Promise<string> {
  const { data, error } = await supabaseServer.storage
    .from(SOURCE_HTML_BUCKET)
    .download(objectPath);

  if (error || !data) {
    throw new Error(
      `Failed to download source HTML: ${error?.message ?? "not found"}`,
    );
  }

  return data.text();
}

const BRANDED_HTML_BUCKET = "audit-branded-html";

/**
 * Stores the brand-CSS-injected HTML for the direct (no-LLM) HTML audit
 * pipeline. objectPath mirrors the serving route's path segments
 * (`clientSlug/dateSlug/auditSlug.html`) so the bucket is human-browsable.
 */
export async function uploadBrandedHtml(
  objectPath: string,
  html: string,
): Promise<void> {
  const { error } = await supabaseServer.storage
    .from(BRANDED_HTML_BUCKET)
    .upload(objectPath, html, {
      contentType: "text/html",
      upsert: true,
    });

  if (error) {
    throw new Error(`Failed to upload branded HTML: ${error.message}`);
  }
}

export async function getBrandedHtml(objectPath: string): Promise<string> {
  const { data, error } = await supabaseServer.storage
    .from(BRANDED_HTML_BUCKET)
    .download(objectPath);

  if (error || !data) {
    throw new Error(
      `Failed to download branded HTML: ${error?.message ?? "not found"}`,
    );
  }

  return data.text();
}

export async function deleteBrandedHtml(objectPath: string): Promise<void> {
  const { error } = await supabaseServer.storage
    .from(BRANDED_HTML_BUCKET)
    .remove([objectPath]);

  if (error) {
    console.error(`Failed to delete branded HTML "${objectPath}":`, error);
  }
}
