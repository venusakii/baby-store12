"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

const products = [
  {
    id: 1,
    slug: "pampers-disposable-hypoallergenic-fragrance-protection-diapers",
    name: "Pampers Disposable Hypoallergenic Fragrance Free Diapers",
    category: "Hygiene",
    price: "₽2,450",
    rating: 4.9,
    reviews: 567,
    image: "https://m.media-amazon.com/images/I/81bf0fqJVHL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Pampers-Disposable-Hypoallergenic-Fragrance-Protection/dp/",
    description: "Soft diapers with superior 12-hour protection",
    badge: "Editor's Choice",
  },
  {
    id: 2,
    slug: "skip-hop-montessori-inspired-discoverosity-play-mat",
    name: "Skip Hop Montessori Inspired Discoverosity Play Mat",
    category: "Development",
    price: "₽4,590",
    rating: 4.9,
    reviews: 203,
    image: "https://m.media-amazon.com/images/I/713FG+eNC4L._SX679_.jpg",
    url: "https://www.amazon.com/Skip-Hop-Montessori-Inspired-Discoverosity/dp/",
    description: "Interactive mat with arches and hanging toys",
    badge: "Top Seller",
  },
  {
    id: 3,
    slug: "philips-natural-response-scd838-02-bottle",
    name: "Philips Natural Response Bottle SCD838/02",
    category: "Feeding",
    price: "₽1,290",
    rating: 4.8,
    reviews: 234,
    image: "https://m.media-amazon.com/images/I/71Ef0nn6c+S._SL1500_.jpg",
    url: "https://www.amazon.com/Philips-Natural-Response-SCD838-02/dp/",
    description: "Natural bottle with wide neck for comfortable feeding",
    badge: "Bestseller",
  },
  {
    id: 4,
    slug: "burts-bees-baby-beekeeper-transition-sleepwear",
    name: "Burt's Bees Baby Beekeeper Transition Sleepwear",
    category: "Sleep",
    price: "₽2,290",
    rating: 4.8,
    reviews: 156,
    image: "https://m.media-amazon.com/images/I/71rp3hdQwxL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Burts-Bees-Baby-Beekeeper-Transition/dp/",
    description: "Safe sleep bag for comfortable baby sleep",
    badge: "Recommended",
  },
  {
    id: 5,
    slug: "cybex-cloud-anti-rebound-protection-ergonomic-car-seat",
    name: "Cybex Cloud Anti-Rebound Protection Ergonomic Car Seat",
    category: "Transport",
    price: "₽28,990",
    rating: 4.8,
    reviews: 87,
    image: "https://m.media-amazon.com/images/I/51AmLfN8wbL._SL1000_.jpg",
    url: "https://www.amazon.com/Cybex-Cloud-Anti-Rebound-Protection-Ergonomic/dp/",
    description: "Premium car seat group 0+ with rotating mechanism",
    badge: "Premium",
  },
  {
    id: 6,
    slug: "fisher-price-rainbow-showers-bassinet-tabletop",
    name: "Fisher-Price Rainbow Showers Bassinet Tabletop",
    category: "Development",
    price: "₽3,890",
    rating: 4.7,
    reviews: 189,
    image: "https://m.media-amazon.com/images/I/41Cy61tIfUL._SY300_SX300_QL70_FMwebp_.jpg",
    url: "https://www.amazon.com/Fisher-Price-Rainbow-Showers-Bassinet-Tabletop/dp/",
    description: "Musical mobile with soft toys for baby development",
    badge: "New",
  },
  {
    id: 7,
    slug: "mam-perfect-pacifiers-thinner-nipple",
    name: "MAM Perfect Pacifiers Thinner Nipple",
    category: "Feeding",
    price: "₽890",
    rating: 4.7,
    reviews: 312,
    image: "https://m.media-amazon.com/images/I/51xt3uS2ZHL._SX679_.jpg",
    url: "https://www.amazon.com/MAM-Perfect-Pacifiers-Thinner-Nipple/dp/",
    description: "Orthodontic silicone pacifier for newborns",
    badge: "",
  },
  {
    id: 8,
    slug: "chicco-corso-modular-travel-system-stroller",
    name: "Chicco Corso Modular Travel System Stroller",
    category: "Transport",
    price: "₽15,990",
    rating: 4.6,
    reviews: 98,
    image: "https://m.media-amazon.com/images/I/71kyIawe2NL._SX679_.jpg",
    url: "https://www.amazon.com/Chicco-Corso-Modular-Travel-System/dp/",
    description: "Lightweight and maneuverable stroller for city walks",
    badge: "",
  },
  {
    id: 9,
    slug: "aveeno-baby-shampoo-natural-tear-free",
    name: "Aveeno Baby Shampoo Natural Tear-Free",
    category: "Bath",
    price: "₽450",
    rating: 4.5,
    reviews: 445,
    image: "https://m.media-amazon.com/images/I/71mYCi+-LdL._SX679_.jpg",
    url: "https://www.amazon.com/Aveeno-Baby-Shampoo-Natural-Tear-Free/dp/",
    description: "Gentle no-tears shampoo for daily use",
    badge: "",
  },
];

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Newborn Product Reviews</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Detailed and honest reviews of the best products for babies. Each product is thoroughly tested by our
              experts and parents.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Feeding">Feeding</SelectItem>
                <SelectItem value="Hygiene">Hygiene</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Transport">Transport</SelectItem>
                <SelectItem value="Bath">Bath</SelectItem>
                <SelectItem value="Sleep">Sleep</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">By Rating</SelectItem>
                <SelectItem value="reviews">By Number of Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Products found: {filteredAndSortedProducts.length}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3" variant="secondary">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Category */}
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>

                    {/* Title */}
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </CardTitle>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    {/* Description */}
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>

                    {/* Button */}
                    <div className="pt-2">
                      <Button asChild className="w-full">
                        <Link href={`/reviews/${product.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found for your search. Try changing your search criteria.
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredAndSortedProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Trust Our Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-balance">Why Trust Our Reviews?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Independent Testing</h3>
                <p className="text-sm text-muted-foreground">
                  We purchase and test each product independently, without manufacturer influence
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Strict Criteria</h3>
                <p className="text-sm text-muted-foreground">
                  Each product is evaluated on 15+ parameters of safety, quality, and convenience
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Real Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Reviews are based on real experience using products with children
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
