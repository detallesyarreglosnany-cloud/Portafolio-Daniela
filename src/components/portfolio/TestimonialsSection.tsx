"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  country: string;
  flag: string;
  text: string;
  service: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carolina M.",
    country: "Venezuela",
    flag: "🇻🇪",
    text: "Daniela transformó mi tienda. En 2 semanas vendía más online que en la física.",
    service: "Marketplace + Bot",
    rating: 5,
    avatar: "/images/test-carolina.png",
  },
  {
    name: "James R.",
    country: "EE.UU.",
    flag: "🇺🇸",
    text: "Su chatbot aumentó mi conversión 340% en el primer mes. Game-changing.",
    service: "AI Chatbot",
    rating: 5,
    avatar: "/images/test-james.png",
  },
  {
    name: "María F.",
    country: "Colombia",
    flag: "🇨🇴",
    text: "La asesoría fue la mejor inversión. 31 días y ya vendía automático.",
    service: "Asesoría 1:1",
    rating: 5,
    avatar: "/images/test-maria.png",
  },
  {
    name: "Sarah T.",
    country: "Canadá",
    flag: "🇨🇦",
    text: "La integración omnichannel me ahorra 20+ horas semanales. Brillante.",
    service: "Omnichannel",
    rating: 5,
    avatar: "/images/test-sarah.png",
  },
  {
    name: "Ricardo H.",
    country: "Perú",
    flag: "🇵🇪",
    text: "MiniApp que sincroniza con Calendar y envía recordatorios. Cero citas perdidas.",
    service: "MiniApp",
    rating: 5,
    avatar: "/images/test-ricardo.png",
  },
  {
    name: "Emily C.",
    country: "EE.UU.",
    flag: "🇺🇸",
    text: "12K shares en 48 horas con su blueprint viral. Ella sabe lo que hace.",
    service: "Campañas Virales",
    rating: 5,
    avatar: "/images/test-emily.png",
  },
  {
    name: "Ana K.",
    country: "Venezuela",
    flag: "🇻🇪",
    text: "Contenido IA de nivel hollywoodense. Mis TikTok pasaron de 200 a 15K vistas.",
    service: "Contenido IA",
    rating: 5,
    avatar: "/images/test-anak.png",
  },
  {
    name: "David M.",
    country: "Colombia",
    flag: "🇨🇴",
    text: "Mentorship transformadora. A las 8 semanas ya facturaba online.",
    service: "Mentorship",
    rating: 5,
    avatar: "/images/test-david.png",
  },
  {
    name: "Lisa M.",
    country: "Reino Unido",
    flag: "🇬🇧",
    text: "Agentes IA manejan 90% de consultas. Satisfacción 4.9/5.",
    service: "Agentes IA",
    rating: 5,
    avatar: "/images/test-lisa.png",
  },
  {
    name: "Gabriela T.",
    country: "México",
    flag: "🇲🇽",
    text: "Encontró 3 problemas que me costaban $2,000/mes en ventas perdidas.",
    service: "Auditoría",
    rating: 5,
    avatar: "/images/test-gabriela.png",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="testimonios" className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
            Lo que dicen mis clientes
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Testimonios
          </h2>
          <div className="w-16 h-0.5 bg-[#6B7F4E] mx-auto rounded-full" />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overflow-hidden">
          <div className="testimonial-marquee flex gap-4 w-max">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={idx}
                className="group flex-shrink-0 w-[200px] bg-[#1E1B16] rounded-xl border border-[rgba(107,127,78,0.1)] hover:border-[#6B7F4E]/30 transition-all duration-300 p-3.5 flex flex-col items-center text-center"
              >
                {/* Circular avatar with real AI photo */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#4A5A35] via-[#6B7F4E] to-[#8FA36E] p-[2px] mb-2.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1E1B16]">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-[#E2D9CC] font-semibold text-[11px] mb-0.5">
                  {testimonial.name}
                </h4>

                <span className="text-[#9A8E80] text-[9px] mb-1.5">
                  {testimonial.flag} {testimonial.country}
                </span>

                <div className="flex gap-0.5 mb-1.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-[#6B7F4E]" fill="currentColor" />
                  ))}
                </div>

                <p className="text-[#9A8E80] text-[10px] leading-relaxed mb-2 line-clamp-3">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <span className="text-[8px] px-2 py-0.5 rounded-full bg-[#0F0D0B] border border-[rgba(107,127,78,0.12)] text-[#6B7F4E]">
                  {testimonial.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
