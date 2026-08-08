import type { KpiRow, PowerLine } from "@/lib/reports/types";

import type {
  SuiteComparison,
  SuiteMeta,
  SuiteRankedBars,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const performanceMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "What organic search actually did over the last 28 days and the last three months, and which pages and searches explain the change.",
  date: "August 7, 2026",
  domain: "sc-domain:pipingnow.com",
  facts: [
    { label: "28 day window", value: "Jul 8 to Aug 4 vs Jun 10 to Jul 7" },
    { label: "3 month window", value: "May 1 to Jul 31 vs Feb 1 to Apr 30" },
    { label: "Source", value: "Google Search Console" },
    { label: "Ranked by", value: "Click change" },
  ],
  pageLabel: "GSC Performance",
  reportType: "Search Console Performance Audit",
};

export const performanceSummary =
  "Two windows tell two different stories, and both are true. Over three months, landing page clicks fell from 40,856 to 31,476. That is a real decline of 9,380 clicks. Over the last 28 days, the same report shows clicks rising from 8,890 to 9,207. So the site is recovering, but from a lower base. The loss is also very concentrated. One page, the nominal pipe to metric conversion chart, accounts for 1,476 of the lost clicks by itself.";

export const performanceNextPriority =
  "Rebuild the pipe chart and conversion pages first. They are the single biggest click loss on the site and they feed the pipe sizing searches that are also down.";

export const performanceMethodNote =
  "Winners and losers are ranked by click change. The query exports hit the 25,000 row request limit in both windows, so treat the query lists as a top rows comparison rather than the complete long tail. Landing and device exports did not hit that cap, except the previous three month landing export.";

export const performanceHeadlineStats: SuiteStat[] = [
  {
    context: "Landing page report. The decline is real.",
    detail: "-9,380 vs previous",
    label: "Clicks, last 3 months",
    sentiment: "negative",
    value: "31,476",
  },
  {
    context: "Landing page report. Recovery is underway.",
    detail: "+317 vs previous",
    label: "Clicks, last 28 days",
    sentiment: "positive",
    value: "9,207",
  },
  {
    context: "Fewer people are seeing the site in results at all.",
    detail: "-735,545 vs previous",
    label: "Impressions, last 3 months",
    sentiment: "negative",
    value: "3.48M",
  },
  {
    context: "One page out of 4,593 losing pages.",
    detail: "Conversion chart page",
    label: "Largest single page loss",
    sentiment: "negative",
    value: "-1,476",
  },
];

export const performanceKpiRows: KpiRow[] = [
  {
    businessMeaning:
      "Fewer visits from search over the quarter. This is the headline number and it is genuinely down.",
    change: "-9,380",
    current: "31,476",
    metric: "Landing page clicks, 3 months",
    previous: "40,856",
    status: "watch",
  },
  {
    businessMeaning:
      "The site is appearing in far fewer searches, which is what usually comes before a click decline.",
    change: "-735,545",
    current: "3,480,458",
    metric: "Landing page impressions, 3 months",
    previous: "4,216,003",
    status: "watch",
  },
  {
    businessMeaning:
      "Clicks are growing again in the most recent window, which says the problem is stabilizing.",
    change: "+317",
    current: "9,207",
    metric: "Landing page clicks, 28 days",
    previous: "8,890",
    status: "positive",
  },
  {
    businessMeaning:
      "Impressions are still falling even while clicks recover, so visibility has not come back yet.",
    change: "-170,819",
    current: "916,741",
    metric: "Landing page impressions, 28 days",
    previous: "1,087,560",
    status: "watch",
  },
  {
    businessMeaning:
      "Desktop is where most of the business is, and it is where most of the loss is.",
    change: "-7,236",
    current: "23,676",
    metric: "Desktop clicks, 3 months",
    previous: "30,912",
    status: "watch",
  },
  {
    businessMeaning:
      "Mobile fell less in absolute terms but lost the most impressions of any device.",
    change: "-2,060",
    current: "7,475",
    metric: "Mobile clicks, 3 months",
    previous: "9,535",
    status: "watch",
  },
];

