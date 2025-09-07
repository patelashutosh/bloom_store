import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getOrderDetails } from '@/lib/actions/checkout'
import { CheckCircle, Package, ArrowLeft, Calendar, MapPin, CreditCard, Receipt } from 'lucide-react'

interface OrderConfirmationPageProps {
  params: Promise<{
    orderId: string
  }>
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse" />
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-2 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-48 mx-auto animate-pulse" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded w-40 mb-4 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function OrderConfirmationContent({ orderId }: { orderId: string }) {
  const order = await getOrderDetails(orderId)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Success Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Order Summary Header */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mx-auto mb-3">
                    <Receipt className="h-6 w-6 text-pink-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Order Number</p>
                  <p className="font-semibold text-gray-900">
                    #{order.orderNumber.slice(-8).toUpperCase()}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Order Date</p>
                  <p className="font-semibold text-gray-900">
                    {formatDate(order.createdAt)}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <Badge 
                    variant={order.status === 'CONFIRMED' ? 'default' : 'secondary'}
                    className="bg-green-100 text-green-800 hover:bg-green-100"
                  >
                    {order.status === 'CONFIRMED' ? 'Confirmed' : order.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer & Shipping Information */}
            <div className="space-y-6">
              {/* Customer Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Customer Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium text-gray-900">{(order.shippingAddress as any)?.fullName || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{(order.shippingAddress as any)?.email || 'N/A'}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-900">
                    <p className="font-medium">{(order.shippingAddress as any)?.fullName || 'N/A'}</p>
                    <p>{(order.shippingAddress as any)?.address || 'N/A'}</p>
                    <p>
                      {(order.shippingAddress as any)?.city || 'N/A'}
                      {(order.shippingAddress as any)?.zipCode && `, ${(order.shippingAddress as any)?.zipCode}`}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Expected Delivery */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Delivery</span>
                      <span className="font-medium text-gray-900">
                        2-3 business days
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Method</span>
                      <span className="font-medium text-gray-900">
                        {order.shippingCost.toNumber() === 0 ? 'Standard (Free)' : 'Standard Shipping'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      📧 You will receive tracking information via email once your order ships.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Items & Summary */}
            <div className="space-y-6">
              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Order Items ({order.items.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-b-0">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.productImage}
                          alt={item.productName}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.productName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          ₹{item.unitPrice.toNumber().toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        ₹{item.totalPrice.toNumber().toFixed(2)}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Price Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{order.subtotal.toNumber().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {order.shippingCost.toNumber() === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `₹${order.shippingCost.toNumber().toFixed(2)}`
                        )}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">₹{order.tax.toNumber().toFixed(2)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{order.total.toNumber().toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  <Link href="/">
                    Continue Shopping
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href="/orders">
                    View All Orders
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  const resolvedParams = await params
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <OrderConfirmationContent orderId={resolvedParams.orderId} />
    </Suspense>
  )
}

export async function generateMetadata({ params }: OrderConfirmationPageProps) {
  const resolvedParams = await params
  
  return {
    title: `Order Confirmation - ${resolvedParams.orderId.slice(-8).toUpperCase()} | Bloom AI`,
    description: 'Your order has been confirmed. Thank you for shopping with Bloom AI.',
  }
}
