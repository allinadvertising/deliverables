import type { Severity } from "@/lib/audit/types";

export function SeverityBar({ p0Count, p1Count, p2Count }: Severity) {
  const total = p0Count + p1Count + p2Count;
  const p0Pct = total > 0 ? Math.round((p0Count / total) * 100) : 0;
  const p1Pct = total > 0 ? Math.round((p1Count / total) * 100) : 0;
  const p2Pct = total > 0 ? 100 - p0Pct - p1Pct : 0;

  return (
    <div className="mb-2 mt-6 grid gap-3 text-xs font-medium text-slate-500">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#c62828]" />
          <span>P0 Critical: {p0Count}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#c75a12]" />
          <span>P1 High: {p1Count}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#9a6a00]" />
          <span>P2 Moderate: {p2Count}</span>
        </div>
      </div>
      <div
        className="flex h-2.5 w-full overflow-hidden rounded-[5px]"
        title={`P0: ${p0Count}, P1: ${p1Count}, P2: ${p2Count}`}
      >
        {p0Pct > 0 && (
          <div
            className="h-full bg-[#c62828]"
            style={{ width: `${p0Pct}%` }}
          />
        )}
        {p1Pct > 0 && (
          <div
            className="h-full bg-[#c75a12]"
            style={{ width: `${p1Pct}%` }}
          />
        )}
        {p2Pct > 0 && (
          <div
            className="h-full bg-[#9a6a00]"
            style={{ width: `${p2Pct}%` }}
          />
        )}
      </div>
    </div>
  );
}
