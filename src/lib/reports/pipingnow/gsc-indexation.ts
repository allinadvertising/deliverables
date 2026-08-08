import type { PowerLine, TechnicalItem } from "@/lib/reports/types";

import type {
  SuiteMeta,
  SuitePriorityCard,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const indexationMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Why Google is crawling thousands of URLs that were never meant to rank, and which real product and category pages are being skipped because of it.",
  date: "August 7, 2026",
  domain: "sc-domain:pipingnow.com",
  facts: [
    { label: "Source", value: "Search Console page indexing report" },
    { label: "Buckets reviewed", value: "11" },
    { label: "Exports obtained", value: "2 of 11, downloads were blocked" },
    { label: "Root cause", value: "Crawl waste, not an indexing failure" },
  ],
  pageLabel: "Indexation",
  reportType: "Search Console Coverage Audit",
};

export const indexationSummary =
  "The indexing problem is not that Google refuses to index the catalog. It is that Shopify keeps handing Google copies of pages it already has. Recommendation parameters, variant parameters, collection scoped product paths, app sandbox URLs, and leftover addresses from the old site all get discovered and crawled, and then Google sets them aside. That noise buries the pages that matter. The fix is to stop creating discoverable duplicates, not to submit more sitemaps.";

export const indexationNextPriority =
  "Point every internal product link at the clean `/products/{handle}` address and stop the Shopify app sandbox URLs from appearing in rendered HTML. Those two changes remove the largest share of the noise.";

export const indexationHighlights: PowerLine[] = [
  {
    area: "The core pattern",
    statement:
      "Almost every non-indexed bucket traces back to one thing: Shopify producing more than one address for the same page.",
    status: "watch",
  },
  {
    area: "Sitemaps are fine",
    statement:
      "The sitemap index is healthy and covers products, collections, pages, and blogs. None of the problem URLs came from a sitemap.",
    status: "positive",
  },
  {
    area: "Where they come from instead",
    statement:
      "Internal links, old links, Shopify apps, and tracking surfaces. That is why blocking alone does not solve it.",
    status: "watch",
  },
  {
    area: "The bucket that matters most",
    statement:
      "Crawled, currently not indexed contains clean product URLs. Those are real pages Google looked at and passed on.",
    status: "watch",
  },
  {
    area: "A second real opportunity",
    statement:
      "Discovered, currently not indexed holds clean brand and product family collection pages Google has not even crawled yet.",
    status: "watch",
  },
  {
    area: "What we could not confirm",
    statement:
      "Live status checks were rate limited by the site, so redirect, 404, and 5xx outcomes need server or CDN logs to verify.",
    status: "unavailable",
  },
];

export const indexationStats: SuiteStat[] = [
  {
    context: "Recommendation and variant parameters on otherwise clean pages.",
    detail: "Duplicate control",
    label: "Alternate page with canonical",
    sentiment: "neutral",
    value: "Largest bucket",
  },
  {
    context: "Legacy www, uppercase /Product/, /Catalog/, /Resources/, /amp/.",
    detail: "Migration debt",
    label: "Page with redirect",
    sentiment: "negative",
    value: "2nd largest",
  },
  {
    context: "Ahrefs crawl of 135,364 pages found 35,541 redirect responses.",
    detail: "26% of crawled pages",
    label: "Redirects seen by crawlers",
    sentiment: "negative",
    value: "35,541",
  },
  {
    context: "Ahrefs also found 243 404s, 637 other 4XX, and 128 5XX.",
    detail: "Small but worth fixing",
    label: "Error responses",
    sentiment: "neutral",
    value: "1,008",
  },
];

export const indexationBucketColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "bucket", label: "Search Console bucket" },
  { key: "pattern", label: "What is actually in it" },
  { key: "verdict", label: "Is this a problem?" },
];

