"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import heroSlides from "@/content/hero.json";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const slide = heroSlides[current];

  return (
    <section
      className="relative h-screen min-h-[580px] max-h-[920px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Hero banner"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== current}
        >
          <Image
            src={s.image}
            alt={s.heading}
            fill
            className="object-cover"
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Hero dark gradient overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden />

      {/* Content — strictly white typography */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-site">
          <div
            key={current}
            className="max-w-[720px] text-white"
            style={{
              animation: "heroFadeUp 0.7s ease forwards",
            }}
          >
            {/* Eyebrow in bright brand yellow with matching marker */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e9d319]" aria-hidden />
              <p
                className="text-xs sm:text-sm font-black uppercase tracking-[4px] text-[#e9d319] font-sans"
                style={{ color: "#e9d319" }}
              >
                {slide.eyebrow}
              </p>
            </div>

            {/* H1 Main Hero Heading in White Outfit font */}
            <h1
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5 drop-shadow-md"
              style={{ color: "#ffffff" }}
            >
              {slide.heading}
            </h1>

            {/* Body copy in clear white */}
            <p
              className="text-sm sm:text-base text-white leading-relaxed mb-8 max-w-[540px] font-sans font-medium drop-shadow-sm"
              style={{ color: "#ffffff" }}
            >
              {slide.body}
            </p>

            {/* CTA button */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href={slide.cta.href}
                className="btn-cyan text-xs sm:text-sm"
              >
                {slide.cta.label}
              </Link>
              <Link
                href="/#fixtures"
                className="btn-outline text-xs sm:text-sm"
              >
                MATCH FIXTURES
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#e9d319] hover:border-[#e9d319] hover:text-[#11123c] transition-all duration-200"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#e9d319] hover:border-[#e9d319] hover:text-[#11123c] transition-all duration-200"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center"
        role="tablist"
        aria-label="Slide indicators"
      >
        {heroSlides.map((s, idx) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`hero-dot ${idx === current ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
