"use client";

import { MessageCircle } from "lucide-react";
import { useCart } from "./CartContext";

export function WhatsAppButton() {
  const { totalItems, getWhatsAppMessage } = useCart();
  const waMessage = totalItems > 0 ? getWhatsAppMessage() : "";
  const waLink = `https://wa.me/584221754245${waMessage ? `?text=${waMessage}` : ""}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-[#1E1B16] border border-[rgba(107,127,78,0.2)] text-[#E2D9CC] text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {totalItems > 0
          ? `Enviar ${totalItems} servicio${totalItems > 1 ? "s" : ""} por WhatsApp`
          : "¡Escríbeme por WhatsApp!"}
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#6B7F4E] text-[#E2D9CC] rounded-full text-[8px] font-bold flex items-center justify-center cart-badge-pulse">
            {totalItems}
          </span>
        )}
      </a>
    </div>
  );
}
