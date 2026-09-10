import type { SeoStoryReportData } from "@/lib/reports/types";

export const pipingNowAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover the organic search and Merchant Center performance lost after the Shopify migration, win back the category and product pages that carry commercial traffic, rebuild trustworthy cross-source measurement, and then grow into the competitor gaps.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report — Month 1 of the recovery roadmap (make the numbers trustworthy, then recover what sells, then grow), and it sets the baseline. Search Console traffic and Shopify revenue tell the same story: the site is still working off the post-migration decline, the search channel softened while the store held its revenue flat, and the single page we most needed to recover has already turned.",
    title: "Organic search performance and the Month-1 baseline",
  },

  meta: {
    action:
      "Complete the cross-source measurement reconciliation (Search Console, Merchant Center, GA4, Google Ads, Shopify) so organic revenue reports cleanly, then measure September's recrawl against August's canonical-URL, parameter, and 301-hop fixes and begin category recovery on ProPress and pipe hangers.",
    client: "Piping Now",
    coverHeadline:
      "Month 1 set the baseline and shipped the technical fixes the Shopify migration left behind. Organic traffic is still down, but the page we most needed to recover already turned — and store revenue held flat.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "sc-domain:pipingnow.com",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + Shopify (Total sales by referrer) + ClickUp delivery records + the August Deep SEO Analysis",
  },

  executiveSummary:
    "August is Month 1 of Piping Now's engagement, and this first report sets the baseline. Organic search traffic is still working off the post-migration decline: Search Console clicks fell 28.6% to 7,245 and impressions fell 11.9% to 861,923, with the average position easing from 10.0 to 11.8. Almost all of that is non-brand (brand is only about 2% of clicks), so the decline sits squarely in the traffic we are paid to grow. But two things point the other way. First, the single page we most needed to recover — the nominal pipe-to-metric conversion chart, the biggest three-month loser in the onboarding audit — turned positive, adding 89 clicks and 24,484 impressions. Second, the foundational technical fixes shipped in the second half of the month: the developer replaced collection-scoped links with canonical product URLs, removed parameterized theme links, and normalized internal links to remove 301 hops — exactly the crawl-waste cleanup the migration required — so their recrawl impact lands in September, not August. On revenue, total store sales held essentially flat month over month ($572,293 vs $572,711, -0.1%) even as orders fell 11% and average order value rose about 12%; the search channel softened roughly 19% in line with the organic-traffic decline, while branded and direct orders grew and held the total steady. One honesty note that defines the next step: Shopify's 'search' referrer blends organic and paid Google (Piping Now runs Google Ads), so a clean organic-only revenue figure is not yet reportable — separating the two across all five data sources is the Month-1 P0 reconciliation, and it is the first thing the next report will resolve.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks fell 28.6% to 7,245 and impressions 11.9% to 861,923 — the post-migration decline continuing — but the flagship pipe-chart page recovered (+89 clicks).",
      status: "watch",
    },
    {
      area: "Revenue",
      statement:
        "Total store revenue held flat ($572,293, -0.1%); the search channel softened about 19% in line with organic traffic, offset by branded and direct growth. Clean organic attribution is the P0 in progress.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased from 10.0 to 11.8. Priority category pages (ProPress, pipe hangers, clevis hanger) are gaining impressions but losing clicks — position and click-through erosion, not disappearance.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Month 1 delivered the full audit suite and roadmap and shipped the P0 crawl-cleanup: canonical product URLs, parameterized-link removal, and 301-hop normalization are all closed in ClickUp.",
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
        "The internal-link graph now points at clean canonical product URLs, cutting the crawl waste. These fixes shipped mid-to-late August, so their recrawl impact will show from September, not in this month's numbers.",
      next:
        "Confirm the srsltid canonical behavior, review the remaining crawl and indexation buckets against the live site, and track the recrawl in the September report.",
    },
    {
      businessPriority:
        "Make organic revenue reconcilable and trustworthy before reporting it as organic.",
      name: "Measurement reconciliation (revenue P0)",
      started:
        "Clicks and revenue did not line up across Search Console, Merchant Center, GA4, Google Ads, and Shopify, and the team is rightly sensitive to numbers that look positive but may not be real.",
      work:
        "We completed the data-consolidation pass and established the Shopify revenue view, and confirmed that Shopify's 'search' referrer blends organic and paid Google because Piping Now runs Google Ads.",
      result:
        "Store revenue now has a clear all-channel baseline, but a clean organic-only figure still requires separating organic from paid across the five sources — so this report treats revenue as a baseline, not an organic result.",
      next:
        "Complete the GA4, Google Ads, and Shopify reconciliation, agree a reference number per metric, and report a clean organic revenue figure next month.",
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
        "The nominal pipe-to-metric conversion chart gained 89 clicks and 24,484 impressions; the priority categories are being shown more but clicked less, a fixable position and click-through problem.",
      next:
        "Recover the six category pages against their closest competitors, repair the chart and conversion set, and consolidate the blog into one hanger hub and one ball-valve hub.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the seven-part Deep SEO Analysis (GSC performance, indexation, Merchant Center, Ahrefs, blog cannibalization, AI visibility, plus a data appendix) as Closed on August 10.",
      owner: "Snell Rojas",
      taskUrl: "https://app.clickup.com/t/868knt3xe",
      title: "Delivered the Deep SEO Analysis for Piping Now",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the technical and content SEO audit as Closed on August 10.",
      owner: "AIA SEO",
      taskUrl: "https://app.clickup.com/t/868k1411p",
      title: "Completed the technical and content SEO audit",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the GSC pages audit as Closed on August 10; it surfaced the page-level winners and losers behind the decline.",
      owner: "AIA SEO",
      taskUrl: "https://app.clickup.com/t/868k1413v",
      title: "Ran the GSC pages audit",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the competitor analysis report as Closed on August 10.",
      owner: "Ricardo Zelaya",
      taskUrl: "https://app.clickup.com/t/868k141b4",
      title: "Delivered the competitor analysis report",
    },
    {
      completedOn: "August 12, 2026",
      evidence:
        "ClickUp records the data-consolidation pass as Closed on August 12 — the first step of the cross-source measurement reconciliation.",
      owner: "Karla Guzman",
      taskUrl: "https://app.clickup.com/t/868kpmgzx",
      title: "Consolidated the measurement data across sources",
    },
    {
      completedOn: "August 12, 2026",
      evidence:
        "ClickUp records the developer review of the roadmap as Closed on August 12, confirming the technical scope is implementable.",
      owner: "Jose Martinez",
      taskUrl: "https://app.clickup.com/t/868kpmh00",
      title: "Completed the developer review of the roadmap",
    },
    {
      completedOn: "August 17, 2026",
      evidence:
        "ClickUp records the August 2026 SEO roadmap (P0 stabilize, P1 recover, P2 grow) as Closed on August 17.",
      owner: "Karla Guzman",
      taskUrl: "https://app.clickup.com/t/868kpmgzf",
      title: "Built the three-phase SEO roadmap",
    },
    {
      completedOn: "August 19, 2026",
      evidence:
        "ClickUp records the theme fix as Closed on August 19: collection-scoped product links were replaced with canonical /products/{handle} URLs.",
      owner: "Jose Martinez",
      taskUrl: "https://app.clickup.com/t/868krkz9h",
      title: "Replaced collection-scoped links with canonical product URLs",
    },
    {
      completedOn: "August 24, 2026",
      evidence:
        "ClickUp records the theme fix as Closed on August 24: parameterized internal product links were removed from the theme.",
      owner: "Jose Martinez",
      taskUrl: "https://app.clickup.com/t/868krkz9w",
      title: "Removed parameterized internal product links from the theme",
    },
    {
      completedOn: "August 26, 2026",
      evidence:
        "ClickUp records the theme fix as Closed on August 26: internal links were normalized to their final destinations to remove 301 hops.",
      owner: "Jose Martinez",
      taskUrl: "https://app.clickup.com/t/868krkzbk",
      title: "Normalized internal links to remove 301 redirect hops",
    },
    {
      completedOn: "August 28, 2026",
      evidence:
        "ClickUp records the client access and approvers task as Closed on August 28, unblocking the P0 work that requires client-side access.",
      owner: "Brandon Swain",
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
        "Fewer organic visits — the post-migration decline the recovery plan targets. The technical fixes that address it shipped this month and take effect in September.",
      status: "watch",
    },
    {
      metric: "Organic impressions",
      previous: "978,726",
      current: "861,923",
      change: "-11.9%",
      businessMeaning:
        "Visibility fell less than clicks: the category pages are still being shown in results, they are just being clicked less often.",
      status: "watch",
    },
    {
      metric: "Non-brand clicks",
      previous: "9.96K",
      current: "7.07K",
      change: "-29%",
      businessMeaning:
        "Non-brand is about 98% of all clicks and the demand we are paid to grow; brand searches are negligible for this catalog, so the decline is essentially all non-brand.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "10.0",
      current: "11.8",
      change: "-1.8 positions",
      businessMeaning:
        "Rankings eased, consistent with priority category pages losing click-through and position rather than dropping out of the index.",
      status: "watch",
    },
    {
      metric: "Flagship page clicks (pipe-chart)",
      previous: "374",
      current: "463",
      change: "+23.8%",
      businessMeaning:
        "The nominal pipe-to-metric conversion chart — the biggest three-month loser in the onboarding audit — turned positive. The first proof point of the recovery plan.",
      status: "positive",
    },
    {
      metric: "Total store revenue (all channels)",
      previous: "$572,711",
      current: "$572,293",
      change: "-0.1%",
      businessMeaning:
        "Store revenue held flat month over month even as orders fell 11% — average order value rose about 12%. This is all-channel Shopify revenue, not organic.",
      status: "neutral",
    },
    {
      metric: "Search-referrer revenue (organic + paid)",
      previous: "$162,707",
      current: "$132,458",
      change: "-18.6%",
      businessMeaning:
        "The search channel softened in line with the organic-traffic decline. It blends organic and paid Google, so the clean organic split is the P0 reconciliation, not a reportable organic result yet.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic metrics (clicks, impressions, non-brand, position) come from the Google Search Console domain property sc-domain:pipingnow.com, August 1-31 vs July 1-31, 2026 (both 31 days), accessed under fulfillment@allinadvertising.com. Exact clicks (7,245 vs 10,143) and impressions (861,923 vs 978,726) are the sum of the device rows; the metric cards round to 7.25K/10.1K and 862K/979K. Non-brand uses Search Console's built-in brand filter and is shown at the card-rounded value (7.07K vs 9.96K). Revenue comes from Shopify's 'Total sales by referrer' report for the same months; total store revenue is all-channel, and 'search-referrer revenue' sums the search-source rows (Google, Bing, Yahoo) — which blend organic and paid because Piping Now runs Google Ads. In-store and phone sales sit outside the Shopify figure.",

  conversionPlan: {
    owner: "All In Advertising SEO + Analytics, with client Shopify, GA4, and Google Ads access",
    sourcePriority:
      "Complete the reconciliation across Search Console, Merchant Center, GA4, Google Ads, and Shopify, and agree a reference number per metric — the key step is isolating organic from paid search so 'search/google' revenue can be split cleanly.",
    nextReportExpectation:
      "With reconciliation complete, the next report shows a clean organic-only revenue figure and, once a second tracked month exists, organic revenue month over month by search engine.",
  },

  performanceCharts: {
    revenue: {
      title: "Store revenue held flat; the search channel softened",
      insight:
        "Total store revenue was essentially flat month over month (-0.1%) even as orders fell 11% — average order value rose about 12%, so fewer, larger orders carried the month. The search channel softened about 19%, in line with the organic-traffic decline, while branded and direct orders grew and held the total steady.",
      channelContext:
        "Source: Shopify 'Total sales by referrer'. These are all-channel store figures. The 'search' referrer (Google, Bing, Yahoo) blends organic and paid search — Piping Now runs Google Ads, so search/google mixes ads and organic — which is why a clean organic-only revenue number is not yet reportable. Separating organic from paid across Search Console, Merchant Center, GA4, Google Ads, and Shopify is the Month-1 P0 reconciliation. In-store and phone sales sit outside the Shopify figure.",
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
        "Organic clicks fell 28.6% and impressions 11.9% — the post-migration decline continuing. Both months had 31 days, so the drop is not a calendar effect. Impressions fell less than clicks, meaning the site is still being shown but clicked less.",
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
        { display: "-44", label: "ProPress & press fittings collection", value: -44 },
        { display: "-37", label: "Pipe hangers collection", value: -37 },
        { display: "-31", label: "Clevis hanger collection", value: -31 },
        { display: "-2,875", label: "All other pages (product long tail)", value: -2875 },
      ],
      insight:
        "The decline was broad-based across the product long tail (about -2,875 clicks), with the priority category pages still sliding before the fixes take effect. The one clear gain was the flagship pipe-chart page (+89) — the page the recovery plan targeted first. Brand is only about 2% of clicks, so this is effectively all non-brand movement.",
      title: "What moved clicks: July to August",
      total: 7245,
      totalDisplay: "7,245",
    },
    homepage: {
      title: "The page we most needed back is recovering",
      insight:
        "The nominal pipe-to-metric conversion chart — the single biggest three-month loser in the onboarding audit — gained 89 clicks and 24,484 impressions in August. Click-through dipped slightly as it re-entered more competitive impression space, but clicks and visibility are both climbing. This is the first proof point of the recovery plan.",
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
        "Piping Now's search traffic is desktop-dominant — 5,598 of 7,245 clicks, about 77% — and desktop is where most of the loss sits (-2,243 of -2,898). Mobile fell a similar 28.3%; tablet is negligible at 31 clicks.",
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
        "Organic traffic is still working off the post-migration decline — clicks fell 28.6% month over month and impressions 11.9%.",
      impact:
        "Fewer organic visits to the category and product pages that drive commercial demand.",
      remediation:
        "The canonical-URL, parameterized-link, and 301-hop fixes shipped in August cut the crawl waste that was holding recovery back; category recovery on the biggest losers begins in September.",
      eta: "Measure the recrawl impact in the September report.",
    },
    {
      obstacle:
        "Priority category pages are gaining impressions but losing clicks: ProPress (-44 clicks, +3,520 impressions), pipe hangers (-37 clicks, +1,785 impressions), and clevis hanger (-31 clicks).",
      impact:
        "The pages that carry commercial traffic are being shown more but passed over — a position and click-through problem on high-value categories.",
      remediation:
        "Rework titles, H1s, intro copy, and internal links against the closest competitors, using the categories that are growing (stainless buttweld, strainers, ball valves) as the template.",
      eta: "Month 2 category recovery.",
    },
    {
      obstacle:
        "Revenue cannot yet be reported as organic: Shopify's 'search' referrer blends organic and paid Google because Piping Now runs Google Ads.",
      impact:
        "Store revenue is trustworthy at the all-channel level, but a clean organic-only figure cannot be isolated from one source.",
      remediation:
        "Complete the reconciliation across Search Console, Merchant Center, GA4, Google Ads, and Shopify and agree a reference number per metric.",
      eta: "Organic revenue reported cleanly in the next report.",
    },
    {
      obstacle:
        "Merchant Center carries a critical local-store warning, 164 products not showing, and 1.05K products Google found outside the Simprosys feed (of 14,778 total).",
      impact:
        "Shopping and free-listing visibility is impaired and the catalog can look partly hidden, which distorts every conversation about product visibility.",
      remediation:
        "Link the Metairie Business Profile or turn off the local surface to clear the warning, fix the 164 disapproved products, and reconcile the 1.05K against Shopify and Simprosys.",
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
        "Done this month: collection-scoped links replaced with canonical /products/{handle} URLs, parameterized links removed from the theme, and internal links normalized to remove 301 hops. Next: confirm the srsltid canonical behavior and monitor the recrawl.",
      developerNote:
        "ClickUp 868krkz9h (canonical product URLs, Aug 19), 868krkz9w (parameterized links, Aug 24), and 868krkzbk (301-hop normalization, Aug 26) are all closed; scope validated in Developer Review 868kpmh00.",
    },
    {
      issue:
        "Priority category pages are losing clicks while gaining impressions (ProPress, pipe hangers, clevis hanger).",
      why:
        "The pages that carry commercial traffic are being shown more but clicked less — position and click-through erosion on the highest-value categories.",
      fix:
        "Recover each page's title, H1, intro, product count, and internal links against the closest competitors, and copy what the growing categories (stainless buttweld, strainers, ball valves) do well.",
      developerNote:
        "Movers identified in the GSC pages audit 868k1413v; recovery scheduled as the Month-2 P1 workstream.",
    },
    {
      issue:
        "Clicks and revenue do not reconcile across sources, and Shopify's 'search/google' revenue blends organic and paid.",
      why:
        "Without a reconciled view, a trustworthy organic-only revenue figure cannot be isolated, and reporting could overstate or understate organic.",
      fix:
        "Reconcile Search Console, Merchant Center, GA4, Google Ads, and Shopify for the same window and agree a single reference number per metric.",
      developerNote:
        "Data consolidation 868kpmgzx closed Aug 12; the full reconciliation is the roadmap P0 and the revenue conversion plan above.",
    },
    {
      issue:
        "Merchant Center shows a critical local-store warning, 164 products not showing, and 1.05K products found outside the primary feed.",
      why:
        "Invalid or missing listings keep products out of Shopping and free listings, the core ecommerce visibility surface, and the warning makes the catalog look blocked.",
      fix:
        "Clear the local-store warning (link the Metairie Business Profile or disable the local surface), fix the 164 disapprovals, and reconcile the 1.05K discovered products against Shopify and Simprosys.",
      developerNote:
        "From the Merchant Center audit (account 118194292, Simprosys feed via Merchant API); tracked as roadmap P0/P1.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console domain property sc-domain:pipingnow.com, accessed under fulfillment@allinadvertising.com (the default account, ricardo@allinadvertising.com, does not have access). Platform is Shopify (Plus).",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days, so the change is not a calendar effect.",
    "Total clicks (7,245 vs 10,143) and impressions (861,923 vs 978,726) are the sum of the device rows; the metric cards round to 7.25K/10.1K and 862K/979K. Average CTR was 0.84% vs 1.04%; average position 11.8 vs 10.0.",
    "Non-brand figures use Search Console's built-in brand filter and are reported at the card-rounded value (about 7,070 in August vs 9,960 in July). Brand queries (mainly 'piping now' and 'pipingnow') are roughly 2% of clicks, so the decline is essentially all non-brand.",
    "Devices (clicks): desktop 5,598 vs 7,841, mobile 1,616 vs 2,253, tablet 31 vs 49. Desktop is about 77% of clicks and about 77% of the loss.",
    "Top page movers (August vs July, clicks): pipe-chart conversion page +89 (463 vs 374, impressions 94,904 vs 70,420); losers ProPress collection -44, pipe hangers collection -37, clevis hanger collection -31, plus a broad product long-tail decline.",
    "Revenue source: Shopify 'Total sales by referrer' report, August vs July 2026. Total store revenue (all channels) was $572,292.97 across 710 orders vs $572,711.35 across 797 orders (AOV $806.05 vs $718.58).",
    "Search-referrer revenue sums the search-source rows: Google $110,248.70 (Aug) vs $131,024.76 (Jul), Bing $20,885.54 vs $30,940.97, Yahoo $1,324.10 vs $741.56 (DuckDuckGo and others are immaterial). These blend organic and paid search — Piping Now runs Google Ads — so they are not reported as clean organic; branded + direct rows ($310,358 vs $244,490) grew and held the total flat.",
    "The organic-vs-paid split and the full cross-source reconciliation (Search Console, Merchant Center, GA4, Google Ads, Shopify) are the Month-1 P0 measurement work; a clean organic revenue figure is expected in the next report. In-store and phone sales sit outside the Shopify figure.",
    "Merchant Center (account 118194292, Simprosys feed), the 1.05K products found outside the feed, the 164 products not showing, and the spam-backlink figures come from the August Deep SEO Analysis recorded in ClickUp.",
    "Completed-work evidence comes from ClickUp task closures in the PipingNow Tasks list (list 901102227261); task closure records are the reporting source of truth. Routine recurring items (billing confirmations, weekly ads reviews) are excluded.",
  ],
};
