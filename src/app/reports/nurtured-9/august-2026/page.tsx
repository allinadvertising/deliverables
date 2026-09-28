import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { nurtured9August2026Report } from "@/lib/reports/nurtured-9-august-2026";

export const metadata: Metadata = {
  title: "Nurtured 9 : August 2026 Organic Search Performance Report",
  description: "Nurtured 9 monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function Nurtured9August2026ReportPage() {
  return <SeoStoryReport report={nurtured9August2026Report} />;
}
