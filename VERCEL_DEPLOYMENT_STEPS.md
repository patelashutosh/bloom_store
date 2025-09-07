# 🚀 Vercel Deployment Steps for Bloom AI

## Step 1: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" 
3. Import your `bloom_store` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Note down your Vercel URL** (e.g., `https://bloom-store-abc123.vercel.app`)

## Step 2: Update Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```bash
# Database (keep same as local)
DATABASE_URL=postgresql://postgres:jEi52jYac2miGZhU@db.wmvhmiqtccngwwsqoitu.supabase.co:5432/postgres

# Supabase (keep same as local)  
SUPABASE_URL=https://wmvhmiqtccngwwsqoitu.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdmhtaXF0Y2NuZ3d3c3FvaXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwOTAyOTIsImV4cCI6MjA3MjY2NjI5Mn0.LaaCoRpMDUb6vKbus7CepqN7f5FnzGPkaejFG1Jch-A

# NextAuth.js (UPDATE THESE)
NEXTAUTH_URL=https://your-actual-vercel-url.vercel.app
NEXTAUTH_SECRET=NjL+S6SjrTulktYyJSuQaJdRFrkDwHT6fpgsEEMkFX8=
AUTH_SECRET=NjL+S6SjrTulktYyJSuQaJdRFrkDwHT6fpgsEEMkFX8=

# Google OAuth (keep same as local)
AUTH_GOOGLE_ID=your_google_oauth_id
AUTH_GOOGLE_SECRET=your_google_oauth_secret
```

## Step 3: Update Google OAuth Settings

Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials

### Authorized JavaScript Origins
```
http://localhost:3000
https://your-actual-vercel-url.vercel.app
```

### Authorized Redirect URIs
```
http://localhost:3000/api/auth/callback/google
https://your-actual-vercel-url.vercel.app/api/auth/callback/google
```

**Important:** Replace `your-actual-vercel-url.vercel.app` with your real Vercel domain!

## Step 4: Redeploy

After updating environment variables and Google OAuth settings:
1. Go to Vercel Dashboard → Deployments
2. Click "Redeploy" on the latest deployment
3. Or push a new commit to trigger auto-deployment

## Step 5: Test Production

Visit your live URL and test:
- ✅ Homepage loads
- ✅ Products display with images
- ✅ Google sign-in works
- ✅ Cart functionality works
- ✅ Checkout process completes
- ✅ Orders page accessible

## Common Issues & Solutions

### Issue: "Invalid redirect URI" 
**Solution:** Double-check the redirect URI in Google OAuth matches your Vercel URL exactly

### Issue: "NEXTAUTH_URL mismatch"
**Solution:** Ensure NEXTAUTH_URL in Vercel environment variables matches your actual domain

### Issue: Images not loading
**Solution:** Verify `next.config.ts` includes all image domains and they're accessible from production

### Issue: Database connection error
**Solution:** Verify DATABASE_URL is correct and Supabase allows connections from Vercel

## Environment Variables Checklist

- [ ] `DATABASE_URL` - Supabase connection string
- [ ] `NEXTAUTH_URL` - Your Vercel production URL
- [ ] `NEXTAUTH_SECRET` - Your secret key
- [ ] `AUTH_SECRET` - Same as NEXTAUTH_SECRET  
- [ ] `AUTH_GOOGLE_ID` - Google OAuth Client ID
- [ ] `AUTH_GOOGLE_SECRET` - Google OAuth Client Secret
- [ ] `SUPABASE_URL` - Supabase project URL
- [ ] `SUPABASE_ANON_KEY` - Supabase anonymous key

## Google OAuth Settings Checklist

- [ ] Added production domain to Authorized JavaScript Origins
- [ ] Added production callback URL to Authorized Redirect URIs
- [ ] Kept localhost URLs for development
- [ ] No trailing slashes in URLs
- [ ] HTTPS protocol for production URLs
