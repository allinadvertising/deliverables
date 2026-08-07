import { EditorialText } from "@/components/shared/EditorialText";
import type { SuiteActionRow } from "@/lib/reports/pipingnow/types";

const priorityStyles = {
  P0: { badge: "bg-[#fff1f1] text-[#c62828]", row: "audit-row-p0" },
  P1: { badge: "bg-[#fff5eb] text-[#c75a12]", row: "audit-row-p1" },
  P2: { badge: "bg-[#fff9df] text-[#9a6a00]", row: "audit-row-p2" },
};

type SuiteActionTableProps = {
  rows: SuiteActionRow[];
};

export function SuiteActionTable({ rows }: SuiteActionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="audit-table mt-0 min-w-[920px]">
        <thead>
          <tr>
            <th scope="col">Priority</th>
            <th scope="col">Action</th>
            <th scope="col">When</th>
            <th scope="col">Who owns it</th>
            <th scope="col">How we prove it is done</th>
            <th scope="col">Where the detail lives</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const styles = priorityStyles[row.priority];

            return (
              <tr className={styles.row} key={row.action}>
                <td>
                  <span
                    className={`inline-block px-2.5 py-1 text-xs font-black ${styles.badge}`}
                  >
                    {row.priority}
                  </span>
                </td>
                <td className="font-extrabold text-slate-900">
                  <EditorialText compact text={row.action} />
                </td>
                <td className="whitespace-nowrap font-bold text-[#183b68]">
                  {row.window}
                </td>
                <td>{row.owner}</td>
                <td>
                  <EditorialText compact text={row.proof} />
                </td>
                <td className="text-sm">
                  <EditorialText compact text={row.detailSource} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
