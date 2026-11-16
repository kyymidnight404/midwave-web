import Link from "next/link";
import { HeroWireframeCanvas } from "./GeometricVisuals";

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-[1200px] mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#888888] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-white inline-block" aria-hidden="true" />
            <span>[ DISCORD ENTERTAINMENT BOT ]</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-white uppercase">
            MAKING DISCORD MORE FUN.
          </h1>

          <p className="text-[#888888] text-base sm:text-lg leading-relaxed max-w-xl">
            Games, creative tools, BMKG Indonesia weather, and AI assistance
            built into one Discord bot.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#creative-tools"
              className="inline-flex items-center justify-center px-5 py-3 border border-[#252525] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1a1a1a] hover:border-white transition-colors"
            >
              EXPLORE FEATURES
            </Link>
          </div>

          <div className="pt-6 border-t border-dotted border-[#252525] flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#666666] uppercase tracking-wider">
            <span>04 MINI-GAMES</span>
            <span aria-hidden="true">·</span>
            <span>03 IMAGE GENERATORS</span>
            <span aria-hidden="true">·</span>
            <span>BMKG WEATHER &amp; MEDIA</span>
            <span aria-hidden="true">·</span>
            <span>GEMINI AI + SEARCH</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative border border-[#252525] bg-[#101010] p-2">
            <span
              className="absolute -top-2 -left-1.5 font-mono text-xs text-white select-none"
              aria-hidden="true"
            >
              +
            </span>
            <span
              className="absolute -top-2 -right-1.5 font-mono text-xs text-white select-none"
              aria-hidden="true"
            >
              +
            </span>
            <span
              className="absolute -bottom-2 -left-1.5 font-mono text-xs text-white select-none"
              aria-hidden="true"
            >
              +
            </span>
            <span
              className="absolute -bottom-2 -right-1.5 font-mono text-xs text-white select-none"
              aria-hidden="true"
            >
              +
            </span>

            <div className="relative w-full h-[340px] sm:h-[400px] bg-[#050505] border border-[#252525]">
              <HeroWireframeCanvas />
              <div className="pointer-events-none absolute inset-0 p-3 flex flex-col justify-between font-mono text-[10px] text-[#666666] uppercase tracking-wider">
                <div className="flex justify-between">
                  <span>[OBJ: POLY_CLUSTER]</span>
                  <span>MODE: MONOCHROME</span>
                </div>
                <div className="flex justify-between">
                  <span>FIG. 01 // GEOMETRIC MATRIX</span>
                  <span>NODE.JS + DISCORD.JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
