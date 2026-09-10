import type { SeoStoryReportData } from "@/lib/reports/types";

export const pipingNowAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover the organic search and Merchant Center performance lost after the Shopify migration, win back the category and product pages that carry commercial traffic, keep measurement trustworthy across sources, and then grow into the competitor gaps.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "Month 1 sets the baseline. Search Console and Shopify tell the same story: traffic and the search channel are still working off the post-migration decline, the store held its revenue flat, and the page we most needed to recover has already turned.",
    title: "Organic search performance and the Month-1 baseline",
  },

  meta: {
    action:
      "The 5-source measurement reconciliation is complete and Shopify is the agreed revenue source of truth. Next: re-pull an aligned Jun 1 to Aug 31 window for a clean organic-only revenue figure, measure September's recrawl against August's URL fixes, and start category recovery on ProPress and pipe hangers.",
    client: "Piping Now",
    coverHeadline:
      "Month 1 set the baseline and shipped the technical fixes the Shopify migration left behind. Organic traffic is still down, but the page we most needed to recover already turned, and store revenue held flat.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "sc-domain:pipingnow.com",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + Shopify (Total sales by referrer) + ClickUp delivery records + the August Deep SEO Analysis",
  },

  executiveSummary:
    "The bottom line: August is the Month-1 baseline. Organic traffic is down, store revenue held flat, and the fixes that should reverse the decline shipped late in the month, so their effect shows in September, not August. Organic clicks fell 28.6% to 7,245 and impressions 11.9% to 861,923 (average position 10.0 to 11.8); nearly all of that is non-brand, the traffic we are here to grow. Two things point up. First, the pipe-to-metric conversion chart, the biggest loser in the onboarding audit, recovered by adding 89 clicks and 24,484 impressions. Second, the developer shipped the core crawl-cleanup: canonical product URLs, removed parameter links, and removed 301 hops. Store revenue was flat ($572,293 vs $572,711) on fewer but larger orders; the search channel fell about 19%, offset by growth in branded and direct orders. On measurement: the 5-source reconciliation (Search Console, Merchant Center, GA4, Google Ads, Shopify) is now complete, with Shopify as the agreed revenue source of truth. Because Google Ads is active (about $16K of spend in August), Shopify's 'search' revenue still blends paid and organic; GA4's channel split now separates the two, so next month reports a clean, window-aligned organic revenue figure.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks fell 28.6% to 7,245 and impressions 11.9% to 861,923, the post-migration decline continuing, but the flagship pipe-chart page recovered (+89 clicks).",
      status: "watch",
    },
    {
      area: "Revenue",
      statement:
        "Total store revenue held flat ($572,293, -0.1%); the search channel softened about 19% in line with organic traffic, offset by branded and direct growth. The 5-source reconciliation is complete, with Shopify as the source of truth, and a clean organic-only figure follows next month.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased from 10.0 to 11.8. Priority category pages (ProPress, pipe hangers, clevis hanger) are gaining impressions but losing clicks, a fixable click-through problem rather than disappearance.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Month 1 delivered the full audit suite and roadmap and shipped the P0 crawl-cleanup: canonical product URLs, parameter-link removal, and 301-hop normalization are all closed.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Establish a clean, trustworthy baseline before judging any change.",
      name: "Baseline and diagnosis",
      started:
        "The engagement opened on a site that had migrated to Shopify and lost organic traffic across the prior quarter, with numbers the team could not yet trust across Search Console, Merchant Center, GA4, Google Ads, and Shopify.",
      work:
        "We delivered the seven-part Deep SEO Analysis, a GSC pages audit, a technical and content SEO audit, and a competitor analysis, and compared August with July in Search Console.",
      result:
        "The decline is real but not a sitewide collapse: it is concentrated in a set of commercial category pages and the product long tail, while the top information page recovered and brand demand held. This report is that baseline.",
      next:
        "Hold this baseline and measure September against it as the recrawl of the August technical fixes takes effect.",
    },
    {
      businessPriority:
        "Stop the migration's crawl waste so Google spends its budget on pages that can actually rank.",
      name: "Technical crawl cleanup (P0)",
      started:
        "The audits showed Shopify exposing parameterized, collection-scoped, and variant URLs, plus leftover legacy redirects, so crawl budget was going to URLs that were never meant to rank.",
      work:
        "The developer replaced collection-scoped product links with canonical /products/{handle} URLs, removed parameterized internal product links from the theme, and normalized internal links to remove 301 hops.",
      result:
        "The internal-link graph now points at clean canonical product URLs, cutting the crawl waste. These fixes shipped mid-to-late August, so their recrawl impact shows from September, not in this month's numbers.",
      next:
        "Confirm the srsltid canonical behavior, review the remaining crawl and indexation buckets against the live site, and track the recrawl in the September report.",
    },
    {
      businessPriority:
        "Keep measurement trustworthy before reporting revenue as organic.",
      name: "Measurement reconciliation (revenue)",
      started:
        "Clicks and revenue did not line up across Search Console, Merchant Center, GA4, Google Ads, and Shopify, and the team is rightly sensitive to numbers that look positive but may not be real.",
      work:
        "We pulled and reconciled all five sources and confirmed Google Ads is active, which is why Shopify's 'search' referrer blends organic and paid Google.",
      result:
        "The reconciliation is complete across all five sources, with Shopify as the agreed revenue source of truth. GA4's channel split now separates organic from paid.",
      next:
        "Re-pull an aligned Jun 1 to Aug 31 window and report a clean organic-only revenue figure next month.",
    },
    {
      businessPriority:
        "Win back the category and product pages that carry commercial traffic.",
      name: "Category and page recovery (Month 2 preview)",
      started:
        "ProPress, pipe hangers, and clevis hanger were the priority-recovery categories in the audit, and they kept sliding in August while gaining impressions.",
      work:
        "We identified August's page-level winners and losers and confirmed the pipe-chart page recovery as the first proof point of the plan.",
      result:
        "The pipe-to-metric conversion chart gained 89 clicks and 24,484 impressions; the priority categories are being shown more but clicked less, which is a fixable click-through problem.",
      next:
        "Recover the six category pages against their closest competitors, repair the chart and conversion set, and consolidate the blog into one hanger hub and one ball-valve hub.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the seven-part Deep SEO Analysis (GSC performance, indexation, Merchant Center, Ahrefs, blog cannibalization, AI visibility, plus a data appendix) as Closed on August 10.",
      owner: "SEO Specialist",
      taskUrl: "https://app.clickup.com/t/868knt3xe",
      title: "Delivered the Deep SEO Analysis for Piping Now",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the technical and content SEO audit as Closed on August 10.",
      owner: "SEO Specialist",
      taskUrl: "https://app.clickup.com/t/868k1411p",
      title: "Completed the technical and content SEO audit",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the GSC pages audit as Closed on August 10; it surfaced the page-level winners and losers behind the decline.",
      owner: "SEO Specialist",
      taskUrl: "https://app.clickup.com/t/868k1413v",
      title: "Ran the GSC pages audit",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the competitor analysis report as Closed on August 10.",
      owner: "SEO Strategist",
      taskUrl: "https://app.clickup.com/t/868k141b4",
      title: "Delivered the competitor analysis report",
    },
    {
      completedOn: "August 12, 2026",
      evidence:
        "ClickUp records the data-consolidation pass as Closed on August 12, the first step of the cross-source measurement reconciliation.",
      owner: "SEO Specialist",
      taskUrl: "https://app.clickup.com/t/868kpmgzx",
      title: "Consolidated the measurement data across sources",
    },
    {
      completedOn: "August 12, 2026",
      evidence:
        "ClickUp records the developer review of the roadmap as Closed on August 12, confirming the technical scope is implementable.",
      owner: "Developer",
      taskUrl: "https://app.clickup.com/t/868kpmh00",
      title: "Completed the developer review of the roadmap",
    },
    {
      completedOn: "August 17, 2026",
      evidence:
        "ClickUp records the August 2026 SEO roadmap (P0 stabilize, P1 recover, P2 grow) as Closed on August 17.",
      owner: "SEO Strategist",
      taskUrl: "https://app.clickup.com/t/868kpmgzf",
      title: "Built the three-phase SEO roadmap",
    },
    {
      completedOn: "August 19, 2026",
      evidence:
        "ClickUp records the theme fix as Closed on August 19: collection-scoped product links were replaced with canonical /products/{handle} URLs.",
      owner: "Developer",
      taskUrl: "https://app.clickup.com/t/868krkz9h",
      title: "Replaced collection-scoped links with canonical product URLs",
    },
    {
      completedOn: "August 24, 2026",
      evidence:
        "ClickUp records the theme fix as Closed on August 24: parameterized internal product links were removed from the theme.",
      owner: "Developer",
      taskUrl: "https://app.clickup.com/t/868krkz9w",
      title: "Removed parameterized internal product links from the theme",
    },
    {
      completedOn: "August 26, 2026",
      evidence:
        "ClickUp records the theme fix as Closed on August 26: internal links were normalized to their final destinations to remove 301 hops.",
      owner: "Developer",
      taskUrl: "https://app.clickup.com/t/868krkzbk",
      title: "Normalized internal links to remove 301 redirect hops",
    },
    {
      completedOn: "August 28, 2026",
      evidence:
        "ClickUp records the client access and approvers task as Closed on August 28, unblocking the P0 work that requires client-side access.",
      owner: "Account Manager",
      taskUrl: "https://app.clickup.com/t/868krkyvx",
      title: "Confirmed client access and named the approvers",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "10,143",
      current: "7,245",
      change: "-28.6%",
      businessMeaning:
        "Fewer organic visits. This is the post-migration decline the recovery plan targets, and the fixes that address it shipped this month and take effect in September.",
      status: "watch",
    },
    {
      metric: "Organic impressions",
      previous: "978,726",
      current: "861,923",
      change: "-11.9%",
      businessMeaning:
        "Visibility fell less than clicks: the category pages are still being shown, they are just being clicked less often.",
      status: "watch",
    },
    {
      metric: "Non-brand clicks",
      previous: "9.96K",
      current: "7.07K",
      change: "-29%",
      businessMeaning:
        "Non-brand is about 98% of all clicks and the demand we are paid to grow. Brand searches are negligible, so the decline is essentially all non-brand.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "10.0",
      current: "11.8",
      change: "-1.8 positions",
      businessMeaning:
        "Rankings eased, in line with priority category pages losing click-through and position rather than dropping out of the index.",
      status: "watch",
    },
    {
      metric: "Flagship page clicks (pipe-chart)",
      previous: "374",
      current: "463",
      change: "+23.8%",
      businessMeaning:
        "The pipe-to-metric conversion chart, the biggest loser in the onboarding audit, turned positive. The first proof point of the recovery plan.",
      status: "positive",
    },
    {
      metric: "Total store revenue (all channels)",
      previous: "$572,711",
      current: "$572,293",
      change: "-0.1%",
      businessMeaning:
        "Store revenue held flat month over month even as orders fell 11%, because average order value rose about 12%. This is all-channel Shopify revenue, not organic.",
      status: "neutral",
    },
    {
      metric: "Search-referrer revenue (organic + paid)",
      previous: "$162,707",
      current: "$132,458",
      change: "-18.6%",
      businessMeaning:
        "The search channel softened in line with the organic-traffic decline. It blends organic and paid Google, so a window-aligned organic-only figure follows next month now that reconciliation is complete.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic metrics (clicks, impressions, non-brand, position) come from the Google Search Console domain property sc-domain:pipingnow.com, August 1-31 vs July 1-31, 2026 (both 31 days), accessed under a non-default agency Google account. Exact clicks (7,245 vs 10,143) and impressions (861,923 vs 978,726) are the sum of the device rows; the metric cards round to 7.25K/10.1K and 862K/979K. Non-brand uses Search Console's built-in brand filter and is shown at the card-rounded value (7.07K vs 9.96K). Revenue comes from Shopify's 'Total sales by referrer' report for the same months; total store revenue is all-channel, and 'search-referrer revenue' sums the search-source rows (Google, Bing, Yahoo), which blend organic and paid because Google Ads is active. In-store and phone sales sit outside the Shopify figure.",

  conversionPlan: {
    owner: "SEO and analytics team, with client Shopify, GA4, and Google Ads access",
    sourcePriority:
      "The 5-source reconciliation is complete and Shopify is the agreed revenue source of truth. The remaining step is to re-pull an aligned Jun 1 to Aug 31 window so organic can be separated from paid on the same dates using GA4's channel split.",
    nextReportExpectation:
      "Next month reports a clean organic-only revenue figure and, once a second tracked month exists, organic revenue month over month by search engine.",
  },

  performanceCharts: {
    revenue: {
      title: "Store revenue held flat; the search channel softened",
      insight:
        "Total store revenue was essentially flat month over month (-0.1%) even as orders fell 11%. Average order value rose about 12%, so fewer, larger orders carried the month. The search channel softened about 19%, in line with the organic-traffic decline, while branded and direct orders grew and held the total steady.",
      channelContext:
        "Source: Shopify 'Total sales by referrer'. These are all-channel store figures. The 'search' referrer (Google, Bing, Yahoo) blends organic and paid search, because Google Ads is active (about $16K of spend in August), so search/google mixes ads and organic. The 5-source reconciliation (Search Console, Merchant Center, GA4, Google Ads, Shopify) is complete, with Shopify as the revenue source of truth; GA4's channel split separates organic from paid, and a window-aligned organic-only figure follows next month. In-store and phone sales sit outside the Shopify figure.",
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
            "The search decline concentrated in Google (down about $20.8K) and Bing (down about $10.1K). These figures blend organic and paid search.",
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
        "Organic clicks fell 28.6% and impressions 11.9%, the post-migration decline continuing. Both months had 31 days, so the drop is not a calendar effect. Impressions fell less than clicks, meaning the site is still being shown but clicked less.",
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
        "The decline was broad-based across the product long tail (about -2,875 clicks), with the priority category pages still sliding before the fixes take effect. The one clear gain was the flagship pipe-chart page (+89), the page the recovery plan targeted first. Brand is only about 2% of clicks, so this is effectively all non-brand movement.",
      title: "What moved clicks: July to August",
      total: 7245,
      totalDisplay: "7,245",
    },
    homepage: {
      title: "The page we most needed back is recovering",
      insight:
        "The pipe-to-metric conversion chart, the biggest loser in the onboarding audit, gained 89 clicks and 24,484 impressions in August. Click-through dipped slightly as it re-entered more competitive impression space, but clicks and visibility are both climbing. This is the first proof point of the recovery plan.",
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
        "Piping Now's search traffic is desktop-dominant (5,598 of 7,245 clicks, about 77%), and desktop is where most of the loss sits (-2,243 of -2,898). Mobile fell a similar 28.3%, and tablet is negligible at 31 clicks.",
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
        "Organic traffic is still working off the post-migration decline. Clicks fell 28.6% month over month and impressions 11.9%.",
      impact:
        "Fewer organic visits to the category and product pages that drive commercial demand.",
      remediation:
        "The canonical-URL, parameter-link, and 301-hop fixes shipped in August cut the crawl waste that was holding recovery back. Category recovery on the biggest losers begins in September.",
      eta: "Measure the recrawl impact in the September report.",
    },
    {
      obstacle:
        "Priority category pages are gaining impressions but losing clicks: ProPress (-44 clicks, +3,520 impressions), pipe hangers (-37 clicks, +1,785 impressions), and clevis hanger (-31 clicks).",
      impact:
        "The pages that carry commercial traffic are being shown more but passed over, a click-through and position problem on high-value categories.",
      remediation:
        "Rework titles, H1s, intro copy, and internal links against the closest competitors, using the categories that are growing (stainless buttweld, strainers, ball valves) as the template.",
      eta: "Month 2 category recovery.",
    },
    {
      obstacle:
        "Shopify's 'search' revenue blends organic and paid Google, because Google Ads is active (about $16K of spend in August).",
      impact:
        "Store revenue is trustworthy at the all-channel level, but the search figure on its own is not organic-only.",
      remediation:
        "The 5-source reconciliation is complete and Shopify is the source of truth. Re-pull an aligned Jun 1 to Aug 31 window and use GA4's channel split to report organic separately.",
      eta: "Clean organic revenue reported next month.",
    },
    {
      obstacle:
        "Merchant Center carries a critical local-store warning, 164 products not showing, and roughly 1.05K products Google found outside the Simprosys feed (of 14,778 total).",
      impact:
        "Shopping and free-listing visibility is impaired and the catalog can look partly hidden, which distorts every conversation about product visibility.",
      remediation:
        "Link the Business Profile or turn off the local surface to clear the warning, fix the 164 disapproved products, and reconcile the products found outside the feed against Shopify and Simprosys.",
      eta: "Month 1-2; revalidate after crawl cycles.",
    },
    {
      obstacle:
        "Ahrefs shows a backlink spike (about 9.9K new backlinks) that is mostly spam, not authority growth.",
      impact:
        "The trend line can look like link growth when it is not, and an unchecked spam wave is a domain-level risk.",
      remediation:
        "Segment the spam domains, monitor Search Console for manual actions, and hold any disavow file unless there is real evidence to support one.",
      eta: "Ongoing monitoring.",
    },
  ],

  technicalItems: [
    {
      issue:
        "The Shopify theme exposed parameterized, collection-scoped, and variant product URLs, and internal links passed through 301 redirect hops.",
      why:
        "Google spent crawl budget on URLs that were never meant to rank, slowing how fast the real product and category pages get recrawled and recovered.",
      fix:
        "Done this month: collection-scoped links replaced with canonical /products/{handle} URLs, parameter links removed from the theme, and internal links normalized to remove 301 hops. Next: confirm the srsltid canonical behavior and monitor the recrawl.",
      developerNote:
        "ClickUp 868krkz9h (canonical product URLs, Aug 19), 868krkz9w (parameter links, Aug 24), and 868krkzbk (301-hop normalization, Aug 26) are all closed; scope validated in Developer Review 868kpmh00.",
    },
    {
      issue:
        "Priority category pages are losing clicks while gaining impressions (ProPress, pipe hangers, clevis hanger).",
      why:
        "The pages that carry commercial traffic are being shown more but clicked less, which is click-through and position erosion on the highest-value categories.",
      fix:
        "Recover each page's title, H1, intro, product count, and internal links against the closest competitors, and copy what the growing categories (stainless buttweld, strainers, ball valves) do well.",
      developerNote:
        "Movers identified in the GSC pages audit 868k1413v; recovery scheduled as the Month-2 P1 workstream.",
    },
    {
      issue:
        "Shopify's 'search/google' revenue blends organic and paid, because Google Ads is active.",
      why:
        "A blended figure cannot stand in for organic-only revenue in an SEO report.",
      fix:
        "Reconciliation across all five sources is complete with Shopify as the source of truth. Re-pull an aligned Jun 1 to Aug 31 window and use GA4's channel split to isolate organic.",
      developerNote:
        "Data consolidation 868kpmgzx closed Aug 12; the full 5-source reconciliation is complete (see the revenue conversion plan above).",
    },
    {
      issue:
        "Merchant Center shows a critical local-store warning, 164 products not showing, and products found outside the primary feed.",
      why:
        "Invalid or missing listings keep products out of Shopping and free listings, the core ecommerce visibility surface, and the warning makes the catalog look blocked.",
      fix:
        "Clear the local-store warning (link the Business Profile or disable the local surface), fix the 164 disapprovals, and reconcile the products found outside the feed against Shopify and Simprosys.",
      developerNote:
        "From the Merchant Center audit (account 118194292, Simprosys feed via Merchant API); tracked as roadmap P0/P1.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console domain property sc-domain:pipingnow.com, accessed under a non-default agency Google account (the default profile has no access). Platform is Shopify (Plus).",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days, so the change is not a calendar effect.",
    "Total clicks (7,245 vs 10,143) and impressions (861,923 vs 978,726) are the sum of the device rows; the metric cards round to 7.25K/10.1K and 862K/979K. Average CTR was 0.84% vs 1.04%; average position 11.8 vs 10.0.",
    "Non-brand figures use Search Console's built-in brand filter and are reported at the card-rounded value (about 7,070 in August vs 9,960 in July). Brand queries (mainly 'piping now' and 'pipingnow') are roughly 2% of clicks, so the decline is essentially all non-brand.",
    "Devices (clicks): desktop 5,598 vs 7,841, mobile 1,616 vs 2,253, tablet 31 vs 49. Desktop is about 77% of clicks and about 77% of the loss.",
    "Top page movers (August vs July, clicks): pipe-chart conversion page +89 (463 vs 374, impressions 94,904 vs 70,420); losers ProPress collection -44, pipe hangers collection -37, clevis hanger collection -31, plus a broad product long-tail decline.",
    "Revenue source: Shopify 'Total sales by referrer' report, August vs July 2026. Total store revenue (all channels) was $572,292.97 across 710 orders vs $572,711.35 across 797 orders (AOV $806.05 vs $718.58).",
    "Search-referrer revenue sums the search-source rows: Google $110,248.70 (Aug) vs $131,024.76 (Jul), Bing $20,885.54 vs $30,940.97, Yahoo $1,324.10 vs $741.56 (DuckDuckGo and others are immaterial). These blend organic and paid search because Google Ads is active, so they are not reported as clean organic; branded and direct rows ($310,358 vs $244,490) grew and held the total flat.",
    "Measurement reconciliation is complete across all five sources (Search Console, Merchant Center, GA4, Google Ads, Shopify), with Shopify as the agreed revenue source of truth. Source windows currently differ, so a window-aligned Jun 1 to Aug 31 pull will produce the clean organic-only figure in the next report. Google Ads (account 652-883-3412) spent about $16.4K in August across 5 campaigns. In-store and phone sales sit outside the Shopify figure.",
    "Merchant Center (account 118194292, Simprosys feed), the products found outside the feed, the 164 products not showing, and the spam-backlink figures come from the August Deep SEO Analysis recorded in ClickUp.",
    "Completed-work evidence comes from ClickUp task closures in the PipingNow Tasks list (list 901102227261); task closure records are the reporting source of truth. Routine recurring items (billing confirmations, weekly ads reviews) are excluded. Owners are shown by role, not name.",
  ],
};
