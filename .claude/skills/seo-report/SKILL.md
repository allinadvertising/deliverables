---
name: seo-report
description: >-
  Create or refresh a client's monthly SEO performance report and deliver it as a live, shareable
  Vercel URL. Use this whenever the user wants a monthly SEO / organic-search performance report for
  a client — phrases like "create the SEO report for <client>", "build the <month> report", "refresh
  the <client> report", "do <client>'s monthly organic report", "make a shareable SEO report", or a
  client name paired with a month. Also use it when they hand over a revenue export or GSC data and
  ask for the report, or when they want an existing report updated or deployed. It pulls Google Search
  Console + store (WooCommerce/Shopify) + ClickUp data itself, writes the report in this repo's
  storytelling-report format, renders it locally for review, and (after approval) commits and pushes
  so Vercel publishes the shareable link. Trigger it even when the user doesn't say the word "skill"
  but clearly wants a client SEO report built or shared.
---

# SEO Report

Produce a monthly organic-search performance report for a client, publish it as a shareable link
(`https://deliverables-pearl.vercel.app/reports/<slug>/<month>-<year>`), and deliver it as a
**downloadable, self-contained HTML file** — that HTML file is the final deliverable format the
client receives (attached to the ClickUp report task), and it is always produced.

The report is a data object (`SeoStoryReportData`) rendered by the shared `SeoStoryReport` component, deployed via Vercel, then exported to a single self-contained `.html` file with `scripts/export-report.mjs`. Everything downstream — the look, the sections, the deploy, the export — already exists in this repo; your job is to gather real numbers, write them into the report faithfully, get it live, and hand over the HTML deliverable.

## How this skill runs (the shape of the job)

Three standing decisions define the workflow:

1. **You pull the data yourself**, from the client's authenticated GSC, their store analytics, and ClickUp — and only ask the user for what you truly can't reach (a login you don't have, a file only they have).
2. **You build and render locally, then STOP for review.** Publishing is a deliberate, human-approved step. Never commit or push until the user has seen the rendered report and said to ship it.
3. **Client data sources live in a committed registry** — `clients.json` beside this file. Read it; don't re-derive a client's sources every run.

## Prerequisites

Before starting, confirm these are available; if one is missing, say so and fall back (accept exports instead of pulling; stop before deploy):
- **claude-in-chrome** MCP connected to a Chrome logged into the client's GSC and store (WooCommerce admin / Shopify).
- The **ClickUp** MCP connector.
- **git push** access to `origin/main` (needed only for the deploy step).

## The pipeline

### 1. Identify the client and the report month
Get the client and the month. Convert relative dates ("last month") to an absolute month using today's date. Derive `slug` (route segment, e.g. `everwhite`) and the period strings.

Read `clients.json`. If the client is there, use its `gsc` / `store` / `clickup` config. If not, this is a new client — discover its sources:
- **Domain + GSC property**: open the GSC property picker and search by the client name (the property is often a `sc-domain:` domain property under a **non-default** Google account, so don't trust the default). Confirm the exact `resource_id` from the URL once selected.
- **Platform, business objective, roadmap, and the technical findings worth citing**: read the repo's kickoff file `src/lib/kickoff/<slug>-v2.ts` — it's usually a goldmine (domain, Shopify/WooCommerce, objective, the 3-month plan, and specifics like Merchant-listing or backlink issues). The ClickUp "Client Website URL" custom field is often empty, so don't rely on it.
- **ClickUp list**: `clickup_search` the client name to find its list/folder/space ids.

Then **add the client to `clients.json`** so future runs are one step shorter.

### 2. Check whether the report already exists
Look for `src/lib/reports/<slug>-<month>-<year>.ts` and `src/app/reports/<slug>/<month>-<year>/page.tsx`. If they exist, you're refreshing (read the current version first, keep the URL). If not, you're creating. Either way the deliverable is the same.

### 3. Gather the data → read `references/data-gathering.md`
Pull, current month vs. previous month, from GSC (totals, devices, pages, non-branded), the store (revenue/orders — WooCommerce reports or Shopify export), and ClickUp (completed work). That reference has the exact URLs, tabs, filters, and the browser-driving gotchas. Sanity-check every number before it goes in the report.

**Revenue is a decision, not a default.** Pull it from the store yourself; if you can't reach it, or the client's tracking is immature, **ask the user for it** (a Shopify/WooCommerce export). Never silently conclude revenue is unavailable and drop it — surface the gap and let the user decide. Even when organic revenue can't be attributed, there's almost always *something* to report (all-channel store revenue as context, or a labeled baseline). The `report-schema` reference covers how to present each case honestly.

### 4. Write the report → read `references/report-schema.md`
Start from the exemplar (`src/lib/reports/vbeltguys-july-2026.ts` — read it fully), then write `src/lib/reports/<slug>-<month>-<year>.ts` and the `page.tsx` route. Fill every section with real, pulled data. Follow the **honesty rules** in that reference — especially: never fabricate organic-revenue attribution; when it isn't measurable, report all-channel store revenue as clearly-labeled context and make the attribution fix an action item.

### 5. Render locally and hand it to the user for review
Start the dev server and open the route so you (and the user) can see it:
- `.claude/launch.json` defines a `next-dev` config (create it if absent: `npm run dev`, port 3000). Use the in-app preview browser (`mcp__Claude_Browser__*`) — NOT the claude-in-chrome one — to load `http://localhost:3000/reports/<slug>/<month>-<year>`.
- Verify it renders with no compile error. The preview can return black frames after programmatic scrolling; if so, confirm content with `get_page_text` instead of fighting screenshots.
- **Then stop.** Summarize what's in the report and the key numbers, share the localhost link, and ask the user to review and approve before you publish. Do not proceed to deploy on your own.

### 6. Deliver the status summary
Alongside the report, give the account team a short, paste-ready status summary (it goes into the ClickUp task as an update). Keep it answer-first, role-based, no names, no em dashes. Pull the delivered and open items from the month's task bundle (the subtasks of the SEO Monthly Report's parent) and cite each task id. If the report's account of delivered work differs from the ClickUp status, flag the discrepancy instead of silently reconciling. Format (template: the parent SEO Monthly Report task's status-summary comment):

