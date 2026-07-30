type KickoffV2HeadingProps = {
  eyebrow: string;
  number: string;
  title: string;
};

export function KickoffV2Heading({
  eyebrow,
  number,
  title,
}: KickoffV2HeadingProps) {
  return (
    <header className="mb-8">
      <p className="text-xs font-black uppercase text-[#3e71b8]">
        <span className="audit-mono">{number}</span>
        <span aria-hidden="true"> · </span>
        {eyebrow}
      </p>
      <span
        aria-hidden="true"
        className="mt-4 block h-[3px] w-16 bg-[#f6b328]"
      />
      <h2 className="mt-6 max-w-[760px] text-[32px] font-black leading-[1.08] text-[#051920] sm:text-[38px]">
        {title}
      </h2>
    </header>
  );
}
