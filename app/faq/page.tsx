"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ChevronDown, ChevronUp, Navigation, Volume2 } from "lucide-react"

const faqs = [
  {
    question: "How does AuraGoo work?",
    answer:
      "AuraGoo uses advanced AI voice recognition to understand your navigation requests. Simply speak naturally, and Aura will help you find directions, nearby places, and plan routes - all hands-free.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No! AuraGoo works entirely in your web browser. Just visit our website and start using it immediately. No app store downloads required.",
  },
  {
    question: "How many requests do I get with the free plan?",
    answer:
      "The free plan includes 20 voice navigation requests per day. This resets every 24 hours. Premium users get unlimited requests.",
  },
  {
    question: "How do I activate voice recognition?",
    answer:
      "After Aura's first greeting, simply say 'Aura' anytime to activate voice recognition. No buttons or tapping required - it's completely hands-free.",
  },
  {
    question: "Does AuraGoo work offline?",
    answer:
      "Currently, AuraGoo requires an internet connection for voice processing and map data. Offline functionality is planned for premium users in a future update.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "AuraGoo works best on Chrome, Safari, and Edge browsers that support Web Speech API. Firefox support is coming soon.",
  },
  {
    question: "How accurate is the voice recognition?",
    answer:
      "Our AI achieves 95%+ accuracy in quiet environments. Background noise may affect recognition, but Aura will ask for clarification when needed.",
  },
  {
    question: "Can I cancel my premium subscription anytime?",
    answer:
      "Yes, you can cancel your premium subscription at any time. You'll continue to have premium access until the end of your billing period.",
  },
  {
    question: "Is my location data private?",
    answer:
      "Yes, we take privacy seriously. Location data is only used for navigation purposes and is not stored or shared with third parties.",
  },
  {
    question: "What makes AuraGoo different from Google Maps?",
    answer:
      "AuraGoo is voice-first and conversational. Instead of typing and tapping, you have natural conversations with Aura. She understands context, mood, and provides a more human navigation experience.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
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
                  AuraGoo
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about AuraGoo and voice-first navigation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="cursor-pointer" onClick={() => toggleItem(index)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
              <CardDescription>Can't find what you're looking for? Our support team is here to help.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  Contact Support
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
