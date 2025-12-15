import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zebeko.cz";
  const now = new Date();

  // Dynamické stránky projektů
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/nase-stavby/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Statické stránky s optimalizovanými priority a frekvencemi
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nase-stavby`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakty`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reference`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projectUrls,
  ];
}

