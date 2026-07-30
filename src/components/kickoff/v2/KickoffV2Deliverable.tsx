import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";

import { KickoffV2Approval } from "./KickoffV2Approval";
import { KickoffV2Cover } from "./KickoffV2Cover";
import { KickoffV2Execution } from "./KickoffV2Execution";
import { KickoffV2Focus } from "./KickoffV2Focus";
import { KickoffV2Strategy } from "./KickoffV2Strategy";
import { KickoffV2Summary } from "./KickoffV2Summary";

export function KickoffV2Deliverable() {
  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1080px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel="Print TOICO kickoff V2 as PDF" />
      </div>

      <main className="kickoff-v2-shell">
        <KickoffV2Cover />
        <KickoffV2Summary />
        <KickoffV2Strategy />
        <KickoffV2Focus />
        <KickoffV2Execution />
        <KickoffV2Approval />

        <footer className="kickoff-v2-footer">
          <p className="text-sm font-black text-white">All In Advertising</p>
          <p className="mt-2 text-[12px] text-white/55">
            TOICO SEO Strategy Kickoff · Q3 2026
          </p>
        </footer>
      </main>

      <BackToTopButton />
    </>
  );
}
