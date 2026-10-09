import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import programs from "@/content/programs.json";

const prog = programs.find((p) => p.slug === "academy_training")!;

export const metadata: Metadata = {
  title: `${prog.title} | BSSFC`,
  description: `${prog.description.substring(0, 155)}`,
  alternates: { canonical: `https://www.bangaloresuperstrikersfc.com/academy_training` },
};

export default function AcademyTrainingPage() {
  return (
    <>
      <PageHero
        title={prog.title}
        crumbs={[{ label: "Programs", href: "/programs" }, { label: prog.shortTitle }]}
      />

      <section className="section-py">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image
                src={prog.image}
                alt={prog.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span
                className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5"
                style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
              >
                {prog.ageGroup}
              </span>
            </div>

            {/* Content */}
            <div>
              <p className="section-subheading">Program Details</p>
              <h2 className="section-heading mb-5">{prog.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">{prog.description}</p>

              <h3
                className="text-base font-bold uppercase tracking-wide mb-4"
                style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
              >
                What's Included
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                {prog.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--bssfc-gold)" }}
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-primary text-xs">
                  ENQUIRE NOW
                </Link>
                <Link href="/programs" className="btn-dark text-xs">
                  ALL PROGRAMS
                </Link>
              </div>
            </div>
          </div>

          {/* Official Training Process Showcase from Clubs Images */}
          <div className="mt-20 pt-16 border-t border-gray-150">
            <div className="text-center mb-10">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                METHODOLOGY &amp; PROGRESSION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#11123c]">
                OUR TRAINING PROCESS
              </h3>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
                A scientific, structured football curriculum designed to take players step-by-step from fundamental ball familiarity to competitive national tournaments.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-gray-50">
              <Image
                src="/assets/imgs/clubs/Our Training Process.jpeg"
                alt="BSSFC Scientific Football Training Process and Methodology"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
