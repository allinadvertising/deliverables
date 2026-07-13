export function ListBlock({
  items,
  ordered,
}: {
  items: string[];
  ordered: boolean;
}) {
  return (
    <ul className="mb-[22px] flex list-none flex-col gap-2.5 p-0 last:mb-0">
      {items.map((item, index) => (
        <li className="flex items-start gap-3 text-base leading-[1.55] text-slate-600" key={index}>
          {ordered ? (
            <span
              aria-hidden="true"
              className="audit-mono mt-px flex-none text-[13px] font-bold text-[#f6b328]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#f6b328]"
            />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
