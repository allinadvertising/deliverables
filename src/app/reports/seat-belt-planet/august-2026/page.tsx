import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { seatBeltPlanetAugust2026Report } from "@/lib/reports/seat-belt-planet-august-2026";

export const metadata: Metadata = {
  title: "Seat Belt Planet : August 2026 Organic Search Performance Report",
  description: "Seat Belt Planet monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function SeatBeltPlanetAugustReportPage() {
  return <SeoStoryReport report={seatBeltPlanetAugust2026Report} />;
}
