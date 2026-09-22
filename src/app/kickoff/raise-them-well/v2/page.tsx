import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { raiseThemWellKickoffV2 } from "@/lib/kickoff/raise-them-well-v2";

export const metadata: Metadata = {
  title: "Raise Them Well : SEO Strategy Kickoff",
  description:
    "Raise Them Well three-month organic search strategy to reverse the traffic decline.",
  robots: "noindex, nofollow",
};

export default function RaiseThemWellKickoffV2Page() {
  return <KickoffV2Deliverable data={raiseThemWellKickoffV2} />;
}
