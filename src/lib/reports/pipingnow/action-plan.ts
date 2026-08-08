import type { PowerLine } from "@/lib/reports/types";

import type {
  SuiteActionRow,
  SuiteDecision,
  SuiteGate,
  SuiteMeta,
  SuiteRoadmapPhase,
  SuiteStat,
} from "./types";

export const actionPlanMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Every action from the seven audits, put in order, with the timing, the owner, and what counts as done.",
  date: "August 7, 2026",
  domain: "pipingnow.com",
  facts: [
    { label: "P0 actions", value: "5, in the first 7 days" },
    { label: "P1 actions", value: "4, across weeks 2 to 4" },
    { label: "P2 actions", value: "3, in month 2" },
    { label: "Approval gates", value: "5 checkpoints" },
  ],
  pageLabel: "Action Plan",
  reportType: "SEO Implementation Roadmap",
};

export const actionPlanSummary =
  "This is the working plan. It is ordered by what unblocks the most work, not by what is easiest. The first week is about making the numbers trustworthy and clearing the Merchant Center blockers, because every later decision depends on being able to read the data correctly. Weeks two to four go after the pages that lost real commercial traffic. Month two moves from defending to growing.";

export const actionPlanNextPriority =
  "Confirm who owns the measurement reconciliation and who has Merchant Center admin access. Those two answers decide whether the first week is productive or stalls.";

export const actionPlanCounts: SuiteStat[] = [
  {
    context: "Measurement, Merchant Center, and the start of URL cleanup.",
    detail: "First 7 days",
    label: "P0 actions",
    sentiment: "negative",
    value: "5",
  },
  {
    context: "Category recovery, chart pages, blog hubs, crawl review.",
    detail: "Weeks 2 to 4",
    label: "P1 actions",
    sentiment: "neutral",
    value: "4",
  },
  {
    context: "Competitor gaps, listing CTR, backlink monitoring.",
    detail: "Month 2",
    label: "P2 actions",
    sentiment: "neutral",
    value: "3",
  },
  {
    context: "Points where we need a decision or an access grant from you.",
    detail: "Kickoff to month 3",
    label: "Approval gates",
    sentiment: "neutral",
    value: "5",
  },
];

export const actionPlanPhases: SuiteRoadmapPhase[] = [
  {
    accent: "blue",
    businessOutcome:
      "Reporting stops being arguable, and Merchant Center stops showing a blocker that makes the catalog look hidden.",
    deliverable:
      "One reconciled measurement view, a cleared store warning, a reviewed 1.05K product list, the eligibility fixes started, and clean canonical product links going out.",
    objective:
      "Reconcile the numbers, clear the Merchant Center blockers, and begin cutting the crawl waste.",
    theme: "Stabilize",
    window: "P0 . First 7 days",
  },
  {
    accent: "gold",
    businessOutcome:
      "The pages that carry commercial traffic start recovering, and the blog stops splitting its own rankings.",
    deliverable:
      "Six recovered category pages, a repaired chart and conversion set, one hanger hub, one ball valve hub, and a reviewed crawl bucket list.",
    objective:
      "Win back the category pages and information pages that lost the most, and consolidate the overlapping blog clusters.",
    theme: "Recover",
    window: "P1 . Weeks 2 to 4",
  },
  {
    accent: "blue",
    businessOutcome:
      "The account moves from defending lost ground to taking new ground, with the spam link risk under watch.",
    deliverable:
      "A competitor gap content plan, a listing CTR improvement pass, and a segmented spam domain list with a monitoring routine.",
    objective:
      "Build out the competitor gaps, improve how listings look in search results, and monitor the backlink spam.",
    theme: "Grow",
    window: "P2 . Month 2",
  },
];

export const actionPlanOperatingPrinciple =
  "Nothing in weeks two to four should start before the measurement work in week one is finished. If the numbers are wrong, recovery work cannot be judged and the team will end up arguing about the report instead of the site.";

