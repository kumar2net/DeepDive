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
			setError("Failed to generate project ideas. Please try again later.");
			console.error(e);
		} finally {
			setLoading(false);
		}
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
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
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
