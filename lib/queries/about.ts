export interface AboutParagraph {
  text: string;
  highlight: string;
  rest: string;
}

export interface AboutStat {
  icon: string;
  value: string;
  label: string;
}

export interface AboutCard {
  title: string;
  description: string;
}

export interface AboutContent {
  label: string;
  heading: string;
  headingAccent: string;
  paragraphs: AboutParagraph[];
  stats: AboutStat[];
  card: AboutCard;
}

export async function getAboutContent(): Promise<AboutContent> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/about`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch about content");
  return res.json() as Promise<AboutContent>;
}
