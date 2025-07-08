import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PolaroidCardProps {
  children: ReactNode;
  caption?: string;
  className?: string;
  tiltDirection?: "left" | "right" | "none";
  onTap?: () => void;
}

export function PolaroidCard({
  children,
  caption,
  className,
  tiltDirection = "left",
  onTap,
}: PolaroidCardProps) {
  const tiltClass = {
    left: "rotate-1 hover:rotate-0",
    right: "-rotate-1 hover:rotate-0",
    none: "rotate-0",
  }[tiltDirection];

  return (
    <div
      className={cn(
        "polaroid-card",
        "bg-white rounded-lg shadow-polaroid border border-border p-4 cursor-pointer transition-transform duration-300 hover:shadow-polaroid-hover",
        tiltClass,
        className
      )}
      onClick={onTap}
    >
      {/* Photo area */}
      <div className="w-full aspect-square mb-4 rounded overflow-hidden bg-muted">
        {children}
      </div>
      
      {/* Caption area */}
      {caption && (
        <div className="text-center">
          <p className="polaroid-caption text-warmBrown text-sm">{caption}</p>
        </div>
      )}
    </div>
  );
} 