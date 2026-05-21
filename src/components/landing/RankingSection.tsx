"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RankingSection() {
  return (
    <section className="py-10 md:py-14 px-4 bg-[#0A0908]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gold mb-3">
            Resultados que hablan
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 w-full">
            <Image
              src="/images/franquicia-ia-ranking.jpeg"
              alt="Ranking de Embajadores - La Franquicia IA - $786,571 USD facturados"
              width={600}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
