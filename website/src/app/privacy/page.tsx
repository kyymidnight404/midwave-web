import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy explaining Midwave's Game Center records, temporary AI context, and third-party service processing.",
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
              01. WEBSITE ACCOUNTS & BOT DATA
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              The public website does not require user accounts or authentication.
              The Discord bot does not archive general Discord messages, but it
              does persist Game Center session and participant records in its
              SQLite database. These records are described below.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              02. ACTIVE SESSIONS &amp; SERVER CONFIG
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Game Center stores session IDs, guild/channel/message IDs, game
              type and status, host/turn/winner IDs, serialized game state, and
              timestamps in SQLite. Participant rows can include Discord user
              IDs, usernames, roles, scores, outcomes, and join timestamps.
              Session timers can mark a session expired or finished; expiration
              does not itself delete the database rows. No automatic database
              purge period is currently configured in the session service.
              /autorole stores the server (guild) ID and configured role IDs.
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
              Midwave AI keeps short-term conversation context in RAM (up to
              10 messages with a 15-minute idle TTL); this context is not stored
              by the AI context store in the bot's SQLite database. Prompts and
              relevant context are sent to Google Gemini to generate responses.
              When web search is used, a normalized search query is sent to
              Tavily; conversation history and Discord user IDs are not sent to
              Tavily. Do not include passwords, tokens, or sensitive personal
              data in prompts.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              05. MEDIA, LYRICS &amp; OTHER THIRD-PARTY SERVICES
            </h2>
            <p className="text-sm text-[#888888] leading-relaxed">
              Public Instagram and TikTok links submitted to the downloader are
              processed through RapidAPI to retrieve media. Lyrics searches may
              send the requested song title and artist to LRCLIB and, where
              applicable, iTunes or the optional Genius API for lyrics or
              metadata. Weather lookups send the selected Indonesian location
              code to BMKG. These providers process requests under their own
              policies. Do not submit private URLs or sensitive information.
            </p>
          </section>

          <section className="space-y-3 border-t border-dotted border-[#252525] pt-8">
            <h2 className="font-display text-lg text-white uppercase">
              06. CONTACT &amp; DATA QUESTIONS
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
