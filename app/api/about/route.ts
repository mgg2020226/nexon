import { NextResponse } from "next/server";
import type { AboutContent } from "@/lib/queries/about";

const content: AboutContent = {
  label: "¿QUIÉNES SOMOS?",
  heading: "Impulsamos crecimiento, y",
  headingAccent: "nuevas oportunidades",
  paragraphs: [
    {
      text: "En ",
      highlight: "Nexon Group",
      rest: " trabajamos junto a empresas, startups e inversionistas para transformar visión en ejecución.",
    },
    {
      text: "No actuamos como proveedores externos. Nos integramos como ",
      highlight: "socios estratégicos",
      rest: " que acompañan cada etapa del crecimiento empresarial.",
    },
  ],
  stats: [
    { icon: "Building2", value: "+50",  label: "Empresas acompañadas" },
    { icon: "BarChart3", value: "+120", label: "Proyectos ejecutados" },
    { icon: "Globe2",    value: "3",    label: "Países de operación" },
    { icon: "Target",    value: "92%",  label: "Tasa de retención" },
    { icon: "TrendingUp", value: "+8",  label: "Años de experiencia" },
  ],
  card: {
    title: "Crecemos junto a nuestros clientes.",
    description:
      "Aportamos experiencia, conexiones y herramientas para convertir oportunidades en resultados reales y sostenibles.",
  },
};

export async function GET() {
  return NextResponse.json(content);
}
