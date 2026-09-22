import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { rigOutfittersAugust2026Report } from "@/lib/reports/rig-outfitters-august-2026";

export const metadata: Metadata = {
  title: "Rig Outfitters : August 2026 Organic Search Performance Report",
  description: "Rig Outfitters monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function RigOutfittersAugustReportPage() {
  return <SeoStoryReport report={rigOutfittersAugust2026Report} />;
}
