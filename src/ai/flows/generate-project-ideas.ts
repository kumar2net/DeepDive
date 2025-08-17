"use server";

/**
 * @fileOverview This file defines a Genkit flow for generating deep learning project ideas based on a given concept.
 *
 * - generateProjectIdeas - A function that calls the generateProjectIdeasFlow to generate project ideas.
 * - GenerateProjectIdeasInput - The input type for the generateProjectIdeas function.
 * - GenerateProjectIdeasOutput - The return type for the generateProjectIdeas function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const GenerateProjectIdeasInputSchema = z.object({
	concept: z
		.string()
		.describe("The deep learning concept for which to generate project ideas."),
});
export type GenerateProjectIdeasInput = z.infer<
	typeof GenerateProjectIdeasInputSchema
>;

const GenerateProjectIdeasOutputSchema = z.object({
	projectIdeas: z
		.string()
		.describe(
			"A list of project ideas related to the specified deep learning concept.",
		),
});
export type GenerateProjectIdeasOutput = z.infer<
	typeof GenerateProjectIdeasOutputSchema
>;

export async function generateProjectIdeas(
	input: GenerateProjectIdeasInput,
): Promise<GenerateProjectIdeasOutput> {
	return generateProjectIdeasFlow(input);
}

const prompt = ai.definePrompt({
	name: "generateProjectIdeasPrompt",
	input: { schema: GenerateProjectIdeasInputSchema },
	output: { schema: GenerateProjectIdeasOutputSchema },
	prompt: `You are a helpful AI assistant that generates project ideas for deep learning students.

  Given a deep learning concept, you will provide a list of project ideas that will help students gain practical experience and build their portfolio.

  Concept: {{{concept}}}
  `,
});

const generateProjectIdeasFlow = ai.defineFlow(
	{
		name: "generateProjectIdeasFlow",
		inputSchema: GenerateProjectIdeasInputSchema,
		outputSchema: GenerateProjectIdeasOutputSchema,
	},
	async (input) => {
		const { output } = await prompt(input);
		return output!;
	},
);
