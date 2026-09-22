import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { rigOutfittersKickoffV2 } from "@/lib/kickoff/rig-outfitters-v2";

export const metadata: Metadata = {
  title: "Rig Outfitters : SEO Action Plan Kickoff",
  description:
    "Rig Outfitters shared SEO action plan for online sales and local visibility.",
  robots: "noindex, nofollow",
};

export default function RigOutfittersKickoffV2Page() {
  return <KickoffV2Deliverable data={rigOutfittersKickoffV2} />;
}
