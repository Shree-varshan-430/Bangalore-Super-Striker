import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Team & Coaches | Bangalore Super Strikers FC",
  description:
    "Meet the licensed coaching and technical staff at Bangalore Super Strikers FC, dedicated to developing talent across Karnataka, Chennai, Pondicherry and Nilgiris.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/technical_team" },
};

// Executive Leadership
const executiveLeadership = {
  roleTitle: "Club Founder & President",
  department: "EXECUTIVE LEADERSHIP",
  credential: "BSSFC Executive Directorate",
  image: "/assets/imgs/clubs/president.jpg",
  bio: "Pioneering the expansion of grassroots football excellence and youth scholarship pathways across Karnataka, Tamil Nadu and Pondicherry.",
};

// Official Coaching Staff with photos, transparent name bar & blue hover effect
const coachingStaffList = [
  {
    id: 1,
    name: "Coach 01",
    role: "Senior Head Coach",
    department: "SENIOR SQUAD TRAINING",
    credential: "AIFF / AFC Certified Professional",
    image: "/assets/imgs/coaches/coach-1.png",
    bio: "Directs club curriculum, tactical blueprints, and high-intensity match preparations across Senior and Youth rosters.",
  },
  {
    id: 2,
    name: "Coach 02",
    role: "Technical Lead",
    department: "TECHNICAL LEADERSHIP",
    credential: "Licensed Technical Director",
    image: "/assets/imgs/coaches/coach-2.png",
    bio: "Oversees tactical coordination, pressing transitions, and matchday strategies for competitive state championships.",
  },
  {
    id: 3,
    name: "Coach 03",
    role: "Youth Academy Coach",
    department: "ACADEMY & JUNIOR COHORTS",
    credential: "Youth Football Specialist",
    image: "/assets/imgs/coaches/coach-3.png",
    bio: "Specializes in age-appropriate ball mastery, situational awareness, and foundational technique for grassroots players.",
  },
  {
    id: 4,
    name: "Coach 04",
    role: "Women & Academy Coach",
    department: "WOMEN'S & YOUTH FOOTBALL",
    credential: "Women's Football Development Specialist",
    image: "/assets/imgs/coaches/coach-4.png",
    bio: "Directs women's squad training, youth talent scouting, and progressive technical development pipelines.",
  },
  {
    id: 5,
    name: "Coach 05",
    role: "Development Squad Coach",
    department: "DEVELOPMENT SQUAD TRAINING",
    credential: "Development Squad Coordinator",
    image: "/assets/imgs/coaches/coach-5.png",
    bio: "Mentors emerging talent navigating the transition from academy age groups into senior competitive squads.",
  },
  {
    id: 6,
    name: "Coach 06",
    role: "Goalkeeping Specialist",
    department: "GOALKEEPING CLINIC",
    credential: "Certified Goalkeeping Trainer",
    image: "/assets/imgs/coaches/coach-6.png",
    bio: "Focuses on reflex telemetry, distribution mechanics, aerial dominance, and 1v1 shot-stopping resilience.",
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

          {/* ================= EXECUTIVE LEADERSHIP ================= */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c]">
                CLUB PRESIDENT &amp; FOUNDER
              </h2>
            </div>

            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden p-6 sm:p-10 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Founder Image */}
                <div className="md:col-span-5">
                  <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-md border-2 border-[#e9d319]/40 group">
                    <Image
                      src={executiveLeadership.image}
                      alt={executiveLeadership.roleTitle}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Transparent bar for title */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-black/70 backdrop-blur-md border-t border-white/10 text-center">
                      <span className="text-[10px] font-black uppercase tracking-[2px] text-[#e9d319] block mb-0.5 font-sans">
                        {executiveLeadership.department}
                      </span>
                      <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">
                        {executiveLeadership.roleTitle}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-xs font-black text-[#8c7800] uppercase tracking-wider mb-2 font-sans">
                    <Award size={16} className="text-[#e9d319]" />
                    <span>{executiveLeadership.credential}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#11123c] mb-4">
                    PIONEERING GRASSROOTS EXCELLENCE
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-4">
                    {executiveLeadership.bio}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans mb-6">
                    Committed to developing transparent youth scholarship avenues, high-standard tactical coaching, and modern athletic training facilities for youth across South India.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="btn-dark text-xs px-6 py-3"
                    >
                      CONNECT WITH CLUB
                    </Link>
                    <Link
                      href="/about"
                      className="border border-[#11123c] text-[#11123c] hover:bg-[#11123c] hover:text-white font-black text-xs uppercase px-6 py-3 rounded-lg transition-colors tracking-wider inline-flex items-center"
                    >
                      CLUB PHILOSOPHY →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COACHES SECTION ================= */}
          <div className="pt-10 border-t border-gray-200" id="coaching-staff">
            {/* Section Header */}
            <div className="text-center mb-14">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                TECHNICAL DIRECTORS &amp; SPECIALISTS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c]">
                COACHING STAFF
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2 font-sans">
                Our certified coaching staff guides player development with specialized training in tactical mastery, athletic conditioning, and game temperament.
              </p>
            </div>

            {/* Coaches Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {coachingStaffList.map((coach) => (
                <div
                  key={coach.id}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 hover:border-[#1B4193] transition-all duration-300 bg-white flex flex-col justify-between"
                >
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-gray-50/80 via-white to-gray-100/60 flex items-end justify-center">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Transparent bar for name with blue color on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-black/60 backdrop-blur-md border-t border-white/10 group-hover:bg-[#1B4193] transition-colors duration-300 flex flex-col justify-end text-center">
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[2px] text-[#e9d319] group-hover:text-white/90 transition-colors mb-1 font-sans">
                        {coach.role}
                      </span>
                      <h3 className="font-display font-black text-lg sm:text-xl uppercase text-white tracking-wide transition-colors">
                        {coach.name}
                      </h3>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between bg-white border-t border-gray-100">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#8c7800] mb-3 font-black font-sans">
                        <Award size={15} className="shrink-0 text-[#e9d319]" />
                        <span>{coach.credential}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                        {coach.bio}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-dark text-[11px] w-full justify-center py-2.5 font-sans"
                    >
                      TRAIN WITH US
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
