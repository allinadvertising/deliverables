import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { pipingNowAugust2026Report } from "@/lib/reports/pipingnow-august-2026";

export const metadata: Metadata = {
  title: "Piping Now : August 2026 Organic Search Performance Report",
  description:
    "Piping Now monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function PipingNowAugustReportPage() {
  return <SeoStoryReport report={pipingNowAugust2026Report} />;
}
