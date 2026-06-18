import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexon",
  description: "Impulsamos el crecimiento empresarial mediante estrategia, desarrollo de negocios, inteligencia de mercado y tecnología. Somos el socio estratégico para empresas que buscan expandirse y generar resultados sostenibles.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ibmPlexSans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
