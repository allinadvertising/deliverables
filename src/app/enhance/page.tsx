import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import EnhanceSourceTabs from "./EnhanceSourceTabs";

export const metadata: Metadata = {
  title: "Audit HTML Enhancer | All In Advertising",
  description:
    "Convert markdown SEO audits into branded All In Advertising HTML deliverables.",
};

export default function EnhancePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0,#f6f8fb_42%,#eef3fa_100%)] text-[#16243d]">
      <NavBar />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 sm:px-8 lg:px-10">
        <header className="border-b border-[#d9e2ef] pb-8">
          <p className="mb-4 inline-flex border border-[#c9d7e9] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3e71b8] shadow-sm">
            SEO Delivery
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] text-[#16243d] sm:text-5xl">
            Audit HTML Enhancer
          </h1>
        </header>

        <EnhanceSourceTabs />
      </div>
    </main>
  );
}
