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
          Two in-memory PNG image generators built directly into Discord channels.
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
            <li>• Subtle soft lo-fi blur (max 100 characters)</li>
            <li>• Rendered in memory with per-user cooldown protection</li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              /brat
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
    </section>
  );
}
