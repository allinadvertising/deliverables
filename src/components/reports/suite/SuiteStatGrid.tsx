import type { SuiteStat } from "@/lib/reports/pipingnow/types";

const sentimentStyles = {
  negative: {
    accent: "border-t-[#c75a12]",
    detail: "text-[#c75a12]",
  },
  neutral: {
    accent: "border-t-[#2f65a7]",
    detail: "text-slate-500",
  },
  positive: {
    accent: "border-t-[#16803d]",
    detail: "text-[#16803d]",
  },
};

type SuiteStatGridProps = {
  columns?: 2 | 3 | 4;
  stats: SuiteStat[];
};

export function SuiteStatGrid({ columns = 4, stats }: SuiteStatGridProps) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {stats.map((stat) => {
        const styles = sentimentStyles[stat.sentiment ?? "neutral"];

        return (
          <article
            className={`border-t-4 bg-[#f7faff] p-5 ${styles.accent}`}
            key={stat.label}
          >
            <p className="text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
              {stat.label}
            </p>
            <p className="mt-2 text-[30px] font-black leading-none tracking-[-0.02em] text-[#0f172a]">
              {stat.value}
            </p>
            {stat.detail ? (
              <p className={`mt-2 text-sm font-black ${styles.detail}`}>
                {stat.detail}
              </p>
            ) : null}
            {stat.context ? (
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {stat.context}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
