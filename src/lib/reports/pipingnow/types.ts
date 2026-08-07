export type SuiteFact = {
  label: string;
  value: string;
};

export type SuiteMeta = {
  client: string;
  coverHeadline: string;
  date: string;
  domain: string;
  facts: SuiteFact[];
  pageLabel: string;
  reportType: string;
};

export type SuiteNavItem = {
  href: string;
  label: string;
};

export type SuiteSentiment = "positive" | "negative" | "neutral";

export type SuiteStat = {
  context?: string;
  detail?: string;
  label: string;
  sentiment?: SuiteSentiment;
  value: string;
};

export type SuitePriorityLevel = "P0" | "P1" | "P2";

export type SuitePriorityCard = {
  action: string;
  evidence: string;
  facts?: SuiteFact[];
  outcome: string;
  priority: SuitePriorityLevel;
  title: string;
  whyItMatters: string;
};

export type SuiteRoadmapPhase = {
  accent?: "blue" | "gold";
  businessOutcome: string;
  deliverable: string;
  objective: string;
  theme: string;
  window: string;
};

export type SuiteGate = {
  detail: string;
  label: string;
  timing: string;
  title: string;
};

export type SuiteDecision = {
  detail: string;
  label: string;
};

export type SuiteActionRow = {
  action: string;
  detailSource: string;
  owner: string;
  priority: SuitePriorityLevel;
  proof: string;
  window: string;
};

export type SuiteLinkCard = {
  covers: string;
  description: string;
  href: string;
  label: string;
  number: string;
};

export type SuiteEvidenceGroup = {
  items: string[];
  label: string;
  tone: "confirmed" | "inferred" | "unverified";
};

export type SuiteTableColumn = {
  align?: "left" | "right";
  emphasis?: boolean;
  key: string;
  label: string;
  mono?: boolean;
};

export type SuiteTableRow = Record<string, string>;

export type SuiteBarItem = {
  detail?: string;
  display: string;
  label: string;
  value: number;
};

export type SuiteRankedBars = {
  ariaLabel: string;
  items: SuiteBarItem[];
  legend?: string;
  tone: "loss" | "gain" | "neutral";
};

export type SuiteComparisonItem = {
  change: string;
  current: number;
  currentDisplay: string;
  label: string;
  previous: number;
  previousDisplay: string;
  status: "positive" | "watch";
};

export type SuiteComparison = {
  ariaLabel: string;
  currentLabel: string;
  items: SuiteComparisonItem[];
  previousLabel: string;
};

export type SuiteShareItem = {
  display: string;
  label: string;
  share: number;
};
