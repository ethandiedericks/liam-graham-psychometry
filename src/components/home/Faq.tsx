"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is psychometry and how can it help me?",
    answer:
      "Psychometry is the science of measuring mental abilities, processes, and traits through standardized tests. It can help you understand your cognitive strengths and weaknesses, identify potential learning disabilities, guide career decisions, and inform treatment plans for various mental health conditions.",
  },
  {
    question: "How long does an assessment usually take?",
    answer:
      "Assessment duration varies depending on the type of evaluation needed. A standard cognitive assessment typically takes 2-3 hours, while comprehensive neuropsychological testing may require 4-6 hours, sometimes split across multiple sessions to prevent fatigue and ensure accurate results.",
  },
  {
    question: "How should I prepare for my assessment?",
    answer:
      "Get a good night's sleep before your appointment, eat a nutritious meal, and avoid caffeine or other stimulants that might affect your performance. Bring any relevant medical records, previous testing results, and a list of current medications. Wear comfortable clothing and bring reading glasses if you use them.",
  },
  {
    question: "When will I receive my assessment results?",
    answer:
      "Most clients receive their results within 2-3 weeks after completing the assessment. We'll schedule a feedback session to explain your results in detail, answer any questions, and discuss recommendations. You'll also receive a comprehensive written report.",
  },
  {
    question: "Are the assessment results confidential?",
    answer:
      "Yes, all assessment results are strictly confidential and protected under healthcare privacy laws. Information is only shared with third parties (such as schools or employers) with your explicit written consent, except in rare cases where there is a risk of harm to yourself or others.",
  },
  {
    question: "Does Medical Aid cover psychometric assessments?",
    answer:
      "Many Medical plans cover psychometric assessments when they're medically necessary. Coverage varies by provider and plan. We recommend contacting your Medical company directly to verify coverage.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-psycho-gray-600 text-lg">
            Find answers to common questions about our psychometric assessment
            services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "border-psycho-blue-300 shadow-blue"
                    : "border-psycho-gray-200"
                }`}
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className="font-medium text-psycho-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`text-psycho-gray-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 pt-0 text-psycho-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-psycho-gray-600">
              Still have questions? We&apos;re here to help!
            </p>
            <Link
              href="#contact"
              className="text-psycho-blue-600 font-medium hover:text-psycho-blue-800 transition-colors inline-block mt-2"
            >
              Contact us for more information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
