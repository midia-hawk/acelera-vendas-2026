"use client"

import { Card } from "@/components/ui/card"
import { Clock, TrendingUp, Users2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function BenefitsSection() {
  const { ref, isInView } = useInView()

  const benefits = [
    {
      icon: Clock,
      title: "2025 Já Acabou",
      description:
        "Exclusivo! Acesso antecipado para empresários que querem sair na frente. Não espere mais para começar a agir.",
      color: "bg-primary",
      iconColor: "text-white",
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Aprenda com quem fez empresas crescerem de verdade, com estratégias, marketing e performance.",
      color: "bg-primary",
      iconColor: "text-white",
    },
    {
      icon: Users2,
      title: "Networking Exclusivo",
      description:
        "Conecte-se com outros empresários de Uberaba e região. Troque experiências e crie parcerias focadas em crescimento.",
      color: "bg-secondary",
      iconColor: "text-white",
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Por Que Participar?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
