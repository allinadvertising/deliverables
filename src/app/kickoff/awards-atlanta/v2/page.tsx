import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { awardsAtlantaKickoffV2 } from "@/lib/kickoff/awards-atlanta-v2";

export const metadata: Metadata = {
  title: "Awards Atlanta : SEO Strategy Kickoff V2",
  description:
    "Awards Atlanta SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function AwardsAtlantaKickoffV2Page() {
  return <KickoffV2Deliverable data={awardsAtlantaKickoffV2} />;
}
