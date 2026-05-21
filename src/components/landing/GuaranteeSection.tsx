"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-[#0A0908]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Imagen promocional con garantía y beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 max-w-xs w-full">
              <Image
                src="/images/franquicia-ia-benefits.jpeg"
                alt="Garantía de 7 días sin riesgos - La Franquicia IA"
                width={350}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Texto de garantía */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-gold/20 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-gold font-bold text-lg">Garantía de 7 días sin riesgo</h3>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Si dentro de los primeros 7 días sientes que Llave Digital no es para ti, te devolvemos el 100% de tu inversión.
                Sin preguntas. Sin complicaciones.{" "}
                <span className="text-gold font-semibold">Tu satisfacción es nuestra prioridad.</span>
              </p>
              <div className="grid grid-cols-3 gap-3 mt-2">
                <div className="text-center bg-[#0F0D0B] rounded-lg p-3 border border-gold/10">
                  <p className="text-gold font-bold text-xs">Compra 100%</p>
                  <p className="text-muted-foreground text-[10px]">Segura</p>
                </div>
                <div className="text-center bg-[#0F0D0B] rounded-lg p-3 border border-gold/10">
                  <p className="text-gold font-bold text-xs">Privacidad</p>
                  <p className="text-muted-foreground text-[10px]">Garantizada</p>
                </div>
                <div className="text-center bg-[#0F0D0B] rounded-lg p-3 border border-gold/10">
                  <p className="text-gold font-bold text-xs">100% Virtual</p>
                  <p className="text-muted-foreground text-[10px]">Todo el mundo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
