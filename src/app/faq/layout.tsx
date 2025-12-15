import type { Metadata } from "next";
import Script from "next/script";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "Nejčastější dotazy (FAQ)",
  description:
    "Odpovědi na nejčastější otázky ohledně služeb společnosti ŽEBEKO - železobetonové konstrukce, skeletové stavby a stavební práce v Praze a okolí.",
  keywords: [
    "FAQ",
    "nejčastější dotazy",
    "železobetonové konstrukce",
    "stavební firma Praha",
    "skeletové stavby",
    "betonové konstrukce",
    "ŽEBEKO",
  ],
  openGraph: {
    title: "Nejčastější dotazy | ŽEBEKO",
    description:
      "Odpovědi na nejčastější otázky ohledně služeb společnosti ŽEBEKO - železobetonové konstrukce a stavební práce.",
    url: "https://zebeko.cz/faq",
  },
};

// JSON-LD structured data for SEO
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      {children}
    </>
  );
}

