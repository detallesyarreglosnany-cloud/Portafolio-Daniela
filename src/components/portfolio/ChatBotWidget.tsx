"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, MessageCircle } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
  isTyping?: boolean;
}

const initialMessage: Message = {
  role: "bot",
  text: "¡Hola! Soy el asistente virtual de Daniela. ¿Cómo puedo potenciar tu negocio hoy?",
};

const options = [
  {
    label: "¿Cómo funciona la IA en mi negocio?",
    response:
      "¡Gran pregunta! Implemento sistemas de IA que automatizan tus ventas 24/7. Desde chatbots que responden y venden por WhatsApp, hasta calculadoras interactivas que atraen tráfico. Tu negocio trabaja incluso cuando tú descansas.",
  },
  {
    label: "Ver catálogo de precios",
    response:
      "📄 Servicios base:\n• Landing Page: desde $150\n• Chatbot WhatsApp: desde $200\n• Tienda Online: desde $300\n• Gestión de Redes: desde $150/mes\n• Campañas ADS: desde $200/mes\n\n*Precios referenciales. Contáctame para cotización personalizada.",
  },
  {
    label: "Hablar con Daniela",
    response: "WHATSAPP_LINK",
  },
];

export function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOptionClick = (optionIndex: number) => {
    const option = options[optionIndex];

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: option.label }]);
    setShowOptions(false);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      if (option.response === "WHATSAPP_LINK") {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: "¡Perfecto! Te llevo directamente con Daniela por WhatsApp. 🌟",
          },
        ]);
        // Open WhatsApp after a short delay
        setTimeout(() => {
          window.open("https://wa.me/584221754245", "_blank");
        }, 800);
      } else {
        setMessages((prev) => [...prev, { role: "bot", text: option.response }]);
        // Show options again after response
        setTimeout(() => {
          setShowOptions(true);
        }, 500);
      }
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-[#C9A84C] rounded-full shadow-lg flex items-center justify-center hover:bg-[#E8D48B] transition-colors"
            aria-label="Abrir chat"
          >
            <Sparkles size={24} className="text-[#0F0D0B]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 right-0 w-[320px] sm:w-[360px] max-h-[500px] bg-[#0F0D0B] rounded-2xl border border-[rgba(201,168,76,0.3)] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#1A1714] border-b border-[rgba(201,168,76,0.2)]">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#C9A84C]" />
                <span className="text-[#E8E0D4] font-bold text-sm">Asistente de Daniela</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#8A8278] hover:text-[#C9A84C] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]" style={{ scrollbarWidth: "thin", scrollbarColor: "#C9A84C #0F0D0B" }}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-[#C9A84C] text-[#0F0D0B] rounded-br-md"
                        : "bg-[#1A1714] text-[#E8E0D4] border border-[rgba(201,168,76,0.15)] rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1714] border border-[rgba(201,168,76,0.15)] px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Option Buttons */}
            {showOptions && (
              <div className="p-3 border-t border-[rgba(201,168,76,0.15)] space-y-2">
                {options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-[rgba(201,168,76,0.3)] text-[#C9A84C] text-xs font-medium hover:bg-[#C9A84C] hover:text-[#0F0D0B] transition-all duration-300"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
