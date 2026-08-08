import type { PowerLine } from "@/lib/reports/types";

import type {
  SuiteMeta,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const blogMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Several blog posts are competing with each other for the same searches. Here is exactly which ones, and how we merge them into two strong hubs.",
  date: "August 7, 2026",
  domain: "sc-domain:pipingnow.com",
  facts: [
    { label: "Blog URLs reviewed", value: "25" },
    { label: "Query and page rows", value: "2,327" },
    { label: "Overlapping searches", value: "48 candidates" },
    { label: "Window", value: "May 1 to Jul 31, 2026" },
  ],
  pageLabel: "Blog Cannibalization",
  reportType: "Content Overlap and Consolidation Audit",
};

export const blogSummary =
  "Cannibalization means two of your own pages compete for the same search, so neither one wins it outright. Across 25 blog URLs we found 48 searches where two or more pages show up together with real impressions. It is not spread across the whole blog. It sits in two clusters: pipe supports, hangers, and clamps, and ball valve sizes. The support cluster has genuinely useful pages that just need clearer separation. The ball valve cluster is more fragmented, with five size specific posts chasing the same generic terms and producing very few clicks.";

export const blogNextPriority =
  "Make `understanding-pipe-hangers-and-supports` the single hanger and support hub, then merge `pipe-hangers-and-clamp-combinations` into it after preserving any unique sections. That one merge resolves the largest overlap on the site.";

export const blogHighlights: PowerLine[] = [
  {
    area: "The scale",
    statement:
      "48 searches out of 2,327 rows show two or more of your own pages competing. That is focused, not sitewide.",
    status: "positive",
  },
  {
    area: "Cluster one",
    statement:
      "Pipe supports, hangers, and clamps: 383 clicks and 69,299 impressions at an average position of 7.52. Strong, but split.",
    status: "watch",
  },
  {
    area: "Cluster two",
    statement:
      "Ball valve sizes: 95 clicks and 23,340 impressions at position 11.07. Five posts, all weak, all overlapping.",
    status: "watch",
  },
  {
    area: "The clearest example",
    statement:
      "For `types of pipe hangers and supports`, three pages appear. The hub takes 96.6% of impressions, so the others just dilute.",
    status: "watch",
  },
  {
    area: "A slug that lies",
    statement:
      "The URL says `1-ball-valve` but the title is about a 1 1/2 inch valve. That confuses both readers and search engines.",
    status: "watch",
  },
  {
    area: "Do not refresh by default",
    statement:
      "Most posts were published in 2025 but some carry 2022 and 2023 modified dates, which means migrated legacy content. Weak legacy posts should go, not be rewritten.",
    status: "watch",
  },
];

export const blogStats: SuiteStat[] = [
  {
    context: "Across 25 blog URLs in the last three months.",
    detail: "48 overlapping searches",
    label: "Query and page rows",
    sentiment: "neutral",
    value: "2,327",
  },
  {
    context: "Position 7.52. The strongest cluster, and the most split.",
    detail: "69,299 impressions",
    label: "Hanger cluster clicks",
    sentiment: "neutral",
    value: "383",
  },
  {
    context: "Position 11.07 across five overlapping size posts.",
    detail: "23,340 impressions",
    label: "Ball valve cluster clicks",
    sentiment: "negative",
    value: "95",
  },
  {
    context: "Position 17.25. Almost no commercial value.",
    detail: "6,544 impressions",
    label: "Legacy news clicks",
    sentiment: "negative",
    value: "16",
  },
];

export const blogClusterColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "cluster", label: "Cluster" },
  { align: "right", key: "clicks", label: "Clicks" },
  { align: "right", key: "impressions", label: "Impressions" },
  { align: "right", key: "position", label: "Avg. position" },
  { key: "recommendation", label: "What we do" },
];

