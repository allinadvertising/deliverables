import type { Obstacle, PowerLine } from "@/lib/reports/types";

import type {
  SuiteMeta,
  SuiteRankedBars,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const ahrefsMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Which category pages lost the most estimated traffic, who the real competitors are, and why a backlink spike of 9.3K links is bad news rather than good.",
  date: "August 7, 2026",
  domain: "pipingnow.com",
  facts: [
    { label: "Organic traffic estimate", value: "12.8K, down 5.6K" },
    { label: "Organic keywords", value: "2.4K, up 404" },
    { label: "Domain Rating", value: "8" },
    { label: "Pages crawled", value: "135,364" },
  ],
  pageLabel: "Ahrefs Audit",
  reportType: "Third Party Visibility and Backlink Audit",
};

export const ahrefsSummary =
  "Ahrefs estimates traffic at 12.8K per month, down 5.6K, while the keyword count actually went up by 404. That combination matters. The site is not losing rankings across the board. It is losing traffic on a small number of high intent category pages. Separately, the backlink profile grew by 9.3K links and 2K referring domains in a short window, and most of it is spam. The top anchor by referring domain count is a fake testimonial from an SEO service, appearing across 216 domains.";

export const ahrefsNextPriority =
  "Recover the ProPress and press fittings collection first. It is down 78.0%, the steepest drop on the site, and it ranks fourth and first for its two main terms, so the demand is still there.";

export const ahrefsCaveat =
  "Ahrefs traffic numbers are estimates, not measured clicks. Use them to spot direction and to compare against competitors, then confirm anything important against Search Console before making a claim to the client.";

export const ahrefsHighlights: PowerLine[] = [
  {
    area: "The key ratio",
    statement:
      "Traffic is down 5.6K while keywords are up 404. This is a value problem on specific pages, not a ranking collapse.",
    status: "watch",
  },
  {
    area: "Steepest drop",
    statement:
      "The ProPress and press fittings collection is down 78.0%, worth $293 in estimated traffic value.",
    status: "watch",
  },
  {
    area: "The hanger cluster",
    statement:
      "Three hanger and clamp collections are all down at once: 32.0%, 65.3%, and 33.4%. That points at a shared cause.",
    status: "watch",
  },
  {
    area: "Real winners",
    statement:
      "Aluminum fittings are up 96.5%, basket strainers up 98.6%, and stainless flanges up 148.8%. Copy what those pages do.",
    status: "positive",
  },
  {
    area: "Closest competitor",
    statement:
      "`buyfittingsonline.com` shares 418 keywords, the highest overlap of any competitor, despite a modest Domain Rating of 22.",
    status: "positive",
  },
  {
    area: "The backlink spike",
    statement:
      "9.9K backlinks and 2.1K referring domains, mostly spam. Treat it as reporting noise and a monitoring item, not authority.",
    status: "watch",
  },
];

export const ahrefsStats: SuiteStat[] = [
  {
    context: "United States accounts for 12.6K of that, or 98.7%.",
    detail: "-5.6K",
    label: "Organic traffic estimate",
    sentiment: "negative",
    value: "12.8K",
  },
  {
    context: "Top three positions grew to 906, up 197.",
    detail: "+404",
    label: "Organic keywords",
    sentiment: "positive",
    value: "2.4K",
  },
  {
    context: "The estimated worth of the organic traffic.",
    detail: "-$3.1K",
    label: "Traffic value",
    sentiment: "negative",
    value: "$8.1K",
  },
  {
    context: "Across 2.1K referring domains, up 2K. Mostly spam.",
    detail: "+9.3K",
    label: "Backlinks",
    sentiment: "negative",
    value: "9.9K",
  },
];

