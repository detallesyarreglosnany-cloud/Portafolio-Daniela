"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-[#1A1714] border border-[rgba(201,168,76,0.3)] text-[#E8E0D4] text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbeme por WhatsApp!
      </div>

      <a
        href="https://wa.me/584221754245"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}
