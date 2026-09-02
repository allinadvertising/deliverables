import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { nurtured9KickoffV2 } from "@/lib/kickoff/nurtured-9-v2";

export const metadata: Metadata = {
  title: "Nurtured 9 : SEO Strategy Kickoff V2",
  description:
    "Nurtured 9 SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function Nurtured9KickoffV2Page() {
  return <KickoffV2Deliverable data={nurtured9KickoffV2} />;
}
