import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Kontaktní údaje
              </h2>
              <p className="text-gray-600 mb-6">
                Hledáte partnera k dalšímu projektu? Neváhejte nás kontaktovat.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Jednatel firmy
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium text-gray-900">Štefan Šmehyl</p>
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-zebeko-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a
                        href="tel:+420608020277"
                        className="hover:text-zebeko-500 transition-colors"
                      >
                        +420 608 020 277
                      </a>
                    </p>
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-zebeko-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a
                        href="mailto:s.smehyl@centrum.sk"
                        className="hover:text-zebeko-500 transition-colors"
                      >
                        s.smehyl@centrum.sk
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Pro vyřizování staveb
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium text-gray-900">Juraj Šmehyl</p>
                    <p className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-zebeko-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a
                        href="tel:+420602458370"
                        className="hover:text-zebeko-500 transition-colors"
                      >
                        +420 602 458 370
                      </a>
                    </p>
                  </div>
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

