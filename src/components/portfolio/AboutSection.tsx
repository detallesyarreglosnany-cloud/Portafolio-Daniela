"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, Award, Heart } from "lucide-react";

const highlights = [
  {
    icon: <MapPin size={20} />,
    title: "Alcance Internacional",
    desc: "Venezuela, Colombia, Perú, EE.UU.",
  },
  {
    icon: <Briefcase size={20} />,
    title: "+8 Años de Experiencia",
    desc: "Estrategia digital y ventas con IA",
  },
  {
    icon: <Award size={20} />,
    title: "50+ Proyectos Entregados",
    desc: "Resultados comprobados y medibles",
  },
  {
    icon: <Heart size={20} />,
    title: "Misión",
    desc: "Que toda mujer emprendedora acceda a la IA",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#C9A84C]/3 rounded-full blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl border border-[#C9A84C]/20" />
              <div className="absolute -inset-2 rounded-2xl border border-[#C9A84C]/10" />

              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/daniela-perfil.png"
                  alt="Daniela Silva - Estratega Digital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1A1714] border border-[rgba(201,168,76,0.3)] rounded-xl p-4 shadow-2xl">
                <div
                  className="font-serif text-3xl font-bold text-[#C9A84C]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  8+
                </div>
                <div className="text-[#8A8278] text-xs uppercase tracking-wider">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
              Sobre Mí
            </span>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-[#E8E0D4] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Transformando negocios con{" "}
              <span className="text-[#C9A84C]">Inteligencia Artificial</span>
            </h2>
            <div className="space-y-4 text-[#8A8278] text-sm md:text-base leading-relaxed mb-8">
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
                presupuestos millonarios. Creo firmemente que la tecnología debe estar al
                servicio del negocio, no al revés.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A1714] rounded-xl p-4 border border-[rgba(201,168,76,0.1)] hover:border-[#C9A84C]/30 transition-colors duration-300"
                >
                  <div className="text-[#C9A84C] mb-2">{item.icon}</div>
                  <div className="text-[#E8E0D4] font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-[#8A8278] text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
