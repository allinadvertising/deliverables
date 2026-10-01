import type { SeoStoryReportData } from "@/lib/reports/types";

// Custom Sports Products, August 2026. Built from output/custom-sports-products-august-2026/data.json
// (GSC API, GA4 Data API and ClickUp, pulled 2026-09-29), plus gsc-2025-08.json and gsc-2025-10.json
// in the same folder for the year-over-year check. Those two files are the source for every 2025 figure
// quoted in the narrative and dataNotes; they are deliberately kept out of kpiRows and chart series,
// which must trace to data.json.
// BASELINE REPORT. The engagement is new: the first task on the account was opened on August 27, 2026
// and the strategy was approved on September 10, 2026. No SEO work was delivered inside August, so
// August is reported as the starting point and the July comparison is labeled pre-engagement
// throughout. Nothing in this month is presented as a result of the plan.
export const customSportsProductsAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Protect a recovery that was already under way when the engagement began and accelerate it on the categories that carry the revenue: the custom ball pages, the home page and the brand term, and Shopping visibility.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Baseline",
    intro:
      "This is the first report on the account, and August is a starting point rather than a scorecard. The strategy was approved on September 10, 2026, after the month closed, so every figure below describes the site as it stood before the plan began. July is shown for context only, and it is a pre-engagement comparison. We checked the shape of the year against last year rather than assuming it: in 2025 the site lost 21.2% of its clicks between July and August, so this year's rise is not a seasonal pattern repeating. From the next report onward these same measures become the trend line the work is judged against.",
    title: "The August baseline, with July as pre-engagement context",
  },

  meta: {
    action:
      "Deploy the crawl-control specification for robots.txt, the noindex tags and the sitemap directive and verify it in Search Console, decide the hub consolidation map before any redirect is built, configure the Merchant Center return service and window, file the spam disavow, and get the meta-title field and a category-page editing route opened so the on-page work has a route to production.",
    client: "Custom Sports Products",
    coverHeadline:
      "August is the baseline, not a result: 721 organic clicks, 975 organic sessions and $1,135.06 of GA4 organic revenue from 12 purchases. The plan aimed at these numbers was approved on September 10, so this month measures the site as we found it.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "sc-domain:customsportsproducts.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "August is the baseline for this engagement. The first task on the account was opened on August 27 and the strategy was approved on September 10, so nothing in these numbers can be credited to the plan. That matters, because the month reads well on its own: organic clicks were 721 against 504 in July, impressions 67,688 against 60,456, click-through rate 1.07% against 0.83%, and average position 14.29 against 14.74. GA4 recorded 975 organic sessions against 673. The rise is genuine and it is not the calendar. Last year the site went the other way over the same two months, from 429 clicks in July 2025 to 338 in August 2025, a fall of 21.2%. Against August 2025 this August is up 113.3%, 721 clicks against 338, earned on fewer impressions (67,688 against 78,622) and from a far better average position (14.29 against 46.58). The site was already improving when the engagement began, and the strategy is built to carry that forward. Growth was broad rather than concentrated. Five pages carried 114 of the 217 extra clicks, led by custom volleyballs (71 against 40), the trading card maker (99 against 71) and the trading card templates page (36 against 9), with every other page adding 103 between them. Custom basketballs was the notable loser at 26 clicks against 36. On revenue, GA4 attributed $1,135.06 to Organic Search from 12 purchases, against $152.00 from 7 in July. Twelve orders is far too few to call a trend, and the July base is unusually small: the average organic order was $94.59 in August against $21.71 in July, so a handful of larger orders sets the whole difference. Treat both months as order samples, not a revenue curve. One caveat applies to the search figures throughout: Google withheld the query behind 68.4% of August clicks for privacy, so brand and non-brand shares of total clicks cannot be stated as fact. What is holding the ceiling down is technical, and it is the work now in flight: robots.txt currently permits everything and carries no sitemap directive, duplicate hub pages compete with the category pages they duplicate (soccer balls is the clearest case, at 15 clicks on the main page against 14 on the hub), the Merchant Center return service is unconfigured, and the meta-title field and category-page editing route are still closed, which gates every on-page item in the plan.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "The baseline is 721 organic clicks and 67,688 impressions, against 504 and 60,456 in July, and against 338 clicks in August 2025. July is the pre-engagement month, so this is the starting level, not a result.",
      status: "positive",
    },
    {
      area: "Revenue",
      statement:
        "GA4 attributed $1,135.06 to Organic Search from 12 purchases, against $152.00 from 7 in July. At twelve orders a month this is an order sample, not a trend, and the average order value moved from $21.71 to $94.59.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position was 14.29 against 14.74, and click-through rate 1.07% against 0.83%. Custom volleyballs sits at 7.7 and custom basketballs at 10.8, so the ball categories are close to page-one positions where small moves change clicks a lot.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "Crawling is unrestricted. robots.txt permits every path and names no sitemap, the sitemap itself points mostly at preview and pop-up URLs, and several categories exist as two competing pages. The crawl-control specification and the hub consolidation map are the first two items in flight.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Set a starting level that the next twelve months can be measured against.",
      name: "The organic baseline",
      started:
        "The two figures most often quoted about this site, impressions and the quarter-on-quarter click count, both point down, while clicks and average position have improved sharply against the same months a year earlier.",
      work:
        "We read August against July in Search Console by page, device and query group, and pulled GA4 for organic sessions, purchases and revenue on the same dates. We also pulled August 2025 and October 2025 from Search Console so the shape of the year is measured rather than assumed.",
      result:
        "August closed at 721 clicks, 67,688 impressions, 1.07% click-through rate and average position 14.29, with 975 organic sessions in GA4. Mobile carried 399 clicks against desktop's 311. Against August 2025 that is 721 clicks against 338 and average position 14.29 against 46.58. This is the baseline.",
      next:
        "Report these same measures every month and keep the year-over-year view beside them, since the account does rise into the autumn: October 2025 took 821 clicks against 583 in September 2025.",
    },
    {
      businessPriority: "Stop Google forming its impression of the site from preview screens and price pop-ups.",
      name: "Crawl control and indexing",
      started:
        "robots.txt is two lines with an empty disallow and no sitemap directive, so design-preview screens, discount pop-ups and internal search results are all fully crawlable. Search Console has discovered roughly 4,740 URLs on a site of about 2,000 real pages and declined to index 2,870 of them. Two path families account for about half of that rejected set.",
      work:
        "The specification is written: the exact robots.txt contents, the exact meta robots tag, and the list of templates it belongs on, so it is copied rather than composed. Disallow and noindex are kept separate, because a blocked page can never be fetched and so its noindex is never seen.",
      result:
        "The specification is with the developer and ready to deploy. Nothing has changed on the live site inside the August period this report covers.",
      next:
        "Deploy it, then re-fetch robots.txt, run it through the Search Console robots tester, and inspect a sample of preview and search URLs to confirm the directives are being read. Then rebuild the sitemap from the live category and product inventory.",
    },
    {
      businessPriority: "Stop two of your own pages competing for the same customer.",
      name: "Duplicate hubs and the home page",
      started:
        "Several categories exist as a main page and a hub page. Soccer balls is the live case: in August the main page took 15 clicks on 1,519 impressions and the hub took 14 on 2,949, and neither ranks well (9.2 and 23.2). Other hubs take no clicks at all against their main pages. The home page is separately reachable at more than one address.",
      work:
        "The consolidation map is scoped as a decision before an implementation: read each hub page, then record for each intent which URL survives and what happens to the other.",
      result:
        "The mapping task is open with an early October date. No redirects have been built, which is deliberate: two hubs currently outrank the page they would be merged into, and redirecting the stronger URL into the weaker one loses ground.",
      next:
        "Finish the map, start with soccer balls, then consolidate the home page onto a single address and re-read the brand results four weeks later before commissioning any home page copy.",
    },
    {
      businessPriority: "Put content behind the categories that were already gaining.",
      name: "Ball categories and content",
      started:
        "The ball pages are the strongest part of the site and the highest ticket. In August custom volleyballs took 71 clicks against 40, custom footballs 38 against 26 and custom soccer balls 15 against 12, while custom basketballs slipped to 26 from 36.",
      work:
        "A five-piece content order covering the ball categories is scheduled for September, written against what a coach or team buyer needs to decide: sizes and materials, in-house manufacturing and turnaround, minimum quantities, and the use cases. Product and FAQ markup is specified alongside the copy.",
      result:
        "Copy is being produced ahead of publishing access so it is ready the moment the editing route opens.",
      next:
        "Publish as soon as the category-page route is agreed, and hold the soccer ball copy until the hub decision is settled so it is not written onto a page that is about to change role.",
    },
    {
      businessPriority: "Accelerate Shopping on a feed that is already healthy.",
      name: "Shopping and Merchant Center",
      started:
        "Feed integrity is not the problem: almost every product is approved and store quality rates one tier below the top. The gaps are specific. The return service is not configured, so return cost reads as incomplete and the return window reads as zero days.",
      work:
        "Configuring the return service and window is scoped as the cheapest item on the account, because a missing signal is rated worse than a weak one.",
      result: "The task is open and unblocked. Desktop load speed and image resolution are sequenced behind it.",
      next:
        "Set a return window the business will genuinely honor, then confirm that return cost has moved from incomplete to a rating and that the missing-signal warning has cleared.",
    },
    {
      businessPriority: "Know what organic search is worth in orders, not just in visits.",
      name: "Revenue measurement",
      started:
        "GA4 is the only source in this report that attributes revenue to a channel. It recorded 12 organic purchases worth $1,135.06 in August and 7 worth $152.00 in July, against 92 purchases and $8,831.81 across all channels in August.",
      work:
        "We pulled both months from the GA4 Data API using the Organic Search channel, and compared organic against the all-channel totals to see how large a share search carries.",
      result:
        "Organic was 12.9% of GA4 purchase revenue in August and 13.0% of purchases. GA4 does not expose order-level detail, so we cannot yet name which products or orders those were.",
      next:
        "Tie the GA4 purchase figures to the store's own order records so organic revenue can be stated from the source of truth, and report product-level organic revenue once that link exists.",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "504",
      current: "721",
      change: "+43.1%",
      businessMeaning:
        "The baseline level of visits from Google search. July is a pre-engagement month, so this comparison sets a starting point rather than measuring the plan. Against August 2025 the same measure is up 113.3%, from 338 clicks.",
      status: "neutral",
    },
    {
      metric: "Search impressions",
      previous: "60,456",
      current: "67,688",
      change: "+12.0%",
      businessMeaning:
        "How often the site appeared in search results. Clicks grew about three times faster than impressions, which is the site converting the visibility it already had.",
      status: "neutral",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "351",
      current: "493",
      change: "+40.5%",
      businessMeaning:
        "Google withholds the query behind rare searches for privacy. These were 68.4% of August clicks and 69.6% of July clicks, and their brand status is unknown. This is why no brand share of total clicks appears anywhere in this report.",
      status: "neutral",
    },
    {
      metric: "Clicks from searches naming the brand",
      previous: "11",
      current: "23",
      change: "+109.1%",
      businessMeaning:
        "Visible searches for the company by name. These are small numbers on a low base, and they cover only the queries Google shows.",
      status: "neutral",
    },
    {
      metric: "Clicks from other named searches",
      previous: "142",
      current: "205",
      change: "+44.4%",
      businessMeaning:
        "Product and category searches Google does show, such as custom volleyball and trading card maker. Brand was 10.1% of the clicks on visible queries in August, which is a share of visible queries only, not of all clicks.",
      status: "neutral",
    },
    {
      metric: "Click-through rate",
      previous: "0.83%",
      current: "1.07%",
      change: "0.24 points better",
      businessMeaning: "A larger share of the searches the site appeared in turned into a visit.",
      status: "neutral",
    },
    {
      metric: "Average position",
      previous: "14.74",
      current: "14.29",
      change: "0.45 better",
      businessMeaning:
        "The site sits on the edge of page two on average. The ball categories are closer in: custom volleyballs at 7.7 and custom basketballs at 10.8, where a one-position move changes clicks a lot.",
      status: "neutral",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "673",
      current: "975",
      change: "+44.9%",
      businessMeaning:
        "GA4 confirms the Search Console direction on its own measurement. GA4 counts sessions from every search engine, so it runs above Search Console clicks.",
      status: "neutral",
    },
    {
      metric: "Organic revenue (GA4 Organic Search)",
      previous: "$152.00",
      current: "$1,135.06",
      change: "+647%",
      businessMeaning:
        "Revenue GA4 attributed to Organic Search. Twelve orders cannot show a trend, and the July base of $152.00 across 7 orders is unusually small, so read this as two order samples rather than growth.",
      status: "neutral",
    },
    {
      metric: "Organic purchases (GA4)",
      previous: "7",
      current: "12",
      change: "+71.4%",
      businessMeaning:
        "Five more orders. At this volume a single order moves the percentage, so the count matters more than the change.",
      status: "neutral",
    },
    {
      metric: "Average organic order value (GA4)",
      previous: "$21.71",
      current: "$94.59",
      change: "+335.7%",
      businessMeaning:
        "The August orders were much larger. With twelve orders, two or three larger ones set this figure, and it explains most of the revenue difference between the months.",
      status: "neutral",
    },
    {
      metric: "Store revenue, all channels (GA4)",
      previous: "$3,167.04",
      current: "$8,831.81",
      change: "+178.9%",
      businessMeaning:
        "Every channel, including paid search, not organic alone. Organic was 12.9% of it in August and 4.8% in July. Growing that share is the point of the plan.",
      status: "neutral",
    },
    {
      metric: "Organic share of all sessions (GA4)",
      previous: "16.3%",
      current: "10.9%",
      change: "5.4 points lower",
      businessMeaning:
        "Organic grew, but all-channel sessions grew faster, from 4,135 to 8,913. Search is a smaller slice of a larger pie, which is worth understanding before the next report.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Search figures come from the Google Search Console domain property sc-domain:customsportsproducts.com through the API, August 1-31 against July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows; click-through rate and average position are Search Console's rounded averages. Query groups: searches naming the brand (queries matching 'custom sports products' or 'customsportsproducts') 23 against 11 clicks, other named searches 205 against 142, and searches Google does not show 493 against 351. Those withheld searches were 68.4% of August clicks and 69.6% of July clicks, and Google does not reveal whether they name the brand, so no brand share of total clicks is stated as fact anywhere in this report. Sessions, purchases and revenue come from GA4 property 378477392 using the Organic Search channel; GA4 is the attribution source, not the store, and it does not expose order-level detail. July is a pre-engagement month: the strategy for this account was approved on September 10, 2026, so no figure here reflects delivered SEO work. The year-over-year comparisons quoted in the narrative come from separate Search Console pulls covering August 2025 and October 2025; they are not included in the tables and charts above.",

  conversionPlan: {
    owner: "SEO Strategist + Account Manager",
    sourcePriority:
      "GA4 Organic Search is the current revenue source and it is a channel model, not an order ledger. Connect the store's own order records to the GA4 purchase figures so organic revenue can be confirmed against the source of truth, and so product-level organic revenue and Shopping contribution can be reported separately from organic search.",
    nextReportExpectation:
      "The next report shows the same GA4 organic revenue line with the store's order count beside it, keeps order volume visible so no month with a dozen orders reads as a trend, separates Shopping from organic search, and keeps the year-over-year view beside the monthly one, since last year this account rose into the autumn rather than into August.",
  },

  performanceCharts: {
    growth: {
      title: "The starting level: 721 clicks on 67,688 impressions",
      insight:
        "Clicks were 43.1% above July and impressions 12.0% above, so click-through rate rose from 0.83% to 1.07%. Both months have 31 days. July is the pre-engagement month, so this is the baseline level rather than the effect of any work. It is not a seasonal repeat either: over the same two months in 2025 clicks fell 21.2%.",
      series: [
        {
          change: "+43.1%",
          current: 721,
          currentDisplay: "721",
          label: "Organic clicks",
          previous: 504,
          previousDisplay: "504",
          status: "positive",
        },
        {
          change: "+12.0%",
          current: 67688,
          currentDisplay: "67,688",
          label: "Search impressions",
          previous: 60456,
          previousDisplay: "60,456",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 504,
      baselineDisplay: "504",
      contributions: [
        { display: "+12", label: "Searches naming the brand", value: 12 },
        { display: "+63", label: "Other named searches", value: 63 },
        { display: "+142", label: "Searches Google does not show", value: 142 },
      ],
      insight:
        "Most of the difference, 142 of 217 clicks, sits in searches Google does not show. Google withholds those queries for privacy, so their brand status is unknown and this chart cannot be read as a brand against non-brand split. They were 68.4% of August clicks. Visible brand searches added 12 clicks and visible product and category searches added 63.",
      title: "Where the 217 extra clicks sit, and what Google hides",
      total: 721,
      totalDisplay: "721",
    },
    homepage: {
      title: "Custom volleyballs: the strongest page in the baseline",
      insight:
        "The custom volleyballs page added 31 clicks, more than any other page, as its impressions rose 34.6% and its position improved from 8.2 to 7.7. It is already close to the top of page one on a term the site can win, which is why the ball categories lead the content plan. The trading card maker page added 28 clicks and the trading card templates page 27.",
      series: [
        {
          change: "+77.5%",
          current: 71,
          currentDisplay: "71",
          label: "Clicks",
          previous: 40,
          previousDisplay: "40",
          status: "positive",
        },
        {
          change: "+34.6%",
          current: 3290,
          currentDisplay: "3,290",
          label: "Impressions",
          previous: 2444,
          previousDisplay: "2,444",
          status: "positive",
        },
        {
          change: "0.5 better",
          current: 7.7,
          currentDisplay: "7.7",
          label: "Average position",
          previous: 8.2,
          previousDisplay: "8.2",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile carries the majority of clicks",
      insight:
        "Mobile took 399 clicks and desktop 311, so mobile is 55.3% of the total. Desktop still carries most of the impressions (39,818 against 27,519), which means desktop is seen far more often and clicked far less. Tablet is small at 11 clicks and is not shown.",
      series: [
        {
          change: "+51.1%",
          current: 399,
          currentDisplay: "399",
          label: "Mobile",
          previous: 264,
          previousDisplay: "264",
          status: "positive",
        },
        {
          change: "+34.1%",
          current: 311,
          currentDisplay: "311",
          label: "Desktop",
          previous: 232,
          previousDisplay: "232",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "The meta-title field is not exposed in the product editor, and category pages are generated dynamically so only the site owner can change them.",
      impact:
        "Every on-page and content item in the plan ends at one of these two constraints. The September content order can be written, but it has no route to publication until this is resolved, and two new seasonal pages the keyword research recommends cannot be built at all.",
      remediation:
        "Two asks in writing: name the meta-title database field and add it to the product editor, then confirm it by editing one title end to end; and agree a named route for category pages, either opening the department editor, training one person on it, or publishing supplied copy on an agreed turnaround.",
      eta: "Requested for early October, tracked to completion rather than to agreement in principle.",
    },
    {
      obstacle:
        "Server-level changes need someone with access to the web root, the page templates and the sitemap generator. The CMS access granted so far covers product records only, and the platform is custom and self-hosted with no repository and no staging environment.",
      impact:
        "The crawl-control specification, the sitemap rebuild and the hub redirects all depend on a file being placed on the server. Without a named owner they stay as documents.",
      remediation:
        "Name the person who deploys server-level changes, or grant direct web-root access, then deploy the crawl-control specification and verify it in Search Console rather than closing it on deploy.",
      eta: "Specification ready now; deploy and verification as soon as the owner is named.",
    },
    {
      obstacle:
        "Organic revenue is GA4's channel attribution, on 12 orders, for a business that also runs paid search. GA4 does not expose order-level detail, so the orders behind the figure cannot be inspected.",
      impact:
        "Revenue at this volume swings on a single order, and untagged paid clicks can land in the organic channel, so the figure is an indication rather than a measured result.",
      remediation:
        "Connect the store's order records to the GA4 purchase data, confirm campaign tagging on paid traffic, and report Shopping separately from organic search.",
      eta: "Targeted for the next two reporting cycles.",
    },
    {
      obstacle:
        "The largest single anchor in the backlink profile is a testimonial-spam block appearing across roughly 215 referring domains, alongside gambling and casino anchors, with about 190 referring domains added in three months.",
      impact:
        "Most of it is nofollow so the direct harm today is limited, but the pattern is an active campaign rather than historical noise.",
      remediation: "Isolate the spam referring domains, file the disavow, and set up monthly monitoring.",
      eta: "Early October.",
    },
  ],

  technicalItems: [
    {
      issue:
        "robots.txt is two lines with an empty disallow and no sitemap directive, so preview screens, discount pop-ups and internal search results are all crawlable. Search Console has discovered roughly 4,740 URLs on a site of about 2,000 real pages and declined to index 2,870 of them, and two path families sit behind about half of that rejected set.",
      why:
        "Google spends a fixed amount of attention on the site. While half of what it finds is preview and pop-up URLs, the category and product pages that sell compete with them for that attention.",
      fix:
        "Deploy the supplied robots.txt contents and meta robots tag, keeping disallow and noindex separate so already-indexed pages get noindex first and a block only once they have dropped out. Add the sitemap directive, then re-fetch and verify in Search Console.",
      developerNote:
        "Specification is written and with the developer, ready for deployment on the client's server.",
    },
    {
      issue:
        "The sitemap declares about 1,367 URLs of which only around 68 are clean modern URLs, so the file that tells Google what matters points largely at preview screens and price pop-ups.",
      why:
        "The strongest category pages, including custom volleyballs, custom basketballs and custom footballs, are among the few that are declared correctly. Most clean pages are not in the file at all.",
      fix:
        "Rebuild the sitemap from the live category and product inventory rather than filtering the existing file, one entry per canonical indexable page, then resubmit and watch discovered against indexed.",
      developerNote: "Sequenced immediately after the crawl-control deployment.",
    },
    {
      issue:
        "Several categories exist as a main page and a hub page. In August custom soccer balls took 15 clicks on 1,519 impressions at position 9.2 while its hub took 14 clicks on 2,949 impressions at position 23.2. Other hubs take no clicks against their main pages.",
      why:
        "Two of your own pages competing for the same customer splits ranking signals, and neither page reaches the position a single consolidated page could hold.",
      fix:
        "Crawl and read each hub page first, then record per intent which URL survives and whether the other is redirected, retargeted to a broader term, or left pending. Soccer balls goes first.",
      developerNote:
        "Mapping task open with an early October date. Deliberately separated from implementation, because some hubs currently outrank the page they would be merged into.",
    },
    {
      issue: "The home page is reachable and indexed at more than one address.",
      why:
        "Three copies of the home page compete for the company name, which is the one ranking a customer notices without being told.",
      fix:
        "Redirect the duplicate home page addresses to the single canonical one, confirm the home page canonicalizes to itself, and handle the root parameter URLs the same way. Wait four weeks and re-read the brand results before commissioning any home page content.",
      developerNote:
        "Structural fix first, measured before any content work, because the home page carries the site's strongest visibility in AI answers.",
    },
    {
      issue:
        "The Merchant Center return service is not configured, so return cost rates as incomplete and the return window reads as zero days.",
      why:
        "Store quality decides how competitively listings are shown, and a missing signal is rated worse than a weak one. Shopping is a core reason for the engagement.",
      fix:
        "Configure the return service and set a window the business will genuinely honor, then confirm return cost has moved from incomplete to a rating and the missing-signal warning has cleared.",
      developerNote: "Cheapest item on the account and unblocked today.",
    },
    {
      issue:
        "Desktop takes 39,818 impressions against mobile's 27,519 but only 311 clicks against mobile's 399, and desktop page load is the slowest tier Google reports.",
      why:
        "The surface that is seen most often converts its visibility at roughly half the rate of mobile, and load time is one of the measurable causes.",
      fix: "Profile the desktop load before committing to remediation, then prioritize the specific blocking resources it identifies.",
      developerNote: "Sequenced after the crawl-control and consolidation work.",
    },
  ],

  dataNotes: [
    "This is a baseline report. The first task on this account was opened on August 27, 2026 and the strategy was approved on September 10, 2026, both after the reporting period closed. ClickUp records no SEO deliverable closed inside August 2026, so no figure in this report is presented as the result of delivered work.",
    "Traffic source: Google Search Console domain property sc-domain:customsportsproducts.com, pulled through the API on September 29, 2026. Platform is a custom self-hosted store on mixed ASP and PHP.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days. July is a pre-engagement month and is shown as context only.",
    "Total clicks (721 against 504) and impressions (67,688 against 60,456) are exact and equal the sum of the device rows. Click-through rate 1.07% against 0.83%; average position 14.29 against 14.74, both as Search Console reports them.",
    "Query groups: searches naming the brand (queries matching 'custom sports products' or 'customsportsproducts') 23 against 11 clicks; other named searches 205 against 142; searches Google does not show 493 against 351. Google withholds rare queries for privacy: they were 68.4% of August clicks and 69.6% of July clicks and their brand status is unknown, so no brand share of total clicks is stated as fact. Brand was 10.1% of the clicks on queries Google does show in August, which is a share of visible queries only.",
    "Devices: mobile 399 clicks on 27,519 impressions, desktop 311 on 39,818, tablet 11 on 351. Tablet is omitted from the device chart at 1.5% of clicks.",
    "Page movers (all queries, August against July): custom volleyballs 71 against 40, trading card maker 99 against 71, trading card templates 36 against 9, home page 92 against 76, fantasy card maker 40 against 28, and all other pages 103 clicks higher combined. Custom basketballs fell to 26 from 36.",
    "Sessions, purchases and revenue: GA4 property 378477392, Organic Search channel, through the GA4 Data API. Organic sessions 975 against 673; organic purchases 12 against 7; organic revenue $1,135.06 against $152.00; average organic order value $94.59 against $21.71. All-channel figures for the same property: sessions 8,913 against 4,135, purchases 92 against 54, revenue $8,831.81 against $3,167.04.",
    "GA4 is the attribution source for revenue on this account, not the store. GA4 does not expose order-level detail, so the individual orders behind the organic figure cannot be listed here. The figures have not yet been reconciled against the store's own order records.",
    "The business also runs paid search. GA4's channel grouping separates paid from organic, but any paid click arriving without campaign tagging can be counted as organic, so the organic revenue figure should be read with that in mind until tagging is confirmed.",
    "Order volume is small. Twelve organic purchases in August and seven in July are order samples, not a revenue trend, and the change in average order value from $21.71 to $94.59 explains most of the difference between the two months.",
    "Seasonality was checked against last year rather than assumed. In 2025 the site lost clicks between July and August, from 429 to 338, so July is not this account's low point and the August 2026 rise is not a seasonal pattern repeating. Year over year, August 2026 took 721 clicks against 338 in August 2025 (up 113.3%), on fewer impressions (67,688 against 78,622) and from a much better average position (14.29 against 46.58), and July 2026 took 504 clicks against 429 in July 2025 (up 17.5%). The account does rise into the autumn: October 2025 took 821 clicks against 583 in September 2025. A year-over-year view stays part of the monthly reporting for that reason.",
    "Year-over-year source: the same Google Search Console property through the API, covering August 2025 with July 2025 as its comparison, and October 2025 with September 2025 as its comparison. Both pulls are saved beside this report's data as gsc-2025-08.json and gsc-2025-10.json.",
    "Technical findings, index coverage counts, sitemap contents, Merchant Center status and the backlink profile come from the September 2026 site analysis and its supporting audits, read on September 2 and September 3, 2026. No site crawl has been completed yet, so the hub inventory and the count of live legacy URLs are still open questions.",
    "Forward plan items come from the ClickUp tasks scheduled for September and October 2026 on this account, attributed by role.",
  ],
};
