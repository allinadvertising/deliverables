/**
 * export-report.mjs
 * ------------------------------------------------------------------
 * Export a rendered deliverable route (SEO report, kickoff deck, analysis
 * suite page) to a single self-contained .html file that opens in any
 * browser with no server.
 *
 * It fetches the server-rendered page, inlines the stylesheet(s) and the
 * fonts/images they reference as data URIs, drops non-Latin font subsets,
 * strips the Next.js runtime, and rewires the "Print as PDF" / "Back to top"
 * buttons with a tiny vanilla handler (React is gone, so they need one).
 *
 * The dev or prod server must be running (`npm run dev`) so the URL resolves.
 *
 * Usage:
 *   node scripts/export-report.mjs <route|url> <outputHtmlPath> [baseUrl]
 *
 * Examples:
 *   node scripts/export-report.mjs /reports/penelope/aug-2026 \
 *     public/penelope/2026/august/penelope-seo-report-august-2026.html
 *
 *   node scripts/export-report.mjs http://localhost:3000/kickoff/penelope/v2 \
 *     public/penelope/2026/august/penelope-seo-kickoff.html
 *
 * In Git Bash, prefix with MSYS_NO_PATHCONV=1 so the leading "/" of a route
 * is not rewritten into a Windows path, and pass a Windows-style output path
 * (C:/...) — Node does not understand /c/... MSYS paths.
 *
 * Note: the output is a point-in-time snapshot. Re-run it after editing the
 * deliverable's data module.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const [, , target, outPath, baseUrl = "http://localhost:3000"] = process.argv;
if (!target || !outPath) {
  console.error(
    "usage: node scripts/export-report.mjs <route|url> <outputHtmlPath> [baseUrl]",
  );
  process.exit(1);
}

const pageUrl = URL.canParse(target) ? target : new URL(target, baseUrl).href;
const ORIGIN = new URL(pageUrl).origin;

async function txt(u) {
  const r = await fetch(u);
  if (!r.ok) throw new Error("fetch " + u + " -> " + r.status);
  return await r.text();
}
async function buf(u) {
  const r = await fetch(u);
  if (!r.ok) throw new Error("fetch " + u + " -> " + r.status);
  return Buffer.from(await r.arrayBuffer());
}
function mime(u) {
  u = u.toLowerCase().split("?")[0];
  if (u.endsWith(".woff2")) return "font/woff2";
  if (u.endsWith(".woff")) return "font/woff";
  if (u.endsWith(".ttf")) return "font/ttf";
  if (u.endsWith(".otf")) return "font/otf";
  if (u.endsWith(".svg")) return "image/svg+xml";
  if (u.endsWith(".png")) return "image/png";
  if (u.endsWith(".jpg") || u.endsWith(".jpeg")) return "image/jpeg";
  if (u.endsWith(".gif")) return "image/gif";
  if (u.endsWith(".webp")) return "image/webp";
  if (u.endsWith(".ico")) return "image/x-icon";
  return "application/octet-stream";
}
async function dataUri(abs) {
  return "data:" + mime(abs) + ";base64," + (await buf(abs)).toString("base64");
}

let html = await txt(pageUrl);

// 1. Collect stylesheet hrefs (rel before or after href)
const cssHrefs = new Set();
for (const m of html.matchAll(/<link\b[^>]*\brel="stylesheet"[^>]*>/g)) {
  const h = m[0].match(/\bhref="([^"]+)"/);
  if (h) cssHrefs.add(h[1]);
}

// 2. Fetch + combine CSS, keeping only Latin font subsets (the copy is
//    English, and the other subsets multiply the file size), then inlining
//    whatever the surviving rules reference via url().
let combinedCss = "";
let droppedFaces = 0;
for (const href of cssHrefs) {
  const cssUrl = new URL(href, ORIGIN).href;
  let css = await txt(cssUrl);

  css = css.replace(/@font-face\s*{[^}]*}/g, (rule) => {
    const range = rule.match(/unicode-range:\s*([^;}]*)/);
    if (!range || /U\+(?:\?\?|0+-0*FF)(?=,|\s*$)/i.test(range[1])) return rule;
    droppedFaces += 1;
    return "";
  });

  const assetUrls = new Set(
    [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)]
      .map((m) => m[1])
      .filter((u) => !u.startsWith("data:") && !u.startsWith("#")),
  );
  for (const u of assetUrls) {
    try {
      const abs = new URL(u, cssUrl).href;
      if (new URL(abs).origin !== ORIGIN) continue;
      css = css.split(u).join(await dataUri(abs));
    } catch {
      /* leave original url */
    }
  }
  combinedCss += "\n/* " + href + " */\n" + css;
}

