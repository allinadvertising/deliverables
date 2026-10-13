import type { SeoStoryReportData } from "@/lib/reports/types";

// Old Chevy Trucks, September 2026. Built from output/old-chevy-trucks-september-2026/data.json
// (GSC API, GA4 Data API and ClickUp, pulled 2026-10-05). Calendar months only: September 1-30
// against August 1-31, with no overlap between the two reports.
// Revenue treatment: the store is Magento. GA4 counts purchase events (243 organic against 269, and
// 496 against 582 on all channels) but every one of them carries a value of $0.00, so GA4 knows
// orders happened and not what they were worth. Order counts are reported as GA4 purchase events,
// labelled as such, never as revenue, and no revenue chart is used. A Magento order export, or the
// admin access to pull one, is the first measurement deliverable in conversionPlan.
// Brand reading: Google hides the query behind 89.1% of September clicks and 87.8% of August's, so
// the three-way query visibility split (brand 566/761, other named searches 741/745, searches
// Google does not show 10,654/10,792) is used everywhere. No brand or non-brand share of total
// clicks is stated as fact.
// Delivered work: only two ClickUp items closed inside September. One is an ads creatives refresh,
// which is not SEO work and is left out. The other is the Magento SEO feasibility check. Twelve
// further items were closed in a bulk sweep on September 11, which is not evidence that the work
// shipped, so none of them is reported as delivered. completedWork is deliberately short.
// No businessObjective field: there is no recorded objective for this client (no kickoff file, and
// the Knowledge Center entry carries no business model), and the house rule is never to invent one.
export const oldChevyTrucksSeptember2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Everything below is organic search performance from Google Search Console, September 1-30 compared with August 1-31. September has 30 days and August has 31. There is no revenue chart: GA4 counts the orders this site takes but records every one of them at a value of $0.00, so order value has to come from Magento before it can be reported.",
    title: "Organic search performance, September vs August",
  },

  meta: {
    action:
      "Get a Magento order export for August and September, or the admin access to pull one, so the next report can show what organic orders were worth. In parallel, run the October diagnostic already scheduled: sort the pages Google has not indexed by type, compare the old and the new era category addresses and decide what happens to each old one, and check the product pages that lost visibility against Merchant Center and indexing.",
    client: "Old Chevy Trucks",
    coverHeadline:
      "Organic clicks held almost flat at 11,961 against 12,298, a 2.7% dip, while visits from every other channel fell far harder, so search carried 42.2% of all site sessions against 32.1% in August. The site also ranked nearly a full place higher, average position 6.37 against 7.27, on 8.4% fewer impressions.",
    currentPeriod: "September 1-30, 2026",
    previousPeriod: "August 1-31, 2026",
    property: "oldchevytrucks.com (Search Console domain property)",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "Organic search was the steady part of a month in which the rest of the site's traffic fell away. Organic clicks came in at 11,961 against 12,298, a loss of 337 or 2.7%, and September has one fewer day than August, so part of that gap is calendar rather than performance. Over the same two months GA4 recorded 43,328 sessions from all channels against 58,371, a fall of 25.8%, while organic sessions moved only from 18,744 to 18,289. Organic therefore carried 42.2% of the site's sessions in September against 32.1% in August. It did not grow, it held, and holding is what moved its share. Quality improved while reach shrank. Average position improved from 7.27 to 6.37, nearly a full place, and click-through rate rose from 2.92% to 3.10%, while impressions fell 8.4% from 421,700 to 386,422. Fewer impressions alongside better average positions and a higher click-through rate is consistent with the site dropping out of searches where it sat deep in the results and was rarely clicked, rather than losing ground in the searches that earn clicks. That is a reading of the shape of the numbers, not a proven cause, and the October diagnostic is what will test it. A caution before any brand reading. Google withholds rare queries for privacy, and in September those searches it does not show carried 10,654 of the 11,961 clicks, 89.1% of the total, against 87.8% in August. Only 1,307 September clicks came from searches Google actually names, so no brand or non-brand share of the month can be stated as fact. Of the three groups Search Console does allow, searches naming the company fell to 566 clicks from 761, other named searches were flat at 741 against 745, and the searches Google does not show fell to 10,654 from 10,792. Those hidden searches hold 138 of the 337 clicks lost, and named brand searches hold 195 of them. What can be inspected is pages and devices. The homepage carries 176 of the 337 clicks lost, 52% of the month's decline, falling from 1,249 clicks to 1,073 while its own average position improved from 9.0 to 8.6 and its impressions fell 18.9%. One blog page, the plaid valve covers article, lost 93 clicks (142 to 49) with its impressions down 52.6% and its average position slipping from 2.1 to 2.9. The two main era category pages softened in step with the site: 1934-1946 fell to 141 clicks from 164 and 1947-1955 to 100 from 110. Six pages in September's top 25 carry no August row in the same pull, together worth 216 clicks, among them the 1967-1972 parts catalog page (48 clicks) and the 1935 Suburban article (39). Mobile carries 266 of the 337 clicks lost, which is what a 62.7% share of clicks implies rather than a mobile-specific problem: mobile fell 3.4% against 1.0% on desktop, and the impression loss is almost even across devices at 8.6% on mobile, 7.9% on desktop and 9.5% on tablet. The open problem is what the search traffic is worth. GA4 counted 243 purchase events from organic search in September against 269 in August, and 496 against 582 across all channels, so the orders are being counted. Every one of them is recorded with a value of $0.00, which means GA4 knows that orders happened and not what they were worth. No revenue figure appears anywhere in this report because none can be trusted yet. A Magento order export for August and September, or the admin access to pull one, is the first deliverable, and with it the next report shows organic order value, average order value and the revenue share of search next to the traffic. The SEO work now in flight is diagnostic and sits in October: classifying the pages Google has crawled but not indexed, comparing the old era category addresses with the new ones and deciding what happens to each old address, and checking the product pages that lost visibility against Merchant Center and indexing. September itself closed one SEO item, a feasibility check on what the Magento build can take and how changes reach it, which is what the October work depends on.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks held almost flat at 11,961 against 12,298, down 2.7%, while all-channel sessions fell 25.8%. Organic carried 42.2% of site sessions against 32.1%. The homepage holds 176 of the 337 clicks lost.",
      status: "positive",
    },
    {
      area: "Revenue",
      statement:
        "GA4 counted 243 purchase events from organic search against 269, and 496 against 582 on all channels, but records every order at a value of $0.00. A Magento order export, or the admin access to pull one, turns these counts into revenue in the next report.",
      status: "unavailable",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved from 7.27 to 6.37, nearly a full place, and click-through rate rose from 2.92% to 3.10%. The site ranks better on 8.4% fewer impressions.",
      status: "positive",
    },
    {
      area: "Technical and measurement",
      statement:
        "One SEO item closed in September, a feasibility check on what the Magento build can take and how changes reach it. The October diagnostic on indexing, era category addresses and lost product pages is scheduled and dated.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Hold the search traffic that already converts, and find where the reach went.",
      name: "Organic traffic and visibility",
      started:
        "August closed at 12,298 organic clicks on 421,700 impressions, at an average position of 7.27 and a click-through rate of 2.92%.",
      work:
        "September was compared with August in Search Console by page, by device and by the three query groups Google reports: searches naming the company, other named searches, and searches Google does not show. GA4 was read alongside it for organic and all-channel sessions.",
      result:
        "Clicks came in at 11,961 and impressions at 386,422. Average position improved to 6.37 and click-through rate to 3.10%. Of the 337 clicks lost, the homepage holds 176 and one blog page, plaid valve covers, holds 93. Mobile holds 266, in line with its 62.7% share of clicks, and the impression loss is near even across devices. Against this, all-channel sessions fell 25.8% while organic sessions fell 2.4%, so organic went from 32.1% of the site's sessions to 42.2%.",
      next:
        "Watch the homepage specifically: it lost 18.9% of its impressions while its own average position improved, so the question is which searches it has stopped appearing in. Track clicks, impressions and position weekly through October as the diagnostic work lands.",
    },
    {
      businessPriority: "Make sure every era and product category Google should rank has one address and is indexed.",
      name: "Indexing and category structure",
      started:
        "The site runs era category pages (1934-1946, 1947-1955, 1955-1959, 1967-1972) alongside deeper product and catalog addresses, and a set of pages Google has crawled without indexing them.",
      work:
        "The October plan was scheduled and dated: sort the non-indexed pages by type (October 7), compare the old era category addresses with the new ones (October 6), recommend what happens to each old address (October 10), and check the product pages that lost visibility against Merchant Center and indexing (October 13).",
      result:
        "The work is scheduled, not yet delivered, so nothing in September's numbers reflects it. The case for doing it first is in this month's data: impressions fell 8.4% while average position improved, the homepage lost 9,326 impressions on its own, and the two main era category pages lost 475 and 599 impressions while their positions barely moved.",
      next:
        "Deliver the four October items in the order above, then give each old era category address one decision: keep, redirect to the new address, or remove. A single address per category is what stops two versions of the same page competing.",
    },
    {
      businessPriority: "Know what the Magento build can take before committing to on-site changes.",
      name: "Platform and technical readiness",
      started:
        "The store runs on Magento, and the on-site work the diagnostic will recommend (address changes, redirects, indexing controls, structured data) depends on what the build allows and how changes reach production.",
      work:
        "A Magento SEO feasibility check was completed on September 15, covering what can be changed on the platform and by what route.",
      result:
        "The feasibility check is closed. It is the one SEO item that closed inside September, and it is what the October recommendations will be written against, so they can be specified as changes the platform can actually take.",
      next:
        "Turn the October diagnostic findings into a developer specification sized against the feasibility check, so each recommended change names the place it is made and the route it ships by.",
    },
    {
      businessPriority: "Put a value on the orders search already produces.",
      name: "Order and revenue measurement",
      started:
        "GA4 counts purchase events on this site and records each one at a value of $0.00, so order counts exist and order value does not.",
      work:
        "Both months were pulled from GA4 for organic and all channels: 243 organic purchase events in September against 269, 496 against 582 on all channels, and $0.00 of purchase revenue in every one of those four figures.",
      result:
        "Order counts can be reported and are reported here, labelled as GA4 purchase events. Revenue cannot, so none is shown and none is estimated from traffic. Organic held 49.0% of all purchase events in September against 46.2% in August, which is the one conversion comparison the current data supports.",
      next:
        "Obtain a Magento order export for August and September, or the admin access to pull one, and reconcile its order count against GA4's. Then fix the purchase value in the GA4 ecommerce event so the two agree going forward, and report organic order value, average order value and the revenue share of search every month.",
    },
  ],

  completedWork: [
    {
      completedOn: "September 15, 2026",
      evidence:
        "Closed September 15. A feasibility check on the Magento build established what SEO changes the platform can take and by what route they reach production. The October recommendations on category addresses, redirects and indexing will be written against it, so each one can be specified as a change the build supports.",
      owner: "Developer",
      title: "Completed the Magento SEO feasibility check",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "12,298",
      current: "11,961",
      change: "-2.7%",
      businessMeaning:
        "Visits from Google search held almost flat, down 337. September also has one fewer day than August. In the same two months visits from all channels fell 25.8%, so search was the steadiest source the site had.",
      status: "positive",
    },
    {
      metric: "Search impressions",
      previous: "421,700",
      current: "386,422",
      change: "-8.4%",
      businessMeaning:
        "The site appeared in 35,278 fewer searches. The homepage accounts for 9,326 of them and searches naming the company for 3,381. Average position improved at the same time, so this is about how many searches the site is in.",
      status: "watch",
    },
    {
      metric: "Click-through rate",
      previous: "2.92%",
      current: "3.10%",
      change: "0.18 points better",
      businessMeaning:
        "A larger share of the searches the site appeared in turned into visits. Combined with the smaller impression count, it points at the site losing appearances that were not earning clicks.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "7.27",
      current: "6.37",
      change: "0.90 better",
      businessMeaning:
        "The site sits nearly a full place higher on average, which is the clearest good news in the month. A lower position number is better.",
      status: "positive",
    },
    {
      metric: "Clicks from searches naming the company",
      previous: "761",
      current: "566",
      change: "-25.6%",
      businessMeaning:
        "Searches containing the company or site name gave 195 fewer clicks, and one term holds 161 of them. Their impressions fell 47.9% to 3,673. These are 4.7% of all clicks, so they move the total far less than the figure suggests.",
      status: "watch",
    },
    {
      metric: "Clicks from other named searches",
      previous: "745",
      current: "741",
      change: "-0.5%",
      businessMeaning:
        "The searches that do not name the company and that Google does show were flat, down 4 clicks. This is the group that can be read query by query, and it did not move.",
      status: "positive",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "10,792",
      current: "10,654",
      change: "-1.3%",
      businessMeaning:
        "Google withholds rare queries for privacy, and they carried 89.1% of September clicks against 87.8% in August. Their brand status is unknown, so no brand share of the month can be stated. They hold 138 of the 337 clicks lost.",
      status: "positive",
    },
    {
      metric: "Homepage clicks",
      previous: "1,249",
      current: "1,073",
      change: "-14.1%",
      businessMeaning:
        "The largest single entry point, at 9.0% of organic clicks, and the biggest single loss of the month at 176 clicks. Its impressions fell 18.9% while its own average position improved from 9.0 to 8.6.",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "18,744",
      current: "18,289",
      change: "-2.4%",
      businessMeaning:
        "GA4 shows the same direction and nearly the same size of change as Search Console, which is the cross-check that matters. Organic was 42.2% of all site sessions in September against 32.1% in August.",
      status: "positive",
    },
    {
      metric: "All-channel sessions (GA4)",
      previous: "58,371",
      current: "43,328",
      change: "-25.8%",
      businessMeaning:
        "Visits from every channel together fell 15,043 while organic fell 455. This is context for the month, and the reason organic's share of the site rose. The causes sit outside organic search.",
      status: "watch",
    },
    {
      metric: "Organic purchase events (GA4)",
      previous: "269",
      current: "243",
      change: "-9.7%",
      businessMeaning:
        "GA4 counted 243 orders from organic search, 26 fewer than August. This is an event count, not revenue: GA4 records each of these orders at a value of $0.00, so what they were worth is not in this figure.",
      status: "watch",
    },
    {
      metric: "Purchase events, all channels (GA4)",
      previous: "582",
      current: "496",
      change: "-14.8%",
      businessMeaning:
        "Orders from every channel fell 86, a steeper fall than organic's. Organic held 49.0% of all purchase events in September against 46.2% in August, so search carried more of the store's orders than it did last month.",
      status: "watch",
    },
    {
      metric: "Organic order value",
      previous: "Not reported",
      current: "Not reported",
      change: "n/a",
      businessMeaning:
        "GA4 records every purchase on this site, on every channel, at a value of $0.00, so no revenue figure in this report would be trustworthy and none is shown. A Magento order export for both months, or the admin access to pull one, is the first measurement deliverable, and the next report carries organic order value and average order value.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console domain property for oldchevytrucks.com through the API, September 1-30 against August 1-31, 2026. September has 30 days and August has 31, and the two periods do not overlap. Clicks (11,961 against 12,298) and impressions (386,422 against 421,700) are exact and equal the sum of the device rows. CTR and average position are Search Console's own averages, and a lower position number is better. Searches naming the company are queries containing the site name or the trading name; that rule is being confirmed alongside the measurement work, because one of the terms it matches reads as a generic phrase as well as a name. Google withholds rare queries for privacy: 10,654 of 11,961 September clicks (89.1%) and 10,792 of 12,298 August clicks (87.8%) came from searches Google does not show, so no brand or non-brand share of total clicks is stated as fact anywhere in this report. Only 1,307 September clicks came from searches Google names at all. Organic sessions come from the GA4 property for this site, Organic Search channel. GA4's purchase event counts (243 organic against 269, 496 all channels against 582) are event counts only: purchase revenue and total revenue are $0.00 on every channel in both months, so GA4 cannot supply order value and no revenue figure appears in this report. Store revenue has to come from a Magento order export, which is the first measurement deliverable. Delivered work comes from ClickUp items closed inside September 2026 on this account's task list, with work owned by teams outside SEO and template or administrative items excluded.",

  conversionPlan: {
    owner: "Account Manager + Head of SEO",
    sourcePriority:
      "A Magento order export for August and September 2026, with order date, order total and channel or source where the platform holds it, or the admin access to pull that export directly. That single file turns the 243 and 269 organic order counts already in GA4 into order value, average order value and a revenue share for search. The second step is to fix the purchase value in the GA4 ecommerce event, so the value travels with every future order and GA4 and Magento agree without a manual export. The export comes first because it also gives the two months already measured a value, rather than starting the clock from the month the tracking is fixed.",
    nextReportExpectation:
      "The next report shows organic order value, average order value and the share of store revenue that came from organic search, next to the clicks and the pages that produced it, with the Magento order count reconciled against GA4's. The order counts stay in the report as the continuity measure, and once the GA4 value is correct the two sources are reported side by side so any gap is visible rather than assumed.",
  },

  performanceCharts: {
    growth: {
      title: "Clicks nearly held, reach fell",
      insight:
        "Clicks came in at 11,961 against 12,298, a loss of 337, while impressions fell 8.4%. Because impressions fell faster than clicks, click-through rate rose from 2.92% to 3.10% and average position improved from 7.27 to 6.37. September has 30 days and August 31.",
      series: [
        {
          change: "-2.7%",
          current: 11961,
          currentDisplay: "11,961",
          label: "Organic clicks",
          previous: 12298,
          previousDisplay: "12,298",
          status: "watch",
        },
        {
          change: "-8.4%",
          current: 386422,
          currentDisplay: "386,422",
          label: "Search impressions",
          previous: 421700,
          previousDisplay: "421,700",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 12298,
      baselineDisplay: "12,298",
      contributions: [
        { display: "-195", label: "Searches naming the company", value: -195 },
        { display: "-4", label: "Other named searches", value: -4 },
        { display: "-138", label: "Searches Google does not show", value: -138 },
      ],
      insight:
        "Searches naming the company lost 195 clicks, other named searches were flat at 4 fewer, and the searches Google does not show lost 138. Google withholds those rare queries for privacy and they carried 89.1% of September clicks, so their brand status is unknown and this chart makes no claim about a brand versus non-brand split of the month. Only 1,307 of the 11,961 clicks came from searches Google names.",
      title: "The 337-click difference, by type of search",
      total: 11961,
      totalDisplay: "11,961",
    },
    homepage: {
      title: "The homepage carries half the month's loss",
      insight:
        "The homepage took 1,073 clicks, 9.0% of all organic clicks, and lost 176 of the 337 clicks the site lost. Its impressions fell 18.9%, more than twice the site's 8.4%, while its own average position improved from 9.0 to 8.6. It is being shown less often rather than ranking worse.",
      series: [
        {
          change: "-14.1%",
          current: 1073,
          currentDisplay: "1,073",
          label: "Clicks",
          previous: 1249,
          previousDisplay: "1,249",
          status: "watch",
        },
        {
          change: "-18.9%",
          current: 40135,
          currentDisplay: "40,135",
          label: "Impressions",
          previous: 49461,
          previousDisplay: "49,461",
          status: "watch",
        },
        {
          change: "0.4 better",
          current: 8.6,
          currentDisplay: "8.6",
          label: "Average position",
          previous: 9.0,
          previousDisplay: "9.0",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "The loss follows the size of each device, not one device",
      insight:
        "Mobile fell 3.4% to 7,502 clicks, desktop 1.0% to 4,082 and tablet 7.4% to 377. Mobile holds 266 of the 337 clicks lost because it holds 62.7% of clicks, against 63.2% in August, so the split barely moved. Impressions fell 8.6% on mobile, 7.9% on desktop and 9.5% on tablet, which is close to even.",
      series: [
        {
          change: "-1.0%",
          current: 4082,
          currentDisplay: "4,082",
          label: "Desktop",
          previous: 4123,
          previousDisplay: "4,123",
          status: "watch",
        },
        {
          change: "-3.4%",
          current: 7502,
          currentDisplay: "7,502",
          label: "Mobile",
          previous: 7768,
          previousDisplay: "7,768",
          status: "watch",
        },
        {
          change: "-7.4%",
          current: 377,
          currentDisplay: "377",
          label: "Tablet",
          previous: 407,
          previousDisplay: "407",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Order value is missing from the analytics. GA4 counts every purchase on this site, 243 from organic search in September and 496 across all channels, and records each one at a value of $0.00.",
      impact:
        "Search can be judged on orders but not on the money behind them, so a month where organic took a larger share of the store's orders cannot be valued, and the return on the work cannot be calculated.",
      remediation:
        "Supply a Magento order export for August and September 2026 with order date, total and source, or the admin access to pull it. Then correct the purchase value in the GA4 ecommerce event so future orders carry their value automatically.",
      eta: "Export in October, GA4 event value to follow, both reported from the next report onward.",
    },
    {
      obstacle:
        "Search reach fell 8.4%, 35,278 impressions, with the homepage alone down 9,326 and the two main era category pages down 475 and 599.",
      impact:
        "Every search the site stops appearing in is a buyer who never sees it. The site cannot grow on a shrinking set of appearances, however well the remaining ones rank.",
      remediation:
        "Work the October diagnostic in order: sort the pages Google has crawled but not indexed by type, compare the old and the new era category addresses, decide what happens to each old address, and check the product pages that lost visibility against Merchant Center and indexing.",
      eta: "October 6 to October 13.",
    },
    {
      obstacle:
        "Google withholds the query behind 89.1% of September clicks and 87.8% of August's. Only 1,307 September clicks come from searches it names.",
      impact:
        "Query-level diagnosis covers about one click in nine, so a decline cannot be traced to search terms, and any brand versus non-brand reading of this account would be guesswork presented as fact.",
      remediation:
        "Diagnose at page, category and device level, which is complete data, and use the three groups Search Console does report (named company searches, other named searches, withheld searches) as the only query split in the report.",
      eta: "Standing method for this account.",
    },
    {
      obstacle:
        "The plaid valve covers blog page lost 93 clicks, from 142 to 49, with its impressions down 52.6% and its average position slipping from 2.1 to 2.9.",
      impact:
        "This is the largest single page loss after the homepage, and it is a page that was ranking at the top of the first page. A page losing both appearances and position at once usually means something changed in the results around it or on the page itself.",
      remediation:
        "Review what now ranks for the searches that page used to win, check the page against the current results, and include it in the product and content pages checked in the October visibility review.",
      eta: "October.",
    },
    {
      obstacle:
        "Twelve items on the account's task list were closed in a single sweep on September 11, covering earlier months' development hours, onsite implementations and schema markup.",
      impact:
        "Their closure date does not establish when or whether the work shipped, so none of them is reported here as delivered. The result is a report that shows one closed SEO item in September, which understates what may exist on the site.",
      remediation:
        "Verify the onsite changes and the schema markup directly on the live pages, then record what is confirmed live so it can be credited and measured.",
      eta: "October, alongside the indexing review.",
    },
  ],

  technicalItems: [
    {
      issue:
        "A set of pages has been crawled by Google and not indexed, and they have not yet been grouped by what kind of page they are.",
      why:
        "A page Google will not index cannot rank, so each one is a product, category or article that buyers cannot reach from search. Grouping them by type is what separates pages to fix from pages to consolidate or remove, and the impression loss this month is consistent with a shrinking set of eligible pages.",
      fix: "Sort the non-indexed pages by type, then assign each group one treatment: fix and resubmit, consolidate into a stronger address, or remove.",
      developerNote: "Scheduled for October 7 with the SEO Strategist, with the developer specification to follow.",
    },
    {
      issue:
        "The site carries both old and new addresses for the era categories, and no decision is recorded for the old ones.",
      why:
        "Two addresses for the same category compete for the same searches and split the links and history between them, which caps how well either can rank. It also makes the category pages harder to crawl consistently.",
      fix: "Compare the old and the new era category addresses side by side, then give each old address one decision: keep it, redirect it to the new address, or remove it. Test every redirect after it ships.",
      developerNote: "Comparison due October 6 and recommendations due October 10 with the SEO Strategist.",
    },
    {
      issue:
        "Product pages that lost visibility have not been checked against Merchant Center status and indexing status together.",
      why:
        "A product that is out of stock, disapproved in Merchant Center or dropped from the index disappears from search for reasons that look identical in a traffic report. Checking both at once is what tells a ranking problem apart from a feed or availability problem.",
      fix: "Take the product pages that lost visibility, check each against its Merchant Center status and its index status, and route each one to the right fix: feed, availability, content or indexing.",
      developerNote: "Scheduled for October 13 with the SEO Strategist.",
    },
    {
      issue:
        "The GA4 ecommerce purchase event fires without a value. Purchase revenue and total revenue are $0.00 on every channel in both months while purchase counts are recorded normally.",
      why:
        "Without a value on the event, no channel in GA4 can be measured on revenue, which means the store cannot see what search, ads or email are each worth. It also leaves the two months already measured with no value attached unless Magento supplies it.",
      fix: "Pass the order total (and currency) on the Magento purchase event sent to GA4, confirm it in GA4 realtime against a test order, then reconcile a month of GA4 revenue against the Magento order export.",
      developerNote: "Sized against the September Magento feasibility check, with the Account Manager requesting the export in parallel.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console domain property for oldchevytrucks.com, pulled through the API on October 5, 2026. Store platform is Magento.",
    "Current period: September 1-30, 2026. Previous period: August 1-31, 2026. September has 30 days and August has 31, and the two periods do not overlap.",
    "Total clicks (11,961 against 12,298) and impressions (386,422 against 421,700) are exact and equal the sum of the device rows. CTR 3.10% against 2.92%; average position 6.37 against 7.27, where a lower number is better.",
    "Devices: desktop 4,082 clicks against 4,123, mobile 7,502 against 7,768, tablet 377 against 407. Desktop impressions 136,375 against 147,997, mobile 242,767 against 265,663, tablet 7,280 against 8,040. Mobile carried 62.7% of clicks against 63.2%.",
    "Query groups: searches naming the company 566 clicks against 761; other named searches 741 against 745; searches Google does not show 10,654 against 10,792. Google withholds rare queries for privacy: they were 89.1% of September clicks and 87.8% of August clicks, and their brand status is unknown, so no brand or non-brand share of total clicks is stated in this report. Only 1,307 September clicks came from searches Google names. Impressions on searches naming the company were 3,673 against 7,054.",
    "Within the searches that name the company, one term holds 161 of the 195 lost clicks (375 against 536) and another holds 3,067 of the 3,381 lost impressions (661 against 3,728) at an average position near 10. The second of those reads as a generic phrase as well as a name, so the rule that classifies these searches is being confirmed with the measurement work rather than treated as settled.",
    "Page movers by clicks: homepage 1,073 against 1,249; 1934-1946 era category 141 against 164; 1947-1955 era category 100 against 110; the 261 six-cylinder engine article 87 against 94; one product page 64 against 56; the side mount spare article 56 against 50; the engine paint article 55 against 44; the plaid valve covers article 49 against 142; the 1951-53 engine article 35 against 53; the 1960-1961 grills article 37 against 46.",
    "Six pages in September's top 25 carry no August row in the same pull and together hold 216 clicks: the 1967-1972 parts catalog page (48), the 1935 Suburban article (39) and four product pages (36, 33, 31 and 29). They are reported as new entries in the top pages, not as growth from zero, because the pull does not establish that they had no August clicks.",
    "Page movers by impressions: homepage 40,135 against 49,461; 1947-1955 era category 4,596 against 5,195; 1934-1946 era category 4,786 against 5,261; the plaid valve covers article 920 against 1,939; the 1934-1946 parts catalog page 1,902 against 2,804.",
    "Organic sessions: GA4 property for this site, Organic Search channel, 18,289 in September against 18,744 in August. All channels: 43,328 against 58,371, so organic was 42.2% of sessions in September against 32.1% in August. The all-channel fall comes from channels other than organic search and appears here as context only.",
    "GA4 purchase events: 243 from organic search in September against 269 in August, and 496 against 582 across all channels, so organic held 49.0% of purchase events against 46.2%. These are event counts. GA4 reports $0.00 of purchase revenue and $0.00 of total revenue on every channel in both months, so no revenue, average order value or revenue share appears in this report, and none is estimated from traffic. Order value has to come from a Magento order export, which is the first measurement deliverable.",
    "Measurement check in progress: the GA4 property used here is labelled for a closely related domain and sits under an account named for the trading name rather than for oldchevytrucks.com, and its session volume tracks the Search Console figures closely across both months. A confirmation that the property records this domain only, and a confirmation of the terms counted as company-name searches, are being handled with the order value work. Until both are confirmed, no argument in this report rests on either.",
    "Delivered work comes from ClickUp items closed inside September 2026 on this account's task list. One SEO item closed inside the month and is reported. Work owned by teams outside SEO, template checklists and administrative items are excluded. Twelve further items were closed in a single sweep on September 11, covering earlier months' development hours, onsite implementations and schema markup; a closure date alone does not establish that the work shipped, so they are not reported as delivered and are being verified on the live pages instead.",
    "The October items (non-indexed pages by type, old against new era category addresses, recommendations for each old address, product pages that lost visibility against Merchant Center and indexing) are scheduled with dates of October 6, 7, 10 and 13.",
  ],
};
