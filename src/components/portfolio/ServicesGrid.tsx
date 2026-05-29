"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Bot,
  Sparkles,
  Share2,
  Smartphone,
  Brain,
  Target,
  Search,
  Rocket,
  Layers,
  Users,
  Mic,
  TrendingUp,
  Workflow,
  Eye,
  ChevronRight,
  Zap,
  X,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceValue: number;
  badge?: string;
  isNew?: boolean;
  isTrending?: boolean;
}

const services: Service[] = [
  {
    icon: <Globe size={22} />,
    title: "Página de Ventas Premium + Embudos",
    description:
      "Web profesional de alta conversión con diseño moderno, animaciones dinámicas y todos los elementos persuasivos que tu oferta necesita. Incluye cronómetro de urgencia, efectos visuales de bloques, botones estratégicos para enlaces externos, conexión con base de datos, remarketing automatizado, pasarela de pago integrada y chat en tiempo real. Optimizada para convertir visitantes en clientes desde el primer segundo.",
    features: [
      "Cronómetro de ofertas",
      "Pasarela de pago integrada",
      "Chat en vivo",
      "Remarketing automatizado",
      "Google Maps integrado",
    ],
    price: "Desde $89.00 USD",
    priceValue: 89,
  },
  {
    icon: <ShoppingCart size={22} />,
    title: "Marketplace con Inventario",
    description:
      "Tienda virtual completa con sistema de categorías organizado, capacidad para hasta 100 productos con inventario en tiempo real. Cada producto incluye fotos profesionalmente editadas, ficha técnica detallada con información completa, y formulario inteligente de datos del cliente. Dashboard administrativo para gestionar pedidos, stock y envíos desde un solo lugar.",
    features: [
      "Hasta 100 productos",
      "Inventario en tiempo real",
      "Fotos editadas profesionalmente",
      "Formulario de datos inteligente",
      "Dashboard administrativo",
    ],
    price: "Desde $140.00 USD",
    priceValue: 140,
  },
  {
    icon: <Bot size={22} />,
    title: "Bot Vendedor WhatsApp 24/7",
    description:
      "Agente autónomo inteligente que vende, negocia y cierra ventas por ti las 24 horas del día, los 7 días de la semana. Notifica pagos automáticamente, mantiene una base de datos actualizada de cada interacción, y comprende datos complejos del cliente. Incluye CRM integrado para seguimiento completo del embudo de ventas y reportes de rendimiento en tiempo real.",
    features: [
      "Venta autónoma 24/7",
      "Negociación inteligente",
      "Notificación de pagos",
      "CRM integrado",
      "Base de datos automática",
    ],
    price: "Desde $89.00 USD",
    priceValue: 89,
  },
  {
    icon: <Sparkles size={22} />,
    title: "Contenido IA + Edición Profesional",
    description:
      "Creación y edición profesional de contenido visual de alta impacto: imágenes hiperrealistas, videos cinematográficos, avatares IA que representan tu marca, miniseries para redes sociales con guiones de alta virabilidad, y textos persuasivos que generan engagement. Todo potenciado con las últimas herramientas de Inteligencia Artificial del mercado.",
    features: [
      "Videos cinematográficos",
      "Avatares hiperrealistas",
      "Miniseries para RRSS",
      "Textos de alta virabilidad",
      "Edición profesional completa",
    ],
    price: "Desde $35.00 USD",
    priceValue: 35,
  },
  {
    icon: <Share2 size={22} />,
    title: "Gestión Completa de RRSS",
    description:
      "Administración estratégica y profesional de Instagram, Facebook, TikTok y Telegram totalmente optimizados para tu marca. Incluye creación de contenido estratégico calendarizado, diseño de piezas gráficas, análisis detallado de ROI, reportes de rendimiento mensuales y optimización continua basada en datos reales de tu audiencia.",
    features: [
      "Instagram, Facebook, TikTok, Telegram",
      "Contenido estratégico calendarizado",
      "Análisis de ROI detallado",
      "Reportes mensuales",
      "Optimización continua",
    ],
    price: "Desde $65.00 USD",
    priceValue: 65,
  },
  {
    icon: <Smartphone size={22} />,
    title: "MiniApps Especializadas",
    description:
      "Aplicaciones especializadas diseñadas para sectores específicos: gimnasios, consultorios médicos, bufetes de abogados, servicios de limpieza, coaching profesional y más. Cada MiniApp incluye sistema de agendamiento sincronizado con Google Calendar, enlace directo a pagos, recordatorios automáticos por WhatsApp y notificaciones inteligentes que reducen las citas perdidas.",
    features: [
      "Agendamiento al calendario",
      "Enlace a pagos directo",
      "Recordatorios automáticos",
      "Notificaciones inteligentes",
      "Adaptada a tu sector",
    ],
    price: "Desde $89.00 USD",
    priceValue: 89,
  },
  {
    icon: <Brain size={22} />,
    title: "Agentes IA Personalizados",
    description:
      "Automatiza tareas complejas de tu negocio con agentes de Inteligencia Artificial diseñados a medida. Desde análisis de datos en tiempo real, generación de reportes ejecutivos, atención al cliente 24/7 sin intervención humana, hasta rapidez multitarea que reemplaza equipos enteros. Cada agente aprende de tu operación y mejora continuamente su rendimiento.",
    features: [
      "Análisis en tiempo real",
      "Reportes ejecutivos automáticos",
      "Atención al cliente 24/7",
      "Multitarea inteligente",
      "Mejora continua con ML",
    ],
    price: "Desde $180.00 USD",
    priceValue: 180,
    badge: "Popular",
  },
  {
    icon: <Target size={22} />,
    title: "Asesoría Estratégica 1:1",
    description:
      "Plan de negocios completo, estrategia de contenido personalizada y plan de marketing integral diseñado específicamente para tu marca. Programa intensivo de 31 días con seguimiento semanal, sesiones de coaching directo, implementación asistida paso a paso y ajustes estratégicos basados en resultados reales. Transforma tu visión en un plan ejecutable.",
    features: [
      "Plan de negocios completo",
      "Estrategia de contenido personalizada",
      "Plan de marketing integral",
      "31 días con seguimiento",
      "Sesiones de coaching directo",
    ],
    price: "Desde $250.00 USD",
    priceValue: 250,
    badge: "Premium",
  },
  {
    icon: <Search size={22} />,
    title: "Auditoría de Ventas GRATIS",
    description:
      "Análisis profesional y detallado de tu tienda online y presencia en redes sociales. Te identifico y presento 3 problemas críticos que están frenando tus ventas junto con soluciones concretas y accionables para resolverlos. Sin compromiso, sin letras pequeñas. Mi forma de demostrarte que puedo aportar valor real a tu negocio desde el minuto uno.",
    features: [
      "Análisis de tienda online",
      "Revisión de RRSS",
      "3 problemas críticos identificados",
      "Soluciones concretas",
      "Sin compromiso",
    ],
    price: "GRATIS",
    priceValue: 0,
    badge: "Gratis",
  },
  {
    icon: <Rocket size={22} />,
    title: "Blueprint de Campañas Virales",
    description:
      "Estructura paso a paso para crear campañas que se comparten solas. Incluye templates de contenido listos para usar, copy persuasivo probado que convierte, estrategia de lanzamiento en fases, calendario de publicación optimizado y métricas de seguimiento. No más publicar y rezar: aquí cada pieza tiene un propósito estratégico medible.",
    features: [
      "Estructura paso a paso",
      "Templates de contenido",
      "Copy persuasivo probado",
      "Calendario optimizado",
      "Métricas de seguimiento",
    ],
    price: "Desde $150.00 USD",
    priceValue: 150,
  },
  {
    icon: <Layers size={22} />,
    title: "Integración Omnichannel",
    description:
      "Conecta WhatsApp, Instagram, Facebook y Email en un solo dashboard unificado. Automatización total de mensajes cruzados, respuestas inteligentes por canal, sincronización de datos de clientes entre plataformas y reportes consolidados. Tu cliente te escribe por Instagram y recibe respuesta coherente por WhatsApp sin fricción alguna.",
    features: [
      "Dashboard unificado",
      "Automatización total",
      "Sincronización de datos",
      "Respuestas inteligentes por canal",
      "Reportes consolidados",
    ],
    price: "Desde $199.00 USD",
    priceValue: 199,
  },
  {
    icon: <Users size={22} />,
    title: "Mentorship Grupal 14 Semanas",
    description:
      "Programa intensivo en grupo reducido de 8 emprendedores con reuniones semanales en vivo, implementación asistida de cada estrategia, soporte continuo por comunidad privada y acceso a recursos exclusivos. Aprende haciendo: cada semana implementas una pieza nueva de tu ecosistema digital con mi guía directa y el apoyo del grupo.",
    features: [
      "Grupo de 8 emprendedores",
      "Reuniones semanales en vivo",
      "Implementación asistida",
      "Soporte por comunidad",
      "Recursos exclusivos",
    ],
    price: "Desde $97.00 USD",
    priceValue: 97,
  },
];

