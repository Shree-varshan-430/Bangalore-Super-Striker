"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const clubs = [
  {
    tier: "SENIOR PRO SQUAD",
    title: "BANGALORE",
    subtitle: "SUPER STRIKERS FC",
    badgeLabel: "BANGALORE SUPER STRIKERS FC",
    footerDetail: "First Team & KSFA Super Division",
    accent: "#00a8e8",
    crest: "/assets/imgs/crests/bangalore-crest.png",
    href: "https://www.bangaloresuperstrikersfc.com/",
    isExternal: false,
  },
  {
    tier: "SENIOR DIVISION",
    title: "CHENNAI",
    subtitle: "SUPER STRIKERS FC",
    badgeLabel: "CHENNAI SUPER STRIKERS FC",
    footerDetail: "Tamil Nadu State & League Squad",
    accent: "#e9d319",
    crest: "/assets/imgs/crests/chennai-crest.png",
    href: "/contact",
    isExternal: false,
  },
  {
    tier: "REGIONAL PRO SQUAD",
    title: "PONDICHERRY",
    subtitle: "SUPER STRIKERS FC",
    badgeLabel: "PONDICHERRY SUPER STRIKERS FC",
    footerDetail: "Coastal Division & Youth Roster",
    accent: "#00a8e8",
    crest: "/assets/imgs/crests/pondicherry-crest.png",
    href: "/contact",
    isExternal: false,
  },
  {
    tier: "INTERNATIONAL & YOUTH",
    title: "SUPER STRIKERS",
    subtitle: "INTERNATIONAL",
    badgeLabel: "SUPER STRIKERS INTERNATIONAL",
    footerDetail: "Grassroots, Youth & Overseas Pathway",
    accent: "#e9d319",
    crest: "/assets/imgs/crests/international-crest.png",
    href: "https://superstrikersinternational.com/",
    isExternal: true,
  },
];

export default function EcosystemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-white select-none border-b border-gray-150 relative overflow-hidden text-center"
      aria-label="Super Striker Clubs"
    >
      {/* Background subtle pitch diagram watermarking */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 flex items-center justify-center">
        <svg viewBox="0 0 1200 800" className="w-full h-full stroke-[#11123c]" fill="none" strokeWidth="2.5">
          <rect x="50" y="50" width="1100" height="700" rx="8"></rect>
          <line x1="600" y1="50" x2="600" y2="750"></line>
          <circle cx="600" cy="400" r="120"></circle>
          <circle cx="600" cy="400" r="4" fill="#11123c"></circle>
          <rect x="50" y="200" width="220" height="400"></rect>
          <rect x="50" y="290" width="80" height="220"></rect>
          <path d="M 270 340 A 100 100 0 0 1 270 460"></path>
          <rect x="930" y="200" width="220" height="400"></rect>
          <rect x="1070" y="290" width="80" height="220"></rect>
          <path d="M 930 340 A 100 100 0 0 0 930 460"></path>
        </svg>
      </div>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Yellow "OUR" badge and bold "OUR CLUBS" */}
        <div className="flex flex-col items-center justify-center gap-2 mb-14 sm:mb-18 text-center">
          <span
            className="text-[#11123c] text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs"
            style={{ background: "#e9d319" }}
          >
            OUR
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11123c]">
            OUR CLUBS
          </h2>
        </div>

        {/* 4 Cards Grid - Large prominent crest logos without white borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl 2xl:max-w-[1440px] mx-auto">
          {clubs.map((club, idx) => (
            <motion.div
              key={club.title + club.subtitle}
              className="relative aspect-[3/4.9] w-full rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.22)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.38)] flex flex-col justify-between p-6 sm:p-7 group cursor-pointer select-none transition-transform duration-300 hover:-translate-y-2 text-center"
              style={{
                background:
                  idx === 0
                    ? "linear-gradient(to bottom, #034A6E, #022A42, #011422)"
                    : idx === 1
                    ? "linear-gradient(to bottom, #043c5c, #022438, #01111c)"
                    : idx === 2
                    ? "linear-gradient(to bottom, #054366, #03263b, #01121d)"
                    : "linear-gradient(to bottom, #033754, #022033, #010e17)",
              }}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
            >
              {club.isExternal ? (
                <a
                  href={club.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-30"
                  aria-label={`Explore ${club.title} ${club.subtitle}`}
                />
              ) : (
                <Link
                  href={club.href}
                  className="absolute inset-0 z-30"
                  aria-label={`Explore ${club.title} ${club.subtitle}`}
                />
              )}

              {/* Glowing radial background blob */}
              <div
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-70 pointer-events-none"
                style={{ backgroundColor: club.accent }}
              />

              {/* Top Text: Tier + Club Name in Gold Gradient */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-1">
                <span className="font-black text-white text-[10px] sm:text-[11px] tracking-[0.25em] uppercase drop-shadow-sm">
                  {club.tier}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-[34px] uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF59E] via-[#E9D319] to-[#C9A208] leading-tight drop-shadow-md">
                  {club.title}<br />
                  <span className="text-xl sm:text-2xl lg:text-[24px]">
                    {club.subtitle}
                  </span>
                </h3>
              </div>

              {/* Center Crest: White border removed, only large prominent official crest */}
              <div className="relative z-10 flex-1 flex items-center justify-center w-full py-2 sm:py-4">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 transition-transform duration-500 group-hover:scale-108 drop-shadow-[0_14px_28px_rgba(0,0,0,0.6)] flex items-center justify-center">
                  <Image
                    src={club.crest}
                    alt={`${club.title} ${club.subtitle} Crest`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 200px, 220px"
                  />
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-1 pt-3 border-t border-white/10">
                <p className="text-[11px] sm:text-xs font-semibold text-white/70 line-clamp-1">
                  {club.footerDetail}
                </p>
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#00a8e8] group-hover:text-white transition-colors">
                    EXPLORE CLUB HUB <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>

              {/* Bottom colored edge bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-300 opacity-70 group-hover:opacity-100"
                style={{ backgroundColor: club.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
