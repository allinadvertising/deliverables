import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { toicoJuly2026Report } from "@/lib/reports/toico-july-2026";

export const metadata: Metadata = {
  title: "TOICO : Organic Search Performance Report",
  description:
    "TOICO organic search performance story for July 20-26, 2026.",
  robots: "noindex, nofollow",
};

export default function ToicoJulyReportPage() {
  return <SeoStoryReport report={toicoJuly2026Report} />;
}
