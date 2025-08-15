import type { LucideIcon } from 'lucide-react';
import { BrainCircuit, FunctionSquare, ToyBrick, Bot } from 'lucide-react';

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
    id: 'transformers',
    title: 'Transformers',
    icon: ToyBrick,
    concepts: [
      { id: 'transformers-overview', title: 'Transformers', icon: BrainCircuit },
      { id: 'attention-mechanism', title: 'Attention Mechanism', icon: FunctionSquare },
      { id: 'bert', title: 'BERT', icon: Bot },
      { id: 'gpt', title: 'GPT Models', icon: Bot },
    ],
  },
];

export const concepts: Record<string, Concept> = {
  'transformers-overview': {
    id: 'transformers-overview',
    title: 'Transformers',
    summary:
      'A powerful neural network architecture that has revolutionized natural language processing. Unlike previous models that process data sequentially, Transformers process entire sequences at once using a mechanism called attention.',
    deepDive: [
      {
        title: 'Core Idea',
        content: `<p>The Transformer architecture, introduced in the paper "Attention Is All You Need," relies on a self-attention mechanism. This allows the model to weigh the importance of different words in the input sequence when processing a particular word. It enables parallel processing of input data, making it significantly faster and more efficient for large datasets.</p>`,
      },
      {
        title: 'Architecture: Encoder & Decoder',
        content: `<p>A Transformer consists of an encoder and a decoder. The encoder processes the input sequence and creates a rich representation. The decoder uses this representation to generate the output sequence. Each part is composed of multiple layers of self-attention and feed-forward neural networks.</p>
        <ul>
            <li><strong>Encoder:</strong> Maps an input sequence of symbol representations (x_1, ..., x_n) to a sequence of continuous representations z = (z_1, ..., z_n).</li>
            <li><strong>Decoder:</strong> Given z, generates an output sequence (y_1, ..., y_m) of symbols one element at a time.</li>
        </ul>`,
      },
    ],
  },
  'attention-mechanism': {
    id: 'attention-mechanism',
    title: 'Attention Mechanism',
    summary:
      'The key innovation of Transformers. Attention allows a model to focus on relevant parts of the input sequence when predicting a certain part of the output sequence, similar to how humans focus on specific parts of an image.',
    deepDive: [
      {
        title: 'How It Works',
        content: `<p>For each word in a sequence, the attention mechanism calculates an "attention score" with every other word. These scores determine how much focus to place on other words when encoding the current word. It uses three vectors for each input word: Query, Key, and Value.</p>
        <ol>
            <li>The score is calculated by taking the dot product of the Query vector of the current word with the Key vector of every other word.</li>
            <li>These scores are passed through a softmax function to get weights that sum to 1.</li>
            <li>The Value vectors of all words are multiplied by their respective weights and summed up to produce the final output for the current word.</li>
        </ol>`,
      },
      {
        title: 'Multi-Head Attention',
        content: `<p>Instead of performing attention once, Transformers use "multi-head" attention. The Query, Key, and Value vectors are split into multiple smaller vectors (heads). Attention is calculated for each head in parallel. This allows the model to focus on different types of relationships (e.g., syntactic, semantic) simultaneously, leading to a more robust representation.</p>`,
      },
    ],
  },
  bert: {
    id: 'bert',
    title: 'BERT',
    summary:
      'BERT (Bidirectional Encoder Representations from Transformers) is a model that learns language representations by considering the full context of a word (both left and right context) in all layers.',
    deepDive: [
      {
        title: 'Bidirectionality',
        content: `<p>Unlike earlier models like GPT which were unidirectional (auto-regressive), BERT is truly bidirectional. It achieves this by using a "Masked Language Model" (MLM) pre-training objective. During training, some percentage of the input tokens are masked at random, and the model's objective is to predict the original vocabulary id of the masked word based on its non-masked context.</p>`,
      },
      {
        title: 'Fine-Tuning',
        content: `<p>After pre-training on a large corpus of text (like Wikipedia), the BERT model can be fine-tuned for specific downstream tasks like question answering, sentiment analysis, or text classification by adding just one additional output layer. This two-step process (pre-training and fine-tuning) is a core concept in modern NLP.</p>`,
      },
    ],
  },
  gpt: {
    id: 'gpt',
    title: 'GPT Models',
    summary:
      'GPT (Generative Pre-trained Transformer) models are a family of auto-regressive language models that excel at generating human-like text. They are pre-trained on vast amounts of text data and can be fine-tuned for various tasks.',
    deepDive: [
      {
        title: 'Auto-regressive Nature',
        content: `<p>GPT models are auto-regressive, meaning they generate text one token at a time, from left to right. The prediction for the next token is conditioned on the sequence of tokens that came before it. This is achieved by using a masked self-attention mechanism in the Transformer's decoder, which prevents positions from attending to subsequent positions.</p>`,
      },
      {
        title: 'Evolution and Scaling',
        content: `<p>The GPT series (GPT-1, GPT-2, GPT-3, GPT-4) demonstrates the power of scaling. With each iteration, the models have grown significantly in size (number of parameters) and have been trained on progressively larger datasets. This scaling has led to remarkable improvements in their ability to perform a wide range of language tasks, often with zero or few examples (zero-shot or few-shot learning).</p>`,
      },
    ],
  },
};
