"use client";

import { Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.23 8.23 0 0 0 4.76 1.52V6.89a4.85 4.85 0 0 1-1-.2z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] pt-12 pb-6">
      {/* Neon separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#39FF14] to-transparent mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-bold text-[#F5F5F5]">
              Daniela{" "}
              <span className="text-[#39FF14] neon-text-glow">Silva</span>
            </span>
            <p className="text-[#888888] text-sm mt-1">
              Estratega Digital &amp; Ventas con IA
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#888888] hover:text-[#39FF14] transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/danidigital3.0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[rgba(57,255,20,0.1)] flex items-center justify-center text-[#888888] hover:text-[#39FF14] hover:border-[#39FF14]/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@elvlog.dedani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[rgba(57,255,20,0.1)] flex items-center justify-center text-[#888888] hover:text-[#39FF14] hover:border-[#39FF14]/30 transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-[rgba(57,255,20,0.08)] pt-6">
          <p className="text-[#888888] text-sm">
            &copy; 2026 Daniela Silva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
