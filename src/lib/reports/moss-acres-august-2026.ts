import type { SeoStoryReportData } from "@/lib/reports/types";

// Moss Acres, August 2026 vs July 2026. First report for this client.
// Every figure comes from output/moss-acres-august-2026/data.json (GSC API, ClickUp).
// No GA4 access, so store figures are WooCommerce all-channel context, never organic.
export const mossAcresAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow organic sales of live and preserved moss products to retail buyers, and win the contractor and architectural searches behind moss panels, walls and roofs.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report for Moss Acres, so it sets the baseline. Traffic comes from Google Search Console. Store sales come from WooCommerce and cover all channels, because the agency has no GA4 access to separate organic sales. The charts show where clicks were lost, why the drop in impressions matters less than it looks, and how the store did overall.",
    title: "Clicks eased 6.3%, spread across live moss product and guide pages",
  },

  meta: {
    action:
      "Grant the agency read access to GA4 (or confirm none exists), so the next report can show how much of the store's sales come from organic search. In parallel, ship the homepage and collection title rewrites and the server-error and redirect fixes already scheduled.",
    client: "Moss Acres",
    coverHeadline:
      "Google clicks eased 6.3% to 4,351 in August, a broad slip across live moss product and guide pages rather than one broken page. All-channel store sales still rose 6.1% to $23,093.42, and without GA4 we cannot tell how much of that came from search.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://mossacres.com/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console API + ClickUp delivery records",
  },

  executiveSummary:
    "Organic traffic dipped in August, and the loss was spread thin rather than caused by one page. Google clicks fell 6.3% to 4,351 from 4,644. Brand searches rose 15.3% to 219 clicks. Other named searches fell 4.6% to 1,827 (88 fewer clicks), and searches Google does not show (usually rare, specific searches) fell 9.2% to 2,305 (234 fewer). Those hidden searches are 53.0% of clicks, so their brand status is unknown, but brand is only 10.7% of the searches Google does show, so most of the traffic, and most of the loss, is likely non-brand. The losses came from many live moss pages at once: the growing moss guide, Moss Milkshake, fresh sphagnum moss, the sun-tolerant moss pages and star moss each lost 30 to 44 clicks, and queries such as sheet moss and live moss for sale lost about half their clicks as their positions slipped slightly. Impressions fell 7.1%, but the homepage alone lost more impressions than the whole site, and its clicks held (1,077 vs 1,091). Late summer may be a quieter period for live moss and garden searches, but this report has no prior-year data to confirm that, so we treat it as a hypothesis to test, not a cause. Store sales moved the other way: WooCommerce net sales across all channels rose 6.1% to $23,093.42 on 174 orders (179 in July), because the average order was larger. The two figures should not be linked in either direction. The open problem is measurement: without GA4 access, the organic share of those sales is unknown, so we cannot say what the traffic dip meant for sales. August's SEO work covered on-page updates, schema markup, a Search Console coverage audit and the inputs for the next roadmap.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Google clicks eased 6.3% to 4,351. Brand searches rose 15.3% to 219 clicks, while other named searches fell 4.6% and searches Google does not show fell 9.2%.",
      status: "watch",
    },
    {
      area: "Revenue (all channels)",
      statement:
        "All-channel store net sales rose 6.1% to $23,093.42 on 174 orders. Without GA4 access, the organic share of these sales is unknown.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased to 7.83 from 7.53. Several live moss queries slipped from the top three to just below it, which halved their clicks.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "A Search Console coverage audit is done. Collection pagination server errors, truncated URLs and legacy ASP redirects are scheduled for repair.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Know what organic search is worth in sales, not only in clicks.",
      name: "Revenue measurement",
      started:
        "No GA4 property is visible to the agency, so organic sales cannot be separated from other channels. WooCommerce reports the store's total sales.",
      work: "We read WooCommerce net sales and orders for July and August and report them as all-channel context next to Search Console traffic.",
      result: "Store net sales rose 6.1% to $23,093.42 while Google clicks fell 6.3%. Without GA4, we cannot say how much of either month's sales came from organic search.",
      next:
        "Get GA4 read access, or confirm there is no GA4 property and set one up with purchase tracking, so organic sales can be measured.",
    },
    {
      businessPriority: "Recover the clicks lost on live moss products and guides.",
      name: "Search visibility",
      started:
        "Most clicks likely come from searches that do not name the brand: brand is 10.7% of the searches Google shows, and Google does not show the searches behind 53.0% of clicks. In August, other named searches fell 4.6% and hidden searches fell 9.2%, spread across many product and guide pages.",
      work: "We compared July and August by page, query and device through the Search Console API.",
      result:
        "Queries such as sheet moss (44 to 23 clicks, position 2.4 to 3.3) and live moss for sale (42 to 21, position 3.9 to 4.5) kept their impressions but slipped in position. Others, such as sun moss (444 to 267 impressions), also lost search volume. Preserved moss gained 43 clicks, and a winter moss gardening blog post earned 41 clicks from none.",
      next:
        "Rewrite the homepage and collection titles to lift click-through, and compare August with August 2025 to test whether part of the dip is seasonal.",
    },
    {
      businessPriority: "Keep product and collection pages crawlable and eligible for rich results.",
      name: "Technical SEO",
      started:
        "The site carries legacy ASP URLs, truncated URLs, and collection pagination that returns server errors.",
      work:
        "We ran a Search Console coverage audit, wrote schema markup for the August batch, and completed a developer review of what the site can support.",
      result:
        "The fixes are scoped and scheduled: pagination server errors, truncated URLs, a legacy ASP redirect map, and a check of the live catalogue against the 145 entries in the sitemap.",
      next: "Ship the pagination and truncated URL fixes, deploy the redirect map, and confirm the recrawl in Search Console.",
    },
    {
      businessPriority: "Turn on-page content into clicks on the pages that sell.",
      name: "On-page content",
      started: "Product and collection pages needed stronger titles, copy and structure for the searches they target.",
      work:
        "We delivered the August on-page optimization batch, and wrote the Moss Roofs landing page content and sent it for your review.",
      result:
        "The on-page updates are live. The Moss Roofs landing page content was sent to you for review on August 3. Its publication is not yet confirmed.",
      next: "Publish the Moss Roofs page once approved, and write new content that closes the gap on buying and near-me searches.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 3, 2026",
      evidence: "Closed August 3. Landing page content for Moss Roofs was sent to the client for review. Publication is not yet confirmed.",
      owner: "Content Writer",
      title: "Wrote the Moss Roofs landing page and sent it for review",
    },
    {
      completedOn: "August 4, 2026",
      evidence: "Closed August 4. Schema markup written for the August schema batch. Installation on the site is not yet confirmed.",
      owner: "Developer",
      title: "Wrote schema markup for the August batch",
    },
    {
      completedOn: "August 19, 2026",
      evidence: "Closed August 19. Reviewed how Google is indexing the site's pages and fed the findings into the fixes now scheduled.",
      owner: "Developer",
      title: "Ran a Google Search Console coverage audit",
    },
    {
      completedOn: "August 21, 2026",
      evidence:
        "Recommendations written (closed August 19) and implemented on the site by our developer (closed August 21).",
      owner: "SEO Specialist",
      title: "Delivered the August on-page optimization batch",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "Closed August 27. A data consolidation of the site's search performance and a developer review of what the site can support, the two inputs to the next SEO roadmap.",
      owner: "Head of SEO",
      title: "Prepared the inputs for the next SEO roadmap",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks (Google)",
      previous: "4,644",
      current: "4,351",
      change: "-6.3%",
      businessMeaning: "Google sent 293 fewer visits. The loss was spread across many live moss pages, not one broken page.",
      status: "watch",
    },
    {
      metric: "Brand searches (clicks)",
      previous: "190",
      current: "219",
      change: "+15.3%",
      businessMeaning: "More people searched for Moss Acres by name.",
      status: "positive",
    },
    {
      metric: "Other named searches (clicks)",
      previous: "1,915",
      current: "1,827",
      change: "-4.6%",
      businessMeaning: "Searches Google shows that do not name the brand, such as sheet moss and live moss for sale. This is the known non-brand loss.",
      status: "watch",
    },
    {
      metric: "Searches Google does not show (clicks)",
      previous: "2,539",
      current: "2,305",
      change: "-9.2%",
      businessMeaning:
        "Rare, specific searches Google withholds for privacy. They are 53.0% of clicks, so their brand status is unknown, though most are likely non-brand.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "333,914",
      current: "310,373",
      change: "-7.1%",
      businessMeaning:
        "The homepage lost more impressions than the whole site did, while keeping its clicks. Product pages lost little visibility.",
      status: "neutral",
    },
    {
      metric: "Click-through rate",
      previous: "1.39%",
      current: "1.40%",
      change: "+0.01 pts",
      businessMeaning: "Flat. The share of searchers who clicked did not change.",
      status: "neutral",
    },
    {
      metric: "Average position",
      previous: "7.53",
      current: "7.83",
      change: "0.30 worse",
      businessMeaning: "A small slip in rankings, enough to cost clicks on queries that fell out of the top three.",
      status: "watch",
    },
    {
      metric: "Store net sales (WooCommerce, ALL CHANNELS)",
      previous: "$21,760.96",
      current: "$23,093.42",
      change: "+6.1%",
      businessMeaning:
        "Context, not organic: sales from every channel. Without GA4 the organic share is unknown, so this rise should not be read as an SEO result, and the click dip should not be read as costing sales.",
      status: "neutral",
    },
    {
      metric: "Store orders (WooCommerce, ALL CHANNELS)",
      previous: "179",
      current: "174",
      change: "-2.8%",
      businessMeaning: "Context, not organic: five fewer orders, each worth more on average ($132.72 vs $122.65).",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic figures come from the Google Search Console API for the URL-prefix property https://mossacres.com/, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows. Clicks are split three ways: brand searches (queries matching \"moss acres\" or \"mossacres\"), other named searches, and searches Google does not show for privacy (53.0% of clicks in August, 54.7% in July), whose brand status is unknown. CTR and position are Search Console's averages. Store net sales and orders come from WooCommerce Analytics (Orders), cover all channels, and are not organic figures. There is no GA4 access, so organic sales and sessions are not reported.",

  conversionPlan: {
    owner: "Account Manager + SEO Strategist",
    sourcePriority:
      "Grant the agency read access to GA4 (or confirm the site has no GA4 property and set one up with purchase tracking). WooCommerce stays the source for all-channel store sales. Organic sales can only be separated once GA4 is in place and tracking purchases.",
    nextReportExpectation:
      "The next report keeps WooCommerce all-channel sales as context and adds organic sales from GA4 if access is granted.",
  },

  performanceCharts: {
    revenue: {
      title: "All-channel store sales rose 6.1% to $23,093.42",
      insight:
        "Net sales rose on slightly fewer orders because the average order was larger. These are sales from every channel, so on their own they say nothing about organic search in either direction.",
      channelContext:
        "Source: WooCommerce Analytics, Orders report, ALL CHANNELS, read September 21, 2026. Not organic. The agency has no GA4 access, so the organic share of these sales is unknown. Later refunds can lower a past month's net sales.",
      series: [
        {
          change: "+6.1%",
          current: 23093.42,
          currentDisplay: "$23,093.42",
          label: "Net sales (all channels)",
          previous: 21760.96,
          previousDisplay: "$21,760.96",
          status: "positive",
        },
        {
          change: "-2.8%",
          current: 174,
          currentDisplay: "174",
          label: "Orders (all channels)",
          previous: 179,
          previousDisplay: "179",
          status: "watch",
        },
        {
          change: "+8.2%",
          current: 132.72,
          currentDisplay: "$132.72",
          label: "Average order value (all channels)",
          previous: 122.65,
          previousDisplay: "$122.65",
          status: "positive",
        },
      ],
    },
    growth: {
      title: "Clicks and impressions both eased about 7%",
      insight:
        "Clicks fell 6.3% to 4,351 and impressions fell 7.1% to 310,373. Click-through rate held at 1.40%. Both months had 31 days.",
      series: [
        {
          change: "-6.3%",
          current: 4351,
          currentDisplay: "4,351",
          label: "Organic clicks",
          previous: 4644,
          previousDisplay: "4,644",
          status: "watch",
        },
        {
          change: "-7.1%",
          current: 310373,
          currentDisplay: "310,373",
          label: "Search impressions",
          previous: 333914,
          previousDisplay: "333,914",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 4644,
      baselineDisplay: "4,644",
      contributions: [
        { display: "-44", label: "Growing moss guide", value: -44 },
        { display: "+43", label: "Preserved moss collection", value: 43 },
        { display: "-42", label: "Moss Milkshake", value: -42 },
        { display: "+41", label: "Winter moss gardening blog post", value: 41 },
        { display: "-35", label: "Fresh sphagnum moss", value: -35 },
        { display: "-256", label: "All other pages", value: -256 },
      ],
      insight:
        "No single page explains the drop. The five biggest movers roughly cancel each other out, and most of the loss (256 clicks) is spread across the rest of the site. Gains on preserved moss and the winter gardening post offset losses on live moss products and the growing guide.",
      title: "The loss was spread across many pages",
      total: 4351,
      totalDisplay: "4,351",
    },
    homepage: {
      title: "The homepage lost impressions, not clicks",
      insight:
        "The homepage lost 24,581 impressions, more than the site's net loss of 23,541, yet its clicks barely moved and its average position improved. The lost impressions were appearances that rarely turned into visits. Rewriting the homepage title for click-through is already scheduled.",
      series: [
        {
          change: "-1.3%",
          current: 1077,
          currentDisplay: "1,077",
          label: "Homepage clicks",
          previous: 1091,
          previousDisplay: "1,091",
          status: "watch",
        },
        {
          change: "-22.7%",
          current: 83815,
          currentDisplay: "83,815",
          label: "Homepage impressions",
          previous: 108396,
          previousDisplay: "108,396",
          status: "watch",
        },
        {
          change: "0.4 better",
          current: 8.4,
          currentDisplay: "8.4",
          label: "Homepage average position",
          previous: 8.8,
          previousDisplay: "8.8",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Every device lost clicks, desktop most",
      insight:
        "Mobile brings 68.7% of clicks and fell 5.3% to 2,990. Desktop fell 8.1% to 1,278, and desktop impressions fell 18.4%. Tablet is small at 83 clicks.",
      series: [
        {
          change: "-5.3%",
          current: 2990,
          currentDisplay: "2,990",
          label: "Mobile",
          previous: 3157,
          previousDisplay: "3,157",
          status: "watch",
        },
        {
          change: "-8.1%",
          current: 1278,
          currentDisplay: "1,278",
          label: "Desktop",
          previous: 1391,
          previousDisplay: "1,391",
          status: "watch",
        },
        {
          change: "-13.5%",
          current: 83,
          currentDisplay: "83",
          label: "Tablet",
          previous: 96,
          previousDisplay: "96",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle: "The agency has no access to a GA4 property for mossacres.com.",
      impact:
        "Organic sales, orders and conversion rate cannot be separated from other channels, so this report shows all-channel store sales only as context.",
      remediation: "Grant the agency read access to GA4, or confirm there is no property so one can be set up with purchase tracking.",
      eta: "Before the September report.",
    },
    {
      obstacle: "Several live moss queries slipped from the top three to just below it.",
      impact:
        "Sheet moss and live moss for sale each lost about half their clicks on the same number of impressions. Small position losses at the top cost the most.",
      remediation:
        "Rewrite the titles on the homepage and key collections for click-through, and check the affected product pages against the pages now outranking them.",
      eta: "Title rewrites scheduled for September 25.",
    },
    {
      obstacle: "Part of the dip may be seasonal, but this report cannot show it.",
      impact:
        "Without a year-over-year view, a seasonal dip in live moss demand and a ranking loss look the same in a month-over-month comparison.",
      remediation: "Add an August 2026 vs August 2025 comparison from Search Console to the next report.",
      eta: "Next report.",
    },
    {
      obstacle: "Search Console only has a URL-prefix property for https://mossacres.com/.",
      impact: "Traffic to www or http versions of the site is not counted, so the totals may be slightly understated.",
      remediation: "Add and verify a domain property for mossacres.com and report from it going forward.",
      eta: "Next report cycle.",
    },
  ],

  technicalItems: [
    {
      issue: "Collection pagination returns server errors.",
      why: "Google cannot crawl deeper collection pages, so products listed there are harder to find in search.",
      fix: "Resolve the server errors on paginated collection URLs and confirm they return 200.",
      developerNote: "Tracked in ClickUp task 868m33ma9, due September 29.",
    },
    {
      issue: "Truncated URLs are being generated on the site.",
      why: "Broken URLs waste crawl budget and send searchers to error pages.",
      fix: "Trace the source of the truncated URLs and fix it, in two parts.",
      developerNote: "Tracked in ClickUp tasks 868m33m9w (due September 29) and 868m33m7a (due October 1).",
    },
    {
      issue: "Legacy ASP URLs from the old site are not all redirected.",
      why: "Links and rankings earned by the old URLs are lost when they do not redirect to the current pages.",
      fix: "Map every legacy ASP URL to its current page, deploy the redirect map, and verify each hop.",
      developerNote: "Tracked in ClickUp tasks 868m33m9a (mapping) and 868m33m9k (deployment).",
    },
    {
      issue: "The sitemap's 145 entries have not been checked against the live catalogue.",
      why: "Missing or retired products in the sitemap send Google to pages that no longer sell.",
      fix: "Audit the live catalogue against the sitemap and fix mismatches.",
      developerNote: "Tracked in ClickUp task 868m33ma2, due October 14.",
    },
    {
      issue: "Schema markup for the August batch is written but its installation is not confirmed.",
      why: "Pages without structured data are less eligible for rich results in Google.",
      fix: "Confirm the markup is live and valid in the Rich Results Test.",
      developerNote: "Markup written under ClickUp task 868kj4grm. The install task 868kj4grn needs confirmation.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console API, URL-prefix property https://mossacres.com/. No domain property exists yet, so www and http traffic is not included. The store runs on WooCommerce.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (4,351 vs 4,644) and impressions (310,373 vs 333,914) are exact and equal the sum of the device rows. CTR (1.40% vs 1.39%) and position (7.83 vs 7.53) are Search Console's averages.",
    "Brand method: brand is any query matching the regular expression (?i)(moss ?acres|mossacres) in the Search Console API. Brand searches brought 219 clicks vs 190; other named searches brought 1,827 vs 1,915.",
    "Searches Google does not show: Google withholds rare queries for privacy. They made up 53.0% of clicks in August (2,305 of 4,351) and 54.7% in July (2,539 of 4,644). They are usually long, specific searches, so most are likely non-brand, but their brand status is unknown. A total-minus-brand non-brand figure (4,132 vs 4,454) would count every one of them as non-brand, so this report does not present one.",
    "Page and query movers come from the top 25 pages and top 50 queries by clicks in the Search Console API. The page waterfall shows the five pages with the largest click change; all other pages are grouped.",
    "The homepage lost 24,581 impressions (83,815 vs 108,396), more than the site's net loss of 23,541. Desktop impressions fell 18.4% while mobile impressions rose 1.9%.",
    "Some impressions come from non-English searches, for example one Finnish moss term with 3,885 impressions and 8 clicks in August. They add little traffic.",
    "Seasonality is a hypothesis, not a finding. This report compares two consecutive months only; a year-over-year comparison will be added to test it.",
    "Store figures: WooCommerce Analytics, Orders report, August 1-31 vs July 1-31, 2026, read on September 21, 2026. Net sales $23,093.42 vs $21,760.96 (+6.1%), orders 174 vs 179 (-2.8%), average order value $132.72 vs $122.65 as WooCommerce reports it. These are ALL CHANNELS (search, paid, email, direct and others), not organic.",
    "Store figures are as of September 21, 2026. Refunds that post later can lower a past month's net sales, so these numbers may change slightly in future reports.",
    "WooCommerce's July average order value ($122.65) is slightly above July net sales divided by orders ($121.57), likely because WooCommerce calculates it on a different basis. The August figures agree ($132.72 either way).",
    "No organic revenue attribution: the agency has no GA4 access (no property for this site is visible to the agency), so the organic share of store sales is unknown. Store sales rose while Google clicks fell; the two are not linked in this report in either direction.",
    "Completed work comes from ClickUp tasks closed in August 2026 in the client's SEO work. Four subtasks closed together on August 17 (schema installation, and the Moss Roofs page writing, on-page copy and publication) are not counted as evidence. The Moss Roofs content is listed only because it was sent for review on August 3; its publication and the schema installation are left out until confirmed. This is the first monthly report for Moss Acres.",
  ],
};
