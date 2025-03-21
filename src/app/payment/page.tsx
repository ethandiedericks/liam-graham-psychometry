import PageHeader from "@/components/PageHeader";
import { paymentTermsPageImage } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Terms & Policies",
  description:
    "Understanding our billing process, insurance coverage, and payment options for psychological assessment services.",
  openGraph: {
    title: "Payment Terms & Policies | Liam Graham Psychometry",
    description:
      "Information about our billing process, accepted insurance plans, payment methods, and financial assistance options.",
  },
};

export const FEE_STRUCTURE_SECTION = {
  heading: "Fee Structure",
  points: [
    "Rates are based on GEMS medical aid tariffs released annually. Cash-paying clients receive a discounted rate.",
    "Fees for assessments are charged on an hourly basis for client-facing time (intake interview, test administration, and feedback). There is no charge for report writing or scoring.",
    "An assessment quotation will be provided as soon as possible after the intake session once assessment needs are clarified. Extra time, if needed, is charged per hour.",
    "Payment must be received before the final report is provided.",
  ],
};

export const PAYMENT_POLICY_SECTION = {
  heading: "Payment Policy",
  points: [
    "Medical Aid: We accept medical aid payments. It's the client's responsibility to claim from their medical aid. If a claim is rejected, the client (or parent for minors) must settle the bill within 72 hours.",
    "EFT Payments: We accept cash payments via Electronic Funds Transfer (EFT) only—no hard cash. EFT payments must be made upon receipt of invoice, with proof of payment sent to lgrahampsychometry@outlook.com using your ID number as the reference.",
  ],
};

export const CANCELLATION_POLICY_SECTION = {
  heading: "Cancellation Policy",
  points: [
    "We require 24 hours’ cancellation notice. Without this, a cancellation fee will be charged.",
    "Missed Appointments: Cancellation fees for missed appointments cannot be claimed through medical aid as no service was rendered. The client (or parent for minors) must settle the bill within 72 hours.",
  ],
};

const PaymentTermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-psycho-blue-50/40">
      <main className="pt-20 pb-20">
        <PageHeader
          title="Billing Information"
          subtitle="Payment Terms & Policies"
          description="Understanding our billing process, medical aid coverage, and payment options."
          imageSrc={paymentTermsPageImage}
          imageAlt="Payment and billing"
        />

        {/* Payment Terms Content */}
        <section className="container my-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-medium p-8 md:p-12">
            <div className="space-y-8">
              {/* Fee Structure */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  {FEE_STRUCTURE_SECTION.heading}
                </h2>
                <ul className="list-disc list-inside text-psycho-gray-600">
                  {FEE_STRUCTURE_SECTION.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Payment Policy */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  {PAYMENT_POLICY_SECTION.heading}
                </h2>
                <ul className="list-disc list-inside text-psycho-gray-600">
                  {PAYMENT_POLICY_SECTION.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  {CANCELLATION_POLICY_SECTION.heading}
                </h2>
                <ul className="list-disc list-inside text-psycho-gray-600">
                  {CANCELLATION_POLICY_SECTION.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Financial Assistance */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Financial Assistance
                </h2>
                <p className="text-psycho-gray-600">
                  We are committed to making our services accessible. If you
                  have financial concerns, please discuss them with us. We offer
                  sliding scale fees based on financial need and can work with
                  you to develop a payment plan if necessary.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentTermsPage;