const trendingServices: Service[] = [
  {
    icon: <Mic size={22} />,
    title: "Agentes de Voz IA",
    description:
      "Asistentes de voz inteligentes que atienden llamadas, agendan citas, responden preguntas frecuentes y cierran ventas por teléfono. La nueva frontera de la atención al cliente: natural, rápida y disponible 24/7 con acento neutro y personalidad de marca.",
    features: [
      "Atención de llamadas 24/7",
      "Agendamiento por voz",
      "Acento personalizable",
      "Integración con CRM",
      "Transcripción automática",
    ],
    price: "Desde $120.00 USD",
    priceValue: 120,
    isNew: true,
    isTrending: true,
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Social Commerce Integrado",
    description:
      "Vende directamente desde Instagram Shops, TikTok Shop y Facebook Marketplace sin fricción. Configuración completa de catálogos, sincronización de inventario, estrategias de shoppable posts y análisis de conversión por canal social.",
    features: [
      "Instagram Shops",
      "TikTok Shop",
      "Facebook Marketplace",
      "Sincronización de inventario",
      "Shoppable posts",
    ],
    price: "Desde $110.00 USD",
    priceValue: 110,
    isNew: true,
    isTrending: true,
  },
  {
    icon: <Workflow size={22} />,
    title: "Automatización No-Code con IA",
    description:
      "Flujos de trabajo automatizados sin escribir una línea de código: conecta Google Sheets, Notion, CRMs, email marketing y más con IA que decide el siguiente paso. Automatiza onboarding, seguimiento, facturación y reportes con builders visuales intuitivos.",
    features: [
      "Flujos visuales sin código",
      "Conexión con 500+ apps",
      "IA que decide el siguiente paso",
      "Automatización de onboarding",
      "Reportes automáticos",
    ],
    price: "Desde $75.00 USD",
    priceValue: 75,
    isNew: true,
    isTrending: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.div
        variants={cardVariants}
        className="group relative bg-[#1E1B16] rounded-xl overflow-hidden border border-[rgba(107,127,78,0.12)] hover:border-[#6B7F4E]/40 transition-all duration-300 p-5 flex flex-col"
      >
        {/* Badge */}
        {service.badge && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                service.badge === "Gratis"
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                  : service.badge === "Premium"
                  ? "bg-[#6B7F4E]/15 text-[#8FA36E] border border-[#6B7F4E]/25"
                  : "bg-[#6B7F4E] text-[#0F0D0B]"
              }`}
            >
              {service.badge}
            </span>
          </div>
        )}
        {service.isNew && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#6B7F4E] text-[#0F0D0B] animate-pulse-scale">
              <Zap size={10} className="inline mr-0.5" />
              Tendencia 2026
            </span>
          </div>
        )}

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 flex items-center justify-center text-[#6B7F4E] flex-shrink-0 group-hover:bg-[#6B7F4E] group-hover:text-[#0F0D0B] transition-all duration-300">
            {service.icon}
          </div>
          <h3 className="text-[#E2D9CC] font-bold text-sm leading-tight group-hover:text-[#8FA36E] transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        {/* Feature Checks */}
        <div className="space-y-1.5 mb-4 flex-1">
          {service.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-[#6B7F4E] flex-shrink-0" />
              <span className="text-[#9A8E80] text-xs">{feature}</span>
            </div>
          ))}
        </div>

        {/* VER PRECIO button */}
        <button
          onClick={() => setShowDetail(true)}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg btn-tech text-[#8FA36E] text-xs font-semibold uppercase tracking-wider"
        >
          <Eye size={14} />
          Ver Precio
        </button>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowDetail(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#1E1B16] rounded-2xl max-w-md w-full overflow-hidden border border-[rgba(107,127,78,0.3)] shadow-2xl modal-enter"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setShowDetail(false)}
                className="absolute top-4 right-4 z-10 text-[#9A8E80] hover:text-[#6B7F4E] transition-colors bg-[#0F0D0B]/60 rounded-full p-1.5"
              >
                <X size={18} />
              </button>

              {/* Header accent */}
              <div className="h-1.5 bg-gradient-to-r from-[#4A5A35] via-[#6B7F4E] to-[#8FA36E]" />

              <div className="p-6">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#6B7F4E]/15 border border-[#6B7F4E]/25 flex items-center justify-center text-[#6B7F4E]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-[#E2D9CC] font-bold text-lg leading-tight">{service.title}</h3>
                    {service.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          service.badge === "Gratis"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : service.badge === "Premium"
                            ? "bg-[#6B7F4E]/15 text-[#8FA36E]"
                            : "bg-[#6B7F4E] text-[#0F0D0B]"
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#9A8E80] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#6B7F4E]" />
                      <span className="text-[#E2D9CC] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="bg-[#0F0D0B] rounded-xl p-4 border border-[rgba(107,127,78,0.2)] mb-5">
                  <span
                    className={`font-bold text-xl ${
                      service.priceValue === 0 ? "text-emerald-400" : "text-[#8FA36E]"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/584221754245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl btn-tech-primary text-[#E2D9CC] font-bold text-sm uppercase tracking-wider"
                >
                  <MessageCircle size={16} />
                  Cotizar Ahora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const trendingRef = useRef(null);
  const isTrendingInView = useInView(trendingRef, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-10 md:py-14 px-4 relative">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
            Lo que hago
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Mis Servicios
          </h2>
          <div className="w-16 h-0.5 bg-[#6B7F4E] mx-auto rounded-full mb-3" />
          <p className="text-[#9A8E80] max-w-2xl mx-auto text-sm">
            Soluciones digitales integrales potenciadas con Inteligencia Artificial para transformar tu negocio y multiplicar tus ventas.
          </p>
        </motion.div>
      </div>

      {/* Services Grid - Compact */}
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} index={idx} />
        ))}
      </motion.div>

      {/* 2026 Trending Services */}
      <div className="max-w-7xl mx-auto mt-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B7F4E]/15 border border-[#6B7F4E]/25 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
            <Zap size={12} />
            Tendencias 2026
          </span>
          <h3
            className="font-serif text-2xl md:text-3xl font-bold text-[#E2D9CC] mb-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Servicios en Auge
          </h3>
          <p className="text-[#9A8E80] max-w-xl mx-auto text-xs">
            Los servicios más demandados del mercado. Posiciona tu negocio con tecnología de vanguardia.
          </p>
        </motion.div>

        <motion.div
          ref={trendingRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isTrendingInView ? "visible" : "hidden"}
        >
          {trendingServices.map((service, idx) => (
            <ServiceCard key={`trending-${idx}`} service={service} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
