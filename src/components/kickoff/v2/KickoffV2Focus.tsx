import { EditorialText } from "@/components/shared/EditorialText";
import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

import { KickoffV2Heading } from "./KickoffV2Heading";

type KickoffV2FocusProps = {
  focus: KickoffV2Data["focus"];
};

export function KickoffV2Focus({ focus }: KickoffV2FocusProps) {
  return (
    <section className="kickoff-v2-section" id="focus">
      <KickoffV2Heading
        eyebrow="Recommended priorities"
        number="03"
        title={focus.title}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {focus.items.map((item) => (
          <article
            className="rounded-lg border border-[#d7dfe2] bg-white p-6"
            key={item.number}
          >
            <div className="flex items-start gap-4">
              <span className="audit-mono grid h-11 w-11 shrink-0 place-items-center bg-[#051920] text-xs font-black text-[#f6b328]">
                {item.number}
              </span>
              <div>
                <p className="mb-2 text-[10px] font-black uppercase text-[#855900]">
                  {item.status}
                </p>
                <h3 className="text-[20px] font-black leading-tight text-[#051920]">
                  {item.title}
                </h3>
                <p className="mt-3 border-l-4 border-[#3e71b8] bg-[#f1f7ff] p-3 text-[13px] font-bold leading-[1.5] text-[#26373e]">
                  <EditorialText compact text={item.businessObjective} />
                </p>
                <p className="mt-2 text-[11px] font-black uppercase text-[#3e71b8]">
                  Evidence
                </p>
                <dl className="mt-2 grid gap-px bg-[#dce2e4] sm:grid-cols-2">
                  <div className="bg-[#f7f9fa] p-3">
                    <dt className="text-[10px] font-black uppercase text-[#758187]">
                      {focus.volumeLabel}
                    </dt>
                    <dd className="mt-1 text-[13px] font-black text-[#051920]">
                      {item.volume}
                    </dd>
                  </div>
                  <div className="bg-[#f7f9fa] p-3">
                    <dt className="text-[10px] font-black uppercase text-[#758187]">
                      {focus.scopeLabel}
                    </dt>
                    <dd className="mt-1 text-[13px] font-black text-[#051920]">
                      {item.scopeImpact}
                    </dd>
                  </div>
                </dl>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#66747a]">
                  <EditorialText compact text={item.evidence} />
                </p>
              </div>
            </div>
            <div className="mt-5 border-t border-[#dce2e4] pt-4">
              <p className="text-[11px] font-black uppercase text-[#3e71b8]">
                Recommended action
              </p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#34434a]">
                <EditorialText compact text={item.recommendedAction} />
              </p>
            </div>
            <div className="mt-4 border-l-4 border-[#f6b328] bg-[#fff9eb] p-4">
              <p className="text-[11px] font-black uppercase text-[#855900]">
                Expected business impact
              </p>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#34434a]">
                <EditorialText compact text={item.expectedImpact} />
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-5 text-[11px] leading-[1.5] text-[#758187]">
        {focus.footnote}
      </p>

    </section>
  );
}
