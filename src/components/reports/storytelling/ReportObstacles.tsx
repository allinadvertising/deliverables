import type { Obstacle } from "@/lib/reports/types";

type ReportObstaclesProps = {
  obstacles: Obstacle[];
};

export function ReportObstacles({ obstacles }: ReportObstaclesProps) {
  return (
    <section
      className="audit-page story-report-page"
      id="obstacles"
      aria-labelledby="obstacles-title"
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
        Obstacles and remediation
      </p>
      <h2 className="audit-section-title" id="obstacles-title">
        What Needs Attention Next?
      </h2>

      <div className="space-y-5">
        {obstacles.map((item, index) => (
          <article
            className="audit-card overflow-hidden"
            key={item.obstacle}
          >
            <div className="grid gap-4 bg-[#183b68] p-5 text-white sm:grid-cols-[48px_1fr]">
              <span
                className="flex h-10 w-10 items-center justify-center border border-white/25 text-xs font-black text-[#f6b328]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#f6b328]">
                  Obstacle
                </p>
                <h3 className="mb-0 text-lg font-extrabold leading-relaxed text-white">
                  {item.obstacle}
                </h3>
              </div>
            </div>

            <dl className="grid gap-px bg-slate-200 sm:grid-cols-3">
              <div className="bg-white p-5">
                <dt className="mb-2 text-[11px] font-black uppercase tracking-[0.1em] text-[#c75a12]">
                  Impact
                </dt>
                <dd className="mb-0 text-sm leading-relaxed text-slate-600">
                  {item.impact}
                </dd>
              </div>
              <div className="bg-white p-5">
                <dt className="mb-2 text-[11px] font-black uppercase tracking-[0.1em] text-[#16803d]">
                  Remediation
                </dt>
                <dd className="mb-0 text-sm leading-relaxed text-slate-600">
                  {item.remediation}
                </dd>
              </div>
              <div className="bg-white p-5">
                <dt className="mb-2 text-[11px] font-black uppercase tracking-[0.1em] text-[#2f65a7]">
                  ETA to recovery
                </dt>
                <dd className="mb-0 text-sm font-semibold leading-relaxed text-slate-700">
                  {item.eta}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
