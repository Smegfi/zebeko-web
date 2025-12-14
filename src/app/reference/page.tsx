import type { Metadata } from "next";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Spolupracujeme s předními stavebními společnostmi v České republice. Naši partneři zahrnují Doprastav, Metrostav, Subtera, Eurovia, Skanska a Strabag.",
};

export default function ReferencePage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Naši partneři
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Spolupracujeme s předními stavebními společnostmi v České republice.
              Naše reference zahrnují renomované firmy z oblasti stavebnictví.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center min-h-[120px]"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🏢</div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Jsme hrdí na dlouhodobou spolupráci s těmito společnostmi a na
              spolehlivost, kterou prokazujeme při realizaci společných projektů.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

