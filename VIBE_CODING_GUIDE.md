# 🌸 Bloom AI - Vibe Coding Exercise Guide

## 📖 Project Overview
Build a modern e-commerce flower shop for the Indian market called "Bloom AI". This is a full-stack web application that should feel premium, user-friendly, and culturally appropriate for Indian customers.

**Target Audience:** Indian customers looking to buy flowers online for occasions, gifts, and personal use.

**Business Model:** Direct-to-consumer flower sales with delivery service.

---

## 🎯 **Step 1: Project Foundation**
**Goal:** Set up a modern, scalable e-commerce foundation

**Business Requirements:**
- Fast, responsive web application that works on mobile and desktop
- Modern tech stack that can handle growth
- Indian market focus (currency, taxes, shipping)

**Technical Guidance:**
- Use Next.js with App Router for best performance and SEO
- TypeScript for better code quality and developer experience
- Tailwind CSS for rapid, consistent styling
- PostgreSQL database for reliable data storage
- Prisma as database ORM for type-safe database operations

**Key Decisions:**
- Choose Node.js 22 LTS for stability
- Set up proper project structure with organized folders
- Configure for Indian market (₹ currency, GST tax structure)

**Success Criteria:**
- Development server runs without errors
- Project structure supports future features
- Basic styling framework is ready

---

## 🏗️ **Step 2: User Interface Foundation**
**Goal:** Create a beautiful, cohesive design system

**Business Requirements:**
- Premium, elegant look that conveys quality flowers
- Consistent branding and visual identity
- Mobile-first design for Indian users (high mobile usage)
- Fast loading and smooth interactions

**Technical Guidance:**
- Implement a component library for consistency (shadcn/ui recommended)
- Choose a color palette that feels fresh and floral
- Create reusable UI components (buttons, cards, forms)
- Set up proper typography and spacing system

**Brand Personality:**
- Fresh, natural, elegant
- Pink/purple color scheme suggesting flowers
- Clean, modern aesthetic
- Trustworthy and professional

**Success Criteria:**
- Beautiful, consistent UI components
- Responsive design that works on all devices
- Clear visual hierarchy and readable typography
- Loading states and smooth animations

---

## 🗄️ **Step 3: Database Design & Product Catalog**
**Goal:** Design robust data structure for e-commerce operations

**Business Requirements:**
- Store flower products with rich details (name, description, price, images)
- Organize products into logical categories
- Track customer orders and order history
- Support user accounts and authentication
- Handle Indian pricing and tax requirements

**Data Entities Needed:**
- **Users**: Customer accounts with profile information
- **Categories**: Flower types (roses, tulips, bouquets, etc.)
- **Products**: Individual flower products with pricing in Indian Rupees
- **Orders**: Customer purchases with delivery details
- **Order Items**: Individual products within each order

**Indian Market Considerations:**
- Price range: ₹299 to ₹2999 (realistic for Indian flower market)
- Include GST (18% tax rate) in calculations
- Support Indian address format and PIN codes

**Success Criteria:**
- Clean database schema that supports all business operations
- Sample data that represents real flower products
- Proper relationships between all entities
- Database performs well with realistic data volumes

---

## 🎨 **Step 4: Product Discovery & Browsing**
**Goal:** Create engaging product browsing experience

**Business Requirements:**
- Showcase beautiful flower products with high-quality images
- Easy browsing and product discovery
- Clear pricing in Indian Rupees
- Mobile-optimized product cards
- Quick product information at a glance

**User Experience:**
- Homepage with featured/popular products
- Full product catalog page
- Product cards showing image, name, price, category
- Responsive grid layout (1-4 columns based on screen size)
- Fast image loading with proper optimization

**Content Strategy:**
- Use appealing flower photography
- Write compelling product descriptions
- Organize products by occasion and flower type
- Price products competitively for Indian market

**Success Criteria:**
- Visually appealing product display
- Fast loading product images
- Easy navigation between products
- Clear, attractive pricing display in ₹
- Mobile experience is excellent

---

## 🛒 **Step 5: Shopping Cart Experience**
**Goal:** Build intuitive shopping cart functionality

**Business Requirements:**
- Let customers add/remove flowers from cart
- Show running total with taxes and shipping
- Provide clear pricing breakdown
- Save cart contents between sessions
- Mobile-friendly cart management

**Functional Requirements:**
- Add items to cart from product pages
- Adjust quantities in cart
- Remove unwanted items
- Calculate totals including:
  - Subtotal (sum of all items)
  - GST (18% Indian tax rate)
  - Shipping (free above ₹300, otherwise ₹99)
  - Final total
- Persist cart data when user leaves and returns

**User Experience:**
- Clear cart icon showing item count
- Easy quantity adjustments
- Immediate feedback when adding items
- Clear path to checkout
- Mobile-optimized cart interface

**Success Criteria:**
- Smooth add-to-cart experience
- Accurate pricing calculations
- Cart persists between browser sessions
- Mobile cart experience is excellent
- Clear progression toward checkout

---

## 🔐 **Step 6: User Authentication System**
**Goal:** Secure, user-friendly authentication

**Business Requirements:**
- Secure customer accounts for repeat purchases
- Easy sign-up/sign-in process
- Order history and profile management
- Social login for convenience
- Protect sensitive checkout and order data

**Technical Approach:**
- Implement Google OAuth for easy sign-in
- Use NextAuth.js for security and session management
- Protect sensitive pages (checkout, orders, profile)
- Handle authentication state throughout the app

**User Experience:**
- One-click Google sign-in
- Clear indication of authentication status
- Smooth redirect flow after sign-in
- Remember user session appropriately

