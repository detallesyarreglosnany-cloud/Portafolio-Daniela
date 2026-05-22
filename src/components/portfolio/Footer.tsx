"use client";

import { Instagram, Music2 } from "lucide-react";

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
    <footer className="bg-[#0A0908] border-t border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Name & Tagline */}
          <div className="text-center md:text-left">
            <span
              className="font-serif text-2xl font-bold text-[#C9A84C]"
              style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
            >
              Daniela Silva
            </span>
            <p className="text-[#8A8278] text-sm mt-1">
              Estratega Digital &amp; Ventas con IA
            </p>
            <p className="text-[#8A8278] text-xs mt-3 max-w-xs">
              Transformando negocios tradicionales en máquinas de facturación digital con Inteligencia Artificial.
            </p>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#8A8278] hover:text-[#C9A84C] transition-colors duration-300 text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://instagram.com/danidigital3.0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8A8278] hover:text-[#C9A84C] transition-colors text-sm"
            >
              <Instagram size={16} />
              @danidigital3.0
            </a>
            <a
              href="https://tiktok.com/@elvlog.dedani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8A8278] hover:text-[#C9A84C] transition-colors text-sm"
            >
              <Music2 size={16} />
              @elvlog.dedani
            </a>
            <a
              href="https://wa.me/584221754245"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8A8278] hover:text-[#25D366] transition-colors text-sm"
            >
              WhatsApp: +58 422 1754245
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[rgba(201,168,76,0.1)] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#8A8278] text-xs">
            &copy; 2026 Daniela Silva. Todos los derechos reservados.
          </p>
          <p className="text-[#8A8278]/50 text-xs">
            Powered by LLAVE DIGITAL 3.0
          </p>
        </div>
      </div>
    </footer>
  );
}
