import type { BeforeAfterPair } from "@/lib/audit/types";

export function BeforeAfterGrid({ pairs }: { pairs: BeforeAfterPair[] }) {
  return (
    <div className="audit-page">
      <h2 className="audit-section-title">
        Before &amp; After Comparisons
      </h2>

      {pairs.map((pair, i) => (
        <div className="mb-8 last:mb-0" key={i}>
          {pair.label && (
            <h3 className="audit-category-title">
              {pair.label}
            </h3>
          )}
          <div className="audit-comparison-grid grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <div className="audit-card audit-comparison-card border-[#ffc9c9] bg-[linear-gradient(180deg,#ffffff_0%,#fffafa_100%)] p-6">
              <h4 className="mt-0 mb-3 border-b-2 border-[#c62828] pb-3 text-sm font-extrabold uppercase tracking-[0.1em] text-[#c62828]">
                Before
              </h4>
              <div className="text-[15px] leading-[1.6] text-slate-700">
                {pair.before}
              </div>
            </div>
            <div className="audit-card audit-comparison-card border-[#a7d9a7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fff9_100%)] p-6">
              <h4 className="mt-0 mb-3 border-b-2 border-[#16803d] pb-3 text-sm font-extrabold uppercase tracking-[0.1em] text-[#16803d]">
                After
              </h4>
              <div className="text-[15px] leading-[1.6] text-slate-700">
                {pair.after}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
