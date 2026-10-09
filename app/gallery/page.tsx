"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { X, ZoomIn, Play, Video, Camera, ExternalLink } from "lucide-react";
import galleryData from "@/content/gallery.json";
import videosData from "@/content/videos.json";

export default function GalleryPage() {
  const [mediaType, setMediaType] = useState<"photos" | "videos">("photos");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const photos = galleryData || [];
  const videos = videosData || [];

  const photoTags = ["All", "Squad", "Matches", "Training", "Youth", "Tournaments"];
  const videoCategories = ["All", "Match Highlights", "Training Reels", "Interviews", "BSSFC TV"];

  const filteredPhotos = selectedTag === "All"
    ? photos
    : photos.filter((img) => img.tag === selectedTag);

  const filteredVideos = selectedTag === "All"
    ? videos
    : videos.filter((vid) => vid.category === selectedTag);

  return (
    <>
      <PageHero
        title="Club Gallery & Media"
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="section-py bg-white">
        <div className="container-site">
          {/* Header */}
          <div className="text-center mb-8">
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

          {/* Media Switcher: Photos vs Videos */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => {
                setMediaType("photos");
                setSelectedTag("All");
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                mediaType === "photos"
                  ? "bg-[#11123c] text-[#e9d319] shadow-lg scale-102"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Camera size={16} />
              <span>Photos ({photos.length})</span>
            </button>

            <button
              onClick={() => {
                setMediaType("videos");
                setSelectedTag("All");
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                mediaType === "videos"
                  ? "bg-[#1B4193] text-white shadow-lg scale-102"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Video size={16} />
              <span>BSSFC TV &amp; Videos ({videos.length})</span>
            </button>
          </div>

          {/* Subcategory Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {(mediaType === "photos" ? photoTags : videoCategories).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                  selectedTag === t
                    ? "bg-[#1B4193] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* SECTION 1: PHOTO GALLERY */}
          {mediaType === "photos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((img) => (
                <div
                  key={img.id}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80"
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
                      <span className="truncate pr-2">{img.title}</span>
                      <ZoomIn size={14} className="shrink-0 text-[#00a8e8]" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SECTION 2: VIDEOS & BSSFC TV */}
          {mediaType === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col group cursor-pointer"
                  onClick={() => setActiveVideoId(vid.id)}
                >
                  <div className="relative aspect-video w-full bg-black overflow-hidden">
                    <Image
                      src={vid.thumbnail}
                      alt={vid.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-13 h-13 rounded-full bg-[#e9d319] text-[#11123c] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-115">
                        <Play size={22} className="ml-0.5 fill-[#11123c]" />
                      </div>
                    </div>
                    <span className="absolute top-3 left-3 bg-[#11123c]/85 text-white font-black text-[10px] uppercase px-2.5 py-1 rounded shadow-md backdrop-blur-xs">
                      {vid.category}
                    </span>
                    {vid.duration && (
                      <span className="absolute bottom-3 right-3 bg-black/80 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                        {vid.duration}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-sm leading-snug text-[#11123c] group-hover:text-[#1B4193] transition-colors line-clamp-2 mb-2">
                        {vid.title}
                      </h3>
                      {vid.date && (
                        <p className="text-xs text-gray-400">
                          Published: {vid.date}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#1B4193] group-hover:text-[#e9d319] transition-colors">
                        <span>Play Video</span>
                        <Play size={11} className="fill-current" />
                      </span>
                      <a
                        href={vid.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-gray-400 hover:text-[#11123c]"
                        title="Watch on YouTube"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Image Lightbox Modal */}
          {activeImage && (
            <div
              className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs"
              onClick={() => setActiveImage(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-[#e9d319] p-2 cursor-pointer"
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

          {/* Video Player Modal */}
          {activeVideoId && (
            <div
              className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs"
              onClick={() => setActiveVideoId(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-[#e9d319] p-2 cursor-pointer z-50"
                onClick={() => setActiveVideoId(null)}
                aria-label="Close video player"
              >
                <X size={32} />
              </button>
              <div
                className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                  title="BSSFC Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
