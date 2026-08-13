import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { sportsDisplaysKickoffV2 } from "@/lib/kickoff/sportsdisplays-v2";

export const metadata: Metadata = {
  title: "SportsDisplays : SEO Strategy Kickoff",
  description:
    "SportsDisplays SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function SportsDisplaysKickoffPage() {
  return <KickoffV2Deliverable data={sportsDisplaysKickoffV2} />;
}
