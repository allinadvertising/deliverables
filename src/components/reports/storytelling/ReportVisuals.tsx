import type {
  PerformanceChartSet,
  ReportSectionCopy,
  VisualDirection,
} from "@/lib/reports/types";

import { ReportPerformanceCharts } from "./ReportPerformanceCharts";

type ReportVisualsProps = {
  performanceCharts?: PerformanceChartSet;
  visualSection?: ReportSectionCopy;
  visualDirections: VisualDirection[];
};

export function ReportVisuals({
  performanceCharts,
  visualSection,
  visualDirections,
}: ReportVisualsProps) {
  const isRevenueSection = Boolean(performanceCharts?.revenue);
  const sectionId = isRevenueSection ? "revenue" : "visual-direction";

  return (
    <section
      className="audit-page story-report-page"
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
        {isRevenueSection ? "Revenue" : (visualSection?.eyebrow ?? "Visual direction")}
      </p>
      <h2 className="audit-section-title" id={`${sectionId}-title`}>
        {visualSection?.title ?? "Recommended chart briefs"}
      </h2>
      <p className="audit-copy mb-7">
        {visualSection?.intro ??
          "These are production directions for a designer or charting system. Charts are intentionally not generated in this report."}
      </p>

      {performanceCharts ? (
        <ReportPerformanceCharts charts={performanceCharts} />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {visualDirections.map((item, index) => (
            <article
              className="border-t-4 border-[#2f65a7] bg-[#f7faff] p-5"
              key={item.title}
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center bg-[#183b68] text-[11px] font-black text-white"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-0 text-lg font-black text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {item.chart}
              </p>
              <p className="mb-2 mt-5 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                Business meaning
              </p>
              <p className="mb-0 text-sm font-semibold leading-relaxed text-slate-700">
                {item.insight}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
