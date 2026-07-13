import type { GlossaryTerm } from "@/lib/audit/types";

export function AuditGlossaryV3({ terms }: { terms: GlossaryTerm[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
      {terms.map((term, index) => (
        <div
          className="rounded-[10px] border border-slate-200 bg-white px-6 py-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
          key={index}
        >
          <strong className="mb-2 flex items-center gap-2 text-[17px] font-extrabold text-[#183b68]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 flex-none rotate-45 rounded-sm bg-[#f6b328]"
            />
            {term.term}
          </strong>
          <span className="text-[15px] leading-[1.58] text-slate-600">
            {term.definition}
          </span>
        </div>
      ))}
    </div>
  );
}
