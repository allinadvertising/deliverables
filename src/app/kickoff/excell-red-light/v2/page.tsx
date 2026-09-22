import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { excellRedLightKickoffV2 } from "@/lib/kickoff/excell-red-light-v2";

export const metadata: Metadata = {
  title: "Excell Red Light : SEO Strategy Kickoff",
  description:
    "Excell Red Light three-month organic search strategy to grow beyond brand searches.",
  robots: "noindex, nofollow",
};

export default function ExcellRedLightKickoffV2Page() {
  return <KickoffV2Deliverable data={excellRedLightKickoffV2} />;
}