**Security Requirements:**
- Secure session management
- Protect user data and order history
- Prevent unauthorized access to user accounts
- Secure checkout process

**Success Criteria:**
- Users can easily sign in with Google
- Authentication works seamlessly across the app
- Sensitive pages are properly protected
- User data is secure and private

---

## 🎪 **Step 7: Dynamic Navigation & Header**
**Goal:** Create responsive, context-aware navigation

**Business Requirements:**
- Clear, accessible navigation on all pages
- Show different options for logged-in vs guest users
- Display shopping cart status prominently
- Work perfectly on mobile devices
- Provide easy access to key features

**Navigation Structure:**
- **Brand**: Bloom AI logo/name
- **Main Navigation**: Home, Collections, Occasions, Contact
- **User Actions**: Cart, Account/Sign-in
- **Authenticated Users**: Access to Orders, Profile, Sign-out

**Responsive Behavior:**
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with slide-out navigation
- Cart icon always visible with item count
- User authentication status clearly shown

**Success Criteria:**
- Navigation is intuitive and accessible
- Mobile menu works smoothly
- Cart count updates in real-time
- User authentication status is clear
- Easy access to all key features

---

## 🔄 **Step 8: Cart State Management**
**Goal:** Robust, persistent shopping cart functionality

**Business Requirements:**
- Cart works seamlessly across the entire app
- Instant updates when items are added/removed
- Accurate pricing calculations
- Cart survives browser refreshes and returns
- Smooth user experience on all devices

**Technical Requirements:**
- Real-time cart updates across all components
- Persistent storage (survive browser closes)
- Accurate calculations matching business rules
- Handle edge cases gracefully
- Performance-optimized for smooth UX

**Business Rules:**
- Free shipping on orders ₹300 and above
- 18% GST on all orders
- Shipping cost ₹99 for orders under ₹300
- Clear breakdown of all charges

**Integration Points:**
- Product pages: Add to cart functionality
- Cart page: Full cart management
- Header: Live cart count display
- Checkout: Cart data transfer

**Success Criteria:**
- Cart state works perfectly across entire app
- Calculations are always accurate
- Cart persists between sessions
- Excellent performance and user experience
- Mobile cart experience is flawless

---

## 💳 **Step 9: Checkout & Payment Flow**
**Goal:** Smooth, secure checkout experience

**Business Requirements:**
- Collect customer delivery information
- Show final order summary with all costs
- Process payment securely
- Create order records in database
- Send customers to order confirmation
- Handle payment failures gracefully

**Checkout Process:**
1. Customer information form (name, email, address, city, PIN code)
2. Order review with final pricing
3. Payment processing (mock for this exercise)
4. Order creation in database
5. Confirmation page with order details

**Customer Information:**
- Full name and email
- Complete delivery address
- City and PIN code for delivery planning
- Phone number for delivery coordination

**Payment Handling:**
- Mock payment processor (simulate success/failure)
- About 60% success rate to test error handling
- Clear error messages for failed payments
- Retry functionality for customers

**Success Criteria:**
- Smooth checkout flow from cart to confirmation
- All customer information captured correctly
- Order data saved accurately in database
- Payment errors handled gracefully
- Beautiful order confirmation experience

---

## 📋 **Step 10: Order Management & History**
**Goal:** Complete order lifecycle management

**Business Requirements:**
- Customers can view all their past orders
- Detailed order information easily accessible
- Order status and delivery information
- Reorder functionality (stretch goal)
- Mobile-optimized order browsing

**Order History Features:**
- List of all customer orders (newest first)
- Order summary cards with key details
- Links to detailed order information
- Order status indicators
- Easy access from main navigation

**Order Details:**
- Complete order information
- All items with images and pricing
- Customer and delivery information
- Payment and pricing breakdown
- Delivery status and tracking info

**User Experience:**
- Easy to find and access order history
- Clear, scannable order information
- Quick access to reorder or get support
- Mobile-optimized for customers on the go

**Success Criteria:**
- Complete order history functionality
- Detailed order view with all information
- Excellent mobile experience
- Easy navigation and information access
- Customers can easily track their purchases

---

## 🎯 **Final Integration & Testing**

**Business Requirements:**
- Complete, functioning e-commerce flower shop
- All features work together seamlessly
- Excellent user experience on all devices
- Ready for real customers (with real payment integration)

**Quality Checklist:**
- [ ] All features work end-to-end
- [ ] Mobile experience is excellent
- [ ] Indian market requirements met (₹, GST, shipping)
- [ ] Authentication and security working
- [ ] Database properly storing all data
- [ ] Error handling throughout the app
- [ ] Performance is good on slower connections

**Success Criteria:**
- Complete customer journey from browsing to order confirmation
- Professional, polished user experience
- All Indian market requirements implemented
- Ready for production deployment
- Scalable architecture for future growth

---

## 🌟 **Project Success Metrics**

By the end of this exercise, you should have built:

✅ **Beautiful E-commerce Platform**
- Modern, responsive design
- Premium flower shop aesthetic
- Excellent mobile experience

✅ **Complete Customer Journey**
- Product browsing and discovery
- Shopping cart and checkout
- User authentication and accounts
- Order history and management

✅ **Indian Market Ready**
- ₹ currency throughout
- 18% GST calculations
- Indian address format
- Appropriate pricing and shipping

✅ **Production-Ready Architecture**
- Scalable database design
- Secure authentication
- Error handling and edge cases
- Performance optimized

This should feel like a real flower shop that Indian customers would love to use! 🌸
