import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ŽEBEKO</h3>
            <p className="text-sm mb-4">
              ŽElezo BEtonové KOnstrukce
            </p>
            <p className="text-sm">
              Specializujeme se na výstavbu železobetonových konstrukcí, nosných skeletů a realizaci menších stavebních projektů.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/nase-stavby" className="hover:text-orange-500 transition-colors">
                  Naše stavby
                </Link>
              </li>
              <li>
                <Link href="/reference" className="hover:text-orange-500 transition-colors">
                  Reference
                </Link>
              </li>
              <li>
                <Link href="/kontakty" className="hover:text-orange-500 transition-colors">
                  Kontakty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kontakty" className="hover:text-orange-500 transition-colors">
                  Kontaktní formulář
                </Link>
              </li>
              <li className="text-gray-500">
                Praha a okolí
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ŽEBEKO. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}

