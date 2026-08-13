import { EditorialText } from "@/components/shared/EditorialText";
import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

import { KickoffV2Heading } from "./KickoffV2Heading";

type KickoffV2ExecutionProps = {
  execution: KickoffV2Data["execution"];
};

export function KickoffV2Execution({ execution }: KickoffV2ExecutionProps) {
  return (
    <section
      className="kickoff-v2-section bg-[#f0f2f3]"
      id="execution"
    >
      <KickoffV2Heading
        eyebrow="Proposed implementation"
        number="04"
        title={execution.title}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {execution.examples.map((example) => (
          <article
            className="rounded-lg border border-[#d4dcdf] bg-white p-6"
            key={example.eyebrow}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] font-black uppercase text-[#3e71b8]">
                {example.eyebrow}
              </p>
              <span className="bg-[#fff1c7] px-2.5 py-1 text-[10px] font-black uppercase text-[#855900]">
                Proposed priority
              </span>
            </div>
            <h3 className="mt-2 text-[21px] font-black leading-tight text-[#051920]">
              {example.title}
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border-l-4 border-[#c5cdd0] bg-[#f7f8f8] p-4">
                <p className="text-[10px] font-black uppercase text-[#758187]">
                  {example.currentLabel}
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-[1.45] text-[#5e6b71]">
                  {example.current.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">− </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l-4 border-[#f6b328] bg-[#fff9eb] p-4">
                <p className="text-[10px] font-black uppercase text-[#855900]">
                  {example.targetLabel}
                </p>
                <ul className="mt-3 space-y-2 text-[13px] font-bold leading-[1.45] text-[#26373e]">
                  {example.target.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true" className="text-[#3e71b8]">
                        +{" "}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <dl className="mt-6 grid gap-px bg-[#dce2e4] sm:grid-cols-3">
              <div className="bg-white p-4">
                <dt className="text-[10px] font-black uppercase text-[#3e71b8]">
                  Decision at kickoff
                </dt>
                <dd className="mt-2 text-[12px] font-bold leading-[1.5] text-[#34434a]">
                  {example.decision}
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[10px] font-black uppercase text-[#855900]">
                  Business impact
                </dt>
                <dd className="mt-2 text-[12px] leading-[1.5] text-[#34434a]">
                  {example.impact}
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[10px] font-black uppercase text-[#16803d]">
                  Completion evidence
                </dt>
                <dd className="mt-2 text-[12px] leading-[1.5] text-[#34434a]">
                  {example.proof}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <h3 className="mt-10 text-[20px] font-black text-[#051920]">
        {execution.artifactsTitle}
      </h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {execution.artifacts.map((artifact) => (
          <article
            className="flex min-h-[300px] flex-col rounded-lg border border-[#d4dcdf] bg-white"
            key={artifact.title}
          >
            <div className="grid h-20 place-items-center bg-[#051920]">
              <span className="audit-mono text-sm font-black text-[#f6b328]">
                {artifact.phase}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="text-[16px] font-black leading-tight text-[#051920]">
                {artifact.title}
              </h4>
              <dl className="mt-4 space-y-4 text-[12px] leading-[1.5]">
                <div>
                  <dt className="font-black uppercase text-[#3e71b8]">Evidence</dt>
                  <dd className="mt-1 text-[#647278]">
                    <EditorialText compact text={artifact.evidence} />
                  </dd>
                </div>
                <div>
                  <dt className="font-black uppercase text-[#3e71b8]">Recommended action</dt>
                  <dd className="mt-1 text-[#647278]">
                    <EditorialText compact text={artifact.recommendedAction} />
                  </dd>
                </div>
                <div>
                  <dt className="font-black uppercase text-[#855900]">Expected business impact</dt>
                  <dd className="mt-1 text-[#647278]">
                    <EditorialText compact text={artifact.expectedImpact} />
                  </dd>
                </div>
              </dl>
              <p className="mt-auto border-t border-[#d9e0e3] pt-4 text-[11px] font-black uppercase text-[#34434a]">
                Specialists involved: {artifact.specialists}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
