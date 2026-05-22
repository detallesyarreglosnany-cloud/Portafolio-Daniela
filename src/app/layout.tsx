import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Daniela Silva | Estratega Digital & Ventas con IA",
  description:
    "Portafolio profesional de Daniela Silva. Sistemas de ventas automáticos mediante Inteligencia Artificial. Transformo negocios tradicionales en máquinas de facturación digital.",
  keywords: [
    "Daniela Silva",
    "estratega digital",
    "ventas con IA",
    "inteligencia artificial",
    "chatbots",
    "tiendas online",
    "marketing digital",
    "negocios digitales",
  ],
  authors: [{ name: "Daniela Silva" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Daniela Silva | Estratega Digital & Ventas con IA",
    description:
      "Sistemas de ventas automáticos mediante Inteligencia Artificial. Transformo negocios tradicionales en máquinas de facturación digital.",
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
      </body>
    </html>
  );
}
