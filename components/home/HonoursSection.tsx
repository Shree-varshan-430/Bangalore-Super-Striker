"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Crisp white vector trophy silhouettes matching Screenshot 3 exactly
function TrophyChalice({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <circle cx="50" cy="20" r="14" />
      <path d="M26 42 Q 50 36 74 42 L 72 74 Q 68 96 50 98 Q 32 96 28 74 Z" />
      <path d="M46 98 L 46 114 L 32 116 L 32 126 L 68 126 L 68 116 L 54 114 L 54 98 Z" />
      <rect x="28" y="126" width="44" height="10" rx="2" />
    </svg>
  );
}

function TrophyShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <path d="M50 8 L86 26 L86 76 Q86 110 50 130 Q14 110 14 76 L14 26 Z" fill="none" stroke="currentColor" strokeWidth="5.5" />
      <circle cx="50" cy="38" r="8" />
      <path d="M38 50 L62 50 L60 76 Q58 84 50 86 Q42 84 40 76 Z" />
      <path d="M48 86 L48 98 L36 100 L36 106 L64 106 L64 100 L52 98 L52 86 Z" />
      <path d="M38 54 C26 54 26 72 38 74" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M62 54 C74 54 74 72 62 74" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function TrophySpiral({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <circle cx="50" cy="55" r="36" fill="none" stroke="currentColor" strokeWidth="4.5" strokeDasharray="12 6" />
      <path d="M50 24 Q 72 32 68 56 Q 64 74 46 72 Q 32 70 36 52 Q 40 38 54 42" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="50" cy="55" r="8" />
      <rect x="28" y="118" width="44" height="8" rx="2" />
      <path d="M40 100 L40 118 L60 118 L60 100 Z" />
    </svg>
  );
}

function TrophyFederation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <path d="M24 46 Q 50 36 76 46 L 74 68 Q 50 82 26 68 Z" />
      <circle cx="50" cy="36" r="5" />
      <path d="M28 66 Q 30 92 46 98 L 46 112 L 30 114 L 30 126 L 70 126 L 70 114 L 54 112 L 54 98 Q 70 92 72 66 Z" />
      <path d="M24 52 Q 10 66 22 84 Q 28 88 32 80" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M76 52 Q 90 66 78 84 Q 72 88 68 80" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

function TrophyTwoHandled({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <path d="M30 38 L70 38 L68 76 Q66 94 50 96 Q34 94 32 76 Z" />
      <path d="M46 96 L46 114 L30 116 L30 128 L70 128 L70 116 L54 114 L54 96 Z" />
      <path d="M30 44 C 12 44 12 76 33 80" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M70 44 C 88 44 88 76 67 80" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

function TrophySuperCup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" fill="currentColor" className={className}>
      <path d="M34 18 L66 18 L63 86 Q60 104 50 106 Q40 104 37 86 Z" />
      <circle cx="50" cy="112" r="5" />
      <path d="M32 120 L68 120 L68 128 L32 128 Z" />
      <path d="M34 26 C 18 26 20 62 36 74" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M66 26 C 82 26 80 62 64 74" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// 6 Recently finished matches & competitive honours in club brand colors (Royal Blue #1B4193 & Deep Navy #11123c)
const honoursList = [
  {
    year: "2021",
    title: "Thancos' Trophy Knockout",
    subtitle: "Quarter-Finalists / Top 16",
    TrophyIcon: TrophyChalice,
    bg: "#1B4193",
  },
  {
    year: "2021",
    title: "C-Division League Championship",
    subtitle: "4–1 Win vs Murphy Town FC",
    TrophyIcon: TrophyShield,
    bg: "#11123c",
  },
  {
    year: "2023–24",
    title: "Junior Football League (JFL)",
    subtitle: "U9 Division Circuit (60+ Fixtures)",
    TrophyIcon: TrophySpiral,
    bg: "#1B4193",
  },
  {
    year: "2023–24",
    title: "Development Premier Division (DPDL)",
    subtitle: "Youth State Circuit Competitors",
    TrophyIcon: TrophyFederation,
    bg: "#11123c",
  },
  {
    year: "AFFILIATED",
    title: "Karnataka State Football Association",
    subtitle: "Official KSFA Member Club",
    TrophyIcon: TrophyTwoHandled,
    bg: "#1B4193",
  },
  {
    year: "NATIONAL",
    title: "I-League 3rd Division Pathway",
    subtitle: "National Senior Tier",
    TrophyIcon: TrophySuperCup,
    bg: "#11123c",
  },
];

export default function HonoursSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="honours"
      className="py-16 sm:py-24 bg-white select-none overflow-hidden"
      aria-label="Club Honours"
    >
      {/* Title & Eyebrow matching reference styling */}
      <div className="container-site mb-8 sm:mb-10 text-center">
        <p className="section-subheading mb-2">
          CLUB HONOURS &amp; COMPETITIVE HIGHLIGHTS
        </p>
        <h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight"
          style={{ color: "#1B4193" }}
        >
          HONOURS
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2 font-sans">
          Recently finished competitive circuits, championships, and official league milestones.
        </p>
      </div>

      {/* Centered container instead of full-screen width */}
      <div className="container-site max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#11123c]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 w-full">
            {honoursList.map((item, idx) => {
              const Icon = item.TrophyIcon;
              return (
                <motion.div
                  key={item.title + item.year}
                  className="flex flex-col justify-between items-center text-center p-4 sm:p-6 min-h-[320px] sm:min-h-[360px] relative group cursor-pointer transition-all duration-300 hover:brightness-110 text-white border-r border-white/10 last:border-r-0"
                  style={{ backgroundColor: item.bg }}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.05 * idx }}
                >
                  {/* Clean Trophy Silhouette in Center */}
                  <div className="my-auto flex flex-col items-center justify-center py-4 w-full">
                    <div className="w-16 h-24 sm:w-20 sm:h-28 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] text-white">
                      <Icon className="w-full h-full" />
                    </div>
                  </div>

                  {/* Typography Bottom Block: Year in Electric Yellow + Championship Title */}
                  <div className="w-full flex flex-col items-center justify-center space-y-1.5 z-10 pt-2">
                    <p className="text-xs sm:text-[12px] font-black tracking-wider font-sans uppercase text-[#e9d319]">
                      {item.year}
                    </p>
                    <h3 className="font-display text-xs sm:text-sm font-extrabold tracking-tight uppercase leading-tight min-h-[34px] flex items-center justify-center text-white">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-[10px] sm:text-[11px] font-semibold font-sans tracking-tight line-clamp-1 text-white/80">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Chevrons on outer edges */}
          <button
            type="button"
            aria-label="Previous Honours"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-[#1B4193] bg-white/80 hover:bg-white shadow-md transition-all sm:flex"
          >
            <ChevronLeft size={20} strokeWidth={3} />
          </button>
          <button
            type="button"
            aria-label="Next Honours"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center text-[#1B4193] bg-white/80 hover:bg-white shadow-md transition-all sm:flex"
          >
            <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>

        {/* View all 36 achievements CTA button */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 border-2 border-[#1B4193] text-[#1B4193] hover:bg-[#1B4193] hover:text-white font-black text-xs uppercase px-8 py-3.5 transition-all duration-200 tracking-widest shadow-xs"
          >
            VIEW ALL 36 ACHIEVEMENTS &amp; MILESTONES <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
