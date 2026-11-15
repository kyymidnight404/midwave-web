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
    id: "guess",
    name: "Number Guessing",
    category: "Games",
    slashCommand: "/game solo game:guess",
    prefixCommand: "!guess",
    description:
      "Start a solo or 1v1 number guessing match with Easy (1–50), Normal (1–100), or Hard (1–200) ranges, then submit guesses.",
    slashExample:
      "/game solo game:guess difficulty:normal  •  /game answer answer:42",
    prefixExample: "!guess normal  •  !guess @user hard  •  !guess 42",
    notes: "Prefix alias: !ng",
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    category: "Games",
    slashCommand: "/game solo game:rps",
    prefixCommand: "!rps",
    description:
      "Play Rock Paper Scissors solo against Midwave or challenge an opponent with secret choices.",
    slashExample:
      "/game challenge game:rps opponent:@user  •  /game choose choice:rock",
    prefixExample: "!rps rock  •  !rps challenge @user  •  !rps choose paper",
    notes: "Supports English & Indonesian (batu/kertas/gunting) in prefix mode",
  },
  {
    id: "trivia",
    name: "Trivia Quiz",
    category: "Games",
    slashCommand: "/game solo game:trivia",
    prefixCommand: "!trivia",
    description:
      "Launch a 5-round trivia match (20s/round) from 90 curated questions across 6 categories and 3 difficulties.",
    slashExample:
      "/game solo game:trivia category:science difficulty:normal  •  /game answer answer:B",
    prefixExample: "!trivia science normal  •  !trivia @user  •  !trivia B",
  },
  {
    id: "coinflip",
    name: "Coin Flip",
    category: "Games",
    slashCommand: "/game solo game:coinflip",
    prefixCommand: "!coinflip",
    description:
      "Predict Heads or Tails in solo mode or lock in secret 1v1 multiplayer predictions.",
    slashExample:
      "/game challenge game:coinflip opponent:@user  •  /game choose choice:heads",
    prefixExample: "!cf heads  •  !cf challenge @user  •  !cf choose tails",
    notes: "Prefix alias: !cf",
  },
  {
    id: "dice",
    name: "Dice Rolling",
    category: "Games",
    slashCommand: "/game solo game:dice",
    prefixCommand: "!dice",
    description:
      "Roll 1–10 dice with 2–100 sides per die (default 1d6) solo or in a 1v1 roll-off.",
    slashExample:
      "/game solo game:dice count:2 sides:6  •  /game challenge game:dice opponent:@user",
    prefixExample: "!dice 2d6  •  !dice @user 2d6",
  },
  {
    id: "tictactoe",
    name: "Tic Tac Toe",
    category: "Games",
    slashCommand: "/game solo game:tictactoe",
    prefixCommand: "!tictactoe",
    description:
      "Play a 3×3 grid match against Easy/Normal/Hard Minimax AI or a Discord friend.",
    slashExample:
      "/game solo game:tictactoe difficulty:hard  •  /game move position:B2",
    prefixExample: "!ttt hard  •  !ttt challenge @user  •  !ttt B2",
    notes: "Prefix alias: !ttt",
  },
  {
    id: "connect4",
    name: "Connect Four",
    category: "Games",
    slashCommand: "/game solo game:connect4",
    prefixCommand: "!connect4",
    description:
      "Drop discs into a 7×6 board against time-budgeted Alpha-Beta AI or challenge another player.",
    slashExample:
      "/game solo game:connect4 difficulty:normal  •  /game drop column:4",
    prefixExample: "!c4 normal  •  !c4 challenge @user  •  !c4 4",
    notes: "Prefix alias: !c4",
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
    slashExample: "/media brat text:midwave in discord",
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
      "Generate a WhatsApp-style Quoted Chat screenshot PNG (1080px wide) from text, a replied message, or the Discord Context Menu.",
    slashExample: "/media qc text:hello from midwave",
    prefixExample: "!qc hello from midwave  •  (reply to any message with !qc)",
    notes: "Max 2,000 chars • Also available via Right-Click → Apps → Generate QC",
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
    slashExample: "/media download url:https://www.tiktok.com/...",
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
    slashExample: "/media lyrics query:Love artist:wave to earth",
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
      "Send expressive anime GIF interactions powered by OtakuGIFs: hug, pat, slap, bonk, poke, yeet, highfive, wave, laugh, and cry.",
    slashExample: "/social action:hug user:@friend  •  /social action:laugh",
    prefixExample: "!hug @friend  •  !pat @friend  •  !laugh  •  !cry",
    notes: "10 actions (!hug, !pat, !slap, !bonk, !poke, !yeet, !highfive, !wave, !laugh, !cry) • 3s cooldown",
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
    id: "help",
    name: "Help",
    category: "Utility",
    slashCommand: "/help",
    prefixCommand: "!help",
    description:
      "Display bot usage instructions, available commands, and multiplayer match rules.",
    slashExample: "/help",
    prefixExample: "!help",
  },
  {
    id: "games",
    name: "Games Directory",
    category: "Utility",
    slashCommand: "/game list",
    prefixCommand: "!games",
    description:
      "List all seven interactive mini-games along with their Solo and Multiplayer commands.",
    slashExample: "/game list",
    prefixExample: "!games",
  },
  {
    id: "game-status",
    name: "Game Status",
    category: "Utility",
    slashCommand: "/game status",
    prefixCommand: "!game status",
    description:
      "Inspect your currently active match or outgoing pending multiplayer invite.",
    slashExample: "/game status",
    prefixExample: "!game status",
  },
  {
    id: "game-cancel",
    name: "Game Cancel",
    category: "Utility",
    slashCommand: "/game cancel",
    prefixCommand: "!game cancel",
    description:
      "Cancel your active game session or withdraw an outgoing multiplayer challenge.",
    slashExample: "/game cancel",
    prefixExample: "!game cancel",
  },
  {
    id: "invite-accept",
    name: "Accept Invite",
    category: "Utility",
    slashCommand: "/invite accept",
    prefixCommand: "!invite accept",
    description:
      "Accept the latest pending 1v1 multiplayer challenge sent to you.",
    slashExample: "/invite accept",
    prefixExample: "!invite accept",
    notes: "Prefix aliases: !invite acc, !invite yes • Invites expire after 60s",
  },
  {
    id: "invite-decline",
    name: "Decline Invite",
    category: "Utility",
    slashCommand: "/invite decline",
    prefixCommand: "!invite decline",
    description:
      "Decline an incoming multiplayer challenge cleanly.",
    slashExample: "/invite decline",
    prefixExample: "!invite decline",
    notes: "Prefix aliases: !invite dec, !invite no",
  },
  {
    id: "knowledge",
    name: "Bot Knowledge Manager",
    category: "Utility",
    slashCommand: "/knowledge",
    prefixCommand: null,
    description:
      "Search, list, add, update, or remove entries in Midwave's Global Bot Knowledge base.",
    slashExample: "/knowledge categories  •  /knowledge search query:games",
    prefixExample: null,
    notes: "Slash-only • Strictly gated to authorized bot owners / administrators",
  },
];
