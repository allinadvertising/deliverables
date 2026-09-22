import type { SeoStoryReportData } from "@/lib/reports/types";

// Northland Visions, August 2026 vs July 2026. First report for this client.
// Every figure comes from output/northland-visions-august-2026/data.json (GSC API, GA4 Data API, ClickUp).
// Store revenue is WooCommerce Analytics > Orders, all channels (all-channel-context treatment), pulled 2026-09-21.
export const northlandVisionsAugust2026Report: SeoStoryReportData = {
  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report for Northland Visions. Google showed the site more often in August than in July, but fewer people clicked. The charts below show where the lost clicks sit: the largest known share on searches for the store's own name, and mostly on the homepage.",
    title: "More impressions, fewer clicks, and brand search took the biggest single hit",
  },

  meta: {
    action:
      "Find out why fewer people click the Northland Visions result when they search the store's name, then rewrite the homepage title and snippet. In parallel, compare GA4 purchases with WooCommerce orders for July and August, because the two disagree on direction.",
    client: "Northland Visions",
    coverHeadline:
      "Google clicks fell 18.8% to 1,616 in August, led by brand search: the store's name was shown as often as in July, but brand clicks fell from 297 to 141. Store orders held at 101 across all channels while net sales fell 31.0% to $8,509.48 on a smaller average order, a shift search data does not explain.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "sc-domain:northlandvisions.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console API + GA4 Data API (Organic Search channel) + ClickUp delivery records",
  },

  businessObjective:
    "Grow the online side of a Minneapolis store (beads, craft supplies and Native American goods) through organic search, while keeping the brand and local searches that bring people to the shop.",

  executiveSummary:
    "Google clicks fell 18.8% to 1,616 from 1,989, even though impressions rose 4.4% to 87,645. The biggest single loss was brand search: brand impressions held (899 vs 912) and the brand result still ranked near position 1, yet brand clicks fell 52.5% to 141. Other named searches lost 68 clicks, led by local store searches such as \"bead stores near me\" and a few product pages, and searches Google does not show lost 149. Those hidden searches are 65.2% of August clicks, so their brand status is unknown; they are usually long, specific searches, so most are likely non-brand. The homepage carried most of the drop (808 clicks vs 1,022). Search Console does not show why fewer people clicked the brand result, so that is the open problem and the first diagnostic task in the plan. Across all channels, WooCommerce orders held (101 vs 99) while net sales fell 31.0% to $8,509.48, because the average order fell to $84.25 from $124.50. That is a whole-store figure that includes Google Ads, and nothing in the search data ties it to SEO. GA4 recorded $3,724.98 of organic revenue on 28 purchases, but GA4 shows store revenue rising while WooCommerce shows it falling, so the GA4 figure is a cross-check only. August's delivered SEO work was schema markup, an on-page optimization batch and a template fix.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Google clicks fell 18.8% to 1,616. Brand search clicks fell 52.5% to 141, other named searches lost 68 clicks, and searches Google does not show lost 149.",
      status: "watch",
    },
    {
      area: "Revenue",
      statement:
        "All channels: WooCommerce net sales fell 31.0% to $8,509.48 on 101 orders (99 in July), as the average order fell to $84.25 from $124.50. WooCommerce does not isolate organic revenue; GA4 shows $3,724.98 as a cross-check.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Impressions rose 4.4% to 87,645 and average position was near steady (7.76 vs 7.42). Click-through rate fell to 1.84% from 2.37%.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Schema markup was written and installed, an on-page optimization batch went live, and a template fix for optional headings shipped.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Keep people who search for the store by name reaching the site.",
      name: "Brand search",
      started:
        "Brand searches (queries containing Northland Visions) brought 297 clicks in July at a 32.57% click-through rate.",
      work:
        "We compared brand impressions, position and clicks month over month through the Search Console API.",
      result:
        "Brand impressions held (899 vs 912) and position stayed near 1 (1.28 vs 1.21), but brand clicks fell to 141 and click-through rate fell to 15.68%. The single query \"northland visions\" went from 253 clicks to 123 on almost the same impressions. Search Console does not show what took those clicks.",
      next:
        "Diagnose the brand search results page (what now appears above or beside the Northland Visions listing), then rewrite the homepage title and snippet. Both tasks are scheduled for late September and early October.",
    },
    {
      businessPriority: "Grow non-brand search for beads, craft supplies and local store queries.",
      name: "Non-brand visibility",
      started:
        "In July, other named searches brought 489 clicks and searches Google does not show brought 1,203, 60.5% of all clicks. Hidden searches are usually long and specific, so most are likely non-brand, but Google does not confirm it.",
      work: "We tracked clicks by search group, impressions, and the pages and queries that moved.",
      result:
        "Impressions from searches that do not match the store's name (including searches Google does not show) rose 4.5% to 86,746. Clicks from other named searches fell to 421 from 489, and clicks from searches Google does not show fell to 1,054 from 1,203. Local store searches softened (\"bead stores near me\" 9 clicks vs 17, \"bead store minneapolis\" 9 vs 16), and two product pages lost clicks (hairpipe bone beads 33 vs 47, solid bone knife 21 vs 35). The Czech seed beads category gained (24 vs 11).",
      next: "Use August's other named and hidden search clicks as the baseline, and rewrite the top AI-visible product pages (scheduled for September 28).",
    },
    {
      businessPriority: "Help Google read product and category pages correctly.",
      name: "Technical and on-page SEO",
      started: "The August plan included schema markup, an on-page optimization batch and a template fix.",
      work:
        "Our developer wrote and installed schema markup, our SEO specialist wrote and implemented the August on-page optimization batch, and a template fix added guards for optional headings.",
      result: "All three items were closed in August. Their effect on clicks is not yet visible in one month of data.",
      next: "Watch the updated pages in Search Console over September and report changes against this month.",
    },
    {
      businessPriority: "Know what organic search earns for the store.",
      name: "Revenue measurement",
      started:
        "Store revenue lives in WooCommerce, which does not separate organic from paid Google traffic. GA4 records organic purchases, but the agency also runs Google Ads, so GA4 channels need checking.",
      work: "We pulled WooCommerce net sales and orders (all channels) and GA4 organic sessions, purchases and revenue for July and August.",
      result:
        "WooCommerce orders held (101 vs 99) while net sales fell 31.0% to $8,509.48, because the average order fell to $84.25 from $124.50. GA4 moved the other way: all-channel GA4 revenue rose to $7,748.36 from $6,218.85, and GA4 organic revenue rose to $3,724.98 on 28 purchases. The two sources disagree, so the GA4 organic figure cannot be read as a trend.",
      next: "Compare GA4 purchases with WooCommerce orders for July and August to find where GA4 under-counted, then use GA4 organic revenue as the tracked organic figure once it matches.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 3, 2026",
      evidence: "Closed August 3. Added template guards for optional headings on the site's templates.",
      owner: "Developer",
      title: "Fixed optional headings in site templates",
    },
    {
      completedOn: "August 18, 2026",
      evidence:
        "Closed August 18. Schema markup written (closed August 7), with a manual install closed August 5 and an automated install closed August 18.",
      owner: "Developer",
      title: "Wrote and installed schema markup",
    },
    {
      completedOn: "August 18, 2026",
      evidence: "Closed August 18. The August on-page optimization batch was written and then implemented on the site.",
      owner: "SEO Specialist",
      title: "Delivered the August on-page optimizations",
    },
    {
      completedOn: "August 20, 2026",
      evidence:
        "Closed August 20. Developer review of what can be built on the site, as input to the SEO roadmap. The roadmap itself was not closed in August.",
      owner: "Developer",
      title: "Completed the developer review for the SEO roadmap",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks (Google)",
      previous: "1,989",
      current: "1,616",
      change: "-18.8%",
      businessMeaning: "Fewer visits from Google. Brand search accounts for 156 of the 373 lost clicks.",
      status: "watch",
    },
    {
      metric: "Brand clicks",
      previous: "297",
      current: "141",
      change: "-52.5%",
      businessMeaning:
        "People still searched for the store and saw it near position 1, but half as many clicked. This is the first thing to diagnose.",
      status: "watch",
    },
    {
      metric: "Other named search clicks",
      previous: "489",
      current: "421",
      change: "-13.9%",
      businessMeaning:
        "Searches Google shows that do not name the store, such as products and local store terms, brought fewer visits, led by local bead store searches.",
      status: "watch",
    },
    {
      metric: "Clicks from searches Google does not show",
      previous: "1,203",
      current: "1,054",
      change: "-12.4%",
      businessMeaning:
        "Rare searches Google withholds for privacy. They are 65.2% of clicks, so their brand status is unknown; they are usually long, specific searches, so most are likely non-brand.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "83,940",
      current: "87,645",
      change: "+4.4%",
      businessMeaning: "Google showed the site more often, so visibility did not shrink.",
      status: "positive",
    },
    {
      metric: "Click-through rate",
      previous: "2.37%",
      current: "1.84%",
      change: "-0.53 pts",
      businessMeaning: "A smaller share of people who saw the site clicked it, mostly on brand searches.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "7.42",
      current: "7.76",
      change: "0.34 lower",
      businessMeaning: "Rankings were close to steady. Position alone does not explain the drop in clicks.",
      status: "neutral",
    },
    {
      metric: "Store net sales (WooCommerce, ALL CHANNELS)",
      previous: "$12,325.70",
      current: "$8,509.48",
      change: "-31.0%",
      businessMeaning:
        "Whole-store context, not organic: includes Google Ads and every other channel. Orders held, so the drop came from smaller orders, and the search data does not tie it to SEO.",
      status: "watch",
    },
    {
      metric: "Store orders (WooCommerce, ALL CHANNELS)",
      previous: "99",
      current: "101",
      change: "+2.0%",
      businessMeaning: "The store took about the same number of orders across all channels.",
      status: "neutral",
    },
    {
      metric: "Average order value (WooCommerce, ALL CHANNELS)",
      previous: "$124.50",
      current: "$84.25",
      change: "-32.3%",
      businessMeaning: "Each order was smaller on average, which accounts for the net sales drop.",
      status: "watch",
    },
    {
      metric: "Organic revenue (GA4)",
      previous: "$2,985.90",
      current: "$3,724.98",
      change: "+24.8%",
      businessMeaning:
        "Cross-check only: GA4's own Organic Search figure, not reconciled with WooCommerce. Based on 28 purchases, and GA4 rose while store net sales fell, so do not read it as an SEO result.",
      status: "neutral",
    },
    {
      metric: "Organic purchases (GA4)",
      previous: "50",
      current: "28",
      change: "-44.0%",
      businessMeaning: "Fewer organic orders at a higher average value ($133.04 vs $59.72). Too few orders to call a trend.",
      status: "watch",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "3,093",
      current: "2,485",
      change: "-19.7%",
      businessMeaning: "GA4 saw a drop in organic visits similar to Search Console's drop in clicks.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic figures come from the Google Search Console API for the domain property sc-domain:northlandvisions.com, August 1-31 vs July 1-31, 2026 (both 31 days). Clicks and impressions are exact and equal the sum of the device rows. Clicks are split into three groups: brand searches (queries matching the pattern (?i)(northland ?visions?|northlandvisions)), other named searches, and searches Google does not show. Google withholds rare queries for privacy, so the brand status of that last group (65.2% of clicks in August, 60.5% in July) is unknown. Revenue, purchases and sessions labeled GA4 come from the GA4 Data API (property 327211464), Organic Search channel, and are GA4's own measurement, not reconciled with WooCommerce. Store net sales, orders and average order value come from WooCommerce Analytics > Orders for all channels, pulled September 21, 2026, and are not organic figures.",

  conversionPlan: {
    owner: "Account Manager + SEO Strategist",
    sourcePriority:
      "WooCommerce is the source of truth for store revenue but covers all channels. Reconcile GA4 purchases with WooCommerce orders (GA4 counted 90 vs 101 in August and 85 vs 99 in July, with a much larger revenue gap in July), then use GA4 Organic Search revenue as the organic figure once it matches. Check that Google Ads traffic is tagged so paid visits do not land in GA4's Organic Search channel.",
    nextReportExpectation:
      "The next report compares September with August for WooCommerce net sales and orders, states whether GA4 now matches the store, and tracks brand clicks after the homepage title and snippet change.",
  },

  performanceCharts: {
    revenue: {
      title: "Store orders held, but the average order shrank (all channels)",
      insight:
        "WooCommerce took 101 orders in August vs 99 in July, but net sales fell 31.0% to $8,509.48 because the average order fell to $84.25 from $124.50. These are whole-store figures across every channel, and the search data does not tie the drop to SEO.",
      channelContext:
        "Source: WooCommerce Analytics > Orders, all channels, as of September 21, 2026. Not organic revenue: it includes Google Ads, which the agency runs, and every other channel. Later refunds can lower a past month. As a separate cross-check, GA4 Organic Search recorded $3,724.98 on 28 purchases vs $2,985.90 on 50, but GA4 is not reconciled with WooCommerce and moved in the opposite direction.",
      series: [
        {
          change: "-31.0%",
          current: 8509.48,
          currentDisplay: "$8,509.48",
          label: "Net sales (all channels)",
          previous: 12325.7,
          previousDisplay: "$12,325.70",
          status: "watch",
        },
        {
          change: "+2.0%",
          current: 101,
          currentDisplay: "101",
          label: "Orders (all channels)",
          previous: 99,
          previousDisplay: "99",
          status: "positive",
        },
        {
          change: "-32.3%",
          current: 84.25,
          currentDisplay: "$84.25",
          label: "Average order value (all channels)",
          previous: 124.5,
          previousDisplay: "$124.50",
          status: "watch",
        },
      ],
    },
    growth: {
      title: "Google showed the site more, but fewer people clicked",
      insight:
        "Impressions rose 4.4% to 87,645 while clicks fell 18.8% to 1,616, so click-through rate fell to 1.84% from 2.37%. Both months had 31 days.",
      series: [
        {
          change: "-18.8%",
          current: 1616,
          currentDisplay: "1,616",
          label: "Organic clicks",
          previous: 1989,
          previousDisplay: "1,989",
          status: "watch",
        },
        {
          change: "+4.4%",
          current: 87645,
          currentDisplay: "87,645",
          label: "Search impressions",
          previous: 83940,
          previousDisplay: "83,940",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 1989,
      baselineDisplay: "1,989",
      contributions: [
        { display: "-156", label: "Brand searches", value: -156 },
        { display: "-68", label: "Other named searches", value: -68 },
        { display: "-149", label: "Searches Google does not show", value: -149 },
      ],
      insight:
        "Brand searches lost 156 clicks, more than half of their July total. Other named searches lost 68 (13.9%) and searches Google does not show lost 149 (12.4%). Those hidden searches are 65.2% of August clicks and their brand status is unknown, so this chart does not split all clicks into brand and non-brand.",
      title: "Brand search lost the most clicks; hidden searches lost almost as many",
      total: 1616,
      totalDisplay: "1,616",
    },
    homepage: {
      title: "Brand search: seen as often, clicked half as much",
      insight:
        "Brand impressions barely moved and the brand result still ranked near position 1, yet brand clicks halved. The homepage lost 214 clicks over the same month. A result that keeps its position but loses clicks often means something else on the results page is drawing them, but Search Console cannot show what. The brand results page review scheduled for late September will check.",
      series: [
        {
          change: "-1.4%",
          current: 899,
          currentDisplay: "899",
          label: "Brand impressions",
          previous: 912,
          previousDisplay: "912",
          status: "watch",
        },
        {
          change: "-52.5%",
          current: 141,
          currentDisplay: "141",
          label: "Brand clicks",
          previous: 297,
          previousDisplay: "297",
          status: "watch",
        },
        {
          change: "-20.9%",
          current: 808,
          currentDisplay: "808",
          label: "Homepage clicks",
          previous: 1022,
          previousDisplay: "1,022",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Clicks fell on every device",
      insight:
        "Mobile clicks fell 17.6% to 1,170 and desktop fell 22.0% to 416. Mobile impressions rose 12.7% while desktop impressions fell 10.8%. Mobile brings 72.4% of clicks. Tablet is small at 30 clicks.",
      series: [
        {
          change: "-17.6%",
          current: 1170,
          currentDisplay: "1,170",
          label: "Mobile",
          previous: 1420,
          previousDisplay: "1,420",
          status: "watch",
        },
        {
          change: "-22.0%",
          current: 416,
          currentDisplay: "416",
          label: "Desktop",
          previous: 533,
          previousDisplay: "533",
          status: "watch",
        },
        {
          change: "-16.7%",
          current: 30,
          currentDisplay: "30",
          label: "Tablet",
          previous: 36,
          previousDisplay: "36",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Brand clicks halved (297 to 141) while brand impressions and position held. Search Console does not show what is taking those clicks.",
      impact:
        "People who already know the store and search for it by name are not reaching the site as often. For a store with a physical shop, some may be using the map listing or other results instead, which Search Console does not count.",
      remediation:
        "Review the brand search results page (ads, map listing, other sites and features shown for the store's name), then rewrite the homepage title and snippet.",
      eta: "Diagnosis due September 29 (part 1) and October 12 (part 2). Title and snippet rewrite due September 29 to October 5.",
    },
    {
      obstacle: "Store net sales fell 31.0% to $8,509.48 across all channels while orders held at 101, because the average order fell to $84.25 from $124.50.",
      impact: "Revenue fell without a drop in orders. WooCommerce does not split this by channel, so it cannot be tied to organic search, paid ads or any other source.",
      remediation: "Review the largest July orders and the product mix in both months to see whether a few large July orders set a high baseline.",
      eta: "Before the September report.",
    },
    {
      obstacle:
        "GA4 and WooCommerce disagree: GA4 all-channel revenue rose ($7,748.36 vs $6,218.85) while WooCommerce net sales fell. GA4 organic revenue rests on 28 purchases, and the agency also runs Google Ads.",
      impact:
        "A few orders can swing the GA4 figure, and untagged paid visits can land in GA4's Organic Search channel, so the figure is context, not proof of SEO results.",
      remediation: "Reconcile GA4 purchases with WooCommerce orders for July and August, and check that Google Ads traffic is tagged.",
      eta: "With the store revenue pull.",
    },
    {
      obstacle: "A second GA4 property for northlandvisions.com records zero sessions.",
      impact: "If anyone reads the wrong property, results will look like zero traffic.",
      remediation: "Confirm property 327211464 is the live one and retire or label the empty property.",
      eta: "Next report cycle.",
    },
  ],

  technicalItems: [
    {
      issue: "The homepage result for brand searches is clicked about half as often as in July.",
      why: "Lost brand clicks are lost visits from people who already want the store.",
      fix: "Diagnose the brand results page, then rewrite the homepage title and snippet to win the click back.",
      developerNote:
        "Tracked in ClickUp tasks 868m2znz5 and 868m33mbx (diagnosis) and 868m305mh and 868m33mc1 (title and snippet rewrite).",
    },
    {
      issue: "Schema markup was the main technical deliverable for August.",
      why: "Pages without schema markup are less eligible for rich results in Google.",
      fix: "Written and installed in August. Check Search Console enhancement reports over September.",
      developerNote: "Delivered under ClickUp tasks 868kmpaet, 868kmpaex and 868kmpaer.",
    },
    {
      issue: "Optional headings in the site templates needed guards.",
      why: "Headings help Google read a page's structure, so templates should handle missing ones cleanly.",
      fix: "Guards added to the templates in August.",
      developerNote: "Delivered under ClickUp task 868kcbh24.",
    },
    {
      issue: "GA4 records less revenue than WooCommerce, by far more in July than in August.",
      why: "Until GA4 matches the store, organic revenue cannot be measured reliably, and GA4 month-over-month trends can point the wrong way.",
      fix: "Audit the GA4 purchase tag against WooCommerce orders for both months and fix any missing orders.",
      developerNote: "No ClickUp task yet. Raised in this report.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console API, domain property sc-domain:northlandvisions.com (covers all hosts and protocols). Platform is WooCommerce on WordPress.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Total clicks (1,616 vs 1,989) and impressions (87,645 vs 83,940) are exact and equal the sum of the device rows. CTR (1.84% vs 2.37%) and position (7.76 vs 7.42) are Search Console's averages.",
    "Brand method: brand is any query matching the regular expression (?i)(northland ?visions?|northlandvisions) in the Search Console API. Brand search clicks were 141 vs 297 and brand impressions 899 vs 912; other named search clicks were 421 vs 489. Of the queries Google shows, 25.1% of August clicks are brand.",
    "Hidden queries: Google withholds rare queries for privacy and reports their clicks only in the total. Searches Google does not show brought 1,054 clicks in August vs 1,203 in July, 65.2% of clicks in August and 60.5% in July. Their brand status is unknown, so this report does not state a brand vs non-brand share of all clicks. They are usually long, specific searches, so most are likely non-brand. The three groups add up exactly to total clicks in both months (1,989 to 1,616: brand -156, other named -68, not shown -149).",
    "Page and query figures come from the top 25 pages and top 50 queries in each month. A page or query with no July figure may simply have been outside July's top list, so it is not described as new.",
    "The query \"db678\" appeared in August's top queries with 9,335 impressions and 3 clicks, which adds impressions without clicks and lowers the site's average click-through rate.",
    "Store source: WooCommerce Analytics > Orders, August 1-31 vs July 1-31, 2026, all channels. Net sales $8,509.48 vs $12,325.70, orders 101 vs 99, average order value $84.25 vs $124.50. These are whole-store figures, not organic revenue, and include orders from Google Ads and every other channel.",
    "Store figures are as of September 21, 2026. Refunds posted later can lower a past month's net sales.",
    "GA4 vs WooCommerce: GA4 all-channel purchases were 90 vs 101 store orders in August and 85 vs 99 in July. GA4 all-channel revenue was $7,748.36 vs $8,509.48 store net sales in August and $6,218.85 vs $12,325.70 in July. GA4 rose while the store fell, so GA4 figures are shown only as a labeled cross-check.",
    "GA4 source: GA4 Data API, property 327211464, session default channel group = Organic Search. Organic revenue $3,724.98 on 28 purchases in August vs $2,985.90 on 50 in July. These are GA4's own figures, not reconciled with WooCommerce, and are not store revenue. With under 30 purchases, a few orders can move them.",
    "GA4 key events for Organic Search are add-to-cart and checkout events set up for Google Ads (160 vs 281 and 142 vs 242) plus purchases. They measure shopping steps on the way to a purchase and are shown here only as shopping steps.",
    "The agency runs Google Ads for this client. WooCommerce store figures include paid orders, and paid visits without campaign tags can appear in GA4's Organic Search channel.",
    "A second GA4 property (302043431) for northlandvisions.com records zero sessions. This report uses 327211464, which records live traffic.",
    "Northland Visions also sells in its physical store, and online is a minority of total revenue. Local searches (for example \"bead store minneapolis\") and map listings drive store visits that Search Console and GA4 do not measure.",
    "Completed work comes from ClickUp tasks closed in August 2026 and covers organic search work only. This is the first monthly report for Northland Visions.",
  ],
};
