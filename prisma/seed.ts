import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'roses' },
      update: {
        name: 'Roses',
        description: 'Beautiful roses for every occasion',
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400',
      },
      create: {
        name: 'Roses',
        description: 'Beautiful roses for every occasion',
        slug: 'roses',
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'tulips' },
      update: {
        name: 'Tulips',
        description: 'Vibrant tulips perfect for spring',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676272769520-e0b5af99c509?q=80&w=400',
      },
      create: {
        name: 'Tulips',
        description: 'Vibrant tulips perfect for spring',
        slug: 'tulips', 
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676272769520-e0b5af99c509?q=80&w=400',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'lilies' },
      update: {
        name: 'Lilies',
        description: 'Elegant lilies for special moments',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=400',
      },
      create: {
        name: 'Lilies',
        description: 'Elegant lilies for special moments',
        slug: 'lilies',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=400',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'mixed-bouquets' },
      update: {
        name: 'Mixed Bouquets',
        description: 'Beautiful mixed flower arrangements',
        imageUrl: 'https://images.unsplash.com/photo-1679678109868-cb5bd66d61dc?q=80&w=400',
      },
      create: {
        name: 'Mixed Bouquets',
        description: 'Beautiful mixed flower arrangements',
        slug: 'mixed-bouquets',
        imageUrl: 'https://images.unsplash.com/photo-1679678109868-cb5bd66d61dc?q=80&w=400',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'wedding-flowers' },
      update: {
        name: 'Wedding Flowers',
        description: 'Perfect flowers for your special day',
        imageUrl: 'https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?q=80&w=400',
      },
      create: {
        name: 'Wedding Flowers',
        description: 'Perfect flowers for your special day',
        slug: 'wedding-flowers',
        imageUrl: 'https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?q=80&w=400',
      },
    }),
  ])

  console.log('✅ Categories created')

  // Create products
  const products = await Promise.all([
    // Roses
    prisma.product.upsert({
      where: { slug: 'classic-red-roses-dozen' },
      update: {
        name: 'Classic Red Roses - Dozen',
        description: 'A classic dozen of beautiful red roses, perfect for expressing love and romance.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
        images: [
          'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
          'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600',
        ],
        flowerType: 'Rose',
        color: 'Red',
        occasion: 'Romance',
        seasonality: 'Year-round',
        careInstructions: 'Trim stems at an angle, change water every 2 days, keep in cool location.',
        stock: 25,
        featured: true,
        tags: ['romantic', 'classic', 'valentine'],
      },
      create: {
        name: 'Classic Red Roses - Dozen',
        description: 'A classic dozen of beautiful red roses, perfect for expressing love and romance.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
        images: [
          'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
          'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600',
        ],
        flowerType: 'Rose',
        color: 'Red',
        occasion: 'Romance',
        seasonality: 'Year-round',
        careInstructions: 'Trim stems at an angle, change water every 2 days, keep in cool location.',
        stock: 25,
        featured: true,
        slug: 'classic-red-roses-dozen',
        tags: ['romantic', 'classic', 'valentine'],
        categoryId: categories[0].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'white-roses-bouquet' },
      update: {},
      create: {
        name: 'Pure White Roses Bouquet',
        description: 'Elegant white roses symbolizing purity and new beginnings.',
        price: 44.99,
        imageUrl: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600',
        flowerType: 'Rose',
        color: 'White',
        occasion: 'Wedding',
        seasonality: 'Year-round', 
        careInstructions: 'Keep in fresh water, trim stems regularly, avoid direct sunlight.',
        stock: 20,
        slug: 'white-roses-bouquet',
        tags: ['wedding', 'elegant', 'pure'],
        categoryId: categories[0].id,
      },
    }),
    
    // Tulips
    prisma.product.upsert({
      where: { slug: 'spring-tulip-mix' },
      update: {},
      create: {
        name: 'Spring Tulip Mix',
        description: 'A vibrant mix of colorful tulips to celebrate the spring season.',
        price: 29.99,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676272769520-e0b5af99c509?q=80&w=600',
        flowerType: 'Tulip',
        color: 'Mixed',
        occasion: 'Spring',
        seasonality: 'Spring',
        careInstructions: 'Keep stems in cool water, place in bright but indirect light.',
        stock: 15,
        featured: true,
        slug: 'spring-tulip-mix',
        tags: ['spring', 'colorful', 'cheerful'],
        categoryId: categories[1].id,
      },
    }),
    prisma.product.upsert({
      where: { slug: 'yellow-tulips-bunch' },
      update: {},
      create: {
        name: 'Sunshine Yellow Tulips',
        description: 'Bright yellow tulips that bring sunshine to any room.',
        price: 24.99,
        imageUrl: 'https://images.unsplash.com/photo-1715314009576-766bc2563ad9?q=80&w=600',
        flowerType: 'Tulip',
        color: 'Yellow',
        occasion: 'Birthday',
        seasonality: 'Spring',
        careInstructions: 'Change water daily, cut stems underwater for best results.',
        stock: 18,
        slug: 'yellow-tulips-bunch',
        tags: ['bright', 'cheerful', 'birthday'],
        categoryId: categories[1].id,
      },
    }),

    // Lilies
    prisma.product.upsert({
      where: { slug: 'white-lily-arrangement' },
      update: {},
      create: {
        name: 'Elegant White Lily Arrangement',
        description: 'Sophisticated white lilies arranged with greenery for a timeless look.',
        price: 54.99,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676068243733-df1880c2aef8?q=80&w=600',
        flowerType: 'Lily',
        color: 'White',
        occasion: 'Sympathy',
        seasonality: 'Year-round',
        careInstructions: 'Remove pollen from stamens, keep in fresh water, mist petals lightly.',
        stock: 12,
        featured: true,
        slug: 'white-lily-arrangement',
        tags: ['elegant', 'sophisticated', 'sympathy'],
        categoryId: categories[2].id,
      },
    }),

    // Mixed Bouquets
    prisma.product.upsert({
      where: { slug: 'garden-fresh-bouquet' },
      update: {},
      create: {
        name: 'Garden Fresh Mixed Bouquet',
        description: 'A delightful mix of seasonal flowers that captures the essence of a garden.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1679678109868-cb5bd66d61dc?q=80&w=600',
        flowerType: 'Mixed',
        color: 'Mixed',
        occasion: 'Any',
        seasonality: 'Year-round',
        careInstructions: 'Trim all stems, use flower food if provided, keep away from heat.',
        stock: 22,
        slug: 'garden-fresh-bouquet',
        tags: ['mixed', 'fresh', 'garden', 'seasonal'],
        categoryId: categories[3].id,
      },
    }),

    // Wedding Flowers
    prisma.product.upsert({
      where: { slug: 'bridal-bouquet-classic' },
      update: {},
      create: {
        name: 'Classic Bridal Bouquet',
        description: 'A timeless bridal bouquet featuring white roses, baby\'s breath, and greenery.',
        price: 89.99,
        imageUrl: 'https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?q=80&w=600',
        flowerType: 'Mixed',
        color: 'White',
        occasion: 'Wedding',
        seasonality: 'Year-round',
        careInstructions: 'Keep refrigerated until ceremony, handle gently, preserve after use.',
        stock: 8,
        featured: true,
        slug: 'bridal-bouquet-classic',
        tags: ['wedding', 'bridal', 'classic', 'white'],
        categoryId: categories[4].id,
      },
    }),
  ])

  console.log('✅ Products created')

  // Create a test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test Customer',
      phone: '+1-555-0123',
      address: '123 Garden Street',
      city: 'Flower City',
      state: 'FL',
      zipCode: '12345',
      country: 'US',
      newsletter: true,
    },
  })

  console.log('✅ Test user created')

  // Create sample reviews
  await Promise.all([
    prisma.review.upsert({
      where: { userId_productId: { userId: testUser.id, productId: products[0].id } },
      update: {},
      create: {
        userId: testUser.id,
        productId: products[0].id,
        rating: 5,
        title: 'Absolutely Beautiful!',
        comment: 'The roses were fresh and beautiful. Perfect for our anniversary!',
        isVerified: true,
        isVisible: true,
      },
    }),
    prisma.review.upsert({
      where: { userId_productId: { userId: testUser.id, productId: products[2].id } },
      update: {},
      create: {
        userId: testUser.id,
        productId: products[2].id,
        rating: 5,
        title: 'Spring Perfection',
        comment: 'These tulips brought so much joy to our home. Highly recommend!',
        isVerified: true,
        isVisible: true,
      },
    }),
  ])

  console.log('✅ Sample reviews created')

  console.log('🌸 Seed completed successfully!')
  console.log(`
📊 Created:
- ${categories.length} categories
- ${products.length} products  
- 1 test user
- 2 sample reviews

🚀 Your flower shop is ready!
`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