export const actionPlanRows: SuiteActionRow[] = [
  {
    action:
      "Reconcile clicks and revenue across Search Console, Merchant Center, GA4, Google Ads, and Shopify",
    detailSource: "GSC Performance and Merchant Center audits",
    owner: "All In Advertising analytics, with client Shopify access",
    priority: "P0",
    proof:
      "One shared view showing all five sources for the same window, plus a written note on where each definition differs.",
    window: "Days 1 to 5",
  },
  {
    action:
      "Resolve the Merchant Center critical local store warning",
    detailSource: "Merchant Center audit, P0 local store linkage",
    owner: "Client, with All In Advertising support",
    priority: "P0",
    proof:
      "The critical warning is gone from the Merchant Center overview, either because the Business Profile is linked or because the local surface is turned off on purpose.",
    window: "Days 1 to 3",
  },
  {
    action:
      "Export and review the 1.05K products Google found outside the feed",
    detailSource: "Merchant Center audit, P0 products found by Google",
    owner: "All In Advertising, with Simprosys and Shopify access",
    priority: "P0",
    proof:
      "A decision recorded for every product group: add to the feed, exclude, or fix the canonical and feed mapping.",
    window: "Days 2 to 7",
  },
  {
    action:
      "Fix the 164 products that are not showing on Google",
    detailSource: "Merchant Center audit, P1 products not showing",
    owner: "Client merchandising, with All In Advertising QA",
    priority: "P0",
    proof:
      "The 88 unavailable product pages resolve correctly, the 75 undersized images are replaced, and the 2 shipping weights are corrected.",
    window: "Days 3 to 7",
  },
  {
    action:
      "Start the technical URL cleanup on internal product links",
    detailSource: "Indexation audit and Ahrefs audit",
    owner: "Client development, with All In Advertising specification",
    priority: "P0",
    proof:
      "A fresh crawl shows internal links pointing at clean `/products/{handle}` URLs with no `pr_*`, `variant`, `currency`, or `country` parameters, and the `srsltid` canonical behavior is confirmed.",
    window: "Days 3 to 7",
  },
  {
    action:
      "Recover the six category pages that lost the most commercial traffic",
    detailSource: "GSC Performance and Ahrefs audits",
    owner: "All In Advertising SEO and content",
    priority: "P1",
    proof:
      "Each page has a reviewed title, H1, intro, product count, and internal links, checked against the closest competitors, with the before and after click numbers recorded.",
    window: "Weeks 2 to 4",
  },
  {
    action:
      "Repair the pipe chart and conversion utility pages",
    detailSource: "GSC Performance audit, three month losing queries",
    owner: "All In Advertising SEO and content",
    priority: "P1",
    proof:
      "The nominal pipe to metric conversion chart and the pipe dimensions page cover the losing queries again, and impressions stop falling week over week.",
    window: "Weeks 2 to 4",
  },
  {
    action:
      "Consolidate the blog into one hanger hub and one ball valve hub",
    detailSource: "Blog cannibalization and AI search audits",
    owner: "All In Advertising content, with client approval on removals",
    priority: "P1",
    proof:
      "Merged pages redirect to their hub, unique sections are preserved, and the hub holds or grows its AI impressions after the merge.",
    window: "Weeks 3 to 4",
  },
  {
    action:
      "Review the crawl and indexation buckets against the live site",
    detailSource: "Indexation audit",
    owner: "All In Advertising SEO, with client server or CDN log access",
    priority: "P1",
    proof:
      "Clean product URLs in Crawled, currently not indexed and clean collections in Discovered, currently not indexed are each inspected and given an outcome, and the 5xx examples are traced in the logs.",
    window: "Weeks 2 to 4",
  },
  {
    action:
      "Build out the competitor content gaps for the priority product families",
    detailSource: "Ahrefs audit, competitors and content gap",
    owner: "All In Advertising SEO and content",
    priority: "P2",
    proof:
      "A ranked backlog of pages to build for ProPress, hangers and supports, stainless and alloy, backflow, and camlock and groove, checked against the closest eight competitors.",
    window: "Month 2",
  },
  {
    action:
      "Improve product and category listing click rates",
    detailSource: "Merchant Center and GSC Performance audits",
    owner: "All In Advertising, with client merchandising",
    priority: "P2",
    proof:
      "Priority categories have improved titles and descriptions, image counts move toward three per offer, and click rate is measured against the current 1.0% baseline.",
    window: "Month 2",
  },
  {
    action:
      "Segment the spam backlinks and set up monitoring",
    detailSource: "Ahrefs audit, backlink risk assessment",
    owner: "All In Advertising SEO",
    priority: "P2",
    proof:
      "A segmented spam domain list, a confirmed answer on whether any vendor created the links, and a standing check on Search Console manual actions. No disavow file unless evidence supports one.",
    window: "Month 2 and ongoing",
  },
];

export const actionPlanGates: SuiteGate[] = [
  {
    detail:
      "Agree that measurement reconciliation and Merchant Center cleanup come before any content or category work.",
    label: "Decision",
    timing: "Kickoff",
    title: "Approve the order of work",
  },
  {
    detail:
      "We need Merchant Center admin, Simprosys feed access, Shopify admin, and server or CDN logs. Missing access is the most common reason week one slips.",
    label: "Access",
    timing: "Before day 1",
    title: "Confirm access and owners",
  },
  {
    detail:
      "Review the reconciled measurement view together and agree which source is the reference number for each metric going forward.",
    label: "Evidence",
    timing: "End of week 1",
    title: "Sign off on the reporting baseline",
  },
  {
    detail:
      "Confirm which of the 1.05K discovered products should be added to the feed and which should be excluded, before any bulk change is made.",
    label: "Decision",
    timing: "End of week 1",
    title: "Approve the product coverage decisions",
  },
  {
    detail:
      "Blog consolidation removes and redirects live URLs. We will not merge or delete anything until the list is approved.",
    label: "Decision",
    timing: "Week 3",
    title: "Approve the blog merge and delete list",
  },
];

export const actionPlanDecisions: SuiteDecision[] = [
  {
    detail:
      "Merchant Center admin, Simprosys feed access, Shopify admin, and server or CDN logs. Without these, the first week cannot finish.",
    label: "Grant the access we listed",
  },
  {
    detail:
      "Tell us whether local listings are part of the strategy. That single answer decides how we clear the critical Merchant Center warning.",
    label: "Answer the local store question",
  },
  {
    detail:
      "Name one person on your side who can approve product feed changes and one who can approve development releases.",
    label: "Name the two approvers",
  },
];

export const actionPlanHighlights: PowerLine[] = [
  {
    area: "Week one",
    statement:
      "Nothing here is a content task. Week one is entirely about making the data trustworthy and unblocking the feed.",
    status: "watch",
  },
  {
    area: "Biggest single win",
    statement:
      "The pipe chart page recovery is the largest available click gain from one piece of work.",
    status: "positive",
  },
  {
    area: "Biggest risk to the timeline",
    statement:
      "Missing access. Four of the five P0 actions need something only the client can grant.",
    status: "watch",
  },
  {
    area: "What we are not doing",
    statement:
      "No new content campaign, and no disavow file. Both would add risk without evidence to support them.",
    status: "positive",
  },
];
