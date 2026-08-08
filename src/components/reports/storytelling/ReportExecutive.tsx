import { EditorialText } from "@/components/shared/EditorialText";
import type { PowerLine } from "@/lib/reports/types";

const statusStyles = {
  positive: {
    border: "border-[#16803d]",
    label: "text-[#16803d]",
  },
  watch: {
    border: "border-[#d4950a]",
    label: "text-[#9a6a00]",
  },
  unavailable: {
    border: "border-slate-300",
    label: "text-slate-500",
  },
};

type ReportExecutiveProps = {
  action: string;
  actionLabel?: string;
  businessObjective?: string;
  executiveSummary: string;
  highlightsEyebrow?: string;
  highlightsTitle?: string;
  objectiveLabel?: string;
  powerLines: PowerLine[];
  summaryEyebrow?: string;
  summaryTitle?: string;
};

export function ReportExecutive({
  action,
  actionLabel = "Next priority",
  businessObjective,
  executiveSummary,
  highlightsEyebrow = "Highlights",
  highlightsTitle = "What mattered this period",
  objectiveLabel = "Business objective",
  powerLines,
  summaryEyebrow = "Executive summary",
  summaryTitle = "Where we are today",
}: ReportExecutiveProps) {
  return (
    <>
      <section
        className="audit-page story-report-page"
        id="summary"
        aria-labelledby="summary-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          {summaryEyebrow}
        </p>
        <h2 className="audit-section-title" id="summary-title">
          {summaryTitle}
        </h2>

        {businessObjective ? (
          <div className="mb-7 border-l-4 border-[#2f65a7] bg-[#f1f7ff] p-5">
            <p className="mb-1 text-xs font-black uppercase tracking-[0.1em] text-[#2f65a7]">
              {objectiveLabel}
            </p>
            <p className="mb-0 text-base font-bold leading-relaxed text-slate-800">
              {businessObjective}
            </p>
          </div>
        ) : null}

        <p className="mb-0 text-xl font-extrabold leading-relaxed text-slate-900 sm:text-2xl">
          <EditorialText text={executiveSummary} />
        </p>

        <div className="mt-8 border-l-4 border-[#f6b328] bg-[#fef7e8] p-5">
          <p className="mb-1 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
            {actionLabel}
          </p>
          <p className="mb-0 text-base font-bold leading-relaxed text-slate-800">
            {action}
          </p>
        </div>
      </section>

      <section
        className="audit-page story-report-page"
        id="power-lines"
        aria-labelledby="power-lines-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          {highlightsEyebrow}
        </p>
        <h2 className="audit-section-title" id="power-lines-title">
          {highlightsTitle}
        </h2>

        <div className="divide-y divide-slate-200">
          {powerLines.map((item) => {
            const styles = statusStyles[item.status];

            return (
              <article
                className={`grid gap-3 border-l-4 py-6 pl-5 first:pt-2 last:pb-2 sm:grid-cols-[150px_1fr] ${styles.border}`}
                key={item.area}
              >
                <h3
                  className={`mb-0 text-xs font-black uppercase tracking-[0.12em] ${styles.label}`}
                >
                  {item.area}
                </h3>
                <p className="mb-0 text-lg font-extrabold leading-relaxed text-slate-900">
                  &ldquo;{item.statement}&rdquo;
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
