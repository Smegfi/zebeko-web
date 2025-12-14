import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ŽEBEKO - Železobetonové konstrukce | Stavební firma Praha",
    template: "%s | ŽEBEKO",
  },
  description:
    "Společnost Žebeko se specializuje na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci stavebních projektů v Praze a okolí. Kvalita, spolehlivost a zkušenosti.",
  keywords: [
    "železobetonové konstrukce",
    "stavební firma",
    "betonové stavby",
    "stavební práce Praha",
    "skeletové stavby",
    "železobeton",
    "stavební společnost",
    "Žebeko",
  ],
  authors: [{ name: "ŽEBEKO" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://zebeko.cz",
    siteName: "ŽEBEKO",
    title: "ŽEBEKO - Železobetonové konstrukce | Stavební firma Praha",
    description:
      "Specializujeme se na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci stavebních projektů v Praze a okolí.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ŽEBEKO - Železobetonové konstrukce",
    description:
      "Specializujeme se na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci stavebních projektů.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
