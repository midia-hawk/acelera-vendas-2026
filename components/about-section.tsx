"use client"

import { Card } from "@/components/ui/card"
import { Coffee, Users, TrendingUp } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const basePath = process.env.NODE_ENV === 'production' ? '/acelera-vendas-2026' : ''

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="sobre" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Sobre o Evento
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <img
              src={`${basePath}/business-meeting-with-entrepreneurs-discussing-sal.jpg`}
              alt="Evento Acelera Vendas"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold text-foreground">Encontro com Empresários + Acelera Vendas 2026</span> é um
              encontro presencial voltado para empresários e empreendedores de Uberaba e região que querem acelerar suas
              vendas em 2026, qualificar melhor seus leads e estruturar um funil de marketing e vendas previsível e
              lucrativo.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Serão <span className="font-bold text-primary">2 horas de conteúdo e networking</span>, com conteúdo
              direto e aplicável. Conduzido por quem fez isso em dezenas de empresas de sucesso.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Café da Manhã</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Conteúdo Premium</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Networking</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
