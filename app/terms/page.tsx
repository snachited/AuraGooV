import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Navigation, Volume2 } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <Volume2 className="w-1.5 h-1.5 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AuraGoo
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using AuraGoo ("Service"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-gray-700">
                <p>AuraGoo is a voice-first navigation service that provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Voice-activated navigation and directions</li>
                  <li>Location-based services and recommendations</li>
                  <li>Route planning and optimization</li>
                  <li>Real-time traffic and navigation updates</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-gray-700">
                <p>To access certain features, you may need to create an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <div className="space-y-4 text-gray-700">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious content</li>
                  <li>Interfere with the Service's operation</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Payment</h2>
              <div className="space-y-4 text-gray-700">
                <p>Premium subscriptions are subject to the following terms:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Payment is charged at the beginning of each billing cycle</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                  <li>You can cancel your subscription at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our
                  Privacy Policy, which is incorporated into these terms by reference.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Service and its original content, features, and functionality are owned by AuraGoo and are
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property
                  laws.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The Service is provided "as is" without warranties of any kind. We disclaim all warranties, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accuracy of navigation information</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                </ul>
                <p className="font-semibold">
                  Important: Always use your judgment when driving and follow traffic laws. Do not rely solely on
                  navigation assistance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  To the maximum extent permitted by law, AuraGoo shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loss of profits or revenue</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may terminate or suspend your account and access to the Service immediately, without prior notice,
                  for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes
                  by posting the new terms on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which AuraGoo operates, without regard to conflict of law provisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: legal@auragoo.com</li>
                  <li>
                    Contact form:{" "}
                    <Link href="/contact" className="text-indigo-600 hover:underline">
                      Contact Support
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
