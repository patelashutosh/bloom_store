import { Suspense } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { db } from '@/lib/db'
import Image from 'next/image'
import { Heart, ShoppingCart, Star } from 'lucide-react'

// Product type for type safety
type Product = {
  id: string
  name: string
  description: string | null
  price: any // Decimal type from Prisma
  imageUrl: string
  flowerType: string | null
  color: string | null
  occasion: string | null
  featured: boolean
  category: {
    name: string
  }
}

async function getProducts(): Promise<Product[]> {
  try {
    const products = await db.product.findMany({
      include: {
        category: true,
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' }
      ]
    })
    return products
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return []
  }
}

function ProductCard({ product }: { product: Product }) {
  const price = typeof product.price === 'object' ? product.price.toNumber() : Number(product.price)
  
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
      <div className="relative">
        <AspectRatio ratio={4/3}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
        
        {/* Overlay with heart icon */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Featured badge */}
        {product.featured && (
          <Badge className="absolute top-3 left-3 bg-pink-100 text-pink-800 hover:bg-pink-100">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Featured
          </Badge>
        )}
        
        {/* Category badge */}
        <Badge variant="secondary" className="absolute bottom-3 left-3 bg-white/90 text-gray-700">
          {product.category.name}
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-2">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg leading-tight text-gray-900 group-hover:text-pink-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>
        
        {/* Flower details */}
        <div className="flex flex-wrap gap-1 pt-2">
          {product.flowerType && (
            <Badge variant="outline" className="text-xs text-gray-600 border-gray-200">
              {product.flowerType}
            </Badge>
          )}
          {product.color && (
            <Badge variant="outline" className="text-xs text-gray-600 border-gray-200">
              {product.color}
            </Badge>
          )}
          {product.occasion && (
            <Badge variant="outline" className="text-xs text-gray-600 border-gray-200">
              {product.occasion}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">
          ₹{price.toFixed(2)}
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <AspectRatio ratio={4/3}>
            <Skeleton className="w-full h-full" />
          </AspectRatio>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-10 w-24" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

async function ProductGrid() {
  const products = await getProducts()
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No products available at the moment.</div>
        <p className="text-gray-400 mt-2">Please check back later for our beautiful flower arrangements.</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-16 mb-12">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Beautiful Flowers
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our handpicked collection of fresh, beautiful flowers perfect for every occasion
          </p>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Collection
          </h2>
          <p className="text-gray-600">
            Each bouquet is carefully crafted with love and attention to detail
          </p>
        </div>
        
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  )
}
