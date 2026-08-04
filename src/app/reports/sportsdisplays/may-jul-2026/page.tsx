import type { Metadata } from "next";

import { RevenueReport } from "@/components/reports/revenue/RevenueReport";
import { sportsDisplaysMayJul2026Report } from "@/lib/reports/sportsdisplays-may-jul-2026";

export const metadata: Metadata = {
  title: "SportsDisplays : May-July 2026 Organic Revenue Report",
  description:
    "SportsDisplays organic search revenue for the three months ending July 31, 2026, with June compared to May and July compared to June.",
  robots: "noindex, nofollow",
};

export default function SportsDisplaysMayJulRevenueReportPage() {
  return <RevenueReport report={sportsDisplaysMayJul2026Report} />;
}
