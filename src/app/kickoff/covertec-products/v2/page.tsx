import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { covertecProductsKickoffV2 } from "@/lib/kickoff/covertec-products-v2";

export const metadata: Metadata = {
  title: "CoverTec Products : SEO Strategy Kickoff",
  description:
    "CoverTec Products three-month organic search strategy to recover tile and vinyl and grow concrete sealers.",
  robots: "noindex, nofollow",
};

export default function CovertecProductsKickoffV2Page() {
  return <KickoffV2Deliverable data={covertecProductsKickoffV2} />;
}
