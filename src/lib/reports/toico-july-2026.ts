import type {
  JourneyWorkstream,
  KpiRow,
  Obstacle,
  PowerLine,
  SeoStoryReportData,
  TechnicalItem,
  VisualDirection,
} from "@/lib/reports/types";

export const reportMeta = {
  action:
    "Rewrite the Aluminum Slide-In Vacuum Tank search listing so its rapidly growing first-page visibility produces qualified visits.",
  client: "TOICO",
  coverHeadline: "Rankings advanced. Click capture is the next move.",
  currentPeriod: "July 20-26, 2026",
  previousPeriod: "July 13-19, 2026",
  property: "https://toico.com/",
  reportType: "Organic Search Performance Report",
  source: "Google Search Console",
};

export const executiveSummary =
  "Search visibility improved week over week, but organic clicks slipped 4.4% because the homepage lost 41 clicks as demand for TOICO-branded searches fell. Average ranking improved from 15.6 to 14.4, and visible non-brand clicks grew 20.8%, showing that product discovery is moving in the right direction. The immediate priority is to improve the Aluminum Slide-In Vacuum Tank search result message: impressions grew 173% and ranking improved by four positions, but clicks fell from 22 to 12.";

export const powerLines: PowerLine[] = [
  {
    area: "Traffic",
    statement:
      "Organic clicks declined 4.4%, with the 41-click homepage loss outweighing targeted gains across replacement parts, hitch haulers, and SanMan.",
    status: "watch",
  },
  {
    area: "Conversions",
    statement: "Insufficient data for this reporting period.",
    status: "unavailable",
  },
  {
    area: "Rankings",
    statement:
      "Average ranking improved by 1.1 positions to 14.4, while visible non-brand search clicks grew 20.8%.",
    status: "positive",
  },
  {
    area: "Technical health",
    statement:
      "Mobile ranking improved by 1.2 positions, but mobile click rate fell from 1.69% to 1.48%, reinforcing the planned mobile and template fixes.",
    status: "watch",
  },
];

export const journeyWorkstreams: JourneyWorkstream[] = [
  {
    name: "Performance baseline",
    started:
      "The previous week produced 339 clicks from 24,945 search appearances at an average ranking of 15.6.",
    work:
      "We separated brand demand from product discovery and reviewed page-level gains and losses.",
    result:
      "Clicks fell 4.4%, but ranking improved by 1.1 positions; the homepage alone accounted for a 41-click decline.",
    next:
      "Review branded homepage visibility while protecting the broader ranking gains.",
  },
  {
    name: "Product discovery",
    started:
      "Visible non-brand searches generated 24 clicks at an average ranking of 22.4.",
    work:
      "We isolated the product and category pages gaining qualified visibility outside branded searches.",
    result:
      "Visible non-brand clicks rose 20.8%, with Replacement Parts up 87.5% and Hitch Hauler up 55.6%.",
    next:
      "Strengthen internal links to the winning pages and improve the high-impression tank listing.",
  },
  {
    name: "Technical foundation",
    started:
      "The July audit found shared heading defects, malformed product links, sitemap gaps, and priority orphan pages.",
    work:
      "The roadmap groups the highest-leverage corrections into the first technical release.",
    result:
      "Insufficient post-deployment data for this reporting period.",
    next:
      "Deploy the approved fixes, recrawl representative templates, and compare against the July baseline.",
  },
];

export const kpiRows: KpiRow[] = [
  {
    metric: "Organic clicks",
    previous: "339",
    current: "324",
    change: "-4.4%",
    businessMeaning:
      "Fewer search visits overall, with the decline concentrated on the homepage.",
    status: "watch",
  },
  {
    metric: "Search appearances",
    previous: "24,945",
    current: "24,493",
    change: "-1.8%",
    businessMeaning:
      "Overall visibility stayed broadly stable despite weaker branded demand.",
    status: "neutral",
  },
  {
    metric: "Average ranking",
    previous: "15.6",
    current: "14.4",
    change: "+1.1 positions",
    businessMeaning:
      "Pages moved closer to the first page of search results.",
    status: "positive",
  },
  {
    metric: "Click rate",
    previous: "1.36%",
    current: "1.32%",
    change: "-0.04 points",
    businessMeaning:
      "A slightly smaller share of search appearances became site visits.",
    status: "watch",
  },
  {
    metric: "Visible non-brand clicks",
    previous: "24",
    current: "29",
    change: "+20.8%",
    businessMeaning:
      "More visitors found TOICO through product needs rather than its name.",
    status: "positive",
  },
  {
    metric: "Mobile clicks",
    previous: "192",
    current: "167",
    change: "-13.0%",
    businessMeaning:
      "Mobile search was the largest device-level traffic drag.",
    status: "watch",
  },
];

