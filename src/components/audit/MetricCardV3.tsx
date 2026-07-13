import type { StatCard } from "@/lib/audit/types";

const sentimentStyles = {
  positive: { bar: "bg-[#16803d]", pill: "bg-[#edf9f1] text-[#16803d]" },
  negative: { bar: "bg-[#c62828]", pill: "bg-[#fff1f1] text-[#c62828]" },
  neutral: { bar: "bg-slate-300", pill: "bg-slate-100 text-slate-600" },
} as const;

export function MetricCardV3({ change, label, sentiment, value }: StatCard) {
  const resolved = sentimentStyles[sentiment ?? "neutral"];

  return (
    <div className="relative overflow-hidden rounded-[10px] border border-slate-200 bg-white px-4 pb-5 pt-[22px] shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[3px] ${resolved.bar}`}
      />
      <div className="mb-2.5 text-xs font-bold uppercase tracking-[0.07em] text-slate-500">
        {label}
      </div>
      <div className="audit-mono text-[38px] font-black leading-none tabular-nums text-[#183b68]">
        {value}
      </div>
      {change ? (
        <div
          className={`mt-2.5 inline-flex items-center gap-1 rounded-md px-2 py-[3px] text-[12.5px] font-bold ${resolved.pill}`}
        >
          {change}
        </div>
      ) : null}
    </div>
  );
}
