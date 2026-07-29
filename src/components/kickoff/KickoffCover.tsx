import { BrandLogo } from "@/components/shared/BrandLogo";

export function KickoffCover() {
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
        SEO Strategy Kickoff
        <span aria-hidden="true" className="h-px w-[18px] bg-[#f6b328]/60" />
      </div>

      <h1 className="mb-3 text-5xl font-black leading-none tracking-normal sm:text-6xl">
        TOICO
      </h1>

      <p className="mb-8 max-w-2xl text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">
        From audit findings to a focused 90-day SEO execution plan
      </p>

      <div className="text-sm font-medium text-white/65">
        Q3 2026 <span aria-hidden="true">&middot;</span> July 2026
      </div>
      <div className="mt-2 text-[13px] font-medium uppercase tracking-[0.04em] text-white/55">
        Prepared by All In Advertising
      </div>

      <div className="mt-12 inline-flex items-center gap-2 border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/65">
        <span className="h-2 w-2 rounded-full bg-[#f6b328]" aria-hidden="true" />
        Draft for kickoff discussion
      </div>
    </header>
  );
}
