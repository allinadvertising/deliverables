import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { racePartsSolutionsKickoffV2 } from "@/lib/kickoff/race-parts-solutions-v2";

export const metadata: Metadata = {
  title: "Race Part Solutions : SEO Strategy Kickoff V2",
  description:
    "Race Part Solutions SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function RacePartsSolutionsKickoffV2Page() {
  return <KickoffV2Deliverable data={racePartsSolutionsKickoffV2} />;
}
