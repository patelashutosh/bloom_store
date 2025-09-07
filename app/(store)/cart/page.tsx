'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Minus, Plus, ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react'
import { useCartStore, type CartItem } from '@/lib/stores/cart-store'

// Using CartItem type from cart store

function CartItemComponent({ item }: { item: CartItem }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity)
    }
  }

  const lineTotal = item.price * item.quantity

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Flowers
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  ₹{item.price.toFixed(2)} each
                </p>
              </div>
              
              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-red-600 hover:bg-red-50"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Quantity Controls and Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 h-8 text-center"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {/* Line Total */}
              <div className="text-lg font-bold text-gray-900">
              ₹{lineTotal.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const subtotal = useCartStore((state) => state.subtotal)
  const tax = useCartStore((state) => state.tax)
  const shipping = useCartStore((state) => state.shipping)
  const total = useCartStore((state) => state.total)
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const isEmpty = mounted ? items.length === 0 : true

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isEmpty ? (
          /* Empty Cart State */
          <div className="max-w-2xl mx-auto">
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">
                  Discover our beautiful collection of fresh flowers and start building your perfect bouquet.
                </p>
                <Button asChild className="bg-pink-600 hover:bg-pink-700">
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Start Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cart Items ({mounted ? items.length : 0})
                </h2>
              </div>
              
              {mounted && items.map((item) => (
                <CartItemComponent
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{mounted ? subtotal.toFixed(2) : '0.00'}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {mounted && shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `₹${mounted ? shipping.toFixed(2) : '9.99'}`
                        )}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">₹{mounted ? tax.toFixed(2) : '0.00'}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{mounted ? total.toFixed(2) : '0.00'}</span>
                    </div>
                  </div>
                  
                  {mounted && shipping > 0 && subtotal > 0 && subtotal < 3000 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-800">
                        Add ₹{(300 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3">
                    <Link href="/checkout">
                      Proceed to Checkout
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
