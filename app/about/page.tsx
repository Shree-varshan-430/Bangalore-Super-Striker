import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Bangalore Super Strikers FC",
  description:
    "Learn about Bangalore Super Strikers FC — our mission to create champions through football, our history, affiliations with KSFA, and our presence across Karnataka, Pondicherry, Chennai and Nilgiris.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/about" },
};

// BreadcrumbList JSON-LD
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bangaloresuperstrikersfc.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.bangaloresuperstrikersfc.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero
        title="About Us"
        crumbs={[{ label: "About" }]}
      />

      <section className="section-py">
        <div className="container-site max-w-5xl">

          {/* Two-column intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="section-subheading">Who We Are</p>
              <h2 className="section-heading mb-6">
                BANGALORE SUPER STRIKERS FC: CREATING CHAMPIONS ACROSS INDIA
              </h2>
              <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Football is more than just a sport — it is a language of teamwork, strategy, and
                  resilience. At Bangalore Super Strikers FC, we believe that the beautiful game has
                  the power to shape young lives and create champions, both on and off the pitch.
                </p>
                <p>
                  Our programmes teach discipline, sportsmanship, leadership, teamwork,
                  decision-making, mental agility and time management — lessons that go far beyond
                  the football field and prepare young people for life.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/assets/imgs/clubs/team-1.jpg"
                alt="Bangalore Super Strikers FC Team Squad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* President's Leadership Feature */}
          <div className="my-16 p-8 sm:p-10 rounded-3xl bg-[#11123c] text-white grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="md:col-span-4 relative aspect-[3/4] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden border-2 border-[#e9d319]/40 shadow-lg">
              <Image
                src="/assets/imgs/clubs/president.jpg"
                alt="BSSFC Club President"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <span
                className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md"
                style={{ background: "#e9d319", color: "#11123c" }}
              >
                LEADERSHIP &amp; VISION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                MESSAGE FROM CLUB MANAGEMENT
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans font-normal">
                “Our mission from day one has been to remove barriers in Indian grassroots football. Whether a child trains recreationally for health and discipline, or strives for a spot in national leagues and university scholarships, Bangalore Super Strikers FC provides the coaching standards, character building, and honest pathway they deserve.”
              </p>
              <div className="pt-2">
                <span className="font-display text-lg font-bold text-white uppercase block">
                  Club President &amp; Founder
                </span>
                <span className="text-xs text-[#00B8E0] font-semibold uppercase tracking-wider">
                  Bangalore Super Strikers FC &amp; Soccer School
                </span>
              </div>
            </div>
          </div>

          {/* Body copy */}
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="section-heading mb-4">Our Story</h2>
            <p className="text-sm leading-relaxed mb-4">
              Bangalore Super Strikers Football Club was founded with a simple but powerful vision:
              to give every young person in Bangalore and beyond the chance to fall in love with
              football and reach their potential — as players and as people.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Since our founding, we have grown from a single training ground in Bangalore into a
              multi-city organisation with active programmes in Pondicherry, Chennai, Nilgiris and
              multiple locations across Karnataka. Our senior men's and women's squads compete at
              the I-League 3rd Division level, while our junior teams play in the Junior Football
              League (JFL), the Development Premier Division League (DPDL), and regional KSFA, PSDL
              and Tamil Nadu tournaments.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              We are proudly affiliated to the Karnataka State Football Association (KSFA), and our
              coaches hold recognised football coaching licences, ensuring the highest quality of
              instruction for every player who walks through our doors.
            </p>

            <h2 className="section-heading mb-4 mt-10">Our Philosophy</h2>
            <p className="text-sm leading-relaxed mb-4">
              We believe football teaches life. On our training grounds every day, young players
              are learning not just to pass, shoot and defend — they are learning discipline,
              respect, resilience and how to be part of a team. These are lessons they will carry
              with them long after they leave the pitch.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Our age-wise progression model ensures that every player is trained at the right
              level for their development stage. From U7 all the way through to senior football,
              every player gets an individual development plan, regular assessment, and a clear
              pathway to the next level.
            </p>
          </div>

          {/* Affiliation badge */}
          <div
            className="mt-12 p-6 border-l-4 text-sm font-semibold"
            style={{
              borderColor: "var(--bssfc-gold)",
              background: "var(--bssfc-light)",
              color: "var(--bssfc-navy)",
            }}
          >
            THE CLUB IS AFFILIATED TO KARNATAKA STATE FOOTBALL ASSOCIATION.
          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/programs" className="btn-primary text-xs">
              EXPLORE PROGRAMS
            </Link>
            <Link href="/contact" className="btn-dark text-xs">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
