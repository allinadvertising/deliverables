// Audit content types — mirrors the JSON schema defined in README.md.
// Updated 2026-05-18 after Phase R1 analysis of 8 existing audits.
// Nullable/optional fields reflect real-world audit variations.

export type Priority = "P0" | "P1" | "P2";

export type Owner = "AIA" | "Client Dev";

export type AuditMeta = {
  clientName: string;
  auditType: string;
  date: string; // e.g. "May 2026"
  coverBadge: string;
  supportingFile: string | null;
  sourceNote: string | null; // Never populated in existing audits — retained for future use
};

export type MetricCard = {
  value: string; // e.g. "203", "12%"
  label: string; // e.g. "Orphan URLs"
  change: string | null; // Always null in existing audits — future: "+12%", "-5%"
};

export type Severity = {
  p0Count: number;
  p1Count: number;
  p2Count: number;
};

export type ExecutiveSummary = {
  items: string[]; // Bullet-point key insights
  metricCards: MetricCard[];
  severity?: Severity; // Optional: ITK9 audit has no severity bar
};

export type ActionItem = {
  priority: Priority;
  title: string;
  category: string;
  scope: string;
  impact: string;
  secondaryImpact: string | null;
  owner: Owner;
};

export type FindingStatistic = {
  number: string; // e.g. "777"
  description: string; // e.g. "exact-duplicate URLs"
};

export type FindingImpact = {
  label: string;
  value: string;
};

export type Finding = {
  category: string; // Groups findings under a section-label H3
  priority: Priority;
  title: string;
  rootCause: string;
  statistics?: FindingStatistic[]; // Optional: some findings have no stat items
  whatThisMeans: string; // Plain-English business impact
  representativeUrls?: string[]; // Optional: some findings reference no URLs
  impacts?: FindingImpact[]; // Optional: some findings have no impact grid
};

export type SolutionStep = {
  title: string;
  description: string;
};

export type SolutionGroup = {
  category: string;
  steps: SolutionStep[];
};

export type BeforeAfterPair = {
  label: string; // e.g. "Heading Structure Fix", "Redirect Chain"
  before: string;
  after: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AuditContent = {
  meta: AuditMeta;
  executiveSummary: ExecutiveSummary;
  actionItems: ActionItem[];
  findings: Finding[];
  solutions: SolutionGroup[];
  beforeAfter: BeforeAfterPair[];
  insightBox: string | null; // Only Pimp My EV audits populate this
  glossary: GlossaryTerm[];
  faq: FaqItem[];
};
