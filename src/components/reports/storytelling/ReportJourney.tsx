import type { JourneyWorkstream } from "@/lib/reports/types";

const journeySteps = [
  { key: "started", label: "Where we started" },
  { key: "work", label: "What we did" },
  { key: "result", label: "What happened" },
  { key: "next", label: "What's next" },
] as const;

const businessJourneySteps = [
  { key: "started", label: "What we saw" },
  { key: "work", label: "What we did" },
  { key: "result", label: "Business result" },
  { key: "next", label: "What needs attention next" },
] as const;

type ReportJourneyProps = {
  journeyWorkstreams: JourneyWorkstream[];
};

export function ReportJourney({ journeyWorkstreams }: ReportJourneyProps) {
  return (
    <section
      className="audit-page story-report-page"
      id="journey"
      aria-labelledby="journey-title"
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
        The journey
      </p>
      <h2 className="audit-section-title" id="journey-title">
        Progress by workstream
      </h2>

      <div className="space-y-6">
        {journeyWorkstreams.map((workstream, workstreamIndex) => (
          <article
            className="audit-card grid gap-6 p-6 lg:grid-cols-[180px_1fr]"
            key={workstream.name}
          >
            <div>
              <span
                className="mb-3 flex h-9 w-9 items-center justify-center bg-[#183b68] text-xs font-black text-white"
                aria-hidden="true"
              >
                {String(workstreamIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-0 text-xl font-black leading-tight text-slate-900">
                {workstream.name}
              </h3>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              {workstream.businessPriority ? (
                <div className="border-l-4 border-[#2f65a7] bg-[#f1f7ff] p-4 sm:col-span-2">
                  <dt className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-[#2f65a7]">
                    Business priority
                  </dt>
                  <dd className="mb-0 text-sm font-bold leading-relaxed text-slate-800">
                    {workstream.businessPriority}
                  </dd>
                </div>
              ) : null}
              {(workstream.businessPriority
                ? businessJourneySteps
                : journeySteps
              ).map((step) => (
                <div
                  className={
                    step.key === "next"
                      ? "border-l-4 border-[#f6b328] bg-[#fef7e8] p-4"
                      : "border-l-4 border-slate-200 p-4"
                  }
                  key={step.key}
                >
                  <dt className="mb-1 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
                    {step.label}
                  </dt>
                  <dd className="mb-0 text-sm font-semibold leading-relaxed text-slate-700">
                    {workstream[step.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
