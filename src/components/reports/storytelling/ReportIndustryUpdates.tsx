import type { IndustryUpdate } from "@/lib/reports/types";

type ReportIndustryUpdatesProps = {
  updates: IndustryUpdate[];
};

export function ReportIndustryUpdates({
  updates,
}: ReportIndustryUpdatesProps) {
  return (
    <section
      className="audit-page story-report-page"
      id="industry-updates"
      aria-labelledby="industry-updates-title"
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
        Industry updates
      </p>
      <h2 className="audit-section-title" id="industry-updates-title">
        Changes affecting organic search
      </h2>
      <p className="audit-copy mb-7">
        Recent Google changes that may affect performance interpretation or
        future SEO priorities.
      </p>

      <div className="border-y border-slate-200">
        {updates.map((update) => (
          <article
            className="grid gap-4 border-b border-slate-200 py-6 last:border-b-0 lg:grid-cols-[150px_1fr] lg:gap-8"
            key={update.title}
          >
            <p className="mb-0 text-xs font-black uppercase text-[#2f65a7]">
              {update.date}
            </p>
            <div>
              <h3 className="mb-2 text-lg font-black text-slate-900">
                {update.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-slate-600">
                {update.summary}
              </p>
              <p className="mb-3 text-sm font-bold leading-relaxed text-slate-800">
                Snowie impact: {update.impact}
              </p>
              <a
                className="audit-no-print text-xs font-bold text-[#2f65a7] underline decoration-[#a8c4e8] underline-offset-4"
                href={update.sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                {update.sourceLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
