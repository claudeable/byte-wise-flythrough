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
| **Output Directory** | *(leave empty — handled by Nitro preset)* |
| **Install Command** | `bun install` |

### 3. Environment Variables
Currently, this project has **no required environment variables**.

If you add features later (auth, database, APIs), add them in:
**Vercel Dashboard → Project Settings → Environment Variables**

You can optionally add:
```
NITRO_PRESET=vercel
```
(The `vite.config.ts` already auto-detects Vercel, so this is optional.)

### 4. Deploy
Click **Deploy**. Vercel will build and host your site.

---

**No env vars needed right now — just import and deploy!**
