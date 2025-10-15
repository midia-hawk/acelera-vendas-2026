"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const basePath = process.env.NODE_ENV === 'production' ? '/acelera-vendas-2026' : ''

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="h-20 w-auto relative">
              <img
                src={`${basePath}/images/logo-hawk.png`}
                alt="Hawk Logo"
                className={`h-20 w-auto transition-all duration-300 absolute top-0 left-0 ${isScrolled ? "opacity-0" : "invert brightness-0 opacity-100"}`}
              />
              <img
                src={`${basePath}/images/logo-hawk-black.png`}
                alt="Hawk Logo"
                className={`h-20 w-auto transition-all duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Sobre o Evento
            </button>
            <button
              onClick={() => scrollToSection("palestrantes")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Palestrantes
            </button>
            <button
              onClick={() => scrollToSection("programacao")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              Benefícios
            </button>
            <Button asChild className={isScrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white/10 hover:bg-white/20 text-white border border-white/20"}>
              <a href="#inscricao">Garantir Vaga</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className={`md:hidden cursor-pointer ${isScrolled ? "text-foreground" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className={`text-sm font-medium transition-colors text-left cursor-pointer ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/90"
                }`}
              >
                Sobre o Evento
              </button>
              <button
                onClick={() => scrollToSection("palestrantes")}
                className={`text-sm font-medium transition-colors text-left cursor-pointer ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/90"
                }`}
              >
                Palestrantes
              </button>
              <button
                onClick={() => scrollToSection("programacao")}
                className={`text-sm font-medium transition-colors text-left cursor-pointer ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/90"
                }`}
              >
                Programação
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className={`text-sm font-medium transition-colors text-left cursor-pointer ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/90"
                }`}
              >
                Benefícios
              </button>
              <Button asChild className={isScrolled ? "bg-primary hover:bg-primary/90 text-white w-full" : "bg-white/10 hover:bg-white/20 text-white w-full border border-white/20"}>
                <a href="#inscricao">Garantir Vaga</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
