import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "All In Advertising Audit Portal",
  description:
    "Revenue-focused client audit deliverables from All In Advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full`}>
      <body className="min-h-full">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