export const performanceKpiDisclosure =
  "Numbers come from the Search Console landing page and device reports for the windows shown on the cover. Query totals are lower than landing totals because the query export hit the row limit, not because searches disappeared.";

export const performanceHighlights: PowerLine[] = [
  {
    area: "The real story",
    statement:
      "This is not a sitewide collapse. It is a small number of valuable pages losing a lot, while the rest of the site holds.",
    status: "watch",
  },
  {
    area: "Recovery signal",
    statement:
      "Clicks are up in the last 28 days across the query, landing, and device reports. All three agree.",
    status: "positive",
  },
  {
    area: "Impressions warning",
    statement:
      "Impressions are still down in every window. Clicks recovering on falling impressions means better click rate, not restored visibility.",
    status: "watch",
  },
  {
    area: "Information pages",
    statement:
      "Pipe charts, size charts, and conversion tables lost the most. Those pages bring in the people who later buy fittings.",
    status: "watch",
  },
  {
    area: "Clamps are growing",
    statement:
      "The pipe clamp collection gained 107 clicks and improved 20 positions on `pipe clamps`. That is a category to lean into.",
    status: "positive",
  },
];

export const performanceThreeMonthComparison: SuiteComparison = {
  ariaLabel:
    "Three month comparison. Query clicks fell from 5,803 to 4,295. Landing page clicks fell from 40,856 to 31,476. Device clicks fell from 40,656 to 31,316.",
  currentLabel: "May to Jul",
  items: [
    {
      change: "26.0%",
      current: 4295,
      currentDisplay: "4,295",
      label: "Query clicks",
      previous: 5803,
      previousDisplay: "5,803",
      status: "watch",
    },
    {
      change: "23.0%",
      current: 31476,
      currentDisplay: "31,476",
      label: "Landing page clicks",
      previous: 40856,
      previousDisplay: "40,856",
      status: "watch",
    },
    {
      change: "23.0%",
      current: 31316,
      currentDisplay: "31,316",
      label: "Device clicks",
      previous: 40656,
      previousDisplay: "40,656",
      status: "watch",
    },
    {
      change: "17.4%",
      current: 3480458,
      currentDisplay: "3.48M",
      label: "Landing page impressions",
      previous: 4216003,
      previousDisplay: "4.22M",
      status: "watch",
    },
  ],
  previousLabel: "Feb to Apr",
};

export const performance28DayComparison: SuiteComparison = {
  ariaLabel:
    "Last 28 days compared with the previous 28 days. Query clicks rose from 1,178 to 1,246. Landing page clicks rose from 8,890 to 9,207. Device clicks rose from 8,849 to 9,154. Impressions fell from 1.09 million to 917 thousand.",
  currentLabel: "Last 28 days",
  items: [
    {
      change: "5.8%",
      current: 1246,
      currentDisplay: "1,246",
      label: "Query clicks",
      previous: 1178,
      previousDisplay: "1,178",
      status: "positive",
    },
    {
      change: "3.6%",
      current: 9207,
      currentDisplay: "9,207",
      label: "Landing page clicks",
      previous: 8890,
      previousDisplay: "8,890",
      status: "positive",
    },
    {
      change: "3.4%",
      current: 9154,
      currentDisplay: "9,154",
      label: "Device clicks",
      previous: 8849,
      previousDisplay: "8,849",
      status: "positive",
    },
    {
      change: "15.7%",
      current: 916741,
      currentDisplay: "917K",
      label: "Landing page impressions",
      previous: 1087560,
      previousDisplay: "1.09M",
      status: "watch",
    },
  ],
  previousLabel: "Previous 28",
};

