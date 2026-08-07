import type { PowerLine, Obstacle } from "@/lib/reports/types";

import { suiteBasePath } from "./nav";
import type {
  SuiteEvidenceGroup,
  SuiteLinkCard,
  SuiteMeta,
  SuiteRoadmapPhase,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const hubMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "One place to see what happened to organic search after the Shopify move, what is actually broken, and the order we plan to fix it in.",
  date: "August 7, 2026",
  domain: "pipingnow.com",
  facts: [
    { label: "Business", value: "Piping Now / Energy Pipe & Supply" },
    { label: "Platform", value: "Shopify" },
    { label: "Audits included", value: "Seven, plus a data appendix" },
    { label: "Plan length", value: "First 7 days, weeks 2 to 4, month 2" },
  ],
  pageLabel: "Deep SEO Analysis",
  reportType: "SEO Analysis Overview",
};

export const hubExecutiveSummary =
  "Organic search is down over the last three months, but it is not a sitewide indexing failure. Two things are happening at once. First, Shopify is creating a lot of extra URLs that Google crawls and then throws away, which hides the real picture. Second, a small group of high value category pages and one very popular pipe chart page lost most of the traffic. The last 28 days show clicks moving back up, so the site is starting to recover on its own. Our job is to make the numbers trustworthy first, then recover the pages that actually sell.";

export const hubBusinessObjective =
  "Get organic search and Merchant Center back to a state the team can trust and report on, then win back the category and product pages that lost the most commercial traffic after the Shopify migration.";

export const hubNextPriority =
  "Start with measurement and Merchant Center. Reconcile clicks and revenue across Search Console, Merchant Center, GA4, Google Ads, and Shopify, clear the Merchant Center store warning, and pull the list of 1.05K products Google found outside the feed.";

export const hubPowerLines: PowerLine[] = [
  {
    area: "Three month view",
    statement:
      "Landing page clicks fell from 40,856 to 31,476, a loss of 9,380 clicks. The decline is real, not a reporting glitch.",
    status: "watch",
  },
  {
    area: "Last 28 days",
    statement:
      "Landing page clicks rose from 8,890 to 9,207. The site is stabilizing, so the plan is recovery, not rescue.",
    status: "positive",
  },
  {
    area: "One page, one third of the loss",
    statement:
      "The nominal pipe to metric conversion chart alone lost 1,476 clicks. Fixing that single page is the biggest available win.",
    status: "watch",
  },
  {
    area: "Crawl waste",
    statement:
      "Google is finding Shopify recommendation, variant, and sandbox URLs that were never meant to rank. That noise is what makes indexing look broken.",
    status: "watch",
  },
  {
    area: "Merchant Center",
    statement:
      "14,614 of 14,778 products are ready in the United States, but Google found another 1.05K products on the site that the feed does not control.",
    status: "watch",
  },
  {
    area: "Backlinks",
    statement:
      "Ahrefs shows 9.9K new backlinks, but most of them are spam. Do not read that spike as authority growth.",
    status: "watch",
  },
  {
    area: "Blog and AI answers",
    statement:
      "The blog earned 12,379 impressions inside Google AI features in under three months, so the content already works. It just needs to stop competing with itself.",
    status: "positive",
  },
];

export const hubHeadlineStats: SuiteStat[] = [
  {
    context: "Landing page report, May to July against February to April.",
    detail: "-9,380 clicks",
    label: "Clicks, last 3 months",
    sentiment: "negative",
    value: "31,476",
  },
  {
    context: "Landing page report, last 28 days against the 28 days before.",
    detail: "+317 clicks",
    label: "Clicks, last 28 days",
    sentiment: "positive",
    value: "9,207",
  },
  {
    context: "Ahrefs estimate. Keyword count actually went up by 404.",
    detail: "-5.6K",
    label: "Ahrefs organic traffic",
    sentiment: "negative",
    value: "12.8K",
  },
  {
    context: "163 not approved, 2 limited, 1 under review.",
    detail: "164 not showing",
    label: "Merchant Center products",
    sentiment: "neutral",
    value: "14,778",
  },
];

