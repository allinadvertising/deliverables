import type { RevenueComparisonSection } from "@/lib/reports/revenue-types";

const statusBar = {
  positive: "bg-[#16803d]",
  watch: "bg-[#c75a12]",
};

const statusText = {
  positive: "text-[#16803d]",
  watch: "text-[#c75a12]",
};

const directionGlyph = {
  down: "↓",
  flat: "→",
  up: "↑",
};

function comparisonAriaLabel(section: RevenueComparisonSection) {
  const readings = section.metrics
    .map(
      (metric) =>
        `${metric.label} moved from ${metric.previousDisplay} to ${metric.currentDisplay}, ${metric.change}`,
    )
    .join("; ");

  return `${section.currentLabel} compared with ${section.previousLabel}: ${readings}.`;
}

export function RevenueComparison({
  section,
}: {
  section: RevenueComparisonSection;
}) {
  return (
    <div role="img" aria-label={comparisonAriaLabel(section)}>
      <div className="hidden border-y border-slate-200 lg:block">
        <div className="grid grid-cols-[190px_1fr_1fr_120px] gap-5 border-b border-slate-200 py-3 text-[11px] font-black uppercase text-slate-400">
          <span>Metric</span>
          <span>{section.previousLabel}</span>
          <span>{section.currentLabel}</span>
          <span>Change</span>
        </div>
        {section.metrics.map((metric) => {
          const maximum = Math.max(1, metric.previous, metric.current);
          const previousWidth = `${Math.max(6, (metric.previous / maximum) * 100)}%`;
          const currentWidth = `${Math.max(6, (metric.current / maximum) * 100)}%`;

          return (
            <div
              className="grid grid-cols-[190px_1fr_1fr_120px] items-center gap-5 border-b border-slate-200 py-5 last:border-b-0"
              key={metric.label}
            >
              <p className="text-sm font-black text-slate-800">{metric.label}</p>
              <div>
                <p className="mb-2 text-xs font-bold text-slate-600">
                  {metric.previousDisplay}
                </p>
                <div className="h-3 bg-slate-100">
                  <span
                    className="block h-3 bg-[#8a9aaa]"
                    style={{ width: previousWidth }}
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold text-slate-600">
                  {metric.currentDisplay}
                </p>
                <div className="h-3 bg-slate-100">
                  <span
                    className={`block h-3 ${statusBar[metric.status]}`}
                    style={{ width: currentWidth }}
                  />
                </div>
              </div>
              <span className={`text-sm font-black ${statusText[metric.status]}`}>
                {directionGlyph[metric.direction]} {metric.change}
              </span>
            </div>
          );
        })}
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-200 lg:hidden">
        {section.metrics.map((metric) => {
          const maximum = Math.max(1, metric.previous, metric.current);
          const previousWidth = `${Math.max(6, (metric.previous / maximum) * 100)}%`;
          const currentWidth = `${Math.max(6, (metric.current / maximum) * 100)}%`;

          return (
            <div className="py-5" key={metric.label}>
              <div className="mb-4 flex items-start justify-between gap-4">
                <p className="text-sm font-black text-slate-800">{metric.label}</p>
                <span
                  className={`shrink-0 text-sm font-black ${statusText[metric.status]}`}
                >
                  {directionGlyph[metric.direction]} {metric.change}
                </span>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-[76px_1fr_78px] items-center gap-3">
                  <span className="text-xs font-bold text-slate-500">
                    {section.previousLabel}
                  </span>
                  <div className="h-3 bg-slate-100">
                    <span
                      className="block h-3 bg-[#8a9aaa]"
                      style={{ width: previousWidth }}
                    />
                  </div>
                  <span className="text-right text-xs font-bold text-slate-700">
                    {metric.previousDisplay}
                  </span>
                </div>
                <div className="grid grid-cols-[76px_1fr_78px] items-center gap-3">
                  <span className="text-xs font-bold text-slate-500">
                    {section.currentLabel}
                  </span>
                  <div className="h-3 bg-slate-100">
                    <span
                      className={`block h-3 ${statusBar[metric.status]}`}
                      style={{ width: currentWidth }}
                    />
                  </div>
                  <span className="text-right text-xs font-bold text-slate-700">
                    {metric.currentDisplay}
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
