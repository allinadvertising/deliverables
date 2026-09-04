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
  businessPriority?: string;
  name: string;
  next: string;
  result: string;
  started: string;
  work: string;
};

export type CompletedWorkItem = {
  completedOn: string;
  evidence: string;
  owner: string;
  taskUrl: string;
  title: string;
};

export type IndustryUpdate = {
  date: string;
  impact: string;
  sourceLabel: string;
  sourceUrl: string;
  summary: string;
  title: string;
};

export type ConversionPlan = {
  nextReportExpectation: string;
  owner: string;
  sourcePriority: string;
};

export type ReportSectionCopy = {
  eyebrow: string;
  intro?: string;
  title: string;
};

export type TechnicalLabels = {
  fix: string;
  issue: string;
  why: string;
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
  chart?: string;
  insight: string;
  title: string;
};

export type PerformanceComparison = {
  change: string;
  current: number;
  currentDisplay: string;
  label: string;
  previous: number;
  previousDisplay: string;
  status: "positive" | "watch";
};

export type PerformanceChartSet = {
  devices: {
    insight: string;
    series: PerformanceComparison[];
    title: string;
  };
  growth: {
    insight: string;
    series: PerformanceComparison[];
    title: string;
  };
  homepage: {
    insight: string;
    series: PerformanceComparison[];
    title: string;
  };
  nonbrand: {
    baseline: number;
    baselineDisplay: string;
    contributions: Array<{
      display: string;
      label: string;
      value: number;
    }>;
    insight: string;
    title: string;
    total: number;
    totalDisplay: string;
  };
  revenue?: {
    channelContext?: string;
    customerMix?: Array<{
      grossDisplay: string;
      label: string;
      newCustomerDisplay: string;
      newCustomerRevenue: number;
      returningCustomerDisplay: string;
      returningCustomerRevenue: number;
    }>;
    insight: string;
    rankings?: Array<{
      insight: string;
      periods: Array<{
        items: Array<{
          detail?: string;
          display: string;
          label: string;
          value: number;
        }>;
        label: string;
      }>;
      title: string;
    }>;
    // Two-period comparison bars. Omit for a first-month / baseline revenue
    // section that has no trustworthy prior month — the rankings and context
    // still render on their own.
    series?: PerformanceComparison[];
    title: string;
  };
};

export type Obstacle = {
  eta: string;
  impact: string;
  obstacle: string;
  remediation: string;
};

export type TechnicalItem = {
  developerNote?: string;
  fix: string;
  issue: string;
  why: string;
};

export type SeoStoryReportData = {
  businessObjective?: string;
  completedWork?: CompletedWorkItem[];
  conversionPlan?: ConversionPlan;
  dataNotes: string[];
  executiveSummary: string;
  industryUpdates?: IndustryUpdate[];
  journeyWorkstreams: JourneyWorkstream[];
  kpiDisclosure: string;
  kpiRows: KpiRow[];
  meta: ReportMeta;
  obstacles: Obstacle[];
  performanceCharts?: PerformanceChartSet;
  powerLines: PowerLine[];
  technicalItems: TechnicalItem[];
  technicalLabels?: TechnicalLabels;
  visualSection?: ReportSectionCopy;
  visualDirections: VisualDirection[];
};
