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
        eyebrow="Strategy for the next three months"
        number="02"
        title="One dependency-led roadmap, delivered in three phases."
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
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs font-black uppercase text-[#3e71b8]">
                {phase.month}
              </p>
              <p className="audit-mono text-sm font-black text-[#051920]">
                {phase.hours}h
              </p>
            </div>
            <h3 className="mt-4 text-[22px] font-black leading-tight text-[#051920]">
              {phase.theme}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.55] text-[#607078]">
              <EditorialText compact text={phase.objective} />
            </p>
            <div className="mt-auto pt-6">
              <div className="h-1.5 overflow-hidden bg-[#e3e8ea]">
                <div
                  className={
                    phase.accent === "gold"
                      ? "h-full bg-[#f6b328]"
                      : "h-full bg-[#3e71b8]"
                  }
                  style={{ width: phase.share }}
                />
              </div>
              <p className="mt-2 text-[11px] font-bold uppercase text-[#6a777d]">
                {phase.share} of the 90-day plan
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

      <div className="relative mt-12 grid gap-7 lg:grid-cols-3">
        <span
          aria-hidden="true"
          className="absolute left-[16.6%] right-[16.6%] top-3 hidden h-px bg-[#b7c2c6] lg:block"
        />
        {kickoffV2Phases.map((phase, index) => (
          <article className="relative" key={phase.month}>
            <span
              aria-hidden="true"
              className={`relative z-10 block h-6 w-6 rounded-full border-[6px] border-[#f0f2f3] ${
                index === 1 ? "bg-[#f6b328]" : "bg-[#3e71b8]"
              }`}
            />
            <p className="mt-4 text-xs font-black uppercase text-[#3e71b8]">
              {phase.month} · {phase.hours} hours
            </p>
            <h3 className="mt-2 text-[19px] font-black text-[#051920]">
              {phase.theme}
            </h3>
            <ul className="mt-3 space-y-2 text-[13px] leading-[1.5] text-[#5c6a70]">
              {phase.work.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span aria-hidden="true" className="text-[#f6b328]">
                    ■
                  </span>
                  <span>
                    <EditorialText compact text={item} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
