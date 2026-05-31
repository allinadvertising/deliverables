import type { SolutionGroup } from "@/lib/audit/types";

export function SolutionSteps({ solutions }: { solutions: SolutionGroup[] }) {
  return (
    <div className="audit-page">
      <h2 className="audit-section-title">
        Proposed Solutions
      </h2>

      {solutions.map((group, gi) => (
        <div key={gi}>
          <h3 className="audit-category-title">
            {group.category}
          </h3>
          {group.steps.map((step, si) => (
            <div
              className="audit-solution-step flex gap-[18px] items-start border-b border-slate-100 py-[18px] last:border-b-0"
              key={si}
            >
              <div className="audit-step-number flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f65a7] text-base font-black text-white shadow-[0_8px_18px_rgba(47,101,167,0.22)]">
                {si + 1}
              </div>
              <div className="text-[17px] leading-[1.58] text-slate-700">
                <strong className="mb-1 block text-lg text-slate-900">
                  {step.title}
                </strong>
                {step.description}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
