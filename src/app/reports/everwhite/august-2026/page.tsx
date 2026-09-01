import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { everwhiteAugust2026Report } from "@/lib/reports/everwhite-august-2026";

export const metadata: Metadata = {
  title: "EverWhite : Organic Search Performance Report",
  description:
    "EverWhite organic search performance story for August 2026.",
  robots: "noindex, nofollow",
};

export default function EverwhiteAugustReportPage() {
  return <SeoStoryReport report={everwhiteAugust2026Report} />;
}
