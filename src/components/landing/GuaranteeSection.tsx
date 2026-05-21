"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#0A0908]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-gold/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center">
              <Shield className="w-10 h-10 text-gold" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-gold font-bold text-xl mb-2">Garantía de 7 días sin riesgo</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Si dentro de los primeros 7 días sientes que Llave Digital no es para ti, te devolvemos el 100% de tu inversión.
              Sin preguntas. Sin complicaciones.{" "}
              <span className="text-gold font-semibold">Tu satisfacción es nuestra prioridad.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
