import type { PowerLine, ReportMeta } from "@/lib/reports/types";

export type RevenueMetricComparison = {
  change: string;
  current: number;
  currentDisplay: string;
  direction: "down" | "flat" | "up";
  label: string;
  previous: number;
  previousDisplay: string;
  status: "positive" | "watch";
};

export type RevenueComparisonSection = {
  currentLabel: string;
  insight: string;
  metrics: RevenueMetricComparison[];
  previousLabel: string;
  title: string;
};

export type RevenueRankingItem = {
  detail?: string;
  display: string;
  label: string;
  value: number;
};

export type RevenueRankingPeriod = {
  items: RevenueRankingItem[];
  label: string;
  totalDisplay?: string;
};

export type RevenueRankingBlock = {
  insight: string;
  periods: RevenueRankingPeriod[];
  title: string;
};

export type RevenueWindowTotal = {
  aovDisplay: string;
  conversionDisplay: string;
  label: string;
  ordersDisplay: string;
  revenue: number;
  revenueDisplay: string;
  visitsDisplay: string;
};

export type RevenueReportData = {
  channelContext: string;
  comparisons: RevenueComparisonSection[];
  dataNotes: string[];
  executiveSummary: string;
  meta: ReportMeta;
  powerLines: PowerLine[];
  rankings: RevenueRankingBlock[];
  windowTotals: {
    insight: string;
    months: RevenueWindowTotal[];
    title: string;
    total: RevenueWindowTotal;
  };
};
