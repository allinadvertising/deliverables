import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { customSportsProductsKickoffV2 } from "@/lib/kickoff/custom-sports-products-v2";

export const metadata: Metadata = {
  title: "Custom Sports Products : SEO Strategy Kickoff V2",
  description:
    "Custom Sports Products SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function CustomSportsProductsKickoffV2Page() {
  return <KickoffV2Deliverable data={customSportsProductsKickoffV2} />;
}
