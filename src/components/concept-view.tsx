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

type ConceptViewProps = {
	concept: Concept;
};

export default function ConceptView({ concept }: ConceptViewProps) {
	return (
		<div className="space-y-8">
			<header>
				<h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
					{concept.title}
				</h1>
				<p className="mt-4 text-lg text-muted-foreground">{concept.summary}</p>
			</header>

			<section>
				<h2 className="font-headline text-3xl font-semibold">Deep Dive</h2>
				<Accordion type="single" collapsible className="w-full mt-4">
					{concept.deepDive.map((item, index) => (
						<AccordionItem value={`item-${index}`} key={index}>
							<AccordionTrigger className="text-lg font-medium hover:no-underline">
								{item.title}
							</AccordionTrigger>
							<AccordionContent className="prose prose-lg max-w-none text-base text-foreground/90">
								<div dangerouslySetInnerHTML={{ __html: item.content }} />
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>

			<section>
				<Card className="bg-card/50">
					<CardHeader>
						<CardTitle className="font-headline text-3xl font-semibold">
							Practical Project Ideas
						</CardTitle>
						<CardDescription>
							Generate project ideas to apply your knowledge of {concept.title}.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ProjectIdeaGenerator conceptName={concept.title} />
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
