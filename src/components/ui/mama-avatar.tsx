import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export type MamaType = "nonna" | "abuela" | "mae";
export type MamaState = "happy" | "encouraging" | "thinking" | "concerned" | "speaking";

interface MamaAvatarProps {
  mama: MamaType;
  state?: MamaState;
  isActive?: boolean;
  size?: "small" | "medium" | "large" | "extra-large";
  className?: string;
  children?: ReactNode;
}

// Avatar images would be stored in public/images/mamas/
const mamaImages = {
  nonna: "/images/mamas/nonna.jpg",
  abuela: "/images/mamas/abuela.jpg",
  mae: "/images/mamas/mae.jpg",
};

const mamaFallbacks = {
  nonna: "N",
  abuela: "A", 
  mae: "M",
};

const mamaNames = {
  nonna: "Nonna",
  abuela: "Abuela",
  mae: "Mae",
};

export function MamaAvatar({
  mama,
  state = "happy",
  isActive = false,
  size = "medium",
  className,
  children,
}: MamaAvatarProps) {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
    "extra-large": "h-24 w-24",
  };

  const themeClasses = {
    nonna: "nonna-theme",
    abuela: "abuela-theme",
    mae: "mae-theme",
  };

  const stateClasses = {
    happy: "",
    encouraging: "animate-bounce-slow",
    thinking: "animate-pulse-slow",
    concerned: "",
    speaking: "animate-speaking ring-2 ring-primary",
  };

  return (
    <div className={cn("flex flex-col items-center", themeClasses[mama], className)}>
      <Avatar
        className={cn(
          sizeClasses[size],
          stateClasses[state],
          isActive && "ring-2 ring-primary ring-offset-2",
          "transition-all duration-300"
        )}
      >
        <AvatarImage
          src={mamaImages[mama]}
          alt={`${mamaNames[mama]} - ${state}`}
        />
        <AvatarFallback className="font-handwritten text-lg bg-primary text-primary-foreground">
          {mamaFallbacks[mama]}
        </AvatarFallback>
      </Avatar>
      
      {children && (
        <div className="mt-2 text-center">
          {children}
        </div>
      )}
    </div>
  );
}

// Convenience components for each mama type
export function NonnaAvatar(props: Omit<MamaAvatarProps, "mama">) {
  return <MamaAvatar {...props} mama="nonna" />;
}

export function AbuelaAvatar(props: Omit<MamaAvatarProps, "mama">) {
  return <MamaAvatar {...props} mama="abuela" />;
}

export function MaeAvatar(props: Omit<MamaAvatarProps, "mama">) {
  return <MamaAvatar {...props} mama="mae" />;
} 