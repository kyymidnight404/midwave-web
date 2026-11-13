export type CommandCategory = "Games" | "Creative" | "AI" | "Utility";

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
    slashCommand: "/guess",
    prefixCommand: "!guess",
    description:
      "Start a solo or 1v1 number guessing match with Easy, Normal, or Hard ranges, then submit guesses.",
    slashExample: "/guess solo difficulty:normal  •  /guess play number:42",
    prefixExample: "!guess normal  •  !guess @user hard  •  !guess 42",
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    category: "Games",
    slashCommand: "/rps",
    prefixCommand: "!rps",
    description:
      "Play Rock Paper Scissors solo against Midwave or challenge an opponent with secret choices.",
    slashExample: "/rps solo choice:rock  •  /rps challenge opponent:@user",
    prefixExample: "!rps rock  •  !rps challenge @user  •  !rps choose paper",
  },
  {
    id: "trivia",
    name: "Trivia Quiz",
    category: "Games",
    slashCommand: "/trivia",
    prefixCommand: "!trivia",
    description:
      "Launch a 5-round trivia match from 90 curated questions across 6 categories and 3 difficulties.",
    slashExample: "/trivia solo category:science difficulty:normal  •  /trivia answer option:B",
    prefixExample: "!trivia science normal  •  !trivia @user  •  !trivia B",
  },
  {
    id: "coinflip",
    name: "Coin Flip",
    category: "Games",
    slashCommand: "/coinflip",
    prefixCommand: "!coinflip",
    description:
      "Predict Heads or Tails in solo mode or lock in secret 1v1 multiplayer predictions.",
    slashExample: "/coinflip solo choice:heads  •  /coinflip challenge opponent:@user",
    prefixExample: "!coinflip heads  •  !coinflip challenge @user  •  !coinflip choose tails",
  },
  {
    id: "dice",
    name: "Dice Rolling",
    category: "Games",
    slashCommand: "/dice",
    prefixCommand: "!dice",
    description:
      "Roll 1–10 dice with 2–100 sides per die (default 1d6) solo or in a 1v1 roll-off.",
    slashExample: "/dice solo count:2 sides:6  •  /dice challenge opponent:@user",
    prefixExample: "!dice 2d6  •  !dice @user 2d6",
  },
  {
    id: "tictactoe",
    name: "Tic Tac Toe",
    category: "Games",
    slashCommand: "/tictactoe",
    prefixCommand: "!tictactoe",
    description:
      "Play a 3×3 grid match against Easy/Normal/Hard Minimax AI or a Discord friend.",
    slashExample: "/tictactoe solo difficulty:hard  •  /tictactoe move position:B2",
    prefixExample: "!ttt hard  •  !ttt challenge @user  •  !ttt B2",
    notes: "Prefix alias: !ttt",
  },
  {
    id: "connect4",
    name: "Connect Four",
    category: "Games",
    slashCommand: "/connect4",
    prefixCommand: "!connect4",
    description:
      "Drop discs into a 7×6 board against Alpha-Beta AI or challenge another player.",
    slashExample: "/connect4 solo difficulty:normal  •  /connect4 drop column:4",
    prefixExample: "!c4 normal  •  !c4 challenge @user  •  !c4 4",
    notes: "Prefix alias: !c4",
  },

  // CREATIVE
  {
    id: "brat",
    name: "Brat Generator",
    category: "Creative",
    slashCommand: "/brat",
    prefixCommand: "!brat",
    description:
      "Render a 1024×1024 white-background PNG with lowercase black typography, auto-wrapping, and subtle lo-fi blur.",
    slashExample: "/brat text:midwave in discord",
    prefixExample: "!brat midwave in discord",
    notes: "Max 100 characters • Per-user cooldown applies",
  },
  {
    id: "igf",
    name: "Instagram Post Frame",
    category: "Creative",
    slashCommand: null,
    prefixCommand: "!igf",
    description:
      "Generate a 1080×1080 transparent-background Instagram-style post frame PNG using your Discord avatar and display name.",
    slashExample: null,
    prefixExample: "!igf  •  !igf late night coding",
    notes: "Prefix-only command (!igf)",
  },

  // AI
  {
    id: "ai",
    name: "Midwave AI",
    category: "AI",
    slashCommand: "/ai",
    prefixCommand: "!ai",
    description:
      "Ask a single independent question powered by Google Gemini (programming, tech, education, or general Q&A).",
    slashExample: "/ai question:Explain async/await in TypeScript",
    prefixExample: "!ai Apa itu REST API?",
    notes: "Stateless (no chat history) • 8s cooldown • Max 1,500 chars • Supports Indonesian & other languages",
  },

  // UTILITY
  {
    id: "help",
    name: "Help",
    category: "Utility",
    slashCommand: "/help",
    prefixCommand: "!help",
    description:
      "Display bot usage instructions, available utility commands, and multiplayer match rules.",
    slashExample: "/help",
    prefixExample: "!help",
  },
  {
    id: "games",
    name: "Games Directory",
    category: "Utility",
    slashCommand: "/games",
    prefixCommand: "!games",
    description:
      "List all seven interactive mini-games along with their Solo and Multiplayer commands.",
    slashExample: "/games",
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
    notes: "Invites expire automatically after 60 seconds",
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
  },
];
