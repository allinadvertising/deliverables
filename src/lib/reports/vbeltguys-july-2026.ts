import type { SeoStoryReportData } from "@/lib/reports/types";

export const vbeltGuysJuly2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow qualified organic product discovery and revenue while improving the technical signals across V-Belt Guys' product catalog.",
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },
  visualSection: {
    eyebrow: "Revenue",
    intro:
      "Organic search revenue increased in July, led by Google and a different mix of high-value products. Shopify identifies the referring search engine, while Google Search Console identifies the onsite pages receiving organic traffic.",
    title: "Organic revenue and search performance",
  },
  meta: {
    action:
      "Complete the in-progress August onsite scope of 40 pages and schema scope of eight pages, then measure page-level traffic and revenue response.",
    client: "V-Belt Guys",
    coverHeadline:
      "Revenue grew. One product page supplied most of the traffic lift.",
    currentPeriod: "July 1-31, 2026",
    previousPeriod: "June 1-30, 2026",
    property: "https://www.vbeltguys.com/",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + Shopify Analytics + ClickUp delivery records",
  },
  executiveSummary:
    "Organic search revenue increased 6.5% to $337,775.54 in July, adding $20,545.65 month over month. Google organic revenue grew 9.0% and represented 86.2% of organic search sales. Search Console recorded 51,132 clicks, up 0.4%, while search appearances declined 1.6% and average ranking softened from 6.68 to 6.82. Because July contained one more day, clicks per day declined 2.9% and appearances per day declined 4.7%. The L444 Dayco product page was the clear exception: it gained 2,688 clicks and supplied more than the site's net monthly click increase, making diversification beyond this single winner the immediate performance priority.",
  powerLines: [
    {
      area: "Traffic",
      statement:
        "Total clicks increased 0.4% to 51,132, but clicks per day declined 2.9% after adjusting for July's extra day.",
      status: "watch",
    },
    {
      area: "Conversions",
      statement:
        "Organic search revenue grew 6.5% to $337,775.54, with Google adding $24,116.48 in sales.",
      status: "positive",
    },
    {
      area: "Rankings",
      statement:
        "Average ranking softened by 0.14 positions, but visible nonbrand query clicks increased 36.0%, led by L444 searches.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "July's 40-page onsite scope and 16-page schema scope are closed in ClickUp, advancing the broader SEO roadmap.",
      status: "positive",
    },
  ],
  journeyWorkstreams: [
    {
      businessPriority:
        "Sustain revenue growth while broadening traffic beyond a single product page.",
      name: "Monthly performance",
      started:
        "June generated 50,944 clicks, 2.30 million search appearances, and $317,229.89 in organic search revenue.",
      work:
        "We compared full-calendar-month GSC performance with Shopify's search-attributed revenue by engine and product.",
      result:
        "Revenue increased 6.5% and total clicks increased 0.4%, although the daily traffic pace declined because July had one additional day.",
      next:
        "Track daily-normalized traffic alongside revenue so monthly calendar length does not overstate growth.",
    },
    {
      businessPriority:
        "Capture high-intent searches across a broader set of product and collection pages.",
      name: "Product discovery",
      started:
        "Visible nonbrand queries generated 6,234 clicks in June, and the L444 Dayco product page received 892 clicks.",
      work:
        "We isolated query and page changes to identify the destinations responsible for July's movement.",
      result:
        "Visible nonbrand clicks increased 36.0%. The L444 page reached 3,580 clicks, up 301.3%, while the OEM replacement collection lost 64 clicks.",
      next:
        "Apply the winning L444 content and internal-link patterns to priority products without creating duplicate search intent.",
    },
    {
      businessPriority:
        "Improve product-page relevance and structured information at catalog scale.",
      name: "Onsite and schema delivery",
      started:
        "July's ClickUp plan contained two 20-page onsite packages and one 16-page schema package.",
      work:
        "The team closed all three July parent tasks and completed the conditional H2 roadmap task.",
      result:
        "The scheduled July scope is recorded as closed, establishing the implementation baseline for August performance measurement.",
      next:
        "Build on July's delivery with the August scope of 40 onsite pages and eight schema pages, then compare the changed-page cohorts.",
    },
  ],
  completedWork: [
    {
      completedOn: "July 9, 2026",
      evidence:
        "ClickUp records the 16-URL schema package as Closed on July 9.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868jpdxeb",
      title: "Closed the 16-page July schema package",
    },
    {
      completedOn: "July 10, 2026",
      evidence:
        "ClickUp records the first 20-page onsite package as Closed on July 10.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868k81788",
      title: "Closed July onsite package 1 of 2",
    },
    {
      completedOn: "July 10, 2026",
      evidence:
        "ClickUp marks the second 20-page onsite parent task Closed. Together, the two parent task titles scope 40 pages.",
      owner: "Brandon Swain",
      taskUrl: "https://app.clickup.com/t/868k817x9",
      title: "Closed July onsite package 2 of 2",
    },
    {
      completedOn: "July 23, 2026",
      evidence:
        "ClickUp records the conditional H2 milestone as Closed, advancing the next phase of the development roadmap.",
      owner: "Roberto Verlezza",
      taskUrl: "https://app.clickup.com/t/868jwhenn",
      title: "Added conditional H2 sections to product templates",
    },
  ],
  industryUpdates: [
    {
      date: "June 24-26, 2026",
      title: "Google completed a global spam update",
      summary:
        "Google's June spam update applied globally and across all languages, completing on June 26.",
      impact:
        "July was the first full month after the rollout. Continue monitoring product and collection visibility before attributing all month-over-month movement to onsite work.",
      sourceLabel: "Google Search Status Dashboard",
      sourceUrl:
        "https://status.search.google.com/incidents/YUX1peHev5a4fkxLDiUQ",
    },
    {
      date: "July 7, 2026",
      title: "Product category support expanded in structured data",
      summary:
        "Google documented Product.category support for merchant listings and clarified how sale-price effective dates should be supplied.",
      impact:
        "The active schema program should validate product category values and any sale-date properties on representative Shopify products.",
      sourceLabel: "Google Search Central documentation updates",
      sourceUrl: "https://developers.google.com/search/updates",
    },
    {
      date: "July 10, 2026",
      title: "Canonical re-evaluation timing was clarified",
      summary:
        "Google updated its canonicalization troubleshooting guidance with clearer expectations for re-evaluation time.",
      impact:
        "Canonical and legacy-path fixes should be evaluated over a sufficient recrawl window rather than judged immediately after release.",
      sourceLabel: "Google Search Central documentation updates",
      sourceUrl: "https://developers.google.com/search/updates",
    },
  ],
  kpiRows: [
    {
      metric: "Organic search revenue",
      previous: "$317,229.89",
      current: "$337,775.54",
      change: "+6.5%",
      businessMeaning:
        "Organic search added $20,545.65 in attributed sales.",
      status: "positive",
    },
    {
      metric: "Organic clicks",
      previous: "50,944",
      current: "51,132",
      change: "+0.4%",
      businessMeaning:
        "Total monthly visits were nearly flat; clicks per day declined 2.9%.",
      status: "neutral",
    },
    {
      metric: "Search appearances",
      previous: "2,301,299",
      current: "2,265,475",
      change: "-1.6%",
      businessMeaning:
        "The site appeared in 35,824 fewer searches despite July's extra day.",
      status: "watch",
    },
    {
      metric: "Average ranking",
      previous: "6.68",
      current: "6.82",
      change: "-0.14 positions",
      businessMeaning:
        "The average result moved slightly lower but remained on page one.",
      status: "watch",
    },
    {
      metric: "Click rate",
      previous: "2.21%",
      current: "2.26%",
      change: "+0.04 points",
      businessMeaning:
        "A slightly larger share of search appearances became visits.",
      status: "positive",
    },
    {
      metric: "Visible nonbrand clicks",
      previous: "6,234",
      current: "8,477",
      change: "+36.0%",
      businessMeaning:
        "Exposed query rows show stronger discovery beyond the company name, led by L444 demand.",
      status: "positive",
    },
  ],
  kpiDisclosure:
    "Search performance comes from the Google Search Console domain property sc-domain:vbeltguys.com. July contains 31 days versus 30 in June. Visible query metrics exclude terms Google withholds and are also limited by the 25,000-row export cap. Shopify revenue uses order_referrer_source = search and Total sales (USD); the CSV's order counts are not summed because product-level rows can repeat an order.",
  performanceCharts: {
    revenue: {
      channelContext:
        "Google generated 86.2% of July organic search revenue, up from 84.2% in June. Shopify's URL field identifies external search referrers, not onsite landing pages.",
      insight:
        "Organic search revenue increased by $20,545.65. Google's $24,116.48 gain more than offset declines from Bing and DuckDuckGo.",
      series: [
        {
          change: "+6.5%",
          current: 337775.54,
          currentDisplay: "$337,775.54",
          label: "Organic search revenue",
          previous: 317229.89,
          previousDisplay: "$317,229.89",
          status: "positive",
        },
        {
          change: "+9.0%",
          current: 291198.4,
          currentDisplay: "$291,198.40",
          label: "Google revenue",
          previous: 267081.92,
          previousDisplay: "$267,081.92",
          status: "positive",
        },
        {
          change: "+2.0 points",
          current: 86.2,
          currentDisplay: "86.2%",
          label: "Google share of organic revenue",
          previous: 84.2,
          previousDisplay: "84.2%",
          status: "positive",
        },
        {
          change: "-9.1%",
          current: 33583.57,
          currentDisplay: "$33,583.57",
          label: "Bing revenue",
          previous: 36950.56,
          previousDisplay: "$36,950.56",
          status: "watch",
        },
      ],
      rankings: [
        {
          insight:
            "Google strengthened its lead, Yahoo grew from a smaller base, and Bing plus DuckDuckGo declined.",
          periods: [
            {
              label: "June 2026",
              items: [
                { display: "$267,081.92", label: "Google", value: 267081.92 },
                { display: "$36,950.56", label: "Bing", value: 36950.56 },
                { display: "$8,427.51", label: "DuckDuckGo", value: 8427.51 },
                { display: "$4,724.56", label: "Yahoo", value: 4724.56 },
              ],
            },
            {
              label: "July 2026",
              items: [
                { display: "$291,198.40", label: "Google", value: 291198.4 },
                { display: "$33,583.57", label: "Bing", value: 33583.57 },
                { display: "$6,662.01", label: "DuckDuckGo", value: 6662.01 },
                { display: "$6,331.56", label: "Yahoo", value: 6331.56 },
              ],
            },
          ],
          title: "Organic revenue by search engine",
        },
        {
          insight:
            "The leading product changed month to month, showing that organic revenue is distributed across a broad, specialized catalog.",
          periods: [
            {
              label: "June 2026",
              items: [
                { display: "$7,036.90", label: "10/8V2360 Wedge Banded V-Belt", value: 7036.9 },
                { display: "$4,410.71", label: "3VX900 Gates Replacement", value: 4410.71 },
                { display: "$3,065.28", label: "6/5VX1800 Cogged Wedge Banded", value: 3065.28 },
                { display: "$2,915.60", label: "8V4000 Dunlop Replacement", value: 2915.6 },
                { display: "$2,672.65", label: "5/3VX465 Cogged Wedge Banded", value: 2672.65 },
              ],
            },
            {
              label: "July 2026",
              items: [
                { display: "$5,488.11", label: "R8VK2240-12 Carlisle Replacement", value: 5488.11 },
                { display: "$3,112.09", label: "CC105 Gates Double Angled", value: 3112.09 },
                { display: "$2,466.99", label: "5V1600 Goodyear OEM Equivalent", value: 2466.99 },
                { display: "$2,279.80", label: "6/8V2360 Optibelt Replacement", value: 2279.8 },
                { display: "$1,954.50", label: "432614M85 Gates Replacement", value: 1954.5 },
              ],
            },
          ],
          title: "Top products from organic search revenue",
        },
      ],
      title: "Organic search revenue grew 6.5%",
    },
    growth: {
      title: "Monthly traffic held while visibility softened",
      insight:
        "July added 188 total clicks, but the daily pace declined because the comparison month contained one fewer day.",
      series: [
        {
          change: "+0.4%",
          current: 51132,
          currentDisplay: "51,132",
          label: "Organic clicks",
          previous: 50944,
          previousDisplay: "50,944",
          status: "positive",
        },
        {
          change: "-1.6%",
          current: 2265475,
          currentDisplay: "2,265,475",
          label: "Search appearances",
          previous: 2301299,
          previousDisplay: "2,301,299",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 6234,
      baselineDisplay: "6,234",
      contributions: [
        { display: "+2,239", label: "L444 belt cross reference", value: 2239 },
        { display: "+362", label: "Dayco L444 belt size", value: 362 },
        { display: "-358", label: "Other visible nonbrand queries", value: -358 },
      ],
      insight:
        "Two L444 searches created 2,601 additional clicks and outweighed a 358-click net decline across the other visible nonbrand rows.",
      title: "What drove visible nonbrand growth",
      total: 8477,
      totalDisplay: "8,477",
    },
    homepage: {
      title: "Homepage visibility outpaced click capture",
      insight:
        "Homepage search appearances increased by 40,767, but only 29 additional clicks followed, reducing click rate by 0.16 percentage points.",
      series: [
        {
          change: "+25.2%",
          current: 202552,
          currentDisplay: "202,552",
          label: "Search appearances",
          previous: 161785,
          previousDisplay: "161,785",
          status: "positive",
        },
        {
          change: "+2.1%",
          current: 1435,
          currentDisplay: "1,435",
          label: "Organic clicks",
          previous: 1406,
          previousDisplay: "1,406",
          status: "positive",
        },
        {
          change: "-0.16 points",
          current: 0.71,
          currentDisplay: "0.71%",
          label: "Click rate",
          previous: 0.87,
          previousDisplay: "0.87%",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Mobile gained while desktop declined",
      insight:
        "Mobile added 1,343 clicks, more than offsetting 1,132 fewer desktop clicks and 23 fewer tablet clicks.",
      series: [
        {
          change: "+4.3%",
          current: 32400,
          currentDisplay: "32,400",
          label: "Mobile",
          previous: 31057,
          previousDisplay: "31,057",
          status: "positive",
        },
        {
          change: "-6.0%",
          current: 17860,
          currentDisplay: "17,860",
          label: "Desktop",
          previous: 18992,
          previousDisplay: "18,992",
          status: "watch",
        },
        {
          change: "-2.6%",
          current: 872,
          currentDisplay: "872",
          label: "Tablet",
          previous: 895,
          previousDisplay: "895",
          status: "watch",
        },
      ],
    },
  },
  visualDirections: [],
  obstacles: [
    {
      obstacle:
        "July's total click gain depends heavily on one product page. The L444 Dayco page gained 2,688 clicks while the whole property gained only 188.",
      impact:
        "Traffic concentration can hide declines across other products and collections and creates exposure if L444 rankings change.",
      remediation:
        "Identify the page's winning intent, content, and internal-link signals, then apply relevant patterns to the August onsite queue.",
      eta:
        "Select the replication set during the August onsite cycle and measure it in September.",
    },
    {
      obstacle:
        "The homepage gained 25.2% more search appearances, but click rate declined from 0.87% to 0.71%.",
      impact:
        "The homepage converted 40,767 additional appearances into only 29 incremental visits.",
      remediation:
        "Review its leading queries and test a clearer search title and description around catalog breadth, cross-reference support, and availability.",
      eta:
        "Measure for one complete month after the listing update.",
    },
    {
      obstacle:
        "Desktop clicks declined 6.0% and desktop average ranking moved from 6.87 to 7.76.",
      impact:
        "The site lost 1,132 desktop visits, partially offsetting mobile growth.",
      remediation:
        "Review desktop losses by page and query, beginning with declining collection pages and high-impression product pages.",
      eta:
        "Complete the review before the next monthly report.",
    },
    {
      obstacle:
        "July's onsite, schema, and template work coincided with a Google spam update and a sharp increase in L444 demand.",
      impact:
        "Month-over-month movement cannot be assigned to any single initiative without a longer measurement window.",
      remediation:
        "Track changed URLs as a cohort against unaffected pages and include the August trend in the next report.",
      eta:
        "Review in the next monthly report.",
    },
  ],
  technicalItems: [
    {
      developerNote:
        "Use the active ClickUp tasks 868k819uy, 868k81a0g, and 868k81pb5 as the delivery record; each was in progress when reviewed on August 5.",
      issue:
        "The active August delivery queue covers 40 onsite pages and eight schema pages and was due July 31 in ClickUp.",
      why:
        "An overdue active queue delays the next catalog improvements and makes reporting windows harder to attribute.",
      fix:
        "Confirm the URL scope, complete implementation, and add dated QA evidence to each parent task.",
    },
    {
      developerNote:
        "The roadmap parent is ClickUp task 868jwhehk. The conditional H2 milestone is closed, with future milestones scheduled through November 19.",
      issue:
        "Additional development-roadmap milestones are planned after the completed July H2 work.",
      why:
        "Template improvements can strengthen relevance and consistency across broad sections of the product catalog.",
      fix:
        "Proceed with the next roadmap milestones and monitor representative products, collections, canonicals, and structured data.",
    },
    {
      developerNote:
        "Use GSC page and query exports to separate the L444 gain from the rest of the site before prioritizing the next onsite batch.",
      issue:
        "The L444 Dayco page accounted for more than the property's net July click gain.",
      why:
        "A sitewide total can look stable even while most of the catalog is flat or declining.",
      fix:
        "Report the L444 page separately and build the next page queue from high-impression products and collections that lost clicks.",
    },
    {
      developerNote:
        "The Shopify field named Landing page URL contains external referrer URLs such as google.com and bing.com in this export.",
      issue:
        "The Shopify export does not provide onsite organic landing pages at product-level revenue granularity.",
      why:
        "Treating referrer URLs as landing pages would misstate which V-Belt Guys pages generated sales.",
      fix:
        "Use GSC for onsite page traffic and Shopify for search-engine and product revenue until a compatible onsite attribution export is available.",
    },
  ],
  dataNotes: [
    "Performance source: Google Search Console domain property sc-domain:vbeltguys.com.",
    "Current period: July 1-31, 2026. Previous period: June 1-30, 2026.",
    "Search Console data was requested as final data. July contains 31 days and June contains 30 days.",
    "Total clicks were 50,944 in June and 51,132 in July. Clicks per day declined from 1,698.1 to 1,649.4.",
    "Total search appearances were 2,301,299 in June and 2,265,475 in July. Appearances per day declined from 76,710.0 to 73,079.8.",
    "Query and page exports each reached the 25,000-row API limit, so detailed query and page observations are not exhaustive. Google also withholds some queries for privacy.",
    "Revenue source: organic-search-revenue_june-july-2026.csv exported from Shopify Analytics with order_referrer_source = search.",
    "Shopify organic search revenue reconciled to $317,229.89 in June across 5,540 rows and $337,775.54 in July across 5,367 rows.",
    "The Shopify metric is Total sales (USD). The CSV contains seven June and six July rows without a product attribution; those amounts remain in monthly totals.",
    "The Shopify column labeled Landing page URL contains external search-referrer URLs, not onsite V-Belt Guys landing pages. GSC supplies onsite page performance in this report.",
    "The CSV order metric was not summed because rows are segmented by search engine, referrer, and product; a multi-product order can appear in more than one row.",
    "Completed-work evidence comes from ClickUp task status, names, assignees, and closure dates in Brandon's V-Belt Guys list; task closure records are the reporting source of truth.",
    "ClickUp task status was reviewed on August 5, 2026. The active August onsite and schema parents were marked in progress with July 31 due dates.",
  ],
};
