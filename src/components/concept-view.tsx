import type { Concept } from "@/lib/concepts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ProjectIdeaGenerator } from "./project-idea-generator";
import { Sparkles, BookOpen, Rocket } from "lucide-react";

type ConceptViewProps = {
	concept: Concept;
};

export default function ConceptView({ concept }: ConceptViewProps) {
	return (
		<div className="space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in">
			{/* Hero Section with Gradient Background */}
			<header className="relative overflow-hidden rounded-3xl bg-gradient-primary p-6 md:p-8 lg:p-12 text-white">
				<div className="absolute inset-0 bg-black/10" />
				<div className="relative z-10">
					<div className="flex items-center gap-2 mb-4">
						<BookOpen className="w-5 h-5 md:w-6 md:h-6" />
						<span className="text-sm md:text-base font-medium uppercase tracking-wider opacity-90">
							Learning Module
						</span>
					</div>
					<h1 className="font-headline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
						{concept.title}
					</h1>
					<p className="text-base md:text-lg lg:text-xl opacity-95 leading-relaxed max-w-3xl">
						{concept.summary}
					</p>
				</div>
				{/* Decorative Elements */}
				<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
				<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
			</header>

			{/* Deep Dive Section */}
			<section className="space-y-4">
				<div className="flex items-center gap-3 mb-6">
					<div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
						<Sparkles className="w-6 h-6 text-white" />
					</div>
					<h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">
						Deep Dive
					</h2>
				</div>
				
				<Card variant="glass" className="overflow-hidden">
					<CardContent className="p-0">
						<Accordion type="single" collapsible className="w-full">
							{concept.deepDive.map((item, index) => (
								<AccordionItem 
									value={`item-${index}`} 
									key={index}
									className="border-b border-border/50 last:border-0"
								>
									<AccordionTrigger className="px-4 md:px-6 py-4 md:py-5 text-base md:text-lg font-semibold hover:no-underline hover:bg-muted/50 transition-colors">
										<div className="flex items-center gap-3 text-left">
											<span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-primary text-white flex items-center justify-center text-sm font-bold">
												{index + 1}
											</span>
											<span>{item.title}</span>
										</div>
									</AccordionTrigger>
									<AccordionContent className="px-4 md:px-6 pb-4 md:pb-6">
										<div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-foreground/90 leading-relaxed pl-11">
											<div dangerouslySetInnerHTML={{ __html: item.content }} />
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</CardContent>
				</Card>
			</section>

			{/* Project Ideas Section */}
			<section className="space-y-4">
				<Card variant="gradient" className="overflow-hidden">
					<CardHeader className="pb-4 md:pb-6">
						<div className="flex items-center gap-3 mb-2">
							<div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg">
								<Rocket className="w-6 h-6 text-white" />
							</div>
							<div>
								<CardTitle className="text-2xl md:text-3xl lg:text-4xl">
									Practical Project Ideas
								</CardTitle>
								<CardDescription className="mt-1 text-base md:text-lg">
									Generate AI-powered project ideas to apply your knowledge of {concept.title}
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent className="pt-0">
						<ProjectIdeaGenerator conceptName={concept.title} />
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
