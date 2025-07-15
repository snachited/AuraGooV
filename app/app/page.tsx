"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, Volume2, MapPin, ArrowLeft, Settings, Heart, Brain, Star, Save } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available

export default function AppPage() {
  const [isListening, setIsListening] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("")
  const [usageCount, setUsageCount] = useState(3)
  const [maxUsage, setMaxUsage] = useState(20)
  const [hasStarted, setHasStarted] = useState(false)
  const [userLocation, setUserLocation] = useState<string>("")
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: string; content: string }>>([])
  const [microphoneDenied, setMicrophoneDenied] = useState(false)
  const [isProUser, setIsProUser] = useState(false) // Simulate premium user status

  const { toast } = useToast() // Initialize toast

  // MediaRecorder specific states and refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const listeningTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const audioStreamRef = useRef<MediaStream | null>(null)

  // Enhanced speech synthesis with a consistent, excited, and friendly female voice
  const speakMessage = useCallback((message: string, onEndCallback?: () => void) => {
    if (!("speechSynthesis" in window)) {
      console.warn("Speech Synthesis not supported in this browser.")
      if (onEndCallback) onEndCallback() // Call callback even if no speech
      return
    }

    const speak = () => {
      speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(message)
      const voices = speechSynthesis.getVoices()

      // Prioritize a normal US English professional female voice
      let selectedVoice = voices.find(
        (voice) =>
          voice.lang === "en-US" &&
          (voice.name.toLowerCase().includes("google us english") ||
            voice.name.toLowerCase().includes("microsoft zira") ||
            voice.name.toLowerCase().includes("female")),
      )

      if (!selectedVoice) {
        // Fallback to any en-US female voice
        selectedVoice = voices.find(
          (voice) =>
            voice.lang === "en-US" &&
            (voice.name.toLowerCase().includes("female") || (voice as any).gender === "female"),
        )
      }

      if (!selectedVoice && voices.length > 0) {
        selectedVoice = voices.find((voice) => voice.name.toLowerCase().includes("female")) || voices[0] // Fallback to any female or first available
        console.warn(
          "No specific US English female voice found, using:",
          selectedVoice?.name || "first available voice",
        )
      } else if (!selectedVoice) {
        console.warn("No voices found at all. Cannot speak.")
        if (onEndCallback) onEndCallback()
        return // Cannot speak if no voices
      }

      utterance.voice = selectedVoice
      utterance.rate = 1.05 // Slightly faster for general
      utterance.pitch = 1.2 // Higher pitch for friendly and excited tone
      utterance.volume = 0.9 // Clear volume

      utterance.onend = () => {
        console.log("Aura finished speaking.")
        if (onEndCallback) onEndCallback()
      }

      utterance.onerror = (event) => {
        console.error("SpeechSynthesisUtterance error:", event)
        if (onEndCallback) onEndCallback()
      }

      speechSynthesis.speak(utterance)
      console.log("Aura speaking:", message)
    }

    // Check if voices are already loaded
    if (speechSynthesis.getVoices().length > 0) {
      speak()
    } else {
      // If not, wait for voices to be loaded
      speechSynthesis.onvoiceschanged = () => {
        speak()
        speechSynthesis.onvoiceschanged = null // Remove listener after voices are loaded
      }
    }
  }, [])

  // Function to start recording audio
  const startRecording = useCallback(async () => {
    if (!isProUser && usageCount >= maxUsage) {
      // Check usage only for free users
      console.log("Cannot start recording: Free plan limit reached.")
      setCurrentMessage("You've reached your daily limit. Upgrade to Premium for unlimited conversations!")
      speakMessage("You've reached your daily limit. Upgrade to Premium for unlimited conversations!")
      return
    }

    if (microphoneDenied) {
      console.log("Cannot start recording: Microphone access denied.")
      return
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      console.log("Already recording, skipping startRecording.")
      return
    }

    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      audioStreamRef.current = stream // Store stream to stop tracks later

      mediaRecorderRef.current = new MediaRecorder(stream)
      audioChunksRef.current = [] // Clear previous chunks

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorderRef.current.onstop = async () => {
        setIsListening(false)
        console.log("Recording stopped. Processing audio...")
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })

        if (audioBlob.size === 0) {
          console.warn("Recorded audio blob is empty, skipping transcription.")
          setCurrentMessage("I didn't hear anything. Please try speaking after I finish talking!")
          speakMessage("I didn't hear anything. Please try speaking after I finish talking!", () => {
            // After speaking, automatically start listening again
            setTimeout(startRecording, 1000)
          })
          return
        }

        // Send audio to transcription API
        const formData = new FormData()
        formData.append("audio", audioBlob, "audio.webm")

        try {
          setCurrentMessage("🧠 Aura is thinking...")
          const transcribeResponse = await fetch("/api/transcribe", {
            method: "POST",
            body: formData,
          })

          if (!transcribeResponse.ok) {
            const errorText = await transcribeResponse.text() // Get raw text to debug non-JSON
            console.error("Transcription API error response:", errorText)
            let errorData
            try {
              errorData = JSON.parse(errorText)
            } catch (e) {
              errorData = { message: `Non-JSON response from server: ${errorText.substring(0, 100)}...` }
            }
            throw new Error(errorData.message || "Failed to transcribe audio.")
          }

          const { text: transcribedText } = await transcribeResponse.json()
          console.log("Transcribed text:", transcribedText)

          if (transcribedText.trim() === "") {
            setCurrentMessage("I heard something, but couldn't understand. Could you please try again?")
            speakMessage("I heard something, but couldn't understand. Could you please try again?", () => {
              setTimeout(startRecording, 1000)
            })
            return
          }

          // Process with AI using the transcribed text
          await processWithAI(transcribedText)
        } catch (error) {
          console.error("Transcription or AI processing error:", error)
          let fallbackMessage =
            "Oh dear, I'm having a little trouble understanding right now. Could you please try rephrasing your request?"

          if (error instanceof SyntaxError && error.message.includes("Unexpected token")) {
            fallbackMessage =
              "Aura encountered a server error. Please ensure your OpenAI API key is correctly set in Vercel environment variables. Check the browser console for more details."
          } else if (error instanceof Error) {
            fallbackMessage = `Aura encountered an error: ${error.message}. Please try again.`
          }

          setCurrentMessage(fallbackMessage)
          speakMessage(fallbackMessage, () => {
            setTimeout(startRecording, 1000)
          })
        } finally {
          // Stop all tracks on the stream to release microphone
          if (audioStreamRef.current) {
            audioStreamRef.current.getTracks().forEach((track) => track.stop())
            audioStreamRef.current = null
          }
        }
      }

      mediaRecorderRef.current.start()
      setIsListening(true)
      setCurrentMessage(
        "🎤 I'm listening intently! Tell me anything - where you want to go, ask me questions, or just chat!",
      )
      console.log("Recording started.")

      // Set a timeout to stop recording after a few seconds of silence or fixed duration
      if (listeningTimeoutRef.current) {
        clearTimeout(listeningTimeoutRef.current)
      }
      listeningTimeoutRef.current = setTimeout(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
          console.log("Listening timeout reached, stopping recording.")
          mediaRecorderRef.current.stop()
        }
      }, 7000) // Listen for up to 7 seconds
    } catch (err) {
      console.error("Error accessing microphone:", err)
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setMicrophoneDenied(true)
        setCurrentMessage("Please allow microphone access so I can hear you. Check your browser settings to enable it.")
        speakMessage("Please allow microphone access so I can hear you. Check your browser settings to enable it.")
      } else {
        setCurrentMessage("Failed to start microphone. Please ensure it's connected and try again.")
        speakMessage("Failed to start microphone. Please ensure it's connected and try again.")
      }
      setIsListening(false)
    }
  }, [microphoneDenied, usageCount, maxUsage, speakMessage, isProUser])

  // Advanced AI processing using a real AI model via API route
  const processWithAI = useCallback(
    async (userInput: string) => {
      try {
        // Add user input to conversation history
        const newHistory = [...conversationHistory, { role: "user", content: userInput }]
        setConversationHistory(newHistory) // Update state immediately for UI feedback

        setCurrentMessage("🧠 Aura is thinking...") // Immediate feedback
        speakMessage("Hmm, let me think about that for a moment!") // Aura's thinking sound

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: newHistory }),
        })

        if (!response.ok) {
          const errorText = await response.text() // Get raw text to debug non-JSON
          console.error("AI API error response:", errorText)
          let errorData
          try {
            errorData = JSON.parse(errorText)
          } catch (e) {
            errorData = { message: `Non-JSON response from server: ${errorText.substring(0, 100)}...` }
          }
          throw new Error(errorData.message || "Failed to get response from AI.")
        }

        const data = await response.json()
        const aiResponse = data.message

        // Update conversation history with AI's response
        setConversationHistory((prev) => [...prev, { role: "assistant", content: aiResponse }])

        setCurrentMessage(aiResponse)
        speakMessage(aiResponse, () => {
          // After Aura speaks, automatically start listening again
          if (!isProUser && usageCount < maxUsage) {
            // Only restart if not over limit for free users
            setTimeout(startRecording, 1000) // Small delay before listening again
          } else if (isProUser) {
            setTimeout(startRecording, 1000) // Always restart for pro users
          } else {
            setCurrentMessage("You've reached your daily limit. Upgrade to Premium for unlimited conversations!")
          }
        })
        if (!isProUser) {
          // Increment usage only for free users
          setUsageCount((prev) => prev + 1)
        }

        return aiResponse
      } catch (error) {
        console.error("AI processing error:", error)
        const fallbackMessage =
          "Oh dear, I'm having a little trouble connecting to my super smart brain right now! Could you please try rephrasing your request? I'm still here and eager to help!"
        setCurrentMessage(fallbackMessage)
        speakMessage(fallbackMessage, () => {
          if (!isProUser && usageCount < maxUsage) {
            // Only restart if not over limit for free users
            setTimeout(startRecording, 1000)
          } else if (isProUser) {
            setTimeout(startRecording, 1000) // Always restart for pro users
          }
        })
        return fallbackMessage
      }
    },
    [conversationHistory, speakMessage, usageCount, maxUsage, isProUser, startRecording],
  )

  // Get real user location with reverse geocoding
  const getRealLocation = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      )
      const data = await response.json()

      if (data && data.locality && data.principalSubdivision) {
        const address = `${data.locality}, ${data.principalSubdivision}, ${data.countryName}`
        setUserLocation(`📍 Current Location: ${address}`)

        // Add location to conversation context
        setConversationHistory((prev) => [
          ...prev,
          {
            role: "system",
            content: `User's current location is: ${address}`,
          },
        ])
      } else {
        setUserLocation(`📍 Current Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`)
      }
    } catch (error) {
      console.error("Geocoding error:", error)
      setUserLocation(`📍 Current Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`)
    }
  }

  // Auto-start with enhanced greeting and then start listening
  useEffect(() => {
    if (!hasStarted) {
      // Get real location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            getRealLocation(position.coords.latitude, position.coords.longitude)
          },
          (error) => {
            console.error("Geolocation error:", error)
            setUserLocation("📍 Location access needed for better navigation")
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 300000,
          },
        )
      }

      // Exact greeting message
      const greeting =
        "Hello! I’m Aura, your smart travel companion. Just say where you want to go I’ll take care of the rest."

      setCurrentMessage(greeting)

      // Initialize conversation history with system prompt and initial greeting
      setConversationHistory([
        {
          role: "system",
          content:
            "You are Aura, an enthusiastic and super intelligent voice navigation assistant. You have a warm, friendly, and excited personality. You understand natural language perfectly and provide helpful, contextual responses. You remember the conversation context and are proactive. Always be helpful and enthusiastic. Do not mention other AI assistants or brands.",
        },
        { role: "assistant", content: greeting },
      ])

      // Speak greeting and then start recording
      speakMessage(greeting, () => {
        // After greeting finishes, automatically start recording
        if (!isProUser && usageCount < maxUsage) {
          // Only start if not over limit for free users
          setTimeout(startRecording, 1000) // Small delay before listening
        } else if (isProUser) {
          setTimeout(startRecording, 1000) // Always start for pro users
        }
      })

      setHasStarted(true)
    }
  }, [hasStarted, speakMessage, startRecording, usageCount, maxUsage, isProUser])

  // Cleanup function for MediaRecorder and stream
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop()
      }
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((track) => track.stop())
      }
      if (listeningTimeoutRef.current) {
        clearTimeout(listeningTimeoutRef.current)
      }
    }
  }, [])

  const handleSavePlace = () => {
    if (isProUser) {
      toast({
        title: "Place Saved!",
        description: "Your current location has been saved to your favorite places.",
      })
      console.log("Simulating saving place for Pro user.")
      // In a real app, this would trigger a backend call to save the location
    } else {
      toast({
        title: "Upgrade to Premium",
        description: "Save unlimited favorite places with AuraGoo Premium!",
        action: (
          <Link href="/premium">
            <Button variant="outline" className="shrink-0 bg-transparent">
              Upgrade
            </Button>
          </Link>
        ),
      })
      console.log("Save place feature requires Premium plan.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
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
            <div className="flex items-center space-x-4">
              <Badge
                variant="outline"
                className={isProUser ? "text-green-600 border-green-200" : "text-orange-600 border-orange-200"}
              >
                {isProUser ? "Premium Plan: Unlimited" : `Free Plan: ${usageCount}/20 used today`}
              </Badge>
              {/* Toggle for testing purposes */}
              <Button variant="ghost" size="sm" onClick={() => setIsProUser(!isProUser)}>
                <Star className="w-4 h-4 mr-1" /> {isProUser ? "Switch to Free" : "Switch to Pro"}
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Map Area */}
        <div className="flex-1 relative bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Smart Navigation Map</h3>
              <p className="text-gray-500">AI-powered map will appear when you start navigation</p>
              {userLocation && (
                <div className="mt-4 p-3 bg-white rounded-lg shadow-md max-w-md mx-auto">
                  <p className="text-sm text-gray-700">{userLocation}</p>
                </div>
              )}
            </div>
          </div>

          {/* Floating Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
              <Navigation className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm" onClick={handleSavePlace}>
              <Save className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Voice Interface Panel */}
        <div className="w-full lg:w-96 bg-white border-l flex flex-col">
          {/* Aura Avatar */}
          <div className="p-6 border-b bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="text-center">
              <div className="relative mx-auto mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  {isListening ? (
                    <Brain className="w-10 h-10 text-white animate-pulse" />
                  ) : (
                    <Volume2 className="w-10 h-10 text-white" />
                  )}
                </div>
                {isListening && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-ping opacity-20"></div>
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 animate-pulse opacity-10"></div>
                  </>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900">Aura AI</h2>
              <p className="text-sm text-gray-600">Super Intelligent Navigation Assistant</p>
              <div className="mt-2">
                <Badge variant={isListening ? "default" : "secondary"} className="text-xs">
                  {isListening ? "🧠 AI Processing..." : "🤖 Advanced AI Ready"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Enhanced Conversation */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-4">
              {currentMessage && (
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800">{currentMessage}</p>
                      <p className="text-xs text-gray-500 mt-1">Just now</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">🧠 Advanced AI Features:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Natural, human-like conversation</li>
                <li>• Understands context and intent</li>
                <li>• Smart navigation suggestions</li>
                <li>• Remembers our conversation</li>
                <li>• Handles any question or request</li>
                <li>• Fully hands-free experience</li>
                {isProUser && (
                  <>
                    <li>• Unlimited conversations</li>
                    <li>• Save unlimited favorite places</li>
                    <li>• Priority customer support</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Enhanced Status */}
          <div className="p-6 border-t bg-gray-50">
            {microphoneDenied && (
              <Card className="border-red-200 bg-red-50 mb-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-red-800">Microphone Access Denied</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-red-700 mb-3">
                    AuraGoo needs microphone access to work. Please enable it in your browser settings (e.g., Chrome
                    settings &gt; Privacy and security &gt; Site settings &gt; Microphone).
                  </p>
                </CardContent>
              </Card>
            )}
            {!isProUser && usageCount >= maxUsage ? (
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-orange-800">Daily limit reached</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-orange-700 mb-3">Upgrade for unlimited AI conversations and navigation!</p>
                  <Link href="/premium">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      Upgrade to Premium
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  {isListening ? "🧠 Aura is listening..." : "🤖 Aura is ready for your next command!"}
                </p>
                <p className="text-xs text-gray-500">Powered by intelligent conversation AI</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
