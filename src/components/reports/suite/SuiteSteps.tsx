import { EditorialText } from "@/components/shared/EditorialText";

export type SuiteStep = {
  detail: string;
  title: string;
};

type SuiteStepsProps = {
  steps: SuiteStep[];
};

export function SuiteSteps({ steps }: SuiteStepsProps) {
  return (
    <ol className="divide-y divide-slate-200 border-y border-slate-200">
      {steps.map((step, index) => (
        <li
          className="grid gap-4 py-6 sm:grid-cols-[52px_1fr]"
          key={step.title}
        >
          <span
            aria-hidden="true"
            className="audit-mono flex h-9 w-9 items-center justify-center bg-slate-100 text-xs font-black text-[#183b68]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="mb-2 text-base font-black leading-snug text-slate-900">
              <EditorialText compact text={step.title} />
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-slate-600">
              <EditorialText compact text={step.detail} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
