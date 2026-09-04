import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { evChargeSolutionsAugust2026Report } from "@/lib/reports/ev-charge-solutions-august-2026";

export const metadata: Metadata = {
  title: "EV Charge Solutions : August 2026 Organic Search Performance Report",
  description:
    "EV Charge Solutions monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function EvChargeSolutionsAugustReportPage() {
  return <SeoStoryReport report={evChargeSolutionsAugust2026Report} />;
}
