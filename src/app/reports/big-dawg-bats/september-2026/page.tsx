import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { bigDawgBatsSeptember2026Report } from "@/lib/reports/big-dawg-bats-september-2026";

export const metadata: Metadata = {
  title: "Big Dawg Bats : September 2026 Organic Search Performance Report",
  description:
    "Big Dawg Bats monthly organic search performance for September 2026 compared with August 2026.",
  robots: "noindex, nofollow",
};

export default function BigDawgBatsSeptemberReportPage() {
  return <SeoStoryReport report={bigDawgBatsSeptember2026Report} />;
}
