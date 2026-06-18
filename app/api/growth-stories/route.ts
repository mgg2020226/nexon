import { NextResponse } from "next/server";
import type { GrowthStoriesContent } from "@/lib/queries/growth-stories";

const content: GrowthStoriesContent = {
  label: "HISTORIAS DE CRECIMIENTO",
  heading: "Impacto que genera",
  headingAccent: "resultados",
  description:
    "Casos reales donde la estrategia y ejecución convirtieron desafíos en oportunidades de crecimiento sostenible.",
  stories: [
    {
      icon: "Store",
      visual: "expansion",
      title: "Expansión Comercial",
      description:
        "Triplicamos la presencia comercial de una empresa de distribución en 8 meses, abriendo 3 nuevas regiones con ventas desde el primer trimestre.",
      metric: "+147%",
      metricLabel: "en ingresos",
      link: "#",
    },
    {
      icon: "Globe",
      visual: "markets",
      title: "Nuevos Mercados",
      description:
        "Identificamos y explotamos 5 mercados internacionales para una firma de servicios profesionales en menos de un año.",
      metric: "5",
      metricLabel: "mercados nuevos",
      link: "#",
    },
    {
      icon: "Rocket",
      visual: "startup",
      title: "Startups en escalamiento",
      description:
        "Acompañamos a una startup tecnológica desde etapa seed hasta Serie A, multiplicando su ARR por 8 en 24 meses.",
      metric: "8x",
      metricLabel: "en ARR",
      link: "#",
    },
    {
      icon: "Megaphone",
      visual: "marketing",
      title: "Growth marketing",
      description:
        "Rediseñamos el embudo de adquisición de una empresa B2B, reduciendo el CAC un 40% y duplicando las conversiones.",
      metric: "2x",
      metricLabel: "conversiones",
      link: "#",
    },
    {
      icon: "BarChart2",
      visual: "intelligence",
      title: "Inteligencia de negocios",
      description:
        "Implementamos un sistema de inteligencia comercial que permitió tomar decisiones con datos en tiempo real, logrando un ROI de 3.2x.",
      metric: "3.2x",
      metricLabel: "ROI promedio",
      link: "#",
    },
    {
      icon: "Handshake",
      visual: "alliances",
      title: "Alianzas estratégicas",
      description:
        "Estructuramos alianzas comerciales que abrieron canales de distribución con alcance a más de 1M de clientes potenciales.",
      metric: "1M+",
      metricLabel: "clientes potenciales",
      link: "#",
    },
  ],
};

export async function GET() {
  return NextResponse.json(content);
}
