import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { patientSafetyAugust2026Report } from "@/lib/reports/patient-safety-august-2026";

export const metadata: Metadata = {
  title: "Patient Safety USA : August 2026 Organic Search Performance Report",
  description:
    "Patient Safety USA monthly organic search performance for August 2026 compared with July 2026.",
  robots: "noindex, nofollow",
};

export default function PatientSafetyAugustReportPage() {
  return <SeoStoryReport report={patientSafetyAugust2026Report} />;
}
