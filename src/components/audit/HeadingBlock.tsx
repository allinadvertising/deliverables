export function HeadingBlock({
  level,
  text,
}: {
  level: 2 | 3;
  text: string;
}) {
  if (level === 2) {
    return <h2 className="audit-section-title">{text}</h2>;
  }

  return (
    <h3 className="mb-3.5 mt-7 flex items-center gap-2.5 text-xl font-extrabold leading-[1.25] text-slate-800">
      <span
        aria-hidden="true"
        className="h-2 w-2 flex-none rotate-45 rounded-sm bg-[#f6b328]"
      />
      {text}
    </h3>
  );
}
