const FACTS = [
  { value: "07", label: "MINI GAMES" },
  { value: "02", label: "CREATIVE TOOLS" },
  { value: "01", label: "AI ASSISTANT" },
  { value: "02", label: "PLAY MODES" },
] as const;

export function QuickFacts() {
  return (
    <section
      aria-label="Quick Facts"
      className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#252525] divide-y lg:divide-y-0 lg:divide-x divide-dotted divide-[#252525] bg-[#050505]">
        {FACTS.map((fact) => (
          <div key={fact.label} className="p-8 sm:p-10 space-y-3">
            <div className="font-display text-4xl sm:text-5xl text-white tracking-tight">
              {fact.value}
            </div>
            <div className="font-mono text-xs text-[#888888] uppercase tracking-widest">
              {fact.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
