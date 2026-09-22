import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { ritaniAugust2026Report } from "@/lib/reports/ritani-august-2026";

export const metadata: Metadata = {
  title: "Ritani : August 2026 Organic Search Performance Report",
  description:
    "Ritani monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function RitaniAugustReportPage() {
  return <SeoStoryReport report={ritaniAugust2026Report} />;
}
