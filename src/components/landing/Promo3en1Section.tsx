"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/pixel";
import Image from "next/image";

const HOTMART_3EN1_LINK = "https://go.hotmart.com/S105487769E?ap=6efa";

export function Promo3en1Section() {
  return (
    <section className="py-8 md:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Imagen grande */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30">
              <Image
                src="/images/promo-3en1.jpeg"
                alt="Promoción 3 en 1 - Llave Digital 3.0"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Botón */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="btn-glow-border btn-mega bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold text-xl md:text-2xl px-12 md:px-20 py-8 md:py-10 rounded-xl transition-all duration-300 hover:scale-110 min-w-[280px] md:min-w-[400px]"
              onClick={() => {
                trackInitiateCheckout();
                window.open(HOTMART_3EN1_LINK, "_blank");
              }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Aprovechar 3 en 1
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
