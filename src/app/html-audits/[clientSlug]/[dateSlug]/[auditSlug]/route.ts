import { getHtmlDeliverableBySlug } from "@/lib/db";
import { getBrandedHtml } from "@/lib/storage";

export const dynamic = "force-dynamic";

/**
 * Public client-facing viewer for the direct HTML pipeline. Serves the
 * brand-CSS-injected HTML byte-for-byte as a real text/html response
 * (not piped through React) so the original deliverable renders
 * unmodified. Same trust model as the public /audit?token=xxx viewer —
 * no auth required — but note the path itself (client/date/slug) is
 * human-guessable rather than an unguessable token.
 */
export async function GET(
  _request: Request,
  { params }: RouteContext<"/html-audits/[clientSlug]/[dateSlug]/[auditSlug]">,
) {
  const { clientSlug, dateSlug, auditSlug } = await params;

  const record = await getHtmlDeliverableBySlug({
    auditSlug,
    clientSlug,
    dateSlug,
  });

  if (!record) {
    return new Response("Not found", { status: 404 });
  }

  const html = await getBrandedHtml(record.storagePath).catch(() => null);

  if (html === null) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
