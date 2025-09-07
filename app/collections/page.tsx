import Link from 'next/link'
import { ArrowLeft, Flower2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-6">
            <Flower2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated flower collections, each designed for different occasions and seasons.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-full h-48 bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Flower2 className="h-16 w-16 text-rose-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Wedding Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Elegant and romantic arrangements perfect for your special day. From bridal bouquets to centerpieces.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-full h-48 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Flower2 className="h-16 w-16 text-orange-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Birthday Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Bright and cheerful flowers to celebrate life's special moments. Make birthdays extra memorable.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-full h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Flower2 className="h-16 w-16 text-purple-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Seasonal Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Fresh seasonal blooms that capture the essence of each time of year. Always fresh, always beautiful.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-full h-48 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Flower2 className="h-16 w-16 text-red-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Anniversary Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Celebrate love and commitment with our romantic anniversary arrangements. Perfect for any milestone.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-full h-48 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Flower2 className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Sympathy Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Thoughtful and respectful arrangements to express condolences and support during difficult times.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Flower2 className="h-16 w-16 text-blue-500" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Corporate Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Professional arrangements for offices, events, and corporate gifts. Make a lasting impression.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-6">
              We're currently building our specialized collections. In the meantime, explore our current selection of beautiful flowers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-pink-600 hover:bg-pink-700">
                <Link href="/">
                  Browse All Flowers
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
