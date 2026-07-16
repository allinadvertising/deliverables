import { createClient } from "@/lib/supabase-middleware";
import { injectBrandStyle } from "@/lib/brand-html";
import { uploadBrandedHtml } from "@/lib/storage";
import { deleteHtmlDeliverable, insertHtmlDeliverable, upsertClient } from "@/lib/db";
import { normalizeText, slugify } from "@/lib/text-utils";

export const runtime = "nodejs";

// Self-contained HTML can carry embedded assets, so match the existing
// html-enhancer.ts ceiling rather than the smaller markdown limit.
const maxInputBytes = 8 * 1024 * 1024;

/**
 * POST /api/html-audits  (multipart/form-data: file, clientName, title, date?)
 * Direct HTML pipeline: no LLM call. Brand CSS is injected into the
 * uploaded HTML and it's stored close to verbatim, servable at
 * /html-audits/<client-slug>/<mm-dd>/<audit-slug>.
 */
export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || typeof file === "string" || typeof file.arrayBuffer !== "function") {
    return Response.json(
      { error: "Upload an HTML file before publishing." },
      { status: 400 },
    );
  }

  const fileName = file.name || "deliverable.html";

  if (!/\.(html?|htm)$/i.test(fileName)) {
    return Response.json(
      { error: "Only .html and .htm files are supported." },
      { status: 400 },
    );
  }

  if (file.size > maxInputBytes) {
    return Response.json(
      { error: "HTML file is too large. Keep uploads under 8 MB." },
      { status: 413 },
    );
  }

  const clientName = normalizeText(stringValue(formData.get("clientName")));
  const title = normalizeText(stringValue(formData.get("title")));

  if (!clientName) {
    return Response.json({ error: "Client name is required." }, { status: 400 });
  }

  if (!title) {
    return Response.json({ error: "Audit title is required." }, { status: 400 });
  }

  const clientSlug = slugify(clientName);
  const auditSlug = slugify(title);

  if (!clientSlug || !auditSlug) {
    return Response.json(
      { error: "Client name and title must contain at least one letter or number." },
      { status: 400 },
    );
  }

  const { dateLabel, dateSlug } = resolveDate(stringValue(formData.get("date")));
  const html = Buffer.from(await file.arrayBuffer()).toString("utf8");
  const brandedHtml = injectBrandStyle(html, { clientName, dateLabel, title });
  const storagePath = `${clientSlug}/${dateSlug}/${auditSlug}.html`;

  let clientId: string;

  try {
    clientId = await upsertClient({ name: clientName, slug: clientSlug });
  } catch (error) {
    console.error("Failed to upsert client for HTML audit:", error);
    return Response.json(
      { error: "Failed to register client in database." },
      { status: 500 },
    );
  }

  try {
    await uploadBrandedHtml(storagePath, brandedHtml);
  } catch (error) {
    console.error("Failed to upload branded HTML:", error);
    return Response.json(
      { error: "Failed to store the HTML deliverable." },
      { status: 500 },
    );
  }

  try {
    const { auditSlug: finalAuditSlug } = await insertHtmlDeliverable({
      auditSlug,
      clientId,
      clientSlug,
      dateSlug,
      fileSize: Buffer.byteLength(brandedHtml, "utf8"),
      ownerId: user.id,
      storagePath,
      title,
    });

    return Response.json({
      url: `/html-audits/${clientSlug}/${dateSlug}/${finalAuditSlug}`,
    });
  } catch (error) {
    console.error("Failed to insert HTML deliverable:", error);
    return Response.json(
      { error: "Failed to publish the HTML deliverable." },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/html-audits  { id }
 */
export async function DELETE(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  let id: string;

  try {
    const payload = (await request.json()) as { id?: unknown };
    id = typeof payload.id === "string" ? payload.id : "";

    if (!id) {
      return Response.json({ error: "Missing id." }, { status: 400 });
    }
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = await deleteHtmlDeliverable(id, user.id);

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ ok: true });
}

function stringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}

/**
 * Accepts an optional "YYYY-MM-DD" date input field; defaults to today.
 * Returns both the "mm-dd" route slug and a human-readable label for the
 * branded header (e.g. "July 15, 2026").
 */
function resolveDate(dateInput: string): { dateLabel: string; dateSlug: string } {
  const trimmed = dateInput.trim();
  const explicit = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (explicit) {
    const [, year, month, day] = explicit;
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

    return {
      dateLabel: new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
        year: "numeric",
      }).format(date),
      dateSlug: `${month}-${day}`,
    };
  }

  const now = new Date();
  const slugParts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "America/Bogota",
  }).formatToParts(now);
  const month = slugParts.find((part) => part.type === "month")?.value ?? "01";
  const day = slugParts.find((part) => part.type === "day")?.value ?? "01";

  return {
    dateLabel: new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      timeZone: "America/Bogota",
      year: "numeric",
    }).format(now),
    dateSlug: `${month}-${day}`,
  };
}
