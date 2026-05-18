import { BrandLogo } from "@/components/shared/BrandLogo";

type AuditHeaderProps = {
  auditType: string;
  clientName: string;
  coverBadge: string;
  date: string;
  quarter: string;
  supportingWorkbookLink?: string;
};

/**
 * Audit cover page — dark blue gradient with white text, logo, and metadata.
 * Converted from public/header-template.html. All CSS migrated to Tailwind.
 */
export function AuditHeader({
  auditType,
  clientName,
  coverBadge,
  date,
  quarter,
  supportingWorkbookLink,
}: AuditHeaderProps) {
  return (
    <div className="audit-page audit-cover">
      <div className="mb-5">
        <BrandLogo
          height={58}
          inverted
          width={360}
        />
      </div>

      <div className="mb-7 text-[13px] font-medium uppercase tracking-[3px] text-white/50">
        {auditType}
      </div>

      <h1 className="mb-2.5 text-[clamp(48px,6vw,66px)] font-black leading-none tracking-normal">
        {clientName}
      </h1>

      <div className="mb-[38px] text-[22px] font-medium text-white/80">
        {quarter} &middot; {date}
      </div>

      <div className="text-[15px] font-medium text-white/65">
        Prepared by All In Advertising &middot; Confidential
      </div>

      <div className="mt-[52px]">
        <span className="inline-block rounded-3xl border border-white/[0.12] bg-white/[0.08] px-[22px] py-[7px] text-[13px] font-light">
          {coverBadge}
        </span>

        {supportingWorkbookLink && (
          <a
            className="mx-auto mt-4 inline-flex items-center justify-center rounded-full border border-white/[0.24] bg-white/[0.12] px-[22px] py-[9px] text-[13px] font-bold text-white no-underline hover:bg-white/[0.18]"
            href={supportingWorkbookLink}
            rel="noreferrer"
            target="_blank"
          >
            Supporting workbook
          </a>
        )}
      </div>
    </div>
  );
}
