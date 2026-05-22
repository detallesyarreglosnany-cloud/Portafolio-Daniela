"use client";

import { Instagram } from "lucide-react";

const navLinks = [
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
    <footer className="bg-[#0F0D0B] border-t border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Name */}
          <div className="text-center md:text-left">
            <span
              className="font-serif text-2xl font-bold text-[#C9A84C]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Daniela Silva
            </span>
            <p className="text-[#8A8278] text-sm mt-1">Estratega Digital &amp; Ventas con IA</p>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center justify-center gap-6">
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
          <div className="flex flex-col items-center md:items-end gap-2">
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
              className="text-[#8A8278] hover:text-[#C9A84C] transition-colors text-sm"
            >
              TikTok: elvlog.dedani
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[rgba(201,168,76,0.15)] mt-8 pt-6 text-center">
          <p className="text-[#8A8278] text-xs">
            &copy; 2026 Daniela Silva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
