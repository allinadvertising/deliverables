import type { SuiteShareItem } from "@/lib/reports/pipingnow/types";

const palette = [
  "bg-[#183b68]",
  "bg-[#2f65a7]",
  "bg-[#5b8fd0]",
  "bg-[#8fb4e0]",
  "bg-[#b9d1ec]",
  "bg-[#8a9aaa]",
];

type SuiteShareBarsProps = {
  ariaLabel: string;
  items: SuiteShareItem[];
  stacked?: boolean;
};

/**
 * Share-of-total display. `stacked` draws one bar split into segments, which
 * suits a two or three way split such as device mix. Otherwise each row gets
 * its own bar, which suits a longer country list.
 */
export function SuiteShareBarsChart({
  ariaLabel,
  items,
  stacked = false,
}: SuiteShareBarsProps) {
  if (stacked) {
    return (
      <div aria-label={ariaLabel} role="img">
        <div className="flex h-8 overflow-hidden bg-slate-100">
          {items.map((item, index) => (
            <span
              className={`block h-full ${palette[index % palette.length]}`}
              key={item.label}
              style={{ width: `${item.share}%` }}
            />
          ))}
        </div>
        <dl className="mt-4 grid gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <div className="flex items-start gap-3" key={item.label}>
              <span
                aria-hidden="true"
                className={`mt-1.5 h-3 w-3 shrink-0 ${palette[index % palette.length]}`}
              />
              <div>
                <dt className="text-sm font-black text-slate-800">
                  {item.label}
                </dt>
                <dd className="text-xs font-bold tabular-nums text-slate-500">
                  {item.display} <span aria-hidden="true">&middot;</span>{" "}
                  {item.share.toFixed(1)}%
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  const maximum = Math.max(1, ...items.map((item) => item.share));

  return (
    <div aria-label={ariaLabel} role="img">
      <div className="space-y-3">
        {items.map((item) => (
          <div
            className="grid grid-cols-[130px_1fr_120px] items-center gap-4"
            key={item.label}
          >
            <p className="truncate text-sm font-bold text-slate-700">
              {item.label}
            </p>
            <div className="h-3 bg-slate-100">
              <span
                className="block h-3 bg-[#2f65a7]"
                style={{ width: `${Math.max(2, (item.share / maximum) * 100)}%` }}
              />
            </div>
            <p className="text-right text-xs font-bold tabular-nums text-slate-600">
              {item.display} <span aria-hidden="true">&middot;</span>{" "}
              {item.share.toFixed(1)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
