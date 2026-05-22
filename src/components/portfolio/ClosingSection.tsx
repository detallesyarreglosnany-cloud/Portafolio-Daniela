"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ClosingSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 relative grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] leading-snug mb-6">
            &ldquo;La Inteligencia Artificial cambió el mundo para siempre. Hoy
            puedes vender más y trabajar menos si te apoyas en ella.&rdquo;
          </blockquote>

          {/* Subtext */}
          <p className="text-[#888888] text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Uso plataformas actualizadas para llevar tu negocio al siguiente
            nivel.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/584221754245"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-glow inline-flex items-center gap-3 bg-[#39FF14] text-[#0A0A0A] font-bold px-8 sm:px-10 py-4 rounded-xl text-lg sm:text-xl hover:bg-[#7FFF5E] transition-colors duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar a Daniela
          </a>
        </motion.div>
      </div>
    </section>
  );
}
