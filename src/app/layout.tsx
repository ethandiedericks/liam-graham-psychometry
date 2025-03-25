import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

// Initialize the Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
});

// Site metadata from environment variables
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://liamgrahampsychometry.co.za";
const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME || "Liam Graham Psychometry";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Expert psychometric assessments in South Africa. Services include ADHD Screening, IQ Testing, Career Guidance, and Special School Placement.";
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Psychometric Assessments & Career Guidance`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "psychometry South Africa",
    "educational psychologist",
    "scholastic screening services",
    "ADHD screening tests",
    "cognitive ability assessments",
    "IQ testing near me",
    "career guidance counselor",
    "school readiness assessment",
    "special school placement SA",
  ],
  authors: [
    {
      name: "Liam Graham",
      url: SITE_URL,
    },
  ],
  creator: "Liam Graham",
  publisher: SITE_NAME,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL, // Use full absolute URL
    languages: {
      "en-ZA": `${SITE_URL}/en-ZA`,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Psychometric Assessments & Career Guidance`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Liam Graham Psychometry - Expert Assessments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Expert Psychometric Assessments`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image.jpg`],
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: process.env.NEXT_PUBLIC_THEME_COLOR_LIGHT || "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: process.env.NEXT_PUBLIC_THEME_COLOR_DARK || "#111111",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