export const indexationBucketRows: SuiteTableRow[] = [
  {
    bucket: "Alternate page with proper canonical tag",
    pattern:
      "Clean product paths carrying Shopify recommendation parameters such as `pr_prod_strat`, `pr_rec_id`, `pr_rec_pid`, `pr_ref_pid`, and `pr_seq`, plus variant and market parameters. Also collection scoped product URLs like `/collections/.../products/...`.",
    verdict:
      "Working as intended, but wasteful. Google is handling the duplicates correctly. The real cost is crawl attention spent on pages that will never rank.",
  },
  {
    bucket: "Page with redirect",
    pattern:
      "Mostly legacy `www.pipingnow.com` URLs and uppercase `/Product/` paths, with smaller groups from `/Catalog/`, `/Resources/`, `/MyAccount`, `/collections/vendors`, and `/amp/`.",
    verdict:
      "Migration debt. Most of these were allowed by robots and none came from a sitemap, so something is still linking to the old addresses.",
  },
  {
    bucket: "Crawled, currently not indexed",
    pattern:
      "A mix. Clean `/products/...` pages sit next to collection pagination such as `/collections/...?...page=` and utility files like `/llms.txt`.",
    verdict:
      "The highest priority bucket. Some of these clean product URLs deserve to be indexed and need to be inspected one by one.",
  },
  {
    bucket: "Discovered, currently not indexed",
    pattern:
      "Clean collection URLs, including brand and product family collections.",
    verdict:
      "A real opportunity. Google knows these pages exist but has not crawled them, which usually points to weak internal linking.",
  },
  {
    bucket: "Excluded by noindex tag",
    pattern:
      "Dominated by Shopify `/web-pixels@.../sandbox/.../products/...` URLs generated by apps.",
    verdict:
      "The noindex is correct, but the URLs should not be discoverable in the first place.",
  },
  {
    bucket: "Blocked by robots.txt",
    pattern:
      "Account actions, `/collections/vendors`, `/api/`, and `/amp/` URLs.",
    verdict:
      "The blocking rules are doing useful work, but something is still surfacing these URLs for Google to find and then be turned away from.",
  },
  {
    bucket: "Not found (404)",
    pattern:
      "Heavily skewed toward Shopify web pixel sandbox paths, with at least one clean product URL mixed in.",
    verdict:
      "Mostly app noise, plus a smaller product lifecycle cleanup need. Could not be verified live because the site rate limited our checks.",
  },
  {
    bucket: "Server error (5xx)",
    pattern:
      "Small in volume. Product URLs, web pixel sandbox URLs, and one legacy category style URL.",
    verdict:
      "Small but operationally important. This one needs server or CDN logs before anyone assigns a cause.",
  },
  {
    bucket: "Duplicate, Google chose a different canonical",
    pattern: "Limited to legacy `www.pipingnow.com/Product/...` URLs.",
    verdict:
      "Consistent with the wider redirect and legacy host pattern. Fixing the legacy paths fixes this too.",
  },
  {
    bucket: "Duplicate without user-selected canonical",
    pattern:
      "Collection scoped product URLs, variant URLs, recommendation parameter URLs, and clean product duplicates.",
    verdict:
      "Validation has passed in Search Console, which is progress, but the URL variants are still being created.",
  },
];

