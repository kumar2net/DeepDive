import type { LucideIcon } from "lucide-react";
import {
	BrainCircuit,
	FunctionSquare,
	ToyBrick,
	Bot,
	Network,
	Webcam,
} from "lucide-react";

export type Concept = {
	id: string;
	title: string;
	summary: string;
	deepDive: { title: string; content: string }[];
};

export type Topic = {
	id: string;
	title: string;
	icon?: LucideIcon;
	concepts: { id: string; title: string; icon?: LucideIcon }[];
};

export const topics: Topic[] = [
	{
		id: "transformers",
		title: "Transformers",
		icon: ToyBrick,
		concepts: [
			{
				id: "transformers-overview",
				title: "Transformers",
				icon: BrainCircuit,
			},
			{
				id: "attention-mechanism",
				title: "Attention Mechanism",
				icon: FunctionSquare,
			},
			{ id: "bert", title: "BERT", icon: Bot },
			{ id: "gpt", title: "GPT Models", icon: Bot },
		],
	},
	{
		id: "gnns",
		title: "Graph Neural Networks",
		icon: Network,
		concepts: [
			{
				id: "gnns-overview",
				title: "Graph Neural Networks",
				icon: BrainCircuit,
			},
		],
	},
	{
		id: "vlms",
		title: "Vision Language Models",
		icon: Webcam,
		concepts: [
			{
				id: "vlms-overview",
				title: "Vision Language Models",
				icon: BrainCircuit,
			},
		],
	},
	{
		id: "llms",
		title: "Large Language Models",
		icon: BrainCircuit,
		concepts: [
			{
				id: "llm-parameters",
				title: "Understanding LLM Parameters",
				icon: BrainCircuit,
			},
		],
	},
];