export const blogClusterRows: SuiteTableRow[] = [
  {
    clicks: "383",
    cluster: "Pipe supports, hangers, clamps",
    impressions: "69,299",
    position: "7.52",
    recommendation:
      "Refresh the hub, merge the overlapping support pages, and keep the distinct commercial spokes separate.",
  },
  {
    clicks: "95",
    cluster: "Ball valve sizes and comparisons",
    impressions: "23,340",
    position: "11.07",
    recommendation:
      "Merge the size specific pages into one hub and refresh the comparison page as a spoke.",
  },
  {
    clicks: "16",
    cluster: "Legacy and general news",
    impressions: "6,544",
    position: "17.25",
    recommendation:
      "Delete or noindex the weak news posts. Refresh only the evergreen posts that have commercial value.",
  },
];

export const blogMergeColumns: SuiteTableColumn[] = [
  { key: "priority", label: "Priority" },
  { emphasis: true, key: "url", label: "Page to merge" },
  { align: "right", key: "clicks", label: "Clicks" },
  { align: "right", key: "impressions", label: "Impr." },
  { align: "right", key: "position", label: "Pos." },
  { key: "destination", label: "Merge into" },
  { key: "rationale", label: "Why" },
];

export const blogMergeRows: SuiteTableRow[] = [
  {
    clicks: "22",
    destination: "understanding-pipe-hangers-and-supports",
    impressions: "5,883",
    position: "8.13",
    priority: "High",
    rationale:
      "Ranks for overlapping pipe hanger, plumbing hanger, water pipe hanger, and support searches. Move the unique sections into the hub and redirect if the content is largely duplicate.",
    url: "pipe-hangers-and-clamp-combinations",
  },
  {
    clicks: "10",
    destination: "understanding-pipe-hangers-and-supports",
    impressions: "2,058",
    position: "16.95",
    priority: "High",
    rationale:
      "Overlaps with hanger and clamp terminology while performing poorly. Move the reusable content into the hub, or keep it only if it is rewritten for a genuinely different intent.",
    url: "pipes-and-clamps-understanding-their-role...",
  },
  {
    clicks: "42",
    destination: "New ball valve sizes and uses hub",
    impressions: "7,811",
    position: "7.71",
    priority: "High",
    rationale:
      "The strongest page in the ball valve cluster, but it competes with several size specific posts. Use it as the source for the consolidated hub, or redirect it into the new hub.",
    url: "3-4-ball-valves-a-complete-guide...",
  },
  {
    clicks: "14",
    destination: "Ball valve sizes and uses hub",
    impressions: "2,590",
    position: "12.14",
    priority: "High",
    rationale:
      "A size specific article overlapping broader ball valve and gate versus ball valve searches while producing few clicks. Merge unless the product range justifies its own landing page.",
    url: "2-inch-ball-valve-overview-of-features...",
  },
  {
    clicks: "9",
    destination: "Ball valve sizes and uses hub",
    impressions: "2,821",
    position: "8.96",
    priority: "High",
    rationale:
      "Low click rate and overlapping size and generic searches. Merge into the consolidated guide and redirect after saving the useful sections.",
    url: "1-2-ball-value-a-comprehensive-guide...",
  },
  {
    clicks: "4",
    destination: "Ball valve sizes and uses hub",
    impressions: "2,543",
    position: "13.37",
    priority: "High",
    rationale:
      "The slug says 1 ball valve but the title is about a 1 1/2 inch valve. Merge into a corrected consolidated guide and redirect to remove the confusion.",
    url: "1-ball-valve-a-comprehensive-guide...",
  },
  {
    clicks: "0",
    destination: "how-to-properly-install-pipe-supports...",
    impressions: "25",
    position: "7.72",
    priority: "Medium",
    rationale:
      "A relevant topic with almost no impressions and no clicks. Fold the adjustable support guidance into the installation page unless there is a product reason to keep it.",
    url: "how-adjustable-pipe-supports-can-save-time...",
  },
  {
    clicks: "9",
    destination: "Ball valve sizes and uses hub",
    impressions: "1,114",
    position: "12.39",
    priority: "Medium",
    rationale:
      "A lower volume size specific post overlapping the generic ball valve terms. Merge, or rewrite it as a clearly distinct product support page.",
    url: "1-4-ball-value-a-comprehensive-guide...",
  },
  {
    clicks: "5",
    destination: "Ball valve hub or stainless valve support page",
    impressions: "1,285",
    position: "14.87",
    priority: "Medium",
    rationale:
      "Overlaps the ball valve cluster with few clicks. Merge into the hub unless a stainless specific category page needs its own supporting content.",
    url: "stainless-steel-ball-valve-durability...",
  },
  {
    clicks: "0",
    destination: "why-are-copper-pipe-hangers-essential...",
    impressions: "2",
    position: "3.00",
    priority: "Low",
    rationale:
      "An announcement post with almost no organic traction. Move any useful copper fitting copy into the copper hanger content and redirect if it is removed.",
    url: "pipingnow-now-offers-copper-fittings",
  },
];

