"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";

type Cohort = "ALL" | "SENIOR SQUAD" | "DEVELOPMENT SQUAD" | "YOUTH ACADEMY";

interface PlayerCard {
  id: number;
  number: string;
  squadTier: string;
  category: "SENIOR SQUAD" | "DEVELOPMENT SQUAD" | "YOUTH ACADEMY";
  image: string;
}

const playersList: PlayerCard[] = [
  { id: 1,  number: "01", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5676.png" },
  { id: 2,  number: "02", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5680.png" },
  { id: 3,  number: "03", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5681.png" },
  { id: 4,  number: "04", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5682.png" },
  { id: 5,  number: "05", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5684.png" },
  { id: 6,  number: "06", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5685.png" },
  { id: 7,  number: "07", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5686.png" },
  { id: 8,  number: "08", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5688.png" },
  { id: 9,  number: "09", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5689.png" },
  { id: 10, number: "10", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5690.png" },
  { id: 11, number: "11", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5692.png" },
  { id: 12, number: "12", squadTier: "Senior First Team",   category: "SENIOR SQUAD",      image: "/assets/imgs/players/_IXL5693.png" },
  { id: 13, number: "13", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5696.png" },
  { id: 14, number: "14", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5698.png" },
  { id: 15, number: "15", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5701.png" },
  { id: 16, number: "16", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5702.png" },
  { id: 17, number: "17", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5708.png" },
  { id: 18, number: "18", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5710.png" },
  { id: 19, number: "19", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5711.png" },
  { id: 20, number: "20", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5714.png" },
  { id: 21, number: "21", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5719.png" },
  { id: 22, number: "22", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5722.png" },
  { id: 23, number: "23", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5725.png" },
  { id: 24, number: "24", squadTier: "Development Squad",   category: "DEVELOPMENT SQUAD", image: "/assets/imgs/players/_IXL5726.png" },
  { id: 25, number: "25", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5728.png" },
  { id: 26, number: "26", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5744.png" },
  { id: 27, number: "27", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5746.png" },
  { id: 28, number: "28", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5748.png" },
  { id: 29, number: "29", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5750.png" },
  { id: 30, number: "30", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5751.png" },
  { id: 31, number: "31", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5752.png" },
  { id: 32, number: "32", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5754-2.png" },
  { id: 33, number: "33", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5758.png" },
  { id: 34, number: "34", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5777.png" },
  { id: 35, number: "35", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5778.png" },
  { id: 36, number: "36", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5781.png" },
  { id: 37, number: "37", squadTier: "Youth Academy",       category: "YOUTH ACADEMY",     image: "/assets/imgs/players/_IXL5782.png" },
];

interface CoachItem {
  id: number;
  name: string;
  role: string;
  image: string;
}

const coachesList: CoachItem[] = [
  { id: 1, name: "Ashwin",      role: "Under 17 Coach",         image: "/assets/imgs/coaches/coach-5.png" },
  { id: 2, name: "Pranesh",     role: "Under 11 & Under 15 Coach", image: "/assets/imgs/coaches/coach-3.png" },
  { id: 3, name: "Rajib",       role: "Under 13 Coach",         image: "/assets/imgs/coaches/coach-1.png" },
  { id: 4, name: "Kalyan",      role: "Under 9 Coach",          image: "/assets/imgs/coaches/coach-6.png" },
  { id: 5, name: "Miruthika",   role: "Under 7 Coach",          image: "/assets/imgs/coaches/coach-4.png" },
  { id: 6, name: "Amiyo Halder",role: "Team Physio",            image: "/assets/imgs/coaches/coach-2.png" },
];

const tierColors: Record<string, string> = {
  "Senior First Team":  "#1B4193",
  "Development Squad":  "#16a34a",
  "Youth Academy":      "#b45309",
};

export default function PlayersPage() {
  const [selectedCohort, setSelectedCohort] = useState<Cohort>("ALL");

  const filteredPlayers =
    selectedCohort === "ALL"
      ? playersList
      : playersList.filter((p) => p.category === selectedCohort);

  const counts = {
    ALL: playersList.length,
    "SENIOR SQUAD": playersList.filter((p) => p.category === "SENIOR SQUAD").length,
    "DEVELOPMENT SQUAD": playersList.filter((p) => p.category === "DEVELOPMENT SQUAD").length,
    "YOUTH ACADEMY": playersList.filter((p) => p.category === "YOUTH ACADEMY").length,
  };

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
            <p className="section-subheading mb-2">BANGALORE SUPER STRIKERS FC</p>
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
                <span className="ml-2 opacity-60 font-normal text-[10px]">({counts[tab]})</span>
              </button>
            ))}
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#1B4193]/50 transition-all duration-300 flex flex-col"
              >
                {/* Image — portrait card */}
                <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={player.image}
                    alt={`BSSFC Player #${player.number}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 17vw"
                  />

                  {/* Dark gradient at bottom */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#11123c]/90 via-transparent to-transparent"
                    aria-hidden
                  />

                  {/* Jersey number — top right */}
                  <div className="absolute top-2 right-2 font-display font-black text-2xl text-white/90 drop-shadow-md leading-none">
                    #{player.number}
                  </div>

                  {/* Squad tier pill — bottom */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <span
                      className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded inline-block"
                      style={{
                        background: tierColors[player.squadTier] ?? "#1B4193",
                        color: "#fff",
                      }}
                    >
                      {player.squadTier}
                    </span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-3 py-3 flex items-center justify-between border-t border-gray-100">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">India 🇮🇳</span>
                  <Link
                    href="/contact"
                    className="text-[9px] font-black uppercase tracking-wider text-[#1B4193] hover:text-[#e9d319] transition-colors"
                  >
                    TRIALS →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ===== COACHES SECTION ===== */}
          <div className="mt-20 sm:mt-28 pt-16 border-t border-gray-200" id="coaches">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                TECHNICAL TEAM &amp; MENTORS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c] mb-4">
                COACHES
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-sans">
                Our certified coaching staff guides player development with specialized training in tactical mastery, athletic conditioning, and game temperament.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coachesList.map((coach) => (
                <div
                  key={coach.id}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 hover:border-[#1B4193] transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-gray-50/80 via-white to-gray-100/60 flex items-end justify-center">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-black/60 backdrop-blur-md border-t border-white/10 group-hover:bg-[#1B4193] transition-colors duration-300 flex flex-col justify-end text-center">
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[2px] text-[#e9d319] group-hover:text-white/90 transition-colors mb-1 font-sans">
                        {coach.role}
                      </span>
                      <h3 className="font-display font-black text-lg sm:text-xl uppercase text-white tracking-wide transition-colors">
                        {coach.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
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
