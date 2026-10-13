import type { SeoStoryReportData } from "@/lib/reports/types";

// Big Dawg Bats, September 2026. Built from output/big-dawg-bats-september-2026/data.json
// (GSC API, GA4 Data API and ClickUp, pulled 2026-10-05). Calendar months only: September 1-30
// against August 1-31, with no overlap.
// Year over year: output/big-dawg-bats-september-2026/gsc-2025-09.json (same property, September 2025
// with August 2025). September 2025 fell 11.6% from August 2025 against this year's 13.2%, so the
// August to September drop is seasonal, and September 2026 is 36.5% ahead of September 2025 on clicks,
// 59.2% on impressions, at average position 7.23 against 13.78. Those figures sit in the narrative,
// the KPI business-meaning lines and dataNotes only, never in kpiRows values or chart series, because
// the validator traces those against data.json and the 2025 pull is a separate file.
// Traffic numbers are never attributed to the Deep SEO Analysis: its traffic figures were built by
// summing query rows and understate the site. Every traffic figure here comes from the Search Console
// API, including the July 2026 peak of 4,058 clicks, which was verified there directly.
// The bat rolling service page (/products/ultimate-break-in) is the one real decline in the account and
// the client's second priority: 125 clicks across July to September 2026 against 361 in the same three
// months of 2025 (-65.4%), September 36 against 84, impressions 2,207 against 6,347, position 7.3
// against 9.7. Three-month figures come from a Search Console API page-dimension check; the single
// month figures come from the two monthly pulls saved with this report.
// First full month of the engagement. Everything closed in September is onboarding and diagnosis
// (intake interview, Deep SEO Analysis, kickoff, three month roadmap, full-site keyword research,
// Shopify default robots rules restored, Search Console baseline frozen), so the traffic change is
// reported as the starting point and is not claimed as a result of the work in either direction.
// completedWork evidence lines are written from the closing comments on each ClickUp task. Internal
// items are left out: the Pulse property mapping, a site scraping tool feasibility estimate, and an
// account admin thread about scope and approvals. Deliverable links are described, not pasted.
// Revenue treatment: ga4-organic. GA4 Organic Search revenue is labeled as GA4 everywhere, with the
// Shopify admin reconciliation still pending because the store handle is not on file, and with the
// 26 order sample called out so a revenue swing is never read as a trend.
// Brand reading: Google hides the query behind 71.3% of September clicks and 69.1% of August's, so
// the three way query visibility split (brand 32/36, other named searches 593/739, searches Google
// does not show 1,550/1,731) is used everywhere instead of a brand share of total clicks.
export const bigDawgBatsSeptember2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "The charts below compare September 1-30 with August 1-31 in Google Search Console. September has 30 days and August has 31. Because the end of the season pulls every month down, the same month last year is reported next to each headline figure in the text. The revenue figures come from GA4 and are labeled as GA4, because the Shopify admin figures are not yet in the comparison.",
    title: "Organic search performance, September vs August, with last September beside it",
  },

  meta: {
    action:
      "Resubmit sitemap.xml in Search Console now that the robots file is correct, then work the October build: the rolled bats hub and the four rolled collection rewrites, the approved redirect map, the indexation triage against the new baseline, the rolled bat feed titles, the restricted term cleanup and the homepage heading. Start the recovery plan for the bat rolling service page, which is the one page in real decline, and confirm the Shopify store handle so organic revenue can be read from the store and checked against GA4.",
    client: "Big Dawg Bats",
    coverHeadline:
      "Organic clicks fell 13.2% to 2,175 from August, which is what the end of the season did last year too, and the site sits 36.5% above September 2025 with the average position at 7.23 against 13.78 a year ago. One page is in real decline: the bat rolling service page took 125 clicks across July to September against 361 in the same months of 2025, down 65.4%.",
    currentPeriod: "September 1-30, 2026",
    previousPeriod: "August 1-31, 2026",
    property: "sc-domain:bigdawgbatrolling.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console (API) + Google Analytics 4 (API) + ClickUp delivery records",
  },

  executiveSummary:
    "September is the starting line, not a verdict. Everything that closed this month was diagnosis, and nothing that moves rankings was live yet, so none of these numbers is a result of the plan.\n\n- Against August: clicks 2,175 against 2,506, down 13.2%. Impressions down 9.5% to 99,407.\n- Against last September: clicks up 36.5%, impressions up 59.2%, average position 7.23 against 13.78.\n- The season, not a problem: last September fell 11.6% from August too, and clicks peaked at 4,058 in July.\n- Where the loss sits: one article, the 2027 Atlas 2 review, carries 9,965 of the 10,448 impressions lost.\n- What grew: the 2027 Soldier Tank 3 review went from 25 clicks to 70, and four new pages earned 106.\n- The one real decline: bat rolling, your second priority. 125 clicks from July to September against 361 a year ago, down 65.4%. It ranks better and is shown to far fewer people.\n- Revenue: $5,056.06 from organic search against $3,412.80, on 26 orders against 30. Bigger baskets, not more orders, and 26 orders is a sample rather than a trend.\n- One caution: Google hides the search behind 71.3% of clicks, so no brand share can be stated as fact.\n\nOctober is the first real test: resubmit sitemap.xml, get the October build live, and start the bat rolling recovery.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Clicks fell 13.2% from August to 2,175, which is the seasonal pattern (last September fell 11.6%), and sit 36.5% above September 2025. Impressions were 99,407, down 9.5% on the month and up 59.2% on the year. One bat review article carries 9,965 of the 10,448 impressions lost in the month.",
      status: "positive",
    },
    {
      area: "Revenue",
      statement:
        "GA4 organic revenue rose 48.2% to $5,056.06 on 26 purchases against 30, so the average order grew from $113.76 to $194.46. With 26 orders this is an order sample, not a revenue trend, and it is GA4's measurement, not yet checked against the Shopify admin.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved from 8.42 to 7.23 on the month and from 13.78 a year ago, so the site is roughly six places higher than last September. The flagship review page improved from 7.4 to 6.7.",
      status: "positive",
    },
    {
      area: "The one real decline",
      statement:
        "The bat rolling service page took 125 clicks across July to September against 361 in the same months of 2025, down 65.4%, and was shown 2,207 times in September against 6,347. It ranks better than a year ago, so this is lost reach, not lost quality. Recovery is scheduled work rather than something already in flight: the first changes land in November.",
      status: "watch",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Judge the account against the same month last season, not against the peak of summer.",
      name: "Organic traffic and visibility",
      started:
        "August closed at 2,506 organic clicks on 109,855 impressions, with blog reviews and the service product pages carrying the site.",
      work:
        "September was compared with August in Search Console by page, by device and by the three query groups Google reports: searches naming the brand, other named searches, and searches Google does not show. The same two months of 2025 were pulled from the same property so the month could be read against last season, and property totals were recorded as a baseline at month end.",
      result:
        "Clicks came in at 2,175 and impressions at 99,407, with average position improving from 8.42 to 7.23. Against September 2025 the site is well ahead: 1,593 clicks, 62,460 impressions and an average position of 13.78 a year ago, so clicks are up 36.5%, impressions 59.2%, and the site ranks about six places higher. Last season fell the same way into September, by 11.6% against this year's 13.2%, and clicks peaked at 4,058 in July, so the August comparison reflects the end of the season. Within the month the loss is concentrated: the 2027 Louisville Slugger Atlas 2 review lost 116 clicks and 9,965 impressions, 95% of the whole impression loss, while the end cap replacement product page lost 72, the homepage 41 and the Combat Spec comparison 31. Against that, the 2027 Soldier Tank 3 review grew from 25 clicks to 70, and four pages that earned nothing in August earned 106 clicks: the bat restrictor ring article (30), the bat compression number article (29), the ring removal service page (28) and the drop 5 bats article (19).",
      next:
        "Report every month against the same month last season from here on, with the month before beside it, and keep adding to the baseline so the comparison deepens. Watch the two review pages that moved most, the Atlas 2 article downwards and the Soldier Tank 3 article upwards, and establish whether the Atlas 2 article lost position in searches it used to appear in or whether fewer people searched for that bat.",
    },
    {
      businessPriority: "Recover the page that sells the service the business is known for.",
      name: "Bat rolling service page",
      started:
        "The bat rolling service page, /products/ultimate-break-in, is the second of the business priorities and the only page in the account whose decline the season does not explain.",
      work:
        "The page was checked in Search Console against the same months of 2025, over a three month window and for September alone, on clicks, impressions and average position.",
      result:
        "The page took 125 clicks across July to September 2026 against 361 in the same three months of 2025, a fall of 65.4%, and 36 clicks in September against 84 a year ago. It was shown 2,207 times in September against 6,347, a fall of 65.2%, while its average position improved from 9.7 to 7.3. So it ranks better than it did and is shown to roughly a third as many people. Bat rolling demand itself has not gone: bat rolling near me, bat rolling service and bat roller all still bring clicks, and the rolling and break-in articles continue to earn traffic around the service.",
      next:
        "Recovery is scheduled work rather than something already in flight, with the first changes in November and weekly tracking from October. The plan is one clear bat rolling page: lead the title and heading with bat rolling, keep break-in in the body, point the rolling articles at it with internal links, and remove the competing rolling pages from the picture so one page carries the service. Then track the page weekly against the same months of 2025.",
    },
    {
      businessPriority: "Turn one agreed plan tied to bat sales into the next three months of work.",
      name: "Diagnosis and the three month plan",
      started:
        "The account came in with traffic earned mostly by blog articles and service pages rather than by bat product and collection pages. In September the five biggest pages took 42.5% of all organic clicks, and three of the five are blog articles.",
      work:
        "The recorded intake call captured the commercial picture, the Deep SEO Analysis examined indexation, Google Shopping, content and site structure, the full-site keyword research mapped every commercial search to a page, and the kickoff turned all of it into a three month roadmap with six priorities.",
      result:
        "All of it is delivered and approved as the plan of record: protect and fix in September, build rolled bats in October, consolidate and grow in November. The diagnosis found the biggest commercial gap outright. Rolled bats is the first priority and there is no rolled bats page at all, so those searches land on a blog article and the homepage, and the collection address returns a not-found error. Keyword research estimates about 590 searches a month for rolled bats, with small specialist sites ranking for it.",
      next:
        "Work the October build in order of revenue impact: the rolled bats hub, the four rolled collection rewrites, the shop-this-bat links on the top review articles, and the rolled bat feed titles in Google Shopping.",
    },
    {
      businessPriority: "Give rolled bats, the highest value order, a page a shopper can buy from.",
      name: "Bat pages and content",
      started:
        "Blog reviews carry most of the site's traffic while bat collection pages carry little of it, and the rolled bats collection does not exist as a page.",
      work:
        "The keyword research set the page map: one rolled bats hub linking every rolled collection, rewrites of the rolled baseball, softball, slowpitch and fastpitch collections, one clear bat rolling page and one clear glove steamer page.",
      result:
        "The plan is written and scheduled, and September's numbers show why it matters. The review articles that carry the traffic rise and fall with interest in individual bat models, which is what produced this month's decline, while the service and repair pages that sit closer to a purchase held better: the knob replacement service page took 30 clicks at average position 4.5 and the ring removal page 28 clicks at 4.0.",
      next:
        "Build the rolled bats hub and the collection copy in October, add a shop-this-bat block to the top review articles so reader traffic reaches a bat in stock, then merge the overlapping rolling, shaving and compression articles in November.",
    },
    {
      businessPriority: "Let Google crawl and show the pages that sell bats.",
      name: "Technical foundations",
      started:
        "The theme's robots file had replaced Shopify's default rules with six custom lines, which is the likely cause of most of the 1,577 excluded pages. On top of that, 116 old addresses return a not-found error, the homepage's main heading reads Attention, collection headings carry a Collection prefix, and 124 products are disapproved in Google Shopping.",
      work:
        "The robots file was rebuilt to print all seven of Shopify's default agent groups plus the sitemap line, keeping five custom parameter rules once each and removing a duplicate, and it was checked on the live site on September 24. The redirect map and the indexation export were prepared for approval and triage.",
      result:
        "The robots file is correct and live: it returns 200 with 170 lines and seven agent groups, sitemap.xml returns 200, search pages keep the instruction that keeps them out of results, and the previous file is backed up. One step remains before Google acts on it, which is resubmitting sitemap.xml in Search Console. The ranking data is consistent with a reach problem rather than a quality problem: average position improved by more than a place month over month and by about six places on the year.",
      next:
        "Resubmit sitemap.xml, then implement the approved redirect map, export and classify the indexation buckets against the new baseline, fix the Attention heading and the Collection prefix, rewrite the rolled bat feed titles, and clear the restricted term from titles and metadata.",
    },
    {
      businessPriority: "Count organic bat orders in the store's own numbers, not only in GA4.",
      name: "Revenue measurement",
      started:
        "GA4 was confirmed to record ecommerce purchases with revenue for organic search, which makes a monthly organic revenue figure possible from the first report.",
      work:
        "GA4 was pulled for both months by channel, organic against all channels, for sessions, purchases and revenue, and checked for direction against Search Console.",
      result:
        "GA4 records $5,056.06 from organic search in September against $3,412.80 in August on 26 purchases against 30, so organic was 30.2% of the $16,755.79 GA4 tracked across all channels, against 23.9% in August. Organic sessions fell 20.4% to 2,853 while all-channel sessions rose 21.0% to 10,953, so organic dropped to 26.0% of visits from 39.6%. The gap in this picture is the store itself: the figures above are GA4's measurement and have not been checked against the Shopify admin.",
      next:
        "Confirm the Shopify store handle so Total sales by referrer becomes the source of truth for organic revenue, with GA4 as the check on it, and report organic bat orders separately from service orders once the product grouping is set.",
    },
  ],

  completedWork: [
    {
      completedOn: "September 10, 2026",
      evidence:
        "Closed September 10. A recorded intake call captured the commercial picture: the 2027 bat goal, rolled bats as the first priority and bat rolling as the second, the wording the agreement restricts, and the platforms the store sells through. The recording was shared with the team so the plan was built from what was actually said.",
      owner: "Account Manager",
      title: "Completed the SEO intake interview",
    },
    {
      completedOn: "September 15, 2026",
      evidence:
        "Closed September 15. A full diagnosis of indexation, Google Shopping, site structure and content: 1,577 pages excluded from Google's index, 124 disapproved products against a feed holding 6,133 items for 3,082 variants, the rolled bats collection address returning a not-found error, 116 dead addresses, and headings that do not say what the page sells. Its structural findings became the kickoff plan and the roadmap.",
      owner: "Head of SEO",
      title: "Completed the Deep SEO Analysis",
    },
    {
      completedOn: "September 15, 2026",
      evidence:
        "Closed September 15. Published as the kickoff report: six priorities, each tied to selling bats, with the evidence behind each one and the words the agreement allows written in as a rule for every page we touch.",
      owner: "SEO Strategist",
      title: "Delivered the SEO kickoff plan",
    },
    {
      completedOn: "September 15, 2026",
      evidence:
        "Closed September 15. Delivered as a shared spreadsheet: three months sequenced as protect and fix, build rolled bats, then consolidate and grow, with a named deliverable and a business outcome for each month. It is also where the Search Console baseline now lives.",
      owner: "SEO Strategist",
      title: "Built the three month SEO roadmap",
    },
    {
      completedOn: "September 15, 2026",
      evidence:
        "Closed September 15. Delivered as a shared document. Every commercial search for rolled, shaved and repaired bats and for the rolling and steaming services was mapped to the page that should own it, which is what produced the October page build list.",
      owner: "SEO Strategist",
      title: "Completed the full-site keyword research",
    },
    {
      completedOn: "September 25, 2026",
      evidence:
        "Closed September 25, checked on the live site on September 24. The theme file had replaced Shopify's defaults with six custom lines. It now prints all seven of Shopify's default agent groups plus the sitemap line, keeps five custom parameter rules once each and drops a duplicate, and leaves the instruction that keeps search pages out of results untouched. The live file returns 200 with 170 lines and seven groups, sitemap.xml returns 200, and the previous file is backed up. One step remains: resubmitting sitemap.xml in Search Console.",
      owner: "Developer",
      title: "Restored Shopify's default robots rules",
    },
    {
      completedOn: "September 30, 2026",
      evidence:
        "Closed September 30. Search Console property totals through September 27 were recorded in the roadmap's own baseline tab, with the full month added once Search Console finalised it. This is the fixed point every later month is measured against, and it is what makes the comparison with the same month last year possible.",
      owner: "SEO Strategist",
      title: "Recorded the Search Console baseline",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "2,506",
      current: "2,175",
      change: "-13.2%",
      businessMeaning:
        "Down 331 on August, up 36.5% on September 2025, which took 1,593. Last season fell 11.6% into September too, so the monthly drop is the end of the season. One article carries 116 of the 331, and September has one fewer day than August.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "109,855",
      current: "99,407",
      change: "-9.5%",
      businessMeaning:
        "The site was shown in 10,448 fewer searches than in August and 59.2% more than in September 2025, which had 62,460. Of the monthly loss, 9,965 sit on the single Atlas 2 review article, so reach narrowed on specific bat model reviews rather than across the site.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "8.42",
      current: "7.23",
      change: "1.19 better",
      businessMeaning:
        "More than a full place higher than August and about six places higher than September 2025, which averaged 13.78. This is the clearest sign the month was about how many searches the site appeared in, not how well it did in them.",
      status: "positive",
    },
    {
      metric: "Click-through rate",
      previous: "2.28%",
      current: "2.19%",
      change: "0.09 points lower",
      businessMeaning:
        "Clicks fell a little faster than impressions, so a slightly smaller share of the searches the site appeared in turned into visits. September 2025 ran at 2.55% on a third fewer impressions, which is the normal trade: more reach brings in more searches the site ranks lower for.",
      status: "watch",
    },
    {
      metric: "Bat rolling service page clicks",
      previous: "38",
      current: "36",
      change: "-5.3%",
      businessMeaning:
        "Steady against August, but this is the one page in real decline: 125 clicks across July to September against 361 in the same months of 2025, down 65.4%, and 36 in September against 84 a year ago. It ranks better than it did (7.3 against 9.7), so it is being shown far less, not chosen less.",
      status: "watch",
    },
    {
      metric: "Clicks from searches naming Big Dawg Bats",
      previous: "36",
      current: "32",
      change: "-11.1%",
      businessMeaning:
        "Searches that name the brand are a very small part of this site's traffic, 32 of the 625 clicks whose query Google shows. They are stable, and nothing in this month's movement comes from them.",
      status: "watch",
    },
    {
      metric: "Clicks from other named searches",
      previous: "739",
      current: "593",
      change: "-19.8%",
      businessMeaning:
        "The searches that do not name the brand and that Google does show gave 146 fewer clicks. Bat model reviews account for most of it, including the Atlas 2.0 and Combat Spec families.",
      status: "watch",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "1,731",
      current: "1,550",
      change: "-10.5%",
      businessMeaning:
        "Google withholds rare queries for privacy, and they carried 71.3% of September clicks against 69.1% in August. Their brand status is unknown, and they hold 181 of the 331 clicks lost, so most of the monthly decline cannot be traced to named searches.",
      status: "watch",
    },
    {
      metric: "Clicks on the Atlas 2 review article",
      previous: "420",
      current: "304",
      change: "-27.6%",
      businessMeaning:
        "The biggest single page on the site, 14.0% of all organic clicks. It lost 116 clicks while its average position improved from 7.4 to 6.7, so it ranked better and was shown far less often.",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "3,583",
      current: "2,853",
      change: "-20.4%",
      businessMeaning:
        "GA4 agrees with Search Console on direction, which is the check that matters. All-channel sessions rose 21.0% to 10,953 in the same month, so organic fell to 26.0% of visits from 39.6%.",
      status: "watch",
    },
    {
      metric: "Organic revenue (GA4)",
      previous: "$3,412.80",
      current: "$5,056.06",
      change: "+48.2%",
      businessMeaning:
        "GA4's measurement of revenue from organic search, up $1,643.26 on four fewer purchases. It rests on 26 orders, so treat it as an order sample rather than a revenue trend, and it has not yet been checked against the Shopify admin.",
      status: "positive",
    },
    {
      metric: "Organic purchases (GA4)",
      previous: "30",
      current: "26",
      change: "-13.3%",
      businessMeaning:
        "Four fewer orders from organic search, falling at the same rate as clicks. Under 30 orders a month, a single large or small basket moves the revenue figure noticeably, which is exactly what happened here.",
      status: "watch",
    },
    {
      metric: "Average organic order value (GA4)",
      previous: "$113.76",
      current: "$194.46",
      change: "+70.9%",
      businessMeaning:
        "The whole revenue gain is here: baskets were larger, not more numerous. Worth watching for two or three months before treating it as the new normal, since a few big orders can produce it.",
      status: "positive",
    },
    {
      metric: "All-channel revenue (GA4)",
      previous: "$14,288.36",
      current: "$16,755.79",
      change: "+17.3%",
      businessMeaning:
        "Context for the organic figure. Total tracked revenue rose on 87 purchases against 99, and organic search accounted for 30.2% of it against 23.9% in August.",
      status: "positive",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console domain property sc-domain:bigdawgbatrolling.com through the API, September 1-30 against August 1-31, 2026. September has 30 days and August has 31, and the two periods do not overlap. Clicks (2,175 against 2,506) and impressions (99,407 against 109,855) are exact and equal the sum of the device rows. CTR and average position are Search Console's own averages, and a lower position number is better. The year over year figures (September 2025: 1,593 clicks, 62,460 impressions, average position 13.78, CTR 2.55%) come from the same property through the same API and appear in the text and the notes only, not in the table values or the charts. Brand searches are queries containing big dawg or bigdawg. Google withholds rare queries for privacy: 1,550 of 2,175 September clicks (71.3%) and 1,731 of 2,506 August clicks (69.1%) came from searches Google does not show, so no brand share of total clicks is stated as fact anywhere in this report. Of the 625 September clicks whose query Google does show, 5.1% named the brand, which is a share of visible searches only and not a share of all clicks. Revenue, purchases and sessions come from GA4 property 403496043, Organic Search channel, and every one of those figures is GA4's own measurement. The average organic order value ($194.46 against $113.76) is GA4 organic revenue divided by GA4 organic purchases. The Shopify admin has not been reconciled against GA4 yet, because the store handle needed to reach that admin is not on file, so the GA4 revenue figures are a measurement to confirm rather than the store's own books.",

  conversionPlan: {
    owner: "Account Manager + SEO Strategist",
    sourcePriority:
      "The Shopify admin, with GA4 as the check on it. The first step is the store handle, which is what the Total sales by referrer report needs to be reachable. Once revenue can be read from the store, organic bat orders are separated from rolling, shaving and repair service orders, so the report can show which of the two the search work is growing.",
    nextReportExpectation:
      "The next report shows organic revenue from the store next to the GA4 figure, with any gap between them explained, and splits bat orders from service orders. Order counts stay in the report beside every revenue figure, because at this volume the order count is what says whether a revenue change is real.",
  },

  performanceCharts: {
    growth: {
      title: "Down on the month, well up on the year",
      insight:
        "Clicks came in at 2,175 against 2,506, a loss of 331, while impressions fell 9.5% to 99,407. Against September 2025 both are far higher: 1,593 clicks and 62,460 impressions a year ago, so clicks are up 36.5% and impressions 59.2%. Last September also fell from August, by 11.6%. September has 30 days and August 31.",
      series: [
        {
          change: "-13.2%",
          current: 2175,
          currentDisplay: "2,175",
          label: "Organic clicks",
          previous: 2506,
          previousDisplay: "2,506",
          status: "watch",
        },
        {
          change: "-9.5%",
          current: 99407,
          currentDisplay: "99,407",
          label: "Search impressions",
          previous: 109855,
          previousDisplay: "109,855",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 2506,
      baselineDisplay: "2,506",
      contributions: [
        { display: "-4", label: "Searches naming the brand", value: -4 },
        { display: "-146", label: "Other named searches", value: -146 },
        { display: "-181", label: "Searches Google does not show", value: -181 },
      ],
      insight:
        "Searches naming the brand lost 4 clicks, other named searches 146, and the searches Google does not show 181, so they carry the largest share of the month's decline. Google withholds those rare queries for privacy and they were 71.3% of September clicks, so their brand status is unknown and this chart does not claim a brand versus non-brand split of the month.",
      title: "The 331 click difference, by type of search",
      total: 2175,
      totalDisplay: "2,175",
    },
    homepage: {
      title: "One review article carries the month",
      insight:
        "The 2027 Louisville Slugger Atlas 2 review is the site's biggest page at 304 clicks, 14.0% of the total. It lost 116 clicks and 9,965 impressions, which is 95% of the site's entire impression loss, while its average position improved from 7.4 to 6.7.",
      series: [
        {
          change: "-27.6%",
          current: 304,
          currentDisplay: "304",
          label: "Clicks",
          previous: 420,
          previousDisplay: "420",
          status: "watch",
        },
        {
          change: "-36.8%",
          current: 17141,
          currentDisplay: "17,141",
          label: "Impressions",
          previous: 27106,
          previousDisplay: "27,106",
          status: "watch",
        },
        {
          change: "0.7 better",
          current: 6.7,
          currentDisplay: "6.7",
          label: "Average position",
          previous: 7.4,
          previousDisplay: "7.4",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Both devices fell at the same rate, reach only on mobile",
      insight:
        "Desktop clicks fell 13.5% and mobile 13.6%, so the decline is not a device problem. Reach is: mobile impressions fell 15.9% to 66,560 while desktop impressions rose 7.4% to 32,175. Mobile still carries 76.8% of all clicks.",
      series: [
        {
          change: "-13.5%",
          current: 481,
          currentDisplay: "481",
          label: "Desktop",
          previous: 556,
          previousDisplay: "556",
          status: "watch",
        },
        {
          change: "-13.6%",
          current: 1671,
          currentDisplay: "1,671",
          label: "Mobile",
          previous: 1934,
          previousDisplay: "1,934",
          status: "watch",
        },
        {
          change: "+43.8%",
          current: 23,
          currentDisplay: "23",
          label: "Tablet",
          previous: 16,
          previousDisplay: "16",
          status: "positive",
        },
      ],
    },
    revenue: {
      title: "Revenue rose because baskets grew, not because orders did",
      insight:
        "GA4 recorded $5,056.06 from organic search against $3,412.80, up 48.2%, on 26 purchases against 30. The average order went from $113.76 to $194.46, which is where the entire gain sits. At 26 orders this is an order sample, not a revenue trend.",
      channelContext:
        "Every figure here is GA4's own measurement of the Organic Search channel, labeled as GA4 because the Shopify admin has not been reconciled against it yet: the store handle needed to reach that admin is not on file. For context, GA4 tracked $16,755.79 across all channels in September against $14,288.36 in August, on 87 purchases against 99, so organic search accounted for 30.2% of tracked revenue against 23.9%.",
      series: [
        {
          change: "+48.2%",
          current: 5056.06,
          currentDisplay: "$5,056.06",
          label: "Organic revenue (GA4)",
          previous: 3412.8,
          previousDisplay: "$3,412.80",
          status: "positive",
        },
        {
          change: "-13.3%",
          current: 26,
          currentDisplay: "26",
          label: "Organic purchases",
          previous: 30,
          previousDisplay: "30",
          status: "watch",
        },
        {
          change: "+70.9%",
          current: 194.46,
          currentDisplay: "$194.46",
          label: "Average order value",
          previous: 113.76,
          previousDisplay: "$113.76",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "The bat rolling service page has lost about two thirds of its search traffic year over year: 125 clicks across July to September 2026 against 361 in the same three months of 2025, and 36 clicks in September against 84. Impressions fell from 6,347 to 2,207 while its average position improved from 9.7 to 7.3.",
      impact:
        "This is the second of the business priorities and the one decline the season does not explain. The page ranks better than it did, so the problem is how often Google shows it, not where it sits when shown. Every month it stays down is service revenue the site used to earn.",
      remediation:
        "Make it the single bat rolling page: lead the title and heading with bat rolling, keep break-in in the body, link the rolling articles to it, and stop the other rolling pages competing with it. Then track it weekly against the same months of 2025.",
      eta: "Recovery work is scheduled and not yet started. First changes in November, with a weekly read from October.",
    },
    {
      obstacle:
        "Organic revenue can only be read from GA4 right now. The Shopify store handle needed to open the admin's Total sales by referrer report is not on file.",
      impact:
        "Every revenue figure in this report is one tool's measurement with nothing to check it against, and GA4 and store books usually differ. It also means organic bat orders cannot yet be separated from rolling, shaving and repair service orders, which is the split that tells the search work apart from the service business.",
      remediation:
        "Confirm the Shopify store handle and the admin access that goes with it, then take organic revenue from Total sales by referrer and keep GA4 as the check.",
      eta: "October, in time for the next report.",
    },
    {
      obstacle:
        "The season will keep pushing month against month comparisons down. Clicks peaked at 4,058 in July and fell to 2,506 in August and 2,175 in September, and last year followed the same path, with September 2025 11.6% below August 2025.",
      impact:
        "For as long as the season is falling away, a straight comparison with the month before will read as decline whatever the work achieves, which makes it hard to see what is working. Two Septembers are a pattern rather than a law, so the year over year reading gets firmer with each season.",
      remediation:
        "Report every month against the same month last season as the headline comparison, keeping the month before beside it, and keep extending the baseline so the year over year view covers more of the account.",
      eta: "In place from this report onwards.",
    },
    {
      obstacle:
        "Google withholds the query behind 71.3% of clicks, and only 625 September clicks have a query attached.",
      impact:
        "Query-level diagnosis covers less than a third of the traffic, so the month has to be read mostly through pages and devices. It also means no brand share of total clicks can be stated honestly.",
      remediation:
        "Keep reading the month by page and device, and use the keyword research and rank tracking for the commercial searches that matter rather than relying on what Search Console shows at query level.",
      eta: "Ongoing, built into every report.",
    },
    {
      obstacle:
        "The redirect map is waiting on approval before it can ship, and 116 old addresses still return a not-found error.",
      impact:
        "Dead addresses waste any links and ranking history pointing at them, and the renames planned for the rolled bat collections cannot go live safely until the redirects are in place first.",
      remediation:
        "Approve the redirect map so it can be implemented, then confirm each redirect resolves to the closest live page before any collection is renamed.",
      eta: "Early October.",
    },
    {
      obstacle:
        "124 products are disapproved in Google Shopping, 121 of them blocked as product page unavailable, and the feed holds 6,133 items for 3,082 variants.",
      impact:
        "Disapproved products do not appear in Shopping results at all, which removes the listings that sit above organic results for the exact bat searches this plan targets.",
      remediation:
        "Export the disapproval reasons, keep one data source, resync the Shopify Google channel, then rewrite the rolled bat feed titles as rolled, year, model.",
      eta: "Feed resync in early October, titles by mid October.",
    },
  ],

  technicalItems: [
    {
      issue:
        "The theme's robots file had replaced Shopify's default rules with six custom lines, which is the likely cause of most of the 1,577 excluded pages. It was rebuilt and is live and correct, and sitemap.xml now needs resubmitting.",
      why:
        "When the crawl rules are wrong, Google spends its visits on addresses that will never rank and skips bat pages that should. Until the sitemap is resubmitted, Google has no prompt to recrawl under the corrected rules.",
      fix:
        "Resubmit sitemap.xml in Search Console, then export the indexation buckets, classify every excluded page as fix, consolidate or remove, and compare the indexed count against the new baseline.",
      developerNote:
        "The file now prints all seven Shopify default agent groups plus the sitemap line, keeps five custom parameter rules once each, and drops a duplicate. Verified live on September 24: 200, 170 lines, seven groups, sitemap.xml 200, previous file backed up. The resubmission sits with the reporting and SEO side; the export and triage with the developer in early October.",
    },
    {
      issue:
        "The bat rolling service page is down about two thirds year over year while ranking better, and several other pages compete with it for the same searches.",
      why:
        "Bat rolling is the service that brings buyers in, and splitting it across a product page, a service page, a collection and a dozen articles means no single page carries the weight for those searches.",
      fix:
        "Lead the page title and main heading with bat rolling, keep break-in and the product name in the body, link the rolling articles to it, and decide which of the competing rolling pages stay for navigation only.",
      developerNote: "Scheduled work, not yet started. Title and heading changes with the developer, article links with the SEO Specialist.",
    },
    {
      issue: "116 old addresses return a not-found error, and the redirect map for them is waiting on approval.",
      why:
        "Each dead address throws away the links and ranking history pointing at it, and renaming a collection without redirects in place first loses that collection's history too.",
      fix: "Approve and implement the redirect map, sending each old address to the closest live page, and test every redirect before the rolled collection renames go live.",
      developerNote: "Ready for approval, then implementation by the developer.",
    },
    {
      issue:
        "The rolled bats collection address returns a not-found error, so the first priority on the plan has no page to land on.",
      why:
        "Rolled bats searches currently land on a blog article and the homepage, where a shopper cannot pick a rolled bat and buy it. Keyword research estimates about 590 searches a month for the term, with small specialist sites ranking for it.",
      fix: "Build the rolled bats hub linking every rolled collection, with an honest explainer and an FAQ, and rewrite the rolled baseball, softball, slowpitch and fastpitch collections.",
      developerNote: "Scheduled for October with the SEO Specialist and the developer.",
    },
    {
      issue:
        "The homepage's main heading reads Attention, product pages repeat it as a second heading, and collection headings carry a Collection prefix.",
      why:
        "A page's main heading is one of the clearest signals of what the page is about, for a shopper scanning and for Google. Headings that say nothing about bats waste that signal on every page of the store.",
      fix: "Replace the Attention heading in the theme with one that names what the page sells, and remove the Collection prefix from collection headings.",
      developerNote: "Scheduled for mid October with the developer.",
    },
    {
      issue:
        "The restricted term named in the agreement still appears in 3 product titles, 75 product addresses and some older metadata.",
      why:
        "Wording the agreement does not allow is a commercial risk on the pages and listings that sell the most, and it has to be cleared before any new copy ships.",
      fix: "Clear the term from titles, search titles, descriptions and image text using the approved-language sheet, leaving addresses unchanged unless the client decides otherwise and only with redirects ready first.",
      developerNote: "Scheduled for October with the developer, after the approved-language sheet is signed off.",
    },
    {
      issue:
        "The product page bat setup options are hard to use, and the layout is being rebuilt as three columns.",
      why:
        "Mobile carries 76.8% of organic clicks, so a setup chooser that is hard to read on a phone sits between the traffic this report measures and an order.",
      fix: "Rebuild the bat setup options as three columns, then check the result on a phone before it ships.",
      developerNote: "In the October queue with the developer.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console domain property sc-domain:bigdawgbatrolling.com, pulled through the API on October 5, 2026. Platform is Shopify. Every traffic figure in this report comes from that API.",
    "Current period: September 1-30, 2026. Previous period: August 1-31, 2026. September has 30 days and August has 31, and the two periods do not overlap.",
    "Total clicks (2,175 against 2,506) and impressions (99,407 against 109,855) are exact and equal the sum of the device rows. CTR 2.19% against 2.28%; average position 7.23 against 8.42, where a lower number is better.",
    "Year over year comparison: Google Search Console API, the same domain property, September 1-30, 2025 with August 1-31, 2025 as its own comparison, saved beside this report's data. September 2025 took 1,593 clicks on 62,460 impressions at average position 13.78 and CTR 2.55%; August 2025 took 1,802 clicks on 73,533 impressions. So last season also fell from August into September, by 11.6% against this year's 13.2%. September 2026 against September 2025: clicks up 36.5%, impressions up 59.2%, average position 7.23 against 13.78. Impressions grew faster than clicks over the year, which is why CTR is lower. These figures appear in the narrative, the business-meaning lines and these notes only, not in the KPI table values or the charts, which are drawn from the September and August 2026 data file.",
    "Seasonality: Search Console shows clicks peaking at 4,058 in July 2026 and falling to 2,506 in August and 2,175 in September, and 2025 shows the same shape. Two Septembers are a pattern rather than a law, so the year over year reading gets firmer with each season and the month to month figures stay in the report beside it.",
    "Bat rolling service page: Google Search Console API, page dimension, https://www.bigdawgbatrolling.com/products/ultimate-break-in. Three month window July 1 to September 30: 125 clicks in 2026 against 361 in 2025, a fall of 65.4%. Single month September: 36 clicks in 2026 against 84 in 2025, with impressions 2,207 against 6,347 and average position 7.3 against 9.7. The three month figures come from a separate page-level check; the single month figures come from the two monthly pulls saved with this report. August 2026 for the same page was 38 clicks.",
    "Devices: desktop 481 clicks against 556, mobile 1,671 against 1,934, tablet 23 against 16. Desktop impressions 32,175 against 29,948, mobile 66,560 against 79,158, tablet 672 against 749. Mobile carried 76.8% of clicks against 77.2%.",
    "Query groups: searches naming the brand (queries containing big dawg or bigdawg) 32 clicks against 36; other named searches 593 against 739; searches Google does not show 1,550 against 1,731. Google withholds rare queries for privacy: they were 71.3% of September clicks and 69.1% of August clicks, and their brand status is unknown, so no brand share of all clicks is stated in this report. Of the 625 clicks whose query Google does show, 5.1% named the brand, which is not a share of all clicks. Brand impressions were 244 against 342.",
    "Page movers by clicks: 2027 Louisville Slugger Atlas 2 review 304 against 420; end cap replacements 156 against 228; homepage 188 against 229; Combat Spec H1 vs A1 comparison 147 against 178; USSSA Tank 3 review 111 against 137; 2027 Soldier Tank 3 BBCOR review 70 against 25; bat restrictor ring article 30 against 0; bat compression number article 29 against 0; ring removal 28 against 0; drop 5 bats article 19 against 0. The five biggest pages took 42.5% of all organic clicks, and three of the five are blog articles.",
    "Page movers by impressions: the Atlas 2 review lost 9,965 impressions (17,141 against 27,106), which is 95% of the site's 10,448 impression loss. The Soldier Tank 3 review gained 2,278 (3,827 against 1,549) and the glove steamer collection gained 4,206 (7,606 against 3,400).",
    "Revenue, purchases and sessions: GA4 property 403496043, Organic Search channel. Organic revenue $5,056.06 against $3,412.80, organic purchases 26 against 30, average organic order value $194.46 against $113.76. All channels: $16,755.79 against $14,288.36 on 87 purchases against 99, so organic was 30.2% of tracked revenue against 23.9%. Organic sessions 2,853 against 3,583; all-channel sessions 10,953 against 9,055, so organic was 26.0% of sessions against 39.6%.",
    "Every revenue and order figure in this report is GA4's own measurement and is labeled as GA4. The Shopify admin has not been reconciled against GA4 yet, because the store handle needed to reach that admin is not on file. Under 30 orders a month, one or two large baskets move the revenue figure, so the 48.2% revenue rise on four fewer orders is reported as an order sample rather than a revenue trend.",
    "Whether the store runs Google Ads alongside organic search is still to be confirmed. Untagged paid clicks can land in GA4's organic channel, which is a further reason the store's own referrer report is the figure to reconcile against.",
    "Search Console baseline: property totals through September 27, 2026 recorded in the roadmap's baseline tab on September 30, with the full month added once Search Console finalised the data. Later months are measured against it.",
    "Robots file: the live file at /robots.txt returns 200 with 170 lines and seven agent groups, and sitemap.xml returns 200, checked on September 24, 2026. Resubmitting sitemap.xml in Search Console is the remaining step.",
    "September is the first full month of this engagement, and the work closed in it is onboarding and diagnosis. No page, content or feed change that affects rankings was live for the month, so the traffic change here is the starting point and is not presented as a result of the work in either direction.",
    "Completed work comes from ClickUp tasks closed in September 2026 on the Big Dawg Bats task list, with each item described from the closing record on the task. Template checklists and administrative items are excluded as outside SEO.",
    "The October and November items (rolled bats hub and collection rewrites, bat rolling page consolidation, redirect map, indexation triage, Shopping feed titles, restricted term cleanup, heading fixes, product page layout, article merges) come from the three month roadmap and the full-site keyword research of September 15, 2026.",
  ],
};
