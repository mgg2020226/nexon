import { NextResponse } from "next/server";
import type { MethodologyContent } from "@/lib/queries/methodology";

const content: MethodologyContent = {
  label: "Nuestra Metodología",
  heading: "Un proceso claro para",
  headingAccent: "alcanzar resultados",
  description:
    "Nuestro enfoque está basado en soluciones a la medida y resultados medibles.",
  bannerStatement: "No solo diseñamos estrategias.",
  bannerAccent: "Generamos crecimiento real y sostenible.",
  steps: [
    {
      number: "01",
      icon: "Search",
      image: "/methodology/entender.png",
      title: "Entender el negocio",
      description:
        "Analizamos tu modelo de negocio, mercado, operación y objetivos para comprender a fondo tu punto de partida y tus desafíos.",
    },
    {
      number: "02",
      icon: "BarChart2",
      image: "/methodology/identificar.png",
      title: "Identificar oportunidades",
      description:
        "Detectamos oportunidades reales de crecimiento basadas en datos, tendencias de mercado y ventajas competitivas.",
    },
    {
      number: "03",
      icon: "Crosshair",
      image: "/methodology/diseñar.png",
      title: "Diseñar la estrategia",
      description:
        "Creamos un plan estratégico personalizado con acciones claras, prioridades definidas y métricas de éxito.",
    },
    {
      number: "04",
      icon: "Rocket",
      image: "/methodology/ejecuta.png",
      title: "Ejecutar y acompañar",
      description:
        "Implementamos la estrategia junto a tu equipo, brindando acompañamiento cercano para asegurar una ejecución efectiva y ágil.",
    },
    {
      number: "05",
      icon: "Target",
      image: "/methodology/resultados.png",
      title: "Medir resultados",
      description:
        "Evaluamos el impacto, medimos resultados y optimizamos continuamente para escalar el crecimiento de forma sostenible.",
    },
  ],
  pillars: [
    { icon: "Users", text: "Socios estratégicos, no proveedores." },
    { icon: "Zap", text: "Enfoque en resultados, no en tareas." },
    { icon: "TrendingUp", text: "Decisiones basadas en datos e inteligencia." },
  ],
};

export async function GET() {
  return NextResponse.json(content);
}
