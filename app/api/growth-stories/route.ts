import { NextResponse } from "next/server";
import type { GrowthStoriesContent } from "@/lib/queries/growth-stories";

const content: GrowthStoriesContent = {
  label: "HISTORIAS DE CRECIMIENTO",
  heading: "Resultados que",
  headingAccent: "generamos",
  description:
    "Casos donde la estrategia y ejecución convirtieron desafíos en oportunidades de crecimiento.",
  stories: [
    {
      icon: "Store",
      visual: "expansion",
      title: "Expansión Comercial",
      description:
        "Triplicamos la presencia comercial de una distribuidora en 8 meses, abriendo 3 nuevas regiones con ventas desde el primer trimestre.",
      metric: "+147%",
      metricLabel: "en ingresos",
      link: "#",
    },
    {
      icon: "Globe",
      visual: "markets",
      title: "Nuevos Mercados",
      description:
        "Identificamos y entramos en 5 mercados internacionales para una firma de servicios en menos de un año.",
      metric: "5",
      metricLabel: "mercados nuevos",
      link: "#",
    },
    {
      icon: "Rocket",
      visual: "startup",
      title: "Escalamiento Startup",
      description:
        "Llevamos una startup tecnológica de seed a Serie A, multiplicando su ARR por 8 en 24 meses.",
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
      title: "Inteligencia Comercial",
      description:
        "Implementamos un sistema de inteligencia comercial para decisiones basadas en datos en tiempo real, con ROI de 3.2x.",
      metric: "3.2x",
      metricLabel: "ROI promedio",
      link: "#",
    },
    {
      icon: "Handshake",
      visual: "alliances",
      title: "Alianzas Estratégicas",
      description:
        "Estructuramos alianzas que abrieron canales de distribución con alcance a más de 1M de clientes.",
      metric: "1M+",
      metricLabel: "clientes alcanzados",
      link: "#",
    },
  ],
};

export async function GET() {
  return NextResponse.json(content);
}
