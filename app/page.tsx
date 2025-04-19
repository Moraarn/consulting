"use client"
import { AboutSection } from "@/components/about-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ContactSection } from "@/components/contact-section"
import { FaqSection } from "@/components/faq-section"
import { HeroSection } from "@/components/hero-section"
import { InsightsSection } from "@/components/insights-section"
import { JourneySection } from "@/components/journey-section"

import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <AboutSection />
        <WhyChooseUsSection />
        <JourneySection />
        <ServicesSection />
        <CaseStudiesSection />
        <InsightsSection />
        <FaqSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
