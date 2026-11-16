export function CreativeTools() {
  return (
    <section
      id="creative-tools"
      className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider"
    >
      <div className="space-y-3 mb-14">
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
          [ 01 // CREATIVE UTILITIES ]
        </span>
        <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
          CREATIVE TOOLS.
        </h2>
        <p className="text-[#888888] text-sm sm:text-base max-w-xl">
          Three in-memory PNG image generators plus media, lyrics, math, and
          social utilities built directly into Discord channels.
        </p>
      </div>

      {/* Product 1: BRAT GENERATOR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-dotted border-[#252525]">
        <div className="lg:col-span-7">
          <div className="border border-[#252525] bg-[#101010] p-4 sm:p-6">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#666666] uppercase mb-4">
              <span>PREVIEW // 1024 × 1024 PNG</span>
              <span>FILE: midwave-brat.png</span>
            </div>

            <div className="aspect-square max-w-[380px] mx-auto bg-white text-black p-6 sm:p-8 flex items-start justify-start border border-[#252525] select-none">
              <p className="font-sans text-2xl sm:text-3xl font-normal lowercase leading-tight tracking-tight text-black blur-[0.65px]">
                making discord more fun with midwave
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
            TOOL 01 // IMAGE SYNTHESIS
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-white uppercase">
            BRAT GENERATOR
          </h3>
          <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
            Create minimalist text-based images with the Brat-inspired visual aesthetic.
          </p>

          <ul className="space-y-2 font-mono text-xs text-[#888888] border-t border-dotted border-[#252525] pt-4">
            <li>• Solid #FFFFFF background with #000000 lowercase type</li>
            <li>• Top-left aligned text with automatic sizing and wrapping</li>
            <li>• Inline emoji support and subtle lo-fi blur (max 1,000 chars)</li>
            <li>• Rendered in memory via resvg-js with per-user cooldown</li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              /media brat
            </code>
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              !brat
            </code>
          </div>
        </div>
      </div>

      {/* Product 2: INSTAGRAM POST FRAME */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-16">
        <div className="lg:col-span-7">
          <div className="border border-[#252525] bg-[#101010] p-4 sm:p-6">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#666666] uppercase mb-4">
              <span>PREVIEW // 1080 × 1080 TRANSPARENT PNG</span>
              <span>FILE: midwave-igf.png</span>
            </div>

            <div className="aspect-square max-w-[380px] mx-auto transparency-grid border border-[#252525] p-5 flex flex-col justify-between">
              <div className="bg-[#050505]/95 border border-white/80 p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-white bg-[#1a1a1a] flex items-center justify-center font-mono text-xs text-white">
                    M
                  </div>
                  <div>
                    <div className="font-sans text-xs font-semibold text-white">
                      Midwave User
                    </div>
                    <div className="font-mono text-[10px] text-[#888888]">
                      DISCORD IDENTITY
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#888888]">•••</span>
              </div>

              <div className="my-4 flex-1 border border-dashed border-[#666666] flex flex-col items-center justify-center text-center p-4 bg-transparent">
                <span className="font-mono text-[11px] text-[#888888] uppercase">
                  TRANSPARENT CANVAS
                </span>
                <span className="font-mono text-[10px] text-[#666666] mt-1">
                  1080 × 1080 PNG OVERLAY
                </span>
              </div>

              <div className="bg-[#050505]/95 border border-white/80 p-3 font-mono text-[11px] text-[#888888] flex items-center justify-between">
                <span className="text-white">♡  💬  ↗</span>
                <span>!igf</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
            TOOL 02 // FRAME OVERLAY
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-white uppercase">
            INSTAGRAM POST FRAME
          </h3>
          <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
            Turn your Discord identity into an Instagram-style post frame.
          </p>

          <ul className="space-y-2 font-mono text-xs text-[#888888] border-t border-dotted border-[#252525] pt-4">
            <li>• Pulls caller&apos;s Discord avatar and display name</li>
            <li>• Clean Instagram-style post card layout</li>
            <li>• Square 1080 × 1080 PNG output</li>
            <li>• Transparent image background for easy layering</li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              !igf
            </code>
          </div>
        </div>
      </div>

      {/* Product 3: QUOTED CHAT (QC) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-16 mt-16 border-t border-dotted border-[#252525]">
        <div className="lg:col-span-7">
          <div className="border border-[#252525] bg-[#101010] p-4 sm:p-6">
            <div className="flex items-center justify-between font-mono text-[11px] text-[#666666] uppercase mb-4">
              <span>PREVIEW // 1080 × 1080–4096 PNG</span>
              <span>FILE: midwave-qc.png</span>
            </div>

            <div className="max-w-[380px] mx-auto bg-[#050505] border border-[#252525] p-6 space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#666666] uppercase">
                <span>WHATSAPP QUOTED CHAT</span>
                <span>WIB // ASIA/JAKARTA</span>
              </div>

              <div className="border border-white/80 bg-[#141414] p-4 space-y-2">
                <p className="font-sans text-sm text-white leading-relaxed">
                  reply any message with !qc or run /media qc text:...
                </p>
                <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-[#888888]">
                  <span>21:30</span>
                  <span className="text-white">✓✓</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-dotted border-[#252525] font-mono text-[10px] text-[#666666] text-center">
                <span className="py-1 border border-[#252525]">REPLY</span>
                <span className="py-1 border border-[#252525]">COPY</span>
                <span className="py-1 border border-[#252525]">PIN</span>
                <span className="py-1 border border-[#252525]">FORWARD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
            TOOL 03 // QUOTED CHAT
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-white uppercase">
            QUOTED CHAT (QC)
          </h3>
          <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
            Turn any text or replied Discord message into a crisp WhatsApp-style
            Quoted Chat screenshot PNG.
          </p>

          <ul className="space-y-2 font-mono text-xs text-[#888888] border-t border-dotted border-[#252525] pt-4">
            <li>• Dynamic 1080px-wide canvas (1080–4096px tall)</li>
            <li>• Works via text input or replying to any message with !qc</li>
            <li>• Local 3D iOS-style emoji assets &amp; Asia/Jakarta timestamps</li>
            <li>• Supports up to 2,000 characters cleanly</li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              /media qc
            </code>
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              !qc
            </code>
          </div>
        </div>
      </div>

      {/* Media, Weather, Social & Utilities Grid */}
      <div className="pt-16 mt-16 border-t border-dotted border-[#252525]">
        <div className="space-y-2 mb-8">
          <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
            PLUS // MEDIA, WEATHER, SOCIAL &amp; UTILITIES
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-white uppercase">
            BEYOND IMAGE GENERATION.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#252525] bg-[#050505]">
          <div className="p-6 space-y-3 border-b md:border-r border-dotted border-[#252525]">
            <div className="font-mono text-[11px] text-[#666666] uppercase">
              01 // MEDIA DOWNLOADER
            </div>
            <h4 className="font-display text-base text-white uppercase">
              IG &amp; TIKTOK DL
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Download public Instagram posts/reels and TikTok videos via
              command or automatic chat link detection, with carousel support.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                /media download
              </code>
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                !dl
              </code>
            </div>
          </div>

          <div className="p-6 space-y-3 border-b lg:border-r border-dotted border-[#252525]">
            <div className="font-mono text-[11px] text-[#666666] uppercase">
              02 // LYRICS FINDER
            </div>
            <h4 className="font-display text-base text-white uppercase">
              SONG LYRICS
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Fetch song lyrics with cover art and metadata via LRCLIB, iTunes,
              and Genius with interactive paginated buttons.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                /media lyrics
              </code>
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                !lyrics
              </code>
            </div>
          </div>

          <div className="p-6 space-y-3 border-b md:border-r lg:border-r-0 border-dotted border-[#252525]">
            <div className="font-mono text-[11px] text-[#666666] uppercase">
              03 // BMKG OPEN DATA
            </div>
            <h4 className="font-display text-base text-white uppercase">
              INDONESIA WEATHER
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Check live BMKG weather forecasts for Indonesian cities, districts,
              villages, or ADM4 codes with 3-hour outlook.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                /weather
              </code>
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                !weather
              </code>
            </div>
          </div>

          <div className="p-6 space-y-3 border-b lg:border-b-0 lg:border-r border-dotted border-[#252525]">
            <div className="font-mono text-[11px] text-[#666666] uppercase">
              04 // SAFE CALCULATOR
            </div>
            <h4 className="font-display text-base text-white uppercase">
              MATH EVALUATOR
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Evaluate arithmetic, trigonometry (rad &amp; deg), roots,
              factorials, and constants safely without eval.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                /math
              </code>
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                !math
              </code>
            </div>
          </div>

          <div className="p-6 space-y-3 border-b md:border-b-0 md:border-r border-dotted border-[#252525]">
            <div className="font-mono text-[11px] text-[#666666] uppercase">
              05 // ANIME EXPRESSIONS
            </div>
            <h4 className="font-display text-base text-white uppercase">
              11 SOCIAL GIFS
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Expressive anime GIF interactions: hug, pat, slap, bonk, kick,
              poke, yeet, highfive, wave, laugh, and cry.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                /social
              </code>
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                !hug
              </code>
            </div>
          </div>

          <div className="p-6 space-y-3">
            <div className="font-mono text-[11px] text-[#666666] uppercase">
              06 // SERVER ONBOARDING
            </div>
            <h4 className="font-display text-base text-white uppercase">
              AUTO ROLE &amp; WELCOME
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Automatically greets new servers on join and assigns configured
              member roles via /autorole (Administrator).
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                /autorole
              </code>
              <code className="px-2 py-1 bg-[#101010] border border-[#252525] font-mono text-[11px] text-white">
                !feedback
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
