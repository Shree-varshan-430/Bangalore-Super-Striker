import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, TrendingUp, ClipboardList, Star, Flag } from "lucide-react";

export const metadata: Metadata = {
  title: "Age Wise Progression | Bangalore Super Strikers FC",
  description:
    "BSSFC Age Wise Progression framework — structured age bands from U7 to Senior (ages 5–25), AIFF & KSFA aligned, with individual development plans and quarterly assessments for every player.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/agewise_progression" },
};

const highlights = [
  { icon: TrendingUp, label: "Age Bands", value: "U7 / U9 / U11 / U13 / U15 / U17 / U20 / Senior" },
  { icon: ClipboardList, label: "Framework", value: "AIFF & KSFA Aligned" },
  { icon: Star, label: "Assessment", value: "Quarterly Reviews" },
  { icon: Flag, label: "Goal", value: "State & National Level Competition" },
];

const ageGroups = [
  {
    band: "Beginner",
    sub: "5 to 6 Years",
    desc: "The objective will be for all kids to have fun, make friends and learn football. Players at this young age are taught to first develop the full range of Loco-motors — Running, Jumping, Hopping, Turning, Pushing, Pulling, Bending, Twisting, Swinging — and movement skills before they could adapt to manipulative skills (eye-to-hand and eye-to-foot co-ordination). The goal is to introduce them to basic concepts like dribbling and kicking and make it enough fun that they want to keep playing. The focus is more on individual skills.",
    color: "#22c55e",
  },
  {
    band: "Advanced",
    sub: "7 to 9 Years",
    desc: "This focuses on teaching the fundamental techniques of the game and showing players how to master these into skills made for junior players in a fun and friendly atmosphere. The focus is on developing motor skills while increasing mastery over the ball. Individual skills are taught to players in order to effectively compete with the opponent and start group activities with co-players that include co-operative and competitive drills.",
    color: "#3b82f6",
  },
  {
    band: "Intermediate",
    sub: "10 to 13 Years",
    desc: "Training designed to use their techniques while also developing their game — understanding team shape, attacking and defensive responsibilities. More advanced technical drills and small-sided games are incorporated to imitate game-like situations, with focus also given to developing physical performance. Players evolve physically and mentally and develop a mature approach to their preparation for training and matches.",
    color: "#f59e0b",
  },
  {
    band: "Senior",
    sub: "14 to 16 Years",
    desc: "Advanced technical and tactical sessions designed to develop players to excel in any 11-a-side game. Youth players are taken through position-specific physical and technical training, where players also discover how the skills learnt from the game can help them mature and take responsibility for their personal and professional development.",
    color: "#ef4444",
  },
];

const features = [
  "Structured age band curriculum (U7 through Senior)",
  "Individual player development plans (IDP)",
  "Regular assessment, grading and promotion",
  "AIFF and KSFA aligned programme",
  "Goalkeeping-specific development track",
  "Dedicated women's progression pathway",
  "Physical literacy benchmarks per age group",
  "Pathway to state, national and professional football",
];

export default function AgeWiseProgressionPage() {
  return (
    <>
      <PageHero
        title="Age Wise Progression"
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "Age Wise Progression" }]}
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
                src="/assets/imgs/programs/agewise.jpg"
                alt="BSSFC Age Wise Progression framework from U7 to senior"
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
            <div>
              <p className="section-subheading">Program Details</p>
              <h2 className="section-heading mb-5">Age Wise Progression</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                BSSFC&apos;s Age Wise Progression framework ensures every player develops at the right pace for their age and
                ability. The programme is structured in age bands — U7, U9, U11, U13, U15, U17, U20 and Senior — each with
                its own technical, tactical, physical and psychological goals aligned with AIFF and KSFA guidelines. This
                structured pathway is what separates hobbyists from future professionals: a clear, measurable roadmap from a
                child&apos;s first touch to competitive senior football.
              </p>
              <h3 className="text-base font-bold uppercase tracking-wide mb-4" style={{ color: "var(--bssfc-navy)" }}>
                Framework Breakdown
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

      {/* Age Group Cards */}
      <section className="section-py bg-gray-50">
        <div className="container-site max-w-5xl">
          <div className="text-center mb-12">
            <span
              className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 inline-block mb-3"
              style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
            >
              AGE BAND CURRICULUM
            </span>
            <h2 className="section-heading">Development by Age Group</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
              Each age band has a dedicated curriculum tailored to the physical, technical, and mental development stage of players.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {ageGroups.map(({ band, sub, desc, color }) => (
              <div key={band} className="bg-white shadow-sm p-8 flex gap-6 items-start border-l-4" style={{ borderColor: color }}>
                <div className="shrink-0 w-28 text-center">
                  <div
                    className="text-base font-black uppercase tracking-wide"
                    style={{ color, fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
                  >
                    {band}
                  </div>
                  <div
                    className="text-xs font-bold mt-1 px-2 py-0.5 inline-block"
                    style={{ background: color + "20", color }}
                  >
                    {sub}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">CONTACT NOW</Link>
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
            Find the Right Age Group for Your Child
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Not sure which age band is right? Contact our coaches and we&apos;ll assess your child and place them in the right group.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">BOOK AN ASSESSMENT</Link>
            <Link href="/academy_training" className="btn-outline">ACADEMY TRAINING</Link>
          </div>
        </div>
      </section>
    </>
  );
}
