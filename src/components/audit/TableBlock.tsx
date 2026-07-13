const numericPattern = /^[$€£]?-?[\d,]+(\.\d+)?%?$/;

function looksNumeric(cell: string) {
  return numericPattern.test(cell.trim());
}

export function TableBlock({
  caption,
  headers,
  rows,
}: {
  caption: string | null;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mb-[22px] last:mb-0">
      {caption ? (
        <div className="mb-2.5 flex items-center gap-2">
          <span aria-hidden="true" className="h-[3px] w-3.5 rounded-full bg-[#f6b328]" />
          <span className="text-xs font-extrabold uppercase tracking-[0.07em] text-slate-500">
            {caption}
          </span>
        </div>
      ) : null}
      <div className="overflow-x-auto overflow-hidden rounded-[10px] border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
        <table className="w-full border-separate border-spacing-0 text-[15.5px] leading-[1.5]">
          {headers.length > 0 ? (
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    className={`bg-[#183b68] px-4 py-3.5 text-xs font-extrabold uppercase tracking-[0.07em] text-white ${
                      index === 0 ? "text-left" : "text-right"
                    }`}
                    key={index}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    className={`px-4 py-[15px] ${
                      rowIndex === rows.length - 1
                        ? ""
                        : "border-b border-[#eef2f7]"
                    } ${rowIndex % 2 === 1 ? "bg-[#f9fbfe]" : "bg-white"} ${
                      cellIndex === 0
                        ? "font-semibold text-slate-900"
                        : looksNumeric(cell)
                          ? "audit-mono text-right tabular-nums text-slate-600"
                          : "text-slate-600"
                    }`}
                    key={cellIndex}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
