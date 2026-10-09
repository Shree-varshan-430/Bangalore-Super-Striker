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
      <div className="relative z-10 h-full flex flex-col justify-center pt-[140px] sm:pt-[155px] lg:pt-[165px] pb-24 sm:pb-32">
        <div className="container-site">
          <div
            key={current}
            className="max-w-[700px] text-white"
            style={{
              animation: "heroFadeUp 0.7s ease forwards",
            }}
          >
            {/* Eyebrow in bright brand yellow with high-contrast badge */}
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1.5 rounded-full bg-[#11123c]/85 border border-[#e9d319]/40 backdrop-blur-xs shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#e9d319] shadow-[0_0_8px_#e9d319]" aria-hidden />
              <p
                className="text-xs sm:text-[13px] font-black uppercase tracking-[2.5px] text-[#e9d319] font-sans"
              >
                {slide.eyebrow}
              </p>
            </div>

            {/* H1 Main Hero Heading - Balanced size */}
            <h1
              className="font-display text-2xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-white leading-[1.12] mb-4 drop-shadow-lg"
            >
              {slide.heading}
            </h1>

            {/* Body copy */}
            <p
              className="text-xs sm:text-sm md:text-[15px] text-white/90 leading-relaxed mb-6 max-w-[540px] font-sans font-medium drop-shadow-md"
            >
              {slide.body}
            </p>

            {/* CTA button */}
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href={slide.cta.href}
                className="btn-cyan text-xs sm:text-sm font-black"
              >
                {slide.cta.label}
              </Link>
              <Link
                href="/programs"
                className="btn-outline text-xs sm:text-sm font-black hover:border-[#e9d319] hover:text-[#e9d319]"
              >
                EXPLORE PROGRAMS
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
