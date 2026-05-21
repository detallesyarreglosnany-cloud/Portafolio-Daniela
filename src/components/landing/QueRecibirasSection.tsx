"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PackageCheck } from "lucide-react";

export function QueRecibirasSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            ¿Qué recibirás al completar el pago?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Todo lo que incluye tu acceso a La Franquicia IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 max-w-sm w-full">
              <Image
                src="/images/franquicia-ia-recibiras.jpeg"
                alt="Qué recibirás al completar el pago - La Franquicia IA"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { title: "Tu franquicia digital", desc: "Lista para comenzar a vender con el sistema ya armado. No empiezas desde cero." },
              { title: "El embudo que demostró que vende", desc: "Funnel de ventas probado y optimizado. Ya funciona, solo lo replicas." },
              { title: "Formación en Ventas, Marketing e IA", desc: "Aprendes todo lo necesario: ventas, marketing digital y uso de inteligencia artificial." },
              { title: "Comunidad + Acompañamiento Real", desc: "Un espacio privado donde avanzas acompañada. No estás sola en este camino." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-gold/15 rounded-xl p-4 hover:border-gold/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PackageCheck className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-gold font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-foreground/80 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
