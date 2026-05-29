"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Trash2, MessageCircle, Plus } from "lucide-react";
import { useCart } from "./CartContext";

export function FloatingCart() {
  const { items, removeItem, clearCart, totalItems, totalPrice, getWhatsAppMessage, isCartOpen, setIsCartOpen } = useCart();

  const waMessage = getWhatsAppMessage();
  const waLink = `https://wa.me/584221754245${waMessage ? `?text=${waMessage}` : ""}`;

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative flex items-center justify-center w-14 h-14 bg-[#6B7F4E] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          style={{
            boxShadow: "0 0 12px rgba(107, 127, 78, 0.4), 0 0 24px rgba(107, 127, 78, 0.15)",
          }}
          aria-label="Carrito de servicios"
        >
          <ShoppingCart size={24} className="text-[#E2D9CC]" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8FA36E] text-[#0F0D0B] rounded-full text-[10px] font-bold flex items-center justify-center cart-badge-pulse">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#1E1B16] border-l border-[rgba(107,127,78,0.2)] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[rgba(107,127,78,0.15)]">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={18} className="text-[#6B7F4E]" />
                  <h3 className="text-[#E2D9CC] font-bold text-sm uppercase tracking-wider">
                    Mi Carrito ({totalItems})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-[#9A8E80] hover:text-[#6B7F4E] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCart size={40} className="text-[#4A5A35] mb-3" />
                    <p className="text-[#9A8E80] text-sm">Tu carrito está vacío</p>
                    <p className="text-[#4A5A35] text-xs mt-1">Agrega servicios para comenzar</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center gap-3 bg-[#0F0D0B] rounded-lg p-3 border border-[rgba(107,127,78,0.15)]"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#6B7F4E]/15 flex items-center justify-center flex-shrink-0">
                          <Plus size={14} className="text-[#6B7F4E]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#E2D9CC] text-xs font-semibold truncate">{item.title}</p>
                          <p className="text-[#9A8E80] text-[10px] uppercase tracking-wider">{item.type}</p>
                        </div>
                        <span className="text-[#8FA36E] text-xs font-bold neon-price whitespace-nowrap">{item.price}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#9A8E80] hover:text-red-400 transition-colors flex-shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-[rgba(107,127,78,0.15)] p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#9A8E80] text-xs uppercase tracking-wider">Total estimado</span>
                    <span className="text-[#8FA36E] font-bold text-lg neon-price">${totalPrice.toFixed(2)} USD</span>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl btn-tech-primary text-[#E2D9CC] font-bold text-xs uppercase tracking-wider"
                  >
                    <MessageCircle size={16} />
                    Consultar por WhatsApp
                  </a>

                  <button
                    onClick={clearCart}
                    className="w-full flex items-center justify-center gap-2 py-2 px-5 rounded-xl btn-tech text-[#9A8E80] font-medium text-[10px] uppercase tracking-wider"
                  >
                    <Trash2 size={12} />
                    Vaciar Carrito
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
