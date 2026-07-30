import { BrandLogo } from "@/components/shared/BrandLogo";
import { kickoffV2Meta } from "@/lib/kickoff/toico-v2";

export function KickoffV2Cover() {
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
        TOICO <span className="text-[#f6b328]">×</span> All In
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
        Your organic search strategy for the next three months.
      </p>

      <dl className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {kickoffV2Meta.map((item) => (
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
