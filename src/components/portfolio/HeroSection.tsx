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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="gold-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer ring glow */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] opacity-30 blur-md animate-pulse-scale" />
            {/* Border ring */}
            <div className="relative pulse-glow rounded-full p-1 bg-gradient-to-br from-[#C9A84C] via-[#E8D48B] to-[#C9A84C]">
              <Image
                src="/images/daniela-perfil.png"
                alt="Daniela Silva - Estratega Digital & Ventas con IA"
                width={200}
                height={200}
                className="rounded-full object-cover w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] border-4 border-[#0F0D0B]"
                priority
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0F0D0B] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
              <Sparkles size={12} className="inline mr-1" />
              Estratega Digital
            </div>
          </div>
        </motion.div>

        {/* Name - Elegant Typography */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1
            className="gold-shimmer font-serif text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none"
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
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 my-6">
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <Star size={14} className="text-[#C9A84C]" fill="currentColor" />
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#C9A84C] text-base sm:text-lg md:text-2xl font-medium tracking-widest uppercase mb-6"
        >
          Estratega Digital &amp; Ventas con IA
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[#8A8278] text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10"
        >
          +8 años de trayectoria internacional (Venezuela, Colombia, Perú, EE.UU.).
          Sistemas de ventas automáticos mediante Inteligencia Artificial.
          Transformo negocios tradicionales en máquinas de facturación digital.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 sm:gap-10 mb-10"
        >
          {[
            { value: "8+", label: "Años" },
            { value: "50+", label: "Proyectos" },
            { value: "4", label: "Países" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div
                className="font-serif text-3xl sm:text-4xl font-bold text-[#C9A84C]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[#8A8278] text-xs uppercase tracking-wider mt-1">
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
            className="btn-glow-border inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0B] font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider hover:bg-[#E8D48B] transition-colors"
          >
            Ver Servicios
            <ArrowDown size={16} />
          </a>
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0F0D0B] transition-all"
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
        <ArrowDown className="text-[#C9A84C]/40" size={24} />
      </motion.div>
    </section>
  );
}
