"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/lib/pixel";
import { Key, ArrowRight } from "lucide-react";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <Key className="w-12 h-12 text-gold float-animation" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold gold-shimmer mb-4">
            Tu turno es ahora
          </h2>
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-3">
            No esperes el momento perfecto.{" "}
            <span className="text-gold font-semibold">El momento es ahora.</span>
          </p>
          <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-8">
            Mientras sigues pensando, alguien más ya está facturando. Mientras dudas, alguien más ya
            cambió su realidad. ¿Hasta cuándo vas a esperar?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg px-10 py-7 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                trackInitiateCheckout();
                window.open(HOTMART_LINK, "_blank");
              }}
            >
              <Key className="w-5 h-5 mr-2" />
              Activar mi Llave Digital — $97
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-muted-foreground text-xs mt-4">
            Pago único · Garantía 7 días · Acceso inmediato
          </p>
        </motion.div>
      </div>
    </section>
  );
}