export const ahrefsPageLosses: SuiteRankedBars = {
  ariaLabel:
    "Estimated traffic loss by page. ProPress and press fittings fell 78.0%, pipe clamps 65.3%, backflow 61.7%, adjustable stanchions 33.4%, pipe hangers 32.0%, and the homepage 29.7%.",
  items: [
    {
      detail: "787 traffic, $293 value, ranks #4 and #1 for its main terms",
      display: "-78.0%",
      label: "/collections/pipe-fittings-press-propress",
      value: -78,
    },
    {
      detail: "312 traffic, $125 value, 53 keywords",
      display: "-65.3%",
      label: "/collections/pipe-hangers-pipe-clamp",
      value: -65.3,
    },
    {
      detail: "295 traffic, $160 value, only 29 keywords",
      display: "-61.7%",
      label: "/collections/valves-backflow-rp",
      value: -61.7,
    },
    {
      detail: "295 traffic, $219 value, still ranks #1 and #2",
      display: "-33.4%",
      label: "/collections/pipe-hangers-adj-pipe-support-stanchions",
      value: -33.4,
    },
    {
      detail: "1,066 traffic, $397 value, 103 keywords, ranks #3 and #2",
      display: "-32.0%",
      label: "/collections/pipe-hangers",
      value: -32,
    },
    {
      detail: "291 traffic, $893 value, 458 referring domains",
      display: "-29.7%",
      label: "/ (homepage)",
      value: -29.7,
    },
    {
      detail: "715 traffic, $458 value, ranks #7 for `pipe fittings`",
      display: "-16.5%",
      label: "/collections/pipe-fittings",
      value: -16.5,
    },
    {
      detail: "688 traffic, $665 value, the highest value page on this list",
      display: "-18.4%",
      label: "/collections/pipe-fittings-buttweld-fittings-stainless-steel",
      value: -18.4,
    },
  ],
  legend: "Percentage change in estimated traffic for the comparison window.",
  tone: "loss",
};

export const ahrefsPageWins: SuiteRankedBars = {
  ariaLabel:
    "Estimated traffic gains by page. Stainless flanges rose 148.8%, basket strainers 98.6%, aluminum fittings 96.5%, and camlock fittings are new.",
  items: [
    {
      detail: "102 traffic",
      display: "+148.8%",
      label: "/collections/flanges-150-flanges-stainless-steel",
      value: 148.8,
    },
    {
      detail: "147 traffic",
      display: "+98.6%",
      label: "/collections/strainers-basket-strainers",
      value: 98.6,
    },
    {
      detail: "226 traffic. Search Console agrees, up 60 clicks.",
      display: "+96.5%",
      label: "/collections/pipe-fittings-aluminum-fittings",
      value: 96.5,
    },
    {
      detail: "72.5% growth on the page we want as the hanger hub",
      display: "+72.5%",
      label: "/blogs/news/understanding-pipe-hangers-and-supports",
      value: 72.5,
    },
    {
      detail: "128 traffic. Competitors are gaining here too.",
      display: "+68.4%",
      label: "/collections/pipe-fittings-groove-fitting",
      value: 68.4,
    },
    {
      detail: "142 traffic",
      display: "+43.4%",
      label: "/collections/flanges-150-flanges-aluminum",
      value: 43.4,
    },
    {
      detail: "153 traffic",
      display: "+30.8%",
      label: "/collections/pipe-welded-pipe",
      value: 30.8,
    },
    {
      detail: "1,260 traffic, the highest traffic page on the site, ranks #1",
      display: "+20.6%",
      label: "/collections/pipe-fittings-copper-fittings",
      value: 20.6,
    },
  ],
  legend: "Percentage change in estimated traffic. Camlock fittings at 162 traffic is new and has no percentage.",
  tone: "gain",
};

export const ahrefsTopPageColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "url", label: "Page" },
  { key: "priority", label: "What we do" },
  { align: "right", key: "traffic", label: "Traffic" },
  { align: "right", key: "change", label: "Change" },
  { align: "right", key: "value", label: "Value" },
  { key: "topKeyword", label: "Main terms and position" },
  { key: "recommendation", label: "Recommended next step" },
];

