import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { fossilAgeMineralsAugust2026Report } from "@/lib/reports/fossil-age-minerals-august-2026";

export const metadata: Metadata = {
  title: "Fossil Age Minerals : August 2026 Organic Search Performance Report",
  description:
    "Fossil Age Minerals monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function FossilAgeMineralsAugustReportPage() {
  return <SeoStoryReport report={fossilAgeMineralsAugust2026Report} />;
}
