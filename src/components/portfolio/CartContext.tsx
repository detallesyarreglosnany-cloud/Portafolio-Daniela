"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface CartItem {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  type: "servicio" | "plan";
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getWhatsAppMessage: () => string;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.length;
  const totalPrice = items.reduce((sum, i) => sum + i.priceValue, 0);

  const getWhatsAppMessage = useCallback(() => {
    if (items.length === 0) return "";
    let msg = "Hola Daniela! Me interesa consultar sobre:\n\n";
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.title} (${item.price})\n`;
    });
    msg += "\nTotal estimado: $" + totalPrice.toFixed(2) + " USD";
    msg += "\n\nMe gustaría más información. Gracias!";
    return encodeURIComponent(msg);
  }, [items, totalPrice]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        getWhatsAppMessage,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
