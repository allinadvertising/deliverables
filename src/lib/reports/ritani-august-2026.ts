import type { SeoStoryReportData } from "@/lib/reports/types";

export const ritaniAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Grow qualified non-brand organic visibility and revenue across Ritani's diamond and engagement-ring catalog by fixing technical and indexation signals on the headless storefront, making organic revenue measurable, and winning the head terms where the search volume concentrates.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is Ritani's first monthly report, Month 1 of the engagement, so it sets the baseline. It reads Google Search Console traffic for August against July. The headline: search visibility grew and every priority diamond collection gained clicks, while a small net dip in total clicks traces almost entirely to two decaying viral posts, not the pages the program is building. Organic revenue is not yet attributable and is being made measurable in parallel.",
    title: "Organic search performance and the Month-1 baseline",
  },

  meta: {
    action:
      "Ship the September package with the in-house dev: deploy the utility-path noindex fix and the legacy diamond-page 301s, finish the Measurement Reconciliation brief so organic revenue reconciles, resolve the Merchant Center minimum-price signals, and publish the first batch of collection content orders.",
    client: "Ritani",
    coverHeadline:
      "Every priority diamond collection gained organic clicks and visibility rose 4.7%. August's small net traffic dip came from two decaying viral posts, not the pages we're building.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "https://www.ritani.com/",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console (URL-prefix property https://www.ritani.com/) + ClickUp delivery records. Organic revenue is not yet attributable (SEO-only access, headless storefront, measurement reconciliation in progress).",
  },

  executiveSummary:
    "This is Ritani's first report, so August is the baseline. Visibility grew: impressions rose 4.7% to 3.48 million, and every priority collection gained clicks, led by lab-grown diamonds (up 18.3% to 3,467) and diamonds (up 25.5% to 1,554). Total clicks dipped 1.9% to 31,085, but that dip is just two decaying viral posts (a Cristiano Ronaldo ring article, down 1,002, and an older lab-grown-brands guide, down 506). Take those two out and the catalog grew. One thing to watch: non-brand clicks fell 4.2% while non-brand impressions rose 4.7%, so we are earning more visibility than clicks. Better titles, metadata, and schema close that gap. Month 1 delivered the groundwork: the technical and content audit, GSC coverage and pages audits, a Merchant Center audit, keyword research across 30 collection pages, the content calendar, the first on-page set, and three build-ready specs (noindex, schema pricing, and legacy 301s). Organic revenue is not trackable yet: we have SEO-only access, the store is headless, and analytics are split, so the September measurement work is setting up a real revenue baseline.",

  powerLines: [
    {
      area: "Traffic",
      statement:
        "Organic clicks eased 1.9% to 31,085 while impressions rose 4.7% to 3.48M. The dip is two decaying viral posts, not the commercial catalog, which grew.",
      status: "watch",
    },
    {
      area: "Conversions",
      statement:
        "Organic revenue is not yet attributable: SEO-only access with no Shopify admin, a headless storefront, and analytics split across Heap and Merchant Center. The September Measurement Reconciliation brief is building the baseline.",
      status: "unavailable",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased slightly from 10.9 to 11.1 as impressions expanded, and non-brand click rate slipped from 0.73% to 0.67%, so visibility is outrunning click capture.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Month 1 delivered the full audit set and three implementation-ready specs; the utility-path noindex fix is scoped and closed, ready for the in-house dev to deploy.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Establish a clean, trustworthy traffic baseline before attributing movement to any single change.",
      name: "Monthly performance and baseline",
      started:
        "July generated 31,691 organic clicks and 3.33 million impressions across the catalog, with no prior AIA month to compare against.",
      work:
        "We compared full-calendar-month Search Console performance for August against July at the total, non-brand, device, and page level, and isolated which pages drove the movement.",
      result:
        "Impressions rose 4.7% and clicks eased 1.9%. The net click decline traces to two decaying viral posts; the priority commercial collections all grew.",
      next:
        "Hold this baseline and measure the September technical and content work against it, tracking non-brand clicks and click rate as the growth signals.",
    },
    {
      businessPriority:
        "Win the head terms where the search volume concentrates across the diamond and engagement-ring catalog.",
      name: "Commercial collection visibility",
      started:
        "Keyword research showed the volume lives in head terms like lab-grown diamonds and engagement rings by cut, not in the near-zero-volume exact-carat pages.",
      work:
        "We mapped one canonical page per head term to prevent sibling pages from competing, and began the onsite and metadata program on the priority collections.",
      result:
        "The lab-grown diamonds collection was the month's biggest non-brand winner (clicks up 18.3%, impressions up 12.6%, click rate up), with the diamonds and engagement-rings collections also up.",
      next:
        "Publish the six collection content orders (2 to 5 carat diamonds, stud earrings, bracelets) and extend the onsite and metadata pattern to the next priority collections.",
    },
    {
      businessPriority:
        "Stop the headless storefront from wasting crawl and index signals on utility and legacy URLs.",
      name: "Technical and indexation fixes",
      started:
        "A live index check found the /account utility pages indexed and earning clicks, a wide-range diamonds collection page under review for schema pricing, and legacy diamond URLs needing redirects.",
      work:
        "We wrote three implementation-ready specs for the in-house dev: noindex the /account utility paths, verify and lock the diamonds collection schema (no pricing), and plan the legacy diamond-page 301s.",
      result:
        "The utility-path noindex spec is closed and ready to deploy, and the schema pricing ticket verified clean (the flagged pricing is already gone and must stay out of the structured data).",
      next:
        "Hand the noindex and 301 specs to the in-house dev for deployment, then verify deindexation and redirect coverage in Search Console over the following recrawl window.",
    },
    {
      businessPriority:
        "Make organic revenue measurable so future reports can tie traffic to sales.",
      name: "Measurement and revenue attribution",
      started:
        "Organic revenue could not be attributed this month: the agency has SEO-only access with no Shopify admin, the storefront is headless, and analytics are split across Heap and Merchant Center.",
      work:
        "We scoped the Measurement Reconciliation brief to define a trustworthy organic-revenue source across Search Console, Merchant Center, Heap, and Shopify checkout for the headless setup.",
      result:
        "The measurement gap is documented and prioritized as an urgent September deliverable, so revenue is reported honestly as in progress rather than estimated.",
      next:
        "Complete the reconciliation, confirm how organic sessions map to orders, and add an organic-revenue trend beside the traffic trend in the next report.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the technical and content SEO audit, the technical crawl, and the audit-focus deliverable as closed on August 10, establishing the technical baseline for the roadmap.",
      owner: "SEO Specialist",
      title: "Delivered the technical and content SEO audit",
    },
    {
      completedOn: "August 10, 2026",
      evidence:
        "ClickUp records the Merchant Center audit as closed on August 10, documenting the product-feed and Shopping visibility issues, including the minimum-price signal gap.",
      owner: "Data Specialist",
      title: "Completed the Merchant Center audit",
    },
    {
      completedOn: "August 19, 2026",
      evidence:
        "ClickUp records the content calendar buildout as closed on August 19, sequencing the collection content program off the keyword mapping across 30 collection URLs.",
      owner: "SEO Strategist",
      title: "Built the content calendar and keyword mapping",
    },
    {
      completedOn: "August 19, 2026",
      evidence:
        "ClickUp records the developer-questions deliverable from the technical audit as closed on August 19, preparing the handoff of technical fixes to the in-house dev.",
      owner: "SEO Specialist",
      title: "Prepared the developer questions from the technical audit",
    },
    {
      completedOn: "August 20, 2026",
      evidence:
        "ClickUp records the onsites and the August collection content (marquise, pear, heart, radiant, and emerald cut engagement rings) as closed on August 20, the first on-page optimization set.",
      owner: "Content Writer",
      title: "Delivered the first onsite and collection content set",
    },
    {
      completedOn: "August 24, 2026",
      evidence:
        "ClickUp records the GSC coverage audit and the GSC pages audit as closed on August 24, which surfaced the indexed utility paths and the crawl and coverage picture.",
      owner: "SEO Specialist",
      title: "Ran the GSC coverage and pages audits",
    },
  ],

  kpiRows: [
    {
      metric: "Organic clicks",
      previous: "31,691",
      current: "31,085",
      change: "-1.9%",
      businessMeaning:
        "Total organic visits eased by 606. The decline is two decaying viral posts, not the commercial catalog. Both months contain 31 days.",
      status: "watch",
    },
    {
      metric: "Non-brand clicks",
      previous: "23,744",
      current: "22,736",
      change: "-4.2%",
      businessMeaning:
        "Non-brand demand is the growth target. It softened by 1,008 as two viral posts decayed, even though the priority commercial collections grew.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "3,329,671",
      current: "3,484,822",
      change: "+4.7%",
      businessMeaning:
        "The catalog appeared in 155,151 more searches, so visibility is expanding ahead of clicks.",
      status: "positive",
    },
    {
      metric: "Average position",
      previous: "10.9",
      current: "11.1",
      change: "-0.2 positions",
      businessMeaning:
        "The average result eased slightly as impressions expanded into more queries, still near the top of page two.",
      status: "watch",
    },
    {
      metric: "Non-brand click rate",
      previous: "0.73%",
      current: "0.67%",
      change: "-0.06 points",
      businessMeaning:
        "A smaller share of non-brand impressions became visits. Titles, metadata, and schema target this click-capture gap.",
      status: "watch",
    },
    {
      metric: "Lab-grown diamonds collection clicks",
      previous: "2,930",
      current: "3,467",
      change: "+18.3%",
      businessMeaning:
        "The flagship non-brand commercial page and the head term the keyword research prioritized; clicks, impressions, and click rate all rose.",
      status: "positive",
    },
    {
      metric: "Organic revenue",
      previous: "Not tracked",
      current: "Not yet attributable",
      change: "Measurement in progress",
      businessMeaning:
        "SEO-only access (no Shopify admin), a headless storefront, and analytics split across Heap and Merchant Center. The September Measurement Reconciliation brief is building the baseline.",
      status: "neutral",
    },
  ],

  kpiDisclosure:
    "Search performance comes from the Google Search Console URL-prefix property https://www.ritani.com/, accessed under fulfillment@allinadvertising.com, for August 1-31 versus July 1-31, 2026 (both months 31 days). Total clicks (31,085 vs 31,691) and impressions (3,484,822 vs 3,329,671) are the sum of the device rows; the metric cards round to 31.1K/31.7K and 3.48M/3.33M. Non-brand figures use Search Console's built-in brand filter, which is AI-classified and may mislabel some queries; non-brand clicks were 22,736 vs 23,744 and non-brand impressions 3,414,143 vs 3,261,625, both as device-row sums. Average position is read from the metric card (11.1 vs 10.9). Revenue is not reported: AIA has SEO-only access with no Shopify admin for Ritani (confirmed via the store switcher), the storefront is a custom headless Next.js build, and analytics are split across Heap and Merchant Center, so organic revenue is not yet attributable.",

  conversionPlan: {
    owner: "AIA SEO with Ritani's in-house data and dev team",
    sourcePriority:
      "Establish a trustworthy organic-revenue source by reconciling Search Console, Merchant Center, Heap, and Shopify checkout for the headless storefront, and confirming how organic sessions map to orders. This is scoped in the September Measurement Reconciliation brief.",
    nextReportExpectation:
      "Once measurement reconciles, the next reports add an organic-revenue trend beside the traffic trend and tie the commercial-collection gains to sales.",
  },

  performanceCharts: {
    growth: {
      title: "Visibility grew while clicks eased",
      insight:
        "Impressions rose 4.7% (155,151 more search appearances) while clicks eased 1.9%. The catalog is being seen more; the small click dip is concentrated in two decaying posts. Both months had 31 days.",
      series: [
        {
          change: "-1.9%",
          current: 31085,
          currentDisplay: "31,085",
          label: "Organic clicks",
          previous: 31691,
          previousDisplay: "31,691",
          status: "watch",
        },
        {
          change: "+4.7%",
          current: 3484822,
          currentDisplay: "3.48M",
          label: "Search impressions",
          previous: 3329671,
          previousDisplay: "3.33M",
          status: "positive",
        },
      ],
    },
    nonbrand: {
      baseline: 23744,
      baselineDisplay: "23,744",
      contributions: [
        {
          display: "+889",
          label: "Commercial collections (lab-grown, diamonds, engagement rings)",
          value: 889,
        },
        {
          display: "-1,508",
          label: "Two decaying viral posts (Ronaldo ring, lab-grown-brands guide)",
          value: -1508,
        },
        { display: "-389", label: "Other non-brand pages, net", value: -389 },
      ],
      insight:
        "The month's non-brand decline traces to two decaying viral posts, which lost 1,508 clicks between them. The priority commercial collections added 889 clicks, and the rest of the catalog was roughly flat. This is why the headline dip is a mix story, not a demand story.",
      title: "What moved non-brand clicks",
      total: 22736,
      totalDisplay: "22,736",
    },
    homepage: {
      title: "Flagship commercial page: the lab-grown diamonds collection",
      insight:
        "The lab-grown diamonds collection was the month's biggest non-brand winner. Clicks, impressions, and click rate all rose, which is exactly where the keyword research said the volume lives. This is the page pattern the program is built to replicate across the catalog.",
      series: [
        {
          change: "+18.3%",
          current: 3467,
          currentDisplay: "3,467",
          label: "Organic clicks",
          previous: 2930,
          previousDisplay: "2,930",
          status: "positive",
        },
        {
          change: "+12.6%",
          current: 255367,
          currentDisplay: "255,367",
          label: "Search impressions",
          previous: 226820,
          previousDisplay: "226,820",
          status: "positive",
        },
        {
          change: "+0.07 points",
          current: 1.36,
          currentDisplay: "1.36%",
          label: "Click rate",
          previous: 1.29,
          previousDisplay: "1.29%",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile-dominant, and steady across devices",
      insight:
        "Search is mobile-dominant: mobile drove 22,900 of 31,085 clicks (74%). All three devices eased by a similar small margin, which confirms the month's movement is page-level (decaying posts), not a device or platform problem.",
      series: [
        {
          change: "-1.7%",
          current: 22900,
          currentDisplay: "22,900",
          label: "Mobile",
          previous: 23306,
          previousDisplay: "23,306",
          status: "watch",
        },
        {
          change: "-2.4%",
          current: 7636,
          currentDisplay: "7,636",
          label: "Desktop",
          previous: 7821,
          previousDisplay: "7,821",
          status: "watch",
        },
        {
          change: "-2.7%",
          current: 549,
          currentDisplay: "549",
          label: "Tablet",
          previous: 564,
          previousDisplay: "564",
          status: "watch",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "Organic revenue is not yet attributable. AIA has SEO-only access with no Shopify admin for Ritani, the storefront is a custom headless Next.js build, and analytics are split across Heap and Merchant Center.",
      impact:
        "Traffic gains cannot yet be tied to sales, so the return on SEO work is described in visibility and rankings rather than revenue.",
      remediation:
        "Complete the Measurement Reconciliation brief: define a single trustworthy organic-revenue source across Search Console, Merchant Center, Heap, and Shopify checkout, and confirm how organic sessions map to orders.",
      eta: "September, then reported as an organic-revenue baseline in the next report.",
    },
    {
      obstacle:
        "Non-brand click rate slipped from 0.73% to 0.67% and average position eased from 10.9 to 11.1, while non-brand impressions rose 4.7%.",
      impact:
        "The catalog is earning more visibility than clicks, so growing impressions are not yet converting into visits at the same rate.",
      remediation:
        "Continue the title, metadata, and schema program on the priority collections, and prioritize the striking-distance queries where a small ranking gain unlocks clicks.",
      eta: "Measured over the next full month after each collection update.",
    },
    {
      obstacle:
        "The /account utility pages are indexed and earning clicks (four confirmed URLs drew 91 clicks and about 2,005 impressions over a 28-day window).",
      impact:
        "Utility pages absorb crawl and index attention that belongs on commercial pages, and expose account routes in search that should not rank.",
      remediation:
        "Deploy the utility-path noindex spec (noindex, follow on the /account routes in the Next.js storefront), then verify deindexation in Search Console over the recrawl window.",
      eta: "September deploy by the in-house dev; verify over 2 to 6 weeks.",
    },
    {
      obstacle:
        "Two decaying viral posts drove the entire net click decline (a Cristiano Ronaldo engagement-ring article, down 1,002, and an older lab-grown-brands guide, down 506).",
      impact:
        "News and one-off viral traffic decays on its own timeline and can mask the underlying growth of the commercial catalog in a sitewide total.",
      remediation:
        "Report the decaying posts separately from the catalog, and keep building durable commercial and evergreen demand so the baseline does not depend on viral spikes.",
      eta: "Ongoing; tracked as a cohort in the next report.",
    },
    {
      obstacle:
        "The Merchant Center product feed is missing minimum-price signals needed for automated discounts, flagged in the August audit.",
      impact:
        "Feed and pricing gaps limit Shopping and free-listing visibility, the most commercial surface for the catalog.",
      remediation:
        "Resolve the minimum-price signals in the feed and revalidate the listings in Merchant Center.",
      eta: "September, then revalidate after the feed refresh.",
    },
  ],

  technicalItems: [
    {
      issue:
        "The /account utility pages are indexable and at least four are in Google's index, including /account/orders, which is earning organic clicks.",
      why: "Indexed utility routes waste crawl and index signals and can surface account pages in search that should not rank.",
      fix:
        "Add noindex, follow to /account and all /account sub-routes in the Next.js storefront (route metadata or an X-Robots-Tag header), leave the already-blocked cart, checkout, and orders paths as they are, then verify deindexation in Search Console.",
      developerNote:
        "Spec closed in ClickUp 868m1ye9j (September 9). The fix lives in the headless Next.js storefront, not Shopify Liquid. Two /account URLs (rewards, warranties/activate) need a keep-or-noindex decision before deploy; the in-house dev (Andrea) confirms the pattern matches only functional routes.",
    },
    {
      issue:
        "The main diamonds collection page was flagged for schema pricing that could mislead on a 185,204-item, 254-dollar-to-six-figure catalog.",
      why: "A single truthful price or range cannot be stated for a collection that wide, and misleading price markup is a trust and compliance risk.",
      fix:
        "Keep pricing out of the structured data. The current BreadcrumbList, FAQPage, and CollectionPage schema is valid and clean; per-stone prices stay in the Next.js data payload only, never inside an ld+json block.",
      developerNote:
        "Spec verified clean in ClickUp 868m1ye9e (validated September 9). This is a keep-out guardrail to prevent a future template or plugin from reintroducing collection-level pricing; PDP-level Product and Offer schema is a separate, appropriate scope.",
    },
    {
      issue:
        "Legacy diamond collection URLs need redirects and verification so their equity and rankings consolidate onto the live pages.",
      why: "Legacy URLs that 404 or split rankings leak equity from commercial pages and create duplicate or dead paths.",
      fix:
        "Deliver the legacy diamond-page 301 spec, map each legacy URL to its live destination, and verify redirect coverage and recrawl in Search Console.",
      developerNote:
        "Tracked in ClickUp 868m1ye9n (September). Coordinate the redirect deploy with the in-house dev and verify with the GSC pages export.",
    },
    {
      issue:
        "Organic revenue cannot be reconciled: SEO-only access with no Shopify admin, a headless storefront, and analytics split across Heap and Merchant Center.",
      why: "Without a trustworthy organic-revenue source, SEO results cannot be tied to sales and reporting rests on traffic alone.",
      fix:
        "Complete the Measurement Reconciliation brief: define one organic-revenue source across Search Console, Merchant Center, Heap, and Shopify checkout, and confirm how organic sessions map to orders.",
      developerNote:
        "Tracked as urgent in ClickUp 868m1ye92. May require read access to a revenue source (Heap, GA4, or a Shopify export) that the client provides, since AIA has no Ritani Shopify admin.",
    },
    {
      issue:
        "The Merchant Center feed is missing minimum-price signals for automated discounts.",
      why: "Feed and pricing gaps limit Shopping and free-listing eligibility for the catalog.",
      fix:
        "Populate the minimum-price signals in the feed and revalidate the product listings in Merchant Center.",
      developerNote: "Tracked as urgent in ClickUp 868m1ye97 (September).",
    },
  ],

  dataNotes: [
    "Performance source: Google Search Console URL-prefix property https://www.ritani.com/, accessed under fulfillment@allinadvertising.com. The property is not a domain property and there is no Ahrefs GSC connection.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days, so no daily-normalization adjustment is needed.",
    "Total clicks (31,085 vs 31,691) and impressions (3,484,822 vs 3,329,671) are the exact sum of the device rows; the metric cards round to 31.1K/31.7K and 3.48M/3.33M. Total click rate was 0.89% vs 0.95%, and average position 11.1 vs 10.9.",
    "Non-brand figures use Search Console's built-in brand filter, which is AI-classified and may mislabel some queries. Non-brand clicks were 22,736 vs 23,744 and non-brand impressions 3,414,143 vs 3,261,625, both device-row sums. Derived brand clicks were about 8,349 vs 7,947 (up about 5%).",
    "Device split (August clicks): mobile 22,900, desktop 7,636, tablet 549 (mobile is 74% of clicks).",
    "Top pages by click change (August vs July): lab-grown diamonds collection 3,467 vs 2,930 (+537, impressions 255,367 vs 226,820); diamonds collection 1,554 vs 1,238 (+316); homepage 6,000 vs 5,712 (+288, impressions down 8,740); engagement-rings collection 383 vs 347 (+36). Declines: the Cristiano Ronaldo 35-carat engagement-ring news post 729 vs 1,731 (down 1,002) and the best-lab-grown-diamond-brands guide 370 vs 876 (down 506).",
    "The non-brand waterfall attributes movement at the page level because no single query dominates; the commercial collection and blog pages used are predominantly non-brand traffic. Contributions are a decomposition, not an exhaustive page list, and sum to the net non-brand change of -1,008.",
    "Top non-brand queries by click gain: lab grown diamonds 259 vs 98 (+161, impressions 29,303 vs 12,570); jared lapine 171 vs 73 (+98), which maps to a celebrity engagement news post; lab diamond 129 vs 119 (+10).",
    "Revenue is not reported. AIA has SEO-only access: the fulfillment@ Shopify account does not include a Ritani store (confirmed via the store switcher, no result for ritani), so there is no Shopify admin to pull revenue from. The storefront is a custom headless Next.js build (Shopify commerce backend behind Cloudflare) and analytics are split across Heap and Merchant Center, so organic revenue is not yet attributable. The September Measurement Reconciliation brief is establishing a trustworthy source.",
    "Utility-path baseline (28-day GSC pages export, captured September 9): four indexed /account URLs drew 91 clicks and 2,005 impressions (/account/orders 72 clicks, /account 13, /account/rewards 4, /account/warranties/activate 2). No /cart, /checkout, or /orders pages appear in search, consistent with the public index check.",
    "Completed-work evidence comes from ClickUp task status, names, assignees, and closure dates in the Ritani Task List (list 901113097608); closures are the reporting source of truth. Owners are attributed by role, not by individual name.",
    "Reporting-month note: the SEO Monthly Report task sits in the 'September 2026 SEO Tasks' bundle (produced in September) and reports on August performance. Delivered work is drawn from August closures; the September specs and content orders are the forward plan.",
  ],
};
