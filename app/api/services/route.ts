import { NextResponse } from "next/server";
import type { ServicesContent } from "@/lib/queries/services";

const servicesContent: ServicesContent = {
  label: "NUESTRA PROPUESTA",
  heading: "Impulsamos cada etapa",
  headingAccent: "de tu crecimiento",
  description:
    "Combinamos estrategia, desarrollo comercial y marketing para transformar oportunidades en resultados reales y sostenibles.",
  services: [
    {
      icon: "TrendingUp",
      image: "/services/estrategia.png",
      title: "Estrategia de Crecimiento",
      description:
        "Diseñamos planes estratégicos alineados con tus objetivos para acelerar ingresos y fortalecer tu posición competitiva.",
      tag: "Estrategia",
    },
    {
      icon: "Target",
      image: "/services/analisis.png",
      title: "Inteligencia de Mercados",
      description:
        "Analizamos mercados, tendencias y competencia para identificar las mejores oportunidades de expansión.",
      tag: "Análisis",
    },
    {
      icon: "Handshake",
      image: "/services/negocios.png",
      title: "Desarrollo de Negocios",
      description:
        "Abrimos puertas a nuevos mercados, generamos alianzas estratégicas y creamos oportunidades comerciales.",
      tag: "Negocios",
    },
    {
      icon: "Zap",
      image: "/services/ventas.png",
      title: "Aceleración de Ingresos",
      description:
        "Optimizamos procesos comerciales y de ventas para convertir más oportunidades en resultados.",
      tag: "Ventas",
    },
    {
      icon: "Megaphone",
      image: "/services/marketing.png",
      title: "Growth Marketing",
      description:
        "Convertimos visibilidad en demanda a través de estrategias de marketing orientadas a resultados.",
      tag: "Marketing",
    },
  ],
};

export async function GET() {
  return NextResponse.json(servicesContent);
}
