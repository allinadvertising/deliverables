import { EditorialText } from "@/components/shared/EditorialText";
import type { SuiteRoadmapPhase } from "@/lib/reports/pipingnow/types";

type SuiteRoadmapProps = {
  operatingPrinciple?: string;
  phases: SuiteRoadmapPhase[];
};

export function SuiteRoadmap({
  operatingPrinciple,
  phases,
}: SuiteRoadmapProps) {
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3">
        {phases.map((phase) => (
          <article
            className={`audit-card flex min-h-[320px] flex-col p-6 ${
              phase.accent === "gold"
                ? "border-b-[5px] border-b-[#f6b328]"
                : "border-b-[5px] border-b-[#2f65a7]"
            }`}
            key={phase.window}
          >
            <p className="text-xs font-black uppercase tracking-[0.1em] text-[#2f65a7]">
              {phase.window}
            </p>
            <h3 className="mt-3 text-[22px] font-black leading-tight text-slate-900">
              {phase.theme}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              <EditorialText compact text={phase.objective} />
            </p>

            <div className="mt-5 border-l-4 border-[#f6b328] bg-[#fef7e8] p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                Business outcome
              </p>
              <p className="mt-2 text-[13px] font-bold leading-relaxed text-slate-800">
                <EditorialText compact text={phase.businessOutcome} />
              </p>
            </div>

            <div className="mt-auto border-t border-slate-200 pt-5">
              <p className="text-[11px] font-black uppercase tracking-[0.1em] text-slate-500">
                What you get
              </p>
              <p className="mt-2 text-[13px] font-bold leading-relaxed text-slate-800">
                <EditorialText compact text={phase.deliverable} />
              </p>
            </div>
          </article>
        ))}
      </div>

      {operatingPrinciple ? (
        <aside className="mt-6 border-l-4 border-[#f6b328] bg-[#fef7e8] px-6 py-5">
          <p className="text-xs font-black uppercase tracking-[0.1em] text-[#9a6a00]">
            How we work the plan
          </p>
          <p className="mt-2 text-base font-bold leading-relaxed text-slate-900">
            <EditorialText text={operatingPrinciple} />
          </p>
        </aside>
      ) : null}
    </div>
  );
}
