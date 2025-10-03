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
                  Лучшие товары для малышей
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Все для вашего <span className="text-primary">новорожденного</span> малыша
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Подробные обзоры, честные рекомендации и лучшие предложения на товары для новорожденных. Мы поможем
                  вам выбрать только самое необходимое и качественное.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/reviews">
                    Смотреть обзоры
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/reviews">Популярные товары</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary to-accent rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/happy-baby-with-toys-and-baby-products.jpg"
                  alt="Счастливый малыш с игрушками"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Почему выбирают PuppyStore?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Мы создали платформу, которая помогает родителям делать осознанный выбор
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Все товары проверены на соответствие стандартам безопасности для детей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Экспертные обзоры</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Подробные тестирования от опытных родителей и специалистов</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Партнерство с Amazon обеспечивает быструю и надежную доставку</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Более 50,000 довольных родителей доверяют нашим рекомендациям</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Категории товаров</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Найдите все необходимое для вашего малыша в одном месте
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-feeding-bottles-and-accessories.jpg"
                    alt="Кормление"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Кормление</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>
                    Бутылочки, соски, стерилизаторы и все для комфортного кормления малыша
                  </CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Смотреть товары <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-clothes-and-diapers.jpg"
                    alt="Одежда и подгузники"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Одежда и подгузники</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Мягкая одежда, качественные подгузники и аксессуары для ухода</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Смотреть товары <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-toys-and-development-items.jpg"
                    alt="Игрушки и развитие"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Игрушки и развитие</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Развивающие игрушки, погремушки и все для раннего развития</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Смотреть товары <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-strollers-and-car-seats.jpg"
                    alt="Коляски и автокресла"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Коляски и автокресла</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Безопасные коляски, автокресла и транспортные решения</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Смотреть товары <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-bath-and-hygiene-products.jpg"
                    alt="Купание и гигиена"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Купание и гигиена</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Ванночки, косметика, полотенца и все для ухода за малышом</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Смотреть товары <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews" className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <img
                    src="/baby-sleep-and-nursery-items.jpg"
                    alt="Сон и детская"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="group-hover:text-primary transition-colors">Сон и детская</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>Кроватки, матрасы, мобили и все для комфортного сна</CardDescription>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Смотреть товары <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Популярные товары</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Самые востребованные товары с лучшими отзывами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/reviews/1" className="block group hover:shadow-lg transition-shadow cursor-pointer">
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/philips-avent-bottle.jpg"
                    alt="Бутылочка Philips Avent"
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
                      Бутылочка Philips Avent
                    </CardTitle>
                    <CardDescription className="mb-4">
                      Высококачественная бутылочка с антиколиковой системой
                    </CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Подробнее</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews/2" className="block group hover:shadow-lg transition-shadow cursor-pointer">
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/pampers-premium-diapers.jpg"
                    alt="Подгузники Pampers Premium"
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
                      Подгузники Pampers Premium
                    </CardTitle>
                    <CardDescription className="mb-4">Мягкие и надежные подгузники для комфорта малыша</CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Подробнее</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews/3" className="block group hover:shadow-lg transition-shadow cursor-pointer">
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/fisher-price-mobile.jpg"
                    alt="Мобиль Fisher-Price"
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
                      Мобиль Fisher-Price
                    </CardTitle>
                    <CardDescription className="mb-4">
                      Развивающий мобиль с музыкой и световыми эффектами
                    </CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Подробнее</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/reviews/4" className="block group hover:shadow-lg transition-shadow cursor-pointer">
              <Card className="h-full flex flex-col group-hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src="/chicco-stroller.jpg"
                    alt="Коляска Chicco"
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
                      Коляска Chicco
                    </CardTitle>
                    <CardDescription className="mb-4">
                      Легкая и маневренная коляска для городских прогулок
                    </CardDescription>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary font-medium">Подробнее</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/reviews">
                Все товары
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Отзывы родителей</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Что говорят о нас довольные покупатели
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                text: "Отличный сайт! Помог выбрать коляску для нашего малыша. Обзоры очень подробные и честные.",
                rating: 5,
              },
              {
                name: "Михаил Иванов",
                text: "Благодаря PuppyStore нашли идеальную кроватку. Качество товаров на высоте, доставка быстрая.",
                rating: 5,
              },
              {
                name: "Елена Сидорова",
                text: "Рекомендую всем молодым родителям! Здесь можно найти все необходимое и прочитать честные отзывы.",
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
              <div className="text-primary-foreground/80">Довольных родителей</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,200+</div>
              <div className="text-primary-foreground/80">Товаров в каталоге</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Подробных обзоров</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-primary-foreground/80">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Советы и рекомендации для молодых родителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Как выбрать первую коляску",
                excerpt: "Подробное руководство по выбору коляски для новорожденного с учетом всех важных факторов.",
                date: "15 декабря 2024",
              },
              {
                title: "Безопасность в детской комнате",
                excerpt: "Основные правила безопасности и список необходимых товаров для детской комнаты.",
                date: "12 декабря 2024",
              },
              {
                title: "Первые игрушки малыша",
                excerpt: "Какие игрушки действительно нужны новорожденному и как их правильно выбирать.",
                date: "10 декабря 2024",
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
                      Читать далее <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Будьте в курсе новинок</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Подпишитесь на нашу рассылку и получайте уведомления о новых обзорах и лучших предложениях
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>Подписаться</Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Никакого спама. Только полезная информация для родителей.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Готовы найти лучшее для вашего малыша?</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Изучите наши подробные обзоры и найдите идеальные товары для вашего новорожденного
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reviews">
                  <Baby className="mr-2 h-5 w-5" />
                  Смотреть все обзоры
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Связаться с нами</Link>
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
