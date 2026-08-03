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
    <header className="kickoff-v2-heading mb-8">
      <p className="text-[13px] font-bold uppercase text-[#3e71b8]">
        <span className="audit-mono">{number}</span>
        <span aria-hidden="true"> · </span>
        {eyebrow}
      </p>
      <span
        aria-hidden="true"
        className="mt-4 block h-[3px] w-16 bg-[#f6b328]"
      />
      <h2 className="mt-6 max-w-[760px] text-[29px] font-bold leading-[1.15] text-[#051920]">
        {title}
      </h2>
    </header>
  );
}
