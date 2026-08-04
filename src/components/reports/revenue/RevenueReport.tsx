import { AuditFooter } from "@/components/audit/AuditFooter";
import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";
import { RevenueComparison } from "@/components/reports/revenue/RevenueComparison";
import { RevenueRankingBoard } from "@/components/reports/revenue/RevenueRankingBoard";
import { ReportCover } from "@/components/reports/storytelling/ReportCover";
import { ReportExecutive } from "@/components/reports/storytelling/ReportExecutive";
import type { RevenueReportData } from "@/lib/reports/revenue-types";

const sections = [
  { href: "#summary", label: "Summary" },
  { href: "#power-lines", label: "Power lines" },
  { href: "#totals", label: "Three months" },
  { href: "#comparisons", label: "Month over month" },
  { href: "#mix", label: "Revenue mix" },
  { href: "#notes", label: "Method" },
];

export function RevenueReport({ report }: { report: RevenueReportData }) {
  const { windowTotals } = report;
  const rows = [...windowTotals.months, windowTotals.total];
  const maximum = Math.max(1, ...windowTotals.months.map((month) => month.revenue));

  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1160px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel="Print organic revenue report as PDF" />
      </div>

      <ReportCover meta={report.meta} />

      <nav
        aria-label="Report sections"
        className="audit-no-print sticky top-0 z-20 mx-auto max-w-[1160px] border-b border-slate-200 bg-[#edf2f7]/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#edf2f7]/80 sm:px-0"
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {sections.map((section) => (
            <a
              className="inline-flex shrink-0 items-center border border-slate-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-slate-600 no-underline transition-colors hover:border-[#2f65a7] hover:text-[#183b68] focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2"
              href={section.href}
              key={section.href}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <ReportExecutive
          action={report.meta.action}
          executiveSummary={report.executiveSummary}
          powerLines={report.powerLines}
        />

        <section
          aria-labelledby="totals-title"
          className="audit-page story-report-page"
          id="totals"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
            Channel totals
          </p>
          <h2 className="audit-section-title" id="totals-title">
            {windowTotals.title}
          </h2>
          <p className="mb-7 text-sm font-semibold leading-relaxed text-slate-600">
            {windowTotals.insight}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-300 text-[11px] font-black uppercase tracking-[0.08em] text-slate-400">
                  <th className="py-3 pr-4 font-black">Period</th>
                  <th className="py-3 pr-4 font-black">Revenue</th>
                  <th className="py-3 pr-4 font-black">Orders</th>
                  <th className="py-3 pr-4 font-black">Visits</th>
                  <th className="py-3 pr-4 font-black">Conv rate</th>
                  <th className="py-3 font-black">AOV</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => {
                  const isTotal = index === windowTotals.months.length;

                  return (
                    <tr
                      className={
                        isTotal
                          ? "border-t-2 border-slate-400 text-sm font-black text-slate-900"
                          : "border-b border-slate-200 text-sm font-bold text-slate-700"
                      }
                      key={row.label}
                    >
                      <td className="py-4 pr-4">
                        <span className="block">{row.label}</span>
                        {isTotal ? null : (
                          <span className="mt-2 block h-2 w-full max-w-[150px] bg-slate-100">
                            <span
                              className="block h-2 bg-[#3e71b8]"
                              style={{
                                width: `${Math.max(6, (row.revenue / maximum) * 100)}%`,
                              }}
                            />
                          </span>
                        )}
                      </td>
                      <td className="py-4 pr-4">{row.revenueDisplay}</td>
                      <td className="py-4 pr-4">{row.ordersDisplay}</td>
                      <td className="py-4 pr-4">{row.visitsDisplay}</td>
                      <td className="py-4 pr-4">{row.conversionDisplay}</td>
                      <td className="py-4">{row.aovDisplay}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-6 border-l-4 border-[#2f65a7] bg-[#f1f7ff] p-4 text-sm font-bold leading-relaxed text-slate-700">
            {report.channelContext}
          </p>
        </section>

        <section
          aria-labelledby="comparisons-title"
          className="audit-page story-report-page"
          id="comparisons"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
            Month over month
          </p>
          <h2 className="audit-section-title" id="comparisons-title">
            Two consecutive comparisons
          </h2>

          <div>
            {report.comparisons.map((section, index) => (
              <article
                className="grid gap-7 border-t border-slate-200 py-10 first:mt-2 lg:grid-cols-[230px_1fr] lg:gap-10"
                key={section.title}
              >
                <div>
                  <span className="inline-flex h-9 w-9 items-center justify-center bg-[#183b68] text-[11px] font-black text-white">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="mt-4 text-xl font-black leading-tight text-slate-900">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
                    {section.insight}
                  </p>
                </div>
                <RevenueComparison section={section} />
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="mix-title"
          className="audit-page story-report-page"
          id="mix"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
            Revenue mix
          </p>
          <h2 className="audit-section-title" id="mix-title">
            Where the revenue came from each month
          </h2>

          <div className="space-y-10">
            {report.rankings.map((ranking) => (
              <div className="border-t border-slate-200 pt-7" key={ranking.title}>
                <RevenueRankingBoard ranking={ranking} />
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="notes-title"
          className="audit-page story-report-page"
          id="notes"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
            Method and caveats
          </p>
          <h2 className="audit-section-title" id="notes-title">
            How these numbers were produced
          </h2>

          <ol className="ml-5 list-decimal space-y-4">
            {report.dataNotes.map((note) => (
              <li
                className="pl-1 text-sm font-semibold leading-relaxed text-slate-600"
                key={note}
              >
                {note}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <AuditFooter
        auditType="Organic Revenue Performance Report"
        clientName={report.meta.client}
        quarter={report.meta.currentPeriod}
      />
      <BackToTopButton />
    </>
  );
}
