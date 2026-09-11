import type { SeoStoryReportData } from "@/lib/reports/types";

export const fossilAgeMineralsAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow Fossil Age Minerals' commercial organic traffic and revenue by hardening a Shopify site whose defaults were never tuned for search, shifting content investment from informational blog topics the site cannot win toward the collection pages that convert, and making organic revenue measurable.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Revenue",
    intro:
      "The revenue below is total Shopify store sales across every channel, not organic-attributed. A July theme change disturbed channel tracking and the GA4 and GTM revenue audit is still open, so SEO's share of sales cannot be isolated yet. Everything after it, traffic, pages, non-brand demand, and devices, is organic search performance from Search Console.",
    title: "Store revenue and organic search performance",
  },

  meta: {
    action:
      "Close the GA4 and GTM revenue-tracking audit so organic sales can be isolated, rewrite the 99 Merchant Center titles to unblock the megalodon and shark-tooth line, and differentiate the two T. rex collections to stop them competing with each other.",
    client: "Fossil Age Minerals",
    coverHeadline:
      "Top-three commercial keywords grew 71% as the blog's low-value impressions fell away. Clicks and average position slipped on paper, but the search mix is healthier and the recent trend has already turned back up.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://www.fossilageminerals.com/",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + Shopify Analytics + Ahrefs + ClickUp delivery records",
  },

  executiveSummary:
    "August was a build month. The top-line numbers dipped, but the search picture underneath got healthier. Clicks eased 4.3% to 7,588 and impressions fell 16% to 608,855. Average position moved from 8.6 to 9.9, still inside the client's floor of 10 and back to 8.9 over the last 28 days. That is not a decline: the site dropped low-value blog impressions that never converted, while click-through rate rose to 1.25% and Ahrefs top-three keywords climbed 71%, from 464 to 792. The real work this month was fixing the foundation. We ran a full technical and content audit and shipped the first fixes it found: a robots.txt change that stops Google crawling 9,844 junk URLs, a corrected and redirected Mosasaur collection, and a documented backlink-spam decision. Revenue is the open problem. Total store sales were $35,845 across 252 orders, all channels, down 33% month over month on fewer large July orders, though order count rose 5%. A July theme change broke channel tracking and the GA4 and GTM audit is still open, so we cannot yet report organic's share of sales. Next month we rewrite the 99 disapproved Merchant Center titles, split the two T. rex collections, and fix revenue tracking.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks eased 4.3% to 7,588 and impressions fell 16%, but the drop was concentrated in low-value informational pages while click-through rate rose to 1.25%.",
      status: "watch",
    },
    {
      area: "Revenue",
      statement:
        "Total store sales were $35,845 across 252 orders in August (all channels, down 33% on fewer large July orders); organic's share can't be isolated until tracking is fixed.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Ahrefs top-three keywords grew 71% (464 to 792). Average position moved to 9.9, still inside the client's floor of 10 and back to 8.9 on the trailing 28 days.",
      status: "positive",
    },
    {
      area: "Technical health",
      statement:
        "A foundation month: the audit-scoped crawl-trap fix, the Mosasaur URL correction, and the backlink-spam decision all shipped, clearing the way for the Merchant Center and content work.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Read the month honestly: separate a healthier search mix from a real decline.",
      name: "Monthly performance",
      started:
        "July delivered 7,928 clicks and about 724K impressions, with average position at 8.6 and a blog that carried heavy but low-converting impression volume.",
      work:
        "We compared full-month Search Console performance (August vs July, both 31 days) across queries, pages, and devices, isolated brand from non-brand, and pulled Shopify revenue for context.",
      result:
        "Clicks eased 4.3% and impressions fell 16%, but the losses concentrated in informational pages while click-through rate rose and Ahrefs top-three keywords grew 71%. The trailing 28-day trend has already turned back positive.",
      next:
        "Hold the monthly baseline and confirm the commercial recovery as the Merchant Center and content work lands.",
    },
    {
      businessPriority:
        "Explain the one number the client watches before it reads as a problem.",
      name: "Average position and the client threshold",
      started:
        "The client set a condition that average position must not fall below 10, and the impression-weighted number had moved from 7.7 toward 8.8 across recent windows.",
      work:
        "We reconstructed why the number moves: an impression-weighted average rises when weak impressions that held good positions disappear, which is exactly what happened as low-click-through informational reach fell away.",
      result:
        "Average position sits at 9.9 for August and 8.9 on the trailing 28 days, inside the floor, while top-three keywords rose 71% and click-through rate improved. The account manager was briefed ahead of the client call.",
      next:
        "Report the metric with its explanation every cycle so a healthier commercial mix is not misread as ranking loss.",
    },
    {
      businessPriority:
        "Stop the site wasting Google's crawl on pages it is told to discard.",
      name: "Technical foundation",
      started:
        "The audit found Shopify defaults left in place: 9,844 Web Pixels sandbox URLs Google was crawling then told not to index, unblocked feed and parameter URLs, and a misspelled Mosasaur collection. The robots file blocked the Ahrefs crawler but not Google.",
      work:
        "We shipped the highest-leverage fixes first: robots rules that block the sandbox, feed, and parameter URLs for Google, and a rename plus 301 redirect of the misspelled Mosasaur collection to preserve its rankings.",
      result:
        "Google is no longer sent to crawl thousands of junk URLs, and the Mosasaur collection keeps the traffic it earns for mosasaur and mosasaurus tooth queries.",
      next:
        "Add the remaining parameter disallows, fix the theme's link output, and differentiate the two competing T. rex collections.",
    },
    {
      businessPriority:
        "Unblock the megalodon and shark-tooth line in Google Shopping.",
      name: "Merchant Center and product feed",
      started:
        "99 of 111 product disapprovals trace to two policy errors: 81 shark, megalodon, and mako items flagged as animal cruelty and 18 flagged as live-animal sales, because titles lead with the animal name before the fossil qualifier.",
      work:
        "We confirmed the single root cause (title structure leads with the extant-animal noun) and scoped the rewrite: lead with Fossil or Fossilized, add Extinct, use scientific names, and correct the product category.",
      result:
        "The fix is defined and in progress. These are the client's stated priority products, so clearing them restores Shopping visibility on the highest-value line.",
      next:
        "Rewrite the 99 titles and categories, resubmit the feed, and confirm approvals in Merchant Center.",
    },
    {
      businessPriority:
        "Make SEO's contribution to store sales measurable.",
      name: "Revenue and attribution",
      started:
        "A July theme change disturbed channel tracking, the GA4 and GTM revenue audit is open, and Shopify shows large blocks of July revenue landing in an unattributed direct bucket.",
      work:
        "We reconciled August store sales in Shopify ($35,845 across 252 orders) and reviewed the referrer breakdown, which shows search-referred orders and revenue rising sharply but still blending organic and paid Google.",
      result:
        "We confirmed the store's real revenue and the exact gap: total sales are reliable, but organic's share is not, so every revenue statement stays directional this cycle.",
      next:
        "Close the GA4 and GTM audit and separate organic from paid search so the next report can show organic-attributed revenue.",
    },
  ],

  completedWork: [
    {
      completedOn: "September 8, 2026",
      evidence:
        "ClickUp records the robots.txt Web Pixels and feed-rule task as Closed. The change blocks Google from crawling roughly 9,844 sandbox URLs plus the .atom feed and parameter paths that the audit measured at 2.35 times the size of the indexed site.",
      owner: "Developer",
      title: "Blocked the 9,844-URL crawl trap in robots.txt",
    },
    {
      completedOn: "September 9, 2026",
      evidence:
        "ClickUp records the Mosasaur collection rename and redirect as Closed. The misspelled /collections/mosasuar-teeth URL, the top-ranking page for mosasaur tooth (42 clicks) and mosasaurus tooth (23 clicks), was renamed and 301-redirected to preserve its rankings.",
      owner: "Developer",
      title: "Corrected and redirected the misspelled Mosasaur collection",
    },
    {
      completedOn: "September 9, 2026",
      evidence:
        "ClickUp records the average-position briefing as Closed. The account manager received the impression-weighting explanation and the supporting figures (position inside the floor, top-three keywords up 71%, click-through rate up) ahead of the client call.",
      owner: "SEO Strategist",
      title: "Briefed the account manager on the average-position movement",
    },
    {
      completedOn: "September 6, 2026",
      evidence:
        "ClickUp records the link-building and PBN monitor task as Closed. We baselined the backlink profile, identified the auto-generated spam targeting the domain, and documented a do-not-disavow decision with a monthly re-check so the call is not silently reversed.",
      owner: "SEO Specialist",
      title: "Baselined the backlink-spam monitor and set the do-not-disavow decision",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "7,928",
      current: "7,588",
      change: "-4.3%",
      businessMeaning:
        "Slightly fewer visits, concentrated in low-value informational pages rather than the commercial collections.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "724K",
      current: "609K",
      change: "-16.0%",
      businessMeaning:
        "Fewer appearances, mostly the blog impressions the site ranks for but cannot convert; the audit tied most of the loss to the blog.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "8.6",
      current: "9.9",
      change: "1.3 lower",
      businessMeaning:
        "Inside the client's floor of 10, and back to 8.9 on the trailing 28 days. The number rose because weak, well-ranked impressions dropped out, not because commercial rankings fell.",
      status: "neutral",
    },
    {
      metric: "Organic CTR",
      previous: "1.09%",
      current: "1.25%",
      change: "+0.15 points",
      businessMeaning:
        "A larger share of appearances became visits, the signature of a more relevant, commercial mix.",
      status: "positive",
    },
    {
      metric: "Top-3 keywords (Ahrefs)",
      previous: "464",
      current: "792",
      change: "+71%",
      businessMeaning:
        "The commercial ranking footprint expanded materially; a third-party estimate that indicates direction.",
      status: "positive",
    },
    {
      metric: "Store revenue (total, all channels)",
      previous: "$53,870",
      current: "$35,845",
      change: "-33%",
      businessMeaning:
        "Total Shopify sales, every channel, not organic. Down on fewer large July orders; order count actually rose 5%.",
      status: "watch",
    },
    {
      metric: "Orders (all channels)",
      previous: "241",
      current: "252",
      change: "+5%",
      businessMeaning:
        "More orders on a lower average value; July carried unusually large direct orders that inflated its total.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Clicks, impressions, CTR, and average position are from Google Search Console (URL-prefix property https://www.fossilageminerals.com/), August 1-31 vs July 1-31, 2026; both months have 31 days, so no per-day normalization is needed. Exact monthly clicks (7,588 vs 7,928) and impressions (608,855 vs 724,484) are the sum of the device rows; the metric cards show rounded values. Brand terms account for roughly 9% of clicks; the non-brand trend matches the total. Revenue and orders are from Shopify Analytics (Total sales by referrer) and are total store sales across all channels, not organic-attributed (see the revenue note). Top-three keyword counts and the 71% figure are Ahrefs estimates over a three-month window and indicate direction, not measured traffic.",

  conversionPlan: {
    owner: "Development + SEO (Fossil Age Minerals)",
    sourcePriority:
      "Close the GA4 and GTM revenue-tracking audit opened after the July theme change, then separate organic from paid Google in Shopify's referrer data.",
    nextReportExpectation:
      "Once tracking is validated, the next report can show organic-attributed revenue and tie the rising search channel to SEO rather than reporting store totals as context.",
  },

  performanceCharts: {
    revenue: {
      title: "Store revenue fell on fewer large July orders, not on organic",
      insight:
        "Total store sales dropped 33% month over month while order count rose 5%, so August's revenue move is a store-wide, average-order-value signal, not an SEO one. Search-referred orders and revenue actually rose sharply, but that channel blends organic and paid Google and cannot be reported as organic yet.",
      channelContext:
        "These are total Shopify store sales across all channels, not organic-attributed. July's total was inflated by large orders that landed in an unattributed direct bucket, and a July theme change disturbed channel tracking, so month-over-month channel comparisons are unreliable. Search-referred sales (Google, Bing, DuckDuckGo) rose from about $1,101 across 10 orders in July to about $6,712 across 62 orders in August, but this blends organic and paid Google (the store also runs Google Ads). Isolating organic revenue is blocked until the GA4 and GTM audit closes, which is the next cycle's priority.",
      series: [
        {
          change: "-33%",
          current: 35845.49,
          currentDisplay: "$35,845",
          label: "Total sales (all channels)",
          previous: 53870.28,
          previousDisplay: "$53,870",
          status: "watch",
        },
        {
          change: "+5%",
          current: 252,
          currentDisplay: "252",
          label: "Orders",
          previous: 241,
          previousDisplay: "241",
          status: "positive",
        },
        {
          change: "-36%",
          current: 142.24,
          currentDisplay: "$142.24",
          label: "Average order value",
          previous: 223.53,
          previousDisplay: "$223.53",
          status: "watch",
        },
      ],
    },
    growth: {
      title: "Traffic volume eased as low-value impressions fell away",
      insight:
        "Clicks slipped 4.3% and impressions fell 16%, but the impression loss was concentrated in blog pages that rank without converting. Both months had 31 days, so no calendar adjustment is needed. Click-through rate rose over the same period.",
      series: [
        {
          change: "-4.3%",
          current: 7588,
          currentDisplay: "7,588",
          label: "Organic clicks",
          previous: 7928,
          previousDisplay: "7,928",
          status: "watch",
        },
        {
          change: "-16.0%",
          current: 608855,
          currentDisplay: "609K",
          label: "Search impressions",
          previous: 724484,
          previousDisplay: "724K",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 7928,
      baselineDisplay: "7,928",
      contributions: [
        {
          display: "-325",
          label: "Homepage (brand + informational)",
          value: -325,
        },
        {
          display: "-224",
          label: "T. rex collections competing with each other",
          value: -224,
        },
        {
          display: "-93",
          label: "Informational blog & dinosaur-fossils",
          value: -93,
        },
        {
          display: "+104",
          label: "Trilobite & tyrannosaur-teeth collections",
          value: 104,
        },
        {
          display: "+198",
          label: "Broad gains across the rest of the catalog",
          value: 198,
        },
      ],
      insight:
        "The month's small net click decline was not broad. Two areas drove it, the homepage and the two T. rex collections that are competing for the same rankings, while the wider commercial catalog gained. Fixing the T. rex overlap is a direct recovery opportunity on the client's top product line.",
      title: "The click decline was concentrated, not broad",
      total: 7588,
      totalDisplay: "7,588",
    },
    homepage: {
      title: "The top T. rex tooth collection converted better on fewer impressions",
      insight:
        "The tyrannosaur-teeth collection, the client's leading commercial page, gained clicks while its impressions fell, so its click-through rate improved to 5.6%. That is the whole month's story in one page: less low-value reach, more efficient commercial visits.",
      series: [
        {
          change: "+4.1%",
          current: 681,
          currentDisplay: "681",
          label: "Organic clicks",
          previous: 654,
          previousDisplay: "654",
          status: "positive",
        },
        {
          change: "-11.2%",
          current: 12222,
          currentDisplay: "12,222",
          label: "Search impressions",
          previous: 13768,
          previousDisplay: "13,768",
          status: "watch",
        },
        {
          change: "+0.82 points",
          current: 5.57,
          currentDisplay: "5.57%",
          label: "Click-through rate",
          previous: 4.75,
          previousDisplay: "4.75%",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile carries the store and both platforms eased slightly",
      insight:
        "Mobile is 72% of organic clicks. Both mobile and desktop eased in line with the overall month. Desktop click-through rate runs well below mobile, a gap flagged for investigation in the roadmap.",
      series: [
        {
          change: "-4.5%",
          current: 5461,
          currentDisplay: "5,461",
          label: "Mobile",
          previous: 5720,
          previousDisplay: "5,720",
          status: "watch",
        },
        {
          change: "-3.7%",
          current: 1977,
          currentDisplay: "1,977",
          label: "Desktop",
          previous: 2053,
          previousDisplay: "2,053",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Revenue attribution is not trustworthy: a July theme change disturbed channel tracking, the GA4 and GTM audit is open, and large blocks of July sales landed in an unattributed direct bucket.",
      impact:
        "SEO's contribution to store revenue cannot be measured, and month-over-month channel comparisons are unreliable, so a rising search channel cannot yet be credited to organic.",
      remediation:
        "Close the GA4 and GTM audit, validate purchase tracking against Shopify order records, and separate organic from paid Google.",
      eta: "Audit closure next cycle; first organic-attributed revenue in the following report.",
    },
    {
      obstacle:
        "99 of 111 products are disapproved in Merchant Center as animal cruelty or live-animal sales because titles lead with the animal name (shark, megalodon, mako).",
      impact:
        "The megalodon and shark-tooth line, the client's stated priority products, is blocked from Google Shopping.",
      remediation:
        "Rewrite the 99 titles to lead with Fossil or Fossilized, add Extinct and scientific names, correct the product category, and resubmit the feed.",
      eta: "Rewrite and resubmit in the next cycle; approvals confirmed in Merchant Center.",
    },
    {
      obstacle:
        "Two T. rex collections compete for the same rankings. In August the tyrannosaurus-rex collection lost 224 clicks and 47,000 impressions while the tyrannosaur-teeth collection held.",
      impact:
        "Google alternates which URL ranks, and every switch costs stability on the client's top product priority.",
      remediation:
        "Differentiate the two collections by intent (teeth versus bones and skulls) with distinct titles, headings, and product sets, and redirect two dead T. rex URLs. Re-measure in 60 days before any merge.",
      eta: "Differentiation in the next cycle; re-measure by the November report.",
    },
    {
      obstacle:
        "The blog targets informational fossil queries owned by museum sites (Domain Rating 78 to 84) and increasingly absorbed by AI Overviews, so pages rank well but convert near zero.",
      impact:
        "Impression volume looks large but produces almost no clicks or revenue, and it depresses the site's average metrics.",
      remediation:
        "Consolidate overlapping posts, retire zero-click pages, and reinvest in collection-page content that ranks and converts.",
      eta: "Content consolidation across the next 90 days.",
    },
  ],

  technicalItems: [
    {
      issue:
        "Shopify's Web Pixels sandbox exposed about 9,844 URLs that Google crawled and was then told not to index, roughly 2.35 times the size of the indexed site, with a 5.5-to-1 not-indexed to indexed ratio.",
      why:
        "Wasted crawl budget dilutes the pages that should rank and slows how quickly real changes are discovered.",
      fix:
        "Shipped: robots.txt now blocks the sandbox, .atom feed, and parameter URLs for Google, not just the Ahrefs crawler. Remaining parameter disallows and the theme link fix are scheduled next.",
      developerNote:
        "Robots.txt Web Pixels and feed rules closed September 8; the parameter and theme-link cleanup is the next development item.",
    },
    {
      issue:
        "The top-ranking Mosasaur collection lived at a misspelled URL (/collections/mosasuar-teeth).",
      why:
        "A misspelled canonical URL is fragile and hard to build authority on, and renaming without a redirect would lose its rankings.",
      fix:
        "Shipped: the collection was renamed and 301-redirected so it keeps the traffic it earns for mosasaur and mosasaurus tooth queries.",
      developerNote: "Mosasaur rename and redirect closed September 9.",
    },
    {
      issue:
        "99 of 111 Merchant Center products are disapproved because titles lead with the extant-animal noun, triggering the endangered-species and live-animal policies.",
      why:
        "The affected megalodon and shark-tooth items are the client's priority products and are blocked from Shopping.",
      fix:
        "In progress: rewrite the 99 titles to lead with the fossil qualifier and scientific name, correct the product category, and resubmit.",
      developerNote:
        "Merchant Center title and category rewrite is in progress for the current cycle.",
    },
    {
      issue:
        "Two T. rex collections and two dead T. rex URLs compete for the same head terms, and duplicate parameter and encoded-space URLs remain.",
      why:
        "Keyword cannibalization and duplicate URLs split ranking signals across the client's most important product line.",
      fix:
        "Scheduled: differentiate the two live collections by intent, 301-redirect the two dead URLs, and add the remaining parameter disallows.",
      developerNote:
        "Scoped in the audit roadmap; differentiation and redirects planned for the next cycle.",
    },
  ],

  dataNotes: [
    "Performance source: Google Search Console URL-prefix property https://www.fossilageminerals.com/ (accessed under the fulfillment@allinadvertising.com Google account). Platform is Shopify with Cloudflare.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days, so no per-day normalization is needed.",
    "Total organic clicks (7,588 in August, 7,928 in July) and impressions (608,855 vs 724,484) are the sum of the device rows; the Search Console metric cards show rounded values (7.59K, 609K).",
    "Non-branded queries were isolated with Search Console's built-in brand filter. Brand terms are about 9% of clicks (roughly 658 in August), and the non-brand trend matches the total, so the movement is not a brand artifact.",
    "Average position is impression-weighted: 9.9 for August, 8.6 for July, and 8.9 on the trailing 28 days. It rose because low-click-through informational impressions that held good positions dropped out, not because commercial rankings fell.",
    "Revenue, orders, and average order value are from Shopify Analytics (Total sales by referrer) and are TOTAL store sales across all channels, not organic-attributed. Total sales were $35,845.49 across 252 orders in August and $53,870.28 across 241 orders in July; net sales were $33,135.26 and $51,400.07.",
    "Channel attribution is not reliable this cycle: a July theme change disturbed tracking, the GA4 and GTM revenue audit is open, and much of July's revenue landed in an unattributed direct bucket. Search-referred sales rose from about $1,101 (10 orders) in July to about $6,712 (62 orders) in August but blend organic and paid Google, so they are not reported as organic.",
    "Ahrefs figures (top-three keywords 464 to 792, up 71%, and the three-month impression and click trends) are third-party estimates over a three-month window and indicate direction, not measured traffic.",
    "Completed-work evidence comes from ClickUp task status, owners, and closure dates in the Fossil Age Minerals task list; owners are shown by role. Task closure records are the reporting source of truth.",
  ],
};
