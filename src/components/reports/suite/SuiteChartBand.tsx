import { EditorialText } from "@/components/shared/EditorialText";

type SuiteChartBandProps = {
  children: React.ReactNode;
  insight: string;
  number: string;
  title: string;
};

export function SuiteChartBand({
  children,
  insight,
  number,
  title,
}: SuiteChartBandProps) {
  return (
    <article className="grid gap-7 border-t border-slate-200 py-10 first:mt-2 first:border-t-0 first:pt-2 lg:grid-cols-[230px_1fr] lg:gap-10">
      <div>
        <span
          aria-hidden="true"
          className="audit-mono inline-flex h-9 w-9 items-center justify-center bg-[#183b68] text-[11px] font-black text-white"
        >
          {number}
        </span>
        <h3 className="mt-4 text-xl font-black leading-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
          <EditorialText compact text={insight} />
        </p>
      </div>
      <div className="min-w-0">{children}</div>
    </article>
  );
}
