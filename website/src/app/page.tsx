import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CreativeTools } from "@/components/CreativeTools";
import { Games } from "@/components/Games";
import { Multiplayer } from "@/components/Multiplayer";
import { AIShowcase } from "@/components/AIShowcase";
import { WhyMidwave } from "@/components/WhyMidwave";
import { QuickFacts } from "@/components/QuickFacts";
import { CommandExplorer } from "@/components/CommandExplorer";
import { GettingStarted } from "@/components/GettingStarted";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#050505]">
        <Hero />
        <CreativeTools />
        <Games />
        <Multiplayer />
        <AIShowcase />
        <WhyMidwave />
        <QuickFacts />
        <CommandExplorer />
        <GettingStarted />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
