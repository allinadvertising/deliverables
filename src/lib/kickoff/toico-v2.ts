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

export const kickoffV2Phases = roadmapMonths.map((month, index) => ({
  accent: index === 1 ? "gold" : "blue",
  deliverable: month.deliverable,
  month: month.month,
  objective: month.objective,
  theme: month.theme,
}));

export const kickoffV2Focus = kickoffFindings.map((finding, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: [
    "Repair shared heading templates",
    "Restore product discoverability",
    "Differentiate priority clusters",
    "Build stronger search destinations",
  ][index],
  evidence: finding.evidence,
  expectedImpact: finding.whyItMatters,
  recommendedAction: finding.response,
}));

export const kickoffV2Signals = [
  {
    label: "Foundation",
    value: "2,308 URLs",
    detail: "One shared Stencil correction addresses the broadest heading defect.",
  },
  {
    label: "Discovery",
    value: "473 URLs",
    detail: "A ranked orphan queue creates the clearest Month 2 deployment path.",
  },
  {
    label: "Growth",
    value: "26,632 relationships",
    detail: "Near-duplicate clusters show where distinct commercial content matters.",
  },
];

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
