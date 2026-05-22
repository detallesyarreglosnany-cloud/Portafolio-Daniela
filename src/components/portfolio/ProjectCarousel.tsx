"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, MessageCircle } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  gradient: string;
  externalLink?: string;
  whatsapp?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tugorra.com",
    shortDesc: "Tienda de gorras de Venezuela, blanco/negro, 12 modelos",
    fullDesc:
      "Tienda online de gorras venezolanas con catálogo de 12 modelos en blanco y negro. Diseño minimalista con carrito de compras integrado y pasarela de pago. Optimizada para conversión y experiencia móvil.",
    gradient: "from-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "Ferreandes",
    shortDesc: "Marketplace ferretería, categorías: Herramientas, Electricidad, Hogar",
    fullDesc:
      "Marketplace completo para ferretería con categorías organizadas: Herramientas, Electricidad y Hogar. Sistema de búsqueda avanzada, filtros por categoría y precio, carrito de compras y gestión de inventario en tiempo real.",
    gradient: "from-orange-900/50 to-red-900/50",
  },
  {
    id: 3,
    title: "Calculadora Día a Día",
    shortDesc: "Widget conversión Dólares/Euros a Bolívares",
    fullDesc:
      "Herramienta interactiva de conversión de divisas que transforma Dólares y Euros a Bolívares en tiempo real. Widget embebible con tasas actualizadas automáticamente, ideal para sitios web financieros y de comercio venezolano.",
    gradient: "from-green-900/50 to-emerald-900/50",
  },
  {
    id: 4,
    title: "WhatsApp Bot Demo",
    shortDesc: "Bot respondiendo sobre edición de videos con IA",
    fullDesc:
      "Chatbot de WhatsApp que responde automáticamente consultas sobre edición de videos con inteligencia artificial. Flujo conversacional persuasivo que califica leads, responde preguntas frecuentes y agenda demostraciones.",
    gradient: "from-green-800/50 to-green-900/50",
  },
  {
    id: 5,
    title: "Invitaciones Digitales",
    shortDesc: "Botón enlace a invitación digital interactiva",
    fullDesc:
      "Plataforma de invitaciones digitales interactivas con diseño personalizado. Animaciones, confirmación de asistencia RSVP, galería de fotos y mapa de ubicación integrado. Perfecta para eventos especiales.",
    gradient: "from-pink-900/50 to-purple-900/50",
    externalLink: "https://invitacionshariksofia.lovable.app",
  },
  {
    id: 6,
    title: "Agendamiento Real",
    shortDesc: "Interfaz calendario para citas automáticas",
    fullDesc:
      "Sistema de agendamiento automático con integración a Google Calendar. Interfaz intuitiva de calendario que permite a los clientes reservar citas sin fricción. Confirmación automática por WhatsApp y recordatorios programados.",
    gradient: "from-blue-900/50 to-cyan-900/50",
  },
  {
    id: 7,
    title: "Ana Alicia Nieves",
    shortDesc: "Landing abogada +30 años, Compra-Venta, Sucesoral, Constitución",
    fullDesc:
      "Landing page profesional para la abogada Ana Alicia Nieves con más de 30 años de experiencia. Especialidades: Compra-Venta, Derecho Sucesoral y Constitución de empresas. Diseño elegante con formulario de contacto y botón directo a WhatsApp para consultas inmediatas.",
    gradient: "from-amber-900/50 to-yellow-900/50",
    whatsapp: "584221754245",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#141414] border border-[rgba(57,255,20,0.2)] rounded-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#888888] hover:text-[#39FF14] transition-colors bg-[#0A0A0A]/80 rounded-full p-1.5"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image area */}
        <div
          className={`h-48 sm:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F5]/60">
            {project.title}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-bold text-[#F5F5F5] mb-3">
            {project.title}
          </h3>
          <p className="text-[#888888] leading-relaxed mb-6">
            {project.fullDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.externalLink ? (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-glow bg-[#39FF14] text-[#0A0A0A] font-bold px-6 py-3 rounded-lg hover:bg-[#7FFF5E] transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Ver Proyecto
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                onClick={onClose}
                className="bg-[#39FF14] text-[#0A0A0A] font-bold px-6 py-3 rounded-lg hover:bg-[#7FFF5E] transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Cerrar
              </button>
            )}

            {project.whatsapp && (
              <a
                href={`https://wa.me/${project.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#39FF14]/40 text-[#39FF14] font-bold px-6 py-3 rounded-lg hover:bg-[#39FF14]/10 hover:border-[#39FF14] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /* Double the projects for infinite scroll effect */
  const doubled = [...projects, ...projects];

  return (
    <section id="proyectos" className="py-20 md:py-28 relative overflow-hidden">
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
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-[#39FF14] mx-auto rounded-full neon-text-glow" />
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="carousel-scroll flex gap-6 w-max">
          {doubled.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              whileHover={{
                y: -8,
                borderColor: "rgba(57, 255, 20, 0.5)",
                transition: { duration: 0.3 },
              }}
              onClick={() => setSelectedProject(project)}
              className="w-[280px] sm:w-[320px] bg-[#141414] border border-[rgba(57,255,20,0.1)] rounded-xl overflow-hidden cursor-pointer group hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-shadow duration-300 flex-shrink-0"
            >
              {/* Image placeholder */}
              <div
                className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="font-serif text-xl font-bold text-[#F5F5F5]/50 group-hover:text-[#F5F5F5]/70 transition-colors duration-300">
                  {project.title}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-[#F5F5F5] text-base sm:text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">
                  {project.shortDesc}
                </p>
                <span className="text-[#39FF14] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Ver Proyecto
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
