import type { Metadata, Viewport } from "next";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Liam Graham Psychometry",
  description:
    "Liam Graham Psychometry specializes in Scholastic Screening, Special School Placement, ADHD Screening, Cognitive Ability, School Readiness, Behaviour, Concessions, IQ and Career Guidance.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
