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

		const result = await generateProjectIdeas({ concept });
		
		return NextResponse.json(result);
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json(
			{ error: "Failed to generate project ideas" },
			{ status: 500 }
		);
	}
}
