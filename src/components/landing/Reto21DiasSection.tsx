"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, CheckCircle2, Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_RETO_LINK = "https://go.hotmart.com/L105567868D?ap=0d54";

const retoFeatures = [
  "Aprende a crear contenido impactante con IA en 21 días",
  "Contenido en tendencia que puedes monetizar",
  "Revende el curso o aplica los conocimientos para tus clientes",
  "Sistema paso a paso desde cero",
  "Acceso inmediato y acompañamiento real",
];

export function Reto21DiasSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-[#0A0908]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <Flame className="w-14 h-14 text-gold float-animation" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold gold-shimmer mb-4">
            Reto 21 Días
          </h2>
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Ideal para aprender y crear contenido impactante y en tendencia con IA.{" "}
            <span className="text-gold font-semibold">
              Contenido que puedes monetizar revendiendo el curso o aplicando esos conocimientos para crear contenido para ti o tus clientes.
            </span>
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-gold/30 aspect-video">
            <iframe
              src="https://drive.google.com/file/d/1JJSBXPgDc34If9eiuiu1R2R0WfCZm0tF/preview"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Reto 21 Días - La Franquicia IA"
            />
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border-2 border-gold/40 rounded-2xl p-6 md:p-8 pulse-glow relative overflow-hidden max-w-lg mx-auto"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
          <div className="text-center mb-6">
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              RETO 21 DÍAS
            </span>
            <div className="mt-3">
              <div className="text-gold font-bold text-6xl md:text-7xl font-serif">$69</div>
              <p className="text-muted-foreground text-sm mt-1">Pago único · Acceso inmediato</p>
            </div>
          </div>
          <div className="space-y-3 mb-8">
            {retoFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="btn-glow-border w-full bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg py-7 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            onClick={() => {
              trackInitiateCheckout();
              window.open(HOTMART_RETO_LINK, "_blank");
            }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Quiero el Reto 21 Días — $69
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Acceso inmediato · Acompañamiento real
          </p>
        </motion.div>
      </div>
    </section>
  );
}
