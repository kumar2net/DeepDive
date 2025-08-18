# Deep Dive - AI Learning Platform

A comprehensive learning platform for deep learning concepts with AI-powered project idea generation.

## Features

- Interactive deep learning concept exploration
- AI-powered project idea generation
- Responsive design with modern UI
- Fallback project ideas when AI is unavailable

## Setup

### Environment Variables

To enable AI-powered project idea generation, create a `.env.local` file with:

```bash
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

### Development

```bash
npm install
npm run dev
```

### Deployment

The app is configured for deployment on Vercel with automatic deployments on git push.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Genkit AI
- Google AI (Gemini)
- Radix UI Components
