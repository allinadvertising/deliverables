import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

import { KickoffV2Heading } from "./KickoffV2Heading";

type KickoffV2SummaryProps = {
  summary: KickoffV2Data["summary"];
};

export function KickoffV2Summary({ summary }: KickoffV2SummaryProps) {
  return (
    <section className="kickoff-v2-section" id="summary">
      <KickoffV2Heading
        eyebrow="Summary"
        number="01"
        title={summary.title}
      />

      <div className="max-w-4xl">
        <div>
          <div className="mb-6 border-l-4 border-[#f6b328] bg-[#fff9eb] p-5">
            <p className="text-[11px] font-black uppercase text-[#855900]">
              {summary.objectiveLabel}
            </p>
            <p className="mt-2 text-[15px] font-bold leading-[1.55] text-[#26373e]">
              {summary.objective}
            </p>
          </div>
          <p className="text-[18px] leading-[1.65] text-[#526068]">
            {summary.lead}
          </p>
          <p className="mt-5 text-[18px] font-bold leading-[1.6] text-[#051920]">
            {summary.emphasis}
          </p>
        </div>
      </div>
    </section>
  );
}
