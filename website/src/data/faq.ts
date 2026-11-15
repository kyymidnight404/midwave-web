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
      "Midwave is a multifunctional Discord entertainment bot built with Node.js and discord.js. It combines seven interactive mini-games (Solo and 1v1 Multiplayer), three creative image generators (Brat, Quoted Chat QC, and Instagram Post Frame), Instagram/TikTok media downloading, a Lyrics Finder, a Safe Math evaluator, 10 social anime GIF actions, and contextual Google Gemini AI with selective Tavily Web Search.",
  },
  {
    id: "is-midwave-free",
    question: "Is Midwave free?",
    answer:
      "Yes. Midwave is free to invite and use in Discord servers, with no paywalls, subscriptions, or virtual economy system. Usage cooldowns and rate limits apply to keep image generation and Gemini AI requests responsive for everyone.",
  },
  {
    id: "how-to-invite",
    question: "How do I invite Midwave?",
    answer:
      "Click the Add to Discord button to open the Discord OAuth2 authorization screen, select your server, and grant the bot and applications.commands scopes along with View Channels, Send Messages, Embed Links, Attach Files, and Read Message History permissions.",
  },
  {
    id: "multiplayer-support",
    question: "Does Midwave support multiplayer?",
    answer:
      "Yes. All seven mini-games support both Solo mode and 1v1 Multiplayer challenges. You can challenge another member with a command, let them accept or decline via /invite accept or /invite decline within 60 seconds, and play turn-by-turn directly inside the channel.",
  },
  {
    id: "save-game-data",
    question: "Does Midwave save game data?",
    answer:
      "No. Midwave uses zero databases and stores no persistent user profiles, leaderboards, or match histories. Active game sessions and pending invitations exist strictly in temporary in-memory JavaScript Map structures with automatic TTL expiration.",
  },
  {
    id: "bot-restarts",
    question: "What happens when the bot restarts?",
    answer:
      "Because all active matches and pending invites live purely in RAM, any ongoing sessions are cleared cleanly when the bot restarts. You can immediately start a fresh match once the bot comes back online.",
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
      "In addition to Discord Slash Commands (/), Midwave supports prefix commands using ! by default (for example: !games, !brat hello, !qc text, !igf, !dl <url>, !lyrics <song>, !math 2+2, !hug @user, !ai question, !ttt, !c4). For secret multiplayer choices in prefix mode, Midwave attempts to delete your message if Manage Messages is granted and confirms via DM.",
  },
  {
    id: "command-not-working",
    question: "Why is a command not working?",
    answer:
      "First, check that Midwave has View Channels, Send Messages, Embed Links, and Attach Files permissions in the target channel. If slash commands do not appear, confirm the bot was invited with the applications.commands scope. For prefix commands (!), the bot requires Message Content Intent enabled on its application.",
  },
];
