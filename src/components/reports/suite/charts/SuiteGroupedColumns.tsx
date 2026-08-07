import type { SuiteComparison } from "@/lib/reports/pipingnow/types";

/**
 * Paired columns per metric, one column for each period. Each metric is scaled
 * on its own axis so metrics of very different sizes stay readable side by side.
 */
export function SuiteGroupedColumnsChart({
  chart,
}: {
  chart: SuiteComparison;
}) {
  return (
    <div aria-label={chart.ariaLabel} role="img">
      <div className="mb-5 flex flex-wrap gap-5 text-xs font-bold text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 bg-[#8a9aaa]" />
          {chart.previousLabel}
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 bg-[#16803d]" />
          {chart.currentLabel}, up
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 bg-[#c75a12]" />
          {chart.currentLabel}, down
        </span>
        <span className="text-slate-400">Each metric uses its own scale.</span>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-slate-200 lg:grid-cols-3">
        {chart.items.map((item) => {
          const maximum = Math.max(1, item.previous, item.current);

          return (
            <div
              className="min-w-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              key={item.label}
            >
              <div className="flex h-48 items-end justify-center gap-5 border-b-2 border-slate-300 px-3">
                <div className="flex h-full w-20 flex-col justify-end text-center">
                  <span className="mb-2 text-xs font-black tabular-nums text-slate-700">
                    {item.previousDisplay}
                  </span>
                  <span
                    className="block w-full bg-[#8a9aaa]"
                    style={{
                      height: `${Math.max(10, (item.previous / maximum) * 100)}%`,
                    }}
                  />
                </div>
                <div className="flex h-full w-20 flex-col justify-end text-center">
                  <span
                    className={`mb-2 text-xs font-black tabular-nums ${
                      item.status === "positive"
                        ? "text-[#16803d]"
                        : "text-[#c75a12]"
                    }`}
                  >
                    {item.currentDisplay}
                  </span>
                  <span
                    className={`block w-full ${
                      item.status === "positive"
                        ? "bg-[#16803d]"
                        : "bg-[#c75a12]"
                    }`}
                    style={{
                      height: `${Math.max(10, (item.current / maximum) * 100)}%`,
                    }}
                  />
                </div>
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <p className="text-sm font-black leading-snug text-slate-800">
                  {item.label}
                </p>
                <span
                  className={`shrink-0 px-2 py-1 text-xs font-black tabular-nums ${
                    item.status === "positive"
                      ? "bg-[#edf9f1] text-[#16803d]"
                      : "bg-[#fff5eb] text-[#c75a12]"
                  }`}
                >
                  {item.status === "positive" ? "↑" : "↓"} {item.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
