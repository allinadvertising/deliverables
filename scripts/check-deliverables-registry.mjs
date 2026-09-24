/**
 * check-deliverables-registry.mjs
 * ------------------------------------------------------------------
 * Fails the build when the deliverables registry and the repo disagree.
 *
 * Runs as `prebuild`, so it runs before every `npm run build` — locally and
 * on Vercel. Drift cannot reach production.
 *
 * It checks four things:
 *   1. Every deliverable route has a registry entry. (Child pages of a
 *      registered analysis suite roll up into the suite's entry.)
 *   2. Every registry entry points at a route that exists, exactly once.
 *   3. Every deliverable dated on or after the export rule date carries an
 *      exportHref that resolves to a real file under public/.
 *   4. Every kickoff deck labels its engagement window with one of the three
 *      labels the registry reads. A fourth label is not a type error — it
 *      renders an empty period on the dashboard — so it is caught here.
 *
 * The registry is TypeScript and this script is plain .mjs, so entries are
 * read out of the source text rather than imported. That keeps the check
 * dependency-free at the cost of expecting the registry's current shape:
 * `fromReport|fromKickoff|fromSuite(<symbol>, { href, periodEnd, exportHref? })`.
 *
 * Usage: node scripts/check-deliverables-registry.mjs
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

/**
 * Every deliverable owes a committed HTML export since 2026-09-22 — except
 * these, the 34 that already existed when the rule landed.
 *
 * This is a closed snapshot, not a list to extend: anything added to the
 * registry from now on must ship its export. A deliverable's `periodEnd`
 * cannot stand in for "was it produced before the rule" — a kickoff deck's
 * period ends in the future (September to November 2026), so dating the
 * check would exempt nothing and flag all twenty decks.
 */
const PRE_RULE_DELIVERABLES = new Set([
  "/kickoff/88-gear/v2",
  "/kickoff/atl-welding-supply/v2",
  "/kickoff/awards-atlanta/v2",
  "/kickoff/awr-restoration/v2",
  "/kickoff/big-dawg-bats/v2",
  "/kickoff/cancooker/v2",
  "/kickoff/covertec-products/v2",
  "/kickoff/custom-sports-products/v2",
  "/kickoff/electric-motor-sport/v2",
  "/kickoff/excell-red-light/v2",
  "/kickoff/intradyn/v2",
  "/kickoff/mkm-pottery-tools/v2",
  "/kickoff/nurtured-9/v2",
  "/kickoff/original-clear-bra/v2",
  "/kickoff/penelope/v2",
  "/kickoff/race-parts-solutions/v2",
  "/kickoff/raise-them-well/v2",
  "/kickoff/rig-outfitters/v2",
  "/kickoff/sportsdisplays",
  "/kickoff/toico/v2",
  "/piping-now-seo-analysis",
  "/reports/ag-diesel/jun-aug-2026",
  "/reports/buried-treasure-fossils/august-2026",
  "/reports/ev-charge-solutions/august-2026",
  "/reports/everwhite/august-2026",
  "/reports/fossil-age-minerals/august-2026",
  "/reports/penelope/aug-2026",
  "/reports/pipingnow/august-2026",
  "/reports/ritani/august-2026",
  "/reports/snowie/june-2026",
  "/reports/sportsdisplays/may-jul-2026",
  "/reports/toico/july-2026",
  "/reports/vbeltguys/july-2026",
  "/reports/vim-products/august-2026",
]);

const APP_DIR = "src/app";
const ROUTE_TREES = ["reports", "kickoff", "piping-now-seo-analysis"];
const REGISTRY = "src/lib/deliverables/registry.ts";
const PUBLIC_DIR = "public";
const WINDOW_LABELS = ["period", "quarter", "window"];

const problems = [];

function fail(message) {
  problems.push(message);
}

/** Every route that renders a deliverable, as a URL path. */
function findRoutes() {
  const routes = [];

  function walk(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        walk(full);
      } else if (name === "page.tsx") {
        routes.push("/" + relative(APP_DIR, dir).split(/[\\/]/).join("/"));
      }
    }
  }

  for (const tree of ROUTE_TREES) {
    const dir = join(APP_DIR, tree);
    if (existsSync(dir)) walk(dir);
  }

  return routes.sort();
}