export const ahrefsTopPageRows: SuiteTableRow[] = [
  {
    change: "+20.6%",
    priority: "Protect",
    recommendation:
      "Keep the template and content as they are. Add internal links from related fittings pages.",
    topKeyword: "copper pipe fittings, #1",
    traffic: "1,260",
    url: "/collections/pipe-fittings-copper-fittings",
    value: "$279",
  },
  {
    change: "-32.0%",
    priority: "Recover",
    recommendation:
      "Refresh the category copy, compare against the search results for intent, and link it from the hanger and support blog cluster.",
    topKeyword: "pipe hangers #3, pipe supports #2",
    traffic: "1,066",
    url: "/collections/pipe-hangers",
    value: "$397",
  },
  {
    change: "-78.0%",
    priority: "Recover",
    recommendation:
      "Highest priority. Check which pages actually rank, review title and H1, confirm product availability, and compare content depth against competitors.",
    topKeyword: "pro press fittings #4, propress fittings #1",
    traffic: "787",
    url: "/collections/pipe-fittings-press-propress",
    value: "$293",
  },
  {
    change: "-16.5%",
    priority: "Monitor",
    recommendation:
      "Improve the category structure and the links down into subcategories.",
    topKeyword: "pipe fittings, #7",
    traffic: "715",
    url: "/collections/pipe-fittings",
    value: "$458",
  },
  {
    change: "-18.4%",
    priority: "Monitor",
    recommendation:
      "Refresh the category intro and commercial wording, and link it from the stainless content.",
    topKeyword: "stainless steel pipe fittings, #3",
    traffic: "688",
    url: "/collections/pipe-fittings-buttweld-fittings-stainless-steel",
    value: "$665",
  },
  {
    change: "+6.0%",
    priority: "Protect",
    recommendation:
      "Maintain as is. Use this page as the model for how a category page should be built.",
    topKeyword: "stainless steel tube fittings, #1",
    traffic: "408",
    url: "/collections/tube-fittings-stainless-steel-tube-fittings",
    value: "$332",
  },
  {
    change: "-65.3%",
    priority: "Recover",
    recommendation:
      "Check the overlap with `/collections/pipe-hangers` and the individual pipe clamp product pages.",
    topKeyword: "pipe brackets #4, pipe clamps #5",
    traffic: "312",
    url: "/collections/pipe-hangers-pipe-clamp",
    value: "$125",
  },
  {
    change: "-61.7%",
    priority: "Recover",
    recommendation:
      "Refresh the content and product coverage, then confirm product availability and structured data.",
    topKeyword: "reduced pressure backflow preventer, #6",
    traffic: "295",
    url: "/collections/valves-backflow-rp",
    value: "$160",
  },
  {
    change: "-33.4%",
    priority: "Recover",
    recommendation:
      "Rankings are strong but traffic fell, so check for a demand shift or a change in the search results layout.",
    topKeyword: "pipe saddle support #1, adjustable pipe supports #2",
    traffic: "295",
    url: "/collections/pipe-hangers-adj-pipe-support-stanchions",
    value: "$219",
  },
  {
    change: "-29.7%",
    priority: "Recover",
    recommendation:
      "Investigate the branded traffic loss and review the homepage title and description after the migration.",
    topKeyword: "piping now #1, pipingnow #1",
    traffic: "291",
    url: "/ (homepage)",
    value: "$893",
  },
];

export const ahrefsCompetitorColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "domain", label: "Competitor" },
  { align: "right", key: "common", label: "Shared keywords" },
  { align: "right", key: "share", label: "Overlap" },
  { align: "right", key: "dr", label: "DR" },
  { align: "right", key: "traffic", label: "Traffic" },
  { align: "right", key: "change", label: "Change" },
  { key: "role", label: "How we use them" },
];

