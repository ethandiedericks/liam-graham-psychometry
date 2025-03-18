import React from "react";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/home/Contact";
import { contactPageImage } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about our psychological assessment services? Reach out to us today and we'll be happy to assist you.",
  openGraph: {
    title: "Contact Us | Liam Graham Psychometry",
    description:
      "Get in touch with our team of psychological assessment experts for inquiries, appointments, or more information.",
  },
};
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-psycho-blue-50/40">
      <main className="pt-20 pb-20">
        <PageHeader
          title="Get In Touch"
          subtitle="Contact Us"
          description="Have questions about our services? Reach out to us today and we'll be happy to assist you."
          imageSrc={contactPageImage}
          imageAlt="Contact us"
        />

        <div className=" my-16">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
