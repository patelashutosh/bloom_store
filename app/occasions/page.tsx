import Link from 'next/link'
import { ArrowLeft, Heart, Gift, Calendar, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function OccasionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfect for Every Occasion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate celebrations to grand gestures, find the perfect flowers for life's special moments.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-rose-50 to-pink-50">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Romantic Moments
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Express your love with romantic bouquets perfect for anniversaries, date nights, proposals, and "just because" moments.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600">• Anniversary Celebrations</p>
                <p className="text-sm text-gray-600">• Valentine's Day</p>
                <p className="text-sm text-gray-600">• Proposals & Engagements</p>
                <p className="text-sm text-gray-600">• Romantic Surprises</p>
              </div>
              <Button variant="outline" className="w-full border-rose-200 hover:bg-rose-50">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Celebrations
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Bright, joyful arrangements to celebrate life's happy moments, achievements, and milestones.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600">• Birthday Parties</p>
                <p className="text-sm text-gray-600">• Graduations</p>
                <p className="text-sm text-gray-600">• Promotions & Achievements</p>
                <p className="text-sm text-gray-600">• New Baby Celebrations</p>
              </div>
              <Button variant="outline" className="w-full border-yellow-200 hover:bg-yellow-50">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Special Events
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Elegant arrangements for formal occasions, ceremonies, and memorable gatherings that deserve something special.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600">• Weddings & Receptions</p>
                <p className="text-sm text-gray-600">• Corporate Events</p>
                <p className="text-sm text-gray-600">• Dinner Parties</p>
                <p className="text-sm text-gray-600">• Holiday Celebrations</p>
              </div>
              <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-green-50">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Sympathy & Support
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Thoughtful arrangements to offer comfort, show support, and express condolences during difficult times.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600">• Funeral Services</p>
                <p className="text-sm text-gray-600">• Memorial Tributes</p>
                <p className="text-sm text-gray-600">• Get Well Wishes</p>
                <p className="text-sm text-gray-600">• Sympathy Expressions</p>
              </div>
              <Button variant="outline" className="w-full border-emerald-200 hover:bg-emerald-50">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure What to Choose?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flower experts are here to help you find the perfect arrangement for any occasion. We understand that every moment is unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Touch</h3>
              <p className="text-sm text-gray-600">Every arrangement is crafted with care and attention to your specific needs.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Same Day Delivery</h3>
              <p className="text-sm text-gray-600">Need flowers today? We offer same-day delivery for last-minute occasions.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fresh Guarantee</h3>
              <p className="text-sm text-gray-600">We guarantee the freshness and quality of every flower in our arrangements.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Flowers?
            </h2>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Browse our current selection of beautiful, fresh flowers or get in touch to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="bg-white text-pink-600 hover:bg-gray-50">
                <Link href="/">
                  Browse All Flowers
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                <Link href="/contact">
                  Get Expert Advice
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
