"use client";

import { motion } from "framer-motion";
import { Flame, Clock, Star, Zap, Users } from "lucide-react";

const bannerItems = [
  { icon: <Flame size={14} />, text: "Solo quedan 3 plazas" },
  { icon: <Users size={14} />, text: "5/8 ocupadas" },
  { icon: <Clock size={14} />, text: "Reserva tu espacio" },
  { icon: <Star size={14} />, text: "Solo quedan 3 plazas" },
  { icon: <Zap size={14} />, text: "5/8 ocupadas" },
  { icon: <Flame size={14} />, text: "Reserva tu espacio" },
];

export function AvailabilityBar() {
  return (
    <motion.div
      className="w-full bg-[#1E1B16] border-b border-[rgba(107,127,78,0.15)] overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="relative py-2.5">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1E1B16] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1E1B16] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="infinite-marquee-track flex items-center whitespace-nowrap">
          {/* Double the items for seamless loop */}
          {[...bannerItems, ...bannerItems].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 mx-6"
            >
              <span className="text-[#6B7F4E] icon-glow-loop">{item.icon}</span>
              <span className="text-[#E2D9CC] text-xs font-semibold uppercase tracking-wider neon-subtitle">
                {item.text}
              </span>
              <span className="text-[#6B7F4E] mx-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
