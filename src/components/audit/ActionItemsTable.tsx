import type { ActionItem as ActionItemType } from "@/lib/audit/types";
import { PriorityBadge } from "@/components/shared/Badges";

const rowBorders: Record<string, string> = {
  P0: "audit-row-p0",
  P1: "audit-row-p1",
  P2: "audit-row-p2",
};

export function ActionItemsTable({
  items,
}: {
  items: ActionItemType[];
}) {
  return (
    <div className="audit-page">
      <h2 className="audit-section-title">
        Immediate Action Items
      </h2>
      <p className="audit-copy mb-2">
        Ordered by impact and urgency. Each item includes the recommended fix
        and expected result.
      </p>

      <div className="overflow-x-auto">
        <table className="audit-table">
          <thead>
            <tr>
              <th className="w-[60px]">Priority</th>
              <th>Action</th>
              <th>Scope</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                className={rowBorders[item.priority]}
                key={i}
              >
                <td>
                  <PriorityBadge priority={item.priority} />
                </td>
                <td>
                  <strong>{item.title}</strong>
                  {item.secondaryImpact && (
                    <>
                      <br />
                      <span className="text-[13px] text-slate-500">
                        {item.secondaryImpact}
                      </span>
                    </>
                  )}
                </td>
                <td>{item.scope}</td>
                <td>{item.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
