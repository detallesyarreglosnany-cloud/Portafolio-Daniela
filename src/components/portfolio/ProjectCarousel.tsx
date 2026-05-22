"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ExternalLink, MessageCircle } from "lucide-react";

const projects = [
  {
    image: "/images/proj-tugorra.png",
    title: "Tugorra.com",
    shortDesc: "Tienda de gorras de Venezuela",
    fullDesc:
      "Tienda online de gorras 100% venezolanas con estilo limpio en blanco y negro. Catálogo de 12 modelos exclusivos con ventas al mayor y detal desde $8. Plataforma optimizada para conversión con carrito de compras, pasarela de pago integrada y gestión de inventario automatizada.",
    link: "https://tugorra.com",
    tags: ["E-Commerce", "Marketplace", "Inventario"],
  },
  {
    image: "/images/proj-ferreandes.png",
    title: "Ferreandes",
    shortDesc: "Marketplace de ferretería",
    fullDesc:
      "Marketplace de ferretería con identidad visual inspirada en los Andes venezolanos. Categorías organizadas: Herramientas, Electricidad, Hogar, Niños y Construcción. Sistema de búsqueda avanzada, cotizaciones en línea y catálogo digital interactivo con más de 200 productos.",
    link: "#",
    tags: ["Marketplace", "Categorías", "Búsqueda"],
  },
  {
    image: "/images/proj-calculadora.png",
    title: "Calculadora Día a Día",
    shortDesc: "Widget de conversión de divisas",
    fullDesc:
      "Widget funcional y de alta precisión que convierte Dólares y Euros a Bolívares usando la tasa oficial del Banco Central de Venezuela en tiempo real. Herramienta de marketing que genera tráfico orgánico recurrente y posiciona la marca como referencia en el sector financiero.",
    link: "#",
    tags: ["Herramienta IA", "API BCV", "Tráfico Orgánico"],
  },
  {
    image: "/images/proj-whatsapp-bot.png",
    title: "WhatsApp Bot Demo",
    shortDesc: "Bot de ventas automatizado",
    fullDesc:
      "Bot inteligente que atiende consultas sobre edición de videos con IA, genera presupuestos personalizados automáticamente, calcula tiempos de entrega según la complejidad del proyecto y cierra ventas sin intervención humana. Incluye CRM integrado y seguimiento de clientes.",
    link: "#",
    tags: ["Bot WhatsApp", "CRM", "Venta Automática"],
  },
  {
    image: "/images/proj-invitaciones.png",
    title: "Invitaciones Digitales",
    shortDesc: "Diseños elegantes para eventos",
    fullDesc:
      "Plataforma de invitaciones digitales elegantes para eventos especiales. Diseños personalizados con animaciones interactivas, confirmación de asistencia en tiempo real, galería de fotos del evento y integración con redes sociales para máxima viralidad.",
    link: "https://invitacionshariksofia.lovable.app",
    tags: ["Diseño", "Animaciones", "Interactivo"],
  },
  {
    image: "/images/proj-agendamiento.png",
    title: "Agendamiento Real",
    shortDesc: "Calendario de citas automáticas",
    fullDesc:
      "Sistema completo de agendamiento con interfaz de calendario intuitiva integrada directamente con Google Calendar. Confirmación automática por WhatsApp, recordatorios inteligentes configurables, gestión de disponibilidad y panel administrativo para el profesional.",
    link: "#",
    tags: ["Agendamiento", "Google Calendar", "WhatsApp"],
  },
  {
    image: "/images/proj-ana-alicia.png",
    title: "Ana Alicia Nieves",
    shortDesc: "Landing para abogada",
    fullDesc:
      "Landing page profesional para abogada con más de 30 años de experiencia. Especialidades destacadas: Compra-Venta, Derecho Sucesoral y Constitución de Empresas. Sistema de agendamiento de consultas ($30) integrado con WhatsApp y formulario de contacto inteligente.",
    link: "#",
    tags: ["Landing Page", "Agendamiento", "Legal"],
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
            Portafolio
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-[#8A8278] max-w-xl mx-auto text-sm">
            Cada proyecto es un sistema de ventas funcional. No solo diseño bonito: resultados comprobados.
          </p>
        </motion.div>
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
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] to-transparent opacity-50" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[#E8E0D4] font-bold text-lg mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8A8278] text-sm mb-3">{project.shortDesc}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#0F0D0B] border border-[rgba(201,168,76,0.1)] text-[#8A8278]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-xs font-bold uppercase tracking-wider border border-[#C9A84C]/30 px-4 py-1.5 rounded-md group-hover:bg-[#C9A84C] group-hover:text-[#0F0D0B] transition-all duration-300">
                    Ver Detalles
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

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#0F0D0B] border border-[rgba(201,168,76,0.15)] text-[#C9A84C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#E8E0D4] leading-relaxed mb-6 text-sm">
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
                    <MessageCircle size={16} />
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