export const visualDirections: VisualDirection[] = [
  {
    title: "Traffic and visibility",
    chart:
      "Clustered bars comparing clicks and search appearances for July 13-19 and July 20-26, with a note that property history begins July 4.",
    insight:
      "Show that visibility was nearly stable while clicks softened, avoiding the impression of a broad search collapse.",
  },
  {
    title: "Ranking and click capture",
    chart:
      "Two-line daily trend from July 4-26: average ranking on the left scale and click rate on the right, with lower ranking values shown as improvement.",
    insight:
      "Make the gap between stronger rankings and weaker click capture immediately visible.",
  },
  {
    title: "Landing-page opportunity",
    chart:
      "Scatter plot of current search appearances against click rate for leading pages; highlight the homepage, Replacement Parts, Hitch Hauler, and Aluminum Slide-In Vacuum Tank.",
    insight:
      "Position the tank page as the clearest high-visibility opportunity and the homepage as the main traffic risk.",
  },
  {
    title: "Device performance",
    chart:
      "Grouped bars for desktop, mobile, and tablet clicks by week, with small labels showing each device's click-rate change.",
    insight:
      "Show that mobile lost 25 clicks while desktop gained five.",
  },
];

export const obstacles: Obstacle[] = [
  {
    obstacle:
      "Branded search demand weakened. Visible TOICO-branded clicks fell from 83 to 41, while branded search appearances fell 54.3%.",
    impact:
      "The homepage lost 41 clicks and turned otherwise positive ranking movement into an overall traffic decline.",
    remediation:
      "Review the homepage search listing, confirm the planned descriptive main heading, and check branded search-result competition.",
    eta:
      "Reassess after two full weeks of data following the homepage release.",
  },
  {
    obstacle:
      "The Aluminum Slide-In Vacuum Tank page is earning visibility without clicks. Search appearances rose from 767 to 2,093 and ranking improved from 11.1 to 7.1, but click rate fell to 0.57%.",
    impact:
      "The page gained 1,326 search appearances but delivered 10 fewer visits.",
    remediation:
      "Rewrite the page title and description around the dominant search need, then review price, availability, and rich-result eligibility.",
    eta:
      "Measure for two full weeks after the search listing update.",
  },
  {
    obstacle:
      "Mobile click capture declined. Mobile clicks fell 13.0% and click rate dropped from 1.69% to 1.48% despite stronger ranking.",
    impact:
      "TOICO lost 25 mobile visits in a channel that still supplies more clicks than desktop.",
    remediation:
      "Pair the planned mobile performance work with a review of mobile search listings for the highest-impression pages.",
    eta:
      "Reassess two weeks after the mobile and template release.",
  },
  {
    obstacle:
      "Historical property data is incomplete. Daily rows begin July 4, so a clean 28-day comparison is not yet available.",
    impact:
      "This report can establish a weekly direction but cannot support a monthly trend claim.",
    remediation:
      "Maintain the weekly baseline until two complete 28-day windows are available.",
    eta:
      "A clean 28-day comparison should be available in late August 2026.",
  },
];

export const technicalItems: TechnicalItem[] = [
  {
    issue:
      "Shared heading templates affect thousands of pages: the newsletter label appears as the main heading on 2,308 URLs and Footer Start appears as a section heading on 2,256 URLs.",
    why:
      "Search engines receive a weaker description of each page's real subject.",
    fix:
      "Change shared labels to appropriate non-heading elements, add a descriptive homepage heading, and validate the main templates with a new crawl.",
  },
  {
    issue:
      "The crawl found 430 malformed product-option URLs representing 310 base products.",
    why:
      "Duplicate URL versions create noisy discovery signals and reporting clutter.",
    fix:
      "Correct the theme URL builder, remove exposed tracking variants, and keep clean product URLs as the preferred versions.",
  },
  {
    issue:
      "The active sitemap is not declared in robots.txt, the file that guides search-engine discovery.",
    why:
      "Google has a less direct route to TOICO's preferred page inventory.",
    fix:
      "Declare the live sitemap, align Search Console submissions, and keep redirecting or malformed URLs out.",
  },
  {
    issue:
      "The strongest internal-link queue contains 473 clean, indexable URLs found in both Search Console and sitemap orphan reports.",
    why:
      "Important products and categories can exist without receiving enough internal visibility.",
    fix:
      "Rank the queue by demand, revenue potential, and inventory, then add relevant category and contextual links.",
  },
  {
    issue:
      "No post-release crawl or completed-task record was supplied for this reporting period.",
    why:
      "The report cannot claim that planned technical work has improved site health yet.",
    fix:
      "Record deployment dates and rerun the same crawl checks so future reports can connect completed work to outcomes.",
  },
];

export const dataNotes = [
  "Performance source: Google Search Console property https://toico.com/.",
  "Current period: July 20-26, 2026. Previous period: July 13-19, 2026.",
  "Search Console began returning daily rows for this property on July 4, 2026; earlier comparison data was unavailable.",
  "Query-level brand and non-brand metrics include only visible queries because Google withholds some search terms for privacy.",
  "No conversion, revenue, completed-task, or post-deployment crawl data was supplied.",
];

export const toicoJuly2026Report: SeoStoryReportData = {
  dataNotes,
  executiveSummary,
  journeyWorkstreams,
  kpiDisclosure:
    "Visible non-brand clicks use query-level data only. Google withholds some search terms for privacy, so this row shows direction rather than the site's full non-brand total.",
  kpiRows,
  meta: reportMeta,
  obstacles,
  powerLines,
  technicalItems,
  visualDirections,
};
