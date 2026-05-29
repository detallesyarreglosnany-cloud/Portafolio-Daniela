"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, Crown, Rocket, ArrowRight, MessageCircle, Plus, CheckCircle2 } from "lucide-react";
import { useCart } from "./CartContext";

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Impulso",
    icon: <Rocket size={22} />,
    price: "Desde $197",
    priceValue: 197,
    description: "Para emprendedores que quieren arrancar con fuerza en el mundo digital.",
    features: [
      "Página de Ventas Premium",
      "Bot WhatsApp Básico (50 consultas/día)",
      "Contenido IA: 10 piezas gráficas",
      "Configuración de RRSS",
      "30 días de soporte incluido",
    ],
    cta: "Comenzar Ahora",
  },
  {
    name: "Crecimiento",
    icon: <Crown size={22} />,
    price: "Desde $497",
    priceValue: 497,
    description: "Para negocios que ya venden y quieren escalar con automatización inteligente.",
    features: [
      "Marketplace completo (100 productos)",
      "Bot WhatsApp Pro + CRM",
      "Contenido IA: 30 piezas + 3 videos",
      "Gestión de RRSS 1 mes",
      "Integración Omnichannel",
      "Asesoría Estratégica (2 sesiones)",
      "60 días de soporte incluido",
    ],
    cta: "Elegir Crecimiento",
    popular: true,
  },
  {
    name: "Dominio",
    icon: <Star size={22} />,
    price: "Desde $997",
    priceValue: 997,
    description: "Ecosistema digital completo con IA avanzada. Máxima automatización.",
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
  },
];

function getWhatsAppLink(planName: string, price: string) {
  const msg = encodeURIComponent(
    `Hola Daniela! Me interesa el plan: ${planName} (${price}). Me gustaría más información y comenzar. Gracias!`
  );
  return `https://wa.me/584221754245?text=${msg}`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { addItem, removeItem, items } = useCart();

  return (
    <section id="planes" className="py-10 md:py-14 relative overflow-hidden sand-texture">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
            Inversión
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-2 neon-subtitle"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Planes &amp; Paquetes
          </h2>
          <div className="w-16 h-0.5 bg-[#6B7F4E] mx-auto rounded-full mb-3" />
          <p className="text-[#9A8E80] max-w-xl mx-auto text-sm">
            Combina servicios y ahorra. Cada plan diseñado para una etapa específica de tu negocio.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tiers.map((tier, idx) => {
            const cartItemId = `plan-${tier.name}`;
            const isInCart = items.some((i) => i.id === cartItemId);

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`relative group rounded-xl overflow-hidden transition-all duration-500 ${
                  tier.popular
                    ? "border-[#6B7F4E] bg-[#1E1B16] shadow-[0_0_30px_rgba(107,127,78,0.12)]"
                    : "border-[rgba(107,127,78,0.12)] bg-[#1E1B16] hover:border-[#6B7F4E]/35"
                } ${isInCart ? "service-selected" : ""} border`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A5A35] via-[#6B7F4E] to-[#8FA36E]" />
                )}

                <div className="relative p-6">
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                      isInCart
                        ? "bg-[#6B7F4E] border-[#8FA36E] text-[#0F0D0B]"
                        : "bg-[#6B7F4E]/10 border-[#6B7F4E]/20 text-[#6B7F4E]"
                    }`}>
                      {tier.icon}
                    </div>
                    <div>
                      <h3 className="text-[#E2D9CC] font-bold text-lg neon-subtitle">{tier.name}</h3>
                      {tier.popular && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#6B7F4E] text-[#E2D9CC] font-bold uppercase tracking-wider">
                          Más Elegido
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price with neon glow */}
                  <div className="mb-3">
                    <span
                      className="font-serif text-3xl font-bold text-[#8FA36E] neon-price"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-[#9A8E80] text-[10px] ml-2">USD</span>
                  </div>

                  {/* Description */}
                  <p className="text-[#9A8E80] text-xs leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#6B7F4E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={10} className="text-[#6B7F4E]" />
                        </div>
                        <span className="text-[#E2D9CC] text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5">
                    <a
                      href={getWhatsAppLink(tier.name, tier.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                        tier.popular
                          ? "btn-tech-primary text-[#E2D9CC]"
                          : "btn-tech text-[#8FA36E]"
                      }`}
                    >
                      <MessageCircle size={14} />
                      {tier.cta}
                      <ArrowRight size={14} />
                    </a>
                    <button
                      onClick={() => {
                        if (isInCart) {
                          removeItem(cartItemId);
                        } else {
                          addItem({
                            id: cartItemId,
                            title: `Plan ${tier.name}`,
                            price: tier.price,
                            priceValue: tier.priceValue,
                            type: "plan",
                          });
                        }
                      }}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl font-medium text-[10px] uppercase tracking-wider transition-all duration-300 ${
                        isInCart
                          ? "bg-[#6B7F4E] text-[#0F0D0B] border border-[#8FA36E]"
                          : "btn-tech text-[#9A8E80]"
                      }`}
                      style={isInCart ? { boxShadow: "0 0 10px rgba(107, 127, 78, 0.4)" } : {}}
                    >
                      {isInCart ? <CheckCircle2 size={12} /> : <Plus size={12} />}
                      {isInCart ? "En el Carrito" : "Agregar al Carrito"}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom note */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[#9A8E80] text-xs">
            ¿Necesitas algo personalizado?{" "}
            <a
              href="https://wa.me/584221754245?text=Hola%20Daniela!%20Necesito%20un%20plan%20personalizado.%20Me%20gustar%C3%ADa%20armar%20algo%20a%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7F4E] hover:text-[#8FA36E] font-semibold underline underline-offset-4 transition-colors neon-subtitle"
            >
              Hablemos y armamos tu plan a medida
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
