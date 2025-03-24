/* eslint-disable react/no-unescaped-entities */
"use client";

import { avatarPlaceholder } from "@/constants";
import Image, { StaticImageData } from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
}

const testimonial: Testimonial = {
  name: "Dr Gregory Mitchell",
  role: "Clinical Psychologist at Emthonjeni Student Wellness NMU",
  image: avatarPlaceholder,
  quote:
    "Mr. Liam Graham is a dedicated and skilled psychometrist whose diligence ensures precise, insightful assessments. His warm, client-centered approach creates a supportive environment, making the process both effective and engaging. I highly recommend his services for reliable and compassionate evaluations.",
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-psycho-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
            What People Are Saying
          </h2>
          <p className="text-psycho-gray-600 text-lg">
            Real stories from individuals who have experienced the benefits of
            our psychometric assessments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-medium rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-psycho-blue-400 to-psycho-blue-600"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center md:text-center md:items-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image}
                    width={500}
                    height={500}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-medium text-psycho-gray-900 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-psycho-gray-500 text-sm mb-3">
                  {testimonial.role}
                </p>
              </div>

              <div className="md:w-2/3">
                <div className="relative">
                  <div className="absolute -left-3 -top-2 text-5xl text-psycho-blue-200 font-serif">
                    "
                  </div>
                  <blockquote className="text-psycho-gray-700 text-lg md:text-xl leading-relaxed pl-2 md:pl-6 relative z-10">
                    {testimonial.quote}
                  </blockquote>
                  <div className="absolute -right-3 -bottom-0 text-5xl text-psycho-blue-200 font-serif">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
