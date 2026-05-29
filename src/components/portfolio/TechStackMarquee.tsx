"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "WhatsApp Business", color: "#25D366" },
  { name: "Google Analytics", color: "#E37400" },
  { name: "Meta Ads", color: "#0081FB" },
  { name: "UTMify", color: "#6B7F4E" },
  { name: "Perplexity", color: "#20B8CD" },
  { name: "Claude", color: "#D97706" },
  { name: "Z.ai", color: "#6B7F4E" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Google AI Studio", color: "#EA4335" },
  { name: "DeepSearch", color: "#8FA36E" },
  { name: "Dora.run", color: "#FF6B6B" },
  { name: "Lovable", color: "#6366F1" },
  { name: "Vercel", color: "#E2D9CC" },
  { name: "Base44", color: "#4A5A35" },
  { name: "Kling AI", color: "#FF4500" },
  { name: "HighLevel", color: "#EF4444" },
  { name: "Instagram", color: "#E1306C" },
  { name: "Facebook", color: "#1877F2" },
  { name: "Shopify", color: "#96BF48" },
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Mailchimp", color: "#FFE01B" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Next.js", color: "#E2D9CC" },
  { name: "Prisma", color: "#2D3748" },
  { name: "ElevenLabs", color: "#8B5CF6" },
  { name: "Make", color: "#6D00CC" },
  { name: "Notion", color: "#E2D9CC" },
  { name: "SendGrid", color: "#1A82E2" },
];

export function TechStackMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-8 md:py-10 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 text-center mb-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#6B7F4E]/10 border border-[#6B7F4E]/20 text-[#8FA36E] text-[10px] font-semibold uppercase tracking-wider mb-2">
            Stack Tecnológico
          </span>
          <h3
            className="font-serif text-xl md:text-2xl font-bold text-[#E2D9CC]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Herramientas que Potencian tu Negocio
          </h3>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Left */}
      <div className="overflow-hidden mb-2.5">
        <div className="tech-marquee-left flex gap-2.5 w-max">
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={`r1-${idx}`}
              className="group flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E1B16] border border-[rgba(107,127,78,0.08)] hover:border-[rgba(107,127,78,0.25)] transition-all duration-300 cursor-default"
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: tool.color }}
              />
              <span className="text-[#9A8E80] group-hover:text-[#E2D9CC] text-[10px] font-medium transition-colors duration-300 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right (reversed) */}
      <div className="overflow-hidden">
        <div className="tech-marquee-right flex gap-2.5 w-max">
          {[...tools.slice(14), ...tools.slice(0, 14), ...tools.slice(14), ...tools.slice(0, 14)].map((tool, idx) => (
            <div
              key={`r2-${idx}`}
              className="group flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E1B16] border border-[rgba(107,127,78,0.08)] hover:border-[rgba(107,127,78,0.25)] transition-all duration-300 cursor-default"
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: tool.color, animationDelay: `${idx * 0.1}s` }}
              />
              <span className="text-[#9A8E80] group-hover:text-[#E2D9CC] text-[10px] font-medium transition-colors duration-300 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
