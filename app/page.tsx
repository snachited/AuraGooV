import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, X, Mic, Navigation, Zap, Heart, Volume2, Star, Users, Clock, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Volume2 className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AuraGoo
                </span>
                <div className="text-xs text-gray-500 -mt-1">Voice-First Navigation</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Button variant="ghost" className="text-gray-600">
                Support
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
              🚀 Trusted by 10,000+ drivers worldwide
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Navigation{" "}
              </span>
              is Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI that understands you like a human co-pilot. No more fumbling with screens while driving.
              Just speak naturally, and Aura handles everything else. This is how navigation should have always worked.
            </p>

            {/* Voice Wave Animation */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-ping opacity-20"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 animate-pulse opacity-10"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/app" className="flex-1">
                <Button
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Experience the Future Free
                </Button>
              </Link>
              <Link href="/premium" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg py-6 border-2 border-indigo-200 hover:bg-indigo-50 bg-transparent"
                >
                  <Star className="mr-2 w-5 h-5" />
                  Unlock Full Power
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Start free forever • Premium: $4.99/month • Join the navigation revolution
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-16">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>10,000+ active drivers</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span>4.9/5 App Store rating</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How AuraGoo Transforms Your Drive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by advanced AI that thinks like your perfect co-pilot. Every interaction feels natural,
              intelligent, and effortlessly human.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">1. Just Speak</CardTitle>
                <CardDescription className="text-base">
                  "Take me to a quiet coffee shop" or "Fastest route to work"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">2. Aura Understands</CardTitle>
                <CardDescription className="text-base">
                  AI processes your intent, mood, and context naturally
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">3. Smart Confirmation</CardTitle>
                <CardDescription className="text-base">
                  "Did you mean Starbucks on Elgin Street?" Simple yes or no.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">4. Adaptive Guidance</CardTitle>
                <CardDescription className="text-base">
                  Continuous support with smart stops and real-time help
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Industry Leaders Choose AuraGoo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While others play catch-up, we're defining the future. See why AuraGoo is becoming the gold standard for
              intelligent navigation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">
                      <div className="flex items-center justify-center space-x-2">
                        <Navigation className="w-5 h-5" />
                        <span>AuraGoo</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">Traditional Maps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">🎙️ Voice-first navigation</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Full conversations</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-yellow-600">
                        <Clock className="w-5 h-5" />
                        <span>Voice commands only</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">🧠 Mood-based suggestions</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Smart context awareness</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-red-600">
                        <X className="w-5 h-5" />
                        <span>Not available</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">🚫 No typing needed</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">100% hands-free</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-red-600">
                        <X className="w-5 h-5" />
                        <span>Typing or tapping needed</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">🤝 Human-like experience</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Friendly AI (Aura)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-red-600">
                        <X className="w-5 h-5" />
                        <span>Robotic or none</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">📌 Memory-based routing</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">"Take me to Mom's house"</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-red-600">
                        <X className="w-5 h-5" />
                        <span>No memory logic</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Problems. Revolutionary Solutions.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every frustration you've had with traditional navigation apps led us to build something extraordinary.
              This is navigation reimagined from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-red-600 text-lg">❌ Problem</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  "I can't touch my phone while driving"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t pt-4">
                  <CardTitle className="text-green-600 text-lg mb-2">✅ AuraGoo Solution</CardTitle>
                  <p className="text-gray-700">Voice-only control from start to finish</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-red-600 text-lg">❌ Problem</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  "I hate typing and searching for restaurants"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t pt-4">
                  <CardTitle className="text-green-600 text-lg mb-2">✅ AuraGoo Solution</CardTitle>
                  <p className="text-gray-700">Speak naturally: "I want sushi nearby"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-red-600 text-lg">❌ Problem</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  "I want to stop for coffee mid-route"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t pt-4">
                  <CardTitle className="text-green-600 text-lg mb-2">✅ AuraGoo Solution</CardTitle>
                  <p className="text-gray-700">Just say it — no detour planning needed</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-red-600 text-lg">❌ Problem</CardTitle>
                <CardDescription className="text-base text-gray-700">
                  "I want something faster and cleaner"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t pt-4">
                  <CardTitle className="text-green-600 text-lg mb-2">✅ AuraGoo Solution</CardTitle>
                  <p className="text-gray-700">Instant map display, no popups, no ads</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Drive Into the Future?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Join the navigation revolution that's already transforming how millions drive. The future doesn't wait – and
            neither should you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Free Plan</CardTitle>
                <div className="text-4xl font-bold text-gray-900 my-4">$0</div>
                <CardDescription className="text-base">Perfect for trying AuraGoo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    20 requests per day
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Voice navigation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Basic Aura AI
                  </li>
                </ul>
                <Link href="/app">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Try Free Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 shadow-2xl bg-white/95 backdrop-blur-sm relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Premium</CardTitle>
                <div className="text-4xl font-bold text-gray-900 my-4">
                  $4.99<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription className="text-base">Or $45/year (save 25%)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited voice usage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Save favorite places
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    Advanced AI features
                  </li>
                </ul>
                <Link href="/premium">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    Go Premium
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-indigo-100 mt-8 text-sm">No contracts • Cancel anytime • 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <Volume2 className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold">AuraGoo</span>
                  <div className="text-xs text-gray-400 -mt-1">Voice-First Navigation</div>
                </div>
              </div>
              <p className="text-gray-400">
                Pioneering the future of intelligent transportation, one conversation at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AuraGoo. All rights reserved. Revolutionizing navigation worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
