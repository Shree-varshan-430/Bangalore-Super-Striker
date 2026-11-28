import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, Sparkles, Users, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Team & Coaches | Bangalore Super Strikers FC",
  description:
    "Meet the certified coaching staff and technical team at Bangalore Super Strikers FC. Led by President Ramakrishnan D (AFC C License Coach & State Referee) and AIFF-certified coaches.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/technical_team" },
};

// Executive Leadership with exact live website credentials
const executiveLeadership = {
  name: "Ramakrishnan D",
  roleTitle: "Club Founder & President",
  department: "EXECUTIVE LEADERSHIP & HEAD COACH",
  credential: "AFC 'C' License Coach & Certified Karnataka State Referee",
  image: "/assets/imgs/clubs/president-original-hd.png",
  bio: "Ramakrishnan D, the President of Bangalore Super Strikers FC, is an accomplished AFC C License Coach and a certified Karnataka State Referee. With a passion for football and years of experience, he plays a pivotal role in shaping the club's vision and fostering grassroots talent. His expertise in coaching and officiating adds immense value to the development of players and the overall growth of the sport within the community.",
};

// Official Coaching Staff arranged category-wise from above to below
const coachingStaffList = [
  {
    id: 1,
    name: "Ashwin",
    role: "Under 17 Coach",
    department: "ELITE YOUTH SQUAD (U17)",
    credential: "Senior Youth Development Coach",
    image: "/assets/imgs/coaches/coach-5.png",
    bio: "Prepares advanced academy athletes for high-intensity competitive circuits, state championships, and senior first-team transition.",
  },
  {
    id: 2,
    name: "Pranesh",
    role: "Under 11 & Under 15 Coach",
    department: "YOUTH ACADEMY (U11 & U15)",
    credential: "Youth Football Specialist",
    image: "/assets/imgs/coaches/coach-3.png",
    bio: "Directs foundational ball mastery, positional discipline, and game awareness across Under 11 and Under 15 cohorts.",
  },
  {
    id: 3,
    name: "Rajib",
    role: "Under 13 Coach",
    department: "JUNIOR SQUAD TRAINING (U13)",
    credential: "Licensed Youth Coach",
    image: "/assets/imgs/coaches/coach-1.png",
    bio: "Leads technical development, tactical transitions, and match preparation for the Under 13 youth squad.",
  },
  {
    id: 4,
    name: "Kalyan",
    role: "Under 9 Coach",
    department: "FOUNDATION COHORTS (U9)",
    credential: "Junior Academy Coach",
    image: "/assets/imgs/coaches/coach-6.png",
    bio: "Mentors emerging talent in core football techniques, small-sided game transitions, and athletic agility for the Under 9 cohort.",
  },
  {
    id: 5,
    name: "Miruthika",
    role: "Under 7 Coach",
    department: "GRASSROOTS DEVELOPMENT (U7)",
    credential: "Grassroots Football Specialist",
    image: "/assets/imgs/coaches/coach-4.png",
    bio: "Focuses on motor skill coordination, joyful engagement, and foundational ball familiarity for our youngest Under 7 players.",
  },
  {
    id: 6,
    name: "Amiyo Halder",
    role: "Team Physio",
    department: "SPORTS MEDICINE & PHYSIO",
    credential: "Team Physiotherapist",
    image: "/assets/imgs/coaches/coach-2.png",
    bio: "Oversees athlete conditioning, pitchside injury management, rehabilitation protocols, and recovery telemetry.",
  },
];

