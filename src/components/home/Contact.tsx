"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
import { contactDetails } from "@/constants";
import Link from "next/link";
import { toast } from "sonner";
import { z } from "zod";
import Script from "next/script";

// Define the schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
  recaptchaToken: z.string().min(1, { message: "reCAPTCHA validation failed" }),
});

// Type for our form data based on the schema
type ContactFormData = z.infer<typeof contactFormSchema>;

// Declare global grecaptcha type
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    recaptchaToken: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Get reCAPTCHA site key from environment variable
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  // Load reCAPTCHA when component mounts
  useEffect(() => {
    if (recaptchaLoaded && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        console.log("reCAPTCHA is ready");
      });
    }
  }, [recaptchaLoaded]);

  const getRecaptchaToken = async () => {
    if (!window.grecaptcha) {
      console.error("reCAPTCHA not loaded");
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(recaptchaSiteKey, {
        action: "contact_form_submit",
      });
      return token;
    } catch (error) {
      console.error("Error getting reCAPTCHA token:", error);
      return null;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA validation failed. Please try again later.");
      }

      // Add token to form data
      const formWithToken = {
        ...formData,
        recaptchaToken,
      };

      // Validate form data
      const validatedData = contactFormSchema.parse(formWithToken);
      setErrors({});

      // Send form data to API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Display success toast using Sonner
      toast.success("Request Submitted", {
        description:
          "Thank you! We'll contact you within 24 hours to schedule your appointment.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        recaptchaToken: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        // Handle other errors using Sonner
        toast.error("Error", {
          description:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Load reCAPTCHA script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        onLoad={() => setRecaptchaLoaded(true)}
      />

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
              Take the first step toward understanding your mind&apos;s
              potential. Schedule a consultation or ask us any questions.
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
                    className={`w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-psycho-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
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
                      className={`w-full px-4 py-2 border ${
                        errors.email
                          ? "border-red-500"
                          : "border-psycho-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
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
                      className={`w-full px-4 py-2 border ${
                        errors.phone
                          ? "border-red-500"
                          : "border-psycho-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
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
                    className={`w-full px-4 py-2 border ${
                      errors.service
                        ? "border-red-500"
                        : "border-psycho-gray-300"
                    } rounded-md text-psycho-gray-700 focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors bg-white`}
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
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.service}
                    </p>
                  )}
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
                    className={`w-full px-4 py-2 border ${
                      errors.message
                        ? "border-red-500"
                        : "border-psycho-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent transition-colors resize-none`}
                    placeholder="Tell us about any specific concerns or questions"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-psycho-blue-600 hover:bg-psycho-blue-700 text-white shadow-blue py-2.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Appointment"}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-psycho-gray-500 mt-4">
                    This site is protected by reCAPTCHA.
                  </p>
                  <p className="text-xs text-psycho-gray-500 text-center mt-1">
                    By submitting this form, you agree to our{" "}
                    <Link href={"/privacy-policy"} className="underline">
                      privacy policy
                    </Link>{" "}
                    and consent to be contacted regarding our services.
                  </p>
                </div>
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
                        <Link
                          href={`tel:${contactDetails.phone}`}
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          {contactDetails.phone}
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                        <Mail size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Email</h4>
                        <Link
                          href={`mailto:${contactDetails.email}`}
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          {contactDetails.email}
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Location</h4>
                        <address className="text-white/80 not-italic">
                          {contactDetails.location[0]}
                          <br />
                          {contactDetails.location[1]}
                          <br />
                          {contactDetails.location[2]}
                          <br />
                          {contactDetails.location[3]}
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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.651361933912!2d25.56845992552307!3d-33.95009402319553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad3d4890e8b77%3A0x67d6f18b368f7e5b!2sMetropolitan%20Port%20Elizabeth%20(Greenacres)!5e0!3m2!1sen!2sza!4v1742303777929!5m2!1sen!2sza"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
