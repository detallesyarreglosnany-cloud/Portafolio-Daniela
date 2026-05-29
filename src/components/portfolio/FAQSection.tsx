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
      "Todos mis servicios incluyen 30 días de soporte técnico gratuito después de la entrega. Además, ofrezco planes de mantenimiento mensual para que tu plataforma siempre esté actualizada, segura y optimizada. Nunca te quedas solo.",
  },
  {
    question: "¿Puedo pagar en bolívares o solo en dólares?",
    answer:
      "Acepto pagos en dólares (Zelle, PayPal, tarjeta de crédito) y también en bolívares a la tasa del día. Para proyectos grandes ofrezco planes de pago a cuotas. Escríbeme y buscamos la mejor opción para ti.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="group border border-[rgba(107,127,78,0.1)] hover:border-[#6B7F4E]/25 rounded-lg overflow-hidden transition-all duration-300 bg-[#1E1B16]/60"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-2.5 flex-1">
          <div className="w-7 h-7 rounded-md bg-[#6B7F4E]/10 flex items-center justify-center flex-shrink-0">
            <HelpCircle size={14} className="text-[#6B7F4E]" />
          </div>
          <span className="text-[#E2D9CC] font-medium text-xs md:text-sm pr-4">
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} className="text-[#6B7F4E]" />
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
            <div className="px-5 pb-4 pl-[2.75rem]">
              <p className="text-[#9A8E80] text-xs leading-relaxed">
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
    <section id="faq" className="py-10 md:py-14 relative">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-3">
            Resolvemos tus dudas
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-[#E2D9CC] mb-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-0.5 bg-[#6B7F4E] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          className="space-y-2.5"
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
