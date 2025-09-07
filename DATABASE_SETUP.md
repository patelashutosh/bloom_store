# 🌸 Bloom AI Flower Shop Database Setup Guide

## ✅ Completed Steps

1. **✓ Created comprehensive Prisma schema** for flower shop
2. **✓ Generated Prisma client** successfully
3. **✓ All models defined** with proper relationships

## 🚀 Next Steps: Database Configuration

### Step 1: Install PostgreSQL

#### Option A: Local PostgreSQL
```bash
# On macOS (using Homebrew)
brew install postgresql@15
brew services start postgresql@15

# Create database
createdb bloom_ai_flower_shop
```

#### Option B: Docker PostgreSQL
```bash
# Run PostgreSQL in Docker
docker run --name bloom-ai-postgres \
  -e POSTGRES_DB=bloom_ai_flower_shop \
  -e POSTGRES_USER=bloom_user \
  -e POSTGRES_PASSWORD=bloom_password \
  -p 5432:5432 \
  -d postgres:15
```

#### Option C: Cloud Database (Recommended for Production)
- **Supabase**: Free tier with PostgreSQL
- **Railway**: Easy deployment
- **Neon**: Serverless PostgreSQL
- **PlanetScale**: MySQL alternative

### Step 2: Create Environment File

Create a `.env.local` file in your project root:

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/bloom_ai_flower_shop?schema=public"

# NextAuth.js Configuration  
NEXTAUTH_SECRET="your-super-secret-nextauth-key-change-this"
NEXTAUTH_URL="http://localhost:3000"

# Optional: OAuth Providers
# GOOGLE_CLIENT_ID="your-google-client-id"
# GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### Step 3: Push Schema to Database

Once you have your DATABASE_URL configured:

```bash
# Push the schema to create all tables
npx prisma db push

# (Optional) Open Prisma Studio to view your database
npx prisma studio
```

## 📊 Database Schema Overview

### NextAuth.js Models (Required)
- **User** - User accounts with authentication
- **Account** - OAuth provider accounts  
- **Session** - User sessions
- **VerificationToken** - Email verification

### Flower Shop Models
- **Category** - Flower categories (Roses, Tulips, etc.)
- **Product** - Individual flower products with:
  - `price` as Decimal(10,2) for precise currency
  - `imageUrl` for product photos
  - Flower-specific fields (type, color, occasion)
- **Order** - Customer orders with guest checkout support
- **OrderItem** - Individual items in orders
- **Review** - Product reviews and ratings

### Key Features

#### 🌺 Flower-Specific Fields
```sql
-- Product model includes:
flowerType     String?  -- "Rose", "Tulip", "Lily"
color          String?  -- "Red", "White", "Pink"  
occasion       String?  -- "Wedding", "Birthday"
seasonality    String?  -- "Spring", "Summer"
careInstructions String? -- Care guide
```

#### 💰 Precise Currency Handling
```sql
-- All prices use Decimal(10,2)
price       Decimal @db.Decimal(10,2)
subtotal    Decimal @db.Decimal(10,2)
tax         Decimal @db.Decimal(10,2)
total       Decimal @db.Decimal(10,2)
```

#### 🚚 Advanced Order Management
- Multiple order statuses (PENDING → DELIVERED)
- Payment status tracking
- Guest checkout support
- Delivery types (Standard, Express, Pickup, Scheduled)
- Special instructions and card messages

#### 🎯 One-to-Many Relationships
- User → Orders (one user, many orders)
- Category → Products (one category, many products)  
- Order → OrderItems (one order, many items)
- Product → Reviews (one product, many reviews)

## 🔧 Development Commands

```bash
# Generate Prisma client (already done)
npx prisma generate

# Push schema changes
npx prisma db push

# Reset database (careful!)
npx prisma db push --force-reset

# Open database browser
npx prisma studio

# View current schema
npx prisma db pull

# Generate and run migrations (production)
npx prisma migrate dev --name init
```

## 🌟 Sample Data Structure

Once tables are created, you can add sample data:

### Categories
- Roses
- Tulips  
- Lilies
- Mixed Bouquets
- Wedding Flowers

### Products
- Red Roses Bouquet ($29.99)
- Spring Tulip Mix ($24.99)
- White Lily Arrangement ($34.99)

## 🔐 Security Notes

1. **Never commit `.env.local`** - it contains secrets
2. **Use strong passwords** for database access
3. **Rotate NEXTAUTH_SECRET** in production
4. **Use SSL** for database connections in production

## 🎉 Once Complete

After running `npx prisma db push`, you'll have:
- ✅ All tables created in PostgreSQL
- ✅ Proper relationships established
- ✅ Ready for development and data seeding
- ✅ NextAuth.js fully integrated
- ✅ E-commerce functionality enabled

Your Bloom AI flower shop database will be ready for customers to browse flowers, place orders, and manage their accounts! 🌸
