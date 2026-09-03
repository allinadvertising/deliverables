import type { SeoStoryReportData } from "@/lib/reports/types";

export const evChargeSolutionsAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover and grow organic search demand for EV Charge Solutions' catalog after the Volusion-to-Odoo migration — restoring indexation and rankings, reclaiming link equity, and converting product-page visibility into ecommerce revenue.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Revenue",
    intro:
      "August was a migration-recovery month. The revenue below is GA4-attributed organic search revenue (Odoo carries no channel attribution), and the Search Console data shows the Odoo /shop catalog climbing back into the index. Together they point one way: the technical recovery is feeding the product pages that drive the revenue.",
    title: "Organic revenue and the migration recovery",
  },

  meta: {
    action:
      "Finish the six client-dev handoff items (QWeb/DNS/server access), confirm the Volusion→Odoo redirects and sitemap resubmission are fully processed, and restore clean revenue/conversion tracking in Odoo — then measure the catalog's re-indexing and rankings recovery against this month.",
    client: "EV Charge Solutions",
    coverHeadline:
      "Organic drove 77% of revenue as the migrated catalog recovered — and most of it came from Bing, not Google.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "evchargesolutions.com",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + GA4 + Odoo + ClickUp delivery records",
  },

  executiveSummary:
    "August's organic search kept recovering from the Volusion-to-Odoo migration. Google clicks rose 12.8% to 874 and impressions jumped 32.6% to 83.8K as the /shop catalog re-entered the index — non-brand clicks led, up 21.7%, which is the migration cleanup working — while average position eased from 12.4 to 16 as re-indexed URLs re-enter search lower before settling. Organic is already the store's dominant channel: GA4 attributes $8,585.78 of revenue to organic search, about 77% of all site revenue, and, strikingly, Bing drove 64% of it ($5,465 from just 276 sessions) versus Google's $3,120 from 1,682 sessions — a high-value B2B pattern worth leaning into. The month's technical work was heavy and on-theme: the Volusion-to-Odoo redirect map, Odoo crawl-path and parameter cleanup, an indexation policy with noindex rules, sitemap governance and GSC resubmission, backlink reclamation, a /helpdesk 404 fix, missing-meta and duplicate-title fixes, and a twelve-point live verification all closed. Odoo carries no channel attribution and the GA4 connector trial has expired, so revenue was pulled from the GA4 UI and reconciles closely to Odoo's eCommerce report; finishing the six dev-handoff items and restoring clean tracking are September's priorities.",

  powerLines: [
    {
      area: "Revenue",
      statement:
        "GA4 attributes $8,585.78 to organic search — about 77% of all site revenue — and Bing drove 64% of it from just 276 sessions.",
      status: "positive",
    },
    {
      area: "Traffic",
      statement:
        "Clicks rose 12.8% to 874 and impressions 32.6% to 83.8K as the Odoo catalog re-indexed; non-brand clicks led, up 21.7%.",
      status: "positive",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased from 12.4 to 16 — expected as re-indexed migration URLs re-enter search lower before they settle.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "A heavy migration-recovery month: the Volusion→Odoo redirect map, crawl-path cleanup, indexation policy, sitemap resubmission, and 12-point live verification all closed.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Bring the migrated catalog back into search and convert it to revenue.",
      name: "Migration recovery",
      started:
        "The site had migrated from Volusion to Odoo, and much of the /shop catalog was still re-entering Google's index.",
      work:
        "We compared August with July in Search Console and pulled GA4-attributed organic revenue, then tied the recovering pages to the products earning revenue.",
      result:
        "Clicks rose 12.8% and impressions 32.6% as /shop category and product pages re-indexed; organic drove $8,585.78 (77% of site revenue), led by the products whose pages are recovering.",
      next:
        "Hold this baseline and measure the catalog's rankings recovery as the redirects and sitemap resubmission finish processing.",
    },
    {
      businessPriority:
        "Stop crawl waste and get the right Odoo URLs indexed.",
      name: "Indexation and crawl control",
      started:
        "The Odoo migration left a large 'crawled — currently not indexed' bucket, parameterized crawl paths, and utility/post-conversion pages competing for crawl budget.",
      work:
        "We built the Volusion→Odoo redirect map, defined an indexation policy with a noindex,follow URL list, specified Odoo crawl-path and parameter cleanup, and set sitemap governance with a GSC resubmission.",
      result:
        "The indexation rules and redirects are defined and largely shipped; the sitemap is resubmitted and the not-indexed bucket is segmented for follow-up.",
      next:
        "Confirm the redirects and sitemap are fully processed in GSC and work down the not-indexed bucket as Google recrawls.",
    },
    {
      businessPriority:
        "Reclaim the link equity the migration put at risk.",
      name: "Link equity reclamation",
      started:
        "A platform migration risks orphaning inbound links pointed at old Volusion URLs.",
      work:
        "We built a backlink reclamation redirect map so external links resolve to the correct Odoo pages, and completed a 12-point live verification of the changes.",
      result:
        "The reclamation redirects are mapped and verified live, protecting the authority flowing into the catalog.",
      next:
        "Monitor referring-domain and page authority as the redirects are recrawled.",
    },
    {
      businessPriority:
        "Make organic revenue measurable now that Odoo can't attribute it.",
      name: "Revenue and measurement",
      started:
        "Odoo carries no channel attribution, so organic revenue can't be read from the store platform directly.",
      work:
        "We used GA4 as the organic-revenue source of truth, reconciled it against Odoo's eCommerce report, and documented the by-engine, by-product, and by-landing-page splits.",
      result:
        "Organic revenue has a trustworthy figure ($8,585.78, 77% of site revenue), with Bing surfacing as a high-value channel; the gap is that GA4 must be pulled manually since the connector trial expired.",
      next:
        "Restore clean conversion tracking in Odoo and reconnect the GA4 connector so revenue reports without manual pulls.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 19, 2026",
      evidence:
        "ClickUp records the Odoo admin feasibility check as Closed on August 19, confirming what could be changed in-platform vs. needing client dev.",
      owner: "Roberto Verlezza",
      taskUrl: "https://app.clickup.com/t/868kt2mz9",
      title: "Completed the Odoo admin feasibility check",
    },
    {
      completedOn: "August 26, 2026",
      evidence:
        "ClickUp records the LV-01 to LV-12 live verification as Closed on August 26, verifying the migration changes in production.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2mz4",
      title: "Completed the 12-point live verification (LV-01 to LV-12)",
    },
    {
      completedOn: "August 26, 2026",
      evidence:
        "ClickUp records the indexation policy and noindex,follow URL list as Closed on August 26.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2n0m",
      title: "Defined the indexation policy and noindex,follow URL list",
    },
    {
      completedOn: "August 26, 2026",
      evidence:
        "ClickUp records the backlink reclamation redirect map as Closed on August 26.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2mzv",
      title: "Built the backlink reclamation redirect map",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the Volusion-to-Odoo redirect map as Closed on August 27 — the core migration redirect work.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2mzk",
      title: "Built the Volusion-to-Odoo redirect map",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records sitemap governance and GSC resubmission as Closed on August 27.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2n1a",
      title: "Set sitemap governance and resubmitted to GSC",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the Odoo crawl-path and parameter cleanup spec as Closed on August 27.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2n1f",
      title: "Specified Odoo crawl-path and parameter cleanup",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the missing meta descriptions and duplicate-title fixes as Closed on August 27.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2n1q",
      title: "Wrote missing meta descriptions and differentiated duplicate titles",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the /helpdesk 404 repair as Closed on August 27.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2n10",
      title: "Removed/repaired the /helpdesk 404",
    },
    {
      completedOn: "August 28, 2026",
      evidence:
        "ClickUp records the client dev-team handoff (six items requiring QWeb, DNS, or server access) as Closed on August 28.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868kt2n2n",
      title: "Handed off six items requiring client QWeb/DNS/server access",
    },
  ],

  kpiRows: [
    {
      metric: "Organic search revenue (GA4)",
      previous: "—",
      current: "$8,585.78",
      change: "77% of site rev.",
      businessMeaning:
        "GA4-attributed organic revenue for August across 2,006 sessions — the store's dominant channel. Bing drove 64% of it, Google 36%.",
      status: "positive",
    },
    {
      metric: "Organic clicks",
      previous: "775",
      current: "874",
      change: "+12.8%",
      businessMeaning:
        "Organic visits grew as the migrated /shop catalog re-entered the index.",
      status: "positive",
    },
    {
      metric: "Non-brand clicks",
      previous: "613",
      current: "746",
      change: "+21.7%",
      businessMeaning:
        "Non-brand demand led the recovery — the catalog pages, not the company name, drove the gain.",
      status: "positive",
    },
    {
      metric: "Search impressions",
      previous: "63.2K",
      current: "83.8K",
      change: "+32.6%",
      businessMeaning:
        "A large visibility gain as Odoo category and product pages were (re)indexed.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "12.4",
      current: "16.0",
      change: "-3.6 positions",
      businessMeaning:
        "Rankings eased as re-indexed migration URLs re-enter lower; expected to settle as they mature.",
      status: "watch",
    },
    {
      metric: "Organic CTR",
      previous: "1.2%",
      current: "1.0%",
      change: "-0.2 points",
      businessMeaning:
        "Click-through diluted as many new, lower-ranked impressions entered the pool.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic metrics are from the Google Search Console URL-prefix property https://www.evchargesolutions.com/, August 1-31 vs July 1-31, 2026 (both 31 days); exact clicks (874 vs 775) and impressions (83,843 vs 63,235) are the sum of the device rows, and non-brand uses GSC's built-in brand filter. Revenue is GA4-attributed organic search revenue (property 289659428, 'Organic Search' channel) for August 2026 — Odoo carries no channel attribution, so GA4 is the source of truth; it is shown for August only (no month-over-month yet). See the data notes for the Odoo reconciliation.",

  conversionPlan: {
    owner: "AIA SEO + Development",
    sourcePriority:
      "GA4 is the organic-revenue source of truth (Odoo carries no channel attribution). Restore clean conversion tracking in Odoo and reconnect the GA4 connector so revenue reports without manual GA4-UI pulls.",
    nextReportExpectation:
      "With tracking stable and a second post-migration month, the next report shows organic revenue month over month by search engine and product.",
  },

  performanceCharts: {
    revenue: {
      title: "Organic search revenue: $8,585.78 in August",
      insight:
        "Organic is the store's dominant channel — about 77% of site revenue (GA4). The surprise is Bing: 276 sessions produced $5,465 (64% of organic revenue), outpacing Google's $3,120 from 1,682 sessions — a high-value B2B pattern worth leaning into.",
      channelContext:
        "Source: GA4 property 289659428 ('Organic Search' session default channel), pulled from the GA4 UI — the Supermetrics connector trial expired July 15. Odoo carries no channel attribution (all August website orders group under Medium 'None'), so organic can't be isolated in Odoo; GA4's total site revenue ($11,159.87) reconciles closely to Odoo's eCommerce sales report ($11,323.73). Shown for August; a month-over-month view follows once post-migration tracking stabilizes.",
      rankings: [
        {
          insight:
            "Bing drove nearly two-thirds of organic revenue from a fraction of the sessions — an unusually high-value channel for this B2B catalog.",
          periods: [
            {
              label: "August 2026",
              items: [
                {
                  detail: "276 sessions",
                  display: "$5,465.31",
                  label: "Bing",
                  value: 5465.31,
                },
                {
                  detail: "1,682 sessions",
                  display: "$3,120.47",
                  label: "Google",
                  value: 3120.47,
                },
              ],
            },
          ],
          title: "Organic revenue by search engine (August)",
        },
        {
          insight:
            "Safety and cable-management hardware led — the product pages recovering in Search Console are the ones earning revenue.",
          periods: [
            {
              label: "August 2026",
              items: [
                { display: "$2,590", label: "Wall-Mounted Yellow Safety Guard", value: 2590 },
                { display: "$1,946", label: "Safety Bollard", value: 1946 },
                {
                  display: "$1,272",
                  label: "J1772 Replacement Charging Cable 25ft 40A",
                  value: 1272,
                },
                {
                  display: "$1,145",
                  label: "UCR Universal Cable Retractor (ratcheting)",
                  value: 1145,
                },
                { display: "$599", label: "Replacement AC Cable 25' (up to 80A)", value: 599 },
              ],
            },
          ],
          title: "Top products from organic revenue (August, GA4 item revenue)",
        },
      ],
    },
    growth: {
      title: "Traffic surged as the catalog re-indexed",
      insight:
        "Clicks rose 12.8% to 874 and impressions 32.6% to 83.8K — the migrated Odoo catalog re-entering Google's index. Both months had 31 days.",
      series: [
        {
          change: "+12.8%",
          current: 874,
          currentDisplay: "874",
          label: "Organic clicks",
          previous: 775,
          previousDisplay: "775",
          status: "positive",
        },
        {
          change: "+32.6%",
          current: 83843,
          currentDisplay: "83.8K",
          label: "Search impressions",
          previous: 63235,
          previousDisplay: "63.2K",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 775,
      baselineDisplay: "775",
      contributions: [
        { display: "+133", label: "Non-brand queries", value: 133 },
        { display: "-34", label: "Brand queries", value: -34 },
      ],
      insight:
        "The whole net gain — and more — came from non-brand queries (+133), the catalog pages re-entering search; brand queries eased 34. Growth driven by products, not the company name, is exactly what a migration recovery should look like.",
      title: "The recovery is non-brand — the catalog is re-indexing",
      total: 874,
      totalDisplay: "874",
    },
    homepage: {
      title: "The Odoo /shop catalog is climbing back",
      insight:
        "Category and product pages are recovering fast: the accessories & cables category added 7,209 impressions, and a Webasto portable-station product page went from 0 to 47 clicks after re-indexing. The homepage dipped slightly (233 to 205 clicks) as authority redistributes to the catalog.",
      series: [
        {
          change: "+72.7%",
          current: 114,
          currentDisplay: "114",
          label: "Accessories & cables category",
          previous: 66,
          previousDisplay: "66",
          status: "positive",
        },
        {
          change: "+34.3%",
          current: 47,
          currentDisplay: "47",
          label: "Level-3 DC fast-charging category",
          previous: 35,
          previousDisplay: "35",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Desktop and mobile both grew",
      insight:
        "Desktop led (+10.8%) and mobile grew faster in percentage (+18.2%); tablet is negligible. EV Charge's search traffic is desktop-dominant (587 of 874 clicks), consistent with B2B buyers.",
      series: [
        {
          change: "+10.8%",
          current: 587,
          currentDisplay: "587",
          label: "Desktop",
          previous: 530,
          previousDisplay: "530",
          status: "positive",
        },
        {
          change: "+18.2%",
          current: 279,
          currentDisplay: "279",
          label: "Mobile",
          previous: 236,
          previousDisplay: "236",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Average position eased from 12.4 to 16 and CTR from 1.2% to 1.0% as re-indexed migration URLs re-entered search at lower positions.",
      impact:
        "More impressions are landing at lower ranks, so click-through diluted even as clicks grew; the gains are early and not yet settled.",
      remediation:
        "Let the re-indexed URLs mature, keep the redirects and canonicals clean, and strengthen internal links to the recovering category and product pages.",
      eta: "Monitor over the next one to two recrawl cycles.",
    },
    {
      obstacle:
        "Six migration items still require client-side QWeb, DNS, or server access and were handed to the client dev team.",
      impact:
        "Until they land, parts of the redirect, indexation, and template work can't be fully closed, slowing the recovery.",
      remediation:
        "Track the six handoff items to completion with the client's developers and re-verify in GSC once deployed.",
      eta: "Dependent on client dev scheduling in September.",
    },
    {
      obstacle:
        "A large 'crawled — currently not indexed' bucket remains from the migration, and Odoo generates parameterized crawl paths.",
      impact:
        "Crawl budget is spent on low-value URLs while some catalog pages wait to be indexed.",
      remediation:
        "Work the segmented not-indexed bucket, apply the noindex,follow rules and parameter cleanup, and lean on the resubmitted sitemap as Google recrawls.",
      eta: "Progressive over September as recrawls complete.",
    },
    {
      obstacle:
        "Odoo carries no channel attribution (all orders group under Medium 'None'), and the GA4 connector trial expired July 15.",
      impact:
        "Organic revenue can't be read from Odoo and GA4 must be pulled manually, so revenue reporting is slower and can't yet be automated month over month.",
      remediation:
        "Restore clean conversion tracking in Odoo and reconnect the GA4 connector; keep GA4 as the organic source of truth and reconcile to Odoo's eCommerce report.",
      eta: "Tracking fix in September; automated month-over-month in a later report.",
    },
  ],

  technicalItems: [
    {
      issue:
        "The Volusion-to-Odoo migration left old URLs needing redirects and the XML sitemap needing governance and resubmission.",
      why: "Unredirected legacy URLs lose rankings and links, and a stale sitemap slows re-indexing of the new Odoo catalog.",
      fix:
        "The Volusion→Odoo redirect map and backlink reclamation map are built, and sitemap governance plus a GSC resubmission are in place.",
      developerNote:
        "ClickUp: redirect map 868kt2mzk, backlink reclamation 868kt2mzv, sitemap governance + GSC resubmission 868kt2n1a, live verification 868kt2mz4.",
    },
    {
      issue:
        "Odoo generates parameterized crawl paths and indexed utility/post-conversion pages, and a large 'crawled — currently not indexed' bucket remained.",
      why: "Crawl waste and index bloat delay the catalog pages that should rank.",
      fix:
        "An indexation policy with a noindex,follow URL list, Odoo crawl-path and parameter cleanup, and segmentation of the not-indexed bucket are complete.",
      developerNote:
        "ClickUp: indexation policy 868kt2n0m, crawl-path cleanup 868kt2n1f, noindex application 868kt2n0w, not-indexed segmentation 868kt2n35.",
    },
    {
      issue:
        "A /helpdesk 404 and missing/duplicate on-page metadata carried over into the Odoo site.",
      why: "404s waste crawl budget and lose users; missing or duplicate titles and descriptions cap click-through.",
      fix:
        "The /helpdesk 404 is repaired and missing meta descriptions and duplicate titles are written and differentiated.",
      developerNote: "ClickUp: /helpdesk 404 868kt2n10, meta/titles 868kt2n1q.",
    },
    {
      issue:
        "Six remaining fixes require client-side QWeb template, DNS, or server access.",
      why: "These are outside AIA's Odoo access and block full closure of the redirect/indexation/template work.",
      fix:
        "Documented and handed off to the client's dev team with the exact changes and verification steps.",
      developerNote: "ClickUp: client dev handoff 868kt2n2n; re-verify in GSC once deployed.",
    },
    {
      issue:
        "Odoo has no channel attribution and the GA4 connector trial expired, so organic revenue is a manual GA4-UI pull.",
      why: "Without automated attribution, revenue reporting is slow and can't be trended month over month yet.",
      fix:
        "Use GA4 as the organic source of truth and reconcile to Odoo's eCommerce report; restore Odoo tracking and reconnect the connector.",
      developerNote: "GA4 property 289659428; reconciles to Odoo eCommerce report; connector trial expired 2026-07-15.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://www.evchargesolutions.com/ (accessed under fulfillment@allinadvertising.com). A separate http://www URL-prefix property also exists; there is no domain property, so this property misses any non-www/http traffic. Platform is Odoo (migrated from Volusion).",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days.",
    "Total clicks (874 vs 775) and impressions (83,843 vs 63,235) are the sum of the device rows. Non-brand figures use Search Console's built-in brand filter: 746 clicks in August vs 613 in July; brand made up the remainder (~128 vs ~162) and eased month over month.",
    "Revenue source: GA4 property 289659428, 'Organic Search' session default channel group, August 2026. Organic Total revenue was $8,585.78 across 2,006 sessions — about 76.9% of all site revenue; organic item (product) revenue was $7,650.95 across 40 items. Shown for August only; no month-over-month yet.",
    "Organic revenue by engine (GA4 session source): Bing $5,465.31 (63.7%, 276 sessions), Google $3,120.47 (36.3%, 1,682 sessions); other engines produced no revenue. Top organic products (GA4 item revenue): Wall-Mounted Yellow Safety Guard $2,590, Safety Bollard $1,946, J1772 Replacement Cable 25ft $1,272, UCR Universal Cable Retractor $1,145. Top organic landing pages: the Safety Bollard product page $3,671.49 (42.8%) and the homepage $2,097.61 (24.4%).",
    "Odoo revenue context (no channel attribution — cannot isolate organic): Odoo eCommerce sales report total $11,323.73 (untaxed $10,657.94); Odoo confirmed website orders $15,100.11 across 16 orders, which includes one order still flagged 'To Invoice' ($3,776.38). GA4 total site revenue ($11,159.87) reconciles closely to the Odoo eCommerce report.",
    "GA4 was pulled from the UI because the Supermetrics connector trial expired July 15, 2026. 'Total revenue' in GA4 includes shipping; 'item revenue' is product subtotals only, which is why the product split is lower than the organic total.",
    "Completed-work evidence comes from ClickUp task closures in the EV Charge Solutions Task List; task closure records are the reporting source of truth.",
  ],
};