export const performanceDeviceComparison: SuiteComparison = {
  ariaLabel:
    "Device clicks over three months. Desktop fell from 30,912 to 23,676. Mobile fell from 9,535 to 7,475. Tablet fell from 209 to 165.",
  currentLabel: "May to Jul",
  items: [
    {
      change: "23.4%",
      current: 23676,
      currentDisplay: "23,676",
      label: "Desktop",
      previous: 30912,
      previousDisplay: "30,912",
      status: "watch",
    },
    {
      change: "21.6%",
      current: 7475,
      currentDisplay: "7,475",
      label: "Mobile",
      previous: 9535,
      previousDisplay: "9,535",
      status: "watch",
    },
    {
      change: "21.1%",
      current: 165,
      currentDisplay: "165",
      label: "Tablet",
      previous: 209,
      previousDisplay: "209",
      status: "watch",
    },
  ],
  previousLabel: "Feb to Apr",
};

export const performanceLandingLosses: SuiteRankedBars = {
  ariaLabel:
    "Largest landing page click losses over three months. The nominal pipe to metric conversion chart lost 1,476 clicks, far ahead of every other page.",
  items: [
    {
      detail: "1,214 clicks now, down from 2,690",
      display: "-1,476",
      label: "/pages/nominal-pipe-to-inch-to-metric-conversion-chart",
      value: -1476,
    },
    {
      detail: "250 clicks now, down from 482",
      display: "-232",
      label: "/collections/pipe-hangers",
      value: -232,
    },
    {
      detail: "198 clicks now, down from 298",
      display: "-100",
      label: "/products/15wp6l240",
      value: -100,
    },
    {
      detail: "57 clicks now, down from 155",
      display: "-98",
      label: "/products/16wp4l120-406",
      value: -98,
    },
    {
      detail: "122 clicks now, down from 208",
      display: "-86",
      label: "/products/20sp4l020",
      value: -86,
    },
    {
      detail: "208 clicks now, down from 293",
      display: "-85",
      label: "/collections/pipe-fittings-copper-fittings",
      value: -85,
    },
    {
      detail: "76 clicks now, down from 135",
      display: "-59",
      label: "/blogs/news/why-are-copper-pipe-hangers-essential...",
      value: -59,
    },
    {
      detail: "17 clicks now, down from 70",
      display: "-53",
      label: "/products/55cr4l080x060",
      value: -53,
    },
    {
      detail: "90 clicks now, down from 142",
      display: "-52",
      label: "/products/02-gtf-060",
      value: -52,
    },
    {
      detail: "68 clicks now, down from 118",
      display: "-50",
      label: "/products/21sp4l01d",
      value: -50,
    },
  ],
  legend: "Click change over the last three months against the previous three months.",
  tone: "loss",
};

export const performanceLandingWins: SuiteRankedBars = {
  ariaLabel:
    "Largest landing page click gains over three months. The pipe clamp collection gained 107 clicks and the homepage gained 84.",
  items: [
    {
      detail: "159 clicks now, up from 52. Position improved by 3.96.",
      display: "+107",
      label: "/collections/pipe-hangers-pipe-clamp",
      value: 107,
    },
    {
      detail: "568 clicks now, up from 484",
      display: "+84",
      label: "/ (homepage)",
      value: 84,
    },
    {
      detail: "101 clicks now, up from 37",
      display: "+64",
      label: "/products/55cr4l060x040",
      value: 64,
    },
    {
      detail: "147 clicks now, up from 85",
      display: "+62",
      label: "/collections/pipe-hangers-clevis-hanger",
      value: 62,
    },
    {
      detail: "101 clicks now, up from 41. Position improved by 3.68.",
      display: "+60",
      label: "/collections/pipe-fittings-aluminum-fittings",
      value: 60,
    },
    {
      detail: "48 clicks now, up from 15",
      display: "+33",
      label: "/products/bl-811-100-160-s",
      value: 33,
    },
    {
      detail: "70 clicks now, up from 42",
      display: "+28",
      label: "/products/60so4l080",
      value: 28,
    },
    {
      detail: "49 clicks now, up from 23",
      display: "+26",
      label: "/products/012-212ss0800",
      value: 26,
    },
  ],
  legend: "Click change over the last three months against the previous three months.",
  tone: "gain",
};

