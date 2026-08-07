import type { TechnicalItem, TechnicalLabels } from "@/lib/reports/types";

const defaultTechnicalLabels: TechnicalLabels = {
  fix: "Fix applied or planned",
  issue: "Issue",
  why: "Why it matters",
};

type ReportAppendixProps = {
  dataNotes: string[];
  dataNotesEyebrow?: string;
  dataNotesTitle?: string;
  technicalEyebrow?: string;
  technicalItems: TechnicalItem[];
  technicalLabels?: TechnicalLabels;
  technicalTitle?: string;
};

export function ReportAppendix({
  dataNotes,
  dataNotesEyebrow = "Data notes",
  dataNotesTitle = "Scope and limitations",
  technicalEyebrow = "Site health review",
  technicalItems,
  technicalLabels = defaultTechnicalLabels,
  technicalTitle = "Technical detail, in plain language",
}: ReportAppendixProps) {
  return (
    <>
      <section
        className="audit-page story-report-page"
        id="appendix"
        aria-labelledby="appendix-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          {technicalEyebrow}
        </p>
        <h2 className="audit-section-title" id="appendix-title">
          {technicalTitle}
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
                  {technicalLabels.issue}
                </p>
                <p className="mb-0 text-sm font-semibold leading-relaxed text-slate-700">
                  {item.issue}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                  {technicalLabels.why}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {item.why}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#16803d]">
                  {technicalLabels.fix}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {item.fix}
                </p>
              </div>
              {item.developerNote ? (
                <div className="border-t border-slate-200 pt-4 lg:col-span-3 lg:col-start-2">
                  <p className="mb-1 text-[11px] font-black uppercase text-slate-400">
                    Implementation detail
                  </p>
                  <p className="mb-0 text-xs leading-relaxed text-slate-500">
                    {item.developerNote}
                  </p>
                </div>
              ) : null}
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
          {dataNotesEyebrow}
        </p>
        <h2 className="audit-section-title" id="data-notes-title">
          {dataNotesTitle}
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
