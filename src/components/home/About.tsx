"use client";

import { Check, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import about from "@/assets/images/about.jpeg";
import { aboutFace } from "@/constants";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-white via-psycho-blue-50/40 to-white"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute w-full h-full bg-psycho-blue-200 rounded-xl -rotate-3 top-4 -left-4"></div>
            <div className="w-full aspect-[4/3] relative overflow-hidden rounded-xl shadow-medium">
              <Image
                src={about}
                width={7510}
                height={5009}
                alt="About our practice"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-soft absolute -bottom-6 -right-6 max-w-[240px]">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <Image
                    src={aboutFace}
                    width={300}
                    height={300}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Psychologist"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-psycho-gray-900">
                    BA Hons
                  </p>
                  <p className="text-xs text-psycho-gray-500">Cum Laude</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-psycho-gray-900">
              Dedicated to Understanding Your Mind
            </h2>

            <p className="text-psycho-gray-600">
              I&apos;m Liam Graham, a certified psychometrist, dedicated to
              helping you understand your mind on a deeper level. Through
              state-of-the-art cognitive and psychological assessments, I
              combine scientific precision with a compassionate approach to
              provide personalized insights that support your growth and
              well-being.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start">
                <div className="mt-1 bg-psycho-blue-100 rounded-full p-1 mr-3">
                  <Check className="h-4 w-4 text-psycho-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-psycho-gray-900">
                    Evidence-Based Assessment
                  </h3>
                  <p className="text-sm text-psycho-gray-600">
                    Using validated tools and methods to deliver accurate,
                    reliable results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-psycho-blue-100 rounded-full p-1 mr-3">
                  <Shield className="h-4 w-4 text-psycho-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-psycho-gray-900">
                    Confidential and Secure
                  </h3>
                  <p className="text-sm text-psycho-gray-600">
                    Your privacy is our priority with strict confidentiality
                    protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-psycho-blue-100 rounded-full p-1 mr-3">
                  <Award className="h-4 w-4 text-psycho-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-psycho-gray-900">
                    Certified Professionals
                  </h3>
                  <p className="text-sm text-psycho-gray-600">
                    Our team holds advanced degrees and specialized
                    certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 bg-psycho-blue-100 rounded-full p-1 mr-3">
                  <Clock className="h-4 w-4 text-psycho-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-psycho-gray-900">
                    Timely Results
                  </h3>
                  <p className="text-sm text-psycho-gray-600">
                    Comprehensive reports delivered promptly with clear
                    explanations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href={"/contact"} passHref>
                <Button className="bg-psycho-blue-600 hover:bg-psycho-blue-700 hover:cursor-pointer text-white shadow-blue">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
