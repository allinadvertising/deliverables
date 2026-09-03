import type { SeoStoryReportData } from "@/lib/reports/types";

export const penelopeAugust2026Report: SeoStoryReportData = {
  businessObjective:
    "Recover annual revenue from about $6M toward the prior $7.5M high by consolidating technical signals, restoring product visibility in Shopping, converting blog demand into bookings and sales, and building national ecommerce demand around priority brands and treatments.",

  technicalLabels: {
    fix: "Next action",
    issue: "Issue",
    why: "Business risk",
  },

  visualSection: {
    eyebrow: "Performance",
    intro:
      "This is the first monthly report — Month 1 of a three-month roadmap (containment, then conversion, then growth). It sets the baseline. The numbers below combine Search Console traffic with Shopify organic revenue, and together they point at one page: the homepage drives most of the traffic and nearly all of the organic revenue — and it's splitting its authority across two URLs.",
    title: "Organic search performance and the Month-1 diagnosis",
  },

  meta: {
    action:
      "Ship the Month-1 containment package — consolidate the homepage (which 96% of organic revenue flows through) to a single https://www URL, repair the 56 invalid Merchant Center listings, and disavow the paid-link cluster — then complete the GA4 tie-out so revenue reconciles across two sources.",
    client: "Penelope and The Beauty Bar",
    coverHeadline:
      "Organic drove 61% of store revenue in August — almost all of it through one homepage that's split across two URLs.",
    currentPeriod: "August 1-31, 2026",
    previousPeriod: "July 1-31, 2026",
    property: "penelopeandthebeautybar.com",
    reportType: "Monthly Organic Search Performance Report",
    source:
      "Google Search Console + Shopify (Total sales by referrer) + Google Merchant Center + ClickUp delivery records",
  },

  executiveSummary:
    "August is Month 1 of Penelope's engagement, and this first report sets the baseline. Organic search is already the store's largest revenue channel: it drove $8,163.84 in Shopify sales — about 61% of all-channel store revenue — across 16 orders at a $510 average. But that revenue is highly concentrated: 96% of it entered through the homepage, and 96% came from Google — and the homepage is the very page Search Console shows splitting its clicks across separate http and https URLs. On the traffic side, clicks rose 7.2% to 2,147, though the gain was brand demand; non-brand clicks slipped about 7% and average position eased from 12.6 to 13.8. Month 1 delivered the diagnosis and the foundation — keyword research, GSC coverage and Merchant Center audits (0 valid, 56 invalid listings), a competitor analysis, the three-month roadmap, and measurement setup — and September executes the highest-leverage fix: consolidating that homepage to one https://www URL, which sits directly on top of nearly all the organic revenue. Revenue is reported from Shopify, the source of truth; the GA4 cross-check is pending while GA4 access is restored, and in-store bookings sit outside this ecommerce figure.",

  powerLines: [
    {
      area: "Revenue",
      statement:
        "Organic search drove $8,163.84 in August — about 61% of all-channel store revenue, and 96% of it entered through the homepage. This is the tracked baseline.",
      status: "positive",
    },
    {
      area: "Traffic",
      statement:
        "Organic clicks rose 7.2% to 2,147, but the gain was brand demand; non-brand clicks slipped about 7% to ~1,180.",
      status: "watch",
    },
    {
      area: "Rankings",
      statement:
        "Average position eased to 13.8 from 12.6, consistent with the homepage splitting its authority across http and https URLs.",
      status: "watch",
    },
    {
      area: "Technical health",
      statement:
        "Month 1 delivered the diagnosis: keyword research, GSC coverage and Merchant Center audits, competitor analysis, and the three-month roadmap are all closed.",
      status: "positive",
    },
  ],

  journeyWorkstreams: [
    {
      businessPriority:
        "Establish a clean revenue and traffic baseline before spending on changes.",
      name: "Baseline and diagnosis",
      started:
        "The engagement opened with a site that is visible but converts a small share of that visibility, and revenue that had never been attributed to organic.",
      work:
        "We pulled organic revenue from Shopify (Total sales by referrer), ran GSC coverage and pages audits, a Merchant Center audit, a competitor analysis, and full keyword research, and compared August with July in Search Console.",
      result:
        "Organic is the store's biggest channel at 61% of revenue ($8,163.84), but 96% of it flows through the homepage — which the audits show is split across http and https URLs. Traffic rose 7.2%, but on brand demand; non-brand softened.",
      next:
        "Hold this baseline and measure the containment fixes against it as they ship in September.",
    },
    {
      businessPriority:
        "Stop the site from competing with itself on the page that carries nearly all the revenue.",
      name: "Technical containment",
      started:
        "The Pages data shows the homepage earning clicks on both http and https URLs; Merchant Center shows 56 invalid listings; and the backlink profile carries a suspicious paid-link cluster.",
      work:
        "We scoped the canonical-host consolidation, the Merchant listing repairs at the Shopify template level, and the backlink disavow, and completed the developer review of the roadmap.",
      result:
        "The highest-risk, highest-leverage defects are defined and dependency-mapped, ready for WebTitans to implement — starting with the homepage that 96% of organic revenue depends on.",
      next:
        "Enforce https://www as the only canonical host, repair the Merchant listings, and prepare the disavow — then revalidate in GSC and Merchant Center.",
    },
    {
      businessPriority:
        "Make organic revenue reconcilable across sources, and capture what Shopify misses.",
      name: "Measurement baseline",
      started:
        "Revenue had not been attributed to organic, and GA4 could not be pulled this period.",
      work:
        "We established Shopify Total-sales-by-referrer as the source of truth, installed Microsoft Clarity, and mapped the relevant properties in Pulse. GA4 could not be tied out — the Supermetrics connector trial expired and the live GA4 property isn't yet accessible.",
      result:
        "Organic revenue now has a trustworthy baseline from Shopify; the GA4 cross-check and in-store booking capture are the open measurement items.",
      next:
        "Restore GA4 access, reconnect the connector to complete the Shopify-vs-GA4 tie-out, and confirm how in-store and phone bookings are tracked.",
    },
    {
      businessPriority:
        "Turn the visibility Penelope already has into bookings and sales.",
      name: "Conversion setup (Month 2 preview)",
      started:
        "High-impression blog posts and striking-distance queries drive large impressions but few clicks — informational traffic that doesn't yet convert.",
      work:
        "We identified the top blog posts and the striking-distance query cohort and matched them to service, collection, and product destinations.",
      result:
        "A prioritized conversion backlog is ready for Month 2 — internal links, calls to action, and title and meta rewrites — aimed at the priority brands (Biologique Recherche, MBR) already appearing in organic sales.",
      next:
        "In September, add internal links and booking or add-to-cart CTAs from the top blogs into matching service and retail pages, and rewrite priority titles and metas.",
    },
  ],

  completedWork: [
    {
      completedOn: "August 14, 2026",
      evidence:
        "ClickUp records the SEO intake interview as Closed on August 14, capturing priorities, brands, and constraints.",
      owner: "Jordan Leavitt",
      taskUrl: "https://app.clickup.com/t/868kqcpbq",
      title: "Completed the SEO intake interview",
    },
    {
      completedOn: "August 17, 2026",
      evidence:
        "ClickUp records the Merchant Center audit as Closed on August 17; it surfaced 0 valid and 56 invalid product listings.",
      owner: "AIA SEO",
      taskUrl: "https://app.clickup.com/t/868kn7qhx",
      title: "Completed the Merchant Center audit",
    },
    {
      completedOn: "August 17, 2026",
      evidence:
        "ClickUp records Microsoft Clarity installation as Closed on August 17, adding behavioral/heatmap data for CRO.",
      owner: "AIA SEO",
      taskUrl: "https://app.clickup.com/t/868kn7qht",
      title: "Installed Microsoft Clarity on the website",
    },
    {
      completedOn: "August 18, 2026",
      evidence:
        "ClickUp records the GSC coverage audit as Closed on August 18, documenting indexation and coverage issues.",
      owner: "Ricardo Zelaya",
      taskUrl: "https://app.clickup.com/t/868krqa90",
      title: "Ran the GSC coverage audit",
    },
    {
      completedOn: "August 18, 2026",
      evidence:
        "ClickUp records the GSC pages audit as Closed on August 18, which exposed the http/https homepage split.",
      owner: "Ricardo Zelaya",
      taskUrl: "https://app.clickup.com/t/868krqa8k",
      title: "Completed the GSC pages audit",
    },
    {
      completedOn: "August 18, 2026",
      evidence:
        "ClickUp records the competitor analysis report as Closed on August 18.",
      owner: "Ricardo Zelaya",
      taskUrl: "https://app.clickup.com/t/868krqa97",
      title: "Delivered the competitor analysis report",
    },
    {
      completedOn: "August 18, 2026",
      evidence:
        "ClickUp records keyword research for the website as Closed on August 18, establishing the target query set.",
      owner: "Karla Guzman",
      taskUrl: "https://app.clickup.com/t/868kqcpca",
      title: "Completed keyword research for the website",
    },
    {
      completedOn: "August 21, 2026",
      evidence:
        "ClickUp records the three-month SEO roadmap (containment, conversion, growth) as Closed on August 21.",
      owner: "Karla Guzman",
      taskUrl: "https://app.clickup.com/t/868kqcpcg",
      title: "Built the three-month SEO roadmap",
    },
    {
      completedOn: "August 28, 2026",
      evidence:
        "ClickUp records the developer review of the roadmap as Closed on August 28, confirming the containment build is implementable.",
      owner: "Leo Urdaneta",
      taskUrl: "https://app.clickup.com/t/868kx80fb",
      title: "Completed the developer review of the roadmap",
    },
  ],

  kpiRows: [
    {
      metric: "Organic search revenue (Shopify)",
      previous: "—",
      current: "$8,163.84",
      change: "New baseline",
      businessMeaning:
        "First tracked month. Shopify Total sales, referrer = search, across 16 orders (AOV $510). Google drove 95.7%.",
      status: "neutral",
    },
    {
      metric: "Organic share of store revenue",
      previous: "—",
      current: "60.7%",
      change: "New baseline",
      businessMeaning:
        "Organic search was 61% of all-channel store sales ($13,450) — the store's largest revenue channel.",
      status: "neutral",
    },
    {
      metric: "Organic clicks",
      previous: "2,002",
      current: "2,147",
      change: "+7.2%",
      businessMeaning:
        "Total organic visits rose — but the gain was brand demand, not new non-brand visibility.",
      status: "positive",
    },
    {
      metric: "Non-brand clicks",
      previous: "1,270",
      current: "1,180",
      change: "-7.1%",
      businessMeaning:
        "Non-brand demand — the growth target — softened; recovering it is the point of the containment and conversion work.",
      status: "watch",
    },
    {
      metric: "Search impressions",
      previous: "138K",
      current: "134K",
      change: "-2.5%",
      businessMeaning:
        "A broad but low-converting visibility base; most impressions sit on blog and split URLs that don't convert.",
      status: "watch",
    },
    {
      metric: "Average position",
      previous: "12.6",
      current: "13.8",
      change: "-1.2 positions",
      businessMeaning:
        "Rankings eased, consistent with the homepage authority split and thin non-brand pages.",
      status: "watch",
    },
  ],

  kpiDisclosure:
    "Traffic metrics (clicks, non-brand clicks, impressions, position) are from the Google Search Console domain property sc-domain:penelopeandthebeautybar.com, August 1-31 vs July 1-31, 2026 (both 31 days); exact clicks (2,147 vs 2,002) and impressions (134,490 vs 137,980) are the sum of the device rows, and non-brand uses GSC's built-in brand filter. Revenue is from Shopify Total sales by referrer (referrer source = search) for August 2026 and is the source of truth; it is shown as a first-month baseline (no prior AIA month), and covers Shopify ecommerce and online-booked services, not walk-in bookings. GA4 tie-out is pending (connector access is being restored). Merchant Center and backlink figures come from the August audits.",

  conversionPlan: {
    owner: "AIA SEO + Account Management",
    sourcePriority:
      "Shopify Total-sales-by-referrer is the revenue source of truth; restore GA4 access and reconnect the connector to complete the Shopify-vs-GA4 tie-out, and confirm how in-store and phone bookings are captured.",
    nextReportExpectation:
      "With a second tracked month, the next report shows organic revenue month over month by search engine and product, alongside the GA4 tie-out.",
  },

  performanceCharts: {
    growth: {
      title: "Traffic rose, but visibility did not",
      insight:
        "Organic clicks grew 7.2% to 2,147 while impressions fell 2.5% — the site converted a slightly larger share of a flat-to-shrinking visibility base. Both months had 31 days.",
      series: [
        {
          change: "+7.2%",
          current: 2147,
          currentDisplay: "2,147",
          label: "Organic clicks",
          previous: 2002,
          previousDisplay: "2,002",
          status: "positive",
        },
        {
          change: "-2.5%",
          current: 134490,
          currentDisplay: "134K",
          label: "Search impressions",
          previous: 137980,
          previousDisplay: "138K",
          status: "watch",
        },
      ],
    },
    nonbrand: {
      baseline: 2002,
      baselineDisplay: "2,002",
      contributions: [
        { display: "+235", label: "Brand queries", value: 235 },
        { display: "-90", label: "Non-brand queries", value: -90 },
      ],
      insight:
        "The month's net gain came entirely from brand searches (+235); non-brand queries — the demand we're paid to grow — fell 90. A rising total can hide a softening in exactly the traffic that matters.",
      title: "The gain was brand — non-brand demand slipped",
      total: 2147,
      totalDisplay: "2,147",
    },
    homepage: {
      title: "One homepage carries the traffic and the revenue — split across two URLs",
      insight:
        "The homepage earns clicks on both an http and an https URL — about 1,279 combined this month, roughly 60% of all site clicks — and it's also where 96% of organic revenue enters ($7,814 of $8,164). The split isn't just a ranking issue; it sits directly on top of nearly all the store's organic revenue. Consolidating to one https://www URL is the Month-1 P0 fix.",
      series: [
        {
          change: "+28.8%",
          current: 849,
          currentDisplay: "849",
          label: "http:// homepage clicks",
          previous: 659,
          previousDisplay: "659",
          status: "positive",
        },
        {
          change: "+31.9%",
          current: 430,
          currentDisplay: "430",
          label: "https:// homepage clicks",
          previous: 326,
          previousDisplay: "326",
          status: "positive",
        },
      ],
    },
    devices: {
      title: "Mobile and desktop both grew",
      insight:
        "Mobile led (+8.0%) and desktop rose (+9.3%); tablet is negligible (14 clicks). Penelope's search traffic is mobile-dominant — 1,466 of 2,147 clicks.",
      series: [
        {
          change: "+8.0%",
          current: 1466,
          currentDisplay: "1,466",
          label: "Mobile",
          previous: 1357,
          previousDisplay: "1,357",
          status: "positive",
        },
        {
          change: "+9.3%",
          current: 667,
          currentDisplay: "667",
          label: "Desktop",
          previous: 610,
          previousDisplay: "610",
          status: "positive",
        },
      ],
    },
  },

  visualDirections: [],

  obstacles: [
    {
      obstacle:
        "The homepage earns clicks on both http://www and https://www URLs (849 and 430 clicks in August), and it's where 96% of organic revenue enters — so the split sits on top of nearly all the store's organic sales.",
      impact:
        "Two URLs compete for the same rankings on the single most important commercial page, diluting its authority and putting the revenue that flows through it at risk.",
      remediation:
        "Enforce https://www as the only canonical host, 301-redirect http and non-www variants, keep a single https sitemap, and re-inspect in GSC after launch.",
      eta: "Month-1 technical release with WebTitans; revalidate after the recrawl.",
    },
    {
      obstacle:
        "Google Merchant Center shows 0 valid and 56 invalid product listings, with additional products missing details.",
      impact:
        "Products are shut out of Shopping and free listings — the most commercial surface for the national ecommerce revenue goal.",
      remediation:
        "Fix the missing merchant-specific fields at the Shopify product-template level, resolve feed details, and revalidate in GSC and Merchant Center.",
      eta: "Month 1-2; revalidate after crawl cycles.",
    },
    {
      obstacle:
        "The backlink profile carries a suspicious paid-link cluster (a SEOExpress.org anchor tied to ~218 referring domains), while Domain Rating has fallen.",
      impact:
        "Unnatural links are a domain-level risk that could erase the value of the SEO work if left unaddressed.",
      remediation:
        "Classify the suspicious clusters, prepare a disavow, and confirm with the client whether any paid-link vendor is still active.",
      eta: "Month 1 risk control.",
    },
    {
      obstacle:
        "Non-brand demand isn't converting: high-impression blogs and ~392 striking-distance queries earn large impressions but few clicks (blog CTR ~0.43% vs ~0.87% for service pages).",
      impact:
        "Significant existing visibility stays trapped on informational pages instead of feeding bookings and sales.",
      remediation:
        "Add internal links and booking/add-to-cart CTAs from the top blogs into matching service and collection pages, and rewrite priority titles and metas.",
      eta: "Month 2 conversion release.",
    },
    {
      obstacle:
        "Revenue can be reported from Shopify but not yet reconciled: the GA4 tie-out is pending (the Supermetrics connector trial expired and the live GA4 property isn't accessible), and in-store/phone bookings sit outside the Shopify ecommerce figure.",
      impact:
        "Organic revenue is trustworthy from one source, but can't yet be cross-checked against GA4 or combined with non-ecommerce bookings for a full revenue picture.",
      remediation:
        "Restore GA4 access, reconnect the connector to complete the Shopify-vs-GA4 tie-out, and scope how bookings are tracked.",
      eta: "GA4 tie-out in the next report.",
    },
  ],

  technicalItems: [
    {
      issue:
        "The homepage resolves and ranks on both http://www and https://www, appearing as two rows in the Pages report — and it carries 96% of organic revenue.",
      why: "A protocol/host split makes the highest-traffic, highest-revenue page compete with itself and weakens its rankings.",
      fix:
        "Enforce https://www as the only canonical host, 301 the http and non-www variants, and submit a single https sitemap.",
      developerNote:
        "Confirmed in the GSC pages audit 868krqa8k and the Shopify landing-page revenue cut; implementation reviewed in Developer Review 868kx80fb (Leo Urdaneta). Deploy via WebTitans.",
    },
    {
      issue: "Merchant Center reports 0 valid and 56 invalid product listings.",
      why: "Invalid listings keep products out of Shopping and free listings, the core ecommerce visibility surface.",
      fix:
        "Populate the missing merchant-specific fields at the Shopify product-template level and revalidate after crawl cycles.",
      developerNote: "Scope from the Merchant Center audit 868kn7qhx.",
    },
    {
      issue:
        "A suspicious paid-link cluster (SEOExpress.org anchor, ~218 referring domains) sits in the backlink profile.",
      why: "Unnatural link patterns are a domain-level risk to rankings.",
      fix:
        "Classify the clusters, prepare a disavow, and confirm whether any link vendor is still active with the client.",
      developerNote: "Backlink risk flagged in the audit set; client confirmation required before disavow.",
    },
    {
      issue:
        "GA4 revenue can't be reconciled with Shopify: the connector trial expired and the live GA4 property isn't accessible from the reporting browser.",
      why: "Without the GA4 tie-out, organic revenue rests on a single source and non-ecommerce bookings stay uncounted.",
      fix:
        "Restore GA4 access, reconnect the connector, and complete the Shopify-vs-GA4 tie-out; confirm Pulse property mapping.",
      developerNote:
        "Microsoft Clarity installed (868kn7qht); Pulse properties mapped (868kqcpch); GA4 property 474007130 access pending.",
    },
  ],

  dataNotes: [
    "Traffic source: Google Search Console domain property sc-domain:penelopeandthebeautybar.com (accessed under fulfillment@allinadvertising.com). Platform is Shopify.",
    "Current period: August 1-31, 2026. Previous period: July 1-31, 2026. Both months contain 31 days.",
    "Total clicks (2,147 vs 2,002) and impressions (134,490 vs 137,980) are the sum of the device rows; the metric cards round to 2.15K/2K and 134K/138K.",
    "Non-brand figures use Search Console's built-in brand filter: about 1,180 clicks in August vs 1,270 in July. Brand queries make up the remainder (~967 vs ~732) and grew month over month.",
    "The homepage appears as separate http://www and https://www rows in the GSC Pages breakdown (849 and 430 clicks in August) — the protocol split the containment work will consolidate.",
    "Revenue source: Shopify Total sales by referrer, referrer source = search, August 2026. Organic Total sales were $8,163.84 (net $8,004) across 16 unique organic orders, AOV $510.24 — 60.7% of all-channel store sales ($13,450.40). Shown as a first-month baseline; it covers Shopify ecommerce and online-booked services, not walk-in/phone bookings.",
    "Organic revenue by engine: Google $7,810 (95.7%), DuckDuckGo $159.84, Bing $150, Yahoo $44. By landing page, the homepage captured $7,813.84 (95.7%). Top organic products were MBR The Best Face Extra Rich ($1,785), MBR The Best Face ($1,720), and Custom Gift Certificates ($1,375).",
    "GA4 tie-out is pending: the Supermetrics GA4 connector trial expired July 15, 2026 and the live GA4 property (474007130) isn't accessible from the reporting browser, so Shopify is the sole revenue source this month.",
    "Merchant Center (0 valid / 56 invalid listings) and backlink-risk figures come from the August audits recorded in ClickUp; completed-work evidence comes from ClickUp task closures in the Penelope Task List.",
  ],
};
