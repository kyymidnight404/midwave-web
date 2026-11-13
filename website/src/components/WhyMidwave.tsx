import { TesseractIllustration } from "./GeometricVisuals";

export function WhyMidwave() {
  return (
    <section
      id="why-how"
      className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="border border-[#252525] bg-[#101010] p-8">
            <TesseractIllustration />
            <div className="mt-4 pt-3 border-t border-dotted border-[#252525] flex justify-between font-mono text-[10px] text-[#666666] uppercase">
              <span>FIG. 02 // HYPERCUBE</span>
              <span>ZERO BLOAT</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
            [ 05 // PHILOSOPHY ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
            WHY AND HOW?
          </h2>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            Midwave brings interactive entertainment, creative expression, and
            AI assistance into one Discord experience.
          </p>
          <div className="space-y-4 text-sm sm:text-base text-[#888888] leading-relaxed">
            <p>
              Instead of cluttering servers with separate bots for mini-games,
              meme utilities, and quick AI lookups, Midwave unifies all three
              inside a single modular Node.js and discord.js architecture.
            </p>
            <p>
              Every game engine runs cleanly in memory with automatic session
              expiration, zero database overhead, and support for both Slash
              Commands and Prefix Commands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
