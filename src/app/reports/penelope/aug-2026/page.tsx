import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { penelopeAug2026Report } from "@/lib/reports/penelope-aug-2026";

export const metadata: Metadata = {
  title:
    "Penelope and The Beauty Bar : August 2026 Organic Search Performance Report",
  description:
    "Penelope and The Beauty Bar monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function PenelopeAug2026ReportPage() {
  return <SeoStoryReport report={penelopeAug2026Report} />;
}
