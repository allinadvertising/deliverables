import type { Finding } from "@/lib/audit/types";
import { FindingCard } from "./FindingCard";

type FindingCategoryGroupProps = {
  findings: Finding[];
};

/**
 * Groups findings by category and renders them under H3 category headers.
 * Findings are assumed to be pre-sorted by category and priority.
 */
export function FindingCategoryGroup({
  findings,
}: FindingCategoryGroupProps) {
  // Group findings by category, preserving input order
  const groups = new Map<string, Finding[]>();
  for (const f of findings) {
    const existing = groups.get(f.category);
    if (existing) {
      existing.push(f);
    } else {
      groups.set(f.category, [f]);
    }
  }

  return (
    <div className="audit-page">
      <h2 className="audit-section-title">
        Key Findings by Category
      </h2>

      {Array.from(groups.entries()).map(([category, items]) => (
        <div key={category}>
          <h3 className="audit-category-title">
            {category}
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f6b328]" />
          </h3>
          {items.map((finding, i) => (
            <FindingCard key={i} {...finding} />
          ))}
        </div>
      ))}
    </div>
  );
}
