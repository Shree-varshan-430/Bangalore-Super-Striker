import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import programs from "@/content/programs.json";

const prog = programs.find((p) => p.slug === "school_university")!;

export const metadata: Metadata = {
  title: `${prog.title} | BSSFC`,
  description: `${prog.description.substring(0, 155)}`,
  alternates: { canonical: `https://www.bangaloresuperstrikersfc.com/school_university` },
};

export default function SchoolUniversityPage() {
  return (
    <>
      <PageHero
        title={prog.title}
        crumbs={[{ label: "Programs", href: "/programs" }, { label: prog.shortTitle }]}
      />
      <section className="section-py">
        <div className="container-site max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <Image src={prog.image} alt={prog.imageAlt} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-4 py-1.5" style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}>{prog.ageGroup}</span>
            </div>
            <div>
              <p className="section-subheading">Program Details</p>
              <h2 className="section-heading mb-5">{prog.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">{prog.description}</p>
              <h3 className="text-base font-bold uppercase tracking-wide mb-4" style={{ color: "var(--bssfc-navy)", fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}>What's Included</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {prog.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "var(--bssfc-gold)" }} aria-hidden />{f}
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
    </>
  );
}
