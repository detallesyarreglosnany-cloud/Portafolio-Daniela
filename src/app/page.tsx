"use client";

import { Header } from "@/components/portfolio/Header";
import { AvailabilityBar } from "@/components/portfolio/AvailabilityBar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesGrid } from "@/components/portfolio/ServicesGrid";
import { PricingSection } from "@/components/portfolio/PricingSection";
import { ProjectCarousel } from "@/components/portfolio/ProjectCarousel";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { ResourcesSection } from "@/components/portfolio/ResourcesSection";
import { FAQSection } from "@/components/portfolio/FAQSection";
import { ClosingSection } from "@/components/portfolio/ClosingSection";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppButton } from "@/components/portfolio/WhatsAppButton";
import { ChatBotWidget } from "@/components/portfolio/ChatBotWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0D0B]">
      <Header />
      <AvailabilityBar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <PricingSection />
        <ProjectCarousel />
        <TestimonialsSection />
        <ResourcesSection />
        <FAQSection />
        <ClosingSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBotWidget />
    </div>
  );
}