export const blogRemoveColumns: SuiteTableColumn[] = [
  { key: "priority", label: "Priority" },
  { emphasis: true, key: "url", label: "Page" },
  { align: "right", key: "clicks", label: "Clicks" },
  { align: "right", key: "impressions", label: "Impr." },
  { key: "recommendation", label: "What we do" },
  { key: "rationale", label: "Why" },
];

export const blogRemoveRows: SuiteTableRow[] = [
  {
    clicks: "0",
    impressions: "24",
    priority: "High",
    rationale:
      "A paginated archive is not an article and should not compete in search results.",
    recommendation: "Noindex or canonical the paginated archive",
    url: "/blogs/news?page=2",
  },
  {
    clicks: "1",
    impressions: "557",
    priority: "Medium",
    rationale:
      "The archive collects impressions but is not a focused landing page. Keep it usable for people, remove it from search where Shopify allows.",
    recommendation: "Keep accessible, remove from the index if possible",
    url: "/blogs/news",
  },
  {
    clicks: "0",
    impressions: "6",
    priority: "Low",
    rationale:
      "Low search demand, thin content, and a dated topic. There is no case for keeping it in the index.",
    recommendation: "Delete or noindex",
    url: "global-shipping-costs-are-returning-to-prepandemic-levels",
  },
  {
    clicks: "0",
    impressions: "1",
    priority: "Low",
    rationale:
      "Near zero performance and an old legacy modified date. Keep only if there is a deliberate thought leadership plan behind it.",
    recommendation: "Delete, noindex, or rewrite as market content",
    url: "energy-transition-is-a-metals-transition",
  },
  {
    clicks: "0",
    impressions: "7",
    priority: "Low",
    rationale:
      "Very low search demand and thin word count. Keep it only if it serves a brand or sales purpose, otherwise take it out of the index.",
    recommendation: "Noindex, archive, or fold into a case study page",
    url: "customer-spotlight",
  },
];

export const blogRefreshColumns: SuiteTableColumn[] = [
  { key: "priority", label: "Priority" },
  { emphasis: true, key: "url", label: "Page to keep" },
  { align: "right", key: "clicks", label: "Clicks" },
  { align: "right", key: "impressions", label: "Impr." },
  { align: "right", key: "ctr", label: "CTR" },
  { align: "right", key: "position", label: "Pos." },
  { key: "direction", label: "Its job going forward" },
];

