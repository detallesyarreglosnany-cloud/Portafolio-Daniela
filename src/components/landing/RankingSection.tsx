"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy } from "lucide-react";

const topEmbajadores = [
  { pos: 1, name: "Gabriela Cisneros", handle: "@gabicisneros.mkt", amount: "$32,300" },
  { pos: 2, name: "Dante Federico Juarez", handle: "@fedejuarezoficial", amount: "$31,794" },
  { pos: 3, name: "Ivonne Sepúlveda", handle: "@ivi_sepulveda", amount: "$30,100" },
  { pos: 4, name: "Jesus Rivas", handle: "@kinglalii", amount: "$16,300" },
  { pos: 5, name: "José Alejandro", handle: "@pepingm", amount: "$15,553" },
];

export function RankingSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#0A0908]">
      <div className="max-w-5xl mx-auto">
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
          <p className="text-muted-foreground text-base md:text-lg">
            Lo que los franquiciados han logrado con La Franquicia IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Ranking image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 max-w-sm w-full">
              <Image
                src="/images/franquicia-ia-ranking.jpeg"
                alt="Ranking de Embajadores - La Franquicia IA - $786,571 USD facturados"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Total facturado + Top 5 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-gold/20 rounded-2xl p-6 mb-4 text-center pulse-glow">
              <p className="text-muted-foreground text-sm mb-1">Total facturado por los franquiciados</p>
              <p className="text-gold font-bold text-4xl md:text-5xl font-serif">$786,571</p>
              <p className="text-gold/70 text-sm">USD hasta hoy</p>
            </div>

            <div className="bg-card border border-gold/15 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-gold" />
                <h3 className="text-gold font-bold text-sm">Top 5 Embajadores</h3>
              </div>
              <div className="space-y-2">
                {topEmbajadores.map((e) => (
                  <div
                    key={e.pos}
                    className="flex items-center gap-3 py-2 border-b border-gold/10 last:border-0"
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      e.pos === 1 ? "bg-gold text-[#0F0D0B]" : "bg-gold/15 text-gold"
                    }`}>
                      {e.pos}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground text-sm font-semibold truncate">{e.name}</p>
                      <p className="text-muted-foreground text-xs">{e.handle}</p>
                    </div>
                    <span className="text-gold font-bold text-sm">{e.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
