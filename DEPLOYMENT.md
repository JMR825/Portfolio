# GitHub Pages Deployment Guide

## 📋 Prerequisites

1. GitHub account
2. Git installed on your computer
3. Your portfolio code ready

## 🚀 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `portfolio` (or any name you prefer)
4. Keep it **Public**
5. Click **"Create repository"**

### Step 2: Initialize Git (if not already done)

Open terminal in the Portfolio folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### Step 3: Connect to GitHub

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Update vite.config.js

**IMPORTANT**: Update the `base` path in `vite.config.js` to match your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/', // Replace REPO_NAME with your actual repo name
})
```

If your repo is named `portfolio`, use:
```javascript
base: '/portfolio/',
```

### Step 5: Deploy to GitHub Pages

Run this command to build and deploy:

```bash
npm run deploy
```

This will:
- Build your optimized production files
- Create a `gh-pages` branch
- Push the built files to GitHub

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### Step 7: Access Your Live Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

For example, if your username is `JMR825` and repo is `portfolio`:
```
https://JMR825.github.io/portfolio/
```

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## ⚠️ Troubleshooting

### Issue: Blank page or 404 errors

**Solution**: Make sure the `base` in `vite.config.js` matches your repo name exactly.

### Issue: CSS/Images not loading

**Solution**: Check that all asset paths are relative (no leading `/` except for public folder assets).

### Issue: Resume download not working

**Solution**: Ensure the PDF is in the `public/` folder before building.

## 🎉 You're Done!

Your portfolio is now live on GitHub Pages! Share the link with potential employers and on your resume.

## 📱 Custom Domain (Optional)

To use a custom domain like `yourname.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file to the `public/` folder with your domain
3. Configure DNS settings at your domain registrar
4. Update GitHub Pages settings with your custom domain

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
