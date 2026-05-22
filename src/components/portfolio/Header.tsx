"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0D0B]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.15)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-2xl md:text-3xl font-bold text-[#C9A84C] tracking-wide"
            style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
          >
            Daniela Silva
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#8A8278] hover:text-[#C9A84C] transition-colors duration-300 text-xs font-medium tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/584221754245"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow-border inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0B] font-bold px-5 py-2 rounded-lg text-xs uppercase tracking-wider hover:bg-[#E8D48B] transition-colors"
            >
              Contactar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#C9A84C] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0F0D0B]/98 backdrop-blur-xl border-b border-[rgba(201,168,76,0.15)] overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-5 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#E8E0D4] hover:text-[#C9A84C] transition-colors duration-300 text-base font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/584221754245"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0D0B] font-bold px-6 py-2.5 rounded-lg text-sm uppercase tracking-wider"
              >
                Contactar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
