import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { jefcoSeptember2026Report } from "@/lib/reports/jefco-september-2026";

export const metadata: Metadata = {
  title: "Jefco Manufacturing : September 2026 Organic Search Performance Report",
  description:
    "Jefco Manufacturing monthly organic search performance for September 2026 compared with August 2026.",
  robots: "noindex, nofollow",
};

export default function JefcoSeptemberReportPage() {
  return <SeoStoryReport report={jefcoSeptember2026Report} />;
}
