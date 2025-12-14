export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            O společnosti ŽEBEKO
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Společnost Žebeko se specializuje na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci menších stavebních projektů, například dětských hřišť.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kvalita</h3>
              <p className="text-gray-600">
                Používáme pouze nejkvalitnější materiály a dodržujeme přísné standardy výstavby.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spolehlivost</h3>
              <p className="text-gray-600">
                Dodržujeme termíny a garantujeme profesionální přístup k každému projektu.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zkušenosti</h3>
              <p className="text-gray-600">
                Máme bohaté zkušenosti s realizací projektů různých velikostí a složitosti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

