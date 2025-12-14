import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Železobetonové konstrukce",
      description: "Komplexní realizace železobetonových konstrukcí pro všechny typy staveb. Od návrhu po finální provedení.",
      icon: "🏗️",
    },
    {
      title: "Skeletové stavby",
      description: "Výstavba nosných skeletů pro kancelářské, průmyslové a obytné budovy. Moderní technologie a spolehlivé provedení.",
      icon: "🏢",
    },
    {
      title: "Drobná výstavba",
      description: "Realizace menších stavebních projektů včetně dětských hřišť, zpevněných ploch a dalších stavebních prací.",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Co děláme
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            Naše služby pokrývají široké spektrum stavebních prací v oblasti železobetonových konstrukcí.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/kontakty"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Zjistit více
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

