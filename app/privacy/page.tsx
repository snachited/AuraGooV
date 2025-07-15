import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Navigation, Volume2 } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our voice navigation service</li>
                  <li>Create an account or subscribe to premium</li>
                  <li>Contact our support team</li>
                  <li>Provide feedback or participate in surveys</li>
                </ul>
                <p>This may include your name, email address, payment information, and voice commands.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Location Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>To provide navigation services, we collect and process location information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your current location (with your permission)</li>
                  <li>Destination addresses you provide</li>
                  <li>Route preferences and navigation history</li>
                </ul>
                <p>Location data is used solely for navigation purposes and is not stored permanently.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Voice Data</h2>
              <div className="space-y-4 text-gray-700">
                <p>When you use voice commands:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Voice recordings are processed to understand your requests</li>
                  <li>Audio data is not stored after processing</li>
                  <li>We use industry-standard encryption for voice transmission</li>
                  <li>You can disable voice features at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our navigation services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Respond to your requests and provide customer support</li>
                  <li>Send important service updates and notifications</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell, trade, or rent your personal information. We may share information only:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure payment processing through trusted providers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Disable location and voice features</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized experiences</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our service is not intended for children under 13. We do not knowingly collect personal information
                  from children under 13. If we become aware of such collection, we will delete the information
                  immediately.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material changes by
                  posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about this privacy policy, please contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: privacy@auragoo.com</li>
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
