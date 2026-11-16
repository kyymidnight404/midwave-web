import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy explaining Midwave's zero-point gameplay, RAM-only AI memory, and minimal local session storage.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#050505]">
        <article className="max-w-[900px] mx-auto px-6 py-20 space-y-12">
          <header className="space-y-4 border-b border-dotted border-[#252525] pb-8">
            <Link
              href="/"
              className="font-mono text-xs text-[#888888] hover:text-white uppercase tracking-wider inline-block"
            >
              ← BACK TO HOME
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl text-white uppercase">
              PRIVACY POLICY.
            </h1>
            <p className="font-mono text-xs text-[#666666] uppercase">
              LAST UPDATED: NOVEMBER 2026 • MIDWAVE DISCORD BOT
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase">
              01. ZERO PLAYER PROFILES, POINTS, OR CHAT ARCHIVES
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Midwave does not store persistent player profiles, score points,
              leaderboards, or Discord message archives. This public website
              also operates without user authentication, accounts, or tracking
              databases.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              02. ACTIVE SESSIONS &amp; SERVER CONFIG
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              During interactive button games (Tic Tac Toe, Rock Paper Scissors,
              Quiz Battle, and Coin Flip), Midwave temporarily holds active
              session state with automatic TTL expiration. Server Auto Role
              entries store only the guild ID and configured role IDs via
              /autorole.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              03. CREATIVE IMAGE GENERATION &amp; BMKG WEATHER
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Text submitted to /media brat, /media qc, !qc, or avatar/image data
              for !igf are rendered into PNG buffers in memory and returned
              immediately without saving user uploads to disk. Location queries
              for /weather or !weather are resolved to Indonesian ADM4 codes and
              fetched directly from BMKG without storing personal location
              history.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              04. GOOGLE GEMINI AI PROCESSING (/AI &amp; !AI)
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Midwave AI keeps only short-term RAM conversation context (up to
              10 messages with a 15-minute idle TTL) and never writes chat logs
              to a database. Prompts are sent to the Google Gemini API (and
              selectively to Tavily Web Search when real-time lookup is needed).
              Do not include passwords, tokens, or sensitive personal data in
              prompts.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              05. CONTACT &amp; DATA QUESTIONS
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              For privacy questions or inquiries about how Midwave processes
              commands, contact the maintainer{" "}
              <span className="text-white">{SITE_CONFIG.ownerName}</span> via{" "}
              <a
                href={SITE_CONFIG.ownerDiscordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:opacity-80"
              >
                Discord ({SITE_CONFIG.ownerName})
              </a>{" "}
              or{" "}
              <a
                href={SITE_CONFIG.ownerGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:opacity-80"
              >
                GitHub (kyymidnight404)
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
