import type { TechnicalItem } from "@/lib/reports/types";

type ReportAppendixProps = {
  dataNotes: string[];
  technicalItems: TechnicalItem[];
};

export function ReportAppendix({
  dataNotes,
  technicalItems,
}: ReportAppendixProps) {
  return (
    <>
      <section
        className="audit-page story-report-page"
        id="appendix"
        aria-labelledby="appendix-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Technical appendix
        </p>
        <h2 className="audit-section-title" id="appendix-title">
          Technical detail, in plain language
        </h2>

        <div className="divide-y divide-slate-200">
          {technicalItems.map((item, index) => (
            <article
              className="grid gap-4 py-6 first:pt-0 last:pb-0 lg:grid-cols-[48px_1fr_1fr_1fr]"
              key={item.issue}
            >
              <span
                className="flex h-9 w-9 items-center justify-center bg-slate-100 text-xs font-black text-[#183b68]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#c75a12]">
                  Issue
                </p>
                <p className="mb-0 text-sm font-semibold leading-relaxed text-slate-700">
                  {item.issue}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                  Why it matters
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {item.why}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#16803d]">
                  Fix applied or planned
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {item.fix}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="audit-page story-report-page"
        id="data-notes"
        aria-labelledby="data-notes-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Data notes
        </p>
        <h2 className="audit-section-title" id="data-notes-title">
          Scope and limitations
        </h2>

        <ul className="space-y-3">
          {dataNotes.map((note) => (
            <li
              className="grid grid-cols-[12px_1fr] gap-3 text-sm leading-relaxed text-slate-600"
              key={note}
            >
              <span
                className="mt-2 h-2 w-2 rounded-full bg-[#2f65a7]"
                aria-hidden="true"
              />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
