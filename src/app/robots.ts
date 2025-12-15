import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://zebeko.cz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // API routes (pokud budou v budoucnu)
          "/_next/", // Next.js interní soubory
          "/admin/", // Admin sekce (pokud bude v budoucnu)
        ],
      },
      // Specifické pravidla pro Googlebot
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Pravidla pro ostatní crawly
      {
        userAgent: ["Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "Sogou"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

