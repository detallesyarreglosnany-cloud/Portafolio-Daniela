"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote, MapPin } from "lucide-react";

interface Testimonial {
  name: string;
  country: string;
  flag: string;
  text: string;
  lang: "es" | "en";
  service: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carolina Mendoza",
    country: "Venezuela",
    flag: "🇻🇪",
    text: "Daniela transformó mi tienda por completo. En 2 semanas ya vendía más online que en la tienda física. Su bot de WhatsApp es increíble, cierra ventas solo.",
    lang: "es",
    service: "Marketplace + Bot WhatsApp",
    avatar: "/images/test-carolina.png",
    rating: 5,
  },
  {
    name: "James Richardson",
    country: "United States",
    flag: "🇺🇸",
    text: "I was skeptical about AI for my business, but Daniela's chatbot increased my conversion rate by 340% in the first month. Absolutely game-changing.",
    lang: "en",
    service: "AI Chatbot + Landing Page",
    avatar: "/images/test-james.png",
    rating: 5,
  },
  {
    name: "María Fernanda López",
    country: "Colombia",
    flag: "🇨🇴",
    text: "La asesoría 1:1 fue la mejor inversión. En 31 días tenía mi plan de negocios claro, mi contenido estratégico y mis primeras ventas automáticas. ¡100% recomendada!",
    lang: "es",
    service: "Asesoría Estratégica 1:1",
    avatar: "/images/test-maria.png",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    country: "Canada",
    flag: "🇨🇦",
    text: "The omnichannel integration Daniela set up saved me 20+ hours per week. Everything flows: WhatsApp, Instagram, email — one dashboard. Brilliant.",
    lang: "en",
    service: "Integración Omnichannel",
    avatar: "/images/test-sarah.png",
    rating: 5,
  },
  {
    name: "Ricardo Herrera",
    country: "Perú",
    flag: "🇵🇪",
    text: "Mi clínica necesitaba un sistema de agendamiento que funcionara solo. Daniela creó una MiniApp que sincroniza con Google Calendar y envía recordatorios por WhatsApp. Cero citas perdidas.",
    lang: "es",
    service: "MiniApp Especializada",
    avatar: "/images/test-ricardo.png",
    rating: 5,
  },
  {
    name: "Emily Chen",
    country: "United States",
    flag: "🇺🇸",
    text: "The viral campaign blueprint was worth every penny. Our launch got 12K shares in 48 hours. Daniela knows what makes content spread.",
    lang: "en",
    service: "Blueprint Campañas Virales",
    avatar: "/images/test-emily.png",
    rating: 5,
  },
  {
    name: "Ana Karina Díaz",
    country: "Venezuela",
    flag: "🇻🇪",
    text: "El contenido con IA que crea Daniela parece de producción hollywoodense. Mis videos de TikTok pasaron de 200 a 15K vistas. La IA bien usada es magia.",
    lang: "es",
    service: "Contenido IA + Edición",
    avatar: "/images/test-anak.png",
    rating: 5,
  },
  {
    name: "David Martínez",
    country: "Colombia",
    flag: "🇨🇴",
    text: "La mentorship grupal fue transformadora. No solo aprendí, sino que implementé cada semana con guía directa. A las 8 semanas ya facturaba online.",
    lang: "es",
    service: "Mentorship Grupal",
    avatar: "/images/test-david.png",
    rating: 5,
  },
  {
    name: "Lisa Morgan",
    country: "United Kingdom",
    flag: "🇬🇧",
    text: "Daniela's AI agents handle 90% of our customer inquiries now. Response time went from hours to seconds. Our satisfaction score jumped to 4.9/5.",
    lang: "en",
    service: "Agentes IA Personalizados",
    avatar: "/images/test-lisa.png",
    rating: 5,
  },
  {
    name: "Gabriela Torres",
    country: "México",
    flag: "🇲🇽",
    text: "La auditoría gratuita me abrió los ojos. Daniela encontró 3 problemas que me costaban $2,000 al mes en ventas perdidas. Los resolvimos en una semana.",
    lang: "es",
    service: "Auditoría de Ventas",
    avatar: "/images/test-gabriela.png",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#C9A84C]/3 rounded-full blur-[80px]" />
      </div>

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
            Lo que dicen mis clientes
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Testimonios
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-[#8A8278] max-w-xl mx-auto text-sm">
            Resultados reales de emprendedores y empresas en {testimonials.filter(t => t.lang === "es").length} países de habla hispana y anglosajona.
          </p>
        </motion.div>

        {/* Testimonials Grid - Circular Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#1A1714] rounded-2xl border border-[rgba(201,168,76,0.12)] hover:border-[#C9A84C]/40 transition-all duration-500 p-5 flex flex-col items-center text-center"
            >
              {/* Circular Avatar */}
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#1A1714] flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">{testimonial.flag}</span>
                  </div>
                </div>
                {/* Quote icon */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center">
                  <Quote size={10} className="text-[#0F0D0B]" />
                </div>
              </div>

              {/* Name & Country */}
              <h4 className="text-[#E8E0D4] font-semibold text-sm mb-1">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-1 text-[#8A8278] text-xs mb-3">
                <MapPin size={10} className="text-[#C9A84C]" />
                {testimonial.country}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#8A8278] text-xs leading-relaxed flex-1 mb-3 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Service badge */}
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#0F0D0B] border border-[rgba(201,168,76,0.15)] text-[#C9A84C] font-medium">
                {testimonial.service}
              </span>

              {/* Language indicator */}
              <span className="mt-2 text-[9px] uppercase tracking-wider text-[#8A8278]/60">
                {testimonial.lang === "es" ? "Español" : "English"}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
