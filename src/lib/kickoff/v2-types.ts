export type KickoffV2MetaItem = {
  label: string;
  value: string;
};

export type KickoffV2Phase = {
  accent: "blue" | "gold";
  businessOutcome: string;
  deliverable: string;
  month: string;
  objective: string;
  theme: string;
};

export type KickoffV2FocusItem = {
  businessObjective: string;
  evidence: string;
  expectedImpact: string;
  number: string;
  recommendedAction: string;
  scopeImpact: string;
  status: string;
  title: string;
  volume: string;
};

export type KickoffV2Example = {
  current: string[];
  currentLabel: string;
  decision: string;
  eyebrow: string;
  impact: string;
  proof: string;
  target: string[];
  targetLabel: string;
  title: string;
};

export type KickoffV2Artifact = {
  evidence: string;
  expectedImpact: string;
  phase: string;
  recommendedAction: string;
  specialists: string;
  title: string;
};

export type KickoffV2Gate = {
  detail: string;
  label: string;
  timing: string;
  title: string;
};

export type KickoffV2Decision = {
  detail: string;
  label: string;
};

export type KickoffV2Data = {
  approval: {
    decisions: KickoffV2Decision[];
    gates: KickoffV2Gate[];
    title: string;
  };
  cover: {
    clientName: string;
    subtitle: string;
  };
  execution: {
    artifacts: KickoffV2Artifact[];
    artifactsTitle: string;
    examples: KickoffV2Example[];
    title: string;
  };
  focus: {
    footnote: string;
    items: KickoffV2FocusItem[];
    scopeLabel: string;
    title: string;
    volumeLabel: string;
  };
  footerNote: string;
  meta: KickoffV2MetaItem[];
  printAriaLabel: string;
  strategy: {
    /** Tailwind grid-column classes for the phase card grid. */
    gridClassName: string;
    operatingPrinciple: string;
    phases: KickoffV2Phase[];
    title: string;
  };
  summary: {
    emphasis: string;
    lead: string;
    objective: string;
    objectiveLabel: string;
    title: string;
  };
};
