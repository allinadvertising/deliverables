import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { modernSlcAugust2026Report } from "@/lib/reports/modern-slc-august-2026";

export const metadata: Metadata = {
  title: "Modern SLC : August 2026 Organic Search Performance Report",
  description: "Modern SLC monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function ModernSlcAugustReportPage() {
  return <SeoStoryReport report={modernSlcAugust2026Report} />;
}
