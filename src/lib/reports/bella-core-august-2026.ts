import type { SeoStoryReportData } from "@/lib/reports/types";

// Bella Core, August 2026. Built from output/bella-core-august-2026/data.json
// (GSC API, GA4 Data API and ClickUp, pulled 2026-09-21; WooCommerce Analytics read from the store
// admin 2026-09-22). Store figures are all-channel net sales, never reported as organic revenue.
export const bellaCoreAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow visibility and traffic steadily for the priority surround products, win contractor and trade leads for quoted jobs, and lift online store sales that close without the client's team having to touch them. Consistent growth in traffic and visibility is the agreed measure; daily rankings are not.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Everything below is organic search performance from Google Search Console, August compared with July (both 31 days). Store sales are not shown as a chart: WooCommerce recorded 3 orders in August and 6 in July, too few to plot, and they cover every channel, not search alone.",
    title: "Organic search performance, August vs July",
  },

  meta: {
    action:
      "Finish the WooCommerce revenue tracking audit so organic search can be separated from Google Ads and so we learn how much business closes off the website, fix the Merchant Center pricing and return fields, and publish the three product-page content refreshes (natural thin stone and both granite wall panel pages).",
    client: "Bella Core",
    coverHeadline:
      "Organic clicks fell 10.2% to 616 in August, and one category page, poly surrounds, lost 32 of the 70. Brand searches edged up to 85 clicks; the loss came from searches Google does not show (-64) and named product searches (-8).",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://bellacore.net/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "August was a softer month for organic search, and the loss is concentrated. Clicks fell 10.2% to 616 and impressions fell 5.7% to 81,602, while average position improved slightly from 12.78 to 12.4. The poly surrounds category page alone lost 32 clicks (91 to 59); the homepage, the natural thin stone wall panels page and the white shiplap kit lost 40 more between them, and the shower and tub surrounds page gained 11. Brand searches edged up from 83 to 85 clicks. Most of the drop (64 of 70 clicks) came from searches Google does not show, which were 61.7% of all clicks; Google withholds those queries for privacy, so we cannot tell whether they were brand or product searches. Desktop took most of the loss (-53 clicks). The SEO work delivered in August was content and markup: new product copy went live on three product pages, copy for three more product pages was written, and schema markup was written and installed. Online store sales are very small: WooCommerce recorded 3 orders and $1,171 in net sales across all channels in August, against 6 orders and $1,768 in July, with a larger average order ($390 vs $295). At three orders a month, a month-to-month change of one or two orders means nothing, and the website traffic of 3,208 sessions is far larger than the checkout activity. That is expected here: much of the business is contractor and trade work that closes as a quoted job rather than an online order, and the products are expensive. That is the open measurement problem: until we know what a search visit is worth off the website, search cannot be judged on store sales. The WooCommerce revenue tracking audit, plus quote and call tracking, is the first measurement priority.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks fell 10.2% to 616 and impressions fell 5.7% to 81,602. One page, poly surrounds, accounts for 32 of the 70 lost clicks.",
      status: "watch",
    },
    {
      area: "Revenue",
      statement:
        "WooCommerce net sales were $1,171 across all channels on 3 orders, against $1,768 on 6 orders in July. Volume this small cannot be read as a trend, and it does not separate search from Google Ads.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved slightly to 12.4 from 12.78, and brand searches edged up from 83 to 85 clicks. Rankings did not collapse. The biggest loss was the poly surrounds category page, which sits on page two.",
      status: "watch",
    },
    {
      area: "Content and technical",
      statement:
        "New copy went live on three product pages, copy for three more was written, and schema markup was written and installed.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Keep the product and category pages that bring in search traffic visible.",
      name: "Organic traffic",
      started:
        "July closed at 686 organic clicks and 86,504 impressions, led by the natural thin stone wall panels page, the homepage and the poly surrounds category page.",
      work:
        "We compared August with July in Search Console by page, device and query group (brand searches, other named searches, and searches Google does not show).",
      result:
        "Clicks fell 10.2% to 616. Poly surrounds lost 32 clicks as its impressions fell 14.6% and its average position slipped from 18.7 to 19.3. Brand searches edged up from 83 to 85 clicks. Desktop fell 18.6% while mobile fell 3.4%.",
      next:
        "Watch poly surrounds and the other page-two category pages in September, and prioritize them for on-page and internal-link work.",
    },
    {
      businessPriority: "Give product pages stronger, more specific copy that matches how people search.",
      name: "Product page content",
      started:
        "July's product page content orders were written and waiting to be published.",
      work:
        "The developer published July's new copy on the 42x60 acrylic tub, the coastal linen surround kit and the undermount sink pages. The content writer wrote August copy for the tan shiplap, shower pan and 34 inch acrylic shower base pages.",
      result:
        "Three product pages now carry the new copy. The 42x60 acrylic tub page had 13 clicks and 1,983 impressions in August (11 and 1,438 in July), which is early and too small to call a trend.",
      next:
        "Publish the August copy, and deliver the three September refreshes: natural thin stone wall panels and both granite wall panel pages.",
    },
    {
      businessPriority: "Help Google read products clearly in search and Shopping results.",
      name: "Structured data and Merchant Center",
      started: "August's plan included schema markup for the site, and a Merchant Center fix for pricing and return fields was identified.",
      work: "The developer wrote the August schema markup on August 26 and installed it on August 27.",
      result: "The August schema markup is installed. The Merchant Center pricing and return fields are scoped as a September task.",
      next: "Fix the Merchant Center pricing blocks and return fields, then check the schema in Search Console's enhancement reports.",
    },
    {
      businessPriority: "Measure what organic search is worth in sales.",
      name: "Revenue measurement",
      started:
        "Revenue lives in WooCommerce. GA4 recorded only a few purchases, and Bella Core also runs Google Ads, so paid and organic Google are hard to separate.",
      work:
        "We pulled GA4 for both months: 3 purchases across all channels in August and 5 in July. These have not yet been checked against WooCommerce orders, so they are not treated as the store's real order counts.",
      result: "Organic revenue cannot be reported yet. A WooCommerce revenue tracking audit is scheduled.",
      next:
        "Complete the tracking audit, pull the WooCommerce sales report as all-channel context, and separate organic from paid Google.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 7, 2026",
      evidence: "Closed August 7. New July copy published on the 42x60 acrylic tub with center drain page.",
      owner: "Developer",
      title: "Published new copy on the 42x60 acrylic tub page",
    },
    {
      completedOn: "August 7, 2026",
      evidence: "Closed August 7. New July copy published on the coastal linen poly tub and shower surround kit page.",
      owner: "Developer",
      title: "Published new copy on the coastal linen surround kit page",
    },
    {
      completedOn: "August 7, 2026",
      evidence: "Closed August 7. New July copy published on the undermount sink page.",
      owner: "Developer",
      title: "Published new copy on the undermount sink page",
    },
    {
      completedOn: "August 20, 2026",
      evidence: "Closed August 20. Page copy and on-page elements written for the tan shiplap product page.",
      owner: "Content Writer",
      title: "Wrote new copy for the tan shiplap page",
    },
    {
      completedOn: "August 20, 2026",
      evidence: "Closed August 20. Page copy and on-page elements written for the shower pan and shower base page.",
      owner: "Content Writer",
      title: "Wrote new copy for the shower pan page",
    },
    {
      completedOn: "August 20, 2026",
      evidence: "Closed August 20. Page copy and on-page elements written for the 34 inch acrylic shower base page.",
      owner: "Content Writer",
      title: "Wrote new copy for the 34 inch acrylic shower base page",
    },
    {
      completedOn: "August 27, 2026",
      evidence: "Markup written August 26 and installed on the site August 27.",
      owner: "Developer",
      title: "Wrote and installed the August schema markup",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "686",
      current: "616",
      change: "-10.2%",
      businessMeaning:
        "Fewer visits from Google search. Poly surrounds lost 32 clicks; the homepage (-15), natural thin stone wall panels (-13) and the white shiplap kit (-12) lost most of the rest.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "86,504",
      current: "81,602",
      change: "-5.7%",
      businessMeaning: "The site appeared in fewer searches. Poly surrounds alone lost 3,063 impressions.",
      status: "watch",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "444",
      current: "380",
      change: "-14.4%",
      businessMeaning:
        "61.7% of August clicks came from searches Google withholds for privacy. Google does not show which searches these were, so their brand status is unknown. They carry 64 of the 70 lost clicks.",
      status: "watch",
    },
    {
      metric: "Clicks from brand searches",
      previous: "83",
      current: "85",
      change: "+2.4%",
      businessMeaning: "Searches for Bella Core by name, including the misspelling belacore, held steady and edged up. Brand demand was not the problem this month.",
      status: "neutral",
    },
    {
      metric: "Clicks from other named searches",
      previous: "159",
      current: "151",
      change: "-5.0%",
      businessMeaning:
        "Non-brand searches Google does show dipped overall (151 vs 159 clicks). Searches naming another brand, Bella Aria, brought 8 of these clicks; Bella Core sells no such line, so that demand is landing here by association.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "12.78",
      current: "12.4",
      change: "0.38 better",
      businessMeaning:
        "Rankings held and improved slightly on average. Many key category pages still sit on page two (positions 11 to 20), where small moves change clicks a lot.",
      status: "positive",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "1,292",
      current: "1,231",
      change: "-4.7%",
      businessMeaning: "GA4 confirms a smaller drop in organic visits than Search Console clicks show, in the same direction.",
      status: "watch",
    },
    {
      metric: "Store net sales (WooCommerce, all channels)",
      previous: "$1,768",
      current: "$1,171",
      change: "-33.8%",
      businessMeaning:
        "Online sales from every channel, including Google Ads, not search alone. Three orders in August against six in July, so the change is two or three orders, not a trend.",
      status: "watch",
    },
    {
      metric: "Store orders (WooCommerce, all channels)",
      previous: "6",
      current: "3",
      change: "-50.0%",
      businessMeaning:
        "The website took 3,208 visits from all channels in August and 3 orders. Most Bella Core business does not appear to close through the online checkout, so store orders are not yet a fair measure of search performance.",
      status: "watch",
    },
    {
      metric: "Average order value (WooCommerce, all channels)",
      previous: "$294.67",
      current: "$390.33",
      change: "+32.5%",
      businessMeaning: "The orders that did come in were larger. With three orders, one order sets this number.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console URL-prefix property https://bellacore.net/ through the API, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows; CTR and position are Search Console's rounded averages. Brand searches are queries containing 'bella core', 'bellacore' or the misspelling 'belacore'. Google withholds rare queries for privacy: 380 of 616 August clicks (61.7%) came from searches Google does not show, so no brand share of total clicks is stated as fact. Organic sessions come from GA4 property 497699113 (Organic Search channel). Store figures come from the WooCommerce Analytics revenue report, read from the store admin on September 22, 2026: they are net sales, excluding shipping and tax, from every channel including Google Ads, not organic search alone. GA4 and WooCommerce do not agree on July orders (5 against 6), so the two sources still need to be reconciled.",

  conversionPlan: {
    owner: "Head of SEO + Account Manager",
    sourcePriority:
      "WooCommerce order records are the revenue source of truth. Complete the WooCommerce revenue tracking audit, check GA4 purchase tracking against WooCommerce orders, and separate organic from paid Google in order attribution.",
    nextReportExpectation:
      "The next report shows WooCommerce store sales the same way, as clearly labeled all-channel context, plus the reconciliation between GA4 and WooCommerce orders. Organic-attributed revenue appears once the tracking audit confirms paid and organic Google are separated, and once quote and call activity is measured, since most business does not close in the online checkout.",
  },

  performanceCharts: {
    growth: {
      title: "Clicks and impressions both fell",
      insight:
        "Clicks fell 10.2% and impressions 5.7%, so the site lost some visibility and turned slightly less of it into visits (CTR 0.75% vs 0.79%). Both months had 31 days.",
      series: [
        {
          change: "-10.2%",
          current: 616,
          currentDisplay: "616",
          label: "Organic clicks",
          previous: 686,
          previousDisplay: "686",
          status: "watch",
        },
        {
          change: "-5.7%",
          current: 81602,
          currentDisplay: "81,602",
          label: "Search impressions",
          previous: 86504,
          previousDisplay: "86,504",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 686,
      baselineDisplay: "686",
      contributions: [
        { display: "0", label: "Brand searches", value: 0 },
        { display: "-6", label: "Other named searches", value: -6 },
        { display: "-64", label: "Searches Google does not show", value: -64 },
      ],
      insight:
        "Brand searches held flat. Other named searches dipped by 6 clicks, and searches Google does not show fell by 64. Google withholds those queries for privacy, so their brand status is unknown and this chart does not show a brand vs non-brand split of the loss.",
      title: "Brand held flat. The loss sits in searches Google does not show",
      total: 616,
      totalDisplay: "616",
    },
    homepage: {
      title: "Poly surrounds: the single biggest loss",
      insight:
        "The poly surrounds category page lost 32 clicks, nearly half of the site's 70-click drop. Its impressions fell 14.6% and its average position slipped from 18.7 to 19.3, on page two. We recommend making it the first page to strengthen in September.",
      series: [
        {
          change: "-35.2%",
          current: 59,
          currentDisplay: "59",
          label: "Clicks",
          previous: 91,
          previousDisplay: "91",
          status: "watch",
        },
        {
          change: "-14.6%",
          current: 17954,
          currentDisplay: "17,954",
          label: "Impressions",
          previous: 21017,
          previousDisplay: "21,017",
          status: "watch",
        },
        {
          change: "0.6 worse",
          current: 19.3,
          currentDisplay: "19.3",
          label: "Average position",
          previous: 18.7,
          previousDisplay: "18.7",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Desktop took most of the loss",
      insight:
        "Desktop clicks fell 18.6% (-53) while mobile fell 3.4% (-13). Mobile now carries 59.9% of clicks. Tablet is small (15 clicks) and not shown.",
      series: [
        {
          change: "-3.4%",
          current: 369,
          currentDisplay: "369",
          label: "Mobile",
          previous: 382,
          previousDisplay: "382",
          status: "watch",
        },
        {
          change: "-18.6%",
          current: 232,
          currentDisplay: "232",
          label: "Desktop",
          previous: 285,
          previousDisplay: "285",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Organic revenue cannot be isolated. WooCommerce recorded 3 orders in August across every channel, Bella Core also runs Google Ads, and GA4 and WooCommerce disagree on July orders (5 against 6). The website took 3,208 visits and 3 orders, so most business appears to close by phone, quote or trade account, where nothing is measured today.",
      impact:
        "SEO's contribution to sales cannot be measured. Store sales at this volume swing on a single order, and the off-website demand that search most likely creates is invisible.",
      remediation:
        "Complete the WooCommerce revenue tracking audit, reconcile GA4 purchases with WooCommerce orders, separate paid from organic Google in order attribution, and add quote-request and phone-call tracking so off-website demand is counted.",
      eta: "Audit scheduled for September; reconciliation and off-website tracking in the next report.",
    },
    {
      obstacle:
        "Key pages rank on page two or lower: poly surrounds at 19.3, shower and tub surrounds at 23.8, and the homepage at 14.4.",
      impact: "Pages outside the top 10 get few clicks, and poly surrounds lost 32 clicks in August as both its impressions and its position slipped.",
      remediation:
        "Prioritize these category pages for on-page copy, titles and internal links from the product pages that already rank on page one.",
      eta: "Next content and on-page cycle.",
    },
    {
      obstacle: "Merchant Center pricing blocks and return fields need fixing.",
      impact: "Incomplete listings can limit how products show in Shopping and free listings.",
      remediation: "Fix the pricing blocks and return fields and revalidate in Merchant Center.",
      eta: "September.",
    },
  ],

  technicalItems: [
    {
      issue: "GA4 recorded only 3 purchases across all channels in August (5 in July), and these have not been checked against WooCommerce orders.",
      why: "Without complete purchase tracking, no channel can be credited with sales, and organic cannot be separated from Google Ads.",
      fix: "Audit WooCommerce revenue tracking, check the GA4 purchase event against WooCommerce orders, and validate order attribution.",
      developerNote: "Scheduled as the WooCommerce revenue tracking audit in September.",
    },
    {
      issue: "Merchant Center pricing blocks and return fields need fixing.",
      why: "Missing merchant fields can keep products out of Shopping and free listings.",
      fix: "Populate the pricing and return fields and revalidate the feed.",
      developerNote: "Scheduled for September.",
    },
    {
      issue:
        "A natural thin stone wall panels URL with product-option parameters appears in Search Console as its own page (4 clicks in August), and some products exist under numbered slugs (granite-wall-panels and granite-wall-panels-2).",
      why: "Parameter and near-duplicate URLs can split clicks and ranking signals between versions of the same product.",
      fix: "Confirm each variant URL canonicalizes to its main product page, and confirm whether the numbered granite pages are separate products.",
      developerNote: "Worth checking alongside the September granite wall panel content refreshes.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://bellacore.net/, pulled through the API on September 21, 2026. Platform is WooCommerce.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (616 vs 686) and impressions (81,602 vs 86,504) are exact and equal the sum of the device rows. CTR 0.75% vs 0.79%; average position 12.4 vs 12.78.",
    "Query groups: brand searches (queries matching 'bella core', 'bellacore' or 'belacore') 85 vs 83 clicks; other named searches 151 vs 159; searches Google does not show 380 vs 444. Google withholds rare queries for privacy; they were 61.7% of August clicks and 64.7% of July clicks, and their brand status is unknown. Brand searches were 36.0% of the clicks on queries Google does show; that is not a share of all clicks.",
    "Page movers (all queries): poly surrounds 59 vs 91, homepage 134 vs 149, natural thin stone wall panels 135 vs 148, white 2-wall poly shiplap kit 25 vs 37, shower and tub surrounds 52 vs 41; all other pages -9 combined.",
    "Organic sessions: GA4 property 497699113, Organic Search channel, 1,231 vs 1,292.",
    "Store revenue: WooCommerce Analytics revenue report, read from the store admin on September 22, 2026. August net sales $1,171 on 3 orders, 14 items, average order $390.33; July net sales $1,768 on 6 orders, 16 items, average order $294.67. No refunds either month. Net sales exclude shipping ($195 in August, $240 in July) and tax. These totals cover every channel, including Google Ads, and are not organic revenue.",
    "GA4 recorded 3 purchases ($1,186) across all channels in August and 5 ($1,978) in July, so GA4 and WooCommerce disagree on July orders (5 against 6) and on both months' totals. GA4 assigned 2 of the August purchases ($1,171) and 2 of the July purchases ($45) to Organic Search. With two or three orders a month and the two sources disagreeing, no organic revenue figure is stated in this report.",
    "Bella Core also runs Google Ads. WooCommerce order attribution and GA4 ecommerce tracking do not yet separate paid from organic Google reliably.",
    "The business objective, the priority products and the agreed measure of success come from the account intake on August 9, 2026: visibility, trade leads for quoted jobs and online store sales with minimal internal effort, measured as consistent growth in traffic and visibility rather than daily rankings. That intake also records that much of the revenue comes from contractor outreach and quoted jobs rather than the online checkout.",
    "Completed work comes from ClickUp tasks closed in August 2026. Google Ads tasks and administrative items are excluded as outside SEO.",
  ],
};
