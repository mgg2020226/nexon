import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Costumers } from "@/components/ui/costumers";
import { BentoServices } from "@/components/ui/bento-services";
import { Methodology } from "@/components/ui/methodology";
import { GrowthStories } from "@/components/ui/growth-stories";
import { getMethodologyContent } from "@/lib/queries/methodology";
import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { getHeroContent } from "@/lib/queries/hero";
import { getCustomersContent } from "@/lib/queries/customers";
import { getServicesContent } from "@/lib/queries/services";
import { getGrowthStoriesContent } from "@/lib/queries/growth-stories";
import { getAboutContent } from "@/lib/queries/about";
import { getContactContent } from "@/lib/queries/contact";

export default async function Home() {
  const [heroData, customersData, servicesData, growthStoriesData, aboutData, methodologyData, contactData] =
    await Promise.all([
      getHeroContent(),
      getCustomersContent(),
      getServicesContent(),
      getGrowthStoriesContent(),
      getAboutContent(),
      getMethodologyContent(),
      getContactContent(),
    ]);

  return (
    <>
      <Header links={heroData.nav.links} cta={heroData.nav.cta}  href={heroData.nav.href}/>
      <Hero />
      <Costumers logos={customersData.customers} />
      <BentoServices data={servicesData} />
      <Methodology data={methodologyData} />
      <About data={aboutData} />
      <GrowthStories data={growthStoriesData} />
      <Contact data={contactData} />
      <Footer />
    </>
  );
}
