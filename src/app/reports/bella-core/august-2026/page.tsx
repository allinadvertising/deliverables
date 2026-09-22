import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { bellaCoreAugust2026Report } from "@/lib/reports/bella-core-august-2026";

export const metadata: Metadata = {
  title: "Bella Core : August 2026 Organic Search Performance Report",
  description:
    "Bella Core monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function BellaCoreAugustReportPage() {
  return <SeoStoryReport report={bellaCoreAugust2026Report} />;
}
