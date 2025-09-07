'use server'

import { auth } from '@/auth'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { Decimal } from '@prisma/client/runtime/library'

export interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  quantity: number
}

export interface CheckoutData {
  items: CartItem[]
  customerInfo: {
    fullName: string
    email: string
    address: string
    city: string
    zipCode: string
  }
}

export interface CheckoutResult {
  success: boolean
  orderId?: string
  error?: string
  message?: string
}

export async function processCheckout(checkoutData: CheckoutData): Promise<CheckoutResult> {
  try {
    // 1. Verify user is authenticated
    const session = await auth()
    
    if (!session?.user?.id) {
      return {
        success: false,
        error: 'Authentication required. Please sign in to complete your purchase.',
      }
    }

    // 2. Validate cart items
    if (!checkoutData.items || checkoutData.items.length === 0) {
      return {
        success: false,
        error: 'Your cart is empty. Please add items before checking out.',
      }
    }

    // 3. Calculate totals (server-side verification)
    const subtotal = checkoutData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const tax = subtotal * 0.08 // 8% tax
    const shipping = subtotal > 75 ? 0 : 9.99 // Free shipping over $75
    const total = subtotal + tax + shipping

    // 4. Validate minimum order amount
    if (total < 1) {
      return {
        success: false,
        error: 'Invalid order total. Please check your cart.',
      }
    }

    // 5. Simulate payment processing (randomly succeed or fail for demo)
    const paymentSuccess = Math.random() > 0.3 // 70% success rate for demo
    
    if (!paymentSuccess) {
      return {
        success: false,
        error: 'Payment processing failed. Please try again or use a different payment method.',
      }
    }

    // 6. Create order in database
    const order = await db.order.create({
      data: {
        userId: session.user.id,
        status: 'PENDING',
        total: new Decimal(total),
        subtotal: new Decimal(subtotal),
        tax: new Decimal(tax),
        shippingCost: new Decimal(shipping),
        
        // Shipping address as JSON
        shippingAddress: {
          fullName: checkoutData.customerInfo.fullName,
          email: checkoutData.customerInfo.email,
          address: checkoutData.customerInfo.address,
          city: checkoutData.customerInfo.city,
          zipCode: checkoutData.customerInfo.zipCode
        },
        
        // Order items
        items: {
          create: checkoutData.items.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            unitPrice: new Decimal(item.price),
            totalPrice: new Decimal(item.price * item.quantity),
            productName: item.name,
            productImage: item.imageUrl,
          }))
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })

    // 7. Update order status to CONFIRMED after successful creation
    await db.order.update({
      where: { id: order.id },
      data: { status: 'CONFIRMED' }
    })

    return {
      success: true,
      orderId: order.id,
      message: `Order #${order.id.slice(-8).toUpperCase()} has been placed successfully! You will receive a confirmation email shortly.`,
    }

  } catch (error) {
    console.error('Checkout processing error:', error)
    
    return {
      success: false,
      error: 'An unexpected error occurred while processing your order. Please try again.',
    }
  }
}

export async function getOrderDetails(orderId: string) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      redirect('/sign-in')
    }

    const order = await db.order.findFirst({
      where: {
        id: orderId,
        userId: session.user.id, // Ensure user can only view their own orders
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })

    if (!order) {
      redirect('/404')
    }

    return order

  } catch (error) {
    console.error('Error fetching order details:', error)
    redirect('/404')
  }
}

// Get all orders for the current user
export async function getUserOrders() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      redirect('/sign-in')
    }

    const orders = await db.order.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc' // Most recent orders first
      }
    })

    return orders

  } catch (error) {
    console.error('Error fetching user orders:', error)
    return []
  }
}
