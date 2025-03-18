import PageHeader from "@/components/PageHeader";
import { privacyPolicyPageImage } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we collect, use, and protect your personal information at Liam Graham Psychometry.",
  openGraph: {
    title: "Privacy Policy | Liam Graham Psychometry",
    description:
      "Our commitment to data protection, privacy practices, and your rights regarding your personal information.",
  },
};
const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-psycho-blue-50/40">
      <main className="pt-20 pb-20">
        <PageHeader
          title="Legal"
          subtitle="Privacy Policy"
          description="Learn how we collect, use, and protect your personal information."
          imageSrc={privacyPolicyPageImage}
          imageAlt="Privacy policy"
        />

        {/* Privacy Policy Content */}
        <section className="container my-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-medium p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Introduction
                </h2>
                <p className="text-psycho-gray-600">
                  Mindful Metrics respects your privacy and is committed to
                  protecting your personal data. This privacy policy will inform
                  you about how we look after your personal data when you visit
                  our website and tell you about your privacy rights and how the
                  law protects you.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Information We Collect
                </h2>
                <p className="text-psycho-gray-600">
                  We may collect, use, store and transfer different kinds of
                  personal data about you which we have grouped together as
                  follows:
                </p>
                <ul className="list-disc list-inside mt-2 text-psycho-gray-600">
                  <li>
                    <strong>Identity Data</strong> includes first name, last
                    name, username or similar identifier.
                  </li>
                  <li>
                    <strong>Contact Data</strong> includes email address,
                    telephone numbers, and mailing address.
                  </li>
                  <li>
                    <strong>Technical Data</strong> includes internet protocol
                    (IP) address, browser type and version, time zone setting
                    and location, browser plug-in types and versions, operating
                    system and platform, and other technology on the devices you
                    use to access this website.
                  </li>
                  <li>
                    <strong>Usage Data</strong> includes information about how
                    you use our website and services.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  How We Use Your Information
                </h2>
                <p className="text-psycho-gray-600">
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your personal data in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside mt-2 text-psycho-gray-600">
                  <li>To register you as a new client.</li>
                  <li>
                    To process and deliver our psychological assessment
                    services.
                  </li>
                  <li>To manage our relationship with you.</li>
                  <li>
                    To improve our website, services, and customer
                    relationships.
                  </li>
                  <li>
                    To provide recommendations and psychological insights based
                    on assessments.
                  </li>
                  <li>To comply with legal and regulatory obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Data Security
                </h2>
                <p className="text-psycho-gray-600">
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used, or
                  accessed in an unauthorized way, altered, or disclosed. In
                  addition, we limit access to your personal data to those
                  employees, agents, contractors, and other third parties who
                  have a business need to know.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Data Retention
                </h2>
                <p className="text-psycho-gray-600">
                  We will only retain your personal data for as long as
                  necessary to fulfill the purposes we collected it for,
                  including for the purposes of satisfying any legal,
                  accounting, or reporting requirements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Your Legal Rights
                </h2>
                <p className="text-psycho-gray-600">
                  Under certain circumstances, you have rights under data
                  protection laws in relation to your personal data, including
                  the right to:
                </p>
                <ul className="list-disc list-inside mt-2 text-psycho-gray-600">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Changes to the Privacy Policy
                </h2>
                <p className="text-psycho-gray-600">
                  We may update this privacy policy from time to time. The
                  updated version will be indicated by an updated &apos;Last
                  updated&apos; date and the updated version will be effective
                  as soon as it is accessible.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Contact Us
                </h2>
                <p className="text-psycho-gray-600">
                  If you have any questions about this privacy policy or our
                  privacy practices, please contact us at:
                </p>
                <p className="text-psycho-gray-600 mt-2">
                  Email: info@mindfulmetrics.com
                  <br />
                  Phone: (123) 456-7890
                </p>
              </div>

              <p className="text-sm mt-8 text-psycho-gray-500">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
