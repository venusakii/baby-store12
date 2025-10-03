"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, Award, Users, ArrowRight, Baby, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Best Products for Babies
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Everything for your <span className="text-primary">newborn</span> baby
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Detailed reviews, honest recommendations, and the best deals on newborn products. We'll help you
                  choose only the most essential and quality items.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/reviews">
                    View Reviews
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/reviews">Popular Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary to-accent rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/happy-baby-with-toys-and-baby-products.jpg"
                  alt="Happy baby with toys"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose PuppyStore?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              We created a platform that helps parents make informed choices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>All products are verified for compliance with child safety standards</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Detailed testing by experienced parents and specialists</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Partnership with Amazon ensures fast and reliable delivery</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Over 50,000 happy parents trust our recommendations</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Product Categories</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Find everything you need for your baby in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-feeding-bottles-and-accessories.jpg"
                    alt="Feeding"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Feeding</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>
                    Bottles, nipples, sterilizers, and everything for comfortable baby feeding
                  </CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-clothes-and-diapers.jpg"
                    alt="Clothing and Diapers"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Clothing & Diapers</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Soft clothing, quality diapers, and care accessories</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-toys-and-development-items.jpg"
                    alt="Toys and Development"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Toys & Development</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Educational toys, rattles, and everything for early development</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-strollers-and-car-seats.jpg"
                    alt="Strollers and Car Seats"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Strollers & Car Seats</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Safe strollers, car seats, and transportation solutions</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-bath-and-hygiene-products.jpg"
                    alt="Bath and Hygiene"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Bath & Hygiene</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Bathtubs, cosmetics, towels, and everything for baby care</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-sleep-and-nursery-items.jpg"
                    alt="Sleep and Nursery"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Sleep & Nursery</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Cribs, mattresses, mobiles, and everything for comfortable sleep</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section id="popular-products" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Popular Products</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Most sought-after products with the best reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/reviews/philips-avent-natural-bottle"
              className="block group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/philips-avent-bottle.jpg"
                    alt="Philips Avent Bottle"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(127)</span>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      Philips Avent Bottle
                    </CardTitle>
                    <CardDescription className="mb-4">High-quality bottle with anti-colic system</CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Learn More</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="/reviews/pampers-premium-care-diapers"
              className="block group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/pampers-premium-diapers.jpg"
                    alt="Pampers Premium Diapers"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(89)</span>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      Pampers Premium Diapers
                    </CardTitle>
                    <CardDescription className="mb-4">Soft and reliable diapers for baby comfort</CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Learn More</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="/reviews/fisher-price-butterfly-dreams-mobile"
              className="block group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/fisher-price-mobile.jpg"
                    alt="Fisher-Price Mobile"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(156)</span>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      Fisher-Price Mobile
                    </CardTitle>
                    <CardDescription className="mb-4">Educational mobile with music and light effects</CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Learn More</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="/reviews/chicco-lite-way-stroller"
              className="block group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/chicco-stroller.jpg"
                    alt="Chicco Stroller"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(203)</span>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      Chicco Stroller
                    </CardTitle>
                    <CardDescription className="mb-4">
                      Lightweight and maneuverable stroller for city walks
                    </CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Learn More</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/reviews">
                All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Parent Reviews</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              What happy customers say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Anna Petrova",
                text: "Great site! Helped us choose a stroller for our baby. Reviews are very detailed and honest.",
                rating: 5,
              },
              {
                name: "Mikhail Ivanov",
                text: "Thanks to PuppyStore we found the perfect crib. Product quality is excellent, delivery was fast.",
                rating: 5,
              },
              {
                name: "Elena Sidorova",
                text: "I recommend to all young parents! You can find everything you need here and read honest reviews.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold text-foreground">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-primary-foreground/80">Happy Parents</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,200+</div>
              <div className="text-primary-foreground/80">Products in Catalog</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Detailed Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-primary-foreground/80">Positive Feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Helpful Articles</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Tips and recommendations for young parents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Choose Your First Stroller",
                excerpt:
                  "A comprehensive guide to choosing a stroller for a newborn considering all important factors.",
                date: "December 15, 2024",
              },
              {
                title: "Safety in the Nursery",
                excerpt: "Basic safety rules and a list of essential items for the baby's room.",
                date: "December 12, 2024",
              },
              {
                title: "Baby's First Toys",
                excerpt: "Which toys a newborn really needs and how to choose them correctly.",
                date: "December 10, 2024",
              },
            ].map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src={`/baby-care-article-.jpg?height=200&width=300&query=baby care article ${index + 1}`}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-sm text-muted-foreground">{article.date}</div>
                  <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href="/reviews">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stay Updated</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Subscribe to our newsletter and get notifications about new reviews and best deals
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>Subscribe</Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">No spam. Only useful information for parents.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Find the Best for Your Baby?</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Explore our detailed reviews and find the perfect products for your newborn
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reviews">
                  <Baby className="mr-2 h-5 w-5" />
                  View All Reviews
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
