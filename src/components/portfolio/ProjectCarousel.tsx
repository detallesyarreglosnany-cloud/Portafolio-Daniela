"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/images/proj-tugorra.png",
    title: "Tugorra.com",
    shortDesc: "Tienda de gorras de Venezuela",
    fullDesc:
      "Tienda de gorras de Venezuela. Estilo limpio, blanco/negro. 12 modelos, ventas al mayor y detal desde $8.",
    link: "https://tugorra.com",
  },
  {
    image: "/images/proj-ferreandes.png",
    title: "Ferreandes",
    shortDesc: "Marketplace de ferretería",
    fullDesc:
      "Marketplace de ferretería con fondo de los Andes. Categorías: Herramientas, Electricidad, Hogar, Niños, Construcción.",
    link: "#",
  },
  {
    image: "/images/proj-calculadora.png",
    title: "Calculadora Día a Día",
    shortDesc: "Widget de conversión de divisas",
    fullDesc:
      "Widget funcional que convierte Dólares y Euros a Bolívares usando la tasa del Banco Central de Venezuela.",
    link: "#",
  },
  {
    image: "/images/proj-whatsapp-bot.png",
    title: "WhatsApp Bot Demo",
    shortDesc: "Bot de ventas automatizado",
    fullDesc:
      "Bot que responde sobre edición de videos con IA, genera presupuesto y tiempo de entrega automáticamente.",
    link: "#",
  },
  {
    image: "/images/proj-invitaciones.png",
    title: "Invitaciones Digitales",
    shortDesc: "Diseños elegantes para eventos",
    fullDesc:
      "Diseños elegantes para eventos especiales.",
    link: "https://invitacionshariksofia.lovable.app",
  },
  {
    image: "/images/proj-agendamiento.png",
    title: "Agendamiento Real",
    shortDesc: "Calendario de citas automáticas",
    fullDesc:
      "Interfaz de calendario para citas automáticas integrada con Google Calendar.",
    link: "#",
  },
  {
    image: "/images/proj-ana-alicia.png",
    title: "Ana Alicia Nieves",
    shortDesc: "Landing para abogada",
    fullDesc:
      "Landing para Abogada con +30 años de experiencia. Compra-Venta, Derecho Sucesoral, Constitución de Empresas. Consulta: $30.",
    link: "#",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <h2
          className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Proyectos
        </h2>
        <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full" />
      </div>

      {/* Carousel */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="overflow-hidden">
          <div className="carousel-scroll flex gap-6 w-max">
            {/* Double the cards for infinite scroll effect */}
            {[...projects, ...projects].map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex-shrink-0 w-[280px] sm:w-[320px] bg-[#1A1714] rounded-xl overflow-hidden border border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(projects[idx % projects.length])}
              >
                {/* Project Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] to-transparent opacity-50" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[#E8E0D4] font-bold text-lg mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8A8278] text-sm mb-4">{project.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-xs font-bold uppercase tracking-wider border border-[#C9A84C]/30 px-4 py-1.5 rounded-md group-hover:bg-[#C9A84C] group-hover:text-[#0F0D0B] transition-all duration-300">
                    Ver Proyecto
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#1A1714] rounded-2xl max-w-lg w-full overflow-hidden border border-[rgba(201,168,76,0.3)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 text-[#8A8278] hover:text-[#C9A84C] transition-colors bg-[#0F0D0B]/60 rounded-full p-1"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-serif text-2xl md:text-3xl font-bold text-[#C9A84C] mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {selectedProject.title}
                </h3>
                <p className="text-[#E8E0D4] leading-relaxed mb-6">
                  {selectedProject.fullDesc}
                </p>
                <div className="flex gap-3">
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0B] font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-[#E8D48B] transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visitar
                    </a>
                  )}
                  <a
                    href="https://wa.me/584221754245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-[#C9A84C] hover:text-[#0F0D0B] transition-all"
                  >
                    Cotizar Similar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
