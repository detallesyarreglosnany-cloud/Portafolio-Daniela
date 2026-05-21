"use client";

import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/danielasilva.digital", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/danielasilva.digital", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/584221754245", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0908] border-t border-gold/10 py-8 px-4 mt-auto">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gold font-serif font-bold text-lg">Llave Digital 3.0</p>
            <p className="text-muted-foreground text-xs mt-1">
              por Daniela Silva · Afiliada de La Franquicia IA
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-5 h-5 text-gold" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 Llave Digital 3.0. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidad</a>
          </div>
        </div>
        <p className="text-center text-[10px] text-muted-foreground/50 mt-4">
          Este sitio no está afiliado con Facebook, Instagram ni WhatsApp. Los resultados pueden variar. Esto no es una garantía de ingresos.
        </p>
      </div>
    </footer>
  );
}
