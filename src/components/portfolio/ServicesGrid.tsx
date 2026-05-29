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
  Zap,
  X,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  Store,
  Cpu,
  Megaphone,
  Code2,
  Filter,
  BarChart3,
  Plus,
  Check,
  Star,
  Crown,
  Flame,
} from "lucide-react";
import { useCart } from "./CartContext";

interface ServiceTier {
  name: string;
  price: number;
  label: string;
  items: string[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  technicalDescription: string;
  features: string[];
  tiers?: ServiceTier[];
  price: string;
  priceValue: number;
  badge?: string;
  isNew?: boolean;
  image?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    id: "ecommerce",
    title: "E-Commerce & Ventas Digitales",
    subtitle: "Tiendas, marketplaces y sistemas de venta automatizados",
    icon: <Store size={24} />,
    services: [
      {
        icon: <Globe size={22} />,
        title: "Página de Ventas Premium + Embudos",
        description:
          "Web profesional de alta conversión con diseño moderno, animaciones dinámicas y todos los elementos persuasivos que tu oferta necesita. Incluye cronómetro de urgencia, botones estratégicos, pasarela de pago integrada y chat en tiempo real.",
        technicalDescription:
          "Arquitectura construida en Next.js con SSR/SSG para velocidad de carga óptima. Embudos de conversión con tracking de eventos, remarketing con Meta Pixel + CAPI, A/B testing integrado y analítica de comportamiento con Google Analytics 4. Pasarelas de pago: Stripe, PayPal, Zelle. Chat en vivo con WebSocket.",
        features: [
          "Cronómetro de ofertas",
          "Pasarela de pago integrada",
          "Chat en vivo",
          "Remarketing automatizado",
          "Tracking de conversión",
        ],
        price: "Desde $89 USD",
        priceValue: 89,
        image: "/images/srv-web.png",
      },
      {
        icon: <ShoppingCart size={22} />,
        title: "Marketplace con Inventario",
        description:
          "Tienda virtual completa con sistema de categorías organizado, hasta 100 productos con inventario en tiempo real. Fotos editadas, fichas técnicas y dashboard administrativo para gestionar pedidos, stock y envíos.",
        technicalDescription:
          "Arquitectura de tienda con automatización de ventas, rescate de carritos abandonados y chatbot inteligente integrado. Cero fugas en el proceso de venta.",
        features: [
          "Hasta 100 productos",
          "Inventario en tiempo real",
          "Rescate de carritos",
          "Dashboard administrativo",
          "Sincronización CRM",
        ],
        tiers: [
          { name: "Starter", price: 140, label: "Base", items: ["Tienda Next.js", "Pasarelas de Pago", "Chatbot integrado", "Hasta 50 productos"] },
          { name: "Pro", price: 240, label: "Recomendado", items: ["+ Rescate carritos Email/WA", "+ Sincronización CRM", "+ Hasta 100 productos", "+ Analítica básica"] },
          { name: "Premium", price: 390, label: "Más Completo", items: ["+ App Móvil PWA", "+ Analítica avanzada", "+ Productos ilimitados", "+ Reportes automáticos"] },
        ],
        price: "Desde $140 USD",
        priceValue: 140,
        image: "/images/srv-marketplace.png",
      },
      {
        icon: <Smartphone size={22} />,
        title: "MiniApps & Booking Hub",
        description:
          "Apps especializadas para sectores específicos: gimnasios, consultorios, bufetes, coaching. Sistema de autoservicio con agendamiento sincronizado, pagos directos y recordatorios automáticos por WhatsApp.",
        technicalDescription:
          "Sistema de autoservicio para mentores, servicios digitales o presenciales con personalización en tiempo real. Gestión autónoma del cliente y del flujo de trabajo.",
        features: [
          "Agendamiento al calendario",
          "Enlace a pagos directo",
          "Recordatorios automáticos",
          "Editor de servicios dinámico",
          "Panel administrativo",
        ],
        tiers: [
          { name: "Starter", price: 89, label: "Base", items: ["Landing de alta conversión", "Sistema de reserva", "Pagos integrados"] },
          { name: "Pro", price: 160, label: "Recomendado", items: ["+ Addons dinámicos", "+ Mapas de cobertura", "+ Editor de servicios"] },
          { name: "Premium", price: 260, label: "Más Completo", items: ["+ Login de clientes", "+ Panel administrativo", "+ Reportes operativos"] },
        ],
        price: "Desde $89 USD",
        priceValue: 89,
        image: "/images/srv-agendamiento.png",
      },
      {
        icon: <TrendingUp size={22} />,
        title: "Social Commerce Integrado",
        description:
          "Vende directamente desde Instagram Shops, TikTok Shop y Facebook Marketplace sin fricción. Configuración completa de catálogos y sincronización de inventario.",
        technicalDescription:
          "Integración nativa con APIs de Meta Commerce, TikTok Shop API y Facebook Marketplace. Sincronización bidireccional de inventario, shoppable posts automatizados, y análisis de conversión por canal social con atribución multi-touch.",
        features: [
          "Instagram Shops",
          "TikTok Shop",
          "Facebook Marketplace",
          "Sincronización de inventario",
          "Shoppable posts",
        ],
        price: "Desde $110 USD",
        priceValue: 110,
        isNew: true,
        image: "/images/srv-social-commerce.png",
      },
      {
        icon: <Code2 size={22} />,
        title: "SaaS Architect (MVP & Escalabilidad)",
        description:
          "Despliegue de software con sistema de suscripciones y panel de control robusto. Escalabilidad y seguridad desde el primer día para tu producto digital.",
        technicalDescription:
          "Arquitectura SaaS completa con autenticación segura (OAuth/JWT), sistema de suscripciones con Stripe Billing, base de datos relacional con Prisma ORM, y despliegue en Vercel con CI/CD.",
        features: [
          "Sistema de autenticación",
          "Suscripciones con Stripe",
          "Base de datos personalizada",
          "CI/CD automatizado",
          "Escalabilidad garantizada",
        ],
        tiers: [
          { name: "Starter", price: 250, label: "Base", items: ["Landing de ventas", "Sistema de autenticación", "Pagos integrados"] },
          { name: "Pro", price: 450, label: "Recomendado", items: ["+ Dashboard de usuario", "+ Base de datos personalizada", "+ Admin panel"] },
          { name: "Premium", price: 750, label: "Más Completo", items: ["+ APIs externas", "+ IA avanzada integrada", "+ Soporte prioritario"] },
        ],
        price: "Desde $250 USD",
        priceValue: 250,
        isNew: true,
        image: "/images/srv-nocode.png",
      },
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización & Inteligencia Artificial",
    subtitle: "Bots, agentes IA y flujos automatizados que trabajan 24/7",
    icon: <Cpu size={24} />,
    services: [
      {
        icon: <Bot size={22} />,
        title: "Bot Vendedor WhatsApp 24/7",
        description:
          "Agente autónomo que vende, negocia y cierra ventas por ti las 24 horas. Notifica pagos, mantiene base de datos actualizada y comprende datos complejos del cliente. Incluye CRM integrado.",
        technicalDescription:
          "Solución de IA conversacional para delegar la atención y venta 24/7. Reducción de carga operativa y aumento de la tasa de respuesta instantánea.",
        features: [
          "Venta autónoma 24/7",
          "Negociación inteligente",
          "Notificación de pagos",
          "CRM integrado",
          "Base de datos automática",
        ],
        tiers: [
          { name: "Starter", price: 89, label: "Base", items: ["Chatbot FAQ web", "Respuestas automáticas", "Captura básica"] },
          { name: "Pro", price: 160, label: "Recomendado", items: ["+ Base de conocimientos IA", "+ Captación de datos", "+ CRM integrado"] },
          { name: "Premium", price: 260, label: "Más Completo", items: ["+ Sincronización Calendar", "+ Agendamiento automático", "+ Reportes eficiencia"] },
        ],
        price: "Desde $89 USD",
        priceValue: 89,
        image: "/images/srv-bot-whatsapp.png",
      },
      {
        icon: <Brain size={22} />,
        title: "Agentes IA Personalizados",
        description:
          "Automatiza tareas complejas con agentes de IA diseñados a medida. Desde análisis de datos en tiempo real, generación de reportes ejecutivos, hasta atención al cliente sin intervención humana.",
        technicalDescription:
          "Agentes construidos con LLMs (GPT-4, Claude, Gemini) con RAG (Retrieval-Augmented Generation) para conocimiento específico de tu negocio. Integración con APIs internas, bases de datos vectoriales para búsqueda semántica, y sistema de memoria conversacional persistente. Cada agente mejora continuamente con feedback loop.",
        features: [
          "Análisis en tiempo real",
          "Reportes ejecutivos automáticos",
          "Atención al cliente 24/7",
          "RAG con bases vectoriales",
          "Mejora continua con ML",
        ],
        price: "Desde $180 USD",
        priceValue: 180,
        badge: "Popular",
        image: "/images/srv-agentes-ia.png",
      },
      {
        icon: <Sparkles size={22} />,
        title: "Contenido IA + Edición Profesional",
        description:
          "Creación y edición profesional de contenido visual de alto impacto: imágenes hiperrealistas, videos cinematográficos, avatares IA, miniseries para redes y textos persuasivos que generan engagement.",
        technicalDescription:
          "Pipeline de producción potenciado con Kling AI para video, Gemini/ChatGPT para copywriting, Midjourney/DALL-E para imágenes, y herramientas de post-producción profesional. Incluye avatares IA sincronizados con ElevenLabs para voz, y edición en DaVinci Resolve para color grading cinematográfico.",
        features: [
          "Videos cinematográficos",
          "Avatares hiperrealistas",
          "Miniseries para RRSS",
          "Textos de alta virabilidad",
          "Edición profesional completa",
        ],
        price: "Desde $35 USD",
        priceValue: 35,
        image: "/images/srv-contenido-ia.png",
      },
      {
        icon: <Mic size={22} />,
        title: "Agentes de Voz IA",
        description:
          "Asistentes de voz inteligentes que atienden llamadas, agendan citas, responden preguntas frecuentes y cierran ventas por teléfono. Disponibles 24/7 con acento personalizable.",
        technicalDescription:
          "Agentes de voz con procesamiento de lenguaje natural en tiempo real usando Whisper para transcripción, LLMs para comprensión, y ElevenLabs/Voice AI para síntesis de voz natural. Integración con PBX virtual, CRM y calendarios. Transcripción automática de llamadas y análisis de sentimiento.",
        features: [
          "Atención de llamadas 24/7",
          "Agendamiento por voz",
          "Acento personalizable",
          "Integración con CRM",
          "Transcripción automática",
        ],
        price: "Desde $120 USD",
        priceValue: 120,
        isNew: true,
        image: "/images/srv-voice-ai.png",
      },
      {
        icon: <Workflow size={22} />,
        title: "Automatización No-Code con IA",
        description:
          "Flujos de trabajo automatizados sin escribir código: conecta Google Sheets, Notion, CRMs, email marketing y más con IA que decide el siguiente paso.",
        technicalDescription:
          "Orquestación de workflows con Make/Zapier + IA decision engine. Automatización de onboarding, seguimiento, facturación y reportes con builders visuales. Conexión con 500+ apps, webhooks personalizados, y triggers condicionales basados en IA. Monitoreo de flujos con alertas en tiempo real.",
        features: [
          "Flujos visuales sin código",
          "Conexión con 500+ apps",
          "IA que decide el siguiente paso",
          "Automatización de onboarding",
          "Reportes automáticos",
        ],
        price: "Desde $75 USD",
        priceValue: 75,
        isNew: true,
        image: "/images/srv-nocode.png",
      },
    ],
  },
  {
    id: "estrategia",
    title: "Marketing & Estrategia Digital",
    subtitle: "Campañas, embudos, análisis y crecimiento medible",
    icon: <Megaphone size={24} />,
    services: [
      {
        icon: <Filter size={22} />,
        title: "AI-Driven Funnel & Lead Nurturing",
        description:
          "Sistema estratégico para captar y nutrir leads antes de la llamada de venta. Filtrado de prospectos de alto valor para negocios de servicios e infoproductos.",
        technicalDescription:
          "Embudos de conversión con scoring de leads basado en IA. Secuencias de nutrición automatizadas con personalización dinámica por comportamiento.",
        features: [
          "Scoring de leads con IA",
          "Embudos personalizados",
          "Secuencias de nutrición",
          "Cualificación automática",
          "Reporte de ROI",
        ],
        tiers: [
          { name: "Starter", price: 150, label: "Base", items: ["Embudo base", "Captura de leads", "Formularios inteligentes"] },
          { name: "Pro", price: 260, label: "Recomendado", items: ["+ Nutrición Email/WA", "+ Secuencias automáticas", "+ Segmentación IA"] },
          { name: "Premium", price: 420, label: "Más Completo", items: ["+ Cualificación IA automática", "+ Reporte ROI tiempo real", "+ A/B testing"] },
        ],
        price: "Desde $150 USD",
        priceValue: 150,
        isNew: true,
        image: "/images/srv-campanas.png",
      },
      {
        icon: <BarChart3 size={22} />,
        title: "Conversion Omnicanal (Tracking & Atribución)",
        description:
          "El puente técnico entre Meta Ads y la venta final. Maximiza el ROAS mediante tracking de precisión y API de Conversiones para que cada dólar invertido se contabilice.",
        technicalDescription:
          "Implementación de Meta Pixel + Conversions API (CAPI) + Google Analytics 4 + UTMify para atribución multi-touch. Tracking server-side para evitar bloqueos de ad-blockers.",
        features: [
          "Meta Pixel + CAPI",
          "Google Analytics 4",
          "UTMify integrado",
          "Atribución multi-touch",
          "Tracking server-side",
        ],
        tiers: [
          { name: "Starter", price: 199, label: "Base", items: ["Pixel + CAPI", "GA4 configurado", "Eventos básicos"] },
          { name: "Pro", price: 340, label: "Recomendado", items: ["+ Landing velocidad óptima", "+ Integración CRM", "+ Eventos avanzados"] },
          { name: "Premium", price: 550, label: "Más Completo", items: ["+ Atribución completa", "+ Análisis conversión", "+ Reportes automáticos"] },
        ],
        price: "Desde $199 USD",
        priceValue: 199,
        isNew: true,
        image: "/images/srv-omnichannel.png",
      },
      {
        icon: <Share2 size={22} />,
        title: "Gestión Completa de RRSS",
        description:
          "Administración estratégica de Instagram, Facebook, TikTok y Telegram. Contenido calendarizado, diseño gráfico, análisis de ROI y optimización continua.",
        technicalDescription:
          "Gestión con herramientas profesionales: Meta Business Suite, Later/Buffer para programación, Canva Pro para diseño, y analítica nativa + terceros para medición. Reportes semanales con métricas de alcance, engagement, conversión y ROAS por plataforma.",
        features: [
          "Instagram, Facebook, TikTok, Telegram",
          "Contenido estratégico calendarizado",
          "Análisis de ROI detallado",
          "Reportes mensuales",
          "Optimización continua",
        ],
        price: "Desde $65 USD",
        priceValue: 65,
        image: "/images/srv-social-ads.png",
      },
      {
        icon: <Target size={22} />,
        title: "Asesoría Estratégica 1:1",
        description:
          "Plan de negocios completo, estrategia de contenido y marketing integral para tu marca. 31 días con seguimiento semanal y sesiones de coaching directo.",
        technicalDescription:
          "Diagnóstico empresarial con SWOT digital, mapa de embudo personalizado, estrategia de contenidos con SEO semántico, plan de adquisición con presupuesto optimizado por canal, y dashboard de KPIs en tiempo real. Sesiones por Zoom con grabación y minutas ejecutivas.",
        features: [
          "Plan de negocios completo",
          "Estrategia de contenido personalizada",
          "Plan de marketing integral",
          "31 días con seguimiento",
          "Sesiones de coaching directo",
        ],
        price: "Desde $250 USD",
        priceValue: 250,
        badge: "Premium",
        image: "/images/srv-asesoria.png",
      },
      {
        icon: <Rocket size={22} />,
        title: "Blueprint de Campañas Virales",
        description:
          "Estructura paso a paso para campañas que se comparten solas. Templates, copy persuasivo, estrategia de lanzamiento en fases y métricas de seguimiento.",
        technicalDescription:
          "Framework de viralidad con análisis de tendencias en tiempo real (TikTok Creative Center + Meta Ad Library), A/B testing de creatividades, secuencia de lanzamiento en 3 fases (teaser, lanzamiento, escala), y pixel tracking de shares orgánicos para optimización continua.",
        features: [
          "Estructura paso a paso",
          "Templates de contenido",
          "Copy persuasivo probado",
          "Calendario optimizado",
          "Métricas de seguimiento",
        ],
        price: "Desde $150 USD",
        priceValue: 150,
        image: "/images/srv-campanas.png",
      },
      {
        icon: <Layers size={22} />,
        title: "Integración Omnichannel",
        description:
          "Conecta WhatsApp, Instagram, Facebook y Email en un solo dashboard. Automatización de mensajes cruzados y respuestas inteligentes por canal.",
        technicalDescription:
          "Arquitectura de integración con webhooks centralizados, API de WhatsApp Business, Meta Graph API, y conectores de email (Mailchimp/SendGrid). Dashboard unificado con CRM bidireccional, auto-respuestas con NLP y enrutamiento inteligente por canal.",
        features: [
          "Dashboard unificado",
          "Automatización total",
          "Sincronización de datos",
          "Respuestas inteligentes por canal",
          "Reportes consolidados",
        ],
        price: "Desde $199 USD",
        priceValue: 199,
        image: "/images/srv-omnichannel.png",
      },
      {
        icon: <Search size={22} />,
        title: "Auditoría de Ventas GRATIS",
        description:
          "Análisis profesional de tu tienda online y RRSS. Identifico 3 problemas críticos que frenan tus ventas con soluciones concretas. Sin compromiso.",
        technicalDescription:
          "Auditoría técnica completa: análisis de velocidad (Core Web Vitals), revisión de tracking (Pixel/CAPI/GA4), evaluación de UX con heatmaps virtuales, auditoría SEO on-page, y análisis de embudo de conversión con identificación de puntos de fuga.",
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
        image: "/images/srv-auditoria.png",
      },
      {
        icon: <Users size={22} />,
        title: "Mentorship Grupal 14 Semanas",
        description:
          "Programa intensivo en grupo de 8 emprendedores con reuniones semanales en vivo, implementación asistida y acceso a recursos exclusivos.",
        technicalDescription:
          "Currículo estructurado en 4 módulos: Fundamentos Digitales → Automatización con IA → Escala con Ads → Optimización y Métricas. Incluye acceso a comunidad privada en Telegram, templates descargables, grabaciones de sesiones, y certificado de finalización.",
        features: [
          "Grupo de 8 emprendedores",
          "Reuniones semanales en vivo",
          "Implementación asistida",
          "Soporte por comunidad",
          "Recursos exclusivos",
        ],
        price: "Desde $97 USD",
        priceValue: 97,
        image: "/images/srv-mentorship.png",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function getWhatsAppLink(serviceTitle: string, tierName: string, price: string) {
  const msg = encodeURIComponent(
    `Hola Daniela! Me interesa el servicio: ${serviceTitle} — Plan ${tierName} (${price}). Me gustaría más información. Gracias!`
  );
  return `https://wa.me/584221754245?text=${msg}`;
}

function ServiceCard({ service, categoryId }: { service: Service; categoryId: string }) {
  const [showDetail, setShowDetail] = useState(false);
  const { addItem, removeItem, items } = useCart();

  const cartItemId = `${categoryId}-${service.title}`;
  const isInCart = items.some((i) => i.id === cartItemId);

  const handleToggleCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInCart) {
      removeItem(cartItemId);
    } else {
      addItem({
        id: cartItemId,
        title: service.title,
        price: service.price,
        priceValue: service.priceValue,
        type: "servicio",
      });
    }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        className={`group relative bg-[#1E1B16] rounded-xl overflow-hidden border transition-all duration-300 p-4 flex flex-col ${
          isInCart
            ? "service-selected border-[#8FA36E]"
            : "border-[rgba(107,127,78,0.12)] hover:border-[#6B7F4E]/40"
        }`}
      >
        {service.badge && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
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
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#6B7F4E] text-[#0F0D0B] animate-pulse-scale">
              <Zap size={9} className="inline mr-0.5" />
              Nuevo
            </span>
          </div>
        )}

        <div className="flex items-start gap-2.5 mb-2.5">
          <div
            className={`service-icon-box w-8 h-8 rounded-lg bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 flex items-center justify-center text-[#6B7F4E] flex-shrink-0 transition-all duration-300 ${
              isInCart ? "" : "group-hover:bg-[#6B7F4E] group-hover:text-[#0F0D0B]"
            }`}
          >
            {service.icon}
          </div>
          <h3 className="text-[#E2D9CC] font-bold text-xs leading-tight group-hover:text-[#8FA36E] transition-colors duration-300 neon-subtitle">
            {service.title}
          </h3>
        </div>

        {/* Price + tier count */}
        <div className="mb-2 flex items-center gap-2">
          <span className={`font-bold text-sm ${service.priceValue === 0 ? "text-emerald-400 neon-price-free" : "text-[#8FA36E] neon-price"}`}>
            {service.price}
          </span>
          {service.tiers && (
            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#6B7F4E]/10 text-[#8FA36E] font-semibold border border-[#6B7F4E]/20">
              3 planes
            </span>
          )}
        </div>

        <div className="space-y-1 mb-3 flex-1">
          {service.features.slice(0, 4).map((feature, fIdx) => (
            <div key={fIdx} className="flex items-center gap-1.5">
              <CheckCircle2 size={10} className="text-[#6B7F4E] flex-shrink-0" />
              <span className="text-[#9A8E80] text-[10px]">{feature}</span>
            </div>
          ))}
          {service.features.length > 4 && (
            <span className="text-[#6B7F4E] text-[10px] ml-3.5">+{service.features.length - 4} más</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetail(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg btn-tech text-[#8FA36E] text-[9px] font-semibold uppercase tracking-wider"
          >
            <Eye size={11} />
            {service.tiers ? "Ver Planes" : "Detalles"}
          </button>
          <button
            onClick={handleToggleCart}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-[9px] font-semibold uppercase tracking-wider transition-all duration-300 ${
              isInCart
                ? "bg-[#6B7F4E] text-[#0F0D0B] border border-[#8FA36E]"
                : "btn-tech-primary text-[#E2D9CC]"
            }`}
            style={isInCart ? { boxShadow: "0 0 10px rgba(107, 127, 78, 0.4)" } : {}}
          >
            {isInCart ? (
              <>
                <Check size={11} />
                Agregado
              </>
            ) : (
              <>
                <Plus size={11} />
                Agregar
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* ========= MODAL DETAIL ========= */}
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
              className="relative bg-[#1E1B16] rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto border border-[rgba(107,127,78,0.3)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDetail(false)}
                className="absolute top-3 right-3 z-10 text-[#9A8E80] hover:text-[#6B7F4E] transition-colors bg-[#0F0D0B]/60 rounded-full p-1.5"
              >
                <X size={16} />
              </button>

              <div className="h-1 bg-gradient-to-r from-[#4A5A35] via-[#6B7F4E] to-[#8FA36E]" />

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6B7F4E]/15 border border-[#6B7F4E]/25 flex items-center justify-center text-[#6B7F4E]">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-[#E2D9CC] font-bold text-base leading-tight neon-subtitle">{service.title}</h3>
                    {service.badge && (
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        service.badge === "Gratis" ? "bg-emerald-500/15 text-emerald-400" : "bg-[#6B7F4E]/15 text-[#8FA36E]"
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Basic description */}
                <p className="text-[#9A8E80] text-xs leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Technical description */}
                <div className="bg-[#0F0D0B] rounded-xl p-3.5 border border-[rgba(107,127,78,0.15)] mb-4">
                  <h4 className="text-[#6B7F4E] text-[10px] font-bold uppercase tracking-wider mb-2">Especificaciones Técnicas</h4>
                  <p className="text-[#9A8E80] text-[11px] leading-relaxed">
                    {service.technicalDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1.5 mb-4">
                  <h4 className="text-[#6B7F4E] text-[10px] font-bold uppercase tracking-wider mb-1.5">Características</h4>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-[#6B7F4E]" />
                      <span className="text-[#E2D9CC] text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ===== TIERS WITH PRICES ===== */}
                {service.tiers && (
                  <div className="space-y-3 mb-4">
                    <h4 className="text-[#6B7F4E] text-[10px] font-bold uppercase tracking-wider">Elige tu Plan</h4>
                    <div className="space-y-2">
                      {service.tiers.map((tier, tIdx) => {
                        const tierCartId = `${categoryId}-${service.title}-${tier.name}`;
                        const isTierInCart = items.some((i) => i.id === tierCartId);
                        const isRecommended = tier.label === "Recomendado";
                        const isPremium = tier.label === "Más Completo";

                        return (
                          <div
                            key={tIdx}
                            className={`relative rounded-xl p-4 border transition-all duration-300 ${
                              isRecommended
                                ? "border-[#6B7F4E] bg-[#6B7F4E]/8 shadow-[0_0_15px_rgba(107,127,78,0.12)]"
                                : isPremium
                                ? "border-[#8FA36E]/30 bg-[#1E1B16]"
                                : "border-[rgba(107,127,78,0.12)] bg-[#0F0D0B]/50"
                            }`}
                          >
                            {/* Recommended badge */}
                            {isRecommended && (
                              <div className="absolute -top-2.5 left-4">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#6B7F4E] text-[#0F0D0B] text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                                  <Star size={8} fill="currentColor" />
                                  Recomendado
                                </span>
                              </div>
                            )}
                            {isPremium && (
                              <div className="absolute -top-2.5 left-4">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#8FA36E]/20 text-[#8FA36E] border border-[#8FA36E]/30 text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                                  <Crown size={8} />
                                  Más Completo
                                </span>
                              </div>
                            )}

                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className={`text-xs font-bold uppercase tracking-wider ${
                                    isRecommended ? "text-[#8FA36E] neon-subtitle" : isPremium ? "text-[#8FA36E]" : "text-[#9A8E80]"
                                  }`}>
                                    {tier.name}
                                  </span>
                                </div>

                                {/* Tier price */}
                                <div className="mb-2">
                                  <span className={`font-bold text-xl ${
                                    isRecommended ? "text-[#8FA36E] neon-price" : isPremium ? "text-[#8FA36E] neon-price" : "text-[#6B7F4E] neon-price"
                                  }`}>
                                    ${tier.price}
                                  </span>
                                  <span className="text-[#9A8E80] text-[10px] ml-1">USD</span>
                                </div>

                                {/* Tier items */}
                                <div className="space-y-1">
                                  {tier.items.map((item, iIdx) => (
                                    <div key={iIdx} className="flex items-start gap-1.5">
                                      <CheckCircle2 size={10} className="text-[#6B7F4E] flex-shrink-0 mt-0.5" />
                                      <span className="text-[#E2D9CC] text-[11px] leading-tight">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Tier actions */}
                            <div className="flex gap-2 mt-3">
                              <a
                                href={getWhatsAppLink(service.title, tier.name, `$${tier.price} USD`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300 ${
                                  isRecommended
                                    ? "btn-tech-primary text-[#E2D9CC]"
                                    : "btn-tech text-[#8FA36E]"
                                }`}
                              >
                                <MessageCircle size={11} />
                                Cotizar
                              </a>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (isTierInCart) {
                                    removeItem(tierCartId);
                                  } else {
                                    addItem({
                                      id: tierCartId,
                                      title: `${service.title} — ${tier.name}`,
                                      price: `$${tier.price} USD`,
                                      priceValue: tier.price,
                                      type: "servicio",
                                    });
                                  }
                                }}
                                className={`flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                                  isTierInCart
                                    ? "bg-[#6B7F4E] text-[#0F0D0B] border border-[#8FA36E]"
                                    : isRecommended
                                    ? "bg-[#6B7F4E]/10 border border-[#6B7F4E]/30 text-[#8FA36E]"
                                    : "btn-tech text-[#9A8E80]"
                                }`}
                                style={isTierInCart ? { boxShadow: "0 0 8px rgba(107, 127, 78, 0.4)" } : {}}
                              >
                                {isTierInCart ? <Check size={10} /> : <Plus size={10} />}
                                {isTierInCart ? "Agregado" : "Agregar"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Single price (for services without tiers) */}
                {!service.tiers && (
                  <div className="bg-[#0F0D0B] rounded-xl p-3.5 border border-[rgba(107,127,78,0.2)] mb-4">
                    <span className={`font-bold text-lg ${service.priceValue === 0 ? "text-emerald-400 neon-price-free" : "text-[#8FA36E] neon-price"}`}>
                      {service.price}
                    </span>
                  </div>
                )}

                {/* Action Buttons (for services without tiers) */}
                {!service.tiers && (
                  <div className="flex gap-3">
                    <a
                      href={getWhatsAppLink(service.title, "Único", service.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl btn-tech-primary text-[#E2D9CC] font-bold text-xs uppercase tracking-wider"
                    >
                      <MessageCircle size={14} />
                      Cotizar Ahora
                    </a>
                    <button
                      onClick={(e) => {
                        handleToggleCart(e);
                        setShowDetail(false);
                      }}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        isInCart
                          ? "bg-[#6B7F4E] text-[#0F0D0B] border border-[#8FA36E]"
                          : "btn-tech text-[#8FA36E]"
                      }`}
                      style={isInCart ? { boxShadow: "0 0 10px rgba(107, 127, 78, 0.4)" } : {}}
                    >
                      {isInCart ? <Check size={14} /> : <Plus size={14} />}
                      {isInCart ? "Agregado" : "Al Carrito"}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CategorySection({ category, defaultOpen = false }: { category: ServiceCategory; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group flex items-center justify-between bg-[#1E1B16] rounded-xl border border-[rgba(107,127,78,0.15)] hover:border-[#6B7F4E]/30 transition-all duration-300 p-4 md:p-5"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 flex items-center justify-center text-[#6B7F4E] group-hover:bg-[#6B7F4E] group-hover:text-[#0F0D0B] transition-all duration-300">
            {category.icon}
          </div>
          <div className="text-left">
            <h3 className="text-[#E2D9CC] font-bold text-sm md:text-base neon-subtitle">{category.title}</h3>
            <p className="text-[#9A8E80] text-[10px] md:text-xs">{category.subtitle}</p>
          </div>
          <span className="ml-2 text-[9px] px-2 py-0.5 rounded-full bg-[#6B7F4E]/15 text-[#8FA36E] font-semibold">
            {category.services.length} servicios
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-3"
        >
          <ChevronDown size={20} className="text-[#6B7F4E]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {category.services.map((service, idx) => (
                <ServiceCard key={idx} service={service} categoryId={category.id} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-10 md:py-14 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
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
              className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-2 neon-subtitle"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Mis Servicios
            </h2>
            <div className="w-16 h-0.5 bg-[#6B7F4E] mx-auto rounded-full mb-3" />
            <p className="text-[#9A8E80] max-w-2xl mx-auto text-xs">
              Soluciones digitales agrupadas por especialidad. Despliega cada categoría para ver los servicios disponibles.
            </p>
          </motion.div>
        </div>

        {categories.map((category, idx) => (
          <CategorySection key={category.id} category={category} defaultOpen={idx === 0} />
        ))}
      </div>
    </section>
  );
}
