"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LandingHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(800);
  const [centerOffset, setCenterOffset] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const heroVideos = ["/videos/hero1.mp4", "/videos/hero2.mp4"];

  useEffect(() => {
    setIsVisible(true);
    setWindowHeight(window.innerHeight);

    // Calculate how far right the text column needs to shift to appear centered
    const computeOffset = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const viewportCenter = window.innerWidth / 2;
        const elementCenter = rect.left + rect.width / 2;
        setCenterOffset(viewportCenter - elementCenter);
      }
    };

    computeOffset();
    window.addEventListener("resize", computeOffset);

    const transitionTimer = setTimeout(() => {
      setHasTransitioned(true);
    }, 3600);

    const handleResize = () => setWindowHeight(window.innerHeight);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(transitionTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", computeOffset);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const parallaxOffset =
    !hasTransitioned && scrollY < windowHeight ? scrollY * 0.5 : 0;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)`, willChange: "transform" }}
        >
          <video
            key={heroVideos[currentVideoIndex]}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() =>
              setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length)
            }
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
          </video>
        </div>
        <div
          className="absolute inset-0 bg-linear-to-br from-neutral-900/55 via-neutral-800/45 to-neutral-900/55"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)`, willChange: "transform" }}
        />
      </div>

      {/* Layout — always a 2-col grid so the text column has a stable position to animate from/to */}
      <div className="relative z-10 flex min-h-screen items-start md:items-center">
        <div className="container mx-auto px-4 pb-10 pt-28 sm:px-6 md:pt-24 lg:px-8">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">

            {/* Text column — shifted right to visual center during intro, slides left into place */}
            <div
              ref={textRef}
              className="text-white transition-transform duration-1000 ease-in-out"
              style={{
                transform: hasTransitioned
                  ? "translateX(0)"
                  : `translateX(${centerOffset}px)`,
              }}
            >
              <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-7xl [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]">
                <span
                  className={`block transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "0.1s" }}
                >
                  <span className="text-zebeko-500">ŽE</span>lezo
                </span>
                <span
                  className={`block transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "0.9s" }}
                >
                  <span className="text-zebeko-500">BE</span>tonové
                </span>
                <span
                  className={`block transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "1.7s" }}
                >
                  <span className="text-zebeko-500">KO</span>nstrukce
                </span>
              </h1>

              {/* Subtitle + buttons reveal after transition */}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  hasTransitioned
                    ? "max-h-96 translate-y-0 opacity-100"
                    : "max-h-0 translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: hasTransitioned ? "0.4s" : "0s" }}
              >
                <p className="mt-5 max-w-xl text-lg text-neutral-200 sm:text-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                  Stavíme pevné základy pro vaše projekty. Železobetonové
                  konstrukce, které vydrží.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/kontakty"
                    className="rounded-lg bg-zebeko-500 px-6 py-3 text-center text-base font-semibold text-white transition-all hover:bg-zebeko-600 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Kontaktujte nás
                  </Link>
                  <Link
                    href="#projekty"
                    className="rounded-lg border-2 border-white/70 px-6 py-3 text-center text-base font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-neutral-900 sm:px-8 sm:py-4 sm:text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projekty")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Naše stavby
                  </Link>
                </div>
              </div>
            </div>

            {/* Right card — pops in after transition */}
            <div
              className={`mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl transition-all duration-700 sm:max-w-lg sm:p-8 md:mx-0 md:max-w-none md:rounded-3xl md:p-10 ${
                hasTransitioned
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-0 pointer-events-none"
              }`}
              style={{ transitionDelay: hasTransitioned ? "0.2s" : "0s" }}
            >
              <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
                Nezávazná konzultace zdarma
              </h2>
              <p className="mt-3 text-sm text-neutral-700 sm:mt-4 sm:text-base">
                Popište nám váš projekt a do 24 hodin se vám ozveme s návrhem
                dalšího postupu.
              </p>
              <Link
                href="/kontakty"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-zebeko-500 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-zebeko-600"
              >
                Chci konzultaci
              </Link>
              <div className="mt-5 border-t border-neutral-200 pt-4 text-sm text-neutral-700">
                <p>
                  <span className="font-semibold text-neutral-900">Telefon:</span>{" "}
                  <a
                    href="tel:+420602458370"
                    className="transition-colors hover:text-zebeko-600"
                  >
                    +420 602 458 370
                  </a>
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-neutral-900">E-mail:</span>{" "}
                  <a
                    href="mailto:s.smehyl@centrum.sk"
                    className="transition-colors hover:text-zebeko-600"
                  >
                    s.smehyl@centrum.sk
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
