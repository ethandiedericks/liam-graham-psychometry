"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services as indexServices } from "@/constants"; // Import services from constants

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Map the index services to match the simpler structure used in this component
  const simplifiedServices = indexServices.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    icon: <service.icon.component className={service.icon.className} />,
    benefits: service.benefits,
  }));

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
          {simplifiedServices.map((service) => (
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
                <Link href={"/services"}>
                  <Button
                    variant="ghost"
                    className="text-psycho-blue-600 p-0 h-auto hover:bg-transparent hover:text-psycho-blue-800 hover:cursor-pointer hover:underline font-medium"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