// 3. Strip the Next.js runtime: scripts, preloads, dev overlay, streaming
//    templates and the hidden markers React leaves behind.
html = html
  .replace(/<script\b[\s\S]*?<\/script>/g, "")
  .replace(/<script\b[^>]*\/>/g, "")
  .replace(
    /<link\b[^>]*\brel="(?:preload|modulepreload|prefetch|expect|stylesheet)"[^>]*>/g,
    "",
  )
  .replace(/<nextjs-portal[\s\S]*?<\/nextjs-portal>/g, "")
  .replace(/<template\b[^>]*>[\s\S]*?<\/template>/g, "")
  .replace(/\s+hidden=""\s+id="S:\d+"/g, "");

// 4. Inline <img> sources, then drop srcset so the browser cannot go back to
//    the server for a responsive variant of an image we just embedded.
const imgSrcs = new Set(
  [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((s) => !s.startsWith("data:")),
);
for (const s of imgSrcs) {
  try {
    const abs = new URL(s, ORIGIN).href;
    if (new URL(abs).origin !== ORIGIN) continue;
    html = html.split('src="' + s + '"').join('src="' + (await dataUri(abs)) + '"');
  } catch {
    /* leave */
  }
}
html = html.replace(/\ssrcset="[^"]*"/g, "");

// 4b. Inline the favicon so the tab icon survives offline too.
for (const m of html.matchAll(
  /<link\b[^>]*\brel="(?:icon|shortcut icon|apple-touch-icon)"[^>]*>/g,
)) {
  const h = m[0].match(/\bhref="([^"]+)"/);
  if (!h || h[1].startsWith("data:")) continue;
  try {
    const abs = new URL(h[1], ORIGIN).href;
    if (new URL(abs).origin !== ORIGIN) continue;
    html = html
      .split('href="' + h[1] + '"')
      .join('href="' + (await dataUri(abs)) + '"');
  } catch {
    /* leave */
  }
}

// 5. Inject combined CSS into <head> and a tiny handler for the buttons
const styleTag = "<style>" + combinedCss + "\n</style>";
const handler =
  '<script>document.addEventListener("click",function(e){var b=e.target&&e.target.closest?e.target.closest("button"):null;if(!b)return;var a=(b.getAttribute("aria-label")||"").toLowerCase();if(a.indexOf("print")>-1){window.print();}else if(a.indexOf("back to top")>-1){e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});}});</script>';

html = html.includes("</head>")
  ? html.replace("</head>", styleTag + "</head>")
  : styleTag + html;
html = html.includes("</body>")
  ? html.replace("</body>", handler + "</body>")
  : html + handler;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, html);

const leftovers = [...html.matchAll(/(?:src|href)="(\/_next[^"]*)"/g)].map(
  (m) => m[1],
);
if (leftovers.length) {
  console.warn(
    "Warning: " +
      leftovers.length +
      " unresolved /_next references remain, e.g. " +
      leftovers[0],
  );
}
console.log(
  "Wrote " +
    outPath +
    " (" +
    Buffer.byteLength(html) +
    " bytes, CSS files: " +
    cssHrefs.size +
    ", non-Latin @font-face dropped: " +
    droppedFaces +
    ")",
);
