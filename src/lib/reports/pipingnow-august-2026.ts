import type { SeoStoryReportData } from "@/lib/reports/types";

export const pipingNowAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover the organic search and Merchant Center performance lost after the Shopify migration, win back the category and product pages that carry commercial traffic, keep measurement trustworthy, and then grow into the competitor gaps.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Month 1 sets the baseline. Traffic and the search channel are still working off the post-migration decline, store revenue held flat, and the page we most needed to recover has already turned.",
    title: "Organic search performance and the Month-1 baseline",
  },

  meta: {
    action:
      "Report a clean organic-only revenue figure next month from a window-aligned Jun 1 to Aug 31 pull, measure September's recrawl against the August fixes, and clear the client sign-offs and access requests that block the remaining work.",
    client: "Piping Now",
    coverHeadline:
      "Month 1 set the baseline and shipped the core technical fixes. Organic traffic is still down, but the page we most needed to recover already turned, and store revenue held flat.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "sc-domain:pipingnow.com",
    reportType: "Monthly Organic Search Performance Report",
    source: "Google Search Console + Shopify (Total sales by referrer) + ClickUp",
  },

  executiveSummary:
    "August is the Month-1 baseline. Organic traffic is down and store revenue held flat, and the fixes meant to reverse the decline shipped late in the month, so their impact shows in September. Clicks fell 28.6% to 7,245 and impressions 11.9% to 861,923 (position 10.0 to 11.8), nearly all of it non-brand. The bright spot: the pipe-chart page, the biggest loser in the audit, recovered by adding 89 clicks and 24,484 impressions. Store revenue was flat ($572,293 vs $572,711); the search channel fell about 19%, offset by branded and direct growth. Measurement across all five sources is now reconciled, with Shopify as the source of truth. Because Google Ads is active (about $16K in August), Shopify's search revenue still blends paid and organic; GA4 now splits the two, so next month reports a clean organic figure.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Clicks fell 28.6% to 7,245 and impressions 11.9% to 861,923, but the flagship pipe-chart page recovered (+89 clicks).",
      status: "watch",
    },
    {
      area: "Revenue",
      statement:
        "Store revenue held flat ($572,293, -0.1%); the search channel fell about 19%, offset by branded and direct growth. A clean organic figure follows next month.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased from 10.0 to 11.8. Priority category pages are gaining impressions but losing clicks, a fixable click-through problem.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Month 1 delivered the audits and roadmap and shipped the crawl-cleanup: canonical URLs, parameter-link removal, and 301-hop fixes are all done.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Establish a clean, trustworthy baseline before judging any change.",
      name: "Baseline and diagnosis",
      started:
        "The site had migrated to Shopify and lost organic traffic across the prior quarter, with numbers the team could not yet trust.",
      work:
        "We delivered the SEO analysis, technical and content audit, GSC pages audit, and competitor analysis, and compared August with July.",
      result:
        "The decline is real but concentrated in commercial category pages and the product long tail, not sitewide. The top information page recovered and brand demand held.",
      next: "Hold this baseline and measure September against it.",
    },
    {
      businessPriority:
        "Stop the migration's crawl waste so Google spends its budget on pages that can rank.",
      name: "Technical crawl cleanup",
      started:
        "Shopify was exposing parameterized, collection-scoped, and variant URLs, plus leftover legacy redirects.",
      work:
        "The developer replaced collection-scoped links with canonical product URLs, removed parameter links from the theme, and normalized internal links to remove 301 hops.",
      result:
        "Internal links now point at clean canonical URLs. The fixes shipped late August, so the recrawl impact shows from September.",
      next:
        "Confirm the srsltid canonical behavior, review the remaining crawl buckets, and track the recrawl.",
    },
    {
      businessPriority:
        "Keep measurement trustworthy before reporting revenue as organic.",
      name: "Measurement reconciliation",
      started:
        "Clicks and revenue did not line up across the five sources, and the team is sensitive to numbers that look positive but may not be real.",
      work:
        "We reconciled all five sources and confirmed Google Ads is active, which is why Shopify's search referrer blends organic and paid.",
      result:
        "The reconciliation is complete, with Shopify as the source of truth. GA4's channel split now separates organic from paid.",
      next:
        "Re-pull an aligned Jun 1 to Aug 31 window and report a clean organic figure next month.",
    },
    {
      businessPriority:
        "Win back the category and product pages that carry commercial traffic.",
      name: "Category and page recovery",
      started:
        "ProPress, pipe hangers, and clevis hanger kept sliding in August while gaining impressions.",
      work:
        "We reworked the six priority category pages, repaired the pipe chart and conversion pages, and strengthened internal linking into the priority hubs.",
      result:
        "The recovery edits are shipped, and the pipe-chart page already turned positive (+89 clicks). The rest depends on the recrawl.",
      next:
        "Measure the recovered pages in September and consolidate the blog once the client approves the merge and delete list.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 2026",
      evidence:
        "The seven-part Deep SEO Analysis, technical and content audit, GSC pages audit, and competitor analysis, all closed.",
      owner: "SEO Specialist",
      title: "Delivered the SEO inputs and analysis",
    },
    {
      completedOn: "August 2026",
      evidence:
        "Canonical product URLs, parameter-link removal, and 301-hop normalization deployed to the theme.",
      owner: "Developer",
      title: "Shipped the developer crawl-cleanup",
    },
    {
      completedOn: "August 2026",
      evidence:
        "GSC, Merchant Center, GA4, Google Ads, and Shopify reconciled, with Shopify set as the revenue source of truth.",
      owner: "SEO Specialist",
      title: "Reconciled clicks and revenue across all five sources",
    },
    {
      completedOn: "August 2026",
      evidence:
        "Order of work, client access and approvers, and the reporting baseline all approved with the client.",
      owner: "Account Manager",
      title: "Secured the client sign-offs and baseline",
    },
    {
      completedOn: "August 2026",
      evidence:
        "The critical local-store warning was cleared from Merchant Center.",
      owner: "SEO Specialist",
      title: "Resolved the Merchant Center local-store warning",
    },
    {
      completedOn: "August 2026",
      evidence:
        "The products Google found outside the Simprosys feed were exported and reviewed for add, exclude, or fix decisions.",
      owner: "SEO Specialist",
      title: "Reviewed the products found outside the feed",
    },
    {
      completedOn: "August 2026",
      evidence:
        "Crawl and indexation buckets checked against the live site, and the sitemaps reconciled against Search Console coverage.",
      owner: "SEO Specialist",
      title: "Reviewed crawl and indexation and reconciled sitemaps",
    },
    {
      completedOn: "August 2026",
      evidence:
        "Titles, H1s, copy, and internal links reworked on the six priority categories, plus the pipe chart and conversion pages.",
      owner: "SEO Specialist",
      title: "Recovered the priority category and chart pages",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "10,143",
      current: "7,245",
      change: "-28.6%",
      businessMeaning:
        "Fewer organic visits. The fixes that address this shipped this month and take effect in September.",
      status: "watch",
    },
    {
      metric: "Organic impressions",
      previous: "978,726",
      current: "861,923",
      change: "-11.9%",
      businessMeaning:
        "Visibility fell less than clicks: the pages are still shown, just clicked less.",
      status: "watch",
    },
    {
      metric: "Non-brand clicks",
      previous: "9.96K",
      current: "7.07K",
      change: "-29%",
      businessMeaning:
        "Non-brand is about 98% of clicks and the demand we grow, so the decline is essentially all non-brand.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "10.0",
      current: "11.8",
      change: "-1.8 positions",
      businessMeaning:
        "Rankings eased, in line with category pages losing click-through rather than dropping out of the index.",
      status: "watch",
    },
    {
      metric: "Flagship page clicks (pipe-chart)",
      previous: "374",
      current: "463",
      change: "+23.8%",
      businessMeaning:
        "The biggest loser in the audit turned positive. The first proof point of the recovery.",
      status: "positive",
    },
    {
      metric: "Total store revenue (all channels)",
      previous: "$572,711",
      current: "$572,293",
      change: "-0.1%",
      businessMeaning:
        "Flat month over month even as orders fell 11%, because average order value rose about 12%. All-channel, not organic.",
      status: "neutral",
    },
    {
      metric: "Search-referrer revenue (organic + paid)",
      previous: "$162,707",
      current: "$132,458",
      change: "-18.6%",
      businessMeaning:
        "The search channel softened in line with organic traffic. It blends organic and paid, so a clean organic figure follows next month.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic (clicks, impressions, non-brand, position) is from Google Search Console (sc-domain:pipingnow.com), August 1-31 vs July 1-31, 2026, both 31 days, under a non-default agency account. Clicks and impressions are the device-row sums; the cards round. Non-brand uses GSC's built-in brand filter (card-rounded). Revenue is from Shopify's Total sales by referrer; total store revenue is all-channel, and search-referrer revenue sums the search rows (Google, Bing, Yahoo), which blend organic and paid because Google Ads is active. In-store and phone sales sit outside Shopify.",

  conversionPlan: {
    owner: "SEO and analytics team, with client Shopify, GA4, and Google Ads access",
    sourcePriority:
      "All five sources are reconciled and Shopify is the source of truth. The remaining step is a window-aligned Jun 1 to Aug 31 pull so GA4 can split organic from paid on the same dates.",
    nextReportExpectation:
      "Next month reports a clean organic-only revenue figure and, once a second tracked month exists, organic revenue month over month.",
  },

  performanceCharts: {
    revenue: {
      title: "Store revenue held flat; the search channel softened",
      insight:
        "Store revenue was flat month over month (-0.1%) on fewer but larger orders (average order value up about 12%). The search channel fell about 19%, in line with the organic decline, while branded and direct orders grew and held the total steady.",
      channelContext:
        "Source: Shopify Total sales by referrer (all-channel). The search referrer blends organic and paid because Google Ads is active (about $16K in August), so search/google mixes ads and organic. All five sources are reconciled with Shopify as the source of truth; GA4 splits organic from paid, and a window-aligned organic figure follows next month. In-store and phone sales sit outside Shopify.",
      series: [
        {
          change: "-0.1%",
          current: 572292.97,
          currentDisplay: "$572,293",
          label: "Total store revenue (all channels)",
          previous: 572711.35,
          previousDisplay: "$572,711",
          status: "watch",
        },
        {
          change: "+26.9%",
          current: 310358.24,
          currentDisplay: "$310,358",
          label: "Branded + direct revenue",
          previous: 244490.35,
          previousDisplay: "$244,490",
          status: "positive",
        },
        {
          change: "-18.6%",
          current: 132458.34,
          currentDisplay: "$132,458",
          label: "Search-referrer revenue (organic + paid)",
          previous: 162707.29,
          previousDisplay: "$162,707",
          status: "watch",
        },
      ],
      rankings: [
        {
          insight:
            "The search decline concentrated in Google (down about $20.8K) and Bing (down about $10.1K). These figures blend organic and paid.",
          periods: [
            {
              label: "July 2026",
              items: [
                { display: "$131,025", label: "Google", value: 131024.76 },
                { display: "$30,941", label: "Bing", value: 30940.97 },
                { display: "$742", label: "Yahoo", value: 741.56 },
              ],
            },
            {
              label: "August 2026",
              items: [
                { display: "$110,249", label: "Google", value: 110248.7 },
                { display: "$20,886", label: "Bing", value: 20885.54 },
                { display: "$1,324", label: "Yahoo", value: 1324.1 },
              ],
            },
          ],
          title: "Search-referrer revenue by engine (organic + paid)",
        },
      ],
    },
    growth: {
      title: "Traffic fell across clicks and impressions",
      insight:
        "Clicks fell 28.6% and impressions 11.9%. Both months had 31 days, so it is not a calendar effect. Impressions fell less than clicks, so the site is still shown but clicked less.",
      series: [
        {
          change: "-28.6%",
          current: 7245,
          currentDisplay: "7,245",
          label: "Organic clicks",
          previous: 10143,
          previousDisplay: "10,143",
          status: "watch",
        },
        {
          change: "-11.9%",
          current: 861923,
          currentDisplay: "862K",
          label: "Organic impressions",
          previous: 978726,
          previousDisplay: "979K",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 10143,
      baselineDisplay: "10,143",
      contributions: [
        { display: "+89", label: "Pipe-chart conversion page", value: 89 },
        { display: "-44", label: "ProPress and press fittings collection", value: -44 },
        { display: "-37", label: "Pipe hangers collection", value: -37 },
        { display: "-31", label: "Clevis hanger collection", value: -31 },
        { display: "-2,875", label: "All other pages (product long tail)", value: -2875 },
      ],
      insight:
        "The decline was broad across the product long tail (about -2,875 clicks), with priority categories still sliding before the fixes take effect. The one clear gain was the pipe-chart page (+89). Brand is about 2% of clicks, so this is effectively all non-brand.",
      title: "What moved clicks: July to August",
      total: 7245,
      totalDisplay: "7,245",
    },
    homepage: {
      title: "The page we most needed back is recovering",
      insight:
        "The pipe-chart page, the biggest loser in the audit, gained 89 clicks and 24,484 impressions. Click-through dipped slightly as it re-entered more competitive space, but clicks and visibility are both climbing. The first proof point of the recovery.",
      series: [
        {
          change: "+23.8%",
          current: 463,
          currentDisplay: "463",
          label: "Clicks",
          previous: 374,
          previousDisplay: "374",
          status: "positive",
        },
        {
          change: "+34.8%",
          current: 94904,
          currentDisplay: "94,904",
          label: "Impressions",
          previous: 70420,
          previousDisplay: "70,420",
          status: "positive",
        },
        {
          change: "-0.04 points",
          current: 0.49,
          currentDisplay: "0.49%",
          label: "Click rate",
          previous: 0.53,
          previousDisplay: "0.53%",
          status: "watch",
        },
      ],
    },
    devices: {
      title: "Desktop and mobile both fell about 28%",
      insight:
        "Search traffic is desktop-dominant (5,598 of 7,245 clicks, about 77%), and desktop carried most of the loss. Mobile fell a similar 28.3%, and tablet is negligible at 31 clicks.",
      series: [
        {
          change: "-28.6%",
          current: 5598,
          currentDisplay: "5,598",
          label: "Desktop",
          previous: 7841,
          previousDisplay: "7,841",
          status: "watch",
        },
        {
          change: "-28.3%",
          current: 1616,
          currentDisplay: "1,616",
          label: "Mobile",
          previous: 2253,
          previousDisplay: "2,253",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "The recovery work is done, but the traffic lift depends on Google recrawling the fixed URLs.",
      impact:
        "August still shows the decline (clicks down 28.6%) because the fixes shipped late in the month.",
      remediation:
        "Nothing more to build here. Monitor the recrawl of the canonical-URL, parameter, and 301 fixes and the recovered category pages.",
      eta: "Measure in the September report.",
    },
    {
      obstacle:
        "Two client sign-offs are pending and block the next fixes: the product-coverage decisions and the blog merge and delete list.",
      impact:
        "Feed cleanup and blog consolidation cannot proceed until these are approved.",
      remediation:
        "Account team to walk the client through both lists and get approval.",
      eta: "Waiting on client.",
    },
    {
      obstacle:
        "Client access is pending: Cloudflare access and server or CDN logs.",
      impact:
        "Cloudflare access blocks the www to non-www redirect fix; the logs are needed to verify the redirect, 404, and 5xx buckets.",
      remediation:
        "Client to grant Cloudflare access and provide server or CDN log access.",
      eta: "Waiting on client.",
    },
    {
      obstacle:
        "Client actions are pending on the catalog: 164 products are not showing on Google, and the Shopify app and pixel sandbox URLs need approval to change.",
      impact:
        "The 164 products stay out of Shopping until images and weights are fixed, and the sandbox URLs keep adding crawl noise.",
      remediation:
        "Client merchandising to fix the 164 products, and approve the app and pixel changes so the sandbox URLs can be suppressed.",
      eta: "Waiting on client.",
    },
    {
      obstacle:
        "The search revenue figure still blends organic and paid because Google Ads is active.",
      impact:
        "Store revenue is trustworthy at the all-channel level, but the search figure alone is not organic-only.",
      remediation:
        "Reconciliation is complete and Shopify is the source of truth. Re-pull an aligned Jun 1 to Aug 31 window and use GA4's split for organic.",
      eta: "Clean organic revenue next month.",
    },
  ],

  technicalItems: [
    {
      issue:
        "Shopify exposed parameterized, collection-scoped, and variant product URLs, and internal links passed through 301 hops.",
      why:
        "Google spent crawl budget on URLs that were never meant to rank, slowing recovery of the real pages.",
      fix:
        "Done this month: canonical product URLs, parameter-link removal, and 301-hop normalization. Next: confirm the srsltid canonical behavior and watch the recrawl.",
      developerNote:
        "Shipped in the August developer-work bundle; recrawl monitored in September.",
    },
    {
      issue:
        "Priority category pages were losing clicks while gaining impressions (ProPress, pipe hangers, clevis hanger).",
      why:
        "The pages that carry commercial traffic were shown more but clicked less, which is click-through and position erosion.",
      fix:
        "Done this month: titles, H1s, copy, and internal links reworked, plus the pipe chart and conversion pages repaired. Impact depends on the recrawl.",
      developerNote:
        "Category recovery, pipe-chart repair, and internal-linking all shipped this month.",
    },
    {
      issue:
        "Shopify's search revenue blends organic and paid because Google Ads is active.",
      why: "A blended figure cannot stand in for organic-only revenue.",
      fix:
        "All five sources are reconciled with Shopify as the source of truth. Re-pull an aligned Jun 1 to Aug 31 window and use GA4's channel split to isolate organic.",
      developerNote: "GA4 channel split is available for the aligned pull.",
    },
    {
      issue:
        "Merchant Center: the local-store warning is cleared, but 164 products are still not showing and some products sit outside the primary feed.",
      why:
        "Missing or invalid listings keep products out of Shopping and free listings.",
      fix:
        "Warning resolved and the products outside the feed reviewed. The 164 disapprovals await client fixes to images and weights.",
      developerNote: "Merchant Center account 118194292, Simprosys feed.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console domain property sc-domain:pipingnow.com, under a non-default agency Google account. Platform is Shopify (Plus).",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days.",
    "Clicks (7,245 vs 10,143) and impressions (861,923 vs 978,726) are the sum of the device rows; the cards round to 7.25K/10.1K and 862K/979K. Average CTR 0.84% vs 1.04%; average position 11.8 vs 10.0.",
    "Non-brand uses GSC's built-in brand filter (about 7,070 vs 9,960). Brand queries are roughly 2% of clicks, so the decline is essentially all non-brand.",
    "Devices (clicks): desktop 5,598 vs 7,841, mobile 1,616 vs 2,253, tablet 31 vs 49. Desktop is about 77% of clicks and of the loss.",
    "Top page movers (clicks): pipe-chart page +89 (463 vs 374, impressions 94,904 vs 70,420); losers ProPress -44, pipe hangers -37, clevis hanger -31, plus a broad long-tail decline.",
    "Revenue source: Shopify Total sales by referrer. Total store revenue (all channels) was $572,292.97 across 710 orders vs $572,711.35 across 797 orders (AOV $806.05 vs $718.58). Search rows: Google $110,248.70 vs $131,024.76, Bing $20,885.54 vs $30,940.97, Yahoo $1,324.10 vs $741.56. These blend organic and paid because Google Ads is active (about $16.4K spend in August).",
    "Measurement is reconciled across all five sources (Search Console, Merchant Center, GA4, Google Ads, Shopify), with Shopify as the source of truth. Because source windows differ, a window-aligned Jun 1 to Aug 31 pull will produce the clean organic-only figure next month. In-store and phone sales sit outside Shopify.",
    "Merchant Center (account 118194292, Simprosys feed) figures come from the August analysis.",
    "Completed and in-progress work is drawn from the subtasks of the August 2026 SEO Tasks bundle in ClickUp. Owners are shown by role, not name, and routine items are excluded.",
  ],
};
