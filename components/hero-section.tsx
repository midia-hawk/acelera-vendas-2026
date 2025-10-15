"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-secondary pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-bold mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            EVENTO PRESENCIAL GRATUITO
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Encontro de Empresários
            <br />
            <span className="text-white">Acelera Vendas 2026</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Conheça o método que levou empresas a gerarem mais de{" "}
            <span className="font-bold text-white">1 bilhão em aumento de receita</span>
          </p>

          {/* Event Details */}
          <div
            className={`flex flex-col md:flex-row items-center justify-center gap-6 mb-10 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Zona Sul Hall - Uberlândia/MG</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">06 de Agosto | 8h às 10h</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Users className="h-5 w-5" />
              <span className="text-sm">Café da Manhã + Conteúdo + Networking</span>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <a href="#inscricao">
                Garantir Minha Vaga Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-white/80 text-sm mt-4 pb-4">⚠️ VAGAS LIMITADAS - Exclusivo para empresários de Uberlândia</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
