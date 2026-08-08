import type { SuiteFileGroup } from "@/components/reports/suite/SuiteFileList";

import { suiteBasePath } from "./nav";
import type {
  SuiteMeta,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const appendixMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Every export behind this analysis, listed by source, so any number in any of these pages can be traced back to the file it came from.",
  date: "August 7, 2026",
  domain: "pipingnow.com",
  facts: [
    { label: "Source audits", value: "6" },
    { label: "Workbooks", value: "3 XLSX" },
    { label: "Data windows", value: "28 days and 3 months" },
    { label: "Collected", value: "August 2026" },
  ],
  pageLabel: "Data Appendix",
  reportType: "Source Files and Evidence Index",
};

export const appendixSummary =
  "Nothing in this analysis is an opinion without a file behind it. This page lists the exports each finding came from, grouped by source audit. If a number in any of these pages needs to be checked or rebuilt, this is where to start.";

export const appendixNote =
  "Two exports could not be completed. Chrome download permissions allowed the coverage exports for `Alternate page with proper canonical tag` and `Page with redirect`, then blocked further CSV downloads. Those remaining coverage buckets were audited from the visible Search Console examples instead, so they are described qualitatively rather than counted.";

export const appendixStats: SuiteStat[] = [
  {
    context: "Performance, coverage, blog overlap, AI, Merchant Center, Ahrefs.",
    detail: "All cross referenced",
    label: "Source audits",
    sentiment: "positive",
    value: "6",
  },
  {
    context: "Performance winners and losers, blog opportunities, AI blog.",
    detail: "Full row level detail",
    label: "Workbooks",
    sentiment: "positive",
    value: "3",
  },
  {
    context: "Two coverage buckets could not be exported.",
    detail: "Downloads were blocked",
    label: "Incomplete exports",
    sentiment: "negative",
    value: "9 of 11",
  },
  {
    context: "Product, collection, page, blog, and agentic discovery children.",
    detail: "Healthy index",
    label: "Sitemap files captured",
    sentiment: "positive",
    value: "24",
  },
];

