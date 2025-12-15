"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-white group-hover:text-zebeko-500 transition-colors">
              ŽEBEKO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
            >
              Domů
            </Link>
            <Link
              href="/nase-stavby"
              className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
            >
              Naše stavby
            </Link>
            <Link
              href="/faq"
              className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/kontakty"
              className="bg-zebeko-500 hover:bg-zebeko-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Domů
              </Link>
              <Link
                href="/nase-stavby"
                className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Naše stavby
              </Link>
              <Link
                href="/faq"
                className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/reference"
                className="text-neutral-300 hover:text-zebeko-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reference
              </Link>
              <Link
                href="/kontakty"
                className="bg-zebeko-500 hover:bg-zebeko-600 text-white px-6 py-2 rounded-lg transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

