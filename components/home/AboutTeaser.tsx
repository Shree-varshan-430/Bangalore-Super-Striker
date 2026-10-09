"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="section-py"
      style={{ background: "var(--bssfc-light)" }}
      aria-label="About Bangalore Super Strikers FC"
    >
      <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <Image
            src="/assets/imgs/clubs/team-2.jpg"
            alt="BSSFC team celebration and championship glory"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Accent corner */}
          <div
            className="absolute bottom-0 right-0 w-20 h-20"
            style={{ background: "var(--bssfc-gold)", opacity: 0.85 }}
            aria-hidden
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p className="section-subheading">About Us</p>
          <h2 className="section-heading mb-6 leading-tight">
            BANGALORE SUPER STRIKERS FC: CREATING CHAMPIONS ACROSS INDIA
          </h2>

          <div className="flex flex-col gap-4 text-sm text-gray-600 leading-relaxed mb-8">
            <p>
              Football is more than just a sport — it is a language of teamwork, strategy,
              and resilience. At Bangalore Super Strikers FC, we believe that the beautiful
              game has the power to shape young lives and create champions, both on and off the pitch.
            </p>
            <p>
              Our programmes teach discipline, sportsmanship, leadership, teamwork,
              decision-making, mental agility and time management — lessons that go far
              beyond the football field and prepare young people for life.
            </p>
            <p>
              Founded in Bangalore, BSSFC has grown rapidly across Karnataka, Pondicherry,
              Chennai and the Nilgiris, with multiple training centres serving players of
              all ages and abilities.
            </p>
            <p>
              Our senior and junior teams compete at the I-League 3rd Division, Junior
              Football League (JFL), Development Premier Division League (DPDL), and regional
              KSFA, PSDL and Tamil Nadu tournaments — giving every player real competitive exposure.
            </p>
          </div>

          <Link href="/about" className="btn-primary text-xs">
            READ MORE
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
