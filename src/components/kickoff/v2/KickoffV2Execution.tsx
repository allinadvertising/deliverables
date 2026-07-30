import { EditorialText } from "@/components/shared/EditorialText";
import { kickoffV2ExecutionArtifacts } from "@/lib/kickoff/toico-v2";

import { KickoffV2Heading } from "./KickoffV2Heading";

const implementationExamples = [
  {
    eyebrow: "Template hierarchy",
    title: "Make the page topic the primary heading",
    currentLabel: "Current template",
    current: ["Newsletter — H1", "Footer Start — H2"],
    targetLabel: "Target template",
    target: [
      "One descriptive commercial H1",
      "Interface labels use appropriate structural elements",
    ],
  },
  {
    eyebrow: "Product URL signals",
    title: "Emit one clean preferred product URL",
    currentLabel: "Current patterns",
    current: ["Double-slash SKU variants", "Crawlable com_cvv variants"],
    targetLabel: "Target state",
    target: [
      "One internally linked canonical product URL",
      "Non-preferred variants removed from crawl paths",
    ],
  },
];

export function KickoffV2Execution() {
  return (
    <section
      className="kickoff-v2-section bg-[#f0f2f3]"
      id="execution"
    >
      <KickoffV2Heading
        eyebrow="What execution will look like"
        number="04"
        title="Concrete changes, followed by evidence."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {implementationExamples.map((example) => (
          <article
            className="rounded-lg border border-[#d4dcdf] bg-white p-6"
            key={example.eyebrow}
          >
            <p className="text-[11px] font-black uppercase text-[#3e71b8]">
              {example.eyebrow}
            </p>
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
          </article>
        ))}
      </div>

      <h3 className="mt-10 text-[20px] font-black text-[#051920]">
        Deliverable evidence by phase
      </h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kickoffV2ExecutionArtifacts.map((artifact) => (
          <article
            className="flex min-h-[210px] flex-col rounded-lg border border-[#d4dcdf] bg-white"
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
              <p className="mt-3 text-[12px] leading-[1.5] text-[#647278]">
                <EditorialText compact text={artifact.detail} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
