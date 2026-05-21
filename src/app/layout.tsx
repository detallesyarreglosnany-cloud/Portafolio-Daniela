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
  title: "Llave Digital 3.0 | Tu Celular en una Máquina de Ingresos con IA",
  description:
    "Aprende a generar ingresos desde casa usando inteligencia artificial. Sin experiencia técnica. Sin pedir permiso. El sistema de Daniela Silva para mujeres latinas que quieren más.",
  keywords: [
    "ingresos desde casa",
    "inteligencia artificial",
    "mujeres latinas",
    "trabajo desde casa",
    "Llave Digital",
    "Daniela Silva",
    "IA para ingresos",
    "negocios digitales",
  ],
  authors: [{ name: "Daniela Silva" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Llave Digital 3.0 | Tu Celular en una Máquina de Ingresos con IA",
    description:
      "La inteligencia artificial es tu aliada más poderosa. Convierte tu celular en una máquina de ingresos desde casa.",
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
      <head>
        {/* FACEBOOK PIXEL */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1260230959614748');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1260230959614748&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
