import Link from "next/link";
import { Suspense } from "react";
import {
	SidebarProvider,
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarTrigger,
	SidebarInset,
	SidebarMenu,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import { concepts, topics } from "@/lib/concepts";

import ConceptView from "@/components/concept-view";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot } from "lucide-react";

function PageContent({ topicId }: { topicId: string }) {
	const currentTopic = concepts[topicId];

	if (!currentTopic) {
		return (
			<div className="flex h-full items-center justify-center">
				<p>Concept not found.</p>
			</div>
		);
	}

	return <ConceptView concept={currentTopic} />;
}

function TopicNavigator({ currentTopicId }: { currentTopicId: string }) {
	return (
		<SidebarContent className="p-0">
			<SidebarMenu>
				{topics.map((topic) => (
					<SidebarGroup key={topic.id} className="p-2">
						<SidebarGroupLabel className="flex items-center gap-2">
							{topic.icon && <topic.icon className="size-4" />}
							{topic.title}
						</SidebarGroupLabel>
						{topic.concepts.map((concept) => (
							<SidebarMenuItem key={concept.id}>
								<SidebarMenuButton
									asChild
									isActive={currentTopicId === concept.id}
									className="w-full justify-start"
								>
									<Link href={`/?topic=${concept.id}`}>
										{concept.icon && <concept.icon />}
										<span>{concept.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarGroup>
				))}
			</SidebarMenu>
		</SidebarContent>
	);
}

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const params = await searchParams;
	const topicParam = params.topic;
	const currentTopicId = (Array.isArray(topicParam) ? topicParam[0] : topicParam) || topics[0].concepts[0].id;
	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader className="border-b">
					<div className="flex items-center gap-2 font-headline text-lg font-semibold">
						<Bot className="text-primary" />
						<span>Deep Dive</span>
					</div>
				</SidebarHeader>
				<TopicNavigator currentTopicId={currentTopicId} />
			</Sidebar>
			<SidebarInset>
				<header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:h-auto md:border-none md:bg-transparent md:px-6 md:pt-4">
					<SidebarTrigger className="md:hidden" />
					<h1 className="font-headline text-2xl font-semibold md:hidden">
						{concepts[currentTopicId]?.title || "Deep Dive"}
					</h1>
				</header>
				<main className="flex-1 p-4 md:p-6">
					<Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
						<PageContent topicId={currentTopicId} />
					</Suspense>
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
