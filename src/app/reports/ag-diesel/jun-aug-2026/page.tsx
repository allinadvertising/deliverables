import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { agDieselJunAug2026Report } from "@/lib/reports/ag-diesel-jun-aug-2026";

export const metadata: Metadata = {
  title: "AG Diesel Solutions : Jun-Aug 2026 Organic Search Revenue Report",
  description:
    "AG Diesel Solutions organic-channel revenue for Jun-Aug 2026 compared with Jun-Aug 2025.",
  robots: "noindex, nofollow",
};

export default function AgDieselJunAug2026ReportPage() {
  return <SeoStoryReport report={agDieselJunAug2026Report} />;
}
