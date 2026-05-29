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
  title: "Daniela Silva | Estratega Digital & Ventas con IA — LLAVE DIGITAL 3.0",
  description:
    "Transformo negocios tradicionales en máquinas de facturación digital con Inteligencia Artificial. Bots WhatsApp 24/7, marketplaces, agentes IA, embudos de conversión y automatización. +8 años de trayectoria en Venezuela, Colombia, Perú y EE.UU.",
  keywords: [
    "Daniela Silva",
    "LLAVE DIGITAL 3.0",
    "estratega digital",
    "inteligencia artificial",
    "ventas automáticas",
    "chatbot WhatsApp",
    "marketing digital",
    "negocios digitales",
    "bot vendedor",
    "marketplace",
    "landing page",
    "embudo de ventas",
    "agentes IA",
    "automatización",
    "social commerce",
    "conversión omnicanal",
    "tracking CAPI",
    "Meta Ads",
    "Google Analytics",
  ],
  authors: [{ name: "Daniela Silva" }],
  creator: "Daniela Silva",
  publisher: "LLAVE DIGITAL 3.0",
  robots: "index, follow",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Daniela Silva | Estratega Digital & Ventas con IA",
    description:
      "Sistemas de ventas automáticos con IA. Bots, marketplaces, agentes inteligentes y automatización. +8 años de trayectoria internacional.",
    type: "website",
    locale: "es_VE",
    siteName: "Portafolio Daniela Silva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniela Silva | Estratega Digital & Ventas con IA",
    description:
      "Transformo negocios con IA. Bots WhatsApp, marketplaces, agentes IA y automatización 24/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0F0D0B" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-left"
          toastOptions={{
            style: {
              background: "#1E1B16",
              border: "1px solid rgba(107, 127, 78, 0.25)",
              color: "#E2D9CC",
            },
          }}
        />
      </body>
    </html>
  );
}
