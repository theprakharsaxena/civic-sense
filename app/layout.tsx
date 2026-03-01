import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivicPulse — Civic Sense Awareness & Community Reporting",
  description:
    "Empowering citizens with civic sense education and community issue reporting. Report potholes, pollution, traffic violations and more. Together, let's build better communities.",
  keywords: [
    "civic sense",
    "community reporting",
    "issue reporting",
    "civic awareness",
    "public safety",
    "environment",
    "traffic safety",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
