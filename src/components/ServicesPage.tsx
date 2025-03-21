"use client";
import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, HelpCircle } from "lucide-react";
import Link from "next/link";
import { servicePageImage, services } from "@/constants"; // Import from constants

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 pb-20">
        <PageHeader
          title="Our Services"
          subtitle="Specialized Assessment Solutions"
          description="Comprehensive psychological assessments to help you understand your mind, emotions, and potential."
          imageSrc={servicePageImage}
          imageAlt="Psychological assessment"
        />

        <section className="container mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-psycho-gray-900">
              Our Assessment Services
            </h1>
            <p className="text-psycho-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              We provide comprehensive psychometric evaluations tailored to your
              unique needs, helping you understand yourself better and achieve
              your full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-psycho-blue-600 hover:bg-psycho-blue-700"
                asChild
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services-list">Explore Services</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 mb-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-psycho-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-psycho-blue-100 mb-4 mx-auto">
                  <CheckCircle className="w-6 h-6 text-psycho-blue-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Evidence-Based Methods
                </h3>
                <p className="text-psycho-gray-600">
                  We use only scientifically validated assessment tools and
                  methodologies to ensure accurate and reliable results.
                </p>
              </div>

              <div className="bg-psycho-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-psycho-blue-100 mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-psycho-blue-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Thorough Process
                </h3>
                <p className="text-psycho-gray-600">
                  Each assessment involves comprehensive testing, detailed
                  analysis, and personalized feedback sessions.
                </p>
              </div>

              <div className="bg-psycho-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-psycho-blue-100 mb-4 mx-auto">
                  <HelpCircle className="w-6 h-6 text-psycho-blue-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Actionable Insights
                </h3>
                <p className="text-psycho-gray-600">
                  We translate complex assessment data into practical
                  recommendations that you can implement right away.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services-list" className="container mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
              Comprehensive Evaluations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
              Specialized Assessment Services
            </h2>
            <p className="text-psycho-gray-600 text-lg">
              Explore our range of professional assessment services designed to
              provide insights into cognitive functioning, learning, emotional
              intelligence, career aptitude, and mental health.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedService === service.id
                    ? "shadow-lg border-psycho-blue-200"
                    : "shadow-md hover:shadow-lg"
                }`}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => toggleExpand(service.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-psycho-blue-50 shrink-0">
                          <service.icon.component
                            className={service.icon.className}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-serif mb-1">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-psycho-gray-600">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        <ArrowRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedService === service.id ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                </div>

                {expandedService === service.id && (
                  <CardContent className="pb-6 pt-2">
                    <div className="grid md:grid-cols-12 gap-6">
                      <div className="md:col-span-7">
                        <h4 className="font-medium text-lg mb-3">Overview</h4>
                        <p className="text-psycho-gray-600 mb-4">
                          {service.longDescription}
                        </p>

                        <h4 className="font-medium text-lg mb-3">
                          Assessment Process
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {service.process.map((step, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-psycho-blue-100 text-psycho-blue-600 text-xs font-medium shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-psycho-gray-600">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-psycho-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Typical Duration</h4>
                          <p className="text-psycho-gray-600">
                            {service.duration}
                          </p>
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <div className="bg-psycho-blue-50 p-5 rounded-lg h-full">
                          <h4 className="font-medium text-lg mb-3">
                            Key Benefits
                          </h4>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-5 h-5 text-psycho-blue-600 shrink-0 mt-0.5" />
                                <span className="text-psycho-gray-700">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-medium text-lg mt-6 mb-3">
                            Ideal For
                          </h4>
                          <ul className="space-y-2">
                            {service.ideal.map((person, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-psycho-blue-500 mt-2 shrink-0"></span>
                                <span className="text-psycho-gray-700">
                                  {person}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Ready to Gain Valuable Insights?
            </h2>
            <p className="text-psycho-blue-50 max-w-2xl mx-auto mb-8">
              Our expert team is ready to help you discover your cognitive
              strengths, overcome challenges, and achieve your full potential
              through our comprehensive assessment services.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-psycho-blue-600 hover:bg-psycho-blue-50"
              asChild
            >
              <Link href="/contact">Contact Us for a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
