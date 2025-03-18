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
import {
  Brain,
  Target,
  Users,
  Sparkles,
  Award,
  Clipboard,
  ArrowRight,
  CheckCircle,
  Clock,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { servicePageImage } from "@/constants";
import type { Metadata } from "next";
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
  benefits: string[];
  process: string[];
  duration: string;
  ideal: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Cognitive Assessment",
    description:
      "Comprehensive evaluation of intellectual abilities, memory, attention, and executive functioning.",
    longDescription:
      "Our cognitive assessments provide a detailed understanding of your intellectual capabilities, memory functioning, attention span, and executive skills. Using standardized tests and qualitative observations, we create a comprehensive profile of your cognitive strengths and areas for development.",
    icon: <Brain className="w-8 h-8 text-psycho-blue-600" />,
    benefits: [
      "Detailed analysis of cognitive strengths and weaknesses",
      "Personalized strategies for cognitive enhancement",
      "Educational and career planning insights",
      "Early detection of cognitive changes",
      "Targeted intervention recommendations",
    ],
    process: [
      "Initial consultation to understand concerns and goals",
      "Administration of standardized cognitive tests",
      "Qualitative behavioral observations",
      "Comprehensive analysis and report preparation",
      "Detailed feedback session with actionable recommendations",
    ],
    duration: "2-3 sessions (4-5 hours total)",
    ideal: [
      "Students seeking academic accommodations",
      "Adults experiencing cognitive changes",
      "Individuals wanting to optimize cognitive performance",
      "People with attention or memory concerns",
    ],
  },
  {
    id: 2,
    title: "Neuropsychological Testing",
    description:
      "In-depth assessment of brain-behavior relationships to diagnose conditions and develop targeted intervention strategies.",
    longDescription:
      "Neuropsychological testing examines the relationship between brain function and behavior. This comprehensive assessment evaluates cognitive, emotional, and behavioral functioning to identify neurological conditions and develop targeted rehabilitation strategies.",
    icon: <Target className="w-8 h-8 text-psycho-blue-600" />,
    benefits: [
      "Early detection of neurological conditions",
      "Customized rehabilitation programs",
      "Progress monitoring for recovery",
      "Evidence-based treatment planning",
      "Support for medical and legal documentation",
    ],
    process: [
      "Detailed clinical interview and medical history review",
      "Comprehensive battery of neuropsychological tests",
      "Assessment of multiple cognitive domains",
      "Integration of findings with medical information",
      "Development of tailored intervention plan",
    ],
    duration: "4-6 hours (may be divided into multiple sessions)",
    ideal: [
      "Individuals with suspected neurological disorders",
      "Patients recovering from brain injury or stroke",
      "People experiencing unexplained cognitive changes",
      "Individuals with developmental disorders",
    ],
  },
  {
    id: 3,
    title: "Learning Disability Assessment",
    description:
      "Specialized testing to identify learning disabilities and provide accommodations and interventions for academic success.",
    longDescription:
      "Our learning disability assessments identify specific learning challenges that may impact academic performance. We evaluate reading, writing, mathematics, and information processing to develop targeted interventions and accommodations for educational success.",
    icon: <Users className="w-8 h-8 text-psycho-blue-600" />,
    benefits: [
      "Educational accommodations recommendations",
      "Personalized learning strategies",
      "Self-advocacy tools and resources",
      "Enhanced academic performance",
      "Improved educational experience",
    ],
    process: [
      "Comprehensive educational history review",
      "Assessment of academic skills and cognitive abilities",
      "Evaluation of learning styles and preferences",
      "Identification of specific learning challenges",
      "Development of individualized education recommendations",
    ],
    duration: "3-4 sessions (6-8 hours total)",
    ideal: [
      "Students struggling academically despite effort",
      "Individuals seeking educational accommodations",
      "People with suspected dyslexia, dyscalculia, or dysgraphia",
      "Parents seeking guidance for their child's learning needs",
    ],
  },
  {
    id: 4,
    title: "Emotional Intelligence Evaluation",
    description:
      "Measure and enhance your ability to understand and manage emotions for improved relationships and mental wellbeing.",
    longDescription:
      "Our emotional intelligence evaluations assess your capacity to recognize, understand, and manage emotions in yourself and others. This assessment helps develop emotional awareness, regulation, and interpersonal effectiveness for improved relationships and mental wellbeing.",
    icon: <Sparkles className="w-8 h-8 text-psycho-blue-600" />,
    benefits: [
      "Improved self-awareness and social skills",
      "Stress management techniques",
      "Better relationship dynamics",
      "Enhanced communication abilities",
      "Greater workplace effectiveness",
    ],
    process: [
      "Self-assessment questionnaires",
      "Structured interviews about emotional experiences",
      "Situational judgment scenarios",
      "Behavioral observations",
      "Feedback and personalized development planning",
    ],
    duration: "2 sessions (3-4 hours total)",
    ideal: [
      "Professionals seeking leadership development",
      "Individuals experiencing relationship difficulties",
      "People wanting to improve emotional regulation",
      "Teams looking to enhance workplace dynamics",
    ],
  },
  {
    id: 5,
    title: "Career Aptitude Testing",
    description:
      "Identify your natural talents, interests, and work preferences to make informed educational and career decisions.",
    longDescription:
      "Career aptitude testing helps identify your natural talents, interests, personality traits, and work preferences to guide educational and career decisions. Our assessment provides insights into well-suited career paths and professional development opportunities.",
    icon: <Award className="w-8 h-8 text-psycho-blue-600" />,
    benefits: [
      "Aligned career path recommendations",
      "Strengths-based professional development",
      "Increased job satisfaction",
      "Informed educational planning",
      "Confidence in career transitions",
    ],
    process: [
      "Interest and values inventories",
      "Aptitude and skills assessments",
      "Personality measurement",
      "Work preference evaluation",
      "Comprehensive career counseling session",
    ],
    duration: "2 sessions (3-4 hours total)",
    ideal: [
      "Students planning their educational path",
      "Professionals considering career changes",
      "Individuals experiencing job dissatisfaction",
      "People re-entering the workforce",
    ],
  },
  {
    id: 6,
    title: "Psychological Assessment",
    description:
      "Evaluate psychological functioning to diagnose mental health conditions and develop effective treatment plans.",
    longDescription:
      "Our psychological assessments evaluate mental health functioning to diagnose conditions and guide treatment planning. Using standardized measures and clinical interviews, we develop a comprehensive understanding of psychological well-being and create personalized intervention strategies.",
    icon: <Clipboard className="w-8 h-8 text-psycho-blue-600" />,
    benefits: [
      "Accurate diagnosis of psychological conditions",
      "Evidence-based treatment recommendations",
      "Improved quality of life",
      "Personalized therapy approaches",
      "Medication guidance for psychiatrists",
    ],
    process: [
      "Comprehensive clinical interview",
      "Standardized psychological testing",
      "Symptom and functioning assessment",
      "Integrative diagnostic formulation",
      "Collaborative treatment planning",
    ],
    duration: "3-4 sessions (5-7 hours total)",
    ideal: [
      "Individuals experiencing emotional distress",
      "People seeking clarity about mental health symptoms",
      "Patients requiring differential diagnosis",
      "Those needing treatment recommendations",
    ],
  },
];

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive psychometric services including Scholastic Screening, ADHD Assessment, Cognitive Testing, IQ Assessment, and Career Guidance.",
  openGraph: {
    title: "Psychological Assessment Services | Liam Graham Psychometry",
    description:
      "Expert psychological assessment services for children, adolescents and adults to help unlock potential and address challenges.",
  },
};

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-psycho-blue-50/40">
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
                          {service.icon}
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
                  <>
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
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
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
                            <h4 className="font-medium mb-2">
                              Typical Duration
                            </h4>
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
                  </>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-psycho-blue-600 text-white py-16">
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
