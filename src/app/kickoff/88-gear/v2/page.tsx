import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { eightyEightGearKickoffV2 } from "@/lib/kickoff/88-gear-v2";

export const metadata: Metadata = {
  title: "88 Gear : SEO Strategy Kickoff V2",
  description:
    "88 Gear SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function EightyEightGearKickoffV2Page() {
  return <KickoffV2Deliverable data={eightyEightGearKickoffV2} />;
}
