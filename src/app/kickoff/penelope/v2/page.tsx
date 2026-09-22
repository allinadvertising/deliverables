import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { penelopeKickoffV2 } from "@/lib/kickoff/penelope-v2";

export const metadata: Metadata = {
  title: "Penelope and The Beauty Bar : SEO Strategy Kickoff V2",
  description:
    "Penelope and The Beauty Bar SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function PenelopeKickoffV2Page() {
  return <KickoffV2Deliverable data={penelopeKickoffV2} />;
}
