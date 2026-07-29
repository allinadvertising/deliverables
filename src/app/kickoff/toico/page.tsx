import type { Metadata } from "next";

import { KickoffDeliverable } from "@/components/kickoff/KickoffDeliverable";

export const metadata: Metadata = {
  title: "TOICO : SEO Strategy Kickoff",
  description:
    "TOICO SEO strategy kickoff and prioritized 90-day execution roadmap.",
  robots: "noindex, nofollow",
};

export default function ToicoKickoffPage() {
  return <KickoffDeliverable />;
}
