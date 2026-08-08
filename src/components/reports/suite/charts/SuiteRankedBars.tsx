import type { SuiteRankedBars } from "@/lib/reports/pipingnow/types";

const toneStyles = {
  gain: { bar: "bg-[#16803d]", value: "text-[#16803d]" },
  loss: { bar: "bg-[#c62828]", value: "text-[#c62828]" },
  neutral: { bar: "bg-[#2f65a7]", value: "text-slate-800" },
};

/**
 * Horizontal ranked bars for a single measure. Values are compared by
 * magnitude, so a list of click losses (all negative) reads the same way as a
 * list of gains.
 */
export function SuiteRankedBarsChart({ chart }: { chart: SuiteRankedBars }) {
  const styles = toneStyles[chart.tone];
  const maximum = Math.max(
    1,
    ...chart.items.map((item) => Math.abs(item.value)),
  );

  return (
    <div aria-label={chart.ariaLabel} role="img">
      {chart.legend ? (
        <p className="mb-5 text-xs font-bold text-slate-500">{chart.legend}</p>
      ) : null}
      <div className="space-y-4">
        {chart.items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="audit-mono break-all text-[13px] font-bold leading-snug text-slate-700">
                  {item.label}
                </p>
                {item.detail ? (
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {item.detail}
                  </p>
                ) : null}
              </div>
              <p
                className={`shrink-0 text-sm font-black tabular-nums ${styles.value}`}
              >
                {item.display}
              </p>
            </div>
            <div className="h-2.5 bg-slate-100">
              <span
                className={`block h-2.5 ${styles.bar}`}
                style={{
                  width: `${Math.max(3, (Math.abs(item.value) / maximum) * 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
