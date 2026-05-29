"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="olive-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B7F4E]/4 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="relative">
            {/* Outer ring glow */}
            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-[#4A5A35] via-[#6B7F4E] to-[#8FA36E] opacity-20 blur-md animate-pulse-scale" />
            {/* Border ring */}
            <div className="relative pulse-glow rounded-full p-1 bg-gradient-to-br from-[#4A5A35] via-[#6B7F4E] to-[#8FA36E]">
              <Image
                src="/images/daniela-perfil.png"
                alt="Daniela Silva - Estratega Digital & Ventas con IA"
                width={200}
                height={200}
                className="rounded-full object-cover w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] border-4 border-[#0F0D0B]"
                priority
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#6B7F4E] text-[#E2D9CC] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
              <Sparkles size={12} className="inline mr-1" />
              Estratega Digital
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1
            className="olive-shimmer font-serif text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            Daniela Silva
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 my-5">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#6B7F4E]" />
          <Star size={12} className="text-[#6B7F4E]" fill="currentColor" />
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#6B7F4E]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#6B7F4E] text-sm sm:text-base md:text-xl font-medium tracking-widest uppercase mb-5"
        >
          Estratega Digital &amp; Ventas con IA
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[#9A8E80] text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8"
        >
          +8 años de trayectoria internacional (Venezuela, Colombia, Perú, EE.UU.).
          Sistemas de ventas automáticos mediante Inteligencia Artificial.
          Transformo negocios tradicionales en máquinas de facturación digital.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 sm:gap-10 mb-8"
        >
          {[
            { value: "8+", label: "Años" },
            { value: "50+", label: "Proyectos" },
            { value: "4", label: "Países" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div
                className="font-serif text-3xl sm:text-4xl font-bold text-[#6B7F4E]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[#9A8E80] text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-tech-primary inline-flex items-center gap-2 text-[#E2D9CC] font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider"
          >
            Ver Servicios
            <ArrowDown size={16} />
          </a>
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tech inline-flex items-center gap-2 text-[#8FA36E] font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider"
          >
            <MessageCircle size={16} />
            Contactar
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-[#6B7F4E]/30" size={24} />
      </motion.div>
    </section>
  );
}
