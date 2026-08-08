import { EditorialText } from "@/components/shared/EditorialText";
import type { SuitePriorityCard } from "@/lib/reports/pipingnow/types";

const priorityStyles = {
  P0: {
    badge: "bg-[#fff1f1] text-[#c62828]",
    chip: "bg-[#c62828]",
    label: "P0 . Do first",
  },
  P1: {
    badge: "bg-[#fff5eb] text-[#c75a12]",
    chip: "bg-[#c75a12]",
    label: "P1 . Do next",
  },
  P2: {
    badge: "bg-[#fff9df] text-[#9a6a00]",
    chip: "bg-[#9a6a00]",
    label: "P2 . Do after",
  },
};

type SuitePriorityCardsProps = {
  cards: SuitePriorityCard[];
};

export function SuitePriorityCards({ cards }: SuitePriorityCardsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {cards.map((card, index) => {
        const styles = priorityStyles[card.priority];

        return (
          <article
            className="audit-card flex flex-col p-6"
            key={card.title}
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className={`audit-mono grid h-11 w-11 shrink-0 place-items-center text-xs font-black text-white ${styles.chip}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <span
                  className={`inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${styles.badge}`}
                >
                  {styles.label}
                </span>
                <h3 className="mt-2 text-xl font-black leading-tight text-slate-900">
                  {card.title}
                </h3>
              </div>
            </div>

            <p className="mt-4 border-l-4 border-[#2f65a7] bg-[#f1f7ff] p-4 text-sm font-bold leading-relaxed text-slate-800">
              <EditorialText compact text={card.whyItMatters} />
            </p>

            {card.facts?.length ? (
              <dl className="mt-4 grid gap-px bg-slate-200 sm:grid-cols-2">
                {card.facts.map((fact) => (
                  <div className="bg-[#f7f9fa] p-3" key={fact.label}>
                    <dt className="text-[10px] font-black uppercase tracking-[0.08em] text-slate-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-[13px] font-black text-slate-900">
                      <EditorialText compact text={fact.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <p className="mt-4 text-[11px] font-black uppercase tracking-[0.1em] text-[#2f65a7]">
              What the data shows
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              <EditorialText compact text={card.evidence} />
            </p>

            <div className="mt-5 border-t border-slate-200 pt-4">
              <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[#2f65a7]">
                What we will do
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                <EditorialText compact text={card.action} />
              </p>
            </div>

            <div className="mt-auto pt-4">
              <div className="border-l-4 border-[#f6b328] bg-[#fef7e8] p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[#9a6a00]">
                  What good looks like
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-700">
                  <EditorialText compact text={card.outcome} />
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
