import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ConstructionIcon } from "./icons";
import ScrollReveal from "./scroll-reveal";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 text-center">
              Vybrané realizace
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
              Každá stavba má svůj příběh. Tady jsou některé z těch, na které jsme pyšní.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={200 + index * 100}>
                <Link
                  href={`/nase-stavby/${project.id}`}
                  className="group block bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-neutral-800 relative overflow-hidden">
                    {project.images && project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                        <ConstructionIcon className="w-16 h-16 text-neutral-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zebeko-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 mb-3">{project.location}</p>
                    <p className="text-neutral-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Link
                href="/nase-stavby"
                className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Zobrazit všechny stavby
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

