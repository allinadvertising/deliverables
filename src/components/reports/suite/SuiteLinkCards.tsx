import Link from "next/link";

import type { SuiteLinkCard } from "@/lib/reports/pipingnow/types";

type SuiteLinkCardsProps = {
  cards: SuiteLinkCard[];
};

export function SuiteLinkCards({ cards }: SuiteLinkCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link
          className="group flex flex-col border-t-4 border-[#2f65a7] bg-[#f7faff] p-5 no-underline transition-colors hover:bg-[#eaf2fb] focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2"
          href={card.href}
          key={card.href}
        >
          <span
            aria-hidden="true"
            className="audit-mono grid h-8 w-8 place-items-center bg-[#183b68] text-[11px] font-black text-white"
          >
            {card.number}
          </span>
          <span className="mt-3 text-lg font-black leading-tight text-slate-900 group-hover:text-[#183b68]">
            {card.label}
          </span>
          <span className="mt-2 text-sm leading-relaxed text-slate-600">
            {card.description}
          </span>
          <span className="mt-4 border-t border-slate-200 pt-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#2f65a7]">
            {card.covers}
          </span>
        </Link>
      ))}
    </div>
  );
}
