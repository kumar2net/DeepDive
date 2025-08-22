"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, AlertCircle, Sparkles, Rocket, Code, Palette } from "lucide-react";

// Icon mapping for different project types
const projectIcons = [Rocket, Code, Palette, Lightbulb];

export function ProjectIdeaGenerator({ conceptName }: { conceptName: string }) {
	const [ideas, setIdeas] = useState<string[] | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isClient, setIsClient] = useState(false);

	// Ensure we're on the client side
	useEffect(() => {
		setIsClient(true);
	}, []);

	// Reset state when concept changes
	useEffect(() => {
		setIdeas(null);
		setError(null);
		setLoading(false);
	}, [conceptName]);

	const handleGenerate = async () => {
		if (!isClient) return;
		
		setLoading(true);
		setError(null);
		setIdeas(null);
		
		try {
			const response = await fetch("/api/generate-ideas", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ concept: conceptName }),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();
			const ideaList = result.projectIdeas
				.split("\n")
				.map((idea: string) => idea.trim())
				.filter((idea: string) => idea.length > 0)
				.map((idea: string) => idea.replace(/^\d+\.\s*/, "")); // Remove numbering like "1. "
			setIdeas(ideaList);
		} catch (e) {
			console.error("AI service error:", e);
			setError("Failed to generate project ideas. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	// Don't render anything until we're on the client
	if (!isClient) {
		return (
			<Card variant="glass" className="text-center p-8 md:p-12">
				<div className="space-y-4">
					<div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center">
						<Sparkles className="w-10 h-10 text-primary animate-pulse" />
					</div>
					<div className="space-y-2">
						<h3 className="text-lg md:text-xl font-semibold">Loading...</h3>
						<p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
							Initializing AI service...
						</p>
					</div>
				</div>
			</Card>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row gap-4">
				<Button 
					onClick={handleGenerate} 
					disabled={loading}
					size="lg"
					variant="gradient"
					className="w-full sm:w-auto animate-pulse-glow"
				>
					{loading ? (
						<>
							<Loader2 className="mr-2 h-5 w-5 animate-spin" />
							<span>Generating Ideas...</span>
						</>
					) : (
						<>
							<Sparkles className="mr-2 h-5 w-5" />
							<span>Generate Project Ideas</span>
						</>
					)}
				</Button>
				{ideas && (
					<Button
						onClick={handleGenerate}
						variant="outline"
						size="lg"
						className="w-full sm:w-auto"
					>
						<Sparkles className="mr-2 h-5 w-5" />
						<span>Regenerate</span>
					</Button>
				)}
			</div>

			{error && (
				<Alert variant="destructive" className="animate-scale-up">
					<AlertCircle className="h-5 w-5" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			{ideas && (
				<div className="grid gap-4 animate-fade-in">
					{ideas.map((idea, index) => {
						const IconComponent = projectIcons[index % projectIcons.length];
						return (
							<Card 
								key={index} 
								variant="interactive" 
								className="group overflow-hidden animate-scale-up"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-4 md:p-6">
									<div className="flex gap-4">
										<div className="flex-shrink-0">
											<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
												<IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
											</div>
										</div>
										<div className="flex-1 space-y-2">
											<h3 className="font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
												Project Idea #{index + 1}
											</h3>
											<p className="text-sm md:text-base text-muted-foreground leading-relaxed">
												{idea}
											</p>
											<div className="flex flex-wrap gap-2 mt-3">
												<span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
													{conceptName}
												</span>
												<span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium">
													Hands-on Project
												</span>
												<span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary font-medium">
													AI Generated
												</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			)}

			{!ideas && !loading && (
				<Card variant="glass" className="text-center p-8 md:p-12">
					<div className="space-y-4">
						<div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center">
							<Sparkles className="w-10 h-10 text-primary animate-pulse" />
						</div>
						<div className="space-y-2">
							<h3 className="text-lg md:text-xl font-semibold">Ready to Get Inspired?</h3>
							<p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
								Click the button above to generate AI-powered project ideas tailored to {conceptName}
							</p>
						</div>
					</div>
				</Card>
			)}
		</div>
	);
}
