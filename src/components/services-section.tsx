import Link from "next/link";
import { ConstructionIcon, BuildingIcon, TargetIcon } from "./icons";
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Co děláme
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
              Naše služby pokrývají široké spektrum stavebních prací v oblasti železobetonových konstrukcí.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={index} delay={200 + index * 100}>
                  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 border border-gray-200">
                    <div className="flex justify-center mb-4 text-zebeko-500">
                      <IconComponent className="w-14 h-14" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Link
                href="/kontakty"
                className="inline-block bg-zebeko-500 hover:bg-zebeko-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Zjistit více
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

