export function AuditSectionHeaderV3({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-baseline gap-3.5 border-b-2 border-slate-200 pb-4">
      <span className="audit-mono flex-none pt-0.5 text-sm font-medium tracking-[0.05em] text-[#f6b328]">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <span className="mb-3 block h-1 w-11 rounded-full bg-[#f6b328]" />
        <h2 className="m-0 text-[28px] font-extrabold leading-[1.14] text-slate-900">
          {title}
        </h2>
      </div>
    </div>
  );
}
