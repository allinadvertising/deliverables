import type { Metadata } from "next";

import { KickoffV2Deliverable } from "@/components/kickoff/v2/KickoffV2Deliverable";
import { electricMotorSportKickoffV2 } from "@/lib/kickoff/electric-motor-sport-v2";

export const metadata: Metadata = {
  title: "Electric Motor Sport : SEO Strategy Kickoff V2",
  description:
    "Electric Motor Sport SEO kickoff strategy presented as a focused three-month execution deck.",
  robots: "noindex, nofollow",
};

export default function ElectricMotorSportKickoffV2Page() {
  return <KickoffV2Deliverable data={electricMotorSportKickoffV2} />;
}
