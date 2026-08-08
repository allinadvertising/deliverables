import Link from "next/link";

import { suiteNav } from "@/lib/reports/pipingnow/nav";
import type { SuiteNavItem } from "@/lib/reports/pipingnow/types";

type SuiteNavProps = {
  currentHref: string;
  sections?: SuiteNavItem[];
};

export function SuiteNav({ currentHref, sections = [] }: SuiteNavProps) {
  return (
    <nav
      aria-label="Audit navigation"
      className="audit-no-print sticky top-0 z-20 mx-auto max-w-[1160px] border-b border-slate-200 bg-[#edf2f7]/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#edf2f7]/80 sm:px-0"
    >
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
        Audit pages
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {suiteNav.map((item) => {
          const isCurrent = item.href === currentHref;

          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className={`inline-flex shrink-0 items-center border px-4 py-2 text-xs font-black uppercase tracking-[0.08em] no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2 ${
                isCurrent
                  ? "border-[#183b68] bg-[#183b68] text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-[#2f65a7] hover:text-[#183b68]"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {sections.length ? (
        <>
          <p className="mb-2 mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
            On this page
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {sections.map((section) => (
              <a
                className="inline-flex shrink-0 items-center border border-dashed border-slate-300 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500 no-underline transition-colors hover:border-[#2f65a7] hover:text-[#183b68] focus:outline-none focus:ring-2 focus:ring-[#f6b328] focus:ring-offset-2"
                href={section.href}
                key={section.href}
              >
                {section.label}
              </a>
            ))}
          </div>
        </>
      ) : null}
    </nav>
  );
}