export const ahrefsCompetitorRows: SuiteTableRow[] = [
  {
    change: "+73",
    common: "418",
    domain: "buyfittingsonline.com",
    dr: "22",
    role: "The closest direct competitor. Use as the primary content benchmark.",
    share: "7.7%",
    traffic: "9.7K",
  },
  {
    change: "-2.0K",
    common: "200",
    domain: "asc-es.com",
    dr: "59",
    role: "A stronger authority benchmark. Matters for manufacturer and category terms.",
    share: "5.5%",
    traffic: "13.0K",
  },
  {
    change: "+116",
    common: "155",
    domain: "stainlessandalloy.com",
    dr: "29",
    role: "Benchmark for the stainless and alloy category work.",
    share: "5.1%",
    traffic: "5.1K",
  },
  {
    change: "+166",
    common: "129",
    domain: "empireindustries.com",
    dr: "28",
    role: "Growing, and close in size. Worth watching closely.",
    share: "4.9%",
    traffic: "2.1K",
  },
  {
    change: "-2.2K",
    common: "303",
    domain: "cooneybrothers.com",
    dr: "8",
    role: "High keyword overlap at the same Domain Rating. Direct comparison set.",
    share: "4.6%",
    traffic: "11.5K",
  },
  {
    change: "+4.0K",
    common: "152",
    domain: "proflow-dynamics.com",
    dr: "15",
    role: "Gaining fast. Include in the content gap work.",
    share: "4.3%",
    traffic: "8.8K",
  },
  {
    change: "-1.2K",
    common: "143",
    domain: "camlock-fittings.com",
    dr: "16",
    role: "Specialist competitor for the camlock category.",
    share: "3.9%",
    traffic: "5.2K",
  },
  {
    change: "-1.8K",
    common: "94",
    domain: "viega.us",
    dr: "59",
    role: "The manufacturer behind ProPress. Relevant to the press fittings recovery.",
    share: "3.6%",
    traffic: "13.7K",
  },
  {
    change: "+5.1K",
    common: "203",
    domain: "titanfittings.com",
    dr: "36",
    role: "The fastest growing competitor on this list. Study what they are publishing.",
    share: "3.4%",
    traffic: "22.3K",
  },
  {
    change: "-3.9K",
    common: "170",
    domain: "valveman.com",
    dr: "32",
    role: "Benchmark for the valve and backflow categories.",
    share: "3.3%",
    traffic: "15.5K",
  },
];

export const ahrefsCompetitorNote =
  "Large distributors like `ferguson.com`, `mcmaster.com`, `supplyhouse.com`, and `grainger.com` have far more traffic but much lower keyword overlap. Use them to understand what the search results look like, not as the model to copy.";

export const ahrefsContentGaps = [
  {
    detail:
      "The steepest losing collection, and `viega.us` is a direct competitor here. Rebuild depth around press fitting sizes, materials, tools, and application guidance.",
    title: "ProPress and press fittings",
  },
  {
    detail:
      "Three collections are down at once and the blog cluster already ranks for these terms. Connect the two so the guides feed the collections.",
    title: "Pipe hangers, clamps, supports, and stanchions",
  },
  {
    detail:
      "`stainlessandalloy.com` and `asc-es.com` both compete here, and the stainless buttweld collection carries the highest traffic value on the losing list at $665.",
    title: "Stainless and alloy fittings",
  },
  {
    detail:
      "Down 61.7% with only 29 keywords, so the coverage itself is thin. `valveman.com` is the benchmark to compare against.",
    title: "Backflow preventers and valve categories",
  },
  {
    detail:
      "Camlock is new at 162 traffic and grooved fittings are up 68.4%. Competitors are gaining here, so this is a growing category worth investing in early.",
    title: "Camlock and grooved fittings",
  },
];

