export interface GameEntry {
  number: string;
  id: string;
  title: string;
  command: string;
  prefixCommand: string;
  shortDescription: string;
  fullDescription: string;
  modes: ("Solo" | "1v1 Multiplayer" | "Drop-in Multiplayer")[];
  difficulties: string[];
  soloSyntax: string;
  multiplayerSyntax: string;
  moveSyntax: string;
  rules: string[];
}

export const GAMES: GameEntry[] = [
  {
    number: "01",
    id: "coinflip",
    title: "COIN FLIP",
    command: "!coinflip (!cf)",
    prefixCommand: "!coinflip (!cf)",
    shortDescription:
      "Flip a coin solo with interactive Heads/Tails buttons or challenge a friend 1v1 with Accept/Reject buttons.",
    fullDescription:
      "Run !coinflip to pick Heads or Tails using buttons immediately, or challenge a friend with !coinflip @user where they respond via Accept/Reject buttons and both lock in secret Heads/Tails choices with zero point tracking.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Standard"],
    soloSyntax: "!coinflip (button prompt)  •  !cf heads",
    multiplayerSyntax: "!coinflip @user  (Accept / Reject buttons)",
    moveSyntax: "Click Heads or Tails buttons (zero typing)",
    rules: [
      "Invitees respond directly using Accept or Reject buttons (60s TTL)",
      "Multiplayer choices stay secret until both players pick via buttons",
      "Matching predictions result in a Draw; zero points or scores recorded",
    ],
  },
  {
    number: "02",
    id: "rps",
    title: "ROCK PAPER SCISSORS",
    command: "!rps",
    prefixCommand: "!rps",
    shortDescription:
      "Instant solo showdown or Best-of-3 1v1 challenge with interactive buttons and hidden picks.",
    fullDescription:
      "Play an instant solo match against Midwave or challenge a server member to a Best-of-3 match using Terima/Tolak invite buttons and secret Rock/Paper/Scissors buttons.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Standard (Best of 3 in 1v1)"],
    soloSyntax: "!rps <rock|paper|scissors>  (supports batu/kertas/gunting)",
    multiplayerSyntax: "!rps @user  (Terima / Tolak buttons)",
    moveSyntax: "Click Rock / Paper / Scissors buttons in Best of 3",
    rules: [
      "1v1 matches play Best of 3 (first to 2 round wins)",
      "Selections stay hidden until both players lock in their move",
      "Played purely for fun with zero points or persistent stats",
    ],
  },
  {
    number: "03",
    id: "tictactoe",
    title: "TIC TAC TOE",
    command: "!ttt @user",
    prefixCommand: "!tictactoe (!ttt)",
    shortDescription:
      "Interactive 3×3 button grid exclusively for 1v1 friend matches (friends only, no bots).",
    fullDescription:
      "Challenge a real Discord friend to a turn-based 3×3 Tic Tac Toe duel on an interactive button board. Solo/AI play and challenging bot accounts are disabled.",
    modes: ["1v1 Multiplayer"],
    difficulties: ["Friends Only (No Bot / AI)"],
    soloSyntax: "Disabled — Tic Tac Toe is Friends Only",
    multiplayerSyntax: "!ttt @user  or  !tictactoe @user",
    moveSyntax: "Click 3×3 grid buttons directly in Discord",
    rules: [
      "Friends only — solo mode and challenging bot accounts are blocked",
      "Invitee responds using Terima / Tolak buttons (no typing needed)",
      "Turn-based interactive 3×3 buttons with Menyerah option and zero points",
    ],
  },
  {
    number: "04",
    id: "quiz",
    title: "QUIZ BATTLE",
    command: "!quiz",
    prefixCommand: "!quiz [category] [difficulty]",
    shortDescription:
      "Starts Round 1 immediately in Indonesian across 90 curated questions — type a, b, c, or d directly in chat.",
    fullDescription:
      "Launch a 10-round Indonesian-language Quiz Battle immediately with no lobby wait. Anyone in the channel can join on the fly simply by typing a, b, c, or d directly in chat without prefixes or slashes.",
    modes: ["Solo", "Drop-in Multiplayer"],
    difficulties: ["Easy", "Normal", "Hard (6 Categories)"],
    soloSyntax: "!quiz  •  !quiz science easy",
    multiplayerSyntax: "Anyone replies a, b, c, or d directly in chat",
    moveSyntax: "Type a, b, c, or d in chat (no prefix or slash)",
    rules: [
      "Starts Round 1 immediately on !quiz with a 20-second timer per round",
      "90 Indonesian questions across Umum, Sains, Teknologi, Geografi, Sejarah, and Olahraga",
      "Counts correct answers (0–10) with zero bonus points or global leaderboards",
    ],
  },
];
