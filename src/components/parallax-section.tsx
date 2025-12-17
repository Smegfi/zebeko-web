"use client";

import { useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = "" 
}: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const elementRef = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      setElementTop(elementRef.current.offsetTop);
    }
  }, []);

  const parallaxOffset = (scrollY - elementTop) * speed;

  return (
    <div
      ref={(el) => {
        if (el) elementRef.current = el;
      }}
      className={className}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
