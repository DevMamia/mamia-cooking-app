import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MamaAvatar, MamaType } from "@/components/ui/mama-avatar";
import { Clock, Users, Wifi, WifiOff } from "lucide-react";
import Image from "next/image";

interface RecipeCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  mama: MamaType;
  cookTime?: string;
  servings?: number;
  difficulty?: "easy" | "medium" | "hard";
  isOffline?: boolean;
  tags?: string[];
  className?: string;
  children?: ReactNode;
  onSelect?: () => void;
}

const difficultyColors = {
  easy: "bg-accent text-accent-foreground",
  medium: "bg-primary/20 text-primary",
  hard: "bg-destructive/20 text-destructive",
};

export function RecipeCard({
  title,
  description,
  imageUrl,
  mama,
  cookTime,
  servings,
  difficulty = "easy",
  isOffline = false,
  tags = [],
  className,
  children,
  onSelect,
}: RecipeCardProps) {
  return (
    <Card
      className={cn(
        "recipe-card",
        "cursor-pointer hover:shadow-medium transition-all duration-300 overflow-hidden",
        isOffline && "offline border-muted-foreground/20",
        className
      )}
      onClick={onSelect}
    >
      {/* Recipe Image */}
      <div className="relative aspect-video overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
        
        {/* Offline indicator */}
        {isOffline && (
          <div className="absolute top-2 right-2 bg-muted/80 rounded-full p-1">
            <WifiOff className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
        
        {/* Mama indicator */}
        <div className="absolute top-2 left-2">
          <MamaAvatar mama={mama} size="small" />
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {title}
        </CardTitle>
        
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        {/* Recipe metadata */}
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          {cookTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{cookTime}</span>
            </div>
          )}
          
          {servings && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{servings}</span>
            </div>
          )}
          
          {!isOffline && (
            <div className="flex items-center gap-1">
              <Wifi className="h-4 w-4" />
              <span>Online</span>
            </div>
          )}
        </div>

        {/* Tags and difficulty */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
          
          <Badge className={cn("text-xs", difficultyColors[difficulty])}>
            {difficulty}
          </Badge>
        </div>

        {children}
      </CardContent>
    </Card>
  );
}

// Convenience components for specific recipe types
export function FeaturedRecipeCard(props: RecipeCardProps) {
  return (
    <RecipeCard
      {...props}
      className={cn("ring-2 ring-primary ring-offset-2", props.className)}
    />
  );
}

export function OfflineRecipeCard(props: Omit<RecipeCardProps, "isOffline">) {
  return <RecipeCard {...props} isOffline={true} />;
} 