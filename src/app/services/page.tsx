import { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive psychometric services including Scholastic Screening, ADHD Assessment, Cognitive Testing, IQ Assessment, and Career Guidance.",
  openGraph: {
    title: "Psychological Assessment Services | Liam Graham Psychometry",
    description:
      "Expert psychological assessment services for children, adolescents, and adults to help unlock potential and address challenges.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
