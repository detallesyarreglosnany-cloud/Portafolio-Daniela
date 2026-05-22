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
      "¡Gran pregunta! Implemento sistemas de IA que automatizan tus ventas 24/7. Desde bots de WhatsApp que responden y venden solos, hasta agentes de voz que atienden llamadas, calculadoras interactivas que atraen tráfico, y automatizaciones No-Code que conectan todas tus herramientas. Tu negocio trabaja incluso cuando tú descansas.",
  },
  {
    label: "Ver servicios y precios",
    response:
      "Mis servicios más solicitados:\n• Página de Ventas Premium: desde $89\n• Bot Vendedor WhatsApp 24/7: desde $89\n• Marketplace con Inventario: desde $140\n• Agentes IA Personalizados: desde $180\n• Contenido IA + Edición: desde $35\n• Asesoría Estratégica 1:1: desde $250\n• Auditoría de Ventas: GRATIS\n\n*También tengo servicios en tendencia 2026: Agentes de Voz IA, Social Commerce y Automatización No-Code.\n\n¿Quieres cotizar alguno?",
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

    setMessages((prev) => [...prev, { role: "user", text: option.label }]);
    setShowOptions(false);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (option.response === "WHATSAPP_LINK") {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: "¡Perfecto! Te llevo directamente con Daniela por WhatsApp. Allí te atiende personalmente. ¡Nos vemos! ✨",
          },
        ]);
        setTimeout(() => {
          window.open("https://wa.me/584221754245", "_blank");
        }, 800);
      } else {
        setMessages((prev) => [...prev, { role: "bot", text: option.response }]);
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
            className="w-14 h-14 bg-[#C9A84C] rounded-full shadow-lg flex items-center justify-center hover:bg-[#E8D48B] transition-colors pulse-glow"
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
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                  <Sparkles size={14} className="text-[#C9A84C]" />
                </div>
                <div>
                  <span className="text-[#E8E0D4] font-bold text-sm block">Asistente de Daniela</span>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                    En línea
                  </span>
                </div>
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