export default function TechnicalTeamPage() {
  return (
    <>
      <PageHero
        title="Technical Team & Coaches"
        crumbs={[{ label: "Technical Team" }]}
      />

      {/* Optimized Intro Banner */}
      <div className="py-10 bg-gradient-to-b from-[#0d162d] via-[#11123c] to-[#16184a] border-b border-[#e9d319]/20 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#e9d319]/10 blur-3xl rounded-full pointer-events-none"
          aria-hidden
        />

        <div className="container-site max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e9d319]/10 border border-[#e9d319]/30 text-[#e9d319] text-[11px] font-black uppercase tracking-[2px] font-display mb-3">
            <Sparkles size={13} className="text-[#e9d319]" />
            EXPERT TRAINING &amp; DEDICATED FACULTY
          </span>

          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight max-w-3xl mx-auto leading-snug mb-3">
            Professional Football Skill Development Guided by Certified Coaches
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed mb-6">
            BSSFC provides expert, structured football training delivered by AIFF-certified coaches and dedicated staff to nurture player excellence from grassroots to competitive national circuits.
          </p>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-2">
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-200">
              <ShieldCheck size={16} className="text-[#e9d319] shrink-0" />
              <span>AIFF &amp; AFC Certified Mentors</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-200">
              <Users size={16} className="text-[#e9d319] shrink-0" />
              <span>Age-Appropriate Progression</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-200">
              <Trophy size={16} className="text-[#e9d319] shrink-0" />
              <span>State &amp; National Match Pathways</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container-site max-w-7xl mx-auto px-4 sm:px-6">

          {/* ================= EXECUTIVE LEADERSHIP / PRESIDENT ================= */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                TEAM LEADERSHIP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c]">
                PRESIDENT &amp; FOUNDER
              </h2>
            </div>

            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden p-6 sm:p-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Founder Image */}
                <div className="md:col-span-5">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg border-2 border-[#e9d319]/40 group bg-slate-900">
                    <Image
                      src={executiveLeadership.image}
                      alt={`${executiveLeadership.name} - ${executiveLeadership.roleTitle}`}
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
                    />
                    {/* Transparent bar for title */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent backdrop-blur-xs text-center">
                      <span className="text-[10px] font-black uppercase tracking-[2px] text-[#e9d319] block mb-1 font-sans">
                        {executiveLeadership.roleTitle}
                      </span>
                      <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide">
                        {executiveLeadership.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-xs font-black text-[#8c7800] uppercase tracking-wider mb-3 font-sans">
                    <Award size={16} className="text-[#e9d319]" />
                    <span>{executiveLeadership.credential}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#11123c] mb-4">
                    RAMAKRISHNAN D
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-5">
                    {executiveLeadership.bio}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
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

          {/* ================= AIFF CERTIFIED COACHES FEATURE ================= */}
          <div className="mb-20 bg-[#11123c] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span
                  className="text-[10px] sm:text-[11px] font-black uppercase tracking-[2.5px] px-3.5 py-1 rounded inline-block mb-4 font-sans"
                  style={{ background: "#e9d319", color: "#11123c" }}
                >
                  AIFF CERTIFIED PROFESSIONALS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-4">
                  HIGH-STANDARD TACTICAL &amp; YOUTH DEVELOPMENT
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans mb-6">
                  All our coaches are highly experienced, well-trained professionals, each certified by the All India Football Federation (AIFF). They bring a range of expertise in youth development, tactical training, and game strategy. Equipped with both the technical skills and practical knowledge needed to guide players, they are dedicated to fostering a strong foundation in football. Their commitment to excellence and player growth ensures that our training programs are not only effective but also aligned with the best standards in Indian football.
                </p>
                <div className="border-l-4 border-[#e9d319] pl-4 py-1">
                  <p className="text-base sm:text-lg font-black uppercase text-[#e9d319] tracking-wide font-display">
                    &ldquo;GET TRAINED UNDER CERTIFIED COACHES TO BE A SUCCESSFUL PLAYER&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15">
                  <Image
                    src="/assets/imgs/techteam.jpg"
                    alt="BSSFC Technical Team & AIFF Certified Coaches"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= COACHING STAFF (CATEGORY-WISE: U17 DOWN TO U7 + PHYSIO) ================= */}
          <div className="pt-6 border-t border-gray-200" id="coaching-staff">
            <div className="text-center mb-14">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                SPECIALIZED MENTORS
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
                      alt={`${coach.name} - ${coach.role}`}
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

          {/* ================= CAMPUS SECTION (FROM LIVE WEBSITE) ================= */}
          <div className="mb-20 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block font-sans"
                style={{ background: "#11123c", color: "#e9d319" }}
              >
                CAMPUS INFRASTRUCTURE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#11123c] mb-4">
                A Secure Campus For Student Athlete Development
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans max-w-3xl mx-auto mb-6">
                At Bangalore Super Strikers FC, our normal program plans are designed to foster both the technical and personal development of each player. These programs are structured to cater to various age groups and skill levels, with a focus on building foundational skills, enhancing tactical awareness, and promoting physical fitness.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-[#11123c] font-sans">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#e9d319]" /> Age-specific coaching curriculums
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#e9d319]" /> Tactical &amp; match video review
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#e9d319]" /> Safe &amp; supervised environment
                </span>
              </div>
            </div>
          </div>

          {/* Roster Callout Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#11123c] to-[#1B4193] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <p className="text-[#e9d319] text-xs font-black uppercase tracking-[3px] mb-2 font-display">
                OFFICIAL SQUAD ROSTER
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight">
                EXPLORE BSSFC PLAYER SQUADS
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-xl font-sans">
                View our registered senior first team and developmental academy squads on the dedicated players portal.
              </p>
            </div>
            <Link
              href="/players"
              className="bg-[#e9d319] text-[#11123c] hover:bg-white font-black text-xs uppercase px-8 py-3.5 transition-all duration-200 tracking-widest shrink-0 font-display"
            >
              VIEW PLAYERS PAGE →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
