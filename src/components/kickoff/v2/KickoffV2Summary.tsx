import { kickoffV2BusinessObjective } from "@/lib/kickoff/toico-v2";

import { KickoffV2Heading } from "./KickoffV2Heading";

export function KickoffV2Summary() {
  return (
    <section className="kickoff-v2-section" id="summary">
      <KickoffV2Heading
        eyebrow="Summary"
        number="01"
        title="What changes first"
      />

      <div className="max-w-4xl">
        <div>
          <div className="mb-6 border-l-4 border-[#f6b328] bg-[#fff9eb] p-5">
            <p className="text-[11px] font-black uppercase text-[#855900]">
              Illustrative business objective
            </p>
            <p className="mt-2 text-[15px] font-bold leading-[1.55] text-[#26373e]">
              {kickoffV2BusinessObjective}
            </p>
          </div>
          <p className="text-[18px] leading-[1.65] text-[#526068]">
            TOICO&apos;s strongest near-term SEO gains will not come from
            rewriting pages one by one. The audit points to shared technical
            defects that weaken thousands of URLs at once, followed by a clear
            discoverability queue and a focused content opportunity.
          </p>
          <p className="mt-5 text-[18px] font-bold leading-[1.6] text-[#051920]">
            The sequence is deliberate: correct the foundation, restore access
            to valuable inventory, then invest in differentiated commercial
            content.
          </p>
        </div>
      </div>
    </section>
  );
}
