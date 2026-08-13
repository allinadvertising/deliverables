import { BrandLogo } from "@/components/shared/BrandLogo";
import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

type KickoffV2CoverProps = {
  cover: KickoffV2Data["cover"];
  meta: KickoffV2Data["meta"];
};

export function KickoffV2Cover({ cover, meta }: KickoffV2CoverProps) {
  return (
    <header className="kickoff-v2-cover">
      <BrandLogo
        className="max-w-full"
        height={32}
        inverted
        width={264}
      />

      <p className="mt-9 text-xs font-black uppercase text-[#f6b328]">
        SEO <span aria-hidden="true">·</span> Kickoff strategy
      </p>

      <h1 className="mt-6 text-[40px] font-black leading-none text-white sm:text-[50px]">
        {cover.clientName} <span className="text-[#f6b328]">×</span> All In
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
        {cover.subtitle}
      </p>

      <dl className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label}>
            <dt className="text-[12px] font-medium text-white/55">
              {item.label}
            </dt>
            <dd className="mt-1 text-[17px] font-bold leading-snug text-white">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
