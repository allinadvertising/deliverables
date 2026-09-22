# Data gathering

You pull the data yourself and only ask the user for what you genuinely cannot reach (a login you don't have, a file only they have). Confirm each source's numbers look sane before writing them into the report — a wrong number in a client deliverable is worse than a slow pull.

All comparisons are **current report month vs. the immediately preceding month** (e.g. August 1–31 vs. July 1–31). Note each month's day count; if they differ (30 vs 31), report daily-normalized figures too so a longer month doesn't look like growth.

## Contents
- [Browser setup](#browser-setup)
- [Google Search Console](#google-search-console-gsc)
- [WooCommerce revenue](#woocommerce-revenue)
- [Shopify revenue](#shopify-revenue)
- [ClickUp completed work](#clickup-completed-work)
- [Spreadsheet / xlsx exports](#spreadsheet--xlsx-exports)

## Browser setup

GSC and WooCommerce need the client's authenticated logins, which live in the user's real Chrome — use the **claude-in-chrome** MCP (`mcp__claude-in-chrome__*`), not the in-app preview browser (that one is only for viewing the localhost render).

- The claude-in-chrome tools are usually deferred. Load them in ONE `ToolSearch` call: `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__find,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__list_connected_browsers,mcp__claude-in-chrome__switch_browser,mcp__claude-in-chrome__tabs_close_mcp`.
- `list_connected_browsers` often returns several. You must let the user pick — the runtime requires asking. With more than a few connected, the cleanest path is `switch_browser` (broadcasts a "Connect" prompt to every Chrome; the user clicks the right one). Ask which Chrome is logged into the client's GSC / store.
- Use `browser_batch` to run click→wait→screenshot sequences in one round trip. Screenshots occasionally time out ("renderer unresponsive") — just retry the screenshot.
- Prefer clicking by `ref` (from `find`/`read_page`) over pixel coordinates; the page reflows and re-zooms between shots, so coordinates drift.
- Close the MCP tab you opened (`tabs_close_mcp`) when done, to leave the user's browser tidy.

## Google Search Console (GSC)

**The right property may be under a non-default Google account.** Check the client's `gsc.googleAccount` / `accountPathIndex` in `clients.json`. If it's account index N, the working URLs are `https://search.google.com/u/N/search-console/...`. If a property 404s as "you don't have access," the default account is wrong — open the property picker or try `/u/1/`, `/u/2/` until you find the account that has it, then record it in `clients.json`.

**Finding a new client's property:** open the property dropdown (top-left) and type the client name into the picker's search box. The matching entry shows the domain and its type — no `https://` prefix means a `sc-domain:` **domain property** (aggregates http+https; the `resource_id` is `sc-domain:<domain>`); an `https://…/` entry is a **URL-prefix** property. Select it and read the exact `resource_id` from the URL. Note: a domain property still shows the homepage as separate `http://` and `https://` rows in the Pages breakdown, which is how you spot a protocol split.

Set the comparison once, then reuse the URL for every breakdown. The Performance URL accepts date params directly:
```
https://search.google.com/u/<N>/search-console/performance/search-analytics?resource_id=<ENCODED_PROPERTY>&start_date=YYYYMMDD&end_date=YYYYMMDD&compare_start_date=YYYYMMDD&compare_end_date=YYYYMMDD
```
Add `&breakdown=device`, `&breakdown=page`, or `&breakdown=query` to switch tabs. To set it via UI: date chip → **More time ranges** → **Compare** tab → **Custom**, fill both ranges, **Apply**.

Pull, current vs previous:
- **Totals**: clicks, impressions, CTR, average position (the four metric cards).
- **Devices** (`breakdown=device`): clicks per device (desktop/mobile/tablet). Their sum is the exact total clicks — use it, since the cards round (e.g. "1.85K").
- **Pages** (`breakdown=page`): the top pages with click + impression deltas. Identify the flagship / most-moved page and the commercial pages that slipped. Drill into a page (click its row) to get that page's own clicks/impressions/CTR/position comparison.
- **Non-branded**: fastest is to append **`&query=%40NON_BRANDED`** to the performance URL — it applies GSC's built-in brand filter directly (equivalent to Add filter → Query → **Non-branded queries** → Apply). This gives brand-excluded totals automatically (better than a hand-written regex). Brand share varies a lot by client — small for niche ecommerce, large for a named local brand — so always check both the branded and non-branded totals: a rising overall total can be pure brand while non-brand (the growth target) is falling.

`get_page_text` on GSC can return stale/aggregate tables — trust the on-screen comparison values (screenshots) over it.

**Very large properties (1,000+ pages):** the Pages breakdown can leave the claude-in-chrome renderer unresponsive (`read_page`/`screenshot` time out with "Script injection timed out" / "Page still loading"). Fix: open the Pages breakdown in a **fresh tab** (`tabs_create_mcp`, then navigate) and retry the screenshot; the wedged tab can be abandoned/closed. Totals, devices, and non-brand load fine; only the page-level table is heavy. Top ~10 pages is plenty — identify the commercial-collection movers vs. the decaying blog/news posts (a big brand's net click dip is often just one or two viral posts decaying while the money pages grow). (Worked example: Ritani, Aug 2026.)

## WooCommerce revenue

Log in at the client's `store.adminUrl`. Both reports take `period=custom&compare=previous_period&after=YYYY-MM-DD&before=YYYY-MM-DD`:
- **Revenue** (`path=/analytics/revenue`): Gross/Net sales, Total sales (incl. shipping+tax), with % change. The chart legend shows the previous-period value too.
- **Orders** (`path=/analytics/orders`): Orders, Net sales, Average order value, Average items per order — all with the previous-period comparison. The Orders table also shows a per-order **Attribution** column.

**Critical framing (WooCommerce):** this is TOTAL store revenue across all channels, **not organic-attributed** — see the client's `attributionNote`. GA4 e-commerce tracking is typically broken (captures a tiny fraction of orders), and WooCommerce order attribution blends paid and organic Google. Do **not** invent an organic-revenue figure. Report store revenue as all-channel context, label it plainly, and make fixing attribution an action item.

## Shopify revenue

Use the Shopify Analytics export the specialist provides (or export it): the **Total sales by referrer** report, referrer source = `search`, metric **Total sales (USD)**, segmented by search engine, by product, and (when available) by **landing page path**. This **is** organic-attributed — report organic revenue by engine (Google/Bing/DuckDuckGo/Yahoo, with Google's share) and top products by organic revenue, as the V-Belt exemplar does; the landing-page cut reveals which onsite pages convert (a homepage carrying most of the revenue is a strong finding that often ties to a technical issue).

Two things to keep honest: Shopify's referrer attribution is reliable **on its own even when GA4 is broken or unavailable** — treat Shopify as the revenue source of truth and GA4 as a secondary tie-out (note if the GA4 tie-out is pending). And it captures **ecommerce and online-booked services only** — for med spas, salons, and other booking businesses, in-store/phone revenue sits outside this figure, so label it. (Note: the report's "Total sales by referrer" export shows the *referrer engine*, whereas an older "by referrer URL" field would hold external referrers, not onsite pages — use GSC for onsite page traffic.)

**First, confirm the agency even has Shopify admin for this store — don't assume.** In the reporting Chrome go to `admin.shopify.com`, open the account/store switcher (top-right), and search the client name. If the store is present, use it (Total sales by referrer, as above). If it returns **no result**, the agency has no Shopify admin for this client (common with large brands that have in-house teams and headless storefronts) — do not guess a `store/<handle>` URL, and do not report organic revenue. Record `attribution: "unavailable-seo-only"` in `clients.json` and use the **SEO-only access** revenue treatment in `report-schema.md` (GSC traffic only, revenue as a measurement deliverable). Note for headless storefronts (custom Next.js/etc. in front of a Shopify backend): even with admin access, referrer attribution can be unreliable, so treat it with the same caution. (Worked example: Ritani, Aug 2026 — no Ritani store in the fulfillment@ switcher.)

## ClickUp completed work

The ClickUp MCP tools (`mcp__*__clickup_*`) are usually connected. Load `clickup_filter_tasks` (and `clickup_search`, `clickup_get_task`) via ToolSearch if deferred.

**Reporting month vs. bundle name — check this first.** The "SEO Monthly Report" task lives inside a monthly parent bundle, but the bundle can be named for the **production month**, not the reporting month: e.g. a report on **August** performance whose report task sits in the **"September 2026 SEO Tasks"** bundle (produced in early September). The report always covers the last complete month. Draw **delivered work** from that reporting month's **closed tasks** (the `date_closed` filter below), and the **forward plan** ("next month", "next 3 months") from the current bundle's open subtasks. Confirm the month with the user if the bundle name and the reporting month disagree. (Worked example: Ritani, Aug 2026.)

Get the report month's delivered work from the client's `clickup.listId`:
```
clickup_filter_tasks(list_ids=[<listId>], date_closed_from="YYYY-MM-01", date_closed_to="YYYY-MM-31", include_closed=true, subtasks=true)
```
`date_closed` is epoch ms — convert to dates for the `completedOn` field. Keep the SEO/dev deliverables (definitions, audits, content refreshes, technical fixes, roadmaps) with their owner, close date, and `https://app.clickup.com/t/<id>` URL; drop routine recurring items (weekly ads reviews, "confirm billing"). If the client isn't in `clients.json` yet, `clickup_search` the client name to find their list/folder/space ids, then record them.

## Spreadsheet / xlsx exports

If the user hands you an `.xlsx` (e.g. a revenue export) and `openpyxl` isn't installed, parse it with the bundled stdlib reader — no dependencies:
```
python .claude/skills/seo-report/scripts/xlsx_dump.py "<path-to-file.xlsx>"
```
It prints every sheet's rows as `col:value`. Read the notes rows too — exports often carry caveats about what the numbers do and don't mean (attribution, refunds, line-item vs order totals).
