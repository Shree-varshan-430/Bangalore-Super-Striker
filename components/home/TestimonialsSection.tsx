"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Exact 3 testimonials from Screenshot 4
const testimonials = [
  {
    quote:
      "I am genuinely impressed by the depth of telemetry and sports science SuperStriker integrates into daily training. The infrastructure matches top European standards.",
    name: "SUBHASHISH ROY",
    role: "FORMER NATIONAL GOALKEEPING COACH",
    subRole: "AIFF Technical Assessor",
    rating: 5,
  },
  {
    quote:
      "SuperStriker played a crucial role in grassroots development in South India. The tactical exposure and match intensity prepared me for top-tier competitive football.",
    name: "JEAKSON THOUNAOJAM",
    role: "PROFESSIONAL MIDFIELDER",
    subRole: "National Team Alumni",
    rating: 5,
  },
  {
    quote:
      "The dual focus on academic excellence alongside elite training gives us complete confidence. The coaches genuinely care about the boys' character, nutrition, and discipline.",
    name: "DR. ARVIND RAO",
    role: "ACADEMY PARENT",
    subRole: "U-15 Residential Cohort",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-[#FBFBFE] select-none border-b border-gray-150 relative overflow-hidden"
      aria-label="Testimonials"
    >
      {/* Subtle hexagonal watermark texture matching Screenshot 4 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg viewBox="0 0 1200 800" className="w-full h-full stroke-[#11123c]" fill="none" strokeWidth="1.5">
          <pattern id="test-hex" width="60" height="103.92" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 60 17.32 L 60 51.96 L 30 69.28 L 0 51.96 L 0 17.32 Z M 30 69.28 L 60 86.6 L 60 121.24 L 30 138.56 L 0 121.24 L 0 86.6 Z"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#test-hex)" stroke="none"></rect>
        </svg>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 text-center">
        
        {/* Header matching Screenshot 4 with Cyan pill tag and Navy Display font */}
        <div className="flex flex-col items-center justify-center gap-2 mb-14 sm:mb-16 text-center">
          <span
            className="text-[#11123c] text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-md shadow-xs"
            style={{ background: "#e9d319" }}
          >
            TESTIMONIALS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#11123c] leading-[1.1]">
            ACCOLADES FROM THOSE<br className="hidden sm:inline" /> WHO MATTER THE MOST
          </h2>
        </div>

        {/* 3 Cards Grid - Identical to Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              className="p-8 sm:p-10 rounded-[28px] bg-white border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              {/* Top row: Cyan Quote icon left, Gold stars right */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-lg font-bold"
                  style={{ background: "rgba(0, 168, 232, 0.1)", color: "#00a8e8" }}
                >
                  “
                </div>
                <div className="flex items-center gap-1 text-[#e9d319] text-sm select-none">
                  {"★".repeat(item.rating)}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-[15px] text-[#374151] leading-relaxed font-normal mb-8">
                “{item.quote}”
              </p>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-0.5">
                <span className="font-display font-black text-base sm:text-lg uppercase text-[#11123c] tracking-tight">
                  {item.name}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a8e8]">
                  {item.role}
                </span>
                <span className="text-[11px] text-[#696484] font-medium">
                  {item.subRole}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
