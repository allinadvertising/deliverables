import { EditorialText } from "@/components/shared/EditorialText";
import { kickoffV2Phases } from "@/lib/kickoff/toico-v2";

import { KickoffV2Heading } from "./KickoffV2Heading";

export function KickoffV2Strategy() {
  return (
    <section
      className="kickoff-v2-section bg-[#f0f2f3]"
      id="strategy"
    >
      <KickoffV2Heading
        eyebrow="Executive roadmap"
        number="02"
        title="3 Month Roadmap"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {kickoffV2Phases.map((phase) => (
          <article
            className={`flex min-h-[310px] flex-col rounded-lg border border-[#d4dcdf] bg-white p-6 ${
              phase.accent === "gold"
                ? "border-b-[5px] border-b-[#f6b328]"
                : "border-b-[5px] border-b-[#3e71b8]"
            }`}
            key={phase.month}
          >
            <p className="text-xs font-black uppercase text-[#3e71b8]">
              {phase.month}
            </p>
            <h3 className="mt-4 text-[22px] font-black leading-tight text-[#051920]">
              {phase.theme}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.55] text-[#607078]">
              <EditorialText compact text={phase.objective} />
            </p>
            <div className="mt-auto border-t border-[#d9e0e3] pt-5">
              <p className="text-[11px] font-black uppercase text-[#6a777d]">
                Phase outcome
              </p>
              <p className="mt-2 text-[13px] font-bold leading-[1.5] text-[#26373e]">
                <EditorialText compact text={phase.deliverable} />
              </p>
            </div>
          </article>
        ))}
      </div>

      <aside className="mt-6 border-l-4 border-[#f6b328] bg-white px-6 py-5">
        <p className="text-xs font-black uppercase text-[#8a5d00]">
          Operating principle
        </p>
        <p className="mt-2 text-[16px] font-bold leading-relaxed text-[#051920]">
          Fix shared technical defects before committing effort to page-level
          rewrites.
        </p>
      </aside>

    </section>
  );
}
