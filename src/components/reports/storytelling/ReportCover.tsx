import { BrandLogo } from "@/components/shared/BrandLogo";
import { reportMeta } from "@/lib/reports/toico-july-2026";

export function ReportCover() {
  return (
    <header className="audit-page audit-cover relative">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#f6b328,#d4950a)]"
      />

      <div className="mb-5 w-full max-w-[360px]">
        <BrandLogo
          className="!h-auto !max-w-full"
          height={58}
          inverted
          width={360}
        />
      </div>

      <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[2.5px] text-[#f6b328]">
        <span aria-hidden="true" className="h-px w-[18px] bg-[#f6b328]/60" />
        {reportMeta.reportType}
        <span aria-hidden="true" className="h-px w-[18px] bg-[#f6b328]/60" />
      </div>

      <h1 className="mb-3 text-5xl font-black leading-none tracking-normal sm:text-6xl">
        {reportMeta.client}
      </h1>

      <p className="mb-8 max-w-2xl text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">
        Rankings advanced. Click capture is the next move.
      </p>

      <div className="text-sm font-medium text-white/70">
        {reportMeta.currentPeriod}
      </div>
      <div className="mt-2 text-[13px] font-medium text-white/50">
        Compared with {reportMeta.previousPeriod}
      </div>

      <div className="mt-12 border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
        Prepared by All In Advertising
      </div>
    </header>
  );
}
