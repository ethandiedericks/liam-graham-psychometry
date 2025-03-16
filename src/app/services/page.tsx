"use client";

import { Brain, Target, Users, Sparkles, Award, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Cognitive Assessment",
    description:
      "Comprehensive evaluation of intellectual abilities, memory, attention, and executive functioning.",
    duration: "2-3 hours",
    price: "$350",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Neuropsychological Testing",
    description:
      "In-depth assessment of brain-behavior relationships for targeted intervention strategies.",
    duration: "3-4 hours",
    price: "$450",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Learning Disability Assessment",
    description:
      "Specialized testing for learning disabilities with detailed accommodation recommendations.",
    duration: "2-3 hours",
    price: "$400",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Emotional Intelligence Evaluation",
    description:
      "Measure and enhance your emotional awareness and management capabilities.",
    duration: "1-2 hours",
    price: "$250",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Career Aptitude Testing",
    description:
      "Discover your natural talents and ideal career paths through comprehensive testing.",
    duration: "2 hours",
    price: "$300",
  },
  {
    icon: <Clipboard className="w-8 h-8" />,
    title: "Psychological Assessment",
    description:
      "Complete psychological evaluation for mental health diagnosis and treatment planning.",
    duration: "3-4 hours",
    price: "$500",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-psycho-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-psycho-gray-900 mb-6">
            Our Assessment Services
          </h1>
          <p className="text-xl text-psycho-gray-600 max-w-2xl mx-auto">
            Professional psychological and cognitive assessments tailored to
            your needs
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-psycho-blue-100 rounded-xl flex items-center justify-center text-psycho-blue-600">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-psycho-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-psycho-gray-100 pt-4 mt-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-psycho-gray-500">Duration</p>
                        <p className="font-medium text-psycho-gray-900">
                          {service.duration}
                        </p>
                      </div>
                      <div className="h-4 w-px bg-psycho-gray-200" />
                      <div>
                        <p className="text-sm text-psycho-gray-500">
                          Starting at
                        </p>
                        <p className="font-medium text-psycho-gray-900">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-psycho-blue-200 text-psycho-blue-600 hover:bg-psycho-blue-50"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-psycho-gray-600 mb-6">
            Not sure which assessment is right for you?
          </p>
          <Button
            size="lg"
            className="bg-psycho-blue-600 hover:bg-psycho-blue-700 text-white"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
