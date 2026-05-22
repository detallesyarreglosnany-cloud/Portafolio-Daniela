"use client";

import { motion } from "framer-motion";
import { Camera, ArrowDown, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

/* Floating particles */
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#39FF14]/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <Particles />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Photo placeholder */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full bg-[#1A1A1A] border-2 border-[#39FF14]/40 neon-glow flex items-center justify-center overflow-hidden">
              <Camera className="w-12 h-12 text-[#39FF14]/50" />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-[#39FF14]/10 animate-pulse" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#F5F5F5] mb-4 tracking-tight"
        >
          Daniela Silva
        </motion.h1>

        {/* Subtitle with shimmer */}
        <motion.p
          variants={itemVariants}
          className="neon-shimmer text-xl sm:text-2xl md:text-3xl font-semibold mb-6 tracking-wide"
        >
          Estratega Digital &amp; Ventas con IA
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[#888888] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
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
            className="btn-neon-glow bg-[#39FF14] text-[#0A0A0A] font-bold px-8 py-3.5 rounded-lg text-base sm:text-lg hover:bg-[#7FFF5E] transition-colors duration-300 flex items-center gap-2"
          >
            Ver Proyectos
            <ArrowDown className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#39FF14]/40 text-[#39FF14] font-bold px-8 py-3.5 rounded-lg text-base sm:text-lg hover:bg-[#39FF14]/10 hover:border-[#39FF14] transition-all duration-300 flex items-center gap-2"
          >
            Contactar
            <MessageCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#39FF14]/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-[#39FF14]/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
