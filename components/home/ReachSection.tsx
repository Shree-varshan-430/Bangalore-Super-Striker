"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Users, Trophy, Shield, Star, Flag, Award } from "lucide-react";

// Exact reach items specified by user with official brand color palette
const tiles = [
  {
    Icon: MapPin,
    title: "Presence across Pondicherry, Chennai, Nilgiris & Karnataka",
    detail: "Multiple Training Centres",
    accent: "#00B8E0",
  },
  {
    Icon: Users,
    title: "Senior Men's & Women's Squads",
    detail: "Active Senior Teams",
    accent: "#e9d319",
  },
  {
    Icon: Trophy,
    title: "I-League 3rd Division",
    detail: "National Competition",
    accent: "#00B8E0",
  },
  {
    Icon: Shield,
    title: "Junior Football League (JFL)",
    detail: "Junior Competition",
    accent: "#e9d319",
  },
  {
    Icon: Star,
    title: "Development Premier Division League (DPDL)",
    detail: "Development Competition",
    accent: "#00B8E0",
  },
  {
    Icon: Flag,
    title: "Regional Tournaments",
    detail: "KSFA, PSDL & Tamil Nadu Leagues",
    accent: "#e9d319",
  },
  {
    Icon: Award,
    title: "Karnataka State Football Association",
    detail: "Officially Affiliated",
    accent: "#00B8E0",
  },
];

export default function ReachSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="section-py bg-[#F8F9FC] border-b border-gray-200"
      aria-label="Where we play and our reach"
    >
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-xs font-black uppercase tracking-[3px] text-[#a29142] mb-2 font-sans">
            WHERE WE PLAY
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-[#11123c]">
            OUR REACH &amp; COMPETITIONS
          </h2>
          <div className="w-16 h-1 bg-[#11123c] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tiles.map(({ Icon, title, detail, accent }, idx) => (
            <motion.div
              key={title}
              className="p-7 bg-white rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * idx }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: accent }}
              />

              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#11123c] text-white transition-transform group-hover:scale-105"
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <span
                  className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{
                    background: `${accent}18`,
                    color: accent === "#e9d319" ? "#11123c" : accent,
                    border: `1px solid ${accent}40`,
                  }}
                >
                  BSSFC
                </span>
              </div>

              <div>
                <h3
                  className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#11123c] mb-2 leading-snug group-hover:text-[#00B8E0] transition-colors"
                >
                  {title}
                </h3>
                <p className="text-xs font-semibold text-[#696484] tracking-wide font-sans">
                  {detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
