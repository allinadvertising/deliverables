import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { customSportsProductsAugust2026Report } from "@/lib/reports/custom-sports-products-august-2026";

export const metadata: Metadata = {
  title: "Custom Sports Products : August 2026 Organic Search Performance Report",
  description:
    "Custom Sports Products organic search baseline for August 2026, with July 2026 as pre-engagement context.",
  robots: "noindex, nofollow",
};

export default function CustomSportsProductsAugustReportPage() {
  return <SeoStoryReport report={customSportsProductsAugust2026Report} />;
}
