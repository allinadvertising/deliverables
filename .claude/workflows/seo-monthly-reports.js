export const meta = {
  name: 'seo-monthly-reports',
  description: 'Build (then, after approval, publish) monthly SEO performance reports for a batch of clients with the seo-report skill',
  whenToUse: 'Monthly SEO reports for several clients at once. Run with args {"stage":"build","month":"YYYY-MM","clients":["slug",...]}, review, then run again with "stage":"publish" and the approved clients.',
  phases: [
    { title: 'Preflight', detail: 'registry, ClickUp report task, existing reports, duplicates' },
    { title: 'Pull', detail: 'GSC, GA4 and ClickUp by API, per client in parallel' },
    { title: 'Store revenue', detail: 'store admins in the shared Chrome, one client at a time' },
    { title: 'Write', detail: 'one writer per client, validator until PASS' },
    { title: 'Verify', detail: 'independent check of every claim against data.json' },
    { title: 'Publish', detail: 'export HTML, upload Pulse drafts, status summary and AM highlights' },
  ],
}

// ---------------------------------------------------------------------------------------------
// This file holds no client data on purpose: the `deliverables` repo is public. Everything
// client-specific (clients.json, team-roles.json, evals, the scripts) lives in the PRIVATE
// seo-report skill repo (github.com/allinadvertising/seo-report), installed per person at
// ~/.claude/skills/seo-report. Run this workflow from a `deliverables` clone.
//
// args: { stage: "build" | "publish", month: "YYYY-MM", clients: ["slug", ...], port?: 3001 }
// ---------------------------------------------------------------------------------------------

const A = args || {}
const STAGE = A.stage || 'build'
const MONTH = A.month
const CLIENTS = Array.isArray(A.clients) ? A.clients : []
const PORT = A.port || 3001
if (!MONTH || !/^\d{4}-\d{2}$/.test(MONTH) || !CLIENTS.length) {
  throw new Error('args must be {"stage":"build"|"publish","month":"YYYY-MM","clients":["slug",...]}')
}

const SKILL = '~/.claude/skills/seo-report'
const COMMON = `You are working on All In Advertising monthly SEO reports with the seo-report skill.
The skill is installed at ${SKILL} (a private repo). Read ${SKILL}/SKILL.md and follow it; ${SKILL}/references/ has the details.
Work from the current directory, which is a clone of the deliverables repo. Commands use ${SKILL}/scripts/... and output/<slug>-<monthname>-<year>/.
Report month: ${MONTH}. Never deploy, commit, push, delete anything, or type passwords. Never write client or staff data into the deliverables repo outside src/lib/reports, src/app/reports and output/.
If the skill folder is missing, stop and say so.`

const PREFLIGHT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    ok: { type: 'boolean', description: 'false = do not build this client' },
    clickupTaskId: { type: 'string' },
    taskDue: { type: 'string' },
    taskStatus: { type: 'string' },
    attribution: { type: 'string' },
    needsStore: { type: 'boolean', description: 'true when attribution needs store figures read in the browser' },
    existingReport: { type: 'string', description: 'existing Pulse or repo report for this month, if any' },
    duplicateTasks: { type: 'array', items: { type: 'string' } },
    notes: { type: 'array', items: { type: 'string' } },
  },
  required: ['slug', 'ok', 'needsStore', 'notes'],
}

const PULL = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    ok: { type: 'boolean' },
    dir: { type: 'string' },
    clicks: { type: 'string', description: 'current vs previous total clicks' },
    hiddenSharePct: { type: 'number' },
    gaps: { type: 'array', items: { type: 'string' } },
    warnings: { type: 'array', items: { type: 'string' } },
  },
  required: ['slug', 'ok', 'gaps', 'warnings'],
}

const STORE = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    status: { type: 'string', enum: ['added', 'login_needed', 'not_needed', 'failed'] },
    summary: { type: 'string' },
  },
  required: ['slug', 'status', 'summary'],
}

const WRITTEN = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    validator: { type: 'string', description: 'final validator line' },
    http: { type: 'string' },
    coverHeadline: { type: 'string' },
    clicksLine: { type: 'string' },
    revenueOrLeadsLine: { type: 'string' },
    openQuestions: { type: 'array', items: { type: 'string' } },
    localhost: { type: 'string' },
  },
  required: ['slug', 'validator', 'coverHeadline', 'openQuestions'],
}

