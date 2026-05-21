"use client";

import { CountdownBar } from "@/components/landing/CountdownBar";
import { SocialProofBar } from "@/components/landing/SocialProofBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainSection } from "@/components/landing/PainSection";
import { WhoIAmSection } from "@/components/landing/WhoIAmSection";
import { AgitationSection } from "@/components/landing/AgitationSection";
import { CalculatorSection } from "@/components/landing/CalculatorSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { QueRecibirasSection } from "@/components/landing/QueRecibirasSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { RankingSection } from "@/components/landing/RankingSection";
import { QuizSection } from "@/components/landing/QuizSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Reto21DiasSection } from "@/components/landing/Reto21DiasSection";
import { Promo3en1Section } from "@/components/landing/Promo3en1Section";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { SocialProofToast } from "@/components/landing/SocialProofToast";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0D0B]">
      <CountdownBar />
      <SocialProofBar />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <WhoIAmSection />
        <AgitationSection />
        <CalculatorSection />
        <BenefitsSection />
        <QueRecibirasSection />
        <TestimonialsSection />
        <RankingSection />
        <QuizSection />
        <FinalCTA />
        <Reto21DiasSection />
        <Promo3en1Section />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialProofToast />
    </div>
  );
}
