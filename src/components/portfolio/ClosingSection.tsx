"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-24 md:py-36 grid-pattern" ref={ref}>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative element */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
            <Sparkles size={28} className="text-[#C9A84C]" />
          </div>
        </motion.div>

        {/* Quote */}
        <blockquote
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#E8E0D4] italic leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          &ldquo;La Inteligencia Artificial cambió el mundo para siempre.{" "}
          <span className="text-[#C9A84C]">Hoy puedes vender más y trabajar menos</span>{" "}
          si te apoyas en ella.&rdquo;
        </blockquote>

        {/* Subtext */}
        <p className="text-[#8A8278] text-base md:text-lg mb-4 max-w-2xl mx-auto">
          Uso plataformas actualizadas para llevar tu negocio al siguiente nivel.
          Cada sistema que implemento está diseñado para generar resultados reales y medibles.
        </p>

        {/* Urgency */}
        <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-5 py-2 mb-10">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[#E8D48B] text-sm font-medium">
            Plazas limitadas este mes
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mega inline-flex items-center gap-3 bg-[#C9A84C] text-[#0F0D0B] font-bold px-10 py-4 rounded-xl text-lg uppercase tracking-wider hover:bg-[#E8D48B] transition-colors"
          >
            <MessageCircle size={22} />
            Contactar a Daniela
          </a>
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:text-[#E8D48B] transition-colors"
          >
            Ver servicios
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
