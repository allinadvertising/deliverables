import type { GlossaryTerm } from "@/lib/audit/types";

export function GlossaryGrid({ terms }: { terms: GlossaryTerm[] }) {
  return (
    <div className="audit-page">
      <h2 className="audit-section-title">
        Glossary: Technical Terms, Simplified
      </h2>
      <div className="audit-glossary-grid grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        {terms.map((term, i) => (
          <div
            className="audit-card audit-glossary-card bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-[22px]"
            key={i}
          >
            <strong className="mb-2 block text-lg font-extrabold text-[#183b68]">
              {term.term}
            </strong>
            <span className="text-[15.5px] leading-[1.58] text-slate-600">
              {term.definition}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
