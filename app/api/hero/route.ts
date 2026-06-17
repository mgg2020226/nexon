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
  },
  badge: "Tu próxima oportunidad",
  heading: {
    lines: ["Impulsamos empresas", "que quieren crecer"],
    accent: "más rápido.",
  },
  description:
    "Convertimos estrategia, desarrollo comercial y marketing en oportunidades reales de crecimiento.",
  cta: {
    text: "Ver cómo trabajamos",
  },
  watermark: "NEXON",
  particleCount: 24,
};

export async function GET() {
  return NextResponse.json(heroContent);
}
