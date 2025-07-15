"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Check, CreditCard, Shield, Star, Navigation, Volume2, Zap, Heart, Clock } from "lucide-react"

export default function PremiumPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Redirect to app with premium access
  }

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
                  AuraGoo Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-200">
            ⭐ Upgrade to Premium
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlock the Full Power of Aura</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get unlimited voice navigation, save favorite places, and enjoy priority support with our premium plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pricing Card */}
          <Card className="border-2 border-indigo-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="text-center">
                <CardTitle className="text-2xl text-gray-900 mb-2">Choose Your Plan</CardTitle>
                <CardDescription>Select monthly or yearly billing</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Button
                  variant={billingCycle === "monthly" ? "default" : "outline"}
                  onClick={() => setBillingCycle("monthly")}
                  className="flex-1"
                >
                  Monthly
                </Button>
                <Button
                  variant={billingCycle === "yearly" ? "default" : "outline"}
                  onClick={() => setBillingCycle("yearly")}
                  className="flex-1 relative"
                >
                  Yearly
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">Save 17%</Badge>
                </Button>
              </div>

              {/* Price Display */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900">${billingCycle === "monthly" ? "4.99" : "45"}</div>
                <div className="text-gray-600">{billingCycle === "monthly" ? "per month" : "per year"}</div>
                {billingCycle === "yearly" && (
                  <div className="text-sm text-green-600 mt-1">Save $14.88 compared to monthly</div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Unlimited voice navigation requests</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Save unlimited favorite places</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority customer support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced AI conversation features</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Offline voice recognition (coming soon)</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom voice commands</span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                <Shield className="w-4 h-4 inline mr-1" />
                30-day money-back guarantee • Cancel anytime
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Payment Details
              </CardTitle>
              <CardDescription>Secure checkout powered by Stripe</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="1234 5678 9012 3456" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span>AuraGoo Premium ({billingCycle})</span>
                    <span>${billingCycle === "monthly" ? "4.99" : "45.00"}</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>${billingCycle === "monthly" ? "4.99" : "45.00"}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Processing..."
                  ) : (
                    <>
                      <Star className="w-5 h-5 mr-2" />
                      Start Premium Now
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to our Terms of Service and Privacy Policy. Your subscription will
                  auto-renew unless cancelled.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Preview */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">What You'll Get with Premium</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Unlimited Usage</CardTitle>
                <CardDescription>No daily limits. Use Aura as much as you want, whenever you want.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Smart Memory</CardTitle>
                <CardDescription>
                  Save favorite places and let Aura remember your preferences and habits.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Priority Support</CardTitle>
                <CardDescription>
                  Get help faster with dedicated premium support and early access to new features.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
