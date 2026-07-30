import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";

export const metadata: Metadata = {
  title: "TOICO : SEO Strategy Kickoff V2",
  description:
    "TOICO SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function ToicoKickoffV2Page() {
  return <KickoffV2Deliverable />;
}
