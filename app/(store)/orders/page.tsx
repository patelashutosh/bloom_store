import { getUserOrders } from '@/lib/actions/checkout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Package, Calendar, CreditCard, Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function OrdersPage() {
  const orders = await getUserOrders()

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-pink-600" />
              <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-600 mb-6">
              You haven&apos;t placed any orders yet. Start shopping to see your orders here.
            </p>
            <Link href="/">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Package className="h-8 w-8 text-pink-600" />
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <Badge variant="secondary" className="ml-2">
              {orders.length} {orders.length === 1 ? 'order' : 'orders'}
            </Badge>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {orders.map((order: any) => (
            <Card key={order.id} className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">
                        Order #{(order.orderNumber || 'N/A').slice(-8).toUpperCase()}
                      </CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(order.createdAt).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Package className="h-4 w-4" />
                          {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{order.total.toNumber().toFixed(2)}
                    </div>
                    <Badge 
                      variant={order.status === 'COMPLETED' ? 'default' : 'secondary'}
                      className={order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Order Items Preview */}
                <div className="space-y-3 mb-4">
                  {order.items.slice(0, 3).map((item: any) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.productImage}
                          alt={item.productName}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.productName}
                        </p>
                        <p className="text-xs text-gray-600">
                          ₹{item.unitPrice.toNumber().toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        ₹{item.totalPrice.toNumber().toFixed(2)}
                      </div>
                    </div>
                  ))}
                  
                  {order.items.length > 3 && (
                    <p className="text-sm text-gray-600 mt-2">
                      +{order.items.length - 3} more {order.items.length - 3 === 1 ? 'item' : 'items'}
                    </p>
                  )}
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CreditCard className="h-4 w-4" />
                      <span>₹{order.subtotal.toNumber().toFixed(2)} + ₹{order.tax.toNumber().toFixed(2)} tax</span>
                    </div>
                    <div>
                      Shipping: {order.shippingCost.toNumber() === 0 ? (
                        <span className="text-green-600 font-medium">Free</span>
                      ) : (
                        `₹${order.shippingCost.toNumber().toFixed(2)}`
                      )}
                    </div>
                  </div>
                  
                  <Link href={`/order-confirmation/${order.id}`}>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
