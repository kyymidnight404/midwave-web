import { AIGeometricIllustration } from "./GeometricVisuals";

export function AIShowcase() {
  return (
    <section id="ai" className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
              [ 04 // MIDWAVE AI ]
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
              INTELLIGENCE, INSIDE DISCORD.
            </h2>
            <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
              An AI-powered assistant designed to help with programming,
              technology, education, and everyday questions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              /ai
            </code>
            <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
              !ai
            </code>
            <span className="px-3 py-1.5 bg-[#050505] border border-[#252525] font-mono text-xs text-[#888888]">
              GOOGLE GEMINI API
            </span>
          </div>

          <AIGeometricIllustration />

          <div className="border border-[#252525] bg-[#101010] p-4 space-y-2 font-mono text-xs text-[#888888]">
            <div className="text-white uppercase font-semibold">
              OPERATING CHARACTERISTICS
            </div>
            <ul className="space-y-1.5">
              <li>• Each request is processed independently</li>
              <li>• Strictly stateless — no conversation history stored</li>
              <li>• Per-user cooldowns (8s) and 1,500-char prompt limit apply</li>
              <li>• Supports Indonesian and other languages</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-[#252525] bg-[#050505]">
            <div className="px-4 py-3 bg-[#101010] border-b border-[#252525] flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
              <span className="text-white">DISCORD // #general</span>
              <span className="text-[#666666]">STATELESS GEMINI REQUEST</span>
            </div>

            <div className="p-6 space-y-6 font-mono text-xs sm:text-sm">
              {/* User Question */}
              <div className="space-y-1.5">
                <div className="text-[#666666] text-xs uppercase">
                  USER // /ai question
                </div>
                <div className="p-4 border border-[#252525] bg-[#101010] text-white">
                  &gt; Jelaskan perbedaan let dan const di JavaScript secara singkat.
                </div>
              </div>

              {/* AI Response */}
              <div className="space-y-1.5">
                <div className="text-[#666666] text-xs uppercase">
                  MIDWAVE AI // RESPONSE
                </div>
                <div className="border-l-2 border-white pl-4 py-1 space-y-3 text-[#888888] leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">let</span>{" "}
                    digunakan untuk variabel yang nilainya dapat diubah kembali
                    (reassigned), sedangkan{" "}
                    <span className="text-white font-semibold">const</span>{" "}
                    digunakan untuk referensi konstan yang tidak bisa di-assign
                    ulang setelah deklarasi.
                  </p>
                  <pre className="p-3 bg-[#101010] border border-[#252525] text-white text-xs overflow-x-auto">
{`let score = 10;
score = 20; // valid

const maxAttempts = 8;
// maxAttempts = 10; // TypeError`}
                  </pre>
                </div>
              </div>

              <div className="pt-4 border-t border-dotted border-[#252525] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#666666] uppercase">
                <span>HISTORY: NONE (INDEPENDENT PROMPT)</span>
                <span>COOLDOWN: 8S / USER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
