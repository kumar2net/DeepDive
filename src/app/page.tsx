import Link from "next/link";
import { Suspense } from "react";
import { concepts, topics } from "@/lib/concepts";

import ConceptView from "@/components/concept-view";
import { ModernNavigation } from "@/components/modern-navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot } from "lucide-react";

function PageContent({ topicId }: { topicId: string }) {
	const currentTopic = concepts[topicId];

	if (!currentTopic) {
		return (
			<div className="flex h-full items-center justify-center p-4">
				<div className="text-center space-y-4">
					<div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
						<Bot className="w-10 h-10 text-white" />
					</div>
					<h2 className="text-2xl font-bold gradient-text">Concept not found</h2>
					<p className="text-muted-foreground">Please select a topic from the menu</p>
				</div>
			</div>
		);
	}

	return <ConceptView concept={currentTopic} />;
}

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const params = await searchParams;
	const topicParam = params.topic;
	const currentTopicId = (Array.isArray(topicParam) ? topicParam[0] : topicParam) || topics[0].concepts[0].id;
	
	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Subtle gradient mesh background */}
			<div className="fixed inset-0 -z-10 h-full w-full bg-background">
				<div className="absolute inset-0 bg-gradient-mesh opacity-30" />
				<div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
				<div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
				<div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
			</div>

			{/* Modern Navigation */}
			<ModernNavigation currentTopicId={currentTopicId} />
			
			{/* Main Content Area */}
			<main className="container-padding py-6 md:py-8 lg:py-10 max-w-7xl mx-auto">
				<Suspense fallback={
					<div className="space-y-4">
						<Skeleton className="h-48 w-full rounded-2xl" />
						<Skeleton className="h-96 w-full rounded-2xl" />
					</div>
				}>
					<PageContent topicId={currentTopicId} />
				</Suspense>
			</main>
		</div>
	);
}
