"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Search } from "lucide-react";
import { COMMANDS, type CommandCategory } from "@/data/commands";

const CATEGORIES: ("All" | CommandCategory)[] = [
  "All",
  "Games",
  "Creative",
  "Media",
  "Social",
  "AI",
  "Utility",
];

type SyntaxMode = "slash" | "prefix";

export function CommandExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | CommandCategory>("All");
  const [mode, setMode] = useState<SyntaxMode>("slash");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return COMMANDS.filter((cmd) => {
      if (category !== "All" && cmd.category !== category) return false;
      const activeCmd = mode === "slash" ? cmd.slashCommand : cmd.prefixCommand;
      if (!activeCmd) return false;

      if (!normalized) return true;
      return (
        cmd.name.toLowerCase().includes(normalized) ||
        activeCmd.toLowerCase().includes(normalized) ||
        cmd.description.toLowerCase().includes(normalized) ||
        cmd.category.toLowerCase().includes(normalized)
      );
    });
  }, [query, category, mode]);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 1500);
    } catch {
      // Clipboard unavailable in non-secure context
    }
  };

  return (
    <section
      id="commands"
      className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider"
    >
      <div className="space-y-3 mb-10">
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
          [ 06 // COMMAND REFERENCE ]
        </span>
        <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
          EVERYTHING STARTS WITH A COMMAND.
        </h2>
        <p className="text-[#888888] text-sm sm:text-base max-w-2xl">
          Search and filter every supported Slash (/) and Prefix (!) command.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="border border-[#252525] bg-[#101010] p-4 space-y-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className="w-4 h-4 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search commands (e.g. /game, /media, brat, qc, !dl, math, hug, ai)..."
              aria-label="Search commands"
              className="w-full bg-[#050505] border border-[#252525] focus:border-white pl-10 pr-4 py-2.5 font-mono text-xs text-white placeholder:text-[#666666] outline-none"
            />
          </div>

          {/* Slash / Prefix Tabs */}
          <div
            role="tablist"
            aria-label="Command syntax mode"
            className="inline-flex border border-[#252525] bg-[#050505] p-1 self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "slash"}
              onClick={() => setMode("slash")}
              className={`px-4 py-1.5 font-mono text-xs uppercase transition-colors cursor-pointer ${
                mode === "slash"
                  ? "bg-white text-[#050505] font-semibold"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              SLASH (/)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "prefix"}
              onClick={() => setMode("prefix")}
              className={`px-4 py-1.5 font-mono text-xs uppercase transition-colors cursor-pointer ${
                mode === "prefix"
                  ? "bg-white text-[#050505] font-semibold"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              PREFIX (!)
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-dotted border-[#252525]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 border font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                category === cat
                  ? "border-white bg-white text-[#050505] font-semibold"
                  : "border-[#252525] bg-[#050505] text-[#888888] hover:text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Command List */}
      <div className="border border-[#252525] divide-y divide-dotted divide-[#252525] bg-[#050505]">
        {filteredCommands.length === 0 ? (
          <div className="p-8 text-center font-mono text-xs text-[#666666] uppercase">
            No matching commands found for &ldquo;{query}&rdquo; in {mode} mode.
          </div>
        ) : (
          filteredCommands.map((cmd) => {
            const activeTrigger =
              mode === "slash" ? cmd.slashCommand : cmd.prefixCommand;
            const activeExample =
              mode === "slash" ? cmd.slashExample : cmd.prefixExample;
            const isCopied = copiedId === cmd.id;

            return (
              <div
                key={cmd.id}
                className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-[#101010] transition-colors"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <code className="font-mono text-sm sm:text-base text-white font-semibold">
                      {activeTrigger}
                    </code>
                    <span className="px-2 py-0.5 border border-[#252525] bg-[#101010] font-mono text-[10px] text-[#888888] uppercase">
                      {cmd.category}
                    </span>
                    <span className="font-mono text-xs text-[#666666]">
                      {cmd.name}
                    </span>
                  </div>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    {cmd.description}
                  </p>
                  {activeExample && (
                    <div className="font-mono text-xs text-[#666666]">
                      <span className="text-[#888888]">USAGE: </span>
                      <span className="text-[#cccccc]">{activeExample}</span>
                    </div>
                  )}
                  {cmd.notes && (
                    <div className="font-mono text-[11px] text-[#666666]">
                      NOTE: {cmd.notes}
                    </div>
                  )}
                </div>

                {activeTrigger && (
                  <button
                    type="button"
                    onClick={() => handleCopy(cmd.id, activeTrigger)}
                    aria-label={`Copy ${activeTrigger}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#252525] hover:border-white hover:bg-[#1a1a1a] font-mono text-xs text-white uppercase self-start lg:self-center shrink-0 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