export const ahrefsBacklinkStats: SuiteStat[] = [
  {
    context: "10,481 grouped link records in the backlinks report.",
    detail: "+9.3K",
    label: "Backlinks",
    sentiment: "negative",
    value: "9.9K",
  },
  {
    context: "2,287 domains in the referring domains report.",
    detail: "+2K",
    label: "Referring domains",
    sentiment: "negative",
    value: "2.1K",
  },
  {
    context: "1,683 of 2,132. 449 are not followed, or 21.1%.",
    detail: "78.9% of domains",
    label: "Followed referring domains",
    sentiment: "neutral",
    value: "1,683",
  },
  {
    context: "A fake SEOExpress testimonial, first seen April 20, 2026.",
    detail: "216 referring domains",
    label: "Top anchor by domains",
    sentiment: "negative",
    value: "Spam",
  },
];

export const ahrefsSpamPatterns = [
  "Many referring domains are marked SPAM by Ahrefs directly.",
  "Large clusters of `.shop`, `.top`, `.xyz`, and `.asia` domains, plus random subdomain pages, all linking with SEO and link buying language.",
  "Several backlinks target `/products/sjtg282pbe` and `srsltid` parameter variants of product URLs.",
  "Anchor text includes repeated black hat SEO strings and Telegram handles.",
  "The top anchor by referring domains is a fabricated testimonial style SEOExpress anchor across 216 domains and 217 pages, with 57 new links, first seen April 20, 2026.",
  "A second SEO service anchor reading `Boost pipingnow.com using guest posts` appears across 37 referring domains.",
];

export const ahrefsGoodLinks = [
  "`ssmalloys.com` linking to an older Piping Now pipe size PDF.",
  "`dauntlessmanufacturing.com` linking to `/pages/what-is-stainless-steel`.",
  "`steelandpipesupply.com` linking to `/collections/pipe-hangers`.",
  "`urbansplatter.com` linking to homepage content about welded pipes.",
  "`grokipedia.com` linking to pipe support content.",
  "`irishtitan.com` linking to the homepage and a client announcement.",
  "`plbg.com` and `terrylove.com` as relevant plumbing community domains.",
];

export const ahrefsRisks: Obstacle[] = [
  {
    eta: "Month 2, then ongoing monitoring",
    impact:
      "The Ahrefs trend line looks like authority growth when it is not. That can lead to the wrong reporting conclusion or an unnecessary disavow.",
    obstacle:
      "9.3K new backlinks arrived in a short window and most of them are spam.",
    remediation:
      "Export the newest referring domains and anchors, segment by the Ahrefs SPAM flag, zero traffic, obvious link sale anchors, and no topical relevance. Confirm whether any vendor, prior agency, marketplace, affiliate, or automation created them. Do not file a disavow unless there is a manual action, confirmed paid link activity, or a severe unnatural link risk.",
  },
  {
    eta: "Weeks 1 to 2",
    impact:
      "If those parameter URLs are indexable, spam links are pointing at addresses that should not exist as separate pages.",
    obstacle:
      "Spam backlinks target `srsltid` parameter variants and the product `sjtg282pbe`.",
    remediation:
      "Check whether `srsltid` URLs are indexable, canonicalized, and internally linked. Confirm product canonical tags point at the clean product URL, and inspect Search Console for indexed parameter versions. Start with `sjtg282pbe`.",
  },
  {
    eta: "Ongoing",
    impact:
      "Estimated traffic is not measured traffic. Reporting an Ahrefs number as fact creates a credibility risk.",
    obstacle:
      "Ahrefs and Search Console disagree on the copper fittings collection.",
    remediation:
      "Ahrefs shows copper fittings up 20.6% while Search Console shows it down 85 clicks. Trust Search Console for actual performance and use Ahrefs only for direction and competitor comparison.",
  },
];

export const ahrefsVerificationNeeded = [
  "Search Console clicks and impressions for the same losing URLs and query groups.",
  "Shopify product availability and product count changes on the losing collections.",
  "Canonical tags and indexability on the parameterized product URLs.",
  "Whether any manual action or link warning exists in Search Console.",
  "Whether the backlink spike lines up with any known vendor or historical campaign.",
];
