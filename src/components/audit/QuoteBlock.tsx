export function QuoteBlock({
  attribution,
  text,
}: {
  attribution: string | null;
  text: string;
}) {
  return (
    <blockquote className="mb-4 border-l-4 border-l-[#f6b328] bg-slate-50 px-5 py-4 italic text-slate-700 last:mb-0">
      <p className="m-0 text-[16px] leading-[1.6]">{text}</p>
      {attribution ? (
        <footer className="mt-2 text-sm not-italic font-semibold text-slate-500">
          {attribution}
        </footer>
      ) : null}
    </blockquote>
  );
}
