import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Compare } from "@/components/compare"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { WhyRHCTech } from "@/components/why-rhctech"
import { DemoForm } from "@/components/demo-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Compare />
        <HowItWorks />
        <Features />
        <WhyRHCTech />
        <DemoForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
