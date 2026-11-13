export interface GameEntry {
  number: string;
  id: string;
  title: string;
  command: string;
  prefixCommand: string;
  shortDescription: string;
  fullDescription: string;
  modes: ("Solo" | "1v1 Multiplayer")[];
  difficulties: string[];
  soloSyntax: string;
  multiplayerSyntax: string;
  moveSyntax: string;
  rules: string[];
}

export const GAMES: GameEntry[] = [
  {
    number: "01",
    id: "guess",
    title: "NUMBER GUESSING",
    command: "/guess",
    prefixCommand: "!guess",
    shortDescription:
      "Deduce the hidden target number using Higher or Lower feedback before attempts run out.",
    fullDescription:
      "Guess the secret number within a difficulty-scaled range. Each guess returns Higher or Lower guidance so you can narrow the target in Solo mode or race an opponent in 1v1 Multiplayer.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Easy (1–50, 8 attempts)", "Normal (1–100, 10 attempts)", "Hard (1–200, 12 attempts)"],
    soloSyntax: "/guess solo [difficulty]",
    multiplayerSyntax: "/guess challenge @opponent [difficulty]",
    moveSyntax: "/guess play <number>",
    rules: [
      "Easy: range 1–50 with 8 attempts",
      "Normal: range 1–100 with 10 attempts",
      "Hard: range 1–200 with 12 attempts",
      "Active sessions expire after 120s of inactivity",
    ],
  },
  {
    number: "02",
    id: "rps",
    title: "ROCK PAPER SCISSORS",
    command: "/rps",
    prefixCommand: "!rps",
    shortDescription:
      "Classic showdown with secret ephemeral choices until both players lock in.",
    fullDescription:
      "Play an instant match against the bot or challenge another member. In 1v1 Multiplayer, selections are submitted privately via ephemeral replies (or auto-deleted prefix messages) before revealing the winner.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Standard"],
    soloSyntax: "/rps solo <rock|paper|scissors>",
    multiplayerSyntax: "/rps challenge @opponent",
    moveSyntax: "/rps choose <rock|paper|scissors>",
    rules: [
      "Slash commands keep multiplayer choices private with ephemeral replies",
      "Prefix commands attempt to delete the trigger message and confirm via DM",
      "Identical choices result in a Draw",
    ],
  },
  {
    number: "03",
    id: "trivia",
    title: "TRIVIA QUIZ",
    command: "/trivia",
    prefixCommand: "!trivia",
    shortDescription:
      "90 curated questions across 6 categories and 3 difficulties in 5-round matches.",
    fullDescription:
      "Test your knowledge across 6 curated categories with zero repeated questions per match. Compete solo or head-to-head across 5 rounds with a 20-second round timer in multiplayer.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Easy", "Normal", "Hard"],
    soloSyntax: "/trivia solo [category] [difficulty]",
    multiplayerSyntax: "/trivia challenge @opponent [category] [difficulty]",
    moveSyntax: "/trivia answer <A|B|C|D>",
    rules: [
      "90 validated questions across 6 categories and 3 difficulty levels",
      "5 rounds per match with no duplicate questions",
      "20-second round timer in 1v1 Multiplayer",
    ],
  },
  {
    number: "04",
    id: "coinflip",
    title: "COIN FLIP",
    command: "/coinflip",
    prefixCommand: "!coinflip",
    shortDescription:
      "Predict Heads or Tails in solo play or secret 1v1 predictions.",
    fullDescription:
      "Call Heads or Tails against the coin flip generator, or challenge another Discord user where both players lock in secret predictions before the coin lands.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Standard"],
    soloSyntax: "/coinflip solo <heads|tails>",
    multiplayerSyntax: "/coinflip challenge @opponent",
    moveSyntax: "/coinflip choose <heads|tails>",
    rules: [
      "Supports Heads or Tails predictions",
      "In 1v1 Multiplayer, identical predictions result in a Draw",
      "Choices remain hidden until both players lock in",
    ],
  },
  {
    number: "05",
    id: "dice",
    title: "DICE ROLLING",
    command: "/dice",
    prefixCommand: "!dice",
    shortDescription:
      "Roll 1 to 10 customizable dice with 2 to 100 sides per die.",
    fullDescription:
      "Configure custom dice expressions (default 1d6, up to 10 dice and 100 sides) to roll solo or compare totals directly against a friend in 1v1 Multiplayer.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Custom (1–10 dice, 2–100 sides)"],
    soloSyntax: "/dice solo [count] [sides]",
    multiplayerSyntax: "/dice challenge @opponent [count] [sides]",
    moveSyntax: "Instant resolution on command",
    rules: [
      "Default configuration is 1d6",
      "Supports 1–10 dice and 2–100 sides per die",
      "Prefix shorthand supports notation like !dice 2d6",
    ],
  },
  {
    number: "06",
    id: "tictactoe",
    title: "TIC TAC TOE",
    command: "/tictactoe",
    prefixCommand: "!tictactoe (!ttt)",
    shortDescription:
      "3×3 tactical grid with Easy, Normal, and unbeatable Hard (Minimax) AI.",
    fullDescription:
      "Play on a 3×3 coordinate grid (A1–C3) against an AI opponent with three difficulty levels, or challenge another member to a turn-based 1v1 match inside Discord.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Easy", "Normal", "Hard (Minimax AI)"],
    soloSyntax: "/tictactoe solo [difficulty]",
    multiplayerSyntax: "/tictactoe challenge @opponent",
    moveSyntax: "/tictactoe move <A1-C3>",
    rules: [
      "Grid coordinates span A1 through C3",
      "Hard solo mode uses an unbeatable Minimax AI",
      "Prefix alias !ttt is supported",
    ],
  },
  {
    number: "07",
    id: "connect4",
    title: "CONNECT FOUR",
    command: "/connect4",
    prefixCommand: "!connect4 (!c4)",
    shortDescription:
      "7×6 vertical disc board with Easy, Normal, and Alpha-Beta AI.",
    fullDescription:
      "Drop discs into a 7-column by 6-row board to align four in a row horizontally, vertically, or diagonally. Face the time-budgeted Alpha-Beta AI or duel a friend.",
    modes: ["Solo", "1v1 Multiplayer"],
    difficulties: ["Easy", "Normal", "Hard (Alpha-Beta AI)"],
    soloSyntax: "/connect4 solo [difficulty]",
    multiplayerSyntax: "/connect4 challenge @opponent",
    moveSyntax: "/connect4 drop <1-7>",
    rules: [
      "Standard 7×6 column-drop board (columns 1–7)",
      "Hard solo mode uses a time-budgeted Alpha-Beta search AI",
      "Prefix alias !c4 is supported",
    ],
  },
];
