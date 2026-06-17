export interface GrowthStory {
  icon: string;
  visual: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  link: string;
}

export interface GrowthStoriesContent {
  label: string;
  heading: string;
  headingAccent: string;
  description: string;
  stories: GrowthStory[];
}

export async function getGrowthStoriesContent(): Promise<GrowthStoriesContent> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/growth-stories`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch growth stories content");
  return res.json() as Promise<GrowthStoriesContent>;
}
