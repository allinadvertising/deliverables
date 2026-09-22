import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { bigDawgBatsKickoffV2 } from "@/lib/kickoff/big-dawg-bats-v2";

export const metadata: Metadata = {
  title: "Big Dawg Bats : SEO Strategy Kickoff",
  description:
    "Big Dawg Bats three-month organic search strategy for rolled bats and the bat rolling service.",
  robots: "noindex, nofollow",
};

export default function BigDawgBatsKickoffV2Page() {
  return <KickoffV2Deliverable data={bigDawgBatsKickoffV2} />;
}
