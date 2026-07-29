import {
  kickoffFindings,
  kickoffMetrics,
  kickoffOutcomes,
} from "@/lib/kickoff/toico";

export function KickoffOverview() {
  return (
    <>
      <section
        className="audit-page kickoff-page"
        id="strategy"
        aria-labelledby="strategy-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Executive alignment
        </p>
        <h2 className="audit-section-title" id="strategy-title">
          The strategy in one view
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-4 text-xl font-bold leading-relaxed text-slate-900">
              Fix shared technical defects first, restore discoverability second,
              then invest in differentiated commercial content.
            </p>
            <p className="audit-copy mb-0">
              The audits show that a small number of platform-level issues are
              creating thousands of page-level symptoms. Month 1 concentrates on
              those shared causes so Months 2 and 3 can improve internal linking,
              content quality, and search demand without building on noisy
              foundations.
            </p>
          </div>

          <aside className="border-l-4 border-[#f6b328] bg-[#fef7e8] p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
              Kickoff decision
            </p>
            <p className="mb-0 text-base font-bold leading-relaxed text-slate-800">
              Approve the 29-hour Month 1 technical package and confirm who owns
              the Stencil production release.
            </p>
          </aside>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {kickoffMetrics.map((metric) => (
            <article
              className="audit-card border-t-4 border-t-[#2f65a7] p-4"
              key={metric.label}
            >
              <p className="mb-1 text-3xl font-black leading-none text-[#183b68]">
                {metric.value}
              </p>
              <h3 className="mb-2 text-sm font-extrabold leading-snug text-slate-900">
                {metric.label}
              </h3>
              <p className="mb-0 text-xs leading-relaxed text-slate-500">
                {metric.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="audit-page kickoff-page"
        id="findings"
        aria-labelledby="findings-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Audit synthesis
        </p>
        <h2 className="audit-section-title" id="findings-title">
          What we learned
        </h2>

        <div className="divide-y divide-slate-200">
          {kickoffFindings.map((finding, index) => (
            <article
              className="grid gap-4 py-7 first:pt-0 last:pb-0 lg:grid-cols-[48px_1fr_1fr]"
              key={finding.title}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#183b68] text-sm font-black text-white"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="mb-3 text-xl font-extrabold leading-snug text-slate-900">
                  {finding.title}
                </h3>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.1em] text-slate-500">
                  Evidence
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {finding.evidence}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                    Why it matters
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-slate-600">
                    {finding.whyItMatters}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.1em] text-[#16803d]">
                    Strategic response
                  </p>
                  <p className="mb-0 text-sm leading-relaxed text-slate-600">
                    {finding.response}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="audit-page kickoff-page"
        id="outcomes"
        aria-labelledby="outcomes-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          90-day north star
        </p>
        <h2 className="audit-section-title" id="outcomes-title">
          What success should look like
        </h2>

        <ol className="grid gap-4 sm:grid-cols-2">
          {kickoffOutcomes.map((outcome, index) => (
            <li
              className="flex min-h-28 gap-4 border-l-4 border-[#2f65a7] bg-[#f7faff] p-5"
              key={outcome}
            >
              <span
                className="text-2xl font-black leading-none text-[#f6b328]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-bold leading-relaxed text-slate-800">
                {outcome}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
