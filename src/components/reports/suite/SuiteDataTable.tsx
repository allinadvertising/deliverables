import { EditorialText } from "@/components/shared/EditorialText";
import type {
  SuiteTableColumn,
  SuiteTableRow,
} from "@/lib/reports/pipingnow/types";

type SuiteDataTableProps = {
  caption?: string;
  columns: SuiteTableColumn[];
  minWidth?: number;
  rows: SuiteTableRow[];
};

export function SuiteDataTable({
  caption,
  columns,
  minWidth = 820,
  rows,
}: SuiteDataTableProps) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="audit-table mt-0" style={{ minWidth }}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  className={column.align === "right" ? "!text-right" : ""}
                  key={column.key}
                  scope="col"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row[columns[0].key]}-${rowIndex}`}>
                {columns.map((column) => {
                  const value = row[column.key] ?? "";
                  const isNegative = value.trim().startsWith("-");

                  return (
                    <td
                      className={[
                        column.align === "right"
                          ? "text-right tabular-nums"
                          : "",
                        column.mono ? "audit-mono text-[13px]" : "",
                        column.emphasis
                          ? "font-extrabold text-slate-900"
                          : "",
                        column.align === "right" && isNegative
                          ? "font-black text-[#c62828]"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      key={column.key}
                    >
                      {column.mono ? (
                        value
                      ) : (
                        <EditorialText compact text={value} />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <p className="mb-0 mt-4 text-xs leading-relaxed text-slate-500">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
