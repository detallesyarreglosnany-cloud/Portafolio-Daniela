"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, TrendingUp, Zap, BookOpen, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: <Lightbulb size={24} />,
    title: "5 Formas de Usar IA en Tu Negocio Hoy",
    excerpt:
      "Descubre cómo implementar inteligencia artificial sin ser programadora. Desde chatbots hasta contenido automático, estas son las herramientas que están cambiando las reglas del juego para emprendedoras latinas.",
    tag: "Guía Gratuita",
    readTime: "5 min",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Por Qué Tu Tienda No Vende (Y Cómo Solucionarlo)",
    excerpt:
      "El 90% de las tiendas online tienen los mismos 3 errores fatales. Te explico cuáles son, por qué están matando tus ventas y los pasos exactos para corregirlos esta misma semana.",
    tag: "Artículo",
    readTime: "7 min",
  },
  {
    icon: <Zap size={24} />,
    title: "WhatsApp Business: De 0 a 100 Ventas/Mes",
    excerpt:
      "El blueprint completo para convertir WhatsApp en tu mejor vendedor. Configuración, plantillas de mensajes, secuencias de venta y el script de cierre que usan los top vendedores digitales.",
    tag: "Blueprint",
    readTime: "10 min",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ResourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen size={14} />
            Recursos Gratuitos
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Aprende & Crece
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-[#8A8278] max-w-xl mx-auto text-sm">
            Artículos, guías y blueprints gratuitos para que apliques hoy mismo en tu negocio.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#1A1714] rounded-2xl border border-[rgba(201,168,76,0.12)] hover:border-[#C9A84C]/40 transition-all duration-500 p-7 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] mb-5 group-hover:bg-[#C9A84C] group-hover:text-[#0F0D0B] transition-all duration-300">
                {resource.icon}
              </div>

              {/* Tag + Read time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] font-semibold uppercase tracking-wider">
                  {resource.tag}
                </span>
                <span className="text-[#8A8278] text-[10px]">{resource.readTime} lectura</span>
              </div>

              {/* Title */}
              <h3 className="text-[#E8E0D4] font-bold text-lg mb-3 group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight">
                {resource.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#8A8278] text-sm leading-relaxed flex-1 mb-5">
                {resource.excerpt}
              </p>

              {/* CTA */}
              <a
                href="https://wa.me/584221754245"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Leer Ahora
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
