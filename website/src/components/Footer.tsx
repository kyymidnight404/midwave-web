import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-dotted border-[#252525] bg-[#050505] mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-dotted border-[#252525]">
          <div className="space-y-3">
            <div className="font-display text-lg text-white">MIDWAVE</div>
            <p className="text-xs text-[#888888] leading-relaxed max-w-xs">
              Multifunctional Discord entertainment bot: four mini-games, three
              image generators, BMKG weather, media &amp; social utilities, and
              contextual Google Gemini AI with web search.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
              NAVIGATION
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#888888]">
              <li>
                <Link href="/#hero" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/#creative-tools"
                  className="hover:text-white transition-colors"
                >
                  FEATURES
                </Link>
              </li>
              <li>
                <Link
                  href="/#commands"
                  className="hover:text-white transition-colors"
                >
                  COMMANDS
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-how"
                  className="hover:text-white transition-colors"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
              RESOURCES
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#888888]">
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.discordSupportUrl || SITE_CONFIG.ownerDiscordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  DISCORD SUPPORT
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
              LEGAL
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#888888]">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  TERMS OF SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#666666] uppercase tracking-wider">
          <span>© 2026 MIDWAVE. ALL RIGHTS RESERVED.</span>
          <span>MONOCHROME EDITORIAL // NEXT.JS APP ROUTER</span>
        </div>
      </div>
    </footer>
  );
}
