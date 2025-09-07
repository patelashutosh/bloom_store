import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { auth } from '@/auth'

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { items, shippingAddress, paymentMethod } = body

    // Validate request data
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid items' },
        { status: 400 }
      )
    }

    // Calculate total (in a real app, you'd validate prices server-side)
    const total = items.reduce((sum: number, item: any) => {
      return sum + (item.price * item.quantity)
    }, 0)

    // Create order in database  
    const order = await db.order.create({
      data: {
        user: { connect: { id: session.user.id } },
        subtotal: total * 0.85, // Approximate subtotal (before tax)
        tax: total * 0.15, // Approximate tax
        shippingCost: 0, // Free shipping for this demo
        total,
        status: 'PENDING',
        shippingAddress: shippingAddress,
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            unitPrice: item.price,
            totalPrice: item.price * item.quantity,
            productName: item.name,
            productImage: item.imageUrl,
          }))
        }
      },
      include: {
        items: true
      }
    })

    // Here you would integrate with a payment processor like Stripe
    // For now, we'll just return the order
    
    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        total: order.total,
        status: order.status,
      }
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
