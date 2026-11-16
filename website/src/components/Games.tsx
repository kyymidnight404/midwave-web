"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { GAMES, type GameEntry } from "@/data/games";

export function Games() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalGame, setModalGame] = useState<GameEntry | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="games" className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider">
      <div className="space-y-3 mb-12">
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
          [ 02 // ARCADE PROTOCOL ]
        </span>
        <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
          INTERACTIVE GAMES.
        </h2>
        <p className="text-[#888888] text-sm sm:text-base max-w-2xl">
          Play solo or challenge friends with interactive buttons and zero
          points through four mini-games inside Discord.
        </p>
      </div>

      <div className="border border-[#252525] divide-y divide-dotted divide-[#252525] bg-[#050505]">
        {GAMES.map((game) => {
          const isOpen = expandedId === game.id;
          return (
            <div key={game.id} className="transition-colors hover:bg-[#101010]">
              <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-display text-lg sm:text-xl text-[#666666] shrink-0 pt-0.5">
                    {game.number}
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-base sm:text-lg text-white uppercase">
                        {game.title}
                      </h3>
                      {game.modes.map((mode) => (
                        <span
                          key={mode}
                          className="px-2 py-0.5 border border-[#252525] bg-[#101010] font-mono text-[10px] text-[#888888] uppercase"
                        >
                          {mode}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[#888888]">{game.shortDescription}</p>
                    <div className="font-mono text-xs text-[#666666]">
                      DIFFICULTIES: {game.difficulties.join(" • ")}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 lg:shrink-0 pl-9 lg:pl-0">
                  <code className="px-3 py-1.5 bg-[#101010] border border-[#252525] font-mono text-xs text-white">
                    {game.command}
                  </code>
                  <button
                    type="button"
                    onClick={() => toggleExpand(game.id)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#252525] hover:border-white hover:bg-[#1a1a1a] font-mono text-xs text-[#888888] hover:text-white uppercase transition-colors cursor-pointer"
                  >
                    <span>{isOpen ? "HIDE" : "DETAILS"}</span>
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalGame(game)}
                    className="px-3 py-1.5 border border-[#252525] hover:border-white hover:bg-[#1a1a1a] font-mono text-xs text-white uppercase transition-colors cursor-pointer"
                  >
                    MODAL
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 pl-14 sm:pl-16 border-t border-dotted border-[#252525] bg-[#101010] space-y-4">
                  <p className="text-sm text-[#888888] leading-relaxed">
                    {game.fullDescription}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                    <div className="p-3 border border-[#252525] bg-[#050505]">
                      <div className="text-[#666666] uppercase mb-1">SOLO</div>
                      <code className="text-white break-all">{game.soloSyntax}</code>
                    </div>
                    <div className="p-3 border border-[#252525] bg-[#050505]">
                      <div className="text-[#666666] uppercase mb-1">MULTIPLAYER</div>
                      <code className="text-white break-all">
                        {game.multiplayerSyntax}
                      </code>
                    </div>
                    <div className="p-3 border border-[#252525] bg-[#050505]">
                      <div className="text-[#666666] uppercase mb-1">
                        MOVE / PREFIX
                      </div>
                      <code className="text-white break-all">
                        {game.moveSyntax} ({game.prefixCommand})
                      </code>
                    </div>
                  </div>
                  <ul className="space-y-1 font-mono text-xs text-[#888888]">
                    {game.rules.map((rule) => (
                      <li key={rule}>• {rule}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {modalGame && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="game-modal-title"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalGame(null)}
        >
          <div
            className="w-full max-w-xl border border-white bg-[#050505] p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-dotted border-[#252525] pb-4">
              <div>
                <div className="font-mono text-xs text-[#666666] uppercase">
                  GAME {modalGame.number} {"//"} {modalGame.command}
                </div>
                <h3
                  id="game-modal-title"
                  className="font-display text-xl text-white uppercase mt-1"
                >
                  {modalGame.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalGame(null)}
                aria-label="Close game details"
                className="p-1.5 border border-[#252525] hover:border-white text-white cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <p className="text-sm text-[#888888] leading-relaxed">
              {modalGame.fullDescription}
            </p>

            <div className="space-y-2 font-mono text-xs">
              <div className="p-3 border border-[#252525] bg-[#101010]">
                <span className="text-[#666666]">SOLO: </span>
                <span className="text-white">{modalGame.soloSyntax}</span>
              </div>
              <div className="p-3 border border-[#252525] bg-[#101010]">
                <span className="text-[#666666]">1V1 CHALLENGE: </span>
                <span className="text-white">{modalGame.multiplayerSyntax}</span>
              </div>
              <div className="p-3 border border-[#252525] bg-[#101010]">
                <span className="text-[#666666]">MOVE: </span>
                <span className="text-white">{modalGame.moveSyntax}</span>
              </div>
            </div>

            <ul className="space-y-1.5 font-mono text-xs text-[#888888] border-t border-dotted border-[#252525] pt-4">
              {modalGame.rules.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
