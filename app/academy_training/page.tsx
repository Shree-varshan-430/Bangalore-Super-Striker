import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Trophy, Users, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Academy Training | Bangalore Super Strikers FC",
  description:
    "BSSFC Academy Training — structured, age-appropriate football coaching by AFC/AIFF-licensed coaches covering dribbling, passing, shooting, tactics and match play. Open for boys and girls ages 5–25 across Bangalore.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/academy_training" },
};

const highlights = [
  { icon: Trophy, label: "Licensed Coaches", value: "AFC / AIFF Certified" },
  { icon: Calendar, label: "Sessions", value: "6 days a week" },
  { icon: Users, label: "Age Groups", value: "U7 → U9 → U11 → U13 → U15 → U17 → U20 → Senior" },
  { icon: MapPin, label: "Venues", value: "Multiple centres across Bangalore" },
];

const steps = [
  { step: "01", title: "Assessment", desc: "Every player begins with a skill and fitness assessment to place them in the right age-group batch." },
  { step: "02", title: "Structured Training", desc: "Weekly sessions covering technical, tactical, physical, and psychological pillars of the game." },
  { step: "03", title: "Match Practice", desc: "Regular in-house and external fixtures to put skills into competitive practice." },
  { step: "04", title: "Review & Progression", desc: "Quarterly reviews and promotion to the next age band based on performance and development." },
];

const features = [
  "AFC / AIFF licensed and certified coaches",
  "Age-appropriate structured curriculum (U7 to Senior)",
  "Technical skill development — dribbling, passing, shooting",
  "Tactical understanding and game intelligence",
  "Regular competitive match exposure",
  "Physical conditioning and injury prevention",
  "Mental resilience and leadership training",
  "Video analysis sessions for advanced groups",
];

const privateSections = [
  {
    title: "Private Training",
    items: [
      "For players wanting additional coaching and personalized training, BSSFC has an \"Individual Excellence Course\" that offers a 1:1 coach/player experience.",
      "Focus will be on improvement of technical, tactical and physical skills of players.",
      "Accelerate your learning and be a part of this specialized training program!",
    ],
    callout: "ARE YOU PREPARED TO REACH THE NEXT LEVEL? Contact BSSFC for more details.",
  },
  {
    title: "Fitness / Nutrition",
    items: [
      "We believe that fitness and nutritional plan plays a major role in training and it is vital for a player to maintain proper hydration during practice.",
      "A healthy and balanced diet can support a player to remain consistent throughout the game and every player should stay committed to their personal nutritional goals.",
      "Fitness program will be a part of our weekly routine and nutritional advice will be given to our players to stay in shape physically and mentally.",
    ],
    callout: null,
  },
];

export default function AcademyTrainingPage() {
  return (
    <>
      <PageHero
        title="Academy Training"
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "Academy Training" }]}
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

      {/* Hero Section */}
      <section className="section-py">
        <div className="container-site max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
              <Image
                src="/assets/imgs/programs/academy.jpg"
                alt="BSSFC Academy Training — certified coaches training young footballers"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span
                className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5"
                style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
              >
                Ages 5–25
              </span>
            </div>

            {/* Content */}
            <div>
              <p className="section-subheading">Program Details</p>
              <h2 className="section-heading mb-5">Academy Training</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our Academy Training programme provides structured, age-appropriate football coaching designed to develop
                technical skills, tactical understanding, physical fitness and the right mental attitude. Delivered by
                AFC/AIFF-licensed coaches, it covers dribbling, passing, shooting, set-pieces and match play in a safe,
                disciplined environment.
              </p>
              <h3 className="text-base font-bold uppercase tracking-wide mb-4" style={{ color: "var(--bssfc-navy)" }}>
                What's Included
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-primary text-xs">ENQUIRE NOW</Link>
                <Link href="/programs" className="btn-dark text-xs">ALL PROGRAMS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Highlights */}
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

      {/* Training Process */}
      <section className="section-py bg-gray-50">
        <div className="container-site max-w-5xl">
          <div className="text-center mb-12">
            <span
              className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 inline-block mb-3"
              style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
            >
              HOW IT WORKS
            </span>
            <h2 className="section-heading">Our Training Process</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
              A scientific, structured football curriculum designed to take players step-by-step from fundamental ball
              familiarity to competitive national tournaments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="bg-white p-7 shadow-sm flex gap-5 items-start">
                <span
                  className="text-3xl font-black shrink-0"
                  style={{ color: "var(--bssfc-gold)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
                >
                  {step}
                </span>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wide mb-2" style={{ color: "var(--bssfc-navy)" }}>
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Training Process Image */}
          <div className="text-center mb-8">
            <span
              className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 inline-block mb-3"
              style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
            >
              METHODOLOGY &amp; PROGRESSION
            </span>
            <h3 className="font-display text-2xl font-black uppercase tracking-tight" style={{ color: "var(--bssfc-navy)" }}>
              SCIENTIFIC CURRICULUM
            </h3>
          </div>
          <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-50">
            <Image
              src="/assets/imgs/clubs/Our Training Process.jpeg"
              alt="BSSFC Scientific Football Training Process and Methodology"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      {/* Private Training & Fitness sections */}
      <section className="section-py">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privateSections.map(({ title, items, callout }) => (
              <div key={title} className="bg-white border border-gray-100 shadow-sm p-8">
                <h3 className="text-base font-black uppercase tracking-wide mb-5" style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>
                  {title}
                </h3>
                <ul className="flex flex-col gap-3 mb-5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                {callout && (
                  <p className="text-xs font-bold uppercase tracking-wide mb-5" style={{ color: "var(--bssfc-blue)" }}>
                    {callout}
                  </p>
                )}
                <Link href="/contact" className="btn-primary text-xs">CONTACT NOW</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--bssfc-navy)" }}>
        <div className="container-site max-w-2xl">
          <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-3" style={{ fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Join thousands of players who have developed their game with BSSFC's certified coaching team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">ENROL NOW</Link>
            <Link href="/agewise_progression" className="btn-outline">VIEW AGE GROUPS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
