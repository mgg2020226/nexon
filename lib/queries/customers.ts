export interface CustomerLogo {
  src: string
  alt: string
  height: number
}

export interface CustomersContent {
  customers: CustomerLogo[]
}

export async function getCustomersContent(): Promise<CustomersContent> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/customers`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch customers content");
  return res.json() as Promise<CustomersContent>;
}
