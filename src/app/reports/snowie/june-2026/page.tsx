import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { snowieJune2026Report } from "@/lib/reports/snowie-june-2026";

export const metadata: Metadata = {
  title: "Snowie : June 2026 Organic Search Performance Report",
  description:
    "Snowie monthly organic search performance story for June 2026 compared with May 2026.",
  robots: "noindex, nofollow",
};

export default function SnowieJuneReportPage() {
  return <SeoStoryReport report={snowieJune2026Report} />;
}
