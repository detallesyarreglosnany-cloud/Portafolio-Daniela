"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "María C.", handle: "@maria.conecta", text: "Nunca pensé que desde mi celular podría generar ingresos. En 2 semanas ya tenía mi primera venta. Daniela te explica todo super claro.", avatar: "MC" },
  { name: "Luisa R.", handle: "@luisa.reinventa", text: "Yo no sabía nada de IA ni de ventas online. La comunidad de Daniela me tomó de la mano. Hoy facturo desde casa y le dedico tiempo a mi familia.", avatar: "LR" },
  { name: "Carmen P.", handle: "@carmen.prospera", text: "Tenía miedo de invertir otra vez en algo que no funcionara. Pero esto es real. La IA hace el trabajo y yo solo sigo los pasos. ¡Ya van 8 ventas!", avatar: "CP" },
  { name: "Ana G.", handle: "@ana.growdigital", text: "Soy mamá de dos niños y no tenía tiempo. Con Llave Digital configuré todo en una tarde. A los 10 días ya tenía resultados. Increíble.", avatar: "AG" },
  { name: "Rosa M.", handle: "@rosa.millonaria", text: "Después de tantos cursos vacíos, por fin encontré algo con sustancia. Daniela no te deja sola, te acompaña de verdad.", avatar: "RM" },
  { name: "Patricia V.", handle: "@patricia.vive", text: "Vivo en Venezuela con todos los problemas de luz e internet y aun así facturo. Si yo puedo, tú también. Solo necesitas decidirte.", avatar: "PV" },
  { name: "Gabriela T.", handle: "@gaby.transforma", text: "Mi esposo no creía que esto funcionaba. Cuando vio los primeros dólares entrar, cambió su cara por completo. Ahora me apoya al 100%.", avatar: "GT" },
  { name: "Yolimar D.", handle: "@yoli.digital", text: "Pensé que la IA era solo para programadores. Daniela me demostró que cualquier persona puede. Hoy gano más que en mi trabajo de 8 años.", avatar: "YD" },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 bg-card border border-gold/15 rounded-xl p-5 hover:border-gold/30 transition-colors mx-2">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-[#0F0D0B] font-bold text-sm">{t.avatar}</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gold font-bold text-sm">{t.name}</span>
            <span className="text-muted-foreground text-xs">{t.handle}</span>
          </div>
          <p className="text-foreground/85 text-sm leading-relaxed">{t.text}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Ellas ya lo lograron
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Historias reales de mujeres que cambiaron su realidad
          </p>
        </motion.div>
      </div>
      {/* Horizontal scrolling carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F0D0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0F0D0B] to-transparent z-10 pointer-events-none" />
        <div className="carousel-scroll flex">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
