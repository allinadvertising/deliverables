import type { KpiRow, VisualDirection } from "@/lib/reports/types";

const changeStyles = {
  positive: "bg-[#edf9f1] text-[#16803d]",
  watch: "bg-[#fff5eb] text-[#c75a12]",
  neutral: "bg-slate-100 text-slate-600",
};

type ReportDashboardProps = {
  kpiDisclosure: string;
  kpiRows: KpiRow[];
  visualDirections: VisualDirection[];
};

export function ReportDashboard({
  kpiDisclosure,
  kpiRows,
  visualDirections,
}: ReportDashboardProps) {
  return (
    <>
      <section
        className="audit-page story-report-page"
        id="dashboard"
        aria-labelledby="dashboard-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          KPI dashboard
        </p>
        <h2 className="audit-section-title" id="dashboard-title">
          The six metrics that matter
        </h2>

        <div className="overflow-x-auto">
          <table className="audit-table mt-0 min-w-[840px]">
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Previous period</th>
                <th scope="col">This period</th>
                <th scope="col">Change</th>
                <th scope="col">Business meaning</th>
              </tr>
            </thead>
            <tbody>
              {kpiRows.map((row) => (
                <tr key={row.metric}>
                  <td className="font-extrabold text-slate-900">{row.metric}</td>
                  <td>{row.previous}</td>
                  <td className="font-black text-[#183b68]">{row.current}</td>
                  <td>
                    <span
                      className={`inline-flex px-2.5 py-1 text-xs font-black ${changeStyles[row.status]}`}
                    >
                      {row.change}
                    </span>
                  </td>
                  <td>{row.businessMeaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-0 mt-4 text-xs leading-relaxed text-slate-500">
          {kpiDisclosure}
        </p>
      </section>

      <section
        className="audit-page story-report-page"
        id="visual-direction"
        aria-labelledby="visual-direction-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Visual direction
        </p>
        <h2 className="audit-section-title" id="visual-direction-title">
          Recommended chart briefs
        </h2>
        <p className="audit-copy mb-7">
          These are production directions for a designer or charting system.
          Charts are intentionally not generated in this report.
        </p>

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
              <p className="mb-2 text-xs font-black uppercase tracking-[0.1em] text-[#2f65a7]">
                Chart
              </p>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {item.chart}
              </p>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                Story to reveal
              </p>
              <p className="mb-0 text-sm font-semibold leading-relaxed text-slate-700">
                {item.insight}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
