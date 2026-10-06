import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { jefcoAugust2026Report } from "@/lib/reports/jefco-august-2026";

export const metadata: Metadata = {
  title: "Jefco Manufacturing : August 2026 Organic Search Performance Report",
  description:
    "Jefco Manufacturing monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function JefcoAugustReportPage() {
  return <SeoStoryReport report={jefcoAugust2026Report} />;
}
