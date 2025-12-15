"use client";

import { useState } from "react";
import Link from "next/link";
import { faqData } from "@/data/faq";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                Nejčastější dotazy
              </h1>
              <p className="text-lg text-neutral-700">
                Odpovědi na nejčastější otázky ohledně našich služeb a
                realizací
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden transition-all hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-zebeko-500 focus:ring-inset"
                    aria-expanded={openItems.includes(item.id)}
                  >
                    <h2 className="text-lg font-semibold text-neutral-900 pr-4">
                      {item.question}
                    </h2>
                    <svg
                      className={`w-6 h-6 text-zebeko-500 flex-shrink-0 transition-transform ${
                        openItems.includes(item.id) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(item.id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-neutral-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-zebeko-50 border border-zebeko-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">
                Nenašli jste odpověď?
              </h2>
              <p className="text-neutral-700 mb-4">
                Pokud máte další dotazy, neváhejte nás kontaktovat. Jsme tu pro
                vás a rádi vám pomůžeme.
              </p>
              <Link
                href="/kontakty"
                className="inline-block bg-zebeko-500 hover:bg-zebeko-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

