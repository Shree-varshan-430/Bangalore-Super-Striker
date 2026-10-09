"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import videos from "@/content/videos.json";

// Display up to 3 latest videos from content/videos.json
const displayVideos = (videos && videos.length > 0 ? videos : []).slice(0, 3);

export default function VideoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section-py"
      style={{ background: "var(--bssfc-navy)" }}
      aria-label="BSSFC TV"
    >
      <div className="container-site">
        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-xs font-bold uppercase tracking-[4px] mb-1"
              style={{ color: "var(--bssfc-gold)" }}
            >
              Watch
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold uppercase text-white"
              style={{ fontFamily: "var(--font-montserrat, Montserrat, sans-serif)" }}
            >
              BSSFC TV
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://www.youtube.com/channel/UC1hf_p-XBtiIO3QyI5U43dQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-5 py-2.5"
            >
              MORE VIDEOS
            </a>
          </motion.div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              className="card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * idx }}
            >
              {video.id.startsWith("placeholder") ? (
                /* Empty state */
                <div
                  className="relative aspect-video flex items-center justify-center text-white/30 text-sm font-bold"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div className="text-center">
                    <Play size={32} className="mx-auto mb-2 opacity-30" aria-hidden />
                    <p className="text-xs uppercase tracking-wide">Coming Soon</p>
                  </div>
                </div>
              ) : (
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch: ${video.title}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black/40">
                    {video.thumbnail && (
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                    {/* Play overlay */}
                    <div className="video-play">
                      <div className="video-play-btn group-hover:scale-110">
                        <Play
                          size={22}
                          fill="var(--bssfc-navy)"
                          color="var(--bssfc-navy)"
                          aria-hidden
                          style={{ marginLeft: "3px" }}
                        />
                      </div>
                    </div>
                    {/* Dark scrim */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ background: "rgba(0,0,0,0.4)" }}
                      aria-hidden
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white text-sm font-semibold leading-snug">
                      {video.title}
                    </p>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
