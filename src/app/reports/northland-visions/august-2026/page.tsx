import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { northlandVisionsAugust2026Report } from "@/lib/reports/northland-visions-august-2026";

export const metadata: Metadata = {
  title: "Northland Visions : August 2026 Organic Search Performance Report",
  description: "Northland Visions monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function NorthlandVisionsAugustReportPage() {
  return <SeoStoryReport report={northlandVisionsAugust2026Report} />;
}
