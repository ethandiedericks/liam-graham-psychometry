import { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Psychometric Services | Liam Graham Psychometry",
  description:
    "Explore our expert psychometric services, including cognitive testing, IQ assessments, ADHD screening, and career guidance.",
  keywords: [
    "psychometry services",
    "cognitive testing",
    "IQ assessment",
    "ADHD screening",
    "career guidance",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Psychological Assessment Services | Liam Graham Psychometry",
    description:
      "We offer expert psychological assessment services for children, adolescents, and adults.",
    url: "https://liamgrahampsychometry.co.za/services",
    siteName: "Liam Graham Psychometry",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychometric Services | Liam Graham Psychometry",
    description:
      "Professional psychological assessments for individuals seeking clarity on cognitive and emotional strengths.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ServicesPage />;
}