export const appendixGroups: SuiteFileGroup[] = [
  {
    files: [
      {
        contains:
          "The written audit with the executive readout, winners and losers by query, landing page, and device, for both comparison windows.",
        name: "pipingnow_gsc_performance_audit.md",
        type: "Markdown",
      },
      {
        contains:
          "The full workbook. Every comparison sheet in one file, including the split winner and loser tabs.",
        name: "pipingnow_gsc_performance_winners_losers.xlsx",
        type: "XLSX",
      },
      {
        contains:
          "Totals per window and per dimension, including winner and loser counts.",
        name: "performance_audit_summary.csv",
        type: "CSV",
      },
      {
        contains:
          "Last 28 days against the previous 28 days, split by query, landing page, and device, with current, previous, full comparison, winner, and loser files for each.",
        name: "28d_*.csv (15 files)",
        type: "CSV",
      },
      {
        contains:
          "Last 3 months against the previous 3 months, split the same way across query, landing page, and device.",
        name: "3mo_*.csv (15 files)",
        type: "CSV",
      },
    ],
    source: "Google Search Console, sc-domain:pipingnow.com. Windows: July 8 to August 4 against June 10 to July 7, and May 1 to July 31 against February 1 to April 30.",
    title: "GSC Performance audit",
  },
  {
    files: [
      {
        contains:
          "The written coverage audit, with the pattern behind each indexing bucket and the proposed fixes by timeframe.",
        name: "pipingnow_gsc_coverage_audit.md",
        type: "Markdown",
      },
      {
        contains:
          "The exported URL set for the largest duplicate bucket, dominated by Shopify recommendation and variant parameters.",
        name: "Alternate page with proper canonical tag.csv",
        type: "CSV",
      },
      {
        contains:
          "The exported redirect URL set, dominated by legacy www and uppercase /Product/ paths.",
        name: "Page with redirect.zip",
        type: "ZIP",
      },
      {
        contains:
          "The live robots.txt at the time of the audit, including the sitemap declaration and the parameter blocking rules.",
        name: "robots.txt",
        type: "Text",
      },
      {
        contains:
          "The complete discovered sitemap URL set, used to confirm that the problem URLs were not sitemap driven.",
        name: "sitemap_urls.txt",
        type: "Text",
      },
      {
        contains:
          "The full sitemap index and its children: 19 product sitemaps, plus collections, pages, blogs, and agentic discovery.",
        name: "sitemaps/ (24 XML files)",
        type: "XML",
      },
      {
        contains:
          "The pre-flight robots check for the exported issue URLs, showing which were allowed and which were blocked.",
        name: "issue_robots_summary.csv and issue_robots_detail.csv",
        type: "CSV",
      },
    ],
    source: "Google Search Console page indexing report, plus live robots.txt and sitemap discovery.",
    title: "GSC Indexation audit",
  },
  {
    files: [
      {
        contains:
          "The written audit with the account health snapshot, the priority action items, and the recommended next 7 days.",
        name: "pipingnow_merchant_center_action_items.md",
        type: "Markdown",
      },
      {
        contains:
          "The action items in tracker form, ready to be assigned owners and dates.",
        name: "pipingnow_merchant_center_action_items.csv",
        type: "CSV",
      },
    ],
    source: "Merchant Center account 118194292, PipingNow.com. Captured August 7, 2026.",
    title: "Merchant Center audit",
  },
  {
    files: [
      {
        contains:
          "The written audit with the domain snapshot, top pages, competitors, backlink profile, and risk assessment.",
        name: "pipingnow_ahrefs_audit.md",
        type: "Markdown",
      },
      {
        contains:
          "The action items in tracker form, covering the backlink spam investigation, the srsltid cleanup, and the category recovery list.",
        name: "pipingnow_ahrefs_action_items.csv",
        type: "CSV",
      },
    ],
    source: "Ahrefs Site Explorer for pipingnow.com, http plus https, including subdomains. Captured August 7, 2026.",
    title: "Ahrefs audit",
  },
  {
    files: [
      {
        contains:
          "The written audit with the topic clusters, merge opportunities, delete list, refresh list, and query overlap signals.",
        name: "pipingnow_blog_cannibalization_audit.md",
        type: "Markdown",
      },
      {
        contains:
          "The workbook holding the recommendations, clusters, query overlap, raw query and page pairs, and the page and date metrics.",
        name: "pipingnow_blog_cannibalization_opportunities.xlsx",
        type: "XLSX",
      },
      {
        contains:
          "Page level merge, delete, and refresh recommendations with the supporting numbers.",
        name: "blog_url_action_recommendations.csv",
        type: "CSV",
      },
      {
        contains:
          "The 48 searches where two or more blog URLs compete, with impression share per page.",
        name: "blog_query_cannibalization_candidates.csv",
        type: "CSV",
      },
      {
        contains:
          "The raw Search Console query and page pair export, 2,327 rows across 25 blog URLs.",
        name: "blogs_query_page_last3mo.csv",
        type: "CSV",
      },
      {
        contains:
          "Publish and modified dates pulled from the article structured data, used to identify migrated legacy content.",
        name: "blog_publish_dates.csv",
        type: "CSV",
      },
      {
        contains:
          "Screaming Frog crawl metadata for the 25 blog URLs found in Search Console.",
        name: "sf/ (crawl exports)",
        type: "CSV",
      },
    ],
    source: "Google Search Console web search performance for URLs containing /blogs/, May 1 to July 31, 2026, plus a Screaming Frog crawl.",
    title: "Blog cannibalization audit",
  },
  {
    files: [
      {
        contains:
          "The written audit with the top AI visible pages, device and country splits, trend, and refresh recommendations.",
        name: "pipingnow_gsc_ai_blog_performance_audit.md",
        type: "Markdown",
      },
      {
        contains:
          "Page level AI impressions with share, prior recommended action, publish date, and standard search impressions.",
        name: "ai_blog_pages.csv",
        type: "CSV",
      },
      {
        contains: "AI impressions split by device.",
        name: "ai_blog_devices.csv",
        type: "CSV",
      },
      {
        contains: "AI impressions by country, top markets.",
        name: "ai_blog_countries_top.csv",
        type: "CSV",
      },
      {
        contains:
          "The daily and weekly AI impression series used for the trend read.",
        name: "ai_blog_days.csv and ai_blog_weekly.csv",
        type: "CSV",
      },
    ],
    source: "Google Search Console Generative AI features report with a page filter for blog, May 18 to August 5, 2026. Impressions only, no click metric is available in this report.",
    title: "AI search visibility audit",
  },
];

