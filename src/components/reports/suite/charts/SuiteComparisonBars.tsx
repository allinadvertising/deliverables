import type { SuiteComparison } from "@/lib/reports/pipingnow/types";

const statusColors = {
  positive: "bg-[#16803d]",
  watch: "bg-[#c75a12]",
};

/**
 * Previous period against current period, one row per metric. Period names are
 * passed in, so the same chart serves the 28-day and 3-month comparisons.
 */
export function SuiteComparisonBarsChart({
  chart,
}: {
  chart: SuiteComparison;
}) {
  return (
    <div aria-label={chart.ariaLabel} role="img">
      <div className="hidden border-y border-slate-200 lg:block">
        <div className="grid grid-cols-[210px_1fr_1fr_120px] gap-5 border-b border-slate-200 py-3 text-[11px] font-black uppercase tracking-[0.06em] text-slate-400">
          <span>Metric</span>
          <span>{chart.previousLabel}</span>
          <span>{chart.currentLabel}</span>
          <span className="text-right">Change</span>
        </div>
        {chart.items.map((item) => {
          const maximum = Math.max(1, item.previous, item.current);

          return (
            <div
              className="grid grid-cols-[210px_1fr_1fr_120px] items-center gap-5 border-b border-slate-200 py-5 last:border-b-0"
              key={item.label}
            >
              <p className="text-sm font-black leading-snug text-slate-800">
                {item.label}
              </p>
              <div>
                <p className="mb-2 text-xs font-bold tabular-nums text-slate-600">
                  {item.previousDisplay}
                </p>
                <div className="h-3 bg-slate-100">
                  <span
                    className="block h-3 bg-[#8a9aaa]"
                    style={{
                      width: `${Math.max(6, (item.previous / maximum) * 100)}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold tabular-nums text-slate-600">
                  {item.currentDisplay}
                </p>
                <div className="h-3 bg-slate-100">
                  <span
                    className={`block h-3 ${statusColors[item.status]}`}
                    style={{
                      width: `${Math.max(6, (item.current / maximum) * 100)}%`,
                    }}
                  />
                </div>
              </div>
              <span
                className={`text-right text-sm font-black tabular-nums ${
                  item.status === "positive"
                    ? "text-[#16803d]"
                    : "text-[#c75a12]"
                }`}
              >
                {item.status === "positive" ? "↑" : "↓"} {item.change}
              </span>
            </div>
          );
        })}
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-200 lg:hidden">
        {chart.items.map((item) => {
          const maximum = Math.max(1, item.previous, item.current);

          return (
            <div className="py-5" key={item.label}>
              <div className="mb-4 flex items-start justify-between gap-4">
                <p className="text-sm font-black leading-snug text-slate-800">
                  {item.label}
                </p>
                <span
                  className={`shrink-0 text-sm font-black tabular-nums ${
                    item.status === "positive"
                      ? "text-[#16803d]"
                      : "text-[#c75a12]"
                  }`}
                >
                  {item.status === "positive" ? "↑" : "↓"}{" "}
                  {item.change}
                </span>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-[92px_1fr_82px] items-center gap-3">
                  <span className="text-[11px] font-bold text-slate-500">
                    {chart.previousLabel}
                  </span>
                  <div className="h-3 bg-slate-100">
                    <span
                      className="block h-3 bg-[#8a9aaa]"
                      style={{
                        width: `${Math.max(6, (item.previous / maximum) * 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-right text-xs font-bold tabular-nums text-slate-700">
                    {item.previousDisplay}
                  </span>
                </div>
                <div className="grid grid-cols-[92px_1fr_82px] items-center gap-3">
                  <span className="text-[11px] font-bold text-slate-500">
                    {chart.currentLabel}
                  </span>
                  <div className="h-3 bg-slate-100">
                    <span
                      className={`block h-3 ${statusColors[item.status]}`}
                      style={{
                        width: `${Math.max(6, (item.current / maximum) * 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-right text-xs font-bold tabular-nums text-slate-700">
                    {item.currentDisplay}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
