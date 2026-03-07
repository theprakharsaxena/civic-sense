import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivicSense - Local issue reporting",
  description: "Report local issues in your neighborhood like potholes, broken streetlights, or litter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#fafaf9] text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
