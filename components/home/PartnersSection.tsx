"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, MapPin, GraduationCap, Award, Newspaper } from "lucide-react";

interface PartnerItem {
  name: string;
  src: string;
}

interface PartnerGroup {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  partners: PartnerItem[];
}

const partnerGroups: PartnerGroup[] = [
  {
    id: "sponsor",
    title: "OUR SPONSOR",
    icon: Trophy,
    partners: [
      {
        name: "Anthem Biosciences",
        src: "/assets/imgs/partners/sponsor-anthem-biosciences.jpg",
      },
    ],
  },
  {
    id: "venue",
    title: "VENUE PARTNERS",
    icon: MapPin,
    partners: [
      {
        name: "FITON 24/7 Sports",
        src: "/assets/imgs/partners/venue-fiton-sports.jpg",
      },
      {
        name: "DLFA Football Arena",
        src: "/assets/imgs/partners/venue-dlf.png",
      },
      {
        name: "Community Sports Arena",
        src: "/assets/imgs/partners/venue-community-arena.jpg",
      },
    ],
  },
  {
    id: "residential",
    title: "RESIDENTIAL SCHOOL PARTNERS",
    icon: GraduationCap,
    partners: [
      {
        name: "MIRS International Residential School",
        src: "/assets/imgs/partners/residential-mirs.jpg",
      },
      {
        name: "MGS Residential School",
        src: "/assets/imgs/partners/residential-mgs.jpg",
      },
      {
        name: "BGS International Residential School",
        src: "/assets/imgs/partners/residential-bgs.png",
      },
    ],
  },
  {
    id: "soccer-schools",
    title: "SOCCER SCHOOL PARTNERS",
    icon: Award,
    partners: [
      {
        name: "Advaith Soccer School",
        src: "/assets/imgs/partners/soccer-advaith.webp",
      },
      {
        name: "BS International School",
        src: "/assets/imgs/partners/soccer-bs-international.webp",
      },
      {
        name: "Crescent Castle Public School",
        src: "/assets/imgs/partners/soccer-crescent-castle.jpg",
      },
      {
        name: "Hillfort Public School",
        src: "/assets/imgs/partners/soccer-hillfort.png",
      },
      {
        name: "ICS Soccer Academy",
        src: "/assets/imgs/partners/soccer-ics.png",
      },
      {
        name: "Mount Litera Zee School",
        src: "/assets/imgs/partners/soccer-mount-litera.jpg",
      },
    ],
  },
  {
    id: "media",
    title: "PRINT MEDIA PARTNERS",
    icon: Newspaper,
    partners: [
      {
        name: "Pondicherry Broadcast",
        src: "/assets/imgs/partners/media-pb.jpg",
      },
      {
        name: "SV Media & News",
        src: "/assets/imgs/partners/media-sv.jpg",
      },
    ],
  },
];

export default function PartnersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="partners"
      className="py-16 sm:py-24 bg-white border-b border-gray-150 select-none overflow-hidden"
      aria-label="Our Collaborative Network"
    >
      <div className="container-site max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header matching Screenshot 1 */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <span
            className="text-[#11123c] text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-md shadow-xs mb-3"
            style={{ background: "#e9d319" }}
          >
            COLLABORATIVE PARTNERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c]">
            OUR COLLABORATIVE NETWORK
          </h2>
          <div className="w-14 h-1 bg-[#11123c] mt-3 rounded-full" />
        </div>

        {/* Groups stack matching Screenshot 1 layout */}
        <div className="flex flex-col items-center gap-12 sm:gap-14">
          {partnerGroups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                className="w-full flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * groupIdx }}
              >
                {/* Group Heading */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Icon className="w-4 h-4 text-[#11123c]" />
                  <h3 className="font-display text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-[#11123c]">
                    {group.title}
                  </h3>
                </div>

                {/* Cards Container */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {group.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="w-44 sm:w-52 h-20 sm:h-24 rounded-xl sm:rounded-2xl border border-gray-300 bg-white p-3.5 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#1B4193] transition-all duration-200 group"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={partner.src}
                          alt={partner.name}
                          fill
                          className="object-contain p-1 filter grayscale-0 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 176px, 208px"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle separator line between groups except last */}
                {groupIdx < partnerGroups.length - 1 && (
                  <div className="w-24 h-px bg-gray-200 mt-12 sm:mt-14" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
