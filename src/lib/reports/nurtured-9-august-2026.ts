import type { SeoStoryReportData } from "@/lib/reports/types";

// Nurtured 9, August 2026. Pulled 2026-09-27 (GSC API, GA4 Data API, ClickUp API).
// Raw figures: output/nurtured-9-august-2026/data.json (not committed).
export const nurtured9August2026Report: SeoStoryReportData = {
  businessObjective:
    "Turn the rankings and guide traffic Nurtured 9 already has into commercial discovery, by giving each priority pregnancy, baby shower, new mom and gift-box search one clear page that owns it.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Organic search sold more in August on almost the same traffic. The gain in visits came from gift guides, while the commercial gift-box pages the roadmap is built around lost clicks. That split is the problem the September to November plan addresses.",
    title: "Organic search performance, August 2026",
  },

  meta: {
    action:
      "Approve the next set of redirect and guide consolidation decisions so the commercial gift-box pages, not the guides or the homepage, own their searches before Q4 gifting demand peaks. Confirm Squarespace order 43266 so July revenue can be restated.",
    client: "Nurtured 9",
    coverHeadline:
      "Organic search drove 457 purchases and $34,813.45 in August, up 31.5% on a July that excludes one $50,100 order under review, while search traffic held flat. The extra visits came from gift guides while the commercial gift-box pages slipped, which is where the roadmap starts.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "nurtured9.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console + Google Analytics 4 (Organic Search channel) + ClickUp delivery records",
  },

  executiveSummary:
    "Organic search earned more in August without more traffic. GA4 recorded 457 organic purchases worth $34,813.45, up 27.7% in purchases and 31.5% in revenue from July, once a single $50,100 July order is set aside as a likely data error (it is under review). Search clicks held steady at 5,665 (+0.8%) and average position improved from 13.7 to 13.04. Underneath the flat total, the mix shifted: two gift guides added 389 clicks, while the commercial pages slipped, with /baby-shower-gifts-for-mom down 131 clicks and /new-mom-gift-boxes down 68. August delivered the three-month roadmap and fixed the floating add-to-cart button on product and gift-box pages. The open problem is page ownership: guides and the homepage are winning searches the gift-box pages should own, and consolidating them needs client sign-off on each redirect.",

  powerLines: [
    {
      area: "Revenue",
      statement:
        "GA4 organic revenue rose 31.5% to $34,813.45 across 457 purchases, 16.7% of all tracked store revenue. July is compared without one $50,100 order under review.",
      status: "positive",
    },
    {
      area: "Traffic",
      statement:
        "Clicks held at 5,665 (+0.8%) and impressions rose 3.4% to 450,964. Guides grew while commercial gift-box pages slipped.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position improved from 13.7 to 13.04, but key commercial searches such as 'baby shower gifts for mom' and 'new mom gift basket' lost ground.",
      status: "watch",
    },
    {
      area: "Site health",
      statement:
        "The floating add-to-cart button now adds items to the cart on product and gift-box pages, and the three-month roadmap is delivered.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority: "Make the gift-box pages that sell own the searches that buy.",
      name: "Commercial page ownership",
      started:
        "The site already ranks for the right gift searches, but often with a guide or the homepage instead of the gift-box collection. The roadmap counts 1,551 queries where more than one Nurtured 9 URL competes.",
      work:
        "We built the three-month roadmap around one rule: one page owns one intent. It maps the priority categories, the subscription page and the six bestselling products, then sequences consolidation, internal linking and authority work.",
      result:
        "In August the split was visible in the data. Two guides gained 389 clicks while /baby-shower-gifts-for-mom lost 131 and /new-mom-gift-boxes lost 68.",
      next:
        "Since the month closed, the redirect map for the highest-impact decisions is built, internal links from winning guides to the priority gift-box pages are mapped, and the first six redirects went live on September 27. Next is consolidating two overlapping gift guides.",
    },
    {
      businessPriority: "Report organic revenue the business can trust month to month.",
      name: "Revenue measurement",
      started:
        "GA4 ecommerce tracking works on the Squarespace store, so organic revenue can be reported directly from the Organic Search channel.",
      work:
        "We pulled organic and all-channel purchases and revenue from GA4 for both months and checked the largest orders. One July order, 43266, recorded $50,100 on the Miscarriage Care and Support Box page, 65.4% of July's organic revenue. The next-largest July order was $580.",
      result:
        "With that order set aside, organic revenue grew from $26,464.18 to $34,813.45 and the average organic order held near $75. Including it would show a 54.5% drop that did not happen in the business.",
      next: "Confirm order 43266 in Squarespace. If it is a data error, check how the purchase value is sent to GA4 so it cannot repeat.",
    },
    {
      businessPriority: "Remove friction between a shopper deciding and a shopper buying.",
      name: "Store experience fixes",
      started:
        "The floating add-to-cart button on product pages scrolled shoppers back up the page instead of adding the item, including on gift boxes with no options to choose.",
      work:
        "The Developer fixed the button's click handler on August 14 so it uses Squarespace's own add to cart, then fixed the gift boxes with add-ons on August 27, where an empty add-on dropdown was blocking it.",
      result:
        "The button now adds to cart on product pages, curate-your-own items and gift boxes with add-ons. Organic purchases rose 27.7% in the same month; the fix may have helped, but the data cannot isolate it.",
      next: "Spot-check the button on new gift boxes as they are added.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 11, 2026",
      evidence: "Closed August 11. Confirmed which roadmap items can be built in Squarespace and how many hours each needs.",
      owner: "Developer",
      title: "Completed the developer review of the roadmap",
    },
    {
      completedOn: "August 14, 2026",
      evidence:
        "Closed August 14. The floating button on product pages only scrolled to the main button; it now triggers Squarespace's native add to cart.",
      owner: "Developer",
      title: "Fixed the floating add-to-cart button",
    },
    {
      completedOn: "August 19, 2026",
      evidence: "Closed August 14 and August 19. The April and May on-page optimization orders are live on the site.",
      owner: "Developer",
      title: "Implemented two on-page optimization orders",
    },
    {
      completedOn: "August 21, 2026",
      evidence:
        "Closed August 21, built on the data consolidation closed August 12. Covers the gift-intent URL map, guide consolidation, authority work and recovery validation for September to November.",
      owner: "SEO Strategist",
      title: "Delivered the three-month SEO roadmap",
    },
    {
      completedOn: "August 27, 2026",
      evidence:
        "Closed August 27. Gift boxes with add-ons (such as Moon and Stars and the Ultimate New Mom Postpartum Gift Basket) still scrolled instead of adding to cart. The button now checks only the main product's options.",
      owner: "Developer",
      title: "Fixed add to cart on gift boxes with add-ons",
    },
  ],

  kpiRows: [
    {
      metric: "Organic revenue (GA4)",
      previous: "$26,464.18",
      current: "$34,813.45",
      change: "+31.5%",
      businessMeaning:
        "Organic search sold more in August. July excludes one $50,100 order under review; with it, July would read $76,564.18.",
      status: "positive",
    },
    {
      metric: "Organic purchases (GA4)",
      previous: "358",
      current: "457",
      change: "+27.7%",
      businessMeaning: "More shoppers from organic search completed a purchase, on almost the same number of visits.",
      status: "positive",
    },
    {
      metric: "Average organic order (GA4)",
      previous: "$73.92",
      current: "$76.18",
      change: "+3.1%",
      businessMeaning: "Order size held steady, so the revenue gain came from more orders, not a few large ones.",
      status: "positive",
    },
    {
      metric: "Organic sessions (GA4)",
      previous: "6,631",
      current: "6,717",
      change: "+1.3%",
      businessMeaning: "Visits from organic search were flat. The gain was in how many of them bought.",
      status: "neutral",
    },
    {
      metric: "Organic clicks (Search Console)",
      previous: "5,620",
      current: "5,665",
      change: "+0.8%",
      businessMeaning: "Flat overall, but the mix moved from commercial gift-box pages toward gift guides.",
      status: "neutral",
    },
    {
      metric: "Search impressions",
      previous: "436,069",
      current: "450,964",
      change: "+3.4%",
      businessMeaning: "Nurtured 9 appeared in more searches, mostly on mobile, where impressions rose 8.0%.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "13.7",
      current: "13.04",
      change: "0.66 better",
      businessMeaning: "Rankings improved slightly on average, while several commercial searches slipped.",
      status: "positive",
    },
  ],

  kpiDisclosure:
    "Traffic comes from the Google Search Console property https://www.nurtured9.com/, August 1-31 vs July 1-31, 2026 (both 31 days), pulled through the Search Console API, so clicks and impressions are exact. Revenue, purchases and sessions come from GA4 (property 322066959), Organic Search channel. July revenue and purchases exclude one order (43266, $50,100 on July 22) that looks like a bad purchase value and is being confirmed in Squarespace; the unadjusted July figures are $76,564.18 and 359 purchases. GA4 revenue has not yet been reconciled with the Squarespace sales report.",

  conversionPlan: {
    owner: "SEO Strategist + Account Manager",
    sourcePriority:
      "GA4 Organic Search is the revenue source. Confirm order 43266 in Squarespace, then tie GA4 organic and all-channel revenue out against the Squarespace sales report for August.",
    nextReportExpectation:
      "The September report restates July once order 43266 is confirmed and shows organic revenue with a Squarespace tie-out, plus the first read on the pages affected by the new redirects.",
  },

  performanceCharts: {
    revenue: {
      title: "Organic revenue up 31.5% on 27.7% more purchases",
      insight:
        "More organic purchases at the same order size drove the gain. August's largest organic order was $424, so no single order explains it.",
      channelContext:
        "Source: GA4, Organic Search channel. Organic search was 16.7% of all GA4-tracked store revenue in August ($208,073.43) and 14.5% in July ($182,798.62, with order 43266 excluded from the organic and all-channel totals). July is shown without order 43266 ($50,100 on the Miscarriage Care and Support Box page), which is being confirmed in Squarespace.",
      series: [
        {
          change: "+31.5%",
          current: 34813.45,
          currentDisplay: "$34,813.45",
          label: "Organic revenue (GA4)",
          previous: 26464.18,
          previousDisplay: "$26,464.18",
          status: "positive",
        },
        {
          change: "+27.7%",
          current: 457,
          currentDisplay: "457",
          label: "Organic purchases (GA4)",
          previous: 358,
          previousDisplay: "358",
          status: "positive",
        },
      ],
    },
    growth: {
      title: "Traffic held steady while visibility grew",
      insight:
        "Clicks rose 0.8% to 5,665 and impressions 3.4% to 450,964. Both months had 31 days, so this is a like-for-like comparison.",
      series: [
        {
          change: "+0.8%",
          current: 5665,
          currentDisplay: "5,665",
          label: "Organic clicks",
          previous: 5620,
          previousDisplay: "5,620",
          status: "positive",
        },
        {
          change: "+3.4%",
          current: 450964,
          currentDisplay: "450,964",
          label: "Search impressions",
          previous: 436069,
          previousDisplay: "436,069",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 5620,
      baselineDisplay: "5,620",
      contributions: [
        { display: "+256", label: "Mom-to-be gift ideas guide", value: 256 },
        { display: "+133", label: "Pregnancy self-care gifts guide", value: 133 },
        { display: "+99", label: "Complete Elevated Essentials bundle", value: 99 },
        { display: "+76", label: "Homepage", value: 76 },
        { display: "-131", label: "Baby shower gifts for mom page", value: -131 },
        { display: "-388", label: "All other pages", value: -388 },
      ],
      insight:
        "Two gift guides added 389 clicks and a new bundle page added 99, which offset losses on the baby shower collection and across the rest of the site. Brand searches grew by 65 clicks, but 62.2% of clicks come from searches Google does not show, so the brand and non-brand split cannot be measured exactly.",
      title: "Guides carried the month; commercial pages slipped",
      total: 5665,
      totalDisplay: "5,665",
    },
    homepage: {
      title: "The gift-box collections lost clicks",
      insight:
        "The three collection pages the roadmap prioritizes all lost clicks, while guides on the same topics gained. Searches like 'baby shower gifts for mom' (69 to 33 clicks, position 8.1 to 10.0) and 'new mom gift basket' (38 to 29, position 6.7 to 9.0) show the collections slipping. Giving each of them clear ownership of its searches is the first job of the roadmap.",
      series: [
        {
          change: "-29.4%",
          current: 314,
          currentDisplay: "314",
          label: "/baby-shower-gifts-for-mom clicks",
          previous: 445,
          previousDisplay: "445",
          status: "watch",
        },
        {
          change: "-11.9%",
          current: 502,
          currentDisplay: "502",
          label: "/new-mom-gift-boxes clicks",
          previous: 570,
          previousDisplay: "570",
          status: "watch",
        },
        {
          change: "-7.5%",
          current: 309,
          currentDisplay: "309",
          label: "/shop-pregnancy-gifts-by-trimester clicks",
          previous: 334,
          previousDisplay: "334",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Mobile carries the traffic; desktop grew",
      insight:
        "Mobile brought 4,109 of 5,665 clicks (72.5%) and was flat. Desktop rose 3.4%. Tablet is negligible (57 clicks).",
      series: [
        {
          change: "+0.3%",
          current: 4109,
          currentDisplay: "4,109",
          label: "Mobile",
          previous: 4098,
          previousDisplay: "4,098",
          status: "positive",
        },
        {
          change: "+3.4%",
          current: 1499,
          currentDisplay: "1,499",
          label: "Desktop",
          previous: 1450,
          previousDisplay: "1,450",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Guides and the homepage win searches the gift-box collections should own. The roadmap counts 1,551 queries where more than one Nurtured 9 URL competes.",
      impact:
        "Shoppers with buying intent land on advice pages instead of the pages that sell, and the collections lose ground, as August showed on /baby-shower-gifts-for-mom (-29.4%).",
      remediation:
        "Apply the gift-intent URL map: redirect or merge overlapping pages into one owner per intent, and link winning guides into the priority gift boxes.",
      eta: "Under way. First six redirects live September 27; guide consolidation next.",
    },
    {
      obstacle: "The roadmap holds about 49 merge and delete decisions, and each one needs sign-off from both owners before it goes live.",
      impact: "Consolidation can only move as fast as approvals, and Q4 gifting demand is approaching.",
      remediation: "Batch the decisions into small monthly sets (10 to 15 rows) with a clear before and after for each, so they can be approved in one pass.",
      eta: "Ongoing, September to November.",
    },
    {
      obstacle: "GA4 recorded a $50,100 organic order (43266) on July 22, 86 times the next-largest July order ($580).",
      impact: "One bad value can make a strong month look like a 54.5% revenue drop, or hide a real one.",
      remediation: "Confirm the order in Squarespace. If it is an error, correct how the purchase value is sent to GA4 and tie GA4 out against the Squarespace sales report monthly.",
      eta: "Before the September report.",
    },
  ],

  technicalItems: [
    {
      issue: "The floating add-to-cart button scrolled shoppers up the page instead of adding the item, including on gift boxes with add-ons.",
      why: "Every failed click on a product page is a lost or delayed sale.",
      fix: "Fixed on August 14 and August 27. Spot-check new gift boxes as they launch.",
      developerNote: "Squarespace Code Injection handler now calls the native add-to-cart button and ignores add-on dropdowns (868kqk9yw, 868kx19hn).",
    },
    {
      issue: "Overlapping pages compete for the same gift searches; about 49 merge and delete decisions are in the roadmap.",
      why: "Competing pages split authority and let guides outrank the collections that sell.",
      fix: "Six 301 redirects are live (for example /postpartum-gift-boxes to /new-mom-gift-boxes); continue in approved sets of 10 to 15.",
      developerNote: "Implemented through Squarespace URL Mappings, each verified as a single 301 to a live page with no chains (868m50ux2). Redirect map: 868m50uta.",
    },
    {
      issue: "GA4 order 43266 recorded $50,100 on a gift-box product page.",
      why: "Revenue reporting is only as good as its largest order; one bad value distorts the month.",
      fix: "Confirm the order in Squarespace and, if needed, correct the purchase value sent to GA4.",
      developerNote: "Found through the GA4 Data API (transactionId by purchaseRevenue, Organic Search, July 22).",
    },
    {
      issue: "452 links from 425 referring domains still point at the non-www version of the site.",
      why: "Links that pass through an extra redirect carry less value to the pages that need authority.",
      fix: "Reclaim the highest-value non-www links as part of the Month 3 authority work.",
      developerNote: "From the roadmap's competitive diagnosis; scheduled in the November plan.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console URL-prefix property https://www.nurtured9.com/, pulled through the Search Console API. Platform is Squarespace.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months have 31 days.",
    "Clicks (5,665 vs 5,620) and impressions (450,964 vs 436,069) are exact API totals and match the sum of the device rows. CTR was 1.26% vs 1.29%; average position 13.04 vs 13.7.",
    "Brand searches match 'nurtured 9', 'nurtured nine' and the 'nutured 9' misspelling: 248 clicks in August vs 183 in July. 62.2% of clicks in both months come from searches Google does not show for privacy, so the brand share (4.4% of all clicks) is a floor, not a measurement. Hidden searches are usually long and specific, so they are most likely non-brand.",
    "Revenue source: GA4 property 322066959, Organic Search channel (sessionDefaultChannelGroup). August: 457 purchases, $34,813.45. July as recorded: 359 purchases, $76,564.18, including order 43266 ($50,100, July 22, landing page /expert-curations/p/miscarriage-care-and-support-box). July excluding it: 358 purchases, $26,464.18. The next-largest organic order was $580 in July and $424 in August.",
    "All-channel GA4 revenue: $208,073.43 in August vs $182,798.62 in July excluding order 43266 ($232,898.62 as recorded). Organic share: 16.7% vs 14.5%.",
    "GA4 key events for this property are engagement signals (for example sessions over 3 minutes), not leads, so they are not reported as conversions.",
    "Nurtured 9 also runs Google Ads. GA4 assigns tagged paid clicks to paid channels, so they are not in the organic figures. GA4 revenue has not yet been tied out against the Squarespace sales report.",
    "Page-level clicks come from the Search Console Pages breakdown; the 1,551 competing-query and non-www link figures come from the August roadmap. Completed work comes from ClickUp tasks closed in August 2026.",
  ],
};
