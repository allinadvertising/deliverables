import {
  kickoffDecisions,
  kickoffFindings,
  kickoffMetrics,
  roadmapMonths,
} from "@/lib/kickoff/toico";

export const kickoffV2Meta = [
  { label: "Quarter", value: "July to September 2026" },
  { label: "Month 1 scope", value: "29 hours" },
  { label: "90-day plan", value: "95 hours" },
  { label: "Platform", value: "BigCommerce" },
];

export const kickoffV2Metrics = [
  kickoffMetrics[0],
  {
    value: "1,163",
    label: "Indexable near-duplicate URLs",
    note: "Priority clusters need differentiation, consolidation, or exclusion.",
  },
  kickoffMetrics[2],
  {
    value: "29h",
    label: "Approved Month 1 package",
    note: "Shared template, malformed URL, and sitemap corrections come first.",
  },
];

export const kickoffV2Phases = roadmapMonths.map((month, index) => ({
  ...month,
  accent: index === 1 ? "gold" : "blue",
  share: `${Math.round((month.hours / 95) * 100)}%`,
}));

export const kickoffV2Focus = kickoffFindings.map((finding, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: [
    "Repair shared heading templates",
    "Restore product discoverability",
    "Differentiate priority clusters",
    "Build stronger search destinations",
  ][index],
  why: finding.whyItMatters,
  action: finding.response,
  evidence: finding.evidence,
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
    title: "Validated technical release",
    detail: "Before-and-after crawl evidence for templates, URLs, and sitemap signals.",
  },
  {
    phase: "Month 2",
    title: "Ranked orphan queue",
    detail: "Products and categories scored by demand, value, inventory, and fit.",
  },
  {
    phase: "Month 2",
    title: "Internal-link deployment",
    detail: "Approved category, product, brand, and editorial links with measured impact.",
  },
  {
    phase: "Month 3",
    title: "Growth-hub brief",
    detail: "A prioritized content backlog tied to competitor gaps and buyer intent.",
  },
];

export const kickoffV2Gates = [
  {
    timing: "Kickoff",
    label: "Decision",
    title: "Approve the 29-hour Month 1 scope",
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

export const kickoffV2Decisions = kickoffDecisions;
