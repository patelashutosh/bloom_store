'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cart-store'
import { useEffect, useState } from 'react'

export function CartLink() {
  const totalItems = useCartStore((state) => state.totalItems)
  const [mounted, setMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      href="/cart"
      className="relative flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5" />
        {/* Cart count badge */}
        {mounted && totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[1.25rem]">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
      <span className="text-sm font-medium">Cart</span>
    </Link>
  )
}
