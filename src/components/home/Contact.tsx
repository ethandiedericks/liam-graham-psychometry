"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Display success toast
    // toast({
    //   title: "Request Submitted",
    //   description:
    //     "Thank you! We'll contact you within 24 hours to schedule your appointment.",
    // });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white via-psycho-blue-50/40 to-white"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4 text-psycho-gray-900">
            Book Your Assessment Today
          </h2>
          <p className="text-psycho-gray-600 text-lg">
            Take the first step toward understanding your mind&apos;s potential.
            Schedule a consultation or ask us any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-medium p-6 md:p-8 order-2 md:order-1">
            <h3 className="font-serif text-2xl font-semibold text-psycho-gray-900 mb-6">
              Request an Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-psycho-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-psycho-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-psycho-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-psycho-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-psycho-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-psycho-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-psycho-gray-700 mb-1"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-psycho-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors bg-white"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="cognitive">Cognitive Assessment</option>
                  <option value="neuropsychological">
                    Neuropsychological Testing
                  </option>
                  <option value="learning">
                    Learning Disability Assessment
                  </option>
                  <option value="emotional">
                    Emotional Intelligence Evaluation
                  </option>
                  <option value="career">Career Aptitude Testing</option>
                  <option value="psychological">
                    Psychological Assessment
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-psycho-gray-700 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-psycho-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about any specific concerns or questions"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-psycho-blue-600 hover:bg-psycho-blue-700 text-white shadow-blue py-2.5"
              >
                Request Appointment
              </Button>

              <p className="text-xs text-psycho-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and
                consent to be contacted regarding our services.
              </p>
            </form>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-psycho-blue-700 text-white rounded-xl overflow-hidden shadow-medium">
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <a
                        href="tel:+11234567890"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <a
                        href="mailto:info@mindfulmetrics.com"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        info@mindfulmetrics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Location</h4>
                      <address className="text-white/80 not-italic">
                        123 Cognitive Avenue
                        <br />
                        Suite 200
                        <br />
                        Mindful City, MC 12345
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Calendar size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Operating Days</h4>
                      <p className="text-white/80">Monday - Friday</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Operating Hours</h4>
                      <p className="text-white/80">9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-60 relative">
                <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
                  <Button className="bg-white text-psycho-blue-700 hover:bg-psycho-gray-100">
                    Open in Google Maps
                  </Button>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1577224682124-2444e21b4e93?w=800&h=300&fit=crop"
                  alt="Office location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