export const indexationPriorities: SuitePriorityCard[] = [
  {
    action:
      "Update the theme, collection, recommendation, and merchandising links so they point at clean `/products/{handle}` addresses with no `pr_*`, `variant`, `country`, `currency`, `option`, or collection scoped path variants, unless a variant is genuinely needed for a shopper.",
    evidence:
      "The largest non-indexed bucket is made almost entirely of clean product paths carrying Shopify recommendation and variant parameters. Robots allows them, and none of them appeared in the sitemap set, so they are being discovered through links on the site itself.",
    facts: [
      { label: "Where it shows up", value: "Alternate page with canonical" },
      { label: "Discovery route", value: "Internal links, not sitemaps" },
    ],
    outcome:
      "Google spends its crawl on real product and category pages instead of copies, and the duplicate buckets shrink instead of growing every month.",
    priority: "P0",
    title: "Send every internal product link to one clean address",
    whyItMatters:
      "This is the single largest source of crawl waste on the site. Every extra parameter creates another copy of a page Google already has.",
  },
  {
    action:
      "Audit the Shopify apps and pixels that produce `/web-pixels@.../sandbox/...` product URLs, then stop those addresses from appearing in rendered HTML, app output, or tracking surfaces.",
    evidence:
      "Sandbox paths dominate the noindex bucket and also make up most of the 404 examples. The same pattern appeared in earlier audits, so it is recurring rather than a one off.",
    facts: [
      { label: "Where it shows up", value: "Noindex and 404 buckets" },
      { label: "Source", value: "Shopify apps and pixels" },
    ],
    outcome:
      "A whole class of crawl waste disappears at the source, and the 404 report becomes small enough to be useful again.",
    priority: "P0",
    title: "Stop the app sandbox URLs from being discoverable",
    whyItMatters:
      "These URLs are app machinery, not pages. They fill the noindex and 404 reports and make the real problems much harder to spot.",
  },
  {
    action:
      "Run URL Inspection on the clean product URLs sitting in Crawled, currently not indexed and the clean collection URLs sitting in Discovered, currently not indexed. Fix whatever it reports: a stray noindex, a wrong canonical, thin content, or missing internal links.",
    evidence:
      "Both buckets contain addresses that look like real, index worthy pages. Discovered, currently not indexed in particular holds brand and product family collections that Google has not even crawled.",
    facts: [
      { label: "Priority bucket", value: "Crawled, currently not indexed" },
      { label: "Second bucket", value: "Discovered, currently not indexed" },
    ],
    outcome:
      "Product and collection pages that should be earning traffic get indexed, which is the fastest available source of new visibility.",
    priority: "P0",
    title: "Inspect the clean pages Google skipped",
    whyItMatters:
      "These are real pages that should be earning traffic and are not. Getting them indexed is the fastest available source of new visibility.",
  },
  {
    action:
      "Use server logs, CDN logs, or URL Inspection live tests to confirm what the redirect, 404, and 5xx examples actually return.",
    evidence:
      "Automated status checks from the audit environment came back as rate limit or access blocking responses instead of real status codes, so none of those three buckets could be confirmed.",
    facts: [
      { label: "Blocked checks", value: "Redirect, 404, and 5xx buckets" },
      { label: "Needed", value: "Server or CDN log access" },
    ],
    outcome:
      "The error buckets get a real cause instead of a guess, and the 5xx examples either get fixed or get ruled out.",
    priority: "P0",
    title: "Verify the error buckets against real logs",
    whyItMatters:
      "Right now nobody can say what those URLs actually return. Acting on an unverified error bucket risks fixing something that was never broken.",
  },
  {
    action:
      "Enforce one canonical host and one migration path so `www.pipingnow.com`, uppercase `/Product/`, `/Catalog/`, `/Resources/`, `/MyAccount`, and the old flat product URLs all resolve cleanly to their final addresses in a single hop.",
    evidence:
      "The redirect bucket is dominated by these legacy patterns, and Ahrefs found 35,541 redirect responses across a crawl of 135,364 pages.",
    facts: [
      { label: "Redirect responses", value: "35,541 of 135,364 crawled" },
      { label: "Main patterns", value: "Legacy www and uppercase /Product/" },
    ],
    outcome:
      "Link value from the old site reaches the new pages in one hop, and the redirect bucket stops growing.",
    priority: "P1",
    title: "Clean up the legacy addresses from the old site",
    whyItMatters:
      "Link value earned by the old site is leaking through redirect chains instead of reaching the pages that replaced them.",
  },
  {
    action:
      "Review the robots.txt rules for `/collections/vendors`, `/api/`, `/amp/`, recommendation endpoints, account paths, and search paths, then pair every blocking rule with cleanup at the source so those URLs stop being discovered rather than only being blocked after discovery.",
    evidence:
      "Blocked by robots.txt contains a mix of intended containment and leaks. The rules match the patterns, which means the policy works, but internal or external links keep surfacing new URLs.",
    facts: [
      { label: "Pattern", value: "Blocking without source cleanup" },
      { label: "Result", value: "URLs found, then refused" },
    ],
    outcome:
      "Robots rules become a backstop instead of the only defense, and the blocked bucket stops filling up.",
    priority: "P1",
    title: "Pair the robots rules with cleanup at the source",
    whyItMatters:
      "Blocking a URL after Google finds it still costs a crawl. Stopping the link is cheaper than refusing the visit.",
  },
  {
    action:
      "Compare the full product and collection sitemap set against the Search Console index coverage to find clean addresses that are missing, crawled but not indexed, or discovered but not indexed.",
    evidence:
      "The sitemap index is healthy and covers products, collections, pages, blogs, and agentic discovery, so it is a reliable reference list to check the index against.",
    facts: [
      { label: "Sitemap health", value: "Healthy index, full coverage" },
      { label: "Use", value: "As the reference list for coverage gaps" },
    ],
    outcome:
      "A definitive list of pages that should be indexed and are not, which turns indexing from a guess into a checklist.",
    priority: "P2",
    title: "Reconcile the sitemap against what is actually indexed",
    whyItMatters:
      "It turns indexing from a guess into a checklist, with a definitive list of pages that should be indexed and are not.",
  },
  {
    action:
      "Reduce collection pagination crawl waste by strengthening the internal links to the priority collection hubs and avoiding crawlable deep pagination links where those pages offer nothing distinct to a searcher.",
    evidence:
      "Collection pagination such as `/collections/...?...page=` shows up inside Crawled, currently not indexed, sitting alongside the clean product URLs that matter.",
    facts: [
      { label: "Where it shows up", value: "Crawled, currently not indexed" },
      { label: "Fix", value: "Stronger hub links, fewer deep page links" },
    ],
    outcome:
      "Crawl attention concentrates on the collection hubs that can actually rank, instead of page 7 of a filtered list.",
    priority: "P2",
    title: "Cut the collection pagination waste",
    whyItMatters:
      "Crawl attention should go to the collection hubs that can actually rank, not to page seven of a filtered list.",
  },
];

