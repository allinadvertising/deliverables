export type KickoffFinding = {
  evidence: string;
  response: string;
  title: string;
  whyItMatters: string;
};

export type RoadmapMonth = {
  deliverable: string;
  hours: number;
  month: string;
  objective: string;
  theme: string;
  work: string[];
};

export const kickoffFindings: KickoffFinding[] = [
  {
    title: "Theme markup is distorting page structure",
    evidence:
      "The newsletter label is rendered as an H1 on 2,308 URLs, while Footer Start is rendered as an H2 on 2,256 URLs.",
    whyItMatters:
      "Search engines and visitors receive a weaker page outline, and the homepage lacks a descriptive commercial H1.",
    response:
      "Repair the shared Stencil components first, add the homepage H1, and validate representative page templates with a fresh crawl.",
  },
  {
    title: "Important inventory is not easy to discover",
    evidence:
      "The clearest remediation queue contains 473 clean, indexable URLs found in both Search Console and sitemap orphan reports.",
    whyItMatters:
      "Products and categories can exist in the sitemap without receiving enough internal authority or customer exposure.",
    response:
      "Prioritize by search demand and business value, then add contextual category, product, brand, and editorial links.",
  },
  {
    title: "Duplicate content is suppressing differentiation",
    evidence:
      "The crawl identified 1,163 indexable URLs across 26,632 near-duplicate relationships, including 15,594 at 100% similarity.",
    whyItMatters:
      "Shared template copy and thin taxonomy content make it difficult for search engines to choose the strongest destination.",
    response:
      "Classify clusters by intent, move unique copy ahead of boilerplate, and enrich or consolidate the highest-value groups.",
  },
  {
    title: "Growth opportunities need stronger destinations",
    evidence:
      "Competitor research found an estimated 32% traffic decline plus underserved clusters for pumps, septic tools, parts, and portable-restroom supplies.",
    whyItMatters:
      "Competitors can capture buyers earlier with clearer category architecture, guidance, compatibility information, and richer media.",
    response:
      "Stabilize technical signals first, then build connected commercial hubs around product fit, field use, and operator needs.",
  },
];

export const roadmapMonths: RoadmapMonth[] = [
  {
    month: "Month 1",
    theme: "Correct the foundation",
    hours: 29,
    objective:
      "Remove sitewide markup defects and malformed product URLs so every later SEO investment starts from cleaner signals.",
    work: [
      "Repair the newsletter, footer, review, filter, and homepage heading structure.",
      "Fix double-slash SKU URLs and remove crawlable com_cvv variants.",
      "Declare the active sitemap in robots.txt and validate the deployed templates.",
    ],
    deliverable:
      "A validated technical release with before-and-after crawl evidence and a clean Month 2 priority queue.",
  },
  {
    month: "Month 2",
    theme: "Restore discoverability",
    hours: 31,
    objective:
      "Help customers and search engines reach the products, categories, and brands that matter most.",
    work: [
      "Score the 473 clean orphan URLs by demand, revenue potential, inventory, and strategic fit.",
      "Repair category assignment and add contextual internal links for priority products and hubs.",
      "Align sitemap entries with final preferred URLs and remove redirecting or non-preferred variants.",
    ],
    deliverable:
      "An approved internal-link deployment, cleaner sitemap inventory, and measured orphan-count reduction.",
  },
  {
    month: "Month 3",
    theme: "Differentiate and grow",
    hours: 35,
    objective:
      "Turn stronger technical foundations into distinct commercial pages that can regain rankings and expand demand.",
    work: [
      "Classify the highest-value near-duplicate product, category, and brand clusters.",
      "Enrich priority product and category pages with useful, intent-matched content.",
      "Establish metadata QA and define the first search hub from competitor opportunity data.",
    ],
    deliverable:
      "A content differentiation backlog, updated priority pages, and an approved growth-hub brief.",
  },
];

export const kickoffDecisions = [
  {
    label: "Approve Month 1 scope",
    detail:
      "Confirm the 29-hour technical foundation package as the first execution cycle.",
  },
  {
    label: "Confirm development ownership",
    detail:
      "Name the team responsible for Stencil deployment, redirect rules, and production QA.",
  },
  {
    label: "Provide required access",
    detail:
      "BigCommerce admin, active Stencil theme code, robots.txt controls, Search Console, and the crawl environment.",
  },
];
