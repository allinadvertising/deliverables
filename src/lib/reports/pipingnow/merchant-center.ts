import type { KpiRow, Obstacle, PowerLine } from "@/lib/reports/types";

import type {
  SuiteMeta,
  SuitePriorityCard,
  SuiteStat,
  SuiteTableColumn,
  SuiteTableRow,
} from "./types";

export const merchantMeta: SuiteMeta = {
  client: "Piping Now",
  coverHeadline:
    "Merchant Center is not broken, but it is leaking. Here is where products are falling out of the feed and what it takes to close each gap.",
  date: "August 7, 2026",
  domain: "Merchant Center 118194292",
  facts: [
    { label: "Total products", value: "14,778" },
    { label: "Ready in the US", value: "14,614, or 98.9%" },
    { label: "Feed source", value: "Simprosys Feed via Merchant API" },
    { label: "Critical warnings", value: "1, local store linkage" },
  ],
  pageLabel: "Merchant Center",
  reportType: "Merchant Center Action Item Audit",
};

export const merchantSummary =
  "Merchant Center works for the online store. 14,614 of 14,778 products are ready in the United States, the store quality score is exceptional, and organic purchases are up 33%. But there are three leaks. One critical warning says no physical stores were found, which makes the account look blocked when it is not. Google found another 1.05K products on the site that the feed does not control. And 164 products are not showing, mostly because their product pages will not load or their images are too small.";

export const merchantNextPriority =
  "Answer one question: does Piping Now want local listings? If yes, link the Metairie Google Business Profile. If no, turn the local store surface off. Either answer clears the only critical warning on the account.";

export const merchantHighlights: PowerLine[] = [
  {
    area: "The good news",
    statement:
      "98.9% of the catalog is ready to show in the United States, and the store quality score is Exceptional.",
    status: "positive",
  },
  {
    area: "The misleading warning",
    statement:
      "The critical alert says products are prevented from showing. It is about local stores, not the online feed, but it reads like a catastrophe.",
    status: "watch",
  },
  {
    area: "The missing products lead",
    statement:
      "Google found 1.05K products on the site that the feed does not include. This is the strongest current evidence of a coverage gap.",
    status: "watch",
  },
  {
    area: "Scale check",
    statement:
      "The earlier concern was a gap of roughly 12,000 products. The real number looks closer to 1.05K, which is a very different problem.",
    status: "positive",
  },
  {
    area: "The split signal",
    statement:
      "Organic clicks are up 5.0% and organic purchases are up 33.0%, while ad driven clicks are down 7.0%. Report those separately.",
    status: "positive",
  },
  {
    area: "Click rate pressure",
    statement:
      "Impressions are up 9.6% but click rate is down 13.0%. More people see the listings and fewer choose them.",
    status: "watch",
  },
];

export const merchantStats: SuiteStat[] = [
  {
    context: "14.6K approved, 2 limited, 163 not approved, 1 under review.",
    detail: "98.9% ready in the US",
    label: "Products in the feed",
    sentiment: "positive",
    value: "14,778",
  },
  {
    context: "88 unavailable pages, 75 small images, 2 weight errors.",
    detail: "Fixable eligibility blocks",
    label: "Products not showing",
    sentiment: "negative",
    value: "164",
  },
  {
    context: "Found on the site but not in the Simprosys feed.",
    detail: "Needs an export and review",
    label: "Products Google found",
    sentiment: "negative",
    value: "1.05K",
  },
  {
    context: "Up 33.0%, at a 1.4% purchase rate.",
    detail: "+33.0%",
    label: "Organic purchases",
    sentiment: "positive",
    value: "55",
  },
];

