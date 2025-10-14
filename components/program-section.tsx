"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ProgramSection() {
  const { ref, isInView } = useInView()

  const programItems = [
    {
      number: "1",
      title: "Abertura – O Novo Jogo das Vendas em 2026",
      topics: [
        "O cenário digital e o novo comportamento do consumidor",
        "Tendências de marketing e vendas para o próximo ano",
      ],
    },
    {
      number: "2",
      title: "Posicionamento e Autoridade Digital",
      topics: ["Por que o empresário precisa ser visto na marca", "Como gerar influência e confiança no digital"],
    },
    {
      number: "3",
      title: "Funil de Marketing e Vendas Inteligente",
      topics: [
        "Estruturando um funil previsível e escalável",
        "Principais KPIs e como definir metas que fazem sentido",
        "Como atrair marketing e vendas para escalar resultados",
      ],
    },
    {
      number: "4",
      title: "Qualificação de Leads e Playbook Comercial",
      topics: [
        'Como eliminar "leads frios" e aumentar taxa de conversão',
        "Construção do processo de vendas que funciona do dia a dia",
      ],
    },
    {
      number: "5",
      title: "Encerramento – Planejamento de Marketing e Vendas 2026",
      topics: ["Checklist de metas, indicadores e ações práticas"],
    },
  ]

  return (
    <section id="programacao" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Programação Completa
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            2 horas de conteúdo estratégico para transformar suas vendas em 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {programItems.map((item, index) => (
            <Card
              key={index}
              className={`bg-white border-gray-200 p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-primary ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">
                    {item.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
