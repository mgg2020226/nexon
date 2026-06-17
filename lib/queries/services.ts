export interface Service {
  icon: string;
  image: string;
  title: string;
  description: string;
  tag: string;
}

export interface ServicesContent {
  label: string;
  heading: string;
  headingAccent: string;
  description: string;
  services: Service[];
}

export async function getServicesContent(): Promise<ServicesContent> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/services`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch services content");
  return res.json() as Promise<ServicesContent>;
}
