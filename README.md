# Deep Dive - AI Learning Platform

A comprehensive learning platform for deep learning concepts with AI-powered project idea generation.

## 🌐 Live Application

**Production URL**: https://deepdivedl.netlify.app

## Features

- Interactive deep learning concept exploration
- AI-powered project idea generation
- Responsive design with modern UI
- Server-side rendering with Next.js 15
- Real-time AI project suggestions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Google AI API key

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kumar2net/DeepDive.git
   cd DeepDive
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy the example environment file and add your API key:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and replace `your_google_ai_api_key_here` with your actual API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**: http://localhost:5143

## 📚 Available Concepts

### Transformers
- Transformers Overview
- Attention Mechanism
- BERT
- GPT Models

### Graph Neural Networks
- Graph Neural Networks Overview

### Vision Language Models
- Vision Language Models Overview

### Large Language Models
- Understanding LLM Parameters

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **AI Integration**: Genkit AI with Google AI (Gemini)
- **Hosting**: Netlify
- **Deployment**: Automatic on git push

## 🚀 Deployment

The application is deployed on Netlify with automatic deployments.

### Netlify Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18

### Environment Variables
Add the following environment variable in Netlify dashboard:
- `GOOGLE_AI_API_KEY`: Your Google AI API key

## 📝 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks
```

### Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Radix UI components
│   ├── concept-view.tsx
│   └── project-idea-generator.tsx
├── ai/                 # AI integration
│   ├── flows/          # Genkit AI flows
│   └── genkit.ts       # AI configuration
├── lib/                # Utilities and data
│   ├── concepts.ts     # Concept definitions
│   └── utils.ts        # Helper functions
└── hooks/              # Custom React hooks
```

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.
