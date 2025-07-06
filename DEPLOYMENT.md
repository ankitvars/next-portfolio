# Deployment Guide

This guide explains how to set up automatic deployment to Vercel using GitHub Actions.

## Prerequisites

1. A GitHub repository with your portfolio code
2. A Vercel account
3. Your project deployed on Vercel

## Setup Instructions

### 1. Get Vercel Credentials

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to your project
3. Go to **Settings** → **General**
4. Copy the following values:
   - **Project ID**
   - **Org ID** (Team ID if using a team)

### 2. Generate Vercel Token

1. Go to [Vercel Account Settings](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Give it a name (e.g., "GitHub Actions")
4. Set expiration to **No Expiration**
5. Copy the generated token

### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   | Secret Name         | Value                  |
   | ------------------- | ---------------------- |
   | `VERCEL_TOKEN`      | Your Vercel token      |
   | `VERCEL_ORG_ID`     | Your Vercel Org ID     |
   | `VERCEL_PROJECT_ID` | Your Vercel Project ID |

### 4. Configure Branch Protection (Optional but Recommended)

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

## How It Works

### Automatic Deployment

- **Push to main/master**: Automatically deploys to production
- **Pull Request**: Creates a preview deployment
- **Every commit**: Runs tests, linting, and type checking

### Workflow Steps

1. **Checkout**: Gets the latest code
2. **Setup Node.js**: Installs Node.js 18 with npm caching
3. **Install Dependencies**: Runs `npm ci` for clean install
4. **Linting**: Runs `npm run lint` to check code quality
5. **Type Checking**: Runs `npm run type-check` for TypeScript validation
6. **Build**: Runs `npm run build` to ensure the project builds successfully
7. **Deploy**: Deploys to Vercel (production for main branch, preview for PRs)

## Troubleshooting

### Common Issues

1. **Build Fails**: Check the build logs in GitHub Actions
2. **Deployment Fails**: Verify your Vercel secrets are correct
3. **Type Errors**: Fix TypeScript errors before pushing

### Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Environment Variables

If your project uses environment variables, add them in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add your environment variables

## Custom Domains

To set up a custom domain:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Configure DNS settings as instructed

## Monitoring

- **Vercel Dashboard**: Monitor deployments and performance
- **GitHub Actions**: View workflow runs and logs
- **Vercel Analytics**: Track website performance (if enabled)

## Security Notes

- Never commit your Vercel token to the repository
- Use repository secrets for sensitive information
- Regularly rotate your Vercel token
- Consider using branch protection rules

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify your Vercel credentials
3. Ensure your project builds locally
4. Check Vercel's documentation for troubleshooting
