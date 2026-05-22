import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portafolio Daniela | Estratega Digital & Ventas con IA",
  description:
    "Portafolio profesional de Daniela Silva. Sistemas de ventas automáticos mediante Inteligencia Artificial. +8 años de trayectoria internacional.",
  keywords: [
    "Daniela Silva",
    "portafolio",
    "estratega digital",
    "inteligencia artificial",
    "ventas automáticas",
    "chatbot",
    "marketing digital",
    "negocios digitales",
    "LLAVE DIGITAL",
    "bot WhatsApp",
    "marketplace",
    "landing page",
  ],
  authors: [{ name: "Daniela Silva" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Portafolio Daniela | Estratega Digital & Ventas con IA",
    description:
      "Sistemas de ventas automáticos mediante Inteligencia Artificial. +8 años de trayectoria internacional.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-left"
          toastOptions={{
            style: {
              background: "#1A1714",
              border: "1px solid rgba(201, 168, 76, 0.3)",
              color: "#E8E0D4",
            },
          }}
        />
      </body>
    </html>
  );
}
