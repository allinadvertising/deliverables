import type { PowerLine } from "@/lib/reports/types";

import type {
  SuiteMeta,
  SuiteRankedBars,
  SuiteShareItem,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const aiMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Google is already quoting the blog inside its AI answers. Here is which pages, how much, and how to protect that while consolidating content.",
  date: "August 7, 2026",
  domain: "sc-domain:pipingnow.com",
  facts: [
    { label: "AI impressions", value: "12,379" },
    { label: "Window", value: "May 18 to Aug 5, 2026" },
    { label: "Metric available", value: "Impressions only" },
    { label: "Filter", value: "Pages matching blog" },
  ],
  pageLabel: "AI Search Visibility",
  reportType: "Generative AI Features Report",
};

export const aiSummary =
  "Search Console reports 12,379 impressions from Google's AI features for blog URLs in under three months. That visibility is not spread evenly. It sits almost entirely in technical, product support content: pipe supports, hangers, clamps, U-bolts, and ball valves. News and archive pages get almost none. This matters for the consolidation plan, because it tells us which pages to protect. Merging a page that AI features already quote would give away visibility that took months to earn.";

export const aiNextPriority =
  "Refresh the U-bolts guide first. It is the single most AI visible page at 2,480 impressions, and it also performs well in normal search. Add tighter answer blocks, specification tables, short definitions, and links to the pipe clamp categories.";

export const aiWhyItMatters =
  "An AI impression means Google used the page inside an AI generated answer. There is no click number for it yet, only impressions. The practical value is that AI features tend to pull from content that is technical, well structured, and easy to quote. So the pages winning here are telling us exactly what format works, and that format should guide every content refresh.";

export const aiHighlights: PowerLine[] = [
  {
    area: "The pattern",
    statement:
      "AI features pick technical guides, not news. Every top page is product support content, and no announcement page appears.",
    status: "positive",
  },
  {
    area: "The leading page",
    statement:
      "The U-bolts guide alone holds 2,480 AI impressions, or 20.0% of the total. Protect it, do not merge it.",
    status: "positive",
  },
  {
    area: "The consolidation conflict",
    statement:
      "Six of the fifteen top AI pages are marked for merging. Merge them carefully and preserve their content inside the hubs.",
    status: "watch",
  },
  {
    area: "Device split",
    statement:
      "Desktop takes 72.1% of AI impressions. This is people researching at a desk, which fits a trade buying audience.",
    status: "positive",
  },
  {
    area: "Market",
    statement:
      "The United States accounts for 61.9%, with Canada, India, and the Philippines as the next markets.",
    status: "positive",
  },
  {
    area: "Trend",
    statement:
      "Averaging 154.7 impressions a day, peaking in early and late June, then softening through late July. Stable but drifting down.",
    status: "watch",
  },
];

export const aiStats: SuiteStat[] = [
  {
    context: "May 18 to August 5, 2026. Impressions only, no click data.",
    detail: "154.7 per day",
    label: "AI impressions",
    sentiment: "positive",
    value: "12,379",
  },
  {
    context: "20.0% of all AI impressions on the blog.",
    detail: "The U-bolts guide",
    label: "Top single page",
    sentiment: "positive",
    value: "2,480",
  },
  {
    context: "Mobile 3,378 at 27.3%, tablet 75 at 0.6%.",
    detail: "72.1% of the total",
    label: "Desktop impressions",
    sentiment: "neutral",
    value: "8,926",
  },
  {
    context: "Strongest day June 25 at 244. Weakest July 4 at 65.",
    detail: "61.9% of the total",
    label: "United States impressions",
    sentiment: "neutral",
    value: "7,663",
  },
];

export const aiTopPages: SuiteRankedBars = {
  ariaLabel:
    "AI impressions by blog page. The U-bolts guide leads with 2,480, followed by the 3/4 ball valve guide at 1,665 and the fasteners guide at 1,095.",
  items: [
    {
      detail: "20.0% share. Refresh and keep standalone. 22,742 search impressions.",
      display: "2,480",
      label: "everything-you-need-to-know-about-u-bolts...",
      value: 2480,
    },
    {
      detail: "13.5% share. Marked for merge into the ball valve hub. 7,811 search impressions.",
      display: "1,665",
      label: "3-4-ball-valves-a-complete-guide...",
      value: 1665,
    },
    {
      detail: "8.8% share. Refresh and keep. 5,767 search impressions.",
      display: "1,095",
      label: "fasteners-used-in-securing-pipes...",
      value: 1095,
    },
    {
      detail: "8.2% share. This is the hanger hub. 13,662 search impressions.",
      display: "1,009",
      label: "understanding-pipe-hangers-and-supports",
      value: 1009,
    },
    {
      detail: "7.1% share. Refresh and keep. 9,245 search impressions.",
      display: "874",
      label: "why-are-copper-pipe-hangers-essential...",
      value: 874,
    },
    {
      detail: "6.3% share. Refresh and keep as a spoke. 4,029 search impressions.",
      display: "779",
      label: "roof-blocks-for-pipe-support...",
      value: 779,
    },
    {
      detail: "5.4% share. Marked for merge into the hanger hub. 5,883 search impressions.",
      display: "671",
      label: "pipe-hangers-and-clamp-combinations",
      value: 671,
    },
    {
      detail: "5.4% share. Refresh and keep as a spoke. 2,494 search impressions.",
      display: "665",
      label: "pipe-roller-supports-for-thermal-expansion",
      value: 665,
    },
    {
      detail: "5.1% share. Keep as the comparison spoke. 5,176 search impressions.",
      display: "633",
      label: "gate-valve-vs-ball-valve...",
      value: 633,
    },
    {
      detail: "4.9% share. Refresh and keep as a spoke. 3,394 search impressions.",
      display: "610",
      label: "how-to-properly-install-pipe-supports...",
      value: 610,
    },
  ],
  legend: "AI feature impressions, May 18 to August 5, 2026.",
  tone: "gain",
};

