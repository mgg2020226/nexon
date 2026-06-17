export interface ContactField {
  label: string;
  placeholder: string;
}

export interface ContactContent {
  label: string;
  heading: string;
  description: string;
  fields: {
    name:    ContactField;
    company: ContactField;
    email:   ContactField;
    phone:   ContactField;
    message: ContactField;
  };
  submitLabel: string;
}

export async function getContactContent(): Promise<ContactContent> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/contact`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch contact content");
  return res.json() as Promise<ContactContent>;
}
