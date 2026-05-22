"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer:
      "Depende del servicio. Una landing page se entrega en 5-7 días hábiles. Un marketplace completo en 10-15 días. Los bots de WhatsApp en 3-5 días. Te doy un cronograma detallado antes de empezar para que sepas exactamente qué esperar cada día.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "Absolutamente no. Yo me encargo de toda la parte técnica. Tú solo necesitas contarme tu negocio y tus objetivos. Te entrego todo funcionando, con entrenamiento incluido para que puedas gestionar tu plataforma sin depender de nadie.",
  },
  {
    question: "¿Qué incluye la auditoría gratuita?",
    answer:
      "Reviso tu tienda online o redes sociales a fondo. Te identifico 3 problemas críticos que están frenando tus ventas y te doy soluciones concretas y accionables. Sin compromiso, sin letra pequeña. Es mi forma de demostrarte valor real antes de que inviertas un solo dólar.",
  },
  {
    question: "¿Los bots de WhatsApp funcionan de verdad?",
    answer:
      "Sí, y los números lo demuestran. Mis bots venden, negocian, responden preguntas frecuentes, generan presupuestos personalizados y cierran ventas sin intervención humana. Tienen una tasa de respuesta del 98% y pueden manejar cientos de conversaciones simultáneamente.",
  },
  {
    question: "¿Ofreces soporte después de la entrega?",
    answer:
      "Todos mis servicios incluyen 30 días de soporte técnico gratuito después de la entrega. Además, ofresco planes de mantenimiento mensual para que tu plataforma siempre esté actualizada, segura y optimizada. Nunca te quedas solo.",
  },
  {
    question: "¿Puedo pagar en bolívares o solo en dólares?",
    answer:
      "Acepto pagos en dólares (Zelle, PayPal, tarjeta de crédito) y también en bolívares a la tasa del día. Para proyectos grandes ofrezco planes de pago a cuotas. Escríbeme y buscamos la mejor opción para ti.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the service. A landing page takes 5-7 business days. A full marketplace 10-15 days. WhatsApp bots 3-5 days. I provide a detailed timeline before starting so you know exactly what to expect each day.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Absolutely not. I handle all the technical work. You just need to tell me about your business and goals. I deliver everything fully functional, with training included so you can manage your platform independently.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group border border-[rgba(201,168,76,0.12)] hover:border-[#C9A84C]/30 rounded-xl overflow-hidden transition-all duration-300 bg-[#1A1714]/60"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
            <HelpCircle size={16} className="text-[#C9A84C]" />
          </div>
          <span className="text-[#E8E0D4] font-medium text-sm md:text-base pr-4">
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-[#C9A84C]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-[3.25rem]">
              <p className="text-[#8A8278] text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#C9A84C]/3 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-4">
            Resolvemos tus dudas
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-[#E8E0D4] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          ref={ref}
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
