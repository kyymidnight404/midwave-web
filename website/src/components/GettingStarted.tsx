import Link from "next/link";
import { OAUTH_SCOPES, REQUIRED_PERMISSIONS } from "@/lib/constants";

const STEPS = [
  {
    num: "01",
    title: "INVITE",
    desc: "Add Midwave to your Discord server via the Discord OAuth2 authorization link.",
  },
  {
    num: "02",
    title: "AUTHORIZE",
    desc: "Grant the required bot and applications.commands scopes along with channel permissions.",
  },
  {
    num: "03",
    title: "EXPLORE",
    desc: "Run /help or /games in any permitted channel to start playing, generating, or asking.",
  },
] as const;

export function GettingStarted() {
  return (
    <section
      id="getting-started"
      className="max-w-[1200px] mx-auto px-6 py-20 dotted-divider"
    >
      <div className="space-y-3 mb-12">
        <span className="font-mono text-xs text-[#666666] uppercase tracking-widest block">
          [ 07 // ONBOARDING ]
        </span>
        <h2 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
          READY TO EXPERIENCE MIDWAVE?
        </h2>
      </div>

      {/* 3 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-[#252525] divide-y md:divide-y-0 md:divide-x divide-dotted divide-[#252525] mb-10">
        {STEPS.map((step) => (
          <div key={step.num} className="p-6 bg-[#050505] space-y-3">
            <div className="font-mono text-xs text-white uppercase tracking-widest">
              {step.num} — {step.title}
            </div>
            <p className="text-sm text-[#888888] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* OAuth & Permissions Spec */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border border-[#252525] bg-[#101010] p-6 mb-10">
        <div className="lg:col-span-4 space-y-3">
          <div className="font-mono text-xs text-white uppercase tracking-wider">
            DISCORD OAUTH2 SCOPES
          </div>
          <div className="flex flex-wrap gap-2">
            {OAUTH_SCOPES.map((scope) => (
              <code
                key={scope}
                className="px-2.5 py-1 bg-[#050505] border border-[#252525] font-mono text-xs text-white"
              >
                {scope}
              </code>
            ))}
          </div>
          <p className="text-xs text-[#888888] leading-relaxed">
            Both scopes are required so Midwave can register slash commands and
            respond in channels.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-3 lg:border-l lg:border-dotted lg:border-[#252525] lg:pl-6">
          <div className="font-mono text-xs text-white uppercase tracking-wider">
            REQUIRED BOT PERMISSIONS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
            {REQUIRED_PERMISSIONS.map((perm) => (
              <div
                key={perm.name}
                className="p-2.5 border border-[#252525] bg-[#050505]"
              >
                <div className="text-white">{perm.name}</div>
                <div className="text-[11px] text-[#666666] mt-0.5">
                  {perm.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="#commands"
          className="inline-flex items-center justify-center px-5 py-3 border border-[#252525] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1a1a1a] hover:border-white transition-colors"
        >
          EXPLORE COMMANDS
        </Link>
      </div>
    </section>
  );
}
