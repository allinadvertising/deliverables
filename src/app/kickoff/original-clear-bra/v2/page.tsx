import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { originalClearBraKickoffV2 } from "@/lib/kickoff/original-clear-bra-v2";

export const metadata: Metadata = {
  title: "Original Clear Bra : SEO Strategy Kickoff V2",
  description:
    "Original Clear Bra SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function OriginalClearBraKickoffV2Page() {
  return <KickoffV2Deliverable data={originalClearBraKickoffV2} />;
}
