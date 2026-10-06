import type { SeoStoryReportData } from "@/lib/reports/types";

// Jefco Manufacturing, September 2026. Built from output/jefco-september-2026/data.json
// (GSC API, GA4 Data API and ClickUp, pulled 2026-10-05). Calendar months only: September 1-30
// against August 1-31, with no overlap between the two reports.
// Lead generation treatment: the Shopify storefront is not a sales channel for this account
// (4 online orders and $68.31 in the twelve months to 2026-09-29, none in August or September), so
// GA4's zero purchases are correct and there is no revenue chart. The conversion is the quote
// request, and nothing counts those yet.
// Brand reading: Google hides the query behind 60.9% of September clicks and 63.8% of August's, so
// the three-way query visibility split (brand 49/41, other named searches 14/27, searches Google
// does not show 98/120) is used everywhere instead of a "non-brand" total, and the hidden share is
// disclosed next to every brand statement.
// No businessObjective field: there is no recorded objective for this client (no kickoff file, and
// the Knowledge Center entry has no business model), and the house rule is never to invent one.
export const jefcoSeptember2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Everything below is organic search performance from Google Search Console, September 1-30 compared with August 1-31. September has 30 days and August has 31. There is no revenue chart, because the online store is not where this account converts: it took no orders in either month. The conversion to measure is the quote request.",
    title: "Organic search performance, September vs August",
  },

  meta: {
    action:
      "Run the October recovery plan on the collections that lost reach (link and submit the 47 discovered collection pages, classify the 147 crawled-not-indexed pages, clean up the legacy collections and redirects, clear the 14 not-found URLs, and rewrite the mobile titles on the recovery collections), confirm that the robots.txt and canonical fixes shipped on September 30 change what Google crawls, and agree what counts as a quote request so the forms and the phone calls can be tracked.",
    client: "Jefco Manufacturing",
    coverHeadline:
      "Organic clicks fell 14.4% to 161 and impressions 22.3% to 8,723, so the site was seen in far fewer searches. It ranked better in the ones that remained: average position improved from 17.47 to 15.23 and click-through rate rose from 1.67% to 1.85%.",
    currentPeriod: "September 1-30, 2026",
    previousPeriod: "August 1-31, 2026",
    property: "https://jefcomfg.com/",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "The site shrank in reach and improved in quality, and the month has to be read as both. Organic clicks came in at 161 against 188, a loss of 27, and impressions fell 22.3% from 11,233 to 8,723. September has 30 days against August's 31, so one day of that gap is calendar rather than performance. At the same time average position improved from 17.47 to 15.23 and click-through rate rose from 1.67% to 1.85%, which means the listings that survived sat higher and were clicked more often. A caution before any brand reading: Google hides the query behind 60.9% of September clicks and 63.8% of August's, so a brand share of all clicks cannot be stated as fact. Taking the three groups Search Console does allow, searches naming Jefco rose to 49 clicks from 41, other named searches fell to 14 from 27, and searches Google does not show fell to 98 from 120. Those hidden searches carry 22 of the 27 clicks lost, so most of the decline sits behind queries that cannot be inspected one by one. What can be inspected is pages and devices. Two pages carry 18 of the 27: the carbon fiber stock hinges collection lost 10 clicks (22 to 12) while its impressions held flat at 363 against 364, so it was shown as often and clicked less, and the homepage lost 8 clicks to 88 while improving from average position 5.6 to 4.8. Mobile lost 17 clicks to 39, a fall of 30.4%, against a 6.9% desktop decline, so mobile now takes 24.2% of clicks against 29.8%. The impression losses are concentrated in the continuous and stock hinge collections: aluminum continuous hinges lost 560 impressions, stainless steel continuous hinges 298, butt stock hinges 241 and the finishes page 212. That is the same set of collection pages the road map flagged for indexation and legacy redirect work, which is why those pages are the October priority. On the other side, the custom hinge order page doubled to 6 clicks, the hinges overview page rose to 5 from 2, stainless steel continuous hinges rose to 5 from 3, and a stainless steel uneven leaf butt hinge product page added 4. September's delivered work was heavier than August's and most of it landed in the final week: the continuous hinge and butt hinge collection copy, the friction hinge product page updates, the specification answer blocks and the hinge blog content all went live on the Shopify theme on September 25, and the canonical conflicts on the homepage and the quote page plus the robots.txt blocks on the web pixel, atom feed and app endpoints shipped on September 30. None of that had time to show in September's numbers, so October is the first month that tests it. Earlier in the month the indexed count and collection baseline were frozen so the recovery can be measured against a fixed starting point, platform access and the deployment route were confirmed, and the low-quality monthly link build was retired in favour of an industry link target list. The open problem is still measurement, and it is unchanged. The storefront took no orders in either month and 4 in the twelve months to September 29, and GA4 agrees with zero purchases on every channel, so those zeroes are accurate rather than broken. The conversion that matters is the quote request, with 13 Request a Quote links on the homepage alone, and nothing counts those today: GA4's only key event is a two-page-view engagement signal, which measures interest rather than an enquiry. Agreeing the definition and tracking the forms and the calls is the first deliverable, because until it exists a month like this one cannot be judged on the enquiries it produced.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks fell 14.4% to 161 and impressions 22.3% to 8,723. Mobile carries 17 of the 27 clicks lost, and two pages carry 18 of them.",
      status: "watch",
    },
    {
      area: "Conversions",
      statement:
        "The online store took no orders in August or September, and 4 in the last twelve months, so it is not the measure of this account. The conversion is the quote request, and nothing counts those yet. That is still the first thing to fix.",
      status: "unavailable",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved from 17.47 to 15.23 and click-through rate rose from 1.67% to 1.85%. The homepage improved from 5.6 to 4.8. The site ranks better on a smaller set of searches.",
      status: "positive",
    },
    {
      area: "Content and technical",
      statement:
        "Ten pieces of work shipped: collection and product copy for the continuous, butt and friction hinge ranges, specification answer blocks, blog content, the canonical fixes on the homepage and quote page, and robots.txt blocks on crawl waste. The last of it went live on September 30.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Understand where the clicks went, and protect the pages that still earn them.",
      name: "Organic traffic and visibility",
      started:
        "August closed at 188 organic clicks on 11,233 impressions, with the homepage and the carbon fiber stock hinges collection leading.",
      work:
        "September was compared with August in Search Console by page, by device and by the three query groups Google reports: searches naming Jefco, other named searches, and searches Google does not show.",
      result:
        "Clicks came in at 161 and impressions at 8,723. Average position improved from 17.47 to 15.23 and click-through rate from 1.67% to 1.85%. Of the 27 clicks lost, 22 sit in searches Google does not show, 17 sit on mobile, and 18 sit on two pages: carbon fiber stock hinges (22 to 12) and the homepage (96 to 88). Gains came from the custom hinge order page (3 to 6), the hinges overview page (2 to 5), stainless steel continuous hinges (3 to 5) and a stainless steel uneven leaf butt hinge product page (4 clicks).",
      next:
        "Watch the carbon fiber stock hinges listing specifically: its impressions held flat while its clicks halved, so the question is what the result now looks like to a buyer, not whether it appears. Track clicks and impressions weekly through October as the collection recovery work lands.",
    },
    {
      businessPriority: "Get every commercial collection indexed, reachable and pointing at one address.",
      name: "Indexation and site structure",
      started:
        "The road map identified 47 collection pages that are neither linked nor submitted, 147 pages Google has crawled but not indexed, 14 not-found URLs, canonical conflicts on the homepage and the quote page, and crawl waste on the web pixel, atom feed and app endpoints.",
      work:
        "The indexed count and the collection baseline were frozen on September 5 so recovery can be measured against a fixed starting point. The canonical conflicts were resolved and the web pixel, atom feed and app endpoints were blocked in robots.txt on September 30.",
      result:
        "Two of the five structural items are closed. The impression losses this month are concentrated in exactly the collections the road map flagged: aluminum continuous hinges lost 560 impressions, stainless steel continuous hinges 298 and butt stock hinges 241, which is consistent with a shrinking set of indexed collection pages rather than a ranking problem, since average position improved.",
      next:
        "Link and submit the 47 collection pages, export and classify the 147 crawled-not-indexed pages and supply the redirect pairs that classification produces, clean up the legacy collections and their redirects, clear the 14 not-found URLs, and confirm in Search Console that crawling has shifted towards collection and product pages now that the endpoints are blocked.",
    },
    {
      businessPriority: "Give the hinge ranges enough on-page substance to win specification searches.",
      name: "Product and collection content",
      started:
        "The continuous, butt and friction hinge ranges carried thin collection and product copy, and the site answered few of the specification questions buyers search with.",
      work:
        "New collection copy for the continuous and butt hinge ranges, updated friction hinge product pages, specification answer blocks and hinge blog content were written and implemented on the Shopify theme on September 25.",
      result:
        "All five pieces are live. They published in the final week of September, so this report measures the site mostly as it was before them. The early signal around the same ranges is mixed: stainless steel continuous hinges rose to 5 clicks from 3 and a stainless steel butt hinge product page added 4, while the carbon fiber stock hinges collection lost 10.",
      next:
        "Measure the updated pages against the frozen baseline from mid October, extend the same treatment to the carbon fiber pages, and rewrite the mobile titles on the recovery collections so the listings read well on a phone.",
    },
    {
      businessPriority: "Count the enquiries search produces, since that is how this business converts.",
      name: "Conversion measurement",
      started:
        "Jefco quotes custom work. The homepage carries 13 Request a Quote links, and the online store is a small part of the picture: it took no orders in August or September, and 4 in the twelve months to September 29.",
      work:
        "GA4 was checked for both months alongside the store. It records 273 organic sessions in September and 327 in August, zero purchases on every channel in both months, and a single key event, a two-page-view engagement signal, which counts interest rather than an enquiry.",
      result:
        "The zero purchases are an accurate reading of the store, not a tracking fault, so there is no online revenue to report. The engagement event is not presented as a conversion, and quote requests are still counted nowhere. One encouraging sign sits outside the tracking: the custom hinge order page, which is the quote page, doubled its clicks to 6 while its impressions fell 24.2%.",
      next:
        "Agree what counts as a quote request (form submission, phone call, or both), fire an event on each Request a Quote submission and mark it as a key event in GA4, and add call tracking to the phone number so calls carry a source. Then report quote requests by channel every month.",
    },
  ],

  completedWork: [
    {
      completedOn: "September 5, 2026",
      evidence:
        "Closed September 5. Access to the Shopify theme and the route for shipping code changes were confirmed, which is what allowed the content and technical work to go live later in the month.",
      owner: "Head of SEO",
      title: "Confirmed platform access and the deployment route",
    },
    {
      completedOn: "September 5, 2026",
      evidence:
        "Closed September 5. The indexed page count and the collection page inventory were recorded as a fixed starting point, so the indexation recovery can be measured rather than estimated.",
      owner: "Head of SEO",
      title: "Froze the indexing and collection baseline",
    },
    {
      completedOn: "September 8, 2026",
      evidence:
        "Closed September 8. The recurring low-quality link build was stopped. An industry link target list replaces it, so links are earned from places buyers in this trade actually read.",
      owner: "Head of SEO",
      title: "Retired the low-quality monthly link build",
    },
    {
      completedOn: "September 25, 2026",
      evidence:
        "Closed September 25. New copy for the continuous hinge collection pages was written and implemented on the Shopify theme, giving the range the descriptive text it needs to rank for material and size searches.",
      owner: "Developer",
      title: "Published the continuous hinge collection copy",
    },
    {
      completedOn: "September 25, 2026",
      evidence:
        "Closed September 25. New copy for the butt hinge collection pages was written and implemented on the Shopify theme.",
      owner: "Developer",
      title: "Published the butt hinge collection copy",
    },
    {
      completedOn: "September 25, 2026",
      evidence:
        "Closed September 25. The friction hinge product pages were rewritten, covering the series ranges that currently appear in search but attract no clicks.",
      owner: "Content Writer",
      title: "Rewrote the friction hinge product pages",
    },
    {
      completedOn: "September 25, 2026",
      evidence:
        "Closed September 25. Specification answer blocks were added to the product templates so the pages answer the measurement and material questions buyers search with.",
      owner: "Developer",
      title: "Published the specification answer blocks",
    },
    {
      completedOn: "September 25, 2026",
      evidence:
        "Closed September 25. Hinge blog content was implemented on the Shopify theme to support the collection pages with searches that come earlier in the buying process.",
      owner: "Developer",
      title: "Published the hinge blog content",
    },
    {
      completedOn: "September 30, 2026",
      evidence:
        "Closed September 30. The homepage and the quote page now each declare a single canonical address, so Google is no longer told two different things about which version is the real page.",
      owner: "Developer",
      title: "Resolved the canonical conflicts on the homepage and quote page",
    },
    {
      completedOn: "September 30, 2026",
      evidence:
        "Closed September 30. The web pixel, atom feed and app endpoints were blocked in robots.txt, so crawl effort that was going to addresses that will never rank can go to collection and product pages instead.",
      owner: "Developer",
      title: "Blocked crawl waste in robots.txt",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "188",
      current: "161",
      change: "-14.4%",
      businessMeaning:
        "Visits from Google search fell by 27. Mobile accounts for 17 of them and two pages for 18: carbon fiber stock hinges and the homepage. September also has one fewer day than August.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "11,233",
      current: "8,723",
      change: "-22.3%",
      businessMeaning:
        "The site appeared in far fewer searches, for the second month running. The loss is concentrated in collection pages: aluminum continuous hinges lost 560 impressions, stainless steel continuous hinges 298, butt stock hinges 241 and the finishes page 212.",
      status: "watch",
    },
    {
      metric: "Click-through rate",
      previous: "1.67%",
      current: "1.85%",
      change: "0.18 points better",
      businessMeaning:
        "A larger share of the searches the site appeared in turned into visits, for the second month running. The listings that remain are working harder than the ones that went.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "17.47",
      current: "15.23",
      change: "2.24 better",
      businessMeaning:
        "The site sits more than two places higher on average, recovering all of August's slip and more. This is the clearest sign the traffic loss is about how many searches the site is in, not how well it does in them.",
      status: "positive",
    },
    {
      metric: "Clicks from brand searches",
      previous: "41",
      current: "49",
      change: "+19.5%",
      businessMeaning:
        "Searches naming Jefco grew by 8 clicks and now convert at 5.79% against 4.10%. Demand for the company by name was not the problem this month. Brand impressions fell 15.3% to 846.",
      status: "positive",
    },
    {
      metric: "Clicks from other named searches",
      previous: "27",
      current: "14",
      change: "-48.1%",
      businessMeaning:
        "The searches that do not name Jefco and that Google does show gave 13 fewer clicks. Carbon fiber searches account for most of it: carbon fiber hinge fell from 5 clicks to 1 and carbon fiber piano hinge from 3 to 1, both while their average position improved.",
      status: "watch",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "120",
      current: "98",
      change: "-18.3%",
      businessMeaning:
        "Google withholds rare queries for privacy, and they carried 60.9% of September clicks against 63.8% in August. Their brand status is unknown, and they hold 22 of the 27 clicks lost, so most of the decline cannot be traced to named searches.",
      status: "watch",
    },
    {
      metric: "Impressions from searches that do not name Jefco",
      previous: "10,234",
      current: "7,877",
      change: "-23.0%",
      businessMeaning:
        "Almost the entire impression loss again sits outside searches naming the company. This figure counts the withheld searches too, so treat it as the size of the reach problem, not as a measured non-brand result.",
      status: "watch",
    },
    {
      metric: "Homepage clicks",
      previous: "96",
      current: "88",
      change: "-8.3%",
      businessMeaning:
        "The homepage is still the biggest entry point, at 54.7% of all organic clicks, and it lost less ground than the site as a whole while improving from average position 5.6 to 4.8.",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "327",
      current: "273",
      change: "-16.5%",
      businessMeaning:
        "GA4 shows the same direction as Search Console, which is the check that matters. Organic was 24.0% of all site sessions in September against 42.5% in August, because visits from other channels rose sharply in the same month.",
      status: "watch",
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
    "Traffic comes from the Google Search Console URL-prefix property https://jefcomfg.com/ through the API, September 1-30 against August 1-31, 2026. September has 30 days and August has 31, and the two periods do not overlap. Clicks (161 against 188) and impressions (8,723 against 11,233) are exact and equal the sum of the device rows. CTR and average position are Search Console's own averages, and a lower position number is better. Brand searches are queries containing 'jefco'. Google withholds rare queries for privacy: 98 of 161 September clicks (60.9%) and 120 of 188 August clicks (63.8%) came from searches Google does not show, so no brand share of total clicks is stated as fact anywhere in this report, and the impression figure for searches that do not name Jefco includes those withheld searches. Of the clicks on searches Google does show, 77.8% named Jefco; that is a share of visible searches, not of all clicks. Organic sessions come from GA4 property 288380673, Organic Search channel. GA4 records zero purchases and zero revenue on every channel in both months, which matches the store itself: it took no orders in August or September and 4 in the twelve months to September 29, 2026. GA4's only configured key event is a two-page-view engagement signal (85 on organic in September against 108 in August), which counts interest, not sales or enquiries, and is therefore not reported as a conversion or a lead.",

  conversionPlan: {
    owner: "Account Manager + Head of SEO",
    sourcePriority:
      "Quote requests, not store orders. The first step is a shared definition: does a quote request mean a Request a Quote form submission, a phone call, an email to the sales address, or all three. Once that is agreed, an event fires on each Request a Quote submission and is marked as a key event in GA4, and call tracking is added to the phone number so calls carry a source. That gives every enquiry a channel, which is what turns the traffic in this report into business.",
    nextReportExpectation:
      "The next reports show quote requests from organic search each month, next to the pages that produced them, so search can be judged on enquiries rather than clicks. The custom hinge order page is the first page to watch, since it doubled its clicks this month with no way to see what came of them. Online store orders stay in the report as context only, since the store takes a handful of orders a year.",
  },

  performanceCharts: {
    growth: {
      title: "Both clicks and reach fell, reach faster",
      insight:
        "Clicks came in at 161 against 188, a loss of 27, while impressions fell 22.3%. Because impressions fell faster, click-through rate rose from 1.67% to 1.85%. September has 30 days and August 31.",
      series: [
        {
          change: "-14.4%",
          current: 161,
          currentDisplay: "161",
          label: "Organic clicks",
          previous: 188,
          previousDisplay: "188",
          status: "watch",
        },
        {
          change: "-22.3%",
          current: 8723,
          currentDisplay: "8,723",
          label: "Search impressions",
          previous: 11233,
          previousDisplay: "11,233",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 188,
      baselineDisplay: "188",
      contributions: [
        { display: "+8", label: "Brand searches", value: 8 },
        { display: "-13", label: "Other named searches", value: -13 },
        { display: "-22", label: "Searches Google does not show", value: -22 },
      ],
      insight:
        "Searches naming Jefco gained 8 clicks, other named searches lost 13, and the searches Google does not show lost 22, so they carry most of the month's decline. Google withholds those rare queries for privacy and they were 60.9% of September clicks, so their brand status is unknown and this chart does not claim a brand versus non-brand split of the month.",
      title: "The 27-click difference, by type of search",
      total: 161,
      totalDisplay: "161",
    },
    homepage: {
      title: "The homepage held better than the site around it",
      insight:
        "The homepage took 88 clicks, 54.7% of all organic clicks, and improved from average position 5.6 to 4.8. Its clicks fell 8.3% and its impressions 10.4%, both gentler than the site totals of 14.4% and 22.3%.",
      series: [
        {
          change: "-8.3%",
          current: 88,
          currentDisplay: "88",
          label: "Clicks",
          previous: 96,
          previousDisplay: "96",
          status: "watch",
        },
        {
          change: "-10.4%",
          current: 2151,
          currentDisplay: "2,151",
          label: "Impressions",
          previous: 2401,
          previousDisplay: "2,401",
          status: "watch",
        },
        {
          change: "0.8 better",
          current: 4.8,
          currentDisplay: "4.8",
          label: "Average position",
          previous: 5.6,
          previousDisplay: "5.6",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile carried most of the loss",
      insight:
        "Mobile clicks fell 30.4% to 39 while desktop fell 6.9% to 122, so mobile now carries 24.2% of clicks against 29.8% in August. Mobile impressions fell 27.2% against 20.2% on desktop. Tablet is 0 clicks and is not shown.",
      series: [
        {
          change: "-6.9%",
          current: 122,
          currentDisplay: "122",
          label: "Desktop",
          previous: 131,
          previousDisplay: "131",
          status: "watch",
        },
        {
          change: "-30.4%",
          current: 39,
          currentDisplay: "39",
          label: "Mobile",
          previous: 56,
          previousDisplay: "56",
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
        "For a manufacturer that quotes custom work, the main conversion is invisible. The quote page doubled its clicks to 6 this month and there is no way to see whether any of those visits became an enquiry. Store orders cannot stand in for it: there were none in August or September.",
      remediation:
        "Agree what counts as a quote request, add a GA4 event on each Request a Quote submission and mark it as a key event, and add call tracking to the phone number so enquiries by phone carry a source too.",
      eta: "Definition and form tracking in October, then reported monthly.",
    },
    {
      obstacle:
        "Reach has now fallen two months running, 22.3% in September after 28.6% in August, and it is concentrated in the continuous and stock hinge collections.",
      impact:
        "Every collection page Google cannot reach or will not index is a product range that buyers cannot find, which caps how much demand the site can take no matter how well the remaining pages rank.",
      remediation:
        "Work the October indexation set in order: link and submit the 47 collection pages, classify the 147 crawled-not-indexed pages and supply the redirect pairs, clean up the legacy collections and their redirects, and clear the 14 not-found URLs.",
      eta: "October 20.",
    },
    {
      obstacle:
        "Mobile clicks fell 30.4% to 39, more than four times the desktop decline, and mobile impressions fell 27.2%.",
      impact:
        "Buyers who research on a phone are a growing share of trade search, and the site is now losing them faster than it is losing desktop users. Mobile is down to 24.2% of clicks.",
      remediation:
        "Rewrite the mobile titles on the recovery collections so the listings read well in a narrow result, then compare mobile and desktop rendering and page speed on the top collection pages.",
      eta: "Mobile titles by October 16, rendering check to follow.",
    },
    {
      obstacle:
        "The carbon fiber stock hinges collection lost 10 clicks, from 22 to 12, while its impressions held flat at 363 against 364 and its main searches improved their average position.",
      impact:
        "This is the single largest page loss of the month, and it is not an indexation or ranking problem. The page is being shown as often and chosen less often, which usually points at how the result itself reads or at what now sits around it.",
      remediation:
        "Review the title and description shown in search for that collection against the results now ranking with it, and extend the carbon fiber page updates already scheduled for October.",
      eta: "October.",
    },
  ],

  technicalItems: [
    {
      issue:
        "47 collection pages are neither linked from the site's navigation nor submitted in the sitemap, and 147 pages have been crawled by Google but not indexed.",
      why:
        "A collection page Google will not index cannot rank, so the product ranges on those pages are invisible to search. This remains the most likely driver of a second month of falling impressions, since average position improved at the same time.",
      fix: "Link the 47 collection pages from the relevant category navigation, submit them in the sitemap, then export and classify the 147 crawled-not-indexed pages so each one is fixed, consolidated or removed, and supply the redirect pairs that classification produces.",
      developerNote: "Scheduled across the October plan with the SEO Strategist and the SEO Specialist.",
    },
    {
      issue: "Legacy collections and their redirects still need cleaning up, and 14 URLs return not found.",
      why:
        "Dead URLs waste any links and ranking history pointing at them, and a broken redirect chain on a renamed collection loses that collection's history entirely. The collections losing the most impressions this month are in that same group.",
      fix: "Clean up the legacy collections, test the 301 redirects on every renamed collection and legacy path, and redirect or remove each of the 14 not-found URLs.",
      developerNote: "Scheduled for early October with the developer.",
    },
    {
      issue:
        "The homepage and the quote page carried conflicting canonical tags, resolved on September 30.",
      why:
        "Conflicting canonicals tell Google two different things about which address is the real page, which splits ranking signals and can keep the right version out of results.",
      fix: "Confirm in Search Console during October that both pages now report a single canonical and that the indexed version is the correct one.",
      developerNote: "The fix is closed; the verification belongs in the October indexation check.",
    },
    {
      issue:
        "The web pixel, atom feed and app endpoints were open to crawling, blocked in robots.txt on September 30.",
      why:
        "Crawl effort spent on endpoints that will never rank is crawl effort not spent on collection and product pages, which is exactly the pressure the crawled-not-indexed backlog shows.",
      fix: "Watch the Search Console crawl stats through October and confirm that crawling shifts towards collection and product pages, then re-check the crawled-not-indexed count against the September 5 baseline.",
      developerNote: "The block is closed; the measurement runs against the frozen baseline.",
    },
    {
      issue:
        "The recovery collections carry titles written for a desktop result, and mobile clicks fell 30.4% this month.",
      why:
        "A title that truncates on a phone loses the words that tell a buyer the page has the size, material or finish they searched for, which costs clicks even from a good position.",
      fix: "Rewrite the mobile titles on the continuous and friction hinge recovery collections, then add internal links and run URL inspection on the same set.",
      developerNote: "Scheduled in the October plan with the SEO Strategist and the SEO Specialist.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://jefcomfg.com/, pulled through the API on October 5, 2026. Platform is Shopify.",
    "Current period: September 1-30, 2026. Previous period: August 1-31, 2026. September has 30 days and August has 31, and the two periods do not overlap.",
    "Total clicks (161 against 188) and impressions (8,723 against 11,233) are exact and equal the sum of the device rows. CTR 1.85% against 1.67%; average position 15.23 against 17.47, where a lower number is better.",
    "Devices: desktop 122 clicks against 131, mobile 39 against 56, tablet 0 against 1. Desktop impressions 6,301 against 7,896, mobile 2,391 against 3,286, tablet 31 against 51. Desktop carried 75.8% of clicks against 69.7%.",
    "Query groups: searches naming Jefco (queries containing 'jefco') 49 clicks against 41; other named searches 14 against 27; searches Google does not show 98 against 120. Google withholds rare queries for privacy: they were 60.9% of September clicks and 63.8% of August clicks, and their brand status is unknown, so no brand share of all clicks is stated in this report. Of the clicks on searches Google does show, 77.8% named Jefco; that is not a share of all clicks. Brand impressions were 846 against 999, and impressions on searches that do not name Jefco were 7,877 against 10,234, a figure that includes the withheld searches.",
    "Page movers by clicks: homepage 88 against 96, carbon fiber stock hinges 12 against 22, custom hinge order 6 against 3, stainless steel continuous hinges 5 against 3, hinges overview 5 against 2, finishes 4 against 6, stainless steel uneven leaf butt hinge product page 4 added, aluminum continuous hinges 3 against 6, butt stock hinges 3 against 2, titanium continuous hinges 3 against 7.",
    "Page movers by impressions: aluminum continuous hinges 899 against 1,459; stainless steel continuous hinges 768 against 1,066; homepage 2,151 against 2,401; butt stock hinges 344 against 585; finishes 280 against 492; custom hinge order 477 against 629; carbon fiber stock hinges 363 against 364.",
    "Query movers: carbon fiber hinge 1 click against 5 at average position 4.3 against 6.4; carbon fiber piano hinge 1 against 3 at 5.8 against 15.8; titanium hinges 1 against 2; custom hinge manufacturers 2 clicks at position 5.0.",
    "Organic sessions: GA4 property 288380673, Organic Search channel, 273 in September and 327 in August. All channels: 1,139 against 770, so organic was 24.0% of sessions in September and 42.5% in August. The all-channel rise comes from channels other than organic search and appears here as context only.",
    "GA4 records zero ecommerce purchases and zero revenue on every channel in both months, so no revenue or order figure in this report comes from GA4. The property's only configured key event is Two_Plus_Pages_Viewed, a two-page-view engagement signal (85 on organic in September against 108 in August). It measures engagement, not sales or enquiries, and is not reported as a conversion or a lead.",
    "Online sales: the Shopify store recorded 4 orders and $68.31 in total sales across the twelve months to September 29, 2026, with no orders in August or September 2026. The storefront is therefore not a sales channel for this account, no revenue figure appears in this report, and none is estimated from traffic.",
    "Quote requests: the homepage carries 13 Request a Quote links. No event currently fires on those submissions, so quote requests are not counted in GA4 and cannot yet be attributed to organic search. This is the first measurement deliverable.",
    "Completed work comes from ClickUp tasks closed in September 2026 on the Jefco Manufacturing task list. Template checklists and administrative items are excluded as outside SEO.",
    "The October plan items (47 collection pages, 147 crawled-not-indexed pages, 14 not-found URLs, legacy collections and redirects, mobile titles, internal links and URL inspection, carbon fiber page updates, industry link target list) come from the road map and the September recovery plan.",
  ],
};
