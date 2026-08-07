import { BrandLogo } from "@/components/shared/BrandLogo";
import type { SuiteMeta } from "@/lib/reports/pipingnow/types";

type SuiteCoverProps = {
  meta: SuiteMeta;
};

export function SuiteCover({ meta }: SuiteCoverProps) {
  return (
    <header className="audit-page audit-cover relative !items-start !text-left">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#f6b328,#d4950a)]"
      />

      <div className="mb-6 w-full max-w-[330px]">
        <BrandLogo
          className="!h-auto !max-w-full"
          height={54}
          inverted
          width={330}
        />
      </div>

      <p className="mb-5 text-[13px] font-black uppercase tracking-[0.18em] text-[#f6b328]">
        {meta.reportType}
      </p>

      <h1 className="mb-3 text-4xl font-black leading-[1.05] sm:text-5xl">
        {meta.client}
      </h1>

      <p className="mb-2 text-lg font-black uppercase tracking-[0.06em] text-white/70 sm:text-xl">
        {meta.pageLabel}
      </p>

      <p className="mb-9 max-w-3xl text-lg font-medium leading-relaxed text-white/85 sm:text-xl">
        {meta.coverHeadline}
      </p>

      <dl className="grid w-full max-w-4xl gap-x-8 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-2 lg:grid-cols-4">
        {meta.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-[12px] font-medium text-white/55">
              {fact.label}
            </dt>
            <dd className="mt-1 text-[16px] font-bold leading-snug text-white">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-9 text-xs font-bold uppercase tracking-[0.12em] text-white/55">
        {meta.domain} <span aria-hidden="true">&middot;</span> {meta.date}{" "}
        <span aria-hidden="true">&middot;</span> Prepared by All In Advertising
      </div>
    </header>
  );
}
