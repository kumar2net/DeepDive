# Deep Dive - AI Learning Platform

A comprehensive learning platform for deep learning concepts with AI-powered project idea generation.

## Features

- Interactive deep learning concept exploration
- AI-powered project idea generation
- Responsive design with modern UI
- Server-side rendering with Next.js 15

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

The app is configured for deployment on Netlify with automatic deployments on git push.

#### Netlify Deployment Steps:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment Variables**: Add `GOOGLE_AI_API_KEY` in Netlify dashboard
4. **Deploy**: Netlify will automatically build and deploy on every push

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Genkit AI
- Google AI (Gemini)
- Radix UI Components
- Netlify (Hosting)
