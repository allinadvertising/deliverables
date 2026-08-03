import type { CompletedWorkItem } from "@/lib/reports/types";

type ReportCompletedWorkProps = {
  items: CompletedWorkItem[];
};

export function ReportCompletedWork({ items }: ReportCompletedWorkProps) {
  return (
    <section
      className="audit-page story-report-page"
      id="completed-work"
      aria-labelledby="completed-work-title"
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
        Delivery evidence
      </p>
      <h2 className="audit-section-title" id="completed-work-title">
        Work completed this period
      </h2>
      <p className="audit-copy mb-7">
        These deliverables were verified against closed ClickUp tasks and their
        implementation notes.
      </p>

      <div className="border-y border-slate-200">
        <div className="hidden grid-cols-[1.05fr_1.7fr_150px_110px] gap-6 bg-[#183b68] px-5 py-4 text-[11px] font-black uppercase text-white lg:grid">
          <span>Completed work</span>
          <span>Completion evidence</span>
          <span>Owner</span>
          <span>Closed</span>
        </div>

        {items.map((item) => (
          <article
            className="grid gap-5 border-b border-slate-200 px-5 py-6 last:border-b-0 lg:grid-cols-[1.05fr_1.7fr_150px_110px] lg:gap-6"
            key={item.taskUrl}
          >
            <div>
              <p className="mb-2 text-[11px] font-black uppercase text-[#16803d] lg:hidden">
                Completed work
              </p>
              <h3 className="mb-2 text-base font-black leading-snug text-slate-900">
                {item.title}
              </h3>
              <a
                className="audit-no-print text-xs font-bold text-[#2f65a7] underline decoration-[#a8c4e8] underline-offset-4"
                href={item.taskUrl}
                rel="noreferrer"
                target="_blank"
              >
                View ClickUp task
              </a>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-black uppercase text-slate-500 lg:hidden">
                Completion evidence
              </p>
              <p className="mb-0 text-sm leading-relaxed text-slate-600">
                {item.evidence}
              </p>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-black uppercase text-slate-500 lg:hidden">
                Owner
              </p>
              <p className="mb-0 text-sm font-bold text-slate-700">{item.owner}</p>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-black uppercase text-slate-500 lg:hidden">
                Closed
              </p>
              <p className="mb-0 text-sm font-bold text-slate-700">
                {item.completedOn}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
