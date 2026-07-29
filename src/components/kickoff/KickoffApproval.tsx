import { kickoffDecisions, kickoffSources } from "@/lib/kickoff/toico";

export function KickoffApproval() {
  return (
    <>
      <section
        className="audit-page kickoff-page"
        id="approval"
        aria-labelledby="approval-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Client and team alignment
        </p>
        <h2 className="audit-section-title" id="approval-title">
          What we need to leave kickoff with
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
          <ol className="space-y-4">
            {kickoffDecisions.map((decision, index) => (
              <li
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                key={decision.label}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center bg-[#183b68] text-sm font-black text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-extrabold text-slate-900">
                    {decision.label}
                  </h3>
                  <p className="mb-0 text-sm leading-relaxed text-slate-600">
                    {decision.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="bg-[#183b68] p-6 text-white">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#f6b328]">
              Working agreement
            </p>
            <h3 className="mb-5 text-xl font-black leading-snug">
              Every monthly cycle follows the same approval gate.
            </h3>
            <ol className="space-y-4 text-sm leading-relaxed text-white/80">
              <li className="grid grid-cols-[26px_1fr] gap-3">
                <span className="font-black text-[#f6b328]">01</span>
                <span>Strategy and tasks are prepared with context and evidence.</span>
              </li>
              <li className="grid grid-cols-[26px_1fr] gap-3">
                <span className="font-black text-[#f6b328]">02</span>
                <span>Account and client stakeholders approve scope before execution.</span>
              </li>
              <li className="grid grid-cols-[26px_1fr] gap-3">
                <span className="font-black text-[#f6b328]">03</span>
                <span>Completed work is validated and reported against the baseline.</span>
              </li>
              <li className="grid grid-cols-[26px_1fr] gap-3">
                <span className="font-black text-[#f6b328]">04</span>
                <span>The next month is approved with an updated rolling roadmap.</span>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section
        className="audit-page kickoff-page"
        id="sources"
        aria-labelledby="sources-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Supporting evidence
        </p>
        <h2 className="audit-section-title" id="sources-title">
          Source deliverables
        </h2>
        <p className="audit-copy mb-7">
          This kickoff mockup synthesizes the July 2026 audit evidence and
          roadmap. The source deliverables remain the detailed record for issue
          counts, URL examples, and implementation notes.
        </p>

        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {kickoffSources.map((source) => (
            <li
              className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-center"
              key={source.href}
            >
              <div>
                <h3 className="mb-1 text-base font-extrabold text-slate-900">
                  {source.label}
                </h3>
                <p className="mb-0 text-sm leading-relaxed text-slate-500">
                  {source.detail}
                </p>
              </div>
              <a
                className="inline-flex w-fit items-center border-b-2 border-[#f6b328] py-1 text-sm font-black text-[#183b68] no-underline hover:text-[#2f65a7] focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2"
                href={source.href}
                rel="noreferrer"
                target="_blank"
              >
                Open source
                <span aria-hidden="true" className="ml-2">
                  {"\u2197"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