export const merchantKpiRows: KpiRow[] = [
  {
    businessMeaning:
      "Total product clicks across ads and organic are slightly down. Most of that comes from the ad side.",
    change: "-4.6%",
    current: "9.51K",
    metric: "Ads and organic product clicks",
    previous: "About 9.97K",
    status: "watch",
  },
  {
    businessMeaning:
      "More people are seeing the products in Google than before, so visibility itself is not the problem.",
    change: "+9.6%",
    current: "972.43K",
    metric: "Product impressions",
    previous: "About 887K",
    status: "positive",
  },
  {
    businessMeaning:
      "More views but fewer clicks means the listings are losing the comparison against competitors.",
    change: "-13.0%",
    current: "1.0%",
    metric: "Click rate",
    previous: "About 1.15%",
    status: "watch",
  },
  {
    businessMeaning:
      "Free listing traffic to the online store is growing, which is the opposite of a collapse.",
    change: "+5.0%",
    current: "5.52K",
    metric: "Organic online store clicks",
    previous: "About 5.26K",
    status: "positive",
  },
  {
    businessMeaning:
      "Purchases attributed to organic Shopping surfaces grew by a third.",
    change: "+33.0%",
    current: "55",
    metric: "Organic purchases",
    previous: "About 41",
    status: "positive",
  },
  {
    businessMeaning:
      "The people who do click are buying more often than before.",
    change: "+17.8%",
    current: "1.4%",
    metric: "Purchase rate",
    previous: "About 1.19%",
    status: "positive",
  },
];

export const merchantKpiDisclosure =
  "Figures are from the Merchant Center overview and analytics summary for the last 28 days. Previous period values are calculated back from the reported percentage change, so treat them as close approximations rather than exact figures.";

