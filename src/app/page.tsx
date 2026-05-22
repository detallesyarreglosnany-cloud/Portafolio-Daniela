"use client";

import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesGrid from "@/components/portfolio/ServicesGrid";
import ProjectCarousel from "@/components/portfolio/ProjectCarousel";
import ClosingSection from "@/components/portfolio/ClosingSection";
import Footer from "@/components/portfolio/Footer";
import WhatsAppButton from "@/components/portfolio/WhatsAppButton";
import ChatBotWidget from "@/components/portfolio/ChatBotWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <ProjectCarousel />
        <ClosingSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBotWidget />
    </div>
  );
}
