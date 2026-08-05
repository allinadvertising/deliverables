import type {
  ConversionPlan,
  KpiRow,
} from "@/lib/reports/types";

const changeStyles = {
  positive: "bg-[#edf9f1] text-[#16803d]",
  watch: "bg-[#fff5eb] text-[#c75a12]",
  neutral: "bg-slate-100 text-slate-600",
};

type ReportDashboardProps = {
  conversionPlan?: ConversionPlan;
  kpiDisclosure: string;
  kpiRows: KpiRow[];
};

export function ReportDashboard({
  conversionPlan,
  kpiDisclosure,
  kpiRows,
}: ReportDashboardProps) {
  return (
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
                  <td
                    className={`font-extrabold text-slate-900 ${
                      row.status === "positive"
                        ? "border-l-4 border-l-[#16803d]"
                        : ""
                    }`}
                  >
                    {row.metric}
                  </td>
                  <td>{row.previous}</td>
                  <td className="font-black text-[#183b68]">{row.current}</td>
                  <td>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-black ${changeStyles[row.status]}`}
                    >
                      {row.status === "positive" ? (
                        <span aria-hidden="true">&#8593;</span>
                      ) : null}
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

        {conversionPlan ? (
          <aside className="mt-7 border-l-4 border-[#f6b328] bg-[#fef7e8] p-5">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
              Conversion and revenue measurement plan
            </p>
            <dl className="grid gap-5 md:grid-cols-3">
              <div>
                <dt className="text-[11px] font-black uppercase tracking-[0.08em] text-slate-500">
                  Owner
                </dt>
                <dd className="mt-1 text-sm font-bold leading-relaxed text-slate-800">
                  {conversionPlan.owner}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-black uppercase tracking-[0.08em] text-slate-500">
                  Source to connect
                </dt>
                <dd className="mt-1 text-sm font-bold leading-relaxed text-slate-800">
                  {conversionPlan.sourcePriority}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-black uppercase tracking-[0.08em] text-slate-500">
                  Next report
                </dt>
                <dd className="mt-1 text-sm font-bold leading-relaxed text-slate-800">
                  {conversionPlan.nextReportExpectation}
                </dd>
              </div>
            </dl>
          </aside>
        ) : null}
    </section>
  );
}
