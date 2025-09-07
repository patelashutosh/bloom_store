# 🚀 Bloom AI - Production Deployment Guide

## 🏆 **Recommended: Vercel (Best for Next.js)**

**Why Vercel?**
- Built by the Next.js team - perfect compatibility
- Generous free tier (100GB bandwidth, 1000 function invocations/day)
- Automatic deployments from GitHub
- Built-in environment variable management
- Global CDN for fast loading
- Zero-config deployments for Next.js

**Free Tier Limitations:**
- 100GB bandwidth/month
- 1000 serverless function executions/day
- 100 deployments/day
- No commercial usage restrictions

---

## 🚀 **Step-by-Step Vercel Deployment**

### **1. Prepare Your Repository**
```bash
# Ensure your code is committed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### **2. Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your `bloom-ai` repository
4. Vercel auto-detects Next.js - click "Deploy"

### **3. Configure Environment Variables**
In Vercel dashboard → Settings → Environment Variables, add:

```bash
# Database
DATABASE_URL=your_supabase_connection_string

# Supabase (optional for future use)
SUPABASE_URL=https://wmvhmiqtccngwwsqoitu.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key

# NextAuth.js
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your_secret_key
AUTH_SECRET=your_secret_key

# Google OAuth
AUTH_GOOGLE_ID=your_google_oauth_id
AUTH_GOOGLE_SECRET=your_google_oauth_secret
```

### **4. Update Google OAuth Settings**
In Google Cloud Console:
- Add your Vercel domain to authorized origins
- Add redirect URI: `https://your-app.vercel.app/api/auth/callback/google`

### **5. Test Production Deployment**
- Visit your live URL
- Test authentication flow
- Test cart functionality
- Test checkout process
- Verify all images load correctly

---

## 🌟 **Alternative Free Hosting Platforms**

### **2. Railway** ⭐ (Great full-stack option)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway init
railway up
```

**Pros:**
- $5/month free credits (usually covers small apps)
- Built-in PostgreSQL database
- Easy environment variable management
- Good for full-stack apps

**Cons:**
- Credit-based system (not unlimited)
- Smaller free tier than Vercel

### **3. Render** (Solid alternative)
**Pros:**
- Free web services
- Built-in PostgreSQL (free tier)
- Auto-deploys from GitHub

**Cons:**
- Free tier spins down after 15min inactivity
- 750 hours/month limit
- Slower cold starts

### **4. Netlify** (Frontend-focused)
**Pros:**
- Great for static/frontend apps
- Generous bandwidth
- Form handling

**Cons:**
- Limited serverless function runtime
- Not ideal for heavy backend logic
- Better suited for static sites

---

## 📊 **Platform Comparison for Bloom AI**

| Platform | **Best For** | **Database** | **Bandwidth** | **Serverless** | **Rating** |
|----------|-------------|-------------|--------------|---------------|------------|
| **Vercel** | Next.js apps | External (Supabase) | 100GB | 1000/day | ⭐⭐⭐⭐⭐ |
| **Railway** | Full-stack apps | Built-in PostgreSQL | 5$/month credits | Unlimited | ⭐⭐⭐⭐ |
| **Render** | Full-stack apps | Built-in PostgreSQL | 100GB | 750 hrs/month | ⭐⭐⭐ |
| **Netlify** | Frontend apps | External only | 100GB | 125K/month | ⭐⭐ |

---

## 🔧 **Production Checklist**

### **Before Deployment:**
- [ ] All environment variables documented
- [ ] Google OAuth configured for production domain
- [ ] Database schema deployed to production
- [ ] Sample data seeded
- [ ] All images loading from CDN sources
- [ ] Error handling in place

### **After Deployment:**
- [ ] Authentication flow working
- [ ] Cart persistence working
- [ ] Checkout process complete
- [ ] Order confirmation emails (if implemented)
- [ ] Mobile responsiveness tested
- [ ] Performance optimization verified
- [ ] SEO meta tags in place

---

## 💡 **Performance Optimization Tips**

### **Image Optimization**
```javascript
// next.config.js - Already configured
images: {
  remotePatterns: [
    { hostname: 'images.unsplash.com' },
    { hostname: 'plus.unsplash.com' },
    { hostname: 'picsum.photos' },
  ],
}
```

### **Caching Strategies**
- Use Next.js `revalidate` for product data
- Implement React `Suspense` for loading states
- Use Vercel's Edge caching for static content

### **Bundle Size Optimization**
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

---

## 💰 **Cost Considerations**

### **Free Tier Limits:**
- **Vercel**: Usually sufficient for small-medium apps
- **Supabase**: 500MB database, 2GB bandwidth/month
- **When to upgrade**: > 10k monthly visitors or > 100 orders/month

### **Scaling Costs:**
- **Vercel Pro**: $20/month (higher limits)
- **Supabase Pro**: $25/month (8GB database)
- **Railway**: Pay per usage after free credits

---

## 🚨 **Common Deployment Issues & Solutions**

### **Environment Variables Not Loading**
```bash
# Check if variables are set in Vercel dashboard
# Redeploy after adding variables
```

### **Authentication Redirect Issues**
- Verify `NEXTAUTH_URL` matches your domain exactly
- Check Google OAuth redirect URIs
- Ensure no trailing slashes in URLs

### **Database Connection Errors**
- Verify Supabase connection string
- Check if IP restrictions are applied in Supabase
- Test connection string locally first

### **Image Loading Issues**
- Verify all image domains in `next.config.js`
- Check if images are accessible from production environment
- Consider using Vercel's Image Optimization

---

## 🌐 **Custom Domain Setup (Optional)**

### **Vercel Custom Domain:**
1. Purchase domain from any registrar
2. In Vercel dashboard → Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXTAUTH_URL` and Google OAuth settings

---

## 📈 **Monitoring & Analytics**

### **Built-in Monitoring:**
- Vercel Analytics (free tier available)
- Supabase Dashboard for database monitoring
- Next.js built-in performance metrics

### **Optional Analytics:**
- Google Analytics 4 (free)
- Vercel Speed Insights
- Sentry for error tracking

---

## 🎯 **Recommended Deployment Strategy**

**For Bloom AI flower shop:**
1. **Start with Vercel** - Perfect for Next.js, easy setup
2. **Keep Supabase** - Already configured and working
3. **Add custom domain** when ready for business
4. **Monitor usage** - Upgrade when hitting free tier limits
5. **Consider Railway** if you need built-in database management

**Total Free Tier Capacity:** Supports ~5000 monthly visitors, ~500 orders/month

This setup should handle your initial launch and growth phase at $0 cost! 🚀