export const blogRefreshRows: SuiteTableRow[] = [
  {
    clicks: "110",
    ctr: "0.48%",
    direction: "Keep as the standalone U-bolt pipe clamp guide. Do not merge it.",
    impressions: "22,742",
    position: "5.13",
    priority: "High",
    url: "everything-you-need-to-know-about-u-bolts...",
  },
  {
    clicks: "42",
    ctr: "0.31%",
    direction: "Keep as the pipe hangers and supports hub. Everything else merges into this.",
    impressions: "13,662",
    position: "8.13",
    priority: "High",
    url: "understanding-pipe-hangers-and-supports",
  },
  {
    clicks: "76",
    ctr: "0.82%",
    direction: "Keep as the copper pipe hanger guide.",
    impressions: "9,245",
    position: "7.28",
    priority: "High",
    url: "why-are-copper-pipe-hangers-essential...",
  },
  {
    clicks: "12",
    ctr: "0.23%",
    direction: "Keep as the comparison spoke, linked from the ball valve hub.",
    impressions: "5,176",
    position: "14.37",
    priority: "High",
    url: "gate-valve-vs-ball-valve-whats-the-difference...",
  },
  {
    clicks: "46",
    ctr: "0.80%",
    direction: "Keep as the fasteners guide.",
    impressions: "5,767",
    position: "7.14",
    priority: "Medium",
    url: "fasteners-used-in-securing-pipes...",
  },
  {
    clicks: "20",
    ctr: "0.50%",
    direction: "Keep as the roof block pipe support spoke.",
    impressions: "4,029",
    position: "10.10",
    priority: "Medium",
    url: "roof-blocks-for-pipe-support...",
  },
  {
    clicks: "28",
    ctr: "0.82%",
    direction: "Keep as the installation spoke.",
    impressions: "3,394",
    position: "9.99",
    priority: "Medium",
    url: "how-to-properly-install-pipe-supports...",
  },
  {
    clicks: "29",
    ctr: "1.16%",
    direction: "Keep as the thermal expansion spoke. Best click rate in the cluster.",
    impressions: "2,494",
    position: "10.94",
    priority: "Medium",
    url: "pipe-roller-supports-for-thermal-expansion",
  },
  {
    clicks: "5",
    ctr: "0.15%",
    direction: "Keep, or redirect into a stainless steel material guide.",
    impressions: "3,424",
    position: "24.42",
    priority: "Medium",
    url: "stainless-steel-magnetic-or-not",
  },
  {
    clicks: "11",
    ctr: "0.35%",
    direction: "Keep only if it is rewritten for commercial and internal link value.",
    impressions: "3,104",
    position: "9.41",
    priority: "Low",
    url: "the-evolution-of-pipe",
  },
];

export const blogOverlapColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "query", label: "Search term" },
  { align: "right", key: "impressions", label: "Impr." },
  { align: "right", key: "pages", label: "Pages" },
  { key: "primary", label: "Page taking most of it" },
  { key: "secondary", label: "Page splitting it" },
  { align: "right", key: "share", label: "Top share" },
];

