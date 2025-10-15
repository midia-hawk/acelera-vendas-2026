"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CTASection() {
  const { ref, isInView } = useInView()

  const scrollToForm = () => {
    const element = document.getElementById("inscricao")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            ÚLTIMAS VAGAS DISPONÍVEIS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Garanta Sua Vaga Agora!</h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Não perca a oportunidade de transformar suas vendas em 2026. Evento 100% gratuito com vagas limitadas.
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            Quero Garantir Minha Vaga Gratuita
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>

          <p className="text-white/70 text-sm mt-6">
            ⏰ Vagas limitadas • 📍 Av. Nicomedes Alves dos Santos, 3600 - Loja 2 - Morada da Colina, Uberlândia - MG • 📅 06 de Agosto
          </p>
        </div>
      </div>
    </section>
  )
}