export const hubDiagnosisPoints = [
  "Shopify is exposing duplicate, parameter, collection scoped, legacy, app, and tracking URLs, so crawl budget is going to pages that will never rank.",
  "Organic performance is down across three months, but the last 28 days show a partial recovery.",
  "The biggest losses sit in commercially important areas: pipe hangers and supports, ProPress and press fittings, pipe sizing charts, stainless pipe, backflow, and copper fittings.",
  "Blog content has real visibility, including in Google AI answers, but overlapping hanger and ball valve articles split that visibility across too many pages.",
  "Merchant Center mostly works for online products, but it has feed gaps, 164 products not showing, 1.05K products found outside the feed, and a local store warning.",
  "The Ahrefs backlink spike is mostly spam and link network patterns. It should be monitored, not celebrated.",
];

export const hubClientPriorities = [
  "Measurement integrity first. The team is sensitive to numbers that look positive but may not be real.",
  "Restore and validate Merchant Center organic visibility after the Shopify migration.",
  "Find the missing products. There was an earlier concern about a gap of roughly 12,000 products.",
  "Clean up technical SEO: redirects, 404s, duplicate URL structures, and canonical issues.",
  "Only look at paid and Shopping performance once tracking and feed data can be trusted.",
];

export const hubRoadmap: SuiteRoadmapPhase[] = [
  {
    accent: "blue",
    businessOutcome:
      "The team can trust the numbers again, and Merchant Center stops reporting a blocker that makes products look hidden.",
    deliverable:
      "A single reconciled view of clicks and revenue across all five sources, a cleared Merchant Center store warning, and a reviewed list of the 1.05K products Google found outside the feed.",
    objective:
      "Fix measurement and feed integrity before touching content. Nothing else can be judged fairly until the reporting is honest.",
    theme: "Make the numbers trustworthy",
    window: "P0 . First 7 days",
  },
  {
    accent: "gold",
    businessOutcome:
      "The pages that actually drive revenue start climbing back, and the crawl stops wasting attention on URLs that were never meant to rank.",
    deliverable:
      "Recovered category pages, a repaired pipe chart and conversion page set, one pipe hanger hub, one ball valve hub, and a reviewed list of clean product and collection URLs that Google has skipped.",
    objective:
      "Win back the high value category pages and information pages that lost the most clicks, and consolidate the blog clusters that compete with each other.",
    theme: "Recover what sells",
    window: "P1 . Weeks 2 to 4",
  },
  {
    accent: "blue",
    businessOutcome:
      "New demand is captured instead of only defended, and the backlink profile is monitored without an overreaction.",
    deliverable:
      "A competitor gap plan for the priority product families, a CTR improvement pass on category listings, and a segmented spam backlink list with a monitoring routine.",
    objective:
      "Expand into the gaps competitors are winning, improve how listings look in search, and keep an eye on the spam link wave.",
    theme: "Grow and protect",
    window: "P2 . Month 2",
  },
];

export const hubOperatingPrinciple =
  "Fix the measurement, then fix the crawl, then fix the pages. Publishing more content before those three are stable would only add more noise to a site that already has too much of it.";

