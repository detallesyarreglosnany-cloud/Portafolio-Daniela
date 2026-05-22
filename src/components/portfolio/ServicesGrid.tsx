"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    image: "/images/srv-web.png",
    title: "Páginas Web, Catálogos & Marketplaces",
    description:
      "Diseño y desarrollo de tiendas online, catálogos digitales y marketplaces que venden 24/7.",
  },
  {
    image: "/images/srv-calculadora.png",
    title: "Calculadoras Digitales Dinámicas",
    description:
      "Herramientas interactivas como calculadoras de cambio BCV que atraen y convierten visitantes.",
  },
  {
    image: "/images/srv-chatbot.png",
    title: "Chatbots Persuasivos",
    description:
      "Bots inteligentes para Web y WhatsApp que responden, venden y agendan en tiempo real.",
  },
  {
    image: "/images/srv-contenido-ia.png",
    title: "Creación de Contenido con IA",
    description:
      "Imágenes, videos, avatares hiperrealistas y contenido que posiciona tu marca.",
  },
  {
    image: "/images/srv-social-ads.png",
    title: "Social Media Ads & Optimización",
    description:
      "Campañas publicitarias en Instagram, Facebook, TikTok, YouTube y Google con Business Manager.",
  },
  {
    image: "/images/srv-agendamiento.png",
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
      staggerChildren: 0.12,
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

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-20 md:py-28 px-4 relative">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Servicios
        </h2>
        <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full" />
      </div>

      {/* Services Grid */}
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="group relative bg-[#1A1714] rounded-xl overflow-hidden border border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]/50 transition-all duration-500"
          >
            {/* Gold left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Service Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-[#E8E0D4] font-bold text-lg mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#8A8278] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
