import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { buriedTreasureFossilsAugust2026Report } from "@/lib/reports/buried-treasure-fossils-august-2026";

export const metadata: Metadata = {
  title: "Buried Treasure Fossils : Organic Search Performance Report",
  description:
    "Buried Treasure Fossils organic search performance story for August 2026.",
  robots: "noindex, nofollow",
};

export default function BuriedTreasureFossilsAugustReportPage() {
  return <SeoStoryReport report={buriedTreasureFossilsAugust2026Report} />;
}
