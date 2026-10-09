"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CauseBanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "380px" }}
      aria-label="BSSFC Foundation"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/imgs/index1.jpg"
          alt="BSSFC community and grassroots football initiatives"
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(17, 18, 60, 0.88)" }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-py">
        <div className="container-site max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Tag in yellow */}
            <p className="text-xs font-black uppercase tracking-[4px] text-[#e9d319] mb-3 font-sans">
              BSSFC FOUNDATION
            </p>

            {/* Main Heading — STRICTLY PURE WHITE */}
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-5 text-white"
              style={{ color: "#ffffff" }}
            >
              USING FOOTBALL AS A FORCE FOR GOOD
            </h2>

            {/* Body paragraph in white */}
            <p className="text-white/95 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto font-sans font-medium">
              The BSSFC Foundation uses the power of football to create positive social impact, empower underprivileged youth, and build sporting discipline across Karnataka and South India.
            </p>

            <a
              href="https://superstrikersinternational.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan text-xs sm:text-sm px-8 py-3.5"
            >
              LEARN MORE ABOUT FOUNDATION
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
