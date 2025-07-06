# GitHub Actions Setup Guide

This guide explains how to set up automated CI/CD for your portfolio using GitHub Actions.

## 🚀 Overview

The GitHub Actions workflow automatically:

- Runs tests and linting on every push and pull request
- Deploys preview builds for pull requests
- Deploys to production on main branch pushes
- Handles environment variables securely

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Resend Account**: Sign up at [resend.com](https://resend.com) for email functionality
3. **GitHub Repository**: Your portfolio code pushed to GitHub

## 🔧 Setup Steps

### 1. Get Vercel Credentials

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to Settings → Tokens
3. Create a new token with full scope
4. Copy the token

### 2. Get Vercel Project Info

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → General
3. Copy the following:
   - **Project ID** (found in the project URL)
   - **Organization ID** (found in the project settings)

### 3. Get Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Create a new API key
3. Copy the key (starts with `re_`)

### 4. Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

| Secret Name         | Value               | Description                     |
| ------------------- | ------------------- | ------------------------------- |
| `VERCEL_TOKEN`      | `your_vercel_token` | Vercel API token                |
| `VERCEL_ORG_ID`     | `your_org_id`       | Vercel organization ID          |
| `VERCEL_PROJECT_ID` | `your_project_id`   | Vercel project ID               |
| `RESEND_API_KEY`    | `re_your_api_key`   | Resend API key for contact form |

### 5. Push Your Code

The workflow will automatically trigger when you push to the main branch:

```bash
git add .
git commit -m "feat: add GitHub Actions workflow"
git push origin main
```

## 🔄 Workflow Details

### Triggers

- **Push to main/master**: Runs tests and deploys to production
- **Pull Request**: Runs tests and creates preview deployment

### Jobs

#### 1. Test Job

- ✅ Checkout code
- ✅ Setup Node.js 18
- ✅ Install dependencies
- ✅ Run linting (`npm run lint`)
- ✅ Run type checking (`npm run type-check`)
- ✅ Build project (`npm run build`)

#### 2. Deploy Job (Production)

- ✅ Only runs on main/master branch
- ✅ Deploys to Vercel production environment
- ✅ Uses `--prod` flag for production deployment

#### 3. Deploy Preview Job

- ✅ Only runs on pull requests
- ✅ Creates preview deployment
- ✅ Allows testing changes before merging

## 🔍 Monitoring

### View Workflow Runs

1. Go to your GitHub repository
2. Click **Actions** tab
3. View the **CI/CD Pipeline** workflow runs

### Check Deployment Status

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to your project
3. Check the **Deployments** tab

## 🛠️ Troubleshooting

### Common Issues

#### 1. Build Failures

- Check the Actions tab for error logs
- Ensure all dependencies are properly installed
- Verify TypeScript types are correct

#### 2. Deployment Failures

- Verify Vercel credentials are correct
- Check if the project exists in Vercel
- Ensure environment variables are set

#### 3. Environment Variables

- Make sure all secrets are added to GitHub
- Verify the secret names match exactly
- Check if the API keys are valid

### Debug Steps

1. **Check Workflow Logs**:

   ```bash
   # View detailed logs in GitHub Actions
   # Look for specific error messages
   ```

2. **Test Locally**:

   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

3. **Verify Secrets**:
   - Double-check secret names and values
   - Ensure no extra spaces or characters

## 📝 Customization

### Modify Workflow

Edit `.github/workflows/deploy.yml` to:

- Change Node.js version
- Add additional test steps
- Modify deployment conditions
- Add custom environment variables

### Add New Environments

To add staging or other environments:

1. Create new secrets for the environment
2. Add new job in the workflow
3. Configure deployment conditions

## 🔒 Security

### Best Practices

- ✅ Never commit secrets to the repository
- ✅ Use GitHub Secrets for sensitive data
- ✅ Regularly rotate API keys
- ✅ Limit token permissions to minimum required

### Secret Management

- Use environment-specific secrets
- Rotate keys regularly
- Monitor secret usage

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Resend API Documentation](https://resend.com/docs/api-reference)

---

**Need Help?** Check the [GitHub Actions tab](https://github.com/your-username/your-repo/actions) in your repository for detailed logs and troubleshooting information.
