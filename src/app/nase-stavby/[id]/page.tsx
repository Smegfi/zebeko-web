import ImageGallery from "@/components/image-gallery";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Stavba nenalezena",
    };
  }

  return {
    title: `${project.title} - ${project.location}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/nase-stavby"
            className="inline-flex items-center text-neutral-600 hover:text-zebeko-500 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Zpět na seznam staveb
          </Link>

          <div className="mb-8">
            <span className="inline-block bg-zebeko-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-neutral-600 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-neutral-700 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Galerie
            </h2>
            <ImageGallery images={project.images} title={project.title} />
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <Link
              href="/kontakty"
              className="inline-block bg-zebeko-500 hover:bg-zebeko-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Kontaktujte nás ohledně podobného projektu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

