import { monthOneTasks, roadmapMonths } from "@/lib/kickoff/toico";

export function KickoffRoadmap() {
  return (
    <>
      <section
        className="audit-page kickoff-page"
        id="roadmap"
        aria-labelledby="roadmap-title"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
          Execution sequence
        </p>
        <h2 className="audit-section-title" id="roadmap-title">
          The first 90 days
        </h2>
        <p className="audit-copy mb-8 max-w-4xl">
          Each month creates the input for the next. The plan begins with
          sitewide corrections, moves into discovery and internal linking, and
          then applies those stronger foundations to differentiated content and
          growth opportunities.
        </p>

        <div className="grid gap-5 lg:grid-cols-3">
          {roadmapMonths.map((month, index) => (
            <article
              className="audit-card flex h-full flex-col border-t-4 border-t-[#2f65a7] p-6"
              key={month.month}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
                    {month.month}
                  </p>
                  <h3 className="mb-0 text-xl font-black leading-tight text-slate-900">
                    {month.theme}
                  </h3>
                </div>
                <span className="shrink-0 bg-[#eaf2fb] px-3 py-1 text-sm font-black text-[#183b68]">
                  {month.hours}h
                </span>
              </div>

              <p className="mb-5 text-sm font-semibold leading-relaxed text-slate-700">
                {month.objective}
              </p>

              <ol className="mb-6 space-y-4">
                {month.work.map((item, workIndex) => (
                  <li
                    className="grid grid-cols-[24px_1fr] gap-3 text-sm leading-relaxed text-slate-600"
                    key={item}
                  >
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#183b68] text-[10px] font-black text-white"
                      aria-hidden="true"
                    >
                      {workIndex + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-auto border-t border-slate-200 pt-4">
                <p className="mb-1 text-xs font-black uppercase tracking-[0.1em] text-[#16803d]">
                  Month-end deliverable
                </p>
                <p className="mb-0 text-sm leading-relaxed text-slate-600">
                  {month.deliverable}
                </p>
              </div>

              {index < roadmapMonths.length - 1 ? (
                <span className="sr-only">Followed by the next month</span>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section
        className="audit-page kickoff-page"
        id="month-one"
        aria-labelledby="month-one-title"
      >
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#2f65a7]">
              Scope confirmation
            </p>
            <h2 className="mb-0 text-3xl font-black leading-tight text-slate-950" id="month-one-title">
              Month 1: technical foundation
            </h2>
          </div>
          <div className="min-w-32 border-l-4 border-[#f6b328] pl-4">
            <p className="mb-0 text-3xl font-black leading-none text-[#183b68]">
              29 hours
            </p>
            <p className="mb-0 mt-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
              Planned effort
            </p>
          </div>
        </div>

        <div className="mt-7 overflow-x-auto">
          <table className="audit-table mt-0 min-w-[760px]">
            <thead>
              <tr>
                <th scope="col">Work package</th>
                <th scope="col">Owner</th>
                <th scope="col">Estimate</th>
                <th scope="col">Definition of done</th>
              </tr>
            </thead>
            <tbody>
              {monthOneTasks.map((task) => (
                <tr key={task.task}>
                  <td className="font-extrabold text-slate-900">{task.task}</td>
                  <td>{task.owner}</td>
                  <td>
                    <span className="font-black text-[#183b68]">{task.estimate}</span>
                  </td>
                  <td>{task.doneWhen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          <div className="border-l-4 border-[#16803d] bg-[#edf9f1] p-5">
            <h3 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-[#16803d]">
              Validation
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-slate-700">
              Re-crawl the homepage, product, category, brand, and blog
              templates. Compare heading, malformed URL, and sitemap signals
              against the July 2026 baseline before closing the month.
            </p>
          </div>
          <div className="border-l-4 border-[#f6b328] bg-[#fef7e8] p-5">
            <h3 className="mb-2 text-sm font-black uppercase tracking-[0.1em] text-[#9a6a00]">
              Scope boundary
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-slate-700">
              Month 1 does not attempt to rewrite 1,163 pages. It removes shared
              causes, confirms clean templates, and prepares the ranked queues
              used for content and internal-link decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
