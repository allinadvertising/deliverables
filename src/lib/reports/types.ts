export type ReportMeta = {
  action: string;
  client: string;
  coverHeadline: string;
  currentPeriod: string;
  previousPeriod: string;
  property: string;
  reportType: string;
  source: string;
};

export type PowerLine = {
  area: string;
  statement: string;
  status: "positive" | "watch" | "unavailable";
};

export type JourneyWorkstream = {
  name: string;
  next: string;
  result: string;
  started: string;
  work: string;
};

export type KpiRow = {
  businessMeaning: string;
  change: string;
  current: string;
  metric: string;
  previous: string;
  status: "positive" | "watch" | "neutral";
};

export type VisualDirection = {
  chart: string;
  insight: string;
  title: string;
};

export type Obstacle = {
  eta: string;
  impact: string;
  obstacle: string;
  remediation: string;
};

export type TechnicalItem = {
  fix: string;
  issue: string;
  why: string;
};

export type SeoStoryReportData = {
  dataNotes: string[];
  executiveSummary: string;
  journeyWorkstreams: JourneyWorkstream[];
  kpiDisclosure: string;
  kpiRows: KpiRow[];
  meta: ReportMeta;
  obstacles: Obstacle[];
  powerLines: PowerLine[];
  technicalItems: TechnicalItem[];
  visualDirections: VisualDirection[];
};
