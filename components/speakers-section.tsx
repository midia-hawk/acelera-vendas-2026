"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb, Target } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function SpeakersSection() {
  const { ref, isInView } = useInView()

  const speakers = [
    {
      name: "Rhulian Marcus",
      title: "CEO da Hawk Marketing",
      subtitle: "Especialista em Growth e Vendas B2B",
      description:
        "Vai revelar como construir um funil previsível, medir os indicadores certos e gerar mais vendas com menos desperdício de leads.",
      icon: Target,
      image: "/images/speaker-rhulian.jpg",
      color: "text-primary",
    },
    {
      name: "Larah Manoukian",
      title: "Mentora e Idealizadora",
      subtitle: "Decis Academy",
      description:
        "Vai mostrar como o empresário pode se posicionar como influenciador do próprio negócio, fortalecendo marca, autoridade e conexão com o público.",
      icon: Lightbulb,
      image: "/images/speaker-mariana.png",
      color: "text-primary",
    },
  ]

  return (
    <section id="palestrantes" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Palestrantes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Aprenda com especialistas que já geraram mais de 1 bilhão em receita para empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary bg-white ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full max-w-md mx-auto rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-primary/10`}>
                  <speaker.icon className={`h-8 w-8 ${speaker.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-primary font-semibold">{speaker.title}</p>
                  <p className="text-sm text-gray-600">{speaker.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{speaker.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
