import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { mossAcresAugust2026Report } from "@/lib/reports/moss-acres-august-2026";

export const metadata: Metadata = {
  title: "Moss Acres : August 2026 Organic Search Performance Report",
  description: "Moss Acres monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function MossAcresAugustReportPage() {
  return <SeoStoryReport report={mossAcresAugust2026Report} />;
}
