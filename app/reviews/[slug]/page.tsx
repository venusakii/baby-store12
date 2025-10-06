import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = {
  "philips-avent-natural-bottle": {
    id: 1,
    slug: "philips-avent-natural-bottle",
    name: "Philips Avent Natural Bottle",
    category: "Feeding",
    price: "₽1,290",
    originalPrice: "₽1,590",
    rating: 4.8,
    reviews: 234,
    images: ["/philips-avent-bottle.jpg", "/philips-avent-bottle-2.jpg", "/philips-avent-bottle-3.jpg"],
    description:
      "Natural bottle with wide neck for comfortable feeding. Designed for easy transition from breast to bottle.",
    badge: "Bestseller",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Wide neck for easy filling and cleaning",
      "AirFree anti-colic system",
      "Soft nipple mimicking breast shape",
      "BPA-free",
      "Easy to assemble and disassemble",
    ],
    cons: ["May leak if assembled incorrectly", "Nipple may be too soft for some babies", "Relatively high price"],
    specifications: {
      Volume: "260 ml",
      Material: "Polypropylene, silicone",
      Age: "0+ months",
      Manufacturer: "Philips Avent",
      Country: "Netherlands",
      Warranty: "2 years",
    },
    overallScore: 4.8,
    scores: {
      quality: 4.9,
      safety: 4.8,
      usability: 4.7,
      value: 4.6,
    },
    detailedReview: `
      After testing the Philips Avent Natural bottle for 3 months with a newborn, we can confidently say this is one of the best options on the market.

      **Build Quality**
      The bottle is made from high-quality polypropylene that is BPA-free and contains no harmful substances. The material is durable, doesn't cloud over time, and easily withstands sterilization.

      **Ease of Use**
      The wide neck significantly simplifies filling and cleaning. The nipple has a natural shape that helps babies easily transition from breastfeeding to bottle feeding.

      **Anti-Colic System**
      The AirFree system really works - air enters through a special valve, not through the nipple, which reduces the risk of colic and regurgitation.

      **Drawbacks**
      The main drawback is the need for proper assembly. Incorrect nipple installation can cause leaking. Also, the price is above market average.
    `,
    userReviews: [
      {
        id: 1,
        author: "Anna M.",
        rating: 5,
        date: "December 15, 2024",
        text: "Excellent bottle! My son easily transitioned from breast to this bottle. No colic issues.",
        helpful: 12,
        verified: true,
      },
      {
        id: 2,
        author: "Michael K.",
        rating: 4,
        date: "December 10, 2024",
        text: "Quality bottle, but sometimes leaks. Need to assemble carefully.",
        helpful: 8,
        verified: true,
      },
      {
        id: 3,
        author: "Elena S.",
        rating: 5,
        date: "December 5, 2024",
        text: "Been using for six months. Very satisfied with the quality. Highly recommend!",
        helpful: 15,
        verified: true,
      },
    ],
  },
  "pampers-premium-care-diapers": {
    id: 2,
    slug: "pampers-premium-care-diapers",
    name: "Pampers Premium Care Diapers",
    category: "Hygiene",
    price: "₽1,890",
    originalPrice: "₽2,190",
    rating: 4.7,
    reviews: 456,
    images: ["/pampers-premium-diapers.jpg", "/pampers-premium-diapers.jpg", "/pampers-premium-diapers.jpg"],
    description: "The softest and most absorbent Pampers diapers with 3 Extra Absorb channels and wetness indicator.",
    badge: "Parents' Choice",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Superior absorbency",
      "Soft as silk materials",
      "Wetness indicator",
      "Hypoallergenic",
      "Dermatologically tested",
    ],
    cons: ["High price", "May run large in size", "Not always in stock"],
    specifications: {
      Size: "Newborn (2-5 kg)",
      Quantity: "84 pcs",
      Material: "Non-woven materials",
      Manufacturer: "Procter & Gamble",
      Country: "Germany",
      Warranty: "Return if unsatisfied",
    },
    overallScore: 4.7,
    scores: {
      quality: 4.8,
      safety: 4.9,
      usability: 4.6,
      value: 4.3,
    },
    detailedReview: `
      Pampers Premium Care diapers are a premium line that truly lives up to its reputation.

      **Absorbency**
      Thanks to the 3 Extra Absorb channels technology, the diapers handle moisture excellently, providing dryness for up to 12 hours.

      **Comfort**
      The materials are incredibly soft and don't irritate baby's delicate skin. Elastic sides ensure a perfect fit.

      **Wetness Indicator**
      Very convenient feature - the strip changes color when it's time to change the diaper.

      **Drawbacks**
      The main downside is the price. Also, some parents note that sizes may be slightly larger than standard.
    `,
    userReviews: [
      {
        id: 1,
        author: "Maria V.",
        rating: 5,
        date: "December 18, 2024",
        text: "Best diapers! No leaks, skin always dry.",
        helpful: 23,
        verified: true,
      },
      {
        id: 2,
        author: "Dmitry P.",
        rating: 4,
        date: "December 12, 2024",
        text: "Quality, but expensive. We only use them at night.",
        helpful: 11,
        verified: true,
      },
    ],
  },
  "fisher-price-butterfly-dreams-mobile": {
    id: 3,
    slug: "fisher-price-butterfly-dreams-mobile",
    name: "Fisher-Price Butterfly Dreams Mobile",
    category: "Toys",
    price: "₽3,490",
    originalPrice: "₽4,290",
    rating: 4.6,
    reviews: 189,
    images: ["/fisher-price-mobile.jpg", "/fisher-price-mobile.jpg", "/fisher-price-mobile.jpg"],
    description: "Musical mobile with starry sky projection, soothing melodies, and remote control.",
    badge: "New",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Starry sky projection",
      "30 minutes of continuous music",
      "Remote control",
      "Removable toys",
      "Volume adjustment",
    ],
    cons: ["Requires many batteries", "Projection not very bright", "Complex installation"],
    specifications: {
      Age: "0-5 months",
      Material: "Plastic, textile",
      Power: "4 AA batteries",
      Size: "65 x 40 x 30 cm",
      Manufacturer: "Fisher-Price",
      Country: "USA",
      Warranty: "1 year",
    },
    overallScore: 4.6,
    scores: {
      quality: 4.5,
      safety: 4.8,
      usability: 4.4,
      value: 4.6,
    },
    detailedReview: `
      The Fisher-Price "Butterfly Dreams" mobile is a multifunctional toy that will help soothe your baby and prepare them for sleep.

      **Functionality**
      The mobile offers three modes: music only, projection only, or both modes together. 30 minutes of continuous playback is enough for falling asleep.

      **Sound Quality**
      The melodies are pleasant and soothing, volume is adjustable. Sound is clear without distortion.

      **Projection**
      The starry sky projects onto the ceiling, creating a magical atmosphere. However, the projection is not very bright.

      **Installation**
      The mounting is secure, but installation may seem complex. It's important to follow the instructions precisely.
    `,
    userReviews: [
      {
        id: 1,
        author: "Olga K.",
        rating: 5,
        date: "December 20, 2024",
        text: "My daughter falls asleep to this mobile in 10 minutes! Very satisfied with the purchase.",
        helpful: 18,
        verified: true,
      },
      {
        id: 2,
        author: "Alexey N.",
        rating: 4,
        date: "December 14, 2024",
        text: "Good toy, but batteries drain quickly.",
        helpful: 9,
        verified: true,
      },
    ],
  },
  "chicco-lite-way-stroller": {
    id: 4,
    slug: "chicco-lite-way-stroller",
    name: "Chicco Lite Way Stroller",
    category: "Transport",
    price: "₽12,990",
    originalPrice: "₽15,990",
    rating: 4.5,
    reviews: 312,
    images: ["/chicco-stroller.jpg", "/chicco-stroller.jpg", "/chicco-stroller.jpg"],
    description: "Lightweight and compact stroller with one-hand folding and large shopping basket.",
    badge: "Best Seller",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Very lightweight (only 7.5 kg)",
      "One-hand folding",
      "Large shopping basket",
      "Adjustable backrest",
      "Removable bumper bar",
    ],
    cons: ["Small wheels", "Not suitable for rough terrain", "Canopy could be larger"],
    specifications: {
      Age: "6 months - 3 years",
      Weight: "7.5 kg",
      "Maximum load": "15 kg",
      Size: "47 x 82 x 103 cm",
      Manufacturer: "Chicco",
      Country: "Italy",
      Warranty: "2 years",
    },
    overallScore: 4.5,
    scores: {
      quality: 4.6,
      safety: 4.7,
      usability: 4.4,
      value: 4.3,
    },
    detailedReview: `
      Chicco Lite Way is an excellent choice for parents who value lightness and compactness.

      **Maneuverability**
      The stroller is very light and maneuverable. Front wheels swivel, making it easy to navigate in stores and narrow passages.

      **Folding**
      The one-hand folding mechanism works great. The stroller folds compactly and fits in any car trunk.

      **Comfort**
      The seat is quite spacious, the backrest adjusts to several positions. Five-point safety harness securely holds the child.

      **Drawbacks**
      Small wheels are not very suitable for uneven roads. Also, the canopy could provide better sun protection.
    `,
    userReviews: [
      {
        id: 1,
        author: "Tatiana L.",
        rating: 5,
        date: "December 22, 2024",
        text: "Perfect stroller for the city! Lightweight, convenient, quality.",
        helpful: 27,
        verified: true,
      },
      {
        id: 2,
        author: "Igor S.",
        rating: 4,
        date: "December 16, 2024",
        text: "Good stroller, but difficult to ride on dirt roads.",
        helpful: 14,
        verified: true,
      },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-primary">
              Reviews
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{product.category}</Badge>
                  {product.badge && <Badge variant="secondary">{product.badge}</Badge>}
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-balance">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Price may vary. Check current price on seller's website.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" asChild>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Favorites
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick Scores */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our Rating</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Quality</span>
                        <span>{product.scores.quality}</span>
                      </div>
                      <Progress value={product.scores.quality * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Safety</span>
                        <span>{product.scores.safety}</span>
                      </div>
                      <Progress value={product.scores.safety * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Usability</span>
                        <span>{product.scores.usability}</span>
                      </div>
                      <Progress value={product.scores.usability * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Value</span>
                        <span>{product.scores.value}</span>
                      </div>
                      <Progress value={product.scores.value * 20} />
                    </div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.overallScore}</div>
                    <div className="text-sm text-muted-foreground">Overall Score</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="review" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="review">Detailed Review</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="review" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Review</CardTitle>
                  <CardDescription>Our expert tested this product for several months</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">{product.detailedReview}</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pros-cons" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      Advantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <XCircle className="h-5 w-5" />
                      Disadvantages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="space-y-6">
                {product.userReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{review.author}</div>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>

                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{review.text}</p>

                        <div className="flex items-center gap-4 pt-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            Not Helpful
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Back to Reviews */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild>
            <Link href="/reviews">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Reviews
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
