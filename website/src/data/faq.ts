export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "what-is-midwave",
    question: "What is Midwave?",
    answer:
      "Midwave is a multifunctional Discord entertainment bot built with Node.js and discord.js. It combines four interactive mini-games, three creative image generators (Brat, Quoted Chat QC, and Instagram Post Frame), official BMKG Indonesia weather forecasts, Instagram/TikTok media downloading, a Lyrics Finder, a Safe Math evaluator, 11 social anime GIF actions, Auto Role management, and contextual Google Gemini AI with selective Tavily Web Search.",
  },
  {
    id: "is-midwave-free",
    question: "Is Midwave free?",
    answer:
      "Yes. Midwave is free to invite and use in Discord servers, with no paywalls, subscriptions, or virtual economy system. Optional support via /donate (!donate) helps cover hosting, and cooldowns keep image generation, BMKG weather lookups, and Gemini AI responsive.",
  },
  {
    id: "how-to-invite",
    question: "How do I invite Midwave?",
    answer:
      "Click the Add to Discord button to open Discord OAuth2 authorization, select your server, and grant the bot and applications.commands scopes. When Midwave joins a new server, it automatically sends a welcome embed with a quick-start guide (!menu / /help) to the first available channel.",
  },
  {
    id: "multiplayer-support",
    question: "Does Midwave support multiplayer?",
    answer:
      "Yes. Coin Flip and Rock Paper Scissors support both Solo and 1v1 Multiplayer using Accept/Reject and secret choice buttons. Tic Tac Toe (!ttt @user) is strictly for 1v1 friend matches (no bots/AI), and Quiz Battle (!quiz) lets anyone in the channel drop in anytime by typing a, b, c, or d directly in chat.",
  },
  {
    id: "save-game-data",
    question: "Does Midwave track points, profiles, or leaderboards?",
    answer:
      "No. Midwave stores zero user profiles, zero leaderboards, and zero match points or reward bonuses. SQLite is used only to persist active interactive button sessions, Indonesian quiz questions, and /autorole guild configurations—never player scores or AI chat history.",
  },
  {
    id: "weather-bmkg",
    question: "How does the Weather command work?",
    answer:
      "Run /weather <location> or !weather <location> (alias !cuaca) with any Indonesian city, regency, sub-district, village, or ADM4 code (e.g., Jakarta, Kemayoran, Bandung, Surabaya). Midwave resolves the location to an official BMKG ADM4 code and returns current temperature, humidity, wind, cloud cover, and the next 3-hour intervals directly from BMKG.",
  },
  {
    id: "ai-memory",
    question: "Does Midwave AI remember previous conversations?",
    answer:
      "Midwave AI (/ai and !ai) uses ephemeral RAM-only short-term memory per user and channel (up to 10 messages with a 15-minute idle TTL), plus reply-chain context when using !ai. Nothing is saved to a database, and memory clears automatically after 15 minutes of inactivity or when the bot restarts. An 8-second cooldown and 1,500-character prompt limit apply.",
  },
  {
    id: "prefix-commands",
    question: "How do I use prefix commands?",
    answer:
      "In addition to Discord Slash Commands (/), Midwave supports prefix commands using ! by default (for example: !menu, !weather Jakarta, !brat hello, !qc text, !igf, !dl <url>, !lyrics <song>, !math 2+2, !hug @user, !ai question, !cf, !rps, !ttt @user, !quiz). Quiz answers (a/b/c/d) work directly in chat without any prefix.",
  },
  {
    id: "command-not-working",
    question: "Why is a command not working?",
    answer:
      "First, check that Midwave has View Channels, Send Messages, Embed Links, Attach Files, Read Message History, and Add Reactions permissions in the target channel (plus Manage Roles for /autorole). If slash commands do not appear, confirm the bot was invited with the applications.commands scope, and ensure Message Content Intent & Server Members Intent are enabled for prefix commands and Auto Role.",
  },
];
