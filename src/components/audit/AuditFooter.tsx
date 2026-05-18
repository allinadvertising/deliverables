import { BrandLogo } from "@/components/shared/BrandLogo";

type AuditFooterProps = {
  auditType: string;
  clientName: string;
  quarter: string;
};

export function AuditFooter({
  auditType,
  clientName,
  quarter,
}: AuditFooterProps) {
  return (
    <div className="audit-page mb-8">
      <footer className="mt-[52px] border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        <div className="mb-2 flex justify-center">
          <BrandLogo
            className="grayscale opacity-60"
            height={30}
            width={220}
          />
        </div>
        <p className="mb-4">
          {clientName} {auditType}{" "}
          <span aria-hidden="true">&middot;</span> {quarter}{" "}
          <span aria-hidden="true">&middot;</span> Prepared by All In
          Advertising
        </p>
        <p className="mb-0">
          Questions? Reach out to your account manager.
        </p>
      </footer>
    </div>
  );
}
