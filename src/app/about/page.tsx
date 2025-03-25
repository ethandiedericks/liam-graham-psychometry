import { Brain, Heart, Trophy, User2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { aboutFace, aboutPageImage } from "@/constants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Liam Graham Psychometry",
  description:
    "Learn about Liam Graham Psychometry, our mission, values, and expert psychological assessment services.",
  keywords: [
    "psychometry",
    "psychological assessment",
    "cognitive testing",
    "career guidance",
    "ADHD screening",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Liam Graham Psychometry",
    description:
      "Discover our commitment to helping individuals through scientifically grounded psychological assessments.",
    url: "https://liamgrahampsychometry.co.za/about",
    siteName: "Liam Graham Psychometry",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Liam Graham Psychometry",
    description:
      "Learn about our mission, values, and multiple years of excellence in psychological assessment services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 pb-20">
        {/* Page Header */}
        <PageHeader
          title="About Us"
          subtitle="Our Story & Mission"
          description="Dedicated to understanding the human mind and helping people unlock their full potential through evidence-based assessments and compassionate care."
          imageSrc={aboutPageImage}
          imageAlt="Psychometry practice"
        />

        {/* Our Mission */}
        <section className="container mb-24 mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-psycho-gray-900">
                Transforming Lives Through Understanding
              </h2>

              <div className="prose prose-lg text-psycho-gray-700 max-w-none">
                <p>
                  Since establishing my psychometry practice in 2023, I have
                  been dedicated to conducting scientifically grounded
                  psychological assessments to help individuals gain a clearer
                  understanding of their cognitive and emotional functioning. In
                  this time, I have provided assessments to a diverse range of
                  clients, always ensuring ethical, accurate, and objective
                  evaluations in line with professional guidelines.
                </p>
                <br />
                <p>
                  I believe that psychological assessment plays a crucial role
                  in self-awareness and informed decision-making. By exploring
                  your cognitive abilities, emotional patterns, and
                  psychological strengths, you can gain valuable insights to
                  navigate personal and professional challenges with confidence.
                  My goal is to provide assessments that support your personal
                  growth while upholding the highest standards of professional
                  integrity and care.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/services" passHref>
                  <Button className="bg-psycho-blue-600 hover:bg-psycho-blue-700 text-white shadow-blue">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute w-full h-full -rotate-2 rounded-2xl bg-psycho-blue-100 top-6 -left-6"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={aboutFace}
                  alt="Our approach"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="bg-psycho-blue-100 p-3 rounded-full">
                    <Trophy size={24} className="text-psycho-blue-600" />
                  </div>
                  <div>
                    <p className="text-psycho-gray-900 font-medium">BA Hons</p>
                    <p className="text-psycho-gray-600 text-sm">Cum Laude</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-psycho-blue-50 py-20 mb-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
                Core Values
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
                What Drives Our Practice
              </h2>
              <p className="text-psycho-gray-600 text-lg">
                Our values form the foundation of everything we do, from how we
                approach assessments to how we interact with our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-medium">
                <div className="bg-psycho-blue-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                  <Brain size={28} className="text-psycho-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-psycho-gray-900">
                  Scientific Rigor
                </h3>
                <p className="text-psycho-gray-600">
                  We are committed to using evidence-based assessment tools and
                  staying current with the latest research in psychological
                  measurement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-medium">
                <div className="bg-psycho-blue-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                  <Heart size={28} className="text-psycho-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-psycho-gray-900">
                  Compassionate Care
                </h3>
                <p className="text-psycho-gray-600">
                  We recognize that seeking psychological assessment can be
                  daunting, and we strive to make the process comfortable and
                  supportive.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-medium">
                <div className="bg-psycho-blue-100 w-14 h-14 flex items-center justify-center rounded-full mb-6">
                  <User2 size={28} className="text-psycho-blue-600" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-psycho-gray-900">
                  Client Empowerment
                </h3>
                <p className="text-psycho-gray-600">
                  We believe in providing clear, actionable information that
                  empowers individuals to make informed decisions about their
                  mental health.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