export const hubEvidenceGroups: SuiteEvidenceGroup[] = [
  {
    items: [
      "Organic performance is down over three months, with some recovery in the last 28 days.",
      "Shopify is creating a large volume of duplicate URLs that Google discovers.",
      "Redirect and legacy URL patterns from the old site are still significant.",
      "Merchant Center has 164 products not showing and 1.05K products found outside the main feed.",
      "Merchant Center is missing its local store link.",
      "Blog cannibalization is concentrated in the hanger, support, clamp cluster and the ball valve cluster.",
      "The Ahrefs backlink growth is heavily polluted with spam.",
    ],
    label: "Confirmed",
    tone: "confirmed",
  },
  {
    items: [
      "The Shopify migration either introduced or made worse the URL normalization issues, feed uncertainty, and legacy redirect noise.",
      "Part of the decline comes from high value category and chart pages losing rankings, not from a complete indexing failure.",
      "AI visibility is strongest where content is technical and well structured, so refreshes should be written to be easy to quote.",
      "The backlink spam is most likely third party noise, unless a vendor or an old campaign turns out to be involved.",
    ],
    label: "Strong read",
    tone: "inferred",
  },
  {
    items: [
      "The exact list of clean product URLs sitting in Crawled, currently not indexed.",
      "The exact SKU and URL list behind the 1.05K products Merchant Center says Google found.",
      "Whether `srsltid` URLs are actually being indexed or only linked from outside.",
      "The server or CDN cause behind the 5xx examples in Search Console.",
      "Whether any manual action or link warning exists in Search Console.",
    ],
    label: "Still to check",
    tone: "unverified",
  },
];

export const hubRisks: Obstacle[] = [
  {
    eta: "Days 1 to 7",
    impact:
      "Every report is arguable until the sources agree. The team cannot tell a real recovery from a tracking artifact.",
    obstacle:
      "Clicks and revenue do not line up across Search Console, Merchant Center, GA4, Google Ads, and Shopify.",
    remediation:
      "Build one reconciliation view that puts all five sources side by side for the same window, and write down where the definitions differ.",
  },
  {
    eta: "Days 1 to 7",
    impact:
      "The account shows a critical warning that makes it look like products are blocked, which distorts every conversation about visibility.",
    obstacle:
      "Merchant Center reports no physical stores found in the countries of sale.",
    remediation:
      "Decide whether local listings are wanted. If yes, link the Metairie Google Business Profile. If no, turn off the local store surface so the warning clears.",
  },
  {
    eta: "Weeks 1 to 4",
    impact:
      "Google spends its crawl on URLs that will never rank, which slows down how fast real product and category pages get picked up.",
    obstacle:
      "Shopify keeps exposing recommendation, variant, collection scoped, and app sandbox URLs.",
    remediation:
      "Point internal links at clean `/products/{handle}` URLs, stop the app sandbox paths from appearing in rendered HTML, and confirm the `srsltid` canonical behavior.",
  },
  {
    eta: "Weeks 2 to 4",
    impact:
      "One page carries nearly one sixth of the three month click loss on its own.",
    obstacle:
      "The nominal pipe to metric conversion chart lost 1,476 clicks and 374,866 impressions.",
    remediation:
      "Rebuild the chart page for the queries it used to win, check what changed in the results page for those terms, and link it properly from the related collection pages.",
  },
  {
    eta: "Ongoing",
    impact:
      "The Ahrefs trend line looks like authority growth when it is not, which can lead to the wrong decision.",
    obstacle:
      "A spam backlink wave added 9.3K backlinks and 2K referring domains.",
    remediation:
      "Export and segment the spam domains, watch Search Console for manual actions, and hold off on a disavow file unless there is real evidence to support one.",
  },
];

