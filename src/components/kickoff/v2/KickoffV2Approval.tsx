import { EditorialText } from "@/components/shared/EditorialText";
import {
  kickoffV2Decisions,
  kickoffV2Gates,
} from "@/lib/kickoff/toico-v2";

import { KickoffV2Heading } from "./KickoffV2Heading";

export function KickoffV2Approval() {
  return (
    <section className="kickoff-v2-section" id="approval">
      <KickoffV2Heading
        eyebrow="Approval gates and operating cadence"
        number="05"
        title="Every phase closes with a decision and evidence."
      />

      <div className="divide-y divide-[#d9e0e3] border-y border-[#d9e0e3]">
        {kickoffV2Gates.map((gate) => (
          <article
            className="grid gap-4 py-6 md:grid-cols-[150px_1fr]"
            key={gate.timing}
          >
            <div>
              <p className="audit-mono text-[12px] font-black uppercase text-[#3e71b8]">
                {gate.timing}
              </p>
              <p className="mt-1 text-[10px] font-black uppercase text-[#8a969b]">
                {gate.label}
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-black leading-tight text-[#051920]">
                <EditorialText compact text={gate.title} />
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#65737a]">
                <EditorialText compact text={gate.detail} />
              </p>
            </div>
          </article>
        ))}
      </div>

      <aside className="mt-10 bg-[#051920] px-7 py-8 text-white">
        <p className="text-[11px] font-black uppercase text-[#f6b328]">
          What we need to begin
        </p>
        <div className="mt-6 grid gap-7 lg:grid-cols-3">
          {kickoffV2Decisions.map((decision, index) => (
            <article key={decision.label}>
              <span className="audit-mono text-xs font-black text-[#f6b328]">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-[17px] font-black leading-tight text-white">
                {decision.label}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.55] text-white/65">
                {decision.detail}
              </p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
