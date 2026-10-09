"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import {
  Trophy,
  Award,
  Medal,
  MapPin,
  Search,
  Filter,
  Calendar,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import tournamentsData from "@/content/tournaments.json";

type YearFilter = "ALL" | "2025" | "2024" | "2023" | "2022";

export default function AchievementsPage() {
  const [selectedYear, setSelectedYear] = useState<YearFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTournaments = useMemo(() => {
    return tournamentsData.filter((item) => {
      const matchYear =
        selectedYear === "ALL" || item.year.toString() === selectedYear;
      const matchQuery =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.result.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ageGroup.toLowerCase().includes(searchQuery.toLowerCase());
      return matchYear && matchQuery;
    });
  }, [selectedYear, searchQuery]);

  const stats = [
    { label: "Tournaments Played", value: "36+" },
    { label: "State & National Circuits", value: "4+" },
    { label: "Podiums & Knockout Runs", value: "12+" },
    { label: "Active Squad Ages", value: "U9 – Senior" },
  ];

  const getResultStyle = (result: string) => {
    const resLower = result.toLowerCase();
    if (resLower.includes("winner") || resLower.includes("champion") || resLower.includes("1st")) {
      return {
        bg: "bg-[#e9d319]/20 text-[#8c7800] border-[#e9d319]",
        icon: Trophy,
      };
    }
    if (resLower.includes("runner") || resLower.includes("2nd") || resLower.includes("podium") || resLower.includes("3rd")) {
      return {
        bg: "bg-[#00a8e8]/15 text-[#0077a8] border-[#00a8e8]",
        icon: Medal,
      };
    }
    if (resLower.includes("semi")) {
      return {
        bg: "bg-purple-100 text-purple-800 border-purple-300",
        icon: Award,
      };
    }
    return {
      bg: "bg-gray-100 text-gray-700 border-gray-300",
      icon: Award,
    };
  };

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        title="Achievements & Milestones"
        backgroundImage="/assets/imgs/clubs/team-1.jpg"
        crumbs={[{ label: "Achievements" }]}
      />

      {/* 2. Key Stats Strip */}
      <section className="bg-[#11123c] text-white py-8 border-b-4 border-[#e9d319]">
        <div className="container-site max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-3">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#e9d319] mb-1">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80 font-sans">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Tournaments Showcase */}
      <section className="py-16 sm:py-24 bg-white" aria-label="Competitive Record">
        <div className="container-site max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Eyebrow and Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="section-subheading mb-2">
              COMPETITIVE HONOURS &amp; TOURNAMENTS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c] mb-4">
              PROVEN TRACK RECORD ON THE PITCH
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-sans">
              From state league championships in Karnataka to national invitations across Goa, Chennai, Tirupur and Nilgiris — SuperStriker teams consistently compete with pride, discipline, and grit.
            </p>
          </div>

          {/* Interactive Filters & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-150">
            {/* Year Filters */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {(["ALL", "2025", "2024", "2023", "2022"] as YearFilter[]).map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedYear === yr
                      ? "bg-[#1B4193] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {yr === "ALL" ? "All Years" : yr}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tournament, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#11123c] focus:outline-none focus:ring-2 focus:ring-[#1B4193] focus:bg-white"
              />
            </div>
          </div>

          {/* Results Count Banner */}
          <div className="flex items-center justify-between mb-6 text-xs text-gray-500 font-sans font-semibold">
            <span>
              Showing {filteredTournaments.length} of {tournamentsData.length} competitive records
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#1B4193] hover:underline cursor-pointer"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Tournament Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTournaments.map((t) => {
              const resStyle = getResultStyle(t.result);
              const ResultIcon = resStyle.icon;

              return (
                <div
                  key={t.id + t.title}
                  className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#1B4193]/50 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Record ID & Year Tag */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-[#11123c] text-white">
                        RECORD #{t.id}
                      </span>
                      <span className="text-xs font-black px-2.5 py-1 rounded bg-gray-100 text-[#11123c]">
                        YEAR {t.year}
                      </span>
                    </div>

                    {/* Tournament Title */}
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight leading-snug text-[#11123c] mb-3 group-hover:text-[#1B4193] transition-colors">
                      {t.title}
                    </h3>

                    {/* Metadata Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold border border-gray-200">
                        {t.ageGroup}
                      </span>
                      {t.location && (
                        <span className="flex items-center gap-1 text-gray-600 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#e9d319] shrink-0" />
                          {t.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="pt-4 border-t border-gray-100 mt-2">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-black uppercase tracking-wider ${resStyle.bg}`}
                    >
                      <ResultIcon className="w-4 h-4 shrink-0" />
                      <span>{t.result}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. SUPER STRIKERS WALL OF FAME TABLE */}
          <div className="mt-20 sm:mt-28">
            <div className="bg-[#11123c] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#e9d319] text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#e9d319] text-[#11123c] flex items-center justify-center font-black shrink-0 shadow-md">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-none">
                      SUPER STRIKERS WALL OF FAME
                    </h3>
                    <p className="text-xs text-white/70 mt-1 font-sans">
                      Complete official register of 36 competitive tournaments and state circuits.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded bg-white/10 text-[#e9d319] self-start sm:self-auto">
                  36 Records
                </span>
              </div>

              {/* Table Wrapper with Clean Scroll */}
              <div className="overflow-x-auto max-h-[600px] overflow-y-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-[#070b19] text-white text-[11px] font-black uppercase tracking-wider border-b border-white/15 z-10">
                    <tr>
                      <th className="py-3.5 px-4">Year</th>
                      <th className="py-3.5 px-4">Tournaments</th>
                      <th className="py-3.5 px-4">Age Category</th>
                      <th className="py-3.5 px-4">Achievements</th>
                      <th className="py-3.5 px-4">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-xs text-white/90 font-sans">
                    {tournamentsData.map((row) => (
                      <tr
                        key={`wall-${row.id}-${row.title}`}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-black text-[#e9d319]">
                          {row.year}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white max-w-xs">
                          {row.title}
                        </td>
                        <td className="py-3.5 px-4 text-white/75">
                          {row.ageGroup}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-white/10 text-[#e9d319] border border-white/15">
                            {row.result}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-white/75">
                          {row.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 5. CTA Section */}
          <div className="mt-16 sm:mt-24 bg-gradient-to-r from-[#11123c] to-[#1B4193] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <p className="text-[#e9d319] text-xs font-black uppercase tracking-[3px] mb-3 font-sans">
                JOIN THE NEXT CHAMPIONSHIP SQUAD
              </p>
              <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
                READY TO WEAR THE SUPERSTRIKER CREST?
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans mb-8">
                Book a trial session or register for academy admission. Our coaches scout year-round across Bangalore, Pondicherry, Chennai, and the Nilgiris.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#e9d319] text-[#11123c] hover:bg-white font-black text-xs uppercase px-8 py-3.5 rounded-none transition-all duration-200 tracking-widest shadow-md"
                >
                  BOOK TRIAL ADMISSION
                </Link>
                <Link
                  href="/players"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#11123c] font-black text-xs uppercase px-8 py-3.5 rounded-none transition-all duration-200 tracking-widest"
                >
                  VIEW PLAYERS ROSTER
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
