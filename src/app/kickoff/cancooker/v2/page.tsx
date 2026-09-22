import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { cancookerKickoffV2 } from "@/lib/kickoff/cancooker-v2";

export const metadata: Metadata = {
  title: "CanCooker : SEO Strategy Kickoff V2",
  description:
    "CanCooker SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function CanCookerKickoffV2Page() {
  return <KickoffV2Deliverable data={cancookerKickoffV2} />;
}
