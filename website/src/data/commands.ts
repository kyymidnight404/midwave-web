export type CommandCategory =
  | "Games"
  | "Creative"
  | "Media"
  | "Social"
  | "AI"
  | "Utility";

export interface CommandEntry {
  id: string;
  name: string;
  category: CommandCategory;
  slashCommand: string | null;
  prefixCommand: string | null;
  description: string;
  slashExample: string | null;
  prefixExample: string | null;
  notes?: string;
}

export const COMMANDS: CommandEntry[] = [
  // GAMES
  {
    id: "coinflip",
    name: "Coin Flip",
    category: "Games",
    slashCommand: null,
    prefixCommand: "!coinflip",
    description:
      "Flip a coin solo using Heads/Tails buttons or challenge a friend with Accept/Reject and secret choice buttons.",
    slashExample: null,
    prefixExample: "!coinflip  •  !cf heads  •  !cf @user",
    notes: "Prefix alias: !cf • Zero points recorded",
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    category: "Games",
    slashCommand: null,
    prefixCommand: "!rps",
    description:
      "Play instant solo Rock Paper Scissors or a Best-of-3 1v1 match using interactive secret choice buttons.",
    slashExample: null,
    prefixExample: "!rps rock  •  !rps batu  •  !rps @user",
    notes: "Supports English & Indonesian choices • Best of 3 in 1v1 • Zero points",
  },
  {
    id: "tictactoe",
    name: "Tic Tac Toe",
    category: "Games",
    slashCommand: null,
    prefixCommand: "!tictactoe",
    description:
      "Play an interactive 3×3 button grid match exclusively against another server friend (bot challenges blocked).",
    slashExample: null,
    prefixExample: "!ttt @user  •  !tictactoe @user",
    notes: "Prefix alias: !ttt • Friends only (no bot/AI) • Zero points",
  },
  {
    id: "quiz",
    name: "Quiz Battle (Bahasa Indonesia)",
    category: "Games",
    slashCommand: null,
    prefixCommand: "!quiz",
    description:
      "Start a 10-round Indonesian quiz immediately (20s/round) across 90 questions; answer by typing a, b, c, or d directly in chat.",
    slashExample: null,
    prefixExample: "!quiz  •  !quiz science easy  •  (answer directly: a / b / c / d)",
    notes: "No prefix needed to answer • Drop-in multiplayer • Zero bonus points",
  },

  // CREATIVE
  {
    id: "brat",
    name: "Brat Generator",
    category: "Creative",
    slashCommand: "/media brat",
    prefixCommand: "!brat",
    description:
      "Render a 1024×1024 white-background PNG with lowercase black typography, inline emojis, auto-wrapping, and subtle lo-fi blur.",
    slashExample: "/media action:brat text:midwave in discord",
    prefixExample: "!brat midwave in discord",
    notes: "Max 1,000 characters • Inline emoji support",
  },
  {
    id: "qc",
    name: "Quoted Chat (QC)",
    category: "Creative",
    slashCommand: "/media qc",
    prefixCommand: "!qc",
    description:
      "Generate a WhatsApp-style Quoted Chat screenshot PNG (1080px wide) from text input or by replying to any Discord message.",
    slashExample: "/media action:qc text:hello from midwave",
    prefixExample: "!qc hello from midwave  •  (reply to any message with !qc)",
    notes: "Max 2,000 chars • Local iOS-style emoji reactions & Asia/Jakarta time",
  },
  {
    id: "igf",
    name: "Instagram Post Frame",
    category: "Creative",
    slashCommand: null,
    prefixCommand: "!igf",
    description:
      "Generate a 1080×1080 transparent-background Instagram-style post card PNG using your Discord avatar, display name, and 1 attached or replied image.",
    slashExample: null,
    prefixExample: "!igf  •  !igf late night coding",
    notes: "Prefix-only command (!igf) • Supports PNG, JPG, WebP, GIF (max 10 MB)",
  },
  {
    id: "say",
    name: "Safe Echo",
    category: "Creative",
    slashCommand: null,
    prefixCommand: "!say",
    description:
      "Repeat validated user text verbatim as a plain message with all @mentions disabled.",
    slashExample: null,
    prefixExample: "!say welcome to the server!",
    notes: "Prefix-only command (!say) • Max 2,000 chars • 3s cooldown",
  },

  // MEDIA
  {
    id: "download",
    name: "Media Downloader",
    category: "Media",
    slashCommand: "/media download",
    prefixCommand: "!download",
    description:
      "Download public Instagram (/p/, /reel/, /tv/) and TikTok photos or videos with carousel support and automatic chat link detection.",
    slashExample: "/media action:download url:https://www.tiktok.com/...",
    prefixExample: "!dl https://www.instagram.com/reel/...",
    notes: "Prefix alias: !dl • 10s cooldown • Auto-downloader active in chat",
  },
  {
    id: "lyrics",
    name: "Lyrics Finder",
    category: "Media",
    slashCommand: "/media lyrics",
    prefixCommand: "!lyrics",
    description:
      "Search song lyrics with cover art and metadata via LRCLIB, iTunes, and Genius with interactive Previous/Next pagination.",
    slashExample: "/media action:lyrics query:Love artist:wave to earth",
    prefixExample: "!lyrics Love | wave to earth",
    notes: "Prefix aliases: !lyric, !lirik • 5s cooldown",
  },

  // SOCIAL
  {
    id: "social",
    name: "Social GIF Interactions",
    category: "Social",
    slashCommand: "/social",
    prefixCommand: "!hug",
    description:
      "Send expressive anime GIF interactions powered by OtakuGIFs & nekos.best: hug, pat, slap, bonk, kick, poke, yeet, highfive, wave, laugh, and cry.",
    slashExample: "/social action:hug user:@friend  •  /social action:laugh",
    prefixExample: "!hug @friend  •  !kick @friend  •  !laugh  •  !cry",
    notes: "11 actions (!hug, !pat, !slap, !bonk, !kick, !poke, !yeet, !highfive, !wave, !laugh, !cry) • 3s cooldown",
  },

  // AI
  {
    id: "ai",
    name: "Midwave AI",
    category: "AI",
    slashCommand: "/ai",
    prefixCommand: "!ai",
    description:
      "Ask Midwave AI (Google Gemini 2.5 Flash) with short-term RAM conversation memory, Global Bot Knowledge, and selective Tavily Web Search.",
    slashExample: "/ai question:Explain async/await in TypeScript",
    prefixExample: "!ai Apa kabar berita teknologi terbaru hari ini?",
    notes: "15m RAM memory TTL (max 10 msgs) • 8s cooldown • 1,500 chars max • Reply context in !ai",
  },

  // UTILITY
  {
    id: "weather",
    name: "BMKG Indonesia Weather",
    category: "Utility",
    slashCommand: "/weather",
    prefixCommand: "!weather",
    description:
      "Check live official BMKG weather forecasts for Indonesian cities, districts, villages, or ADM4 codes with 3-hour outlook.",
    slashExample: "/weather location:Kemayoran, Jakarta",
    prefixExample: "!weather Jakarta  •  !cuaca Bandung  •  !weather 31.71.03.1001",
    notes: "Prefix alias: !cuaca • Data resmi BMKG Indonesia • 5s cooldown",
  },
  {
    id: "math",
    name: "Safe Math Evaluator",
    category: "Utility",
    slashCommand: "/math",
    prefixCommand: "!math",
    description:
      "Evaluate arithmetic, trigonometry (sin/cos/tan & degree variants sind/cosd/tand), sqrt, constants (pi, e), and factorials safely.",
    slashExample: "/math expression:sqrt(144) + sind(30) * 10",
    prefixExample: "!math (12 + 8) * 3 / 4",
    notes: "Max 250 characters • Custom sandboxed parser (no eval)",
  },
  {
    id: "autorole",
    name: "Auto Role",
    category: "Utility",
    slashCommand: "/autorole",
    prefixCommand: null,
    description:
      "Configure automatic roles assigned by Midwave when new members join your Discord server (Administrator only).",
    slashExample: "/autorole action:add role:@Member  •  /autorole action:list",
    prefixExample: null,
    notes: "Slash-only • Requires Administrator (member) & Manage Roles (bot)",
  },
  {
    id: "help",
    name: "Command Guide",
    category: "Utility",
    slashCommand: "/help",
    prefixCommand: "!menu",
    description:
      "Display the interactive Midwave Command Guide with categorized slash and prefix commands.",
    slashExample: "/help",
    prefixExample: "!menu",
    notes: "Prefix command changed from !help to !menu",
  },
  {
    id: "feedback",
    name: "Feedback & Bug Reports",
    category: "Utility",
    slashCommand: null,
    prefixCommand: "!feedback",
    description:
      "Submit bug reports, feature suggestions, or issues via an interactive Discord modal directly to the Midwave staff channel.",
    slashExample: null,
    prefixExample: "!feedback",
    notes: "Prefix-only • Supports category selection & optional screenshot attachment",
  },
  {
    id: "donate",
    name: "Support Midwave",
    category: "Utility",
    slashCommand: "/donate",
    prefixCommand: "!donate",
    description:
      "Support Midwave development cleanly via Saweria or Ko-fi link buttons.",
    slashExample: "/donate",
    prefixExample: "!donate",
  },
  {
    id: "knowledge",
    name: "Bot Knowledge Manager",
    category: "Utility",
    slashCommand: null,
    prefixCommand: "!knowledge",
    description:
      "Search, list, add, update, or remove entries in Midwave's Global Bot Knowledge base.",
    slashExample: null,
    prefixExample: "!knowledge categories  •  !knowledge search games",
    notes: "Prefix-only • Restricted to authorized bot owners / administrators",
  },
];
