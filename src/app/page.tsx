import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import LandingHero from "@/components/landing-hero";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Železobetonové konstrukce na míru | Stavební firma Praha",
  description:
    "ŽEBEKO - stavíme pevné základy pro vaše projekty. Železobetonové konstrukce, skeletové stavby a stavební projekty v Praze a okolí. Kvalita, spolehlivost a zkušenosti.",
};

export default function Home() {
  return (
    <>
      <LandingHero />
      <div id="projekty">
        <StatsSection />
      </div>
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
    </>
  );
}
