import { NextResponse } from "next/server";
import type { CustomersContent } from "@/lib/queries/customers";

const customersContent: CustomersContent = {
  customers: [
    { src: "/clients/logotipo-cae.png", alt: "CAE", height: 28 },
    { src: "/clients/logotipo-fiancol.png", alt: "Fiancol", height: 28 },
    { src: "/clients/logotipo-lavanderia-maritima.png", alt: "Lavandería Marítima", height: 28 },
    { src: "/clients/logotipo-greet-energy.png", alt: "Greet Energy", height: 28 },
    { src: "/clients/logotipo-kovia.png", alt: "Kovia", height: 28 },
    { src: "/clients/logotipo-wow.png", alt: "WOW", height: 28 },
    { src: "/clients/logotipo-vertice.png", alt: "Vértice", height: 28 },
    { src: "/clients/logotipo-outliners.png", alt: "Outliners", height: 28 },
    { src: "/clients/logotipo-vittorino.png", alt: "Vittorino", height: 28 },
    { src: "/clients/logotipo-netwifi.png", alt: "Netwifi", height: 28 },
  ],
};

export async function GET() {
  return NextResponse.json(customersContent);
}
