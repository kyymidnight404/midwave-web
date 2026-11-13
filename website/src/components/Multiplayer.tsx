export function Multiplayer() {
  const steps = [
    {
      num: "01",
      title: "CHALLENGE",
      desc: "Send a 1v1 game invitation to any server member using a slash or prefix command.",
    },
    {
      num: "02",
      title: "ACCEPT",
      desc: "The opponent accepts or declines within 60 seconds using /invite accept or /invite decline.",
    },
    {
      num: "03",
      title: "PLAY",
      desc: "Compete turn-by-turn inside the channel until a winner or draw is declared.",
    },
  ];

  return (
    <section
      id="multiplayer"
      className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider"
    >
      <div className="space-y-3 mb-12">
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
          [ 03 // 1V1 MULTIPLAYER ]
        </span>
        <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
          PLAY TOGETHER. COMPETE DIRECTLY.
        </h2>
        <p className="text-[#888888] text-sm sm:text-base max-w-2xl">
          Challenge another Discord user, accept invitations, take turns, and
          discover who wins.
        </p>
      </div>

      {/* 3-Step Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-[#252525] divide-y md:divide-y-0 md:divide-x divide-dotted divide-[#252525] mb-12">
        {steps.map((step) => (
          <div key={step.num} className="p-6 bg-[#050505] space-y-3">
            <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
              {step.num} — {step.title}
            </div>
            <p className="text-sm text-[#888888] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Monochrome Discord-style UI Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Preview 1: Match Invitation */}
        <div className="border border-[#252525] bg-[#101010] p-5 space-y-4">
          <div className="font-mono text-[11px] text-[#666666] uppercase tracking-wider">
            PREVIEW 01 // MATCH INVITATION
          </div>
          <div className="border-l-2 border-white bg-[#050505] p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-white font-semibold">MIDWAVE BOT</span>
              <span className="text-[#666666]">TTL: 60s</span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed">
              <span className="text-white">@player_one</span> challenged{" "}
              <span className="text-white">@player_two</span> to{" "}
              <span className="text-white">TIC TAC TOE</span>.
            </p>
            <div className="flex gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2.5 py-1 bg-white text-[#050505] font-semibold">
                /invite accept
              </span>
              <span className="px-2.5 py-1 border border-[#252525] text-[#888888]">
                /invite decline
              </span>
            </div>
          </div>
        </div>

        {/* Preview 2: Active Game Board */}
        <div className="border border-[#252525] bg-[#101010] p-5 space-y-4">
          <div className="font-mono text-[11px] text-[#666666] uppercase tracking-wider">
            PREVIEW 02 // GAME BOARD
          </div>
          <div className="border-l-2 border-white bg-[#050505] p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-white font-semibold">TIC TAC TOE (3×3)</span>
              <span className="text-[#888888]">TURN: X</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 max-w-[168px] font-mono text-xs">
              {["X", "O", "A3", "B1", "X", "B3", "O", "C2", "C3"].map((cell) => {
                const isOccupied = cell === "X" || cell === "O";
                return (
                  <div
                    key={cell}
                    className={`h-10 border flex items-center justify-center ${
                      isOccupied
                        ? "border-white text-white bg-[#101010] font-bold"
                        : "border-[#252525] text-[#666666]"
                    }`}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
            <div className="font-mono text-[11px] text-[#666666]">
              CMD: /tictactoe move position:C3
            </div>
          </div>
        </div>

        {/* Preview 3: Result Embed */}
        <div className="border border-[#252525] bg-[#101010] p-5 space-y-4">
          <div className="font-mono text-[11px] text-[#666666] uppercase tracking-wider">
            PREVIEW 03 // RESULT EMBED
          </div>
          <div className="border-l-2 border-white bg-[#050505] p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-white font-semibold">MATCH COMPLETE</span>
              <span className="text-[#666666]">IN-MEMORY</span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed">
              Winner: <span className="text-white">@player_one</span> completed
              diagonal line <span className="text-white">A1 → B2 → C3</span>.
            </p>
            <div className="border-t border-dotted border-[#252525] pt-2 font-mono text-[11px] text-[#666666]">
              Session disposed cleanly • Zero persistent storage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
