export function QuoteBlock({
  attribution,
  text,
}: {
  attribution: string | null;
  text: string;
}) {
  return (
    <blockquote className="relative mb-[22px] overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff,#f1f6fc)] py-[22px] pl-[30px] pr-7 last:mb-0">
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-[#f6b328]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-2 font-serif text-[52px] font-black leading-none text-[#f6b328]/25"
      >
        &ldquo;
      </span>
      <p className="relative m-0 mt-2 text-[18px] font-medium leading-[1.6] text-slate-800">
        {text}
      </p>
      {attribution ? (
        <footer className="relative mt-3.5 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.04em] text-slate-500">
          <span aria-hidden="true" className="h-px w-4 bg-slate-300" />
          {attribution}
        </footer>
      ) : null}
    </blockquote>
  );
}
