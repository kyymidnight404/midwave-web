"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider">
      <div className="space-y-3 mb-12">
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
          [ 08 // DOCUMENTATION ]
        </span>
        <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
          FREQUENTLY ASKED QUESTIONS.
        </h2>
      </div>

      <div className="border border-[#252525] divide-y divide-dotted divide-[#252525] bg-[#050505]">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left hover:bg-[#101010] transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#666666]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-white">
                    {item.question}
                  </span>
                </div>
                {isOpen ? (
                  <Minus
                    className="w-4 h-4 text-white shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <Plus
                    className="w-4 h-4 text-[#888888] shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>

              {isOpen && (
                <div
                  id={`faq-panel-${item.id}`}
                  className="px-5 sm:px-6 pb-6 pt-1 pl-12 sm:pl-14 text-sm text-[#888888] leading-relaxed bg-[#101010] border-t border-dotted border-[#252525]"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
