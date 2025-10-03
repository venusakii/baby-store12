import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-xl font-bold text-primary">PuppyStore</div>
            <p className="text-sm text-muted-foreground">
              Лучшие товары для новорожденных с подробными обзорами и рекомендациями.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Быстрые ссылки</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link
                href="/reviews"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Обзоры товаров
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                О нас
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Правовая информация</h3>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: info@puppystore.com</p>
              <p>Телефон: +7 (800) 123-45-67</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              All rights reserved. Amazon Associate Program participant. 🛒 As an Amazon Associate, we earn from
              qualifying purchases.
            </p>
            <p className="text-sm text-muted-foreground">© 2025 PuppyStore. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
