import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Условия использования</h1>
            <p className="text-lg text-muted-foreground">Последнее обновление: 25 декабря 2024</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Принятие условий</h2>
              <p className="leading-relaxed">
                Добро пожаловать на PuppyStore.com. Используя наш сайт, вы соглашаетесь с настоящими Условиями
                использования. Если вы не согласны с какими-либо из этих условий, пожалуйста, не используйте наш сайт.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Описание сервиса</h2>
              <p className="leading-relaxed">
                PuppyStore.com - это информационный сайт, предоставляющий обзоры и рекомендации по товарам для
                новорожденных. Мы являем участниками партнерской программы Amazon и можем получать комиссию от покупок,
                совершенных по нашим ссылкам.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Использование сайта</h2>
              <p className="leading-relaxed">Вы обязуетесь:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Использовать сайт только в законных целях</li>
                <li>Не нарушать права интеллектуальной собственности</li>
                <li>Не размещать вредоносный контент или спам</li>
                <li>Не пытаться получить несанкционированный доступ к системам сайта</li>
                <li>Предоставлять точную информацию при регистрации</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Интеллектуальная собственность</h2>
              <p className="leading-relaxed">
                Все материалы на сайте, включая тексты, изображения, логотипы, дизайн, являются собственностью
                PuppyStore или используются с разрешения правообладателей. Запрещается копирование, распространение или
                использование материалов без письменного разрешения.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Партнерские ссылки</h2>
              <p className="leading-relaxed">
                Наш сайт содержит партнерские ссылки на Amazon. Мы можем получать комиссию от покупок, совершенных по
                этим ссылкам, без дополнительных затрат для вас. Это помогает нам поддерживать работу сайта и создавать
                качественный контент.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Отказ от ответственности</h2>
              <p className="leading-relaxed">
                Информация на сайте предоставляется "как есть". Мы не гарантируем точность, полноту или актуальность
                информации. Использование информации с сайта осуществляется на ваш собственный риск. Мы не несем
                ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Решения о покупке, принятые на основе наших обзоров</li>
                <li>Качество товаров, приобретенных у третьих лиц</li>
                <li>Временную недоступность сайта</li>
                <li>Потерю данных или прибыли</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Пользовательский контент</h2>
              <p className="leading-relaxed">
                Размещая отзывы или комментарии на сайте, вы предоставляете нам неисключительное право использовать,
                воспроизводить и распространять этот контент. Вы гарантируете, что ваш контент не нарушает права третьих
                лиц.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Ограничение ответственности</h2>
              <p className="leading-relaxed">
                В максимальной степени, разрешенной законом, наша ответственность ограничивается суммой, которую вы
                заплатили за использование сайта (если применимо). Мы не несем ответственности за косвенные, случайные
                или специальные убытки.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Изменения условий</h2>
              <p className="leading-relaxed">
                Мы оставляем за собой право изменять эти условия в любое время. Существенные изменения будут размещены
                на сайте. Продолжение использования сайта после изменений означает ваше согласие с новыми условиями.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. Применимое право</h2>
              <p className="leading-relaxed">
                Настоящие условия регулируются законодательством Российской Федерации. Все споры подлежат рассмотрению в
                судах по месту нахождения администрации сайта.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">11. Контактная информация</h2>
              <p className="leading-relaxed">По вопросам, связанным с условиями использования, обращайтесь:</p>
              <ul className="list-none space-y-2">
                <li>Email: legal@puppystore.com</li>
                <li>Телефон: +7 (800) 123-45-67</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  )
}
