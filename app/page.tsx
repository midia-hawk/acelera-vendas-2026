import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ProgramSection } from "@/components/program-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"
import { RegistrationForm } from "@/components/registration-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ProgramSection />
      <BenefitsSection />
      <CTASection />
      <RegistrationForm />
      <Footer />
    </main>
  )
}