export const hubAuditLinks: SuiteLinkCard[] = [
  {
    covers: "Clicks, queries, landing pages, devices",
    description:
      "Winners and losers for the last 28 days and the last three months, with the pages and searches behind the numbers.",
    href: `${suiteBasePath}/gsc-performance`,
    label: "GSC Performance",
    number: "01",
  },
  {
    covers: "Crawl waste, canonicals, redirects, 404s",
    description:
      "Why Google is crawling so many URLs that were never meant to rank, and which clean pages are being skipped.",
    href: `${suiteBasePath}/gsc-indexation`,
    label: "Indexation",
    number: "02",
  },
  {
    covers: "Feed coverage, disapprovals, store link",
    description:
      "Product visibility in Merchant Center, the 1.05K products found outside the feed, and the local store warning.",
    href: `${suiteBasePath}/merchant-center`,
    label: "Merchant Center",
    number: "03",
  },
  {
    covers: "Top pages, competitors, backlink spam",
    description:
      "Which category pages lost the most estimated traffic, who the real competitors are, and what the backlink spike really is.",
    href: `${suiteBasePath}/ahrefs`,
    label: "Ahrefs",
    number: "04",
  },
  {
    covers: "Overlapping posts, merges, deletions",
    description:
      "Where blog posts compete with each other for the same searches, and the plan to consolidate them into hubs.",
    href: `${suiteBasePath}/blog-cannibalization`,
    label: "Blog Cannibalization",
    number: "05",
  },
  {
    covers: "AI impressions, devices, countries",
    description:
      "Which blog pages Google is already quoting inside AI answers, and how to protect that visibility during consolidation.",
    href: `${suiteBasePath}/ai-search-visibility`,
    label: "AI Search Visibility",
    number: "06",
  },
  {
    covers: "Priorities, owners, proof of completion",
    description:
      "The full prioritized plan with timing, owners, and what counts as done for each action.",
    href: `${suiteBasePath}/action-plan`,
    label: "Action Plan",
    number: "07",
  },
  {
    covers: "Workbooks, CSVs, source exports",
    description:
      "Every export behind these findings, so any number in this analysis can be traced back to its source file.",
    href: `${suiteBasePath}/data-appendix`,
    label: "Data Appendix",
    number: "08",
  },
];

export const hubPageGroupColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "group", label: "Page group" },
  { key: "action", label: "What we do with it" },
  { key: "why", label: "Why" },
];

export const hubPageGroupRows: SuiteTableRow[] = [
  {
    action: "Recover",
    group: "ProPress and press fittings",
    why: "Ahrefs shows this collection down 78.0%, the steepest drop on the site.",
  },
  {
    action: "Recover",
    group: "Pipe hangers and supports",
    why: "Down 232 clicks in Search Console and down 32.0% in Ahrefs, on a page that ranks in the top three.",
  },
  {
    action: "Recover",
    group: "Pipe clamps",
    why: "The pipe clamp collection is down 65.3% in Ahrefs even though clamp searches are growing.",
  },
  {
    action: "Recover",
    group: "RP backflow preventers",
    why: "Down 61.7% in Ahrefs with only 29 keywords, so there is room to rebuild coverage.",
  },
  {
    action: "Recover",
    group: "Pipe charts and conversion resources",
    why: "The conversion chart page alone lost 1,476 clicks over three months.",
  },
  {
    action: "Recover",
    group: "Stainless steel pipe and products",
    why: "The query `stainless steel pipe` lost 23 clicks and 3,426 impressions.",
  },
  {
    action: "Protect",
    group: "Copper pipe fittings",
    why: "Ahrefs shows it up 20.6% and ranking first, but Search Console shows an 85 click drop. Watch both.",
  },
  {
    action: "Protect",
    group: "Aluminum fittings, camlock, basket strainers, flanges",
    why: "All growing. Use them as the template for how a category page should be built.",
  },
  {
    action: "Protect",
    group: "U-bolt pipe support guide",
    why: "The single strongest AI visible page at 2,480 AI impressions. Do not merge it into anything.",
  },
  {
    action: "Consolidate",
    group: "Ball valve size posts",
    why: "Five overlapping posts split the same searches and produce low click rates.",
  },
  {
    action: "Consolidate",
    group: "Hanger, clamp, and support posts",
    why: "Several posts appear for the same queries, which splits the ranking signal.",
  },
  {
    action: "Consolidate",
    group: "Blog archive and pagination",
    why: "Archive surfaces collect impressions without being useful landing pages.",
  },
];

export const hubFinalRecommendation =
  "Piping Now does not need a generic content campaign. It needs a surgical recovery. Stabilize the measurement, the Merchant Center feed, and the canonical product coverage. Reduce the Shopify crawl waste and the leftover legacy URLs. Win back the category pages where commercial traffic dropped. Consolidate the blog clusters that already win in Search and in AI answers. Watch the backlink spam without overreacting while building real industry links. Done in that order, both traditional organic visibility and Merchant Center and AI visibility improve without creating more duplicate content or more reporting noise.";
