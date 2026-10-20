import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rocking Rays Auto Detailing & Dent Removal LLC | Northern Indiana",
  description:
    "Premium auto detailing and paintless dent repair in the South Bend / Elkhart area. Owned by Willie P. Call (574) 318-5094.",
  keywords: [
    "auto detailing",
    "dent removal",
    "paintless dent repair",
    "PDR",
    "South Bend",
    "Elkhart",
    "Northern Indiana",
    "Rocking Rays",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