export const merchantPriorities: SuitePriorityCard[] = [
  {
    action:
      "Confirm whether Piping Now wants local listings and local inventory visibility. If yes, link the correct Google Business Profile for the Metairie location. If no, disable or remove the local store and local inventory surfaces that trigger the warning, after confirming this will not affect the online free listings.",
    evidence:
      "The overview and business info both show a critical issue: no physical stores found in countries of sale, which prevents products from showing on Google. Business info shows no Business Profiles added, and the sales channels page asks to link local stores. Meanwhile the online country setup is complete with 14,614 of 14,778 products ready.",
    facts: [
      { label: "Severity", value: "The only account level critical warning" },
      { label: "Actually affects", value: "Local surfaces, not the online feed" },
    ],
    outcome:
      "The critical warning clears, so nobody has to keep explaining that products are not really blocked, and any local visibility that is wanted actually turns on.",
    priority: "P0",
    title: "Settle the local store question",
    whyItMatters:
      "This is the only critical warning on the account, and it makes the catalog look blocked when the online feed is actually fine.",
  },
  {
    action:
      "Download or review the products found by Google, compare those URLs and SKUs against Shopify and the Simprosys feed, then decide per group: add to the feed if it is a valid sellable product, exclude or noindex if it is a duplicate, variant artifact, filtered URL, discontinued SKU, or non canonical product URL, or fix the structured data, canonical, and feed mapping if Google is finding alternate URLs that should consolidate.",
    evidence:
      "The data sources page says Google found 1.05K additional products on the online store outside the primary Simprosys feed, which holds 14,778 products. Client notes flagged a concern about missing products after the migration.",
    facts: [
      { label: "Products found", value: "1.05K outside the feed" },
      { label: "Earlier concern", value: "About 12,000 missing products" },
    ],
    outcome:
      "The missing product question gets a real answer instead of an estimate, and any genuinely sellable product that was left out starts showing again.",
    priority: "P0",
    title: "Review the 1.05K products Google found outside the feed",
    whyItMatters:
      "This is the strongest evidence of a real coverage gap, and it is the direct answer to the missing products question raised after the migration.",
  },
  {
    action:
      "Start with the 88 product page unavailable items. Crawl those product URLs and confirm the HTTP status, canonical, robots rules, noindex, Shopify availability, and both desktop and mobile access. Fix anything broken, redirected, unpublished, or blocked at the Shopify or feed source. Then replace the images smaller than 500 by 500 for the 75 affected items, and correct the shipping weights on the 2 remaining items.",
    evidence:
      "The all products page shows 164 of 14.8K products not showing on Google. The breakdown is 88 product page unavailable, 75 image too small, and 2 shipping weight value too high. Overall status is 14.6K approved, 2 limited, 163 not approved, and 1 under review.",
    facts: [
      { label: "Biggest group", value: "88 product pages unavailable" },
      { label: "Merchant Center estimate", value: "Only 0.4% click upside" },
    ],
    outcome:
      "The direct eligibility blocks are gone. The click upside is small on its own, but it removes any doubt about whether the feed is trustworthy after the migration.",
    priority: "P1",
    title: "Fix the 164 products that are not showing",
    whyItMatters:
      "These are direct eligibility blocks. 88 products cannot show at all because Google cannot load their pages.",
  },
  {
    action:
      "Reconcile the click definitions across sources: overview total product clicks against analytics ads plus organic product clicks, organic online store clicks against Search Console product and page clicks, and Merchant Center purchases against GA4 and Google Ads conversion events. Then confirm the Shopify migration did not create duplicate conversion paths, broken checkout attribution, product URL rewrites, or mismatched item IDs.",
    evidence:
      "Overview shows total product clicks down 4.6% and ad driven traffic down 7.0%, with total clicks at 15.03K, down 1.3%. Analytics shows ads plus organic product clicks at 9.51K, down 4.6%, while organic online store clicks are 5.52K, up 5.0%. Those cards do not describe the same thing.",
    facts: [
      { label: "Client priority", value: "Measurement integrity comes first" },
      { label: "Risk", value: "One number hiding two opposite trends" },
    ],
    outcome:
      "The story gets told per channel instead of as a single visibility loss, which is more accurate and easier to defend.",
    priority: "P1",
    title: "Reconcile the performance numbers before reporting them",
    whyItMatters:
      "One reported number is currently hiding two opposite trends. Organic is growing while ads are falling, and a single total says neither.",
  },
  {
    action:
      "Do not bulk apply sale prices. Prioritize a pricing review only for products with medium or high click potential, a recent click decline, a price materially above the benchmark, and an acceptable margin. Before assuming price is the lever, improve titles and images on high impression, low click rate products.",
    evidence:
      "Impressions are up 9.6% while clicks are down 4.6% and click rate is down 13.0%. Merchant Center suggests sale price optimization on 1,300 products for an estimated 8 extra clicks per week, and shows suggestions on 5.53K products. Of the 3.36K products with price benchmarks, 77% are already cheaper than the benchmark, 3% are similar, and 20% are more expensive.",
    facts: [
      { label: "Already cheaper than market", value: "77% of benchmarked products" },
      { label: "Estimated gain from sale prices", value: "About 8 clicks per week" },
    ],
    outcome:
      "Margin is protected. Pricing is not the main blocker when three quarters of the catalog already undercuts the benchmark, so effort goes to presentation instead.",
    priority: "P2",
    title: "Improve listing competitiveness without cutting prices",
    whyItMatters:
      "Price is not the blocker when 77% of the benchmarked catalog is already cheaper than the market. Cutting prices would give away margin for very little.",
  },
  {
    action:
      "Increase the product image count toward at least three images per offer for the priority SKUs, and investigate the mobile speed regression on the product templates. Consider extending the return window to 60 days only if that is operationally acceptable, and add promotions only after feed eligibility and measurement are stable.",
    evidence:
      "Store quality is already Exceptional with a 4.8 rating, $0.00 shipping cost, and a 30 day return window at no cost. The two soft spots are images per offer at a Fair 2.4, and mobile site speed which moved from 1.9s to 2.6s over the last 30 days. Desktop speed is Exceptional at 1.64s.",
    facts: [
      { label: "Images per offer", value: "2.4, rated Fair" },
      { label: "Mobile speed", value: "2.6s, up from 1.9s" },
    ],
    outcome:
      "Listing quality improves at the edges without anyone mistaking store quality for the reason visibility fell. It was never the reason.",
    priority: "P2",
    title: "Strengthen store quality inputs, carefully",
    whyItMatters:
      "Store quality is already a strength. The point of this work is small gains at the edges, not to treat it as the reason visibility fell.",
  },
];

export const merchantHealthColumns: SuiteTableColumn[] = [
  { emphasis: true, key: "item", label: "Account setting" },
  { key: "value", label: "Current state" },
  { key: "read", label: "Is this fine?" },
];