export const concepts: Record<string, Concept> = {
	"transformers-overview": {
		id: "transformers-overview",
		title: "Transformers",
		summary:
			"A powerful neural network architecture that has revolutionized natural language processing. Unlike previous models that process data sequentially, Transformers process entire sequences at once using a mechanism called attention.",
		deepDive: [
			{
				title: "Core Idea",
				content: `<p>The Transformer architecture, introduced in the paper "Attention Is All You Need," relies on a self-attention mechanism. This allows the model to weigh the importance of different words in the input sequence when processing a particular word. It enables parallel processing of input data, making it significantly faster and more efficient for large datasets.</p>`,
			},
			{
				title: "Architecture: Encoder & Decoder",
				content: `<p>A Transformer consists of an encoder and a decoder. The encoder processes the input sequence and creates a rich representation. The decoder uses this representation to generate the output sequence. Each part is composed of multiple layers of self-attention and feed-forward neural networks.</p>
        <ul>
            <li><strong>Encoder:</strong> Maps an input sequence of symbol representations (x_1, ..., x_n) to a sequence of continuous representations z = (z_1, ..., z_n).</li>
            <li><strong>Decoder:</strong> Given z, generates an output sequence (y_1, ..., y_m) of symbols one element at a time.</li>
        </ul>`,
			},
		],
	},
	"attention-mechanism": {
		id: "attention-mechanism",
		title: "Attention Mechanism",
		summary:
			"The key innovation of Transformers. Attention allows a model to focus on relevant parts of the input sequence when predicting a certain part of the output sequence, similar to how humans focus on specific parts of an image.",
		deepDive: [
			{
				title: "How It Works",
				content: `<p>For each word in a sequence, the attention mechanism calculates an "attention score" with every other word. These scores determine how much focus to place on other words when encoding the current word. It uses three vectors for each input word: Query, Key, and Value.</p>
        <ol>
            <li>The score is calculated by taking the dot product of the Query vector of the current word with the Key vector of every other word.</li>
            <li>These scores are passed through a softmax function to get weights that sum to 1.</li>
            <li>The Value vectors of all words are multiplied by their respective weights and summed up to produce the final output for the current word.</li>
        </ol>`,
			},
			{
				title: "Multi-Head Attention",
				content: `<p>Instead of performing attention once, Transformers use "multi-head" attention. The Query, Key, and Value vectors are split into multiple smaller vectors (heads). Attention is calculated for each head in parallel. This allows the model to focus on different types of relationships (e.g., syntactic, semantic) simultaneously, leading to a more robust representation.</p>`,
			},
		],
	},
	bert: {
		id: "bert",
		title: "BERT",
		summary:
			"BERT (Bidirectional Encoder Representations from Transformers) is a model that learns language representations by considering the full context of a word (both left and right context) in all layers.",
		deepDive: [
			{
				title: "Bidirectionality",
				content: `<p>Unlike earlier models like GPT which were unidirectional (auto-regressive), BERT is truly bidirectional. It achieves this by using a "Masked Language Model" (MLM) pre-training objective. During training, some percentage of the input tokens are masked at random, and the model's objective is to predict the original vocabulary id of the masked word based on its non-masked context.</p>`,
			},
			{
				title: "Fine-Tuning",
				content: `<p>After pre-training on a large corpus of text (like Wikipedia), the BERT model can be fine-tuned for specific downstream tasks like question answering, sentiment analysis, or text classification by adding just one additional output layer. This two-step process (pre-training and fine-tuning) is a core concept in modern NLP.</p>`,
			},
		],
	},
	gpt: {
		id: "gpt",
		title: "GPT Models",
		summary:
			"GPT (Generative Pre-trained Transformer) models are a family of auto-regressive language models that excel at generating human-like text. They are pre-trained on vast amounts of text data and can be fine-tuned for various tasks.",
		deepDive: [
			{
				title: "Auto-regressive Nature",
				content: `<p>GPT models are auto-regressive, meaning they generate text one token at a time, from left to right. The prediction for the next token is conditioned on the sequence of tokens that came before it. This is achieved by using a masked self-attention mechanism in the Transformer's decoder, which prevents positions from attending to subsequent positions.</p>`,
			},
			{
				title: "Evolution and Scaling",
				content: `<p>The GPT series (GPT-1, GPT-2, GPT-3, GPT-4) demonstrates the power of scaling. With each iteration, the models have grown significantly in size (number of parameters) and have been trained on progressively larger datasets. This scaling has led to remarkable improvements in their ability to perform a wide range of language tasks, often with zero or few examples (zero-shot or few-shot learning).</p>`,
			},
		],
	},
	"gnns-overview": {
		id: "gnns-overview",
		title: "Graph Neural Networks",
		summary:
			"A type of neural network designed to operate on graph-structured data. They leverage the connections within a graph to learn representations of nodes, edges, or the entire graph.",
		deepDive: [
			{
				title: "Core Idea",
				content: `<p>Traditional neural networks struggle with graph data because graphs have no fixed order of nodes or edges. GNNs address this by iteratively aggregating information from a node's neighbors. This process, often called "message passing," allows nodes to learn representations that capture the structural and feature information of their local neighborhood.</p>`,
			},
			{
				title: "Architecture: Message Passing",
				content: `<p>The core of most GNN architectures is the message passing mechanism. At each layer, a node updates its representation (embedding) by combining its own current representation with aggregated representations from its neighbors. This typically involves:</p>
        <ol>
            <li><strong>Message Function:</strong> Defines how a message is created from a neighbor's features and the edge features (if present).</li>
            <li><strong>Aggregation Function:</strong> Combines the messages from all neighbors (e.g., sum, mean, max).</li>
            <li><strong>Update Function:</strong> Combines the aggregated message with the node's current state to produce the new node representation.</li>
        </ol>
        <p>By stacking multiple layers, GNNs can learn representations that incorporate information from increasingly distant neighbors.</p>`,
			},
			{
				title: "Applications",
				content: `<p>GNNs are used in various domains where data has an inherent graph structure, including:</p>
        <ul><li><strong>Social Networks:</strong> Link prediction, community detection, user recommendation.</li><li><strong>Drug Discovery:</strong> Molecular property prediction, drug-target interaction.</li><li><strong>Traffic Prediction:</strong> Modeling dependencies between road segments.</li><li><strong>Recommendation Systems:</strong> Modeling user-item interactions.</li></ul>`,
			},
		],
	},
	"vlms-overview": {
		id: "vlms-overview",
		title: "Vision Language Models",
		summary:
			"Models that are designed to understand and generate content across both visual and textual modalities. They bridge the gap between language and vision.",
		deepDive: [
			{
				title: "Core Idea",
				content: `<p>Vision Language Models (VLMs) aim to learn joint representations of images and text. This allows them to perform tasks that require understanding both modalities simultaneously, such as image captioning, visual question answering, and text-to-image generation. They often leverage insights from successful models in both computer vision (like CNNs or Vision Transformers) and natural language processing (like Transformers).</p>`,
			},
			{
				title: "Architecture: Combining Vision and Language Encoders",
				content: `<p>While architectures vary, a common approach for VLMs involves separate encoders for vision and language, followed by a mechanism to fuse the information from both modalities. Key components often include:</p>
        <ol>
            <li><strong>Vision Encoder:</strong> Processes the input image (e.g., a Convolutional Neural Network or a Vision Transformer) to extract visual features.</li>
            <li><strong>Language Encoder:</strong> Processes the input text (e.g., a Transformer-based model) to extract textual features.</li>
            <li><strong>Fusion Module:</strong> Combines the visual and textual features. This can be done through various methods like concatenation, cross-modal attention, or specialized fusion layers.</li>
            <li><strong>Decoder:</strong> (For generative tasks) Generates the output, which could be text (e.g., a caption or answer) or an image (e.g., from a text prompt).</li>
        </ol>
        <p>Some models use shared layers or cross-attention mechanisms between the vision and language encoders to facilitate interaction between the modalities from earlier stages.</p>`,
			},
			{
				title: "Applications",
				content: `<p>VLMs have a wide range of applications that involve understanding and generating content across vision and language:</p>
        <ul>
            <li><strong>Image Captioning:</strong> Generating descriptive text for images.</li>
            <li><strong>Visual Question Answering (VQA):</strong> Answering questions about the content of an image.</li>
            <li><strong>Text-to-Image Generation:</strong> Creating images based on textual descriptions.</li>
            <li><strong>Image Search with Text Queries:</strong> Retrieving images relevant to a text description.</li>
            <li><strong>Visual Reasoning:</strong> Performing complex reasoning tasks that require understanding spatial relationships and object interactions.</li>
            <li><strong>Multimodal Chatbots:</strong> Chatbots that can understand and respond to both text and images.</li>
        </ul>
        <p>The development of VLMs is a rapidly evolving field, pushing the boundaries of AI in understanding the world through multiple senses.</p>`,
			},
		],
	},
	"llm-parameters": {
		id: "llm-parameters",
		title: "Understanding LLM Parameters",
		summary:
			"This section dives into what the \"parameters\" of a large language model (LLM) represent and how they contribute to the model's capabilities. We'll use analogies to make this complex concept more understandable and peek into how LLMs handle specific types of queries.",
		deepDive: [
			{
				title: "What a Billion Parameters Means",
				content: `
        <p>Imagine you have a colossal machine built to understand and generate language. This machine has an enormous number of tiny knobs, switches, and levers. Each of these controls is a "parameter." A model with a billion parameters is like a machine with a billion such controls, all interconnected in intricate ways. When the model "learns," it's essentially adjusting the settings of these billion parameters based on the data it's shown. Like a master sculptor refining their work with countless subtle adjustments, the model fine-tunes these parameters to better capture the patterns, grammar, facts, and nuances of language. Each parameter represents a tiny piece of learned knowledge or a connection strength within the network. The sheer number of these parameters allows the model to hold a vast amount of information and understand complex relationships between words and concepts, enabling it to perform a wide range of language tasks.</p>
        <p>Think of it like trying to draw a perfect picture. A billion parameters is like having an incredibly fine-tipped pencil and a huge canvas, allowing for an immense level of detail and complexity in the final drawing (the generated text).</p>
        `,
			},
			{
				title: "Temperature",
				content: `
        <p>"Temperature" is a hyperparameter that controls the randomness of the output when generating text from an LLM. It affects the probability distribution over the next possible tokens.</p>
        <ul>
            <li><strong>Low Temperature (close to 0):</strong> The model will be more deterministic and repetitive. It will favor the most probable next tokens, resulting in output that is more focused and less creative. This is useful when you need precise and predictable responses, like answering factual questions.</li>
            <li><strong>High Temperature (e.g., 0.8 to 1.0):</strong> The model will be more random and creative. It will consider a wider range of possible next tokens, including less probable ones. This can lead to more surprising, diverse, and potentially more interesting or imaginative text. However, very high temperatures can sometimes result in nonsensical or off-topic output.</li>
        </ul>
        <p>Think of it like choosing the next word in a sentence. With a low temperature, you'd always pick the most obvious word. With a higher temperature, you might pick a less common but still fitting word, or even something a bit unexpected to make the sentence more interesting.</p>
        `,
			},
			{
				title: "Top P and Top K Sampling",
				content: `
        <p>In addition to Temperature, "Top P" (nucleus sampling) and "Top K" sampling are parameters used to control the diversity and quality of the tokens generated by an LLM. They offer more refined control over the sampling process.</p>
        <ul>
            <li><strong>Top K:</strong> This parameter limits the model's choices for the next token to the K most likely tokens. For example, if Top K is set to 50, the model will only consider the 50 tokens with the highest probability when deciding the next token. A lower Top K value results in more predictable and focused text, while a higher value allows for more diversity.</li>
            <li><strong>Top P (Nucleus Sampling):</strong> This parameter selects the smallest set of most likely tokens whose cumulative probability exceeds the Top P threshold. The model then samples the next token only from this set. For example, if Top P is set to 0.9, the model will consider the most likely tokens until their combined probability reaches 90%. Top P offers a more dynamic way to control diversity compared to Top K, as the number of tokens considered can vary depending on the probability distribution.</li>
        </ul>
        <p>These parameters are often used together. For example, you might set a Temperature to introduce some randomness and then use Top P or Top K to limit the sampling space and prevent the model from generating highly improbable or nonsensical tokens.</p>
        <p>Choosing the right values for Temperature, Top P, and Top K depends on the desired output. For creative writing or brainstorming, you might use higher Temperature or Top P values. For more factual or concise responses, lower values are usually preferred.</p>
        `,
			},
			{
				title: "Temperature",
				content: `
        <p>"Temperature" is a hyperparameter that controls the randomness of the output when generating text from an LLM. It affects the probability distribution over the next possible tokens.</p>
        <ul>
            <li><strong>Low Temperature (close to 0):</strong> The model will be more deterministic and repetitive. It will favor the most probable next tokens, resulting in output that is more focused and less creative. This is useful when you need precise and predictable responses, like answering factual questions.</li>
            <li><strong>High Temperature (e.g., 0.8 to 1.0):</strong> The model will be more random and creative. It will consider a wider range of possible next tokens, including less probable ones. This can lead to more surprising, diverse, and potentially more interesting or imaginative text. However, very high temperatures can sometimes result in nonsensical or off-topic output.</li>
        </ul>
        <p>Think of it like choosing the next word in a sentence. With a low temperature, you'd always pick the most obvious word. With a higher temperature, you might pick a less common but still fitting word, or even something a bit unexpected to make the sentence more interesting.</p>
        `,
			},
			{
				title: "Tokens and maxOutputTokens",
				content: `
        <p>Large Language Models process and generate text in units called "tokens." A token is not necessarily a single word; it can be a word, a sub-word, or even a single character or punctuation mark. For example, the word "unbelievable" might be broken down into tokens like "un", "believ", and "able".</p>
        <p>The model takes your input (prompt) and breaks it down into tokens. It then processes these input tokens to understand your request and generate a sequence of output tokens as a response.</p>
        <p>The <code>maxOutputTokens</code> parameter is a crucial control that sets the maximum number of tokens the model will generate in its response. This is important for several reasons:</p>
        <ul>
            <li><strong>Controlling Response Length:</strong> It prevents the model from generating excessively long or repetitive responses.</li>
            <li><strong>Managing Costs:</strong> Many LLM APIs charge based on the number of tokens processed and generated. Setting a limit helps manage costs.</li>
            <li><strong>Ensuring Relevance:</strong> Sometimes, longer outputs can drift off-topic. Limiting tokens can help keep the response focused.</li>
        </ul>
        <p>The model will stop generating output once it reaches the <code>maxOutputTokens</code> limit, even if it hasn't completed its thought or finished the text it was generating.</p>
        `,
			},
			{
				title: "How Gemini Answers Real-time Queries",
				content: `
        <p>When you ask a large language model like Gemini a question like "tell me the latest cricket score India Vs England test match," it's important to understand that the model itself doesn't have real-time access to live sports scores built into its core knowledge. Its knowledge is based on the massive dataset it was trained on, which has a cutoff point.</p>
        <p>Instead, to answer such a query, Gemini (or other advanced LLMs) often utilizes external tools or plugins. Here's a simplified peek at the process:</p>
        <ol>
            <li><strong>Understanding the Query:</strong> Gemini first processes your prompt to understand your intent – you want the current cricket score for a specific match.</li>
            <li><strong>Recognizing the Need for External Data:</strong> It identifies that this is a request for real-time, up-to-date information that is not part of its static training data.</li>
            <li><strong>Activating a Tool:</strong> If enabled and available, Gemini can trigger a search tool or a dedicated sports score tool.</li>
            <li><strong>Formulating a Search:</strong> The tool then formulates a query for a search engine or sports data API (e.g., "latest cricket score India vs England test match").</li>
            <li><strong>Processing the Results:</strong> The tool retrieves the relevant information from the external source.</li>
            <li><strong>Synthesizing the Answer:</strong> Gemini then takes the information provided by the tool and formats it into a natural-sounding response for you.</li>
        </ol>
        <p>So, while Gemini can give you the answer, it's not because it "knows" the score instantly. It's because it's smart enough to understand your need for current information and has the capability to use tools to find that information for you.</p>
        `,
			},
		],
	},
};
