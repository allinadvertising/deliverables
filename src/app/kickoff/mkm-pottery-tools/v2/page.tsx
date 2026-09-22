import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { mkmPotteryToolsKickoffV2 } from "@/lib/kickoff/mkm-pottery-tools-v2";

export const metadata: Metadata = {
  title: "MKM Pottery Tools : SEO Strategy Kickoff",
  description:
    "MKM Pottery Tools three-month organic search strategy for direct website sales.",
  robots: "noindex, nofollow",
};

export default function MkmPotteryToolsKickoffV2Page() {
  return <KickoffV2Deliverable data={mkmPotteryToolsKickoffV2} />;
}
