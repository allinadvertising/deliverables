import type { RevenueRankingBlock } from "@/lib/reports/revenue-types";

const periodBar = ["bg-[#8a9aaa]", "bg-[#3e71b8]", "bg-[#16803d]"];

function rankingAriaLabel(ranking: RevenueRankingBlock) {
  const readings = ranking.periods
    .map(
      (period) =>
        `${period.label}: ${period.items
          .map((item) => `${item.label} ${item.display}`)
          .join(", ")}`,
    )
    .join("; ");

  return `${ranking.title}. ${readings}.`;
}

export function RevenueRankingBoard({
  ranking,
}: {
  ranking: RevenueRankingBlock;
}) {
  const maximum = Math.max(
    1,
    ...ranking.periods.flatMap((period) =>
      period.items.map((item) => item.value),
    ),
  );

  return (
    <div role="img" aria-label={rankingAriaLabel(ranking)}>
      <div className="mb-6">
        <h4 className="text-base font-black text-slate-900">{ranking.title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {ranking.insight}
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
        {ranking.periods.map((period, periodIndex) => (
          <div key={period.label}>
            <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-slate-200 pb-2">
              <p className="text-xs font-black uppercase text-[#183b68]">
                {period.label}
              </p>
              {period.totalDisplay ? (
                <p className="text-xs font-black text-slate-500">
                  {period.totalDisplay}
                </p>
              ) : null}
            </div>
            <div className="space-y-4">
              {period.items.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold leading-snug text-slate-700">
                        {item.label}
                      </p>
                      {item.detail ? (
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                    <p className="shrink-0 text-xs font-black text-slate-800">
                      {item.display}
                    </p>
                  </div>
                  <div className="h-2.5 bg-slate-100">
                    <span
                      className={`block h-2.5 ${periodBar[periodIndex % periodBar.length]}`}
                      style={{
                        width: `${Math.max(3, (item.value / maximum) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
