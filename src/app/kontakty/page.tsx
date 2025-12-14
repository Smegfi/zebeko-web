import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakty",
  description:
    "Kontaktujte společnost Žebeko pro konzultaci vašeho stavebního projektu. Jsme připraveni zodpovědět vaše dotazy a poskytnout odbornou pomoc.",
};

export default function KontaktyPage() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kontaktujte nás
            </h1>
            <p className="text-lg text-gray-700">
              Máte dotaz nebo zájem o naše služby? Neváhejte nás kontaktovat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontaktní údaje
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Jednatel společnosti
                  </h3>
                  <p className="text-gray-700">
                    Pro více informací o společnosti a našich službách nás
                    kontaktujte prostřednictvím formuláře.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Působnost
                  </h3>
                  <p className="text-gray-700">
                    Praha a okolí
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontaktní formulář
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

