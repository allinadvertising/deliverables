import * as cheerio from "cheerio";

// Same brand tokens as src/app/globals.css (--brand-blue, --brand-gold,
// etc.), namespaced under --aia- so they can't collide with variables the
// uploaded deliverable already defines on :root.
const BRAND_FONT_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com">' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">';

const BRAND_STYLE = `
<style id="aia-brand-overrides">
  :root {
    --aia-brand-blue: #2f65a7;
    --aia-brand-blue-dark: #183b68;
    --aia-brand-gold: #f6b328;
    --aia-ink: #172033;
    --aia-muted: #64748b;
    --aia-line: #e2e8f0;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    color: var(--aia-ink) !important;
  }

  a {
    color: var(--aia-brand-blue) !important;
  }

  a:hover {
    color: var(--aia-brand-blue-dark) !important;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--aia-ink) !important;
  }

  table th,
  thead th {
    background: var(--aia-brand-blue-dark) !important;
    color: #ffffff !important;
  }

  hr {
    border-color: var(--aia-line) !important;
  }

  button,
  input[type="submit"],
  input[type="button"],
  .btn,
  .button {
    background: var(--aia-brand-gold) !important;
    border-color: var(--aia-brand-gold) !important;
    color: var(--aia-ink) !important;
  }
</style>
`;

/**
 * Injects the All In Advertising brand stylesheet into an uploaded HTML
 * deliverable's <head> (creating one if the upload lacks it), without
 * altering the document's own structure or content. Used by the direct
 * (no-LLM) HTML audit pipeline — the deliverable is served close to
 * verbatim, just re-skinned to match brand colors/typography.
 */
export function injectBrandStyle(html: string): string {
  const $ = cheerio.load(html);

  if ($("head").length === 0) {
    $("html").prepend("<head></head>");
  }

  $("head").append(BRAND_FONT_LINK + BRAND_STYLE);

  return $.html();
}