export const performanceQueryLossColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "query", label: "Search term" },
  { align: "right", key: "delta", label: "Clicks Δ" },
  { align: "right", key: "current", label: "Now" },
  { align: "right", key: "previous", label: "Before" },
  { align: "right", key: "impressions", label: "Impressions Δ" },
  { key: "read", label: "What it tells us" },
];

export const performanceQueryLossRows: SuiteTableRow[] = [
  {
    current: "13",
    delta: "-24",
    impressions: "-616",
    previous: "37",
    query: "pipe chart",
    read: "The chart pages lost their main term. This is the loss to fix first.",
  },
  {
    current: "7",
    delta: "-23",
    impressions: "-3,426",
    previous: "30",
    query: "stainless steel pipe",
    read: "A big commercial term losing both clicks and visibility.",
  },
  {
    current: "1",
    delta: "-19",
    impressions: "-728",
    previous: "20",
    query: "pipe inch to mm",
    read: "A conversion query that maps straight to the chart page.",
  },
  {
    current: "5",
    delta: "-19",
    impressions: "-575",
    previous: "24",
    query: "pipe hangers and supports",
    read: "Position dropped 4.82. This is the hanger blog hub term.",
  },
  {
    current: "0",
    delta: "-17",
    impressions: "-1,595",
    previous: "17",
    query: "dn pipe size chart",
    read: "Position dropped 12.09 and the term now brings in nothing.",
  },
  {
    current: "24",
    delta: "-16",
    impressions: "+207",
    previous: "40",
    query: "pipe hangers",
    read: "Impressions grew but clicks fell, so the listing is being passed over.",
  },
  {
    current: "0",
    delta: "-13",
    impressions: "-1,148",
    previous: "13",
    query: "pipe diameter chart",
    read: "Another chart query that fell to zero clicks.",
  },
  {
    current: "0",
    delta: "-13",
    impressions: "-249",
    previous: "13",
    query: "pipe size chart in inches",
    read: "Same chart cluster. The pattern is consistent, not random.",
  },
  {
    current: "3",
    delta: "-13",
    impressions: "-38",
    previous: "16",
    query: "tci ball valves",
    read: "A brand valve term losing ground while the blog splits ball valve content.",
  },
  {
    current: "1",
    delta: "-12",
    impressions: "-388",
    previous: "13",
    query: "metric pipe sizes",
    read: "Position dropped 18.26. The metric sizing content needs rebuilding.",
  },
];

export const performanceQueryWinColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "query", label: "Search term" },
  { align: "right", key: "delta", label: "Clicks Δ" },
  { align: "right", key: "current", label: "Now" },
  { align: "right", key: "previous", label: "Before" },
  { key: "read", label: "What it tells us" },
];

export const performanceQueryWinRows: SuiteTableRow[] = [
  {
    current: "163",
    delta: "+29",
    previous: "134",
    query: "pipingnow",
    read: "Brand search is healthy and the click rate improved 5.61 points.",
  },
  {
    current: "34",
    delta: "+28",
    previous: "6",
    query: "aluminum pipe fittings",
    read: "Position improved 3.98. This category is winning and should be protected.",
  },
  {
    current: "46",
    delta: "+26",
    previous: "20",
    query: "xxx160",
    read: "A part number search, which means product pages are being found directly.",
  },
  {
    current: "20",
    delta: "+19",
    previous: "1",
    query: "pipe clamps",
    read: "Position improved by 20.04. The biggest ranking gain on the site.",
  },
  {
    current: "36",
    delta: "+18",
    previous: "18",
    query: "pipe fittings",
    read: "The broadest commercial term is moving in the right direction.",
  },
  {
    current: "21",
    delta: "+14",
    previous: "7",
    query: "clevis hanger",
    read: "Grew even while the wider hanger category fell, so the specific page works.",
  },
  {
    current: "28",
    delta: "+9",
    previous: "19",
    query: "mega press fittings",
    read: "Press fitting demand is still there even though the ProPress collection dropped.",
  },
];

