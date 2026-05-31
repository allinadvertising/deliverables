import type { ExecutiveSummary as ExecSummaryType } from "@/lib/audit/types";
import { MetricCard } from "./MetricCard";
import { SeverityBar } from "./SeverityBar";

type Props = ExecSummaryType & { sourceNote?: string | null };

export function ExecutiveSummary({
  items,
  metricCards,
  severity,
  sourceNote,
}: Props) {
  return (
    <div className="audit-page">
      <h2 className="audit-section-title">Executive Summary</h2>

      <section className="audit-executive-readout relative my-6 overflow-hidden rounded-lg border border-[#cbdff4] bg-[linear-gradient(135deg,#f3f8ff_0%,#ffffff_46%,#fffaf0_100%)] px-8 py-8 shadow-[0_14px_34px_rgba(24,59,104,0.08)] max-sm:px-5 max-sm:py-6">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1.5 bg-[linear-gradient(180deg,#2f65a7_0%,#f6b328_100%)]"
        />
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#d8e6f5] pb-5">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#2f65a7]">
              Executive Readout
            </p>
            <h3 className="m-0 text-[28px] font-black leading-tight text-[#183b68] max-sm:text-2xl">
              At a Glance
            </h3>
          </div>
          <span className="rounded-full border border-[#bfd6f0] bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-[#2f65a7] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
            {items.length} key signals
          </span>
        </div>

        <ol className="audit-executive-list grid gap-3">
          {items.map((item, i) => (
            <li
              className="grid grid-cols-[34px_1fr] gap-4 rounded-lg border border-[#e2edf8] bg-white/80 px-4 py-4 text-[17px] leading-[1.58] text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] max-sm:grid-cols-1 max-sm:gap-2"
              key={i}
            >
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#183b68] text-sm font-black text-white">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="audit-metric-grid my-8 grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {metricCards.map((card, i) => (
          <MetricCard key={i} {...card} />
        ))}
      </div>

      {sourceNote && (
        <p className="audit-mono mt-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] leading-6 text-slate-500">
          {sourceNote}
        </p>
      )}

      {severity && <SeverityBar {...severity} />}
    </div>
  );
}
