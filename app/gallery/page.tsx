"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/assets/imgs/clubs/hero-squad-lineup.jpg", title: "Senior Squad Pre-Match Lineup", tag: "Squad" },
  { id: 2, src: "/assets/imgs/clubs/hero-grassroots-action.jpg", title: "Grassroots High-Intensity Action", tag: "Matches" },
  { id: 3, src: "/assets/imgs/clubs/training-1.jpg", title: "Tactical Agility & Conditioning", tag: "Training" },
  { id: 4, src: "/assets/imgs/clubs/team-1.jpg", title: "BSSFC Full Squad Photo", tag: "Squad" },
  { id: 5, src: "/assets/imgs/clubs/match-1.jpg", title: "State Circuit League Matchday", tag: "Matches" },
  { id: 6, src: "/assets/imgs/clubs/training-2.jpg", title: "Speed & Ball Control Drill", tag: "Training" },
  { id: 7, src: "/assets/imgs/clubs/news-academy-u15.jpg", title: "U15 Academy League Roster", tag: "Youth" },
  { id: 8, src: "/assets/imgs/clubs/news-goalkeeping.jpg", title: "Goalkeeper Reaction Session", tag: "Training" },
  { id: 9, src: "/assets/imgs/clubs/team-2.jpg", title: "Tournament Trophy Presentation", tag: "Tournaments" },
  { id: 10, src: "/assets/imgs/clubs/match-2.jpg", title: "Competitive Turf Clash", tag: "Matches" },
  { id: 11, src: "/assets/imgs/clubs/news-grassroots.jpg", title: "Junior Soccer School Clinic", tag: "Youth" },
  { id: 12, src: "/assets/imgs/clubs/news-underpriv-camp.jpg", title: "Community Grassroots Camp", tag: "Youth" },
  { id: 13, src: "/assets/imgs/clubs/news-scouting.jpg", title: "Talent Scouting Trials", tag: "Tournaments" },
  { id: 14, src: "/assets/imgs/clubs/news-coaches-talk.jpg", title: "Coaching Staff Tactical Brief", tag: "Coaching" },
  { id: 15, src: "/assets/imgs/clubs/Player1.jpeg", title: "First Team Player Showcase", tag: "Squad" },
  { id: 16, src: "/assets/imgs/clubs/Player2.jpeg", title: "Academy Midfield Prospect", tag: "Squad" },
  { id: 17, src: "/assets/imgs/clubs/Player3.jpeg", title: "Senior Division Forward", tag: "Squad" },
  { id: 18, src: "/assets/imgs/clubs/Instagram2.jpeg", title: "Match Highlights Celebration", tag: "Matches" },
];

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = ["All", "Squad", "Matches", "Training", "Youth", "Tournaments"];
  const filteredImages = selectedTag === "All"
    ? galleryImages
    : galleryImages.filter(img => img.tag === selectedTag);

  return (
    <>
      <PageHero
        title="Club Gallery"
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="section-py bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <span
              className="text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1 rounded-md shadow-xs mb-3 inline-block"
              style={{ background: "#e9d319", color: "#11123c" }}
            >
              MEMORIES &amp; ACTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#11123c]">
              BSSFC IN ACTION
            </h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2 font-sans">
              Capturing moments of glory, dedication, and camaraderie from matchdays, training complexes, and youth academy circuits.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                  selectedTag === t
                    ? "bg-[#11123c] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80"
                onClick={() => setActiveImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11123c]/90 via-[#11123c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span
                    className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded w-fit mb-1.5"
                    style={{ background: "#e9d319", color: "#11123c" }}
                  >
                    {img.tag}
                  </span>
                  <p className="text-xs font-bold flex items-center justify-between">
                    <span>{img.title}</span>
                    <ZoomIn size={14} className="shrink-0 text-[#00a8e8]" />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox modal */}
          {activeImage && (
            <div
              className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setActiveImage(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-[#F5A623] p-2"
                onClick={() => setActiveImage(null)}
                aria-label="Close image lightbox"
              >
                <X size={32} />
              </button>
              <div
                className="relative max-w-4xl max-h-[85vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeImage}
                  alt="Gallery full view"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
