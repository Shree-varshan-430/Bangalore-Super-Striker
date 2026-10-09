import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import MatchStrip from "@/components/home/MatchStrip";
import PromoBanner from "@/components/home/PromoBanner";
import CauseBanner from "@/components/home/CauseBanner";
import AchievementsSection from "@/components/home/AchievementsSection";
import VideoSection from "@/components/home/VideoSection";
import ProgramsAndMatch from "@/components/home/ProgramsAndMatch";
import HonoursSection from "@/components/home/HonoursSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";

export const metadata: Metadata = {
  title: "Bangalore Super Strikers FC | Best Football Academy in Bangalore",
  description:
    "BSSFC – football academy & soccer school in Bangalore. Academy training, school coaching, university scholarships & summer camps for ages 5–25. Join India's fastest-growing football club today.",
  alternates: { canonical: "https://www.bangaloresuperstrikersfc.com/" },
};

export default function HomePage() {
  return (
    <>
      {/* A. Hero carousel */}
      <HeroCarousel />

      {/* B. Match strip */}
      <div id="fixtures">
        <MatchStrip />
      </div>

      {/* C. Join SuperStriker Football Club — Replaced promo banner per reference */}
      <PromoBanner />

      {/* D. Cause banner — Foundation */}
      <CauseBanner />

      {/* E. Achievements / featured news */}
      <AchievementsSection />

      {/* F. Video row — BSSFC TV */}
      <div id="bssfc-tv">
        <VideoSection />
      </div>

      {/* G. Programs + Last match two-column */}
      <ProgramsAndMatch />

      {/* H. Dedicated Club Honours Section */}
      <HonoursSection />

      {/* I. Pan-India Ecosystem & Sister Clubs from superstrikersinternational.com */}
      <EcosystemSection />

      {/* J. About teaser */}
      <AboutTeaser />

      {/* L. Testimonials */}
      <TestimonialsSection />

      {/* M. Collaborative Network / Partners matching Screenshot 1 */}
      <PartnersSection />
    </>
  );
}
