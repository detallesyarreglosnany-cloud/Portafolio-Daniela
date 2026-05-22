"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, MessageCircle } from "lucide-react";

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  isHtml?: boolean;
  whatsappLink?: boolean;
}

const initialMessage: ChatMessage = {
  id: 0,
  text: "¡Hola! Soy el asistente virtual de Daniela. ¿Cómo puedo potenciar tu negocio hoy?",
  isBot: true,
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
    response: "",
    whatsappLink: true,
  },
];

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [typing, setTyping] = useState(false);

  const handleOptionClick = (option: (typeof options)[number]) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now(),
      text: option.label,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMsg]);

    if (option.whatsappLink) {
      // Add WhatsApp link message
      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: Date.now() + 1,
          text: "¡Te llevo con Daniela directamente! 💬",
          isBot: true,
          whatsappLink: true,
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 600);
      return;
    }

    // Simulate typing
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        text: option.response,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(219,39,119,0.4)] transition-shadow duration-300"
        style={{
          background: "linear-gradient(135deg, #DB2777, #7C3AED)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Sparkles className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] rounded-2xl overflow-hidden border border-[rgba(57,255,20,0.15)] shadow-2xl flex flex-col"
            style={{ background: "#141414" }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #DB2777, #7C3AED)",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  Asistente de Daniela
                </p>
                <p className="text-white/70 text-xs">En línea</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[50vh]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.isBot
                        ? "bg-[#1A1A1A] text-[#F5F5F5] rounded-bl-md"
                        : "bg-[#DB2777]/20 text-[#F5F5F5] rounded-br-md border border-[#DB2777]/20"
                    }`}
                  >
                    {msg.whatsappLink ? (
                      <div>
                        <p className="mb-2">{msg.text}</p>
                        <a
                          href="https://wa.me/584221754245"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 rounded-lg text-xs hover:bg-[#20BD5A] transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Ir a WhatsApp
                        </a>
                      </div>
                    ) : (
                      <p className="whitespace-pre-line">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1A1A] px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                    <span className="typing-dot w-2 h-2 rounded-full bg-[#DB2777]" />
                    <span className="typing-dot w-2 h-2 rounded-full bg-[#DB2777]" />
                    <span className="typing-dot w-2 h-2 rounded-full bg-[#DB2777]" />
                  </div>
                </div>
              )}
            </div>

            {/* Options */}
            <div className="p-3 border-t border-[rgba(57,255,20,0.1)] space-y-2">
              {options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(219,39,119,0.1), rgba(124,58,237,0.1))",
                    color: "#F5F5F5",
                    border: "1px solid rgba(219,39,119,0.15)",
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
