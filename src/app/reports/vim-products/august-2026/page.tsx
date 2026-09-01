import type { Metadata } from "next";

import { SeoStoryReport } from "@/components/reports/storytelling/SeoStoryReport";
import { vimProductsAugust2026Report } from "@/lib/reports/vim-products-august-2026";

export const metadata: Metadata = {
  title: "VIM Products : Organic Search Performance Report",
  description:
    "VIM Products organic search performance story for August 2026.",
  robots: "noindex, nofollow",
};

export default function VimProductsAugustReportPage() {
  return <SeoStoryReport report={vimProductsAugust2026Report} />;
}
