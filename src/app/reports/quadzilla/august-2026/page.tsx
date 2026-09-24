import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { quadzillaAugust2026Report } from "@/lib/reports/quadzilla-august-2026";

export const metadata: Metadata = {
  title: "Quadzilla : August 2026 Organic Search Performance Report",
  description: "Quadzilla monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function QuadzillaAugustReportPage() {
  return <SeoStoryReport report={quadzillaAugust2026Report} />;
}
