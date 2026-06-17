export interface MethodologyStep {
  number: string;
  icon: string;
  image: string;
  title: string;
  description: string;
}

export interface MethodologyPillar {
  icon: string;
  text: string;
}

export interface MethodologyContent {
  label: string;
  heading: string;
  headingAccent: string;
  description: string;
  bannerStatement: string;
  bannerAccent: string;
  steps: MethodologyStep[];
  pillars: MethodologyPillar[];
}

export async function getMethodologyContent(): Promise<MethodologyContent> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/methodology`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch methodology content");
  return res.json() as Promise<MethodologyContent>;
}
