import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { InvestmentBreakdown } from "@/components/investment-breakdown"
import { WhyUs } from "@/components/why-us"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <InvestmentBreakdown />
      <WhyUs />
      <FinalCta />
      <Footer />
    </main>
  )
}
