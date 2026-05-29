"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, TrendingUp, Zap, BookOpen, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: <Lightbulb size={22} />,
    title: "5 Formas de Usar IA en Tu Negocio Hoy",
    excerpt:
      "Descubre cómo implementar inteligencia artificial sin ser programadora. Desde chatbots hasta contenido automático, las herramientas que están cambiando las reglas del juego.",
    tag: "Guía Gratuita",
    readTime: "5 min",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Por Qué Tu Tienda No Vende (Y Cómo Solucionarlo)",
    excerpt:
      "El 90% de las tiendas online tienen los mismos 3 errores fatales. Te explico cuáles son y los pasos exactos para corregirlos esta misma semana.",
    tag: "Artículo",
    readTime: "7 min",
  },
  {
    icon: <Zap size={22} />,
    title: "WhatsApp Business: De 0 a 100 Ventas/Mes",
    excerpt:
      "El blueprint completo para convertir WhatsApp en tu mejor vendedor. Configuración, plantillas, secuencias de venta y el script de cierre que usan los top vendedores.",
    tag: "Blueprint",
    readTime: "10 min",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function ResourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
            <BookOpen size={12} />
            Recursos Gratuitos
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Aprende &amp; Crece
          </h2>
          <div className="w-16 h-0.5 bg-[#6B7F4E] mx-auto rounded-full mb-3" />
          <p className="text-[#9A8E80] max-w-xl mx-auto text-xs">
            Artículos, guías y blueprints gratuitos para que apliques hoy mismo en tu negocio.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#1E1B16] rounded-xl border border-[rgba(107,127,78,0.1)] hover:border-[#6B7F4E]/30 transition-all duration-300 p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 flex items-center justify-center text-[#6B7F4E] mb-4 group-hover:bg-[#6B7F4E] group-hover:text-[#0F0D0B] transition-all duration-300">
                {resource.icon}
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#6B7F4E] font-semibold uppercase tracking-wider">
                  {resource.tag}
                </span>
                <span className="text-[#9A8E80] text-[9px]">{resource.readTime} lectura</span>
              </div>

              <h3 className="text-[#E2D9CC] font-bold text-sm mb-2 group-hover:text-[#8FA36E] transition-colors duration-300 leading-tight">
                {resource.title}
              </h3>

              <p className="text-[#9A8E80] text-xs leading-relaxed flex-1 mb-4">
                {resource.excerpt}
              </p>

              <a
                href="https://wa.me/584221754245"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6B7F4E] text-xs font-semibold group-hover:gap-2.5 transition-all duration-300"
              >
                Leer Ahora
                <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
