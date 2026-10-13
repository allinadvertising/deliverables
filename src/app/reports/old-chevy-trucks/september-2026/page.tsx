import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { oldChevyTrucksSeptember2026Report } from "@/lib/reports/old-chevy-trucks-september-2026";

export const metadata: Metadata = {
  title: "Old Chevy Trucks : September 2026 Organic Search Performance Report",
  description:
    "Old Chevy Trucks monthly organic search performance for September 2026 compared with August 2026.",
  robots: "noindex, nofollow",
};

export default function OldChevyTrucksSeptemberReportPage() {
  return <SeoStoryReport report={oldChevyTrucksSeptember2026Report} />;
}
