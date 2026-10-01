import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { modernWickerKickoffV2 } from "@/lib/kickoff/modern-wicker-v2";

export const metadata: Metadata = {
  title: "Modern Wicker : SEO Strategy Kickoff",
  description:
    "Modern Wicker three-month organic search strategy: make the product catalogue reachable, then recover replacement cushions.",
  robots: "noindex, nofollow",
};

export default function ModernWickerKickoffV2Page() {
  return <KickoffV2Deliverable data={modernWickerKickoffV2} />;
}
