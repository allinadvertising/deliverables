import type { SeoStoryReportData } from "@/lib/reports/types";

export const snowieJune2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover lost organic visibility and drive measurable revenue growth, especially from B2B equipment sales.",
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },
  visualSection: {
    eyebrow: "Performance trends",
    intro:
      "June expanded Snowie's organic reach, orders, revenue, and average order value. These views show where organic revenue entered the site and which products generated the most sales.",
    title: "Organic growth and revenue performance",
  },
  meta: {
    action:
      "Complete the in-progress ClickUp task \"Implement Dev Fixes from SEO Road Map\" (owner: Brandon Swain; due September 15, 2026).",
    client: "Snowie",
    coverHeadline:
      "Nonbrand discovery is scaling. Click efficiency is the next level.",
    currentPeriod: "June 1-30, 2026",
    previousPeriod: "May 1-31, 2026",
    property: "https://snowie.com/",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + WooCommerce Analytics + ClickUp delivery records",
  },
  executiveSummary:
    "June organic search generated 126 orders and $59,715.14 in gross revenue. Orders increased 9.6%, gross revenue grew 35.7%, and average order value rose from $382.60 to $473.93. Organic was Snowie's second-largest revenue channel in both months, although its share of all orders declined from 26.8% to 23.7% as total store orders grew faster. Organic clicks increased 11.9%, search visibility expanded 24.1%, and visible nonbrand clicks rose 37.6%. The homepage remained the largest organic entry point, while the Flavor Station, Mini Pro, and machine-category pages broadened the revenue mix in June.",
  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks grew 11.9%, with the Flavor Browser and shaved ice machines category adding 685 visits together.",
      status: "positive",
    },
    {
      area: "Conversions",
      statement:
        "Organic gross revenue increased 35.7% to $59,715.14 as orders grew 9.6% and average order value rose 23.9%.",
      status: "positive",
    },
    {
      area: "Rankings",
      statement:
        "Average ranking improved to 6.9 while visible nonbrand clicks grew 37.6%, showing broader discovery beyond Snowie's name.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "The old homepage now points to the right place, but some product grids still show internal error text and the Vendor Locator search title is incomplete.",
      status: "watch",
    },
  ],
  journeyWorkstreams: [
    {
      businessPriority:
        "Grow qualified organic demand without losing the visibility gained in June.",
      name: "Monthly growth",
      started:
        "May produced 7,307 clicks from 285,989 search appearances at an average ranking of 7.1.",
      work:
        "We separated June growth into brand, nonbrand, landing-page, and device-level drivers.",
      result:
        "Clicks increased 11.9%, visibility grew 24.1%, and average ranking improved by 0.2 positions.",
      next:
        "Protect the June gains while measuring click efficiency on the pages creating the new visibility.",
    },
    {
      businessPriority:
        "Bring more equipment and flavor-syrup shoppers to commercial category pages.",
      name: "Commercial discovery",
      started:
        "Visible nonbrand searches generated 1,538 clicks in May, led by machine, syrup, and flavor terms.",
      work:
        "We isolated the categories and generic searches responsible for June's incremental demand.",
      result:
        "Visible nonbrand clicks rose 37.6%. In June, the Flavor Station, Mini Pro, and shaved ice machines entry pages generated $18,782.18 in organic gross revenue.",
      next:
        "Strengthen internal links and search listings for the category pages already proving demand.",
    },
    {
      businessPriority:
        "Turn Snowie's growing search visibility into more qualified site visits.",
      name: "Click capture",
      started:
        "The homepage earned 2,443 clicks from 97,547 search appearances at a 2.50% click rate.",
      work:
        "We compared branded demand with the homepage's larger June visibility footprint.",
      result:
        "Homepage impressions grew 22.6% and clicks fell 6.8%, while attributed homepage revenue increased 3.1% to $30,436.83.",
      next:
        "Test a clearer homepage title and description while preserving the stronger nonbrand message.",
    },
  ],
  completedWork: [
    {
      completedOn: "June 1, 2026",
      evidence:
        "The onsite package was approved and 18 of 20 listed product-page updates were implemented. The remaining two URLs were documented as nonexistent rather than reported as completed.",
      owner: "Ricardo Zelaya",
      taskUrl: "https://app.clickup.com/t/868jdjyvd",
      title: "Implemented 18 product-page onsite updates",
    },
    {
      completedOn: "June 1, 2026",
      evidence:
        "Schema markup was written for the six scheduled pages and the implementation note confirms that the markup was installed manually.",
      owner: "Roberto Verlezza",
      taskUrl: "https://app.clickup.com/t/868jewgxy",
      title: "Completed the six-page schema package",
    },
    {
      completedOn: "June 23, 2026",
      evidence:
        "Missing sitemap sections were enabled and checked after regeneration. The sitemap index contained all 10 expected sitemaps, including 122 flavor URLs and 77 location URLs.",
      owner: "Rafael Osorio",
      taskUrl: "https://app.clickup.com/t/868j7cjrt",
      title: "Restored sitemap coverage",
    },
    {
      completedOn: "June 23, 2026",
      evidence:
        "Cart, checkout, and account pages plus five redirected product URLs were removed from the sitemap. Redirects were retained, the cache was cleared, and only final indexable URLs remained.",
      owner: "Rafael Osorio",
      taskUrl: "https://app.clickup.com/t/868j7cjrv",
      title: "Removed unsuitable URLs from the sitemap",
    },
  ],
  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "7,307",
      current: "8,178",
      change: "+11.9%",
      businessMeaning:
        "Search delivered 871 more visits in June.",
      status: "positive",
    },
    {
      metric: "Search appearances",
      previous: "285,989",
      current: "354,888",
      change: "+24.1%",
      businessMeaning:
        "Snowie reached substantially more search demand.",
      status: "positive",
    },
    {
      metric: "Average ranking",
      previous: "7.1",
      current: "6.9",
      change: "+0.2 positions",
      businessMeaning:
        "Snowie's average result moved higher within the first page.",
      status: "positive",
    },
    {
      metric: "Click rate",
      previous: "2.55%",
      current: "2.30%",
      change: "-0.25 points",
      businessMeaning:
        "Visits grew, but not as quickly as search visibility.",
      status: "watch",
    },
    {
      metric: "Visible nonbrand clicks",
      previous: "1,538",
      current: "2,116",
      change: "+37.6%",
      businessMeaning:
        "More customers found Snowie through product needs instead of its name.",
      status: "positive",
    },
    {
      metric: "Mobile clicks",
      previous: "5,678",
      current: "6,500",
      change: "+14.5%",
      businessMeaning:
        "Mobile generated 822 of the site's 871 additional visits.",
      status: "positive",
    },
  ],
  kpiDisclosure:
    "Search performance comes from Google Search Console. WooCommerce attributed all organic orders to Google organic search in both periods. Gross revenue includes tax and shipping; order share compares organic orders with all attributed store orders. Visible nonbrand metrics include only search terms Google exposes.",
  performanceCharts: {
    revenue: {
      channelContext:
        "Organic was the second-largest revenue channel in May and June, and WooCommerce attributed 100% of organic orders to Google organic search.",
      insight:
        "June produced 11 more organic orders and $15,716.04 more gross revenue as average order value increased by $91.33.",
      series: [
        {
          change: "+35.7%",
          current: 59715.14,
          currentDisplay: "$59,715.14",
          label: "Gross revenue",
          previous: 43999.1,
          previousDisplay: "$43,999.10",
          status: "positive",
        },
        {
          change: "+9.6%",
          current: 126,
          currentDisplay: "126",
          label: "Orders",
          previous: 115,
          previousDisplay: "115",
          status: "positive",
        },
        {
          change: "+23.9%",
          current: 473.93,
          currentDisplay: "$473.93",
          label: "Average order value",
          previous: 382.6,
          previousDisplay: "$382.60",
          status: "positive",
        },
        {
          change: "-3.1 points",
          current: 23.7,
          currentDisplay: "23.7%",
          label: "Share of all orders",
          previous: 26.8,
          previousDisplay: "26.8%",
          status: "watch",
        },
      ],
      rankings: [
        {
          insight:
            "The homepage remained the largest entry point, but its share of the top-page revenue mix became less concentrated in June.",
          periods: [
            {
              label: "May 2026",
              items: [
                { detail: "58 orders", display: "$29,523.62", label: "Homepage /", value: 29523.62 },
                { display: "$2,722.97", label: "Flavor syrup dispensing category", value: 2722.97 },
                { display: "$2,568.02", label: "About", value: 2568.02 },
                { display: "$2,175.77", label: "Sour Extreme Powder", value: 2175.77 },
                { detail: "10 orders", display: "$1,346.47", label: "Parts", value: 1346.47 },
              ],
            },
            {
              label: "June 2026",
              items: [
                { detail: "69 orders", display: "$30,436.83", label: "Homepage /", value: 30436.83 },
                { display: "$11,003.87", label: "Flavor Station - 6 Unit", value: 11003.87 },
                { display: "$4,796.44", label: "Snowie Mini Pro Ice Shaver", value: 4796.44 },
                { display: "$2,981.87", label: "Shaved ice machines category", value: 2981.87 },
                { display: "$2,384.70", label: "Snowie Cube Pro Ice Shaver", value: 2384.7 },
              ],
            },
          ],
          title: "Top organic landing pages by revenue",
        },
        {
          insight:
            "Equipment led organic product revenue in both periods, with the six-unit Flavor Station becoming a major June contributor.",
          periods: [
            {
              label: "May 2026",
              items: [
                { display: "$11,960.00", label: "Snowie Cube Pro - 110AC", value: 11960 },
                { display: "$7,840.00", label: "Snowie Mini Pro - 110AC", value: 7840 },
                { display: "$2,460.00", label: "Drop Down Flavor Station", value: 2460 },
                { display: "$1,977.80", label: "Snowie Cube Pro Blade", value: 1977.8 },
                { display: "$1,960.00", label: "Snowie Mini Pro - 12v DC", value: 1960 },
              ],
            },
            {
              label: "June 2026",
              items: [
                { display: "$13,720.00", label: "Snowie Mini Pro - 110AC", value: 13720 },
                { display: "$9,925.00", label: "Flavor Station - 6 Unit", value: 9925 },
                { display: "$8,970.00", label: "Snowie Cube Pro - 110AC", value: 8970 },
                { display: "$3,650.00", label: "Snowie Block Pro - 110AC", value: 3650 },
                { display: "$1,618.20", label: "Snowie Cube Pro Blade", value: 1618.2 },
              ],
            },
          ],
          title: "Top products from organic orders",
        },
      ],
      title: "Organic revenue accelerated in June",
    },
    growth: {
      title: "Monthly growth",
      insight:
        "June produced 871 additional organic visits while Snowie's search visibility expanded by 68,899 appearances.",
      series: [
        {
          change: "+11.9%",
          current: 8178,
          currentDisplay: "8,178",
          label: "Organic clicks",
          previous: 7307,
          previousDisplay: "7,307",
          status: "positive",
        },
        {
          change: "+24.1%",
          current: 354888,
          currentDisplay: "354,888",
          label: "Search appearances",
          previous: 285989,
          previousDisplay: "285,989",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 1538,
      baselineDisplay: "1,538",
      contributions: [
        { display: "+359", label: "Flavor Browser", value: 359 },
        { display: "+326", label: "Shaved ice machines", value: 326 },
        { display: "-107", label: "Other visible queries", value: -107 },
      ],
      insight:
        "The two leading commercial destinations added 685 visits, more than offsetting a 107-click net decline across other visible nonbrand queries.",
      title: "What drove nonbrand growth",
      total: 2116,
      totalDisplay: "2,116",
    },
    homepage: {
      title: "Homepage visibility outpaced click capture",
      insight:
        "The homepage appeared in 22,013 more searches but received 167 fewer visits, making its search listing the clearest immediate optimization target.",
      series: [
        {
          change: "+22.6%",
          current: 119560,
          currentDisplay: "119,560",
          label: "Search appearances",
          previous: 97547,
          previousDisplay: "97,547",
          status: "positive",
        },
        {
          change: "-6.8%",
          current: 2276,
          currentDisplay: "2,276",
          label: "Organic clicks",
          previous: 2443,
          previousDisplay: "2,443",
          status: "watch",
        },
        {
          change: "-0.60 points",
          current: 1.9,
          currentDisplay: "1.90%",
          label: "Click rate",
          previous: 2.5,
          previousDisplay: "2.50%",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Mobile supplied most of the growth",
      insight:
        "Mobile generated 822 of the site's 871 additional visits. Other devices combined added 49 visits.",
      series: [
        {
          change: "+14.5%",
          current: 6500,
          currentDisplay: "6,500",
          label: "Mobile",
          previous: 5678,
          previousDisplay: "5,678",
          status: "positive",
        },
        {
          change: "+3.0%",
          current: 1678,
          currentDisplay: "1,678",
          label: "Other devices combined",
          previous: 1629,
          previousDisplay: "1,629",
          status: "positive",
        },
      ],
    },
  },
  visualDirections: [],
  obstacles: [
    {
      obstacle:
        "Branded homepage click capture weakened. The query 'snowie' lost 284 clicks and homepage click rate fell from 2.50% to 1.90%.",
      impact:
        "The homepage lost 167 visits despite gaining 22,013 search appearances, offsetting part of the nonbrand growth.",
      remediation:
        "Rewrite the homepage title and description around the Snowie brand, commercial equipment, flavors, and business value.",
      eta:
        "Reassess in the first complete monthly report after the listing update.",
    },
    {
      obstacle:
        "High-impression category pages still capture a small share of visibility. Flavor Browser click rate was 1.19% and shaved ice machines was 1.40%.",
      impact:
        "The two pages generated 138,586 appearances, so small click-rate gains can produce meaningful qualified traffic.",
      remediation:
        "Test stronger category titles and descriptions, align above-the-fold copy with search intent, and reinforce internal links.",
      eta:
        "Measure the first full calendar month after release.",
    },
    {
      obstacle:
        "Mobile visibility grew 38.5%, but mobile click rate fell from 3.15% to 2.60%.",
      impact:
        "Mobile drove most of June's growth, but the expanding search footprint is not yet converting at May's rate.",
      remediation:
        "Review mobile search listings and landing-page experience for the homepage and highest-impression categories.",
      eta:
        "Complete QA in the next release and compare the following full month.",
    },
    {
      obstacle:
        "Some product lists show internal error text, and the Vendor Locator search result does not clearly identify Snowie.",
      impact:
        "Customers may see unfinished content, while unclear search listings can reduce trust and clicks.",
      remediation:
        "Fix the product-list display, update the Vendor Locator page title, and confirm both changes on the live site.",
      eta:
        "One development sprint after ownership is confirmed.",
    },
  ],
  technicalItems: [
    {
      developerNote:
        "Keep the root-page canonical during validation and replace internal references to /home-page/ with direct links to /.",
      issue:
        "Some website links may still send visitors through an outdated homepage address.",
      why:
        "Unnecessary redirects can slow the visitor journey and make the preferred homepage less clear to search engines.",
      fix:
        "Update remaining links so they point directly to the main homepage, then confirm the old address still forwards correctly.",
    },
    {
      developerNote:
        "Define or replace NEW_ARRIVAL_DAYS_THRESHOLD, suppress production error output, and test representative product grids after release.",
      issue:
        "Some product lists can display an internal error instead of finished product information.",
      why:
        "Visible errors can interrupt shopping, weaken trust, and leave search engines with incomplete product content.",
      fix:
        "Correct the missing site setting, hide internal errors from visitors, and test key product lists after release.",
    },
    {
      developerNote:
        "Repair the title template and verify the rendered title, meta description, and H1 on the live Vendor Locator page.",
      issue:
        "The Vendor Locator search listing does not clearly identify Snowie.",
      why:
        "People looking for nearby shaved ice may be less likely to trust or select an unclear result.",
      fix:
        "Update the page title and confirm that the search listing and page heading clearly name Snowie.",
    },
    {
      developerNote:
        "Attach a post-release crawl, Google Search Console indexing comparison, and Core Web Vitals check to the relevant ClickUp tasks.",
      issue:
        "Completed work is documented, but its effect on site health has not been measured yet.",
      why:
        "Without a follow-up check, the team cannot confirm that each release improved search access or visitor experience.",
      fix:
        "Run a site-health check after each release and include the before-and-after result in the next monthly report.",
    },
  ],
  dataNotes: [
    "Performance source: Google Search Console property https://snowie.com/.",
    "Current period: June 1-30, 2026. Previous period: May 1-31, 2026.",
    "The comparison uses complete calendar months; May contains one more day than June.",
    "Search Console data was final when exported on July 29, 2026.",
    "Query-level brand and nonbrand observations use visible search terms because Google withholds some terms for privacy.",
    "Live HTML inspection on July 29, 2026 supplied the redirect, product-card, and Vendor Locator observations.",
    "WooCommerce Analytics reports 115 organic orders in May and 126 in June; all organic attribution came from Google organic search in both periods.",
    "Gross organic revenue was $43,999.10 in May and $59,715.14 in June. These order totals include tax and shipping; WooCommerce net sales will be lower because it excludes tax, shipping, and refunds.",
    "Organic represented 115 of 429 total attributed orders in May and 126 of 531 in June. It was the second-largest revenue channel in both months.",
    "Completed-work evidence comes from closed ClickUp tasks and implementation comments. Post-release crawl, indexing, and Core Web Vitals evidence was not attached.",
  ],
};