const VERDICT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    pass: { type: 'boolean' },
    problems: { type: 'array', items: { type: 'string' }, description: 'claims not supported by data.json, causation claimed without evidence, brand share stated as fact, names, em dashes' },
    fixed: { type: 'array', items: { type: 'string' } },
  },
  required: ['slug', 'pass', 'problems'],
}

const PUBLISHED = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    htmlPath: { type: 'string' },
    pulseLink: { type: 'string' },
    clickupTask: { type: 'string' },
    statusSummary: { type: 'string' },
    amHighlights: { type: 'string' },
  },
  required: ['slug', 'htmlPath', 'pulseLink', 'clickupTask', 'statusSummary', 'amHighlights'],
}

// ------------------------------------------------------------------ build
if (STAGE === 'build') {
  phase('Preflight')
  const pre = (await parallel(CLIENTS.map((slug) => () => agent(`${COMMON}

PREFLIGHT for client "${slug}".
1. Confirm "${slug}" is a key in ${SKILL}/clients.json. If not, ok=false and say so.
2. Find its open "SEO Monthly Report" task in ClickUp for this report month (the task due in the month after ${MONTH}, or late in ${MONTH}'s billing cycle). Use the ClickUp REST API the way ${SKILL}/scripts/pull_clickup.py reads its token (never print it). Return the task id, due date and status. List any other open "SEO Monthly Report" task for this client due within 10 days of it as a possible duplicate.
3. Check whether src/lib/reports/${slug}-<monthname>-<year>.ts already exists here.
4. From clients.json store.attribution, set needsStore=true for organic-attributed, blended-search and all-channel-context; false otherwise.
5. ok=false only if the client is not in the registry or has no GSC property. Put everything else worth knowing in notes.`,
    { label: `preflight:${slug}`, phase: 'Preflight', schema: PREFLIGHT, effort: 'low' })))).filter(Boolean)

  const ready = pre.filter((p) => p.ok)
  const skipped = pre.filter((p) => !p.ok)
  if (skipped.length) log(`Skipped (not buildable): ${skipped.map((p) => `${p.slug} (${p.notes.join('; ')})`).join(', ')}`)
  if (!ready.length) return { stage: 'build', month: MONTH, preflight: pre, reports: [] }

  phase('Pull')
  const pulled = (await parallel(ready.map((p) => () => agent(`${COMMON}

PULL data for "${p.slug}": run \`python ${SKILL}/scripts/pull_all.py --month ${MONTH} ${p.slug}\` (PYTHONIOENCODING=utf-8). It runs pull_gsc.py, pull_ga4.py, pull_clickup.py and build_data.py. Report the output folder, total clicks current vs previous, derived.gsc.queryVisibility.hiddenSharePct, and every gap and warning from data.json. ok=false only if GSC failed.`,
    { label: `pull:${p.slug}`, phase: 'Pull', schema: PULL, effort: 'low' })))).filter(Boolean)

  // Chrome is a single shared browser: store pulls run one at a time, never in parallel.
  phase('Store revenue')
  const store = []
  for (const p of ready.filter((x) => x.needsStore)) {
    const r = await agent(`${COMMON}

STORE REVENUE for "${p.slug}" (attribution ${p.attribution}). Use the claude-in-chrome browser (load its tools with ToolSearch; open your own tab and close it when done).
Follow ${SKILL}/references/data-gathering.md: Shopify via the ShopifyQL URL recipes (find the store in the store switcher, never guess a handle), WooCommerce Analytics > Orders (custom month vs previous period), BigCommerce Analytics > Orders (Last month vs previous period).
If the admin shows a login page, do NOT type anything: return status login_needed with the URL.
If you get figures, write them to output/<dir>/store.json in the shape build_data.py documents (allChannels.* and, for Shopify, search.*), then run build_data.py again with --force --store. Record the pull date in store.json.`,
      { label: `store:${p.slug}`, phase: 'Store revenue', schema: STORE })
    if (r) store.push(r)
  }
  const loginNeeded = store.filter((s) => s.status === 'login_needed')
  if (loginNeeded.length) log(`Store login needed (reports will show revenue as pending): ${loginNeeded.map((s) => s.slug).join(', ')}`)

  const pulledOk = pulled.filter((x) => x.ok)
  const reports = await pipeline(
    pulledOk,
    (d) => agent(`${COMMON}

WRITE the ${MONTH} report for "${d.slug}" from ${d.dir}/data.json (use its derived values; every number in kpiRows and charts must be in data.json), clickup.json and store.json if present. Follow SKILL.md step 4 and references/report-schema.md exactly: honesty rules, revenue treatment for its attribution, brand vs other named vs hidden searches (never a brand share as fact), roles not names, no taskUrl, no em dashes, SEO work only, no business objective unless a kickoff file or the registry's knowledgeCenter gives one. Copy structure, not text, from ${SKILL}/evals/penelope-august-2026/report.ts.
Write src/lib/reports/${d.slug}-<monthname>-<year>.ts and its route under src/app/reports/${d.slug}/<monthname>-<year>/page.tsx.
Run \`node ${SKILL}/scripts/validate_report.mts <report.ts> --data <data.json>\` until PASS, then \`npx tsc --noEmit -p .\`, then curl http://localhost:${PORT}/reports/${d.slug}/<monthname>-<year> for 200 (if nothing is listening, say so; do not start a server).
Also write ${d.dir}/status-summary-final.txt from \`python ${SKILL}/scripts/status_summary.py\`, edited per SKILL.md step 6.`,
      { label: `write:${d.slug}`, phase: 'Write', schema: WRITTEN }),
    (w, d) => agent(`${COMMON}

VERIFY the report for "${d.slug}" as a skeptical second reader. Read src/lib/reports/${d.slug}-*.ts for ${MONTH} and ${d.dir}/data.json.
Check every sentence that states a number, a cause or a comparison: is it in data.json (or a plain difference of two values in it)? Does it claim SEO caused a revenue change without evidence? Does it state a brand or non-brand share as fact while hidden queries are large? Does it call all-channel revenue organic? Any person name, ClickUp link or em dash?
Fix what you can in the report file, re-run the validator until PASS, and list what you fixed and anything left for a human.`,
      { label: `verify:${d.slug}`, phase: 'Verify', schema: VERDICT })
        .then((v) => ({ ...(w || {}), verify: v })),
  )

  return {
    stage: 'build',
    month: MONTH,
    next: 'Review each localhost link. Then run this workflow again with stage "publish" and the approved clients.',
    skipped: skipped.map((p) => ({ slug: p.slug, notes: p.notes })),
    storeLoginNeeded: loginNeeded.map((s) => s.slug),
    preflight: pre,
    reports: reports.filter(Boolean),
  }
}

