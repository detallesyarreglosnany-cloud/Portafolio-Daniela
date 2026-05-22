"use client";

import { useState, useRef } from "react";
import Image from "next/image";
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
  EyeOff,
  ChevronRight,
  Zap,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  image?: string;
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
    icon: <Globe size={28} />,
    image: "/images/srv-web.png",
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
    icon: <ShoppingCart size={28} />,
    image: "/images/srv-marketplace.png",
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
    icon: <Bot size={28} />,
    image: "/images/srv-bot-whatsapp.png",
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
    icon: <Sparkles size={28} />,
    image: "/images/srv-contenido-ia.png",
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
    icon: <Share2 size={28} />,
    image: "/images/srv-social-ads.png",
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
    icon: <Smartphone size={28} />,
    image: "/images/srv-agendamiento.png",
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
    icon: <Brain size={28} />,
    image: "/images/srv-agentes-ia.png",
    title: "Agentes IA Personalizados",
    description:
      "Automatiza tareas complejas de tu negocio con agentes de Inteligencia Artificial diseñados a medida. Desde análisis de datos en tiempo real, generación de reportes ejecutivos, atención al cliente 24/7 sin intervención humana, hasta rapidez multitarea que取代 equipos enteros. Cada agente aprende de tu operación y mejora continuamente su rendimiento.",
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
    icon: <Target size={28} />,
    image: "/images/srv-asesoria.png",
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
    icon: <Search size={28} />,
    image: "/images/srv-auditoria.png",
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
    icon: <Rocket size={28} />,
    image: "/images/srv-campanas.png",
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
    icon: <Layers size={28} />,
    image: "/images/srv-omnichannel.png",
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
    icon: <Users size={28} />,
    image: "/images/srv-mentorship.png",
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

// 2026 Trending services
const trendingServices: Service[] = [
  {
    icon: <Mic size={28} />,
    image: "/images/srv-voice-ai.png",
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
    icon: <TrendingUp size={28} />,
    image: "/images/srv-social-commerce.png",
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
    icon: <Workflow size={28} />,
    image: "/images/srv-nocode.png",
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
      staggerChildren: 0.08,
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

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [showPrice, setShowPrice] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-[#1A1714] rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.15)] hover:border-[#C9A84C]/50 transition-all duration-500 flex flex-col"
    >
      {/* Gold left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A84C] via-[#E8D48B] to-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              service.badge === "Gratis"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : service.badge === "Premium"
                ? "bg-[#C9A84C]/20 text-[#E8D48B] border border-[#C9A84C]/30"
                : "bg-[#C9A84C] text-[#0F0D0B]"
            }`}
          >
            {service.badge}
          </span>
        </div>
      )}
      {service.isNew && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] text-[#0F0D0B] animate-pulse-scale">
            <Zap size={12} className="inline mr-1" />
            Tendencia 2026
          </span>
        </div>
      )}

      {/* Service Image */}
      {service.image && (
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/30 to-transparent opacity-70" />
          {/* Floating icon overlay */}
          <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#0F0D0B] transition-all duration-300">
            {service.icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#E8E0D4] font-bold text-lg mb-3 group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight">
          {service.title}
        </h3>
        <p className="text-[#8A8278] text-sm leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Features */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, fIdx) => (
              <span
                key={fIdx}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-[#0F0D0B] border border-[rgba(201,168,76,0.1)] text-[#8A8278]"
              >
                <ChevronRight size={10} className="text-[#C9A84C]" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Price section */}
        <div className="mt-auto">
          <AnimatePresence mode="wait">
            {!showPrice ? (
              <motion.button
                key="ver-precio"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={() => setShowPrice(true)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[rgba(201,168,76,0.3)] text-[#C9A84C] text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#0F0D0B] transition-all duration-300"
              >
                <Eye size={16} />
                Ver Precio
              </motion.button>
            ) : (
              <motion.div
                key="precio-visible"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between bg-[#0F0D0B] rounded-lg px-4 py-2.5 border border-[rgba(201,168,76,0.2)]"
              >
                <span
                  className={`font-bold text-base ${
                    service.priceValue === 0
                      ? "text-emerald-400"
                      : "text-[#E8D48B]"
                  }`}
                >
                  {service.price}
                </span>
                <button
                  onClick={() => setShowPrice(false)}
                  className="text-[#8A8278] hover:text-[#C9A84C] transition-colors"
                >
                  <EyeOff size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const trendingRef = useRef(null);
  const isTrendingInView = useInView(trendingRef, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-20 md:py-28 px-4 relative">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
            Lo que hago
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Mis Servicios
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full mb-4" />
          <p className="text-[#8A8278] max-w-2xl mx-auto text-base">
            Soluciones digitales integrales potenciadas con Inteligencia Artificial para transformar tu negocio y multiplicar tus ventas.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} index={idx} />
        ))}
      </motion.div>

      {/* 2026 Trending Services */}
      <div className="max-w-7xl mx-auto mt-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C9A84C]/20 to-[#E8D48B]/10 border border-[#C9A84C]/30 text-[#E8D48B] text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap size={14} />
            Tendencias 2do Semestre 2026
          </span>
          <h3
            className="font-serif text-3xl md:text-4xl font-bold text-[#E8E0D4] mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Servicios en Auge
          </h3>
          <p className="text-[#8A8278] max-w-xl mx-auto text-sm">
            Los servicios más demandados del mercado actual. Posiciona tu negocio con tecnología de vanguardia antes que tu competencia.
          </p>
        </motion.div>

        <motion.div
          ref={trendingRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
