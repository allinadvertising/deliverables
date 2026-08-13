import {
  kickoffDecisions,
  kickoffFindings,
  roadmapMonths,
} from "@/lib/kickoff/toico";
import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

export const kickoffV2Meta = [
  { label: "Quarter", value: "July to September 2026" },
  {
    label: "Illustrative objective",
    value: "Grow organic revenue 10-15% YoY (pending confirmation)",
  },
  { label: "Roadmap", value: "Foundation, discovery, growth" },
  { label: "Platform", value: "BigCommerce" },
];

export const kickoffV2BusinessObjective =
  "Illustrative objective, pending client confirmation: grow organic revenue toward a 10-15% YoY target by expanding visibility for the priority 3-inch Tiger Suction Hose line, recovering first-page category rankings, and capturing the value of phone orders that begin in organic search.";

const phaseBusinessOutcomes = [
  "Create the clean technical foundation needed to recover first-page category rankings and measure priority-product visibility reliably.",
  "Move the 3-inch Tiger Suction Hose line and other revenue-priority inventory into stronger customer and search-engine discovery paths.",
  "Improve priority commercial pages so ranking recovery can support the commercial growth objective once its target is confirmed.",
];

export const kickoffV2Phases = roadmapMonths.map((month, index) => ({
  accent: index === 1 ? ("gold" as const) : ("blue" as const),
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
    "Commercial hubs support new demand and the commercial growth objective once its target is confirmed.",
  ][index],
  evidence: finding.evidence,
  volume: [
    "2,308 H1 / 2,256 H2 URLs",
    "473 URLs",
    "1,163 URLs",
    "Market-level analysis",
  ][index],
  scopeImpact: [
    "100% H1 / 97.7% H2",
    "20.5% of scoped URLs",
    "50.4% of scoped URLs",
    "Not URL-scoped",
  ][index],
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
    specialists: "Development and SEO",
    title: "Validated technical release",
    evidence: "Before-and-after crawl confirms corrected templates, preferred URLs, and sitemap signals.",
    recommendedAction: "Release shared template, malformed URL, and sitemap corrections first.",
    expectedImpact: "Cleaner sitewide signals and a dependable Month 2 priority queue.",
  },
  {
    phase: "Month 2",
    specialists: "SEO and Merchandising",
    title: "Ranked orphan queue",
    evidence: "Products and categories are scored by demand, value, inventory, and strategic fit.",
    recommendedAction: "Approve the highest-value product and category destinations for deployment.",
    expectedImpact: "More qualified shoppers can reach commercially important inventory.",
  },
  {
    phase: "Month 2",
    specialists: "Development and SEO",
    title: "Internal-link deployment",
    evidence: "Deployed category, product, brand, and editorial links are verified on priority pages.",
    recommendedAction: "Publish approved links and measure the reduction in priority orphan URLs.",
    expectedImpact: "Stronger discovery paths for customers and search engines.",
  },
  {
    phase: "Month 3",
    specialists: "SEO and Content",
    title: "Growth-hub brief",
    evidence: "The backlog is ranked against competitor gaps, buyer intent, and commercial fit.",
    recommendedAction: "Select and approve the next commercial content hub.",
    expectedImpact: "Distinct search destinations can capture new product demand.",
  },
];

export const kickoffV2ExecutionExamples = [
  {
    eyebrow: "Template hierarchy",
    title: "Make the page topic the primary heading",
    currentLabel: "Current template",
    current: ["Newsletter — H1", "Footer Start — H2"],
    targetLabel: "Target template",
    target: [
      "One descriptive commercial H1",
      "Interface labels use appropriate structural elements",
    ],
    decision: "Approve the shared Stencil heading correction for Month 1.",
    impact:
      "Clear page topics support category-ranking recovery before priority product work begins.",
    proof:
      "A fresh crawl confirms corrected outlines on the homepage and representative category and product templates.",
  },
  {
    eyebrow: "Product URL signals",
    title: "Emit one clean preferred product URL",
    currentLabel: "Current patterns",
    current: ["Double-slash SKU variants", "Crawlable com_cvv variants"],
    targetLabel: "Target state",
    target: [
      "One internally linked canonical product URL",
      "Non-preferred variants removed from crawl paths",
    ],
    decision:
      "Approve the preferred product-URL pattern and development specialist for Month 1.",
    impact:
      "Clean product signals reduce duplicate discovery and protect visibility for the Tiger Suction Hose line and other revenue-priority inventory.",
    proof:
      "A post-release crawl finds one preferred URL per tested product and no exposed double-slash or com_cvv variants.",
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
    label: "Specialists",
    title: "Confirm development and QA specialists",
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
    index === 0
      ? "Approve the technical foundation phase"
      : index === 1
        ? "Confirm development specialists"
        : decision.label,
  detail:
    index === 0
      ? "Confirm shared template, malformed URL, and sitemap corrections as the first execution cycle."
      : decision.detail,
}));

export const toicoKickoffV2: KickoffV2Data = {
  printAriaLabel: "Print TOICO kickoff V2 as PDF",
  footerNote: "TOICO SEO Strategy Kickoff · Q3 2026",
  cover: {
    clientName: "TOICO",
    subtitle: "Your organic search strategy for the next three months.",
  },
  meta: kickoffV2Meta,
  summary: {
    title: "What changes first",
    objectiveLabel: "Illustrative business objective",
    objective: kickoffV2BusinessObjective,
    lead: "TOICO's strongest near-term SEO gains will not come from rewriting pages one by one. The audit points to shared technical defects that weaken thousands of URLs at once, followed by a clear discoverability queue and a focused content opportunity.",
    emphasis:
      "The sequence is deliberate: correct the foundation, restore access to valuable inventory, then invest in differentiated commercial content.",
  },
  strategy: {
    title: "3 Month Roadmap",
    gridClassName: "lg:grid-cols-3",
    phases: kickoffV2Phases,
    operatingPrinciple:
      "Fix shared technical defects before committing effort to page-level rewrites.",
  },
  focus: {
    title: "Four priorities for organic growth",
    volumeLabel: "Volume",
    scopeLabel: "Scoped URLs impacted",
    items: kickoffV2Focus,
    footnote:
      "Percentages use the 2,308-URL technical scope represented in the crawl evidence.",
  },
  execution: {
    title: "What changes, who decides, and how we prove it",
    examples: kickoffV2ExecutionExamples,
    artifactsTitle: "Evidence, action, impact, and specialists",
    artifacts: kickoffV2ExecutionArtifacts,
  },
  approval: {
    title: "Decisions and specialists before launch",
    gates: kickoffV2Gates,
    decisions: kickoffV2Decisions,
  },
};
