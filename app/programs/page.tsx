import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";
import programs from "@/content/programs.json";

export const metadata: Metadata = {
  title: "Programs | Bangalore Super Strikers FC",
  description:
    "Explore all BSSFC football programmes: Academy Training, School & University Coaching, Age Wise Progression, and Summer Camp for ages 5–25 in Bangalore.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs"
        crumbs={[{ label: "Programs" }]}
      />

      <section className="section-py">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-subheading">What We Offer</p>
            <h2 className="section-heading">ALL PROGRAMS</h2>
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
                    className="text-lg font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                      color: "var(--bssfc-navy)",
                    }}
                  >
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                    {prog.description.substring(0, 140)}…
                  </p>
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
            <Link href="/contact" className="btn-primary">
              ENQUIRE ABOUT A PROGRAM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
