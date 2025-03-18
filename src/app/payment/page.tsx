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
const PaymentTermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-psycho-blue-50/40">
      <main className="pt-20 pb-20">
        <PageHeader
          title="Billing Information"
          subtitle="Payment Terms & Policies"
          description="Understanding our billing process, insurance coverage, and payment options."
          imageSrc={paymentTermsPageImage}
          imageAlt="Payment and billing"
        />

        {/* Payment Terms Content */}
        <section className="container my-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-medium p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Our Billing Process
                </h2>
                <p className="text-psycho-gray-600">
                  Assessment fees are determined based on the type and
                  complexity of the evaluation required. We will always discuss
                  fees upfront during your initial consultation, and you will
                  receive a written fee agreement before any services begin.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Insurance Coverage
                </h2>
                <p className="text-psycho-gray-600">
                  Many insurance plans provide coverage for psychological
                  assessment services when deemed medically necessary. We
                  recommend contacting your insurance provider directly to
                  verify your specific coverage details. We are happy to provide
                  you with the necessary documentation to submit for
                  reimbursement.
                </p>
                <p className="text-psycho-gray-600 mt-4">
                  We currently accept the following insurance plans:
                </p>
                <ul className="list-disc list-inside mt-2 text-psycho-gray-600">
                  <li>Blue Cross Blue Shield</li>
                  <li>Aetna</li>
                  <li>United Healthcare</li>
                  <li>Cigna</li>
                  <li>Medicare</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Payment Options
                </h2>
                <p className="text-psycho-gray-600">
                  We accept various payment methods to accommodate your
                  preferences:
                </p>
                <ul className="list-disc list-inside mt-2 text-psycho-gray-600">
                  <li>
                    Credit and debit cards (Visa, MasterCard, American Express,
                    Discover)
                  </li>
                  <li>
                    Health Savings Account (HSA) and Flexible Spending Account
                    (FSA) cards
                  </li>
                  <li>Personal checks</li>
                  <li>Cash</li>
                </ul>
                <p className="text-psycho-gray-600 mt-4">
                  Payment is expected at the time of service unless other
                  arrangements have been made in advance.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-psycho-gray-900">
                  Cancellation Policy
                </h2>
                <p className="text-psycho-gray-600">
                  We understand that unexpected events may require you to cancel
                  or reschedule your appointment. We kindly request that you
                  provide at least 48 hours&apos; notice for any cancellations
                  or changes. Appointments canceled with less than 48
                  hours&apos; notice may be subject to a cancellation fee.
                </p>
              </div>

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
