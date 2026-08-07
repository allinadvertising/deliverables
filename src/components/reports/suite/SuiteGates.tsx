import { EditorialText } from "@/components/shared/EditorialText";
import type { SuiteDecision, SuiteGate } from "@/lib/reports/pipingnow/types";

type SuiteGatesProps = {
  decisions?: SuiteDecision[];
  decisionsTitle?: string;
  gates: SuiteGate[];
};

export function SuiteGates({
  decisions = [],
  decisionsTitle = "What we need from you to start",
  gates,
}: SuiteGatesProps) {
  return (
    <div>
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {gates.map((gate) => (
          <article
            className="grid gap-4 py-6 md:grid-cols-[170px_1fr]"
            key={gate.title}
          >
            <div>
              <p className="audit-mono text-xs font-black uppercase tracking-[0.06em] text-[#2f65a7]">
                {gate.timing}
              </p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-400">
                {gate.label}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black leading-tight text-slate-900">
                <EditorialText compact text={gate.title} />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <EditorialText compact text={gate.detail} />
              </p>
            </div>
          </article>
        ))}
      </div>

      {decisions.length ? (
        <aside className="mt-9 bg-[#183b68] px-7 py-8 text-white">
          <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#f6b328]">
            {decisionsTitle}
          </p>
          <div className="mt-6 grid gap-7 lg:grid-cols-3">
            {decisions.map((decision, index) => (
              <article key={decision.label}>
                <span
                  aria-hidden="true"
                  className="audit-mono text-xs font-black text-[#f6b328]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[17px] font-black leading-tight text-white">
                  {decision.label}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-white/70">
                  {decision.detail}
                </p>
              </article>
            ))}
          </div>
        </aside>
      ) : null}
    </div>
  );
}
