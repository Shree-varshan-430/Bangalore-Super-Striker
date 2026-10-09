import Link from "next/link";
import Image from "next/image";
import fixtures from "@/content/fixtures.json";

export default function MatchStrip() {
  const { lastResult, nextMatch } = fixtures;

  return (
    <section
      className="relative z-30 max-w-5xl mx-auto px-4 -mt-14 sm:-mt-20 mb-8"
      aria-label="Match strip — Latest result and next match"
    >
      <div className="bg-white rounded-none shadow-[0_15px_40px_rgba(0,0,0,0.18)] grid grid-cols-1 md:grid-cols-12 overflow-hidden border border-gray-100">
        
        {/* Left Column: LATEST RESULTS (White card with navy text and red date) */}
        <div className="md:col-span-4 p-6 sm:p-7 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200">
          <h3
            className="text-xs sm:text-sm font-black uppercase tracking-[2px] text-[#11123c] mb-4 font-display"
          >
            LATEST RESULTS
          </h3>

          <div className="flex items-center justify-center gap-4 my-1">
            {/* Home team crest */}
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/assets/imgs/crests/bangalore-crest.png"
                alt={lastResult.homeTeam}
                fill
                className="object-contain"
              />
            </div>

            {/* Score */}
            <div className="font-display text-2xl sm:text-3xl font-black text-[#11123c] tracking-tight">
              {lastResult.homeScore} - {lastResult.awayScore}
            </div>

            {/* Away team crest / initials */}
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-gray-100 rounded-full text-xs font-black text-[#11123c] border border-gray-300">
              {lastResult.awayTeam ? lastResult.awayTeam.slice(0, 2).toUpperCase() : "OP"}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-150 w-full flex flex-col items-center">
            <span className="text-[11px] font-bold text-[#D0202A] tracking-wider">
              {lastResult.date}
            </span>
            <span className="text-[10px] font-semibold text-[#696484] uppercase tracking-wider mt-0.5 line-clamp-1">
              {lastResult.competition}
            </span>
          </div>
        </div>

        {/* Center Column: NEXT MATCH */}
        <div className="md:col-span-4 p-6 sm:p-7 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200 bg-white">
          <h3
            className="text-xs sm:text-sm font-black uppercase tracking-[2px] text-[#11123c] mb-4 font-display"
          >
            NEXT MATCH
          </h3>

          <div className="font-display text-lg sm:text-xl font-black text-[#11123c] tracking-wider my-auto uppercase">
            {(fixtures as any).nextMatch?.opponent || "TBA"}
          </div>

          <p className="text-[10px] font-semibold text-[#696484] tracking-wider mt-4 uppercase">
            {(fixtures as any).nextMatch?.date || "FIXTURE TO BE ANNOUNCED"}
          </p>
        </div>

        {/* Right Column: SOLID BLUE / NAVY BLOCK */}
        <div
          className="md:col-span-4 p-6 sm:p-7 flex flex-col items-center justify-center text-center text-white"
          style={{ background: "#25265e" }}
        >
          <span className="font-display text-xl sm:text-2xl font-black tracking-widest text-white uppercase select-none">
            {(fixtures as any).broadcast?.venue || "TBA"}
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-white/70 uppercase mt-2">
            {(fixtures as any).broadcast?.channel || "STADIUM & BROADCAST"}
          </span>
        </div>

      </div>
    </section>
  );
}
