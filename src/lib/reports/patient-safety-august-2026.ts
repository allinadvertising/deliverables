import type { SeoStoryReportData } from "@/lib/reports/types";

// Patient Safety USA, August 2026 vs July 2026. First monthly report.
// Every KPI and chart number traces to output/patient-safety-august-2026/data.json.
export const patientSafetyAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Turn search visibility for accessibility and ADA equipment into quote requests by settling one primary domain, making the commercial, product and quote pages indexable, and routing the demand that blog guides already earn toward those pages.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report, so it sets the baseline. The site is small (259 clicks in August), which means a handful of clicks can move a page's numbers a lot. Read page-level changes as signals, not trends.",
    title: "Organic search performance and the August diagnosis",
  },

  meta: {
    action:
      "Confirm which organic form submissions are quote requests and track them as a dedicated quote-request key event in GA4, so the next report can count organic leads. In parallel, start the September roadmap work on the domain, the quote and product pages, and the low click-through snippets.",
    client: "Patient Safety USA",
    coverHeadline:
      "Organic clicks rose 11.6% to 259 in August, led by blog guides on accessibility equipment. The site does not sell online, so its value is quote requests: GA4 counted 8 organic form submissions (13 in July), not yet confirmed as quote requests.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "patientsafetyusa.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console API + Google Analytics 4 Data API + WooCommerce Analytics + ClickUp delivery records",
  },

  executiveSummary:
    "Search visibility grew in August, led by blog guides. Clicks rose 11.6% to 259 and impressions 18.3% to 40,687. Of the 27-click gain, brand searches added 2, other named searches added 8, and searches Google does not show (usually rare, specific searches) added 17. Google does not show the searches behind 87.3% of clicks, so their brand status is unknown, but only 2 of the 33 clicks from searches it does show named the brand, so most traffic is likely non-brand. The gains came from blog guides on adult changing tables, wheelchair-accessible sinks and grab bars. The one clear loss is commercial: the children's changing tables category fell from 23 clicks to 8 as its average position slid from 7.1 to 16.2. Measuring what that traffic produces is the open problem. The WooCommerce store recorded no online orders in August or July, so organic value is measured in quote requests, not sales. GA4 counted 8 form submissions from organic search (13 in July), but they are not yet confirmed as quote requests, and a change of 5 is too small to read as a trend. August delivered the diagnosis: a technical site review, a developer review and the SEO roadmap. September starts the fixes and the quote-request tracking.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks rose 11.6% to 259 and impressions 18.3% to 40,687. Google does not show the searches behind 87.3% of clicks, and only 2 of the 33 clicks it does show came from brand searches, so most traffic is likely non-brand.",
      status: "positive",
    },
    {
      area: "Leads",
      statement:
        "The store recorded no online orders, so value is measured in quote requests. GA4 counted 8 organic form submissions (13 in July), not yet confirmed as quote requests.",
      status: "unavailable",
    },
    {
      area: "Rankings",
      statement:
        "Average position moved from 12.8 to 17.35 as impressions grew, and the children's changing tables category dropped from position 7.1 to 16.2.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "The diagnosis is done: a technical site review, a developer review and the SEO roadmap closed in August. The domain, indexing and sitemap fixes start in September.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Count the quote requests organic search brings in, not just the traffic.",
      name: "Measurement baseline",
      started:
        "The site runs on WordPress with WooCommerce installed, but the business works through quote requests, and GA4 tracks every form submission as one generic event.",
      work:
        "We pulled Search Console and GA4 for August and July and checked WooCommerce Analytics, which recorded 0 orders in both months.",
      result:
        "Traffic has a clean baseline. Leads do not yet: the only business signal GA4 records is form submissions (8 from organic search in August, 13 in July), and we have not yet confirmed which of them are quote requests.",
      next:
        "Confirm which forms are quote requests and track them as a dedicated quote-request key event in GA4, so the next report counts organic leads.",
    },
    {
      businessPriority: "Make sure Google sees one site and can index the pages that sell.",
      name: "Technical foundation",
      started:
        "The site's search data is split between the www and non-www versions of the domain, and the quote and services pages appear among pages Google has found but not indexed.",
      work:
        "We completed a technical site review, a developer review of the fixes, and a prioritized roadmap covering the primary domain, indexing of commercial pages, sitemap cleanup and crawl noise from WordPress utility URLs.",
      result:
        "The highest-priority fixes are defined, sequenced and confirmed as buildable in WordPress.",
      next:
        "Settle patientsafetyusa.com as the single primary domain, check the quote, services and noindexed product pages, and remove low-value tag pages from the sitemap.",
    },
    {
      businessPriority: "Convert the visibility the blog already earns into visits to product and quote pages.",
      name: "Content and click-through",
      started:
        "Blog guides earn most of the impressions, but the site's click-through rate is low (0.64% in August), and several guides compete with each other for the same searches.",
      work:
        "The roadmap mapped the winning guides (accessible kitchens, wheelchair-accessible sinks, changing tables, grab bars) to the categories and products they should feed.",
      result:
        "A clear order of work: rewrite weak search snippets first, then link winning guides to commercial pages, then consolidate overlapping guides into stronger hubs.",
      next:
        "Refresh the search titles and descriptions on the first priority pages, and add links from winning guides to the matching product categories and the quote page.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 11, 2026",
      evidence: "Closed August 11. Reviewed the site's technical status as the starting point for the roadmap.",
      owner: "Developer",
      title: "Completed the technical site review",
    },
    {
      completedOn: "August 12, 2026",
      evidence: "Closed August 12. Confirmed the roadmap fixes can be built in WordPress and WooCommerce.",
      owner: "Developer",
      title: "Completed the developer review of the roadmap",
    },
    {
      completedOn: "August 17, 2026",
      evidence:
        "Closed August 17, including the data consolidation step. Prioritizes the primary domain, commercial page indexing, crawl cleanup, click-through and content consolidation.",
      owner: "SEO Strategist",
      title: "Delivered the SEO roadmap",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "232",
      current: "259",
      change: "+11.6%",
      businessMeaning: "More visits from Google search. A gain of 27 clicks, led by a few blog guides.",
      status: "positive",
    },
    {
      metric: "Brand searches (clicks)",
      previous: "0",
      current: "2",
      change: "+2",
      businessMeaning: "Searches that named Patient Safety USA. Almost nonexistent, so the site is found mainly through other searches.",
      status: "neutral",
    },
    {
      metric: "Other named searches (clicks)",
      previous: "23",
      current: "31",
      change: "+34.8%",
      businessMeaning: "Searches Google shows that do not name the brand, such as accessibility and changing table searches.",
      status: "positive",
    },
    {
      metric: "Searches Google does not show (clicks)",
      previous: "209",
      current: "226",
      change: "+8.1%",
      businessMeaning:
        "Rare, specific searches Google withholds for privacy. They are 87.3% of clicks, so their brand status is unknown, though most are likely non-brand.",
      status: "positive",
    },
    {
      metric: "Search impressions",
      previous: "34,388",
      current: "40,687",
      change: "+18.3%",
      businessMeaning: "The site appeared in more searches, mostly through blog guides.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "12.8",
      current: "17.35",
      change: "+4.55 (lower is better)",
      businessMeaning:
        "Worse on average. Part of this is the site showing up for more searches at deeper positions, but the children's changing tables category did lose ground.",
      status: "watch",
    },
    {
      metric: "Click-through rate",
      previous: "0.67%",
      current: "0.64%",
      change: "-0.03 pts",
      businessMeaning: "Few searchers who see the site click. Better titles and descriptions are the first September fix.",
      status: "watch",
    },
    {
      metric: "Organic form submissions (GA4)",
      previous: "13",
      current: "8",
      change: "-38.5%",
      businessMeaning:
        "What GA4 counts as key events from organic search (Gravity Forms submissions). Not yet confirmed as quote requests or sales leads, and a change of 5 is too small to call a trend.",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "515",
      current: "400",
      change: "-22.3%",
      businessMeaning:
        "GA4 shows fewer organic visits while Search Console shows more clicks. The two tools measure differently; the gap will be checked in the tracking review.",
      status: "watch",
    },
    {
      metric: "Organic leads (quote requests)",
      previous: "n/a",
      current: "Not yet confirmed",
      change: "Not measured",
      businessMeaning:
        "The store recorded no online orders, so leads are the business result. The 8 form submissions above are not yet confirmed as quote requests; confirming them is the measurement action this month.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console URL-prefix property https://patientsafetyusa.com/ through the Search Console API, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and match the sum of the device rows. Clicks are split three ways: brand searches (queries matching patient safety usa or patientsafetyusa), other named searches, and searches Google does not show for privacy (87.3% of clicks in August, 90.1% in July), whose brand status is unknown. Sessions and form submissions come from the GA4 Data API (property 324897462), Organic Search channel. Form submissions are the gforms_submission key event, reported as GA4 counts them. No revenue is reported: WooCommerce Analytics recorded 0 orders in both months, so the site is treated as lead generation.",

  conversionPlan: {
    owner: "Account Manager + SEO Strategist",
    sourcePriority:
      "Confirm with the client which forms are quote requests (as opposed to contact, support or other forms), then track quote-request submissions as their own key event in GA4, and add call tracking if phone quotes matter.",
    nextReportExpectation:
      "Once the quote-request event is live, the next report shows organic quote requests month over month, alongside traffic.",
  },

  performanceCharts: {
    growth: {
      title: "Visibility and clicks both grew",
      insight:
        "Impressions rose 18.3% and clicks 11.6%, so the site appeared more often but a slightly smaller share of searchers clicked. Both months had 31 days.",
      series: [
        {
          change: "+11.6%",
          current: 259,
          currentDisplay: "259",
          label: "Organic clicks",
          previous: 232,
          previousDisplay: "232",
          status: "positive",
        },
        {
          change: "+18.3%",
          current: 40687,
          currentDisplay: "40,687",
          label: "Search impressions",
          previous: 34388,
          previousDisplay: "34,388",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 232,
      baselineDisplay: "232",
      contributions: [
        { display: "+15", label: "Adult changing table buying guide", value: 15 },
        { display: "+11", label: "Wheelchair-accessible bathroom sink guide", value: 11 },
        { display: "+6", label: "Bathroom grab bars guide", value: 6 },
        { display: "+5", label: "Changing tables in schools article", value: 5 },
        { display: "+5", label: "All other pages", value: 5 },
        { display: "-15", label: "Children's changing tables category", value: -15 },
      ],
      insight:
        "Blog guides drove the gain, and one product category gave back as much as the biggest winner added. The chart splits clicks by page, not by brand, because Google does not show the searches behind 87.3% of clicks. At this volume, single pages move by a few clicks, so these are signals, not trends.",
      title: "Guides grew; the children's changing tables category fell",
      total: 259,
      totalDisplay: "259",
    },
    homepage: {
      title: "The children's changing tables category lost ground",
      insight:
        "This is a commercial category page, and it is the largest click loss this month. Its average position fell from 7.1 to 16.2, off the first page, and clicks dropped from 23 to 8. The roadmap already flagged this page for diagnosis.",
      series: [
        {
          change: "-65.2%",
          current: 8,
          currentDisplay: "8",
          label: "Clicks",
          previous: 23,
          previousDisplay: "23",
          status: "watch",
        },
        {
          change: "-34.0%",
          current: 767,
          currentDisplay: "767",
          label: "Impressions",
          previous: 1162,
          previousDisplay: "1,162",
          status: "watch",
        },
        {
          change: "+9.1 positions",
          current: 16.2,
          currentDisplay: "16.2",
          label: "Average position (lower is better)",
          previous: 7.1,
          previousDisplay: "7.1",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Desktop leads, and it drove most of the gain",
      insight:
        "Desktop clicks rose 16.7% and mobile 5.1%. Desktop carries 154 of 259 clicks, so the site's search audience is mostly on computers. Tablet is negligible (2 clicks) and is not shown.",
      series: [
        {
          change: "+16.7%",
          current: 154,
          currentDisplay: "154",
          label: "Desktop",
          previous: 132,
          previousDisplay: "132",
          status: "positive",
        },
        {
          change: "+5.1%",
          current: 103,
          currentDisplay: "103",
          label: "Mobile",
          previous: 98,
          previousDisplay: "98",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "No confirmed lead source: the site does not sell online (0 WooCommerce orders in August and July), and GA4 tracks all form submissions as one generic event.",
      impact: "The report can show traffic and form submissions, but not how many organic visitors asked for a quote.",
      remediation:
        "Confirm which forms are quote requests and set up a dedicated quote-request key event in GA4.",
      eta: "Client confirmation in September; first measured month in the next report once tracking is live.",
    },
    {
      obstacle: "Search data for the site is split between the www and non-www versions of the domain.",
      impact:
        "Rankings and reporting are spread across two hosts, which weakens signals and makes month-over-month comparisons less reliable.",
      remediation:
        "Confirm patientsafetyusa.com (non-www) as the primary domain, align redirects, canonical tags and the sitemap to it, and add a domain-level Search Console property.",
      eta: "September.",
    },
    {
      obstacle:
        "The quote request and services pages appear among pages Google has found but not indexed, and one commercial changing table product page is marked noindex.",
      impact: "The pages closest to a sale may not be showing in search at all.",
      remediation:
        "Inspect each page in Search Console, fix indexing signals and internal links, then request indexing.",
      eta: "September to October.",
    },
    {
      obstacle: "The children's changing tables category fell from position 7.1 to 16.2 and from 23 clicks to 8.",
      impact: "A commercial page dropped off the first page of results.",
      remediation: "Diagnose the drop (competition, page changes, cannibalization by guides) once the domain and indexing fixes are in place.",
      eta: "After the September technical fixes.",
    },
  ],

  technicalItems: [
    {
      issue: "Search Console data is split between https://patientsafetyusa.com/ and https://www.patientsafetyusa.com/, with no domain-level property.",
      why: "Split hosts dilute ranking signals and make the traffic baseline unreliable.",
      fix: "Confirm the non-www host as primary, align redirects, canonicals and sitemap, and add a domain property for combined reporting.",
      developerNote: "Roadmap priority 1; reviewed in the Developer Review (868kpmh9r).",
    },
    {
      issue: "The /request-a-quote/ and /our-services/ pages appear among discovered but not indexed pages, and a wall-mount changing table product page is marked noindex.",
      why: "Commercial and quote pages that are not indexed cannot bring in customers from search.",
      fix: "Run URL Inspection on each, fix robots, canonical and sitemap settings, strengthen internal links, then request indexing.",
      developerNote: "From the technical site review (868k9t02y) and the roadmap.",
    },
    {
      issue: "Low-value tag archive pages are exposed in the sitemap, and WordPress and WooCommerce utility URLs are being discovered by Google.",
      why: "Crawl attention goes to pages that will never convert instead of products and categories.",
      fix: "Remove tag archives from the sitemap and tighten discovery of utility URLs.",
      developerNote: "Scheduled for September (868m0dtqa).",
    },
    {
      issue: "Search snippets on priority pages earn few clicks (site click-through rate 0.64%).",
      why: "Visibility that does not earn clicks produces no visits, quotes or sales.",
      fix: "Rewrite titles and meta descriptions on the first priority pages to match search intent.",
      developerNote: "Scheduled for September (868m0dtqh).",
    },
    {
      issue: "Form submissions are tracked in GA4 as one generic event (gforms_submission), with no separate quote-request event.",
      why: "Quote requests, the business result, cannot be separated from other form use.",
      fix: "Identify the quote-request form and create a dedicated quote-request key event in GA4.",
      developerNote: "Pending client confirmation of which forms are quote requests.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://patientsafetyusa.com/, pulled through the Search Console API. Platform is WordPress with WooCommerce.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Clicks (259 vs 232) and impressions (40,687 vs 34,388) are exact API totals and match the sum of the device rows (desktop, mobile, tablet). CTR (0.64% vs 0.67%) and average position (17.35 vs 12.8) are the property-level values.",
    "Brand method: brand is any query matching the regex patient ?safety ?usa|patientsafetyusa (case-insensitive). Brand searches brought 2 clicks in August and 0 in July. Other named searches brought 31 vs 23.",
    "Searches Google does not show: Google withholds rare queries for privacy. They made up 87.3% of clicks in August (226 of 259) and 90.1% in July (209 of 232). They are usually long, specific searches, so most are likely non-brand, but their brand status is unknown. A total-minus-brand non-brand figure (257 vs 232) would count every one of them as non-brand, so this report does not present one.",
    "A separate URL-prefix property, https://www.patientsafetyusa.com/, holds a small residual of traffic (4 clicks when checked on September 18) and is not included. There is no domain-level property yet.",
    "The page-mover chart uses the top five pages by absolute click change across all queries, with the remainder as All other pages. It adds up to the 27-click gain.",
    "GA4 source: GA4 Data API, property 324897462, session default channel group = Organic Search. Organic sessions 400 vs 515; all-channel sessions 1,357 vs 1,560.",
    "GA4 key events from organic search are all gforms_submission (Gravity Forms): 8 in August, 13 in July. Reported as what GA4 counts, not as confirmed leads, because the forms behind the event have not been reviewed.",
    "Store: WooCommerce Analytics (Orders), all channels, recorded 0 orders and $0.00 net sales in both August and July 2026, and GA4 records 0 purchases in every channel. The site does not sell online, so it is reported as lead generation (quote requests).",
    "Completed work comes from ClickUp tasks closed in August 2026. Roadmap findings (domain split, indexing examples, sitemap exposure) come from the August SEO roadmap and its source audits.",
  ],
};
