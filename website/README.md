# MIDWAVE — Public Website

Public-facing marketing and documentation website for **MIDWAVE**, a multifunctional Discord entertainment bot featuring seven interactive mini-games, two creative image utilities (`/brat`, `!igf`), and stateless Google Gemini AI assistance (`/ai`, `!ai`).

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: `Silkscreen`, `Inter`, `IBM Plex Mono` via `next/font/google`

## Local Development

1. Navigate to the `website/` directory:
   ```bash
   cd website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Set:
   - `NEXT_PUBLIC_DISCORD_INVITE_URL` — Your Discord OAuth2 bot invite URL
   - `NEXT_PUBLIC_DISCORD_SUPPORT_URL` — Your Discord support server URL (optional)
   - `NEXT_PUBLIC_GITHUB_URL` — Repository URL
4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` — Start local Next.js dev server
- `npm run build` — Create production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Vercel Deployment

Configure the Vercel project with:
- **Framework Preset**: `Next.js`
- **Root Directory**: `website`
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Environment Variables**: Add `NEXT_PUBLIC_DISCORD_INVITE_URL`, `NEXT_PUBLIC_DISCORD_SUPPORT_URL`, and `NEXT_PUBLIC_GITHUB_URL` in the Vercel dashboard. Do **not** add `DISCORD_TOKEN` or `GEMINI_API_KEY` to the website project.
