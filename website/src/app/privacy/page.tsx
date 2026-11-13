import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy explaining Midwave's zero-database architecture, in-memory sessions, and stateless Gemini AI requests.",
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
              01. ZERO PERSISTENT USER PROFILE STORAGE
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Midwave does not use a database and does not store persistent user
              profiles, message archives, or cross-session analytics. This
              public website also operates without user authentication,
              accounts, or tracking databases.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              02. TEMPORARY IN-MEMORY GAME SESSIONS
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              When you start a game or send a multiplayer challenge, Midwave
              temporarily holds your Discord user ID, channel ID, and current
              match state inside in-memory JavaScript Map structures. Pending
              invitations expire after 60 seconds, idle sessions expire after
              120 seconds, and all in-memory state is cleared on bot restart.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              03. CREATIVE IMAGE GENERATION (/BRAT & !IGF)
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Text submitted to /brat or !brat and Discord avatar/display name
              data used by !igf are rendered into PNG buffers directly in memory
              and returned immediately to Discord. Midwave does not save
              generated images to disk or external cloud buckets.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              04. GOOGLE GEMINI AI PROCESSING (/AI & !AI)
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Prompts sent to /ai or !ai are transmitted independently to the
              Google Gemini API to generate a response. Midwave is strictly
              stateless and does not retain conversation history across prompts.
              Do not include passwords, tokens, or sensitive personal data in
              AI prompts, as requests are processed by Google&apos;s Gemini API
              under their applicable terms and policies.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              05. CONTACT & DATA QUESTIONS
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
