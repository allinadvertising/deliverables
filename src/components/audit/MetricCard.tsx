import type { MetricCard as MetricCardType } from "@/lib/audit/types";

export function MetricCard({ value, label, change }: MetricCardType) {
  return (
    <div className="audit-card bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-[18px] py-[26px] text-center">
      <div className="text-[46px] font-black leading-[0.95] text-[#2f65a7]">
        {value}
      </div>
      <div className="mt-3 text-[13px] font-bold uppercase tracking-[0.08em] text-slate-600">
        {label}
      </div>
      {change && (
        <div className="mt-1.5 text-sm font-semibold">{change}</div>
      )}
    </div>
  );
}
