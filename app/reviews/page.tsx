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
    name: "Philips Avent Natural Бутылочка",
    category: "Кормление",
    price: "₽1,290",
    rating: 4.8,
    reviews: 234,
    image: "/philips-avent-bottle.jpg",
    description: "Натуральная бутылочка с широким горлышком для комфортного кормления",
    badge: "Бестселлер",
  },
  {
    id: 2,
    name: "Pampers Premium Care Подгузники",
    category: "Гигиена",
    price: "₽2,450",
    rating: 4.9,
    reviews: 567,
    image: "/pampers-premium-diapers.jpg",
    description: "Мягкие подгузники с превосходной защитой на 12 часов",
    badge: "Выбор редакции",
  },
  {
    id: 3,
    name: "Fisher-Price Мобиль над кроваткой",
    category: "Развитие",
    price: "₽3,890",
    rating: 4.7,
    reviews: 189,
    image: "/fisher-price-mobile.jpg",
    description: "Музыкальный мобиль с мягкими игрушками для развития малыша",
    badge: "Новинка",
  },
  {
    id: 4,
    name: "Chicco Прогулочная коляска",
    category: "Транспорт",
    price: "₽15,990",
    rating: 4.6,
    reviews: 98,
    image: "/chicco-stroller.jpg",
    description: "Легкая и маневренная коляска для городских прогулок",
    badge: "",
  },
  {
    id: 5,
    name: "Johnson's Baby Шампунь",
    category: "Купание",
    price: "₽450",
    rating: 4.5,
    reviews: 445,
    image: "/johnsons-baby-shampoo.jpg",
    description: "Мягкий шампунь без слез для ежедневного использования",
    badge: "",
  },
  {
    id: 6,
    name: "Mothercare Спальный мешок",
    category: "Сон",
    price: "₽2,290",
    rating: 4.8,
    reviews: 156,
    image: "/mothercare-sleep-bag.jpg",
    description: "Безопасный спальный мешок для комфортного сна малыша",
    badge: "Рекомендуем",
  },
  {
    id: 7,
    name: "MAM Perfect Пустышка",
    category: "Кормление",
    price: "₽890",
    rating: 4.7,
    reviews: 312,
    image: "/mam-perfect-pacifier.jpg",
    description: "Ортодонтическая пустышка из силикона для новорожденных",
    badge: "",
  },
  {
    id: 8,
    name: "Skip Hop Развивающий коврик",
    category: "Развитие",
    price: "₽4,590",
    rating: 4.9,
    reviews: 203,
    image: "/skip-hop-play-mat.jpg",
    description: "Интерактивный коврик с дугами и подвесными игрушками",
    badge: "Топ продаж",
  },
  {
    id: 9,
    name: "Cybex Cloud Z Автокресло",
    category: "Транспорт",
    price: "₽28,990",
    rating: 4.8,
    reviews: 87,
    image: "/cybex-cloud-car-seat.jpg",
    description: "Премиальное автокресло группы 0+ с поворотным механизмом",
    badge: "Премиум",
  },
]

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
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">Обзоры товаров для новорожденных</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Подробные и честные обзоры лучших товаров для малышей. Каждый продукт тщательно протестирован нашими
              экспертами и родителями.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск товаров..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="Кормление">Кормление</SelectItem>
                <SelectItem value="Гигиена">Гигиена</SelectItem>
                <SelectItem value="Развитие">Развитие</SelectItem>
                <SelectItem value="Транспорт">Транспорт</SelectItem>
                <SelectItem value="Купание">Купание</SelectItem>
                <SelectItem value="Сон">Сон</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="reviews">По количеству отзывов</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Найдено товаров: {filteredAndSortedProducts.length}</p>
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
                      <span className="text-sm text-muted-foreground">({product.reviews} отзывов)</span>
                    </div>

                    {/* Description */}
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>

                    {/* Button */}
                    <div className="pt-2">
                      <Button asChild className="w-full">
                        <Link href={`/reviews/${product.id}`}>
                          Подробнее
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
                По вашему запросу товары не найдены. Попробуйте изменить критерии поиска.
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredAndSortedProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Загрузить еще товары
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Trust Our Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-balance">Почему стоит доверять нашим обзорам?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Независимые тесты</h3>
                <p className="text-sm text-muted-foreground">
                  Мы покупаем и тестируем каждый товар самостоятельно, без влияния производителей
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Строгие критерии</h3>
                <p className="text-sm text-muted-foreground">
                  Каждый товар оценивается по 15+ параметрам безопасности, качества и удобства
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Реальный опыт</h3>
                <p className="text-sm text-muted-foreground">
                  Отзывы основаны на реальном опыте использования товаров с детьми
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
