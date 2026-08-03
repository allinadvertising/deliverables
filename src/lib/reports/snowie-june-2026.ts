import type { SeoStoryReportData } from "@/lib/reports/types";

export const snowieJune2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover lost organic visibility and drive measurable revenue growth, especially from B2B equipment sales, while restoring organic shopping reach through Google Merchant Center.",
  technicalLabels: {
    fix: "What we will do",
    issue: "What is broken",
    why: "Why it matters",
  },
  visualSection: {
    eyebrow: "Performance trends",
    intro:
      "June expanded Snowie's organic reach and generated more orders, but lower order value reduced revenue. These views connect search growth to the business outcome.",
    title: "Organic growth and revenue performance",
  },
  meta: {
    action:
      "Run one search-listing optimization sprint across the homepage, machine category, and Flavor Browser.",
    client: "Snowie",
    coverHeadline:
      "Nonbrand discovery is scaling. Click efficiency is the next level.",
    currentPeriod: "June 1-30, 2026",
    previousPeriod: "May 1-31, 2026",
    property: "https://snowie.com/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console + organic order data",
  },
  executiveSummary:
    "June organic search generated 121 orders and $39,999.47 in gross revenue. Orders increased 6.1%, but gross revenue declined 3.8% because average order value fell from $364.84 to $330.57. Organic clicks grew 11.9%, search visibility expanded 24.1%, and visible nonbrand clicks rose 37.6%, led by the Flavor Browser and shaved ice machines category. New customers generated 79.6% of June organic revenue, up from 71.3% in May, showing that SEO is reaching fresh buyers. The next priority is to protect that acquisition growth while improving homepage click capture and understanding the product mix behind lower order value.",
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
        "Organic orders increased 6.1% to 121, but gross revenue declined 3.8% to $39,999.47 as average order value fell 9.4%.",
      status: "watch",
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
        "Visible nonbrand clicks rose 37.6%; Flavor Browser gained 359 clicks and shaved ice machines gained 326.",
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
        "Homepage impressions grew 22.6%, but clicks fell 6.8% as click rate declined to 1.90%.",
      next:
        "Test a clearer homepage title and description while preserving the stronger nonbrand message.",
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
    "Search performance comes from Google Search Console. Organic order data is 100% Google in both periods. Gross revenue includes the full order value; net revenue excludes tax and shipping. Visible nonbrand metrics include only search terms Google exposes.",
  performanceCharts: {
    revenue: {
      customerMix: [
        {
          grossDisplay: "$41,591.86 gross",
          label: "May",
          newCustomerDisplay: "$29,673.96",
          newCustomerRevenue: 29673.96,
          returningCustomerDisplay: "$11,917.90",
          returningCustomerRevenue: 11917.9,
        },
        {
          grossDisplay: "$39,999.47 gross",
          label: "June",
          newCustomerDisplay: "$31,842.05",
          newCustomerRevenue: 31842.05,
          returningCustomerDisplay: "$8,157.42",
          returningCustomerRevenue: 8157.42,
        },
      ],
      insight:
        "June produced seven more orders and 213 more items, but gross revenue fell $1,592.39 because average order value declined by $34.27.",
      series: [
        {
          change: "-3.8%",
          current: 39999.47,
          currentDisplay: "$39,999.47",
          label: "Gross revenue",
          previous: 41591.86,
          previousDisplay: "$41,591.86",
          status: "watch",
        },
        {
          change: "-4.9%",
          current: 33321.76,
          currentDisplay: "$33,321.76",
          label: "Net revenue",
          previous: 35051.95,
          previousDisplay: "$35,051.95",
          status: "watch",
        },
        {
          change: "+6.1%",
          current: 121,
          currentDisplay: "121",
          label: "Orders",
          previous: 114,
          previousDisplay: "114",
          status: "positive",
        },
        {
          change: "-9.4%",
          current: 330.57,
          currentDisplay: "$330.57",
          label: "Average order value",
          previous: 364.84,
          previousDisplay: "$364.84",
          status: "watch",
        },
      ],
      title: "More orders, lower order value",
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
        "Live product modules expose repeated application error text, and the Vendor Locator title is missing the brand name before a possessive.",
      impact:
        "Search engines and customers can receive unfinished page copy that weakens trust and result quality.",
      remediation:
        "Correct the product-card constant, suppress production error output, repair the title template, and recrawl the affected templates.",
      eta:
        "One development sprint after ownership is confirmed.",
    },
  ],
  technicalItems: [
    {
      issue:
        "Some internal links may still point to the retired /home-page/ address instead of the main homepage.",
      why:
        "Consolidating duplicate homepage signals gives search engines one preferred destination.",
      fix:
        "Keep the redirect in place, replace remaining internal links to the old address, and monitor the main homepage. Developers can retain the root canonical during validation.",
    },
    {
      issue:
        "Product grids can display internal application error text instead of finished product information.",
      why:
        "Customers and search engines can encounter internal application text instead of finished product information.",
      fix:
        "Define or replace NEW_ARRIVAL_DAYS_THRESHOLD, hide production error output, and validate representative product grids after release.",
    },
    {
      issue:
        "The Vendor Locator search title is incomplete and does not clearly name Snowie.",
      why:
        "An incomplete title weakens the result's clarity for people looking for shaved ice nearby.",
      fix:
        "Repair the title template and confirm the rendered title, description, and main heading.",
    },
    {
      issue:
        "The monthly reporting package is missing site-health and completed-work evidence.",
      why:
        "The report can now connect organic performance to orders and revenue, but it cannot confirm whether technical activity improved broader site health.",
      fix:
        "Add deployment dates, crawl exports, indexing coverage, and completed-work evidence to each monthly report.",
    },
  ],
  dataNotes: [
    "Performance source: Google Search Console property https://snowie.com/.",
    "Current period: June 1-30, 2026. Previous period: May 1-31, 2026.",
    "The comparison uses complete calendar months; May contains one more day than June.",
    "Search Console data was final when exported on July 29, 2026.",
    "Query-level brand and nonbrand observations use visible search terms because Google withholds some terms for privacy.",
    "Live HTML inspection on July 29, 2026 supplied the redirect, product-card, and Vendor Locator observations.",
    "Organic order data reports 114 May orders and 121 June orders; organic traffic is 100% Google in both periods.",
    "Gross revenue includes total order value. Net revenue excludes tax and shipping. May includes 113 completed orders and one processing order; all 121 June orders were completed.",
    "No completed-task, crawl, indexing, or Core Web Vitals data was supplied.",
  ],
};
