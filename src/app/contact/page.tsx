"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-psycho-gray-50 py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-black/90 max-w-2xl mx-auto">
            Have questions about our services? We&apos;re here to help you find
            the right assessment for your needs.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Phone className="w-8 h-8 text-psycho-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
              Call Us
            </h3>
            <p className="text-psycho-gray-600 mb-4">Mon-Fri, 9am-5pm EST</p>
            <a
              href="tel:+11234567890"
              className="inline-flex items-center text-psycho-blue-600 hover:text-psycho-blue-700"
            >
              (123) 456-7890 <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Mail className="w-8 h-8 text-psycho-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
              Email Us
            </h3>
            <p className="text-psycho-gray-600 mb-4">
              We&apos;ll respond within 24 hours
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center text-psycho-blue-600 hover:text-psycho-blue-700"
            >
              contact@example.com <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <MapPin className="w-8 h-8 text-psycho-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
              Visit Us
            </h3>
            <p className="text-psycho-gray-600 mb-4">
              123 Assessment Ave, Suite 100
            </p>
            <a
              href="#directions"
              className="inline-flex items-center text-psycho-blue-600 hover:text-psycho-blue-700"
            >
              Get Directions <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-psycho-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-psycho-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-psycho-gray-200 focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-psycho-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-psycho-gray-200 focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-psycho-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-psycho-gray-200 focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-psycho-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-psycho-gray-200 focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-psycho-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-psycho-gray-200 focus:ring-2 focus:ring-psycho-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-psycho-blue-600 hover:bg-psycho-blue-700 text-white py-3"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Office Information */}
          <div>
            <h2 className="text-3xl font-bold text-psycho-gray-900 mb-6">
              Our Office
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1696887734419!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-psycho-gray-600">
                  123 Assessment Avenue
                  <br />
                  Suite 100
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
                  Hours of Operation
                </h3>
                <div className="space-y-2 text-psycho-gray-600">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-psycho-gray-900 mb-2">
                  Parking
                </h3>
                <p className="text-psycho-gray-600">
                  Free parking is available in our dedicated lot. Additional
                  street parking is also available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
