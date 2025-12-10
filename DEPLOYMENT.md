# Deployment Guide for Vercel

This project has been configured for **static deployment** on Vercel's free tier.

## Important Notes

⚠️ **This is a UI-only deployment**
- No PHP backend functionality
- No database connections
- No real authentication
- All forms are mocked for demonstration purposes
- Navigation and UI interactions work fully

## What Works

✅ Full UI/UX navigation
✅ All pages are accessible
✅ Client-side routing
✅ Dark/Light theme switching
✅ Responsive design
✅ All visual components

## Deployment Steps

### 1. Commit Generated Files

```bash
git add .
git commit -m "Configure for Vercel static deployment"
git push
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Vercel will auto-detect the configuration from `vercel.json`
4. Click "Deploy"

### 3. Build Configuration (Auto-detected)

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Local Development

### Static Mode (for Vercel testing)
```bash
npm run dev
```

### Laravel Mode (with PHP backend)
```bash
npm run dev:laravel
```

## Build Scripts

- `npm run build` - Build for Vercel (static)
- `npm run build:laravel` - Build for Laravel (with PHP backend)
- `npm run dev` - Dev server for static mode
- `npm run dev:laravel` - Dev server for Laravel mode

## File Structure

- `index.html` - Entry point for static build
- `vite.config.static.ts` - Vite config for static deployment
- `vite.config.ts` - Original Laravel Vite config
- `resources/js/app-static.tsx` - Static app entry
- `resources/js/app.tsx` - Laravel/Inertia app entry
- `resources/js/lib/inertia-shim.tsx` - Mock Inertia.js for static mode

## Troubleshooting

### Build fails on Vercel
- Check that all dependencies are in `package.json`
- Ensure `dist` folder is not in `.gitignore` for the build output
- Verify `vercel.json` configuration

### Routes not working
- The `vercel.json` rewrites configuration handles client-side routing
- All routes redirect to `index.html` for React Router to handle

### Missing styles
- Ensure Tailwind CSS is properly configured
- Check that `resources/css/app.css` imports are correct

