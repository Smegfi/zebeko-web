import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Železobetonové konstrukce na míru | Stavební firma Praha",
  description:
    "Společnost Žebeko se specializuje na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci stavebních projektů v Praze a okolí. Kvalita, spolehlivost a zkušenosti.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
    </>
  );
}
