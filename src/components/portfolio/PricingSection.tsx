"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Star, Crown, Rocket, Eye, EyeOff, ArrowRight } from "lucide-react";

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  gradient: string;
}

const tiers: PricingTier[] = [
  {
    name: "Impulso",
    icon: <Rocket size={24} />,
    price: "Desde $197",
    description: "Para emprendedores que quieren arrancar con fuerza en el mundo digital. Incluye lo esencial para vender online desde el día uno.",
    features: [
      "Página de Ventas Premium",
      "Bot WhatsApp Básico (50 consultas/día)",
      "Contenido IA: 10 piezas gráficas",
      "Configuración de RRSS",
      "30 días de soporte incluido",
    ],
    cta: "Comenzar Ahora",
    gradient: "from-[#C9A84C]/20 to-[#A08030]/10",
  },
  {
    name: "Crecimiento",
    icon: <Crown size={24} />,
    price: "Desde $497",
    description: "Para negocios que ya venden y quieren escalar con automatización inteligente. El pack más elegido por mis clientes.",
    features: [
      "Marketplace completo (100 productos)",
      "Bot WhatsApp Pro (ilimitado) + CRM",
      "Contenido IA: 30 piezas + 3 videos",
      "Gestión de RRSS 1 mes",
      "Integración Omnichannel",
      "Asesoría Estratégica (2 sesiones)",
      "60 días de soporte incluido",
    ],
    cta: "Elegir Crecimiento",
    popular: true,
    gradient: "from-[#C9A84C]/30 to-[#E8D48B]/10",
  },
  {
    name: "Dominio",
    icon: <Star size={24} />,
    price: "Desde $997",
    description: "Para quienes quieren un ecosistema digital completo con IA avanzada. Máxima automatización, máximos resultados.",
    features: [
      "Todo del pack Crecimiento",
      "Agente IA Personalizado",
      "MiniApp Especializada",
      "Blueprint de Campañas Virales",
      "Mentorship Grupal (14 semanas)",
      "Social Commerce configurado",
      "Automatización No-Code",
      "90 días de soporte + mantenimiento 3 meses",
    ],
    cta: "Dominar con IA",
    gradient: "from-[#C9A84C]/40 to-[#E8D48B]/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="planes" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A84C]/3 rounded-full blur-[150px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
            Inversión
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Planes & Paquetes
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-[#8A8278] max-w-xl mx-auto text-sm">
            Combina servicios y ahorra. Cada plan está diseñado para una etapa específica de tu negocio digital.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative group rounded-2xl overflow-hidden border transition-all duration-500 ${
                tier.popular
                  ? "border-[#C9A84C] bg-gradient-to-b from-[#1A1714] to-[#0F0D0B] shadow-[0_0_40px_rgba(201,168,76,0.15)]"
                  : "border-[rgba(201,168,76,0.15)] bg-[#1A1714] hover:border-[#C9A84C]/40"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] via-[#E8D48B] to-[#C9A84C]" />
              )}

              {/* Top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${tier.gradient} pointer-events-none`} />

              <div className="relative p-7">
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="text-[#E8E0D4] font-bold text-xl">{tier.name}</h3>
                    {tier.popular && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C9A84C] text-[#0F0D0B] font-bold uppercase tracking-wider">
                        Más Elegido
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className="font-serif text-4xl font-bold text-[#C9A84C]"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[#8A8278] text-xs ml-2">USD</span>
                </div>

                {/* Description */}
                <p className="text-[#8A8278] text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-[#C9A84C]" />
                      </div>
                      <span className="text-[#E8E0D4] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/584221754245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                    tier.popular
                      ? "btn-mega bg-[#C9A84C] text-[#0F0D0B] hover:bg-[#E8D48B]"
                      : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F0D0B]"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom note */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[#8A8278] text-sm">
            ¿Necesitas algo personalizado?{" "}
            <a
              href="https://wa.me/584221754245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:text-[#E8D48B] font-semibold underline underline-offset-4 transition-colors"
            >
              Hablemos y armamos tu plan a medida
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
