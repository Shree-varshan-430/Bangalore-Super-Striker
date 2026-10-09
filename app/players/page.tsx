"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users } from "lucide-react";

type Cohort = "ALL" | "SENIOR SQUAD" | "DEVELOPMENT SQUAD" | "YOUTH ACADEMY";

interface PlayerPlaceholder {
  id: number;
  label: string;
  number: string;
  squadTier: string;
  category: "SENIOR SQUAD" | "DEVELOPMENT SQUAD" | "YOUTH ACADEMY";
  positionDetail: string;
  image: string;
  bio: string;
}

const playersList: PlayerPlaceholder[] = [
  {
    id: 1,
    label: "SQUAD PLAYER #01",
    number: "09",
    squadTier: "Senior First Team",
    category: "SENIOR SQUAD",
    positionDetail: "Senior Squad Roster",
    image: "/assets/imgs/clubs/Player1.jpeg",
    bio: "First team squad member representing BSSFC in state league championships and national cup knockout tournaments.",
  },
  {
    id: 2,
    label: "SQUAD PLAYER #02",
    number: "10",
    squadTier: "Senior First Team",
    category: "SENIOR SQUAD",
    positionDetail: "Senior Squad Roster",
    image: "/assets/imgs/clubs/Player2.jpeg",
    bio: "Key playmaker coordinating build-up phases, progressive link play, and central midfield tactical transitions.",
  },
  {
    id: 3,
    label: "SQUAD PLAYER #03",
    number: "07",
    squadTier: "Development Squad",
    category: "DEVELOPMENT SQUAD",
    positionDetail: "Development Squad Prospect",
    image: "/assets/imgs/clubs/Player3.jpeg",
    bio: "Pacey attacking talent developing through competitive regional youth circuits and state tier qualifiers.",
  },
  {
    id: 4,
    label: "SQUAD PLAYER #04",
    number: "01",
    squadTier: "Senior First Team",
    category: "SENIOR SQUAD",
    positionDetail: "Goalkeeping Unit",
    image: "/assets/imgs/clubs/news-goalkeeping.jpg",
    bio: "Commanding shot-stopper trained in aerial command, box organization, and modern sweeper-keeper distribution.",
  },
  {
    id: 5,
    label: "SQUAD PLAYER #05",
    number: "04",
    squadTier: "Senior First Team",
    category: "SENIOR SQUAD",
    positionDetail: "Senior Defensive Unit",
    image: "/assets/imgs/clubs/training-1.jpg",
    bio: "Commanding defensive leader orchestrating high-line defensive structures and aerial duel dominance.",
  },
  {
    id: 6,
    label: "SQUAD PLAYER #06",
    number: "14",
    squadTier: "Youth Academy",
    category: "YOUTH ACADEMY",
    positionDetail: "U15 Youth Circuit",
    image: "/assets/imgs/clubs/news-academy-u15.jpg",
    bio: "Promising academy prospect training in tactical awareness, pressing intensity, and quick-touch passing sequences.",
  },
  {
    id: 7,
    label: "SQUAD PLAYER #07",
    number: "11",
    squadTier: "Development Squad",
    category: "DEVELOPMENT SQUAD",
    positionDetail: "Development Wing Unit",
    image: "/assets/imgs/clubs/training-2.jpg",
    bio: "Agile wide player specializing in 1v1 attacking combinations, cutbacks, and transition pressing.",
  },
  {
    id: 8,
    label: "SQUAD PLAYER #08",
    number: "08",
    squadTier: "Youth Academy",
    category: "YOUTH ACADEMY",
    positionDetail: "U13 Youth Cohort",
    image: "/assets/imgs/clubs/news-scouting.jpg",
    bio: "Grassroots graduate advancing through structured youth circuits into state-level age group competitions.",
  },
];

export default function PlayersPage() {
  const [selectedCohort, setSelectedCohort] = useState<Cohort>("ALL");

  const filteredPlayers =
    selectedCohort === "ALL"
      ? playersList
      : playersList.filter((p) => p.category === selectedCohort);

  return (
    <>
      <PageHero
        title="Players Roster"
        backgroundImage="/assets/imgs/clubs/team-2.jpg"
        crumbs={[{ label: "Players" }]}
      />

      <section className="py-16 sm:py-24 bg-white" aria-label="Official Players Roster">
        <div className="container-site max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="section-subheading mb-2">
              BANGALORE SUPER STRIKERS FC
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c] mb-4">
              OFFICIAL SQUAD ROSTER
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans">
              Our registered squad athletes represent Bangalore Super Strikers FC across senior state leagues, youth cup circuits, and national pathway tournaments.
            </p>
          </div>

          {/* Squad Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 pb-6 border-b border-gray-150">
            {(["ALL", "SENIOR SQUAD", "DEVELOPMENT SQUAD", "YOUTH ACADEMY"] as Cohort[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCohort(tab)}
                className={`px-5 py-2.5 text-xs sm:text-[13px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCohort === tab
                    ? "bg-[#1B4193] text-white shadow-md rounded-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg"
                }`}
              >
                {tab === "ALL" ? "All Squads" : tab}
              </button>
            ))}
          </div>

          {/* Players Cards Grid with Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#1B4193]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Jersey Number */}
                  <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={player.image}
                      alt={player.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#11123c]/95 via-transparent to-transparent opacity-90"
                      aria-hidden
                    />

                    {/* Jersey Number Watermark in Top Right */}
                    <div className="absolute top-3 right-3 font-display font-black text-3xl sm:text-4xl text-white/90 drop-shadow-md">
                      #{player.number}
                    </div>

                    {/* Squad Tier Pill in Bottom Left */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded"
                        style={{ background: "#e9d319", color: "#11123c" }}
                      >
                        {player.squadTier}
                      </span>
                    </div>
                  </div>

                  {/* Player Content with Placeholder Labels */}
                  <div className="p-5">
                    <p className="text-[11px] font-bold text-[#1B4193] uppercase tracking-wider mb-1 font-sans">
                      {player.positionDetail}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-[#11123c] mb-2 group-hover:text-[#1B4193] transition-colors">
                      {player.label}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                      {player.bio}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-150 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      India
                    </span>
                    <Link
                      href="/contact"
                      className="text-[11px] font-black uppercase tracking-wider text-[#1B4193] hover:text-[#e9d319] transition-colors"
                    >
                      TRIALS INQUIRY →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 sm:mt-24 bg-gradient-to-r from-[#11123c] to-[#1B4193] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <p className="text-[#e9d319] text-xs font-black uppercase tracking-[3px] mb-2 font-sans">
                TRIALS &amp; SCOUTING
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                WANT TO JOIN THE SUPERSTRIKER SQUAD?
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-sans mb-8">
                Official trials for Senior Men's, Women's, and Youth academy squads take place periodically across Bangalore, Pondicherry, Chennai, and the Nilgiris.
              </p>
              <Link
                href="/contact"
                className="bg-[#e9d319] text-[#11123c] hover:bg-white font-black text-xs uppercase px-8 py-3.5 transition-all duration-200 tracking-widest shadow-md inline-block"
              >
                REGISTER FOR TRIALS
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
