import { EditorialText } from "@/components/shared/EditorialText";
import {
  kickoffV2BusinessObjective,
  kickoffV2Metrics,
} from "@/lib/kickoff/toico-v2";

import { KickoffV2Heading } from "./KickoffV2Heading";

export function KickoffV2Summary() {
  return (
    <section className="kickoff-v2-section" id="summary">
      <KickoffV2Heading
        eyebrow="Summary"
        number="01"
        title="What changes first"
      />

      <div className="grid items-start gap-9 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 border-l-4 border-[#f6b328] bg-[#fff9eb] p-5">
            <p className="text-[11px] font-black uppercase text-[#855900]">
              Business objective
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

        <div className="grid gap-4 sm:grid-cols-2">
          {kickoffV2Metrics.map((metric, index) => (
            <article
              className={`rounded-lg border border-[#d8dfe2] bg-[#f0f2f3] p-5 ${
                index % 2 === 0
                  ? "border-t-[3px] border-t-[#3e71b8]"
                  : "border-t-[3px] border-t-[#f6b328]"
              }`}
              key={metric.label}
            >
              <p className="text-[30px] font-black leading-none text-[#051920]">
                <EditorialText compact text={metric.value} />
              </p>
              <h3 className="mt-3 text-[13px] font-black uppercase leading-snug text-[#34434a]">
                {metric.label}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.45] text-[#66747a]">
                <EditorialText compact text={metric.note} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
