import type { AuditContentV2 } from "@/lib/audit/types";
import { AuditIssueCardV2 } from "./AuditIssueCardV2";
import { FaqSection } from "./FaqSection";
import { GlossaryGrid } from "./GlossaryGrid";
import { InsightBox } from "./InsightBox";

type AuditReportV2Props = {
  content: AuditContentV2;
};

export function AuditReportV2({ content }: AuditReportV2Props) {
  return (
    <main className="mx-auto my-10 max-w-[1160px] px-4 sm:px-0">
      {content.insightBox ? <InsightBox insight={content.insightBox} /> : null}

      <section aria-labelledby="audit-issues-title">
        <div className="mb-8 border-l-[6px] border-l-[#f6b328] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(24,59,104,0.08)] sm:px-8">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-[#2f65a7]">
            Audit narrative
          </p>
          <h1
            className="m-0 text-3xl font-black text-[#183b68]"
            id="audit-issues-title"
          >
            Issues and expected outcomes
          </h1>
          <p className="mb-0 mt-3 max-w-3xl text-base leading-7 text-slate-600">
            {content.issues.length} {content.issues.length === 1 ? "issue" : "issues"} organized from the problem through remediation and the result we expect.
          </p>
        </div>

        <div className="space-y-8">
          {content.issues.map((issue, index) => (
            <AuditIssueCardV2
              index={index}
              issue={issue}
              key={`${index}-${issue.what_is_the_issue}`}
            />
          ))}
        </div>
      </section>

      {content.glossary.length > 0 ? (
        <GlossaryGrid terms={content.glossary} />
      ) : null}
      {content.faq.length > 0 ? <FaqSection items={content.faq} /> : null}
    </main>
  );
}
