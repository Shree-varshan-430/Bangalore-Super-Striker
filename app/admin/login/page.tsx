"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lock, User, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid username or password");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b19] flex items-center justify-center p-4 selection:bg-[#e9d319] selection:text-[#11123c] pt-[140px] sm:pt-[150px] pb-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-[#11123c] border border-white/10 rounded-2xl shadow-2xl p-8 sm:p-10 relative overflow-hidden">
          {/* Subtle gold glow behind header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#e9d319]/15 blur-2xl pointer-events-none" />

          {/* Crest & Title */}
          <div className="flex flex-col items-center text-center mb-8 relative z-10">
            <div className="relative w-20 h-20 mb-4 drop-shadow-md">
              <Image
                src="/assets/imgs/crests/bangalore-crest.png"
                alt="BSSFC Crest"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#e9d319] bg-white/5 px-3 py-1 rounded-full mb-2 border border-white/10">
              OFFICIAL CLUB PORTAL
            </span>
            <h1 className="font-display text-2xl font-black uppercase tracking-tight text-white">
              BSSFC Admin Panel
            </h1>
            <p className="text-xs text-white/60 font-sans mt-1">
              Manage News, Live Results, Photo Gallery &amp; BSSFC TV
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3.5 bg-red-500/15 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-200 text-xs">
              <AlertCircle size={16} className="shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-white/70 mb-2">
                Admin Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#e9d319] focus:bg-white/10 transition-all placeholder:text-white/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-white/70 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#e9d319] focus:bg-white/10 transition-all placeholder:text-white/30"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-6 rounded-xl font-display font-black text-xs uppercase tracking-wider bg-[#e9d319] text-[#11123c] hover:bg-[#00B8E0] transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Bottom Security Note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-white/40 text-[11px]">
            <ShieldCheck size={14} className="text-[#00B8E0]" />
            <span>Bangalore Super Strikers FC Secure Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
