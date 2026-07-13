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
    <div className="mb-4 last:mb-0">
      {caption ? <p className="audit-copy mb-2 font-semibold">{caption}</p> : null}
      <div className="overflow-x-auto">
        <table className="audit-table">
          {headers.length > 0 ? (
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
