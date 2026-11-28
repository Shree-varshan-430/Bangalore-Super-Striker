import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs | Bangalore Super Strikers FC",
  description:
    "Explore all BSSFC football programmes: Academy Training, School & University Coaching, Scholarship Program, Age Wise Progression and Summer Camp — open for boys and girls ages 5–25 across Bangalore.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/programs" },
};

const programs = [
  {
    slug: "academy_training",
    title: "Academy Training",
    ageGroup: "Ages 5–25",
    image: "/assets/imgs/programs/academy.jpg",
    imageAlt: "BSSFC Academy Training session",
    description:
      "Structured, age-appropriate football coaching by AFC/AIFF-licensed coaches — covering dribbling, passing, shooting, tactics, physical conditioning, and competitive match play.",
    features: ["Licensed & certified coaches", "U7 to Senior age bands", "6 days a week training", "Match exposure"],
  },
  {
    slug: "school_university",
    title: "School / University Coaching & Scholarship",
    ageGroup: "Ages 6–22",
    image: "/assets/imgs/programs/school.jpg",
    imageAlt: "BSSFC School University coaching session",
    description:
      "In-campus coaching for schools and universities — from one-week camps to full academic year programmes. Scholarship opportunities for talented players from challenged backgrounds.",
    features: ["Custom school/university programmes", "Scholarships available", "Bangalore, Pondicherry, Chennai, Karnataka", "In-campus delivery"],
  },
  {
    slug: "agewise_progression",
    title: "Age Wise Progression",
    ageGroup: "Ages 5–25",
    image: "/assets/imgs/programs/agewise.jpg",
    imageAlt: "BSSFC Age Wise Progression training framework",
    description:
      "AIFF & KSFA-aligned age-band curriculum from Beginner (5–6 yrs) through to Senior (14–16 yrs and beyond) — with individual development plans and quarterly progression reviews.",
    features: ["4 age bands: Beginner, Advanced, Intermediate, Senior", "AIFF & KSFA aligned", "Individual development plans", "Quarterly assessments"],
  },
  {
    slug: "summer_camp",
    title: "Summer Camp",
    ageGroup: "Ages 5–18",
    image: "/assets/imgs/programs/summer.jpg",
    imageAlt: "BSSFC Summer Football Camp",
    description:
      "Intensive holiday camps combining skill workshops, 5-a-side mini leagues, agility circuits and Friday tournaments. Morning & evening batches. All skill levels welcome.",
    features: ["Morning & evening batches", "All skill levels welcome", "Friday mini-tournaments", "Certificate for all participants"],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs" crumbs={[{ label: "Programs" }]} />

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

      {/* All Programs Grid */}
      <section className="section-py">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-subheading">What We Offer</p>
            <h2 className="section-heading">ALL PROGRAMS</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-3">
              From your child&apos;s very first kick to competitive senior football — BSSFC has a structured programme for every stage of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog) => (
              <Link
                key={prog.slug}
                href={`/${prog.slug}`}
                className="card-hover group bg-white shadow-sm flex flex-col overflow-hidden"
                aria-label={`Learn more about ${prog.title}`}
              >
                <div className="card-img relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1"
                    style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
                  >
                    {prog.ageGroup}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                      color: "var(--bssfc-navy)",
                    }}
                  >
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{prog.description}</p>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-500">
                        <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "var(--bssfc-blue)" }}
                  >
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">ENQUIRE ABOUT A PROGRAM</Link>
          </div>
        </div>
      </section>

      {/* Private Training callout */}
      <section className="section-py bg-gray-50">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-sm p-8 border-l-4" style={{ borderColor: "var(--bssfc-gold)" }}>
              <h3 className="text-base font-black uppercase tracking-wide mb-4" style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>
                Private Training
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                For players wanting additional coaching and personalized training, BSSFC has an{" "}
                <strong>&quot;Individual Excellence Course&quot;</strong> that offers a 1:1 coach/player experience.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Focus will be on improvement of technical, tactical and physical skills. Accelerate your learning and be a part of this specialized training program!
              </p>
              <p className="text-xs font-bold uppercase tracking-wide mb-5" style={{ color: "var(--bssfc-blue)" }}>
                ARE YOU PREPARED TO REACH THE NEXT LEVEL? Contact BSSFC for more details.
              </p>
              <Link href="/contact" className="btn-primary text-xs">CONTACT NOW</Link>
            </div>

            <div className="bg-white shadow-sm p-8 border-l-4" style={{ borderColor: "var(--bssfc-navy)" }}>
              <h3 className="text-base font-black uppercase tracking-wide mb-4" style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>
                Fitness / Nutrition
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                We believe that fitness and nutritional plan plays a major role in training and it is vital for a player to maintain proper hydration during practice.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Fitness programme will be a part of our weekly routine and nutritional advice will be given to our players to stay in shape physically and mentally.
              </p>
              <Link href="/contact" className="btn-primary text-xs">CONTACT NOW</Link>
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
            Not Sure Which Program is Right?
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Talk to our coaches and we&apos;ll guide you to the perfect programme based on your age, skill level and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">CONTACT BSSFC</Link>
            <Link href="/agewise_progression" className="btn-outline">VIEW AGE GROUPS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
