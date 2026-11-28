import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, School, Award, Globe, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "School & University Coaching and Scholarship Program | BSSFC",
  description:
    "BSSFC partners with schools and universities across Bangalore, Pondicherry, Chennai, Nilgiris and Karnataka — providing in-campus football coaching and scholarship programs for talented players.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/school_university" },
};

const highlights = [
  { icon: School, label: "Partners", value: "20+ Schools & Universities" },
  { icon: Award, label: "Scholarships", value: "Merit & Need Based" },
  { icon: Globe, label: "Regions", value: "Bangalore, Pondicherry, Chennai, Nilgiris, Karnataka" },
  { icon: BookOpen, label: "Program Type", value: "In-Campus Coaching" },
];

const steps = [
  { step: "01", title: "Partnership", desc: "BSSFC signs a coaching partnership with your school or university to provide structured football within the campus." },
  { step: "02", title: "Talent Identification", desc: "Our scouts assess all interested students and identify players for intensive development." },
  { step: "03", title: "Coaching & Development", desc: "Licensed coaches deliver sessions on campus, coordinated around the academic calendar." },
  { step: "04", title: "Competition & Scholarships", desc: "Top performers are entered into state/national competitions, with scholarship packages offered to deserving players." },
];

const coachingFeatures = [
  "School and university partnership model",
  "One-week camps or full academic year coaching — customised to your needs",
  "Seamless integration with academic timetable",
  "AIFF-aligned curriculum delivered on school/campus grounds",
  "State and national level competition exposure",
  "Expansion across Pondicherry, Chennai, Nilgiris and Karnataka",
];

const scholarshipFeatures = [
  "Recognise and encourage talent from all backgrounds",
  "Enable players from challenged / low-income families to participate in football at all levels",
  "Scholarship covers participation in tournaments across the nation",
  "Fitness programme included as part of weekly routine",
  "Nutritional advice and physical conditioning support",
];

export default function SchoolUniversityPage() {
  return (
    <>
      <PageHero
        title="School / University Coaching & Scholarship"
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "School & University" }]}
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
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
              <Image
                src="/assets/imgs/programs/school.jpg"
                alt="BSSFC School and University football coaching and scholarship program"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span
                className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5"
                style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
              >
                Ages 6–22
              </span>
            </div>
            <div>
              <p className="section-subheading">Program Details</p>
              <h2 className="section-heading mb-5">School / University Coaching And Scholarship Program</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Do you want to take your school or university team to the next level?
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                BSSFC partners with schools and universities across Bangalore, Pondicherry, Chennai, Nilgiris and Karnataka
                to deliver high-quality football coaching programmes and scholarship opportunities for talented players. We
                offer coaching programmes for schools and universities — whether it&apos;s for a one-week camp or coaching
                help for the whole academic year.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                BSSFC provides custom programmes for your school or university. Please contact us for further details.
              </p>
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

      {/* Two-column features */}
      <section className="section-py bg-gray-50">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coaching */}
            <div className="bg-white border border-gray-100 shadow-sm p-8">
              <h3
                className="text-base font-black uppercase tracking-wide mb-5"
                style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
              >
                School / University Coaching
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {coachingFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-xs">PARTNER WITH US</Link>
            </div>

            {/* Scholarship */}
            <div className="bg-white border border-gray-100 shadow-sm p-8">
              <h3
                className="text-base font-black uppercase tracking-wide mb-5"
                style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
              >
                Scholarship Program
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                The main objective of providing scholarships is to recognise and encourage talents and to enable talented
                players from challenged / low-income backgrounds to be able to afford and participate in football
                tournaments at all levels across the nation.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {scholarshipFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-xs">APPLY FOR SCHOLARSHIP</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py">
        <div className="container-site max-w-5xl">
          <div className="text-center mb-12">
            <span
              className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 inline-block mb-3"
              style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
            >
              HOW IT WORKS
            </span>
            <h2 className="section-heading">Partnership Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="bg-gray-50 p-7 flex gap-5 items-start">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "var(--bssfc-navy)" }}>
        <div className="container-site max-w-2xl">
          <h2
            className="text-white text-2xl font-black uppercase tracking-tight mb-3"
            style={{ fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
          >
            Bring BSSFC to Your Campus
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            Contact us today to discuss a customised coaching or scholarship partnership for your school or university.
          </p>
          <Link href="/contact" className="btn-primary">CONTACT BSSFC</Link>
        </div>
      </section>
    </>
  );
}
