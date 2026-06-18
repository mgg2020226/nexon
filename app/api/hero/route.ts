import { NextResponse } from "next/server";
import type { HeroContent } from "@/lib/queries/hero";

const heroContent: HeroContent = {
  nav: {
    links: [
      { label: "Inicio",      href: "#inicio" },
      { label: "Servicios",   href: "#servicios" },
      { label: "Metodología", href: "#metodologia" },
      { label: "Contacto",    href: "#contacto" },
    ],
    cta: "Hablemos",
    href: "https://api.whatsapp.com/send/?phone=573229603465&text=Hello%2C+I%E2%80%99m+interested+in+exploring+how+Nexon+can+help+our+company+enter+and+grow+in+the+Colombian+market.&type=phone_number&app_absent=0",
  },
  heading: {
    lines: ["Impulsamos empresas", "que quieren crecer"],
    accent: "más rápido.",
  },
  description:
    "Convertimos estrategia, desarrollo comercial y marketing en oportunidades reales de crecimiento.",
  cta: {
    text: "Contactanos",
    href: "#contacto"
  },
  watermark: "NEXON",
  particleCount: 24,
};

export async function GET() {
  return NextResponse.json(heroContent);
}