export const aiMergeConflictColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "page", label: "Page" },
  { align: "right", key: "aiImpressions", label: "AI impr." },
  { align: "right", key: "share", label: "Share" },
  { key: "plannedAction", label: "Blog audit says" },
  { key: "guidance", label: "How to handle it" },
];

export const aiMergeConflictRows: SuiteTableRow[] = [
  {
    aiImpressions: "1,665",
    guidance:
      "Use it as the source content for the new hub rather than deleting it. If it redirects, the hub must carry its answer blocks and tables forward.",
    page: "3-4-ball-valves-a-complete-guide...",
    plannedAction: "Merge",
    share: "13.5%",
  },
  {
    aiImpressions: "671",
    guidance:
      "Preserve its unique sections inside `understanding-pipe-hangers-and-supports` before redirecting. This is the single largest AI visible page marked for merge into the hanger hub.",
    page: "pipe-hangers-and-clamp-combinations",
    plannedAction: "Merge",
    share: "5.4%",
  },
  {
    aiImpressions: "346",
    guidance:
      "Merge, but carry the size specifications into the hub as a table. AI features are quoting the numbers, not the prose.",
    page: "1-2-ball-value-a-comprehensive-guide...",
    plannedAction: "Merge",
    share: "2.8%",
  },
  {
    aiImpressions: "284",
    guidance:
      "Lower risk. Merge into the hanger hub and keep any distinct clamp role explanation.",
    page: "pipes-and-clamps-understanding-their-role...",
    plannedAction: "Merge",
    share: "2.3%",
  },
  {
    aiImpressions: "274",
    guidance:
      "Merge into the ball valve hub, keeping the 2 inch specifications as a row in the size table.",
    page: "2-inch-ball-valve-overview...",
    plannedAction: "Merge",
    share: "2.2%",
  },
  {
    aiImpressions: "271",
    guidance:
      "Merge and keep the 1/4 inch specifications in the size table.",
    page: "1-4-ball-value-a-comprehensive-guide...",
    plannedAction: "Merge",
    share: "2.2%",
  },
  {
    aiImpressions: "255",
    guidance:
      "Merge and fix the size mismatch. The slug says 1 ball valve but the title is about a 1 1/2 inch valve.",
    page: "1-ball-valve-a-comprehensive-guide...",
    plannedAction: "Merge",
    share: "2.1%",
  },
];

export const aiMergeConflictNote =
  "Together these seven pages hold 3,766 AI impressions, or 30.4% of the blog total. Merging them is still the right call, because five overlapping ball valve pages will never each rank. But the content has to move into the hubs, not disappear. Measure AI impressions again 30 days after each merge to confirm the hub absorbed the visibility.";

export const aiDeviceShares: SuiteShareItem[] = [
  { display: "8,926", label: "Desktop", share: 72.1 },
  { display: "3,378", label: "Mobile", share: 27.3 },
  { display: "75", label: "Tablet", share: 0.6 },
];

export const aiCountryShares: SuiteShareItem[] = [
  { display: "7,663", label: "United States", share: 61.9 },
  { display: "732", label: "Canada", share: 5.9 },
  { display: "487", label: "India", share: 3.9 },
  { display: "449", label: "Philippines", share: 3.6 },
  { display: "211", label: "United Kingdom", share: 1.7 },
  { display: "188", label: "Indonesia", share: 1.5 },
  { display: "160", label: "Saudi Arabia", share: 1.3 },
  { display: "136", label: "Australia", share: 1.1 },
  { display: "132", label: "Malaysia", share: 1.1 },
  { display: "128", label: "Singapore", share: 1.0 },
];

export const aiCountryNote =
  "The United States is the market that matters commercially, and it takes 61.9% of the AI impressions. The remaining markets are worth knowing about but should not change the content plan, since Piping Now ships within the United States.";

export const aiRecommendations = [
  {
    detail:
      "It is the leading AI visible page and it already performs well in normal search with 22,742 impressions. Add tighter answer blocks, specification tables, short clear definitions, and links into the pipe clamp categories. Do not merge it into anything.",
    title: "Refresh and protect the U-bolts guide first",
  },
  {
    detail:
      "Keep `understanding-pipe-hangers-and-supports` as the hub, then merge or rewrite the overlapping `pipe-hangers-and-clamp-combinations` and `pipes-and-clamps...` content so AI systems get one clear source instead of three competing ones.",
    title: "Treat the hanger and support cluster as the main AI asset",
  },
  {
    detail:
      "The 3/4 inch article is the strongest AI visible page in that cluster, but five size pages fragment the topic. Build one hub with a size table, and make sure every specification from the merged pages ends up in it.",
    title: "Consolidate the ball valve size articles into one hub",
  },
  {
    detail:
      "It has 633 AI impressions, which is meaningful. Keep it as a comparison spoke supporting the consolidated ball valve hub, with comparison tables and direct links to the valve categories.",
    title: "Keep gate valve versus ball valve, do not delete it",
  },
  {
    detail:
      "`/blogs/news`, `/blogs/news?page=2`, and the thin announcement posts show negligible AI impressions. They should stay secondary to the evergreen technical guides in every content decision.",
    title: "Do not invest in archive or announcement pages",
  },
  {
    detail:
      "Short definitions, bullet summaries, tables for sizes, materials, and use cases, explicit product fit guidance, FAQ sections, and links to the relevant commercial collections. This is the format AI features are already choosing on this site.",
    title: "Write every refresh so it is easy to quote",
  },
];
