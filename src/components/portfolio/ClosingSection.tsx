"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-20 md:py-32 grid-pattern" ref={ref}>
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Quote */}
        <blockquote
          className="font-serif text-2xl md:text-4xl text-[#E8E0D4] italic leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          &ldquo;La Inteligencia Artificial cambió el mundo para siempre. Hoy puedes vender más y
          trabajar menos si te apoyas en ella.&rdquo;
        </blockquote>

        {/* Subtext */}
        <p className="text-[#8A8278] text-base md:text-lg mb-10">
          Uso plataformas actualizadas para llevar tu negocio al siguiente nivel.
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/584221754245"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mega inline-flex items-center gap-3 bg-[#C9A84C] text-[#0F0D0B] font-bold px-10 py-4 rounded-xl text-lg uppercase tracking-wider hover:bg-[#E8D48B] transition-colors"
        >
          <MessageCircle size={22} />
          Contactar a Daniela
        </a>
      </motion.div>
    </section>
  );
}
