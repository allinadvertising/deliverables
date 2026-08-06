import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { vbeltGuysJuly2026Report } from "@/lib/reports/vbeltguys-july-2026";

export const metadata: Metadata = {
  title: "V-Belt Guys : July 2026 Organic Search Performance Report",
  description:
    "V-Belt Guys monthly organic search performance for July 2026 compared with June 2026.",
  robots: "noindex, nofollow",
};

export default function VBeltGuysJulyReportPage() {
  return <SeoStoryReport report={vbeltGuysJuly2026Report} />;
}