/** Registry entries, read out of the source text. */
function readRegistry(source) {
  const entries = [];
  const call = /from(Report|Kickoff|Suite)\(\s*([A-Za-z0-9_]+),\s*\{([^}]*)\}/g;

  for (const match of source.matchAll(call)) {
    const [, kind, symbol, placement] = match;
    const field = (name) =>
      placement.match(new RegExp(name + ':\\s*"([^"]+)"'))?.[1];

    entries.push({
      exportHref: field("exportHref"),
      href: field("href"),
      kind: kind.toLowerCase(),
      periodEnd: field("periodEnd"),
      symbol,
    });
  }

  return entries;
}

/** Where a registry symbol is imported from, as a repo path. */
function moduleFor(source, symbol) {
  const line = source.match(
    new RegExp("import \\{ " + symbol + ' \\} from "@/([^"]+)"'),
  );

  return line ? "src/" + line[1] + ".ts" : null;
}

const routes = findRoutes();
const source = readFileSync(REGISTRY, "utf8");
const entries = readRegistry(source);

if (entries.length === 0) {
  fail(
    `Parsed no entries out of ${REGISTRY}. The registry's shape probably changed — update this script.`,
  );
}

// 1 + 2. Routes and entries must line up.
const hrefs = new Set();
for (const entry of entries) {
  if (!entry.href || !entry.periodEnd) {
    fail(`Entry for ${entry.symbol} is missing an href or periodEnd.`);
    continue;
  }
  if (hrefs.has(entry.href)) {
    fail(`Two registry entries point at ${entry.href}.`);
  }
  hrefs.add(entry.href);

  if (!routes.includes(entry.href)) {
    fail(`Registry entry ${entry.href} (${entry.symbol}) has no page.tsx.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.periodEnd)) {
    fail(`${entry.href} has a malformed periodEnd: "${entry.periodEnd}".`);
  }
}

const suiteRoots = entries
  .filter((entry) => entry.kind === "suite")
  .map((entry) => entry.href + "/");

for (const route of routes) {
  if (hrefs.has(route)) continue;
  if (suiteRoots.some((root) => route.startsWith(root))) continue;
  fail(
    `${route} has no registry entry. Add one to ${REGISTRY} so it reaches the dashboard.`,
  );
}

// 3. Deliverables produced under the export rule must have their export.
for (const entry of entries) {
  if (PRE_RULE_DELIVERABLES.has(entry.href)) continue;

  if (!entry.exportHref) {
    fail(
      `${entry.href} has no exportHref. Every deliverable now ships a self-contained HTML: ` +
        `node scripts/export-report.mjs "${entry.href}" "public/<client>/<year>/<month>/<name>.html"`,
    );
    continue;
  }

  const file = join(PUBLIC_DIR, entry.exportHref);
  if (!existsSync(file)) {
    fail(`${entry.href} points at a missing export: ${file}`);
  }
}

// 4. A deck whose window label the registry does not read renders blank.
for (const entry of entries) {
  if (entry.kind !== "kickoff") continue;

  const modulePath = moduleFor(source, entry.symbol);
  if (!modulePath || !existsSync(modulePath)) {
    fail(`Could not find the data module imported as ${entry.symbol}.`);
    continue;
  }

  const deck = readFileSync(modulePath, "utf8");
  const labels = [...deck.matchAll(/label:\s*"([^"]+)"/g)].map((m) =>
    m[1].toLowerCase(),
  );
  if (!labels.some((label) => WINDOW_LABELS.includes(label))) {
    fail(
      `${entry.href} labels its engagement window with none of ${WINDOW_LABELS.join(", ")}, so the dashboard would show no period. Rename the meta label in ${modulePath}, or teach fromKickoff the new one.`,
    );
  }
}

if (problems.length > 0) {
  console.error("Deliverables registry check failed:\n");
  for (const problem of problems) console.error("  - " + problem);
  console.error(
    `\n${problems.length} problem${problems.length === 1 ? "" : "s"}. See ${REGISTRY}.`,
  );
  process.exit(1);
}

const suites = entries.filter((entry) => entry.kind === "suite").length;
console.log(
  `Deliverables registry OK: ${entries.length} entries cover ${routes.length} routes ` +
    `(${suites} analysis suite${suites === 1 ? "" : "s"} rolling up child pages).`,
);
