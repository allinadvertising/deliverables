import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All In Advertising Audit Portal",
  description: "Client audit deliverables served from a Next.js portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
