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
  executiveSummary: string;
  powerLines: PowerLine[];
};

export function ReportExecutive({
  action,
  executiveSummary,
  powerLines,
}: ReportExecutiveProps) {
  return (
    <>
      <section
        className="audit-page story-report-page"
        id="summary"
        aria-labelledby="summary-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Executive summary
        </p>
        <h2 className="audit-section-title" id="summary-title">
          Where we are today
        </h2>

        <p className="mb-0 text-xl font-extrabold leading-relaxed text-slate-900 sm:text-2xl">
          <EditorialText text={executiveSummary} />
        </p>

        <div className="mt-8 border-l-4 border-[#f6b328] bg-[#fef7e8] p-5">
          <p className="mb-1 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
            One action that matters most
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
          Power lines
        </p>
        <h2 className="audit-section-title" id="power-lines-title">
          The meaning behind the metrics
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
