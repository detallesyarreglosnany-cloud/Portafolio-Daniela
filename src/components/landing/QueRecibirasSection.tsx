"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

export function QueRecibirasSection() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 w-full">
            <Image
              src="/images/promo-activa.jpeg"
              alt="Activa tu Franquicia IA - Solo $97 USD - Todo lo que recibes"
              width={600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-lg px-10 py-7 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              trackInitiateCheckout();
              window.open(HOTMART_LINK, "_blank");
            }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Activar mi Llave Digital — $97
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
