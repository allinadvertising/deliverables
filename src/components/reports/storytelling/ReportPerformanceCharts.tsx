import type {
  PerformanceChartSet,
  PerformanceComparison,
} from "@/lib/reports/types";

const statusColors = {
  positive: "bg-[#16803d]",
  watch: "bg-[#c75a12]",
};

function ChartBand({
  children,
  insight,
  number,
  title,
}: {
  children: React.ReactNode;
  insight: string;
  number: string;
  title: string;
}) {
  return (
    <article className="grid gap-7 border-t border-slate-200 py-10 first:mt-2 lg:grid-cols-[230px_1fr] lg:gap-10">
      <div>
        <span className="inline-flex h-9 w-9 items-center justify-center bg-[#183b68] text-[11px] font-black text-white">
          {number}
        </span>
        <h3 className="mt-4 text-xl font-black leading-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
          {insight}
        </p>
      </div>
      {children}
    </article>
  );
}

function GroupedColumnChart({
  ariaLabel,
  series,
}: {
  ariaLabel: string;
  series: PerformanceComparison[];
}) {
  return (
    <div aria-label={ariaLabel} role="img">
      <div className="mb-5 flex flex-wrap gap-5 text-xs font-bold text-slate-600">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 bg-[#8a9aaa]" aria-hidden="true" />
          May
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 bg-[#16803d]" aria-hidden="true" />
          June
        </span>
        <span className="text-slate-400">Each metric uses its own scale.</span>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-slate-200">
        {series.map((item) => {
          const maximum = Math.max(1, item.previous, item.current);
          const previousHeight = `${Math.max(10, (item.previous / maximum) * 100)}%`;
          const currentHeight = `${Math.max(10, (item.current / maximum) * 100)}%`;

          return (
            <div className="min-w-0 sm:px-6 sm:first:pl-0 sm:last:pr-0" key={item.label}>
              <div className="flex h-52 items-end justify-center gap-5 border-b-2 border-slate-300 px-3">
                <div className="flex h-full w-20 flex-col justify-end text-center">
                  <span className="mb-2 text-xs font-black text-slate-800">
                    {item.previousDisplay}
                  </span>
                  <span className="block w-full bg-[#8a9aaa]" style={{ height: previousHeight }} />
                </div>
                <div className="flex h-full w-20 flex-col justify-end text-center">
                  <span className="mb-2 text-xs font-black text-[#16803d]">
                    {item.currentDisplay}
                  </span>
                  <span className="block w-full bg-[#16803d]" style={{ height: currentHeight }} />
                </div>
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <p className="text-sm font-black text-slate-800">{item.label}</p>
                <span className="shrink-0 bg-[#edf9f1] px-2 py-1 text-xs font-black text-[#16803d]">
                  ↑ {item.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WaterfallChart({ chart }: { chart: PerformanceChartSet["nonbrand"] }) {
  const contributionBars = chart.contributions.map((item, index) => {
    const priorChange = chart.contributions
      .slice(0, index)
      .reduce((total, contribution) => total + contribution.value, 0);
    const start = chart.baseline + priorChange;
    return {
      ...item,
      end: start + item.value,
      start,
      type: "contribution" as const,
    };
  });
  const bars = [
    {
      display: chart.baselineDisplay,
      end: chart.baseline,
      label: "May baseline",
      start: 0,
      type: "baseline" as const,
      value: chart.baseline,
    },
    ...contributionBars,
    {
      display: chart.totalDisplay,
      end: chart.total,
      label: "June total",
      start: 0,
      type: "total" as const,
      value: chart.total,
    },
  ];
  const maximum = Math.max(
    1,
    ...bars.flatMap((item) => [item.start, item.end]),
  );
  const ariaLabel = bars
    .map((item) => `${item.label}: ${item.display}`)
    .join("; ");

  return (
    <div role="img" aria-label={ariaLabel}>
      <div className="hidden min-w-[700px] sm:block">
        <div className="grid grid-cols-5 gap-3">
          {bars.map((item) => {
            const bottom = `${(Math.min(item.start, item.end) / maximum) * 100}%`;
            const height = `${Math.max(3, (Math.abs(item.end - item.start) / maximum) * 100)}%`;
            const color =
              item.type === "baseline"
                ? "bg-[#3e71b8]"
                : item.type === "total"
                  ? "bg-[#183b68]"
                  : item.value >= 0
                    ? "bg-[#16803d]"
                    : "bg-[#c75a12]";

            return (
              <div key={item.label}>
                <p className={`mb-2 text-center text-xs font-black ${item.value < 0 ? "text-[#c75a12]" : "text-slate-800"}`}>
                  {item.display}
                </p>
                <div className="relative h-56 border-b-2 border-slate-300 bg-slate-50/70">
                  <span
                    className={`absolute inset-x-4 block ${color}`}
                    style={{ bottom, height }}
                  />
                </div>
                <p className="mt-3 text-center text-xs font-bold leading-snug text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-5 sm:hidden">
        {bars.map((item) => {
          const left = `${(Math.min(item.start, item.end) / maximum) * 100}%`;
          const width = `${Math.max(3, (Math.abs(item.end - item.start) / maximum) * 100)}%`;
          const color =
            item.type === "baseline"
              ? "bg-[#3e71b8]"
              : item.type === "total"
                ? "bg-[#183b68]"
                : item.value >= 0
                  ? "bg-[#16803d]"
                  : "bg-[#c75a12]";

          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="text-xs font-bold text-slate-600">{item.label}</p>
                <p className={`text-xs font-black ${item.value < 0 ? "text-[#c75a12]" : "text-slate-800"}`}>
                  {item.display}
                </p>
              </div>
              <div className="relative h-4 bg-slate-100">
                <span
                  className={`absolute bottom-0 top-0 block ${color}`}
                  style={{ left, width }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DivergenceChart({
  ariaLabel,
  series,
}: {
  ariaLabel: string;
  series: PerformanceComparison[];
}) {
  return (
    <div role="img" aria-label={ariaLabel}>
      <div className="hidden min-w-[690px] border-y border-slate-200 lg:block">
        <div className="grid grid-cols-[160px_1fr_1fr_110px] gap-5 border-b border-slate-200 py-3 text-[11px] font-black uppercase text-slate-400">
          <span>Metric</span>
          <span>May</span>
          <span>June</span>
          <span>Change</span>
        </div>
        {series.map((item) => {
          const maximum = Math.max(1, item.previous, item.current);
          const previousWidth = `${Math.max(6, (item.previous / maximum) * 100)}%`;
          const currentWidth = `${Math.max(6, (item.current / maximum) * 100)}%`;

          return (
            <div className="grid grid-cols-[160px_1fr_1fr_110px] items-center gap-5 border-b border-slate-200 py-5 last:border-b-0" key={item.label}>
              <p className="text-sm font-black text-slate-800">{item.label}</p>
              <div>
                <p className="mb-2 text-xs font-bold text-slate-600">{item.previousDisplay}</p>
                <div className="h-3 bg-slate-100">
                  <span className="block h-3 bg-[#8a9aaa]" style={{ width: previousWidth }} />
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold text-slate-600">{item.currentDisplay}</p>
                <div className="h-3 bg-slate-100">
                  <span className={`block h-3 ${statusColors[item.status]}`} style={{ width: currentWidth }} />
                </div>
              </div>
              <span className={`text-sm font-black ${item.status === "positive" ? "text-[#16803d]" : "text-[#c75a12]"}`}>
                {item.status === "positive" ? "↑" : "↓"} {item.change}
              </span>
            </div>
          );
        })}
      </div>
      <div className="divide-y divide-slate-200 border-y border-slate-200 lg:hidden">
        {series.map((item) => {
          const maximum = Math.max(1, item.previous, item.current);
          const previousWidth = `${Math.max(6, (item.previous / maximum) * 100)}%`;
          const currentWidth = `${Math.max(6, (item.current / maximum) * 100)}%`;

          return (
            <div className="py-5" key={item.label}>
              <div className="mb-4 flex items-start justify-between gap-4">
                <p className="text-sm font-black text-slate-800">{item.label}</p>
                <span className={`shrink-0 text-sm font-black ${item.status === "positive" ? "text-[#16803d]" : "text-[#c75a12]"}`}>
                  {item.status === "positive" ? "↑" : "↓"} {item.change}
                </span>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-[42px_1fr_70px] items-center gap-3">
                  <span className="text-xs font-bold text-slate-500">May</span>
                  <div className="h-3 bg-slate-100">
                    <span className="block h-3 bg-[#8a9aaa]" style={{ width: previousWidth }} />
                  </div>
                  <span className="text-right text-xs font-bold text-slate-700">{item.previousDisplay}</span>
                </div>
                <div className="grid grid-cols-[42px_1fr_70px] items-center gap-3">
                  <span className="text-xs font-bold text-slate-500">June</span>
                  <div className="h-3 bg-slate-100">
                    <span className={`block h-3 ${statusColors[item.status]}`} style={{ width: currentWidth }} />
                  </div>
                  <span className="text-right text-xs font-bold text-slate-700">{item.currentDisplay}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RevenueRanking({
  ranking,
}: {
  ranking: NonNullable<
    NonNullable<PerformanceChartSet["revenue"]>["rankings"]
  >[number];
}) {
  const maximum = Math.max(
    1,
    ...ranking.periods.flatMap((period) =>
      period.items.map((item) => item.value),
    ),
  );

  return (
    <div className="border-t border-slate-200 pt-7">
      <div className="mb-6">
        <h4 className="text-base font-black text-slate-900">{ranking.title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {ranking.insight}
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {ranking.periods.map((period, periodIndex) => (
          <div key={period.label}>
            <p className="mb-4 text-xs font-black uppercase text-[#183b68]">
              {period.label}
            </p>
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
                      className={`block h-2.5 ${periodIndex === 0 ? "bg-[#8a9aaa]" : "bg-[#16803d]"}`}
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

function RevenueChart({ chart }: { chart: NonNullable<PerformanceChartSet["revenue"]> }) {
  const customerMixLabel = chart.customerMix
    ? chart.customerMix
    .map(
      (item) =>
        `${item.label}: new customers ${item.newCustomerDisplay}; returning customers ${item.returningCustomerDisplay}`,
    )
      .join("; ")
    : "";

  return (
    <div>
      <DivergenceChart
        ariaLabel="Organic revenue May compared with June: gross revenue, orders, and average order value increased, while organic share of all orders decreased."
        series={chart.series}
      />

      {chart.channelContext ? (
        <p className="mt-6 border-l-4 border-[#2f65a7] bg-[#f1f7ff] p-4 text-sm font-bold leading-relaxed text-slate-700">
          {chart.channelContext}
        </p>
      ) : null}

      {chart.customerMix?.length ? (
      <div className="mt-8 border-t border-slate-200 pt-6" role="img" aria-label={customerMixLabel}>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black text-slate-900">Revenue by customer type</p>
            <p className="mt-1 text-xs text-slate-500">New customers increased their share of organic revenue.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 bg-[#16803d]" aria-hidden="true" />
              New customers
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 bg-[#3e71b8]" aria-hidden="true" />
              Returning customers
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {chart.customerMix.map((item) => {
            const gross = item.newCustomerRevenue + item.returningCustomerRevenue;
            const newShare = (item.newCustomerRevenue / gross) * 100;
            const returningShare = 100 - newShare;

            return (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <p className="text-sm font-black text-slate-800">{item.label}</p>
                  <p className="text-xs font-bold text-slate-600">{item.grossDisplay}</p>
                </div>
                <div className="flex h-7 overflow-hidden bg-slate-100">
                  <span
                    className="block h-full bg-[#16803d]"
                    style={{ width: `${newShare}%` }}
                  />
                  <span
                    className="block h-full bg-[#3e71b8]"
                    style={{ width: `${returningShare}%` }}
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4 text-xs font-bold">
                  <p className="text-[#16803d]">
                    {item.newCustomerDisplay} · {newShare.toFixed(1)}%
                  </p>
                  <p className="text-right text-[#2f65a7]">
                    {item.returningCustomerDisplay} · {returningShare.toFixed(1)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ) : null}

      {chart.rankings?.length ? (
        <div className="mt-8 space-y-9">
          {chart.rankings.map((ranking) => (
            <RevenueRanking key={ranking.title} ranking={ranking} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ReportPerformanceCharts({ charts }: { charts: PerformanceChartSet }) {
  return (
    <div>
      {charts.revenue ? (
        <ChartBand number="01" title={charts.revenue.title} insight={charts.revenue.insight}>
          <RevenueChart chart={charts.revenue} />
        </ChartBand>
      ) : null}

      <ChartBand number={charts.revenue ? "02" : "01"} title={charts.growth.title} insight={charts.growth.insight}>
        <GroupedColumnChart
          ariaLabel="May compared with June: organic clicks increased from 7,307 to 8,178; search appearances increased from 285,989 to 354,888."
          series={charts.growth.series}
        />
      </ChartBand>

      <ChartBand number={charts.revenue ? "03" : "02"} title={charts.nonbrand.title} insight={charts.nonbrand.insight}>
        <WaterfallChart chart={charts.nonbrand} />
      </ChartBand>

      <ChartBand number={charts.revenue ? "04" : "03"} title={charts.homepage.title} insight={charts.homepage.insight}>
        <DivergenceChart
          ariaLabel="Homepage May compared with June: search appearances increased, while organic clicks and click rate decreased."
          series={charts.homepage.series}
        />
      </ChartBand>

      <ChartBand number={charts.revenue ? "05" : "04"} title={charts.devices.title} insight={charts.devices.insight}>
        <GroupedColumnChart
          ariaLabel="Device clicks May compared with June: mobile increased from 5,678 to 6,500; all other devices combined increased from 1,629 to 1,678."
          series={charts.devices.series}
        />
      </ChartBand>
    </div>
  );
}
