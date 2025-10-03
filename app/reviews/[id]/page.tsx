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

// Mock data - в реальном приложении это будет из базы данных
const products = {
  "1": {
    id: 1,
    name: "Philips Avent Natural Бутылочка",
    category: "Кормление",
    price: "₽1,290",
    originalPrice: "₽1,590",
    rating: 4.8,
    reviews: 234,
    images: ["/philips-avent-bottle.jpg", "/philips-avent-bottle-2.jpg", "/philips-avent-bottle-3.jpg"],
    description:
      "Натуральная бутылочка с широким горлышком для комфортного кормления. Разработана для легкого перехода от груди к бутылочке.",
    badge: "Бестселлер",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Широкое горлышко для легкого наполнения и чистки",
      "Антиколиковая система AirFree",
      "Мягкая соска, имитирующая форму груди",
      "Не содержит BPA",
      "Легко собирается и разбирается",
    ],
    cons: [
      "Может протекать при неправильной сборке",
      "Соска может быть слишком мягкой для некоторых детей",
      "Относительно высокая цена",
    ],
    specifications: {
      Объем: "260 мл",
      Материал: "Полипропилен, силикон",
      Возраст: "0+ месяцев",
      Производитель: "Philips Avent",
      Страна: "Нидерланды",
      Гарантия: "2 года",
    },
    overallScore: 4.8,
    scores: {
      quality: 4.9,
      safety: 4.8,
      usability: 4.7,
      value: 4.6,
    },
    detailedReview: `
      После тестирования бутылочки Philips Avent Natural в течение 3 месяцев с новорожденным, мы можем с уверенностью сказать, что это один из лучших вариантов на рынке.

      **Качество изготовления**
      Бутылочка выполнена из высококачественного полипропилена, который не содержит BPA и других вредных веществ. Материал прочный, не мутнеет со временем и легко переносит стерилизацию.

      **Удобство использования**
      Широкое горлышко значительно упрощает наполнение и чистку. Соска имеет естественную форму, что помогает малышу легко переходить от грудного вскармливания к бутылочке.

      **Антиколиковая система**
      Система AirFree действительно работает - воздух поступает через специальный клапан, а не через соску, что снижает риск колик и срыгивания.

      **Недостатки**
      Основной недостаток - необходимость правильной сборки. При неточной установке соски может возникнуть протекание. Также цена выше среднего по рынку.
    `,
    userReviews: [
      {
        id: 1,
        author: "Анна М.",
        rating: 5,
        date: "15 декабря 2024",
        text: "Отличная бутылочка! Сын легко перешел с груди на эту бутылочку. Никаких колик не было.",
        helpful: 12,
        verified: true,
      },
      {
        id: 2,
        author: "Михаил К.",
        rating: 4,
        date: "10 декабря 2024",
        text: "Качественная бутылочка, но иногда протекает. Нужно внимательно собирать.",
        helpful: 8,
        verified: true,
      },
      {
        id: 3,
        author: "Елена С.",
        rating: 5,
        date: "5 декабря 2024",
        text: "Пользуемся уже полгода. Очень довольны качеством. Рекомендую!",
        helpful: 15,
        verified: true,
      },
    ],
  },
  "2": {
    id: 2,
    name: "Pampers Premium Care Подгузники",
    category: "Гигиена",
    price: "₽1,890",
    originalPrice: "₽2,190",
    rating: 4.7,
    reviews: 456,
    images: ["/pampers-premium-diapers.jpg", "/pampers-premium-diapers.jpg", "/pampers-premium-diapers.jpg"],
    description: "Самые мягкие и впитывающие подгузники Pampers с 3 Extra Absorb каналами и индикатором влаги.",
    badge: "Выбор родителей",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Превосходная впитываемость",
      "Мягкие как шелк материалы",
      "Индикатор влаги",
      "Гипоаллергенные",
      "Дерматологически протестированы",
    ],
    cons: ["Высокая цена", "Могут быть велики в размере", "Не всегда есть в наличии"],
    specifications: {
      Размер: "Newborn (2-5 кг)",
      Количество: "84 шт",
      Материал: "Нетканые материалы",
      Производитель: "Procter & Gamble",
      Страна: "Германия",
      Гарантия: "Возврат при неудовлетворенности",
    },
    overallScore: 4.7,
    scores: {
      quality: 4.8,
      safety: 4.9,
      usability: 4.6,
      value: 4.3,
    },
    detailedReview: `
      Подгузники Pampers Premium Care - это премиальная линейка, которая действительно оправдывает свою репутацию.

      **Впитываемость**
      Благодаря технологии 3 Extra Absorb каналов, подгузники отлично справляются с влагой, обеспечивая сухость до 12 часов.

      **Комфорт**
      Материалы невероятно мягкие, не натирают нежную кожу малыша. Эластичные боковинки обеспечивают идеальную посадку.

      **Индикатор влаги**
      Очень удобная функция - полоска меняет цвет, когда пора менять подгузник.

      **Недостатки**
      Основной минус - цена. Также некоторые родители отмечают, что размеры могут быть немного больше стандартных.
    `,
    userReviews: [
      {
        id: 1,
        author: "Мария В.",
        rating: 5,
        date: "18 декабря 2024",
        text: "Лучшие подгузники! Никаких протеканий, кожа всегда сухая.",
        helpful: 23,
        verified: true,
      },
      {
        id: 2,
        author: "Дмитрий П.",
        rating: 4,
        date: "12 декабря 2024",
        text: "Качественные, но дорогие. Берем только на ночь.",
        helpful: 11,
        verified: true,
      },
    ],
  },
  "3": {
    id: 3,
    name: "Fisher-Price Мобиль Мечты о бабочках",
    category: "Игрушки",
    price: "₽3,490",
    originalPrice: "₽4,290",
    rating: 4.6,
    reviews: 189,
    images: ["/fisher-price-mobile.jpg", "/fisher-price-mobile.jpg", "/fisher-price-mobile.jpg"],
    description: "Музыкальный мобиль с проекцией звездного неба, успокаивающими мелодиями и дистанционным управлением.",
    badge: "Новинка",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Проекция звездного неба",
      "30 минут непрерывной музыки",
      "Дистанционное управление",
      "Съемные игрушки",
      "Регулировка громкости",
    ],
    cons: ["Требует много батареек", "Проекция не очень яркая", "Сложная установка"],
    specifications: {
      Возраст: "0-5 месяцев",
      Материал: "Пластик, текстиль",
      Питание: "4 батарейки AA",
      Размер: "65 x 40 x 30 см",
      Производитель: "Fisher-Price",
      Страна: "США",
      Гарантия: "1 год",
    },
    overallScore: 4.6,
    scores: {
      quality: 4.5,
      safety: 4.8,
      usability: 4.4,
      value: 4.6,
    },
    detailedReview: `
      Мобиль Fisher-Price "Мечты о бабочках" - это многофункциональная игрушка, которая поможет успокоить малыша и подготовить его ко сну.

      **Функциональность**
      Мобиль предлагает три режима: только музыка, только проекция, или оба режима вместе. 30 минут непрерывного воспроизведения - достаточно для засыпания.

      **Качество звука**
      Мелодии приятные и успокаивающие, громкость регулируется. Звук чистый, без искажений.

      **Проекция**
      Звездное небо проецируется на потолок, создавая волшебную атмосферу. Правда, проекция не очень яркая.

      **Установка**
      Крепление надежное, но установка может показаться сложной. Важно точно следовать инструкции.
    `,
    userReviews: [
      {
        id: 1,
        author: "Ольга К.",
        rating: 5,
        date: "20 декабря 2024",
        text: "Дочка засыпает под этот мобиль за 10 минут! Очень довольны покупкой.",
        helpful: 18,
        verified: true,
      },
      {
        id: 2,
        author: "Алексей Н.",
        rating: 4,
        date: "14 декабря 2024",
        text: "Хорошая игрушка, но батарейки садятся быстро.",
        helpful: 9,
        verified: true,
      },
    ],
  },
  "4": {
    id: 4,
    name: "Chicco Прогулочная коляска Lite Way",
    category: "Транспорт",
    price: "₽12,990",
    originalPrice: "₽15,990",
    rating: 4.5,
    reviews: 312,
    images: ["/chicco-stroller.jpg", "/chicco-stroller.jpg", "/chicco-stroller.jpg"],
    description: "Легкая и компактная прогулочная коляска с одной рукой складывания и большой корзиной для покупок.",
    badge: "Хит продаж",
    amazonLink: "https://amazon.com/example",
    pros: [
      "Очень легкая (всего 7.5 кг)",
      "Складывается одной рукой",
      "Большая корзина для покупок",
      "Регулируемая спинка",
      "Съемный бампер",
    ],
    cons: ["Маленькие колеса", "Не подходит для бездорожья", "Капюшон мог бы быть больше"],
    specifications: {
      Возраст: "6 месяцев - 3 года",
      Вес: "7.5 кг",
      "Максимальная нагрузка": "15 кг",
      Размер: "47 x 82 x 103 см",
      Производитель: "Chicco",
      Страна: "Италия",
      Гарантия: "2 года",
    },
    overallScore: 4.5,
    scores: {
      quality: 4.6,
      safety: 4.7,
      usability: 4.4,
      value: 4.3,
    },
    detailedReview: `
      Chicco Lite Way - это отличный выбор для родителей, которые ценят легкость и компактность.

      **Маневренность**
      Коляска очень легкая и маневренная. Передние колеса поворотные, что облегчает управление в магазинах и узких проходах.

      **Складывание**
      Механизм складывания одной рукой работает отлично. Коляска компактно складывается и помещается в багажник любого автомобиля.

      **Комфорт**
      Сиденье достаточно просторное, спинка регулируется в нескольких положениях. Пятиточечные ремни безопасности надежно фиксируют ребенка.

      **Недостатки**
      Маленькие колеса не очень подходят для неровных дорог. Также капюшон мог бы обеспечивать лучшую защиту от солнца.
    `,
    userReviews: [
      {
        id: 1,
        author: "Татьяна Л.",
        rating: 5,
        date: "22 декабря 2024",
        text: "Идеальная коляска для города! Легкая, удобная, качественная.",
        helpful: 27,
        verified: true,
      },
      {
        id: 2,
        author: "Игорь С.",
        rating: 4,
        date: "16 декабря 2024",
        text: "Хорошая коляска, но по грунтовым дорогам ездить сложно.",
        helpful: 14,
        verified: true,
      },
    ],
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = products[id as keyof typeof products]

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
              Главная
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-primary">
              Обзоры
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
                  <span className="text-muted-foreground">({product.reviews} отзывов)</span>
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
                  Цена может изменяться. Актуальную стоимость уточняйте на сайте продавца.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" asChild>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Купить на Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />В избранное
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick Scores */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Наша оценка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Качество</span>
                        <span>{product.scores.quality}</span>
                      </div>
                      <Progress value={product.scores.quality * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Безопасность</span>
                        <span>{product.scores.safety}</span>
                      </div>
                      <Progress value={product.scores.safety * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Удобство</span>
                        <span>{product.scores.usability}</span>
                      </div>
                      <Progress value={product.scores.usability * 20} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Цена/качество</span>
                        <span>{product.scores.value}</span>
                      </div>
                      <Progress value={product.scores.value * 20} />
                    </div>
                  </div>
                  <Separator />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.overallScore}</div>
                    <div className="text-sm text-muted-foreground">Общая оценка</div>
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
              <TabsTrigger value="review">Подробный обзор</TabsTrigger>
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="pros-cons">Плюсы и минусы</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="review" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Подробный обзор</CardTitle>
                  <CardDescription>Наш эксперт протестировал этот товар в течение нескольких месяцев</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">{product.detailedReview}</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Технические характеристики</CardTitle>
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
                      Преимущества
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
                      Недостатки
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
                                Проверенная покупка
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
                            Полезно ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            Не полезно
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="outline">Загрузить еще отзывы</Button>
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
              Вернуться к обзорам
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
