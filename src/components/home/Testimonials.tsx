"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of ADHD Child",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote:
      "The cognitive assessment for my son was life-changing. The detailed insights helped us understand his learning style, and the strategies provided have made a tremendous difference in his academic performance.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Business Executive",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote:
      "The career aptitude testing gave me clarity on my strengths and weaknesses. I was able to pivot my career path based on the findings, and I've never been happier with my professional life.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Graduate Student",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=200&h=200&fit=crop",
    quote:
      "After struggling with academic anxiety, the neuropsychological testing helped identify the root causes. With their recommended strategies, I'm now performing better than ever in my studies.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Retired Teacher",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote:
      "The emotional intelligence evaluation was eye-opening. It helped me understand patterns in my relationships and provided practical tools for improvement. Highly recommended for anyone seeking personal growth.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-psycho-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-psycho-gray-600 text-lg">
            Real stories from individuals who have experienced the benefits of
            our psychometric assessments.
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-medium rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-psycho-blue-400 to-psycho-blue-600"></div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-medium text-psycho-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-psycho-gray-500 text-sm mb-3">
                    {testimonials[activeIndex].role}
                  </p>

                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonials[activeIndex].rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-psycho-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="relative">
                    <div className="absolute -left-3 -top-2 text-5xl text-psycho-blue-200 font-serif">
                      "
                    </div>
                    <blockquote className="text-psycho-gray-700 text-lg md:text-xl leading-relaxed pl-2 md:pl-6 relative z-10">
                      {testimonials[activeIndex].quote}
                    </blockquote>
                    <div className="absolute -right-3 -bottom-0 text-5xl text-psycho-blue-200 font-serif">
                      "
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-psycho-gray-700 hover:bg-psycho-blue-50 hover:text-psycho-blue-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-psycho-blue-600"
                        : "bg-psycho-gray-300 hover:bg-psycho-blue-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-psycho-gray-700 hover:bg-psycho-blue-50 hover:text-psycho-blue-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
