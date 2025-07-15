import { experimental_transcribe as transcribe } from "ai"
import { createOpenAI } from "@ai-sdk/openai" // Corrected import path

export async function POST(req: Request) {
  try {
    // Explicitly check for the API key at the very beginning
    if (!process.env.OPENAI_API_KEY) {
      console.error("Server Error: OPENAI_API_KEY environment variable is missing.")
      return new Response(JSON.stringify({ message: "Server configuration error: OpenAI API key is missing." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Initialize OpenAI client *inside* the function, after the check
    const openai = createOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    console.log("OpenAI client initialized successfully in transcribe route.")

    // Get the audio blob from the request
    const formData = await req.formData()
    const audioFile = formData.get("audio") as Blob | null

    if (!audioFile) {
      return new Response(JSON.stringify({ message: "No audio file provided." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Convert Blob to Buffer for the AI SDK
    const arrayBuffer = await audioFile.arrayBuffer()
    const audioBuffer = Buffer.from(arrayBuffer)

    console.log("Attempting to transcribe audio with Whisper model...")

    const { text } = await transcribe({
      model: openai.transcription("whisper-1"), // Using OpenAI's Whisper model
      audio: audioBuffer,
    })

    console.log("Transcription successful:", text)

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in audio transcription API route:", error)
    let errorMessage = "An unexpected error occurred during transcription."
    if (error instanceof Error) {
      errorMessage = error.message
    }
    return new Response(JSON.stringify({ message: `Failed to transcribe audio: ${errorMessage}` }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
