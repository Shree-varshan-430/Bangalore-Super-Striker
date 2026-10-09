"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function JoinClubSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 bg-white border-b border-gray-150 select-none relative overflow-hidden"
      aria-label="Join SuperStriker Football Club"
    >
      <div className="container-site max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography and Action Button matching Screenshot 1 */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Sub-header in Yellow */}
            <p className="section-subheading mb-2">
              BE A PART OF THE FAMILY
            </p>

            {/* Main Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-[#11123c] leading-[1.1] mb-6">
              JOIN SUPERSTRIKER FOOTBALL CLUB
            </h2>

            {/* Paragraph Text */}
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-sans font-normal mb-8">
              The SuperStriker Football club offers a unique and holistic approach to nurturing young football talent by seamlessly integrating professional football training with high-quality academics. Designed for aspiring athletes, the program provides a balanced environment where students can pursue their passion for football without compromising on their education.
            </p>

            {/* Clean Outline Button styled exactly like Screenshot 1 */}
            <Link
              href="/contact"
              className="border-2 border-[#1B4193] text-[#1B4193] hover:bg-[#1B4193] hover:text-white font-black text-xs uppercase px-8 py-3.5 transition-all duration-200 tracking-widest inline-flex items-center justify-center shadow-xs"
            >
              LEARN MORE
            </Link>
          </motion.div>

          {/* Right Column: Clean Large Photo matching Screenshot 1 */}
          <motion.div
            className="lg:col-span-7 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-150 bg-gray-50 group">
              <Image
                src="/assets/imgs/clubs/join-club-primary.jpg"
                alt="SuperStriker coach and academy youth players on pitch"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
