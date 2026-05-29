"use client";

import { motion } from "framer-motion";
import { Clock, Flame } from "lucide-react";

export function AvailabilityBar() {
  const totalSpots = 8;
  const taken = 5;
  const remaining = totalSpots - taken;
  const percentage = (taken / totalSpots) * 100;

  return (
    <motion.div
      className="w-full bg-[#1E1B16] border-b border-[rgba(107,127,78,0.08)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Flame size={14} className="text-[#6B7F4E]" />
            </motion.div>
            <span className="text-[#E2D9CC] font-medium">
              Solo quedan <span className="text-[#6B7F4E] font-bold">{remaining} plazas</span> este mes
            </span>
          </div>

          <div className="flex items-center gap-3 flex-1 max-w-xs">
            <div className="flex-1 h-1.5 bg-[#0F0D0B] rounded-full overflow-hidden border border-[rgba(107,127,78,0.1)]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4A5A35] to-[#8FA36E] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-[#9A8E80] text-[10px] whitespace-nowrap">
              {taken}/{totalSpots} ocupadas
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-[#9A8E80]">
            <Clock size={10} className="text-[#6B7F4E]" />
            <span>Reserva tu espacio</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
