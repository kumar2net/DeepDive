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
import { Bot, Menu, ChevronRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

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

function TopicNavigator({ currentTopicId }: { currentTopicId: string }) {
	return (
		<SidebarContent className="p-2 md:p-3">
			<SidebarMenu>
				{topics.map((topic) => (
					<SidebarGroup key={topic.id} className="p-0">
						<SidebarGroupLabel className="flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
							{topic.icon && <topic.icon className="size-4 text-primary" />}
							<span>{topic.title}</span>
						</SidebarGroupLabel>
						<div className="space-y-1 px-2">
							{topic.concepts.map((concept) => (
								<SidebarMenuItem key={concept.id}>
									<SidebarMenuButton
										asChild
										isActive={currentTopicId === concept.id}
										className={cn(
											"w-full justify-start rounded-lg transition-all duration-200",
											"hover:bg-primary/10 hover:translate-x-1",
											currentTopicId === concept.id && 
											"bg-gradient-primary text-white shadow-md hover:shadow-lg hover:bg-gradient-primary"
										)}
									>
										<Link href={`/?topic=${concept.id}`} className="flex items-center gap-3">
											{concept.icon && (
												<div className={cn(
													"w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
													currentTopicId === concept.id 
														? "bg-white/20" 
														: "bg-muted"
												)}>
													<concept.icon className={cn(
														"w-4 h-4",
														currentTopicId === concept.id 
															? "text-white" 
															: "text-primary"
													)} />
												</div>
											)}
											<span className="font-medium">{concept.title}</span>
											{currentTopicId === concept.id && (
												<ChevronRight className="w-4 h-4 ml-auto" />
											)}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</div>
					</SidebarGroup>
				))}
			</SidebarMenu>
		</SidebarContent>
	);
}

// Helper function for className
function cn(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(' ');
}

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const params = await searchParams;
	const topicParam = params.topic;
	const currentTopicId = (Array.isArray(topicParam) ? topicParam[0] : topicParam) || topics[0].concepts[0].id;
	return (
		<SidebarProvider defaultOpen={false}>
			<Sidebar className="border-r-0 shadow-xl bg-sidebar/95 backdrop-blur-md">
				<SidebarHeader className="border-b border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10 p-4 md:p-6">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-primary shadow-lg flex items-center justify-center">
							<GraduationCap className="text-white w-6 h-6 md:w-7 md:h-7" />
						</div>
						<div>
							<span className="font-headline text-lg md:text-xl font-bold gradient-text">
								Deep Dive
							</span>
							<p className="text-xs text-muted-foreground hidden md:block">
								Learn Smarter, Not Harder
							</p>
						</div>
					</div>
				</SidebarHeader>
				<TopicNavigator currentTopicId={currentTopicId} />
			</Sidebar>
			<SidebarInset>
				{/* Mobile Header */}
				<header className="sticky top-0 z-20 flex h-16 md:h-20 items-center gap-4 border-b border-border/50 bg-background/80 backdrop-blur-lg px-4 md:px-6 lg:hidden">
					<SidebarTrigger className="lg:hidden">
						<Button variant="ghost" size="icon" className="rounded-xl">
							<Menu className="w-5 h-5" />
						</Button>
					</SidebarTrigger>
					<div className="flex items-center gap-2 flex-1">
						<GraduationCap className="text-primary w-6 h-6" />
						<h1 className="font-headline text-lg font-bold truncate gradient-text">
							{concepts[currentTopicId]?.title || "Deep Dive"}
						</h1>
					</div>
				</header>
				
				{/* Main Content Area */}
				<main className="flex-1 container-padding py-6 md:py-8 lg:py-10 max-w-7xl mx-auto">
					<Suspense fallback={
						<div className="space-y-4">
							<Skeleton className="h-48 w-full rounded-2xl" />
							<Skeleton className="h-96 w-full rounded-2xl" />
						</div>
					}>
						<PageContent topicId={currentTopicId} />
					</Suspense>
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
