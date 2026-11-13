"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_SECTIONS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = NAV_SECTIONS.map((s) => s.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.4] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/95 backdrop-blur-sm border-b border-dotted border-[#252525]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#hero"
          className="font-display text-lg tracking-wider text-white hover:opacity-80 transition-opacity"
        >
          MIDWAVE
        </Link>

        <div className="flex items-center gap-4">
          {SITE_CONFIG.discordInviteUrl ? (
            <a
              href={SITE_CONFIG.discordInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 bg-white text-[#050505] font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-[#d4d4d4] transition-colors"
            >
              ADD TO DISCORD
            </a>
          ) : (
            <Link
              href="#getting-started"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 bg-white text-[#050505] font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-[#d4d4d4] transition-colors"
            >
              ADD TO DISCORD
            </Link>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="midwave-nav-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#252525] hover:border-white hover:bg-[#1a1a1a] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>MENU</span>
            {menuOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="midwave-nav-drawer"
          aria-label="Primary navigation"
          className="border-t border-dotted border-[#252525] bg-[#050505]"
        >
          <div className="max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {NAV_SECTIONS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between px-3 py-2.5 border font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "border-white bg-[#101010] text-white"
                      : "border-[#252525] text-[#888888] hover:text-white hover:bg-[#1a1a1a]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[#666666]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
            {SITE_CONFIG.discordInviteUrl ? (
              <a
                href={SITE_CONFIG.discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="sm:hidden col-span-2 flex items-center justify-center px-4 py-3 bg-white text-[#050505] font-mono text-xs font-semibold uppercase tracking-wider"
              >
                ADD TO DISCORD
              </a>
            ) : (
              <Link
                href="#getting-started"
                onClick={handleNavClick}
                className="sm:hidden col-span-2 flex items-center justify-center px-4 py-3 bg-white text-[#050505] font-mono text-xs font-semibold uppercase tracking-wider"
              >
                ADD TO DISCORD
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
