import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { atlWeldingSupplyKickoffV2 } from "@/lib/kickoff/atl-welding-supply-v2";

export const metadata: Metadata = {
  title: "ATL Welding Supply : SEO Strategy Kickoff V2",
  description:
    "ATL Welding Supply SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function AtlWeldingSupplyKickoffV2Page() {
  return <KickoffV2Deliverable data={atlWeldingSupplyKickoffV2} />;
}