export const indexationTechnicalItems: TechnicalItem[] = [
  {
    developerNote:
      "Check the Stencil or Liquid templates behind product cards, recommendation blocks, and collection grids. The parameters are usually appended by the recommendation widget rather than hard coded.",
    fix: "Rewrite internal product links to `/products/{handle}` with no appended parameters.",
    issue:
      "Product links carry `pr_prod_strat`, `pr_rec_id`, `pr_rec_pid`, `pr_ref_pid`, and `pr_seq` parameters.",
    why: "Each parameter combination is a new address for a page Google already has, so crawl budget goes to copies instead of new products.",
  },
  {
    developerNote:
      "These are generated by Shopify web pixel apps. Review the installed app list and check whether the sandbox iframe output is present in the server rendered HTML.",
    fix: "Prevent the sandbox paths from appearing in rendered HTML or app output.",
    issue:
      "Shopify `/web-pixels@.../sandbox/.../products/...` URLs are being discovered and crawled.",
    why: "They are app machinery, not pages. They fill the noindex and 404 reports and make real problems harder to spot.",
  },
  {
    developerNote:
      "Confirm whether Shopify strips `srsltid` at the canonical level or whether the parameter version renders its own self referencing canonical.",
    fix: "Confirm that product canonical tags point at the clean product URL, and check Search Console for indexed `srsltid` variants.",
    issue:
      "`srsltid` tracking parameter URLs are being targeted by spam backlinks.",
    why: "If those parameter URLs are indexable, spam links are pointing at addresses that should not exist as separate pages.",
  },
  {
    developerNote:
      "A single redirect map handling host, case, and path pattern in one rule set is more reliable than a chain of individual redirects.",
    fix: "Resolve every legacy pattern to its final address in one hop.",
    issue:
      "Legacy `www.pipingnow.com`, uppercase `/Product/`, `/Catalog/`, `/Resources/`, and `/MyAccount` addresses are still being crawled.",
    why: "Redirect chains lose value and slow crawling. Ahrefs saw 35,541 redirect responses in a single crawl.",
  },
  {
    developerNote:
      "Prioritize by whether the product handle still exists in Shopify. Handles that no longer exist need a redirect decision, not a resurrection.",
    fix: "Build redirect rules for the confirmed valuable 404 product handles and legacy category paths.",
    issue: "The 404 bucket mixes app noise with at least one real product URL.",
    why: "Real product 404s lose both customers and accumulated link value. App noise 404s are harmless once discovery stops.",
  },
  {
    developerNote:
      "Search Console cannot tell you the cause. This needs the origin logs, and if a CDN sits in front, its logs too.",
    fix: "Pull the server and CDN logs for the 5xx example URLs and trace the responses.",
    issue: "A small 5xx bucket includes product URLs and one legacy category URL.",
    why: "Server errors during a crawl can cost indexing for pages that are otherwise perfectly fine.",
  },
];

export const indexationTechnicalLabels = {
  fix: "What we do about it",
  issue: "What we found",
  why: "Why it matters",
};

export const indexationDataNotes = [
  "Chrome download permissions allowed exports for `Alternate page with proper canonical tag` and `Page with redirect`, then blocked further CSV downloads. The remaining buckets were audited from the visible Search Console examples plus live pre-flight checks.",
  "Automated status verification was limited. Live HTTP checks from the audit environment returned rate limit or access blocking responses instead of confirming the Search Console outcomes.",
  "The live robots.txt is available, declares the Shopify sitemap index, and includes targeted rules for account, cart, search, vendor collection, API, AMP, recommendation, and parameter URL patterns.",
  "Sitemap discovery returned a healthy sitemap index with product, collection, page, blog, and agentic discovery children. The exported issue samples were not present in the discovered sitemap URL set.",
  "Treat redirect, 404, and 5xx status validation as an implementation follow up using server logs, CDN logs, or URL Inspection rather than as a settled finding.",
];
