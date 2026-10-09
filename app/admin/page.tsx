"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Trophy,
  Newspaper,
  Image as ImageIcon,
  Video,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  LogOut,
  Upload,
  CheckCircle2,
  AlertCircle,
  Eye,
  RefreshCw,
  Sparkles,
  PlayCircle,
  Radio,
  Calendar,
  Save,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

type NewsItem = {
  id: number | string;
  title: string;
  source: string;
  date: string;
  tag: string;
  excerpt: string;
  url: string;
  image: string;
  readTime?: string;
  content?: string[];
  createdAt?: string;
};

type FixtureData = {
  lastResult: {
    competition: string;
    date: string;
    homeTeam: string;
    homeScore: number;
    awayTeam: string;
    awayScore: number;
    homeCrest?: string;
    awayCrest?: string;
    resultBadge?: string;
    reportUrl?: string;
    location?: string;
    sourceUrl?: string;
  };
  nextMatch?: {
    opponent: string;
    date: string;
    competition?: string;
  };
  broadcast?: {
    venue: string;
    channel: string;
  };
};

type GalleryItem = {
  id: string;
  src: string;
  title: string;
  tag: string;
  date?: string;
};

type VideoItem = {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail: string;
  category: string;
  duration?: string;
  date?: string;
  featuredOnHome?: boolean;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "results" | "news" | "gallery" | "videos">("overview");
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Data states
  const [news, setNews] = useState<NewsItem[]>([]);
  const [fixtures, setFixtures] = useState<FixtureData | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);

  // News Modal State
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newsForm, setNewsForm] = useState({
    title: "",
    tag: "KSFA Super Division",
    source: "BSSFC Match Centre",
    date: "",
    excerpt: "",
    content: "",
    image: "/assets/imgs/clubs/news-scouting.jpg",
    readTime: "3 min read",
  });

  // Gallery Modal State
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    tag: "Squad",
    src: "",
  });

  // Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoForm, setVideoForm] = useState({
    title: "",
    youtubeUrl: "",
    category: "Match Highlights",
    duration: "04:30",
    featuredOnHome: true,
  });

  const [uploadingImage, setUploadingImage] = useState(false);

  // Check auth and load data
  useEffect(() => {
    async function init() {
      try {
        const authRes = await fetch("/api/admin/auth");
        const authData = await authRes.json();
        if (!authData.authenticated) {
          router.push("/admin/login");
          return;
        }
        await fetchAllData();
      } catch (err) {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [router]);

  const showStatus = (text: string, type: "success" | "error" = "success") => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 4500);
  };

  const fetchAllData = async () => {
    try {
      const [resNews, resFix, resGal, resVid] = await Promise.all([
        fetch("/api/admin/news"),
        fetch("/api/admin/results"),
        fetch("/api/admin/gallery"),
        fetch("/api/admin/videos"),
      ]);
      const [dataNews, dataFix, dataGal, dataVid] = await Promise.all([
        resNews.json(),
        resFix.json(),
        resGal.json(),
        resVid.json(),
      ]);
      setNews(dataNews || []);
      setFixtures(dataFix || null);
      setGallery(dataGal || []);
      setVideos(dataVid || []);
    } catch (err) {
      showStatus("Error loading data", "error");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const handleImageUpload = async (file: File, target: "news" | "gallery") => {
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      if (target === "news") {
        setNewsForm((prev) => ({ ...prev, image: data.url }));
      } else {
        setGalleryForm((prev) => ({ ...prev, src: data.url }));
      }
      showStatus("Image uploaded successfully!");
    } catch (err: any) {
      showStatus(err.message || "Failed to upload image", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // ----------------- NEWS ACTIONS -----------------
  const handleSaveNews = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const paragraphs = newsForm.content
        .split("\n\n")
        .map((p) => p.trim())
        .filter(Boolean);

      const payload = {
        ...newsForm,
        content: paragraphs.length > 0 ? paragraphs : [newsForm.excerpt],
        id: editingNews?.id,
      };

      const res = await fetch("/api/admin/news", {
        method: editingNews ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save article");

      showStatus(editingNews ? "Article updated!" : "New article published! It is now #1 on homepage.");
      setNewsModalOpen(false);
      setEditingNews(null);
      setNewsForm({
        title: "",
        tag: "KSFA Super Division",
        source: "BSSFC Match Centre",
        date: "",
        excerpt: "",
        content: "",
        image: "/assets/imgs/clubs/news-scouting.jpg",
        readTime: "3 min read",
      });
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error saving article", "error");
    }
  };

  const handleDeleteNews = async (id: number | string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/admin/news?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete article");
      showStatus("Article deleted!");
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error deleting article", "error");
    }
  };

  // ----------------- RESULTS ACTIONS -----------------
  const handleSaveMatchStrip = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fixtures) return;
    try {
      const res = await fetch("/api/admin/results", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fixtures.lastResult,
          nextMatch: fixtures.nextMatch,
          broadcast: fixtures.broadcast,
        }),
      });
      if (!res.ok) throw new Error("Failed to update Match Strip");
      showStatus("Homepage Match Strip (Latest Results, Next Match & Broadcast) updated live!");
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error updating Match Strip", "error");
    }
  };

  // ----------------- GALLERY ACTIONS -----------------
  const handleSaveGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(galleryForm),
      });
      if (!res.ok) throw new Error("Failed to add photo");
      showStatus("Photo uploaded and added to club gallery!");
      setGalleryModalOpen(false);
      setGalleryForm({ title: "", tag: "Squad", src: "" });
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error adding photo", "error");
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Delete this photo from gallery?")) return;
    try {
      const res = await fetch(`/api/admin/gallery?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete photo");
      showStatus("Photo deleted!");
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error deleting photo", "error");
    }
  };

  // ----------------- VIDEOS ACTIONS -----------------
  const handleSaveVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(videoForm),
      });
      if (!res.ok) throw new Error("Failed to add video");
      showStatus("Video added to BSSFC TV & Gallery with auto HD thumbnail!");
      setVideoModalOpen(false);
      setVideoForm({
        title: "",
        youtubeUrl: "",
        category: "Match Highlights",
        duration: "04:30",
        featuredOnHome: true,
      });
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error adding video", "error");
    }
  };

  const handleDeleteVideo = async (id: string) => {
    if (!confirm("Delete this video?")) return;
    try {
      const res = await fetch(`/api/admin/videos?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete video");
      showStatus("Video deleted!");
      fetchAllData();
    } catch (err: any) {
      showStatus(err.message || "Error deleting video", "error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070b19] flex items-center justify-center text-white">
        <RefreshCw size={24} className="animate-spin text-[#e9d319] mr-3" />
        <span className="font-display font-bold uppercase tracking-wider text-sm">Loading BSSFC Admin Portal...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F6FB] text-[#11123c] flex flex-col font-sans selection:bg-[#e9d319] selection:text-[#11123c] pt-[135px] sm:pt-[150px] lg:pt-[165px]">
      {/* Top Admin Control Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4">
        <div className="bg-[#11123c] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg border border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="relative w-10 h-10 shrink-0 drop-shadow-md">
              <Image
                src="/assets/imgs/crests/bangalore-crest.png"
                alt="BSSFC Crest"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-white">
                  BSSFC Control Panel
                </h1>
                <span className="bg-[#e9d319] text-[#11123c] text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                  ADMIN
                </span>
              </div>
              <p className="text-xs text-white/60">Bangalore Super Strikers FC Official Management</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#e9d319] hover:text-white py-2 px-3.5 rounded-xl bg-white/10 hover:bg-[#1B4193] transition-all"
            >
              <span>View Website</span>
              <ExternalLink size={13} />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-red-300 hover:text-white py-2 px-3.5 rounded-xl bg-red-500/10 hover:bg-red-600 transition-colors cursor-pointer"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar Navigation + Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full flex-1 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full lg:w-64 shrink-0 bg-white rounded-2xl border border-gray-200 shadow-sm p-3.5 flex flex-col gap-1.5 sticky lg:top-[155px]">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-3 py-2">
            MANAGEMENT MODULES
          </p>

          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all text-left cursor-pointer ${
              activeTab === "overview"
                ? "bg-[#11123c] text-[#e9d319] shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <LayoutDashboard size={17} />
            <span>Overview Hub</span>
          </button>

          <button
            onClick={() => setActiveTab("results")}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all text-left cursor-pointer ${
              activeTab === "results"
                ? "bg-[#1B4193] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <Trophy size={17} />
              <span>Hero Match Strip</span>
            </div>
            <span className="text-[10px] bg-[#e9d319] text-[#11123c] px-2 py-0.5 rounded font-black">
              HOME
            </span>
          </button>

          <button
            onClick={() => setActiveTab("news")}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all text-left cursor-pointer ${
              activeTab === "news"
                ? "bg-[#1B4193] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <Newspaper size={17} />
              <span>News &amp; Reports</span>
            </div>
            <span className="text-[10px] bg-gray-150 text-gray-700 px-2 py-0.5 rounded font-bold">
              {news.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all text-left cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#1B4193] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <ImageIcon size={17} />
              <span>Photo Gallery</span>
            </div>
            <span className="text-[10px] bg-gray-150 text-gray-700 px-2 py-0.5 rounded font-bold">
              {gallery.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all text-left cursor-pointer ${
              activeTab === "videos"
                ? "bg-[#1B4193] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <Video size={17} />
              <span>Video Hub &amp; TV</span>
            </div>
            <span className="text-[10px] bg-gray-150 text-gray-700 px-2 py-0.5 rounded font-bold">
              {videos.length}
            </span>
          </button>

          <div className="pt-3 mt-3 border-t border-gray-100 flex flex-col gap-1">
            <Link
              href="/"
              target="_blank"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider text-gray-600 hover:bg-gray-100 hover:text-[#11123c] transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <ExternalLink size={16} className="text-[#1B4193]" />
                <span>View Website</span>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-display font-black text-xs uppercase tracking-wider text-red-600 hover:bg-red-50 transition-all text-left cursor-pointer"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 w-full space-y-6">
          {/* Toast Notification */}
          {statusMessage && (
            <div
              className={`p-4 rounded-xl flex items-center gap-3 text-sm font-bold shadow-md transition-all ${
                statusMessage.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 size={19} className="text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle size={19} className="text-red-600 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* ================= SECTION 0: OVERVIEW HUB ================= */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#11123c] to-[#1B4193] rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#e9d319]/10 blur-3xl pointer-events-none" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e9d319] bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-block mb-3">
                  CONTROL OVERVIEW
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
                  Welcome to BSSFC Admin
                </h2>
                <p className="text-sm text-white/80 max-w-xl font-sans">
                  Select any section below to update live content. All updates automatically align with the website design without disturbing the responsive layout.
                </p>
              </div>

              {/* 4 Interactive Quick Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Match Strip Card */}
                <div
                  onClick={() => setActiveTab("results")}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#1B4193]/10 text-[#1B4193] flex items-center justify-center">
                        <Trophy size={22} />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#1B4193] bg-[#1B4193]/10 px-2.5 py-1 rounded-full">
                        After Hero Section
                      </span>
                    </div>
                    <h3 className="font-display font-black text-lg uppercase text-[#11123c] mb-1 group-hover:text-[#1B4193] transition-colors">
                      Latest Results &amp; Match Strip
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      Update the scoreline ({fixtures?.lastResult.homeTeam} {fixtures?.lastResult.homeScore}–{fixtures?.lastResult.awayScore} {fixtures?.lastResult.awayTeam}), opponent name, Next Match (TBA), and stadium broadcast block right under the hero slider.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-150 flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-[#1B4193] flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Update Match Strip</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* 2. News Cards */}
                <div
                  onClick={() => setActiveTab("news")}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#e9d319]/20 text-[#11123c] flex items-center justify-center">
                        <Newspaper size={22} />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#11123c] bg-[#e9d319] px-2.5 py-1 rounded-full">
                        Strict 6 on Home · {news.length} Total
                      </span>
                    </div>
                    <h3 className="font-display font-black text-lg uppercase text-[#11123c] mb-1 group-hover:text-[#1B4193] transition-colors">
                      News &amp; Match Reports
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      Publish new news. It instantly takes the #1 spot on the homepage while the 6th slides smoothly into the full News Page archive (<code>/blogs</code>).
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-150 flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-[#1B4193] flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Manage News Articles</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* 3. Photo Gallery */}
                <div
                  onClick={() => setActiveTab("gallery")}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                        <ImageIcon size={22} />
                      </div>
                      <span className="text-[10px] font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                        {gallery.length} Photos
                      </span>
                    </div>
                    <h3 className="font-display font-black text-lg uppercase text-[#11123c] mb-1 group-hover:text-[#1B4193] transition-colors">
                      Photo Gallery Manager
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      Upload high-res matchday action photos, training drills, and squad portraits into the <code>/gallery</code> page with category tags.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-150 flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-[#1B4193] flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Upload &amp; Manage Photos</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

                {/* 4. Video Hub */}
                <div
                  onClick={() => setActiveTab("videos")}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                        <Video size={22} />
                      </div>
                      <span className="text-[10px] font-black uppercase text-red-700 bg-red-100 px-2.5 py-1 rounded-full">
                        {videos.length} Videos · BSSFC TV
                      </span>
                    </div>
                    <h3 className="font-display font-black text-lg uppercase text-[#11123c] mb-1 group-hover:text-[#1B4193] transition-colors">
                      Video Hub &amp; BSSFC TV
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      Add YouTube videos with auto HD thumbnail generation. Displays inside the <strong>Gallery Page Video Tab</strong> and the <strong>Homepage BSSFC TV Section</strong>.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-150 flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-[#1B4193] flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Add &amp; Manage Videos</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SECTION 1: MATCH STRIP (AFTER HERO) ================= */}
          {activeTab === "results" && fixtures && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B4193] bg-[#1B4193]/10 px-3 py-1 rounded-full inline-block mb-2">
                  LOCATED DIRECTLY AFTER HERO SECTION
                </span>
                <h2 className="font-display font-black text-xl uppercase tracking-tight text-[#11123c]">
                  Match Strip: Latest Results &amp; Next Fixture
                </h2>
                <p className="text-xs text-gray-500 mt-1 max-w-2xl leading-relaxed">
                  This 3-card block floats right below the hero carousel on the homepage. Update the finished match scores, announce the upcoming fixture, or modify stadium/broadcast info.
                </p>
              </div>

              {/* Live Preview of the exact 3-box Match Strip */}
              <div className="bg-[#11123c] p-6 sm:p-8 rounded-2xl text-white shadow-xl">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#e9d319] mb-4 flex items-center gap-1.5">
                  <Eye size={13} />
                  <span>HOMEPAGE MATCH STRIP PREVIEW</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 rounded-xl overflow-hidden border border-white/20 bg-white text-[#11123c]">
                  {/* Box 1: Latest Results */}
                  <div className="md:col-span-4 p-5 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200">
                    <span className="text-xs font-black uppercase tracking-wider text-[#11123c] mb-3">
                      LATEST RESULTS
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8">
                        <Image
                          src={fixtures.lastResult.homeCrest || "/assets/imgs/crests/bangalore-crest.png"}
                          alt="Home"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-display font-black text-2xl text-[#11123c]">
                        {fixtures.lastResult.homeScore} - {fixtures.lastResult.awayScore}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[11px] font-black text-[#11123c]">
                        {fixtures.lastResult.awayTeam ? fixtures.lastResult.awayTeam.slice(0, 2).toUpperCase() : "OP"}
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-red-600 mt-2 block">
                      {fixtures.lastResult.date}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase mt-0.5 block truncate max-w-full">
                      {fixtures.lastResult.competition}
                    </span>
                  </div>

                  {/* Box 2: Next Match */}
                  <div className="md:col-span-4 p-5 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200 bg-white">
                    <span className="text-xs font-black uppercase tracking-wider text-[#11123c] mb-3">
                      NEXT MATCH
                    </span>
                    <div className="font-display font-black text-lg text-[#11123c] uppercase">
                      {fixtures.nextMatch?.opponent || "TBA"}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 uppercase mt-2 block">
                      {fixtures.nextMatch?.date || "FIXTURE TO BE ANNOUNCED"}
                    </span>
                  </div>

                  {/* Box 3: Stadium & Broadcast */}
                  <div className="md:col-span-4 p-5 flex flex-col items-center justify-center text-center bg-[#25265e] text-white">
                    <span className="font-display font-black text-xl uppercase tracking-wider text-white">
                      {fixtures.broadcast?.venue || "TBA"}
                    </span>
                    <span className="text-[10px] font-semibold text-white/70 uppercase mt-1">
                      {fixtures.broadcast?.channel || "STADIUM & BROADCAST"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Match Strip Editor Form */}
              <form onSubmit={handleSaveMatchStrip} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-6">
                <h3 className="font-display font-black text-base uppercase text-[#11123c] border-b border-gray-150 pb-3 flex items-center gap-2">
                  <Edit3 size={16} className="text-[#1B4193]" />
                  <span>Update Card 1: Finished Match Result</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Tournament / Competition Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fixtures.lastResult.competition}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          lastResult: { ...fixtures.lastResult, competition: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Match Date *
                    </label>
                    <input
                      type="text"
                      required
                      value={fixtures.lastResult.date}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          lastResult: { ...fixtures.lastResult, date: e.target.value },
                        })
                      }
                      placeholder="e.g. 1 Aug 2021"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Home Team */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <span className="text-xs font-black uppercase text-[#11123c] block">Home Team (BSSFC)</span>
                    <input
                      type="text"
                      required
                      value={fixtures.lastResult.homeTeam}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          lastResult: { ...fixtures.lastResult, homeTeam: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg"
                    />
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">Goals Scored</label>
                      <input
                        type="number"
                        required
                        min={0}
                        value={fixtures.lastResult.homeScore}
                        onChange={(e) =>
                          setFixtures({
                            ...fixtures,
                            lastResult: { ...fixtures.lastResult, homeScore: Number(e.target.value) },
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg font-bold"
                      />
                    </div>
                  </div>

                  {/* Away Team */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <span className="text-xs font-black uppercase text-[#11123c] block">Opponent Team</span>
                    <input
                      type="text"
                      required
                      value={fixtures.lastResult.awayTeam}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          lastResult: { ...fixtures.lastResult, awayTeam: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg"
                    />
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">Goals Scored</label>
                      <input
                        type="number"
                        required
                        min={0}
                        value={fixtures.lastResult.awayScore}
                        onChange={(e) =>
                          setFixtures({
                            ...fixtures,
                            lastResult: { ...fixtures.lastResult, awayScore: Number(e.target.value) },
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg font-bold"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-black text-base uppercase text-[#11123c] border-b border-gray-150 pb-3 pt-2 flex items-center gap-2">
                  <Calendar size={16} className="text-[#1B4193]" />
                  <span>Update Card 2 &amp; 3: Next Fixture &amp; Broadcast</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Card 2: Next Opponent (or "TBA")
                    </label>
                    <input
                      type="text"
                      value={fixtures.nextMatch?.opponent || ""}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          nextMatch: {
                            opponent: e.target.value,
                            date: fixtures.nextMatch?.date || "FIXTURE TO BE ANNOUNCED",
                          },
                        })
                      }
                      placeholder="e.g. vs Bengaluru Independents FC or TBA"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Card 2: Next Match Date / Note
                    </label>
                    <input
                      type="text"
                      value={fixtures.nextMatch?.date || ""}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          nextMatch: {
                            opponent: fixtures.nextMatch?.opponent || "TBA",
                            date: e.target.value,
                          },
                        })
                      }
                      placeholder="e.g. Sunday, 15 Nov · 3:30 PM"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Card 3: Stadium Name (or "TBA")
                    </label>
                    <input
                      type="text"
                      value={fixtures.broadcast?.venue || ""}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          broadcast: {
                            venue: e.target.value,
                            channel: fixtures.broadcast?.channel || "STADIUM & BROADCAST",
                          },
                        })
                      }
                      placeholder="Bangalore Football Stadium"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Card 3: Broadcast Info
                    </label>
                    <input
                      type="text"
                      value={fixtures.broadcast?.channel || ""}
                      onChange={(e) =>
                        setFixtures({
                          ...fixtures,
                          broadcast: {
                            venue: fixtures.broadcast?.venue || "TBA",
                            channel: e.target.value,
                          },
                        })
                      }
                      placeholder="STADIUM & BROADCAST"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#1B4193] text-white hover:bg-[#e9d319] hover:text-[#11123c] font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Save size={16} />
                  <span>Save All 3 Cards to Live Homepage</span>
                </button>
              </form>
            </div>
          )}

          {/* ================= SECTION 2: NEWS & MATCH REPORTS ================= */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display font-black text-xl uppercase tracking-tight text-[#11123c]">
                    News &amp; Match Reports Manager
                  </h2>
                  <p className="text-xs text-gray-500 mt-1 max-w-2xl leading-relaxed">
                    <span className="font-bold text-[#1B4193]">Strict Rolling Queue:</span> Exactly <strong>6 cards appear on the homepage</strong>. When you publish a new story, it takes <strong>#1 on the homepage</strong>, and older stories slide into the full News Page (<code>/blogs</code>) without disturbing any layouts.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingNews(null);
                    setNewsForm({
                      title: "",
                      tag: "KSFA Super Division",
                      source: "BSSFC Match Centre",
                      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
                      excerpt: "",
                      content: "",
                      image: "/assets/imgs/clubs/news-scouting.jpg",
                      readTime: "3 min read",
                    });
                    setNewsModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#e9d319] text-[#11123c] hover:bg-[#1B4193] hover:text-white font-display font-black text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer shrink-0"
                >
                  <Plus size={16} />
                  <span>Publish New Article</span>
                </button>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item, index) => {
                  const isHomepageCard = index < 6;
                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-2xl border overflow-hidden shadow-xs flex flex-col transition-all ${
                        isHomepageCard ? "border-[#1B4193]/35 ring-1 ring-[#1B4193]/20" : "border-gray-200 opacity-90"
                      }`}
                    >
                      <div className="relative aspect-[16/9] w-full bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                          {isHomepageCard ? (
                            <span className="bg-[#e9d319] text-[#11123c] font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                              <Sparkles size={11} />
                              <span>HOMEPAGE #{index + 1}</span>
                            </span>
                          ) : (
                            <span className="bg-[#11123c]/85 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                              NEWS ARCHIVE ONLY
                            </span>
                          )}
                          <span className="bg-white/95 text-[#11123c] font-black text-[10px] uppercase px-2 py-0.5 rounded-md">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">
                            {item.source} · {item.date}
                          </p>
                          <h3 className="font-display font-bold text-sm leading-snug text-[#11123c] line-clamp-2 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-4">
                            {item.excerpt}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                          <Link
                            href={`/blogs/${item.id}`}
                            target="_blank"
                            className="text-xs font-bold text-[#1B4193] hover:text-[#e9d319] flex items-center gap-1"
                          >
                            <Eye size={13} />
                            <span>View</span>
                          </Link>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => {
                                setEditingNews(item);
                                setNewsForm({
                                  title: item.title,
                                  tag: item.tag,
                                  source: item.source,
                                  date: item.date,
                                  excerpt: item.excerpt,
                                  content: Array.isArray(item.content) ? item.content.join("\n\n") : item.excerpt,
                                  image: item.image,
                                  readTime: item.readTime || "3 min read",
                                });
                                setNewsModalOpen(true);
                              }}
                              className="p-2 text-gray-500 hover:text-[#1B4193] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                              title="Edit Article"
                            >
                              <Edit3 size={15} />
                            </button>
                            <button
                              onClick={() => handleDeleteNews(item.id)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete Article"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= SECTION 3: PHOTO GALLERY ================= */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display font-black text-xl uppercase tracking-tight text-[#11123c]">
                    Club Photo Gallery Manager
                  </h2>
                  <p className="text-xs text-gray-500 mt-1 max-w-2xl leading-relaxed">
                    Upload photos for the Gallery page (<code>/gallery</code>). Images are organized by category tags and strictly maintained at a uniform aspect ratio.
                  </p>
                </div>

                <button
                  onClick={() => setGalleryModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#e9d319] text-[#11123c] hover:bg-[#1B4193] hover:text-white font-display font-black text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer shrink-0"
                >
                  <Plus size={16} />
                  <span>Upload Photo</span>
                </button>
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {gallery.map((img) => (
                  <div
                    key={img.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs group relative flex flex-col"
                  >
                    <div className="relative aspect-[4/3] w-full bg-gray-100">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 20vw"
                      />
                      <span className="absolute top-2 left-2 bg-[#11123c]/85 text-white font-black text-[9px] uppercase px-1.5 py-0.5 rounded">
                        {img.tag}
                      </span>
                    </div>

                    <div className="p-2.5 flex-1 flex flex-col justify-between">
                      <p className="text-[11px] font-bold text-[#11123c] truncate" title={img.title}>
                        {img.title}
                      </p>
                      <button
                        onClick={() => handleDeleteGallery(img.id)}
                        className="mt-2 text-[10px] font-bold uppercase text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 size={11} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SECTION 4: VIDEO HUB & BSSFC TV ================= */}
          {activeTab === "videos" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display font-black text-xl uppercase tracking-tight text-[#11123c]">
                    Video Hub &amp; BSSFC TV Manager
                  </h2>
                  <p className="text-xs text-gray-500 mt-1 max-w-2xl leading-relaxed">
                    Add YouTube match highlights, training drills, or player reels. These automatically populate both the <strong>Homepage BSSFC TV Slider</strong> and the <strong>Gallery Page Video Tab</strong>.
                  </p>
                </div>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#e9d319] text-[#11123c] hover:bg-[#1B4193] hover:text-white font-display font-black text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer shrink-0"
                >
                  <Plus size={16} />
                  <span>Add Video</span>
                </button>
              </div>

              {/* Videos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((vid) => (
                  <div
                    key={vid.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs flex flex-col"
                  >
                    <div className="relative aspect-video w-full bg-black">
                      <Image
                        src={vid.thumbnail}
                        alt={vid.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <PlayCircle size={38} className="text-white drop-shadow-md" />
                      </div>
                      <span className="absolute top-3 left-3 bg-[#e9d319] text-[#11123c] font-black text-[10px] uppercase px-2 py-0.5 rounded shadow">
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
                        <h3 className="font-display font-bold text-sm leading-snug text-[#11123c] mb-1.5">
                          {vid.title}
                        </h3>
                        <p className="text-xs text-gray-400 truncate">
                          ID: {vid.id}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-gray-150 flex items-center justify-between">
                        <a
                          href={vid.youtubeUrl}
                          target="_blank"
                          className="text-xs font-bold text-[#1B4193] hover:text-[#e9d319] flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          <span>Watch Video</span>
                        </a>
                        <button
                          onClick={() => handleDeleteVideo(vid.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                          title="Delete video"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ================= MODAL: ADD / EDIT NEWS ================= */}
      {newsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 my-8">
            <h3 className="font-display font-black text-xl uppercase text-[#11123c] mb-2">
              {editingNews ? "Edit Article" : "Publish New Article"}
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              New articles automatically jump to #1 on the homepage.
            </p>

            <form onSubmit={handleSaveNews} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Article Headline *</label>
                <input
                  type="text"
                  required
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  placeholder="e.g. Super Strikers Advance in KSFA Knockout Cup"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Category / Tag</label>
                  <input
                    type="text"
                    required
                    value={newsForm.tag}
                    onChange={(e) => setNewsForm({ ...newsForm, tag: e.target.value })}
                    placeholder="KSFA Super Division, Academy, Youth, etc."
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Publication Date</label>
                  <input
                    type="text"
                    value={newsForm.date}
                    onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                    placeholder="e.g. 24 Oct 2026"
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Short Excerpt (Homepage Preview) *</label>
                <textarea
                  required
                  rows={2}
                  value={newsForm.excerpt}
                  onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })}
                  placeholder="1-2 sentences summarizing the match or event..."
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Full Body Content (Separate paragraphs with double Enter)</label>
                <textarea
                  rows={5}
                  value={newsForm.content}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  placeholder="First paragraph of the news story...&#10;&#10;Second paragraph..."
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Cover Image</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={newsForm.image}
                    onChange={(e) => setNewsForm({ ...newsForm, image: e.target.value })}
                    className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                  />
                  <label className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl text-xs font-bold uppercase cursor-pointer flex items-center gap-1.5 shrink-0">
                    <Upload size={14} />
                    <span>{uploadingImage ? "Uploading..." : "Upload File"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file, "news");
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-150">
                <button
                  type="button"
                  onClick={() => setNewsModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold uppercase text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1B4193] text-white hover:bg-[#e9d319] hover:text-[#11123c] text-xs font-black uppercase rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  {editingNews ? "Save Changes" : "Publish Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD GALLERY PHOTO ================= */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200">
            <h3 className="font-display font-black text-xl uppercase text-[#11123c] mb-4">
              Add Photo to Gallery
            </h3>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Caption / Title *</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  placeholder="e.g. Senior Squad Match Action"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Category Tag</label>
                <select
                  value={galleryForm.tag}
                  onChange={(e) => setGalleryForm({ ...galleryForm, tag: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193] bg-white"
                >
                  <option value="Squad">Squad</option>
                  <option value="Matches">Matches</option>
                  <option value="Training">Training</option>
                  <option value="Youth">Youth</option>
                  <option value="Tournaments">Tournaments</option>
                  <option value="Coaching">Coaching</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Image Source / Upload *</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    value={galleryForm.src}
                    onChange={(e) => setGalleryForm({ ...galleryForm, src: e.target.value })}
                    placeholder="/assets/imgs/... or upload"
                    className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-xl"
                  />
                  <label className="px-3.5 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl text-xs font-bold uppercase cursor-pointer flex items-center gap-1 shrink-0">
                    <Upload size={13} />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file, "gallery");
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-150">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold uppercase text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1B4193] text-white hover:bg-[#e9d319] hover:text-[#11123c] text-xs font-black uppercase rounded-lg transition-colors cursor-pointer shadow-md"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD VIDEO ================= */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200">
            <h3 className="font-display font-black text-xl uppercase text-[#11123c] mb-4">
              Add Video to BSSFC TV &amp; Gallery
            </h3>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Video Title *</label>
                <input
                  type="text"
                  required
                  value={videoForm.title}
                  onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                  placeholder="e.g. Match Highlights vs Raman Sports Academy"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">YouTube Video URL or ID *</label>
                <input
                  type="text"
                  required
                  value={videoForm.youtubeUrl}
                  onChange={(e) => setVideoForm({ ...videoForm, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=HZTuAQnXLQo"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-[#1B4193]"
                />
                <p className="text-[11px] text-gray-400 mt-1">High-definition thumbnail is automatically extracted.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Category</label>
                  <select
                    value={videoForm.category}
                    onChange={(e) => setVideoForm({ ...videoForm, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl bg-white"
                  >
                    <option value="Match Highlights">Match Highlights</option>
                    <option value="Training Reels">Training Reels</option>
                    <option value="Interviews">Interviews</option>
                    <option value="BSSFC TV">BSSFC TV</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">Duration</label>
                  <input
                    type="text"
                    value={videoForm.duration}
                    onChange={(e) => setVideoForm({ ...videoForm, duration: e.target.value })}
                    placeholder="04:30"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-150">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold uppercase text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1B4193] text-white hover:bg-[#e9d319] hover:text-[#11123c] text-xs font-black uppercase rounded-lg transition-colors cursor-pointer shadow-md"
                >
                  Save Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
