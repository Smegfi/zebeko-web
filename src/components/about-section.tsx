import { ConstructionIcon, ReliabilityIcon, ExperienceIcon } from "./icons";
import ScrollReveal from "./scroll-reveal";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              O společnosti ŽEBEKO
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Společnost Žebeko se specializuje na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci menších stavebních projektů, například dětských hřišť.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={200}>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg h-full flex flex-col">
                <div className="flex justify-center mb-4 text-zebeko-500/60">
                  <ConstructionIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kvalita</h3>
                <p className="text-gray-600 flex-grow">
                  Používáme pouze nejkvalitnější materiály a dodržujeme přísné standardy výstavby.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg h-full flex flex-col">
                <div className="flex justify-center mb-4 text-zebeko-500/60">
                  <ReliabilityIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spolehlivost</h3>
                <p className="text-gray-600 flex-grow">
                  Dodržujeme termíny a garantujeme profesionální přístup k každému projektu.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg h-full flex flex-col">
                <div className="flex justify-center mb-4 text-zebeko-500/60">
                  <ExperienceIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zkušenosti</h3>
                <p className="text-gray-600 flex-grow">
                  Máme bohaté zkušenosti s realizací projektů různých velikostí a složitosti.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

