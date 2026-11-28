import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  } as any,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "bangaloresuperstrikersfc.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // ---- Legacy .html URL redirects (301 Permanent) ----
      { source: "/about.html",               destination: "/about",               permanent: true },
      { source: "/programs.html",            destination: "/programs",            permanent: true },
      { source: "/academy_training.html",    destination: "/academy_training",    permanent: true },
      { source: "/school_university.html",   destination: "/school_university",   permanent: true },
      { source: "/agewise_progression.html", destination: "/agewise_progression", permanent: true },
      { source: "/summer_camp.html",         destination: "/summer_camp",         permanent: true },
      { source: "/blogs.html",               destination: "/blogs",               permanent: true },
      { source: "/gallery.html",             destination: "/gallery",             permanent: true },
      { source: "/technical_team.html",      destination: "/technical_team",      permanent: true },
      { source: "/contact.html",             destination: "/contact",             permanent: true },
      // ---- Trailing slash removal (301 Permanent) ----
      { source: "/:path+/",                  destination: "/:path+",              permanent: true },
    ];
  },
};

export default nextConfig;
