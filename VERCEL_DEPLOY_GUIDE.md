VERCEL_DEPLOY_GUIDE.md
# Vercel Deployment Guide

## Prerequisites
- A [Vercel](https://vercel.com) account
- Your project pushed to GitHub/GitLab/Bitbucket

## Deployment Steps

### 1. Import Project
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Click **Add New Project** → **Import Git Repository**
- Select your repository

### 2. Configure Build Settings
In the Vercel project settings, set:

| Setting | Value |
|---------|-------|
| **Framework Preset** | `Other` |
| **Build Command** | `vite build` |
| **Output Directory** | `.output/public` |
| **Install Command** | `bun install` |

### 3. Environment Variables
Currently, this project has **no required environment variables**.

If you add features later (auth, database, APIs), add them in:
**Vercel Dashboard → Project Settings → Environment Variables**

### 4. Deploy
Click **Deploy**. Vercel will build and host your site.

## Optional: Edge Runtime
This project uses TanStack Start with Nitro. To deploy as Vercel Edge Functions instead of static, set this environment variable:

```
NITRO_PRESET=vercel-edge
```

Or for serverless:
```
NITRO_PRESET=vercel
```

---

**No env vars needed right now — just import and deploy!**
