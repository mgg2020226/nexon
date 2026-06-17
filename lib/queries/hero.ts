export interface NavLink {
  label: string;
  href: string;
}

export interface HeroNav {
  links: NavLink[];
  cta: string;
}

export interface HeroHeading {
  lines: string[];
  accent: string;
}

export interface HeroCta {
  text: string;
}

export interface HeroContent {
  nav: HeroNav;
  badge: string;
  heading: HeroHeading;
  description: string;
  cta: HeroCta;
  watermark: string;
  particleCount: number;
}

export async function getHeroContent(): Promise<HeroContent> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/hero`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch hero content");
  return res.json() as Promise<HeroContent>;
}
