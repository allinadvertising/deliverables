import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { intradynKickoffV2 } from "@/lib/kickoff/intradyn-v2";

export const metadata: Metadata = {
  title: "Intradyn : SEO Strategy Kickoff V2",
  description:
    "Intradyn SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function IntradynKickoffV2Page() {
  return <KickoffV2Deliverable data={intradynKickoffV2} />;
}