export const performance28DayNoteColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "page", label: "Page" },
  { align: "right", key: "delta", label: "Clicks Δ" },
  { key: "read", label: "What it tells us" },
];

export const performance28DayWinRows: SuiteTableRow[] = [
  {
    delta: "+30",
    page: "/ (homepage)",
    read: "195 clicks, up from 165. Branded demand is recovering.",
  },
  {
    delta: "+21",
    page: "/products/012-212sx0600",
    read: "36 clicks, up from 15. A single product page more than doubling.",
  },
  {
    delta: "+20",
    page: "/collections/pipe-fittings",
    read: "47 clicks, up from 27, with position improving 0.52.",
  },
  {
    delta: "+19",
    page: "/collections/pipe-hangers",
    read: "70 clicks, up from 51. The three month loser is already turning around.",
  },
  {
    delta: "+18",
    page: "/pages/glossary-of-common-piping-terms",
    read: "44 clicks, up from 26. Reference content still pulls its weight.",
  },
  {
    delta: "+13",
    page: "/pages/nominal-pipe-to-inch-to-metric-conversion-chart",
    read: "354 clicks, up from 341. The biggest three month loser is stabilizing.",
  },
];

export const performance28DayLossRows: SuiteTableRow[] = [
  {
    delta: "-19",
    page: "/collections/pipe-fittings-copper-fittings",
    read: "52 clicks, down from 71, and 2,378 fewer impressions.",
  },
  {
    delta: "-17",
    page: "/collections/pipe-fittings-press-propress",
    read: "79 clicks, down from 96. Still falling in both tools.",
  },
  {
    delta: "-17",
    page: "/products/012-212ss0800",
    read: "5 clicks, down from 22, even though it gained clicks over three months.",
  },
  {
    delta: "-15",
    page: "/products/02-gtf-060",
    read: "15 clicks, down from 30. Down in both windows.",
  },
  {
    delta: "-11",
    page: "/pages/pipe-chart-pipe-dimensions-weights",
    read: "13 clicks, down from 24, with position dropping 4.94.",
  },
];

export const performanceWhatWeDo = [
  {
    detail:
      "This one page lost 1,476 clicks and 374,866 impressions over three months. Rebuild it around the queries it used to win, `pipe chart`, `pipe inch to mm`, `dn pipe size chart`, `pipe diameter chart`, and `metric pipe sizes`, and check what changed in the search results for those terms.",
    title: "Rebuild the nominal pipe to metric conversion chart page",
  },
  {
    detail:
      "The pipe dimensions and weights page is down 11 clicks in 28 days with position falling 4.94. Treat it as part of the same chart cluster so the two pages support each other instead of splitting the same searches.",
    title: "Repair the pipe dimensions and weights page alongside it",
  },
  {
    detail:
      "`/collections/pipe-hangers` lost 232 clicks over three months but gained 19 in the last 28 days. Compare the title, H1, intro copy, product count, and internal links against competitors, and use the growing clevis hanger and clamp pages as the template.",
    title: "Recover the pipe hanger collection while it is already turning",
  },
  {
    detail:
      "Copper fittings is down 85 clicks over three months and another 19 in the last 28 days, even though Ahrefs shows it growing. Trust Search Console here, because it measures actual clicks rather than an estimate.",
    title: "Investigate the copper fittings disagreement between tools",
  },
  {
    detail:
      "Aluminum fittings, pipe clamps, and clevis hangers are all growing, and `pipe clamps` improved by 20 positions. Document what those pages do differently and copy it onto the recovering categories.",
    title: "Copy what the winning categories are doing",
  },
];
