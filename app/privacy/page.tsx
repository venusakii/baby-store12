import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Политика конфиденциальности</h1>
            <p className="text-lg text-muted-foreground">Последнее обновление: 25 декабря 2024</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Общие положения</h2>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о пользователях
                сайта PuppyStore.com (далее - "Сайт"). Мы серьезно относимся к защите ваших персональных данных и
                обязуемся обеспечивать их безопасность.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Какую информацию мы собираем</h2>
              <p className="leading-relaxed">Мы можем собирать следующие типы информации:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Личная информация: имя, адрес электронной почты, которые вы предоставляете добровольно</li>
                <li>Техническая информация: IP-адрес, тип браузера, операционная система</li>
                <li>Информация об использовании: страницы, которые вы посещаете, время пребывания на сайте</li>
                <li>Файлы cookie и аналогичные технологии для улучшения работы сайта</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Как мы используем информацию</h2>
              <p className="leading-relaxed">Собранная информация используется для:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставления и улучшения наших услуг</li>
                <li>Отправки информационных рассылок (только с вашего согласия)</li>
                <li>Анализа использования сайта и улучшения пользовательского опыта</li>
                <li>Обеспечения безопасности и предотвращения мошенничества</li>
                <li>Соблюдения правовых требований</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Передача данных третьим лицам</h2>
              <p className="leading-relaxed">
                Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам без вашего согласия,
                за исключением случаев, предусмотренных законом. Мы можем передавать данные:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Партнерам Amazon в рамках партнерской программы (только для обработки покупок)</li>
                <li>Поставщикам услуг, которые помогают нам в работе сайта</li>
                <li>Правоохранительным органам при наличии законных требований</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Файлы cookie</h2>
              <p className="leading-relaxed">
                Мы используем файлы cookie для улучшения работы сайта. Cookie - это небольшие файлы, которые сохраняются
                на вашем устройстве. Вы можете настроить свой браузер для отклонения cookie, но это может ограничить
                функциональность сайта.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Безопасность данных</h2>
              <p className="leading-relaxed">
                Мы применяем современные технические и организационные меры для защиты ваших данных от
                несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи данных
                через интернет не является абсолютно безопасным.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Ваши права</h2>
              <p className="leading-relaxed">Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию о том, какие данные мы о вас храним</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Подать жалобу в надзорный орган</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Изменения в политике</h2>
              <p className="leading-relaxed">
                Мы можем обновлять данную Политику конфиденциальности. О существенных изменениях мы уведомим вас через
                сайт или по электронной почте. Рекомендуем периодически просматривать эту страницу.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Контактная информация</h2>
              <p className="leading-relaxed">
                Если у вас есть вопросы о данной Политике конфиденциальности, свяжитесь с нами:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: privacy@puppystore.com</li>
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
