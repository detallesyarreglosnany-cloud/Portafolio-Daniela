"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

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
        {Array.from({ length: 12 }).map((_, i) => (
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="relative pulse-glow rounded-full">
            <Image
              src="/images/daniela-perfil.png"
              alt="Daniela Silva - Estratega Digital"
              width={200}
              height={200}
              className="rounded-full border-2 border-[#C9A84C] object-cover w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="gold-shimmer font-serif text-5xl md:text-7xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
        >
          Daniela Silva
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#C9A84C] text-lg md:text-2xl font-medium tracking-wide mb-6"
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

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-glow-border inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0B] font-bold px-8 py-3 rounded-lg text-sm uppercase tracking-wider hover:bg-[#E8D48B] transition-colors"
          >
            Ver Proyectos
            <ArrowDown size={16} />
          </a>
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-bold px-8 py-3 rounded-lg text-sm uppercase tracking-wider hover:bg-[#C9A84C] hover:text-[#0F0D0B] transition-all"
          >
            Contactar
            <MessageCircle size={16} />
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
