"use client";

import { motion } from "framer-motion";
import { Clock, Flame } from "lucide-react";

export function AvailabilityBar() {
  // Simulated availability
  const totalSpots = 8;
  const taken = 5;
  const remaining = totalSpots - taken;
  const percentage = (taken / totalSpots) * 100;

  return (
    <motion.div
      className="w-full bg-gradient-to-r from-[#1A1714] via-[#1A1714] to-[#1A1714] border-b border-[rgba(201,168,76,0.1)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left text */}
          <div className="flex items-center gap-2 text-sm">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Flame size={18} className="text-[#C9A84C]" />
            </motion.div>
            <span className="text-[#E8E0D4] font-medium">
              Solo quedan <span className="text-[#C9A84C] font-bold">{remaining} plazas</span> este mes
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 flex-1 max-w-xs">
            <div className="flex-1 h-2 bg-[#0F0D0B] rounded-full overflow-hidden border border-[rgba(201,168,76,0.15)]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8D48B] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-[#8A8278] text-xs whitespace-nowrap">
              {taken}/{totalSpots} ocupadas
            </span>
          </div>

          {/* Right text */}
          <div className="flex items-center gap-1.5 text-xs text-[#8A8278]">
            <Clock size={12} className="text-[#C9A84C]" />
            <span>Reserva tu espacio</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
