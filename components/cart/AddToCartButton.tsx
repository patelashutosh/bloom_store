'use client'

import { Button } from '@/components/ui/button'
import { ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cart-store'
import { useState, useEffect } from 'react'

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    imageUrl: string
  }
  className?: string
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function AddToCartButton({ 
  product, 
  className = "bg-pink-600 hover:bg-pink-700 text-white px-6",
  variant = "default",
  size = "default"
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)
  const isInCart = useCartStore((state) => state.isInCart)
  const [isAdded, setIsAdded] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch by only showing cart state after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    })
    
    // Show success state briefly
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  // Don't show cart state until mounted to avoid hydration issues
  const inCart = mounted ? isInCart(product.id) : false

  if (isAdded) {
    return (
      <Button 
        variant="outline" 
        size={size}
        className={`${className} border-green-500 text-green-700 hover:bg-green-50`}
        disabled
      >
        <Check className="w-4 h-4 mr-2" />
        Added!
      </Button>
    )
  }

  return (
    <Button 
      onClick={handleAddToCart}
      variant={variant}
      size={size}
      className={className}
    >
      <ShoppingCart className="w-4 h-4 mr-2" />
      {inCart ? 'Add Another' : 'Add to Cart'}
    </Button>
  )
}
