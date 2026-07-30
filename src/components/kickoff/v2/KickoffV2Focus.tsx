import { EditorialText } from "@/components/shared/EditorialText";
import {
  kickoffV2Focus,
  kickoffV2Signals,
} from "@/lib/kickoff/toico-v2";

import { KickoffV2Heading } from "./KickoffV2Heading";

export function KickoffV2Focus() {
  return (
    <section className="kickoff-v2-section" id="focus">
      <KickoffV2Heading
        eyebrow="What we will focus on, and why"
        number="03"
        title="Priorities tied to a visible business outcome."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {kickoffV2Focus.map((item) => (
          <article
            className="rounded-lg border border-[#d7dfe2] bg-white p-6"
            key={item.number}
          >
            <div className="flex items-start gap-4">
              <span className="audit-mono grid h-11 w-11 shrink-0 place-items-center bg-[#051920] text-xs font-black text-[#f6b328]">
                {item.number}
              </span>
              <div>
                <h3 className="text-[20px] font-black leading-tight text-[#051920]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.5] text-[#66747a]">
                  <EditorialText compact text={item.evidence} />
                </p>
              </div>
            </div>
            <div className="mt-5 border-t border-[#dce2e4] pt-4">
              <p className="text-[11px] font-black uppercase text-[#3e71b8]">
                Why
              </p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#34434a]">
                {item.why}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-1 bg-[#051920] lg:grid-cols-3">
        {kickoffV2Signals.map((signal) => (
          <article
            className="border-b border-white/10 px-7 py-8 lg:border-b-0 lg:border-r last:border-0"
            key={signal.label}
          >
            <p className="text-[11px] font-black uppercase text-[#f6b328]">
              {signal.label}
            </p>
            <p className="mt-3 text-[24px] font-black text-white">
              {signal.value}
            </p>
            <p className="mt-3 text-[13px] leading-[1.55] text-white/65">
              {signal.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
