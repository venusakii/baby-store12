"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">PuppyStore</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Обзоры
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link href="/reviews" className="text-foreground hover:text-primary transition-colors">
                Обзоры
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                О нас
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
