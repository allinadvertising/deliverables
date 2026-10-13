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

        {/* The summary is written as blocks separated by blank lines. A block whose lines all
            start with "- " renders as a list, so a month can be read in six seconds; anything
            else renders as a paragraph, the first one at full size because it carries the
            verdict. Summaries written as a single block are unaffected. */}
        {executiveSummary
          .split(/\n\s*\n/)
          .map((block) => block.trim())
          .filter(Boolean)
          .map((block, index) => {
            const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
            const isList = lines.length > 1 && lines.every((line) => line.startsWith("- "));

            if (isList) {
              return (
                <ul
                  className="mb-5 list-disc space-y-2 pl-5 marker:text-slate-400 last:mb-0"
                  key={block.slice(0, 40)}
                >
                  {lines.map((line) => {
                    const text = line.replace(/^-\s+/, "");
                    // "Label: the point" keeps the label inline and bold. The point is to let the
                    // eye find revenue or rankings, not to decorate the page.
                    const labelled = /^([^:]{2,32}):\s+([\s\S]+)$/.exec(text);

                    return (
                      <li
                        className="pl-1 text-lg font-medium leading-relaxed text-slate-800"
                        key={line.slice(0, 40)}
                      >
                        {labelled ? (
                          <>
                            <span className="font-extrabold text-slate-900">{labelled[1]}.</span>{" "}
                            <EditorialText text={labelled[2]} />
                          </>
                        ) : (
                          <EditorialText text={text} />
                        )}
                      </li>
                    );
                  })}
                </ul>
              );
            }

            return (
              <p
                className={
                  index === 0
                    ? "mb-5 text-xl font-extrabold leading-relaxed text-slate-900 sm:text-2xl"
                    : "mb-5 text-lg font-bold leading-relaxed text-slate-800 last:mb-0"
                }
                key={block.slice(0, 40)}
              >
                <EditorialText text={block} />
              </p>
            );
          })}

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
