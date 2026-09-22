import type { SeoStoryReportData } from "@/lib/reports/types";

// Quadzilla, August 2026 vs July 2026. First report for this client.
// Every figure comes from output/quadzilla-august-2026/data.json (GSC API, GA4 Data API, BigCommerce, ClickUp).
// Store revenue is all-channel context from BigCommerce: GA4 records no purchases, so organic revenue is not attributable.
export const quadzillaAugust2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report for Quadzilla, so it sets the baseline. Google search traffic grew in August, and the gain was spread across the homepage, support pages and the Dodge 5.9L Cummins product pages rather than one page. Store sales from BigCommerce are shown for all channels together. GA4 records no purchases, so the part of those sales that came from organic search cannot be separated yet.",
    title: "Search traffic and store orders both rose. Organic's share of sales is not yet measurable",
  },

  meta: {
    action:
      "Set up GA4 ecommerce tracking on the BigCommerce store so purchases and revenue are recorded by channel, and confirm GA4 property 526810852 is the one installed on quadzillapower.com. Until then, organic search's share of store sales is unknown. Continue the technical fixes: pagination canonicals and lowercase path redirects, then the Merchant Center product fixes.",
    client: "Quadzilla",
    coverHeadline:
      "Google clicks rose 24.2% in August (1,735 vs 1,397): searches for Quadzilla by name added 72, and searches Google does not show added 254. Store orders across all channels rose 25.9% to 253. Store revenue still fell 6.5% to $73,843.41 because the average order was smaller, and GA4 records no purchases, so organic search's share of those sales is unknown until tracking is fixed.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://quadzillapower.com/",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console API + BigCommerce Analytics (Orders, all channels) + GA4 Data API (sessions only) + ClickUp delivery records",
  },

  executiveSummary:
    "Search traffic grew and store orders grew with it, but we cannot yet say how much of the sales came from search. Google clicks rose 24.2% to 1,735 from 1,397, impressions rose 7.0% to 33,158, and average position improved to 4.49 from 4.72. Searches for Quadzilla by name added 72 clicks (383 to 455) and other named searches added 12 (44 to 56). The other 254 came from searches Google does not show, which make up 70.5% of all clicks, so their brand status is unknown. These are usually long, specific searches, so most are likely non-brand, but that cannot be confirmed. By page, the homepage added 67 clicks and four support and Dodge 5.9L Cummins pages added 119 more, while every other page together added 152, so no single page explains the month. In the store, across all channels, orders rose 25.9% to 253 from 201 while revenue fell 6.5% to $73,843.41 from $78,935.10, because the average order dropped to $291.87 from $392.71. Orders and search clicks rose together, but that does not show search caused the orders: the agency also runs Google, Microsoft and Meta ads, and GA4 records zero purchases and zero key events in every channel, so organic search's share of these sales is unknown. Fixing GA4 ecommerce tracking is the first action item. August's delivered SEO work was one developer fix: internal links that led to error pages were remediated.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Google clicks rose 24.2% to 1,735. Brand searches added 72, other named searches 12, and searches Google does not show 254. Those hidden searches are 70.5% of clicks, so the brand split is unknown.",
      status: "positive",
    },
    {
      area: "Store sales (all channels)",
      statement:
        "Orders rose 25.9% to 253, but revenue fell 6.5% to $73,843.41 on a smaller average order. Organic's share is unknown because GA4 records no purchases.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved to 4.49 from 4.72, and click-through rate rose to 5.23% from 4.51%.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "Internal links to error pages were fixed in August. Pagination canonicals, lowercase path redirects and Merchant Center product fixes are next.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Grow non-brand search, the searches from people who do not yet know the Quadzilla name.",
      name: "Search visibility",
      started:
        "In July, searches for Quadzilla by name brought 383 clicks, other named searches 44, and searches Google does not show 970 (69.4% of all clicks).",
      work: "We measured clicks, impressions, position and device mix month over month through the Search Console API, split into brand searches, other named searches and searches Google does not show.",
      result:
        "Brand clicks rose 18.8% to 455, other named searches rose to 56 from 44, and searches Google does not show rose 26.2% to 1,224. The gain was spread across pages: the homepage (+67), the Dodge 1998.5-2000 Cummins vehicle page (+41), installation instructions (+34), Sneak-A-Tap (+23) and the 2001-2002 Cummins Adrenaline kit (+21), with +152 across all other pages.",
      next: "Use August as the traffic baseline and measure the roadmap's technical fixes against it.",
    },
    {
      businessPriority: "Know how much revenue organic search brings to the store.",
      name: "Sales measurement",
      started:
        "GA4 property 526810852 records visits but zero purchases, zero revenue and zero key events in every channel, in both July and August.",
      work:
        "We pulled GA4 for both months and confirmed the gap is store-wide, not limited to organic: all channels show 17,521 sessions in August and no purchases. We read store orders and revenue for both months from BigCommerce, all channels combined.",
      result:
        "BigCommerce shows 253 orders and $73,843.41 in August vs 201 orders and $78,935.10 in July. These are whole-store figures. Without GA4 purchase data they cannot be split by channel, so organic revenue is not reported.",
      next:
        "Set up GA4 ecommerce tracking on BigCommerce, confirm the GA4 property is the one on quadzillapower.com, and then reconcile GA4 purchases with BigCommerce orders so organic revenue can be reported.",
    },
    {
      businessPriority: "Keep the site clean for Google so pages are crawled and ranked without waste.",
      name: "Technical SEO",
      started: "The SEO roadmap's developer fixes included internal links that pointed to pages returning errors (4xx).",
      work: "Our developer remediated those internal link destinations. The work closed on August 26.",
      result: "Shoppers and Google no longer follow those internal links into error pages.",
      next:
        "Implement pagination canonicals and lowercase path redirects, define the pagination canonical rule, and crawl the site to start a before-and-after report on the theme update.",
    },
    {
      businessPriority: "Keep products eligible for Google Shopping listings.",
      name: "Merchant Center",
      started: "Some products in Google Merchant Center have missing attributes or are not approved.",
      work: "A fix at the source (the product data itself) is scheduled.",
      result: "No change yet. This work is planned, not delivered.",
      next: "Fix the attribute gaps and the not-approved products at the source, scheduled for September 29.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 26, 2026",
      evidence:
        "Closed August 26 as part of the SEO roadmap's developer fixes. Internal links that led to pages returning 4xx errors were remediated.",
      owner: "Developer",
      title: "Fixed internal links that led to error pages",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks (Google)",
      previous: "1,397",
      current: "1,735",
      change: "+24.2%",
      businessMeaning: "Google sent 338 more visits than in July. Both months have 31 days.",
      status: "positive",
    },
    {
      metric: "Brand clicks (searches naming Quadzilla)",
      previous: "383",
      current: "455",
      change: "+18.8%",
      businessMeaning: "More people searched for Quadzilla by name and clicked through. Brand searches are 89% of the searches Google shows.",
      status: "positive",
    },
    {
      metric: "Other named searches",
      previous: "44",
      current: "56",
      change: "+27.3%",
      businessMeaning:
        "Searches Google shows that do not include the brand name, such as tuner and boost fooler searches. Still small.",
      status: "positive",
    },
    {
      metric: "Searches Google does not show",
      previous: "970",
      current: "1,224",
      change: "+26.2%",
      businessMeaning:
        "Google withholds rare searches for privacy, so their brand status is unknown. They are 70.5% of clicks and brought most of the gain. They are usually long, specific searches, so most are likely non-brand.",
      status: "positive",
    },
    {
      metric: "Search impressions",
      previous: "30,997",
      current: "33,158",
      change: "+7.0%",
      businessMeaning: "The site appeared in Google results more often. Brand impressions rose 1.7%; all other impressions, including searches Google does not show, rose 9.3%.",
      status: "positive",
    },
    {
      metric: "Click-through rate",
      previous: "4.51%",
      current: "5.23%",
      change: "+0.72 pts",
      businessMeaning: "A larger share of searchers who saw the site clicked on it, so clicks grew faster than impressions.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "4.72",
      current: "4.49",
      change: "0.23 better",
      businessMeaning: "Rankings moved slightly up. The site already sits near the top of page one on average.",
      status: "positive",
    },
    {
      metric: "Organic sessions (GA4, context)",
      previous: "2,822",
      current: "2,940",
      change: "+4.2%",
      businessMeaning:
        "GA4's count of visits from all search engines. It is a different measure from Google clicks and grew less. Shown as context while the GA4 setup is checked.",
      status: "neutral",
    },
    {
      metric: "Purchases recorded in GA4 (all channels)",
      previous: "0",
      current: "0",
      change: "No change",
      businessMeaning:
        "GA4 records visits but no purchases from any channel, so its ecommerce tracking is not working. Fixing it is the first action item.",
      status: "watch",
    },
    {
      metric: "Store revenue (BigCommerce, ALL CHANNELS)",
      previous: "$78,935.10",
      current: "$73,843.41",
      change: "-6.5%",
      businessMeaning:
        "Context, not organic: whole-store revenue from every channel, including paid ads. It fell because the average order was smaller, not because orders fell. Organic's share is unknown until GA4 records purchases.",
      status: "watch",
    },
    {
      metric: "Store orders (BigCommerce, ALL CHANNELS)",
      previous: "201",
      current: "253",
      change: "+25.9%",
      businessMeaning:
        "Context, not organic: orders rose at about the same rate as Google clicks (+24.2%). The two moved together, but channel tracking is needed before any of the orders can be credited to search.",
      status: "positive",
    },
    {
      metric: "Average order value (BigCommerce, ALL CHANNELS)",
      previous: "$392.71",
      current: "$291.87",
      change: "-25.7%",
      businessMeaning: "Customers spent less per order, which is why revenue fell while orders rose.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic figures come from the Google Search Console API for the URL-prefix property https://quadzillapower.com/, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows. Clicks are split three ways: brand searches (queries matching \"quad zilla\" with or without the space), other named searches (every other query Search Console lists), and searches Google does not show (total minus every listed query), whose brand status is unknown. Click-through rate and position are Search Console's averages. Sessions and purchases come from the GA4 Data API (property 526810852); GA4 records no purchases or key events, so no organic revenue figure is reported. Store revenue, orders and average order value come from BigCommerce Analytics (Orders report, August 1-31 vs the previous period, July 1-31), cover all channels combined, and were read on September 21, 2026.",

  conversionPlan: {
    owner: "SEO Specialist (GA4 tracking) + Account Manager (store figures)",
    sourcePriority:
      "BigCommerce order data is the source of truth for store revenue. GA4 records zero purchases, so first enable GA4 ecommerce tracking on BigCommerce (purchase events with revenue) and confirm property 526810852 is the one installed on quadzillapower.com. Until GA4 records purchases, BigCommerce revenue is reported as all-channel context only.",
    nextReportExpectation:
      "The next report shows BigCommerce store revenue again as all-channel context and states whether GA4 is recording purchases. Organic revenue is reported only once GA4 purchases reconcile with BigCommerce orders.",
  },

  performanceCharts: {
    revenue: {
      title: "Store orders rose 25.9%, revenue fell 6.5% (all channels)",
      insight:
        "The store took 52 more orders than in July, but the average order fell to $291.87 from $392.71, so revenue ended $5,091.69 lower at $73,843.41. These are whole-store figures. Orders rose about as fast as Google clicks did, but without GA4 purchase data we cannot say how many of those orders came from search.",
      channelContext:
        "Source: BigCommerce Analytics, Orders report, all channels combined, read September 21, 2026. Not organic revenue. GA4 records no purchases in any channel, so organic search's share of store sales is unknown. The agency also runs Google Ads, Microsoft Ads and Meta Ads for this client, and those channels are included in these totals.",
      series: [
        {
          change: "-6.5%",
          current: 73843.41,
          currentDisplay: "$73,843.41",
          label: "Store revenue (all channels)",
          previous: 78935.1,
          previousDisplay: "$78,935.10",
          status: "watch",
        },
        {
          change: "+25.9%",
          current: 253,
          currentDisplay: "253",
          label: "Store orders (all channels)",
          previous: 201,
          previousDisplay: "201",
          status: "positive",
        },
        {
          change: "-25.7%",
          current: 291.87,
          currentDisplay: "$291.87",
          label: "Average order value (all channels)",
          previous: 392.71,
          previousDisplay: "$392.71",
          status: "watch",
        },
      ],
    },
    growth: {
      title: "Clicks grew 24.2%, faster than impressions",
      insight:
        "Clicks rose to 1,735 from 1,397 while impressions rose 7.0% to 33,158. Click-through rate improved to 5.23% from 4.51%, so the site earned more clicks from each appearance. Both months had 31 days.",
      series: [
        {
          change: "+24.2%",
          current: 1735,
          currentDisplay: "1,735",
          label: "Organic clicks",
          previous: 1397,
          previousDisplay: "1,397",
          status: "positive",
        },
        {
          change: "+7.0%",
          current: 33158,
          currentDisplay: "33,158",
          label: "Search impressions",
          previous: 30997,
          previousDisplay: "30,997",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 1397,
      baselineDisplay: "1,397",
      contributions: [
        { display: "+67", label: "Homepage", value: 67 },
        { display: "+41", label: "Dodge 1998.5-2000 Cummins page", value: 41 },
        { display: "+34", label: "Installation instructions", value: 34 },
        { display: "+23", label: "Sneak-A-Tap", value: 23 },
        { display: "+21", label: "2001-2002 Cummins Adrenaline kit", value: 21 },
        { display: "+152", label: "All other pages", value: 152 },
      ],
      insight:
        "The five pages that gained most added 186 of the 338 extra clicks. The other 152 came from many smaller pages, so the growth was broad rather than driven by one page. Most of the searches behind it are not listed by Search Console: Google does not show the queries behind 70.5% of August clicks.",
      title: "Where the 338 extra clicks came from",
      total: 1735,
      totalDisplay: "1,735",
    },
    homepage: {
      title: "Dodge 5.9L Cummins pages grew fastest",
      insight:
        "Three pages for Dodge 5.9L Cummins trucks gained clicks, and Google also showed two of them much more often (impressions up 37.2% and 73.0%). The Adrenaline kit for 2001-2002 trucks gained clicks while its impressions held roughly flat. These pages are a clear pocket of demand to build on.",
      series: [
        {
          change: "+107.9%",
          current: 79,
          currentDisplay: "79",
          label: "Dodge 1998.5-2000 Cummins vehicle page",
          previous: 38,
          previousDisplay: "38",
          status: "positive",
        },
        {
          change: "+34.4%",
          current: 82,
          currentDisplay: "82",
          label: "2001-2002 5.9L Adrenaline kit",
          previous: 61,
          previousDisplay: "61",
          status: "positive",
        },
        {
          change: "+61.1%",
          current: 29,
          currentDisplay: "29",
          label: "1998.5-2002 5.9L Adrenaline kit",
          previous: 18,
          previousDisplay: "18",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile brings 86.6% of clicks, and every device grew",
      insight:
        "Mobile clicks rose 22.6% to 1,503 and desktop rose 31.5% to 217. Tablet is small at 15 clicks. Mobile is where almost all of Quadzilla's search visitors arrive.",
      series: [
        {
          change: "+22.6%",
          current: 1503,
          currentDisplay: "1,503",
          label: "Mobile",
          previous: 1226,
          previousDisplay: "1,226",
          status: "positive",
        },
        {
          change: "+31.5%",
          current: 217,
          currentDisplay: "217",
          label: "Desktop",
          previous: 165,
          previousDisplay: "165",
          status: "positive",
        },
        {
          change: "+150.0%",
          current: 15,
          currentDisplay: "15",
          label: "Tablet",
          previous: 6,
          previousDisplay: "6",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "GA4 records zero purchases, zero revenue and zero key events in every channel in July and August, while it does record 17,521 sessions in August.",
      impact:
        "Store sales are known only in total (253 orders, $73,843.41 in August), not by channel, so organic search's share is unknown. Decisions about which pages to prioritize cannot yet use sales data.",
      remediation:
        "Enable GA4 ecommerce tracking on BigCommerce (purchase event with revenue) and confirm property 526810852 is the one installed on quadzillapower.com. Fold the check into the planned GA4 and Ads tracking verification around the theme update.",
      eta: "Tracking verification is scheduled for October 15.",
    },
    {
      obstacle: "Some Merchant Center products have missing attributes or are not approved.",
      impact: "Affected products can be left out of Google Shopping listings.",
      remediation: "Fix the product data at the source so the corrections hold on every feed update.",
      eta: "Scheduled for September 29.",
    },
    {
      obstacle: "Search Console reporting uses a URL-prefix property for https://quadzillapower.com/ only.",
      impact: "Traffic to other versions of the address (for example www or http) is not counted, so totals may be slightly understated.",
      remediation: "Add and verify a quadzillapower.com domain property and report from it going forward.",
      eta: "Next report cycle.",
    },
  ],

  technicalItems: [
    {
      issue: "GA4 ecommerce tracking is not recording purchases.",
      why: "Without purchase data, organic revenue cannot be measured or tied to SEO work.",
      fix: "Enable GA4 ecommerce on BigCommerce, confirm the right GA4 property is installed, and check that test orders appear in GA4.",
      developerNote: "Verification planned in ClickUp task 868m53hyv (due October 15). Setting up the purchase tracking itself has no task yet.",
    },
    {
      issue: "Pagination pages and uppercase URL paths can create duplicate versions of the same page.",
      why: "Duplicates split ranking signals and waste Google's crawl on copies.",
      fix: "Add pagination canonicals and redirect uppercase paths to lowercase, following the canonical rule the SEO team defines.",
      developerNote: "ClickUp tasks 868m53j8j (developer, due October 1) and 868m53j8c (canonical rule, due October 13).",
    },
    {
      issue: "Two contact URLs appear in search: /contact-us/ and /contact-quadzilla-power-801-872-5472/.",
      why: "Two pages for the same purpose can compete with each other in search.",
      fix: "Confirm which page should rank, then canonicalize or redirect the other.",
      developerNote: "Observed in Search Console page data for August. No task yet.",
    },
    {
      issue: "Internal links pointed to pages returning 4xx errors.",
      why: "Broken internal links send shoppers and Google to dead ends.",
      fix: "Remediated in August. Recheck in the theme update crawl.",
      developerNote: "Closed under ClickUp task 868hrz1fg. Site crawl for the theme update is task 868m53hze (due October 15).",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console API, URL-prefix property https://quadzillapower.com/. No domain property is used, so other versions of the address are not included. Platform is BigCommerce.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (1,735 vs 1,397) and impressions (33,158 vs 30,997) are exact and equal the sum of the device rows. CTR (5.23% vs 4.51%) and position (4.49 vs 4.72) are Search Console's averages.",
    "Brand method: brand is any query matching the regular expression (?i)(quad ?zilla) in the Search Console API. Brand clicks were 455 vs 383; other named searches were 56 vs 44. Misspellings of the brand (for example \"godzilla tuner 5.9 cummins\", \"qaudzilla\", \"wuadzilla\") do not match the pattern and count as other named searches; they add about 10 clicks in August.",
    "Searches Google does not show: Google withholds rare queries for privacy and reports only their clicks. They were 1,224 of 1,735 clicks in August (70.5%) and 970 of 1,397 in July (69.4%). Their brand status is unknown, so this report does not state a brand or non-brand share of total clicks. They are usually long, specific searches, so most are likely non-brand. A simple total-minus-brand figure (1,280 vs 1,014) would count all of them as non-brand.",
    "Page and query tables cover the 25 largest pages and 50 largest queries of August. A July value is only available when the page or query was also in July's top list, so a zero for July means \"not in July's top list\", not \"no traffic\". Pages with a July zero are therefore not called new.",
    "The page waterfall uses the five pages with the largest click change; \"All other pages\" is the remainder, so the bars add up to the exact monthly total.",
    "GA4 source: GA4 Data API, property 526810852. Organic Search sessions were 2,940 vs 2,822; all-channel sessions were 17,521 vs 18,069 (-3.0%); organic share of sessions was 16.8% vs 15.6%. GA4 organic sessions include all search engines, so they are not expected to match Google clicks. Whether this property is the one installed on quadzillapower.com is still being confirmed.",
    "GA4 records zero purchases, zero revenue and zero key events in every channel in both months, while BigCommerce recorded 253 and 201 orders. That confirms ecommerce tracking is not set up, not that nothing sold, so no revenue figure is reported from GA4 and organic search's share of sales is unknown.",
    "Store figures: BigCommerce Analytics, Orders report, \"Last month\" (August 1-31, 2026) vs the previous period (July 1-31, 2026), ALL CHANNELS combined, read on September 21, 2026. Revenue $73,843.41 vs $78,935.10 (-6.5%), orders 253 vs 201 (+25.9%), average order value $291.87 vs $392.71. These are store totals, not organic revenue, and late refunds or edits after September 21 could change them slightly.",
    "Orders and Google clicks rose by similar amounts (+25.9% and +24.2%). They moved together, but that alone does not show search caused the orders; channel-level purchase tracking is needed to attribute any of them.",
    "The agency runs Google Ads, Microsoft Ads and Meta Ads for this client, and those channels are included in the store totals. Once GA4 records purchases, untagged paid visits could appear in GA4's Organic Search channel, so organic revenue will need a tie-out against BigCommerce orders.",
    "Completed work comes from ClickUp tasks closed in August 2026 (one SEO delivery). Paid media tasks and admin items are excluded. This is the first monthly report for Quadzilla.",
  ],
};