export const merchantHealthRows: SuiteTableRow[] = [
  {
    item: "Total products",
    read: "Fine. The catalog is fully loaded.",
    value: "14,778",
  },
  {
    item: "Product status",
    read: "Fine. 98.9% approved is a healthy ratio for a catalog this size.",
    value: "14.6K approved, 2 limited, 163 not approved, 1 under review",
  },
  {
    item: "United States readiness",
    read: "Fine. This is the number that matters most for the online store.",
    value: "14,614 of 14,778, or 98.9%",
  },
  {
    item: "Feed source",
    read: "Fine. A single controlled primary feed is the right setup.",
    value: "Simprosys Feed via Merchant API, US and English",
  },
  {
    item: "Products found by Google",
    read: "Needs work. This is the main coverage gap to investigate.",
    value: "1.05K outside the controlled feed",
  },
  {
    item: "Physical stores",
    read: "Needs a decision. This is the only critical warning on the account.",
    value: "None found, no Business Profiles linked",
  },
  {
    item: "Shipping policy",
    read: "Fine. Complete and consistent.",
    value: "Complete, United States, all products, 6 to 7 days",
  },
  {
    item: "Ship from location",
    read: "Fine, and it is the address to use if local listings are turned on.",
    value: "4400 Firestone Dr, Metairie, LA 70001",
  },
  {
    item: "Return policy",
    read: "Fine. Extending to 60 days is optional, not required.",
    value: "Verified, 30 days, customer responsibility",
  },
  {
    item: "Store quality score",
    read: "Fine. This is a strength, not a problem to solve.",
    value: "Exceptional, Top Quality Store, 4.8 rating",
  },
  {
    item: "Images per offer",
    read: "Needs work. Aim for at least three on priority SKUs.",
    value: "2.4, rated Fair",
  },
  {
    item: "Site speed",
    read: "Watch. Mobile got slower in the last 30 days.",
    value: "Mobile 2.6s, up from 1.9s. Desktop 1.64s.",
  },
];

export const merchantRisks: Obstacle[] = [
  {
    eta: "1 to 3 days once the decision is made",
    impact:
      "Every conversation about visibility starts with a critical warning that is not actually about the online feed.",
    obstacle: "No physical stores found in the countries of sale.",
    remediation:
      "Decide on local listings, then either link the Metairie Business Profile or switch off the local store surface.",
  },
  {
    eta: "Within the first 7 days",
    impact:
      "Nobody can say with confidence whether products are genuinely missing or whether Google is just finding alternate URLs.",
    obstacle:
      "1.05K products exist on the site outside the controlled feed.",
    remediation:
      "Export the list, match it against Shopify and Simprosys, and record an add, exclude, or fix decision for each group.",
  },
  {
    eta: "Within the first 7 days",
    impact:
      "88 products cannot show at all because Google cannot load their pages.",
    obstacle: "164 products are blocked by eligibility issues.",
    remediation:
      "Crawl the affected URLs to find the real cause, then fix the 88 page failures, replace the 75 undersized images, and correct the 2 shipping weights.",
  },
  {
    eta: "Ongoing from week 1",
    impact:
      "A single reported number can hide organic growth sitting underneath an ad decline.",
    obstacle:
      "Merchant Center click definitions do not match across the overview and analytics pages.",
    remediation:
      "Split reporting by channel and write down which card measures what, so the same comparison is used every month.",
  },
];

export const merchantNextSevenDays = [
  {
    detail:
      "Either link the Metairie Google Business Profile or intentionally turn the surface off. Either way the critical warning clears.",
    title: "Resolve the physical store warning",
  },
  {
    detail:
      "Export the list and reconcile it against Shopify and Simprosys, then record an add, exclude, or fix decision for each product group.",
    title: "Review the 1.05K products found by Google",
  },
  {
    detail:
      "Run a crawl based QA pass on those product URLs to find the real reason each one fails, rather than fixing them one at a time by hand.",
    title: "Fix the 88 product page unavailable items",
  },
  {
    detail:
      "Replace any image below 500 by 500 and correct the two products with shipping weights that are too high.",
    title: "Fix the 75 undersized images and 2 weight errors",
  },
  {
    detail:
      "Put Merchant Center organic clicks, Merchant Center ad clicks, Search Console product clicks, GA4 purchases, and Google Ads conversions into one view for the same window.",
    title: "Build the channel by channel reconciliation",
  },
  {
    detail:
      "Only look at price, title, and image opportunities once the eligibility cleanup is underway. Doing it earlier risks cutting margin to solve the wrong problem.",
    title: "Hold the pricing work until last",
  },
];
