import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sun, Clock, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Summer Football Camp | Bangalore Super Strikers FC",
  description:
    "BSSFC Summer Football Camps across Bangalore — skill workshops, 5-a-side mini leagues, agility circuits and Friday tournaments for ages 5–18. Morning & evening batches. All skill levels welcome.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/summer_camp" },
};

const highlights = [
  { icon: Sun, label: "Duration", value: "2–4 Weeks (School Holidays)" },
  { icon: Clock, label: "Batches", value: "Morning (7–9 AM) & Evening (5–7 PM)" },
  { icon: Users, label: "Ages", value: "5 to 18 Years" },
  { icon: MapPin, label: "Venues", value: "Multiple Centres Across Bangalore" },
];

const features = [
  "Morning and evening batch options",
  "Open to all skill levels — beginners to advanced",
  "Technical skill workshops by certified coaches",
  "5-a-side mini leagues every week",
  "Agility, speed and coordination circuits",
  "Fun football challenges and activities",
  "Goalkeeping-specific workshops",
  "Certificate of completion for all participants",
  "Talent scouting opportunities for the academy",
  "Fun mini-tournaments every Friday",
];

const schedule = [
  { day: "Monday – Thursday", activity: "Skill Workshop", detail: "Dribbling, Passing, Shooting, Tactical Drills" },
  { day: "Tuesday & Thursday", activity: "Fitness Circuits", detail: "Agility ladders, speed work, coordination drills" },
  { day: "Wednesday", activity: "Mini League Matches", detail: "5-a-side games to apply skills competitively" },
  { day: "Friday", activity: "Tournament Day 🏆", detail: "Mini-tournament with awards and certificates" },
];

export default function SummerCampPage() {
  return (
    <>
      <PageHero
        title="Summer Camp"
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "Summer Camp" }]}
      />

      {/* Intro Banner */}
      <div style={{ background: "var(--bssfc-navy)" }} className="py-5">
        <div className="container-site text-center">
          <p className="text-white text-sm leading-relaxed max-w-2xl mx-auto">
            Here is an opportunity for players to join our Bangalore Super Strikers team that participates in{" "}
            <strong className="text-yellow-300">STATE &amp; NATIONAL LEVEL</strong> tournaments and other competitions.{" "}
            <strong className="text-yellow-300">It is open for both boys and girls.</strong>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="section-py">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
              <Image
                src="/assets/imgs/programs/summer.jpg"
                alt="BSSFC Summer Football Camp with young players"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span
                className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5"
                style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
              >
                Ages 5–18
              </span>
            </div>
            <div>
              <p className="section-subheading">Program Details</p>
              <h2 className="section-heading mb-5">Summer Camp</h2>
              <p className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>
                Does your kid dream of becoming a professional football player?{" "}
                <span style={{ color: "var(--bssfc-gold)" }}>Then BSSFC is the place!</span>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                In this technologically dominated world, kids spend most of their time watching TV, mobile phones or electronic gadgets
                when off school. Involving kids in outdoor sporting activities during off-school hours is the best option — kids not only
                enjoy the sport but also make more friends, socialise and learn many new things.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                At Bangalore Super Strikers Club, we provide kids the opportunity to develop new skills where children come together to
                have fun while learning lifelong lessons in a structured, safe and nurturing environment. Children interact with positive
                role models — they learn to play together, take responsibility, build independence and gain confidence.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-primary text-xs">REGISTER NOW</Link>
                <Link href="/programs" className="btn-dark text-xs">ALL PROGRAMS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10" style={{ background: "var(--bssfc-navy)" }}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon size={28} className="mx-auto mb-3" style={{ color: "var(--bssfc-gold)" }} />
                <div className="text-white text-sm font-bold mb-1" style={{ fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>
                  {value}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Schedule */}
      <section className="section-py bg-gray-50">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* What's included */}
            <div>
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 inline-block mb-5"
                style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
              >
                CAMP HIGHLIGHTS
              </span>
              <h3 className="section-heading mb-6">What&apos;s Included</h3>
              <ul className="flex flex-col gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly schedule */}
            <div>
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 inline-block mb-5"
                style={{ background: "var(--bssfc-navy)", color: "var(--bssfc-gold)" }}
              >
                WEEKLY SCHEDULE
              </span>
              <h3 className="section-heading mb-6">Camp Schedule</h3>
              <div className="flex flex-col gap-4">
                {schedule.map(({ day, activity, detail }) => (
                  <div key={day} className="bg-white shadow-sm p-5 border-l-4" style={{ borderColor: "var(--bssfc-gold)" }}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--bssfc-gold)" }}>
                      {day}
                    </div>
                    <div className="text-sm font-bold mb-1" style={{ color: "var(--bssfc-navy)" }}>{activity}</div>
                    <div className="text-xs text-gray-500">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--bssfc-navy)" }}>
        <div className="container-site max-w-2xl">
          <h2
            className="text-white text-2xl font-black uppercase tracking-tight mb-3"
            style={{ fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
          >
            Contact BSSFC for More Information
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Spots fill fast — register early to secure your child&apos;s place in the next BSSFC Summer Football Camp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">REGISTER NOW</Link>
            <Link href="/academy_training" className="btn-outline">YEAR-ROUND ACADEMY</Link>
          </div>
        </div>
      </section>
    </>
  );
}
