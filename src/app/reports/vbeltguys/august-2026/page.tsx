import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { vbeltguysAugust2026Report } from "@/lib/reports/vbeltguys-august-2026";

export const metadata: Metadata = {
  title: "V-Belt Guys : August 2026 Organic Search Performance Report",
  description:
    "V-Belt Guys monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function VBeltGuysAugustReportPage() {
  return <SeoStoryReport report={vbeltguysAugust2026Report} />;
}
