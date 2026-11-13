import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using the Midwave Discord bot and public documentation website.",
};

export default function TermsPage() {
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
              TERMS OF SERVICE.
            </h1>
            <p className="font-mono text-xs text-[#666666] uppercase">
              LAST UPDATED: NOVEMBER 2026 • MIDWAVE DISCORD BOT
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="font-display text-lg text-white uppercase">
              01. ACCEPTANCE & DISCORD PLATFORM
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              By inviting or interacting with the Midwave Discord bot, you agree
              to comply with these Terms of Service as well as Discord&apos;s own
              Terms of Service and Community Guidelines. Midwave operates
              exclusively inside Discord through Slash Commands (/) and Prefix
              Commands (!).
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              02. BOT FUNCTIONALITY & IN-MEMORY SESSIONS
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Midwave provides seven interactive mini-games, two image-generation
              utilities (/brat and !igf), and a stateless AI assistant (/ai and
              !ai). All active game sessions and pending multiplayer invitations
              are stored temporarily in server memory (RAM) and expire
              automatically or when the bot restarts. Midwave does not provide
              user accounts, virtual economies, or paid subscriptions.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              03. IMAGE GENERATION & AI USAGE
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              You are responsible for any text prompts you submit to /brat,
              !igf, /ai, or !ai. Do not use Midwave to generate abusive,
              unlawful, or harassing content. AI requests are forwarded
              independently to the Google Gemini API and are subject to per-user
              cooldowns (8 seconds), character limits (1,500 characters), and
              upstream API rate limits.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              04. SERVICE LIMITATIONS & THIRD-PARTY DEPENDENCIES
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Midwave is provided on an &ldquo;as-is&rdquo; and
              &ldquo;as-available&rdquo; basis without uptime guarantees.
              Availability depends on Discord&apos;s gateway and API, hosting
              infrastructure, and Google Gemini API availability. Features may
              be updated, rate-limited, or temporarily unavailable during
              maintenance.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              05. OPERATOR & SUPPORT CONTACT
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Midwave is maintained by{" "}
              <span className="text-white">{SITE_CONFIG.ownerName}</span>. For
              support, bug reports, or questions regarding these terms, contact
              via{" "}
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
