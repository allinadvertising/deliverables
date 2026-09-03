import type { SeoStoryReportData } from "@/lib/reports/types";

export const everwhiteAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Reverse EverWhite's year-long organic decline by rebuilding the site's technical foundation and content, then connect clean revenue attribution so SEO's contribution to store sales can finally be measured.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Revenue",
    intro:
      "The revenue below is total WooCommerce store sales across every channel — it is not organic-attributed. GA4 e-commerce tracking captured only about 3% of August's orders, and WooCommerce order attribution still blends paid and organic Google, so SEO's share of revenue cannot be isolated yet. Everything after it — traffic, pages, non-brand demand, and devices — is organic search performance from Search Console.",
    title: "Store revenue and organic search performance",
  },

  meta: {
    action:
      "Fix GA4 e-commerce tracking and validate WooCommerce order attribution (organic vs paid Google), then execute the September build now unblocked by August's definitions — discontinued-URL 301s, sitemap and noindex cleanup, the whiteboard-size canonical merge, and internal links from the guides into commercial pages.",
    client: "EverWhite",
    coverHeadline:
      "Organic traffic rose for a second month. Revenue tracking still can't show what it earned.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://everwhiteboards.com/",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + WooCommerce Analytics + ClickUp delivery records",
  },

  executiveSummary:
    "EverWhite's organic search grew for a second straight month. Google clicks rose 11.3% to 1,849 while impressions fell 17%, so a smaller, more relevant impression pool converted to more visits; average position held at 9.0, well above the roughly 15 of a year ago. The gain was broad rather than concentrated — the refreshed 'how to clean a whiteboard' guide was the single biggest mover (+52 clicks, average position 7.1 to 4.6), two size pages slipped, and small increases across the catalog supplied the rest. August was primarily a foundation month: we closed all six SEO definitions that development depends on, delivered the SEO roadmap and a developer site audit, refreshed the flagship guide, and fixed a live-site shipping error. Revenue is the open problem — total WooCommerce store sales were $37,472 across 31 orders (every channel, down 34% month over month), but GA4 e-commerce tracking captured only about 3% of orders and WooCommerce's order attribution still blends paid and organic Google, so SEO's share of revenue cannot be reported yet. September fixes attribution and ships the redirect, sitemap and noindex cleanup, canonical merge, and internal-link work the August definitions unblocked.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks rose 11.3% to 1,849 — a second straight monthly gain — led by broad, catalog-wide increases rather than one breakout page.",
      status: "positive",
    },
    {
      area: "Revenue",
      statement:
        "Total WooCommerce store sales were $37,472 in August across all channels, down 34% month over month; organic's share can't be isolated until tracking is fixed.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position held at 9.0 (from about 15 a year ago), and the refreshed 'how to clean a whiteboard' guide climbed to 4.6 from 7.1.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "A foundation month: six SEO definitions, a developer site audit, and the flagship guide refresh all closed — unblocking September's redirect, sitemap, and internal-link build.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Confirm the organic recovery is real and broad, not a one-page spike.",
      name: "Monthly performance",
      started:
        "July delivered 1,662 organic clicks and about 367K impressions; the year-long decline had only just leveled off.",
      work:
        "We compared full-month Search Console performance (August vs July, both 31 days) across queries, pages, and devices, and pulled WooCommerce revenue for context.",
      result:
        "Clicks rose 11.3% to 1,849 with gains spread across the catalog; desktop and mobile both grew; average position held at 9.0.",
      next:
        "Hold the monthly baseline and confirm a durable turn as the September implementation work lands.",
    },
    {
      businessPriority:
        "Grow the informational guides that feed commercial intent.",
      name: "Content and flagship pages",
      started:
        "The 'how to clean a whiteboard' guide is the site's most-cited informational page but had gone stale.",
      work:
        "We refreshed the guide's content and reviewed the top commercial pages that lost ground.",
      result:
        "The guide gained 44% more clicks (118 to 170) and improved from average position 7.1 to 4.6, even as its impressions fell — a relevance win, not just more visibility. Two size and category pages slipped and are queued for internal links and refreshes.",
      next:
        "Add internal links from the guides into the commercial pages and merge the overlapping whiteboard-size content.",
    },
    {
      businessPriority:
        "Unblock development so the redirect, sitemap, and linking work can ship.",
      name: "SEO definitions and technical foundation",
      started:
        "The developer review was explicit that dev could not start redirects, sitemap exclusions, noindex, or internal links until SEO delivered the decisions.",
      work:
        "We closed all six SEO definitions — the whiteboard-size hub and canonical model, discontinued-URL mapping, the /mobileguard/ redirect target, sitemap and indexation triage, the internal-link map, and access confirmation — plus a developer site audit and the August roadmap.",
      result:
        "September's development starts unblocked instead of stalling, with a prioritized, dependency-mapped plan.",
      next:
        "Implement the 301s, sitemap exclusions, noindex rules, canonical merge, and internal links, then measure the changed-page cohort.",
    },
    {
      businessPriority:
        "Make SEO's contribution to store sales measurable.",
      name: "Revenue and attribution",
      started:
        "Revenue is recorded in WooCommerce, but GA4 e-commerce tracking captured only about 3% of orders, so organic revenue reads near zero.",
      work:
        "We reconciled August store sales in WooCommerce (net $37,472 across 31 orders) and reviewed the order-level attribution WooCommerce now captures.",
      result:
        "We confirmed the store's real revenue and the exact gap: attribution exists but blends paid and organic Google, so SEO's share is not yet reliable.",
      next:
        "Fix GA4 purchase tracking and validate WooCommerce attribution so the October report can show organic-attributed revenue.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 12, 2026",
      evidence:
        "ClickUp records the developer review of the SEO roadmap as Closed on August 12, scoping the dependency-mapped implementation plan.",
      owner: "Jose Martinez",
      taskUrl: "https://app.clickup.com/t/868kpmgkf",
      title: "Completed the developer review of the SEO roadmap",
    },
    {
      completedOn: "August 18, 2026",
      evidence:
        "ClickUp records the August EverWhite Boards SEO roadmap deliverable as Closed on August 18.",
      owner: "Karla Guzman",
      taskUrl: "https://app.clickup.com/t/868kpmgkn",
      title: "Delivered the August SEO roadmap",
    },
    {
      completedOn: "August 19, 2026",
      evidence:
        "ClickUp records the 'How to clean a whiteboard' content refresh as Closed on August 19; the page then gained 44% more clicks month over month.",
      owner: "Jose Martinez",
      taskUrl: "https://app.clickup.com/t/868kfjucr",
      title: "Refreshed the flagship 'how to clean a whiteboard' guide",
    },
    {
      completedOn: "August 24, 2026",
      evidence:
        "ClickUp records the developer site audit as Closed on August 24, documenting crawl, indexation, and template issues.",
      owner: "Roberto Verlezza",
      taskUrl: "https://app.clickup.com/t/868ku0aw9",
      title: "Completed the developer site audit",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the whiteboard-size hub and canonical-model definition as Closed on August 27, unblocking the September content merge.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868ktavtg",
      title: "Defined the whiteboard-size hub and canonical model",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the discontinued-URL to closest-replacement mapping as Closed on August 27, ready for 301 implementation.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868ktavtk",
      title: "Mapped discontinued product URLs to replacements",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the /mobileguard/ redirect destination and link-reclaim outreach target as Closed on August 27.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868ktavtt",
      title: "Chose the /mobileguard/ redirect and link-reclaim target",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the sitemap and indexation triage (low-value URL types to drop or noindex) as Closed on August 27.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868ktavtx",
      title: "Completed sitemap and indexation triage",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "ClickUp records the informational-to-commercial internal-link map as Closed on August 27, ready to implement.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868ktavu3",
      title: "Built the internal-link map: informational to commercial pages",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "1,662",
      current: "1,849",
      change: "+11.3%",
      businessMeaning:
        "A second straight monthly increase in organic visits, broad-based across the catalog.",
      status: "positive",
    },
    {
      metric: "Search impressions",
      previous: "367K",
      current: "306K",
      change: "-16.7%",
      businessMeaning:
        "Fewer impressions, but a higher share converted to clicks; still down year over year.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "9.1",
      current: "9.0",
      change: "+0.1 positions",
      businessMeaning:
        "Holding at 9, and far better than about 15 a year ago.",
      status: "positive",
    },
    {
      metric: "Organic CTR",
      previous: "0.5%",
      current: "0.6%",
      change: "+0.1 points",
      businessMeaning:
        "A larger share of search appearances became visits — more relevant visibility.",
      status: "positive",
    },
    {
      metric: "Store revenue (net, all channels)",
      previous: "$57,115",
      current: "$37,472",
      change: "-34%",
      businessMeaning:
        "Total WooCommerce sales, every channel — not organic. Down on fewer large orders; organic share is not yet measurable.",
      status: "watch",
    },
    {
      metric: "Orders (all channels)",
      previous: "37",
      current: "31",
      change: "-16%",
      businessMeaning:
        "Store-wide order count; average order value also eased from $1,544 to $1,209.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Clicks, impressions, CTR, and average position are from Google Search Console (URL-prefix property https://everwhiteboards.com/), August 1-31 vs July 1-31, 2026; both months have 31 days. Exact monthly clicks (1,849 vs 1,662) are the sum of the device rows; impressions are shown rounded. Revenue, orders, and average order value are from WooCommerce Analytics and are total store sales across all channels — not organic-attributed (see the revenue note). Year-over-year comparisons use August 2025; Ahrefs figures are third-party estimates.",

  conversionPlan: {
    owner: "Development + SEO (EverWhite)",
    sourcePriority:
      "Repair GA4 e-commerce purchase tracking, then validate WooCommerce order attribution and separate paid from organic Google.",
    nextReportExpectation:
      "Once tracking is validated against WooCommerce order records, the October report can show organic-attributed revenue for the first time.",
  },

  performanceCharts: {
    revenue: {
      title:
        "Store revenue fell month over month — and none of it is organic-attributed yet",
      insight:
        "Total WooCommerce sales (every channel) declined in August while organic search traffic rose, so this month's revenue move is a store-wide signal, not an SEO one. Isolating organic revenue is blocked until tracking is fixed.",
      channelContext:
        "These are total WooCommerce store sales across all channels — not organic-attributed. GA4 e-commerce tracking recorded about 3% of August's 31 orders, and WooCommerce's built-in order attribution still blends paid and organic Google (EverWhite also runs Google Ads), so SEO's share of revenue can't be reported reliably yet. Fixing that is September's first priority.",
      series: [
        {
          change: "-34%",
          current: 37472,
          currentDisplay: "$37,472",
          label: "Net sales (all channels)",
          previous: 57115,
          previousDisplay: "$57,115",
          status: "watch",
        },
        {
          change: "-16%",
          current: 31,
          currentDisplay: "31",
          label: "Orders",
          previous: 37,
          previousDisplay: "37",
          status: "watch",
        },
        {
          change: "-22%",
          current: 1208.77,
          currentDisplay: "$1,208.77",
          label: "Average order value",
          previous: 1543.65,
          previousDisplay: "$1,543.65",
          status: "watch",
        },
      ],
      rankings: [
        {
          insight:
            "August's best-selling products by net sales — total store, all channels. Resurfacing material and framed magnetic whiteboards led; organic attribution for these sales is not yet available.",
          periods: [
            {
              label: "August 2026",
              items: [
                {
                  detail: "SKU AA11NA",
                  display: "$12,834",
                  label: "Dry Erase High Gloss Resurfacing Material",
                  value: 12834,
                },
                {
                  detail: "SKU L7600",
                  display: "$11,184",
                  label: "Whiteboards — Magnetic Surface, Aluminum Frame",
                  value: 11184,
                },
                {
                  detail: "SKU L76G10",
                  display: "$6,538",
                  label: "EZGrid 1-Inch Ghost Grid Whiteboard — Magnetic",
                  value: 6538,
                },
                {
                  detail: "SKU L7600/N7600 (Custom)",
                  display: "$1,564",
                  label: "Aluminum Framed Whiteboard — Custom Size",
                  value: 1564,
                },
                {
                  detail: "SKU L76G0",
                  display: "$1,047",
                  label: "Magnetic Whiteboard — Custom Printed Design",
                  value: 1047,
                },
              ],
            },
          ],
          title: "Top products by store revenue (August)",
        },
      ],
    },
    growth: {
      title: "Organic traffic grew for a second straight month",
      insight:
        "Clicks rose 11.3% to 1,849 while impressions fell 17% — a smaller but more relevant impression pool converted to more visits. Both months had 31 days, so no calendar adjustment is needed.",
      series: [
        {
          change: "+11.3%",
          current: 1849,
          currentDisplay: "1,849",
          label: "Organic clicks",
          previous: 1662,
          previousDisplay: "1,662",
          status: "positive",
        },
        {
          change: "-16.7%",
          current: 305787,
          currentDisplay: "306K",
          label: "Search impressions",
          previous: 367000,
          previousDisplay: "367K",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 1662,
      baselineDisplay: "1,662",
      contributions: [
        {
          display: "+52",
          label: "How-to-clean guide refresh",
          value: 52,
        },
        {
          display: "-62",
          label: "Standard-size & what-size pages",
          value: -62,
        },
        {
          display: "+197",
          label: "Broad gains across the catalog",
          value: 197,
        },
      ],
      insight:
        "August's rise was distributed, not concentrated. The refreshed cleaning guide was the biggest single gainer (+52 clicks), two size pages slipped (-62 combined), and small gains across the rest of the catalog supplied +197 — the opposite of a one-page spike.",
      title: "Broad gains lifted clicks — not a single breakout page",
      total: 1849,
      totalDisplay: "1,849",
    },
    homepage: {
      title: "The refreshed flagship guide converted far better",
      insight:
        "The 'how to clean a whiteboard' guide's impressions fell 56%, but clicks rose 44% and average position improved from 7.1 to 4.6 — the refresh made the page more relevant, not just more visible.",
      series: [
        {
          change: "-55.5%",
          current: 85078,
          currentDisplay: "85,078",
          label: "Search impressions",
          previous: 153410,
          previousDisplay: "153,410",
          status: "watch",
        },
        {
          change: "+44.1%",
          current: 170,
          currentDisplay: "170",
          label: "Organic clicks",
          previous: 118,
          previousDisplay: "118",
          status: "positive",
        },
        {
          change: "+0.12 points",
          current: 0.2,
          currentDisplay: "0.20%",
          label: "Click-through rate",
          previous: 0.08,
          previousDisplay: "0.08%",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Desktop and mobile both grew",
      insight:
        "Mobile led with +14% and desktop rose +9%; tablet was flat at 18 clicks. Unlike many stores, EverWhite's desktop and mobile clicks are nearly even.",
      series: [
        {
          change: "+8.9%",
          current: 957,
          currentDisplay: "957",
          label: "Desktop",
          previous: 879,
          previousDisplay: "879",
          status: "positive",
        },
        {
          change: "+14.2%",
          current: 874,
          currentDisplay: "874",
          label: "Mobile",
          previous: 765,
          previousDisplay: "765",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Revenue attribution is broken: GA4 e-commerce tracking recorded about 3% of August's 31 orders (roughly $3.4K of $37.5K), and WooCommerce order attribution blends paid and organic Google.",
      impact:
        "SEO's contribution to store revenue cannot be measured, so a rising-traffic month can't yet be tied to sales.",
      remediation:
        "Repair GA4 purchase tracking, validate WooCommerce order attribution against order records, and separate paid from organic Google.",
      eta: "Attribution fix in September; first clean organic revenue in the October report.",
    },
    {
      obstacle:
        "Total WooCommerce store sales fell 34% month over month (net $37,472 vs $57,115) on fewer orders (31 vs 37).",
      impact:
        "The store-wide decline is an all-channel signal — driven by fewer large orders, not organic — but it can look like an SEO problem without attribution to prove otherwise.",
      remediation:
        "Report store revenue as all-channel context until attribution is fixed, and track organic traffic-to-lead signals in parallel.",
      eta: "Contextualized each month; resolved once attribution lands.",
    },
    {
      obstacle:
        "Several commercial pages lost clicks: standard-classroom-whiteboard-size (-34), what-size-whiteboard-do-you-need (-28), and the whiteboard-calendars category (-9).",
      impact:
        "These are buy-intent pages; their losses partly offset the informational gains.",
      remediation:
        "Add internal links from the flagship guides into these pages, refresh on-page content, and complete the whiteboard-size canonical merge.",
      eta: "Internal links and content merges across September and October.",
    },
    {
      obstacle:
        "The flagship guide's impressions fell 56% (153,410 to 85,078) even as clicks rose, and organic traffic is still down about 43% year over year.",
      impact:
        "One strong month is stabilization, not recovery; impression volatility and the year-over-year gap mean the trend has to hold.",
      remediation:
        "Execute the full roadmap — redirects, sitemap and noindex cleanup, internal links, and content merges — and hold the monthly baseline.",
      eta: "Confirm a durable turn by the November report.",
    },
  ],

  technicalItems: [
    {
      issue:
        "Index bloat and discontinued-product 404s: the crawl found low-value URL types and discontinued products returning 404s.",
      why:
        "Index bloat dilutes the pages that should rank and wastes crawl budget on pages that should not be indexed.",
      fix:
        "Sitemap and indexation triage is complete; September implements XML sitemap exclusions, noindex/robots rules, and closest-match 301 redirects for discontinued products.",
      developerNote:
        "Definitions closed in ClickUp: sitemap/indexation triage 868ktavtx and discontinued-URL mapping 868ktavtk.",
    },
    {
      issue:
        "The /mobileguard/ legacy path carried backlinks but had no clear destination.",
      why: "Orphaned legacy URLs leak link equity and confuse users and crawlers.",
      fix:
        "The redirect destination and a link-reclaim outreach target are chosen; the 301 is scheduled for September.",
      developerNote: "ClickUp task 868ktavtt (closed August 27).",
    },
    {
      issue:
        "Overlapping 'whiteboard size' content competed with itself, and commercial pages lacked internal links from the informational guides.",
      why: "Cannibalization and thin internal linking cap how well the best pages can rank.",
      fix:
        "The whiteboard-size hub and canonical model are defined and an internal-link map is built; September merges the overlapping content and adds the links.",
      developerNote:
        "ClickUp tasks 868ktavtg (canonical model) and 868ktavu3 (internal-link map).",
    },
    {
      issue: "A shipping error on the live site was affecting checkout.",
      why: "Checkout errors directly suppress conversions and add support load.",
      fix: "Developers verified and resolved the live-site shipping error.",
      developerNote: "ClickUp task 868ku8mez (closed August 24, Roberto Verlezza).",
    },
    {
      issue:
        "GA4 e-commerce purchase tracking is capturing only about 3% of orders, and channel attribution is unreliable.",
      why: "Without clean tracking, no channel — organic or paid — can be credited with revenue.",
      fix:
        "Repair GA4 purchase tracking and validate WooCommerce order attribution as September's first priority.",
      developerNote:
        "Scope from the developer review 868kpmgkf and the dev site audit 868ku0aw9.",
    },
  ],

  dataNotes: [
    "Performance source: Google Search Console URL-prefix property https://everwhiteboards.com/ (accessed under fulfillment@allinadvertising.com). Platform is WordPress / WooCommerce.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days, so no per-day normalization is needed. Year-over-year comparisons use August 2025.",
    "Total organic clicks (1,849 in August, 1,662 in July) are the sum of the device rows; impressions are shown rounded (about 306K vs 367K).",
    "Non-branded queries were isolated with Search Console's built-in brand filter; brand terms account for roughly 3% of clicks.",
    "Revenue, orders, and average order value are from WooCommerce Analytics (Revenue and Orders reports) and are TOTAL store sales across all channels — not organic-attributed. Net sales were $37,472 in August (across 31 orders) and $57,115 in July; total sales including shipping and tax were $49,487.91 in August.",
    "GA4 e-commerce purchase tracking recorded about 1 of 31 August orders (roughly $3.4K vs $37.5K actual, about 3%). WooCommerce's order attribution captures a source per order but still blends paid and organic Google, so organic revenue is not reported this month.",
    "Top products are from the WooCommerce product export for August 2026, ranked by net sales (total store).",
    "Completed-work evidence comes from ClickUp task status, names, assignees, and closure dates in the Ever White Task List; task closure records are the reporting source of truth.",
    "Ahrefs figures (Domain Rating 34 and year-over-year estimates) are third-party estimates and indicate direction, not measured traffic.",
  ],
};
