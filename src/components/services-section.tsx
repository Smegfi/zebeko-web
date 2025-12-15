import Link from "next/link";
import { BuildingIcon, ConstructionIcon, TargetIcon } from "./icons";
import ScrollReveal from "./scroll-reveal";

export default function ServicesSection() {
  const services = [
    {
      title: "Železobetonové konstrukce",
      description: "Komplexní realizace železobetonových konstrukcí pro všechny typy staveb. Od návrhu po finální provedení.",
      icon: ConstructionIcon,
    },
    {
      title: "Skeletové stavby",
      description: "Výstavba nosných skeletů pro kancelářské, průmyslové a obytné budovy. Moderní technologie a spolehlivé provedení.",
      icon: BuildingIcon,
    },
    {
      title: "Drobná výstavba",
      description: "Realizace menších stavebních projektů včetně dětských hřišť, zpevněných ploch a dalších stavebních prací.",
      icon: TargetIcon,
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Kartičky nalevo */}
            <div className="space-y-6 order-2 lg:order-1">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ScrollReveal key={index} delay={200 + index * 100}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-[1.02] border border-neutral-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-zebeko-500">
                          <IconComponent className="w-12 h-12" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-neutral-600">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Text napravo */}
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                  S čím dokážeme pomoci
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-lg text-neutral-700 mb-6">
                  Máte projekt, který potřebuje pevné základy? Pomůžeme vám od prvního návrhu až po finální realizaci. Naše zkušenosti sahají od rozsáhlých kancelářských komplexů až po menší projekty, které mají velký význam.
                </p>
                <p className="text-lg text-neutral-700 mb-8">
                  Nezáleží na velikosti vašeho projektu – každý přistupujeme s maximální péčí a profesionálním přístupem. Společně postavíme něco, na co budete hrdí.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link
                  href="/kontakty"
                  className="inline-block bg-zebeko-500 hover:bg-zebeko-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Kontaktujte nás
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

