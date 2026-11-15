export const SITE_CONFIG = {
  name: "MIDWAVE",
  title: "MIDWAVE — Games, Creative Tools & AI for Discord",
  description:
    "Midwave is a multifunctional Discord entertainment bot featuring seven interactive mini-games, three creative image generators, media downloader & lyrics finder, safe math, social GIFs, and contextual Google Gemini AI with web search.",
  discordInviteUrl:
    process.env.NEXT_PUBLIC_DISCORD_INVITE_URL?.trim() ||
    "https://discord.com/oauth2/authorize?client_id=1570491526675431424&permissions=117760&integration_type=0&scope=bot+applications.commands",
  discordSupportUrl: process.env.NEXT_PUBLIC_DISCORD_SUPPORT_URL?.trim() || "",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL?.trim() ||
    "https://github.com/kyymidnight404/midwave-bot",
  ownerName: "kyymidnight",
  ownerDiscordUrl: "https://discord.com/users/1271411215997997175",
  ownerGithubUrl: "https://github.com/kyymidnight404",
} as const;

export const NAV_SECTIONS = [
  { id: "hero", label: "HOME" },
  { id: "creative-tools", label: "CREATIVE" },
  { id: "games", label: "GAMES" },
  { id: "multiplayer", label: "MULTIPLAYER" },
  { id: "ai", label: "AI" },
  { id: "why-how", label: "ABOUT" },
  { id: "commands", label: "COMMANDS" },
  { id: "getting-started", label: "START" },
  { id: "faq", label: "FAQ" },
] as const;

export const OAUTH_SCOPES = ["bot", "applications.commands"] as const;

export const REQUIRED_PERMISSIONS = [
  { name: "View Channels", note: "Required to read command triggers" },
  { name: "Send Messages", note: "Required to post game boards and AI replies" },
  { name: "Embed Links", note: "Required for structured Discord embeds" },
  { name: "Attach Files", note: "Required for /brat, !igf PNGs, and assets" },
  { name: "Read Message History", note: "Required to reference active channel context" },
  {
    name: "Manage Messages",
    note: "Optional — deletes secret prefix choices like !rps choose",
  },
] as const;
