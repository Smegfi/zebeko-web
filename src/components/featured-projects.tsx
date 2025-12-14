import Link from "next/link";
import { projects } from "@/data/projects";
import { ConstructionIcon } from "./icons";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Vybrané realizace
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            Podívejte se na některé z našich úspěšně dokončených projektů.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/nase-stavby/${project.id}`}
                className="group block bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <ConstructionIcon className="w-16 h-16 text-gray-500" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zebeko-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{project.location}</p>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/nase-stavby"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Zobrazit všechny stavby
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

