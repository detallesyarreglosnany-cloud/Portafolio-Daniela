"use client";

import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#141414] text-[#F5F5F5] text-sm px-3 py-1.5 rounded-lg border border-[rgba(57,255,20,0.15)] whitespace-nowrap shadow-lg">
          Chatea conmigo
        </div>
        <div className="w-2 h-2 bg-[#141414] border-b border-r border-[rgba(57,255,20,0.15)] transform rotate-45 -mt-1 ml-4" />
      </div>

      {/* Button */}
      <a
        href="https://wa.me/584221754245"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
}
