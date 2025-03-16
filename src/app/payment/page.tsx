import { Button } from "@/components/ui/button";
import { Check, CreditCard, FileText, Clock, AlertCircle } from "lucide-react";

const PaymentTermsPage = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-15">
        <section className="section-padding bg-gradient-to-b from-white via-psycho-blue-50/40 to-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="text-sm font-medium text-psycho-blue-600 uppercase tracking-wider">
                Policies
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-psycho-gray-900 mt-2 mb-8">
                Payment Terms & Policies
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-psycho-gray-600">
                  At Mindful Metrics, we strive to maintain transparent and fair
                  payment policies for all our psychological assessment
                  services. Please review our payment terms below to understand
                  our billing procedures, cancellation policies, and insurance
                  information.
                </p>

                <div className="bg-white rounded-xl border border-psycho-gray-100 shadow-soft p-6 my-8">
                  <h3 className="font-serif text-xl font-semibold text-psycho-gray-900 mb-4 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-psycho-blue-600" />
                    Payment Methods
                  </h3>
                  <p className="text-psycho-gray-600 mb-4">
                    We accept the following payment methods for all our
                    services:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>
                        All major credit and debit cards (Visa, Mastercard,
                        American Express, Discover)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>
                        Health Savings Accounts (HSA) and Flexible Spending
                        Accounts (FSA)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>Electronic funds transfer</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>
                        Payment plans available for comprehensive assessment
                        packages
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-psycho-gray-100 shadow-soft p-6 my-8">
                  <h3 className="font-serif text-xl font-semibold text-psycho-gray-900 mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-psycho-blue-600" />
                    Billing Schedule
                  </h3>
                  <p className="text-psycho-gray-600 mb-4">
                    Our billing process is structured to be clear and
                    predictable:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-psycho-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-psycho-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-psycho-gray-800">
                          Initial Assessment
                        </p>
                        <p className="text-psycho-gray-600">
                          50% deposit required at booking, remaining balance due
                          at completion
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-psycho-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-psycho-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-psycho-gray-800">
                          Testing Sessions
                        </p>
                        <p className="text-psycho-gray-600">
                          Billed per session or as part of a comprehensive
                          package
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-psycho-blue-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-psycho-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-psycho-gray-800">
                          Results Consultation
                        </p>
                        <p className="text-psycho-gray-600">
                          Included in assessment fee if scheduled within 30 days
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-psycho-gray-100 shadow-soft p-6 my-8">
                  <h3 className="font-serif text-xl font-semibold text-psycho-gray-900 mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-psycho-blue-600" />
                    Insurance & Documentation
                  </h3>
                  <p className="text-psycho-gray-600 mb-4">
                    While we don&apos;t directly bill insurance companies, we
                    provide all necessary documentation:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>
                        Detailed receipts with all required service codes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>Superbills for insurance reimbursement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-psycho-blue-600 mr-2 mt-0.5" />
                      <span>Letters of medical necessity upon request</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-psycho-gray-100 shadow-soft p-6 my-8">
                  <h3 className="font-serif text-xl font-semibold text-psycho-gray-900 mb-4 flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5 text-psycho-blue-600" />
                    Cancellation Policy
                  </h3>
                  <div className="space-y-4">
                    <p className="text-psycho-gray-600">
                      We understand that schedules change, but we request your
                      consideration when canceling appointments:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-psycho-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Clock className="h-4 w-4 text-psycho-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-psycho-gray-800">
                            48+ Hours Notice
                          </p>
                          <p className="text-psycho-gray-600">
                            Full refund or reschedule with no penalty
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-psycho-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Clock className="h-4 w-4 text-psycho-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-psycho-gray-800">
                            24-48 Hours Notice
                          </p>
                          <p className="text-psycho-gray-600">
                            Reschedule available, 25% cancellation fee may apply
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-psycho-blue-100 rounded-full p-1 mr-3 mt-0.5">
                          <Clock className="h-4 w-4 text-psycho-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-psycho-gray-800">
                            Less than 24 Hours Notice
                          </p>
                          <p className="text-psycho-gray-600">
                            50% cancellation fee may apply
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="text-psycho-gray-600 mt-4">
                      Exceptions may be made for emergencies and illness on a
                      case-by-case basis.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12 mb-8">
                  <h3 className="font-serif text-xl font-semibold text-psycho-gray-900 mb-4">
                    Questions About Our Payment Policies?
                  </h3>
                  <p className="text-psycho-gray-600 mb-6">
                    Our team is happy to discuss payment options, insurance
                    questions, or any other billing concerns you may have.
                  </p>
                  <Button className="bg-psycho-blue-600 hover:bg-psycho-blue-700 text-white shadow-blue">
                    Contact Our Billing Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentTermsPage;
