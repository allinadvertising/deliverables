import type { FaqItem } from "@/lib/audit/types";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <div className="audit-page mb-8">
      <div className="rounded-lg border border-[#cbdff4] bg-[#eaf2fb] px-7 py-6">
        <h2 className="audit-section-title !mb-5">
          Frequently Asked Questions
        </h2>
        {items.map((faq, i) => (
          <div className="mb-5 last:mb-0" key={i}>
            <p className="mb-1.5 text-[16px] font-bold text-slate-900">
              {faq.question}
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-slate-700">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
