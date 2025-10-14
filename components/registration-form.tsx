"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { CheckCircle2 } from "lucide-react"

export function RegistrationForm() {
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Capture UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search)
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
      }

      const payload = { 
        ...formData, 
        phone: formData.phone.replace(/\D/g, ""),
        ...utmParams
      }

      const res = await fetch("https://n8n-n8n-start.t4r0vc.easypanel.host/webhook/4212093e-b3f1-467b-8604-9ebfe17d7167", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`Webhook responded with ${res.status}`)
      }

      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", company: "" })
      }, 3000)
    } catch (err) {
      console.error("Error submitting form:", err)
      // Optionally, show an error toast or message (kept simple here)
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formatPhone = (digits: string) => {
    // digits: only numeric characters, up to 11 (2 DDD + 9)
    const d = digits.slice(0, 11)
    if (d.length <= 2) return `(${d}`

    const area = d.slice(0, 2)
    const rest = d.slice(2)

    // If subscriber has 9 digits (total 11)
    if (d.length === 11) {
      const first = rest.slice(0, 1)
      const mid = rest.slice(1, 5)
      const last = rest.slice(5)
      return `(${area}) ${first} ${mid}-${last}`
    }

    // Subscriber with up to 8 digits (total up to 10)
    if (rest.length <= 4) {
      return `(${area}) ${rest}`
    }

    const firstBlock = rest.slice(0, rest.length - 4)
    const last4 = rest.slice(-4)
    return `(${area}) ${firstBlock} ${last4}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // keep only digits
    const onlyDigits = e.target.value.replace(/\D/g, "")
    // limit to 11 digits (2 for area + up to 9 for number)
    const limited = onlyDigits.slice(0, 11)
    const formatted = formatPhone(limited)
    setFormData({
      ...formData,
      phone: formatted,
    })
  }

  return (
    <section id="inscricao" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Garanta Sua Vaga
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-700">
              Preencha o formulário abaixo e reserve seu lugar no evento mais importante de vendas de 2026
            </p>
          </div>

          <Card
            className={`p-8 md:p-10 shadow-2xl border-2 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Inscrição Confirmada!</h3>
                <p className="text-gray-700">
                  Você receberá um e-mail de confirmação em breve com todos os detalhes do evento.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-900 font-semibold">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 h-12 border-gray-300 focus:border-primary"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 font-semibold">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 h-12 border-gray-300 focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-900 font-semibold">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="mt-2 h-12 border-gray-300 focus:border-primary"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-900 font-semibold">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 h-12 border-gray-300 focus:border-primary"
                    placeholder="Nome da sua empresa (opcional)"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? "Processando..." : "Confirmar Inscrição Gratuita"}
                </Button>

                <p className="text-sm text-gray-600 text-center mt-4">
                  Ao se inscrever, você concorda em receber comunicações sobre o evento.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
