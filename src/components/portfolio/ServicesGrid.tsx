"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Calculator,
  MessageCircle,
  Sparkles,
  Megaphone,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web, Catálogos & Marketplaces",
    description:
      "Diseño y desarrollo de tiendas online, catálogos digitales y marketplaces que venden 24/7.",
  },
  {
    icon: Calculator,
    title: "Calculadoras Digitales Dinámicas",
    description:
      "Herramientas interactivas como calculadoras de cambio BCV que atraen y convierten visitantes.",
  },
  {
    icon: MessageCircle,
    title: "Chatbots Persuasivos",
    description:
      "Bots inteligentes para Web y WhatsApp que responden, venden y agendan en tiempo real.",
  },
  {
    icon: Sparkles,
    title: "Creación de Contenido con IA",
    description:
      "Imágenes, videos, avatares hiperrealistas y contenido que posiciona tu marca.",
  },
  {
    icon: Megaphone,
    title: "Social Media Ads & Optimización",
    description:
      "Campañas publicitarias en Instagram, Facebook, TikTok, YouTube y Google con Business Manager.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamiento Automatizado",
    description:
      "Sistema de citas con Google Calendar que elimina la fricción y llena tu agenda.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-[#39FF14] mx-auto rounded-full neon-text-glow" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(57, 255, 20, 0.5)",
                  transition: { duration: 0.3 },
                }}
                className="bg-[#141414] border border-[rgba(57,255,20,0.1)] rounded-xl p-6 sm:p-8 group cursor-default hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center mb-5 group-hover:bg-[#39FF14]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#39FF14]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
