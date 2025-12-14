import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Železobetonové konstrukce na míru | Stavební firma Praha",
  description:
    "Společnost Žebeko se specializuje na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci stavebních projektů v Praze a okolí. Kvalita, spolehlivost a zkušenosti.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
    </>
  );
}
