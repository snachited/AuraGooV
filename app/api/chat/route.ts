import { generateText } from "ai"
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
    console.log("OpenAI client initialized successfully in chat route.")

    const { messages } = await req.json()

    // Ensure messages are in the correct format for the AI SDK
    const formattedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "assistant", // Map roles correctly
      content: msg.content,
    }))

    console.log("Attempting to generate text with GPT-4o model...")

    const { text } = await generateText({
      model: openai("gpt-4o"), // Using GPT-4o for advanced understanding
      messages: formattedMessages,
    })

    console.log("Text generation successful.")

    return new Response(JSON.stringify({ message: text }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error in AI API route:", error)
    let errorMessage = "An unexpected error occurred."
    if (error instanceof Error) {
      errorMessage = error.message
    }
    return new Response(JSON.stringify({ message: `Failed to process AI request: ${errorMessage}` }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
