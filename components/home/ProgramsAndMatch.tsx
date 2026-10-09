"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, ArrowRight } from "lucide-react";

const juniorPrograms = [
  { label: "Academy Training", href: "/academy_training" },
  { label: "School Coaching", href: "/school_university" },
  { label: "Age Wise Progression", href: "/agewise_progression" },
  { label: "Summer Camp", href: "/summer_camp" },
];

const seniorPrograms = [
  { label: "Academy Training", href: "/academy_training" },
  { label: "University Coaching", href: "/school_university" },
  { label: "State Level Training", href: "/programs" },
  { label: "Summer Camp", href: "/summer_camp" },
];

export default function ProgramsAndMatch() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="what-we-offer"
      className="relative py-20 sm:py-28 overflow-hidden select-none"
      aria-label="What We Offer - Junior & Senior Players"
    >
      {/* Background Image: Pitch & Footballs with Goal Net */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/imgs/what-we-offer-bg.jpg"
          alt="Football coaching field with balls and goal net"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark Navy Brand Overlay ensuring crisp text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#11123c]/88 via-[#11123c]/80 to-[#11123c]/92"
          aria-hidden
        />
      </div>

      <div className="container-site max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Header Block matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-14"
        >
          {/* Eyebrow badge in Brand Yellow */}
          <span
            className="text-[#11123c] text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-md shadow-xs mb-4 inline-block font-sans"
            style={{ background: "#e9d319" }}
          >
            WHAT WE OFFER
          </span>

          {/* Main Title strictly in White bold uppercase */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black uppercase tracking-tight text-white leading-tight mb-3">
            BE A PART OF THE BEST FOOTBALL COACHING ACADEMY IN BANGALORE!
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/90 font-sans max-w-2xl mx-auto mb-4 font-medium">
            Whether you are just starting or on your way to becoming a pro player, BSSFC is the place for you.
          </p>

          {/* Batches prompt in Brand Yellow */}
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#e9d319] font-sans">
            WE HAVE BATCHES FOR :
          </p>
        </motion.div>

        {/* 2 Side-by-Side Cards matching Reference with Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto text-left">
          
          {/* 1. JUNIOR PLAYERS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group border border-white/20 hover:border-[#e9d319]"
            style={{
              background: "linear-gradient(145deg, rgba(27, 65, 147, 0.92) 0%, rgba(17, 18, 60, 0.95) 100%)",
            }}
          >
            {/* Subtle top-right accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#e9d319]/15 to-transparent rounded-tr-3xl pointer-events-none" />

            <div>
              {/* Card Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                JUNIOR PLAYERS
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed mb-8 font-normal">
                Football aspirants and enthusiast between age group 5 years and 16 years.
              </p>

              {/* Programs Checklist */}
              <ul className="space-y-3.5 mb-10">
                {juniorPrograms.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-3 text-sm sm:text-[15px] font-bold text-white hover:text-[#e9d319] transition-colors group/item"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-[#e9d319] shrink-0 transition-transform group-hover/item:scale-110"
                      />
                      <span className="font-sans tracking-wide">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rectangular Outline Button matching reference */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-[#e9d319] hover:border-[#e9d319] hover:text-[#11123c] font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.35)]"
              >
                Contact Now
              </Link>
            </div>
          </motion.div>

          {/* 2. SENIOR PLAYERS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group border border-white/20 hover:border-[#e9d319]"
            style={{
              background: "linear-gradient(145deg, rgba(20, 50, 115, 0.92) 0%, rgba(17, 18, 60, 0.95) 100%)",
            }}
          >
            {/* Subtle top-right accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#e9d319]/15 to-transparent rounded-tr-3xl pointer-events-none" />

            <div>
              {/* Card Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                SENIOR PLAYERS
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed mb-8 font-normal">
                Football aspirants and enthusiast between age group 16 years and 25 years.
              </p>

              {/* Programs Checklist */}
              <ul className="space-y-3.5 mb-10">
                {seniorPrograms.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-3 text-sm sm:text-[15px] font-bold text-white hover:text-[#e9d319] transition-colors group/item"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-[#e9d319] shrink-0 transition-transform group-hover/item:scale-110"
                      />
                      <span className="font-sans tracking-wide">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rectangular Outline Button matching reference */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-[#e9d319] hover:border-[#e9d319] hover:text-[#11123c] font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.35)]"
              >
                Contact Now
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