export const appendixMapColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "area", label: "If you need detail on" },
  { key: "audit", label: "Read this page" },
  { key: "files", label: "Source files" },
];

export const appendixMapRows: SuiteTableRow[] = [
  {
    area: "Measurement reconciliation",
    audit: "GSC Performance and Merchant Center",
    files:
      "pipingnow_gsc_performance_audit.md and pipingnow_merchant_center_action_items.md",
  },
  {
    area: "Merchant Center local store warning",
    audit: "Merchant Center",
    files: "pipingnow_merchant_center_action_items.csv",
  },
  {
    area: "Missing products and feed coverage",
    audit: "Merchant Center",
    files:
      "Merchant Center data sources evidence. A follow up export is still needed for the 1.05K products.",
  },
  {
    area: "Product disapprovals and eligibility",
    audit: "Merchant Center",
    files: "pipingnow_merchant_center_action_items.csv",
  },
  {
    area: "Shopify duplicate URL cleanup",
    audit: "Indexation",
    files:
      "Coverage exports for the alternate canonical and redirect buckets",
  },
  {
    area: "srsltid and spam linked product URLs",
    audit: "Ahrefs",
    files: "Ahrefs backlinks and anchors reports",
  },
  {
    area: "Category recovery",
    audit: "GSC Performance and Ahrefs",
    files: "GSC landing and query CSVs, plus Ahrefs top pages evidence",
  },
  {
    area: "Pipe chart and conversion page recovery",
    audit: "GSC Performance",
    files: "3mo_landing_losers.csv and 3mo_query_losers.csv",
  },
  {
    area: "Blog cannibalization",
    audit: "Blog Cannibalization",
    files:
      "blog_url_action_recommendations.csv, blog_query_cannibalization_candidates.csv, and the workbook",
  },
  {
    area: "AI visible blog refresh",
    audit: "AI Search Visibility",
    files: "ai_blog_pages.csv, plus the country, device, and day exports",
  },
  {
    area: "Competitor gap work",
    audit: "Ahrefs",
    files: "Ahrefs organic competitors and top pages sections",
  },
  {
    area: "Backlink spam monitoring",
    audit: "Ahrefs",
    files: "Ahrefs referring domains, backlinks, and anchors reports",
  },
];

export const appendixFollowUps = [
  {
    detail:
      "Merchant Center reports the count but the audit could not export the list. This is the single most useful missing file, because it is the strongest lead on the missing product question.",
    title: "Export the 1.05K products found by Google",
  },
  {
    detail:
      "Chrome blocked the remaining CSV downloads after the first two buckets. Getting the rest would turn qualitative bucket descriptions into countable lists.",
    title: "Re-export the remaining nine coverage buckets",
  },
  {
    detail:
      "Live HTTP checks were rate limited, so the redirect, 404, and 5xx buckets could not be verified from outside. Server or CDN logs would settle all three.",
    title: "Pull server and CDN logs for the error buckets",
  },
  {
    detail:
      "Nothing in this analysis confirms whether a manual action or link warning exists. That check takes a minute and changes how seriously the spam backlink wave should be treated.",
    title: "Check Search Console for manual actions",
  },
];

export const appendixHubHref = suiteBasePath;
