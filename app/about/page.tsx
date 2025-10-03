import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Award, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">О PuppyStore</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Мы помогаем родителям делать осознанный выбор товаров для новорожденных через честные и подробные обзоры,
              основанные на реальном опыте использования.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Наша история</h2>
              <p className="text-muted-foreground text-lg">Как все начиналось</p>
            </div>

            <div className="space-y-8">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg leading-relaxed">
                  PuppyStore родился из личного опыта молодых родителей, которые столкнулись с огромным количеством
                  товаров для новорожденных и отсутствием честной информации о них. Когда наш первый ребенок появился на
                  свет в 2020 году, мы потратили месяцы на изучение отзывов, сравнение характеристик и тестирование
                  различных товаров.
                </p>

                <p className="text-lg leading-relaxed">
                  Мы поняли, что многие родители сталкиваются с теми же проблемами: как выбрать безопасную и
                  качественную продукцию среди тысяч предложений? Какие товары действительно необходимы, а какие -
                  просто маркетинг? Так появилась идея создать платформу с независимыми и подробными обзорами.
                </p>

                <p className="text-lg leading-relaxed">
                  Сегодня наша команда состоит из опытных родителей, педиатров и экспертов по детской безопасности. Мы
                  тестируем каждый товар в реальных условиях и делимся честными выводами с другими родителями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Наши ценности</h2>
            <p className="text-muted-foreground text-lg">Принципы, которыми мы руководствуемся</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Безопасность прежде всего</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Безопасность детей - наш главный приоритет. Мы тщательно проверяем каждый товар на соответствие
                  стандартам безопасности.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Честность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Мы говорим правду о товарах, включая их недостатки. Наши обзоры основаны на реальном опыте, а не на
                  рекламных материалах.
                </CardDescription>
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
                <CardDescription>
                  Мы создаем сообщество родителей, которые помогают друг другу делать лучший выбор для своих детей.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Экспертность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Наша команда включает педиатров, экспертов по детской безопасности и опытных родителей с многолетним
                  стажем.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Независимость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Мы не получаем деньги от производителей за положительные обзоры. Наша независимость гарантирует
                  объективность.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Мы постоянно совершенствуем наши методы тестирования и ищем новые способы помочь родителям.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Как мы работаем</h2>
            <p className="text-muted-foreground text-lg">Наш процесс создания обзоров</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Выбор товаров</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы выбираем товары на основе популярности, инновационности и запросов нашего сообщества. Каждый товар
                  покупается за наши собственные средства.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Тестирование</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Минимум 3 месяца реального использования с детьми разного возраста. Мы тестируем безопасность,
                  удобство, долговечность и соответствие заявленным характеристикам.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Экспертная оценка</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Наши эксперты - педиатры и специалисты по детской безопасности - проводят дополнительную оценку товара
                  с профессиональной точки зрения.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Создание обзора</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы создаем подробный обзор с фотографиями, видео, плюсами, минусами и честными рекомендациями. Каждый
                  обзор проходит редакторскую проверку.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Обновление</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы регулярно обновляем обзоры при появлении новых версий товаров или изменении рыночной ситуации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Наши достижения</h2>
            <p className="text-primary-foreground/80 text-lg">Цифры, которыми мы гордимся</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Подробных обзоров</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50,000+</div>
              <div className="text-primary-foreground/80">Довольных родителей</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,200+</div>
              <div className="text-primary-foreground/80">Часов тестирования</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-primary-foreground/80">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Наша команда</h2>
            <p className="text-muted-foreground text-lg">Люди, которые делают PuppyStore особенным</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>Анна Петрова</CardTitle>
                <CardDescription>Основатель и главный редактор</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Мама двоих детей, эксперт по детским товарам с 8-летним опытом. Создала PuppyStore, чтобы помочь
                  другим родителям.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Основатель</Badge>
                  <Badge variant="outline">Мама</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>Др. Михаил Иванов</CardTitle>
                <CardDescription>Педиатр-консультант</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Педиатр с 15-летним стажем, специалист по детской безопасности. Консультирует по медицинским аспектам
                  товаров.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Педиатр</Badge>
                  <Badge variant="outline">15 лет опыта</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-muted-foreground" />
                </div>
                <CardTitle>Елена Сидорова</CardTitle>
                <CardDescription>Эксперт по тестированию</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Инженер по качеству, мама троих детей. Разрабатывает методики тестирования и контролирует качество
                  обзоров.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Инженер</Badge>
                  <Badge variant="outline">Мама 3х детей</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
