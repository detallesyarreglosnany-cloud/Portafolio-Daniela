"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/lib/pixel";
import { Flame } from "lucide-react";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

export function AgitationSection() {
  return (
    <section className="py-8 md:py-10 px-4 bg-[#0A0908]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6">
            El momento de decidir es ahora
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              Cada día que esperas es un día más que sigues en el mismo lugar.{" "}
              <span className="text-gold font-semibold">
                Mientras tú dudas, alguien más ya está cobrando su primera comisión.
              </span>
            </p>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              La IA no va a esperar. El mercado no va a esperar.{" "}
              <span className="text-gold font-semibold">
                Los que actúan hoy serán los que estén facturando mañana.
              </span>{" "}
              Los que esperan... seguirán esperando.
            </p>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              No se trata de suerte. Se trata de decisión.{" "}
              <span className="text-gold font-semibold">
                ¿Vas a dejar que otro mes pase sin cambiar tu realidad?
              </span>
            </p>
          </div>
          <Button
            size="lg"
            className="btn-glow-border bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
            onClick={() => {
              trackInitiateCheckout();
              window.open(HOTMART_LINK, "_blank");
            }}
          >
            <Flame className="w-5 h-5 mr-2" />
            No voy a esperar más
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
