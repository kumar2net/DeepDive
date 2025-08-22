import { NextRequest, NextResponse } from "next/server";
import { generateProjectIdeas } from "@/ai/flows/generate-project-ideas";

export async function POST(request: NextRequest) {
	try {
		const { concept } = await request.json();
		
		if (!concept) {
			return NextResponse.json(
				{ error: "Concept is required" },
				{ status: 400 }
			);
		}

		// Check if API key is configured
		const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
		if (!apiKey || apiKey === 'your_google_ai_api_key_here') {
			console.error("API Key not configured");
			return NextResponse.json(
				{ error: "AI service not configured. Please set up your Google AI API key." },
				{ status: 503 }
			);
		}

		const result = await generateProjectIdeas({ concept });
		
		// Validate the result
		if (!result || !result.projectIdeas) {
			console.error("Invalid result from AI service:", result);
			return NextResponse.json(
				{ error: "Invalid response from AI service" },
				{ status: 500 }
			);
		}
		
		return NextResponse.json(result);
	} catch (error) {
		console.error("API Error:", error);
		const errorMessage = error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json(
			{ error: `Failed to generate project ideas: ${errorMessage}` },
			{ status: 500 }
		);
	}
}
