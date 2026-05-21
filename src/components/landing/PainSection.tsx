"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/lib/pixel";

const HOTMART_LINK = "https://go.hotmart.com/S105487769E?ap=15e3";

const pains = [
  {
    icon: ShoppingCart,
    title: "La humillación silenciosa",
    text: "Cada vez que llegas a la caja a pagar y te toca sacar del carrito porque no te alcanza. Nadie lo nota, pero tú lo sientes en el pecho.",
  },
  {
    icon: Heart,
    title: "La mentira que te cuentas",
    text: 'Cada vez que dices "no necesito eso" cuando sí lo necesitas. Te convences de que está bien conformarte, pero tu corazón sabe la verdad.',
  },
  {
    icon: Moon,
    title: "Las noches sin dormir",
    text: "Cada noche que no duermes pensando cómo vas a comprarle algo a tu hijo. Esa angustia que te aprieta el pecho a las 3am no es vida, es supervivencia.",
  },
];

export function PainSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#0A0908]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-3 text-gold">
            ¿Vives o Sobrevives?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Si te identificas con alguna de estas situaciones, esto es para ti
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <pain.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-gold font-bold text-lg mb-2">{pain.title}</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-[#0F0D0B] font-bold px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => {
              trackInitiateCheckout();
              window.open(HOTMART_LINK, "_blank");
            }}
          >
            Quiero cambiar mi realidad
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
