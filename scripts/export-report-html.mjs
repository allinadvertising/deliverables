// Export a rendered report route to one self-contained HTML file.
//
// Usage (with `npm run dev` or `next start` running):
//   node scripts/export-report-html.mjs <route> <output.html> [baseUrl]
//   node scripts/export-report-html.mjs /reports/penelope/aug-2026 out.html http://localhost:3000
//
// Stylesheets are inlined, fonts and images become data URIs, and Next.js
// runtime scripts are removed. The print and back-to-top buttons are rewired
// with a tiny inline script so they still work without React.

import { writeFile } from "node:fs/promises";

const [route, outputPath, baseUrl = "http://localhost:3000"] = process.argv.slice(2);

if (!route || !outputPath) {
  console.error("Usage: node scripts/export-report-html.mjs <route> <output.html> [baseUrl]");
  process.exit(1);
}

const mimeTypes = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  webp: "image/webp",
  woff2: "font/woff2",
  woff: "font/woff",
  ttf: "font/ttf",
};

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} for ${url}`);
  return response.text();
}

async function toDataUri(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} for ${url}`);
  const extension = new URL(url).pathname.split(".").pop().toLowerCase();
  const mime = mimeTypes[extension] ?? response.headers.get("content-type") ?? "application/octet-stream";
  const buffer = Buffer.from(await response.arrayBuffer());
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

async function inlineCss(css, cssUrl) {
  // Keep only Latin font subsets; the report copy is English.
  css = css.replace(/@font-face\s*{[^}]*}/g, (rule) => {
    const range = rule.match(/unicode-range:\s*([^;}]*)/);
    return !range || /U\+(?:\?\?|0+-0*FF)(?=,|\s*$)/i.test(range[1]) ? rule : "";
  });

  const urls = new Set(
    [...css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)]
      .map((match) => match[1])
      .filter((value) => !value.startsWith("data:") && !value.startsWith("#")),
  );
  for (const value of urls) {
    const dataUri = await toDataUri(new URL(value, cssUrl).href);
    css = css.split(value).join(dataUri);
  }
  return css;
}

const pageUrl = new URL(route, baseUrl).href;
let html = await fetchText(pageUrl);

// Inline stylesheets.
const linkTags = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*>/g)].map((m) => m[0]);
for (const tag of linkTags) {
  const href = tag.match(/href="([^"]+)"/)[1];
  const cssUrl = new URL(href, pageUrl).href;
  const css = await inlineCss(await fetchText(cssUrl), cssUrl);
  html = html.replace(tag, () => `<style>${css}</style>`);
}

// Remove Next.js runtime: scripts, preloads, dev overlays.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
  .replace(/<link[^>]*rel="(?:preload|modulepreload|expect)"[^>]*>/g, "")
  .replace(/<nextjs-portal[\s\S]*?<\/nextjs-portal>/g, "")
  .replace(/<template\b[^>]*>[\s\S]*?<\/template>/g, "")
  .replace(/\s+hidden=""\s+id="S:\d+"/g, "");

// Inline local images.
const imageSources = new Set([...html.matchAll(/<img[^>]*\ssrc="(\/[^"]+)"/g)].map((m) => m[1]));
for (const src of imageSources) {
  const dataUri = await toDataUri(new URL(src, pageUrl).href);
  html = html.split(`src="${src}"`).join(`src="${dataUri}"`);
}

const buttonScript = `<script>
document.querySelectorAll('button[aria-label^="Print"]').forEach(function (b) { b.addEventListener("click", function () { window.print(); }); });
document.querySelectorAll('button[aria-label="Back to top"]').forEach(function (b) { b.addEventListener("click", function () { window.scrollTo({ behavior: "smooth", top: 0 }); }); });
</script>`;
html = html.replace("</body>", `${buttonScript}</body>`);

const leftovers = [...html.matchAll(/(?:src|href)="(\/_next[^"]*)"/g)].map((m) => m[1]);
if (leftovers.length) {
  console.warn(`Warning: ${leftovers.length} unresolved /_next references remain.`);
}

await writeFile(outputPath, html, "utf8");
console.log(`Exported ${pageUrl} -> ${outputPath} (${Buffer.byteLength(html)} bytes)`);
