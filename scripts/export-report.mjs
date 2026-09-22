/**
 * export-report.mjs
 * ------------------------------------------------------------------
 * Export a rendered SEO report route to a single self-contained .html
 * file that opens in any browser with no dev server.
 *
 * It fetches the server-rendered page, inlines the stylesheet(s) and any
 * fonts/images they reference (as data URIs), strips the Next.js runtime
 * scripts, and wires the "Print as PDF" / "Back to top" buttons with a tiny
 * vanilla handler (the React runtime is removed, so the buttons need it).
 *
 * The dev server must be running (npm run dev) so the URL is reachable.
 *
 * Usage:
 *   node scripts/export-report.mjs <reportUrl> <outputHtmlPath>
 *
 * Example:
 *   node scripts/export-report.mjs \
 *     http://localhost:3000/reports/vim-products/august-2026 \
 *     "C:/.../Claude Project Hub/VIM Products/VIM-Products-SEO-Report-August-2026.html"
 *
 * Note: the output is a point-in-time snapshot. Re-run it after editing the
 * report data to refresh the HTML.
 */
import { writeFileSync } from "node:fs";

const [, , pageUrl, outPath] = process.argv;
if (!pageUrl || !outPath) {
  console.error("usage: node scripts/export-report.mjs <url> <outPath>");
  process.exit(1);
}
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
  return "application/octet-stream";
}

let html = await txt(pageUrl);

// 1. Collect stylesheet hrefs (rel before or after href)
const cssHrefs = new Set();
for (const m of html.matchAll(/<link\b[^>]*\brel="stylesheet"[^>]*>/g)) {
  const h = m[0].match(/\bhref="([^"]+)"/);
  if (h) cssHrefs.add(h[1]);
}

// 2. Fetch + combine CSS, inlining fonts/images referenced via url()
let combinedCss = "";
for (const href of cssHrefs) {
  const cssUrl = new URL(href, ORIGIN).href;
  let css = await txt(cssUrl);
  const assetUrls = new Set(
    [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)]
      .map((m) => m[1])
      .filter((u) => !u.startsWith("data:")),
  );
  for (const u of assetUrls) {
    try {
      const abs = new URL(u, cssUrl).href;
      if (new URL(abs).origin !== ORIGIN) continue;
      const b = await buf(abs);
      const dataUri = "data:" + mime(abs) + ";base64," + b.toString("base64");
      css = css.split(u).join(dataUri);
    } catch {
      /* leave original url */
    }
  }
  combinedCss += "\n/* " + href + " */\n" + css;
}

// 3. Strip Next scripts + preload/modulepreload/prefetch/stylesheet links
html = html.replace(/<script\b[\s\S]*?<\/script>/g, "");
html = html.replace(/<script\b[^>]*\/>/g, "");
html = html.replace(
  /<link\b[^>]*\brel="(?:preload|modulepreload|prefetch|stylesheet)"[^>]*>/g,
  "",
);

// 4. Inline <img> sources
const imgSrcs = new Set(
  [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((s) => !s.startsWith("data:")),
);
for (const s of imgSrcs) {
  try {
    const abs = new URL(s, ORIGIN).href;
    if (new URL(abs).origin !== ORIGIN) continue;
    const b = await buf(abs);
    const dataUri = "data:" + mime(abs) + ";base64," + b.toString("base64");
    html = html.split('src="' + s + '"').join('src="' + dataUri + '"');
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

writeFileSync(outPath, html);
console.log(
  "Wrote " + outPath + " (" + html.length + " bytes, CSS files: " + cssHrefs.size + ")",
);
