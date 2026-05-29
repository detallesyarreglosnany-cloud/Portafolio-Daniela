"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-14 md:py-20 grid-pattern" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6B7F4E]/3 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-14 h-14 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/25 flex items-center justify-center">
            <Sparkles size={24} className="text-[#6B7F4E]" />
          </div>
        </motion.div>

        <blockquote
          className="font-serif text-xl md:text-3xl lg:text-4xl text-[#E2D9CC] italic leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          &ldquo;La Inteligencia Artificial cambió el mundo para siempre.{" "}
          <span className="text-[#6B7F4E]">Hoy puedes vender más y trabajar menos</span>{" "}
          si te apoyas en ella.&rdquo;
        </blockquote>

        <p className="text-[#9A8E80] text-sm md:text-base mb-4 max-w-2xl mx-auto">
          Uso plataformas actualizadas para llevar tu negocio al siguiente nivel.
          Cada sistema que implemento está diseñado para generar resultados reales y medibles.
        </p>

        <div className="inline-flex items-center gap-2 bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[#8FA36E] text-xs font-medium">
            Plazas limitadas este mes
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mega btn-tech-primary inline-flex items-center gap-3 text-[#E2D9CC] font-bold px-8 py-3.5 rounded-xl text-base uppercase tracking-wider"
          >
            <MessageCircle size={20} />
            Contactar a Daniela
          </a>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#6B7F4E] font-semibold text-sm hover:text-[#8FA36E] transition-colors"
          >
            Ver servicios
            <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
