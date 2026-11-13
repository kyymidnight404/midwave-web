import { FinalCtaVisual } from "./GeometricVisuals";

export function FinalCTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 dotted-divider">
      <div className="border border-[#252525] bg-[#101010] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
            [ 09 // DEPLOY TO SERVER ]
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
            MAKE YOUR DISCORD MORE INTERESTING.
          </h2>
          <p className="text-[#888888] text-sm sm:text-base max-w-lg leading-relaxed">
            Bring games, creativity, and AI to your server with Midwave.
          </p>
        </div>

        <div className="lg:col-span-5">
          <FinalCtaVisual />
        </div>
      </div>
    </section>
  );
}
