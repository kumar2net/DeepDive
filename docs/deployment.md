# Deployment Guide

## Overview

Deep Dive is deployed on Netlify with automatic deployments triggered by git pushes to the main branch.

## Production Environment

- **Live URL**: https://deepdivedl.netlify.app
- **Admin Dashboard**: https://app.netlify.com/projects/deepdivedl
- **Repository**: https://github.com/kumar2net/DeepDive

## Deployment Configuration

### Netlify Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18
- **Auto Deploy**: Enabled (deploys on every push to main branch)

### Environment Variables

The following environment variables are configured in Netlify:

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_AI_API_KEY` | Google AI API key for Gemini integration | Yes |

### Build Process

1. **Install Dependencies**: `npm install`
2. **Build Application**: `npm run build`
3. **Deploy to Netlify CDN**: Automatic deployment to global edge network

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Google AI API key

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/kumar2net/DeepDive.git
   cd DeepDive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   echo "GOOGLE_AI_API_KEY=your_api_key_here" > .env.local
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5143

## Deployment Process

### Automatic Deployment

1. **Push to Main Branch**: Any push to the main branch triggers automatic deployment
2. **Build Process**: Netlify builds the application using the configured build command
3. **Deployment**: Built files are deployed to the global CDN
4. **URL Update**: The production URL is updated with the new version

### Manual Deployment

If needed, you can trigger a manual deployment:

1. Go to Netlify Dashboard
2. Navigate to your site
3. Click "Trigger deploy" → "Deploy site"

### Rollback

To rollback to a previous deployment:

1. Go to Netlify Dashboard
2. Navigate to "Deploys" tab
3. Find the desired deployment
4. Click "Publish deploy"

## Monitoring

### Build Logs

- Available in Netlify Dashboard under "Deploys" tab
- Shows build process, warnings, and errors
- Includes build time and file sizes

### Function Logs

- Available in Netlify Dashboard under "Functions" tab
- Shows server-side function execution logs
- Useful for debugging AI integration issues

### Performance

- **Build Time**: ~1-2 minutes
- **Deploy Time**: ~30 seconds
- **CDN**: Global edge network for fast worldwide access

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Netlify Dashboard
   - Verify all dependencies are properly installed
   - Ensure environment variables are set correctly

2. **AI Functionality Not Working**
   - Verify `GOOGLE_AI_API_KEY` is set in Netlify environment variables
   - Check function logs for API errors
   - Ensure the API key has proper permissions

3. **Environment Variables Not Loading**
   - Redeploy the site after adding new environment variables
   - Verify variable names match exactly (case-sensitive)

### Debugging

1. **Local Testing**: Always test changes locally before pushing
2. **Build Logs**: Check Netlify build logs for detailed error information
3. **Function Logs**: Monitor function execution for AI-related issues

## Security

### Environment Variables

- All sensitive data (API keys) are stored as environment variables
- Environment variables are encrypted and secure
- Never commit API keys to the repository

### HTTPS

- All production traffic uses HTTPS
- Netlify provides automatic SSL certificates
- Mixed content is blocked for security

## Performance Optimization

### Build Optimization

- Next.js 15 with optimized build process
- Static generation where possible
- Server-side rendering for dynamic content
- Image optimization with Next.js Image component

### CDN Benefits

- Global edge network for fast worldwide access
- Automatic caching and compression
- DDoS protection
- High availability

## Maintenance

### Regular Tasks

1. **Monitor Build Logs**: Check for warnings or errors
2. **Update Dependencies**: Keep packages up to date
3. **Review Performance**: Monitor site performance metrics
4. **Backup Configuration**: Keep local copies of configuration files

### Updates

1. **Dependency Updates**: Run `npm update` and test locally
2. **Framework Updates**: Test thoroughly before deploying
3. **Configuration Changes**: Update documentation accordingly

## Support

For deployment issues:

1. Check Netlify documentation
2. Review build and function logs
3. Test locally to isolate issues
4. Contact the development team

## Links

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Project Repository](https://github.com/kumar2net/DeepDive)
- [Live Application](https://deepdivedl.netlify.app)