// ------------------------------------------------------------------ publish (only after human approval)
if (STAGE === 'publish') {
  phase('Publish')
  const out = []
  // Sequential: every client needs the shared Chrome for the Pulse upload.
  for (const slug of CLIENTS) {
    const r = await agent(`${COMMON}

PUBLISH the approved ${MONTH} report for "${slug}". The human already reviewed and approved it.
1. Re-run the validator on it; stop for this client if it fails.
2. Export: \`node scripts/export-report.mjs "http://localhost:${PORT}/reports/${slug}/<monthname>-<year>" "<outputRoot>/<client folder>/<Client>-SEO-Report-<Month>-<Year>.html"\` with outputRoot from ~/.claude/seo-report.json (find the client folder up to two levels deep; create <AM first name>/<Client>/_working only if none exists).
3. Upload to Pulse as a draft following ${SKILL}/references/deploy.md section 6, in the claude-in-chrome browser: Clients > client > Reports > New Report, name "<Client> SEO Monthly Report <Month> <Year>" (add " v2" if a report with that name exists), choose the HTML file, Create Report. Never delete or edit an existing report. Return the new report's preview link.
4. Return the ClickUp task link (https://app.clickup.com/t/<id>), the final status summary text, and AM highlights in English with no em dashes: one-liner; lead with; the drop and how to say it; next; need from the client; avoid saying.`,
      { label: `publish:${slug}`, phase: 'Publish', schema: PUBLISHED })
    if (r) out.push(r)
  }
  return { stage: 'publish', month: MONTH, published: out }
}

throw new Error(`Unknown stage "${STAGE}". Use "build" or "publish".`)
