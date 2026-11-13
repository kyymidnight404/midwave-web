import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface InviteButtonProps {
  label?: string;
  variant?: "primary" | "outline";
  showArrow?: boolean;
  className?: string;
}

export function InviteButton({
  label = "ADD TO DISCORD",
  variant = "primary",
  showArrow = false,
  className = "",
}: InviteButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-mono text-xs tracking-wider uppercase transition-colors px-5 py-3 border";

  const variantStyles =
    variant === "primary"
      ? "bg-white text-[#050505] border-white hover:bg-[#d4d4d4] hover:border-[#d4d4d4] font-semibold"
      : "bg-transparent text-white border-[#252525] hover:bg-[#1a1a1a] hover:border-white font-medium";

  const content = (
    <>
      <span>{label}</span>
      {showArrow && <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />}
    </>
  );

  if (SITE_CONFIG.discordInviteUrl) {
    return (
      <a
        href={SITE_CONFIG.discordInviteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href="#getting-started"
      className={`${baseStyles} ${variantStyles} ${className}`}
      title="View Discord OAuth2 invite setup"
    >
      {content}
    </Link>
  );
}
