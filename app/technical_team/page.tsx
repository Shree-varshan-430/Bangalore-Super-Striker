import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Team & Coaches | Bangalore Super Strikers FC",
  description:
    "Meet the licensed coaching and technical staff at Bangalore Super Strikers FC, dedicated to developing talent across Karnataka, Chennai, Pondicherry and Nilgiris.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/technical_team" },
};

// Technical staff: Only Founder image is correct; rest have no images and placeholder titles without names
const technicalStaffList = [
  {
    id: 1,
    roleTitle: "Club Founder & President",
    department: "EXECUTIVE LEADERSHIP",
    credential: "BSSFC Executive Directorate",
    hasImage: true,
    image: "/assets/imgs/clubs/president.jpg",
    bio: "Pioneering the expansion of grassroots football excellence and youth scholarship pathways across Karnataka, Tamil Nadu and Pondicherry.",
  },
  {
    id: 2,
    roleTitle: "Technical Director",
    department: "TECHNICAL LEADERSHIP",
    credential: "AIFF / AFC Certified Professional",
    hasImage: false,
    image: "",
    bio: "Directs club curriculum, tactical blueprints, and high-intensity match preparations across Senior and Youth rosters.",
  },
  {
    id: 3,
    roleTitle: "Head Coach",
    department: "SENIOR SQUAD TRAINING",
    credential: "Licensed Coaching Professional",
    hasImage: false,
    image: "",
    bio: "Manages tactical coordination, pressing transitions, and matchday strategies for competitive state championships.",
  },
  {
    id: 4,
    roleTitle: "Goalkeeping Specialist",
    department: "GOALKEEPING CLINIC",
    credential: "Certified Goalkeeping Trainer",
    hasImage: false,
    image: "",
    bio: "Focuses on reflex telemetry, distribution mechanics, aerial dominance, and 1v1 shot-stopping resilience.",
  },
  {
    id: 5,
    roleTitle: "Youth Development Coach",
    department: "ACADEMY & JUNIOR COHORTS",
    credential: "Youth Football Specialist",
    hasImage: false,
    image: "",
    bio: "Specializes in age-appropriate ball mastery, situational awareness, and foundational technique for grassroots players.",
  },
  {
    id: 6,
    roleTitle: "Strength & Conditioning Lead",
    department: "SPORTS SCIENCE & FITNESS",
    credential: "Performance Conditioning Mentor",
    hasImage: false,
    image: "",
    bio: "Directs athletic endurance, agility drills, injury prevention protocols, and post-match recovery telemetry.",
  },
];

export default function TechnicalTeamPage() {
  return (
    <>
      <PageHero
        title="Technical Team & Coaches"
        crumbs={[{ label: "Technical Team" }]}
      />
      <section className="section-py bg-white">
        <div className="container-site max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span
              className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
              style={{ background: "#e9d319", color: "#11123c" }}
            >
              TECHNICAL STAFF &amp; LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c]">
              GUIDING TOMORROW'S CHAMPIONS
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2 font-sans">
              Our technical department features licensed mentors and professionals committed to athletic discipline, sports science, and competitive excellence.
            </p>
          </div>

          {/* Cards Grid: Only founder image shown; rest have clean placeholder crest panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {technicalStaffList.map((member) => (
              <div
                key={member.id}
                className="card-hover bg-white overflow-hidden rounded-2xl shadow-sm border border-gray-200/90 flex flex-col justify-between group hover:border-[#1B4193]/60 transition-all duration-300"
              >
                {/* Visual Area */}
                {member.hasImage ? (
                  /* Founder Image */
                  <div className="card-img relative aspect-[3/3.6] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.roleTitle}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17, 18, 60, 0.95), transparent)",
                      }}
                    >
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 mb-1 inline-block rounded"
                        style={{ background: "#e9d319", color: "#11123c" }}
                      >
                        {member.department}
                      </span>
                      <h3 className="text-white text-lg font-bold font-display uppercase tracking-tight">
                        {member.roleTitle}
                      </h3>
                    </div>
                  </div>
                ) : (
                  /* Placeholders: No fake photos, clean brand aesthetic with Bangalore Crest */
                  <div className="relative aspect-[3/2.5] overflow-hidden bg-gradient-to-br from-[#11123c] via-[#1B4193] to-[#0d2250] flex flex-col items-center justify-center p-6 text-center">
                    <div className="relative w-24 h-24 mb-3 drop-shadow-lg opacity-90 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src="/assets/imgs/crests/bangalore-crest.png"
                        alt="BSSFC Crest"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded"
                      style={{ background: "#e9d319", color: "#11123c" }}
                    >
                      {member.department}
                    </span>
                    <h3 className="text-white text-base sm:text-lg font-bold font-display uppercase tracking-tight mt-2">
                      {member.roleTitle}
                    </h3>
                  </div>
                )}

                {/* Details Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8c7800] mb-3 font-black">
                      <Award size={15} className="shrink-0 text-[#e9d319]" />
                      <span>{member.credential}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-dark text-[11px] w-full justify-center py-2.5"
                  >
                    TRAIN WITH US
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Roster Callout Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#11123c] to-[#1B4193] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <p className="text-[#e9d319] text-xs font-black uppercase tracking-[3px] mb-2 font-sans">
                OFFICIAL SQUAD ROSTER
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight">
                EXPLORE BSSFC PLAYER SQUADS
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl">
                View our registered senior first team and developmental academy squads on the dedicated players portal.
              </p>
            </div>
            <Link
              href="/players"
              className="bg-[#e9d319] text-[#11123c] hover:bg-white font-black text-xs uppercase px-8 py-3.5 transition-all duration-200 tracking-widest shrink-0"
            >
              VIEW PLAYERS PAGE →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
