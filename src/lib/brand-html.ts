import * as cheerio from "cheerio";

export type BrandContext = {
  clientName: string;
  dateLabel: string;
  title: string;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const LOGO_URL = `${SITE_URL}/all-in-advertising-logo.svg`;

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
    --aia-brand-blue-light: #eaf2fb;
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

  ::selection {
    background: var(--aia-brand-gold);
    color: var(--aia-ink);
  }

  blockquote {
    border-left-color: var(--aia-brand-gold) !important;
  }
</style>
`;

/**
 * Injects the All In Advertising brand stylesheet, a header/footer, and a
 * favicon/title into an uploaded HTML deliverable, without altering the
 * document's own content. Used by the direct (no-LLM) HTML audit pipeline —
 * the deliverable is published close to verbatim, just re-skinned.
 */
export function injectBrandStyle(html: string, context: BrandContext): string {
  const $ = cheerio.load(html);

  if ($("head").length === 0) {
    $("html").prepend("<head></head>");
  }

  const cssText = $("style")
    .toArray()
    .map((el) => $(el).text())
    .join("\n");

  $("head").append(
    BRAND_FONT_LINK +
      BRAND_STYLE +
      buildThemeVariableOverrideStyle(cssText) +
      `<link rel="icon" href="${escapeHtml(LOGO_URL)}">`,
  );

  const existingTitle = $("title").first().text().trim();

  if (!existingTitle) {
    const brandedTitle = `${context.clientName} — ${context.title} | All In Advertising`;

    if ($("title").length === 0) {
      $("head").append(`<title>${escapeHtml(brandedTitle)}</title>`);
    } else {
      $("title").first().text(brandedTitle);
    }
  }

  $("body").prepend(buildHeader(context));
  $("body").append(buildFooter());

  return $.html();
}

function buildHeader(context: BrandContext): string {
  return `
<div id="aia-brand-header" style="align-items:center;background:#183b68;border-bottom:4px solid #f6b328;display:flex;font-family:'Inter',system-ui,-apple-system,sans-serif;gap:16px;justify-content:space-between;padding:14px 24px;">
  <img alt="All In Advertising" src="${escapeHtml(LOGO_URL)}" style="filter:brightness(0) invert(1);height:28px;width:auto;" />
  <span style="color:#eaf2fb;font-size:13px;font-weight:600;letter-spacing:0.02em;">
    Prepared for ${escapeHtml(context.clientName)} &middot; ${escapeHtml(context.dateLabel)}
  </span>
</div>
`;
}

function buildFooter(): string {
  const year = new Date().getFullYear();

  return `
<div id="aia-brand-footer" style="align-items:center;background:#172033;display:flex;font-family:'Inter',system-ui,-apple-system,sans-serif;gap:10px;justify-content:center;padding:18px 24px;">
  <img alt="All In Advertising" src="${escapeHtml(LOGO_URL)}" style="filter:brightness(0) invert(1);height:18px;opacity:0.9;width:auto;" />
  <span style="color:#9fb2c9;font-size:11px;">Prepared by All In Advertising &copy; ${year}</span>
</div>
`;
}

// ── Theme variable detection ────────────────────────────────────────
//
// Most uploaded deliverables define their own theme via CSS custom
// properties (e.g. --primary, --accent) referenced throughout their
// stylesheet. Overriding a handful of tag selectors misses all of that.
// Instead, find the deliverable's own color variables and override *those*
// directly, so anything the source CSS references via var(--its-own-var)
// picks up brand colors automatically. Near-neutral colors and semantic
// hues (red/orange/amber/green, reserved for status/severity indicators)
// are left untouched.

const COLOR_VARIABLE_PATTERN =
  /--([\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*[;}]/g;

function buildThemeVariableOverrideStyle(cssText: string): string {
  const overrides = new Map<string, string>();
  let match: RegExpExecArray | null;

  COLOR_VARIABLE_PATTERN.lastIndex = 0;

  while ((match = COLOR_VARIABLE_PATTERN.exec(cssText)) !== null) {
    const [, name, rawColor] = match;
    const hsl = parseColorToHsl(rawColor);

    if (!hsl || overrides.has(name)) {
      continue;
    }

    const mapped = mapReplaceableColor(hsl);

    if (mapped) {
      overrides.set(name, mapped);
    }
  }

  if (overrides.size === 0) {
    return "";
  }

  const declarations = Array.from(overrides.entries())
    .map(([name, value]) => `    --${name}: ${value};`)
    .join("\n");

  return `<style id="aia-brand-theme-vars">\n  :root {\n${declarations}\n  }\n</style>\n`;
}

/** Buckets a replaceable color by its original lightness, preserving the
 * source theme's light/dark structure (e.g. a light tint stays light) so
 * swapping it for a brand color doesn't break contrast (white-on-white). */
function mapReplaceableColor(hsl: { h: number; l: number; s: number }): string | null {
  if (hsl.s < 15) {
    return null; // near-neutral (gray/black/white) - leave alone
  }

  // Semantic hue ranges reserved for status/severity coloring - never
  // remap these, or P0/P1/P2-style or success/error indicators would break.
  const isRed = hsl.h >= 345 || hsl.h < 15;
  const isOrangeAmber = hsl.h >= 15 && hsl.h < 50;
  const isYellow = hsl.h >= 50 && hsl.h < 65;
  const isGreen = hsl.h >= 65 && hsl.h < 165;

  if (isRed || isOrangeAmber || isYellow || isGreen) {
    return null;
  }

  if (hsl.l >= 80) return "var(--aia-brand-blue-light)";
  if (hsl.l <= 30) return "var(--aia-brand-blue-dark)";
  return "var(--aia-brand-blue)";
}

function parseColorToHsl(value: string): { h: number; l: number; s: number } | null {
  const rgb = parseColorToRgb(value);

  if (!rgb) {
    return null;
  }

  return rgbToHsl(rgb.r, rgb.g, rgb.b);
}

function parseColorToRgb(value: string): { b: number; g: number; r: number } | null {
  const hexMatch = value.match(/^#([0-9a-fA-F]{3,8})$/);

  if (hexMatch) {
    let hex = hexMatch[1];

    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    if (hex.length !== 6 && hex.length !== 8) {
      return null;
    }

    return {
      b: parseInt(hex.slice(4, 6), 16),
      g: parseInt(hex.slice(2, 4), 16),
      r: parseInt(hex.slice(0, 2), 16),
    };
  }

  const rgbMatch = value.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/,
  );

  if (rgbMatch) {
    return {
      b: Number(rgbMatch[3]),
      g: Number(rgbMatch[2]),
      r: Number(rgbMatch[1]),
    };
  }

  return null;
}

function rgbToHsl(r: number, g: number, b: number): { h: number; l: number; s: number } {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;

  if (max === min) {
    return { h: 0, l: l * 100, s: 0 };
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;

  switch (max) {
    case rn:
      h = ((gn - bn) / d + (gn < bn ? 6 : 0)) * 60;
      break;
    case gn:
      h = ((bn - rn) / d + 2) * 60;
      break;
    default:
      h = ((rn - gn) / d + 4) * 60;
      break;
  }

  return { h, l: l * 100, s: s * 100 };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
