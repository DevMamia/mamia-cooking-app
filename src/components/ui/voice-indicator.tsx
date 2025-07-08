import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Mic, MicOff, Volume2 } from "lucide-react";

export type VoiceState = "idle" | "listening" | "speaking" | "thinking" | "muted";

interface VoiceIndicatorProps {
  state: VoiceState;
  size?: "small" | "medium" | "large";
  showWaveform?: boolean;
  className?: string;
  children?: ReactNode;
}

export function VoiceIndicator({
  state,
  size = "medium",
  showWaveform = true,
  className,
  children,
}: VoiceIndicatorProps) {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  };

  const stateClasses = {
    idle: "bg-muted text-muted-foreground",
    listening: "bg-primary text-primary-foreground animate-listening",
    speaking: "bg-primary text-primary-foreground animate-speaking",
    thinking: "bg-accent text-accent-foreground animate-pulse-slow",
    muted: "bg-destructive text-destructive-foreground",
  };

  const getIcon = () => {
    switch (state) {
      case "muted":
        return <MicOff className="h-4 w-4" />;
      case "speaking":
        return <Volume2 className="h-4 w-4" />;
      default:
        return <Mic className="h-4 w-4" />;
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "voice-indicator",
          "flex items-center justify-center rounded-full transition-all duration-300",
          sizeClasses[size],
          stateClasses[state]
        )}
      >
        {getIcon()}
      </div>

      {/* Waveform visualization */}
      {showWaveform && (state === "listening" || state === "speaking") && (
        <div className="flex items-center justify-center space-x-1 mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={cn(
                "waveform-bar",
                "w-1 bg-primary rounded-full",
                size === "small" && "h-2",
                size === "medium" && "h-3",
                size === "large" && "h-4"
              )}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}

      {children && (
        <div className="mt-2 text-center text-sm text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}

// Convenience components for different states
export function ListeningIndicator(props: Omit<VoiceIndicatorProps, "state">) {
  return <VoiceIndicator {...props} state="listening" />;
}

export function SpeakingIndicator(props: Omit<VoiceIndicatorProps, "state">) {
  return <VoiceIndicator {...props} state="speaking" />;
}

export function ThinkingIndicator(props: Omit<VoiceIndicatorProps, "state">) {
  return <VoiceIndicator {...props} state="thinking" />;
} 