import {
  kickoffDecisions,
  kickoffFindings,
  kickoffMetrics,
  roadmapMonths,
} from "@/lib/kickoff/toico";

export const kickoffV2Meta = [
  { label: "Quarter", value: "July to September 2026" },
  { label: "Business objective", value: "Grow organic revenue 10-15% YoY" },
  { label: "Roadmap", value: "Foundation, discovery, growth" },
  { label: "Platform", value: "BigCommerce" },
];

export const kickoffV2BusinessObjective =
  "Grow organic revenue toward a 10-15% YoY target by expanding visibility for the priority 3-inch Tiger Suction Hose line, recovering first-page category rankings, and capturing the value of phone orders that begin in organic search.";

export const kickoffV2Metrics = [
  kickoffMetrics[0],
  {
    value: "1,163",
    label: "Indexable near-duplicate URLs",
    note: "Priority clusters need differentiation, consolidation, or exclusion.",
  },
  kickoffMetrics[2],
  {
    value: "3 phases",
    label: "Decision-led roadmap",
    note: "Foundation, discoverability, and commercial growth each close with evidence.",
  },
];

const phaseBusinessOutcomes = [
  "Create the clean technical foundation needed to recover first-page category rankings and measure priority-product visibility reliably.",
  "Move the 3-inch Tiger Suction Hose line and other revenue-priority inventory into stronger customer and search-engine discovery paths.",
  "Improve priority commercial pages so ranking recovery can contribute to the 10-15% organic revenue target.",
];

export const kickoffV2Phases = roadmapMonths.map((month, index) => ({
  accent: index === 1 ? "gold" : "blue",
  businessOutcome: phaseBusinessOutcomes[index],
  deliverable: month.deliverable,
  month: month.month,
  objective: month.objective,
  theme: month.theme,
}));

export const kickoffV2Focus = kickoffFindings.map((finding, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: [
    "Repair shared templates before growth work",
    "Prioritize Tiger Suction Hose discoverability",
    "Differentiate revenue-priority product clusters",
    "Build commercial hubs around buyer demand",
  ][index],
  businessObjective: [
    "Ranking recovery starts with dependable page and URL signals.",
    "The priority product line needs clearer internal paths before visibility can contribute to revenue.",
    "Distinct pages give high-value products a better chance to rank for specific buyer needs.",
    "Commercial hubs support new demand and the 10-15% organic revenue growth target.",
  ][index],
  evidence: finding.evidence,
  expectedImpact: [
    "Cleaner templates give priority categories and products a stronger foundation for ranking recovery.",
    "More qualified shoppers can reach the Tiger Suction Hose line and other commercially important inventory.",
    "Stronger differentiation helps high-value product pages compete for specific buyer searches.",
    "Connected commercial hubs can expand qualified demand and support the organic revenue growth target.",
  ][index],
  recommendedAction: finding.response,
  status: "Proposed priority",
}));

export const kickoffV2ExecutionArtifacts = [
  {
    phase: "Month 1",
    owner: "Development + SEO",
    title: "Validated technical release",
    evidence: "Before-and-after crawl confirms corrected templates, preferred URLs, and sitemap signals.",
    recommendedAction: "Release shared template, malformed URL, and sitemap corrections first.",
    expectedImpact: "Cleaner sitewide signals and a dependable Month 2 priority queue.",
  },
  {
    phase: "Month 2",
    owner: "SEO + Merchandising",
    title: "Ranked orphan queue",
    evidence: "Products and categories are scored by demand, value, inventory, and strategic fit.",
    recommendedAction: "Approve the highest-value product and category destinations for deployment.",
    expectedImpact: "More qualified shoppers can reach commercially important inventory.",
  },
  {
    phase: "Month 2",
    owner: "Development + SEO",
    title: "Internal-link deployment",
    evidence: "Deployed category, product, brand, and editorial links are verified on priority pages.",
    recommendedAction: "Publish approved links and measure the reduction in priority orphan URLs.",
    expectedImpact: "Stronger discovery paths for customers and search engines.",
  },
  {
    phase: "Month 3",
    owner: "SEO + Content",
    title: "Growth-hub brief",
    evidence: "The backlog is ranked against competitor gaps, buyer intent, and commercial fit.",
    recommendedAction: "Select and approve the next commercial content hub.",
    expectedImpact: "Distinct search destinations can capture new product demand.",
  },
];

export const kickoffV2Gates = [
  {
    timing: "Kickoff",
    label: "Decision",
    title: "Approve the technical foundation phase",
    detail:
      "Lock the technical foundation package before page-level content production begins.",
  },
  {
    timing: "Before launch",
    label: "Ownership",
    title: "Confirm development and QA owners",
    detail:
      "Assign Stencil deployment, redirect rules, production QA, and SEO validation.",
  },
  {
    timing: "Month 1 close",
    label: "Evidence",
    title: "Validate the release with a fresh crawl",
    detail:
      "Confirm corrected page outlines, preferred product URLs, and active sitemap signals.",
  },
  {
    timing: "Month 2 close",
    label: "Measurement",
    title: "Measure discovery gains",
    detail:
      "Report orphan-count reduction and verify deployed internal links on priority pages.",
  },
  {
    timing: "Month 3 close",
    label: "Growth",
    title: "Approve the next content backlog",
    detail:
      "Use cluster evidence and opportunity data to select the next commercial hub.",
  },
];

export const kickoffV2Decisions = kickoffDecisions.map((decision, index) => ({
  ...decision,
  label:
    index === 0 ? "Approve the technical foundation phase" : decision.label,
  detail:
    index === 0
      ? "Confirm shared template, malformed URL, and sitemap corrections as the first execution cycle."
      : decision.detail,
}));
