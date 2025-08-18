"use client";

import { useState } from "react";
import { generateProjectIdeas } from "@/ai/flows/generate-project-ideas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, AlertCircle, Sparkles } from "lucide-react";

export function ProjectIdeaGenerator({ conceptName }: { conceptName: string }) {
	const [ideas, setIdeas] = useState<string[] | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleGenerate = async () => {
		setLoading(true);
		setError(null);
		setIdeas(null);
		try {
			const result = await generateProjectIdeas({ concept: conceptName });
			const ideaList = result.projectIdeas
				.split("\n")
				.map((idea) => idea.trim())
				.filter((idea) => idea.length > 0)
				.map((idea) => idea.replace(/^\d+\.\s*/, "")); // Remove numbering like "1. "
			setIdeas(ideaList);
		} catch (e) {
			console.error("AI generation error:", e);
			// Provide fallback ideas based on the concept
			const fallbackIdeas = getFallbackIdeas(conceptName);
			setIdeas(fallbackIdeas);
			setError("AI service temporarily unavailable. Here are some general project ideas:");
		} finally {
			setLoading(false);
		}
	};

	const getFallbackIdeas = (concept: string): string[] => {
		const conceptLower = concept.toLowerCase();
		const ideas: string[] = [];
		
		if (conceptLower.includes("neural") || conceptLower.includes("network")) {
			ideas.push(
				"Build a simple neural network from scratch using Python and NumPy",
				"Create an image classification model using TensorFlow or PyTorch",
				"Implement a neural network for time series prediction",
				"Build a sentiment analysis model using neural networks",
				"Create a neural network for music generation"
			);
		} else if (conceptLower.includes("cnn") || conceptLower.includes("convolutional")) {
			ideas.push(
				"Build an image classifier using CNN architecture",
				"Create a face detection system using CNNs",
				"Implement object detection with YOLO or similar",
				"Build a medical image analysis system",
				"Create a style transfer application"
			);
		} else if (conceptLower.includes("rnn") || conceptLower.includes("recurrent")) {
			ideas.push(
				"Build a text generation model using RNNs",
				"Create a language translation system",
				"Implement a speech recognition model",
				"Build a time series forecasting model",
				"Create a chatbot using sequence-to-sequence models"
			);
		} else if (conceptLower.includes("transformer") || conceptLower.includes("attention")) {
			ideas.push(
				"Build a simple transformer model from scratch",
				"Create a text summarization system",
				"Implement a question-answering system",
				"Build a machine translation model",
				"Create a code generation model"
			);
		} else {
			ideas.push(
				"Build a simple classification model",
				"Create a regression model for prediction",
				"Implement a clustering algorithm",
				"Build a recommendation system",
				"Create a data visualization dashboard"
			);
		}
		
		return ideas;
	};

	return (
		<div className="space-y-4">
			<Button onClick={handleGenerate} disabled={loading}>
				{loading ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Sparkles className="mr-2 h-4 w-4" />
				)}
				Generate Ideas
			</Button>

			{error && (
				<Alert variant="default">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Note</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			{ideas && (
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2 font-headline">
							<Lightbulb className="text-accent" />
							<span>Project Suggestions</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="list-disc space-y-2 pl-5">
							{ideas.map((idea, index) => (
								<li key={index} className="text-base">
									{idea}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
