# 🌸 Bloom AI - Flower Shop E-commerce

A modern, full-stack e-commerce flower shop built for the Indian market with Next.js, TypeScript, and cutting-edge web technologies.

## ✨ Features

- **🛒 Complete E-commerce Flow**: Product browsing, cart management, checkout, and order tracking
- **🔐 Secure Authentication**: NextAuth.js v5 with Google OAuth integration
- **💳 Payment Processing**: Mock payment system with order management
- **📱 Responsive Design**: Mobile-first approach using Tailwind CSS and shadcn/ui
- **🇮🇳 Indian Market Ready**: ₹ currency, 18% GST, localized shipping rules
- **⚡ Performance Optimized**: Next.js 15 with App Router and server components
- **💾 Smart State Management**: Zustand with localStorage persistence for cart
- **🎨 Modern UI/UX**: Clean, elegant design perfect for flower retail

## 🚀 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM (Supabase)
- **Authentication**: NextAuth.js v5 with Google OAuth
- **State Management**: Zustand with localStorage persistence
- **Deployment**: Ready for Vercel deployment

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/patelashutosh/bloom_store.git
cd bloom_store
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file with:
```bash
DATABASE_URL="your_postgresql_connection_string"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key"
AUTH_GOOGLE_ID="your_google_oauth_id"
AUTH_GOOGLE_SECRET="your_google_oauth_secret"
```

4. **Set up the database**
```bash
npm run db:push
npm run db:seed
```

5. **Start the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## 🎯 Project Structure

```
bloom-ai/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   ├── (store)/                  # Store pages (cart, checkout, orders)
│   ├── api/                      # API routes
│   └── order-confirmation/       # Order confirmation
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── shared/                   # Shared components
│   └── cart/                     # Cart-specific components
├── lib/                          # Utilities and configurations
│   ├── actions/                  # Server actions
│   └── stores/                   # Zustand stores
├── prisma/                       # Database schema and migrations
└── public/                       # Static assets
```

## 🌟 Key Features Implementation

### Indian Market Localization
- **Currency**: All prices in ₹ (Indian Rupees)
- **Tax**: 18% GST (Goods and Services Tax)
- **Shipping**: Free shipping on orders ₹300+, ₹99 otherwise
- **Price Range**: ₹299 to ₹2999 (realistic for Indian flower market)

### E-commerce Functionality
- **Product Catalog**: Categories, search, filtering
- **Shopping Cart**: Real-time updates, persistence, calculations
- **Checkout Flow**: Customer information, payment simulation
- **Order Management**: Order history, tracking, confirmations

### Technical Highlights
- **Server Components**: Optimal performance with Next.js App Router
- **Type Safety**: Full TypeScript implementation
- **Database**: Prisma ORM with PostgreSQL
- **Authentication**: Secure JWT sessions with NextAuth.js
- **State Persistence**: Cart survives browser refreshes

## 📚 Documentation

- [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) - Production deployment instructions
- [`BLOOM_AI_DEVELOPMENT_GUIDE.md`](./BLOOM_AI_DEVELOPMENT_GUIDE.md) - Step-by-step development guide
- [`.cursorrules`](./.cursorrules) - Development best practices and coding guidelines

## 🚀 Deployment

This application is optimized for deployment on **Vercel**:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

See the [deployment guide](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ashutosh Patel**
- GitHub: [@patelashutosh](https://github.com/patelashutosh)

---

**Built with ❤️ for the Indian flower market** 🌺