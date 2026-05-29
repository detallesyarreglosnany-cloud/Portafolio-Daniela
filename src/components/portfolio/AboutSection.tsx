"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, Award, Heart } from "lucide-react";

const highlights = [
  {
    icon: <MapPin size={18} />,
    title: "Alcance Internacional",
    desc: "Venezuela, Colombia, Perú, EE.UU.",
  },
  {
    icon: <Briefcase size={18} />,
    title: "+8 Años de Experiencia",
    desc: "Estrategia digital y ventas con IA",
  },
  {
    icon: <Award size={18} />,
    title: "50+ Proyectos Entregados",
    desc: "Resultados comprobados y medibles",
  },
  {
    icon: <Heart size={18} />,
    title: "Misión",
    desc: "Que toda mujer emprendedora acceda a la IA",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-10 md:py-14 relative overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#6B7F4E]/15" />

              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/daniela-perfil.png"
                  alt="Daniela Silva - Estratega Digital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-transparent to-transparent opacity-40" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#1E1B16] border border-[rgba(107,127,78,0.25)] rounded-xl p-3 shadow-2xl">
                <div
                  className="font-serif text-2xl font-bold text-[#6B7F4E]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  8+
                </div>
                <div className="text-[#9A8E80] text-[10px] uppercase tracking-wider">
                  Años de trayectoria
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
              Sobre Mí
            </span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Transformando negocios con{" "}
              <span className="text-[#6B7F4E]">Inteligencia Artificial</span>
            </h2>
            <div className="space-y-3 text-[#9A8E80] text-sm leading-relaxed mb-7">
              <p>
                Soy Daniela Silva, estratega digital con más de 8 años de trayectoria internacional
                ayudando a emprendedores y empresas a transformar sus negocios tradicionales en
                máquinas de facturación digital mediante Inteligencia Artificial.
              </p>
              <p>
                He trabajado con clientes en Venezuela, Colombia, Perú y Estados Unidos,
                implementando sistemas de ventas automáticos que trabajan 24/7, chatbots
                inteligentes que cierran ventas sin intervención humana, y estrategias de marketing
                digital que generan resultados medibles desde el primer mes.
              </p>
              <p>
                Mi misión es democratizar el acceso a la IA para que toda mujer emprendedora
                pueda competir en el mundo digital sin necesitar un equipo técnico completo ni
                presupuestos millonarios.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1E1B16] rounded-xl p-3.5 border border-[rgba(107,127,78,0.1)] hover:border-[#6B7F4E]/25 transition-colors duration-300"
                >
                  <div className="text-[#6B7F4E] mb-1.5">{item.icon}</div>
                  <div className="text-[#E2D9CC] font-semibold text-xs mb-0.5">{item.title}</div>
                  <div className="text-[#9A8E80] text-[10px]">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
