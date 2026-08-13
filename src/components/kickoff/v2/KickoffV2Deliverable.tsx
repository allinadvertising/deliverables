import { BackToTopButton } from "@/components/audit/BackToTopButton";
import { PrintAuditButton } from "@/components/audit/PrintAuditButton";
import type { KickoffV2Data } from "@/lib/kickoff/v2-types";

import { KickoffV2Approval } from "./KickoffV2Approval";
import { KickoffV2Cover } from "./KickoffV2Cover";
import { KickoffV2Execution } from "./KickoffV2Execution";
import { KickoffV2Focus } from "./KickoffV2Focus";
import { KickoffV2Strategy } from "./KickoffV2Strategy";
import { KickoffV2Summary } from "./KickoffV2Summary";

type KickoffV2DeliverableProps = {
  data: KickoffV2Data;
};

export function KickoffV2Deliverable({ data }: KickoffV2DeliverableProps) {
  return (
    <>
      <div className="audit-no-print mx-auto mt-6 flex max-w-[1080px] justify-end px-4 sm:px-0">
        <PrintAuditButton ariaLabel={data.printAriaLabel} />
      </div>

      <main className="kickoff-v2-shell">
        <KickoffV2Cover cover={data.cover} meta={data.meta} />
        <KickoffV2Summary summary={data.summary} />
        <KickoffV2Strategy strategy={data.strategy} />
        <KickoffV2Focus focus={data.focus} />
        <KickoffV2Execution execution={data.execution} />
        <KickoffV2Approval approval={data.approval} />

        <footer className="kickoff-v2-footer">
          <p className="text-sm font-black text-white">All In Advertising</p>
          <p className="mt-2 text-[12px] text-white/55">{data.footerNote}</p>
        </footer>
      </main>

      <BackToTopButton />
    </>
  );
}
