# Writing the report

A report is a single exported `SeoStoryReportData` object plus a thin page route that renders it. Two files:

- `src/lib/reports/<slug>-<month>-<year>.ts` — the data (all the content lives here).
- `src/app/reports/<slug>/<month>-<year>/page.tsx` — imports the data and renders `<SeoStoryReport report={...} />`, plus page `metadata` (title + description + `robots: "noindex, nofollow"`).

The live route is `/reports/<slug>/<month>-<year>`.

## Start from the exemplar

The type is defined in `src/lib/reports/types.ts`. The **gold-standard, revenue-forward example is `src/lib/reports/vbeltguys-july-2026.ts`** — read it in full before writing. It uses the richest shape (revenue charts, completed work, business objective, per-workstream priorities). `src/lib/reports/everwhite-august-2026.ts` is the worked example for a **WooCommerce / attribution-limited** client. Match whichever fits the client's platform, then fill every field with real, pulled numbers.

Read the renderer components under `src/components/reports/storytelling/` if you need to confirm how a field displays. Chart period labels are derived automatically from `meta.currentPeriod` / `meta.previousPeriod` — you do not hardcode month names anywhere.

## The performanceCharts block (the visual spine)

If you set `performanceCharts`, the component renders `growth`, `nonbrand`, `homepage`, and `devices` **unconditionally** (only `revenue` is optional). So provide all four with real data, or omit `performanceCharts` entirely and fall back to text `visualDirections`. The four required bands are flexible slots — retitle them to fit the client's story:
- `growth` — clicks + impressions, current vs previous (grouped columns).
- `nonbrand` — a waterfall: `baseline` (previous month) → named `contributions` (must sum to `total − baseline`) → `total` (current month). Use it for whatever actually moved the number — page-level movers work well when no single query dominates.
- `homepage` — a 3-metric divergence table. Repurpose it for the flagship page (e.g. the page that drove or lost the most), not necessarily the literal homepage.
- `devices` — clicks by device (grouped columns). Drop tablet if it's negligible; two bars render fine.
- `revenue` (optional) — a divergence series + `rankings` (top products, one or two periods). **Shopify:** organic revenue by engine + organic-attributed top products. **WooCommerce:** net sales / orders / AOV as all-channel store context, with a `channelContext` note spelling out the attribution gap. **Note:** the revenue `series` is a two-period comparison (previous vs current). A first report — or any month with no trustworthy prior — has only one period, so **don't use the `revenue` chart for a baseline**; put the revenue figures in KPI rows + the narrative + a `dataNote` instead, labeled as a baseline (see below). Reserve the chart for months that have a real prior-month comparison.

### Which revenue treatment

Match the treatment to what the client's data actually supports — this is where the honesty rules bite hardest:
- **Organic-attributed (e.g. Shopify referrer report):** report organic revenue directly — by engine, top products, landing pages. Note the source of truth (Shopify), any pending GA4 tie-out, and anything it excludes (in-store/phone bookings for booking businesses).
- **All-channel only (e.g. WooCommerce with broken GA4):** report total store revenue as clearly-labeled all-channel context, never as organic, and make fixing attribution an action item.
- **First month / baseline:** present the figures as a baseline with no month-over-month change (a pre-engagement prior isn't a fair comparison), and say the next report will start the trend.
- **SEO-only access (no store admin at all):** some clients give the agency no store access whatsoever — common with large brands that have in-house teams and headless storefronts. Confirm it rather than assume it (e.g. the store does not appear in the Shopify account's store switcher; see `data-gathering.md`), then report GSC traffic only and frame organic revenue as a measurement deliverable in the `conversionPlan` / an `unavailable` power line / a `neutral` KPI row. Offer to fold in a client-provided Heap/GA4/Shopify export as labeled context. (Worked example: Ritani, Aug 2026.)
- **Genuinely unavailable:** only after you've pulled or asked — frame it as a measurement deliverable with a `conversionPlan`. Do not reach this case by assumption.

`status` on a comparison is `"positive"` or `"watch"` (charts) — there is no neutral; use `watch` for flat/declines. KPI rows also allow `"neutral"`.

## Sections to fill (all from real data)

- `meta` — client, `coverHeadline` (two short, specific sentences — the single sharpest insight, like the V-Belt cover), `currentPeriod` / `previousPeriod` as `"Month D-D, YYYY"`, property, `reportType`, `source` (name the actual tools used), and `action` (the concrete next step).
- `businessObjective` — one line on the engagement's goal.
- `executiveSummary` — a tight paragraph: what happened, why, and the one open problem.
- `powerLines` — 4 cards (Traffic, Conversions/Revenue, Rankings, Technical health).
- `journeyWorkstreams` — each with `businessPriority`, started/work/result/next.
- `completedWork` — evidence cards (title, evidence, owner, `completedOn`). Omit `taskUrl` so no ClickUp link renders. `owner` is a ROLE, never a person's name (SEO Specialist, SEO Strategist, Developer, Account Manager, Data Specialist). Draw completed and in-progress work only from the subtasks of the client's monthly task bundle (the parent of the SEO Monthly Report task); do not pull in tasks from elsewhere in the list.
- `kpiRows` — the headline metrics with honest `businessMeaning`. Lead with the client's real story: revenue first when it's organic-attributed (Shopify); traffic first when revenue isn't (WooCommerce), with store revenue as a clearly-labeled context row.
- `kpiDisclosure` — exactly where each number came from and any rounding/caveats.
- `conversionPlan` (optional) — owner / source-to-connect / next-report expectation. Good for framing an attribution fix.
- `obstacles` — obstacle / impact / remediation / eta.
- `technicalItems` — issue / why / fix, plus a `developerNote` citing the ClickUp task ids. `technicalLabels` relabels the columns (V-Belt uses "Issue / Business risk / Next action").
- `dataNotes` — the appendix: sources, property, day counts, attribution reality, third-party-estimate caveats.

## The honesty rules (do not bend these)

These reports go to clients; credibility is the whole point.
- **Never fabricate attribution.** If organic revenue isn't reliably measured, say so and report all-channel store revenue as context — don't dress it up as organic.
- **Don't imply causation you can't support.** A traffic gain during an algorithm update, or a store-revenue swing driven by a few large orders, gets said plainly.
- **Numbers trace to a source.** Every figure in `kpiRows`/charts should be reproducible from `dataNotes`.
- **Round consistently and disclose it.** If clicks are exact (device sum) but impressions are rounded, say that.

## Voice

- **Answer first.** Open each section with the conclusion, then the support.
- **Plain and brief.** Everyday words over jargon; keep only the SEO terms the client needs. Cut filler and repetition.
- **No em dashes.** House style. Use commas, periods, or parentheses instead.
- **Roles, not names.** `owner` and any attribution use a role, never a person's name.
- Keep every number and every decision-affecting caveat, even when trimming.
