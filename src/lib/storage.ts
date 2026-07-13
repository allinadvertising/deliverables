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
