import type { FaqItem } from "@/lib/audit/types";

export function AuditFaqV3({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((faq, index) => (
        <div
          className="flex items-start gap-3.5 rounded-[10px] border border-slate-200 px-5 py-[18px]"
          key={index}
        >
          <span
            aria-hidden="true"
            className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg bg-[#eaf2fb] text-sm font-black text-[#2f65a7]"
          >
            Q
          </span>
          <div>
            <p className="m-0 mb-1.5 mt-0.5 text-base font-bold text-slate-900">
              {faq.question}
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-slate-600">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
