import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Users, BookOpen, ChefHat, Home, User } from "lucide-react";

export type NavigationTab = "mamas" | "recipes" | "cook" | "kitchen";

interface NavigationBarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  className?: string;
}

interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

function NavigationItem({ 
  icon, 
  label, 
  isActive, 
  onClick, 
  className 
}: NavigationItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "nav-item",
        "flex flex-col items-center justify-center min-h-12 min-w-12 text-sm font-medium transition-colors duration-200 accessibility-focus",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </button>
  );
}

export function NavigationBar({ 
  activeTab, 
  onTabChange, 
  className
}: NavigationBarProps) {
  const navigationItems = [
    {
      id: "mamas" as NavigationTab,
      icon: <Users className="h-5 w-5" />,
      label: "Mamas",
    },
    {
      id: "recipes" as NavigationTab,
      icon: <BookOpen className="h-5 w-5" />,
      label: "Recipes",
    },
    {
      id: "cook" as NavigationTab,
      icon: <ChefHat className="h-5 w-5" />,
      label: "Cook",
    },
    {
      id: "kitchen" as NavigationTab,
      icon: <Home className="h-5 w-5" />,
      label: "My Kitchen",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "mamia-nav",
        "px-2 py-1",
        "safe-area-inset-bottom",
        className
      )}
    >
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => onTabChange(item.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

// Header component with profile
interface HeaderProps {
  title?: string | undefined;
  showProfile?: boolean;
  onProfileClick?: (() => void) | undefined;
  className?: string;
  children?: ReactNode;
}

export function Header({ 
  title = "MAMIA", 
  showProfile = true, 
  onProfileClick,
  className,
  children 
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40",
        "mamia-header",
        "px-4 py-3",
        "safe-area-inset-top",
        className
      )}
    >
      <div className="max-w-md mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary-foreground font-mono">
          {title}
        </h1>
        
        {showProfile && (
          <button
            onClick={onProfileClick}
            className="nav-item accessibility-focus text-primary-foreground"
          >
            <User className="h-5 w-5" />
          </button>
        )}
        
        {children}
      </div>
    </header>
  );
}

// Layout wrapper with navigation
interface LayoutWrapperProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  title?: string;
  showProfile?: boolean;
  onProfileClick?: () => void;
  className?: string;
  children: ReactNode;
}

export function LayoutWrapper({
  activeTab,
  onTabChange,
  title,
  showProfile = true,
  onProfileClick,
  className,
  children,
}: LayoutWrapperProps) {
  return (
    <div className={cn("min-h-screen", className)} style={{ backgroundColor: 'var(--background)' }}>
      <Header
        title={title}
        showProfile={showProfile}
        onProfileClick={onProfileClick}
      />
      
      <main className="max-w-md mx-auto px-4 py-6 pb-20">
        {children}
      </main>
      
      <NavigationBar
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    </div>
  );
} 