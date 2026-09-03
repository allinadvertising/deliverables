import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { awrRestorationKickoffV2 } from "@/lib/kickoff/awr-restoration-v2";

export const metadata: Metadata = {
  title: "AWR Restoration : SEO Strategy Kickoff V2",
  description:
    "AWR Restoration SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function AwrRestorationKickoffV2Page() {
  return <KickoffV2Deliverable data={awrRestorationKickoffV2} />;
}
