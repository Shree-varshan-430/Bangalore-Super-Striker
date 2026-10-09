"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import achievements from "@/content/achievements.json";

type Achievement = {
  id: number;
  title: string;
  source: string;
  date: string;
  tag: string;
  excerpt: string;
  url: string;
  image: string;
  imageAlt: string;
};

function AchievementCard({
  item,
  delay,
}: {
  item: Achievement;
  delay: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      className="card-hover bg-white shadow-sm flex flex-col group overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      aria-label={item.title}
    >
      {/* Thumbnail */}
      <div className="card-img relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => {
            // Fallback to navy background if image missing
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Tag badge */}
        <span
          className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-3 py-1"
          style={{ background: "var(--bssfc-gold)", color: "var(--bssfc-navy)" }}
        >
          {item.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-2">
          {item.source} · {item.date}
        </p>
        <h3
          className="text-base font-bold leading-snug mb-3 flex-1"
          style={{
            fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
            color: "var(--bssfc-navy)",
          }}
        >
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {item.excerpt}
        </p>
        <Link
          href={`/blogs/${item.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1B4193] hover:text-[#e9d319] hover:gap-2 transition-all mt-auto"
          aria-label={`Read full article: ${item.title}`}
        >
          Read full article →
        </Link>
      </div>
    </motion.article>
  );
}

export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-py"
      aria-label="BSSFC's Achievements"
    >
      <div className="container-site">
        {/* Section header */}
        <div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-subheading">In the news</p>
            <h2 className="section-heading">BSSFC'S ACHIEVEMENTS</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blogs"
              className="btn-dark text-xs px-5 py-2.5"
            >
              VIEW ALL
            </Link>
          </motion.div>
        </div>

        {/* 3-up grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <AchievementCard
              key={item.id}
              item={item}
              delay={0.08 * idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