export const blogOverlapRows: SuiteTableRow[] = [
  {
    impressions: "588",
    pages: "3",
    primary: "understanding-pipe-hangers-and-supports",
    query: "types of pipe hangers and supports",
    secondary: "pipe-hangers-and-clamp-combinations",
    share: "96.6%",
  },
  {
    impressions: "805",
    pages: "2",
    primary: "gate-valve-vs-ball-valve...",
    query: "ball valve vs gate valve",
    secondary: "2-inch-ball-valve-overview...",
    share: "99.9%",
  },
  {
    impressions: "620",
    pages: "2",
    primary: "3-4-ball-valves-a-complete-guide...",
    query: "3/4 ball valve",
    secondary: "2-inch-ball-valve-overview...",
    share: "99.5%",
  },
  {
    impressions: "620",
    pages: "2",
    primary: "2-inch-ball-valve-overview...",
    query: "2 inch ball valve",
    secondary: "gate-valve-vs-ball-valve...",
    share: "99.8%",
  },
  {
    impressions: "551",
    pages: "2",
    primary: "1-ball-valve-a-comprehensive-guide...",
    query: "1 1 2 ball valve",
    secondary: "1-2-ball-value-a-comprehensive-guide...",
    share: "92.0%",
  },
  {
    impressions: "531",
    pages: "3",
    primary: "pipe-hangers-and-clamp-combinations",
    query: "plumbing hangers",
    secondary: "why-are-copper-pipe-hangers-essential...",
    share: "87.6%",
  },
  {
    impressions: "396",
    pages: "2",
    primary: "understanding-pipe-hangers-and-supports",
    query: "pipe hanger design",
    secondary: "pipe-hangers-and-clamp-combinations",
    share: "63.4%",
  },
  {
    impressions: "336",
    pages: "2",
    primary: "pipe-hangers-and-clamp-combinations",
    query: "piping hangers",
    secondary: "understanding-pipe-hangers-and-supports",
    share: "50.9%",
  },
  {
    impressions: "326",
    pages: "3",
    primary: "pipe-hangers-and-clamp-combinations",
    query: "water pipe hangers",
    secondary: "understanding-pipe-hangers-and-supports",
    share: "66.0%",
  },
  {
    impressions: "248",
    pages: "2",
    primary: "understanding-pipe-hangers-and-supports",
    query: "pipe hanger types",
    secondary: "pipe-hangers-and-clamp-combinations",
    share: "92.3%",
  },
  {
    impressions: "165",
    pages: "4",
    primary: "fasteners-used-in-securing-pipes...",
    query: "pipe hangers and supports",
    secondary: "understanding-pipe-hangers-and-supports",
    share: "1.8%",
  },
  {
    impressions: "159",
    pages: "2",
    primary: "1-2-ball-value-a-comprehensive-guide...",
    query: "1 2 inch ball valve",
    secondary: "1-ball-valve-a-comprehensive-guide...",
    share: "96.2%",
  },
];

export const blogOverlapNote =
  "Look at the last row. For `pipe hangers and supports`, four pages appear and the leading page holds only 1.8% of the impressions. That is the clearest sign that no single page owns the term. The hub should own it.";

export const blogPlanSteps = [
  {
    detail:
      "Use `understanding-pipe-hangers-and-supports` as the hub. Move any unique sections out of `pipe-hangers-and-clamp-combinations` and `pipes-and-clamps...` into it, then redirect those two pages once a manual review confirms the content really is duplicated.",
    title: "Build one pipe hangers and supports hub",
  },
  {
    detail:
      "Keep the U-bolt guide, the copper hanger guide, the fasteners guide, the installation guide, the roller support guide, and the roof block guide as separate spokes. Each answers a different question and each earns its own traffic.",
    title: "Keep the strong spokes separate",
  },
  {
    detail:
      "Create or designate one ball valve sizes and uses hub, then consolidate the five weaker size specific articles into it. Use the 3/4 inch guide as the source content since it is the strongest of the group.",
    title: "Build one ball valve sizes and uses hub",
  },
  {
    detail:
      "Refresh it with comparison tables and direct links to the valve categories, and link it from the new ball valve hub. It has real visibility and should not be removed.",
    title: "Keep gate valve versus ball valve as a comparison spoke",
  },
  {
    detail:
      "Noindex or canonical the archive pagination, starting with `/blogs/news?page=2`. Consider noindexing the main archive too if it keeps appearing as a landing page for non brand searches.",
    title: "Take the archive surfaces out of search",
  },
  {
    detail:
      "Delete, noindex, or archive the legacy and news posts with no clicks and negligible impressions, unless they serve a brand or sales purpose that has nothing to do with search.",
    title: "Remove the low value legacy posts",
  },
  {
    detail:
      "For the high impression, low click rate guides, improve the title tags, meta descriptions, comparison tables, product calls to action, FAQ sections, and internal links into the relevant collections. Several of these pages sit under a 0.5% click rate with tens of thousands of impressions.",
    title: "Refresh the guides that get seen but not clicked",
  },
];
