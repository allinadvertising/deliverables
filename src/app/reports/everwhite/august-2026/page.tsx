import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { everwhiteAugust2026Report } from "@/lib/reports/everwhite-august-2026";

export const metadata: Metadata = {
  title: "EverWhite : August 2026 Organic Search Performance Report",
  description:
    "EverWhite monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function EverwhiteAugustReportPage() {
  return <SeoStoryReport report={everwhiteAugust2026Report} />;
}
