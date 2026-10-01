import type { SeoStoryReportData } from "@/lib/reports/types";

// Jefco Manufacturing, August 2026. Built from output/jefco-august-2026/data.json
// (GSC API, GA4 Data API and ClickUp, pulled 2026-09-29). Lead generation treatment: the Shopify
// storefront is not a sales channel for this account (4 online orders in the twelve months to
// 2026-09-29, none in July or August), so GA4's zero purchases are correct and there is no revenue
// chart. The conversion is the quote request, and nothing counts those yet.
// No businessObjective field: there is no recorded objective for this client (no kickoff file, and
// the Knowledge Center entry has no business model), and the house rule is never to invent one.
export const jefcoAugust2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Everything below is organic search performance from Google Search Console, August compared with July (both 31 days). There is no revenue chart, because the online store is not where this account converts: it took no orders in either month. The conversion to measure is the quote request.",
    title: "Organic search performance, August vs July",
  },

  meta: {
    action:
      "Work the September indexation plan (link and submit the 47 collection pages, classify the 147 crawled-not-indexed pages, fix the canonical conflicts on the homepage and quote page, clear the 14 not-found URLs), and agree what counts as a quote request so the forms and calls can be tracked and the next reports can show what organic search produces.",
    client: "Jefco Manufacturing",
    coverHeadline:
      "Clicks held at 188 against 193 in July, while impressions fell 28.6% to 11,233. The visibility that disappeared was mostly visibility the site was not winning: click-through rate rose from 1.23% to 1.67%, and the homepage gained 10 clicks.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://jefcomfg.com/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "Traffic held and visibility shrank, and the two facts belong together. Organic clicks were 188 in August against 193 in July, a loss of 5 clicks, while impressions fell 28.6% from 15,731 to 11,233. Because clicks stayed level, click-through rate rose from 1.23% to 1.67%: the searches the site stopped appearing in were largely searches it was not winning anyway. Almost all of the impression loss sits outside brand searches, where impressions fell 31.6% to 10,234, and it is concentrated in a few pages that lost reach without losing traffic. The plastic friction hinge product page lost 1,612 impressions (-74.0%) and 3 clicks, the custom hinge order page lost 566 impressions and no clicks, and the stainless steel continuous hinges collection lost 356 impressions and no clicks. Average position moved from 15.01 to 17.47, so the site sits lower on average, which is what a shrinking base of deep, low-value listings looks like. On the traffic that matters, the homepage gained 10 clicks to 96, the carbon fiber stock hinges collection gained 4 to 22, and titanium continuous hinges more than doubled to 7. Searches for Jefco by name held up at 41 clicks against 39. A caution on any brand reading: 63.8% of August clicks came from searches Google does not show, so no brand share of total clicks can be stated as fact. Desktop carried the month with 131 clicks against 122, while mobile fell to 56 from 71, and mobile now takes 29.8% of clicks against 36.8% in July. The work delivered in August was diagnostic and structural: the site's own data was consolidated into an August road map, a developer review scoped every item on it, the carbon fiber tab was removed from the continuous hinges page, that content was checked, and the 500 error on search suggestions was verified. That road map is what the September plan runs on, and it targets the indexation problem directly: 47 collection pages to link and submit, 147 pages Google has crawled but not indexed, 14 not-found URLs, and canonical conflicts on the homepage and the quote page. The open problem is measurement, and it is a different problem than an ecommerce report would suggest. The online store is not where this account converts: it took no orders in July or August, and 4 in the whole twelve months to September 29. GA4 agrees, with zero purchases on every channel, so its numbers are right rather than broken. The conversion that matters is the quote request, with 13 Request a Quote links on the homepage alone, and nothing counts those today: GA4's only key event is a two-page-view engagement signal, which measures interest rather than an enquiry. Agreeing what counts as a quote request and tracking the forms and the calls is the first deliverable, because until that exists the traffic in this report cannot be tied to the work it brings in.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks held at 188 against 193, while impressions fell 28.6% to 11,233 and click-through rate rose from 1.23% to 1.67%. The site lost reach, not visits.",
      status: "watch",
    },
    {
      area: "Conversions",
      statement:
        "The online store took no orders in July or August, and 4 in the last twelve months, so it is not the measure of this account. The conversion is the quote request, and nothing counts those yet. That is the first thing to fix.",
      status: "unavailable",
    },
    {
      area: "Rankings",
      statement:
        "Average position slipped from 15.01 to 17.47 as the site shed deep, low-value listings. The pages that earn the clicks improved: the homepage rose from position 6.6 to 5.6 and gained 10 clicks.",
      status: "watch",
    },
    {
      area: "Content and technical",
      statement:
        "The August road map was delivered and scoped with the developer, the carbon fiber tab was removed from the continuous hinges page and the content checked, and the search suggestion 500 error was verified.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Keep the hinge and gate hardware pages that earn clicks visible, and understand the drop in reach.",
      name: "Organic traffic and visibility",
      started:
        "July closed at 193 organic clicks on 15,731 impressions, with the homepage and the carbon fiber stock hinges collection leading.",
      work:
        "August was compared with July in Search Console by page, by device and by query group (brand searches, other named searches, and searches Google does not show).",
      result:
        "Clicks came in at 188 and impressions at 11,233, down 28.6%. Click-through rate rose from 1.23% to 1.67%, so the lost impressions were largely low-converting. The homepage gained 10 clicks to 96, carbon fiber stock hinges gained 4 to 22, titanium continuous hinges gained 4 to 7, and the aluminum continuous hinges collection lost 4 to 6. Desktop rose to 131 clicks while mobile fell to 56.",
      next:
        "Track the impression base weekly through September as the indexation fixes land, and watch whether mobile recovers its share.",
    },
    {
      businessPriority: "Get every commercial page indexed, reachable and pointing at one address.",
      name: "Indexation and site structure",
      started:
        "The August road map identified 47 collection pages that are neither linked nor submitted, 147 pages Google has crawled but not indexed, 14 not-found URLs, and canonical conflicts on the homepage and the quote page.",
      work:
        "The site's Search Console, crawl and analytics data was consolidated into the August road map, and the developer reviewed every item on it for feasibility and scope.",
      result:
        "Each item is now a scheduled September task with an owner, and this is the most likely explanation for a 28.6% fall in impressions against steady clicks: the pages Google can see are a shrinking set.",
      next:
        "Link and submit the 47 collection pages, export and classify the 147 crawled-not-indexed pages, check the 301 redirects on renamed collections and legacy paths, redirect or remove the 14 not-found URLs, resolve the canonical conflicts, and block the web pixel, atom feed and app endpoints in robots.txt.",
    },
    {
      businessPriority: "Make the carbon fiber range read clearly, since it is where non-brand search demand is strongest.",
      name: "Carbon fiber product content",
      started:
        "The continuous hinges page carried a carbon fiber tab that duplicated the dedicated carbon fiber pages.",
      work:
        "The developer removed the tab on August 19, and the revised content was checked on August 28.",
      result:
        "The carbon fiber stock hinges collection took 22 clicks in August against 18 in July, and carbon fiber searches are the strongest non-brand demand the site shows: carbon fiber hinge rose to 5 clicks from 1, and carbon fiber piano hinge to 3 from 2.",
      next:
        "Extend the same cleanup to the remaining carbon fiber collection and product pages, and give the carbon fiber continuous hinges collection (1 click, position 25.1) the on-page work it needs to compete.",
    },
    {
      businessPriority: "Count the enquiries search produces, since that is how this business converts.",
      name: "Conversion measurement",
      started:
        "Jefco quotes custom work. The homepage carries 13 Request a Quote links, and the online store is a small part of the picture: it took no orders in July or August, and 4 in the twelve months to September 29.",
      work:
        "GA4 was checked for both months alongside the store. It records 327 organic sessions in August and 327 in July, zero purchases on every channel in both months, and a single key event, a two-page-view engagement signal, which counts interest rather than an enquiry.",
      result:
        "The zero purchases are an accurate reading of the store, not a tracking fault, so there is no online revenue to report. The engagement event is not presented as a conversion, and quote requests are not yet counted anywhere.",
      next:
        "Agree what counts as a quote request (form submission, phone call, or both), track those on the Request a Quote forms and the phone number, and report them by channel from the next reports onward.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 19, 2026",
      evidence:
        "Closed August 19. The duplicate carbon fiber tab was removed from the continuous hinges page so the dedicated carbon fiber pages carry that demand.",
      owner: "Developer",
      title: "Removed the carbon fiber tab from the continuous hinges page",
    },
    {
      completedOn: "August 20, 2026",
      evidence:
        "Closed August 20. Search Console, crawl and analytics data consolidated into one view of the site's indexation, page performance and structure.",
      owner: "SEO Strategist",
      title: "Consolidated the site data behind the August plan",
    },
    {
      completedOn: "August 20, 2026",
      evidence:
        "Closed August 20. The August road map set the priority order: indexation of the collection pages, the crawled-not-indexed backlog, redirects and canonical conflicts.",
      owner: "SEO Strategist",
      title: "Delivered the August SEO road map",
    },
    {
      completedOn: "August 25, 2026",
      evidence:
        "Closed August 25. Every road map item was reviewed for feasibility on the Shopify theme and scoped, which is what turned the plan into the scheduled September tasks.",
      owner: "Developer",
      title: "Developer review of the road map",
    },
    {
      completedOn: "August 28, 2026",
      evidence: "Closed August 28. The revised carbon fiber page content was checked before it went out.",
      owner: "Account Manager",
      title: "Checked the carbon fiber page content",
    },
    {
      completedOn: "August 31, 2026",
      evidence:
        "Closed August 31. The 500 error returned by the search suggestion endpoint was reproduced and verified so it can be fixed at the source.",
      owner: "Developer",
      title: "Verified the search suggestion 500 error",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "193",
      current: "188",
      change: "-2.6%",
      businessMeaning:
        "Visits from Google search held. The homepage gained 10 clicks, carbon fiber stock hinges 4 and titanium continuous hinges 4, offsetting losses spread thinly across smaller pages.",
      status: "neutral",
    },
    {
      metric: "Search impressions",
      previous: "15,731",
      current: "11,233",
      change: "-28.6%",
      businessMeaning:
        "The site appeared in far fewer searches. The loss is concentrated: the plastic friction hinge page lost 1,612 impressions, the custom hinge order page 566 and the stainless steel continuous hinges collection 356, and none of those three lost meaningful clicks.",
      status: "watch",
    },
    {
      metric: "Click-through rate",
      previous: "1.23%",
      current: "1.67%",
      change: "0.44 points better",
      businessMeaning:
        "A larger share of the searches the site appeared in turned into visits. This is the counterweight to the impression drop: what was lost was mostly reach that was not converting.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "15.01",
      current: "17.47",
      change: "2.46 worse",
      businessMeaning:
        "On average the site sits lower in results. The pages that matter moved the other way: the homepage improved from 6.6 to 5.6.",
      status: "watch",
    },
    {
      metric: "Clicks from brand searches",
      previous: "39",
      current: "41",
      change: "+5.1%",
      businessMeaning:
        "Searches naming Jefco held up, and brand impressions rose 29.4% to 999. Demand for the company by name was not the problem this month.",
      status: "positive",
    },
    {
      metric: "Clicks from other named searches",
      previous: "33",
      current: "27",
      change: "-18.2%",
      businessMeaning:
        "Non-brand searches Google does show gave 6 fewer clicks. Carbon fiber searches grew inside this group while several product-level searches faded.",
      status: "watch",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "121",
      current: "120",
      change: "-0.8%",
      businessMeaning:
        "63.8% of August clicks came from searches Google withholds for privacy. Google does not show which searches these were, so their brand status is unknown, and they were flat month to month.",
      status: "neutral",
    },
    {
      metric: "Impressions from searches that do not name Jefco",
      previous: "14,959",
      current: "10,234",
      change: "-31.6%",
      businessMeaning:
        "Almost the entire impression loss sits outside brand searches. This is the number the September indexation work is aimed at.",
      status: "watch",
    },
    {
      metric: "Homepage clicks",
      previous: "86",
      current: "96",
      change: "+11.6%",
      businessMeaning:
        "The homepage is the single biggest entry point, at 51% of all organic clicks, and it grew while its average position improved from 6.6 to 5.6.",
      status: "positive",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "327",
      current: "327",
      change: "0.0%",
      businessMeaning:
        "GA4 shows organic visits exactly flat, which supports the Search Console reading that traffic held. Organic was 42.5% of all site sessions in August.",
      status: "neutral",
    },
    {
      metric: "Online store orders, all channels",
      previous: "0",
      current: "0",
      change: "No change",
      businessMeaning:
        "The storefront took no orders in either month, and 4 in the twelve months to September 29. Online checkout is not how this account converts, so store sales are not a fair measure of search performance.",
      status: "neutral",
    },
    {
      metric: "Quote requests from organic search",
      previous: "Not yet measured",
      current: "Not yet measured",
      change: "n/a",
      businessMeaning:
        "Quote requests are the conversion for this business, with 13 Request a Quote links on the homepage, and nothing counts them today. Agreeing the definition and tracking the forms and calls is the first measurement deliverable.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console URL-prefix property https://jefcomfg.com/ through the API, August 1-31 against July 1-31, 2026 (both 31 days). Clicks (188 against 193) and impressions (11,233 against 15,731) are exact and equal the sum of the device rows. CTR and average position are Search Console's own averages. Brand searches are queries containing 'jefco'. Google withholds rare queries for privacy: 120 of 188 August clicks (63.8%) and 121 of 193 July clicks (62.7%) came from searches Google does not show, so no brand share of total clicks is stated as fact anywhere in this report. Of the clicks on searches Google does show, 60.3% named Jefco; that is a share of visible searches, not of all clicks. Organic sessions come from GA4 property 288380673, Organic Search channel. GA4 records zero purchases and zero revenue on every channel in both months, which matches the store itself: it took no orders in July or August and 4 in the twelve months to September 29, 2026. GA4's only configured key event is a two-page-view engagement signal (108 in August against 113 in July on organic), which counts interest, not sales or enquiries, and is therefore not reported as a conversion or a lead.",

  conversionPlan: {
    owner: "Account Manager + Head of SEO",
    sourcePriority:
      "Quote requests, not store orders. The first step is a shared definition: does a quote request mean a Request a Quote form submission, a phone call, an email to the sales address, or all three. Once that is agreed, an event fires on each Request a Quote submission and is marked as a key event in GA4, and call tracking is added to the phone number so calls carry a source. That gives every enquiry a channel, which is what turns the traffic in this report into business.",
    nextReportExpectation:
      "The next reports show quote requests from organic search each month, next to the pages that produced them, so search can be judged on enquiries rather than clicks. Online store orders stay in the report as context only, since the store takes a handful of orders a year.",
  },

  performanceCharts: {
    growth: {
      title: "Clicks held while impressions fell sharply",
      insight:
        "Clicks came in at 188 against 193, a loss of 5, while impressions fell 28.6%. Click-through rate therefore rose from 1.23% to 1.67%. Both months had 31 days.",
      series: [
        {
          change: "-2.6%",
          current: 188,
          currentDisplay: "188",
          label: "Organic clicks",
          previous: 193,
          previousDisplay: "193",
          status: "watch",
        },
        {
          change: "-28.6%",
          current: 11233,
          currentDisplay: "11,233",
          label: "Search impressions",
          previous: 15731,
          previousDisplay: "15,731",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 193,
      baselineDisplay: "193",
      contributions: [
        { display: "+2", label: "Brand searches", value: 2 },
        { display: "-6", label: "Other named searches", value: -6 },
        { display: "-1", label: "Searches Google does not show", value: -1 },
      ],
      insight:
        "Brand searches gained 2 clicks and other named searches lost 6, while the searches Google does not show were flat at -1. Google withholds those rare queries for privacy, and they carried 63.8% of August clicks, so their brand status is unknown and this chart does not claim a brand versus non-brand split of the month.",
      title: "The 5-click difference, by type of search",
      total: 188,
      totalDisplay: "188",
    },
    homepage: {
      title: "The homepage gained while the site lost reach",
      insight:
        "The homepage took 96 clicks, 51% of all organic clicks, and improved from average position 6.6 to 5.6 even as its impressions fell 8.0%. It is converting a smaller pool of searches at a much higher rate, which is the pattern across the whole month.",
      series: [
        {
          change: "+11.6%",
          current: 96,
          currentDisplay: "96",
          label: "Clicks",
          previous: 86,
          previousDisplay: "86",
          status: "positive",
        },
        {
          change: "-8.0%",
          current: 2401,
          currentDisplay: "2,401",
          label: "Impressions",
          previous: 2610,
          previousDisplay: "2,610",
          status: "watch",
        },
        {
          change: "1.0 better",
          current: 5.6,
          currentDisplay: "5.6",
          label: "Average position",
          previous: 6.6,
          previousDisplay: "6.6",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Desktop grew, mobile gave the clicks back",
      insight:
        "Desktop clicks rose 7.4% to 131 while mobile fell 21.1% to 56, so mobile now carries 29.8% of clicks against 36.8% in July. Tablet is 1 click and is not shown.",
      series: [
        {
          change: "+7.4%",
          current: 131,
          currentDisplay: "131",
          label: "Desktop",
          previous: 122,
          previousDisplay: "122",
          status: "positive",
        },
        {
          change: "-21.1%",
          current: 56,
          currentDisplay: "56",
          label: "Mobile",
          previous: 71,
          previousDisplay: "71",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Quote requests are not counted. The homepage carries 13 Request a Quote links, and GA4's only key event is a two-page-view engagement signal, which measures interest rather than an enquiry.",
      impact:
        "For a manufacturer that quotes custom work, the main conversion is invisible, so a month of strong quote demand would read as a month where nothing happened. Store orders cannot stand in for it: there were none in July or August.",
      remediation:
        "Agree what counts as a quote request, add a GA4 event on each Request a Quote submission and mark it as a key event, and add call tracking to the phone number so enquiries by phone carry a source too.",
      eta: "Definition and form tracking in September, then reported monthly.",
    },
    {
      obstacle:
        "Impressions fell 28.6% and average position moved from 15.01 to 17.47, and the road map points at indexation: 47 collection pages that are neither linked nor submitted, 147 pages crawled but not indexed, and 14 not-found URLs.",
      impact:
        "Every collection page Google cannot reach or will not index is a product range that cannot be found, which caps how much non-brand demand the site can take.",
      remediation:
        "Work the September indexation tasks in order: link and submit the collection pages, classify the crawled-not-indexed backlog, check the redirects, and clear the not-found URLs.",
      eta: "September 30.",
    },
    {
      obstacle: "Mobile clicks fell 21.1% to 56 while desktop rose, and mobile impressions fell 25.0%.",
      impact:
        "Buyers who research on a phone are a growing share of trade search, and the site is losing ground with them faster than with desktop users.",
      remediation:
        "Compare the mobile and desktop rendering of the top collection pages, and check mobile page speed and layout once the indexation work is done.",
      eta: "October.",
    },
  ],

  technicalItems: [
    {
      issue:
        "47 collection pages are neither linked from the site's navigation nor submitted in the sitemap, and 147 pages have been crawled by Google but not indexed.",
      why:
        "A collection page Google will not index cannot rank, so the product ranges on those pages are invisible to non-brand search. This is the most likely driver of the 28.6% impression loss.",
      fix:
        "Link the 47 collection pages from the relevant category navigation, submit them in the sitemap, then export and classify the 147 crawled-not-indexed pages so each one is fixed, consolidated or removed.",
      developerNote: "Both tasks are scheduled in the September plan with the SEO Strategist.",
    },
    {
      issue: "The homepage and the custom hinge order page carry conflicting canonical tags.",
      why:
        "Conflicting canonicals tell Google two different things about which address is the real page, which splits ranking signals and can keep the right version out of results. The custom hinge order page lost 566 impressions in August (-47.4%).",
      fix: "Resolve the canonical conflicts so each page declares a single, self-consistent canonical URL.",
      developerNote: "Scheduled in the September plan with the developer.",
    },
    {
      issue: "The web pixel, atom feed and app endpoints are open to crawling in robots.txt.",
      why:
        "Crawl budget spent on endpoints that will never rank is crawl budget not spent on collection and product pages, which is exactly the pressure the crawled-not-indexed backlog shows.",
      fix: "Block the web pixel, atom feed and app endpoints in robots.txt, then confirm in Search Console that crawling shifts to commercial pages.",
      developerNote: "Scheduled in the September plan with the developer.",
    },
    {
      issue: "14 URLs return not found, and the 301 redirects on renamed collections and legacy paths still need checking.",
      why:
        "Dead URLs waste any links and ranking history pointing at them, and a broken redirect chain on a renamed collection loses that collection's history entirely.",
      fix: "Redirect each of the 14 URLs to its closest live equivalent or remove it, then test the redirects on every renamed collection and legacy path.",
      developerNote: "Scheduled in the September plan with the SEO Strategist.",
    },
    {
      issue: "The search suggestion endpoint returned a 500 error, which was reproduced and verified on August 31.",
      why: "On-site search that fails sends a buyer who already knew what they wanted straight back to Google.",
      fix: "Fix the endpoint at the source and retest the suggestion behaviour on desktop and mobile.",
      developerNote: "Verification is closed; the fix follows in the September development work.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://jefcomfg.com/, pulled through the API on September 29, 2026. Platform is Shopify.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (188 against 193) and impressions (11,233 against 15,731) are exact and equal the sum of the device rows. CTR 1.67% against 1.23%; average position 17.47 against 15.01.",
    "Devices: desktop 131 clicks against 122, mobile 56 against 71, tablet 1 against 0. Desktop impressions 7,896 against 11,235, mobile 3,286 against 4,381, tablet 51 against 115.",
    "Query groups: brand searches (queries containing 'jefco') 41 clicks against 39; other named searches 27 against 33; searches Google does not show 120 against 121. Google withholds rare queries for privacy: they were 63.8% of August clicks and 62.7% of July clicks, and their brand status is unknown. Of the clicks on searches Google does show, 60.3% named Jefco; that is not a share of all clicks. Brand impressions were 999 against 772, and impressions on searches that do not name Jefco were 10,234 against 14,959.",
    "Page movers (all searches): homepage 96 clicks against 86, carbon fiber stock hinges 22 against 18, titanium continuous hinges 7 against 3, aluminum continuous hinges 6 against 10, finishes 6 against 10, stock hinges page 3 at 6 against 0. Impression movers: plastic friction hinge 567 against 2,179, custom hinge order 629 against 1,195, stainless steel continuous hinges 1,066 against 1,422, gate hardware 866 against 1,073.",
    "Organic sessions: GA4 property 288380673, Organic Search channel, 327 in August and 327 in July. All channels: 770 against 718, so organic was 42.5% of sessions in August and 45.5% in July.",
    "GA4 records zero ecommerce purchases and zero revenue on every channel in both months, so no revenue or order figure in this report comes from GA4. The property's only configured key event is Two_Plus_Pages_Viewed, a two-page-view engagement signal (108 on organic in August against 113 in July). It measures engagement, not sales or enquiries, and is not reported as a conversion or a lead.",
    "Online sales: the Shopify store recorded 4 orders and $68.31 in total sales across the twelve months to September 29, 2026, with no orders in July or August 2026. The storefront is therefore not a sales channel for this account, no revenue figure appears in this report, and none is estimated from traffic.",
    "Quote requests: the homepage carries 13 Request a Quote links. No event currently fires on those submissions, so quote requests are not counted in GA4 and cannot yet be attributed to organic search. This is the first measurement deliverable.",
    "Completed work comes from ClickUp tasks closed in August 2026 on the Jefco Manufacturing task list. Template checklists and administrative items are excluded as outside SEO.",
    "The September plan items (47 collection pages, 147 crawled-not-indexed pages, 14 not-found URLs, canonical conflicts, robots.txt endpoints) come from the August road map and the developer review that scoped it.",
  ],
};
