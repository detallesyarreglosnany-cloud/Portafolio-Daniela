"use client";

import { Instagram, Music2, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0908] border-t border-[rgba(107,127,78,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: Name & Tagline */}
          <div className="text-center md:text-left">
            <span
              className="font-serif text-xl font-bold text-[#6B7F4E]"
              style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
            >
              Daniela Silva
            </span>
            <p className="text-[#9A8E80] text-xs mt-1">
              Estratega Digital &amp; Ventas con IA
            </p>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#9A8E80] hover:text-[#6B7F4E] transition-colors duration-300 text-xs"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Social icons only */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://instagram.com/danidigital3.0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1E1B16] border border-[rgba(107,127,78,0.15)] flex items-center justify-center text-[#9A8E80] hover:text-[#E1306C] hover:border-[#E1306C]/30 transition-all duration-300"
              title="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://tiktok.com/@elvlog.dedani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1E1B16] border border-[rgba(107,127,78,0.15)] flex items-center justify-center text-[#9A8E80] hover:text-white hover:border-white/30 transition-all duration-300"
              title="TikTok"
            >
              <Music2 size={16} />
            </a>
            <a
              href="https://wa.me/584221754245"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1E1B16] border border-[rgba(107,127,78,0.15)] flex items-center justify-center text-[#9A8E80] hover:text-[#25D366] hover:border-[#25D366]/30 transition-all duration-300"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[rgba(107,127,78,0.08)] mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9A8E80] text-[10px]">
            &copy; 2026 Daniela Silva. Todos los derechos reservados.
          </p>
          <p className="text-[#9A8E80]/40 text-[10px]">
            Powered by LLAVE DIGITAL 3.0
          </p>
        </div>
      </div>
    </footer>
  );
}