```
<Month Year> SEO - status summary.

WORK DELIVERED (closed):
- <deliverable>

CLIENT APPROVALS NEEDED (sign-off):
1. <item> (<taskId>)

ACCESS GAPS (need requests):
1. <item> (<taskId>)

OTHER CLIENT ACTIONS:
- <item> (<taskId>)

Everything else is delivered and closed. The blockers are: <N> sign-offs, <N> access requests, <N> other actions.
```

### 7. Deploy and deliver the HTML (only after explicit approval) → read `references/deploy.md`
On the user's go-ahead: validate the build, commit (report + any shared-component change as separate commits), rebase onto `origin/main`, push, and poll the production URL until the new version is live. That reference has the exact git sequence and the known local-build caveat (the Supabase route fails locally; TypeScript compiling is the real signal).

Then produce the **final deliverable**: export the live report to a single self-contained HTML file and hand it to the user. This HTML file is what the client receives (attached to the ClickUp report task); the Vercel link is the shareable preview.
```
node scripts/export-report.mjs \
  "/reports/<slug>/<month>-<year>" \
  "public/<client-slug>/<year>/<month>/<client-slug>-seo-report-<month>-<year>.html"
```
Commit that file with the report: every kickoff deck and SEO report owes a self-contained HTML under `public/<client>/<year>/<month>/`, and a copy goes to the client folder for handoff.
The dev server must be running for the export (it fetches the rendered route and inlines CSS/fonts/images as data URIs, strips the Next runtime, and rewires the Print/Back-to-top buttons). The file opens in any browser with no server. Name it to match the house pattern (e.g. `EverWhite-SEO-Report-August-2026.html`). Re-run the export after any report edit so the HTML matches what's live. A PDF (headless-Chrome `--print-to-pdf` of the same route) can optionally accompany it, but the HTML is the deliverable of record.

## Guardrails

- **The review gate is not optional.** Build → render → *stop*. A push publishes to a public URL; that decision is the user's, every time.
- **Client deliverable = credibility.** Every number traces to a source in `dataNotes`; no fabricated attribution; no implied causation you can't support. The honesty rules in `references/report-schema.md` are the point of the whole thing.
- **Roles, not names.** Attribute completed work and owners by role (SEO Specialist, SEO Strategist, Developer, Account Manager, Data Specialist), never by an individual person's name. Map each ClickUp assignee to their role. This applies to the report and the status summary.
- **Answer-first, plain, brief, no em dashes.** Lead every section with the conclusion, then support it. Use plain words and keep only the SEO terms the client needs. Cut filler, repetition, and hedging, but never drop a number or a decision-affecting caveat. Do not use em dashes anywhere in the report or the status summary; use commas, periods, or parentheses instead.
- **No ClickUp links, scoped work.** Omit `taskUrl` from `completedWork` so no ClickUp link renders in the report. Draw completed and in-progress work only from the month's task bundle (the parent of the SEO Monthly Report task, e.g. "August 2026 SEO Tasks"); do not use tasks from elsewhere in the list. Note the bundle can be named for the **production month** rather than the reporting month (e.g. an August report whose task sits in "September 2026 SEO Tasks") — take delivered work from the reporting month's closed tasks and the forward plan from the current bundle; see `references/data-gathering.md`.
- **Keep `clients.json` current.** New client or corrected access detail → write it back so the registry compounds.
- **Leave the user's browser tidy** — close the claude-in-chrome tab you opened when data-gathering is done.

## Files in this skill
- `clients.json` — per-client data-source registry (read first; keep updated).
- `references/data-gathering.md` — GSC / WooCommerce / Shopify / ClickUp pull playbook + browser gotchas.
- `references/report-schema.md` — the `SeoStoryReportData` sections, the performanceCharts block, and the honesty rules.
- `references/deploy.md` — commit / rebase / push / verify-live workflow.
- `scripts/xlsx_dump.py` — dependency-free `.xlsx` reader for revenue exports.
