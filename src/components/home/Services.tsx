"use client";

import { useState } from "react";
import {
  Brain,
  Target,
  Users,
  Sparkles,
  Award,
  Clipboard,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Cognitive Assessment",
    description:
      "Comprehensive evaluation of intellectual abilities, memory, attention, and executive functioning to identify strengths and areas for improvement.",
    icon: <Brain className="w-6 h-6 text-psycho-blue-600" />,
    benefits: [
      "Detailed analysis of cognitive strengths and weaknesses",
      "Personalized strategies for cognitive enhancement",
      "Educational and career planning insights",
    ],
  },
  {
    id: 2,
    title: "Neuropsychological Testing",
    description:
      "In-depth assessment of brain-behavior relationships to diagnose conditions and develop targeted intervention strategies.",
    icon: <Target className="w-6 h-6 text-psycho-blue-600" />,
    benefits: [
      "Early detection of neurological conditions",
      "Customized rehabilitation programs",
      "Progress monitoring for recovery",
    ],
  },
  {
    id: 3,
    title: "Learning Disability Assessment",
    description:
      "Specialized testing to identify learning disabilities and provide accommodations and interventions for academic success.",
    icon: <Users className="w-6 h-6 text-psycho-blue-600" />,
    benefits: [
      "Educational accommodations recommendations",
      "Personalized learning strategies",
      "Self-advocacy tools and resources",
    ],
  },
  {
    id: 4,
    title: "Emotional Intelligence Evaluation",
    description:
      "Measure and enhance your ability to understand and manage emotions for improved relationships and mental wellbeing.",
    icon: <Sparkles className="w-6 h-6 text-psycho-blue-600" />,
    benefits: [
      "Improved self-awareness and social skills",
      "Stress management techniques",
      "Better relationship dynamics",
    ],
  },
  {
    id: 5,
    title: "Career Aptitude Testing",
    description:
      "Identify your natural talents, interests, and work preferences to make informed educational and career decisions.",
    icon: <Award className="w-6 h-6 text-psycho-blue-600" />,
    benefits: [
      "Aligned career path recommendations",
      "Strengths-based professional development",
      "Increased job satisfaction",
    ],
  },
  {
    id: 6,
    title: "Psychological Assessment",
    description:
      "Evaluate psychological functioning to diagnose mental health conditions and develop effective treatment plans.",
    icon: <Clipboard className="w-6 h-6 text-psycho-blue-600" />,
    benefits: [
      "Accurate diagnosis of psychological conditions",
      "Evidence-based treatment recommendations",
      "Improved quality of life",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-40 right-[20%] w-72 h-72 bg-psycho-gray-400 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-[30%] w-80 h-80 bg-psycho-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
            Specialized Assessment Services
          </h2>
          <p className="text-psycho-gray-600 text-lg">
            Our comprehensive range of psychometric assessments helps
            individuals understand their cognitive abilities, emotional
            patterns, and potential for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-medium border ${
                activeService === service.id
                  ? "border-psycho-blue-300 shadow-blue"
                  : "border-psycho-gray-100 shadow-soft"
              }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-psycho-blue-50 mb-4">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-psycho-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-psycho-gray-600 mb-4">{service.description}</p>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeService === service.id
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-3">
                  <h4 className="font-medium text-psycho-gray-800 mb-2">
                    Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1 h-1 rounded-full bg-psycho-blue-500 mt-2 mr-2"></span>
                        <span className="text-sm text-psycho-gray-600">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-psycho-gray-100">
                <Button
                  variant="ghost"
                  className="text-psycho-blue-600 p-0 h-auto hover:bg-transparent hover:text-psycho-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
