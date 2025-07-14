This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where line numbers have been added, security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Line numbers have been added to the beginning of each line
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  placeholder.svg
  robots.txt
src/
  components/
    ui/
      accordion.tsx
      alert-dialog.tsx
      alert.tsx
      aspect-ratio.tsx
      avatar.tsx
      badge.tsx
      breadcrumb.tsx
      button.tsx
      calendar.tsx
      card.tsx
      carousel.tsx
      chart.tsx
      checkbox.tsx
      collapsible.tsx
      command.tsx
      context-menu.tsx
      dialog.tsx
      drawer.tsx
      dropdown-menu.tsx
      form.tsx
      hover-card.tsx
      input-otp.tsx
      input.tsx
      label.tsx
      menubar.tsx
      navigation-menu.tsx
      pagination.tsx
      popover.tsx
      progress.tsx
      radio-group.tsx
      resizable.tsx
      scroll-area.tsx
      select.tsx
      separator.tsx
      sheet.tsx
      sidebar.tsx
      skeleton.tsx
      slider.tsx
      sonner.tsx
      switch.tsx
      table.tsx
      tabs.tsx
      textarea.tsx
      toast.tsx
      toaster.tsx
      toggle-group.tsx
      toggle.tsx
      tooltip.tsx
      use-toast.ts
    BottomNavigation.tsx
    CelebrationEffects.tsx
    ConversationInterface.tsx
    CookingStreak.tsx
    CookingTimer.tsx
    CulturalEmptyState.tsx
    DraggableShoppingItem.tsx
    EnhancedLoadingStates.tsx
    EnhancedVoiceIndicator.tsx
    EnhancedVoiceInterface.tsx
    ErrorBoundary.tsx
    FloatingCartButton.tsx
    Header.tsx
    Layout.tsx
    LazyImage.tsx
    LoadingSkeleton.tsx
    MasonryRecipeGrid.tsx
    OfflineIndicator.tsx
    PageTransition.tsx
    PreCookingChat.tsx
    PullToRefresh.tsx
    RecipeCard.tsx
    RecipeCardStack.tsx
    ShareShoppingListModal.tsx
    ShoppingListCard.tsx
    ShoppingListModal.tsx
    SmartCategorizationPanel.tsx
    SwipeableCard.tsx
    TextModeDisplay.tsx
    VoiceConfigPanel.tsx
    VoiceStatusIndicator.tsx
  contexts/
    AccessibilityContext.tsx
    AuthContext.tsx
    ShoppingListContext.tsx
  data/
    mamas.ts
    recipes.ts
  hooks/
    use-mobile.tsx
    use-toast.ts
    useConversation.tsx
    useConversationMemory.ts
    useOptimisticUpdates.tsx
    useProductionFeatures.tsx
    useTemplateResponses.ts
    useVoice.tsx
  integrations/
    supabase/
      client.ts
      types.ts
  lib/
    utils.ts
  pages/
    Auth.tsx
    Cook.tsx
    Index.tsx
    Kitchen.tsx
    MamaCookbook.tsx
    Mamas.tsx
    NotFound.tsx
    RecipeDetail.tsx
    Recipes.tsx
    ShoppingList.tsx
  services/
    categorizationService.ts
    conversationalService.ts
    ingredientConsolidationService.ts
    intelligentResponseService.ts
    quantityCalculationService.ts
    sharingService.ts
    voiceService.ts
  types/
    shopping.ts
    userProgress.ts
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
supabase/
  functions/
    get-voice-ids/
      index.ts
    text-to-speech/
      index.ts
  migrations/
    20250711064419-ad7b1d1c-9e6d-4161-b159-6525cb751fdc.sql
    20250711070342-48a98a78-baff-433b-827c-08513153f1e9.sql
  config.toml
.gitignore
components.json
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: public/placeholder.svg
````
1: <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
````

## File: public/robots.txt
````
 1: User-agent: Googlebot
 2: Allow: /
 3: 
 4: User-agent: Bingbot
 5: Allow: /
 6: 
 7: User-agent: Twitterbot
 8: Allow: /
 9: 
10: User-agent: facebookexternalhit
11: Allow: /
12: 
13: User-agent: *
14: Allow: /
````

## File: src/components/ui/accordion.tsx
````typescript
 1: import * as React from "react"
 2: import * as AccordionPrimitive from "@radix-ui/react-accordion"
 3: import { ChevronDown } from "lucide-react"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const Accordion = AccordionPrimitive.Root
 8: 
 9: const AccordionItem = React.forwardRef<
10:   React.ElementRef<typeof AccordionPrimitive.Item>,
11:   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
12: >(({ className, ...props }, ref) => (
13:   <AccordionPrimitive.Item
14:     ref={ref}
15:     className={cn("border-b", className)}
16:     {...props}
17:   />
18: ))
19: AccordionItem.displayName = "AccordionItem"
20: 
21: const AccordionTrigger = React.forwardRef<
22:   React.ElementRef<typeof AccordionPrimitive.Trigger>,
23:   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
24: >(({ className, children, ...props }, ref) => (
25:   <AccordionPrimitive.Header className="flex">
26:     <AccordionPrimitive.Trigger
27:       ref={ref}
28:       className={cn(
29:         "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
30:         className
31:       )}
32:       {...props}
33:     >
34:       {children}
35:       <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
36:     </AccordionPrimitive.Trigger>
37:   </AccordionPrimitive.Header>
38: ))
39: AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
40: 
41: const AccordionContent = React.forwardRef<
42:   React.ElementRef<typeof AccordionPrimitive.Content>,
43:   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
44: >(({ className, children, ...props }, ref) => (
45:   <AccordionPrimitive.Content
46:     ref={ref}
47:     className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
48:     {...props}
49:   >
50:     <div className={cn("pb-4 pt-0", className)}>{children}</div>
51:   </AccordionPrimitive.Content>
52: ))
53: 
54: AccordionContent.displayName = AccordionPrimitive.Content.displayName
55: 
56: export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
````

## File: src/components/ui/alert-dialog.tsx
````typescript
  1: import * as React from "react"
  2: import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
  3: 
  4: import { cn } from "@/lib/utils"
  5: import { buttonVariants } from "@/components/ui/button"
  6: 
  7: const AlertDialog = AlertDialogPrimitive.Root
  8: 
  9: const AlertDialogTrigger = AlertDialogPrimitive.Trigger
 10: 
 11: const AlertDialogPortal = AlertDialogPrimitive.Portal
 12: 
 13: const AlertDialogOverlay = React.forwardRef<
 14:   React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
 15:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
 16: >(({ className, ...props }, ref) => (
 17:   <AlertDialogPrimitive.Overlay
 18:     className={cn(
 19:       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
 20:       className
 21:     )}
 22:     {...props}
 23:     ref={ref}
 24:   />
 25: ))
 26: AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
 27: 
 28: const AlertDialogContent = React.forwardRef<
 29:   React.ElementRef<typeof AlertDialogPrimitive.Content>,
 30:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
 31: >(({ className, ...props }, ref) => (
 32:   <AlertDialogPortal>
 33:     <AlertDialogOverlay />
 34:     <AlertDialogPrimitive.Content
 35:       ref={ref}
 36:       className={cn(
 37:         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
 38:         className
 39:       )}
 40:       {...props}
 41:     />
 42:   </AlertDialogPortal>
 43: ))
 44: AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
 45: 
 46: const AlertDialogHeader = ({
 47:   className,
 48:   ...props
 49: }: React.HTMLAttributes<HTMLDivElement>) => (
 50:   <div
 51:     className={cn(
 52:       "flex flex-col space-y-2 text-center sm:text-left",
 53:       className
 54:     )}
 55:     {...props}
 56:   />
 57: )
 58: AlertDialogHeader.displayName = "AlertDialogHeader"
 59: 
 60: const AlertDialogFooter = ({
 61:   className,
 62:   ...props
 63: }: React.HTMLAttributes<HTMLDivElement>) => (
 64:   <div
 65:     className={cn(
 66:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 67:       className
 68:     )}
 69:     {...props}
 70:   />
 71: )
 72: AlertDialogFooter.displayName = "AlertDialogFooter"
 73: 
 74: const AlertDialogTitle = React.forwardRef<
 75:   React.ElementRef<typeof AlertDialogPrimitive.Title>,
 76:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
 77: >(({ className, ...props }, ref) => (
 78:   <AlertDialogPrimitive.Title
 79:     ref={ref}
 80:     className={cn("text-lg font-semibold", className)}
 81:     {...props}
 82:   />
 83: ))
 84: AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
 85: 
 86: const AlertDialogDescription = React.forwardRef<
 87:   React.ElementRef<typeof AlertDialogPrimitive.Description>,
 88:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
 89: >(({ className, ...props }, ref) => (
 90:   <AlertDialogPrimitive.Description
 91:     ref={ref}
 92:     className={cn("text-sm text-muted-foreground", className)}
 93:     {...props}
 94:   />
 95: ))
 96: AlertDialogDescription.displayName =
 97:   AlertDialogPrimitive.Description.displayName
 98: 
 99: const AlertDialogAction = React.forwardRef<
100:   React.ElementRef<typeof AlertDialogPrimitive.Action>,
101:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
102: >(({ className, ...props }, ref) => (
103:   <AlertDialogPrimitive.Action
104:     ref={ref}
105:     className={cn(buttonVariants(), className)}
106:     {...props}
107:   />
108: ))
109: AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
110: 
111: const AlertDialogCancel = React.forwardRef<
112:   React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
113:   React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
114: >(({ className, ...props }, ref) => (
115:   <AlertDialogPrimitive.Cancel
116:     ref={ref}
117:     className={cn(
118:       buttonVariants({ variant: "outline" }),
119:       "mt-2 sm:mt-0",
120:       className
121:     )}
122:     {...props}
123:   />
124: ))
125: AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
126: 
127: export {
128:   AlertDialog,
129:   AlertDialogPortal,
130:   AlertDialogOverlay,
131:   AlertDialogTrigger,
132:   AlertDialogContent,
133:   AlertDialogHeader,
134:   AlertDialogFooter,
135:   AlertDialogTitle,
136:   AlertDialogDescription,
137:   AlertDialogAction,
138:   AlertDialogCancel,
139: }
````

## File: src/components/ui/alert.tsx
````typescript
 1: import * as React from "react"
 2: import { cva, type VariantProps } from "class-variance-authority"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const alertVariants = cva(
 7:   "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
 8:   {
 9:     variants: {
10:       variant: {
11:         default: "bg-background text-foreground",
12:         destructive:
13:           "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
14:       },
15:     },
16:     defaultVariants: {
17:       variant: "default",
18:     },
19:   }
20: )
21: 
22: const Alert = React.forwardRef<
23:   HTMLDivElement,
24:   React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
25: >(({ className, variant, ...props }, ref) => (
26:   <div
27:     ref={ref}
28:     role="alert"
29:     className={cn(alertVariants({ variant }), className)}
30:     {...props}
31:   />
32: ))
33: Alert.displayName = "Alert"
34: 
35: const AlertTitle = React.forwardRef<
36:   HTMLParagraphElement,
37:   React.HTMLAttributes<HTMLHeadingElement>
38: >(({ className, ...props }, ref) => (
39:   <h5
40:     ref={ref}
41:     className={cn("mb-1 font-medium leading-none tracking-tight", className)}
42:     {...props}
43:   />
44: ))
45: AlertTitle.displayName = "AlertTitle"
46: 
47: const AlertDescription = React.forwardRef<
48:   HTMLParagraphElement,
49:   React.HTMLAttributes<HTMLParagraphElement>
50: >(({ className, ...props }, ref) => (
51:   <div
52:     ref={ref}
53:     className={cn("text-sm [&_p]:leading-relaxed", className)}
54:     {...props}
55:   />
56: ))
57: AlertDescription.displayName = "AlertDescription"
58: 
59: export { Alert, AlertTitle, AlertDescription }
````

## File: src/components/ui/aspect-ratio.tsx
````typescript
1: import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
2: 
3: const AspectRatio = AspectRatioPrimitive.Root
4: 
5: export { AspectRatio }
````

## File: src/components/ui/avatar.tsx
````typescript
 1: import * as React from "react"
 2: import * as AvatarPrimitive from "@radix-ui/react-avatar"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Avatar = React.forwardRef<
 7:   React.ElementRef<typeof AvatarPrimitive.Root>,
 8:   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
 9: >(({ className, ...props }, ref) => (
10:   <AvatarPrimitive.Root
11:     ref={ref}
12:     className={cn(
13:       "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
14:       className
15:     )}
16:     {...props}
17:   />
18: ))
19: Avatar.displayName = AvatarPrimitive.Root.displayName
20: 
21: const AvatarImage = React.forwardRef<
22:   React.ElementRef<typeof AvatarPrimitive.Image>,
23:   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
24: >(({ className, ...props }, ref) => (
25:   <AvatarPrimitive.Image
26:     ref={ref}
27:     className={cn("aspect-square h-full w-full", className)}
28:     {...props}
29:   />
30: ))
31: AvatarImage.displayName = AvatarPrimitive.Image.displayName
32: 
33: const AvatarFallback = React.forwardRef<
34:   React.ElementRef<typeof AvatarPrimitive.Fallback>,
35:   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
36: >(({ className, ...props }, ref) => (
37:   <AvatarPrimitive.Fallback
38:     ref={ref}
39:     className={cn(
40:       "flex h-full w-full items-center justify-center rounded-full bg-muted",
41:       className
42:     )}
43:     {...props}
44:   />
45: ))
46: AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
47: 
48: export { Avatar, AvatarImage, AvatarFallback }
````

## File: src/components/ui/badge.tsx
````typescript
 1: import * as React from "react"
 2: import { cva, type VariantProps } from "class-variance-authority"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const badgeVariants = cva(
 7:   "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
 8:   {
 9:     variants: {
10:       variant: {
11:         default:
12:           "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
13:         secondary:
14:           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
15:         destructive:
16:           "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
17:         outline: "text-foreground",
18:       },
19:     },
20:     defaultVariants: {
21:       variant: "default",
22:     },
23:   }
24: )
25: 
26: export interface BadgeProps
27:   extends React.HTMLAttributes<HTMLDivElement>,
28:     VariantProps<typeof badgeVariants> {}
29: 
30: function Badge({ className, variant, ...props }: BadgeProps) {
31:   return (
32:     <div className={cn(badgeVariants({ variant }), className)} {...props} />
33:   )
34: }
35: 
36: export { Badge, badgeVariants }
````

## File: src/components/ui/breadcrumb.tsx
````typescript
  1: import * as React from "react"
  2: import { Slot } from "@radix-ui/react-slot"
  3: import { ChevronRight, MoreHorizontal } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const Breadcrumb = React.forwardRef<
  8:   HTMLElement,
  9:   React.ComponentPropsWithoutRef<"nav"> & {
 10:     separator?: React.ReactNode
 11:   }
 12: >(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
 13: Breadcrumb.displayName = "Breadcrumb"
 14: 
 15: const BreadcrumbList = React.forwardRef<
 16:   HTMLOListElement,
 17:   React.ComponentPropsWithoutRef<"ol">
 18: >(({ className, ...props }, ref) => (
 19:   <ol
 20:     ref={ref}
 21:     className={cn(
 22:       "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
 23:       className
 24:     )}
 25:     {...props}
 26:   />
 27: ))
 28: BreadcrumbList.displayName = "BreadcrumbList"
 29: 
 30: const BreadcrumbItem = React.forwardRef<
 31:   HTMLLIElement,
 32:   React.ComponentPropsWithoutRef<"li">
 33: >(({ className, ...props }, ref) => (
 34:   <li
 35:     ref={ref}
 36:     className={cn("inline-flex items-center gap-1.5", className)}
 37:     {...props}
 38:   />
 39: ))
 40: BreadcrumbItem.displayName = "BreadcrumbItem"
 41: 
 42: const BreadcrumbLink = React.forwardRef<
 43:   HTMLAnchorElement,
 44:   React.ComponentPropsWithoutRef<"a"> & {
 45:     asChild?: boolean
 46:   }
 47: >(({ asChild, className, ...props }, ref) => {
 48:   const Comp = asChild ? Slot : "a"
 49: 
 50:   return (
 51:     <Comp
 52:       ref={ref}
 53:       className={cn("transition-colors hover:text-foreground", className)}
 54:       {...props}
 55:     />
 56:   )
 57: })
 58: BreadcrumbLink.displayName = "BreadcrumbLink"
 59: 
 60: const BreadcrumbPage = React.forwardRef<
 61:   HTMLSpanElement,
 62:   React.ComponentPropsWithoutRef<"span">
 63: >(({ className, ...props }, ref) => (
 64:   <span
 65:     ref={ref}
 66:     role="link"
 67:     aria-disabled="true"
 68:     aria-current="page"
 69:     className={cn("font-normal text-foreground", className)}
 70:     {...props}
 71:   />
 72: ))
 73: BreadcrumbPage.displayName = "BreadcrumbPage"
 74: 
 75: const BreadcrumbSeparator = ({
 76:   children,
 77:   className,
 78:   ...props
 79: }: React.ComponentProps<"li">) => (
 80:   <li
 81:     role="presentation"
 82:     aria-hidden="true"
 83:     className={cn("[&>svg]:size-3.5", className)}
 84:     {...props}
 85:   >
 86:     {children ?? <ChevronRight />}
 87:   </li>
 88: )
 89: BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
 90: 
 91: const BreadcrumbEllipsis = ({
 92:   className,
 93:   ...props
 94: }: React.ComponentProps<"span">) => (
 95:   <span
 96:     role="presentation"
 97:     aria-hidden="true"
 98:     className={cn("flex h-9 w-9 items-center justify-center", className)}
 99:     {...props}
100:   >
101:     <MoreHorizontal className="h-4 w-4" />
102:     <span className="sr-only">More</span>
103:   </span>
104: )
105: BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
106: 
107: export {
108:   Breadcrumb,
109:   BreadcrumbList,
110:   BreadcrumbItem,
111:   BreadcrumbLink,
112:   BreadcrumbPage,
113:   BreadcrumbSeparator,
114:   BreadcrumbEllipsis,
115: }
````

## File: src/components/ui/button.tsx
````typescript
 1: import * as React from "react"
 2: import { Slot } from "@radix-ui/react-slot"
 3: import { cva, type VariantProps } from "class-variance-authority"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const buttonVariants = cva(
 8:   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
 9:   {
10:     variants: {
11:       variant: {
12:         default: "bg-primary text-primary-foreground hover:bg-primary/90",
13:         destructive:
14:           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
15:         outline:
16:           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
17:         secondary:
18:           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
19:         ghost: "hover:bg-accent hover:text-accent-foreground",
20:         link: "text-primary underline-offset-4 hover:underline",
21:       },
22:       size: {
23:         default: "h-10 px-4 py-2",
24:         sm: "h-9 rounded-md px-3",
25:         lg: "h-11 rounded-md px-8",
26:         icon: "h-10 w-10",
27:       },
28:     },
29:     defaultVariants: {
30:       variant: "default",
31:       size: "default",
32:     },
33:   }
34: )
35: 
36: export interface ButtonProps
37:   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
38:     VariantProps<typeof buttonVariants> {
39:   asChild?: boolean
40: }
41: 
42: const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
43:   ({ className, variant, size, asChild = false, ...props }, ref) => {
44:     const Comp = asChild ? Slot : "button"
45:     return (
46:       <Comp
47:         className={cn(buttonVariants({ variant, size, className }))}
48:         ref={ref}
49:         {...props}
50:       />
51:     )
52:   }
53: )
54: Button.displayName = "Button"
55: 
56: export { Button, buttonVariants }
````

## File: src/components/ui/calendar.tsx
````typescript
 1: import * as React from "react";
 2: import { ChevronLeft, ChevronRight } from "lucide-react";
 3: import { DayPicker } from "react-day-picker";
 4: 
 5: import { cn } from "@/lib/utils";
 6: import { buttonVariants } from "@/components/ui/button";
 7: 
 8: export type CalendarProps = React.ComponentProps<typeof DayPicker>;
 9: 
10: function Calendar({
11:   className,
12:   classNames,
13:   showOutsideDays = true,
14:   ...props
15: }: CalendarProps) {
16:   return (
17:     <DayPicker
18:       showOutsideDays={showOutsideDays}
19:       className={cn("p-3", className)}
20:       classNames={{
21:         months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
22:         month: "space-y-4",
23:         caption: "flex justify-center pt-1 relative items-center",
24:         caption_label: "text-sm font-medium",
25:         nav: "space-x-1 flex items-center",
26:         nav_button: cn(
27:           buttonVariants({ variant: "outline" }),
28:           "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
29:         ),
30:         nav_button_previous: "absolute left-1",
31:         nav_button_next: "absolute right-1",
32:         table: "w-full border-collapse space-y-1",
33:         head_row: "flex",
34:         head_cell:
35:           "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
36:         row: "flex w-full mt-2",
37:         cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
38:         day: cn(
39:           buttonVariants({ variant: "ghost" }),
40:           "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
41:         ),
42:         day_range_end: "day-range-end",
43:         day_selected:
44:           "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
45:         day_today: "bg-accent text-accent-foreground",
46:         day_outside:
47:           "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
48:         day_disabled: "text-muted-foreground opacity-50",
49:         day_range_middle:
50:           "aria-selected:bg-accent aria-selected:text-accent-foreground",
51:         day_hidden: "invisible",
52:         ...classNames,
53:       }}
54:       components={{
55:         IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
56:         IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
57:       }}
58:       {...props}
59:     />
60:   );
61: }
62: Calendar.displayName = "Calendar";
63: 
64: export { Calendar };
````

## File: src/components/ui/card.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: const Card = React.forwardRef<
 6:   HTMLDivElement,
 7:   React.HTMLAttributes<HTMLDivElement>
 8: >(({ className, ...props }, ref) => (
 9:   <div
10:     ref={ref}
11:     className={cn(
12:       "rounded-lg border bg-card text-card-foreground shadow-sm",
13:       className
14:     )}
15:     {...props}
16:   />
17: ))
18: Card.displayName = "Card"
19: 
20: const CardHeader = React.forwardRef<
21:   HTMLDivElement,
22:   React.HTMLAttributes<HTMLDivElement>
23: >(({ className, ...props }, ref) => (
24:   <div
25:     ref={ref}
26:     className={cn("flex flex-col space-y-1.5 p-6", className)}
27:     {...props}
28:   />
29: ))
30: CardHeader.displayName = "CardHeader"
31: 
32: const CardTitle = React.forwardRef<
33:   HTMLParagraphElement,
34:   React.HTMLAttributes<HTMLHeadingElement>
35: >(({ className, ...props }, ref) => (
36:   <h3
37:     ref={ref}
38:     className={cn(
39:       "text-2xl font-semibold leading-none tracking-tight",
40:       className
41:     )}
42:     {...props}
43:   />
44: ))
45: CardTitle.displayName = "CardTitle"
46: 
47: const CardDescription = React.forwardRef<
48:   HTMLParagraphElement,
49:   React.HTMLAttributes<HTMLParagraphElement>
50: >(({ className, ...props }, ref) => (
51:   <p
52:     ref={ref}
53:     className={cn("text-sm text-muted-foreground", className)}
54:     {...props}
55:   />
56: ))
57: CardDescription.displayName = "CardDescription"
58: 
59: const CardContent = React.forwardRef<
60:   HTMLDivElement,
61:   React.HTMLAttributes<HTMLDivElement>
62: >(({ className, ...props }, ref) => (
63:   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
64: ))
65: CardContent.displayName = "CardContent"
66: 
67: const CardFooter = React.forwardRef<
68:   HTMLDivElement,
69:   React.HTMLAttributes<HTMLDivElement>
70: >(({ className, ...props }, ref) => (
71:   <div
72:     ref={ref}
73:     className={cn("flex items-center p-6 pt-0", className)}
74:     {...props}
75:   />
76: ))
77: CardFooter.displayName = "CardFooter"
78: 
79: export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: src/components/ui/carousel.tsx
````typescript
  1: import * as React from "react"
  2: import useEmblaCarousel, {
  3:   type UseEmblaCarouselType,
  4: } from "embla-carousel-react"
  5: import { ArrowLeft, ArrowRight } from "lucide-react"
  6: 
  7: import { cn } from "@/lib/utils"
  8: import { Button } from "@/components/ui/button"
  9: 
 10: type CarouselApi = UseEmblaCarouselType[1]
 11: type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
 12: type CarouselOptions = UseCarouselParameters[0]
 13: type CarouselPlugin = UseCarouselParameters[1]
 14: 
 15: type CarouselProps = {
 16:   opts?: CarouselOptions
 17:   plugins?: CarouselPlugin
 18:   orientation?: "horizontal" | "vertical"
 19:   setApi?: (api: CarouselApi) => void
 20: }
 21: 
 22: type CarouselContextProps = {
 23:   carouselRef: ReturnType<typeof useEmblaCarousel>[0]
 24:   api: ReturnType<typeof useEmblaCarousel>[1]
 25:   scrollPrev: () => void
 26:   scrollNext: () => void
 27:   canScrollPrev: boolean
 28:   canScrollNext: boolean
 29: } & CarouselProps
 30: 
 31: const CarouselContext = React.createContext<CarouselContextProps | null>(null)
 32: 
 33: function useCarousel() {
 34:   const context = React.useContext(CarouselContext)
 35: 
 36:   if (!context) {
 37:     throw new Error("useCarousel must be used within a <Carousel />")
 38:   }
 39: 
 40:   return context
 41: }
 42: 
 43: const Carousel = React.forwardRef<
 44:   HTMLDivElement,
 45:   React.HTMLAttributes<HTMLDivElement> & CarouselProps
 46: >(
 47:   (
 48:     {
 49:       orientation = "horizontal",
 50:       opts,
 51:       setApi,
 52:       plugins,
 53:       className,
 54:       children,
 55:       ...props
 56:     },
 57:     ref
 58:   ) => {
 59:     const [carouselRef, api] = useEmblaCarousel(
 60:       {
 61:         ...opts,
 62:         axis: orientation === "horizontal" ? "x" : "y",
 63:       },
 64:       plugins
 65:     )
 66:     const [canScrollPrev, setCanScrollPrev] = React.useState(false)
 67:     const [canScrollNext, setCanScrollNext] = React.useState(false)
 68: 
 69:     const onSelect = React.useCallback((api: CarouselApi) => {
 70:       if (!api) {
 71:         return
 72:       }
 73: 
 74:       setCanScrollPrev(api.canScrollPrev())
 75:       setCanScrollNext(api.canScrollNext())
 76:     }, [])
 77: 
 78:     const scrollPrev = React.useCallback(() => {
 79:       api?.scrollPrev()
 80:     }, [api])
 81: 
 82:     const scrollNext = React.useCallback(() => {
 83:       api?.scrollNext()
 84:     }, [api])
 85: 
 86:     const handleKeyDown = React.useCallback(
 87:       (event: React.KeyboardEvent<HTMLDivElement>) => {
 88:         if (event.key === "ArrowLeft") {
 89:           event.preventDefault()
 90:           scrollPrev()
 91:         } else if (event.key === "ArrowRight") {
 92:           event.preventDefault()
 93:           scrollNext()
 94:         }
 95:       },
 96:       [scrollPrev, scrollNext]
 97:     )
 98: 
 99:     React.useEffect(() => {
100:       if (!api || !setApi) {
101:         return
102:       }
103: 
104:       setApi(api)
105:     }, [api, setApi])
106: 
107:     React.useEffect(() => {
108:       if (!api) {
109:         return
110:       }
111: 
112:       onSelect(api)
113:       api.on("reInit", onSelect)
114:       api.on("select", onSelect)
115: 
116:       return () => {
117:         api?.off("select", onSelect)
118:       }
119:     }, [api, onSelect])
120: 
121:     return (
122:       <CarouselContext.Provider
123:         value={{
124:           carouselRef,
125:           api: api,
126:           opts,
127:           orientation:
128:             orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
129:           scrollPrev,
130:           scrollNext,
131:           canScrollPrev,
132:           canScrollNext,
133:         }}
134:       >
135:         <div
136:           ref={ref}
137:           onKeyDownCapture={handleKeyDown}
138:           className={cn("relative", className)}
139:           role="region"
140:           aria-roledescription="carousel"
141:           {...props}
142:         >
143:           {children}
144:         </div>
145:       </CarouselContext.Provider>
146:     )
147:   }
148: )
149: Carousel.displayName = "Carousel"
150: 
151: const CarouselContent = React.forwardRef<
152:   HTMLDivElement,
153:   React.HTMLAttributes<HTMLDivElement>
154: >(({ className, ...props }, ref) => {
155:   const { carouselRef, orientation } = useCarousel()
156: 
157:   return (
158:     <div ref={carouselRef} className="overflow-hidden">
159:       <div
160:         ref={ref}
161:         className={cn(
162:           "flex",
163:           orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
164:           className
165:         )}
166:         {...props}
167:       />
168:     </div>
169:   )
170: })
171: CarouselContent.displayName = "CarouselContent"
172: 
173: const CarouselItem = React.forwardRef<
174:   HTMLDivElement,
175:   React.HTMLAttributes<HTMLDivElement>
176: >(({ className, ...props }, ref) => {
177:   const { orientation } = useCarousel()
178: 
179:   return (
180:     <div
181:       ref={ref}
182:       role="group"
183:       aria-roledescription="slide"
184:       className={cn(
185:         "min-w-0 shrink-0 grow-0 basis-full",
186:         orientation === "horizontal" ? "pl-4" : "pt-4",
187:         className
188:       )}
189:       {...props}
190:     />
191:   )
192: })
193: CarouselItem.displayName = "CarouselItem"
194: 
195: const CarouselPrevious = React.forwardRef<
196:   HTMLButtonElement,
197:   React.ComponentProps<typeof Button>
198: >(({ className, variant = "outline", size = "icon", ...props }, ref) => {
199:   const { orientation, scrollPrev, canScrollPrev } = useCarousel()
200: 
201:   return (
202:     <Button
203:       ref={ref}
204:       variant={variant}
205:       size={size}
206:       className={cn(
207:         "absolute  h-8 w-8 rounded-full",
208:         orientation === "horizontal"
209:           ? "-left-12 top-1/2 -translate-y-1/2"
210:           : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
211:         className
212:       )}
213:       disabled={!canScrollPrev}
214:       onClick={scrollPrev}
215:       {...props}
216:     >
217:       <ArrowLeft className="h-4 w-4" />
218:       <span className="sr-only">Previous slide</span>
219:     </Button>
220:   )
221: })
222: CarouselPrevious.displayName = "CarouselPrevious"
223: 
224: const CarouselNext = React.forwardRef<
225:   HTMLButtonElement,
226:   React.ComponentProps<typeof Button>
227: >(({ className, variant = "outline", size = "icon", ...props }, ref) => {
228:   const { orientation, scrollNext, canScrollNext } = useCarousel()
229: 
230:   return (
231:     <Button
232:       ref={ref}
233:       variant={variant}
234:       size={size}
235:       className={cn(
236:         "absolute h-8 w-8 rounded-full",
237:         orientation === "horizontal"
238:           ? "-right-12 top-1/2 -translate-y-1/2"
239:           : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
240:         className
241:       )}
242:       disabled={!canScrollNext}
243:       onClick={scrollNext}
244:       {...props}
245:     >
246:       <ArrowRight className="h-4 w-4" />
247:       <span className="sr-only">Next slide</span>
248:     </Button>
249:   )
250: })
251: CarouselNext.displayName = "CarouselNext"
252: 
253: export {
254:   type CarouselApi,
255:   Carousel,
256:   CarouselContent,
257:   CarouselItem,
258:   CarouselPrevious,
259:   CarouselNext,
260: }
````

## File: src/components/ui/chart.tsx
````typescript
  1: import * as React from "react"
  2: import * as RechartsPrimitive from "recharts"
  3: 
  4: import { cn } from "@/lib/utils"
  5: 
  6: // Format: { THEME_NAME: CSS_SELECTOR }
  7: const THEMES = { light: "", dark: ".dark" } as const
  8: 
  9: export type ChartConfig = {
 10:   [k in string]: {
 11:     label?: React.ReactNode
 12:     icon?: React.ComponentType
 13:   } & (
 14:     | { color?: string; theme?: never }
 15:     | { color?: never; theme: Record<keyof typeof THEMES, string> }
 16:   )
 17: }
 18: 
 19: type ChartContextProps = {
 20:   config: ChartConfig
 21: }
 22: 
 23: const ChartContext = React.createContext<ChartContextProps | null>(null)
 24: 
 25: function useChart() {
 26:   const context = React.useContext(ChartContext)
 27: 
 28:   if (!context) {
 29:     throw new Error("useChart must be used within a <ChartContainer />")
 30:   }
 31: 
 32:   return context
 33: }
 34: 
 35: const ChartContainer = React.forwardRef<
 36:   HTMLDivElement,
 37:   React.ComponentProps<"div"> & {
 38:     config: ChartConfig
 39:     children: React.ComponentProps<
 40:       typeof RechartsPrimitive.ResponsiveContainer
 41:     >["children"]
 42:   }
 43: >(({ id, className, children, config, ...props }, ref) => {
 44:   const uniqueId = React.useId()
 45:   const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
 46: 
 47:   return (
 48:     <ChartContext.Provider value={{ config }}>
 49:       <div
 50:         data-chart={chartId}
 51:         ref={ref}
 52:         className={cn(
 53:           "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
 54:           className
 55:         )}
 56:         {...props}
 57:       >
 58:         <ChartStyle id={chartId} config={config} />
 59:         <RechartsPrimitive.ResponsiveContainer>
 60:           {children}
 61:         </RechartsPrimitive.ResponsiveContainer>
 62:       </div>
 63:     </ChartContext.Provider>
 64:   )
 65: })
 66: ChartContainer.displayName = "Chart"
 67: 
 68: const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
 69:   const colorConfig = Object.entries(config).filter(
 70:     ([_, config]) => config.theme || config.color
 71:   )
 72: 
 73:   if (!colorConfig.length) {
 74:     return null
 75:   }
 76: 
 77:   return (
 78:     <style
 79:       dangerouslySetInnerHTML={{
 80:         __html: Object.entries(THEMES)
 81:           .map(
 82:             ([theme, prefix]) => `
 83: ${prefix} [data-chart=${id}] {
 84: ${colorConfig
 85:   .map(([key, itemConfig]) => {
 86:     const color =
 87:       itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
 88:       itemConfig.color
 89:     return color ? `  --color-${key}: ${color};` : null
 90:   })
 91:   .join("\n")}
 92: }
 93: `
 94:           )
 95:           .join("\n"),
 96:       }}
 97:     />
 98:   )
 99: }
100: 
101: const ChartTooltip = RechartsPrimitive.Tooltip
102: 
103: const ChartTooltipContent = React.forwardRef<
104:   HTMLDivElement,
105:   React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
106:     React.ComponentProps<"div"> & {
107:       hideLabel?: boolean
108:       hideIndicator?: boolean
109:       indicator?: "line" | "dot" | "dashed"
110:       nameKey?: string
111:       labelKey?: string
112:     }
113: >(
114:   (
115:     {
116:       active,
117:       payload,
118:       className,
119:       indicator = "dot",
120:       hideLabel = false,
121:       hideIndicator = false,
122:       label,
123:       labelFormatter,
124:       labelClassName,
125:       formatter,
126:       color,
127:       nameKey,
128:       labelKey,
129:     },
130:     ref
131:   ) => {
132:     const { config } = useChart()
133: 
134:     const tooltipLabel = React.useMemo(() => {
135:       if (hideLabel || !payload?.length) {
136:         return null
137:       }
138: 
139:       const [item] = payload
140:       const key = `${labelKey || item.dataKey || item.name || "value"}`
141:       const itemConfig = getPayloadConfigFromPayload(config, item, key)
142:       const value =
143:         !labelKey && typeof label === "string"
144:           ? config[label as keyof typeof config]?.label || label
145:           : itemConfig?.label
146: 
147:       if (labelFormatter) {
148:         return (
149:           <div className={cn("font-medium", labelClassName)}>
150:             {labelFormatter(value, payload)}
151:           </div>
152:         )
153:       }
154: 
155:       if (!value) {
156:         return null
157:       }
158: 
159:       return <div className={cn("font-medium", labelClassName)}>{value}</div>
160:     }, [
161:       label,
162:       labelFormatter,
163:       payload,
164:       hideLabel,
165:       labelClassName,
166:       config,
167:       labelKey,
168:     ])
169: 
170:     if (!active || !payload?.length) {
171:       return null
172:     }
173: 
174:     const nestLabel = payload.length === 1 && indicator !== "dot"
175: 
176:     return (
177:       <div
178:         ref={ref}
179:         className={cn(
180:           "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
181:           className
182:         )}
183:       >
184:         {!nestLabel ? tooltipLabel : null}
185:         <div className="grid gap-1.5">
186:           {payload.map((item, index) => {
187:             const key = `${nameKey || item.name || item.dataKey || "value"}`
188:             const itemConfig = getPayloadConfigFromPayload(config, item, key)
189:             const indicatorColor = color || item.payload.fill || item.color
190: 
191:             return (
192:               <div
193:                 key={item.dataKey}
194:                 className={cn(
195:                   "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
196:                   indicator === "dot" && "items-center"
197:                 )}
198:               >
199:                 {formatter && item?.value !== undefined && item.name ? (
200:                   formatter(item.value, item.name, item, index, item.payload)
201:                 ) : (
202:                   <>
203:                     {itemConfig?.icon ? (
204:                       <itemConfig.icon />
205:                     ) : (
206:                       !hideIndicator && (
207:                         <div
208:                           className={cn(
209:                             "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
210:                             {
211:                               "h-2.5 w-2.5": indicator === "dot",
212:                               "w-1": indicator === "line",
213:                               "w-0 border-[1.5px] border-dashed bg-transparent":
214:                                 indicator === "dashed",
215:                               "my-0.5": nestLabel && indicator === "dashed",
216:                             }
217:                           )}
218:                           style={
219:                             {
220:                               "--color-bg": indicatorColor,
221:                               "--color-border": indicatorColor,
222:                             } as React.CSSProperties
223:                           }
224:                         />
225:                       )
226:                     )}
227:                     <div
228:                       className={cn(
229:                         "flex flex-1 justify-between leading-none",
230:                         nestLabel ? "items-end" : "items-center"
231:                       )}
232:                     >
233:                       <div className="grid gap-1.5">
234:                         {nestLabel ? tooltipLabel : null}
235:                         <span className="text-muted-foreground">
236:                           {itemConfig?.label || item.name}
237:                         </span>
238:                       </div>
239:                       {item.value && (
240:                         <span className="font-mono font-medium tabular-nums text-foreground">
241:                           {item.value.toLocaleString()}
242:                         </span>
243:                       )}
244:                     </div>
245:                   </>
246:                 )}
247:               </div>
248:             )
249:           })}
250:         </div>
251:       </div>
252:     )
253:   }
254: )
255: ChartTooltipContent.displayName = "ChartTooltip"
256: 
257: const ChartLegend = RechartsPrimitive.Legend
258: 
259: const ChartLegendContent = React.forwardRef<
260:   HTMLDivElement,
261:   React.ComponentProps<"div"> &
262:     Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
263:       hideIcon?: boolean
264:       nameKey?: string
265:     }
266: >(
267:   (
268:     { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
269:     ref
270:   ) => {
271:     const { config } = useChart()
272: 
273:     if (!payload?.length) {
274:       return null
275:     }
276: 
277:     return (
278:       <div
279:         ref={ref}
280:         className={cn(
281:           "flex items-center justify-center gap-4",
282:           verticalAlign === "top" ? "pb-3" : "pt-3",
283:           className
284:         )}
285:       >
286:         {payload.map((item) => {
287:           const key = `${nameKey || item.dataKey || "value"}`
288:           const itemConfig = getPayloadConfigFromPayload(config, item, key)
289: 
290:           return (
291:             <div
292:               key={item.value}
293:               className={cn(
294:                 "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
295:               )}
296:             >
297:               {itemConfig?.icon && !hideIcon ? (
298:                 <itemConfig.icon />
299:               ) : (
300:                 <div
301:                   className="h-2 w-2 shrink-0 rounded-[2px]"
302:                   style={{
303:                     backgroundColor: item.color,
304:                   }}
305:                 />
306:               )}
307:               {itemConfig?.label}
308:             </div>
309:           )
310:         })}
311:       </div>
312:     )
313:   }
314: )
315: ChartLegendContent.displayName = "ChartLegend"
316: 
317: // Helper to extract item config from a payload.
318: function getPayloadConfigFromPayload(
319:   config: ChartConfig,
320:   payload: unknown,
321:   key: string
322: ) {
323:   if (typeof payload !== "object" || payload === null) {
324:     return undefined
325:   }
326: 
327:   const payloadPayload =
328:     "payload" in payload &&
329:     typeof payload.payload === "object" &&
330:     payload.payload !== null
331:       ? payload.payload
332:       : undefined
333: 
334:   let configLabelKey: string = key
335: 
336:   if (
337:     key in payload &&
338:     typeof payload[key as keyof typeof payload] === "string"
339:   ) {
340:     configLabelKey = payload[key as keyof typeof payload] as string
341:   } else if (
342:     payloadPayload &&
343:     key in payloadPayload &&
344:     typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
345:   ) {
346:     configLabelKey = payloadPayload[
347:       key as keyof typeof payloadPayload
348:     ] as string
349:   }
350: 
351:   return configLabelKey in config
352:     ? config[configLabelKey]
353:     : config[key as keyof typeof config]
354: }
355: 
356: export {
357:   ChartContainer,
358:   ChartTooltip,
359:   ChartTooltipContent,
360:   ChartLegend,
361:   ChartLegendContent,
362:   ChartStyle,
363: }
````

## File: src/components/ui/checkbox.tsx
````typescript
 1: import * as React from "react"
 2: import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
 3: import { Check } from "lucide-react"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const Checkbox = React.forwardRef<
 8:   React.ElementRef<typeof CheckboxPrimitive.Root>,
 9:   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
10: >(({ className, ...props }, ref) => (
11:   <CheckboxPrimitive.Root
12:     ref={ref}
13:     className={cn(
14:       "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
15:       className
16:     )}
17:     {...props}
18:   >
19:     <CheckboxPrimitive.Indicator
20:       className={cn("flex items-center justify-center text-current")}
21:     >
22:       <Check className="h-4 w-4" />
23:     </CheckboxPrimitive.Indicator>
24:   </CheckboxPrimitive.Root>
25: ))
26: Checkbox.displayName = CheckboxPrimitive.Root.displayName
27: 
28: export { Checkbox }
````

## File: src/components/ui/collapsible.tsx
````typescript
1: import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
2: 
3: const Collapsible = CollapsiblePrimitive.Root
4: 
5: const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger
6: 
7: const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent
8: 
9: export { Collapsible, CollapsibleTrigger, CollapsibleContent }
````

## File: src/components/ui/command.tsx
````typescript
  1: import * as React from "react"
  2: import { type DialogProps } from "@radix-ui/react-dialog"
  3: import { Command as CommandPrimitive } from "cmdk"
  4: import { Search } from "lucide-react"
  5: 
  6: import { cn } from "@/lib/utils"
  7: import { Dialog, DialogContent } from "@/components/ui/dialog"
  8: 
  9: const Command = React.forwardRef<
 10:   React.ElementRef<typeof CommandPrimitive>,
 11:   React.ComponentPropsWithoutRef<typeof CommandPrimitive>
 12: >(({ className, ...props }, ref) => (
 13:   <CommandPrimitive
 14:     ref={ref}
 15:     className={cn(
 16:       "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
 17:       className
 18:     )}
 19:     {...props}
 20:   />
 21: ))
 22: Command.displayName = CommandPrimitive.displayName
 23: 
 24: interface CommandDialogProps extends DialogProps {}
 25: 
 26: const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
 27:   return (
 28:     <Dialog {...props}>
 29:       <DialogContent className="overflow-hidden p-0 shadow-lg">
 30:         <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
 31:           {children}
 32:         </Command>
 33:       </DialogContent>
 34:     </Dialog>
 35:   )
 36: }
 37: 
 38: const CommandInput = React.forwardRef<
 39:   React.ElementRef<typeof CommandPrimitive.Input>,
 40:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
 41: >(({ className, ...props }, ref) => (
 42:   <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
 43:     <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
 44:     <CommandPrimitive.Input
 45:       ref={ref}
 46:       className={cn(
 47:         "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
 48:         className
 49:       )}
 50:       {...props}
 51:     />
 52:   </div>
 53: ))
 54: 
 55: CommandInput.displayName = CommandPrimitive.Input.displayName
 56: 
 57: const CommandList = React.forwardRef<
 58:   React.ElementRef<typeof CommandPrimitive.List>,
 59:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
 60: >(({ className, ...props }, ref) => (
 61:   <CommandPrimitive.List
 62:     ref={ref}
 63:     className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
 64:     {...props}
 65:   />
 66: ))
 67: 
 68: CommandList.displayName = CommandPrimitive.List.displayName
 69: 
 70: const CommandEmpty = React.forwardRef<
 71:   React.ElementRef<typeof CommandPrimitive.Empty>,
 72:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
 73: >((props, ref) => (
 74:   <CommandPrimitive.Empty
 75:     ref={ref}
 76:     className="py-6 text-center text-sm"
 77:     {...props}
 78:   />
 79: ))
 80: 
 81: CommandEmpty.displayName = CommandPrimitive.Empty.displayName
 82: 
 83: const CommandGroup = React.forwardRef<
 84:   React.ElementRef<typeof CommandPrimitive.Group>,
 85:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
 86: >(({ className, ...props }, ref) => (
 87:   <CommandPrimitive.Group
 88:     ref={ref}
 89:     className={cn(
 90:       "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
 91:       className
 92:     )}
 93:     {...props}
 94:   />
 95: ))
 96: 
 97: CommandGroup.displayName = CommandPrimitive.Group.displayName
 98: 
 99: const CommandSeparator = React.forwardRef<
100:   React.ElementRef<typeof CommandPrimitive.Separator>,
101:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
102: >(({ className, ...props }, ref) => (
103:   <CommandPrimitive.Separator
104:     ref={ref}
105:     className={cn("-mx-1 h-px bg-border", className)}
106:     {...props}
107:   />
108: ))
109: CommandSeparator.displayName = CommandPrimitive.Separator.displayName
110: 
111: const CommandItem = React.forwardRef<
112:   React.ElementRef<typeof CommandPrimitive.Item>,
113:   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
114: >(({ className, ...props }, ref) => (
115:   <CommandPrimitive.Item
116:     ref={ref}
117:     className={cn(
118:       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
119:       className
120:     )}
121:     {...props}
122:   />
123: ))
124: 
125: CommandItem.displayName = CommandPrimitive.Item.displayName
126: 
127: const CommandShortcut = ({
128:   className,
129:   ...props
130: }: React.HTMLAttributes<HTMLSpanElement>) => {
131:   return (
132:     <span
133:       className={cn(
134:         "ml-auto text-xs tracking-widest text-muted-foreground",
135:         className
136:       )}
137:       {...props}
138:     />
139:   )
140: }
141: CommandShortcut.displayName = "CommandShortcut"
142: 
143: export {
144:   Command,
145:   CommandDialog,
146:   CommandInput,
147:   CommandList,
148:   CommandEmpty,
149:   CommandGroup,
150:   CommandItem,
151:   CommandShortcut,
152:   CommandSeparator,
153: }
````

## File: src/components/ui/context-menu.tsx
````typescript
  1: import * as React from "react"
  2: import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
  3: import { Check, ChevronRight, Circle } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const ContextMenu = ContextMenuPrimitive.Root
  8: 
  9: const ContextMenuTrigger = ContextMenuPrimitive.Trigger
 10: 
 11: const ContextMenuGroup = ContextMenuPrimitive.Group
 12: 
 13: const ContextMenuPortal = ContextMenuPrimitive.Portal
 14: 
 15: const ContextMenuSub = ContextMenuPrimitive.Sub
 16: 
 17: const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
 18: 
 19: const ContextMenuSubTrigger = React.forwardRef<
 20:   React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
 21:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
 22:     inset?: boolean
 23:   }
 24: >(({ className, inset, children, ...props }, ref) => (
 25:   <ContextMenuPrimitive.SubTrigger
 26:     ref={ref}
 27:     className={cn(
 28:       "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
 29:       inset && "pl-8",
 30:       className
 31:     )}
 32:     {...props}
 33:   >
 34:     {children}
 35:     <ChevronRight className="ml-auto h-4 w-4" />
 36:   </ContextMenuPrimitive.SubTrigger>
 37: ))
 38: ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
 39: 
 40: const ContextMenuSubContent = React.forwardRef<
 41:   React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
 42:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
 43: >(({ className, ...props }, ref) => (
 44:   <ContextMenuPrimitive.SubContent
 45:     ref={ref}
 46:     className={cn(
 47:       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 48:       className
 49:     )}
 50:     {...props}
 51:   />
 52: ))
 53: ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName
 54: 
 55: const ContextMenuContent = React.forwardRef<
 56:   React.ElementRef<typeof ContextMenuPrimitive.Content>,
 57:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
 58: >(({ className, ...props }, ref) => (
 59:   <ContextMenuPrimitive.Portal>
 60:     <ContextMenuPrimitive.Content
 61:       ref={ref}
 62:       className={cn(
 63:         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 64:         className
 65:       )}
 66:       {...props}
 67:     />
 68:   </ContextMenuPrimitive.Portal>
 69: ))
 70: ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName
 71: 
 72: const ContextMenuItem = React.forwardRef<
 73:   React.ElementRef<typeof ContextMenuPrimitive.Item>,
 74:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
 75:     inset?: boolean
 76:   }
 77: >(({ className, inset, ...props }, ref) => (
 78:   <ContextMenuPrimitive.Item
 79:     ref={ref}
 80:     className={cn(
 81:       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
 82:       inset && "pl-8",
 83:       className
 84:     )}
 85:     {...props}
 86:   />
 87: ))
 88: ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName
 89: 
 90: const ContextMenuCheckboxItem = React.forwardRef<
 91:   React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
 92:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
 93: >(({ className, children, checked, ...props }, ref) => (
 94:   <ContextMenuPrimitive.CheckboxItem
 95:     ref={ref}
 96:     className={cn(
 97:       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
 98:       className
 99:     )}
100:     checked={checked}
101:     {...props}
102:   >
103:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
104:       <ContextMenuPrimitive.ItemIndicator>
105:         <Check className="h-4 w-4" />
106:       </ContextMenuPrimitive.ItemIndicator>
107:     </span>
108:     {children}
109:   </ContextMenuPrimitive.CheckboxItem>
110: ))
111: ContextMenuCheckboxItem.displayName =
112:   ContextMenuPrimitive.CheckboxItem.displayName
113: 
114: const ContextMenuRadioItem = React.forwardRef<
115:   React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
116:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
117: >(({ className, children, ...props }, ref) => (
118:   <ContextMenuPrimitive.RadioItem
119:     ref={ref}
120:     className={cn(
121:       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
122:       className
123:     )}
124:     {...props}
125:   >
126:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
127:       <ContextMenuPrimitive.ItemIndicator>
128:         <Circle className="h-2 w-2 fill-current" />
129:       </ContextMenuPrimitive.ItemIndicator>
130:     </span>
131:     {children}
132:   </ContextMenuPrimitive.RadioItem>
133: ))
134: ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName
135: 
136: const ContextMenuLabel = React.forwardRef<
137:   React.ElementRef<typeof ContextMenuPrimitive.Label>,
138:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
139:     inset?: boolean
140:   }
141: >(({ className, inset, ...props }, ref) => (
142:   <ContextMenuPrimitive.Label
143:     ref={ref}
144:     className={cn(
145:       "px-2 py-1.5 text-sm font-semibold text-foreground",
146:       inset && "pl-8",
147:       className
148:     )}
149:     {...props}
150:   />
151: ))
152: ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName
153: 
154: const ContextMenuSeparator = React.forwardRef<
155:   React.ElementRef<typeof ContextMenuPrimitive.Separator>,
156:   React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
157: >(({ className, ...props }, ref) => (
158:   <ContextMenuPrimitive.Separator
159:     ref={ref}
160:     className={cn("-mx-1 my-1 h-px bg-border", className)}
161:     {...props}
162:   />
163: ))
164: ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
165: 
166: const ContextMenuShortcut = ({
167:   className,
168:   ...props
169: }: React.HTMLAttributes<HTMLSpanElement>) => {
170:   return (
171:     <span
172:       className={cn(
173:         "ml-auto text-xs tracking-widest text-muted-foreground",
174:         className
175:       )}
176:       {...props}
177:     />
178:   )
179: }
180: ContextMenuShortcut.displayName = "ContextMenuShortcut"
181: 
182: export {
183:   ContextMenu,
184:   ContextMenuTrigger,
185:   ContextMenuContent,
186:   ContextMenuItem,
187:   ContextMenuCheckboxItem,
188:   ContextMenuRadioItem,
189:   ContextMenuLabel,
190:   ContextMenuSeparator,
191:   ContextMenuShortcut,
192:   ContextMenuGroup,
193:   ContextMenuPortal,
194:   ContextMenuSub,
195:   ContextMenuSubContent,
196:   ContextMenuSubTrigger,
197:   ContextMenuRadioGroup,
198: }
````

## File: src/components/ui/dialog.tsx
````typescript
  1: import * as React from "react"
  2: import * as DialogPrimitive from "@radix-ui/react-dialog"
  3: import { X } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const Dialog = DialogPrimitive.Root
  8: 
  9: const DialogTrigger = DialogPrimitive.Trigger
 10: 
 11: const DialogPortal = DialogPrimitive.Portal
 12: 
 13: const DialogClose = DialogPrimitive.Close
 14: 
 15: const DialogOverlay = React.forwardRef<
 16:   React.ElementRef<typeof DialogPrimitive.Overlay>,
 17:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
 18: >(({ className, ...props }, ref) => (
 19:   <DialogPrimitive.Overlay
 20:     ref={ref}
 21:     className={cn(
 22:       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
 23:       className
 24:     )}
 25:     {...props}
 26:   />
 27: ))
 28: DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
 29: 
 30: const DialogContent = React.forwardRef<
 31:   React.ElementRef<typeof DialogPrimitive.Content>,
 32:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
 33: >(({ className, children, ...props }, ref) => (
 34:   <DialogPortal>
 35:     <DialogOverlay />
 36:     <DialogPrimitive.Content
 37:       ref={ref}
 38:       className={cn(
 39:         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
 40:         className
 41:       )}
 42:       {...props}
 43:     >
 44:       {children}
 45:       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
 46:         <X className="h-4 w-4" />
 47:         <span className="sr-only">Close</span>
 48:       </DialogPrimitive.Close>
 49:     </DialogPrimitive.Content>
 50:   </DialogPortal>
 51: ))
 52: DialogContent.displayName = DialogPrimitive.Content.displayName
 53: 
 54: const DialogHeader = ({
 55:   className,
 56:   ...props
 57: }: React.HTMLAttributes<HTMLDivElement>) => (
 58:   <div
 59:     className={cn(
 60:       "flex flex-col space-y-1.5 text-center sm:text-left",
 61:       className
 62:     )}
 63:     {...props}
 64:   />
 65: )
 66: DialogHeader.displayName = "DialogHeader"
 67: 
 68: const DialogFooter = ({
 69:   className,
 70:   ...props
 71: }: React.HTMLAttributes<HTMLDivElement>) => (
 72:   <div
 73:     className={cn(
 74:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 75:       className
 76:     )}
 77:     {...props}
 78:   />
 79: )
 80: DialogFooter.displayName = "DialogFooter"
 81: 
 82: const DialogTitle = React.forwardRef<
 83:   React.ElementRef<typeof DialogPrimitive.Title>,
 84:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
 85: >(({ className, ...props }, ref) => (
 86:   <DialogPrimitive.Title
 87:     ref={ref}
 88:     className={cn(
 89:       "text-lg font-semibold leading-none tracking-tight",
 90:       className
 91:     )}
 92:     {...props}
 93:   />
 94: ))
 95: DialogTitle.displayName = DialogPrimitive.Title.displayName
 96: 
 97: const DialogDescription = React.forwardRef<
 98:   React.ElementRef<typeof DialogPrimitive.Description>,
 99:   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
100: >(({ className, ...props }, ref) => (
101:   <DialogPrimitive.Description
102:     ref={ref}
103:     className={cn("text-sm text-muted-foreground", className)}
104:     {...props}
105:   />
106: ))
107: DialogDescription.displayName = DialogPrimitive.Description.displayName
108: 
109: export {
110:   Dialog,
111:   DialogPortal,
112:   DialogOverlay,
113:   DialogClose,
114:   DialogTrigger,
115:   DialogContent,
116:   DialogHeader,
117:   DialogFooter,
118:   DialogTitle,
119:   DialogDescription,
120: }
````

## File: src/components/ui/drawer.tsx
````typescript
  1: import * as React from "react"
  2: import { Drawer as DrawerPrimitive } from "vaul"
  3: 
  4: import { cn } from "@/lib/utils"
  5: 
  6: const Drawer = ({
  7:   shouldScaleBackground = true,
  8:   ...props
  9: }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
 10:   <DrawerPrimitive.Root
 11:     shouldScaleBackground={shouldScaleBackground}
 12:     {...props}
 13:   />
 14: )
 15: Drawer.displayName = "Drawer"
 16: 
 17: const DrawerTrigger = DrawerPrimitive.Trigger
 18: 
 19: const DrawerPortal = DrawerPrimitive.Portal
 20: 
 21: const DrawerClose = DrawerPrimitive.Close
 22: 
 23: const DrawerOverlay = React.forwardRef<
 24:   React.ElementRef<typeof DrawerPrimitive.Overlay>,
 25:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
 26: >(({ className, ...props }, ref) => (
 27:   <DrawerPrimitive.Overlay
 28:     ref={ref}
 29:     className={cn("fixed inset-0 z-50 bg-black/80", className)}
 30:     {...props}
 31:   />
 32: ))
 33: DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName
 34: 
 35: const DrawerContent = React.forwardRef<
 36:   React.ElementRef<typeof DrawerPrimitive.Content>,
 37:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
 38: >(({ className, children, ...props }, ref) => (
 39:   <DrawerPortal>
 40:     <DrawerOverlay />
 41:     <DrawerPrimitive.Content
 42:       ref={ref}
 43:       className={cn(
 44:         "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
 45:         className
 46:       )}
 47:       {...props}
 48:     >
 49:       <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
 50:       {children}
 51:     </DrawerPrimitive.Content>
 52:   </DrawerPortal>
 53: ))
 54: DrawerContent.displayName = "DrawerContent"
 55: 
 56: const DrawerHeader = ({
 57:   className,
 58:   ...props
 59: }: React.HTMLAttributes<HTMLDivElement>) => (
 60:   <div
 61:     className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
 62:     {...props}
 63:   />
 64: )
 65: DrawerHeader.displayName = "DrawerHeader"
 66: 
 67: const DrawerFooter = ({
 68:   className,
 69:   ...props
 70: }: React.HTMLAttributes<HTMLDivElement>) => (
 71:   <div
 72:     className={cn("mt-auto flex flex-col gap-2 p-4", className)}
 73:     {...props}
 74:   />
 75: )
 76: DrawerFooter.displayName = "DrawerFooter"
 77: 
 78: const DrawerTitle = React.forwardRef<
 79:   React.ElementRef<typeof DrawerPrimitive.Title>,
 80:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
 81: >(({ className, ...props }, ref) => (
 82:   <DrawerPrimitive.Title
 83:     ref={ref}
 84:     className={cn(
 85:       "text-lg font-semibold leading-none tracking-tight",
 86:       className
 87:     )}
 88:     {...props}
 89:   />
 90: ))
 91: DrawerTitle.displayName = DrawerPrimitive.Title.displayName
 92: 
 93: const DrawerDescription = React.forwardRef<
 94:   React.ElementRef<typeof DrawerPrimitive.Description>,
 95:   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
 96: >(({ className, ...props }, ref) => (
 97:   <DrawerPrimitive.Description
 98:     ref={ref}
 99:     className={cn("text-sm text-muted-foreground", className)}
100:     {...props}
101:   />
102: ))
103: DrawerDescription.displayName = DrawerPrimitive.Description.displayName
104: 
105: export {
106:   Drawer,
107:   DrawerPortal,
108:   DrawerOverlay,
109:   DrawerTrigger,
110:   DrawerClose,
111:   DrawerContent,
112:   DrawerHeader,
113:   DrawerFooter,
114:   DrawerTitle,
115:   DrawerDescription,
116: }
````

## File: src/components/ui/dropdown-menu.tsx
````typescript
  1: import * as React from "react"
  2: import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
  3: import { Check, ChevronRight, Circle } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const DropdownMenu = DropdownMenuPrimitive.Root
  8: 
  9: const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
 10: 
 11: const DropdownMenuGroup = DropdownMenuPrimitive.Group
 12: 
 13: const DropdownMenuPortal = DropdownMenuPrimitive.Portal
 14: 
 15: const DropdownMenuSub = DropdownMenuPrimitive.Sub
 16: 
 17: const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
 18: 
 19: const DropdownMenuSubTrigger = React.forwardRef<
 20:   React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
 21:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
 22:     inset?: boolean
 23:   }
 24: >(({ className, inset, children, ...props }, ref) => (
 25:   <DropdownMenuPrimitive.SubTrigger
 26:     ref={ref}
 27:     className={cn(
 28:       "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
 29:       inset && "pl-8",
 30:       className
 31:     )}
 32:     {...props}
 33:   >
 34:     {children}
 35:     <ChevronRight className="ml-auto h-4 w-4" />
 36:   </DropdownMenuPrimitive.SubTrigger>
 37: ))
 38: DropdownMenuSubTrigger.displayName =
 39:   DropdownMenuPrimitive.SubTrigger.displayName
 40: 
 41: const DropdownMenuSubContent = React.forwardRef<
 42:   React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
 43:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
 44: >(({ className, ...props }, ref) => (
 45:   <DropdownMenuPrimitive.SubContent
 46:     ref={ref}
 47:     className={cn(
 48:       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 49:       className
 50:     )}
 51:     {...props}
 52:   />
 53: ))
 54: DropdownMenuSubContent.displayName =
 55:   DropdownMenuPrimitive.SubContent.displayName
 56: 
 57: const DropdownMenuContent = React.forwardRef<
 58:   React.ElementRef<typeof DropdownMenuPrimitive.Content>,
 59:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
 60: >(({ className, sideOffset = 4, ...props }, ref) => (
 61:   <DropdownMenuPrimitive.Portal>
 62:     <DropdownMenuPrimitive.Content
 63:       ref={ref}
 64:       sideOffset={sideOffset}
 65:       className={cn(
 66:         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 67:         className
 68:       )}
 69:       {...props}
 70:     />
 71:   </DropdownMenuPrimitive.Portal>
 72: ))
 73: DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName
 74: 
 75: const DropdownMenuItem = React.forwardRef<
 76:   React.ElementRef<typeof DropdownMenuPrimitive.Item>,
 77:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
 78:     inset?: boolean
 79:   }
 80: >(({ className, inset, ...props }, ref) => (
 81:   <DropdownMenuPrimitive.Item
 82:     ref={ref}
 83:     className={cn(
 84:       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
 85:       inset && "pl-8",
 86:       className
 87:     )}
 88:     {...props}
 89:   />
 90: ))
 91: DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
 92: 
 93: const DropdownMenuCheckboxItem = React.forwardRef<
 94:   React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
 95:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
 96: >(({ className, children, checked, ...props }, ref) => (
 97:   <DropdownMenuPrimitive.CheckboxItem
 98:     ref={ref}
 99:     className={cn(
100:       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
101:       className
102:     )}
103:     checked={checked}
104:     {...props}
105:   >
106:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
107:       <DropdownMenuPrimitive.ItemIndicator>
108:         <Check className="h-4 w-4" />
109:       </DropdownMenuPrimitive.ItemIndicator>
110:     </span>
111:     {children}
112:   </DropdownMenuPrimitive.CheckboxItem>
113: ))
114: DropdownMenuCheckboxItem.displayName =
115:   DropdownMenuPrimitive.CheckboxItem.displayName
116: 
117: const DropdownMenuRadioItem = React.forwardRef<
118:   React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
119:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
120: >(({ className, children, ...props }, ref) => (
121:   <DropdownMenuPrimitive.RadioItem
122:     ref={ref}
123:     className={cn(
124:       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
125:       className
126:     )}
127:     {...props}
128:   >
129:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
130:       <DropdownMenuPrimitive.ItemIndicator>
131:         <Circle className="h-2 w-2 fill-current" />
132:       </DropdownMenuPrimitive.ItemIndicator>
133:     </span>
134:     {children}
135:   </DropdownMenuPrimitive.RadioItem>
136: ))
137: DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName
138: 
139: const DropdownMenuLabel = React.forwardRef<
140:   React.ElementRef<typeof DropdownMenuPrimitive.Label>,
141:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
142:     inset?: boolean
143:   }
144: >(({ className, inset, ...props }, ref) => (
145:   <DropdownMenuPrimitive.Label
146:     ref={ref}
147:     className={cn(
148:       "px-2 py-1.5 text-sm font-semibold",
149:       inset && "pl-8",
150:       className
151:     )}
152:     {...props}
153:   />
154: ))
155: DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
156: 
157: const DropdownMenuSeparator = React.forwardRef<
158:   React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
159:   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
160: >(({ className, ...props }, ref) => (
161:   <DropdownMenuPrimitive.Separator
162:     ref={ref}
163:     className={cn("-mx-1 my-1 h-px bg-muted", className)}
164:     {...props}
165:   />
166: ))
167: DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName
168: 
169: const DropdownMenuShortcut = ({
170:   className,
171:   ...props
172: }: React.HTMLAttributes<HTMLSpanElement>) => {
173:   return (
174:     <span
175:       className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
176:       {...props}
177:     />
178:   )
179: }
180: DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
181: 
182: export {
183:   DropdownMenu,
184:   DropdownMenuTrigger,
185:   DropdownMenuContent,
186:   DropdownMenuItem,
187:   DropdownMenuCheckboxItem,
188:   DropdownMenuRadioItem,
189:   DropdownMenuLabel,
190:   DropdownMenuSeparator,
191:   DropdownMenuShortcut,
192:   DropdownMenuGroup,
193:   DropdownMenuPortal,
194:   DropdownMenuSub,
195:   DropdownMenuSubContent,
196:   DropdownMenuSubTrigger,
197:   DropdownMenuRadioGroup,
198: }
````

## File: src/components/ui/form.tsx
````typescript
  1: import * as React from "react"
  2: import * as LabelPrimitive from "@radix-ui/react-label"
  3: import { Slot } from "@radix-ui/react-slot"
  4: import {
  5:   Controller,
  6:   ControllerProps,
  7:   FieldPath,
  8:   FieldValues,
  9:   FormProvider,
 10:   useFormContext,
 11: } from "react-hook-form"
 12: 
 13: import { cn } from "@/lib/utils"
 14: import { Label } from "@/components/ui/label"
 15: 
 16: const Form = FormProvider
 17: 
 18: type FormFieldContextValue<
 19:   TFieldValues extends FieldValues = FieldValues,
 20:   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
 21: > = {
 22:   name: TName
 23: }
 24: 
 25: const FormFieldContext = React.createContext<FormFieldContextValue>(
 26:   {} as FormFieldContextValue
 27: )
 28: 
 29: const FormField = <
 30:   TFieldValues extends FieldValues = FieldValues,
 31:   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
 32: >({
 33:   ...props
 34: }: ControllerProps<TFieldValues, TName>) => {
 35:   return (
 36:     <FormFieldContext.Provider value={{ name: props.name }}>
 37:       <Controller {...props} />
 38:     </FormFieldContext.Provider>
 39:   )
 40: }
 41: 
 42: const useFormField = () => {
 43:   const fieldContext = React.useContext(FormFieldContext)
 44:   const itemContext = React.useContext(FormItemContext)
 45:   const { getFieldState, formState } = useFormContext()
 46: 
 47:   const fieldState = getFieldState(fieldContext.name, formState)
 48: 
 49:   if (!fieldContext) {
 50:     throw new Error("useFormField should be used within <FormField>")
 51:   }
 52: 
 53:   const { id } = itemContext
 54: 
 55:   return {
 56:     id,
 57:     name: fieldContext.name,
 58:     formItemId: `${id}-form-item`,
 59:     formDescriptionId: `${id}-form-item-description`,
 60:     formMessageId: `${id}-form-item-message`,
 61:     ...fieldState,
 62:   }
 63: }
 64: 
 65: type FormItemContextValue = {
 66:   id: string
 67: }
 68: 
 69: const FormItemContext = React.createContext<FormItemContextValue>(
 70:   {} as FormItemContextValue
 71: )
 72: 
 73: const FormItem = React.forwardRef<
 74:   HTMLDivElement,
 75:   React.HTMLAttributes<HTMLDivElement>
 76: >(({ className, ...props }, ref) => {
 77:   const id = React.useId()
 78: 
 79:   return (
 80:     <FormItemContext.Provider value={{ id }}>
 81:       <div ref={ref} className={cn("space-y-2", className)} {...props} />
 82:     </FormItemContext.Provider>
 83:   )
 84: })
 85: FormItem.displayName = "FormItem"
 86: 
 87: const FormLabel = React.forwardRef<
 88:   React.ElementRef<typeof LabelPrimitive.Root>,
 89:   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
 90: >(({ className, ...props }, ref) => {
 91:   const { error, formItemId } = useFormField()
 92: 
 93:   return (
 94:     <Label
 95:       ref={ref}
 96:       className={cn(error && "text-destructive", className)}
 97:       htmlFor={formItemId}
 98:       {...props}
 99:     />
100:   )
101: })
102: FormLabel.displayName = "FormLabel"
103: 
104: const FormControl = React.forwardRef<
105:   React.ElementRef<typeof Slot>,
106:   React.ComponentPropsWithoutRef<typeof Slot>
107: >(({ ...props }, ref) => {
108:   const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
109: 
110:   return (
111:     <Slot
112:       ref={ref}
113:       id={formItemId}
114:       aria-describedby={
115:         !error
116:           ? `${formDescriptionId}`
117:           : `${formDescriptionId} ${formMessageId}`
118:       }
119:       aria-invalid={!!error}
120:       {...props}
121:     />
122:   )
123: })
124: FormControl.displayName = "FormControl"
125: 
126: const FormDescription = React.forwardRef<
127:   HTMLParagraphElement,
128:   React.HTMLAttributes<HTMLParagraphElement>
129: >(({ className, ...props }, ref) => {
130:   const { formDescriptionId } = useFormField()
131: 
132:   return (
133:     <p
134:       ref={ref}
135:       id={formDescriptionId}
136:       className={cn("text-sm text-muted-foreground", className)}
137:       {...props}
138:     />
139:   )
140: })
141: FormDescription.displayName = "FormDescription"
142: 
143: const FormMessage = React.forwardRef<
144:   HTMLParagraphElement,
145:   React.HTMLAttributes<HTMLParagraphElement>
146: >(({ className, children, ...props }, ref) => {
147:   const { error, formMessageId } = useFormField()
148:   const body = error ? String(error?.message) : children
149: 
150:   if (!body) {
151:     return null
152:   }
153: 
154:   return (
155:     <p
156:       ref={ref}
157:       id={formMessageId}
158:       className={cn("text-sm font-medium text-destructive", className)}
159:       {...props}
160:     >
161:       {body}
162:     </p>
163:   )
164: })
165: FormMessage.displayName = "FormMessage"
166: 
167: export {
168:   useFormField,
169:   Form,
170:   FormItem,
171:   FormLabel,
172:   FormControl,
173:   FormDescription,
174:   FormMessage,
175:   FormField,
176: }
````

## File: src/components/ui/hover-card.tsx
````typescript
 1: import * as React from "react"
 2: import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const HoverCard = HoverCardPrimitive.Root
 7: 
 8: const HoverCardTrigger = HoverCardPrimitive.Trigger
 9: 
10: const HoverCardContent = React.forwardRef<
11:   React.ElementRef<typeof HoverCardPrimitive.Content>,
12:   React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
13: >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
14:   <HoverCardPrimitive.Content
15:     ref={ref}
16:     align={align}
17:     sideOffset={sideOffset}
18:     className={cn(
19:       "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
20:       className
21:     )}
22:     {...props}
23:   />
24: ))
25: HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
26: 
27: export { HoverCard, HoverCardTrigger, HoverCardContent }
````

## File: src/components/ui/input-otp.tsx
````typescript
 1: import * as React from "react"
 2: import { OTPInput, OTPInputContext } from "input-otp"
 3: import { Dot } from "lucide-react"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const InputOTP = React.forwardRef<
 8:   React.ElementRef<typeof OTPInput>,
 9:   React.ComponentPropsWithoutRef<typeof OTPInput>
10: >(({ className, containerClassName, ...props }, ref) => (
11:   <OTPInput
12:     ref={ref}
13:     containerClassName={cn(
14:       "flex items-center gap-2 has-[:disabled]:opacity-50",
15:       containerClassName
16:     )}
17:     className={cn("disabled:cursor-not-allowed", className)}
18:     {...props}
19:   />
20: ))
21: InputOTP.displayName = "InputOTP"
22: 
23: const InputOTPGroup = React.forwardRef<
24:   React.ElementRef<"div">,
25:   React.ComponentPropsWithoutRef<"div">
26: >(({ className, ...props }, ref) => (
27:   <div ref={ref} className={cn("flex items-center", className)} {...props} />
28: ))
29: InputOTPGroup.displayName = "InputOTPGroup"
30: 
31: const InputOTPSlot = React.forwardRef<
32:   React.ElementRef<"div">,
33:   React.ComponentPropsWithoutRef<"div"> & { index: number }
34: >(({ index, className, ...props }, ref) => {
35:   const inputOTPContext = React.useContext(OTPInputContext)
36:   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
37: 
38:   return (
39:     <div
40:       ref={ref}
41:       className={cn(
42:         "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
43:         isActive && "z-10 ring-2 ring-ring ring-offset-background",
44:         className
45:       )}
46:       {...props}
47:     >
48:       {char}
49:       {hasFakeCaret && (
50:         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
51:           <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
52:         </div>
53:       )}
54:     </div>
55:   )
56: })
57: InputOTPSlot.displayName = "InputOTPSlot"
58: 
59: const InputOTPSeparator = React.forwardRef<
60:   React.ElementRef<"div">,
61:   React.ComponentPropsWithoutRef<"div">
62: >(({ ...props }, ref) => (
63:   <div ref={ref} role="separator" {...props}>
64:     <Dot />
65:   </div>
66: ))
67: InputOTPSeparator.displayName = "InputOTPSeparator"
68: 
69: export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
````

## File: src/components/ui/input.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
 6:   ({ className, type, ...props }, ref) => {
 7:     return (
 8:       <input
 9:         type={type}
10:         className={cn(
11:           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
12:           className
13:         )}
14:         ref={ref}
15:         {...props}
16:       />
17:     )
18:   }
19: )
20: Input.displayName = "Input"
21: 
22: export { Input }
````

## File: src/components/ui/label.tsx
````typescript
 1: import * as React from "react"
 2: import * as LabelPrimitive from "@radix-ui/react-label"
 3: import { cva, type VariantProps } from "class-variance-authority"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const labelVariants = cva(
 8:   "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
 9: )
10: 
11: const Label = React.forwardRef<
12:   React.ElementRef<typeof LabelPrimitive.Root>,
13:   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
14:     VariantProps<typeof labelVariants>
15: >(({ className, ...props }, ref) => (
16:   <LabelPrimitive.Root
17:     ref={ref}
18:     className={cn(labelVariants(), className)}
19:     {...props}
20:   />
21: ))
22: Label.displayName = LabelPrimitive.Root.displayName
23: 
24: export { Label }
````

## File: src/components/ui/menubar.tsx
````typescript
  1: import * as React from "react"
  2: import * as MenubarPrimitive from "@radix-ui/react-menubar"
  3: import { Check, ChevronRight, Circle } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const MenubarMenu = MenubarPrimitive.Menu
  8: 
  9: const MenubarGroup = MenubarPrimitive.Group
 10: 
 11: const MenubarPortal = MenubarPrimitive.Portal
 12: 
 13: const MenubarSub = MenubarPrimitive.Sub
 14: 
 15: const MenubarRadioGroup = MenubarPrimitive.RadioGroup
 16: 
 17: const Menubar = React.forwardRef<
 18:   React.ElementRef<typeof MenubarPrimitive.Root>,
 19:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
 20: >(({ className, ...props }, ref) => (
 21:   <MenubarPrimitive.Root
 22:     ref={ref}
 23:     className={cn(
 24:       "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
 25:       className
 26:     )}
 27:     {...props}
 28:   />
 29: ))
 30: Menubar.displayName = MenubarPrimitive.Root.displayName
 31: 
 32: const MenubarTrigger = React.forwardRef<
 33:   React.ElementRef<typeof MenubarPrimitive.Trigger>,
 34:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
 35: >(({ className, ...props }, ref) => (
 36:   <MenubarPrimitive.Trigger
 37:     ref={ref}
 38:     className={cn(
 39:       "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
 40:       className
 41:     )}
 42:     {...props}
 43:   />
 44: ))
 45: MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
 46: 
 47: const MenubarSubTrigger = React.forwardRef<
 48:   React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
 49:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
 50:     inset?: boolean
 51:   }
 52: >(({ className, inset, children, ...props }, ref) => (
 53:   <MenubarPrimitive.SubTrigger
 54:     ref={ref}
 55:     className={cn(
 56:       "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
 57:       inset && "pl-8",
 58:       className
 59:     )}
 60:     {...props}
 61:   >
 62:     {children}
 63:     <ChevronRight className="ml-auto h-4 w-4" />
 64:   </MenubarPrimitive.SubTrigger>
 65: ))
 66: MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
 67: 
 68: const MenubarSubContent = React.forwardRef<
 69:   React.ElementRef<typeof MenubarPrimitive.SubContent>,
 70:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
 71: >(({ className, ...props }, ref) => (
 72:   <MenubarPrimitive.SubContent
 73:     ref={ref}
 74:     className={cn(
 75:       "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 76:       className
 77:     )}
 78:     {...props}
 79:   />
 80: ))
 81: MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
 82: 
 83: const MenubarContent = React.forwardRef<
 84:   React.ElementRef<typeof MenubarPrimitive.Content>,
 85:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
 86: >(
 87:   (
 88:     { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
 89:     ref
 90:   ) => (
 91:     <MenubarPrimitive.Portal>
 92:       <MenubarPrimitive.Content
 93:         ref={ref}
 94:         align={align}
 95:         alignOffset={alignOffset}
 96:         sideOffset={sideOffset}
 97:         className={cn(
 98:           "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 99:           className
100:         )}
101:         {...props}
102:       />
103:     </MenubarPrimitive.Portal>
104:   )
105: )
106: MenubarContent.displayName = MenubarPrimitive.Content.displayName
107: 
108: const MenubarItem = React.forwardRef<
109:   React.ElementRef<typeof MenubarPrimitive.Item>,
110:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
111:     inset?: boolean
112:   }
113: >(({ className, inset, ...props }, ref) => (
114:   <MenubarPrimitive.Item
115:     ref={ref}
116:     className={cn(
117:       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
118:       inset && "pl-8",
119:       className
120:     )}
121:     {...props}
122:   />
123: ))
124: MenubarItem.displayName = MenubarPrimitive.Item.displayName
125: 
126: const MenubarCheckboxItem = React.forwardRef<
127:   React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
128:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
129: >(({ className, children, checked, ...props }, ref) => (
130:   <MenubarPrimitive.CheckboxItem
131:     ref={ref}
132:     className={cn(
133:       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
134:       className
135:     )}
136:     checked={checked}
137:     {...props}
138:   >
139:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
140:       <MenubarPrimitive.ItemIndicator>
141:         <Check className="h-4 w-4" />
142:       </MenubarPrimitive.ItemIndicator>
143:     </span>
144:     {children}
145:   </MenubarPrimitive.CheckboxItem>
146: ))
147: MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName
148: 
149: const MenubarRadioItem = React.forwardRef<
150:   React.ElementRef<typeof MenubarPrimitive.RadioItem>,
151:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
152: >(({ className, children, ...props }, ref) => (
153:   <MenubarPrimitive.RadioItem
154:     ref={ref}
155:     className={cn(
156:       "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
157:       className
158:     )}
159:     {...props}
160:   >
161:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
162:       <MenubarPrimitive.ItemIndicator>
163:         <Circle className="h-2 w-2 fill-current" />
164:       </MenubarPrimitive.ItemIndicator>
165:     </span>
166:     {children}
167:   </MenubarPrimitive.RadioItem>
168: ))
169: MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName
170: 
171: const MenubarLabel = React.forwardRef<
172:   React.ElementRef<typeof MenubarPrimitive.Label>,
173:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
174:     inset?: boolean
175:   }
176: >(({ className, inset, ...props }, ref) => (
177:   <MenubarPrimitive.Label
178:     ref={ref}
179:     className={cn(
180:       "px-2 py-1.5 text-sm font-semibold",
181:       inset && "pl-8",
182:       className
183:     )}
184:     {...props}
185:   />
186: ))
187: MenubarLabel.displayName = MenubarPrimitive.Label.displayName
188: 
189: const MenubarSeparator = React.forwardRef<
190:   React.ElementRef<typeof MenubarPrimitive.Separator>,
191:   React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
192: >(({ className, ...props }, ref) => (
193:   <MenubarPrimitive.Separator
194:     ref={ref}
195:     className={cn("-mx-1 my-1 h-px bg-muted", className)}
196:     {...props}
197:   />
198: ))
199: MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName
200: 
201: const MenubarShortcut = ({
202:   className,
203:   ...props
204: }: React.HTMLAttributes<HTMLSpanElement>) => {
205:   return (
206:     <span
207:       className={cn(
208:         "ml-auto text-xs tracking-widest text-muted-foreground",
209:         className
210:       )}
211:       {...props}
212:     />
213:   )
214: }
215: MenubarShortcut.displayname = "MenubarShortcut"
216: 
217: export {
218:   Menubar,
219:   MenubarMenu,
220:   MenubarTrigger,
221:   MenubarContent,
222:   MenubarItem,
223:   MenubarSeparator,
224:   MenubarLabel,
225:   MenubarCheckboxItem,
226:   MenubarRadioGroup,
227:   MenubarRadioItem,
228:   MenubarPortal,
229:   MenubarSubContent,
230:   MenubarSubTrigger,
231:   MenubarGroup,
232:   MenubarSub,
233:   MenubarShortcut,
234: }
````

## File: src/components/ui/navigation-menu.tsx
````typescript
  1: import * as React from "react"
  2: import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
  3: import { cva } from "class-variance-authority"
  4: import { ChevronDown } from "lucide-react"
  5: 
  6: import { cn } from "@/lib/utils"
  7: 
  8: const NavigationMenu = React.forwardRef<
  9:   React.ElementRef<typeof NavigationMenuPrimitive.Root>,
 10:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
 11: >(({ className, children, ...props }, ref) => (
 12:   <NavigationMenuPrimitive.Root
 13:     ref={ref}
 14:     className={cn(
 15:       "relative z-10 flex max-w-max flex-1 items-center justify-center",
 16:       className
 17:     )}
 18:     {...props}
 19:   >
 20:     {children}
 21:     <NavigationMenuViewport />
 22:   </NavigationMenuPrimitive.Root>
 23: ))
 24: NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
 25: 
 26: const NavigationMenuList = React.forwardRef<
 27:   React.ElementRef<typeof NavigationMenuPrimitive.List>,
 28:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
 29: >(({ className, ...props }, ref) => (
 30:   <NavigationMenuPrimitive.List
 31:     ref={ref}
 32:     className={cn(
 33:       "group flex flex-1 list-none items-center justify-center space-x-1",
 34:       className
 35:     )}
 36:     {...props}
 37:   />
 38: ))
 39: NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName
 40: 
 41: const NavigationMenuItem = NavigationMenuPrimitive.Item
 42: 
 43: const navigationMenuTriggerStyle = cva(
 44:   "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
 45: )
 46: 
 47: const NavigationMenuTrigger = React.forwardRef<
 48:   React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
 49:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
 50: >(({ className, children, ...props }, ref) => (
 51:   <NavigationMenuPrimitive.Trigger
 52:     ref={ref}
 53:     className={cn(navigationMenuTriggerStyle(), "group", className)}
 54:     {...props}
 55:   >
 56:     {children}{" "}
 57:     <ChevronDown
 58:       className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
 59:       aria-hidden="true"
 60:     />
 61:   </NavigationMenuPrimitive.Trigger>
 62: ))
 63: NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
 64: 
 65: const NavigationMenuContent = React.forwardRef<
 66:   React.ElementRef<typeof NavigationMenuPrimitive.Content>,
 67:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
 68: >(({ className, ...props }, ref) => (
 69:   <NavigationMenuPrimitive.Content
 70:     ref={ref}
 71:     className={cn(
 72:       "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
 73:       className
 74:     )}
 75:     {...props}
 76:   />
 77: ))
 78: NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName
 79: 
 80: const NavigationMenuLink = NavigationMenuPrimitive.Link
 81: 
 82: const NavigationMenuViewport = React.forwardRef<
 83:   React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
 84:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
 85: >(({ className, ...props }, ref) => (
 86:   <div className={cn("absolute left-0 top-full flex justify-center")}>
 87:     <NavigationMenuPrimitive.Viewport
 88:       className={cn(
 89:         "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
 90:         className
 91:       )}
 92:       ref={ref}
 93:       {...props}
 94:     />
 95:   </div>
 96: ))
 97: NavigationMenuViewport.displayName =
 98:   NavigationMenuPrimitive.Viewport.displayName
 99: 
100: const NavigationMenuIndicator = React.forwardRef<
101:   React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
102:   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
103: >(({ className, ...props }, ref) => (
104:   <NavigationMenuPrimitive.Indicator
105:     ref={ref}
106:     className={cn(
107:       "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
108:       className
109:     )}
110:     {...props}
111:   >
112:     <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
113:   </NavigationMenuPrimitive.Indicator>
114: ))
115: NavigationMenuIndicator.displayName =
116:   NavigationMenuPrimitive.Indicator.displayName
117: 
118: export {
119:   navigationMenuTriggerStyle,
120:   NavigationMenu,
121:   NavigationMenuList,
122:   NavigationMenuItem,
123:   NavigationMenuContent,
124:   NavigationMenuTrigger,
125:   NavigationMenuLink,
126:   NavigationMenuIndicator,
127:   NavigationMenuViewport,
128: }
````

## File: src/components/ui/pagination.tsx
````typescript
  1: import * as React from "react"
  2: import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
  3: 
  4: import { cn } from "@/lib/utils"
  5: import { ButtonProps, buttonVariants } from "@/components/ui/button"
  6: 
  7: const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  8:   <nav
  9:     role="navigation"
 10:     aria-label="pagination"
 11:     className={cn("mx-auto flex w-full justify-center", className)}
 12:     {...props}
 13:   />
 14: )
 15: Pagination.displayName = "Pagination"
 16: 
 17: const PaginationContent = React.forwardRef<
 18:   HTMLUListElement,
 19:   React.ComponentProps<"ul">
 20: >(({ className, ...props }, ref) => (
 21:   <ul
 22:     ref={ref}
 23:     className={cn("flex flex-row items-center gap-1", className)}
 24:     {...props}
 25:   />
 26: ))
 27: PaginationContent.displayName = "PaginationContent"
 28: 
 29: const PaginationItem = React.forwardRef<
 30:   HTMLLIElement,
 31:   React.ComponentProps<"li">
 32: >(({ className, ...props }, ref) => (
 33:   <li ref={ref} className={cn("", className)} {...props} />
 34: ))
 35: PaginationItem.displayName = "PaginationItem"
 36: 
 37: type PaginationLinkProps = {
 38:   isActive?: boolean
 39: } & Pick<ButtonProps, "size"> &
 40:   React.ComponentProps<"a">
 41: 
 42: const PaginationLink = ({
 43:   className,
 44:   isActive,
 45:   size = "icon",
 46:   ...props
 47: }: PaginationLinkProps) => (
 48:   <a
 49:     aria-current={isActive ? "page" : undefined}
 50:     className={cn(
 51:       buttonVariants({
 52:         variant: isActive ? "outline" : "ghost",
 53:         size,
 54:       }),
 55:       className
 56:     )}
 57:     {...props}
 58:   />
 59: )
 60: PaginationLink.displayName = "PaginationLink"
 61: 
 62: const PaginationPrevious = ({
 63:   className,
 64:   ...props
 65: }: React.ComponentProps<typeof PaginationLink>) => (
 66:   <PaginationLink
 67:     aria-label="Go to previous page"
 68:     size="default"
 69:     className={cn("gap-1 pl-2.5", className)}
 70:     {...props}
 71:   >
 72:     <ChevronLeft className="h-4 w-4" />
 73:     <span>Previous</span>
 74:   </PaginationLink>
 75: )
 76: PaginationPrevious.displayName = "PaginationPrevious"
 77: 
 78: const PaginationNext = ({
 79:   className,
 80:   ...props
 81: }: React.ComponentProps<typeof PaginationLink>) => (
 82:   <PaginationLink
 83:     aria-label="Go to next page"
 84:     size="default"
 85:     className={cn("gap-1 pr-2.5", className)}
 86:     {...props}
 87:   >
 88:     <span>Next</span>
 89:     <ChevronRight className="h-4 w-4" />
 90:   </PaginationLink>
 91: )
 92: PaginationNext.displayName = "PaginationNext"
 93: 
 94: const PaginationEllipsis = ({
 95:   className,
 96:   ...props
 97: }: React.ComponentProps<"span">) => (
 98:   <span
 99:     aria-hidden
100:     className={cn("flex h-9 w-9 items-center justify-center", className)}
101:     {...props}
102:   >
103:     <MoreHorizontal className="h-4 w-4" />
104:     <span className="sr-only">More pages</span>
105:   </span>
106: )
107: PaginationEllipsis.displayName = "PaginationEllipsis"
108: 
109: export {
110:   Pagination,
111:   PaginationContent,
112:   PaginationEllipsis,
113:   PaginationItem,
114:   PaginationLink,
115:   PaginationNext,
116:   PaginationPrevious,
117: }
````

## File: src/components/ui/popover.tsx
````typescript
 1: import * as React from "react"
 2: import * as PopoverPrimitive from "@radix-ui/react-popover"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Popover = PopoverPrimitive.Root
 7: 
 8: const PopoverTrigger = PopoverPrimitive.Trigger
 9: 
10: const PopoverContent = React.forwardRef<
11:   React.ElementRef<typeof PopoverPrimitive.Content>,
12:   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
13: >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
14:   <PopoverPrimitive.Portal>
15:     <PopoverPrimitive.Content
16:       ref={ref}
17:       align={align}
18:       sideOffset={sideOffset}
19:       className={cn(
20:         "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
21:         className
22:       )}
23:       {...props}
24:     />
25:   </PopoverPrimitive.Portal>
26: ))
27: PopoverContent.displayName = PopoverPrimitive.Content.displayName
28: 
29: export { Popover, PopoverTrigger, PopoverContent }
````

## File: src/components/ui/progress.tsx
````typescript
 1: import * as React from "react"
 2: import * as ProgressPrimitive from "@radix-ui/react-progress"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Progress = React.forwardRef<
 7:   React.ElementRef<typeof ProgressPrimitive.Root>,
 8:   React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
 9: >(({ className, value, ...props }, ref) => (
10:   <ProgressPrimitive.Root
11:     ref={ref}
12:     className={cn(
13:       "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
14:       className
15:     )}
16:     {...props}
17:   >
18:     <ProgressPrimitive.Indicator
19:       className="h-full w-full flex-1 bg-primary transition-all"
20:       style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
21:     />
22:   </ProgressPrimitive.Root>
23: ))
24: Progress.displayName = ProgressPrimitive.Root.displayName
25: 
26: export { Progress }
````

## File: src/components/ui/radio-group.tsx
````typescript
 1: import * as React from "react"
 2: import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
 3: import { Circle } from "lucide-react"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const RadioGroup = React.forwardRef<
 8:   React.ElementRef<typeof RadioGroupPrimitive.Root>,
 9:   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
10: >(({ className, ...props }, ref) => {
11:   return (
12:     <RadioGroupPrimitive.Root
13:       className={cn("grid gap-2", className)}
14:       {...props}
15:       ref={ref}
16:     />
17:   )
18: })
19: RadioGroup.displayName = RadioGroupPrimitive.Root.displayName
20: 
21: const RadioGroupItem = React.forwardRef<
22:   React.ElementRef<typeof RadioGroupPrimitive.Item>,
23:   React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
24: >(({ className, ...props }, ref) => {
25:   return (
26:     <RadioGroupPrimitive.Item
27:       ref={ref}
28:       className={cn(
29:         "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
30:         className
31:       )}
32:       {...props}
33:     >
34:       <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
35:         <Circle className="h-2.5 w-2.5 fill-current text-current" />
36:       </RadioGroupPrimitive.Indicator>
37:     </RadioGroupPrimitive.Item>
38:   )
39: })
40: RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
41: 
42: export { RadioGroup, RadioGroupItem }
````

## File: src/components/ui/resizable.tsx
````typescript
 1: import { GripVertical } from "lucide-react"
 2: import * as ResizablePrimitive from "react-resizable-panels"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const ResizablePanelGroup = ({
 7:   className,
 8:   ...props
 9: }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
10:   <ResizablePrimitive.PanelGroup
11:     className={cn(
12:       "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
13:       className
14:     )}
15:     {...props}
16:   />
17: )
18: 
19: const ResizablePanel = ResizablePrimitive.Panel
20: 
21: const ResizableHandle = ({
22:   withHandle,
23:   className,
24:   ...props
25: }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
26:   withHandle?: boolean
27: }) => (
28:   <ResizablePrimitive.PanelResizeHandle
29:     className={cn(
30:       "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
31:       className
32:     )}
33:     {...props}
34:   >
35:     {withHandle && (
36:       <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
37:         <GripVertical className="h-2.5 w-2.5" />
38:       </div>
39:     )}
40:   </ResizablePrimitive.PanelResizeHandle>
41: )
42: 
43: export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
````

## File: src/components/ui/scroll-area.tsx
````typescript
 1: import * as React from "react"
 2: import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const ScrollArea = React.forwardRef<
 7:   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
 8:   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
 9: >(({ className, children, ...props }, ref) => (
10:   <ScrollAreaPrimitive.Root
11:     ref={ref}
12:     className={cn("relative overflow-hidden", className)}
13:     {...props}
14:   >
15:     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
16:       {children}
17:     </ScrollAreaPrimitive.Viewport>
18:     <ScrollBar />
19:     <ScrollAreaPrimitive.Corner />
20:   </ScrollAreaPrimitive.Root>
21: ))
22: ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName
23: 
24: const ScrollBar = React.forwardRef<
25:   React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
26:   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
27: >(({ className, orientation = "vertical", ...props }, ref) => (
28:   <ScrollAreaPrimitive.ScrollAreaScrollbar
29:     ref={ref}
30:     orientation={orientation}
31:     className={cn(
32:       "flex touch-none select-none transition-colors",
33:       orientation === "vertical" &&
34:         "h-full w-2.5 border-l border-l-transparent p-[1px]",
35:       orientation === "horizontal" &&
36:         "h-2.5 flex-col border-t border-t-transparent p-[1px]",
37:       className
38:     )}
39:     {...props}
40:   >
41:     <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
42:   </ScrollAreaPrimitive.ScrollAreaScrollbar>
43: ))
44: ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName
45: 
46: export { ScrollArea, ScrollBar }
````

## File: src/components/ui/select.tsx
````typescript
  1: import * as React from "react"
  2: import * as SelectPrimitive from "@radix-ui/react-select"
  3: import { Check, ChevronDown, ChevronUp } from "lucide-react"
  4: 
  5: import { cn } from "@/lib/utils"
  6: 
  7: const Select = SelectPrimitive.Root
  8: 
  9: const SelectGroup = SelectPrimitive.Group
 10: 
 11: const SelectValue = SelectPrimitive.Value
 12: 
 13: const SelectTrigger = React.forwardRef<
 14:   React.ElementRef<typeof SelectPrimitive.Trigger>,
 15:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
 16: >(({ className, children, ...props }, ref) => (
 17:   <SelectPrimitive.Trigger
 18:     ref={ref}
 19:     className={cn(
 20:       "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
 21:       className
 22:     )}
 23:     {...props}
 24:   >
 25:     {children}
 26:     <SelectPrimitive.Icon asChild>
 27:       <ChevronDown className="h-4 w-4 opacity-50" />
 28:     </SelectPrimitive.Icon>
 29:   </SelectPrimitive.Trigger>
 30: ))
 31: SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
 32: 
 33: const SelectScrollUpButton = React.forwardRef<
 34:   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
 35:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
 36: >(({ className, ...props }, ref) => (
 37:   <SelectPrimitive.ScrollUpButton
 38:     ref={ref}
 39:     className={cn(
 40:       "flex cursor-default items-center justify-center py-1",
 41:       className
 42:     )}
 43:     {...props}
 44:   >
 45:     <ChevronUp className="h-4 w-4" />
 46:   </SelectPrimitive.ScrollUpButton>
 47: ))
 48: SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
 49: 
 50: const SelectScrollDownButton = React.forwardRef<
 51:   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
 52:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
 53: >(({ className, ...props }, ref) => (
 54:   <SelectPrimitive.ScrollDownButton
 55:     ref={ref}
 56:     className={cn(
 57:       "flex cursor-default items-center justify-center py-1",
 58:       className
 59:     )}
 60:     {...props}
 61:   >
 62:     <ChevronDown className="h-4 w-4" />
 63:   </SelectPrimitive.ScrollDownButton>
 64: ))
 65: SelectScrollDownButton.displayName =
 66:   SelectPrimitive.ScrollDownButton.displayName
 67: 
 68: const SelectContent = React.forwardRef<
 69:   React.ElementRef<typeof SelectPrimitive.Content>,
 70:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
 71: >(({ className, children, position = "popper", ...props }, ref) => (
 72:   <SelectPrimitive.Portal>
 73:     <SelectPrimitive.Content
 74:       ref={ref}
 75:       className={cn(
 76:         "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 77:         position === "popper" &&
 78:           "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
 79:         className
 80:       )}
 81:       position={position}
 82:       {...props}
 83:     >
 84:       <SelectScrollUpButton />
 85:       <SelectPrimitive.Viewport
 86:         className={cn(
 87:           "p-1",
 88:           position === "popper" &&
 89:             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
 90:         )}
 91:       >
 92:         {children}
 93:       </SelectPrimitive.Viewport>
 94:       <SelectScrollDownButton />
 95:     </SelectPrimitive.Content>
 96:   </SelectPrimitive.Portal>
 97: ))
 98: SelectContent.displayName = SelectPrimitive.Content.displayName
 99: 
100: const SelectLabel = React.forwardRef<
101:   React.ElementRef<typeof SelectPrimitive.Label>,
102:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
103: >(({ className, ...props }, ref) => (
104:   <SelectPrimitive.Label
105:     ref={ref}
106:     className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
107:     {...props}
108:   />
109: ))
110: SelectLabel.displayName = SelectPrimitive.Label.displayName
111: 
112: const SelectItem = React.forwardRef<
113:   React.ElementRef<typeof SelectPrimitive.Item>,
114:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
115: >(({ className, children, ...props }, ref) => (
116:   <SelectPrimitive.Item
117:     ref={ref}
118:     className={cn(
119:       "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
120:       className
121:     )}
122:     {...props}
123:   >
124:     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
125:       <SelectPrimitive.ItemIndicator>
126:         <Check className="h-4 w-4" />
127:       </SelectPrimitive.ItemIndicator>
128:     </span>
129: 
130:     <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
131:   </SelectPrimitive.Item>
132: ))
133: SelectItem.displayName = SelectPrimitive.Item.displayName
134: 
135: const SelectSeparator = React.forwardRef<
136:   React.ElementRef<typeof SelectPrimitive.Separator>,
137:   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
138: >(({ className, ...props }, ref) => (
139:   <SelectPrimitive.Separator
140:     ref={ref}
141:     className={cn("-mx-1 my-1 h-px bg-muted", className)}
142:     {...props}
143:   />
144: ))
145: SelectSeparator.displayName = SelectPrimitive.Separator.displayName
146: 
147: export {
148:   Select,
149:   SelectGroup,
150:   SelectValue,
151:   SelectTrigger,
152:   SelectContent,
153:   SelectLabel,
154:   SelectItem,
155:   SelectSeparator,
156:   SelectScrollUpButton,
157:   SelectScrollDownButton,
158: }
````

## File: src/components/ui/separator.tsx
````typescript
 1: import * as React from "react"
 2: import * as SeparatorPrimitive from "@radix-ui/react-separator"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Separator = React.forwardRef<
 7:   React.ElementRef<typeof SeparatorPrimitive.Root>,
 8:   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
 9: >(
10:   (
11:     { className, orientation = "horizontal", decorative = true, ...props },
12:     ref
13:   ) => (
14:     <SeparatorPrimitive.Root
15:       ref={ref}
16:       decorative={decorative}
17:       orientation={orientation}
18:       className={cn(
19:         "shrink-0 bg-border",
20:         orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
21:         className
22:       )}
23:       {...props}
24:     />
25:   )
26: )
27: Separator.displayName = SeparatorPrimitive.Root.displayName
28: 
29: export { Separator }
````

## File: src/components/ui/sheet.tsx
````typescript
  1: import * as SheetPrimitive from "@radix-ui/react-dialog"
  2: import { cva, type VariantProps } from "class-variance-authority"
  3: import { X } from "lucide-react"
  4: import * as React from "react"
  5: 
  6: import { cn } from "@/lib/utils"
  7: 
  8: const Sheet = SheetPrimitive.Root
  9: 
 10: const SheetTrigger = SheetPrimitive.Trigger
 11: 
 12: const SheetClose = SheetPrimitive.Close
 13: 
 14: const SheetPortal = SheetPrimitive.Portal
 15: 
 16: const SheetOverlay = React.forwardRef<
 17:   React.ElementRef<typeof SheetPrimitive.Overlay>,
 18:   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
 19: >(({ className, ...props }, ref) => (
 20:   <SheetPrimitive.Overlay
 21:     className={cn(
 22:       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
 23:       className
 24:     )}
 25:     {...props}
 26:     ref={ref}
 27:   />
 28: ))
 29: SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
 30: 
 31: const sheetVariants = cva(
 32:   "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
 33:   {
 34:     variants: {
 35:       side: {
 36:         top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
 37:         bottom:
 38:           "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
 39:         left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
 40:         right:
 41:           "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
 42:       },
 43:     },
 44:     defaultVariants: {
 45:       side: "right",
 46:     },
 47:   }
 48: )
 49: 
 50: interface SheetContentProps
 51:   extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
 52:   VariantProps<typeof sheetVariants> { }
 53: 
 54: const SheetContent = React.forwardRef<
 55:   React.ElementRef<typeof SheetPrimitive.Content>,
 56:   SheetContentProps
 57: >(({ side = "right", className, children, ...props }, ref) => (
 58:   <SheetPortal>
 59:     <SheetOverlay />
 60:     <SheetPrimitive.Content
 61:       ref={ref}
 62:       className={cn(sheetVariants({ side }), className)}
 63:       {...props}
 64:     >
 65:       {children}
 66:       <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
 67:         <X className="h-4 w-4" />
 68:         <span className="sr-only">Close</span>
 69:       </SheetPrimitive.Close>
 70:     </SheetPrimitive.Content>
 71:   </SheetPortal>
 72: ))
 73: SheetContent.displayName = SheetPrimitive.Content.displayName
 74: 
 75: const SheetHeader = ({
 76:   className,
 77:   ...props
 78: }: React.HTMLAttributes<HTMLDivElement>) => (
 79:   <div
 80:     className={cn(
 81:       "flex flex-col space-y-2 text-center sm:text-left",
 82:       className
 83:     )}
 84:     {...props}
 85:   />
 86: )
 87: SheetHeader.displayName = "SheetHeader"
 88: 
 89: const SheetFooter = ({
 90:   className,
 91:   ...props
 92: }: React.HTMLAttributes<HTMLDivElement>) => (
 93:   <div
 94:     className={cn(
 95:       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
 96:       className
 97:     )}
 98:     {...props}
 99:   />
100: )
101: SheetFooter.displayName = "SheetFooter"
102: 
103: const SheetTitle = React.forwardRef<
104:   React.ElementRef<typeof SheetPrimitive.Title>,
105:   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
106: >(({ className, ...props }, ref) => (
107:   <SheetPrimitive.Title
108:     ref={ref}
109:     className={cn("text-lg font-semibold text-foreground", className)}
110:     {...props}
111:   />
112: ))
113: SheetTitle.displayName = SheetPrimitive.Title.displayName
114: 
115: const SheetDescription = React.forwardRef<
116:   React.ElementRef<typeof SheetPrimitive.Description>,
117:   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
118: >(({ className, ...props }, ref) => (
119:   <SheetPrimitive.Description
120:     ref={ref}
121:     className={cn("text-sm text-muted-foreground", className)}
122:     {...props}
123:   />
124: ))
125: SheetDescription.displayName = SheetPrimitive.Description.displayName
126: 
127: export {
128:   Sheet, SheetClose,
129:   SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
130: }
````

## File: src/components/ui/sidebar.tsx
````typescript
  1: import * as React from "react"
  2: import { Slot } from "@radix-ui/react-slot"
  3: import { VariantProps, cva } from "class-variance-authority"
  4: import { PanelLeft } from "lucide-react"
  5: 
  6: import { useIsMobile } from "@/hooks/use-mobile"
  7: import { cn } from "@/lib/utils"
  8: import { Button } from "@/components/ui/button"
  9: import { Input } from "@/components/ui/input"
 10: import { Separator } from "@/components/ui/separator"
 11: import { Sheet, SheetContent } from "@/components/ui/sheet"
 12: import { Skeleton } from "@/components/ui/skeleton"
 13: import {
 14:   Tooltip,
 15:   TooltipContent,
 16:   TooltipProvider,
 17:   TooltipTrigger,
 18: } from "@/components/ui/tooltip"
 19: 
 20: const SIDEBAR_COOKIE_NAME = "sidebar:state"
 21: const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
 22: const SIDEBAR_WIDTH = "16rem"
 23: const SIDEBAR_WIDTH_MOBILE = "18rem"
 24: const SIDEBAR_WIDTH_ICON = "3rem"
 25: const SIDEBAR_KEYBOARD_SHORTCUT = "b"
 26: 
 27: type SidebarContext = {
 28:   state: "expanded" | "collapsed"
 29:   open: boolean
 30:   setOpen: (open: boolean) => void
 31:   openMobile: boolean
 32:   setOpenMobile: (open: boolean) => void
 33:   isMobile: boolean
 34:   toggleSidebar: () => void
 35: }
 36: 
 37: const SidebarContext = React.createContext<SidebarContext | null>(null)
 38: 
 39: function useSidebar() {
 40:   const context = React.useContext(SidebarContext)
 41:   if (!context) {
 42:     throw new Error("useSidebar must be used within a SidebarProvider.")
 43:   }
 44: 
 45:   return context
 46: }
 47: 
 48: const SidebarProvider = React.forwardRef<
 49:   HTMLDivElement,
 50:   React.ComponentProps<"div"> & {
 51:     defaultOpen?: boolean
 52:     open?: boolean
 53:     onOpenChange?: (open: boolean) => void
 54:   }
 55: >(
 56:   (
 57:     {
 58:       defaultOpen = true,
 59:       open: openProp,
 60:       onOpenChange: setOpenProp,
 61:       className,
 62:       style,
 63:       children,
 64:       ...props
 65:     },
 66:     ref
 67:   ) => {
 68:     const isMobile = useIsMobile()
 69:     const [openMobile, setOpenMobile] = React.useState(false)
 70: 
 71:     // This is the internal state of the sidebar.
 72:     // We use openProp and setOpenProp for control from outside the component.
 73:     const [_open, _setOpen] = React.useState(defaultOpen)
 74:     const open = openProp ?? _open
 75:     const setOpen = React.useCallback(
 76:       (value: boolean | ((value: boolean) => boolean)) => {
 77:         const openState = typeof value === "function" ? value(open) : value
 78:         if (setOpenProp) {
 79:           setOpenProp(openState)
 80:         } else {
 81:           _setOpen(openState)
 82:         }
 83: 
 84:         // This sets the cookie to keep the sidebar state.
 85:         document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
 86:       },
 87:       [setOpenProp, open]
 88:     )
 89: 
 90:     // Helper to toggle the sidebar.
 91:     const toggleSidebar = React.useCallback(() => {
 92:       return isMobile
 93:         ? setOpenMobile((open) => !open)
 94:         : setOpen((open) => !open)
 95:     }, [isMobile, setOpen, setOpenMobile])
 96: 
 97:     // Adds a keyboard shortcut to toggle the sidebar.
 98:     React.useEffect(() => {
 99:       const handleKeyDown = (event: KeyboardEvent) => {
100:         if (
101:           event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
102:           (event.metaKey || event.ctrlKey)
103:         ) {
104:           event.preventDefault()
105:           toggleSidebar()
106:         }
107:       }
108: 
109:       window.addEventListener("keydown", handleKeyDown)
110:       return () => window.removeEventListener("keydown", handleKeyDown)
111:     }, [toggleSidebar])
112: 
113:     // We add a state so that we can do data-state="expanded" or "collapsed".
114:     // This makes it easier to style the sidebar with Tailwind classes.
115:     const state = open ? "expanded" : "collapsed"
116: 
117:     const contextValue = React.useMemo<SidebarContext>(
118:       () => ({
119:         state,
120:         open,
121:         setOpen,
122:         isMobile,
123:         openMobile,
124:         setOpenMobile,
125:         toggleSidebar,
126:       }),
127:       [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
128:     )
129: 
130:     return (
131:       <SidebarContext.Provider value={contextValue}>
132:         <TooltipProvider delayDuration={0}>
133:           <div
134:             style={
135:               {
136:                 "--sidebar-width": SIDEBAR_WIDTH,
137:                 "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
138:                 ...style,
139:               } as React.CSSProperties
140:             }
141:             className={cn(
142:               "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
143:               className
144:             )}
145:             ref={ref}
146:             {...props}
147:           >
148:             {children}
149:           </div>
150:         </TooltipProvider>
151:       </SidebarContext.Provider>
152:     )
153:   }
154: )
155: SidebarProvider.displayName = "SidebarProvider"
156: 
157: const Sidebar = React.forwardRef<
158:   HTMLDivElement,
159:   React.ComponentProps<"div"> & {
160:     side?: "left" | "right"
161:     variant?: "sidebar" | "floating" | "inset"
162:     collapsible?: "offcanvas" | "icon" | "none"
163:   }
164: >(
165:   (
166:     {
167:       side = "left",
168:       variant = "sidebar",
169:       collapsible = "offcanvas",
170:       className,
171:       children,
172:       ...props
173:     },
174:     ref
175:   ) => {
176:     const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
177: 
178:     if (collapsible === "none") {
179:       return (
180:         <div
181:           className={cn(
182:             "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
183:             className
184:           )}
185:           ref={ref}
186:           {...props}
187:         >
188:           {children}
189:         </div>
190:       )
191:     }
192: 
193:     if (isMobile) {
194:       return (
195:         <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
196:           <SheetContent
197:             data-sidebar="sidebar"
198:             data-mobile="true"
199:             className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
200:             style={
201:               {
202:                 "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
203:               } as React.CSSProperties
204:             }
205:             side={side}
206:           >
207:             <div className="flex h-full w-full flex-col">{children}</div>
208:           </SheetContent>
209:         </Sheet>
210:       )
211:     }
212: 
213:     return (
214:       <div
215:         ref={ref}
216:         className="group peer hidden md:block text-sidebar-foreground"
217:         data-state={state}
218:         data-collapsible={state === "collapsed" ? collapsible : ""}
219:         data-variant={variant}
220:         data-side={side}
221:       >
222:         {/* This is what handles the sidebar gap on desktop */}
223:         <div
224:           className={cn(
225:             "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
226:             "group-data-[collapsible=offcanvas]:w-0",
227:             "group-data-[side=right]:rotate-180",
228:             variant === "floating" || variant === "inset"
229:               ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
230:               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
231:           )}
232:         />
233:         <div
234:           className={cn(
235:             "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
236:             side === "left"
237:               ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
238:               : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
239:             // Adjust the padding for floating and inset variants.
240:             variant === "floating" || variant === "inset"
241:               ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
242:               : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
243:             className
244:           )}
245:           {...props}
246:         >
247:           <div
248:             data-sidebar="sidebar"
249:             className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
250:           >
251:             {children}
252:           </div>
253:         </div>
254:       </div>
255:     )
256:   }
257: )
258: Sidebar.displayName = "Sidebar"
259: 
260: const SidebarTrigger = React.forwardRef<
261:   React.ElementRef<typeof Button>,
262:   React.ComponentProps<typeof Button>
263: >(({ className, onClick, ...props }, ref) => {
264:   const { toggleSidebar } = useSidebar()
265: 
266:   return (
267:     <Button
268:       ref={ref}
269:       data-sidebar="trigger"
270:       variant="ghost"
271:       size="icon"
272:       className={cn("h-7 w-7", className)}
273:       onClick={(event) => {
274:         onClick?.(event)
275:         toggleSidebar()
276:       }}
277:       {...props}
278:     >
279:       <PanelLeft />
280:       <span className="sr-only">Toggle Sidebar</span>
281:     </Button>
282:   )
283: })
284: SidebarTrigger.displayName = "SidebarTrigger"
285: 
286: const SidebarRail = React.forwardRef<
287:   HTMLButtonElement,
288:   React.ComponentProps<"button">
289: >(({ className, ...props }, ref) => {
290:   const { toggleSidebar } = useSidebar()
291: 
292:   return (
293:     <button
294:       ref={ref}
295:       data-sidebar="rail"
296:       aria-label="Toggle Sidebar"
297:       tabIndex={-1}
298:       onClick={toggleSidebar}
299:       title="Toggle Sidebar"
300:       className={cn(
301:         "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
302:         "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
303:         "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
304:         "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
305:         "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
306:         "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
307:         className
308:       )}
309:       {...props}
310:     />
311:   )
312: })
313: SidebarRail.displayName = "SidebarRail"
314: 
315: const SidebarInset = React.forwardRef<
316:   HTMLDivElement,
317:   React.ComponentProps<"main">
318: >(({ className, ...props }, ref) => {
319:   return (
320:     <main
321:       ref={ref}
322:       className={cn(
323:         "relative flex min-h-svh flex-1 flex-col bg-background",
324:         "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
325:         className
326:       )}
327:       {...props}
328:     />
329:   )
330: })
331: SidebarInset.displayName = "SidebarInset"
332: 
333: const SidebarInput = React.forwardRef<
334:   React.ElementRef<typeof Input>,
335:   React.ComponentProps<typeof Input>
336: >(({ className, ...props }, ref) => {
337:   return (
338:     <Input
339:       ref={ref}
340:       data-sidebar="input"
341:       className={cn(
342:         "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
343:         className
344:       )}
345:       {...props}
346:     />
347:   )
348: })
349: SidebarInput.displayName = "SidebarInput"
350: 
351: const SidebarHeader = React.forwardRef<
352:   HTMLDivElement,
353:   React.ComponentProps<"div">
354: >(({ className, ...props }, ref) => {
355:   return (
356:     <div
357:       ref={ref}
358:       data-sidebar="header"
359:       className={cn("flex flex-col gap-2 p-2", className)}
360:       {...props}
361:     />
362:   )
363: })
364: SidebarHeader.displayName = "SidebarHeader"
365: 
366: const SidebarFooter = React.forwardRef<
367:   HTMLDivElement,
368:   React.ComponentProps<"div">
369: >(({ className, ...props }, ref) => {
370:   return (
371:     <div
372:       ref={ref}
373:       data-sidebar="footer"
374:       className={cn("flex flex-col gap-2 p-2", className)}
375:       {...props}
376:     />
377:   )
378: })
379: SidebarFooter.displayName = "SidebarFooter"
380: 
381: const SidebarSeparator = React.forwardRef<
382:   React.ElementRef<typeof Separator>,
383:   React.ComponentProps<typeof Separator>
384: >(({ className, ...props }, ref) => {
385:   return (
386:     <Separator
387:       ref={ref}
388:       data-sidebar="separator"
389:       className={cn("mx-2 w-auto bg-sidebar-border", className)}
390:       {...props}
391:     />
392:   )
393: })
394: SidebarSeparator.displayName = "SidebarSeparator"
395: 
396: const SidebarContent = React.forwardRef<
397:   HTMLDivElement,
398:   React.ComponentProps<"div">
399: >(({ className, ...props }, ref) => {
400:   return (
401:     <div
402:       ref={ref}
403:       data-sidebar="content"
404:       className={cn(
405:         "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
406:         className
407:       )}
408:       {...props}
409:     />
410:   )
411: })
412: SidebarContent.displayName = "SidebarContent"
413: 
414: const SidebarGroup = React.forwardRef<
415:   HTMLDivElement,
416:   React.ComponentProps<"div">
417: >(({ className, ...props }, ref) => {
418:   return (
419:     <div
420:       ref={ref}
421:       data-sidebar="group"
422:       className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
423:       {...props}
424:     />
425:   )
426: })
427: SidebarGroup.displayName = "SidebarGroup"
428: 
429: const SidebarGroupLabel = React.forwardRef<
430:   HTMLDivElement,
431:   React.ComponentProps<"div"> & { asChild?: boolean }
432: >(({ className, asChild = false, ...props }, ref) => {
433:   const Comp = asChild ? Slot : "div"
434: 
435:   return (
436:     <Comp
437:       ref={ref}
438:       data-sidebar="group-label"
439:       className={cn(
440:         "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
441:         "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
442:         className
443:       )}
444:       {...props}
445:     />
446:   )
447: })
448: SidebarGroupLabel.displayName = "SidebarGroupLabel"
449: 
450: const SidebarGroupAction = React.forwardRef<
451:   HTMLButtonElement,
452:   React.ComponentProps<"button"> & { asChild?: boolean }
453: >(({ className, asChild = false, ...props }, ref) => {
454:   const Comp = asChild ? Slot : "button"
455: 
456:   return (
457:     <Comp
458:       ref={ref}
459:       data-sidebar="group-action"
460:       className={cn(
461:         "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
462:         // Increases the hit area of the button on mobile.
463:         "after:absolute after:-inset-2 after:md:hidden",
464:         "group-data-[collapsible=icon]:hidden",
465:         className
466:       )}
467:       {...props}
468:     />
469:   )
470: })
471: SidebarGroupAction.displayName = "SidebarGroupAction"
472: 
473: const SidebarGroupContent = React.forwardRef<
474:   HTMLDivElement,
475:   React.ComponentProps<"div">
476: >(({ className, ...props }, ref) => (
477:   <div
478:     ref={ref}
479:     data-sidebar="group-content"
480:     className={cn("w-full text-sm", className)}
481:     {...props}
482:   />
483: ))
484: SidebarGroupContent.displayName = "SidebarGroupContent"
485: 
486: const SidebarMenu = React.forwardRef<
487:   HTMLUListElement,
488:   React.ComponentProps<"ul">
489: >(({ className, ...props }, ref) => (
490:   <ul
491:     ref={ref}
492:     data-sidebar="menu"
493:     className={cn("flex w-full min-w-0 flex-col gap-1", className)}
494:     {...props}
495:   />
496: ))
497: SidebarMenu.displayName = "SidebarMenu"
498: 
499: const SidebarMenuItem = React.forwardRef<
500:   HTMLLIElement,
501:   React.ComponentProps<"li">
502: >(({ className, ...props }, ref) => (
503:   <li
504:     ref={ref}
505:     data-sidebar="menu-item"
506:     className={cn("group/menu-item relative", className)}
507:     {...props}
508:   />
509: ))
510: SidebarMenuItem.displayName = "SidebarMenuItem"
511: 
512: const sidebarMenuButtonVariants = cva(
513:   "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
514:   {
515:     variants: {
516:       variant: {
517:         default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
518:         outline:
519:           "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
520:       },
521:       size: {
522:         default: "h-8 text-sm",
523:         sm: "h-7 text-xs",
524:         lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
525:       },
526:     },
527:     defaultVariants: {
528:       variant: "default",
529:       size: "default",
530:     },
531:   }
532: )
533: 
534: const SidebarMenuButton = React.forwardRef<
535:   HTMLButtonElement,
536:   React.ComponentProps<"button"> & {
537:     asChild?: boolean
538:     isActive?: boolean
539:     tooltip?: string | React.ComponentProps<typeof TooltipContent>
540:   } & VariantProps<typeof sidebarMenuButtonVariants>
541: >(
542:   (
543:     {
544:       asChild = false,
545:       isActive = false,
546:       variant = "default",
547:       size = "default",
548:       tooltip,
549:       className,
550:       ...props
551:     },
552:     ref
553:   ) => {
554:     const Comp = asChild ? Slot : "button"
555:     const { isMobile, state } = useSidebar()
556: 
557:     const button = (
558:       <Comp
559:         ref={ref}
560:         data-sidebar="menu-button"
561:         data-size={size}
562:         data-active={isActive}
563:         className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
564:         {...props}
565:       />
566:     )
567: 
568:     if (!tooltip) {
569:       return button
570:     }
571: 
572:     if (typeof tooltip === "string") {
573:       tooltip = {
574:         children: tooltip,
575:       }
576:     }
577: 
578:     return (
579:       <Tooltip>
580:         <TooltipTrigger asChild>{button}</TooltipTrigger>
581:         <TooltipContent
582:           side="right"
583:           align="center"
584:           hidden={state !== "collapsed" || isMobile}
585:           {...tooltip}
586:         />
587:       </Tooltip>
588:     )
589:   }
590: )
591: SidebarMenuButton.displayName = "SidebarMenuButton"
592: 
593: const SidebarMenuAction = React.forwardRef<
594:   HTMLButtonElement,
595:   React.ComponentProps<"button"> & {
596:     asChild?: boolean
597:     showOnHover?: boolean
598:   }
599: >(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
600:   const Comp = asChild ? Slot : "button"
601: 
602:   return (
603:     <Comp
604:       ref={ref}
605:       data-sidebar="menu-action"
606:       className={cn(
607:         "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
608:         // Increases the hit area of the button on mobile.
609:         "after:absolute after:-inset-2 after:md:hidden",
610:         "peer-data-[size=sm]/menu-button:top-1",
611:         "peer-data-[size=default]/menu-button:top-1.5",
612:         "peer-data-[size=lg]/menu-button:top-2.5",
613:         "group-data-[collapsible=icon]:hidden",
614:         showOnHover &&
615:           "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
616:         className
617:       )}
618:       {...props}
619:     />
620:   )
621: })
622: SidebarMenuAction.displayName = "SidebarMenuAction"
623: 
624: const SidebarMenuBadge = React.forwardRef<
625:   HTMLDivElement,
626:   React.ComponentProps<"div">
627: >(({ className, ...props }, ref) => (
628:   <div
629:     ref={ref}
630:     data-sidebar="menu-badge"
631:     className={cn(
632:       "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
633:       "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
634:       "peer-data-[size=sm]/menu-button:top-1",
635:       "peer-data-[size=default]/menu-button:top-1.5",
636:       "peer-data-[size=lg]/menu-button:top-2.5",
637:       "group-data-[collapsible=icon]:hidden",
638:       className
639:     )}
640:     {...props}
641:   />
642: ))
643: SidebarMenuBadge.displayName = "SidebarMenuBadge"
644: 
645: const SidebarMenuSkeleton = React.forwardRef<
646:   HTMLDivElement,
647:   React.ComponentProps<"div"> & {
648:     showIcon?: boolean
649:   }
650: >(({ className, showIcon = false, ...props }, ref) => {
651:   // Random width between 50 to 90%.
652:   const width = React.useMemo(() => {
653:     return `${Math.floor(Math.random() * 40) + 50}%`
654:   }, [])
655: 
656:   return (
657:     <div
658:       ref={ref}
659:       data-sidebar="menu-skeleton"
660:       className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
661:       {...props}
662:     >
663:       {showIcon && (
664:         <Skeleton
665:           className="size-4 rounded-md"
666:           data-sidebar="menu-skeleton-icon"
667:         />
668:       )}
669:       <Skeleton
670:         className="h-4 flex-1 max-w-[--skeleton-width]"
671:         data-sidebar="menu-skeleton-text"
672:         style={
673:           {
674:             "--skeleton-width": width,
675:           } as React.CSSProperties
676:         }
677:       />
678:     </div>
679:   )
680: })
681: SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"
682: 
683: const SidebarMenuSub = React.forwardRef<
684:   HTMLUListElement,
685:   React.ComponentProps<"ul">
686: >(({ className, ...props }, ref) => (
687:   <ul
688:     ref={ref}
689:     data-sidebar="menu-sub"
690:     className={cn(
691:       "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
692:       "group-data-[collapsible=icon]:hidden",
693:       className
694:     )}
695:     {...props}
696:   />
697: ))
698: SidebarMenuSub.displayName = "SidebarMenuSub"
699: 
700: const SidebarMenuSubItem = React.forwardRef<
701:   HTMLLIElement,
702:   React.ComponentProps<"li">
703: >(({ ...props }, ref) => <li ref={ref} {...props} />)
704: SidebarMenuSubItem.displayName = "SidebarMenuSubItem"
705: 
706: const SidebarMenuSubButton = React.forwardRef<
707:   HTMLAnchorElement,
708:   React.ComponentProps<"a"> & {
709:     asChild?: boolean
710:     size?: "sm" | "md"
711:     isActive?: boolean
712:   }
713: >(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
714:   const Comp = asChild ? Slot : "a"
715: 
716:   return (
717:     <Comp
718:       ref={ref}
719:       data-sidebar="menu-sub-button"
720:       data-size={size}
721:       data-active={isActive}
722:       className={cn(
723:         "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
724:         "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
725:         size === "sm" && "text-xs",
726:         size === "md" && "text-sm",
727:         "group-data-[collapsible=icon]:hidden",
728:         className
729:       )}
730:       {...props}
731:     />
732:   )
733: })
734: SidebarMenuSubButton.displayName = "SidebarMenuSubButton"
735: 
736: export {
737:   Sidebar,
738:   SidebarContent,
739:   SidebarFooter,
740:   SidebarGroup,
741:   SidebarGroupAction,
742:   SidebarGroupContent,
743:   SidebarGroupLabel,
744:   SidebarHeader,
745:   SidebarInput,
746:   SidebarInset,
747:   SidebarMenu,
748:   SidebarMenuAction,
749:   SidebarMenuBadge,
750:   SidebarMenuButton,
751:   SidebarMenuItem,
752:   SidebarMenuSkeleton,
753:   SidebarMenuSub,
754:   SidebarMenuSubButton,
755:   SidebarMenuSubItem,
756:   SidebarProvider,
757:   SidebarRail,
758:   SidebarSeparator,
759:   SidebarTrigger,
760:   useSidebar,
761: }
````

## File: src/components/ui/skeleton.tsx
````typescript
 1: import { cn } from "@/lib/utils"
 2: 
 3: function Skeleton({
 4:   className,
 5:   ...props
 6: }: React.HTMLAttributes<HTMLDivElement>) {
 7:   return (
 8:     <div
 9:       className={cn("animate-pulse rounded-md bg-muted", className)}
10:       {...props}
11:     />
12:   )
13: }
14: 
15: export { Skeleton }
````

## File: src/components/ui/slider.tsx
````typescript
 1: import * as React from "react"
 2: import * as SliderPrimitive from "@radix-ui/react-slider"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Slider = React.forwardRef<
 7:   React.ElementRef<typeof SliderPrimitive.Root>,
 8:   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
 9: >(({ className, ...props }, ref) => (
10:   <SliderPrimitive.Root
11:     ref={ref}
12:     className={cn(
13:       "relative flex w-full touch-none select-none items-center",
14:       className
15:     )}
16:     {...props}
17:   >
18:     <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
19:       <SliderPrimitive.Range className="absolute h-full bg-primary" />
20:     </SliderPrimitive.Track>
21:     <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
22:   </SliderPrimitive.Root>
23: ))
24: Slider.displayName = SliderPrimitive.Root.displayName
25: 
26: export { Slider }
````

## File: src/components/ui/sonner.tsx
````typescript
 1: import { useTheme } from "next-themes"
 2: import { Toaster as Sonner, toast } from "sonner"
 3: 
 4: type ToasterProps = React.ComponentProps<typeof Sonner>
 5: 
 6: const Toaster = ({ ...props }: ToasterProps) => {
 7:   const { theme = "system" } = useTheme()
 8: 
 9:   return (
10:     <Sonner
11:       theme={theme as ToasterProps["theme"]}
12:       className="toaster group"
13:       toastOptions={{
14:         classNames: {
15:           toast:
16:             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
17:           description: "group-[.toast]:text-muted-foreground",
18:           actionButton:
19:             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
20:           cancelButton:
21:             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
22:         },
23:       }}
24:       {...props}
25:     />
26:   )
27: }
28: 
29: export { Toaster, toast }
````

## File: src/components/ui/switch.tsx
````typescript
 1: import * as React from "react"
 2: import * as SwitchPrimitives from "@radix-ui/react-switch"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Switch = React.forwardRef<
 7:   React.ElementRef<typeof SwitchPrimitives.Root>,
 8:   React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
 9: >(({ className, ...props }, ref) => (
10:   <SwitchPrimitives.Root
11:     className={cn(
12:       "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
13:       className
14:     )}
15:     {...props}
16:     ref={ref}
17:   >
18:     <SwitchPrimitives.Thumb
19:       className={cn(
20:         "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
21:       )}
22:     />
23:   </SwitchPrimitives.Root>
24: ))
25: Switch.displayName = SwitchPrimitives.Root.displayName
26: 
27: export { Switch }
````

## File: src/components/ui/table.tsx
````typescript
  1: import * as React from "react"
  2: 
  3: import { cn } from "@/lib/utils"
  4: 
  5: const Table = React.forwardRef<
  6:   HTMLTableElement,
  7:   React.HTMLAttributes<HTMLTableElement>
  8: >(({ className, ...props }, ref) => (
  9:   <div className="relative w-full overflow-auto">
 10:     <table
 11:       ref={ref}
 12:       className={cn("w-full caption-bottom text-sm", className)}
 13:       {...props}
 14:     />
 15:   </div>
 16: ))
 17: Table.displayName = "Table"
 18: 
 19: const TableHeader = React.forwardRef<
 20:   HTMLTableSectionElement,
 21:   React.HTMLAttributes<HTMLTableSectionElement>
 22: >(({ className, ...props }, ref) => (
 23:   <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
 24: ))
 25: TableHeader.displayName = "TableHeader"
 26: 
 27: const TableBody = React.forwardRef<
 28:   HTMLTableSectionElement,
 29:   React.HTMLAttributes<HTMLTableSectionElement>
 30: >(({ className, ...props }, ref) => (
 31:   <tbody
 32:     ref={ref}
 33:     className={cn("[&_tr:last-child]:border-0", className)}
 34:     {...props}
 35:   />
 36: ))
 37: TableBody.displayName = "TableBody"
 38: 
 39: const TableFooter = React.forwardRef<
 40:   HTMLTableSectionElement,
 41:   React.HTMLAttributes<HTMLTableSectionElement>
 42: >(({ className, ...props }, ref) => (
 43:   <tfoot
 44:     ref={ref}
 45:     className={cn(
 46:       "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
 47:       className
 48:     )}
 49:     {...props}
 50:   />
 51: ))
 52: TableFooter.displayName = "TableFooter"
 53: 
 54: const TableRow = React.forwardRef<
 55:   HTMLTableRowElement,
 56:   React.HTMLAttributes<HTMLTableRowElement>
 57: >(({ className, ...props }, ref) => (
 58:   <tr
 59:     ref={ref}
 60:     className={cn(
 61:       "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
 62:       className
 63:     )}
 64:     {...props}
 65:   />
 66: ))
 67: TableRow.displayName = "TableRow"
 68: 
 69: const TableHead = React.forwardRef<
 70:   HTMLTableCellElement,
 71:   React.ThHTMLAttributes<HTMLTableCellElement>
 72: >(({ className, ...props }, ref) => (
 73:   <th
 74:     ref={ref}
 75:     className={cn(
 76:       "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
 77:       className
 78:     )}
 79:     {...props}
 80:   />
 81: ))
 82: TableHead.displayName = "TableHead"
 83: 
 84: const TableCell = React.forwardRef<
 85:   HTMLTableCellElement,
 86:   React.TdHTMLAttributes<HTMLTableCellElement>
 87: >(({ className, ...props }, ref) => (
 88:   <td
 89:     ref={ref}
 90:     className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
 91:     {...props}
 92:   />
 93: ))
 94: TableCell.displayName = "TableCell"
 95: 
 96: const TableCaption = React.forwardRef<
 97:   HTMLTableCaptionElement,
 98:   React.HTMLAttributes<HTMLTableCaptionElement>
 99: >(({ className, ...props }, ref) => (
100:   <caption
101:     ref={ref}
102:     className={cn("mt-4 text-sm text-muted-foreground", className)}
103:     {...props}
104:   />
105: ))
106: TableCaption.displayName = "TableCaption"
107: 
108: export {
109:   Table,
110:   TableHeader,
111:   TableBody,
112:   TableFooter,
113:   TableHead,
114:   TableRow,
115:   TableCell,
116:   TableCaption,
117: }
````

## File: src/components/ui/tabs.tsx
````typescript
 1: import * as React from "react"
 2: import * as TabsPrimitive from "@radix-ui/react-tabs"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const Tabs = TabsPrimitive.Root
 7: 
 8: const TabsList = React.forwardRef<
 9:   React.ElementRef<typeof TabsPrimitive.List>,
10:   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
11: >(({ className, ...props }, ref) => (
12:   <TabsPrimitive.List
13:     ref={ref}
14:     className={cn(
15:       "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
16:       className
17:     )}
18:     {...props}
19:   />
20: ))
21: TabsList.displayName = TabsPrimitive.List.displayName
22: 
23: const TabsTrigger = React.forwardRef<
24:   React.ElementRef<typeof TabsPrimitive.Trigger>,
25:   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
26: >(({ className, ...props }, ref) => (
27:   <TabsPrimitive.Trigger
28:     ref={ref}
29:     className={cn(
30:       "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
31:       className
32:     )}
33:     {...props}
34:   />
35: ))
36: TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
37: 
38: const TabsContent = React.forwardRef<
39:   React.ElementRef<typeof TabsPrimitive.Content>,
40:   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
41: >(({ className, ...props }, ref) => (
42:   <TabsPrimitive.Content
43:     ref={ref}
44:     className={cn(
45:       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
46:       className
47:     )}
48:     {...props}
49:   />
50: ))
51: TabsContent.displayName = TabsPrimitive.Content.displayName
52: 
53: export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: src/components/ui/textarea.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: import { cn } from "@/lib/utils"
 4: 
 5: export interface TextareaProps
 6:   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
 7: 
 8: const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
 9:   ({ className, ...props }, ref) => {
10:     return (
11:       <textarea
12:         className={cn(
13:           "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
14:           className
15:         )}
16:         ref={ref}
17:         {...props}
18:       />
19:     )
20:   }
21: )
22: Textarea.displayName = "Textarea"
23: 
24: export { Textarea }
````

## File: src/components/ui/toast.tsx
````typescript
  1: import * as React from "react"
  2: import * as ToastPrimitives from "@radix-ui/react-toast"
  3: import { cva, type VariantProps } from "class-variance-authority"
  4: import { X } from "lucide-react"
  5: 
  6: import { cn } from "@/lib/utils"
  7: 
  8: const ToastProvider = ToastPrimitives.Provider
  9: 
 10: const ToastViewport = React.forwardRef<
 11:   React.ElementRef<typeof ToastPrimitives.Viewport>,
 12:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
 13: >(({ className, ...props }, ref) => (
 14:   <ToastPrimitives.Viewport
 15:     ref={ref}
 16:     className={cn(
 17:       "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
 18:       className
 19:     )}
 20:     {...props}
 21:   />
 22: ))
 23: ToastViewport.displayName = ToastPrimitives.Viewport.displayName
 24: 
 25: const toastVariants = cva(
 26:   "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
 27:   {
 28:     variants: {
 29:       variant: {
 30:         default: "border bg-background text-foreground",
 31:         destructive:
 32:           "destructive group border-destructive bg-destructive text-destructive-foreground",
 33:       },
 34:     },
 35:     defaultVariants: {
 36:       variant: "default",
 37:     },
 38:   }
 39: )
 40: 
 41: const Toast = React.forwardRef<
 42:   React.ElementRef<typeof ToastPrimitives.Root>,
 43:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
 44:     VariantProps<typeof toastVariants>
 45: >(({ className, variant, ...props }, ref) => {
 46:   return (
 47:     <ToastPrimitives.Root
 48:       ref={ref}
 49:       className={cn(toastVariants({ variant }), className)}
 50:       {...props}
 51:     />
 52:   )
 53: })
 54: Toast.displayName = ToastPrimitives.Root.displayName
 55: 
 56: const ToastAction = React.forwardRef<
 57:   React.ElementRef<typeof ToastPrimitives.Action>,
 58:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
 59: >(({ className, ...props }, ref) => (
 60:   <ToastPrimitives.Action
 61:     ref={ref}
 62:     className={cn(
 63:       "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
 64:       className
 65:     )}
 66:     {...props}
 67:   />
 68: ))
 69: ToastAction.displayName = ToastPrimitives.Action.displayName
 70: 
 71: const ToastClose = React.forwardRef<
 72:   React.ElementRef<typeof ToastPrimitives.Close>,
 73:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
 74: >(({ className, ...props }, ref) => (
 75:   <ToastPrimitives.Close
 76:     ref={ref}
 77:     className={cn(
 78:       "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
 79:       className
 80:     )}
 81:     toast-close=""
 82:     {...props}
 83:   >
 84:     <X className="h-4 w-4" />
 85:   </ToastPrimitives.Close>
 86: ))
 87: ToastClose.displayName = ToastPrimitives.Close.displayName
 88: 
 89: const ToastTitle = React.forwardRef<
 90:   React.ElementRef<typeof ToastPrimitives.Title>,
 91:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
 92: >(({ className, ...props }, ref) => (
 93:   <ToastPrimitives.Title
 94:     ref={ref}
 95:     className={cn("text-sm font-semibold", className)}
 96:     {...props}
 97:   />
 98: ))
 99: ToastTitle.displayName = ToastPrimitives.Title.displayName
100: 
101: const ToastDescription = React.forwardRef<
102:   React.ElementRef<typeof ToastPrimitives.Description>,
103:   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
104: >(({ className, ...props }, ref) => (
105:   <ToastPrimitives.Description
106:     ref={ref}
107:     className={cn("text-sm opacity-90", className)}
108:     {...props}
109:   />
110: ))
111: ToastDescription.displayName = ToastPrimitives.Description.displayName
112: 
113: type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
114: 
115: type ToastActionElement = React.ReactElement<typeof ToastAction>
116: 
117: export {
118:   type ToastProps,
119:   type ToastActionElement,
120:   ToastProvider,
121:   ToastViewport,
122:   Toast,
123:   ToastTitle,
124:   ToastDescription,
125:   ToastClose,
126:   ToastAction,
127: }
````

## File: src/components/ui/toaster.tsx
````typescript
 1: import { useToast } from "@/hooks/use-toast"
 2: import {
 3:   Toast,
 4:   ToastClose,
 5:   ToastDescription,
 6:   ToastProvider,
 7:   ToastTitle,
 8:   ToastViewport,
 9: } from "@/components/ui/toast"
10: 
11: export function Toaster() {
12:   const { toasts } = useToast()
13: 
14:   return (
15:     <ToastProvider>
16:       {toasts.map(function ({ id, title, description, action, ...props }) {
17:         return (
18:           <Toast key={id} {...props}>
19:             <div className="grid gap-1">
20:               {title && <ToastTitle>{title}</ToastTitle>}
21:               {description && (
22:                 <ToastDescription>{description}</ToastDescription>
23:               )}
24:             </div>
25:             {action}
26:             <ToastClose />
27:           </Toast>
28:         )
29:       })}
30:       <ToastViewport />
31:     </ToastProvider>
32:   )
33: }
````

## File: src/components/ui/toggle-group.tsx
````typescript
 1: import * as React from "react"
 2: import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
 3: import { type VariantProps } from "class-variance-authority"
 4: 
 5: import { cn } from "@/lib/utils"
 6: import { toggleVariants } from "@/components/ui/toggle"
 7: 
 8: const ToggleGroupContext = React.createContext<
 9:   VariantProps<typeof toggleVariants>
10: >({
11:   size: "default",
12:   variant: "default",
13: })
14: 
15: const ToggleGroup = React.forwardRef<
16:   React.ElementRef<typeof ToggleGroupPrimitive.Root>,
17:   React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
18:     VariantProps<typeof toggleVariants>
19: >(({ className, variant, size, children, ...props }, ref) => (
20:   <ToggleGroupPrimitive.Root
21:     ref={ref}
22:     className={cn("flex items-center justify-center gap-1", className)}
23:     {...props}
24:   >
25:     <ToggleGroupContext.Provider value={{ variant, size }}>
26:       {children}
27:     </ToggleGroupContext.Provider>
28:   </ToggleGroupPrimitive.Root>
29: ))
30: 
31: ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName
32: 
33: const ToggleGroupItem = React.forwardRef<
34:   React.ElementRef<typeof ToggleGroupPrimitive.Item>,
35:   React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
36:     VariantProps<typeof toggleVariants>
37: >(({ className, children, variant, size, ...props }, ref) => {
38:   const context = React.useContext(ToggleGroupContext)
39: 
40:   return (
41:     <ToggleGroupPrimitive.Item
42:       ref={ref}
43:       className={cn(
44:         toggleVariants({
45:           variant: context.variant || variant,
46:           size: context.size || size,
47:         }),
48:         className
49:       )}
50:       {...props}
51:     >
52:       {children}
53:     </ToggleGroupPrimitive.Item>
54:   )
55: })
56: 
57: ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName
58: 
59: export { ToggleGroup, ToggleGroupItem }
````

## File: src/components/ui/toggle.tsx
````typescript
 1: import * as React from "react"
 2: import * as TogglePrimitive from "@radix-ui/react-toggle"
 3: import { cva, type VariantProps } from "class-variance-authority"
 4: 
 5: import { cn } from "@/lib/utils"
 6: 
 7: const toggleVariants = cva(
 8:   "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
 9:   {
10:     variants: {
11:       variant: {
12:         default: "bg-transparent",
13:         outline:
14:           "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
15:       },
16:       size: {
17:         default: "h-10 px-3",
18:         sm: "h-9 px-2.5",
19:         lg: "h-11 px-5",
20:       },
21:     },
22:     defaultVariants: {
23:       variant: "default",
24:       size: "default",
25:     },
26:   }
27: )
28: 
29: const Toggle = React.forwardRef<
30:   React.ElementRef<typeof TogglePrimitive.Root>,
31:   React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
32:     VariantProps<typeof toggleVariants>
33: >(({ className, variant, size, ...props }, ref) => (
34:   <TogglePrimitive.Root
35:     ref={ref}
36:     className={cn(toggleVariants({ variant, size, className }))}
37:     {...props}
38:   />
39: ))
40: 
41: Toggle.displayName = TogglePrimitive.Root.displayName
42: 
43: export { Toggle, toggleVariants }
````

## File: src/components/ui/tooltip.tsx
````typescript
 1: import * as React from "react"
 2: import * as TooltipPrimitive from "@radix-ui/react-tooltip"
 3: 
 4: import { cn } from "@/lib/utils"
 5: 
 6: const TooltipProvider = TooltipPrimitive.Provider
 7: 
 8: const Tooltip = TooltipPrimitive.Root
 9: 
10: const TooltipTrigger = TooltipPrimitive.Trigger
11: 
12: const TooltipContent = React.forwardRef<
13:   React.ElementRef<typeof TooltipPrimitive.Content>,
14:   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
15: >(({ className, sideOffset = 4, ...props }, ref) => (
16:   <TooltipPrimitive.Content
17:     ref={ref}
18:     sideOffset={sideOffset}
19:     className={cn(
20:       "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
21:       className
22:     )}
23:     {...props}
24:   />
25: ))
26: TooltipContent.displayName = TooltipPrimitive.Content.displayName
27: 
28: export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: src/components/ui/use-toast.ts
````typescript
1: import { useToast, toast } from "@/hooks/use-toast";
2: 
3: export { useToast, toast };
````

## File: src/components/BottomNavigation.tsx
````typescript
 1: import React from 'react';
 2: import { useLocation, useNavigate } from 'react-router-dom';
 3: import { Heart, BookOpen, ChefHat, Home } from 'lucide-react';
 4: 
 5: const navItems = [
 6:   { id: 'mamas', label: 'Mamas', icon: Heart, path: '/' },
 7:   { id: 'recipes', label: 'Recipes', icon: BookOpen, path: '/recipes' },
 8:   { id: 'cook', label: 'Cook', icon: ChefHat, path: '/cook' },
 9:   { id: 'kitchen', label: 'My Kitchen', icon: Home, path: '/kitchen' },
10: ];
11: 
12: export const BottomNavigation = () => {
13:   const location = useLocation();
14:   const navigate = useNavigate();
15: 
16:   return (
17:     <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm z-50"
18:          style={{ 
19:            background: 'hsl(var(--logo-cream))',
20:            borderTop: '3px solid hsl(var(--logo-brown))',
21:            boxShadow: '0 -6px 16px -4px hsl(var(--logo-brown) / 0.4), 0 -2px 8px -2px hsl(var(--logo-brown) / 0.2)'
22:          }}>
23:       <div className="flex items-center justify-around h-20 px-2">
24:         {navItems.map((item) => {
25:           // Special handling for Cook tab to include both /cook and /cook/:recipeId
26:           const isActive = item.id === 'cook' 
27:             ? location.pathname === item.path || location.pathname.startsWith('/cook/')
28:             : location.pathname === item.path;
29:           const Icon = item.icon;
30:           
31:           return (
32:             <button
33:               key={item.id}
34:               onClick={() => {
35:                 if (item.id === 'cook') {
36:                   // Check for stored recipe first
37:                   const lastRecipeId = localStorage.getItem('lastCookingRecipe');
38:                   if (lastRecipeId) {
39:                     navigate(`/cook/${lastRecipeId}`);
40:                   } else {
41:                     // First time user - redirect to recipes
42:                     navigate('/recipes');
43:                   }
44:                 } else {
45:                   navigate(item.path);
46:                 }
47:               }}
48:               className={`flex flex-col items-center justify-center min-h-[48px] min-w-[48px] px-2 py-1 rounded-xl transition-all duration-200 ${
49:                 isActive 
50:                   ? 'bg-white/30 shadow-lg border border-white/40' 
51:                   : 'hover:bg-white/20 hover:shadow-md'
52:               }`}
53:               style={{ 
54:                 color: isActive 
55:                   ? 'hsl(var(--logo-brown))' 
56:                   : 'hsl(var(--logo-brown) / 0.7)'
57:               }}
58:             >
59:               <Icon size={24} className="mb-1" />
60:               <span className="text-sm font-bold font-heading">
61:                 {item.label}
62:               </span>
63:             </button>
64:           );
65:         })}
66:       </div>
67:     </nav>
68:   );
69: };
````

## File: src/components/CelebrationEffects.tsx
````typescript
  1: import { motion } from "framer-motion";
  2: import { useEffect, useState } from "react";
  3: import { CheckCircle, Star, Sparkles, ShoppingCart, Zap } from "lucide-react";
  4: 
  5: interface CelebrationEffectsProps {
  6:   trigger: boolean;
  7:   type?: 'completion' | 'added' | 'consolidated' | 'shared' | 'heart' | 'confetti' | 'cultural';
  8:   cultural?: 'italian' | 'mexican' | 'thai';
  9:   onComplete?: () => void;
 10: }
 11: 
 12: export const CelebrationEffects = ({ trigger, type = 'completion', cultural, onComplete }: CelebrationEffectsProps) => {
 13:   const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
 14: 
 15:   useEffect(() => {
 16:     if (trigger) {
 17:       // Generate random particles
 18:       const newParticles = Array.from({ length: 12 }, (_, i) => ({
 19:         id: i,
 20:         x: Math.random() * 100,
 21:         y: Math.random() * 100,
 22:         delay: Math.random() * 0.5
 23:       }));
 24:       setParticles(newParticles);
 25: 
 26:       // Clear particles after animation
 27:       const timer = setTimeout(() => {
 28:         setParticles([]);
 29:         onComplete?.();
 30:       }, 2000);
 31: 
 32:       return () => clearTimeout(timer);
 33:     }
 34:   }, [trigger, onComplete]);
 35: 
 36:   if (!trigger) return null;
 37: 
 38:   const getIcon = () => {
 39:     switch (type) {
 40:       case 'completion': return CheckCircle;
 41:       case 'added': return ShoppingCart;
 42:       case 'consolidated': return Zap;
 43:       case 'shared': return Sparkles;
 44:       case 'heart': return Star;
 45:       case 'confetti': return Sparkles;
 46:       case 'cultural': return Star;
 47:       default: return Star;
 48:     }
 49:   };
 50: 
 51:   const Icon = getIcon();
 52: 
 53:   const getColors = () => {
 54:     switch (type) {
 55:       case 'completion': return ['hsl(var(--success))', 'hsl(var(--success-dark))'];
 56:       case 'added': return ['hsl(var(--primary))', 'hsl(var(--primary-dark))'];
 57:       case 'consolidated': return ['hsl(var(--accent))', 'hsl(var(--accent-dark))'];
 58:       case 'shared': return ['hsl(var(--secondary))', 'hsl(var(--secondary-dark))'];
 59:       case 'heart': return ['#ef4444', '#dc2626']; // Red heart colors
 60:       case 'confetti': return ['hsl(var(--primary))', 'hsl(var(--accent))'];
 61:       case 'cultural': return cultural === 'italian' ? ['#8B0000', '#DC143C'] :
 62:                              cultural === 'mexican' ? ['#FF6B35', '#FF8C42'] :
 63:                              cultural === 'thai' ? ['#4A7C59', '#6B8E5A'] :
 64:                              ['hsl(var(--primary))', 'hsl(var(--primary-dark))'];
 65:       default: return ['hsl(var(--primary))', 'hsl(var(--primary-dark))'];
 66:     }
 67:   };
 68: 
 69:   const [primaryColor, secondaryColor] = getColors();
 70: 
 71:   return (
 72:     <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
 73:       {/* Main celebration icon */}
 74:       <motion.div
 75:         initial={{ scale: 0, rotate: -180, opacity: 0 }}
 76:         animate={{ scale: [0, 1.2, 1], rotate: 0, opacity: [0, 1, 1, 0] }}
 77:         transition={{ duration: 1.5, times: [0, 0.6, 0.8, 1] }}
 78:         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
 79:       >
 80:         <Icon 
 81:           size={64} 
 82:           style={{ color: primaryColor }}
 83:           className="drop-shadow-lg"
 84:         />
 85:       </motion.div>
 86: 
 87:       {/* Particle burst */}
 88:       {particles.map((particle) => (
 89:         <motion.div
 90:           key={particle.id}
 91:           initial={{ 
 92:             scale: 0,
 93:             x: "50vw",
 94:             y: "50vh",
 95:             opacity: 1
 96:           }}
 97:           animate={{
 98:             scale: [0, 1, 0],
 99:             x: `${particle.x}vw`,
100:             y: `${particle.y}vh`,
101:             opacity: [0, 1, 0]
102:           }}
103:           transition={{
104:             duration: 1.5,
105:             delay: particle.delay,
106:             ease: "easeOut"
107:           }}
108:           className="absolute"
109:         >
110:           <motion.div
111:             animate={{ rotate: 360 }}
112:             transition={{ duration: 1.5, delay: particle.delay }}
113:             className="w-3 h-3 rounded-full"
114:             style={{ 
115:               background: particle.id % 2 ? primaryColor : secondaryColor,
116:               boxShadow: `0 0 8px ${primaryColor}`
117:             }}
118:           />
119:         </motion.div>
120:       ))}
121: 
122:       {/* Ripple effect */}
123:       <motion.div
124:         initial={{ scale: 0, opacity: 0.6 }}
125:         animate={{ scale: 3, opacity: 0 }}
126:         transition={{ duration: 1.2, ease: "easeOut" }}
127:         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4"
128:         style={{ borderColor: primaryColor }}
129:       />
130: 
131:       {/* Secondary ripple */}
132:       <motion.div
133:         initial={{ scale: 0, opacity: 0.4 }}
134:         animate={{ scale: 4, opacity: 0 }}
135:         transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
136:         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2"
137:         style={{ borderColor: secondaryColor }}
138:       />
139:     </div>
140:   );
141: };
142: 
143: interface IngredientAnimationProps {
144:   ingredient: string;
145:   category: string;
146:   startPosition: { x: number; y: number };
147:   onComplete?: () => void;
148: }
149: 
150: export const IngredientAnimation = ({ ingredient, category, startPosition, onComplete }: IngredientAnimationProps) => {
151:   const getCategoryIcon = (cat: string) => {
152:     switch (cat.toLowerCase()) {
153:       case 'produce':
154:       case 'fruits':
155:       case 'vegetables': 
156:         return '🥕';
157:       case 'dairy':
158:         return '🥛';
159:       case 'meat':
160:       case 'proteins':
161:         return '🥩';
162:       case 'pantry':
163:       case 'grains':
164:         return '🌾';
165:       case 'spices':
166:         return '🧂';
167:       default:
168:         return '🛒';
169:     }
170:   };
171: 
172:   return (
173:     <motion.div
174:       initial={{ 
175:         x: startPosition.x,
176:         y: startPosition.y,
177:         scale: 1,
178:         opacity: 1
179:       }}
180:       animate={{
181:         x: window.innerWidth - 80,
182:         y: window.innerHeight - 80,
183:         scale: 0.5,
184:         opacity: 0.8
185:       }}
186:       exit={{ scale: 0, opacity: 0 }}
187:       transition={{ 
188:         duration: 0.8,
189:         ease: "easeInOut",
190:         delay: Math.random() * 0.3
191:       }}
192:       onAnimationComplete={onComplete}
193:       className="fixed pointer-events-none z-40 bg-background border rounded-lg px-2 py-1 shadow-lg"
194:     >
195:       <div className="flex items-center space-x-2 text-sm">
196:         <span className="text-base">{getCategoryIcon(category)}</span>
197:         <span className="font-medium">{ingredient}</span>
198:       </div>
199:     </motion.div>
200:   );
201: };
202: 
203: interface LoadingCelebrationProps {
204:   isVisible: boolean;
205:   steps: string[];
206:   currentStep: number;
207: }
208: 
209: export const LoadingCelebration = ({ isVisible, steps, currentStep }: LoadingCelebrationProps) => {
210:   if (!isVisible) return null;
211: 
212:   return (
213:     <motion.div
214:       initial={{ opacity: 0, scale: 0.9 }}
215:       animate={{ opacity: 1, scale: 1 }}
216:       exit={{ opacity: 0, scale: 0.9 }}
217:       className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
218:     >
219:       <motion.div
220:         initial={{ y: 20 }}
221:         animate={{ y: 0 }}
222:         className="bg-card border rounded-lg p-6 max-w-sm mx-4 text-center shadow-xl"
223:       >
224:         <motion.div
225:           animate={{ rotate: 360 }}
226:           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
227:           className="w-12 h-12 mx-auto mb-4"
228:         >
229:           <Sparkles size={48} className="text-primary" />
230:         </motion.div>
231:         
232:         <div className="space-y-3">
233:           {steps.map((step, index) => (
234:             <motion.div
235:               key={index}
236:               initial={{ opacity: 0.3 }}
237:               animate={{ 
238:                 opacity: index <= currentStep ? 1 : 0.3,
239:                 scale: index === currentStep ? 1.05 : 1
240:               }}
241:               className={`text-sm ${index <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}
242:             >
243:               {index <= currentStep && index < currentStep && '✓ '}{step}
244:             </motion.div>
245:           ))}
246:         </div>
247:       </motion.div>
248:     </motion.div>
249:   );
250: };
````

## File: src/components/ConversationInterface.tsx
````typescript
 1: import { useState } from 'react';
 2: import { Button } from '@/components/ui/button';
 3: import { Card } from '@/components/ui/card';
 4: import { Mic, MicOff, MessageCircle } from 'lucide-react';
 5: import { cn } from '@/lib/utils';
 6: 
 7: interface ConversationInterfaceProps {
 8:   isConnected: boolean;
 9:   currentTranscript: string;
10:   partialTranscript: string;
11:   error: string | null;
12:   onStartConversation: () => void;
13:   onStopConversation: () => void;
14: }
15: 
16: export const ConversationInterface = ({
17:   isConnected,
18:   currentTranscript,
19:   partialTranscript,
20:   error,
21:   onStartConversation,
22:   onStopConversation
23: }: ConversationInterfaceProps) => {
24:   const [isExpanded, setIsExpanded] = useState(false);
25: 
26:   const displayText = partialTranscript || currentTranscript;
27: 
28:   return (
29:     <div className="space-y-3">
30:       {/* Live Caption Bar */}
31:       {(displayText || error) && (
32:         <Card className="p-3 bg-background/80 backdrop-blur-sm border-accent/20">
33:           <div className="flex items-start gap-2">
34:             <MessageCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" />
35:             <div className="flex-1 min-w-0">
36:               {error ? (
37:                 <p className="text-sm text-destructive">{error}</p>
38:               ) : (
39:                 <p className={cn(
40:                   "text-sm",
41:                   partialTranscript ? "text-muted-foreground italic" : "text-foreground"
42:                 )}>
43:                   {displayText}
44:                 </p>
45:               )}
46:             </div>
47:           </div>
48:         </Card>
49:       )}
50: 
51:       {/* Microphone Control */}
52:       <div className="flex justify-center">
53:         <Button
54:           variant={isConnected ? "destructive" : "default"}
55:           size="lg"
56:           className={cn(
57:             "rounded-full w-16 h-16 shadow-lg transition-all duration-200",
58:             isConnected && "animate-pulse scale-110 bg-destructive hover:bg-destructive/90"
59:           )}
60:           onClick={isConnected ? onStopConversation : onStartConversation}
61:           disabled={!!error}
62:         >
63:           {isConnected ? (
64:             <MicOff className="w-6 h-6" />
65:           ) : (
66:             <Mic className="w-6 h-6" />
67:           )}
68:         </Button>
69:       </div>
70: 
71:       {/* Status Text */}
72:       <div className="text-center">
73:         <p className="text-xs text-muted-foreground">
74:           {error ? (
75:             "Voice chat unavailable"
76:           ) : isConnected ? (
77:             "Listening... Tap to end voice chat"
78:           ) : (
79:             "Tap to start voice chat with your Mama"
80:           )}
81:         </p>
82:       </div>
83:     </div>
84:   );
85: };
````

## File: src/components/CookingStreak.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { motion } from 'framer-motion';
  3: import { Flame, Star, Trophy, Calendar } from 'lucide-react';
  4: import { Card } from '@/components/ui/card';
  5: import { Badge } from '@/components/ui/badge';
  6: 
  7: interface CookingStreakProps {
  8:   currentStreak: number;
  9:   totalCookedMeals: number;
 10:   achievements: Achievement[];
 11: }
 12: 
 13: interface Achievement {
 14:   id: string;
 15:   title: string;
 16:   description: string;
 17:   icon: string;
 18:   unlocked: boolean;
 19:   cultural?: 'italian' | 'mexican' | 'thai';
 20: }
 21: 
 22: const CookingStreak: React.FC<CookingStreakProps> = ({
 23:   currentStreak,
 24:   totalCookedMeals,
 25:   achievements
 26: }) => {
 27:   const [showCelebration, setShowCelebration] = useState(false);
 28: 
 29:   useEffect(() => {
 30:     if (currentStreak > 0 && currentStreak % 7 === 0) {
 31:       setShowCelebration(true);
 32:       setTimeout(() => setShowCelebration(false), 3000);
 33:     }
 34:   }, [currentStreak]);
 35: 
 36:   const getStreakColor = () => {
 37:     if (currentStreak >= 30) return 'text-purple-500';
 38:     if (currentStreak >= 14) return 'text-orange-500';
 39:     if (currentStreak >= 7) return 'text-yellow-500';
 40:     return 'text-primary';
 41:   };
 42: 
 43:   const getStreakBadge = () => {
 44:     if (currentStreak >= 30) return '🔥 Cooking Master';
 45:     if (currentStreak >= 14) return '👨‍🍳 Chef Level';
 46:     if (currentStreak >= 7) return '🌟 Week Warrior';
 47:     return '🔥 Getting Started';
 48:   };
 49: 
 50:   return (
 51:     <div className="space-y-6">
 52:       {/* Main Streak Display */}
 53:       <Card className="p-6 bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary/20">
 54:         <div className="flex items-center justify-between">
 55:           <div className="space-y-2">
 56:             <div className="flex items-center gap-3">
 57:               <motion.div
 58:                 animate={{ 
 59:                   scale: [1, 1.2, 1],
 60:                   rotateZ: [0, 5, -5, 0]
 61:                 }}
 62:                 transition={{ 
 63:                   duration: 2,
 64:                   repeat: Infinity,
 65:                   ease: "easeInOut"
 66:                 }}
 67:               >
 68:                 <Flame className={`w-8 h-8 ${getStreakColor()}`} />
 69:               </motion.div>
 70:               <div>
 71:                 <h3 className="text-2xl font-bold">{currentStreak} Day Streak</h3>
 72:                 <p className="text-muted-foreground">{getStreakBadge()}</p>
 73:               </div>
 74:             </div>
 75:             
 76:             <div className="flex items-center gap-4 text-sm text-muted-foreground">
 77:               <div className="flex items-center gap-1">
 78:                 <Calendar className="w-4 h-4" />
 79:                 {totalCookedMeals} meals cooked
 80:               </div>
 81:             </div>
 82:           </div>
 83: 
 84:           {/* Streak Visualization */}
 85:           <div className="flex gap-1">
 86:             {Array.from({ length: 7 }, (_, i) => (
 87:               <motion.div
 88:                 key={i}
 89:                 className={`w-3 h-8 rounded-full ${
 90:                   i < (currentStreak % 7) ? 'bg-primary' : 'bg-muted'
 91:                 }`}
 92:                 initial={{ scale: 0 }}
 93:                 animate={{ scale: 1 }}
 94:                 transition={{ delay: i * 0.1 }}
 95:               />
 96:             ))}
 97:           </div>
 98:         </div>
 99:       </Card>
100: 
101:       {/* Achievements Grid */}
102:       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
103:         {achievements.map((achievement) => (
104:           <motion.div
105:             key={achievement.id}
106:             className={`
107:               p-4 rounded-lg border text-center space-y-2
108:               ${achievement.unlocked 
109:                 ? 'bg-gradient-to-b from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
110:                 : 'bg-muted/50 border-muted'
111:               }
112:             `}
113:             whileHover={{ scale: 1.05 }}
114:             whileTap={{ scale: 0.95 }}
115:           >
116:             <div className="text-3xl">{achievement.icon}</div>
117:             <h4 className={`font-medium text-sm ${
118:               achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
119:             }`}>
120:               {achievement.title}
121:             </h4>
122:             {achievement.unlocked && (
123:               <Badge variant="secondary" className="text-xs">
124:                 Unlocked!
125:               </Badge>
126:             )}
127:           </motion.div>
128:         ))}
129:       </div>
130: 
131:       {/* Celebration Animation */}
132:       {showCelebration && (
133:         <motion.div
134:           className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
135:           initial={{ opacity: 0 }}
136:           animate={{ opacity: 1 }}
137:           exit={{ opacity: 0 }}
138:         >
139:           <motion.div
140:             className="text-6xl"
141:             animate={{
142:               scale: [0, 1.5, 1],
143:               rotateZ: [0, 360, 720],
144:             }}
145:             transition={{ duration: 2 }}
146:           >
147:             🎉
148:           </motion.div>
149:           
150:           {/* Confetti */}
151:           {Array.from({ length: 20 }, (_, i) => (
152:             <motion.div
153:               key={i}
154:               className="absolute w-2 h-2 bg-primary rounded-full"
155:               style={{
156:                 left: `${Math.random() * 100}%`,
157:                 top: `${Math.random() * 100}%`,
158:               }}
159:               animate={{
160:                 y: [0, -100, 100],
161:                 x: [0, Math.random() * 200 - 100],
162:                 rotate: [0, 360],
163:                 opacity: [1, 1, 0],
164:               }}
165:               transition={{
166:                 duration: 3,
167:                 delay: Math.random() * 2,
168:               }}
169:             />
170:           ))}
171:         </motion.div>
172:       )}
173:     </div>
174:   );
175: };
176: 
177: export default CookingStreak;
````

## File: src/components/CookingTimer.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { Timer, Play, Pause, RotateCcw } from 'lucide-react';
  3: import { Button } from './ui/button';
  4: 
  5: interface CookingTimerProps {
  6:   isExpanded: boolean;
  7:   onToggle: () => void;
  8:   suggestedTimer?: {
  9:     display: string;
 10:     duration: number;
 11:     description?: string;
 12:   };
 13:   onTimerComplete?: () => void;
 14: }
 15: 
 16: export const CookingTimer = ({ isExpanded, onToggle, suggestedTimer, onTimerComplete }: CookingTimerProps) => {
 17:   const formatTime = (seconds: number) => {
 18:     const mins = Math.floor(seconds / 60);
 19:     const secs = seconds % 60;
 20:     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
 21:   };
 22: 
 23:   const [time, setTime] = useState(suggestedTimer?.duration || 300);
 24:   const [isRunning, setIsRunning] = useState(false);
 25:   const [inputTime, setInputTime] = useState(() => {
 26:     const duration = suggestedTimer?.duration || 300;
 27:     return formatTime(duration);
 28:   });
 29:   const [showSuggestion, setShowSuggestion] = useState(!!suggestedTimer);
 30: 
 31:   useEffect(() => {
 32:     let interval: NodeJS.Timeout;
 33:     if (isRunning && time > 0) {
 34:       interval = setInterval(() => {
 35:         setTime(time => time - 1);
 36:       }, 1000);
 37:     } else if (time === 0) {
 38:       setIsRunning(false);
 39:       onTimerComplete?.();
 40:     }
 41:     return () => clearInterval(interval);
 42:   }, [isRunning, time]);
 43: 
 44: 
 45:   const handleStart = () => {
 46:     if (time === 0) {
 47:       // Parse input time
 48:       const [mins, secs] = inputTime.split(':').map(Number);
 49:       setTime(mins * 60 + secs);
 50:     }
 51:     setIsRunning(!isRunning);
 52:     setShowSuggestion(false);
 53:   };
 54: 
 55:   const handleStartSuggested = () => {
 56:     if (suggestedTimer) {
 57:       setTime(suggestedTimer.duration);
 58:       setInputTime(formatTime(suggestedTimer.duration));
 59:       setIsRunning(true);
 60:       setShowSuggestion(false);
 61:     }
 62:   };
 63: 
 64:   const handleReset = () => {
 65:     setIsRunning(false);
 66:     const [mins, secs] = inputTime.split(':').map(Number);
 67:     setTime(mins * 60 + secs);
 68:   };
 69: 
 70:   if (!isExpanded) {
 71:     return (
 72:       <Button
 73:         onClick={onToggle}
 74:         className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
 75:       >
 76:         <Timer size={24} />
 77:       </Button>
 78:     );
 79:   }
 80: 
 81:   return (
 82:     <div className="fixed bottom-24 right-4 bg-card rounded-2xl p-4 shadow-lg border border-border min-w-[200px]">
 83:       <div className="flex items-center justify-between mb-4">
 84:         <h3 className="font-heading font-semibold text-lg">Timer</h3>
 85:         <Button
 86:           variant="ghost"
 87:           size="sm"
 88:           onClick={onToggle}
 89:           className="text-muted-foreground"
 90:         >
 91:           ×
 92:         </Button>
 93:       </div>
 94: 
 95:       {/* Suggested Timer */}
 96:       {showSuggestion && suggestedTimer && (
 97:         <div className="mb-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
 98:           <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
 99:             Suggested for this step:
100:           </p>
101:           <p className="font-medium text-orange-800 dark:text-orange-200 mb-3">
102:             {suggestedTimer.display} - {suggestedTimer.description}
103:           </p>
104:           <Button
105:             onClick={handleStartSuggested}
106:             className="w-full bg-orange-500 text-white hover:bg-orange-600"
107:           >
108:             Start {suggestedTimer.display} Timer
109:           </Button>
110:         </div>
111:       )}
112: 
113:       <div className="text-center">
114:         <div className="text-3xl font-bold font-mono mb-4 text-foreground">
115:           {formatTime(time)}
116:         </div>
117: 
118:         {!isRunning && time === 0 && (
119:           <input
120:             type="text"
121:             value={inputTime}
122:             onChange={(e) => setInputTime(e.target.value)}
123:             className="text-center text-lg mb-4 bg-background border border-border rounded-lg p-2 w-full"
124:             placeholder="MM:SS"
125:           />
126:         )}
127: 
128:         <div className="flex gap-2 justify-center">
129:           <Button
130:             onClick={handleStart}
131:             className="bg-orange-500 text-white hover:bg-orange-600 min-h-[48px]"
132:           >
133:             {isRunning ? <Pause size={20} /> : <Play size={20} />}
134:           </Button>
135:           <Button
136:             onClick={handleReset}
137:             variant="outline"
138:             className="min-h-[48px]"
139:           >
140:             <RotateCcw size={20} />
141:           </Button>
142:         </div>
143:       </div>
144:     </div>
145:   );
146: };
````

## File: src/components/CulturalEmptyState.tsx
````typescript
  1: import React from 'react';
  2: 
  3: interface CulturalEmptyStateProps {
  4:   cultural?: 'italian' | 'mexican' | 'thai';
  5:   message?: string;
  6:   className?: string;
  7: }
  8: 
  9: const CulturalEmptyState: React.FC<CulturalEmptyStateProps> = ({ 
 10:   cultural, 
 11:   message,
 12:   className = '' 
 13: }) => {
 14:   const getEmptyStateContent = () => {
 15:     switch (cultural) {
 16:       case 'italian':
 17:         return {
 18:           emoji: '👵🏻',
 19:           grandma: 'Nonna',
 20:           message: message || "Nonna is still preparing her secret recipes...",
 21:           accent: 'text-italian',
 22:           pattern: 'bg-italian-pattern',
 23:           culturalEmojis: ['🍝', '🍷', '🧄', '🫒']
 24:         };
 25:       case 'mexican':
 26:         return {
 27:           emoji: '👵🏽',
 28:           grandma: 'Abuela',
 29:           message: message || "Abuela is gathering her special ingredients...",
 30:           accent: 'text-mexican',
 31:           pattern: 'bg-mexican-pattern',
 32:           culturalEmojis: ['🌶️', '🌮', '🥑', '🌽']
 33:         };
 34:       case 'thai':
 35:         return {
 36:           emoji: '👵🏻',
 37:           grandma: 'Mae',
 38:           message: message || "Mae is selecting the freshest herbs...",
 39:           accent: 'text-thai',
 40:           pattern: 'bg-thai-pattern',
 41:           culturalEmojis: ['🌿', '🥥', '🍛', '🌸']
 42:         };
 43:       default:
 44:         return {
 45:           emoji: '👵',
 46:           grandma: 'Grandma',
 47:           message: message || "No recipes available right now. Let's cook something!",
 48:           accent: 'text-primary',
 49:           pattern: '',
 50:           culturalEmojis: ['🍽️', '👨‍🍳', '❤️', '✨']
 51:         };
 52:     }
 53:   };
 54: 
 55:   const content = getEmptyStateContent();
 56: 
 57:   return (
 58:     <div className={`h-full flex items-center justify-center ${className}`}>
 59:       <div className={`text-center max-w-sm p-8 rounded-2xl ${content.pattern}`}>
 60:         {/* Floating cultural elements */}
 61:         <div className="relative mb-6">
 62:           <div className="absolute -top-4 -left-4 opacity-20">
 63:             {content.culturalEmojis.map((emoji, index) => (
 64:               <span 
 65:                 key={index}
 66:                 className="absolute text-2xl cultural-notes"
 67:                 style={{ 
 68:                   animationDelay: `${index * 0.5}s`,
 69:                   left: `${index * 20}px`,
 70:                   top: `${index * 10}px`
 71:                 }}
 72:               >
 73:                 {emoji}
 74:               </span>
 75:             ))}
 76:           </div>
 77:           
 78:           {/* Grandmother character with gentle bounce */}
 79:           <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>
 80:             {content.emoji}
 81:           </div>
 82:         </div>
 83:         
 84:         <h3 className={`font-heading font-bold text-xl mb-2 ${content.accent}`}>
 85:           Where are the recipes?
 86:         </h3>
 87:         
 88:         <p className={`font-handwritten text-lg mb-4 ${content.accent} opacity-80`}>
 89:           {content.message}
 90:         </p>
 91:         
 92:         <div className="flex justify-center space-x-2 opacity-50">
 93:           <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
 94:           <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
 95:           <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
 96:         </div>
 97:       </div>
 98:     </div>
 99:   );
100: };
101: 
102: export default CulturalEmptyState;
````

## File: src/components/DraggableShoppingItem.tsx
````typescript
  1: import { useState } from 'react';
  2: import { motion, PanInfo } from 'framer-motion';
  3: import { useSortable } from '@dnd-kit/sortable';
  4: import { CSS } from '@dnd-kit/utilities';
  5: import { Check, Trash2, GripVertical } from 'lucide-react';
  6: import { Button } from '@/components/ui/button';
  7: import { Badge } from '@/components/ui/badge';
  8: import { useShoppingList } from '@/contexts/ShoppingListContext';
  9: import { Tables } from '@/integrations/supabase/types';
 10: 
 11: interface DraggableShoppingItemProps {
 12:   item: Tables<'shopping_list_items'>;
 13:   isDragging?: boolean;
 14: }
 15: 
 16: export default function DraggableShoppingItem({ item, isDragging }: DraggableShoppingItemProps) {
 17:   const { toggleItemChecked, deleteItem } = useShoppingList();
 18:   const [dragX, setDragX] = useState(0);
 19:   const [isSwipeDeleting, setIsSwipeDeleting] = useState(false);
 20: 
 21:   const {
 22:     attributes,
 23:     listeners,
 24:     setNodeRef,
 25:     transform,
 26:     transition,
 27:     isDragging: isSortableDragging,
 28:   } = useSortable({ id: item.id });
 29: 
 30:   const style = {
 31:     transform: CSS.Transform.toString(transform),
 32:     transition,
 33:   };
 34: 
 35:   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
 36:     const threshold = 100;
 37:     
 38:     if (info.offset.x > threshold) {
 39:       // Swiped right - delete
 40:       setIsSwipeDeleting(true);
 41:       setTimeout(() => {
 42:         deleteItem(item.id);
 43:       }, 300);
 44:     } else if (info.offset.x < -threshold) {
 45:       // Swiped left - toggle check
 46:       toggleItemChecked(item.id);
 47:       setDragX(0);
 48:     } else {
 49:       // Snap back
 50:       setDragX(0);
 51:     }
 52:   };
 53: 
 54:   const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
 55:     setDragX(info.offset.x);
 56:   };
 57: 
 58:   return (
 59:     <motion.div
 60:       ref={setNodeRef}
 61:       style={style}
 62:       className={`relative overflow-hidden ${isDragging || isSortableDragging ? 'z-50' : ''}`}
 63:       initial={{ opacity: 0, y: 20 }}
 64:       animate={{ 
 65:         opacity: isSwipeDeleting ? 0 : 1, 
 66:         y: 0,
 67:         scale: isSwipeDeleting ? 0.8 : 1
 68:       }}
 69:       transition={{ duration: 0.2 }}
 70:     >
 71:       {/* Background Actions */}
 72:       <div className="absolute inset-0 flex items-center justify-between px-4">
 73:         <div className="flex items-center gap-2 text-green-600">
 74:           <Check className="w-5 h-5" />
 75:           <span className="font-medium">Mark Complete</span>
 76:         </div>
 77:         <div className="flex items-center gap-2 text-red-600">
 78:           <span className="font-medium">Delete</span>
 79:           <Trash2 className="w-5 h-5" />
 80:         </div>
 81:       </div>
 82: 
 83:       {/* Main Item */}
 84:       <motion.div
 85:         drag="x"
 86:         dragConstraints={{ left: -150, right: 150 }}
 87:         dragElastic={0.1}
 88:         onDrag={handleDrag}
 89:         onDragEnd={handleDragEnd}
 90:         animate={{ x: dragX }}
 91:         className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
 92:           isDragging || isSortableDragging
 93:             ? 'bg-white shadow-elegant scale-105 rotate-2'
 94:             : item.checked
 95:             ? 'bg-muted/40'
 96:             : 'bg-white shadow-sm hover:shadow-md'
 97:         }`}
 98:       >
 99:         {/* Drag Handle */}
100:         <div
101:           {...attributes}
102:           {...listeners}
103:           className="touch-none cursor-grab active:cursor-grabbing p-1 hover:bg-muted/50 rounded transition-colors"
104:         >
105:           <GripVertical className="w-4 h-4 text-muted-foreground" />
106:         </div>
107: 
108:         {/* Checkbox */}
109:         <motion.button
110:           onClick={() => toggleItemChecked(item.id)}
111:           className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
112:             item.checked
113:               ? 'bg-primary border-primary text-primary-foreground'
114:               : 'border-muted-foreground/30 hover:border-primary'
115:           }`}
116:           whileTap={{ scale: 0.9 }}
117:           whileHover={{ scale: 1.05 }}
118:         >
119:           {item.checked && (
120:             <motion.div
121:               initial={{ scale: 0, rotate: 180 }}
122:               animate={{ scale: 1, rotate: 0 }}
123:               transition={{ type: "spring", stiffness: 500, damping: 30 }}
124:             >
125:               <Check className="w-3 h-3" />
126:             </motion.div>
127:           )}
128:         </motion.button>
129:         
130:         {/* Content */}
131:         <div className="flex-1 min-w-0">
132:           <motion.span 
133:             className={`block font-medium transition-all duration-200 ${
134:               item.checked 
135:                 ? 'text-muted-foreground line-through' 
136:                 : 'text-foreground'
137:             }`}
138:             animate={{ 
139:               opacity: item.checked ? 0.6 : 1,
140:               scale: item.checked ? 0.95 : 1
141:             }}
142:           >
143:             {item.ingredient_name}
144:           </motion.span>
145:           {item.quantity && (
146:             <span className={`text-sm transition-colors duration-200 ${
147:               item.checked ? 'text-muted-foreground/60' : 'text-muted-foreground'
148:             }`}>
149:               {item.quantity}
150:             </span>
151:           )}
152:           {item.recipe_name && (
153:             <motion.div
154:               initial={{ opacity: 0, scale: 0.8 }}
155:               animate={{ opacity: 1, scale: 1 }}
156:               transition={{ delay: 0.1 }}
157:             >
158:               <Badge variant="outline" className="text-xs mt-1">
159:                 From {item.recipe_name}
160:               </Badge>
161:             </motion.div>
162:           )}
163:         </div>
164: 
165:         {/* Delete Button */}
166:         <Button
167:           variant="ghost"
168:           size="sm"
169:           onClick={() => deleteItem(item.id)}
170:           className="text-muted-foreground hover:text-destructive opacity-60 hover:opacity-100 transition-all"
171:         >
172:           <Trash2 className="h-4 w-4" />
173:         </Button>
174:       </motion.div>
175:     </motion.div>
176:   );
177: }
````

## File: src/components/EnhancedLoadingStates.tsx
````typescript
  1: import { Skeleton } from "@/components/ui/skeleton";
  2: import { Card } from "@/components/ui/card";
  3: 
  4: export const ShoppingItemSkeleton = () => (
  5:   <Card className="p-4 mb-2">
  6:     <div className="flex items-center space-x-3">
  7:       <Skeleton className="h-5 w-5 rounded" />
  8:       <div className="flex-1 space-y-2">
  9:         <Skeleton className="h-4 w-3/4" />
 10:         <Skeleton className="h-3 w-1/2" />
 11:       </div>
 12:       <Skeleton className="h-4 w-4" />
 13:     </div>
 14:   </Card>
 15: );
 16: 
 17: export const ShoppingListSkeleton = () => (
 18:   <div className="space-y-4">
 19:     <div className="flex items-center justify-between mb-4">
 20:       <Skeleton className="h-8 w-48" />
 21:       <Skeleton className="h-8 w-8 rounded-full" />
 22:     </div>
 23:     
 24:     <div className="space-y-2">
 25:       <Skeleton className="h-2 w-full rounded-full" />
 26:       <div className="flex justify-between text-sm">
 27:         <Skeleton className="h-4 w-20" />
 28:         <Skeleton className="h-4 w-16" />
 29:       </div>
 30:     </div>
 31: 
 32:     <div className="space-y-2">
 33:       {Array.from({ length: 6 }).map((_, i) => (
 34:         <ShoppingItemSkeleton key={i} />
 35:       ))}
 36:     </div>
 37:   </div>
 38: );
 39: 
 40: export const RecipeCardSkeleton = () => (
 41:   <Card className="overflow-hidden">
 42:     <Skeleton className="h-48 w-full" />
 43:     <div className="p-4 space-y-2">
 44:       <Skeleton className="h-6 w-3/4" />
 45:       <Skeleton className="h-4 w-1/2" />
 46:       <div className="flex items-center space-x-2 mt-2">
 47:         <Skeleton className="h-4 w-4 rounded-full" />
 48:         <Skeleton className="h-4 w-16" />
 49:       </div>
 50:     </div>
 51:   </Card>
 52: );
 53: 
 54: export const CategorizationSkeleton = () => (
 55:   <div className="space-y-4 p-4">
 56:     <div className="flex items-center space-x-2">
 57:       <Skeleton className="h-5 w-5" />
 58:       <Skeleton className="h-5 w-32" />
 59:     </div>
 60:     
 61:     <div className="grid grid-cols-2 gap-2">
 62:       {Array.from({ length: 4 }).map((_, i) => (
 63:         <div key={i} className="space-y-2">
 64:           <Skeleton className="h-4 w-20" />
 65:           <div className="space-y-1">
 66:             {Array.from({ length: 2 + i % 3 }).map((_, j) => (
 67:               <Skeleton key={j} className="h-3 w-full" />
 68:             ))}
 69:           </div>
 70:         </div>
 71:       ))}
 72:     </div>
 73:     
 74:     <div className="flex space-x-2">
 75:       <Skeleton className="h-8 w-20" />
 76:       <Skeleton className="h-8 w-24" />
 77:     </div>
 78:   </div>
 79: );
 80: 
 81: export const LoadingSpinner = ({ size = "default" }: { size?: "sm" | "default" | "lg" }) => {
 82:   const sizeClasses = {
 83:     sm: "h-4 w-4",
 84:     default: "h-6 w-6", 
 85:     lg: "h-8 w-8"
 86:   };
 87: 
 88:   return (
 89:     <div className="flex items-center justify-center">
 90:       <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-muted-foreground border-t-primary`} />
 91:     </div>
 92:   );
 93: };
 94: 
 95: export const PulseLoader = ({ text = "Loading..." }: { text?: string }) => (
 96:   <div className="flex items-center space-x-2">
 97:     <div className="flex space-x-1">
 98:       <div className="h-2 w-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
 99:       <div className="h-2 w-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
100:       <div className="h-2 w-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
101:     </div>
102:     <span className="text-sm text-muted-foreground">{text}</span>
103:   </div>
104: );
105: 
106: export const ProgressiveLoader = ({ steps, currentStep }: { steps: string[], currentStep: number }) => (
107:   <div className="space-y-3">
108:     {steps.map((step, index) => (
109:       <div key={index} className="flex items-center space-x-3">
110:         <div className={`h-2 w-2 rounded-full ${
111:           index < currentStep ? 'bg-primary' : 
112:           index === currentStep ? 'bg-primary animate-pulse' :
113:           'bg-muted'
114:         }`} />
115:         <span className={`text-sm ${
116:           index < currentStep ? 'text-foreground' :
117:           index === currentStep ? 'text-primary' :
118:           'text-muted-foreground'
119:         }`}>
120:           {step}
121:         </span>
122:       </div>
123:     ))}
124:   </div>
125: );
````

## File: src/components/EnhancedVoiceIndicator.tsx
````typescript
  1: import React from 'react';
  2: import { motion } from 'framer-motion';
  3: 
  4: interface EnhancedVoiceIndicatorProps {
  5:   status: 'idle' | 'speaking' | 'listening' | 'processing';
  6:   mamaAvatar?: string;
  7:   mamaName?: string;
  8:   cultural?: 'italian' | 'mexican' | 'thai';
  9: }
 10: 
 11: const EnhancedVoiceIndicator: React.FC<EnhancedVoiceIndicatorProps> = ({
 12:   status,
 13:   mamaAvatar,
 14:   mamaName,
 15:   cultural
 16: }) => {
 17:   const getStatusText = () => {
 18:     switch (status) {
 19:       case 'speaking':
 20:         return `${mamaName || 'Nonna'} speaking...`;
 21:       case 'listening':
 22:         return 'Listening...';
 23:       case 'processing':
 24:         return 'Processing...';
 25:       default:
 26:         return 'Ready to help';
 27:     }
 28:   };
 29: 
 30:   const getStatusColor = () => {
 31:     switch (status) {
 32:       case 'speaking':
 33:         return 'hsl(140 70% 60%)'; // Green
 34:       case 'listening':
 35:         return 'hsl(220 90% 60%)'; // Blue
 36:       case 'processing':
 37:         return 'hsl(18 90% 55%)'; // Orange
 38:       default:
 39:         return 'hsl(var(--muted-foreground))';
 40:     }
 41:   };
 42: 
 43:   const getCulturalAccent = () => {
 44:     switch (cultural) {
 45:       case 'italian':
 46:         return 'hsl(var(--italian-accent))';
 47:       case 'mexican':
 48:         return 'hsl(var(--mexican-accent))';
 49:       case 'thai':
 50:         return 'hsl(var(--thai-accent))';
 51:       default:
 52:         return 'hsl(var(--primary))';
 53:     }
 54:   };
 55: 
 56:   const waveAnimation = {
 57:     speaking: {
 58:       height: [4, 20, 4],
 59:       backgroundColor: 'hsl(140 70% 60%)',
 60:     },
 61:     listening: {
 62:       height: [8, 16, 8],
 63:       backgroundColor: 'hsl(220 90% 60%)',
 64:     },
 65:     processing: {
 66:       scale: [1, 1.2, 1],
 67:       backgroundColor: 'hsl(18 90% 55%)',
 68:     },
 69:     idle: {
 70:       height: 4,
 71:       backgroundColor: 'hsl(var(--muted-foreground))',
 72:     }
 73:   };
 74: 
 75:   return (
 76:     <div className="flex flex-col items-center space-y-4 p-6">
 77:       {/* Mama Avatar (when speaking) */}
 78:       {status === 'speaking' && mamaAvatar && (
 79:         <motion.div
 80:           initial={{ scale: 0, opacity: 0 }}
 81:           animate={{ scale: 1, opacity: 1 }}
 82:           exit={{ scale: 0, opacity: 0 }}
 83:           className="relative"
 84:         >
 85:           <motion.div
 86:             className="w-16 h-16 rounded-full overflow-hidden border-4"
 87:             style={{ borderColor: getCulturalAccent() }}
 88:             animate={{
 89:               boxShadow: [
 90:                 `0 0 0 0 ${getCulturalAccent()}40`,
 91:                 `0 0 0 10px ${getCulturalAccent()}20`,
 92:                 `0 0 0 20px ${getCulturalAccent()}00`,
 93:               ]
 94:             }}
 95:             transition={{ duration: 2, repeat: Infinity }}
 96:           >
 97:             <img
 98:               src={mamaAvatar}
 99:               alt={mamaName}
100:               className="w-full h-full object-cover"
101:             />
102:           </motion.div>
103:           
104:           {/* Speech bubble indicator */}
105:           <motion.div
106:             className="absolute -top-8 -right-2 bg-white rounded-full p-2 shadow-lg"
107:             animate={{ y: [-2, 2, -2] }}
108:             transition={{ duration: 2, repeat: Infinity }}
109:           >
110:             <div className="text-xs">💬</div>
111:           </motion.div>
112:         </motion.div>
113:       )}
114: 
115:       {/* Waveform Visualization */}
116:       <div className="flex items-center justify-center space-x-1 h-8">
117:         {Array.from({ length: 8 }, (_, i) => (
118:           <motion.div
119:             key={i}
120:             className="w-1 rounded-full"
121:             style={{ backgroundColor: getStatusColor() }}
122:             variants={waveAnimation}
123:             animate={status}
124:             transition={{
125:               duration: status === 'processing' ? 1 : 0.5,
126:               repeat: status !== 'idle' ? Infinity : 0,
127:               delay: i * 0.1,
128:               ease: status === 'processing' ? 'easeInOut' : 'linear',
129:             }}
130:             initial={{ height: 4 }}
131:           />
132:         ))}
133:       </div>
134: 
135:       {/* Status Text */}
136:       <motion.p
137:         className="text-sm font-medium text-center"
138:         style={{ color: getStatusColor() }}
139:         animate={{ opacity: [0.7, 1, 0.7] }}
140:         transition={{ duration: 2, repeat: Infinity }}
141:       >
142:         {getStatusText()}
143:       </motion.p>
144: 
145:       {/* Cultural Background Pattern */}
146:       {cultural && (
147:         <div className="absolute inset-0 opacity-5 pointer-events-none">
148:           {cultural === 'italian' && (
149:             <div className="w-full h-full bg-gradient-to-br from-red-500 via-white to-green-500" />
150:           )}
151:           {cultural === 'mexican' && (
152:             <div className="w-full h-full bg-gradient-to-br from-red-500 via-white to-green-600" />
153:           )}
154:           {cultural === 'thai' && (
155:             <div className="w-full h-full bg-gradient-to-br from-red-600 via-white to-blue-600" />
156:           )}
157:         </div>
158:       )}
159: 
160:       {/* Interactive Tap Area */}
161:       {status === 'idle' && (
162:         <motion.div
163:           className="mt-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 cursor-pointer"
164:           whileHover={{ scale: 1.05 }}
165:           whileTap={{ scale: 0.95 }}
166:         >
167:           <p className="text-xs text-primary">Tap to speak</p>
168:         </motion.div>
169:       )}
170:     </div>
171:   );
172: };
173: 
174: export default EnhancedVoiceIndicator;
````

## File: src/components/EnhancedVoiceInterface.tsx
````typescript
  1: import { useState, useEffect } from 'react';
  2: import { Button } from '@/components/ui/button';
  3: import { Card } from '@/components/ui/card';
  4: import { Mic, MicOff, VolumeX, Volume2, Square } from 'lucide-react';
  5: import { cn } from '@/lib/utils';
  6: import { Mama } from '@/data/mamas';
  7: 
  8: interface EnhancedVoiceInterfaceProps {
  9:   mama: Mama;
 10:   isConnected: boolean;
 11:   isSpeaking: boolean;
 12:   isListening: boolean;
 13:   currentTranscript: string;
 14:   partialTranscript: string;
 15:   error: string | null;
 16:   currentStep: number;
 17:   totalSteps: number;
 18:   onStartConversation: () => void;
 19:   onStopConversation: () => void;
 20:   onInterrupt: () => void;
 21: }
 22: 
 23: type VoiceState = 'idle' | 'listening' | 'speaking' | 'thinking' | 'interrupted';
 24: 
 25: export const EnhancedVoiceInterface = ({
 26:   mama,
 27:   isConnected,
 28:   isSpeaking,
 29:   isListening,
 30:   currentTranscript,
 31:   partialTranscript,
 32:   error,
 33:   currentStep,
 34:   totalSteps,
 35:   onStartConversation,
 36:   onStopConversation,
 37:   onInterrupt
 38: }: EnhancedVoiceInterfaceProps) => {
 39:   const [voiceState, setVoiceState] = useState<VoiceState>('idle');
 40: 
 41:   // Update voice state based on props
 42:   useEffect(() => {
 43:     if (error) {
 44:       setVoiceState('idle');
 45:     } else if (isSpeaking) {
 46:       setVoiceState('speaking');
 47:     } else if (isListening || partialTranscript) {
 48:       setVoiceState('listening');
 49:     } else if (isConnected) {
 50:       setVoiceState('thinking');
 51:     } else {
 52:       setVoiceState('idle');
 53:     }
 54:   }, [error, isSpeaking, isListening, partialTranscript, isConnected]);
 55: 
 56:   const getStateConfig = (state: VoiceState) => {
 57:     switch (state) {
 58:       case 'listening':
 59:         return {
 60:           icon: Mic,
 61:           color: 'text-green-500',
 62:           bgColor: 'bg-green-500/10',
 63:           borderColor: 'border-green-500/30',
 64:           animation: 'animate-pulse',
 65:           message: "I'm listening, amore..."
 66:         };
 67:       case 'speaking':
 68:         return {
 69:           icon: Volume2,
 70:           color: 'text-blue-500',
 71:           bgColor: 'bg-blue-500/10',
 72:           borderColor: 'border-blue-500/30',
 73:           animation: 'animate-bounce',
 74:           message: `${mama.name} is speaking`
 75:         };
 76:       case 'thinking':
 77:         return {
 78:           icon: Mic,
 79:           color: 'text-yellow-500',
 80:           bgColor: 'bg-yellow-500/10',
 81:           borderColor: 'border-yellow-500/30',
 82:           animation: 'animate-pulse',
 83:           message: "Thinking..."
 84:         };
 85:       case 'interrupted':
 86:         return {
 87:           icon: Square,
 88:           color: 'text-orange-500',
 89:           bgColor: 'bg-orange-500/10',
 90:           borderColor: 'border-orange-500/30',
 91:           animation: '',
 92:           message: "Sì, tesoro?"
 93:         };
 94:       default:
 95:         return {
 96:           icon: MicOff,
 97:           color: 'text-muted-foreground',
 98:           bgColor: 'bg-muted',
 99:           borderColor: 'border-muted',
100:           animation: '',
101:           message: `Tap to talk with ${mama.name}`
102:         };
103:     }
104:   };
105: 
106:   const stateConfig = getStateConfig(voiceState);
107:   const Icon = stateConfig.icon;
108:   const displayText = partialTranscript || currentTranscript;
109: 
110:   return (
111:     <div className="space-y-4">
112:       {/* Progress Context */}
113:       <div className="text-center">
114:         <p className="text-sm text-muted-foreground">
115:           Step {currentStep} of {totalSteps} • Voice Cooking Mode
116:         </p>
117:       </div>
118: 
119:       {/* Live Caption Bar */}
120:       {(displayText || error) && (
121:         <Card className={cn(
122:           "p-4 transition-all duration-300",
123:           error ? "bg-destructive/10 border-destructive/20" : "bg-background/80 backdrop-blur-sm border-accent/20"
124:         )}>
125:           <div className="text-center">
126:             {error ? (
127:               <p className="text-sm text-destructive font-medium">{error}</p>
128:             ) : (
129:               <p className={cn(
130:                 "text-sm",
131:                 partialTranscript ? "text-muted-foreground italic" : "text-foreground font-medium"
132:               )}>
133:                 {displayText}
134:               </p>
135:             )}
136:           </div>
137:         </Card>
138:       )}
139: 
140:       {/* Large Voice Indicator */}
141:       <div className="flex flex-col items-center space-y-4">
142:         <div
143:           className={cn(
144:             "relative w-32 h-32 rounded-full border-4 flex items-center justify-center transition-all duration-300",
145:             stateConfig.bgColor,
146:             stateConfig.borderColor,
147:             stateConfig.animation
148:           )}
149:         >
150:           {/* Cultural styling ring */}
151:           <div className="absolute inset-0 rounded-full border-2 border-orange-200 dark:border-orange-800 opacity-50" />
152:           
153:           {/* Main icon */}
154:           <Icon className={cn("w-12 h-12", stateConfig.color)} />
155:           
156:           {/* Mama emoji overlay */}
157:           <div className="absolute -top-2 -right-2 text-2xl bg-background rounded-full p-1 border-2 border-background">
158:             {mama.emoji}
159:           </div>
160:         </div>
161: 
162:         {/* State Message */}
163:         <div className="text-center">
164:           <p className={cn(
165:             "text-lg font-medium font-handwritten",
166:             voiceState === 'speaking' ? "text-blue-600 dark:text-blue-400" : "text-foreground"
167:           )}>
168:             {stateConfig.message}
169:           </p>
170:         </div>
171:       </div>
172: 
173:       {/* Controls */}
174:       <div className="flex justify-center space-x-4">
175:         {/* Main Voice Button */}
176:         <Button
177:           variant={isConnected ? "destructive" : "default"}
178:           size="lg"
179:           className={cn(
180:             "w-20 h-20 rounded-full text-lg font-bold transition-all duration-200",
181:             isConnected && "scale-110"
182:           )}
183:           onClick={isConnected ? onStopConversation : onStartConversation}
184:           disabled={!!error}
185:         >
186:           {isConnected ? "Stop" : "Start"}
187:         </Button>
188: 
189:         {/* Emergency Interrupt Button */}
190:         {isConnected && (
191:           <Button
192:             variant="outline"
193:             size="lg"
194:             className="w-20 h-20 rounded-full bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20"
195:             onClick={onInterrupt}
196:           >
197:             <Square className="w-6 h-6 text-orange-600" />
198:           </Button>
199:         )}
200:       </div>
201: 
202:       {/* Cultural Interaction Hints */}
203:       <Card className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200">
204:         <div className="text-center space-y-1">
205:           <p className="text-xs text-orange-700 dark:text-orange-300 font-handwritten">
206:             {voiceState === 'idle' && `Try: "Hello ${mama.name}!" or "What are we cooking?"`}
207:             {voiceState === 'listening' && "Say 'next', 'repeat', or ask a question!"}
208:             {voiceState === 'speaking' && "Interrupt anytime by tapping the orange button"}
209:             {voiceState === 'thinking' && "Processing your request..."}
210:           </p>
211:         </div>
212:       </Card>
213:     </div>
214:   );
215: };
````

## File: src/components/ErrorBoundary.tsx
````typescript
  1: import React, { useState } from 'react';
  2: import { AlertTriangle, RefreshCw } from 'lucide-react';
  3: import { Button } from '@/components/ui/button';
  4: import { Alert, AlertDescription } from '@/components/ui/alert';
  5: 
  6: interface ErrorBoundaryProps {
  7:   children: React.ReactNode;
  8:   fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  9: }
 10: 
 11: interface ErrorBoundaryState {
 12:   hasError: boolean;
 13:   error: Error | null;
 14: }
 15: 
 16: class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
 17:   constructor(props: ErrorBoundaryProps) {
 18:     super(props);
 19:     this.state = { hasError: false, error: null };
 20:   }
 21: 
 22:   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
 23:     return { hasError: true, error };
 24:   }
 25: 
 26:   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
 27:     console.error('Error caught by boundary:', error, errorInfo);
 28:     
 29:     // Track error in analytics
 30:     try {
 31:       const analyticsData = {
 32:         event: 'error_boundary_triggered',
 33:         properties: {
 34:           error: error.message,
 35:           stack: error.stack,
 36:           componentStack: errorInfo.componentStack
 37:         },
 38:         timestamp: new Date().toISOString()
 39:       };
 40:       
 41:       const existing = JSON.parse(localStorage.getItem('analytics_events') || '[]');
 42:       existing.push(analyticsData);
 43:       localStorage.setItem('analytics_events', JSON.stringify(existing));
 44:     } catch (trackingError) {
 45:       console.warn('Failed to track error:', trackingError);
 46:     }
 47:   }
 48: 
 49:   resetError = () => {
 50:     this.setState({ hasError: false, error: null });
 51:   };
 52: 
 53:   render() {
 54:     if (this.state.hasError) {
 55:       if (this.props.fallback) {
 56:         const FallbackComponent = this.props.fallback;
 57:         return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
 58:       }
 59: 
 60:       return <DefaultErrorFallback error={this.state.error!} resetError={this.resetError} />;
 61:     }
 62: 
 63:     return this.props.children;
 64:   }
 65: }
 66: 
 67: interface DefaultErrorFallbackProps {
 68:   error: Error;
 69:   resetError: () => void;
 70: }
 71: 
 72: const DefaultErrorFallback: React.FC<DefaultErrorFallbackProps> = ({ error, resetError }) => {
 73:   const [isRetrying, setIsRetrying] = useState(false);
 74: 
 75:   const handleRetry = async () => {
 76:     setIsRetrying(true);
 77:     // Simulate retry delay
 78:     await new Promise(resolve => setTimeout(resolve, 1000));
 79:     setIsRetrying(false);
 80:     resetError();
 81:   };
 82: 
 83:   const getCulturalMessage = () => {
 84:     const messages = [
 85:       { character: '👵🏻', message: "Nonna says: 'Even the best recipes sometimes need a second try!'" },
 86:       { character: '👵🏽', message: "Abuela says: 'No te preocupes, mijo. Let's try again!'" },
 87:       { character: '👵🏻', message: "Mae says: 'Patience, dear one. Good things take time.'" }
 88:     ];
 89:     return messages[Math.floor(Math.random() * messages.length)];
 90:   };
 91: 
 92:   const culturalMessage = getCulturalMessage();
 93: 
 94:   return (
 95:     <div className="flex items-center justify-center min-h-screen p-4">
 96:       <div className="max-w-md w-full space-y-6">
 97:         <div className="text-center">
 98:           <div className="text-6xl mb-4">{culturalMessage.character}</div>
 99:           <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
100:             Oops! Something went wrong
101:           </h2>
102:         </div>
103: 
104:         <Alert className="border-primary/20">
105:           <AlertTriangle className="h-4 w-4" />
106:           <AlertDescription className="font-handwritten text-base">
107:             {culturalMessage.message}
108:           </AlertDescription>
109:         </Alert>
110: 
111:         <div className="space-y-3">
112:           <Button 
113:             onClick={handleRetry} 
114:             disabled={isRetrying}
115:             className="w-full"
116:             size="lg"
117:           >
118:             {isRetrying ? (
119:               <>
120:                 <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
121:                 Trying again...
122:               </>
123:             ) : (
124:               <>
125:                 <RefreshCw className="mr-2 h-4 w-4" />
126:                 Try Again
127:               </>
128:             )}
129:           </Button>
130: 
131:           <details className="text-sm text-muted-foreground">
132:             <summary className="cursor-pointer hover:text-foreground">
133:               Technical details
134:             </summary>
135:             <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
136:               {error.message}
137:             </pre>
138:           </details>
139:         </div>
140:       </div>
141:     </div>
142:   );
143: };
144: 
145: export default ErrorBoundary;
````

## File: src/components/FloatingCartButton.tsx
````typescript
  1: import { useState, useEffect } from 'react';
  2: import { motion, AnimatePresence } from 'framer-motion';
  3: import { ShoppingCart, X } from 'lucide-react';
  4: import { Button } from '@/components/ui/button';
  5: import { Badge } from '@/components/ui/badge';
  6: import { useShoppingList } from '@/contexts/ShoppingListContext';
  7: import { useNavigate } from 'react-router-dom';
  8: 
  9: interface FloatingCartButtonProps {
 10:   recentlyAdded?: number;
 11:   onDismiss?: () => void;
 12: }
 13: 
 14: export default function FloatingCartButton({ recentlyAdded = 0, onDismiss }: FloatingCartButtonProps) {
 15:   const { shoppingListItems } = useShoppingList();
 16:   const navigate = useNavigate();
 17:   const [isVisible, setIsVisible] = useState(false);
 18:   const [shouldPulse, setShouldPulse] = useState(false);
 19: 
 20:   const totalItems = shoppingListItems.filter(item => !item.checked).length;
 21: 
 22:   useEffect(() => {
 23:     if (recentlyAdded > 0) {
 24:       setIsVisible(true);
 25:       setShouldPulse(true);
 26:       
 27:       // Stop pulsing after 3 seconds
 28:       const timer = setTimeout(() => {
 29:         setShouldPulse(false);
 30:       }, 3000);
 31: 
 32:       return () => clearTimeout(timer);
 33:     }
 34:   }, [recentlyAdded]);
 35: 
 36:   useEffect(() => {
 37:     // Show button if there are items in the cart
 38:     if (totalItems > 0 && !isVisible) {
 39:       setIsVisible(true);
 40:     }
 41:   }, [totalItems, isVisible]);
 42: 
 43:   const handleNavigateToCart = () => {
 44:     navigate('/shopping-list');
 45:     onDismiss?.();
 46:   };
 47: 
 48:   const handleDismiss = () => {
 49:     setIsVisible(false);
 50:     onDismiss?.();
 51:   };
 52: 
 53:   if (!isVisible || totalItems === 0) return null;
 54: 
 55:   return (
 56:     <AnimatePresence>
 57:       <motion.div
 58:         initial={{ y: 100, opacity: 0 }}
 59:         animate={{ y: 0, opacity: 1 }}
 60:         exit={{ y: 100, opacity: 0 }}
 61:         className="fixed bottom-20 right-4 z-50"
 62:       >
 63:         <motion.div
 64:           animate={shouldPulse ? {
 65:             scale: [1, 1.1, 1],
 66:             rotate: [0, -5, 5, 0]
 67:           } : {}}
 68:           transition={shouldPulse ? {
 69:             scale: { duration: 0.5, repeat: Infinity, repeatDelay: 1 },
 70:             rotate: { duration: 0.3, repeat: Infinity, repeatDelay: 1.2 }
 71:           } : {}}
 72:           className="relative"
 73:         >
 74:           {/* Close Button */}
 75:           <Button
 76:             variant="ghost"
 77:             size="sm"
 78:             onClick={handleDismiss}
 79:             className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted/80 hover:bg-muted p-0 z-10"
 80:           >
 81:             <X className="w-3 h-3" />
 82:           </Button>
 83: 
 84:           {/* Cart Button */}
 85:           <Button
 86:             onClick={handleNavigateToCart}
 87:             className="relative w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-elegant p-0"
 88:           >
 89:             <motion.div
 90:               animate={shouldPulse ? { scale: [1, 1.2, 1] } : {}}
 91:               transition={{ duration: 0.6, repeat: shouldPulse ? Infinity : 0, repeatDelay: 0.5 }}
 92:             >
 93:               <ShoppingCart className="w-6 h-6" />
 94:             </motion.div>
 95:             
 96:             {/* Item Count Badge */}
 97:             <Badge 
 98:               className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center bg-primary-foreground text-primary font-bold text-xs shadow-sm"
 99:             >
100:               {totalItems}
101:             </Badge>
102:           </Button>
103: 
104:           {/* Recently Added Indicator */}
105:           {recentlyAdded > 0 && (
106:             <motion.div
107:               initial={{ scale: 0, opacity: 0 }}
108:               animate={{ scale: 1, opacity: 1 }}
109:               exit={{ scale: 0, opacity: 0 }}
110:               className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap"
111:             >
112:               +{recentlyAdded} added!
113:             </motion.div>
114:           )}
115:         </motion.div>
116:       </motion.div>
117:     </AnimatePresence>
118:   );
119: }
````

## File: src/components/Header.tsx
````typescript
 1: import React from 'react';
 2: import { Menu, User, CreditCard, Settings, LogOut } from 'lucide-react';
 3: import {
 4:   DropdownMenu,
 5:   DropdownMenuContent,
 6:   DropdownMenuItem,
 7:   DropdownMenuSeparator,
 8:   DropdownMenuTrigger,
 9: } from '@/components/ui/dropdown-menu';
10: import { Button } from '@/components/ui/button';
11: 
12: export const Header = () => {
13:   return (
14:     <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm z-50" 
15:             style={{ 
16:               background: 'hsl(var(--logo-cream))',
17:               borderBottom: '3px solid hsl(var(--logo-brown))',
18:               boxShadow: '0 6px 16px -4px hsl(var(--logo-brown) / 0.4), 0 2px 8px -2px hsl(var(--logo-brown) / 0.2)'
19:             }}>
20:       <div className="flex items-center justify-between h-20 px-4">
21:         <div className="flex items-center gap-3">
22:           <img 
23:             src="/lovable-uploads/35c616ae-06a9-49cb-b3e3-287c89fb124d.png" 
24:             alt="MAMIA Logo" 
25:             className="w-12 h-12 object-contain"
26:           />
27:           <h1 className="font-cinzel font-bold text-2xl tracking-widest" 
28:               style={{ color: 'hsl(var(--logo-brown))' }}>
29:             MAMIA
30:           </h1>
31:         </div>
32: 
33:         <DropdownMenu modal={false}>
34:           <DropdownMenuTrigger asChild>
35:             <Button
36:               variant="ghost"
37:               size="sm"
38:               className="h-10 px-3 rounded-full bg-white/20 border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-200"
39:               style={{ color: 'hsl(var(--logo-brown))' }}
40:             >
41:               <Menu className="h-5 w-5" />
42:             </Button>
43:           </DropdownMenuTrigger>
44:           <DropdownMenuContent 
45:             align="end" 
46:             sideOffset={8} 
47:             className="w-44 bg-card border-border shadow-paper z-[9999] mr-4"
48:             avoidCollisions={true}
49:             collisionPadding={16}
50:           >
51:             <DropdownMenuItem className="cursor-pointer hover:bg-accent">
52:               <User className="mr-2 h-4 w-4" />
53:               Profile
54:             </DropdownMenuItem>
55:             <DropdownMenuItem className="cursor-pointer hover:bg-accent">
56:               <CreditCard className="mr-2 h-4 w-4" />
57:               Subscription
58:             </DropdownMenuItem>
59:             <DropdownMenuItem className="cursor-pointer hover:bg-accent">
60:               <Settings className="mr-2 h-4 w-4" />
61:               Settings
62:             </DropdownMenuItem>
63:             <DropdownMenuSeparator />
64:             <DropdownMenuItem className="cursor-pointer hover:bg-accent text-destructive focus:text-destructive">
65:               <LogOut className="mr-2 h-4 w-4" />
66:               Sign Out
67:             </DropdownMenuItem>
68:           </DropdownMenuContent>
69:         </DropdownMenu>
70:       </div>
71:     </header>
72:   );
73: };
````

## File: src/components/Layout.tsx
````typescript
 1: import React from 'react';
 2: import { Header } from './Header';
 3: import { BottomNavigation } from './BottomNavigation';
 4: 
 5: interface LayoutProps {
 6:   children: React.ReactNode;
 7:   pageTitle?: string;
 8:   pageSubtitle?: string;
 9: }
10: 
11: export const Layout = ({ children, pageTitle, pageSubtitle }: LayoutProps) => {
12:   return (
13:     <div className="max-w-sm mx-auto bg-background min-h-screen relative shadow-paper">
14:       <Header />
15:       
16:       <main className="pt-20 pb-20 px-4 min-h-screen">
17:         {(pageTitle || pageSubtitle) && (
18:           <div className="text-center mb-6 pt-2">
19:             {pageTitle && (
20:               <h2 className="font-heading font-bold text-2xl text-slate-800 mb-2">
21:                 {pageTitle}
22:               </h2>
23:             )}
24:             {pageSubtitle && (
25:               <p className="text-slate-600 font-handwritten text-base">
26:                 {pageSubtitle}
27:               </p>
28:             )}
29:           </div>
30:         )}
31:         
32:         <div className="animate-fade-in">
33:           {children}
34:         </div>
35:       </main>
36:       
37:       <BottomNavigation />
38:     </div>
39:   );
40: };
````

## File: src/components/LazyImage.tsx
````typescript
 1: import React, { useState, useEffect, useRef } from 'react';
 2: import { useInView } from 'react-intersection-observer';
 3: 
 4: interface LazyImageProps {
 5:   src: string;
 6:   alt: string;
 7:   className?: string;
 8:   blurDataURL?: string;
 9:   onLoad?: () => void;
10:   onError?: () => void;
11: }
12: 
13: const LazyImage: React.FC<LazyImageProps> = ({
14:   src,
15:   alt,
16:   className = '',
17:   blurDataURL,
18:   onLoad,
19:   onError
20: }) => {
21:   const [isLoaded, setIsLoaded] = useState(false);
22:   const [hasError, setHasError] = useState(false);
23:   const { ref, inView } = useInView({
24:     threshold: 0.1,
25:     triggerOnce: true
26:   });
27: 
28:   const handleLoad = () => {
29:     setIsLoaded(true);
30:     onLoad?.();
31:   };
32: 
33:   const handleError = () => {
34:     setHasError(true);
35:     onError?.();
36:   };
37: 
38:   // Generate blur placeholder if not provided
39:   const defaultBlurDataURL = `data:image/svg+xml;base64,${btoa(`
40:     <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
41:       <rect width="100%" height="100%" fill="#f3f4f6"/>
42:       <rect x="30%" y="40%" width="40%" height="20%" fill="#e5e7eb" rx="4"/>
43:     </svg>
44:   `)}`;
45: 
46:   return (
47:     <div ref={ref} className={`relative overflow-hidden ${className}`}>
48:       {/* Blur placeholder */}
49:       <img
50:         src={blurDataURL || defaultBlurDataURL}
51:         alt=""
52:         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
53:           isLoaded ? 'opacity-0' : 'opacity-100'
54:         }`}
55:         style={{ filter: 'blur(4px)' }}
56:         aria-hidden="true"
57:       />
58:       
59:       {/* Actual image */}
60:       {inView && (
61:         <img
62:           src={hasError ? '/placeholder-recipe.jpg' : src}
63:           alt={alt}
64:           className={`w-full h-full object-cover transition-opacity duration-300 ${
65:             isLoaded ? 'opacity-100' : 'opacity-0'
66:           }`}
67:           onLoad={handleLoad}
68:           onError={handleError}
69:           loading="lazy"
70:         />
71:       )}
72:       
73:       {/* Loading indicator */}
74:       {!isLoaded && !hasError && inView && (
75:         <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
76:           <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
77:         </div>
78:       )}
79:       
80:       {/* Error state */}
81:       {hasError && (
82:         <div className="absolute inset-0 flex items-center justify-center bg-muted">
83:           <div className="text-center text-muted-foreground">
84:             <span className="text-2xl block mb-2">🖼️</span>
85:             <span className="text-sm">Image unavailable</span>
86:           </div>
87:         </div>
88:       )}
89:     </div>
90:   );
91: };
92: 
93: export default LazyImage;
````

## File: src/components/LoadingSkeleton.tsx
````typescript
  1: import React from 'react';
  2: 
  3: interface LoadingSkeletonProps {
  4:   variant?: 'recipe' | 'polaroid' | 'hero' | 'cooking';
  5:   count?: number;
  6:   cultural?: 'italian' | 'mexican' | 'thai';
  7: }
  8: 
  9: const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
 10:   variant = 'recipe', 
 11:   count = 1,
 12:   cultural 
 13: }) => {
 14:   const SkeletonCard = () => {
 15:     if (variant === 'cooking') {
 16:       return (
 17:         <div className="flex flex-col items-center justify-center p-8 space-y-6">
 18:           {/* Cooking Pot Animation */}
 19:           <div className="relative">
 20:             <div className="w-16 h-16 bg-primary/20 rounded-full cooking-pot flex items-center justify-center">
 21:               <span className="text-2xl">🍲</span>
 22:             </div>
 23:             {/* Steam Animation */}
 24:             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
 25:               {[...Array(3)].map((_, i) => (
 26:                 <div 
 27:                   key={i}
 28:                   className="w-1 h-4 bg-muted-foreground/30 rounded-full steam-rise"
 29:                   style={{ animationDelay: `${i * 0.3}s` }}
 30:                 />
 31:               ))}
 32:             </div>
 33:           </div>
 34:           
 35:           {/* Cultural Notes Animation */}
 36:           <div className="relative w-full flex justify-center">
 37:             {cultural && (
 38:               <div className="absolute flex space-x-8">
 39:                 {cultural === 'italian' && (
 40:                   <>
 41:                     <span className="text-lg cultural-notes" style={{ animationDelay: '0s' }}>🎵</span>
 42:                     <span className="text-lg cultural-notes" style={{ animationDelay: '1s' }}>🍝</span>
 43:                     <span className="text-lg cultural-notes" style={{ animationDelay: '2s' }}>🍷</span>
 44:                   </>
 45:                 )}
 46:                 {cultural === 'mexican' && (
 47:                   <>
 48:                     <span className="text-lg cultural-notes" style={{ animationDelay: '0s' }}>🌶️</span>
 49:                     <span className="text-lg cultural-notes" style={{ animationDelay: '1s' }}>🎺</span>
 50:                     <span className="text-lg cultural-notes" style={{ animationDelay: '2s' }}>🌮</span>
 51:                   </>
 52:                 )}
 53:                 {cultural === 'thai' && (
 54:                   <>
 55:                     <span className="text-lg cultural-notes" style={{ animationDelay: '0s' }}>🌿</span>
 56:                     <span className="text-lg cultural-notes" style={{ animationDelay: '1s' }}>🥥</span>
 57:                     <span className="text-lg cultural-notes" style={{ animationDelay: '2s' }}>🍛</span>
 58:                   </>
 59:                 )}
 60:               </div>
 61:             )}
 62:           </div>
 63:           
 64:           {/* Loading Text */}
 65:           <div className="text-center">
 66:             <div className="w-48 h-6 bg-muted-foreground/20 rounded mb-2 animate-pulse"></div>
 67:             <div className="w-32 h-4 bg-muted-foreground/15 rounded animate-pulse"></div>
 68:           </div>
 69:         </div>
 70:       );
 71:     }
 72: 
 73:     if (variant === 'hero') {
 74:       return (
 75:         <div className="h-48 bg-muted rounded-2xl animate-pulse">
 76:           <div className="p-6 h-full flex flex-col justify-between">
 77:             <div className="w-32 h-6 bg-muted-foreground/20 rounded-full"></div>
 78:             <div>
 79:               <div className="w-48 h-8 bg-muted-foreground/20 rounded mb-2"></div>
 80:               <div className="flex gap-4">
 81:                 <div className="w-20 h-4 bg-muted-foreground/20 rounded"></div>
 82:                 <div className="w-24 h-4 bg-muted-foreground/20 rounded"></div>
 83:               </div>
 84:             </div>
 85:           </div>
 86:         </div>
 87:       );
 88:     }
 89: 
 90:     if (variant === 'polaroid') {
 91:       const culturalPattern = cultural 
 92:         ? `bg-${cultural}-pattern` 
 93:         : '';
 94:       
 95:       return (
 96:         <div className={`bg-white rounded-lg shadow-warm border-4 border-white animate-pulse ${culturalPattern}`}>
 97:           <div className="aspect-square bg-muted rounded-t overflow-hidden">
 98:             <div className="w-full h-full bg-muted-foreground/10"></div>
 99:           </div>
100:           <div className="p-4">
101:             <div className="flex items-center justify-between mb-2">
102:               <div className="w-8 h-8 bg-muted-foreground/20 rounded"></div>
103:               <div className="w-12 h-5 bg-muted-foreground/20 rounded-full"></div>
104:             </div>
105:             <div className="w-32 h-6 bg-muted-foreground/20 rounded mb-1"></div>
106:             <div className="w-16 h-4 bg-muted-foreground/20 rounded"></div>
107:           </div>
108:         </div>
109:       );
110:     }
111: 
112:     const culturalPattern = cultural 
113:       ? `bg-${cultural}-pattern` 
114:       : '';
115:     
116:     return (
117:       <div className={`bg-white rounded-xl shadow-warm overflow-hidden animate-pulse ${culturalPattern}`}>
118:         <div className="aspect-video bg-muted relative">
119:           {/* Subtle cooking utensil animation */}
120:           <div className="absolute top-2 right-2 opacity-30">
121:             <span className="text-lg spoon-stir">🥄</span>
122:           </div>
123:         </div>
124:         <div className="p-4">
125:           <div className="flex items-center justify-between mb-2">
126:             <div className="flex items-center gap-2">
127:               <div className="w-6 h-6 bg-muted-foreground/20 rounded"></div>
128:               <div className="w-20 h-4 bg-muted-foreground/20 rounded"></div>
129:             </div>
130:             <div className="w-16 h-5 bg-muted-foreground/20 rounded-full"></div>
131:           </div>
132:           <div className="w-40 h-6 bg-muted-foreground/20 rounded mb-2"></div>
133:           <div className="space-y-2 mb-3">
134:             <div className="w-full h-4 bg-muted-foreground/20 rounded"></div>
135:             <div className="w-3/4 h-4 bg-muted-foreground/20 rounded"></div>
136:           </div>
137:           <div className="flex items-center gap-4">
138:             <div className="w-16 h-4 bg-muted-foreground/20 rounded"></div>
139:             <div className="w-20 h-4 bg-muted-foreground/20 rounded"></div>
140:           </div>
141:         </div>
142:       </div>
143:     );
144:   };
145: 
146:   return (
147:     <>
148:       {Array.from({ length: count }, (_, i) => (
149:         <SkeletonCard key={i} />
150:       ))}
151:     </>
152:   );
153: };
154: 
155: export default LoadingSkeleton;
````

## File: src/components/MasonryRecipeGrid.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { motion } from 'framer-motion';
  3: import { Recipe } from '@/data/recipes';
  4: import RecipeCard from '@/components/RecipeCard';
  5: 
  6: interface MasonryRecipeGridProps {
  7:   recipes: Recipe[];
  8:   onRecipeClick: (recipeId: string) => void;
  9: }
 10: 
 11: const MasonryRecipeGrid: React.FC<MasonryRecipeGridProps> = ({
 12:   recipes,
 13:   onRecipeClick
 14: }) => {
 15:   const [columns, setColumns] = useState(3);
 16: 
 17:   useEffect(() => {
 18:     const handleResize = () => {
 19:       if (window.innerWidth < 480) setColumns(1);
 20:       else if (window.innerWidth < 768) setColumns(2);
 21:       else setColumns(3);
 22:     };
 23: 
 24:     handleResize();
 25:     window.addEventListener('resize', handleResize);
 26:     return () => window.removeEventListener('resize', handleResize);
 27:   }, []);
 28: 
 29:   const distributeRecipes = () => {
 30:     const columnArrays: Recipe[][] = Array.from({ length: columns }, () => []);
 31:     
 32:     recipes.forEach((recipe, index) => {
 33:       const columnIndex = index % columns;
 34:       columnArrays[columnIndex].push(recipe);
 35:     });
 36: 
 37:     return columnArrays;
 38:   };
 39: 
 40:   const getCulturalGradient = (mamaId: number) => {
 41:     switch (mamaId) {
 42:       case 1: // Italian
 43:         return 'from-red-500/20 via-white/10 to-green-500/20';
 44:       case 2: // Mexican
 45:         return 'from-orange-500/20 via-yellow-500/10 to-pink-500/20';
 46:       case 3: // Thai
 47:         return 'from-green-500/20 via-yellow-500/10 to-blue-500/20';
 48:       default:
 49:         return 'from-primary/10 to-secondary/10';
 50:     }
 51:   };
 52: 
 53:   const distributedRecipes = distributeRecipes();
 54: 
 55:   return (
 56:     <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
 57:       {distributedRecipes.map((columnRecipes, columnIndex) => (
 58:         <div key={columnIndex} className="space-y-4">
 59:           {columnRecipes.map((recipe, index) => (
 60:             <motion.div
 61:               key={recipe.id}
 62:               initial={{ opacity: 0, y: 50, scale: 0.9 }}
 63:               animate={{ opacity: 1, y: 0, scale: 1 }}
 64:               transition={{ 
 65:                 delay: (columnIndex * 0.1) + (index * 0.2),
 66:                 duration: 0.5,
 67:                 type: "spring",
 68:                 stiffness: 100
 69:               }}
 70:               whileHover={{ 
 71:                 scale: 1.02,
 72:                 rotateZ: Math.random() > 0.5 ? 1 : -1,
 73:                 transition: { duration: 0.2 }
 74:               }}
 75:               className="relative"
 76:             >
 77:               {/* Cultural background glow */}
 78:               <div 
 79:                 className={`
 80:                   absolute inset-0 rounded-lg bg-gradient-to-br opacity-30 blur-sm
 81:                   ${getCulturalGradient(recipe.mamaId)}
 82:                 `}
 83:                 style={{ 
 84:                   transform: 'scale(1.05)',
 85:                   zIndex: -1
 86:                 }}
 87:               />
 88:               
 89:               <RecipeCard
 90:                 recipe={recipe}
 91:                 onClick={() => onRecipeClick(recipe.id)}
 92:                 className="relative z-10 shadow-cultural hover:shadow-3d transition-all duration-300"
 93:               />
 94:             </motion.div>
 95:           ))}
 96:         </div>
 97:       ))}
 98:     </div>
 99:   );
100: };
101: 
102: export default MasonryRecipeGrid;
````

## File: src/components/OfflineIndicator.tsx
````typescript
 1: import React, { useState, useEffect } from 'react';
 2: import { useOffline } from '@/hooks/useProductionFeatures';
 3: import { WifiOff, Wifi } from 'lucide-react';
 4: import { motion, AnimatePresence } from 'framer-motion';
 5: 
 6: const OfflineIndicator: React.FC = () => {
 7:   const { isOffline } = useOffline();
 8:   const [showIndicator, setShowIndicator] = useState(false);
 9: 
10:   useEffect(() => {
11:     if (isOffline) {
12:       setShowIndicator(true);
13:     } else {
14:       // Show "back online" briefly then hide
15:       const timer = setTimeout(() => setShowIndicator(false), 3000);
16:       return () => clearTimeout(timer);
17:     }
18:   }, [isOffline]);
19: 
20:   if (!showIndicator) return null;
21: 
22:   return (
23:     <AnimatePresence>
24:       <motion.div
25:         initial={{ y: -100, opacity: 0 }}
26:         animate={{ y: 0, opacity: 1 }}
27:         exit={{ y: -100, opacity: 0 }}
28:         className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg border ${
29:           isOffline 
30:             ? 'bg-destructive text-destructive-foreground border-destructive' 
31:             : 'bg-green-500 text-white border-green-500'
32:         }`}
33:       >
34:         <div className="flex items-center gap-2 text-sm font-medium">
35:           {isOffline ? (
36:             <>
37:               <WifiOff size={16} />
38:               <span>You're offline</span>
39:             </>
40:           ) : (
41:             <>
42:               <Wifi size={16} />
43:               <span>Back online!</span>
44:             </>
45:           )}
46:         </div>
47:       </motion.div>
48:     </AnimatePresence>
49:   );
50: };
51: 
52: export default OfflineIndicator;
````

## File: src/components/PageTransition.tsx
````typescript
 1: import React from 'react';
 2: import { motion } from 'framer-motion';
 3: 
 4: interface PageTransitionProps {
 5:   children: React.ReactNode;
 6:   direction?: 'enter' | 'exit';
 7:   cultural?: 'italian' | 'mexican' | 'thai';
 8: }
 9: 
10: const PageTransition: React.FC<PageTransitionProps> = ({ 
11:   children, 
12:   direction = 'enter',
13:   cultural 
14: }) => {
15:   const getBackgroundClass = () => {
16:     switch (cultural) {
17:       case 'italian':
18:         return 'parallax-italian';
19:       case 'mexican':
20:         return 'parallax-mexican';
21:       case 'thai':
22:         return 'parallax-thai';
23:       default:
24:         return '';
25:     }
26:   };
27: 
28:   const pageVariants = {
29:     initial: {
30:       rotateY: direction === 'enter' ? 180 : 0,
31:       opacity: direction === 'enter' ? 0 : 1,
32:       scale: 0.8,
33:     },
34:     animate: {
35:       rotateY: 0,
36:       opacity: 1,
37:       scale: 1,
38:     },
39:     exit: {
40:       rotateY: -180,
41:       opacity: 0,
42:       scale: 0.8,
43:     }
44:   };
45: 
46:   return (
47:     <motion.div
48:       className={`min-h-screen w-full ${getBackgroundClass()}`}
49:       variants={pageVariants}
50:       initial="initial"
51:       animate="animate"
52:       exit="exit"
53:       transition={{
54:         type: "spring",
55:         stiffness: 150,
56:         damping: 20,
57:         duration: 0.8
58:       }}
59:       style={{
60:         perspective: '1000px',
61:         transformStyle: 'preserve-3d'
62:       }}
63:     >
64:       {children}
65:     </motion.div>
66:   );
67: };
68: 
69: export default PageTransition;
````

## File: src/components/PreCookingChat.tsx
````typescript
  1: import { useState, useEffect } from 'react';
  2: import { Button } from '@/components/ui/button';
  3: import { Card } from '@/components/ui/card';
  4: import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
  5: import { ChefHat, Clock, Users, MessageCircle, ChevronDown, Send } from 'lucide-react';
  6: import { Recipe } from '@/data/recipes';
  7: import { Mama } from '@/data/mamas';
  8: import { useTemplateResponses } from '@/hooks/useTemplateResponses';
  9: import { useVoice } from '@/hooks/useVoice';
 10: import { useAuth } from '@/contexts/AuthContext';
 11: 
 12: interface PreCookingChatProps {
 13:   recipe: Recipe;
 14:   mama: Mama;
 15:   onStartCooking: () => void;
 16: }
 17: 
 18: export const PreCookingChat = ({ recipe, mama, onStartCooking }: PreCookingChatProps) => {
 19:   const [isTextChatOpen, setIsTextChatOpen] = useState(false);
 20:   const [question, setQuestion] = useState('');
 21:   const [answer, setAnswer] = useState('');
 22:   const [isAnswering, setIsAnswering] = useState(false);
 23:   const [hasPlayedGreeting, setHasPlayedGreeting] = useState(false);
 24:   
 25:   const { getTemplateResponse, getCulturalGreeting } = useTemplateResponses();
 26:   const { speak, isPlaying } = useVoice();
 27:   const { user } = useAuth();
 28: 
 29:   // Auto-play voice greeting when component mounts
 30:   useEffect(() => {
 31:     if (user && !hasPlayedGreeting) {
 32:       const userName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'friend';
 33:       const greetingVariations = [
 34:         `Welcome ${userName}! Today we cook my ${recipe.title}. I can't wait to teach you!`,
 35:         `Ciao ${userName}! Ready to make the most delicious ${recipe.title}? I'm so excited!`,
 36:         `Hello ${userName}! Let's create magic with my ${recipe.title} recipe together!`
 37:       ];
 38:       
 39:       const randomGreeting = greetingVariations[Math.floor(Math.random() * greetingVariations.length)];
 40:       const finalGreeting = `${randomGreeting} Tell me when you're ready to start cooking!`;
 41:       
 42:       console.log('[PreCookingChat] Playing greeting:', finalGreeting);
 43:       
 44:       // Play greeting after a short delay
 45:       setTimeout(() => {
 46:         speak(finalGreeting, mama.id.toString()).catch(error => {
 47:           console.error('[PreCookingChat] Failed to play greeting:', error);
 48:         });
 49:         setHasPlayedGreeting(true);
 50:       }, 1000);
 51:     }
 52:   }, [speak, mama.id, recipe.title, user, hasPlayedGreeting]);
 53: 
 54:   const handleTextQuestion = async () => {
 55:     if (!question.trim()) return;
 56:     
 57:     setIsAnswering(true);
 58:     // Use template response for now
 59:     const response = getTemplateResponse(question, mama.accent, recipe);
 60:     setAnswer(response);
 61:     setIsAnswering(false);
 62:   };
 63: 
 64:   return (
 65:     <div className="max-w-md mx-auto p-6 space-y-8">
 66:       {/* Mama Portrait & Greeting */}
 67:       <div className="text-center space-y-4">
 68:         <div className="text-8xl mb-4">{mama.emoji}</div>
 69:         <h1 className="text-2xl font-heading font-bold text-foreground">
 70:           {mama.name}
 71:         </h1>
 72:         <p className="text-lg text-muted-foreground font-handwritten">
 73:           {recipe.title}
 74:         </p>
 75:         
 76:         {/* Voice Status */}
 77:         {isPlaying && (
 78:           <div className="flex items-center justify-center gap-2 text-primary">
 79:             <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
 80:             <span className="text-sm font-medium">{mama.name} speaking...</span>
 81:           </div>
 82:         )}
 83:       </div>
 84: 
 85:       {/* Recipe Info */}
 86:       <div className="grid grid-cols-3 gap-3">
 87:         <Card className="p-3 text-center">
 88:           <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
 89:           <div className="text-sm font-bold text-primary">{recipe.cookingTime}</div>
 90:           <div className="text-xs text-muted-foreground">Time</div>
 91:         </Card>
 92:         <Card className="p-3 text-center">
 93:           <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
 94:           <div className="text-sm font-bold text-primary">{recipe.servings}</div>
 95:           <div className="text-xs text-muted-foreground">Serves</div>
 96:         </Card>
 97:         <Card className="p-3 text-center">
 98:           <ChefHat className="w-5 h-5 mx-auto mb-1 text-primary" />
 99:           <div className="text-sm font-bold text-primary">{recipe.difficulty}</div>
100:           <div className="text-xs text-muted-foreground">Level</div>
101:         </Card>
102:       </div>
103: 
104:       {/* Food Image */}
105:       <div className="relative">
106:         <img 
107:           src={recipe.image} 
108:           alt={recipe.title}
109:           className="w-full h-48 object-cover rounded-2xl shadow-lg"
110:         />
111:         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
112:       </div>
113: 
114:       {/* Start Cooking Button */}
115:       <Button
116:         onClick={onStartCooking}
117:         className="w-full text-lg py-6 rounded-2xl font-heading font-bold"
118:         size="lg"
119:       >
120:         Start Cooking with {mama.name}
121:       </Button>
122: 
123:       {/* Optional Text Questions */}
124:       <Collapsible open={isTextChatOpen} onOpenChange={setIsTextChatOpen}>
125:         <CollapsibleTrigger asChild>
126:           <Button
127:             variant="outline"
128:             className="w-full"
129:             size="sm"
130:           >
131:             <MessageCircle className="w-4 h-4 mr-2" />
132:             Text {mama.name}
133:             <ChevronDown className="w-4 h-4 ml-2" />
134:           </Button>
135:         </CollapsibleTrigger>
136:         
137:         <CollapsibleContent className="space-y-4 mt-4">
138:           <Card className="p-4">
139:             <div className="space-y-3">
140:               <input
141:                 type="text"
142:                 value={question}
143:                 onChange={(e) => setQuestion(e.target.value)}
144:                 placeholder={`Ask ${mama.name} about the recipe...`}
145:                 className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
146:                 onKeyPress={(e) => e.key === 'Enter' && handleTextQuestion()}
147:               />
148:               
149:               <Button 
150:                 onClick={handleTextQuestion}
151:                 disabled={!question.trim() || isAnswering}
152:                 className="w-full"
153:                 size="sm"
154:               >
155:                 <Send className="w-3 h-3 mr-2" />
156:                 {isAnswering ? 'Thinking...' : 'Ask'}
157:               </Button>
158:               
159:               {answer && (
160:                 <div className="mt-3 p-3 bg-muted rounded-lg">
161:                   <p className="text-sm text-foreground">{answer}</p>
162:                 </div>
163:               )}
164:             </div>
165:           </Card>
166:         </CollapsibleContent>
167:       </Collapsible>
168: 
169:       {/* Cultural Philosophy */}
170:       <Card className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
171:         <p className="text-sm text-muted-foreground text-center font-handwritten italic">
172:           {mama.philosophy}
173:         </p>
174:       </Card>
175:     </div>
176:   );
177: };
````

## File: src/components/PullToRefresh.tsx
````typescript
  1: import React, { useState, useEffect, useCallback } from 'react';
  2: import { motion } from 'framer-motion';
  3: import { RefreshCw } from 'lucide-react';
  4: import { useAnalytics } from '@/hooks/useProductionFeatures';
  5: 
  6: interface PullToRefreshProps {
  7:   onRefresh: () => Promise<void>;
  8:   children: React.ReactNode;
  9:   threshold?: number;
 10:   disabled?: boolean;
 11: }
 12: 
 13: const PullToRefresh: React.FC<PullToRefreshProps> = ({
 14:   onRefresh,
 15:   children,
 16:   threshold = 80,
 17:   disabled = false
 18: }) => {
 19:   const [isPulling, setIsPulling] = useState(false);
 20:   const [pullDistance, setPullDistance] = useState(0);
 21:   const [isRefreshing, setIsRefreshing] = useState(false);
 22:   const [startY, setStartY] = useState(0);
 23:   const { track } = useAnalytics();
 24: 
 25:   const handleTouchStart = useCallback((e: TouchEvent) => {
 26:     if (disabled || window.scrollY > 0) return;
 27:     setStartY(e.touches[0].clientY);
 28:   }, [disabled]);
 29: 
 30:   const handleTouchMove = useCallback((e: TouchEvent) => {
 31:     if (disabled || window.scrollY > 0 || !startY) return;
 32:     
 33:     const currentY = e.touches[0].clientY;
 34:     const distance = Math.max(0, currentY - startY);
 35:     
 36:     if (distance > 0) {
 37:       setIsPulling(true);
 38:       setPullDistance(Math.min(distance, threshold * 1.5));
 39:     }
 40:   }, [disabled, startY, threshold]);
 41: 
 42:   const handleTouchEnd = useCallback(async () => {
 43:     if (disabled) return;
 44:     
 45:     if (pullDistance >= threshold && !isRefreshing) {
 46:       setIsRefreshing(true);
 47:       track('pull_to_refresh_triggered');
 48:       
 49:       try {
 50:         await onRefresh();
 51:       } catch (error) {
 52:         console.error('Refresh failed:', error);
 53:         track('pull_to_refresh_failed', { error: String(error) });
 54:       } finally {
 55:         setIsRefreshing(false);
 56:       }
 57:     }
 58:     
 59:     setIsPulling(false);
 60:     setPullDistance(0);
 61:     setStartY(0);
 62:   }, [disabled, pullDistance, threshold, isRefreshing, onRefresh, track]);
 63: 
 64:   useEffect(() => {
 65:     const container = document.body;
 66:     
 67:     container.addEventListener('touchstart', handleTouchStart, { passive: true });
 68:     container.addEventListener('touchmove', handleTouchMove, { passive: true });
 69:     container.addEventListener('touchend', handleTouchEnd, { passive: true });
 70:     
 71:     return () => {
 72:       container.removeEventListener('touchstart', handleTouchStart);
 73:       container.removeEventListener('touchmove', handleTouchMove);
 74:       container.removeEventListener('touchend', handleTouchEnd);
 75:     };
 76:   }, [handleTouchStart, handleTouchMove, handleTouchEnd]);
 77: 
 78:   const getRefreshProgress = () => Math.min(pullDistance / threshold, 1);
 79:   const shouldTriggerRefresh = pullDistance >= threshold;
 80: 
 81:   return (
 82:     <div className="relative">
 83:       {/* Pull indicator */}
 84:       <motion.div
 85:         className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
 86:         initial={{ y: -60, opacity: 0 }}
 87:         animate={{
 88:           y: isPulling || isRefreshing ? 0 : -60,
 89:           opacity: isPulling || isRefreshing ? 1 : 0
 90:         }}
 91:         transition={{ type: "spring", stiffness: 300, damping: 30 }}
 92:       >
 93:         <div className="bg-white rounded-full p-3 shadow-lg border border-border">
 94:           <motion.div
 95:             animate={{
 96:               rotate: isRefreshing ? 360 : shouldTriggerRefresh ? 180 : getRefreshProgress() * 180
 97:             }}
 98:             transition={{
 99:               rotate: isRefreshing 
100:                 ? { repeat: Infinity, duration: 1, ease: "linear" }
101:                 : { type: "spring", stiffness: 300, damping: 30 }
102:             }}
103:           >
104:             <RefreshCw 
105:               className={`w-6 h-6 transition-colors ${
106:                 shouldTriggerRefresh ? 'text-primary' : 'text-muted-foreground'
107:               }`} 
108:             />
109:           </motion.div>
110:         </div>
111:       </motion.div>
112: 
113:       {/* Content with pull transform */}
114:       <motion.div
115:         animate={{
116:           y: (isPulling || isRefreshing) ? Math.min(pullDistance * 0.5, 40) : 0
117:         }}
118:         transition={{ type: "spring", stiffness: 300, damping: 30 }}
119:       >
120:         {children}
121:       </motion.div>
122: 
123:       {/* Refresh message */}
124:       {isPulling && (
125:         <motion.div
126:           className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10"
127:           initial={{ opacity: 0, scale: 0.8 }}
128:           animate={{ opacity: 1, scale: 1 }}
129:           exit={{ opacity: 0, scale: 0.8 }}
130:         >
131:           <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
132:             <span className="text-sm font-medium text-foreground">
133:               {shouldTriggerRefresh ? 'Release to refresh' : 'Pull to refresh'}
134:             </span>
135:           </div>
136:         </motion.div>
137:       )}
138:     </div>
139:   );
140: };
141: 
142: export default PullToRefresh;
````

## File: src/components/RecipeCard.tsx
````typescript
  1: import React from 'react';
  2: import { Clock, Users } from 'lucide-react';
  3: import { Recipe } from '@/data/recipes';
  4: 
  5: interface RecipeCardProps {
  6:   recipe: Recipe;
  7:   variant?: 'default' | 'polaroid' | 'hero';
  8:   className?: string;
  9:   onClick?: () => void;
 10:   cultural?: 'italian' | 'mexican' | 'thai';
 11: }
 12: 
 13: const RecipeCard: React.FC<RecipeCardProps> = ({ 
 14:   recipe, 
 15:   variant = 'default', 
 16:   className = '',
 17:   onClick,
 18:   cultural 
 19: }) => {
 20:   // Determine cultural styling based on recipe's mama ID
 21:   const getCulturalStyling = () => {
 22:     if (cultural) return cultural;
 23:     
 24:     // Auto-detect from recipe if not explicitly set
 25:     if (recipe.mamaId === 1) return 'italian';
 26:     if (recipe.mamaId === 2) return 'mexican';
 27:     if (recipe.mamaId === 3) return 'thai';
 28:     return undefined;
 29:   };
 30: 
 31:   const culturalTheme = getCulturalStyling();
 32:   const getRotation = () => {
 33:     if (variant !== 'polaroid') return '';
 34:     const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
 35:     return rotations[Math.floor(Math.random() * rotations.length)];
 36:   };
 37: 
 38:   if (variant === 'hero') {
 39:     return (
 40:       <div 
 41:         className={`relative overflow-hidden rounded-2xl shadow-warm cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 h-48 ${className}`}
 42:         onClick={onClick}
 43:       >
 44:         <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary text-white">
 45:           <div className="absolute top-4 left-4">
 46:             <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-wider">
 47:               RECIPE OF THE WEEK
 48:             </span>
 49:           </div>
 50:           <div className="absolute bottom-0 left-0 right-0 p-6">
 51:             <div className="flex items-center gap-2 mb-2">
 52:               <span className="text-xl">{recipe.mamaEmoji}</span>
 53:               <span className="text-sm opacity-90">by {recipe.mamaName}</span>
 54:             </div>
 55:             <h3 className="font-heading font-bold text-2xl mb-2">{recipe.title}</h3>
 56:             <div className="flex items-center gap-4 text-sm opacity-90">
 57:               <div className="flex items-center gap-1">
 58:                 <Clock size={16} />
 59:                 <span>{recipe.cookingTime}</span>
 60:               </div>
 61:               <div className="flex items-center gap-1">
 62:                 <Users size={16} />
 63:                 <span>{recipe.servings} servings</span>
 64:               </div>
 65:             </div>
 66:           </div>
 67:         </div>
 68:       </div>
 69:     );
 70:   }
 71: 
 72:   if (variant === 'polaroid') {
 73:     const culturalPattern = culturalTheme ? `bg-${culturalTheme}-pattern` : '';
 74:     const culturalBorder = culturalTheme ? `border-${culturalTheme}` : '';
 75:     
 76:     return (
 77:       <div 
 78:         className={`bg-white rounded-lg shadow-warm border-4 border-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${getRotation()} ${culturalPattern} ${culturalBorder} ${className}`}
 79:         onClick={onClick}
 80:       >
 81:         <div className="aspect-square bg-muted rounded-t overflow-hidden relative">
 82:           <img 
 83:             src={recipe.image} 
 84:             alt={recipe.title}
 85:             className="w-full h-full object-cover"
 86:           />
 87:           {/* Cultural watermark */}
 88:           {culturalTheme && (
 89:             <div className="absolute bottom-2 right-2 opacity-10 text-2xl">
 90:               {culturalTheme === 'italian' && '🍃'}
 91:               {culturalTheme === 'mexican' && '🎀'}
 92:               {culturalTheme === 'thai' && '🪷'}
 93:             </div>
 94:           )}
 95:         </div>
 96:         <div className="p-4">
 97:           <div className="flex items-center justify-between mb-2">
 98:             <span className="text-2xl">{recipe.mamaEmoji}</span>
 99:             <span className="text-xs bg-muted px-2 py-1 rounded-full">
100:               {recipe.difficulty}
101:             </span>
102:           </div>
103:           <h3 className="font-heading font-bold text-lg mb-1">{recipe.title}</h3>
104:           <div className="flex items-center gap-1 text-sm text-muted-foreground">
105:             <Clock size={14} />
106:             <span>{recipe.cookingTime}</span>
107:           </div>
108:         </div>
109:       </div>
110:     );
111:   }
112: 
113:   const culturalPattern = culturalTheme ? `bg-${culturalTheme}-pattern` : '';
114:   
115:   return (
116:     <div 
117:       className={`bg-white rounded-xl shadow-warm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${culturalPattern} ${className}`}
118:       onClick={onClick}
119:     >
120:       <div className="aspect-video bg-muted relative">
121:         <img 
122:           src={recipe.image} 
123:           alt={recipe.title}
124:           className="w-full h-full object-cover"
125:         />
126:         {/* Cultural texture overlay */}
127:         {culturalTheme && (
128:           <div className="absolute inset-0 opacity-5">
129:             <div className={`w-full h-full bg-${culturalTheme}-pattern`}></div>
130:           </div>
131:         )}
132:       </div>
133:       <div className="p-4">
134:         <div className="flex items-center justify-between mb-2">
135:           <div className="flex items-center gap-2">
136:             <span className="text-lg">{recipe.mamaEmoji}</span>
137:             <span className="text-sm text-muted-foreground">by {recipe.mamaName}</span>
138:           </div>
139:           <span className="text-xs bg-muted px-2 py-1 rounded-full">
140:             {recipe.category}
141:           </span>
142:         </div>
143:         <h3 className="font-heading font-bold text-lg mb-2">{recipe.title}</h3>
144:         <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
145:           {recipe.description}
146:         </p>
147:         <div className="flex items-center gap-4 text-sm text-muted-foreground">
148:           <div className="flex items-center gap-1">
149:             <Clock size={16} />
150:             <span>{recipe.cookingTime}</span>
151:           </div>
152:           <div className="flex items-center gap-1">
153:             <Users size={16} />
154:             <span>{recipe.servings} servings</span>
155:           </div>
156:         </div>
157:       </div>
158:     </div>
159:   );
160: };
161: 
162: export default RecipeCard;
````

## File: src/components/RecipeCardStack.tsx
````typescript
  1: import React, { useState, useRef, useEffect } from 'react';
  2: import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
  3: import { Heart, ChefHat, Clock, Users } from 'lucide-react';
  4: import { Recipe } from '@/data/recipes';
  5: import { Button } from '@/components/ui/button';
  6: import { Badge } from '@/components/ui/badge';
  7: 
  8: interface RecipeCardStackProps {
  9:   recipes: Recipe[];
 10:   onLike: (recipe: Recipe) => void;
 11:   onDislike: (recipe: Recipe) => void;
 12:   onTap: (recipe: Recipe) => void;
 13: }
 14: 
 15: const RecipeCardStack: React.FC<RecipeCardStackProps> = ({
 16:   recipes,
 17:   onLike,
 18:   onDislike,
 19:   onTap,
 20: }) => {
 21:   const [currentIndex, setCurrentIndex] = useState(0);
 22:   const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);
 23: 
 24:   const handleDragEnd = (event: any, info: PanInfo) => {
 25:     const threshold = 150;
 26:     const currentRecipe = recipes[currentIndex];
 27: 
 28:     if (info.offset.x > threshold) {
 29:       // Swiped right - like
 30:       setDragDirection('right');
 31:       onLike(currentRecipe);
 32:       setTimeout(() => {
 33:         setCurrentIndex((prev) => (prev + 1) % recipes.length);
 34:         setDragDirection(null);
 35:       }, 300);
 36:     } else if (info.offset.x < -threshold) {
 37:       // Swiped left - dislike
 38:       setDragDirection('left');
 39:       onDislike(currentRecipe);
 40:       setTimeout(() => {
 41:         setCurrentIndex((prev) => (prev + 1) % recipes.length);
 42:         setDragDirection(null);
 43:       }, 300);
 44:     }
 45:   };
 46: 
 47:   const getCulturalStyles = (mamaId: number) => {
 48:     switch (mamaId) {
 49:       case 1: // Italian
 50:         return {
 51:           bgClass: 'bg-italian-gradient',
 52:           textClass: 'text-italian-gold',
 53:           fontClass: 'font-italian',
 54:           accent: 'hsl(var(--italian-accent))'
 55:         };
 56:       case 2: // Mexican
 57:         return {
 58:           bgClass: 'bg-mexican-gradient',
 59:           textClass: 'text-mexican-pink',
 60:           fontClass: 'font-mexican',
 61:           accent: 'hsl(var(--mexican-accent))'
 62:         };
 63:       case 3: // Thai
 64:         return {
 65:           bgClass: 'bg-thai-gradient',
 66:           textClass: 'text-thai-gold',
 67:           fontClass: 'font-thai',
 68:           accent: 'hsl(var(--thai-accent))'
 69:         };
 70:       default:
 71:         return {
 72:           bgClass: 'bg-primary',
 73:           textClass: 'text-primary',
 74:           fontClass: 'font-heading',
 75:           accent: 'hsl(var(--primary))'
 76:         };
 77:     }
 78:   };
 79: 
 80:   const renderCard = (recipe: Recipe, index: number) => {
 81:     const isActive = index === currentIndex;
 82:     const isNext = index === (currentIndex + 1) % recipes.length;
 83:     const isAfterNext = index === (currentIndex + 2) % recipes.length;
 84:     
 85:     if (index < currentIndex && index !== recipes.length - 1) return null;
 86:     
 87:     const cultural = getCulturalStyles(recipe.mamaId);
 88:     
 89:     let zIndex = 1;
 90:     let scale = 0.9;
 91:     let translateY = 20;
 92:     let opacity = 0.7;
 93: 
 94:     if (isActive) {
 95:       zIndex = 3;
 96:       scale = 1;
 97:       translateY = 0;
 98:       opacity = 1;
 99:     } else if (isNext) {
100:       zIndex = 2;
101:       scale = 0.95;
102:       translateY = 10;
103:       opacity = 0.8;
104:     } else if (isAfterNext) {
105:       zIndex = 1;
106:       scale = 0.9;
107:       translateY = 20;
108:       opacity = 0.6;
109:     }
110: 
111:     return (
112:       <motion.div
113:         key={`${recipe.id}-${index}`}
114:         className="absolute inset-0"
115:         style={{ zIndex }}
116:         initial={{ scale: 0.8, opacity: 0, y: 50 }}
117:         animate={{ 
118:           scale, 
119:           opacity, 
120:           y: translateY,
121:           rotateY: isActive ? 0 : 5,
122:         }}
123:         transition={{ 
124:           type: "spring", 
125:           stiffness: 300, 
126:           damping: 30,
127:           duration: 0.5
128:         }}
129:         drag={isActive ? "x" : false}
130:         dragConstraints={{ left: 0, right: 0 }}
131:         onDragEnd={isActive ? handleDragEnd : undefined}
132:         whileDrag={{ 
133:           scale: 1.05, 
134:           rotateZ: 5,
135:           cursor: 'grabbing'
136:         }}
137:         whileTap={{ 
138:           scale: 0.98,
139:           transition: { duration: 0.1 }
140:         }}
141:         onTap={() => isActive && onTap(recipe)}
142:       >
143:         <div className={`
144:           w-full h-full rounded-3xl overflow-hidden shadow-3d
145:           ${cultural.bgClass}
146:           relative transform-3d
147:         `}>
148:           {/* Recipe Image */}
149:           <div className="h-64 relative overflow-hidden">
150:             <img
151:               src={recipe.image}
152:               alt={recipe.title}
153:               className="w-full h-full object-cover"
154:             />
155:             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
156:             
157:             {/* Mama Badge */}
158:             <div className="absolute top-4 left-4">
159:               <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
160:                 {recipe.mamaEmoji} {recipe.mamaName}
161:               </Badge>
162:             </div>
163: 
164:             {/* Difficulty Badge */}
165:             <div className="absolute top-4 right-4">
166:               <Badge 
167:                 variant={recipe.difficulty === 'EASY' ? 'secondary' : 
168:                         recipe.difficulty === 'MEDIUM' ? 'outline' : 'destructive'}
169:               >
170:                 <ChefHat className="w-3 h-3 mr-1" />
171:                 {recipe.difficulty}
172:               </Badge>
173:             </div>
174:           </div>
175: 
176:           {/* Recipe Content */}
177:           <div className="p-6 space-y-4 text-white">
178:             <h3 className={`text-2xl font-bold leading-tight ${cultural.fontClass}`}>
179:               {recipe.title}
180:             </h3>
181:             
182:             <p className="text-white/90 text-sm line-clamp-2">
183:               {recipe.description}
184:             </p>
185: 
186:             {/* Recipe Stats */}
187:             <div className="flex items-center gap-4 text-sm text-white/80">
188:               <div className="flex items-center gap-1">
189:                 <Clock className="w-4 h-4" />
190:                 {recipe.cookingTime}
191:               </div>
192:               <div className="flex items-center gap-1">
193:                 <Users className="w-4 h-4" />
194:                 {recipe.servings} servings
195:               </div>
196:             </div>
197: 
198:             {/* Action Hints */}
199:             {isActive && (
200:               <div className="flex justify-between items-center pt-4 border-t border-white/20">
201:                 <div className="flex items-center gap-2 text-white/70 text-xs">
202:                   <span>←</span>
203:                   <span>Not interested</span>
204:                 </div>
205:                 <div className="text-white/70 text-xs">
206:                   Tap to view recipe
207:                 </div>
208:                 <div className="flex items-center gap-2 text-white/70 text-xs">
209:                   <span>Save</span>
210:                   <span>→</span>
211:                 </div>
212:               </div>
213:             )}
214:           </div>
215: 
216:           {/* Swipe Indicators */}
217:           {isActive && dragDirection && (
218:             <div className={`
219:               absolute inset-0 flex items-center justify-center
220:               ${dragDirection === 'right' ? 'bg-green-500/20' : 'bg-red-500/20'}
221:               transition-all duration-300
222:             `}>
223:               <div className={`
224:                 p-4 rounded-full
225:                 ${dragDirection === 'right' ? 'bg-green-500' : 'bg-red-500'}
226:                 text-white text-4xl
227:               `}>
228:                 {dragDirection === 'right' ? '❤️' : '❌'}
229:               </div>
230:             </div>
231:           )}
232:         </div>
233:       </motion.div>
234:     );
235:   };
236: 
237:   return (
238:     <div className="relative w-full max-w-sm mx-auto h-96 perspective-1000">
239:       {recipes.slice(currentIndex, currentIndex + 3).map((recipe, index) => 
240:         renderCard(recipe, currentIndex + index)
241:       )}
242:       
243:       {/* Stack continuation for seamless loop */}
244:       {recipes.slice(0, Math.min(3, currentIndex)).map((recipe, index) => 
245:         renderCard(recipe, recipes.length + index)
246:       )}
247: 
248:       {/* Manual Controls */}
249:       <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
250:         <Button
251:           variant="outline"
252:           size="sm"
253:           onClick={() => {
254:             onDislike(recipes[currentIndex]);
255:             setCurrentIndex((prev) => (prev + 1) % recipes.length);
256:           }}
257:           className="bg-red-500/10 border-red-500/20 text-red-600 hover:bg-red-500/20"
258:         >
259:           Skip
260:         </Button>
261:         <Button
262:           variant="outline"
263:           size="sm"
264:           onClick={() => {
265:             onLike(recipes[currentIndex]);
266:             setCurrentIndex((prev) => (prev + 1) % recipes.length);
267:           }}
268:           className="bg-green-500/10 border-green-500/20 text-green-600 hover:bg-green-500/20"
269:         >
270:           <Heart className="w-4 h-4 mr-1" />
271:           Save
272:         </Button>
273:       </div>
274:     </div>
275:   );
276: };
277: 
278: export default RecipeCardStack;
````

## File: src/components/ShareShoppingListModal.tsx
````typescript
  1: import React, { useState } from 'react';
  2: import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
  3: import { Button } from '@/components/ui/button';
  4: import { Badge } from '@/components/ui/badge';
  5: import { 
  6:   Share, 
  7:   Mail, 
  8:   MessageCircle, 
  9:   Copy, 
 10:   QrCode, 
 11:   Smartphone,
 12:   Check,
 13:   X
 14: } from 'lucide-react';
 15: import { sharingService } from '@/services/sharingService';
 16: import { ShoppingListItem } from '@/types/shopping';
 17: import { useToast } from '@/hooks/use-toast';
 18: 
 19: interface ShareShoppingListModalProps {
 20:   isOpen: boolean;
 21:   onClose: () => void;
 22:   items: ShoppingListItem[];
 23:   listName?: string;
 24: }
 25: 
 26: const ShareShoppingListModal: React.FC<ShareShoppingListModalProps> = ({
 27:   isOpen,
 28:   onClose,
 29:   items,
 30:   listName = 'My Shopping List'
 31: }) => {
 32:   const [showQR, setShowQR] = useState(false);
 33:   const [shareFormat, setShareFormat] = useState<'simple' | 'detailed' | 'emoji'>('simple');
 34:   const [includeChecked, setIncludeChecked] = useState(false);
 35:   const { toast } = useToast();
 36: 
 37:   const shareOptions = {
 38:     title: listName,
 39:     includeCheckedItems: includeChecked,
 40:     format: shareFormat
 41:   };
 42: 
 43:   const handleNativeShare = async () => {
 44:     const success = await sharingService.shareShoppingList(items, shareOptions);
 45:     if (success) {
 46:       toast({
 47:         title: "Shared successfully",
 48:         description: "Shopping list copied to clipboard",
 49:       });
 50:       onClose();
 51:     } else {
 52:       toast({
 53:         title: "Share failed",
 54:         description: "Unable to share the shopping list",
 55:         variant: "destructive"
 56:       });
 57:     }
 58:   };
 59: 
 60:   const handleEmailShare = () => {
 61:     sharingService.shareViaEmail(items, shareOptions);
 62:     onClose();
 63:   };
 64: 
 65:   const handleSMSShare = () => {
 66:     sharingService.shareViaSMS(items, shareOptions);
 67:     onClose();
 68:   };
 69: 
 70:   const handleWhatsAppShare = () => {
 71:     sharingService.shareViaWhatsApp(items, shareOptions);
 72:     onClose();
 73:   };
 74: 
 75:   const handleCopyToClipboard = async () => {
 76:     const success = await sharingService.shareShoppingList(items, shareOptions);
 77:     if (success) {
 78:       toast({
 79:         title: "Copied to clipboard",
 80:         description: "Shopping list is ready to paste",
 81:       });
 82:     } else {
 83:       toast({
 84:         title: "Copy failed",
 85:         description: "Unable to copy to clipboard",
 86:         variant: "destructive"
 87:       });
 88:     }
 89:   };
 90: 
 91:   const generateQRCode = () => {
 92:     return sharingService.generateQRCode(items, shareOptions);
 93:   };
 94: 
 95:   const uncheckedCount = items.filter(item => !item.checked).length;
 96:   const checkedCount = items.filter(item => item.checked).length;
 97: 
 98:   return (
 99:     <Dialog open={isOpen} onOpenChange={onClose}>
100:       <DialogContent className="sm:max-w-md">
101:         <DialogHeader>
102:           <DialogTitle className="flex items-center gap-2">
103:             <Share size={20} />
104:             Share Shopping List
105:           </DialogTitle>
106:         </DialogHeader>
107: 
108:         <div className="space-y-6">
109:           {/* List Statistics */}
110:           <div className="bg-muted/50 rounded-lg p-4">
111:             <h3 className="font-heading font-bold mb-2">{listName}</h3>
112:             <div className="flex gap-2">
113:               <Badge variant="secondary">
114:                 {uncheckedCount} to buy
115:               </Badge>
116:               {checkedCount > 0 && (
117:                 <Badge variant="outline">
118:                   {checkedCount} completed
119:                 </Badge>
120:               )}
121:             </div>
122:           </div>
123: 
124:           {/* Share Options */}
125:           <div className="space-y-3">
126:             <div>
127:               <label className="font-heading font-bold text-sm mb-2 block">
128:                 Share Format
129:               </label>
130:               <div className="flex gap-2">
131:                 <Button
132:                   variant={shareFormat === 'simple' ? 'default' : 'outline'}
133:                   size="sm"
134:                   onClick={() => setShareFormat('simple')}
135:                 >
136:                   Simple
137:                 </Button>
138:                 <Button
139:                   variant={shareFormat === 'detailed' ? 'default' : 'outline'}
140:                   size="sm"
141:                   onClick={() => setShareFormat('detailed')}
142:                 >
143:                   Detailed
144:                 </Button>
145:                 <Button
146:                   variant={shareFormat === 'emoji' ? 'default' : 'outline'}
147:                   size="sm"
148:                   onClick={() => setShareFormat('emoji')}
149:                 >
150:                   Emoji
151:                 </Button>
152:               </div>
153:             </div>
154: 
155:             <div className="flex items-center gap-2">
156:               <Button
157:                 variant={includeChecked ? 'default' : 'outline'}
158:                 size="sm"
159:                 onClick={() => setIncludeChecked(!includeChecked)}
160:                 className="w-auto"
161:               >
162:                 {includeChecked ? <Check size={16} /> : <X size={16} />}
163:                 Include completed items
164:               </Button>
165:             </div>
166:           </div>
167: 
168:           {/* Share Methods */}
169:           <div className="grid grid-cols-2 gap-3">
170:             <Button
171:               variant="outline"
172:               onClick={handleNativeShare}
173:               className="flex items-center gap-2 h-12"
174:             >
175:               <Share size={18} />
176:               Share
177:             </Button>
178: 
179:             <Button
180:               variant="outline"
181:               onClick={handleCopyToClipboard}
182:               className="flex items-center gap-2 h-12"
183:             >
184:               <Copy size={18} />
185:               Copy
186:             </Button>
187: 
188:             <Button
189:               variant="outline"
190:               onClick={handleEmailShare}
191:               className="flex items-center gap-2 h-12"
192:             >
193:               <Mail size={18} />
194:               Email
195:             </Button>
196: 
197:             <Button
198:               variant="outline"
199:               onClick={handleSMSShare}
200:               className="flex items-center gap-2 h-12"
201:             >
202:               <Smartphone size={18} />
203:               SMS
204:             </Button>
205: 
206:             <Button
207:               variant="outline"
208:               onClick={handleWhatsAppShare}
209:               className="flex items-center gap-2 h-12"
210:             >
211:               <MessageCircle size={18} />
212:               WhatsApp
213:             </Button>
214: 
215:             <Button
216:               variant="outline"
217:               onClick={() => setShowQR(!showQR)}
218:               className="flex items-center gap-2 h-12"
219:             >
220:               <QrCode size={18} />
221:               QR Code
222:             </Button>
223:           </div>
224: 
225:           {/* QR Code */}
226:           {showQR && (
227:             <div className="text-center space-y-3">
228:               <img
229:                 src={generateQRCode()}
230:                 alt="Shopping List QR Code"
231:                 className="w-48 h-48 mx-auto border rounded-lg"
232:               />
233:               <p className="text-sm text-muted-foreground">
234:                 Scan to view shopping list
235:               </p>
236:             </div>
237:           )}
238:         </div>
239:       </DialogContent>
240:     </Dialog>
241:   );
242: };
243: 
244: export default ShareShoppingListModal;
````

## File: src/components/ShoppingListCard.tsx
````typescript
  1: import { ShoppingCart, Plus, Check } from 'lucide-react';
  2: import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
  3: import { Button } from '@/components/ui/button';
  4: import { Badge } from '@/components/ui/badge';
  5: import { useShoppingList } from '@/contexts/ShoppingListContext';
  6: import { useNavigate } from 'react-router-dom';
  7: 
  8: export default function ShoppingListCard() {
  9:   const navigate = useNavigate();
 10:   const { shoppingListItems, currentList } = useShoppingList();
 11: 
 12:   const totalItems = shoppingListItems.length;
 13:   const checkedItems = shoppingListItems.filter(item => item.checked).length;
 14:   const uncheckedItems = totalItems - checkedItems;
 15: 
 16:   const handleViewShoppingList = () => {
 17:     navigate('/shopping-list');
 18:   };
 19: 
 20:   return (
 21:     <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white via-white to-primary/5">
 22:       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
 23:       
 24:       <CardHeader className="pb-3">
 25:         <div className="flex items-center gap-3">
 26:           <div className="bg-primary/10 p-2 rounded-lg">
 27:             <ShoppingCart className="h-5 w-5 text-primary" />
 28:           </div>
 29:           <div className="flex-1">
 30:             <CardTitle className="text-lg font-heading text-warm-brown">
 31:               {currentList?.name || 'Shopping List'}
 32:             </CardTitle>
 33:             <CardDescription className="text-sm">
 34:               Your ingredients for cooking
 35:             </CardDescription>
 36:           </div>
 37:         </div>
 38:       </CardHeader>
 39: 
 40:       <CardContent className="space-y-4">
 41:         {/* Stats */}
 42:         <div className="grid grid-cols-3 gap-2">
 43:           <div className="text-center p-2 bg-cream/50 rounded-lg">
 44:             <div className="text-lg font-bold text-warm-brown">{totalItems}</div>
 45:             <div className="text-xs text-muted-foreground">Total</div>
 46:           </div>
 47:           <div className="text-center p-2 bg-primary/10 rounded-lg">
 48:             <div className="text-lg font-bold text-primary">{uncheckedItems}</div>
 49:             <div className="text-xs text-muted-foreground">To Buy</div>
 50:           </div>
 51:           <div className="text-center p-2 bg-green-50 rounded-lg">
 52:             <div className="text-lg font-bold text-green-700">{checkedItems}</div>
 53:             <div className="text-xs text-muted-foreground">Done</div>
 54:           </div>
 55:         </div>
 56: 
 57:         {/* Progress */}
 58:         {totalItems > 0 && (
 59:           <div className="space-y-2">
 60:             <div className="flex justify-between text-sm">
 61:               <span className="text-muted-foreground">Progress</span>
 62:               <span className="text-warm-brown font-medium">
 63:                 {Math.round((checkedItems / totalItems) * 100)}%
 64:               </span>
 65:             </div>
 66:             <div className="w-full bg-muted/30 rounded-full h-2">
 67:               <div 
 68:                 className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500"
 69:                 style={{ width: `${(checkedItems / totalItems) * 100}%` }}
 70:               ></div>
 71:             </div>
 72:           </div>
 73:         )}
 74: 
 75:         {/* Recent Items Preview */}
 76:         {shoppingListItems.length > 0 && (
 77:           <div className="space-y-2">
 78:             <h4 className="text-sm font-medium text-warm-brown">Recent Items</h4>
 79:             <div className="space-y-1">
 80:               {shoppingListItems.slice(0, 3).map((item) => (
 81:                 <div key={item.id} className="flex items-center gap-2 text-sm">
 82:                   {item.checked ? (
 83:                     <Check className="h-3 w-3 text-green-600" />
 84:                   ) : (
 85:                     <div className="w-3 h-3 border border-muted-foreground/30 rounded"></div>
 86:                   )}
 87:                   <span className={`flex-1 ${item.checked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
 88:                     {item.ingredient_name}
 89:                   </span>
 90:                   {item.recipe_name && (
 91:                     <Badge variant="outline" className="text-xs px-1 py-0">
 92:                       {item.recipe_name}
 93:                     </Badge>
 94:                   )}
 95:                 </div>
 96:               ))}
 97:               {shoppingListItems.length > 3 && (
 98:                 <div className="text-xs text-muted-foreground">
 99:                   +{shoppingListItems.length - 3} more items
100:                 </div>
101:               )}
102:             </div>
103:           </div>
104:         )}
105: 
106:         {/* Empty State */}
107:         {totalItems === 0 && (
108:           <div className="text-center py-4">
109:             <div className="bg-muted/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
110:               <Plus className="h-6 w-6 text-muted-foreground" />
111:             </div>
112:             <p className="text-sm text-muted-foreground">
113:               No items yet. Add ingredients from recipes!
114:             </p>
115:           </div>
116:         )}
117: 
118:         {/* Action Button */}
119:         <Button 
120:           onClick={handleViewShoppingList}
121:           className="w-full"
122:           variant={totalItems > 0 ? "default" : "outline"}
123:         >
124:           {totalItems > 0 ? "View Shopping List" : "Start Shopping List"}
125:         </Button>
126:       </CardContent>
127:     </Card>
128:   );
129: }
````

## File: src/components/ShoppingListModal.tsx
````typescript
  1: import { useState, useEffect } from 'react';
  2: import { motion, AnimatePresence } from 'framer-motion';
  3: import { Dialog, DialogContent } from '@/components/ui/dialog';
  4: import { Button } from '@/components/ui/button';
  5: import { Progress } from '@/components/ui/progress';
  6: import { X, ShoppingCart, CheckCircle, ArrowRight, Package } from 'lucide-react';
  7: import { useNavigate } from 'react-router-dom';
  8: 
  9: interface ShoppingListModalProps {
 10:   isOpen: boolean;
 11:   onClose: () => void;
 12:   addedCount: number;
 13:   recipeName: string;
 14:   ingredientPositions?: Array<{ x: number; y: number }>;
 15:   onFloatingCartCreate?: (count: number) => void;
 16: }
 17: 
 18: export default function ShoppingListModal({ 
 19:   isOpen, 
 20:   onClose, 
 21:   addedCount, 
 22:   recipeName,
 23:   ingredientPositions = [],
 24:   onFloatingCartCreate
 25: }: ShoppingListModalProps) {
 26:   const navigate = useNavigate();
 27:   const [showSuccess, setShowSuccess] = useState(false);
 28:   const [autoDismissProgress, setAutoDismissProgress] = useState(0);
 29:   const [showAutoDismiss, setShowAutoDismiss] = useState(false);
 30: 
 31:   const handleViewShoppingList = () => {
 32:     onClose();
 33:     navigate('/shopping-list');
 34:   };
 35: 
 36:   const handleAnimationComplete = () => {
 37:     setShowSuccess(true);
 38:     // Start auto-dismiss countdown after success animation
 39:     setTimeout(() => {
 40:       setShowAutoDismiss(true);
 41:     }, 1000);
 42:   };
 43: 
 44:   const handleDismiss = () => {
 45:     onClose();
 46:     // Create floating cart button with count
 47:     onFloatingCartCreate?.(addedCount);
 48:   };
 49: 
 50:   // Auto-dismiss logic
 51:   useEffect(() => {
 52:     if (!showAutoDismiss) return;
 53: 
 54:     const duration = 3000; // 3 seconds
 55:     const interval = 50; // Update every 50ms
 56:     const steps = duration / interval;
 57:     let currentStep = 0;
 58: 
 59:     const timer = setInterval(() => {
 60:       currentStep++;
 61:       const progress = (currentStep / steps) * 100;
 62:       setAutoDismissProgress(progress);
 63: 
 64:       if (currentStep >= steps) {
 65:         clearInterval(timer);
 66:         handleDismiss();
 67:       }
 68:     }, interval);
 69: 
 70:     return () => clearInterval(timer);
 71:   }, [showAutoDismiss, addedCount, onFloatingCartCreate]);
 72: 
 73:   return (
 74:     <Dialog open={isOpen} onOpenChange={handleDismiss}>
 75:       <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl overflow-hidden">
 76:         <div className="text-center py-6 relative">
 77:           {/* Auto-dismiss progress bar */}
 78:           {showAutoDismiss && (
 79:             <div className="absolute top-0 left-0 right-0">
 80:               <Progress value={autoDismissProgress} className="h-1 rounded-none" />
 81:             </div>
 82:           )}
 83: 
 84:           {/* Close Button */}
 85:           <Button
 86:             variant="ghost"
 87:             size="sm"
 88:             onClick={handleDismiss}
 89:             className="absolute right-4 top-4 text-muted-foreground hover:text-foreground z-10"
 90:           >
 91:             <X className="h-4 w-4" />
 92:           </Button>
 93: 
 94:           {/* Enhanced Animation Container */}
 95:           <div className="mb-6 relative h-32 flex items-center justify-center overflow-hidden">
 96:             <AnimatePresence mode="wait">
 97:               {!showSuccess ? (
 98:                 <motion.div
 99:                   key="cart-animation"
100:                   className="relative"
101:                 >
102:                   {/* Shopping Cart with Enhanced Animation */}
103:                   <motion.div
104:                     initial={{ scale: 0, rotate: -180, y: 50 }}
105:                     animate={{ scale: 1, rotate: 0, y: 0 }}
106:                     transition={{ 
107:                       type: "spring", 
108:                       stiffness: 260, 
109:                       damping: 20,
110:                       duration: 0.8 
111:                     }}
112:                     className="bg-gradient-to-br from-primary/20 to-primary/10 p-5 rounded-full relative"
113:                   >
114:                     <motion.div
115:                       animate={{ 
116:                         rotate: [0, -10, 10, 0],
117:                         scale: [1, 1.1, 1]
118:                       }}
119:                       transition={{ 
120:                         duration: 2,
121:                         repeat: Infinity,
122:                         repeatDelay: 1
123:                       }}
124:                     >
125:                       <ShoppingCart className="h-10 w-10 text-primary" />
126:                     </motion.div>
127:                     
128:                     {/* Cart Emoji for Fun */}
129:                     <motion.div
130:                       initial={{ scale: 0, opacity: 0 }}
131:                       animate={{ scale: 1, opacity: 1 }}
132:                       transition={{ delay: 0.3 }}
133:                       className="absolute -top-2 -right-2 text-2xl"
134:                     >
135:                       🛒
136:                     </motion.div>
137:                   </motion.div>
138:                   
139:                   {/* Enhanced Flying Ingredients */}
140:                   {Array.from({ length: Math.min(addedCount, 8) }).map((_, i) => {
141:                     const ingredients = ['🥕', '🍅', '🧄', '🧅', '🥬', '🌶️', '🥒', '🍋'];
142:                     const startPosition = ingredientPositions[i] || {
143:                       x: Math.random() * 300 - 150,
144:                       y: Math.random() * 300 - 150
145:                     };
146:                     
147:                     return (
148:                       <motion.div
149:                         key={i}
150:                         initial={{ 
151:                           x: startPosition.x, 
152:                           y: startPosition.y,
153:                           scale: 0,
154:                           opacity: 0,
155:                           rotate: Math.random() * 360
156:                         }}
157:                         animate={{ 
158:                           x: 0, 
159:                           y: 0,
160:                           scale: 1,
161:                           opacity: 1,
162:                           rotate: 0
163:                         }}
164:                         transition={{ 
165:                           delay: i * 0.15,
166:                           duration: 0.8,
167:                           ease: "easeOut",
168:                           type: "spring",
169:                           stiffness: 200
170:                         }}
171:                         onAnimationComplete={i === Math.min(addedCount, 8) - 1 ? handleAnimationComplete : undefined}
172:                         className="absolute text-lg pointer-events-none"
173:                         style={{
174:                           top: '50%',
175:                           left: '50%',
176:                           transform: 'translate(-50%, -50%)'
177:                         }}
178:                       >
179:                         {ingredients[i % ingredients.length]}
180:                       </motion.div>
181:                     );
182:                   })}
183:                 </motion.div>
184:               ) : (
185:                 <motion.div
186:                   key="success-animation"
187:                   initial={{ scale: 0, opacity: 0, rotate: -180 }}
188:                   animate={{ scale: 1, opacity: 1, rotate: 0 }}
189:                   transition={{ 
190:                     type: "spring", 
191:                     stiffness: 300, 
192:                     damping: 25,
193:                     duration: 0.6 
194:                   }}
195:                   className="relative"
196:                 >
197:                   <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-full">
198:                     <CheckCircle className="h-10 w-10 text-green-600" />
199:                   </div>
200:                   
201:                   {/* Success confetti */}
202:                   {Array.from({ length: 6 }).map((_, i) => (
203:                     <motion.div
204:                       key={i}
205:                       initial={{ scale: 0, opacity: 0 }}
206:                       animate={{ 
207:                         scale: [0, 1, 0],
208:                         opacity: [0, 1, 0],
209:                         x: [0, Math.random() * 100 - 50],
210:                         y: [0, Math.random() * -80 - 20]
211:                       }}
212:                       transition={{ 
213:                         delay: i * 0.1,
214:                         duration: 1,
215:                         ease: "easeOut"
216:                       }}
217:                       className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full"
218:                     />
219:                   ))}
220:                   
221:                   {/* Floating package icon */}
222:                   <motion.div
223:                     initial={{ y: 20, opacity: 0 }}
224:                     animate={{ y: -10, opacity: 0.7 }}
225:                     transition={{ 
226:                       delay: 0.3,
227:                       duration: 2,
228:                       repeat: Infinity,
229:                       repeatType: "reverse"
230:                     }}
231:                     className="absolute -top-8 left-1/2 transform -translate-x-1/2"
232:                   >
233:                     <Package className="w-6 h-6 text-green-600" />
234:                   </motion.div>
235:                 </motion.div>
236:               )}
237:             </AnimatePresence>
238:           </div>
239: 
240:           {/* Content */}
241:           <motion.div
242:             initial={{ opacity: 0, y: 20 }}
243:             animate={{ opacity: 1, y: 0 }}
244:             transition={{ delay: 0.3, duration: 0.4 }}
245:           >
246:             <motion.h3 
247:               className="text-xl font-heading font-bold text-warm-brown mb-2"
248:               initial={{ opacity: 0, y: 10 }}
249:               animate={{ opacity: 1, y: 0 }}
250:               transition={{ delay: 0.2 }}
251:             >
252:               🎉 Added to Shopping List!
253:             </motion.h3>
254:             <motion.p 
255:               className="text-muted-foreground mb-6"
256:               initial={{ opacity: 0, y: 10 }}
257:               animate={{ opacity: 1, y: 0 }}
258:               transition={{ delay: 0.3 }}
259:             >
260:               <span className="font-bold text-primary">{addedCount}</span> ingredient{addedCount !== 1 ? 's' : ''} from{' '}
261:               <span className="font-medium text-foreground">{recipeName}</span> added to your shopping list
262:             </motion.p>
263: 
264:             {/* Auto-dismiss notice */}
265:             {showAutoDismiss && (
266:               <motion.p 
267:                 className="text-xs text-muted-foreground mb-4 flex items-center justify-center gap-2"
268:                 initial={{ opacity: 0, scale: 0.8 }}
269:                 animate={{ opacity: 1, scale: 1 }}
270:               >
271:                 <span className="animate-pulse">⏱️</span>
272:                 Auto-closing in {Math.ceil((100 - autoDismissProgress) / 33)} seconds...
273:               </motion.p>
274:             )}
275: 
276:             {/* Enhanced Action Buttons */}
277:             <motion.div 
278:               className="flex gap-3"
279:               initial={{ opacity: 0, y: 20 }}
280:               animate={{ opacity: 1, y: 0 }}
281:               transition={{ delay: 0.4 }}
282:             >
283:               <Button
284:                 variant="outline"
285:                 onClick={handleDismiss}
286:                 className="flex-1 hover:scale-105 transition-transform"
287:               >
288:                 Continue Cooking
289:               </Button>
290:               <Button
291:                 onClick={handleViewShoppingList}
292:                 className="flex-1 gap-2 hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary/80"
293:               >
294:                 View List
295:                 <motion.div
296:                   animate={{ x: [0, 3, 0] }}
297:                   transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
298:                 >
299:                   <ArrowRight className="h-4 w-4" />
300:                 </motion.div>
301:               </Button>
302:             </motion.div>
303:           </motion.div>
304:         </div>
305:       </DialogContent>
306:     </Dialog>
307:   );
308: }
````

## File: src/components/SmartCategorizationPanel.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { Button } from '@/components/ui/button';
  3: import { Badge } from '@/components/ui/badge';
  4: import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
  5: import { Separator } from '@/components/ui/separator';
  6: import { 
  7:   Merge, 
  8:   Sparkles, 
  9:   Check, 
 10:   X, 
 11:   AlertTriangle
 12: } from 'lucide-react';
 13: import { ShoppingListItem } from '@/types/shopping';
 14: import { ingredientConsolidationService } from '@/services/ingredientConsolidationService';
 15: import { useShoppingList } from '@/contexts/ShoppingListContext';
 16: import { useToast } from '@/hooks/use-toast';
 17: 
 18: interface SmartCategorizationPanelProps {
 19:   isOpen: boolean;
 20:   onClose: () => void;
 21:   items: ShoppingListItem[];
 22: }
 23: 
 24: interface ConsolidationSuggestion {
 25:   canonical_name: string;
 26:   total_quantity: string;
 27:   aliases: string[];
 28:   recipe_names: string[];
 29:   category?: string;
 30: }
 31: 
 32: const SmartCategorizationPanel: React.FC<SmartCategorizationPanelProps> = ({
 33:   isOpen,
 34:   onClose,
 35:   items
 36: }) => {
 37:   const [suggestions, setSuggestions] = useState<ConsolidationSuggestion[]>([]);
 38:   const [selectedSuggestions, setSelectedSuggestions] = useState<Set<string>>(new Set());
 39:   const [loading, setLoading] = useState(false);
 40:   const { consolidateIngredients } = useShoppingList();
 41:   const { toast } = useToast();
 42: 
 43:   useEffect(() => {
 44:     if (isOpen && items.length > 0) {
 45:       generateSuggestions();
 46:     }
 47:   }, [isOpen, items]);
 48: 
 49:   const generateSuggestions = () => {
 50:     setLoading(true);
 51:     
 52:     try {
 53:       const consolidated = ingredientConsolidationService.findSimilarIngredients(
 54:         items.map(item => ({
 55:           ingredient_name: item.ingredient_name,
 56:           quantity: item.quantity,
 57:           recipe_name: item.recipe_name
 58:         }))
 59:       );
 60: 
 61:       // Only show suggestions where we actually consolidated something
 62:       const meaningfulSuggestions = consolidated.filter(suggestion => 
 63:         suggestion.aliases.length > 1
 64:       );
 65: 
 66:       setSuggestions(meaningfulSuggestions);
 67:       
 68:       // Pre-select all suggestions
 69:       setSelectedSuggestions(new Set(meaningfulSuggestions.map(s => s.canonical_name)));
 70:     } catch (error) {
 71:       console.error('Error generating suggestions:', error);
 72:       toast({
 73:         title: "Error",
 74:         description: "Failed to generate consolidation suggestions",
 75:         variant: "destructive"
 76:       });
 77:     } finally {
 78:       setLoading(false);
 79:     }
 80:   };
 81: 
 82:   const toggleSuggestion = (canonicalName: string) => {
 83:     const newSelected = new Set(selectedSuggestions);
 84:     if (newSelected.has(canonicalName)) {
 85:       newSelected.delete(canonicalName);
 86:     } else {
 87:       newSelected.add(canonicalName);
 88:     }
 89:     setSelectedSuggestions(newSelected);
 90:   };
 91: 
 92:   const applyConsolidation = async () => {
 93:     if (selectedSuggestions.size === 0) {
 94:       toast({
 95:         title: "No changes",
 96:         description: "Please select at least one suggestion to apply",
 97:         variant: "destructive"
 98:       });
 99:       return;
100:     }
101: 
102:     try {
103:       await consolidateIngredients();
104:       toast({
105:         title: "Consolidation applied",
106:         description: `${selectedSuggestions.size} ingredient groups were consolidated`,
107:       });
108:       onClose();
109:     } catch (error) {
110:       toast({
111:         title: "Error",
112:         description: "Failed to apply consolidation",
113:         variant: "destructive"
114:       });
115:     }
116:   };
117: 
118:   if (loading) {
119:     return (
120:       <Dialog open={isOpen} onOpenChange={onClose}>
121:         <DialogContent className="sm:max-w-2xl">
122:           <DialogHeader>
123:             <DialogTitle className="flex items-center gap-2">
124:               <Sparkles size={20} />
125:               Smart Consolidation
126:             </DialogTitle>
127:           </DialogHeader>
128:           <div className="flex items-center justify-center py-8">
129:             <div className="text-center">
130:               <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
131:               <p className="text-muted-foreground">Analyzing ingredients...</p>
132:             </div>
133:           </div>
134:         </DialogContent>
135:       </Dialog>
136:     );
137:   }
138: 
139:   return (
140:     <Dialog open={isOpen} onOpenChange={onClose}>
141:       <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
142:         <DialogHeader>
143:           <DialogTitle className="flex items-center gap-2">
144:             <Sparkles size={20} />
145:             Smart Consolidation
146:           </DialogTitle>
147:         </DialogHeader>
148: 
149:         {suggestions.length === 0 ? (
150:           <div className="text-center py-8">
151:             <Check size={48} className="mx-auto mb-4 text-green-500" />
152:             <h3 className="font-heading font-bold mb-2">No duplicates found!</h3>
153:             <p className="text-muted-foreground">
154:               Your shopping list is already optimized. All ingredients are unique.
155:             </p>
156:           </div>
157:         ) : (
158:           <div className="space-y-6">
159:             <div className="bg-muted/50 rounded-lg p-4">
160:               <div className="flex items-center gap-2 mb-2">
161:                 <Merge size={16} />
162:                 <span className="font-heading font-bold text-sm">
163:                   Found {suggestions.length} consolidation opportunities
164:                 </span>
165:               </div>
166:               <p className="text-sm text-muted-foreground">
167:                 We found similar ingredients that can be combined to simplify your shopping list.
168:               </p>
169:             </div>
170: 
171:             <div className="space-y-4">
172:               {suggestions.map((suggestion, index) => (
173:                 <div key={suggestion.canonical_name} className="border rounded-lg p-4">
174:                   <div className="flex items-start justify-between mb-3">
175:                     <div className="flex-1">
176:                       <div className="flex items-center gap-2 mb-2">
177:                         <h4 className="font-heading font-bold">
178:                           {suggestion.canonical_name}
179:                         </h4>
180:                         {suggestion.total_quantity && (
181:                           <Badge variant="secondary">
182:                             {suggestion.total_quantity}
183:                           </Badge>
184:                         )}
185:                       </div>
186:                       
187:                       <div className="space-y-2">
188:                         <div>
189:                           <span className="text-sm font-medium text-muted-foreground">
190:                             Combines:
191:                           </span>
192:                           <div className="flex flex-wrap gap-1 mt-1">
193:                             {suggestion.aliases.map((alias, aliasIndex) => (
194:                               <Badge key={aliasIndex} variant="outline" className="text-xs">
195:                                 {alias}
196:                               </Badge>
197:                             ))}
198:                           </div>
199:                         </div>
200:                         
201:                         {suggestion.recipe_names.length > 0 && (
202:                           <div>
203:                             <span className="text-sm font-medium text-muted-foreground">
204:                               From recipes:
205:                             </span>
206:                             <div className="flex flex-wrap gap-1 mt-1">
207:                               {suggestion.recipe_names.map((recipe, recipeIndex) => (
208:                                 <Badge key={recipeIndex} variant="secondary" className="text-xs">
209:                                   {recipe}
210:                                 </Badge>
211:                               ))}
212:                             </div>
213:                           </div>
214:                         )}
215:                       </div>
216:                     </div>
217: 
218:                     <Button
219:                       variant={selectedSuggestions.has(suggestion.canonical_name) ? 'default' : 'outline'}
220:                       size="sm"
221:                       onClick={() => toggleSuggestion(suggestion.canonical_name)}
222:                       className="ml-4"
223:                     >
224:                       {selectedSuggestions.has(suggestion.canonical_name) ? (
225:                         <Check size={16} />
226:                       ) : (
227:                         <X size={16} />
228:                       )}
229:                     </Button>
230:                   </div>
231:                 </div>
232:               ))}
233:             </div>
234: 
235:             <Separator />
236: 
237:             <div className="flex justify-between">
238:               <Button variant="outline" onClick={onClose}>
239:                 Cancel
240:               </Button>
241:               
242:               <Button 
243:                 onClick={applyConsolidation}
244:                 disabled={selectedSuggestions.size === 0}
245:                 className="flex items-center gap-2"
246:               >
247:                 <Merge size={16} />
248:                 Apply Consolidation ({selectedSuggestions.size})
249:               </Button>
250:             </div>
251:           </div>
252:         )}
253:       </DialogContent>
254:     </Dialog>
255:   );
256: };
257: 
258: export default SmartCategorizationPanel;
````

## File: src/components/SwipeableCard.tsx
````typescript
  1: import React, { useState, useCallback, useRef } from 'react';
  2: import { motion, PanInfo, useAnimationControls } from 'framer-motion';
  3: import { Heart, HeartOff } from 'lucide-react';
  4: import { useHapticFeedback, useAnalytics } from '@/hooks/useProductionFeatures';
  5: 
  6: interface SwipeableCardProps {
  7:   children: React.ReactNode;
  8:   onSwipeLeft?: () => void;
  9:   onSwipeRight?: () => void;
 10:   onFavorite?: () => void;
 11:   isFavorited?: boolean;
 12:   className?: string;
 13:   disabled?: boolean;
 14: }
 15: 
 16: const SwipeableCard: React.FC<SwipeableCardProps> = ({
 17:   children,
 18:   onSwipeLeft,
 19:   onSwipeRight,
 20:   onFavorite,
 21:   isFavorited = false,
 22:   className = '',
 23:   disabled = false
 24: }) => {
 25:   const [isDragging, setIsDragging] = useState(false);
 26:   const controls = useAnimationControls();
 27:   const cardRef = useRef<HTMLDivElement>(null);
 28:   const { triggerHaptic } = useHapticFeedback();
 29:   const { track } = useAnalytics();
 30: 
 31:   const handleDragStart = useCallback(() => {
 32:     if (disabled) return;
 33:     setIsDragging(true);
 34:     triggerHaptic('light');
 35:     track('swipe_start');
 36:   }, [disabled, triggerHaptic, track]);
 37: 
 38:   const handleDragEnd = useCallback(
 39:     (event: any, info: PanInfo) => {
 40:       if (disabled) return;
 41:       
 42:       setIsDragging(false);
 43:       const threshold = 100;
 44:       const velocity = info.velocity.x;
 45:       const offset = info.offset.x;
 46: 
 47:       if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
 48:         if (offset > 0 || velocity > 0) {
 49:           // Swipe right - favorite
 50:           controls.start({ 
 51:             x: window.innerWidth,
 52:             rotate: 15,
 53:             opacity: 0
 54:           }).then(() => {
 55:             onSwipeRight?.();
 56:             onFavorite?.();
 57:             controls.set({ x: 0, rotate: 0, opacity: 1 });
 58:           });
 59:           triggerHaptic('medium');
 60:           track('swipe_right', { action: 'favorite' });
 61:         } else {
 62:           // Swipe left - skip
 63:           controls.start({ 
 64:             x: -window.innerWidth,
 65:             rotate: -15,
 66:             opacity: 0
 67:           }).then(() => {
 68:             onSwipeLeft?.();
 69:             controls.set({ x: 0, rotate: 0, opacity: 1 });
 70:           });
 71:           triggerHaptic('light');
 72:           track('swipe_left', { action: 'skip' });
 73:         }
 74:       } else {
 75:         // Snap back
 76:         controls.start({ x: 0, rotate: 0 });
 77:       }
 78:     },
 79:     [disabled, controls, onSwipeLeft, onSwipeRight, onFavorite, triggerHaptic, track]
 80:   );
 81: 
 82:   const getSwipeIndicator = (offset: number) => {
 83:     if (Math.abs(offset) < 50) return null;
 84:     
 85:     if (offset > 0) {
 86:       return (
 87:         <div className="absolute inset-0 bg-green-500/20 rounded-xl flex items-center justify-center">
 88:           <div className="bg-white rounded-full p-4 shadow-lg">
 89:             <Heart className="w-8 h-8 text-green-500 fill-current" />
 90:           </div>
 91:         </div>
 92:       );
 93:     } else {
 94:       return (
 95:         <div className="absolute inset-0 bg-red-500/20 rounded-xl flex items-center justify-center">
 96:           <div className="bg-white rounded-full p-4 shadow-lg">
 97:             <HeartOff className="w-8 h-8 text-red-500" />
 98:           </div>
 99:         </div>
100:       );
101:     }
102:   };
103: 
104:   if (disabled) {
105:     return (
106:       <div className={className}>
107:         {children}
108:       </div>
109:     );
110:   }
111: 
112:   return (
113:     <motion.div
114:       ref={cardRef}
115:       className={`relative ${className}`}
116:       animate={controls}
117:       drag="x"
118:       dragConstraints={{ left: 0, right: 0 }}
119:       dragElastic={0.2}
120:       onDragStart={handleDragStart}
121:       onDragEnd={handleDragEnd}
122:       whileDrag={{ 
123:         scale: 1.02,
124:         zIndex: 10,
125:         boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
126:       }}
127:       style={{
128:         cursor: isDragging ? 'grabbing' : 'grab'
129:       }}
130:     >
131:       <motion.div
132:         initial={{ opacity: 0 }}
133:         animate={{ opacity: isDragging ? 1 : 0 }}
134:         transition={{ duration: 0.2 }}
135:       >
136:         {isDragging && (
137:           <motion.div
138:             animate={{ 
139:               opacity: 1,
140:               scale: [1, 1.1, 1]
141:             }}
142:             transition={{ 
143:               scale: { 
144:                 repeat: Infinity, 
145:                 duration: 1.5,
146:                 ease: "easeInOut"
147:               }
148:             }}
149:           >
150:             {getSwipeIndicator(cardRef.current?.getBoundingClientRect().x || 0)}
151:           </motion.div>
152:         )}
153:       </motion.div>
154:       
155:       {children}
156:       
157:       {/* Favorite indicator */}
158:       {isFavorited && (
159:         <motion.div
160:           initial={{ scale: 0 }}
161:           animate={{ scale: 1 }}
162:           className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 shadow-lg"
163:         >
164:           <Heart className="w-4 h-4 fill-current" />
165:         </motion.div>
166:       )}
167:     </motion.div>
168:   );
169: };
170: 
171: export default SwipeableCard;
````

## File: src/components/TextModeDisplay.tsx
````typescript
 1: import { Card, CardContent } from '@/components/ui/card';
 2: import { Badge } from '@/components/ui/badge';
 3: import { MAMA_VOICES } from '@/services/voiceService';
 4: 
 5: interface TextModeDisplayProps {
 6:   mamaId: string;
 7:   currentText: string;
 8:   isActive: boolean;
 9: }
10: 
11: export const TextModeDisplay = ({ mamaId, currentText, isActive }: TextModeDisplayProps) => {
12:   const mama = MAMA_VOICES[mamaId];
13:   
14:   if (!mama || !isActive) {
15:     return null;
16:   }
17: 
18:   const getMamaAvatar = (mamaId: string) => {
19:     switch (mamaId) {
20:       case 'nonna':
21:         return '👵🏻'; // Italian grandmother
22:       case 'abuela':
23:         return '👵🏽'; // Latina grandmother
24:       case 'mae':
25:         return '👵🏼'; // Southern grandmother
26:       default:
27:         return '👵';
28:     }
29:   };
30: 
31:   const getMamaGreeting = (mamaId: string) => {
32:     switch (mamaId) {
33:       case 'nonna':
34:         return 'Ciao, tesoro!';
35:       case 'abuela':
36:         return '¡Hola, mi amor!';
37:       case 'mae':
38:         return 'Hey there, sugar!';
39:       default:
40:         return 'Hello, dear!';
41:     }
42:   };
43: 
44:   return (
45:     <Card className="w-full max-w-md mx-auto border-primary/20 bg-primary/5">
46:       <CardContent className="p-4">
47:         <div className="flex items-start gap-3">
48:           {/* Mama Avatar */}
49:           <div className="flex-shrink-0">
50:             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
51:               {getMamaAvatar(mamaId)}
52:             </div>
53:           </div>
54: 
55:           {/* Content */}
56:           <div className="flex-1 space-y-2">
57:             <div className="flex items-center gap-2">
58:               <h3 className="font-semibold text-sm">{mama.name}</h3>
59:               <Badge variant="secondary" className="text-xs">
60:                 Text Mode
61:               </Badge>
62:             </div>
63:             
64:             {/* Current Text */}
65:             <div className="bg-background rounded-lg p-3 border">
66:               <p className="text-sm leading-relaxed">
67:                 {currentText || getMamaGreeting(mamaId)}
68:               </p>
69:             </div>
70: 
71:             {/* Character Indicator */}
72:             <div className="flex items-center gap-1 text-xs text-muted-foreground">
73:               <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
74:               <span>{mama.name} is ready to help</span>
75:             </div>
76:           </div>
77:         </div>
78:       </CardContent>
79:     </Card>
80:   );
81: };
````

## File: src/components/VoiceConfigPanel.tsx
````typescript
  1: import { useState } from 'react';
  2: import { Button } from '@/components/ui/button';
  3: import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  4: import { Slider } from '@/components/ui/slider';
  5: import { Switch } from '@/components/ui/switch';
  6: import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
  7: import { Label } from '@/components/ui/label';
  8: import { Badge } from '@/components/ui/badge';
  9: import { Volume2, VolumeX, Mic, MicOff, Settings, Play, Square } from 'lucide-react';
 10: import { useVoice } from '@/hooks/useVoice';
 11: import { MAMA_VOICES, MamaVoice } from '@/services/voiceService';
 12: 
 13: export const VoiceConfigPanel = () => {
 14:   const { config, updateConfig, isPlaying, queueLength, clearQueue, stopSpeaking } = useVoice();
 15:   const [isExpanded, setIsExpanded] = useState(false);
 16: 
 17:   const handleModeChange = (mode: 'full' | 'essential' | 'text') => {
 18:     updateConfig({ mode });
 19:   };
 20: 
 21:   const handleVolumeChange = (volume: number[]) => {
 22:     updateConfig({ volume: volume[0] });
 23:   };
 24: 
 25:   const handleSpeedChange = (speed: number[]) => {
 26:     updateConfig({ speed: speed[0] });
 27:   };
 28: 
 29:   const handleEnabledToggle = (enabled: boolean) => {
 30:     updateConfig({ enabled });
 31:     if (!enabled) {
 32:       clearQueue();
 33:     }
 34:   };
 35: 
 36:   const getModeDescription = (mode: string) => {
 37:     switch (mode) {
 38:       case 'full':
 39:         return 'AI generates speech for all instructions';
 40:       case 'essential':
 41:         return 'Pre-recorded phrases for common actions';
 42:       case 'text':
 43:         return 'Text-only with Mama character display';
 44:       default:
 45:         return '';
 46:     }
 47:   };
 48: 
 49:   const getModeColor = (mode: string) => {
 50:     switch (mode) {
 51:       case 'full':
 52:         return 'bg-primary';
 53:       case 'essential':
 54:         return 'bg-secondary';
 55:       case 'text':
 56:         return 'bg-muted';
 57:       default:
 58:         return 'bg-muted';
 59:     }
 60:   };
 61: 
 62:   return (
 63:     <Card className="w-full max-w-md mx-auto">
 64:       <CardHeader className="pb-3">
 65:         <CardTitle className="flex items-center justify-between">
 66:           <div className="flex items-center gap-2">
 67:             <Settings className="h-5 w-5" />
 68:             Voice Settings
 69:           </div>
 70:           <Button
 71:             variant="ghost"
 72:             size="sm"
 73:             onClick={() => setIsExpanded(!isExpanded)}
 74:           >
 75:             {isExpanded ? 'Collapse' : 'Expand'}
 76:           </Button>
 77:         </CardTitle>
 78:       </CardHeader>
 79: 
 80:       <CardContent className="space-y-6">
 81:         {/* Voice Status */}
 82:         <div className="flex items-center justify-between">
 83:           <div className="flex items-center gap-2">
 84:             {config.enabled ? (
 85:               isPlaying ? (
 86:                 <Mic className="h-4 w-4 text-primary animate-pulse" />
 87:               ) : (
 88:                 <Mic className="h-4 w-4 text-muted-foreground" />
 89:               )
 90:             ) : (
 91:               <MicOff className="h-4 w-4 text-muted-foreground" />
 92:             )}
 93:             <span className="text-sm font-medium">
 94:               {isPlaying ? 'Speaking...' : 'Ready'}
 95:             </span>
 96:           </div>
 97:           
 98:           {queueLength > 0 && (
 99:             <Badge variant="secondary">
100:               {queueLength} in queue
101:             </Badge>
102:           )}
103:           
104:           {isPlaying && (
105:             <Button
106:               variant="outline"
107:               size="sm"
108:               onClick={stopSpeaking}
109:               className="h-7 px-2"
110:             >
111:               <Square className="h-3 w-3" />
112:             </Button>
113:           )}
114:         </div>
115: 
116:         {/* Voice Mode Selection */}
117:         <div className="space-y-3">
118:           <Label className="text-sm font-medium">Voice Mode</Label>
119:           <div className="grid gap-2">
120:             {(['full', 'essential', 'text'] as const).map((mode) => (
121:               <div
122:                 key={mode}
123:                 className={`p-3 rounded-lg border cursor-pointer transition-colors ${
124:                   config.mode === mode 
125:                     ? 'border-primary bg-primary/5' 
126:                     : 'border-border hover:bg-muted/50'
127:                 }`}
128:                 onClick={() => handleModeChange(mode)}
129:               >
130:                 <div className="flex items-center justify-between">
131:                   <div className="flex items-center gap-2">
132:                     <div className={`w-2 h-2 rounded-full ${config.mode === mode ? getModeColor(mode) : 'bg-muted'}`} />
133:                     <span className="font-medium capitalize">{mode} Voice Mode</span>
134:                   </div>
135:                   {config.mode === mode && <Badge variant="secondary">Active</Badge>}
136:                 </div>
137:                 <p className="text-xs text-muted-foreground mt-1 ml-4">
138:                   {getModeDescription(mode)}
139:                 </p>
140:               </div>
141:             ))}
142:           </div>
143:         </div>
144: 
145:         {isExpanded && (
146:           <>
147:             {/* Master Enable/Disable */}
148:             <div className="flex items-center justify-between">
149:               <Label htmlFor="voice-enabled" className="text-sm font-medium">
150:                 Voice Enabled
151:               </Label>
152:               <Switch
153:                 id="voice-enabled"
154:                 checked={config.enabled}
155:                 onCheckedChange={handleEnabledToggle}
156:               />
157:             </div>
158: 
159:             {/* Volume Control */}
160:             {config.enabled && config.mode !== 'text' && (
161:               <div className="space-y-2">
162:                 <div className="flex items-center justify-between">
163:                   <Label className="text-sm font-medium flex items-center gap-2">
164:                     {config.volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
165:                     Volume
166:                   </Label>
167:                   <span className="text-sm text-muted-foreground">
168:                     {Math.round(config.volume * 100)}%
169:                   </span>
170:                 </div>
171:                 <Slider
172:                   value={[config.volume]}
173:                   onValueChange={handleVolumeChange}
174:                   max={1}
175:                   min={0}
176:                   step={0.1}
177:                   className="w-full"
178:                 />
179:               </div>
180:             )}
181: 
182:             {/* Speed Control */}
183:             {config.enabled && config.mode !== 'text' && (
184:               <div className="space-y-2">
185:                 <div className="flex items-center justify-between">
186:                   <Label className="text-sm font-medium">Speech Speed</Label>
187:                   <span className="text-sm text-muted-foreground">
188:                     {config.speed}x
189:                   </span>
190:                 </div>
191:                 <Slider
192:                   value={[config.speed]}
193:                   onValueChange={handleSpeedChange}
194:                   max={1.2}
195:                   min={0.8}
196:                   step={0.1}
197:                   className="w-full"
198:                 />
199:               </div>
200:             )}
201: 
202:             {/* Voice Preview */}
203:             {config.enabled && config.mode !== 'text' && (
204:               <div className="space-y-2">
205:                 <Label className="text-sm font-medium">Voice Preview</Label>
206:                 <div className="grid gap-2">
207:                   {Object.values(MAMA_VOICES).map((mama) => (
208:                     <Button
209:                       key={mama.id}
210:                       variant="outline"
211:                       size="sm"
212:                       className="justify-start"
213:                       disabled={isPlaying}
214:                     >
215:                       <Play className="h-3 w-3 mr-2" />
216:                       {mama.name} ({mama.accent})
217:                     </Button>
218:                   ))}
219:                 </div>
220:               </div>
221:             )}
222:           </>
223:         )}
224: 
225:         {/* Configuration Info */}
226:         <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
227:           <strong>Note:</strong> Voice features require ElevenLabs API key. 
228:           Configure in environment variables when ready.
229:         </div>
230:       </CardContent>
231:     </Card>
232:   );
233: };
````

## File: src/components/VoiceStatusIndicator.tsx
````typescript
 1: import { useState, useEffect } from 'react';
 2: import { Badge } from '@/components/ui/badge';
 3: import { Button } from '@/components/ui/button';
 4: import { Mic, MicOff, Volume2, VolumeX, Pause, Play, Square } from 'lucide-react';
 5: import { useVoice } from '@/hooks/useVoice';
 6: 
 7: interface VoiceStatusIndicatorProps {
 8:   className?: string;
 9:   showControls?: boolean;
10: }
11: 
12: export const VoiceStatusIndicator = ({ className = '', showControls = true }: VoiceStatusIndicatorProps) => {
13:   const { config, isPlaying, queueLength, stopSpeaking, clearQueue } = useVoice();
14:   const [audioWave, setAudioWave] = useState(false);
15: 
16:   // Animate audio wave when speaking
17:   useEffect(() => {
18:     if (isPlaying) {
19:       const interval = setInterval(() => {
20:         setAudioWave(prev => !prev);
21:       }, 500);
22:       return () => clearInterval(interval);
23:     } else {
24:       setAudioWave(false);
25:     }
26:   }, [isPlaying]);
27: 
28:   if (config.mode === 'text') {
29:     return null;
30:   }
31: 
32:   const getStatusIcon = () => {
33:     if (!config.enabled) {
34:       return <MicOff className="h-4 w-4 text-muted-foreground" />;
35:     }
36:     if (isPlaying) {
37:       return <Mic className={`h-4 w-4 text-primary ${audioWave ? 'scale-110' : 'scale-100'} transition-transform`} />;
38:     }
39:     return <Volume2 className="h-4 w-4 text-muted-foreground" />;
40:   };
41: 
42:   const getStatusText = () => {
43:     if (!config.enabled) return 'Voice Disabled';
44:     if (isPlaying) return 'Speaking...';
45:     if (queueLength > 0) return `${queueLength} queued`;
46:     return 'Voice Ready';
47:   };
48: 
49:   const getStatusVariant = (): "default" | "secondary" | "destructive" | "outline" => {
50:     if (!config.enabled) return 'outline';
51:     if (isPlaying) return 'default';
52:     if (queueLength > 0) return 'secondary';
53:     return 'outline';
54:   };
55: 
56:   return (
57:     <div className={`flex items-center gap-2 ${className}`}>
58:       {/* Status Badge */}
59:       <Badge variant={getStatusVariant()} className="flex items-center gap-1">
60:         {getStatusIcon()}
61:         <span className="text-xs">{getStatusText()}</span>
62:       </Badge>
63: 
64:       {/* Voice Mode Indicator */}
65:       <Badge variant="outline" className="text-xs">
66:         {config.mode === 'full' ? 'Full Voice' : 'Essential'}
67:       </Badge>
68: 
69:       {/* Controls */}
70:       {showControls && isPlaying && (
71:         <div className="flex items-center gap-1">
72:           <Button
73:             variant="ghost"
74:             size="sm"
75:             onClick={stopSpeaking}
76:             className="h-6 w-6 p-0"
77:           >
78:             <Square className="h-3 w-3" />
79:           </Button>
80:           
81:           {queueLength > 0 && (
82:             <Button
83:               variant="ghost"
84:               size="sm"
85:               onClick={clearQueue}
86:               className="h-6 w-6 p-0"
87:             >
88:               <Pause className="h-3 w-3" />
89:             </Button>
90:           )}
91:         </div>
92:       )}
93:     </div>
94:   );
95: };
````

## File: src/contexts/AccessibilityContext.tsx
````typescript
 1: import React, { createContext, useContext, useState, useEffect } from 'react';
 2: 
 3: interface AccessibilityContextType {
 4:   highContrast: boolean;
 5:   reducedMotion: boolean;
 6:   focusVisible: boolean;
 7:   toggleHighContrast: () => void;
 8:   setFocusVisible: (visible: boolean) => void;
 9: }
10: 
11: const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
12: 
13: export const useAccessibility = () => {
14:   const context = useContext(AccessibilityContext);
15:   if (!context) {
16:     throw new Error('useAccessibility must be used within AccessibilityProvider');
17:   }
18:   return context;
19: };
20: 
21: interface AccessibilityProviderProps {
22:   children: React.ReactNode;
23: }
24: 
25: export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
26:   const [highContrast, setHighContrast] = useState(() => {
27:     const stored = localStorage.getItem('high-contrast');
28:     return stored ? JSON.parse(stored) : false;
29:   });
30:   
31:   const [focusVisible, setFocusVisible] = useState(false);
32:   const [reducedMotion, setReducedMotion] = useState(false);
33: 
34:   // Detect user preference for reduced motion
35:   useEffect(() => {
36:     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
37:     setReducedMotion(mediaQuery.matches);
38:     
39:     const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
40:     mediaQuery.addEventListener('change', handleChange);
41:     
42:     return () => mediaQuery.removeEventListener('change', handleChange);
43:   }, []);
44: 
45:   // Apply high contrast mode
46:   useEffect(() => {
47:     document.documentElement.classList.toggle('high-contrast', highContrast);
48:     localStorage.setItem('high-contrast', JSON.stringify(highContrast));
49:   }, [highContrast]);
50: 
51:   // Apply reduced motion preference
52:   useEffect(() => {
53:     document.documentElement.classList.toggle('reduce-motion', reducedMotion);
54:   }, [reducedMotion]);
55: 
56:   // Detect keyboard navigation
57:   useEffect(() => {
58:     const handleKeyDown = (e: KeyboardEvent) => {
59:       if (e.key === 'Tab') {
60:         setFocusVisible(true);
61:       }
62:     };
63: 
64:     const handleMouseDown = () => {
65:       setFocusVisible(false);
66:     };
67: 
68:     document.addEventListener('keydown', handleKeyDown);
69:     document.addEventListener('mousedown', handleMouseDown);
70: 
71:     return () => {
72:       document.removeEventListener('keydown', handleKeyDown);
73:       document.removeEventListener('mousedown', handleMouseDown);
74:     };
75:   }, []);
76: 
77:   const toggleHighContrast = () => {
78:     setHighContrast(!highContrast);
79:   };
80: 
81:   return (
82:     <AccessibilityContext.Provider
83:       value={{
84:         highContrast,
85:         reducedMotion,
86:         focusVisible,
87:         toggleHighContrast,
88:         setFocusVisible
89:       }}
90:     >
91:       {children}
92:     </AccessibilityContext.Provider>
93:   );
94: };
````

## File: src/contexts/AuthContext.tsx
````typescript
 1: import React, { createContext, useContext, useEffect, useState } from 'react';
 2: import { User, Session } from '@supabase/supabase-js';
 3: import { supabase } from '@/integrations/supabase/client';
 4: 
 5: interface AuthContextType {
 6:   user: User | null;
 7:   session: Session | null;
 8:   signUp: (email: string, password: string, displayName?: string) => Promise<{ error: any }>;
 9:   signIn: (email: string, password: string) => Promise<{ error: any }>;
10:   signOut: () => Promise<void>;
11:   loading: boolean;
12: }
13: 
14: const AuthContext = createContext<AuthContextType | undefined>(undefined);
15: 
16: export const useAuth = () => {
17:   const context = useContext(AuthContext);
18:   if (context === undefined) {
19:     throw new Error('useAuth must be used within an AuthProvider');
20:   }
21:   return context;
22: };
23: 
24: export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
25:   const [user, setUser] = useState<User | null>(null);
26:   const [session, setSession] = useState<Session | null>(null);
27:   const [loading, setLoading] = useState(true);
28: 
29:   useEffect(() => {
30:     // Set up auth state listener
31:     const { data: { subscription } } = supabase.auth.onAuthStateChange(
32:       (event, session) => {
33:         setSession(session);
34:         setUser(session?.user ?? null);
35:         setLoading(false);
36:       }
37:     );
38: 
39:     // Check for existing session
40:     supabase.auth.getSession().then(({ data: { session } }) => {
41:       setSession(session);
42:       setUser(session?.user ?? null);
43:       setLoading(false);
44:     });
45: 
46:     return () => subscription.unsubscribe();
47:   }, []);
48: 
49:   const signUp = async (email: string, password: string, displayName?: string) => {
50:     const redirectUrl = `${window.location.origin}/`;
51:     
52:     const { error } = await supabase.auth.signUp({
53:       email,
54:       password,
55:       options: {
56:         emailRedirectTo: redirectUrl,
57:         data: {
58:           display_name: displayName || email.split('@')[0]
59:         }
60:       }
61:     });
62:     return { error };
63:   };
64: 
65:   const signIn = async (email: string, password: string) => {
66:     const { error } = await supabase.auth.signInWithPassword({
67:       email,
68:       password
69:     });
70:     return { error };
71:   };
72: 
73:   const signOut = async () => {
74:     await supabase.auth.signOut();
75:   };
76: 
77:   const value = {
78:     user,
79:     session,
80:     signUp,
81:     signIn,
82:     signOut,
83:     loading
84:   };
85: 
86:   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
87: };
````

## File: src/contexts/ShoppingListContext.tsx
````typescript
  1: import React, { createContext, useContext, useEffect, useState } from 'react';
  2: import { supabase } from '@/integrations/supabase/client';
  3: import { ShoppingList, ShoppingListItem, AddToShoppingListRequest } from '@/types/shopping';
  4: import { useAuth } from './AuthContext';
  5: import { toast } from '@/hooks/use-toast';
  6: import { categorizationService } from '@/services/categorizationService';
  7: import { ingredientConsolidationService } from '@/services/ingredientConsolidationService';
  8: 
  9: interface ShoppingListContextType {
 10:   shoppingLists: ShoppingList[];
 11:   shoppingListItems: ShoppingListItem[];
 12:   currentList: ShoppingList | null;
 13:   loading: boolean;
 14:   addIngredientsToShoppingList: (request: AddToShoppingListRequest) => Promise<void>;
 15:   toggleItemChecked: (itemId: string) => Promise<void>;
 16:   addManualItem: (ingredientName: string, quantity?: string, category?: string) => Promise<void>;
 17:   deleteItem: (itemId: string) => Promise<void>;
 18:   refreshShoppingList: () => Promise<void>;
 19:   consolidateIngredients: () => Promise<void>;
 20:   reorderItems: (itemIds: string[]) => Promise<void>;
 21: }
 22: 
 23: const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);
 24: 
 25: export const useShoppingList = () => {
 26:   const context = useContext(ShoppingListContext);
 27:   if (context === undefined) {
 28:     throw new Error('useShoppingList must be used within a ShoppingListProvider');
 29:   }
 30:   return context;
 31: };
 32: 
 33: export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 34:   const { user, session } = useAuth();
 35:   const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);
 36:   const [shoppingListItems, setShoppingListItems] = useState<ShoppingListItem[]>([]);
 37:   const [currentList, setCurrentList] = useState<ShoppingList | null>(null);
 38:   const [loading, setLoading] = useState(false);
 39: 
 40:   const fetchShoppingLists = async () => {
 41:     if (!user) return;
 42:     
 43:     setLoading(true);
 44:     try {
 45:       const { data: lists, error } = await supabase
 46:         .from('shopping_lists')
 47:         .select('*')
 48:         .eq('user_id', user.id)
 49:         .order('created_at', { ascending: false });
 50: 
 51:       if (error) throw error;
 52:       
 53:       setShoppingLists(lists || []);
 54:       if (lists && lists.length > 0 && !currentList) {
 55:         setCurrentList(lists[0]);
 56:       }
 57:     } catch (error) {
 58:       console.error('Error fetching shopping lists:', error);
 59:       toast({
 60:         title: "Error",
 61:         description: "Failed to load shopping lists",
 62:         variant: "destructive"
 63:       });
 64:     } finally {
 65:       setLoading(false);
 66:     }
 67:   };
 68: 
 69:   const fetchShoppingListItems = async () => {
 70:     if (!currentList) return;
 71:     
 72:     try {
 73:       const { data: items, error } = await supabase
 74:         .from('shopping_list_items')
 75:         .select('*')
 76:         .eq('shopping_list_id', currentList.id)
 77:         .order('created_at', { ascending: false });
 78: 
 79:       if (error) throw error;
 80:       setShoppingListItems(items || []);
 81:     } catch (error) {
 82:       console.error('Error fetching shopping list items:', error);
 83:       toast({
 84:         title: "Error",
 85:         description: "Failed to load shopping list items",
 86:         variant: "destructive"
 87:       });
 88:     }
 89:   };
 90: 
 91:   const refreshShoppingList = async () => {
 92:     await Promise.all([fetchShoppingLists(), fetchShoppingListItems()]);
 93:   };
 94: 
 95:   const consolidateIngredients = async () => {
 96:     if (!currentList || shoppingListItems.length === 0) return;
 97: 
 98:     try {
 99:       // Find similar ingredients and consolidate
100:       const consolidated = ingredientConsolidationService.findSimilarIngredients(
101:         shoppingListItems.map(item => ({
102:           ingredient_name: item.ingredient_name,
103:           quantity: item.quantity,
104:           recipe_name: item.recipe_name
105:         }))
106:       );
107: 
108:       // Remove old items and add consolidated ones
109:       const { error: deleteError } = await supabase
110:         .from('shopping_list_items')
111:         .delete()
112:         .eq('shopping_list_id', currentList.id)
113:         .eq('checked', false);
114: 
115:       if (deleteError) throw deleteError;
116: 
117:       // Add consolidated items
118:       const consolidatedItems = await Promise.all(
119:         consolidated.map(async (item) => {
120:           const category = await categorizationService.categorizeIngredient(item.canonical_name);
121:           return {
122:             shopping_list_id: currentList.id,
123:             ingredient_name: item.canonical_name,
124:             quantity: item.total_quantity,
125:             category: category?.name || 'Other',
126:             category_id: category?.id,
127:             checked: false,
128:           };
129:         })
130:       );
131: 
132:       const { error: insertError } = await supabase
133:         .from('shopping_list_items')
134:         .insert(consolidatedItems);
135: 
136:       if (insertError) throw insertError;
137: 
138:       await fetchShoppingListItems();
139:       
140:       toast({
141:         title: "Ingredients consolidated",
142:         description: "Similar ingredients have been combined.",
143:       });
144:     } catch (error) {
145:       console.error('Error consolidating ingredients:', error);
146:       toast({
147:         title: "Error",
148:         description: "Failed to consolidate ingredients.",
149:         variant: "destructive",
150:       });
151:     }
152:   };
153: 
154:   const reorderItems = async (itemIds: string[]) => {
155:     // For now, we'll just update the local state
156:     // In a full implementation, you might want to store order in the database
157:     const reorderedItems = itemIds.map(id => 
158:       shoppingListItems.find(item => item.id === id)
159:     ).filter(Boolean) as ShoppingListItem[];
160:     
161:     setShoppingListItems(reorderedItems);
162:   };
163: 
164:   const addIngredientsToShoppingList = async (request: AddToShoppingListRequest) => {
165:     if (!currentList) return;
166: 
167:     try {
168:       const itemsToAdd = await Promise.all(
169:         request.ingredients.map(async (ingredient) => {
170:           // Smart categorization
171:           const category = await categorizationService.categorizeIngredient(ingredient.name);
172:           
173:           return {
174:             shopping_list_id: currentList.id,
175:             ingredient_name: ingredient.name,
176:             quantity: ingredient.quantity,
177:             recipe_id: request.recipeId,
178:             recipe_name: request.recipeName,
179:             category: category?.name || 'Other',
180:             category_id: category?.id,
181:             checked: false,
182:           };
183:         })
184:       );
185: 
186:       const { error } = await supabase
187:         .from('shopping_list_items')
188:         .insert(itemsToAdd);
189: 
190:       if (error) throw error;
191: 
192:       await fetchShoppingListItems();
193:       
194:       toast({
195:         title: "Added to shopping list",
196:         description: `${request.ingredients.length} ingredients added successfully.`,
197:       });
198:     } catch (error) {
199:       console.error('Error adding ingredients to shopping list:', error);
200:       toast({
201:         title: "Error",
202:         description: "Failed to add ingredients to shopping list.",
203:         variant: "destructive",
204:       });
205:     }
206:   };
207: 
208:   const toggleItemChecked = async (itemId: string) => {
209:     const item = shoppingListItems.find(i => i.id === itemId);
210:     if (!item) return;
211: 
212:     try {
213:       const { error } = await supabase
214:         .from('shopping_list_items')
215:         .update({ checked: !item.checked })
216:         .eq('id', itemId);
217: 
218:       if (error) throw error;
219: 
220:       setShoppingListItems(prev => 
221:         prev.map(i => i.id === itemId ? { ...i, checked: !i.checked } : i)
222:       );
223:     } catch (error) {
224:       console.error('Error toggling item:', error);
225:       toast({
226:         title: "Error",
227:         description: "Failed to update item",
228:         variant: "destructive"
229:       });
230:     }
231:   };
232: 
233:   const addManualItem = async (ingredientName: string, quantity?: string, category?: string) => {
234:     if (!currentList) return;
235: 
236:     try {
237:       // Smart categorization if no category provided
238:       const smartCategory = category || (await categorizationService.categorizeIngredient(ingredientName))?.name || 'Other';
239:       const categoryData = await categorizationService.categorizeIngredient(ingredientName);
240: 
241:       const { error } = await supabase
242:         .from('shopping_list_items')
243:         .insert({
244:           shopping_list_id: currentList.id,
245:           ingredient_name: ingredientName,
246:           quantity,
247:           category: smartCategory,
248:           category_id: categoryData?.id,
249:           checked: false,
250:         });
251: 
252:       if (error) throw error;
253: 
254:       await fetchShoppingListItems();
255:       
256:       toast({
257:         title: "Item added",
258:         description: `${ingredientName} added to shopping list.`,
259:       });
260:     } catch (error) {
261:       console.error('Error adding manual item:', error);
262:       toast({
263:         title: "Error",
264:         description: "Failed to add item to shopping list.",
265:         variant: "destructive",
266:       });
267:     }
268:   };
269: 
270:   const deleteItem = async (itemId: string) => {
271:     try {
272:       const { error } = await supabase
273:         .from('shopping_list_items')
274:         .delete()
275:         .eq('id', itemId);
276: 
277:       if (error) throw error;
278: 
279:       setShoppingListItems(prev => prev.filter(i => i.id !== itemId));
280:       
281:       toast({
282:         title: "Item Deleted",
283:         description: "Item removed from shopping list",
284:       });
285:     } catch (error) {
286:       console.error('Error deleting item:', error);
287:       toast({
288:         title: "Error",
289:         description: "Failed to delete item",
290:         variant: "destructive"
291:       });
292:     }
293:   };
294: 
295:   useEffect(() => {
296:     if (session) {
297:       fetchShoppingLists();
298:     } else {
299:       setShoppingLists([]);
300:       setShoppingListItems([]);
301:       setCurrentList(null);
302:     }
303:   }, [session]);
304: 
305:   useEffect(() => {
306:     if (currentList) {
307:       fetchShoppingListItems();
308:     }
309:   }, [currentList]);
310: 
311:   const value = {
312:     shoppingLists,
313:     shoppingListItems,
314:     currentList,
315:     loading,
316:     addIngredientsToShoppingList,
317:     toggleItemChecked,
318:     addManualItem,
319:     deleteItem,
320:     refreshShoppingList,
321:     consolidateIngredients,
322:     reorderItems
323:   };
324: 
325:   return <ShoppingListContext.Provider value={value}>{children}</ShoppingListContext.Provider>;
326: };
````

## File: src/data/mamas.ts
````typescript
 1: export interface Mama {
 2:   id: number;
 3:   name: string;
 4:   emoji: string;
 5:   accent: string;
 6:   voiceId: string;
 7:   themeColor: string;
 8:   country: string;
 9:   specialties: string[];
10:   philosophy: string;
11:   signatureDish: string;
12:   cookbookTitle: string;
13:   avatar: string;
14: }
15: 
16: export const mamas: Mama[] = [
17:   {
18:     id: 1,
19:     name: 'Nonna Lucia',
20:     emoji: '🍷',
21:     accent: 'Italian',
22:     voiceId: 'nonna_lucia', // Will map to VITE_NONNA_VOICE_ID
23:     themeColor: 'hsl(25, 82%, 65%)', // Warm Italian orange
24:     country: 'Italy',
25:     specialties: ['Pasta', 'Risotto', 'Tiramisu'],
26:     philosophy: 'Cooking is an act of love, passed down through generations.',
27:     signatureDish: 'Carbonara della Nonna',
28:     cookbookTitle: 'Nonna\'s Kitchen Secrets',
29:     avatar: '/placeholder.svg'
30:   },
31:   {
32:     id: 2,
33:     name: 'Abuela Rosa',
34:     emoji: '🌶️',
35:     accent: 'Mexican',
36:     voiceId: 'abuela_rosa', // Will map to VITE_ABUELA_VOICE_ID
37:     themeColor: 'hsl(350, 80%, 60%)', // Vibrant Mexican red
38:     country: 'Mexico',
39:     specialties: ['Mole', 'Tamales', 'Chiles Rellenos'],
40:     philosophy: 'Each spice tells a story, each dish carries our history.',
41:     signatureDish: 'Mole Negro Oaxaqueño',
42:     cookbookTitle: 'Sabores de Mi Tierra',
43:     avatar: '/placeholder.svg'
44:   },
45:   {
46:     id: 3,
47:     name: 'Mae Malai',
48:     emoji: '🌿',
49:     accent: 'Thai',
50:     voiceId: 'mae_malai', // Will map to VITE_MAE_VOICE_ID
51:     themeColor: 'hsl(120, 60%, 50%)', // Fresh Thai green
52:     country: 'Thailand',
53:     specialties: ['Curry', 'Pad Thai', 'Som Tam'],
54:     philosophy: 'Balance is everything - sweet, sour, salty, spicy in harmony.',
55:     signatureDish: 'Green Curry with Thai Basil',
56:     cookbookTitle: 'Flavors of Siam',
57:     avatar: '/placeholder.svg'
58:   }
59: ];
60: 
61: export const getMamaById = (id: number): Mama | undefined => {
62:   return mamas.find(mama => mama.id === id);
63: };
64: 
65: export const getMamaByVoiceId = (voiceId: string): Mama | undefined => {
66:   return mamas.find(mama => mama.voiceId === voiceId);
67: };
````

## File: src/data/recipes.ts
````typescript
  1: import { mamas, getMamaById } from './mamas';
  2: 
  3: export type Difficulty = 'EASY' | 'MEDIUM' | 'ADVANCED';
  4: export type Category = 'QUICK' | 'EVERYDAY' | 'WEEKEND' | 'CELEBRATION';
  5: export type ContentType = 'MEAT' | 'FISH' | 'VEGETARIAN' | 'VEGAN';
  6: 
  7: export interface StepTimer {
  8:   display: string;
  9:   duration: number; // in seconds
 10:   autoStart?: boolean;
 11:   description?: string;
 12: }
 13: 
 14: export interface Recipe {
 15:   id: string;
 16:   title: string;
 17:   cookingTime: string;
 18:   cookTimeMin: number;
 19:   prepTimeMin?: number;
 20:   difficulty: Difficulty;
 21:   category: Category;
 22:   contentType: ContentType;
 23:   image: string;
 24:   mamaId: number;
 25:   mamaName: string;
 26:   mamaEmoji: string;
 27:   ingredients: string[];
 28:   instructions: string[];
 29:   servings: number;
 30:   description: string;
 31:   featured?: boolean;
 32:   recipeOfWeek?: boolean;
 33:   // Voice integration fields
 34:   voiceIntro?: string;
 35:   voiceTips?: string[];
 36:   voiceEnabled?: boolean;
 37:   // Enhanced tip structure
 38:   displayTips?: string[]; // 1-2 key tips shown at top of instructions
 39:   stepVoiceTips?: { [stepNumber: number]: string }; // Step-specific voice guidance
 40:   // Additional fields
 41:   subsNote?: string;
 42:   // Cooking context
 43:   cookingTips?: string[];
 44:   difficulty_explanation?: string;
 45:   // Production enhancement fields
 46:   equipment?: string[];
 47:   storageInstructions?: string;
 48:   culturalContext?: string;
 49:   // Timer integration
 50:   stepTimers?: (StepTimer | null)[];
 51: }
 52: 
 53: export const recipes: Recipe[] = [
 54:   // Nonna Lucia's Recipes
 55:   {
 56:     id: 'penne-arrabbiata',
 57:     title: 'Penne all\'Arrabbiata',
 58:     cookingTime: '18 min',
 59:     cookTimeMin: 18,
 60:     difficulty: 'EASY',
 61:     category: 'QUICK',
 62:     contentType: 'VEGETARIAN',
 63:     image: '/placeholder.svg',
 64:     mamaId: 1,
 65:     mamaName: 'Nonna Lucia',
 66:     mamaEmoji: '🍷',
 67:     ingredients: ['400g penne pasta', '4 cloves garlic', '2 fresh chillies', '400g crushed tomatoes', 'Olive oil', 'Parsley', 'Salt'],
 68:     instructions: [
 69:       'Heat olive oil in large pan',
 70:       'Add sliced garlic and chillies, cook until fragrant',
 71:       'Add crushed tomatoes and season with salt',
 72:       'Simmer sauce while pasta cooks',
 73:       'Cook penne until al dente',
 74:       'Toss pasta with sauce and pasta water',
 75:       'Garnish with fresh parsley'
 76:     ],
 77:     servings: 4,
 78:     description: 'Spicy tomato pasta with garlic and chillies',
 79:     recipeOfWeek: true,
 80:     voiceIntro: "Ciao! Today we make my beautiful Penne all'Arrabbiata. Very simple but you must do with passion!",
 81:     displayTips: [
 82:       "Use real San Marzano tomatoes if you can find them, they make all the difference",
 83:       "Don't let the garlic burn - it becomes bitter!"
 84:     ],
 85:     stepVoiceTips: {
 86:       1: "Make sure your garlic doesn't burn - burned garlic is bitter, no good!",
 87:       3: "Don't put too much salt in the pasta water - the pasta will absorb it",
 88:       4: "Listen for the sizzle when you add the chili - that's when you know it's ready!"
 89:     },
 90:     voiceTips: [
 91:       "Make sure your garlic doesn't burn - burned garlic is bitter, no good!",
 92:       "Use real San Marzano tomatoes if you can find them, they make all the difference",
 93:       "Don't put too much salt in the pasta water - the pasta will absorb it"
 94:     ],
 95:     subsNote: 'No penne? Any short pasta works. No fresh chilli? Use 1/4 tsp flakes.',
 96:     voiceEnabled: true,
 97:     stepTimers: [
 98:       null, // Heat olive oil - no timer needed
 99:       { display: '2 min', duration: 120, description: 'Until garlic is fragrant, not brown' }, // Cook garlic and chillies
100:       null, // Add tomatoes - no timer needed  
101:       { display: '8 min', duration: 480, description: 'Let sauce develop while pasta cooks' }, // Simmer sauce
102:       { display: '7 min', duration: 420, description: 'Cook pasta 1 minute less than package directions for al dente' }, // Cook pasta
103:       null, // Toss pasta - no timer needed
104:       null  // Garnish - no timer needed
105:     ]
106:   },
107:   {
108:     id: 'chicken-cacciatore',
109:     title: 'Chicken Cacciatore',
110:     cookingTime: '40 min',
111:     cookTimeMin: 40,
112:     prepTimeMin: 15,
113:     difficulty: 'MEDIUM',
114:     category: 'EVERYDAY',
115:     contentType: 'MEAT',
116:     image: '/placeholder.svg',
117:     mamaId: 1,
118:     mamaName: 'Nonna Lucia',
119:     mamaEmoji: '🍷',
120:     ingredients: ['1 whole chicken cut into pieces', '1 onion', '2 bell peppers', '400g crushed tomatoes', '200ml white wine', 'Olive oil', 'Herbs'],
121:     instructions: [
122:       'Season chicken pieces with salt and pepper',
123:       'Heat oil in large skillet, brown chicken on all sides',
124:       'Remove chicken, sauté onions and peppers until soft',
125:       'Add wine to deglaze pan',
126:       'Return chicken to pan with tomatoes and herbs',
127:       'Simmer covered for 20 minutes until chicken is tender',
128:       'Adjust seasoning and serve hot'
129:     ],
130:     servings: 4,
131:     description: 'Traditional Italian hunter\'s chicken with vegetables',
132:     voiceIntro: "Ciao mia cara! Today we cook my beautiful Chicken Cacciatore. Is like cooking with love for your famiglia!",
133:     displayTips: [
134:       "Pat the chicken very dry before browning for crispy skin",
135:       "Don't move the chicken too much when browning"
136:     ],
137:     stepVoiceTips: {
138:       2: "Pat the chicken very dry before browning - this gives you beautiful crispy skin",
139:       3: "Don't move the chicken too much when browning - let it develop that golden color",
140:       5: "Add a little wine if you have - makes everything more delicious!"
141:     },
142:     voiceTips: [
143:       "Pat the chicken very dry before browning - this gives you beautiful crispy skin",
144:       "Don't move the chicken too much when browning - let it develop that golden color",
145:       "Add a little wine if you have - makes everything more delicious!"
146:     ],
147:     voiceEnabled: true
148:   },
149:   {
150:     id: 'classic-carbonara',
151:     title: 'Classic Carbonara',
152:     cookingTime: '15 min',
153:     cookTimeMin: 15,
154:     difficulty: 'MEDIUM',
155:     category: 'QUICK',
156:     contentType: 'MEAT',
157:     image: '/placeholder.svg',
158:     mamaId: 1,
159:     mamaName: 'Nonna Lucia',
160:     mamaEmoji: '🍷',
161:     ingredients: [
162:       '400g spaghetti or tonnarelli',
163:       '200g guanciale or pancetta, diced',
164:       '4 large egg yolks',
165:       '100g Pecorino Romano cheese, grated',
166:       'Freshly ground black pepper',
167:       'Salt for pasta water'
168:     ],
169:     instructions: [
170:       'Bring large pot of salted water to boil for pasta',
171:       'Cook guanciale in large skillet over medium heat until crispy and golden',
172:       'Meanwhile, whisk egg yolks with grated Pecorino and plenty of black pepper',
173:       'Cook pasta until just shy of al dente, reserve 1 cup pasta cooking water',
174:       'Add drained hot pasta to skillet with guanciale and fat',
175:       'Remove from heat, quickly toss with egg mixture and pasta water',
176:       'Serve immediately with extra Pecorino and black pepper'
177:     ],
178:     servings: 4,
179:     description: 'Rome\'s iconic pasta dish with eggs, cheese, and guanciale - no cream!',
180:     voiceIntro: "Ah, Carbonara! The pride of Roma. Listen carefully - no cream, no peas, no nonsense. Just perfection!",
181:     displayTips: [
182:       "No cream! Real Carbonara never has cream",
183:       "Take the pan off heat when mixing eggs - they must not scramble"
184:     ],
185:     stepVoiceTips: {
186:       3: "Save that pasta water - it's liquid gold for making the sauce creamy",
187:       4: "Use only Pecorino Romano cheese, not Parmesan - this is the Roman way",
188:       6: "Take the pan off the heat when mixing eggs - they must not scramble",
189:       7: "No cream! Real Carbonara never has cream - this is very important!"
190:     },
191:     voiceTips: [
192:       "No cream! Real Carbonara never has cream - this is very important!",
193:       "Take the pan off the heat when mixing eggs - they must not scramble",
194:       "Save that pasta water - it's liquid gold for making the sauce creamy",
195:       "Use only Pecorino Romano cheese, not Parmesan - this is the Roman way"
196:     ],
197:     featured: true,
198:     voiceEnabled: true,
199:     equipment: ['Large pot', 'Large skillet', 'Whisk', 'Cheese grater', 'Tongs'],
200:     culturalContext: "Carbonara was born in Rome, possibly created by charcoal workers (carbonari) who needed a hearty meal. The dish represents the essence of Roman cooking - transforming simple ingredients into something magical."
201:   },
202:   {
203:     id: 'homemade-lasagna',
204:     title: 'Nonna\'s Homemade Lasagna',
205:     cookingTime: '2 hours',
206:     cookTimeMin: 120,
207:     prepTimeMin: 45,
208:     difficulty: 'ADVANCED',
209:     category: 'WEEKEND',
210:     contentType: 'MEAT',
211:     image: '/placeholder.svg',
212:     mamaId: 1,
213:     mamaName: 'Nonna Lucia',
214:     mamaEmoji: '🍷',
215:     ingredients: [
216:       'FOR THE RAGÙ:',
217:       '500g ground beef and pork mix',
218:       '1 large onion, finely chopped',
219:       '2 carrots, finely diced',
220:       '2 celery stalks, finely diced',
221:       '800g San Marzano tomatoes, crushed',
222:       '200ml red wine',
223:       'FOR THE BÉCHAMEL:',
224:       '80g butter',
225:       '80g plain flour',
226:       '800ml whole milk, warmed',
227:       'Pinch of nutmeg',
228:       'ASSEMBLY:',
229:       '500g fresh lasagna sheets',
230:       '300g Parmigiano-Reggiano, grated',
231:       '250g fresh mozzarella, torn'
232:     ],
233:     instructions: [
234:       'FOR THE RAGÙ:',
235:       'Make ragù by browning meat, then vegetables, add wine and tomatoes, simmer 1.5 hours',
236:       'FOR THE BÉCHAMEL:',
237:       'Make béchamel by melting butter, whisking in flour, gradually adding warm milk',
238:       'ASSEMBLY:',
239:       'Cook lasagna sheets until just shy of al dente, drain carefully',
240:       'Layer: béchamel, pasta, ragù, cheeses - repeat 4 times',
241:       'Cover with foil, bake at 180°C for 45 minutes',
242:       'Remove foil, bake 15 minutes more until golden',
243:       'Rest for 15 minutes before cutting - this is important!'
244:     ],
245:     servings: 8,
246:     description: 'Traditional Emilian lasagna with rich ragù Bolognese and creamy béchamel',
247:     voiceIntro: "Bene, mia cara! Today we make lasagna from my nonna's recipe. This takes time but is worth every minute!",
248:     displayTips: [
249:       "Make your ragù the day before - it gets better with time",
250:       "Let the lasagna rest after baking for easier cutting"
251:     ],
252:     stepVoiceTips: {
253:       1: "Use San Marzano tomatoes in your ragù - they're sweeter, more delicate",
254:       2: "Don't make your béchamel too thick - it should coat the spoon like cream",
255:       4: "Save some pasta water when cooking sheets - helps if they stick together",
256:       6: "Cover with foil if the top browns too quickly - we want golden, not burnt",
257:       7: "Let the lasagna rest after baking - I know it's hard but it cuts better this way"
258:     },
259:     voiceTips: [
260:       "Make your ragù the day before - it gets better with time, like good wine!",
261:       "Don't make your béchamel too thick - it should coat the spoon like cream",
262:       "Let the lasagna rest after baking - I know it's hard but it cuts better this way",
263:       "Save some pasta water when cooking sheets - helps if they stick together",
264:       "Cover with foil if the top browns too quickly - we want golden, not burnt",
265:       "Use San Marzano tomatoes in your ragù - they're sweeter, more delicate"
266:     ],
267:     voiceEnabled: true,
268:     equipment: ['Large heavy-bottomed pot', 'Large saucepan', 'Whisk', '33x23cm baking dish', 'Large pot for pasta', 'Fine grater'],
269:     storageInstructions: "Leftover lasagna keeps in refrigerator for 3-4 days. Reheat individual portions in microwave or covered in 160°C oven. Can be frozen for up to 3 months - thaw completely before reheating.",
270:     culturalContext: "This recipe represents the traditional Emilian style from Bologna, where layers of handmade pasta are dressed with ragù Bolognese and béchamel. Each family has their own secret touches passed down through generations."
271:   },
272:   {
273:     id: 'osso-buco',
274:     title: 'Osso Buco alla Milanese',
275:     cookingTime: '2.5 hours',
276:     cookTimeMin: 150,
277:     prepTimeMin: 30,
278:     difficulty: 'ADVANCED',
279:     category: 'CELEBRATION',
280:     contentType: 'MEAT',
281:     image: '/placeholder.svg',
282:     mamaId: 1,
283:     mamaName: 'Nonna Lucia',
284:     mamaEmoji: '🍷',
285:     ingredients: [
286:       '4 large veal shanks (2 inches thick), tied with kitchen string',
287:       '1 cup all-purpose flour for dredging',
288:       '3 tablespoons olive oil',
289:       '3 tablespoons butter',
290:       '1 large onion, diced',
291:       '2 carrots, diced',
292:       '2 celery stalks, diced',
293:       '1 cup dry white wine',
294:       '400g San Marzano tomatoes, crushed',
295:       '500ml beef stock',
296:       'FOR GREMOLATA:',
297:       'Zest of 2 lemons',
298:       '3 garlic cloves, minced',
299:       '1/2 cup fresh parsley, chopped'
300:     ],
301:     instructions: [
302:       'Season veal shanks and dredge in flour, shaking off excess',
303:       'Heat oil and butter in heavy Dutch oven, brown shanks on all sides',
304:       'Remove shanks, sauté vegetables until softened',
305:       'Add wine to deglaze, scraping up browned bits',
306:       'Return shanks to pot, add tomatoes and enough stock to partially cover',
307:       'Cover and braise in 160°C oven for 2 hours until fork-tender',
308:       'Make gremolata by mixing lemon zest, garlic, and parsley',
309:       'Serve shanks with braising liquid, topped with fresh gremolata'
310:     ],
311:     servings: 4,
312:     description: 'Milanese braised veal shanks with aromatic vegetables and bright gremolata',
313:     voiceIntro: "Ah, Osso Buco! This is Sunday dinner, special occasion food. We cook with patience and amore!",
314:     displayTips: [
315:       "Ask your butcher to cut the shanks 2 inches thick",
316:       "Don't rush the browning - take your time for beautiful color"
317:     ],
318:     stepVoiceTips: {
319:       1: "Tie the shanks with kitchen string so they don't fall apart during cooking",
320:       2: "Don't rush the browning - each side needs 4-5 minutes for beautiful color",
321:       4: "If you can't find veal, beef shanks work too, just cook a little longer",
322:       6: "The marrow is the treasure - use a small spoon to get every bit!",
323:       7: "Make gremolata fresh - don't prepare it too early or the lemon loses its punch"
324:     },
325:     voiceTips: [
326:       "Ask your butcher to cut the shanks 2 inches thick - this is molto importante!",
327:       "Tie the shanks with kitchen string so they don't fall apart during cooking",
328:       "Don't rush the browning - each side needs 4-5 minutes for beautiful color",
329:       "The marrow is the treasure - use a small spoon to get every bit!",
330:       "If you can't find veal, beef shanks work too, just cook a little longer",
331:       "Make gremolata fresh - don't prepare it too early or the lemon loses its punch"
332:     ],
333:     voiceEnabled: true,
334:     equipment: ['Heavy Dutch oven or braising pot', 'Kitchen string', 'Sharp knife', 'Large plate for dredging', 'Wooden spoon'],
335:     storageInstructions: "Osso buco actually improves after a day in the refrigerator. Store covered for up to 3 days. Reheat gently on stovetop, adding a splash of stock if needed. The marrow will set when cold but melts beautifully when reheated.",
336:     culturalContext: "This dish originated in Milan in the 19th century. The name means 'bone with a hole,' referring to the marrow-filled bone. Traditionally served with risotto alla milanese, the saffron rice perfectly complements the rich, wine-braised veal."
337:   },
338: 
339:   // Abuela Rosa's Recipes
340:   {
341:     id: 'quesadillas',
342:     title: 'Cheese Quesadillas',
343:     cookingTime: '10 min',
344:     cookTimeMin: 10,
345:     difficulty: 'EASY',
346:     category: 'QUICK',
347:     contentType: 'VEGETARIAN',
348:     image: '/placeholder.svg',
349:     mamaId: 2,
350:     mamaName: 'Abuela Rosa',
351:     mamaEmoji: '🌶️',
352:     ingredients: ['4 flour tortillas', '200g cheese (Oaxaca or Monterey Jack)', 'Oil for cooking'],
353:     instructions: [
354:       'Grate cheese if using block cheese',
355:       'Place cheese on half of each tortilla, fold over',
356:       'Heat pan over medium heat, cook quesadilla until golden',
357:       'Flip and cook other side until cheese melts',
358:       'Cut into triangles and serve immediately'
359:     ],
360:     servings: 2,
361:     description: 'Simple and delicious melted cheese in warm tortillas',
362:     voiceIntro: "¡Órale! Let's make some delicious quesadillas, mi amor. Simple but so, so good when done right!",
363:     displayTips: [
364:       "Don't overfill - the filling will spill out",
365:       "Let the tortilla get golden brown before flipping"
366:     ],
367:     stepVoiceTips: {
368:       2: "Don't put too much filling or it will spill everywhere - less is more!",
369:       3: "Let the tortilla get golden brown before flipping - patience, mija!",
370:       4: "Always serve immediately while the cheese is still melty and perfect"
371:     },
372:     voiceTips: [
373:       "Don't put too much filling or it will spill everywhere - less is more!",
374:       "Let the tortilla get golden brown before flipping - patience, mija!",
375:       "Always serve immediately while the cheese is still melty and perfect"
376:     ],
377:     voiceEnabled: true
378:   },
379:   {
380:     id: 'chicken-tinga',
381:     title: 'Chicken Tinga',
382:     cookingTime: '45 min',
383:     cookTimeMin: 45,
384:     prepTimeMin: 15,
385:     difficulty: 'MEDIUM',
386:     category: 'EVERYDAY',
387:     contentType: 'MEAT',
388:     image: '/placeholder.svg',
389:     mamaId: 2,
390:     mamaName: 'Abuela Rosa',
391:     mamaEmoji: '🌶️',
392:     ingredients: [
393:       '1kg chicken breasts or thighs',
394:       '1 large white onion, halved',
395:       '4 garlic cloves',
396:       '2 bay leaves',
397:       'FOR THE SAUCE:',
398:       '3 chipotle chiles in adobo, plus 2 tbsp adobo sauce',
399:       '400g crushed tomatoes',
400:       '1 white onion, sliced',
401:       '2 garlic cloves, minced',
402:       'Salt and pepper to taste'
403:     ],
404:     instructions: [
405:       'Poach chicken with onion, garlic, and bay leaves until tender',
406:       'Reserve cooking liquid, shred chicken when cool enough to handle',
407:       'Blend chipotles, adobo sauce, and tomatoes until smooth',
408:       'Sauté sliced onion and garlic until soft and golden',
409:       'Add chipotle sauce, simmer until reduced and thickened',
410:       'Add shredded chicken, mix well and simmer 10 minutes',
411:       'Season with salt and pepper, serve in tacos or tostadas'
412:     ],
413:     servings: 6,
414:     description: 'Smoky shredded chicken in chipotle tomato sauce - perfect for tacos',
415:     voiceIntro: "¡Ay, qué rico! Chicken Tinga is one of my favorites. Perfect for tacos, tostadas, anything you want!",
416:     displayTips: [
417:       "Don't shred the chicken too fine - you want texture",
418:       "This tastes even better the next day!"
419:     ],
420:     stepVoiceTips: {
421:       2: "Save some cooking liquid - if it gets too dry, add a little back in",
422:       4: "Don't shred the chicken too fine - you want some texture, not chicken fluff!",
423:       5: "Let the chipotle sauce reduce well - this concentrates all those beautiful smoky flavors",
424:       6: "This tastes even better the next day - make extra for leftovers!"
425:     },
426:     voiceTips: [
427:       "Don't shred the chicken too fine - you want some texture, not chicken fluff!",
428:       "Let the chipotle sauce reduce well - this concentrates all those beautiful smoky flavors",
429:       "Save some cooking liquid - if it gets too dry, add a little back in",
430:       "This tastes even better the next day - make extra for leftovers!"
431:     ],
432:     voiceEnabled: true,
433:     equipment: ['Large pot', 'Blender', 'Large skillet', 'Two forks for shredding', 'Strainer'],
434:     storageInstructions: "Chicken tinga keeps in refrigerator for up to 5 days and actually improves in flavor. Can be frozen for up to 3 months. Reheat gently, adding a splash of the reserved cooking liquid if needed.",
435:     culturalContext: "Tinga originates from Puebla, Mexico. The word 'tinga' comes from the Nahuatl word meaning 'to mix' or 'to stir.' This dish showcases the Mexican love affair with chipotle chiles - jalapeños that have been smoked and dried, giving incredible depth of flavor."
436:   },
437:   {
438:     id: 'enchiladas-verdes',
439:     title: 'Enchiladas Verdes',
440:     cookingTime: '40 min',
441:     cookTimeMin: 40,
442:     prepTimeMin: 20,
443:     difficulty: 'MEDIUM',
444:     category: 'WEEKEND',
445:     contentType: 'MEAT',
446:     image: '/placeholder.svg',
447:     mamaId: 2,
448:     mamaName: 'Abuela Rosa',
449:     mamaEmoji: '🌶️',
450:     ingredients: [
451:       'FOR THE SALSA VERDE:',
452:       '1kg fresh tomatillos, husked',
453:       '2-3 serrano chiles',
454:       '1 white onion, quartered',
455:       '4 garlic cloves',
456:       '1/2 cup fresh cilantro',
457:       'FOR ASSEMBLY:',
458:       '12 corn tortillas',
459:       '500g cooked chicken, shredded',
460:       '200g Mexican crema or sour cream',
461:       '300g queso fresco or Monterey Jack, crumbled',
462:       '1/4 white onion, thinly sliced'
463:     ],
464:     instructions: [
465:       'Char tomatillos, chiles, onion, and garlic under broiler until blackened',
466:       'Blend charred vegetables with cilantro and salt until smooth',
467:       'Simmer salsa verde for 15 minutes until slightly thickened',
468:       'Warm tortillas in dry pan or microwave until pliable',
469:       'Fill tortillas with chicken, roll tightly, place seam-side down',
470:       'Pour salsa verde over enchiladas, add dollops of crema',
471:       'Sprinkle with cheese and onion slices',
472:       'Bake at 180°C for 15 minutes until heated through and bubbly'
473:     ],
474:     servings: 4,
475:     description: 'Corn tortillas filled with chicken and smothered in bright green tomatillo salsa',
476:     voiceIntro: "¡Mira! Enchiladas Verdes are pure comfort food. The green sauce is everything - bright, fresh, with just the right kick!",
477:     displayTips: [
478:       "Don't skip charring the tomatillos - this adds depth to your salsa",
479:       "Warm your tortillas well so they don't crack when rolling"
480:     ],
481:     stepVoiceTips: {
482:       1: "Don't skip charring the tomatillos - this adds so much depth to your salsa verde",
483:       4: "Warm your tortillas well so they don't crack when rolling - nobody wants broken enchiladas!",
484:       5: "Don't roll them too tight - the filling needs room to expand when heated",
485:       6: "Use Mexican crema if you can find it - it's richer than sour cream",
486:       7: "Fresh cheese like queso fresco is traditional, but Monterey Jack melts beautifully too"
487:     },
488:     voiceTips: [
489:       "Don't skip charring the tomatillos - this adds so much depth to your salsa verde",
490:       "Warm your tortillas well so they don't crack when rolling - nobody wants broken enchiladas!",
491:       "Don't roll them too tight - the filling needs room to expand when heated",
492:       "Use Mexican crema if you can find it - it's richer than sour cream",
493:       "Fresh cheese like queso fresco is traditional, but Monterey Jack melts beautifully too"
494:     ],
495:     voiceEnabled: true,
496:     equipment: ['Baking sheet', 'Blender', 'Large saucepan', '23x33cm baking dish', 'Tongs'],
497:     storageInstructions: "Assembled enchiladas can be covered and refrigerated for up to 2 days before baking. Leftover baked enchiladas keep for 3-4 days. Reheat covered in oven to prevent drying out.",
498:     culturalContext: "Enchiladas verdes showcase the versatility of tomatillos, Mexico's ancient green tomato. The technique of charring vegetables before blending is fundamental to Mexican cooking, adding layers of smoky complexity that can't be achieved any other way."
499:   },
500:   {
501:     id: 'pozole-rojo',
502:     title: 'Pozole Rojo',
503:     cookingTime: '3 hours',
504:     cookTimeMin: 180,
505:     prepTimeMin: 30,
506:     difficulty: 'ADVANCED',
507:     category: 'CELEBRATION',
508:     contentType: 'MEAT',
509:     image: '/placeholder.svg',
510:     mamaId: 2,
511:     mamaName: 'Abuela Rosa',
512:     mamaEmoji: '🌶️',
513:     ingredients: [
514:       '2kg pork shoulder, cut in large chunks',
515:       '500g pork ribs',
516:       '1 white onion, quartered',
517:       '6 garlic cloves',
518:       '2 bay leaves',
519:       'FOR THE CHILE SAUCE:',
520:       '6 guajillo chiles, stemmed and seeded',
521:       '4 ancho chiles, stemmed and seeded',
522:       '2 chipotle chiles, stemmed and seeded',
523:       '3 Roma tomatoes',
524:       'GARNISHES:',
525:       '800g prepared hominy, drained',
526:       'Thinly sliced cabbage',
527:       'Diced onion',
528:       'Lime wedges',
529:       'Dried oregano',
530:       'Red pepper flakes'
531:     ],
532:     instructions: [
533:       'Simmer pork shoulder and ribs with onion, garlic, and bay leaves for 2 hours',
534:       'Toast dried chiles in dry pan until puffed and fragrant',
535:       'Soak toasted chiles in hot water for 20 minutes until softened',
536:       'Blend soaked chiles with tomatoes and soaking liquid until smooth',
537:       'Strain chile sauce to remove any remaining bits',
538:       'Add chile sauce and hominy to pork broth, simmer 30 minutes',
539:       'Shred pork when cool enough to handle, return to pot',
540:       'Serve hot with garnishes on the side for everyone to customize'
541:     ],
542:     servings: 8,
543:     description: 'Traditional Mexican soup with pork, hominy, and red chile broth - perfect for celebrations',
544:     voiceIntro: "¡Ay, Pozole! This is celebration food, weekend food. Takes time but fills the heart and belly with happiness!",
545:     displayTips: [
546:       "Toast your chiles until they puff but don't burn them",
547:       "Skim the foam from the pork broth for clear pozole"
548:     ],
549:     stepVoiceTips: {
550:       2: "Toast your chiles until they puff but don't let them burn - bitter chiles ruin everything!",
551:       3: "Skim the foam from the pork broth - this keeps your pozole clear and clean",
552:       5: "Don't add the hominy too early - it can get mushy if overcooked",
553:       6: "If you can't find dried chiles, use chipotle in adobo but reduce the quantity",
554:       7: "Let people garnish their own bowls - everyone likes different amounts of everything",
555:       8: "Save some chile broth separately - some people like their pozole extra spicy!"
556:     },
557:     voiceTips: [
558:       "Toast your chiles until they puff but don't let them burn - bitter chiles ruin everything!",
559:       "Skim the foam from the pork broth - this keeps your pozole clear and clean",
560:       "Don't add the hominy too early - it can get mushy if overcooked",
561:       "Let people garnish their own bowls - everyone likes different amounts of everything",
562:       "If you can't find dried chiles, use chipotle in adobo but reduce the quantity",
563:       "Save some chile broth separately - some people like their pozole extra spicy!"
564:     ],
565:     voiceEnabled: true,
566:     equipment: ['Very large pot', 'Blender', 'Fine-mesh strainer', 'Ladle', 'Small bowls for garnishes', 'Comal or heavy skillet'],
567:     storageInstructions: "Pozole improves with time and keeps for up to 5 days refrigerated. Store garnishes separately. Can be frozen (without garnishes) for up to 3 months. The hominy may absorb more liquid when stored - add broth when reheating.",
568:     culturalContext: "Pozole has ancient Aztec origins and was considered sacred, traditionally served during religious ceremonies. The word comes from Nahuatl 'pozolli' meaning 'foam.' Red pozole represents one of the three traditional colors, along with white and green."
569:   },
570:   {
571:     id: 'mole-poblano',
572:     title: 'Mole Poblano',
573:     cookingTime: '4 hours',
574:     cookTimeMin: 240,
575:     prepTimeMin: 60,
576:     difficulty: 'ADVANCED',
577:     category: 'CELEBRATION',
578:     contentType: 'MEAT',
579:     image: '/placeholder.svg',
580:     mamaId: 2,
581:     mamaName: 'Abuela Rosa',
582:     mamaEmoji: '🌶️',
583:     ingredients: [
584:       '1 whole turkey, cut into pieces (or large chicken)',
585:       'FOR THE MOLE SAUCE:',
586:       '6 ancho chiles',
587:       '4 mulato chiles',
588:       '2 pasilla chiles',
589:       '2 chipotle chiles',
590:       '4 tomatoes',
591:       '6 tomatillos',
592:       '1 white onion',
593:       '8 garlic cloves',
594:       '1/4 cup sesame seeds',
595:       '1/4 cup pumpkin seeds',
596:       '2 corn tortillas, torn',
597:       '2 slices bread, torn',
598:       '50g Mexican chocolate',
599:       '1 tsp cinnamon',
600:       '1/2 tsp anise seeds',
601:       '4 cloves',
602:       '1/2 tsp black peppercorns'
603:     ],
604:     instructions: [
605:       'Toast each type of chile separately until puffed, soak in hot water',
606:       'Char tomatoes, tomatillos, onion, and garlic until blackened',
607:       'Toast seeds, tortillas, bread, and spices until fragrant',
608:       'Blend everything in batches with chile soaking liquid until smooth',
609:       'Strain mixture through fine-mesh sieve for silky texture',
610:       'Fry mole paste in large pot for 30 minutes, stirring constantly',
611:       'Add chocolate and simmer with turkey pieces for 1 hour',
612:       'Adjust consistency with turkey broth as needed',
613:       'Serve with warm tortillas and Mexican rice'
614:     ],
615:     servings: 10,
616:     description: 'Mexico\'s national dish - complex sauce with chocolate, chiles, and spices over turkey',
617:     voiceIntro: "¡Órale! Mole Poblano - the crown jewel of Mexican cuisine. This is not quick food, this is love food that takes time and patience.",
618:     displayTips: [
619:       "Toast each chile type separately - they have different timing",
620:       "Make this a day ahead - mole improves overnight!"
621:     ],
622:     stepVoiceTips: {
623:       1: "Toast each chile type separately - they all have different timing and you don't want any burnt",
624:       4: "Save some turkey or chicken broth - you'll need it for consistency adjustments",
625:       5: "If your mole gets too thick, thin with warm chicken broth, not water",
626:       6: "Keep stirring when adding chocolate - it can seize if not mixed properly",
627:       7: "Don't let the chocolate overpower - mole should be complex, not a chocolate sauce",
628:       8: "Strain your mole if you want it completely smooth - traditional but optional",
629:       9: "Make this a day ahead - mole improves overnight like a good relationship!"
630:     },
631:     voiceTips: [
632:       "Toast each chile type separately - they all have different timing and you don't want any burnt",
633:       "Don't let the chocolate overpower - mole should be complex, not a chocolate sauce",
634:       "If your mole gets too thick, thin with warm chicken broth, not water",
635:       "Make this a day ahead - mole improves overnight like a good relationship!",
636:       "Strain your mole if you want it completely smooth - traditional but optional",
637:       "Save some turkey or chicken broth - you'll need it for consistency adjustments",
638:       "Keep stirring when adding chocolate - it can seize if not mixed properly"
639:     ],
640:     featured: true,
641:     voiceEnabled: true,
642:     equipment: ['Very large pot', 'Blender', 'Fine-mesh strainer', 'Comal or heavy skillet', 'Wooden spoon', 'Multiple bowls for ingredients'],
643:     storageInstructions: "Mole improves with age and can be refrigerated for up to 1 week or frozen for 6 months. Store separately from meat when possible. Reheat gently, thinning with broth as needed. The chocolate may separate slightly when reheated - just stir well.",
644:     culturalContext: "Legend says mole poblano was created by nuns at the Convent of Santa Rosa in Puebla to honor a visiting bishop. With over 20 ingredients, it represents the complexity and depth of Mexican cuisine. Each family guards their recipe secrets, passed down through generations."
645:   },
646: 
647:   // Mae Malai's Recipes
648:   {
649:     id: 'pad-krapao',
650:     title: 'Pad Krapao Gai',
651:     cookingTime: '15 min',
652:     cookTimeMin: 15,
653:     prepTimeMin: 10,
654:     difficulty: 'EASY',
655:     category: 'QUICK',
656:     contentType: 'MEAT',
657:     image: '/placeholder.svg',
658:     mamaId: 3,
659:     mamaName: 'Mae Malai',
660:     mamaEmoji: '🌿',
661:     ingredients: ['500g ground chicken', '4 cloves garlic', '2-3 bird\'s eye chilies', '2 tbsp vegetable oil', '2 tbsp fish sauce', '1 tbsp oyster sauce', '1 tbsp soy sauce', '1 tsp sugar', 'Thai holy basil leaves', 'Fried eggs for serving'],
662:     instructions: [
663:       'Heat oil in wok over high heat',
664:       'Add minced garlic and chilies, stir-fry until fragrant',
665:       'Add ground chicken, breaking it up as it cooks',
666:       'Season with fish sauce, oyster sauce, soy sauce, and sugar',
667:       'Add holy basil leaves and toss until wilted',
668:       'Serve over rice with fried egg on top'
669:     ],
670:     servings: 2,
671:     description: 'Spicy Thai stir-fry with holy basil - comfort food at its finest',
672:     voiceIntro: "Sawasdee kha! Today we make Pad Krapao - Thai comfort food that is spicy, aromatic, and so satisfying. Very popular street food!",
673:     displayTips: [
674:       "Use Thai holy basil if you can find it - different from sweet basil",
675:       "Don't be shy with the chilies - this dish should have heat!"
676:     ],
677:     stepVoiceTips: {
678:       2: "Don't be shy with the chilies - this dish should have some heat!",
679:       3: "Cook the ground meat on high heat so it gets nice and crispy in places",
680:       5: "Use Thai holy basil if you can find it - it has a different flavor than sweet basil"
681:     },
682:     voiceTips: [
683:       "Use Thai holy basil if you can find it - it has a different flavor than sweet basil",
684:       "Don't be shy with the chilies - this dish should have some heat!",
685:       "Cook the ground meat on high heat so it gets nice and crispy in places"
686:     ],
687:     voiceEnabled: true
688:   },
689:   {
690:     id: 'green-curry',
691:     title: 'Thai Green Curry',
692:     cookingTime: '30 min',
693:     cookTimeMin: 30,
694:     prepTimeMin: 15,
695:     difficulty: 'MEDIUM',
696:     category: 'EVERYDAY',
697:     contentType: 'MEAT',
698:     image: '/placeholder.svg',
699:     mamaId: 3,
700:     mamaName: 'Mae Malai',
701:     mamaEmoji: '🌿',
702:     ingredients: [
703:       '500g chicken thigh, sliced',
704:       '400ml coconut milk',
705:       '2-3 tbsp green curry paste',
706:       '2 Thai eggplants, quartered',
707:       '100g Thai basil leaves',
708:       '2 kaffir lime leaves',
709:       '2 tbsp fish sauce',
710:       '1 tbsp palm sugar',
711:       '2-3 bird\'s eye chilies'
712:     ],
713:     instructions: [
714:       'Fry curry paste in thick coconut cream until fragrant',
715:       'Add chicken pieces and cook until sealed',
716:       'Add remaining coconut milk gradually, stirring constantly',
717:       'Add eggplant and simmer until tender',
718:       'Season with fish sauce and palm sugar',
719:       'Add basil leaves and lime leaves just before serving',
720:       'Serve with jasmine rice'
721:     ],
722:     servings: 4,
723:     description: 'Creamy coconut curry with chicken, eggplant, and aromatic herbs',
724:     voiceIntro: "Kha! Green curry is my specialty - creamy, spicy, and full of wonderful aromatics. The secret is in the paste!",
725:     displayTips: [
726:       "Don't add all coconut milk at once - add gradually",
727:       "Taste and adjust - curry pastes vary in saltiness"
728:     ],
729:     stepVoiceTips: {
730:       1: "Make your own curry paste if you have time - the flavor is so much better!",
731:       2: "Don't add all the coconut milk at once - add gradually for better texture",
732:       4: "Thai eggplant is traditional but regular eggplant works fine too",
733:       6: "Taste and adjust - some curry pastes are saltier than others"
734:     },
735:     voiceTips: [
736:       "Make your own curry paste if you have time - the flavor is so much better!",
737:       "Don't add all the coconut milk at once - add gradually for better texture",
738:       "Thai eggplant is traditional but regular eggplant works fine too",
739:       "Taste and adjust - some curry pastes are saltier than others"
740:     ],
741:     featured: true,
742:     voiceEnabled: true,
743:     equipment: ['Wok or large pan', 'Wooden spoon', 'Mortar and pestle (for paste)', 'Sharp knife'],
744:     culturalContext: "Green curry (Gaeng Keow Wan) is one of Thailand's most beloved dishes. The green color comes from fresh green chilies, and the balance of sweet, salty, and spicy represents the harmony central to Thai cooking philosophy."
745:   },
746:   {
747:     id: 'pad-thai',
748:     title: 'Pad Thai',
749:     cookingTime: '20 min',
750:     cookTimeMin: 20,
751:     prepTimeMin: 25,
752:     difficulty: 'MEDIUM',
753:     category: 'QUICK',
754:     contentType: 'MEAT',
755:     image: '/placeholder.svg',
756:     mamaId: 3,
757:     mamaName: 'Mae Malai',
758:     mamaEmoji: '🌿',
759:     ingredients: [
760:       '200g rice noodles (5mm wide)',
761:       '200g prawns or chicken, sliced',
762:       '2 eggs',
763:       '100g firm tofu, cubed',
764:       '2 tbsp vegetable oil',
765:       'FOR THE SAUCE:',
766:       '3 tbsp tamarind paste',
767:       '3 tbsp fish sauce',
768:       '3 tbsp palm sugar',
769:       '1 tbsp soy sauce',
770:       'GARNISHES:',
771:       '100g bean sprouts',
772:       '4 spring onions, cut in lengths',
773:       '50g roasted peanuts, crushed',
774:       'Lime wedges',
775:       'Thai basil leaves'
776:     ],
777:     instructions: [
778:       'Soak rice noodles in warm water until just flexible, drain',
779:       'Mix all sauce ingredients until sugar dissolves',
780:       'Heat oil in wok, scramble eggs and set aside',
781:       'Fry tofu until golden, add prawns/chicken and cook through',
782:       'Push everything to one side, add noodles and sauce',
783:       'Toss everything together, add cooked eggs back in',
784:       'Add half the bean sprouts and spring onions, toss briefly',
785:       'Serve immediately with remaining garnishes and lime'
786:     ],
787:     servings: 2,
788:     description: 'Thailand\'s national dish - sweet, sour, and salty stir-fried noodles',
789:     voiceIntro: "Sawasdee! Pad Thai is Thailand's most famous dish. Balance is everything - sweet, sour, salty, and just a little spicy!",
790:     displayTips: [
791:       "Have all ingredients prepped before you start - cooks very fast",
792:       "Soak noodles in warm water until just flexible, don't overcook"
793:     ],
794:     stepVoiceTips: {
795:       1: "Soak your rice noodles in warm water until just flexible - don't overcook them in water!",
796:       2: "Have all ingredients prepped before you start - Pad Thai cooks very fast",
797:       5: "Push ingredients to one side of wok when adding eggs - this way they set properly",
798:       6: "Add tamarind paste gradually - some brands are more sour than others",
799:       7: "If you can't find tamarind, substitute with lime juice and a tiny bit of vinegar",
800:       8: "Bean sprouts should stay crunchy - add them at the very end"
801:     },
802:     voiceTips: [
803:       "Soak your rice noodles in warm water until just flexible - don't overcook them in water!",
804:       "Have all ingredients prepped before you start - Pad Thai cooks very fast",
805:       "Push ingredients to one side of wok when adding eggs - this way they set properly",
806:       "Add tamarind paste gradually - some brands are more sour than others",
807:       "If you can't find tamarind, substitute with lime juice and a tiny bit of vinegar",
808:       "Bean sprouts should stay crunchy - add them at the very end"
809:     ],
810:     voiceEnabled: true,
811:     equipment: ['Large wok or skillet', 'Large bowl for soaking noodles', 'Small bowl for sauce', 'Wok spatula or tongs', 'Multiple small bowls for prep'],
812:     storageInstructions: "Pad Thai is best served immediately but leftovers can be refrigerated for 1-2 days. Add a splash of water when reheating and stir gently. The noodles may clump together when cold - this is normal.",
813:     culturalContext: "Created in the 1930s as part of a nationalist campaign to promote Thai identity, Pad Thai literally means 'Thai-style stir-fried noodles.' The dish perfectly embodies the Thai principle of balancing sweet, sour, salty, and spicy flavors in every bite."
814:   },
815:   {
816:     id: 'khao-soi',
817:     title: 'Khao Soi Gai',
818:     cookingTime: '45 min',
819:     cookTimeMin: 45,
820:     prepTimeMin: 20,
821:     difficulty: 'MEDIUM',
822:     category: 'WEEKEND',
823:     contentType: 'MEAT',
824:     image: '/placeholder.svg',
825:     mamaId: 3,
826:     mamaName: 'Mae Malai',
827:     mamaEmoji: '🌿',
828:     ingredients: [
829:       '600g chicken thighs, bone-in',
830:       '400ml coconut milk',
831:       '500ml chicken stock',
832:       '400g fresh egg noodles',
833:       '3 tbsp Khao Soi curry paste (or red curry paste)',
834:       '2 tbsp fish sauce',
835:       '1 tbsp palm sugar',
836:       '2 tbsp soy sauce',
837:       'FOR GARNISH:',
838:       '100g crispy fried noodles',
839:       'Pickled mustard greens',
840:       'Shallots, thinly sliced',
841:       'Lime wedges',
842:       'Chili oil',
843:       'Fresh cilantro'
844:     ],
845:     instructions: [
846:       'Deep fry some fresh noodles until golden and crispy, set aside',
847:       'Simmer chicken thighs in coconut milk and stock until tender',
848:       'Remove chicken, shred meat, discard bones and skin',
849:       'Fry curry paste in same pot until fragrant',
850:       'Add coconut milk mixture back, bring to gentle simmer',
851:       'Season with fish sauce, palm sugar, and soy sauce',
852:       'Cook fresh noodles separately until just tender',
853:       'Serve noodles in bowls, top with chicken, curry broth, and all garnishes'
854:     ],
855:     servings: 4,
856:     description: 'Northern Thai coconut curry noodle soup with crispy noodles on top',
857:     voiceIntro: "Sawasdee kha! Khao Soi is northern Thailand's treasure - rich coconut curry soup with crispy noodles on top. So comforting!",
858:     displayTips: [
859:       "Fry some noodles until crispy for topping - adds texture",
860:       "Don't let coconut milk boil vigorously - it will separate"
861:     ],
862:     stepVoiceTips: {
863:       1: "Fry some noodles until crispy for topping - this adds wonderful texture contrast",
864:       3: "Don't let the coconut milk boil vigorously - it will separate and look broken",
865:       4: "Red curry paste works if you can't find Khao Soi paste, but add extra spices",
866:       5: "Chicken thighs are better than breast - they stay tender and juicy",
867:       7: "Pickle mustard greens are traditional but cabbage works as substitute",
868:       8: "Serve with lime, shallots, and pickled mustard greens on the side"
869:     },
870:     voiceTips: [
871:       "Fry some noodles until crispy for topping - this adds wonderful texture contrast",
872:       "Don't let the coconut milk boil vigorously - it will separate and look broken",
873:       "Red curry paste works if you can't find Khao Soi paste, but add extra spices",
874:       "Chicken thighs are better than breast - they stay tender and juicy",
875:       "Pickle mustard greens are traditional but cabbage works as substitute",
876:       "Serve with lime, shallots, and pickled mustard greens on the side"
877:     ],
878:     voiceEnabled: true,
879:     equipment: ['Large pot', 'Deep fryer or wok for noodles', 'Strainer', 'Ladle', 'Multiple bowls for garnishes'],
880:     storageInstructions: "Store components separately - broth can be refrigerated for 3 days, reheat gently. Cook fresh noodles when ready to serve. Crispy noodles stay crisp in airtight container for 2 days.",
881:     culturalContext: "Khao Soi originates from northern Thailand, influenced by Burmese cuisine through trade routes. The name means 'cut rice,' referring to the way noodles were traditionally cut by hand. It's comfort food for northern Thai families, especially during cooler months."
882:   },
883:   {
884:     id: 'massaman-beef',
885:     title: 'Massaman Beef Curry',
886:     cookingTime: '2 hours',
887:     cookTimeMin: 120,
888:     prepTimeMin: 20,
889:     difficulty: 'MEDIUM',
890:     category: 'WEEKEND',
891:     contentType: 'MEAT',
892:     image: '/placeholder.svg',
893:     mamaId: 3,
894:     mamaName: 'Mae Malai',
895:     mamaEmoji: '🌿',
896:     ingredients: [
897:       '1kg beef chuck roast, cut in chunks',
898:       '400ml coconut milk',
899:       '300ml beef stock',
900:       '3 tbsp Massaman curry paste',
901:       '3 medium potatoes, peeled and quartered',
902:       '1 large onion, cut in wedges',
903:       '3 tbsp tamarind paste',
904:       '3 tbsp palm sugar',
905:       '3 tbsp fish sauce',
906:       '100g roasted peanuts',
907:       '4 cardamom pods',
908:       '2 cinnamon sticks',
909:       '4 star anise'
910:     ],
911:     instructions: [
912:       'Brown beef chunks in heavy pot until golden on all sides',
913:       'Add thick coconut cream and Massaman paste, fry until fragrant',
914:       'Add remaining coconut milk, stock, and whole spices',
915:       'Simmer covered for 1.5 hours until beef is tender',
916:       'Add potatoes and onion, cook until vegetables are tender',
917:       'Stir in peanuts, tamarind paste, palm sugar, and fish sauce',
918:       'Adjust seasoning and consistency with more stock if needed',
919:       'Serve with jasmine rice and cucumber salad'
920:     ],
921:     servings: 6,
922:     description: 'Rich, fragrant Persian-influenced curry with tender beef and potatoes',
923:     voiceIntro: "Sawasdee! Massaman is the gentle curry - rich, fragrant, with Persian influences. Perfect for special occasions!",
924:     displayTips: [
925:       "Don't rush the cooking - low and slow makes tender beef",
926:       "Beef chuck roast becomes incredibly tender when slow-cooked"
927:     ],
928:     stepVoiceTips: {
929:       2: "Beef chuck roast is perfect for this - it becomes incredibly tender when slow-cooked",
930:       3: "Toast your peanuts lightly before adding - brings out more flavor",
931:       4: "Don't rush the cooking - low and slow makes the beef melt in your mouth",
932:       5: "Potatoes should be tender but not falling apart - add them later in cooking",
933:       6: "Tamarind paste adds the perfect sour note - don't skip it!",
934:       7: "If curry gets too thick, add more coconut milk or beef broth"
935:     },
936:     voiceTips: [
937:       "Beef chuck roast is perfect for this - it becomes incredibly tender when slow-cooked",
938:       "Toast your peanuts lightly before adding - brings out more flavor",
939:       "Don't rush the cooking - low and slow makes the beef melt in your mouth",
940:       "Tamarind paste adds the perfect sour note - don't skip it!",
941:       "If curry gets too thick, add more coconut milk or beef broth",
942:       "Potatoes should be tender but not falling apart - add them later in cooking"
943:     ],
944:     voiceEnabled: true,
945:     equipment: ['Heavy-bottomed pot or Dutch oven', 'Wooden spoon', 'Sharp knife', 'Cutting board'],
946:     storageInstructions: "Massaman curry improves with time and can be refrigerated for up to 5 days. The flavors meld and deepen overnight. Can be frozen for up to 3 months. Reheat gently, adding coconut milk or stock to adjust consistency.",
947:     culturalContext: "Massaman curry shows the Persian influence on Thai cuisine through ancient trade routes. The name derives from 'Mussulman' (Muslim), reflecting its origins. With warming spices like cardamom and cinnamon, it's considered the most aromatic of Thai curries."
948:   }
949: ];
950: 
951: // Utility Functions
952: export const getRecipesByMama = (mamaId: number): Recipe[] => {
953:   return recipes.filter(recipe => recipe.mamaId === mamaId);
954: };
955: 
956: export const getFeaturedRecipes = (): Recipe[] => {
957:   return recipes.filter(recipe => recipe.featured);
958: };
959: 
960: export const getRecipeOfWeek = (): Recipe | undefined => {
961:   return recipes.find(recipe => recipe.recipeOfWeek);
962: };
963: 
964: export const getRecipesByCategory = (category: string): Recipe[] => {
965:   return recipes.filter(recipe => recipe.category === category.toUpperCase());
966: };
967: 
968: export const getRecipeById = (id: string): Recipe | undefined => {
969:   return recipes.find(recipe => recipe.id === id);
970: };
971: 
972: export const getVoiceEnabledRecipes = (): Recipe[] => {
973:   return recipes.filter(recipe => recipe.voiceEnabled);
974: };
975: 
976: export const getRecipeWithMama = (id: string) => {
977:   const recipe = getRecipeById(id);
978:   if (!recipe) return null;
979:   
980:   const mama = getMamaById(recipe.mamaId);
981:   return { recipe, mama };
982: };
````

## File: src/hooks/use-mobile.tsx
````typescript
 1: import * as React from "react"
 2: 
 3: const MOBILE_BREAKPOINT = 768
 4: 
 5: export function useIsMobile() {
 6:   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
 7: 
 8:   React.useEffect(() => {
 9:     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
10:     const onChange = () => {
11:       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
12:     }
13:     mql.addEventListener("change", onChange)
14:     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
15:     return () => mql.removeEventListener("change", onChange)
16:   }, [])
17: 
18:   return !!isMobile
19: }
````

## File: src/hooks/use-toast.ts
````typescript
  1: import * as React from "react"
  2: 
  3: import type {
  4:   ToastActionElement,
  5:   ToastProps,
  6: } from "@/components/ui/toast"
  7: 
  8: const TOAST_LIMIT = 1
  9: const TOAST_REMOVE_DELAY = 1000000
 10: 
 11: type ToasterToast = ToastProps & {
 12:   id: string
 13:   title?: React.ReactNode
 14:   description?: React.ReactNode
 15:   action?: ToastActionElement
 16: }
 17: 
 18: const actionTypes = {
 19:   ADD_TOAST: "ADD_TOAST",
 20:   UPDATE_TOAST: "UPDATE_TOAST",
 21:   DISMISS_TOAST: "DISMISS_TOAST",
 22:   REMOVE_TOAST: "REMOVE_TOAST",
 23: } as const
 24: 
 25: let count = 0
 26: 
 27: function genId() {
 28:   count = (count + 1) % Number.MAX_SAFE_INTEGER
 29:   return count.toString()
 30: }
 31: 
 32: type ActionType = typeof actionTypes
 33: 
 34: type Action =
 35:   | {
 36:       type: ActionType["ADD_TOAST"]
 37:       toast: ToasterToast
 38:     }
 39:   | {
 40:       type: ActionType["UPDATE_TOAST"]
 41:       toast: Partial<ToasterToast>
 42:     }
 43:   | {
 44:       type: ActionType["DISMISS_TOAST"]
 45:       toastId?: ToasterToast["id"]
 46:     }
 47:   | {
 48:       type: ActionType["REMOVE_TOAST"]
 49:       toastId?: ToasterToast["id"]
 50:     }
 51: 
 52: interface State {
 53:   toasts: ToasterToast[]
 54: }
 55: 
 56: const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
 57: 
 58: const addToRemoveQueue = (toastId: string) => {
 59:   if (toastTimeouts.has(toastId)) {
 60:     return
 61:   }
 62: 
 63:   const timeout = setTimeout(() => {
 64:     toastTimeouts.delete(toastId)
 65:     dispatch({
 66:       type: "REMOVE_TOAST",
 67:       toastId: toastId,
 68:     })
 69:   }, TOAST_REMOVE_DELAY)
 70: 
 71:   toastTimeouts.set(toastId, timeout)
 72: }
 73: 
 74: export const reducer = (state: State, action: Action): State => {
 75:   switch (action.type) {
 76:     case "ADD_TOAST":
 77:       return {
 78:         ...state,
 79:         toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
 80:       }
 81: 
 82:     case "UPDATE_TOAST":
 83:       return {
 84:         ...state,
 85:         toasts: state.toasts.map((t) =>
 86:           t.id === action.toast.id ? { ...t, ...action.toast } : t
 87:         ),
 88:       }
 89: 
 90:     case "DISMISS_TOAST": {
 91:       const { toastId } = action
 92: 
 93:       // ! Side effects ! - This could be extracted into a dismissToast() action,
 94:       // but I'll keep it here for simplicity
 95:       if (toastId) {
 96:         addToRemoveQueue(toastId)
 97:       } else {
 98:         state.toasts.forEach((toast) => {
 99:           addToRemoveQueue(toast.id)
100:         })
101:       }
102: 
103:       return {
104:         ...state,
105:         toasts: state.toasts.map((t) =>
106:           t.id === toastId || toastId === undefined
107:             ? {
108:                 ...t,
109:                 open: false,
110:               }
111:             : t
112:         ),
113:       }
114:     }
115:     case "REMOVE_TOAST":
116:       if (action.toastId === undefined) {
117:         return {
118:           ...state,
119:           toasts: [],
120:         }
121:       }
122:       return {
123:         ...state,
124:         toasts: state.toasts.filter((t) => t.id !== action.toastId),
125:       }
126:   }
127: }
128: 
129: const listeners: Array<(state: State) => void> = []
130: 
131: let memoryState: State = { toasts: [] }
132: 
133: function dispatch(action: Action) {
134:   memoryState = reducer(memoryState, action)
135:   listeners.forEach((listener) => {
136:     listener(memoryState)
137:   })
138: }
139: 
140: type Toast = Omit<ToasterToast, "id">
141: 
142: function toast({ ...props }: Toast) {
143:   const id = genId()
144: 
145:   const update = (props: ToasterToast) =>
146:     dispatch({
147:       type: "UPDATE_TOAST",
148:       toast: { ...props, id },
149:     })
150:   const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
151: 
152:   dispatch({
153:     type: "ADD_TOAST",
154:     toast: {
155:       ...props,
156:       id,
157:       open: true,
158:       onOpenChange: (open) => {
159:         if (!open) dismiss()
160:       },
161:     },
162:   })
163: 
164:   return {
165:     id: id,
166:     dismiss,
167:     update,
168:   }
169: }
170: 
171: function useToast() {
172:   const [state, setState] = React.useState<State>(memoryState)
173: 
174:   React.useEffect(() => {
175:     listeners.push(setState)
176:     return () => {
177:       const index = listeners.indexOf(setState)
178:       if (index > -1) {
179:         listeners.splice(index, 1)
180:       }
181:     }
182:   }, [state])
183: 
184:   return {
185:     ...state,
186:     toast,
187:     dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
188:   }
189: }
190: 
191: export { useToast, toast }
````

## File: src/hooks/useConversation.tsx
````typescript
  1: import { useState, useCallback, useEffect } from 'react';
  2: import { ConversationalService } from '@/services/conversationalService';
  3: import { VoiceService } from '@/services/voiceService';
  4: 
  5: interface ConversationState {
  6:   isConnected: boolean;
  7:   currentTranscript: string;
  8:   partialTranscript: string;
  9:   error: string | null;
 10: }
 11: 
 12: export const useConversation = () => {
 13:   const [conversationalService] = useState(() => ConversationalService.getInstance());
 14:   const [voiceService] = useState(() => VoiceService.getInstance());
 15:   const [state, setState] = useState<ConversationState>({
 16:     isConnected: false,
 17:     currentTranscript: '',
 18:     partialTranscript: '',
 19:     error: null
 20:   });
 21: 
 22:   const updateState = useCallback((updates: Partial<ConversationState>) => {
 23:     setState(prev => ({ ...prev, ...updates }));
 24:   }, []);
 25: 
 26:   const startConversation = useCallback(async (
 27:     mamaId: string,
 28:     stepText: string,
 29:     onCommand?: (command: string) => void
 30:   ) => {
 31:     try {
 32:       updateState({ error: null, isConnected: false });
 33: 
 34:       // Get voice ID for the mama using the existing Edge Function
 35:       const { data: voiceData } = await fetch('https://jfocambuvgkztcktukar.supabase.co/functions/v1/get-voice-ids', {
 36:         method: 'POST',
 37:         headers: { 'Content-Type': 'application/json' }
 38:       }).then(r => r.json()).catch(() => ({ data: null }));
 39:       
 40:       const voiceId = voiceData?.[`ELEVENLABS_${mamaId.toUpperCase()}_VOICE_ID`] || 'default-voice';
 41:       
 42:       if (!voiceId) {
 43:         throw new Error(`Voice ID not found for ${mamaId}`);
 44:       }
 45: 
 46:       await conversationalService.startConversation({
 47:         voiceId,
 48:         mamaId,
 49:         onTranscript: (text: string, isFinal: boolean) => {
 50:           if (isFinal) {
 51:             updateState({ 
 52:               currentTranscript: text,
 53:               partialTranscript: ''
 54:             });
 55:           } else {
 56:             updateState({ partialTranscript: text });
 57:           }
 58:         },
 59:         onCommand: (command: string) => {
 60:           console.log('Voice command detected:', command);
 61:           onCommand?.(command);
 62:         },
 63:         onError: (error: string) => {
 64:           console.error('Conversation error:', error);
 65:           updateState({ error, isConnected: false });
 66:         }
 67:       }, stepText);
 68: 
 69:       updateState({ isConnected: true });
 70:     } catch (error) {
 71:       console.error('Failed to start conversation:', error);
 72:       updateState({ 
 73:         error: error instanceof Error ? error.message : 'Failed to start conversation',
 74:         isConnected: false 
 75:       });
 76:       
 77:       // Fallback to regular TTS
 78:       try {
 79:         await voiceService.speak(stepText, mamaId);
 80:       } catch (fallbackError) {
 81:         console.error('Fallback TTS also failed:', fallbackError);
 82:       }
 83:     }
 84:   }, [conversationalService, voiceService, updateState]);
 85: 
 86:   const stopConversation = useCallback(async () => {
 87:     try {
 88:       await conversationalService.stopConversation();
 89:       updateState({ 
 90:         isConnected: false,
 91:         currentTranscript: '',
 92:         partialTranscript: '',
 93:         error: null
 94:       });
 95:     } catch (error) {
 96:       console.error('Failed to stop conversation:', error);
 97:     }
 98:   }, [conversationalService, updateState]);
 99: 
100:   const sendMessage = useCallback((text: string) => {
101:     if (state.isConnected) {
102:       conversationalService.sendMessage(text);
103:     }
104:   }, [conversationalService, state.isConnected]);
105: 
106:   // Cleanup on unmount
107:   useEffect(() => {
108:     return () => {
109:       conversationalService.stopConversation().catch(console.error);
110:     };
111:   }, [conversationalService]);
112: 
113:   return {
114:     ...state,
115:     startConversation,
116:     stopConversation,
117:     sendMessage,
118:     isConnected: state.isConnected && conversationalService.isConnected()
119:   };
120: };
````

## File: src/hooks/useConversationMemory.ts
````typescript
  1: import { useState, useCallback } from 'react';
  2: import { Recipe } from '@/data/recipes';
  3: import { Mama } from '@/data/mamas';
  4: 
  5: interface ConversationContext {
  6:   recipe: Recipe;
  7:   mama: Mama;
  8:   currentStep: number;
  9:   conversationPhase: 'pre-cooking' | 'cooking';
 10:   interruptionCount: number;
 11:   lastUserInput: string;
 12:   cookingProgress: {
 13:     completedSteps: number[];
 14:     strugglingSteps: number[];
 15:     userQuestions: string[];
 16:   };
 17: }
 18: 
 19: export const useConversationMemory = (recipe: Recipe, mama: Mama) => {
 20:   const [context, setContext] = useState<ConversationContext>({
 21:     recipe,
 22:     mama,
 23:     currentStep: 1,
 24:     conversationPhase: 'pre-cooking',
 25:     interruptionCount: 0,
 26:     lastUserInput: '',
 27:     cookingProgress: {
 28:       completedSteps: [],
 29:       strugglingSteps: [],
 30:       userQuestions: []
 31:     }
 32:   });
 33: 
 34:   const updateContext = useCallback((updates: Partial<ConversationContext>) => {
 35:     setContext(prev => ({ ...prev, ...updates }));
 36:   }, []);
 37: 
 38:   const startCookingPhase = useCallback((step: number) => {
 39:     updateContext({
 40:       conversationPhase: 'cooking',
 41:       currentStep: step,
 42:       interruptionCount: 0
 43:     });
 44:   }, [updateContext]);
 45: 
 46:   const handleInterruption = useCallback(() => {
 47:     setContext(prev => ({
 48:       ...prev,
 49:       interruptionCount: prev.interruptionCount + 1
 50:     }));
 51:   }, []);
 52: 
 53:   const addUserQuestion = useCallback((question: string) => {
 54:     setContext(prev => ({
 55:       ...prev,
 56:       lastUserInput: question,
 57:       cookingProgress: {
 58:         ...prev.cookingProgress,
 59:         userQuestions: [...prev.cookingProgress.userQuestions, question]
 60:       }
 61:     }));
 62:   }, []);
 63: 
 64:   const markStepComplete = useCallback((stepNumber: number) => {
 65:     setContext(prev => ({
 66:       ...prev,
 67:       cookingProgress: {
 68:         ...prev.cookingProgress,
 69:         completedSteps: [...prev.cookingProgress.completedSteps, stepNumber]
 70:       }
 71:     }));
 72:   }, []);
 73: 
 74:   const markStepStruggling = useCallback((stepNumber: number) => {
 75:     setContext(prev => ({
 76:       ...prev,
 77:       cookingProgress: {
 78:         ...prev.cookingProgress,
 79:         strugglingSteps: [...prev.cookingProgress.strugglingSteps, stepNumber]
 80:       }
 81:     }));
 82:   }, []);
 83: 
 84:   const getContextualPrompt = useCallback(() => {
 85:     const { conversationPhase, currentStep, interruptionCount, cookingProgress } = context;
 86:     
 87:     let prompt = `You are ${mama.name}, a ${mama.accent} cooking teacher. `;
 88:     
 89:     if (conversationPhase === 'pre-cooking') {
 90:       prompt += `The user is asking about ${recipe.title} before cooking. Share cultural stories, explain ingredients, and build excitement. `;
 91:     } else {
 92:       prompt += `The user is cooking ${recipe.title}, currently on step ${currentStep}. `;
 93:       
 94:       if (interruptionCount > 2) {
 95:         prompt += `The user has interrupted you ${interruptionCount} times - they might be struggling. Be extra encouraging. `;
 96:       }
 97:       
 98:       if (cookingProgress.strugglingSteps.includes(currentStep)) {
 99:         prompt += `The user previously struggled with this step. Provide extra guidance. `;
100:       }
101:     }
102:     
103:     prompt += `Respond in character with your ${mama.accent} personality and accent. Keep responses conversational and encouraging.`;
104:     
105:     return prompt;
106:   }, [context, mama, recipe]);
107: 
108:   return {
109:     context,
110:     updateContext,
111:     startCookingPhase,
112:     handleInterruption,
113:     addUserQuestion,
114:     markStepComplete,
115:     markStepStruggling,
116:     getContextualPrompt
117:   };
118: };
````

## File: src/hooks/useOptimisticUpdates.tsx
````typescript
  1: import { useState, useCallback, useRef } from 'react';
  2: import { useToast } from '@/hooks/use-toast';
  3: 
  4: interface OptimisticUpdate<T> {
  5:   id: string;
  6:   data: T;
  7:   timestamp: number;
  8: }
  9: 
 10: interface UseOptimisticUpdatesOptions<T> {
 11:   mutationFn: (data: T) => Promise<T>;
 12:   onSuccess?: (data: T) => void;
 13:   onError?: (error: Error, originalData: T) => void;
 14:   rollbackDelay?: number;
 15: }
 16: 
 17: export function useOptimisticUpdates<T>(
 18:   initialData: T[],
 19:   options: UseOptimisticUpdatesOptions<T>
 20: ) {
 21:   const [optimisticData, setOptimisticData] = useState<T[]>(initialData);
 22:   const [pendingUpdates, setPendingUpdates] = useState<OptimisticUpdate<T>[]>([]);
 23:   const [isLoading, setIsLoading] = useState(false);
 24:   const { toast } = useToast();
 25:   const rollbackTimeouts = useRef<Map<string, NodeJS.Timeout>>(new Map());
 26: 
 27:   const addOptimisticUpdate = useCallback(
 28:     async (newData: T, tempId?: string) => {
 29:       const updateId = tempId || `temp-${Date.now()}-${Math.random()}`;
 30:       const update: OptimisticUpdate<T> = {
 31:         id: updateId,
 32:         data: newData,
 33:         timestamp: Date.now()
 34:       };
 35: 
 36:       // Add optimistic update immediately
 37:       setOptimisticData(prev => [...prev, newData]);
 38:       setPendingUpdates(prev => [...prev, update]);
 39:       setIsLoading(true);
 40: 
 41:       try {
 42:         // Perform actual mutation
 43:         const result = await options.mutationFn(newData);
 44:         
 45:         // Remove from pending updates on success
 46:         setPendingUpdates(prev => prev.filter(u => u.id !== updateId));
 47:         
 48:         // Replace optimistic data with real data
 49:         setOptimisticData(prev => 
 50:           prev.map(item => 
 51:             JSON.stringify(item) === JSON.stringify(newData) ? result : item
 52:           )
 53:         );
 54: 
 55:         options.onSuccess?.(result);
 56:       } catch (error) {
 57:         // Rollback optimistic update on error
 58:         setOptimisticData(prev => 
 59:           prev.filter(item => JSON.stringify(item) !== JSON.stringify(newData))
 60:         );
 61:         setPendingUpdates(prev => prev.filter(u => u.id !== updateId));
 62:         
 63:         options.onError?.(error as Error, newData);
 64:         
 65:         toast({
 66:           title: "Action failed",
 67:           description: "Your changes couldn't be saved. Please try again.",
 68:           variant: "destructive"
 69:         });
 70:       } finally {
 71:         setIsLoading(false);
 72:       }
 73: 
 74:       return updateId;
 75:     },
 76:     [options, toast]
 77:   );
 78: 
 79:   const updateOptimisticData = useCallback(
 80:     async (predicate: (item: T) => boolean, updater: (item: T) => T) => {
 81:       const updateId = `update-${Date.now()}-${Math.random()}`;
 82:       let originalItems: T[] = [];
 83:       
 84:       // Apply optimistic update
 85:       setOptimisticData(prev => {
 86:         const updated = prev.map(item => {
 87:           if (predicate(item)) {
 88:             originalItems.push(item);
 89:             return updater(item);
 90:           }
 91:           return item;
 92:         });
 93:         return updated;
 94:       });
 95: 
 96:       setIsLoading(true);
 97: 
 98:       try {
 99:         // Perform actual mutations for each updated item
100:         const promises = originalItems.map(async (originalItem) => {
101:           const updatedItem = updater(originalItem);
102:           return options.mutationFn(updatedItem);
103:         });
104: 
105:         const results = await Promise.all(promises);
106:         
107:         // Replace with real data
108:         setOptimisticData(prev => {
109:           let resultIndex = 0;
110:           return prev.map(item => {
111:             const shouldUpdate = originalItems.some(orig => 
112:               JSON.stringify(orig) === JSON.stringify(updater(item))
113:             );
114:             if (shouldUpdate) {
115:               return results[resultIndex++];
116:             }
117:             return item;
118:           });
119:         });
120: 
121:         results.forEach(result => options.onSuccess?.(result));
122:       } catch (error) {
123:         // Rollback all changes
124:         setOptimisticData(prev => 
125:           prev.map(item => {
126:             const original = originalItems.find(orig => 
127:               JSON.stringify(updater(orig)) === JSON.stringify(item)
128:             );
129:             return original || item;
130:           })
131:         );
132: 
133:         originalItems.forEach(originalItem => {
134:           options.onError?.(error as Error, originalItem);
135:         });
136: 
137:         toast({
138:           title: "Update failed",
139:           description: "Your changes couldn't be saved. Please try again.",
140:           variant: "destructive"
141:         });
142:       } finally {
143:         setIsLoading(false);
144:       }
145: 
146:       return updateId;
147:     },
148:     [options, toast]
149:   );
150: 
151:   const removeOptimisticData = useCallback(
152:     async (predicate: (item: T) => boolean) => {
153:       const itemsToRemove = optimisticData.filter(predicate);
154:       const updateId = `remove-${Date.now()}-${Math.random()}`;
155: 
156:       // Optimistically remove items
157:       setOptimisticData(prev => prev.filter(item => !predicate(item)));
158:       setIsLoading(true);
159: 
160:       // Set up rollback timeout
161:       const rollbackTimeout = setTimeout(() => {
162:         setOptimisticData(prev => [...prev, ...itemsToRemove]);
163:         toast({
164:           title: "Delete timeout",
165:           description: "The delete operation took too long and was cancelled.",
166:           variant: "destructive"
167:         });
168:       }, options.rollbackDelay || 10000);
169: 
170:       rollbackTimeouts.current.set(updateId, rollbackTimeout);
171: 
172:       try {
173:         // Perform actual deletions
174:         const promises = itemsToRemove.map(item => options.mutationFn(item));
175:         const results = await Promise.all(promises);
176:         
177:         // Clear rollback timeout
178:         const timeout = rollbackTimeouts.current.get(updateId);
179:         if (timeout) {
180:           clearTimeout(timeout);
181:           rollbackTimeouts.current.delete(updateId);
182:         }
183: 
184:         results.forEach(result => options.onSuccess?.(result));
185:       } catch (error) {
186:         // Rollback removals
187:         setOptimisticData(prev => [...prev, ...itemsToRemove]);
188:         
189:         // Clear rollback timeout
190:         const timeout = rollbackTimeouts.current.get(updateId);
191:         if (timeout) {
192:           clearTimeout(timeout);
193:           rollbackTimeouts.current.delete(updateId);
194:         }
195: 
196:         itemsToRemove.forEach(item => {
197:           options.onError?.(error as Error, item);
198:         });
199: 
200:         toast({
201:           title: "Delete failed",
202:           description: "Items couldn't be removed. Please try again.",
203:           variant: "destructive"
204:         });
205:       } finally {
206:         setIsLoading(false);
207:       }
208: 
209:       return updateId;
210:     },
211:     [optimisticData, options, toast]
212:   );
213: 
214:   const clearPendingUpdates = useCallback(() => {
215:     setPendingUpdates([]);
216:     // Clear all rollback timeouts
217:     rollbackTimeouts.current.forEach(timeout => clearTimeout(timeout));
218:     rollbackTimeouts.current.clear();
219:   }, []);
220: 
221:   const retryFailedUpdates = useCallback(async () => {
222:     const currentPending = [...pendingUpdates];
223:     if (currentPending.length === 0) return;
224: 
225:     setIsLoading(true);
226:     
227:     try {
228:       const promises = currentPending.map(update => 
229:         options.mutationFn(update.data)
230:       );
231:       
232:       const results = await Promise.all(promises);
233:       
234:       // Update data with successful results
235:       setOptimisticData(prev => {
236:         let resultIndex = 0;
237:         return prev.map(item => {
238:           const pendingUpdate = currentPending.find(update => 
239:             JSON.stringify(update.data) === JSON.stringify(item)
240:           );
241:           if (pendingUpdate) {
242:             return results[resultIndex++];
243:           }
244:           return item;
245:         });
246:       });
247: 
248:       setPendingUpdates([]);
249:       results.forEach(result => options.onSuccess?.(result));
250:       
251:       toast({
252:         title: "Sync successful",
253:         description: "All pending changes have been saved.",
254:         variant: "default"
255:       });
256:     } catch (error) {
257:       toast({
258:         title: "Sync failed",
259:         description: "Some changes couldn't be saved. Please try again.",
260:         variant: "destructive"
261:       });
262:     } finally {
263:       setIsLoading(false);
264:     }
265:   }, [pendingUpdates, options, toast]);
266: 
267:   return {
268:     data: optimisticData,
269:     isLoading,
270:     pendingUpdates,
271:     hasPendingUpdates: pendingUpdates.length > 0,
272:     addOptimisticUpdate,
273:     updateOptimisticData,
274:     removeOptimisticData,
275:     clearPendingUpdates,
276:     retryFailedUpdates,
277:     setData: setOptimisticData
278:   };
279: }
````

## File: src/hooks/useProductionFeatures.tsx
````typescript
  1: import { useState, useEffect } from 'react';
  2: 
  3: interface UseOfflineOptions {
  4:   onOnline?: () => void;
  5:   onOffline?: () => void;
  6: }
  7: 
  8: export const useOffline = (options: UseOfflineOptions = {}) => {
  9:   const [isOffline, setIsOffline] = useState(!navigator.onLine);
 10: 
 11:   useEffect(() => {
 12:     const handleOnline = () => {
 13:       setIsOffline(false);
 14:       options.onOnline?.();
 15:     };
 16: 
 17:     const handleOffline = () => {
 18:       setIsOffline(true);
 19:       options.onOffline?.();
 20:     };
 21: 
 22:     window.addEventListener('online', handleOnline);
 23:     window.addEventListener('offline', handleOffline);
 24: 
 25:     return () => {
 26:       window.removeEventListener('online', handleOnline);
 27:       window.removeEventListener('offline', handleOffline);
 28:     };
 29:   }, [options]);
 30: 
 31:   return { isOffline };
 32: };
 33: 
 34: export const useLocalStorage = <T,>(key: string, initialValue: T) => {
 35:   const [storedValue, setStoredValue] = useState<T>(() => {
 36:     try {
 37:       const item = window.localStorage.getItem(key);
 38:       return item ? JSON.parse(item) : initialValue;
 39:     } catch (error) {
 40:       console.warn(`Error reading localStorage key \"${key}\":`, error);
 41:       return initialValue;
 42:     }
 43:   });
 44: 
 45:   const setValue = (value: T | ((val: T) => T)) => {
 46:     try {
 47:       const valueToStore = value instanceof Function ? value(storedValue) : value;
 48:       setStoredValue(valueToStore);
 49:       window.localStorage.setItem(key, JSON.stringify(valueToStore));
 50:     } catch (error) {
 51:       console.warn(`Error setting localStorage key \"${key}\":`, error);
 52:     }
 53:   };
 54: 
 55:   return [storedValue, setValue] as const;
 56: };
 57: 
 58: export const useHapticFeedback = () => {
 59:   const triggerHaptic = (type: 'light' | 'medium' | 'heavy' = 'light') => {
 60:     if ('vibrate' in navigator) {
 61:       const patterns = {
 62:         light: [10],
 63:         medium: [20],
 64:         heavy: [30]
 65:       };
 66:       navigator.vibrate(patterns[type]);
 67:     }
 68:   };
 69: 
 70:   return { triggerHaptic };
 71: };
 72: 
 73: export const useAnalytics = () => {
 74:   const track = (event: string, properties?: Record<string, any>) => {
 75:     // Store analytics locally for now - can be sent to analytics service later
 76:     const analyticsData = {
 77:       event,
 78:       properties,
 79:       timestamp: new Date().toISOString(),
 80:       url: window.location.href
 81:     };
 82:     
 83:     try {
 84:       const existing = JSON.parse(localStorage.getItem('analytics_events') || '[]');
 85:       existing.push(analyticsData);
 86:       
 87:       // Keep only last 100 events
 88:       if (existing.length > 100) {
 89:         existing.splice(0, existing.length - 100);
 90:       }
 91:       
 92:       localStorage.setItem('analytics_events', JSON.stringify(existing));
 93:       
 94:       // In production, you would send this to your analytics service
 95:       console.log('Analytics Event:', analyticsData);
 96:     } catch (error) {
 97:       console.warn('Failed to track analytics event:', error);
 98:     }
 99:   };
100: 
101:   const getAnalytics = () => {
102:     try {
103:       return JSON.parse(localStorage.getItem('analytics_events') || '[]');
104:     } catch {
105:       return [];
106:     }
107:   };
108: 
109:   return { track, getAnalytics };
110: };
````

## File: src/hooks/useTemplateResponses.ts
````typescript
  1: import { useCallback } from 'react';
  2: import { Recipe } from '@/data/recipes';
  3: 
  4: interface TemplateResponse {
  5:   pattern: RegExp;
  6:   responses: string[];
  7: }
  8: 
  9: export const useTemplateResponses = () => {
 10:   const italianResponses: TemplateResponse[] = [
 11:     {
 12:       pattern: /hello|hi|ciao|hey/i,
 13:       responses: [
 14:         "Ciao bella! Welcome to my kitchen!",
 15:         "Buongiorno tesoro! Ready to cook together?",
 16:         "Ciao! Come here, let Nonna teach you something special!"
 17:       ]
 18:     },
 19:     {
 20:       pattern: /never|first time|beginner|new/i,
 21:       responses: [
 22:         "Perfetto! I love teaching new cooks. Don't worry, we'll take it piano piano.",
 23:         "Magnifico! Everyone starts somewhere. My nonna taught me, now I teach you!",
 24:         "Bene! First time is always special. Just follow Nonna's instructions, sì?"
 25:       ]
 26:     },
 27:     {
 28:       pattern: /difficult|hard|scared|worried/i,
 29:       responses: [
 30:         "Eh, no worries! This recipe is like riding a bicycle - once you know, you never forget!",
 31:         "Madonna mia, don't be scared! I've been making this for 50 years, I guide you!",
 32:         "Listen to me, cara - cooking is about amore, not perfection. We'll do it together!"
 33:       ]
 34:     },
 35:     {
 36:       pattern: /ingredients|what.*need|shopping/i,
 37:       responses: [
 38:         "Ah, bene! Let me tell you about the ingredients. Each one has a purpose, like musicians in an orchestra!",
 39:         "The secret is good ingredients - I always say, garbage in, garbage out!",
 40:         "Quality ingredients make all the difference. Find good olive oil, fresh herbs - your taste buds will thank you!"
 41:       ]
 42:     },
 43:     {
 44:       pattern: /why|story|family|tradition/i,
 45:       responses: [
 46:         "Ah, this recipe! It comes from my nonna's nonna. Every time I make it, I remember her hands teaching mine.",
 47:         "This dish has history, cara. In our famiglia, we pass recipes like treasures from mother to daughter.",
 48:         "You know, this recipe saved my family during hard times. Simple ingredients, but made with amore!"
 49:       ]
 50:     }
 51:   ];
 52: 
 53:   const mexicanResponses: TemplateResponse[] = [
 54:     {
 55:       pattern: /hello|hi|hola|hey/i,
 56:       responses: [
 57:         "¡Hola mija! Welcome to Abuela's cocina!",
 58:         "¡Buenos días mi amor! Ready to cook with your abuela?",
 59:         "¡Órale! Come here, let me show you how we do it in our familia!"
 60:       ]
 61:     },
 62:     {
 63:       pattern: /never|first time|beginner|new/i,
 64:       responses: [
 65:         "¡Qué bueno! I love teaching mis nietos. Don't worry, we'll go poquito a poquito.",
 66:         "Perfect! Everyone in our familia learns to cook. Today you become part of the tradition!",
 67:         "¡Excelente! First time is special. Just listen to your abuela, ¿sí?"
 68:       ]
 69:     },
 70:     {
 71:       pattern: /spicy|hot|picante/i,
 72:       responses: [
 73:         "¡Ay, mija! Don't worry about the spice - we can adjust it to your taste. Start small!",
 74:         "The chile gives life to the food! But if you're not ready, we use less. You'll build up tolerance!",
 75:         "In our familia, we say 'sin chile no hay sabor' - but we start gentle with the newcomers!"
 76:       ]
 77:     },
 78:     {
 79:       pattern: /ingredients|what.*need|shopping/i,
 80:       responses: [
 81:         "¡Perfecto! The ingredients tell a story of our tierra. Each one brings tradition to your plate.",
 82:         "Good ingredients are like good friends - they never let you down! Let me explain each one.",
 83:         "Quality matters, mija. Find good chiles, fresh cilantro - these make the difference!"
 84:       ]
 85:     },
 86:     {
 87:       pattern: /family|tradition|story|why/i,
 88:       responses: [
 89:         "Ay, this recipe... it's from mi bisabuela. Every generation adds their own touch, but the heart stays the same.",
 90:         "In our familia, food is love. When you cook this, you're connecting with generations of mujeres fuertes.",
 91:         "This dish fed our family through celebrations and hard times. It's more than food - it's our historia!"
 92:       ]
 93:     }
 94:   ];
 95: 
 96:   const thaiResponses: TemplateResponse[] = [
 97:     {
 98:       pattern: /hello|hi|sawasdee|hey/i,
 99:       responses: [
100:         "Sawasdee ka! Welcome to my kitchen, darling!",
101:         "Hello dear! Come, let me teach you the way of Thai cooking!",
102:         "Sabai sabai! Relax and let's cook together with mindfulness!"
103:       ]
104:     },
105:     {
106:       pattern: /never|first time|beginner|new/i,
107:       responses: [
108:         "Beautiful! Like a lotus learning to bloom. We take our time, no rush.",
109:         "Perfect! In Thailand, we believe cooking is meditation. Let your heart guide your hands.",
110:         "Wonderful! Every master was once a student. Today we plant the seeds of knowledge!"
111:       ]
112:     },
113:     {
114:       pattern: /spicy|hot|balance/i,
115:       responses: [
116:         "Ah, balance! This is the heart of Thai cooking - sweet, sour, salty, spicy in harmony.",
117:         "Like life, darling - sometimes you need the heat to appreciate the sweet. We'll find your perfect balance.",
118:         "Thai food is like music - each flavor plays its part in the symphony. We'll tune it to your taste!"
119:       ]
120:     },
121:     {
122:       pattern: /ingredients|what.*need|herbs/i,
123:       responses: [
124:         "Each ingredient is chosen with purpose, like selecting the right word for a poem.",
125:         "Fresh herbs are the soul of Thai cooking. When you smell them, you understand Thailand.",
126:         "These ingredients have been friends in Thai kitchens for centuries. Let me introduce you!"
127:       ]
128:     },
129:     {
130:       pattern: /why|tradition|story|culture/i,
131:       responses: [
132:         "This recipe carries the wisdom of my grandmother's village. Each bite connects you to our beautiful land.",
133:         "In Thailand, we cook with gratitude - for the earth, the farmers, the hands that grew our food.",
134:         "Food is how we share love in Thai culture. When you cook this, you're creating happiness for others!"
135:       ]
136:     }
137:   ];
138: 
139:   const getCulturalGreeting = useCallback((accent: string, recipeName: string) => {
140:     switch (accent.toLowerCase()) {
141:       case 'italian':
142:         return `Ciao bella! Today we make my beautiful ${recipeName}. Come, sit with Nonna and let me tell you about this special dish from my famiglia!`;
143:       case 'mexican':
144:         return `¡Hola mija! Welcome to my cocina! Today we're making ${recipeName} - a recipe that's been in our familia for generations. ¿Estás lista?`;
145:       case 'thai':
146:         return `Sawasdee ka, darling! Today we create ${recipeName} together. In Thailand, we cook with love and mindfulness. Let's begin this beautiful journey!`;
147:       default:
148:         return `Hello! Ready to cook ${recipeName} together? Let me guide you through this wonderful recipe!`;
149:     }
150:   }, []);
151: 
152:   const getTemplateResponse = useCallback((input: string, accent: string, recipe: Recipe) => {
153:     const responses = accent.toLowerCase() === 'italian' ? italianResponses :
154:                      accent.toLowerCase() === 'mexican' ? mexicanResponses :
155:                      accent.toLowerCase() === 'thai' ? thaiResponses : 
156:                      italianResponses; // default
157: 
158:     for (const template of responses) {
159:       if (template.pattern.test(input)) {
160:         const randomResponse = template.responses[Math.floor(Math.random() * template.responses.length)];
161:         return randomResponse;
162:       }
163:     }
164: 
165:     // Default responses when no pattern matches
166:     const defaultResponses = {
167:       italian: [
168:         "Interessante! Tell me more about what you want to know, cara mia.",
169:         "Sì, sì! I understand. Let me think how to explain this best...",
170:         "Ah, good question! In my kitchen, we always say..."
171:       ],
172:       mexican: [
173:         "¡Órale! That's a good question, mija. Let me share what I know...",
174:         "¡Perfecto! I love when you ask questions. That's how we learn!",
175:         "¡Excelente! In our familia, we always say..."
176:       ],
177:       thai: [
178:         "Beautiful question, darling! Let me share some wisdom with you...",
179:         "Ah, I see! Like the river finding its way, understanding comes slowly but surely.",
180:         "Wonderful curiosity! In Thailand, we believe..."
181:       ]
182:     };
183: 
184:     const accentKey = accent.toLowerCase() as keyof typeof defaultResponses;
185:     const defaults = defaultResponses[accentKey] || defaultResponses.italian;
186:     return defaults[Math.floor(Math.random() * defaults.length)];
187:   }, []);
188: 
189:   return {
190:     getCulturalGreeting,
191:     getTemplateResponse
192:   };
193: };
````

## File: src/hooks/useVoice.tsx
````typescript
 1: import { useState, useEffect, useCallback } from 'react';
 2: import { VoiceService, VoiceConfig } from '@/services/voiceService';
 3: 
 4: export const useVoice = () => {
 5:   const [voiceService] = useState(() => VoiceService.getInstance());
 6:   const [config, setConfig] = useState<VoiceConfig>(voiceService.getConfig());
 7:   const [isPlaying, setIsPlaying] = useState(false);
 8:   const [queueLength, setQueueLength] = useState(0);
 9: 
10:   // Update local state when service state changes
11:   useEffect(() => {
12:     const interval = setInterval(() => {
13:       setIsPlaying(voiceService.isCurrentlyPlaying());
14:       setQueueLength(voiceService.getQueueLength());
15:     }, 100);
16: 
17:     return () => clearInterval(interval);
18:   }, [voiceService]);
19: 
20:   const updateConfig = useCallback((newConfig: Partial<VoiceConfig>) => {
21:     const updatedConfig = { ...config, ...newConfig };
22:     voiceService.updateConfig(updatedConfig);
23:     setConfig(updatedConfig);
24:   }, [config, voiceService]);
25: 
26:   const speak = useCallback((text: string, mamaId: string) => {
27:     return voiceService.speak(text, mamaId);
28:   }, [voiceService]);
29: 
30:   const stopSpeaking = useCallback(() => {
31:     voiceService.stopCurrentAudio();
32:   }, [voiceService]);
33: 
34:   const clearQueue = useCallback(() => {
35:     voiceService.clearQueue();
36:   }, [voiceService]);
37: 
38:   return {
39:     config,
40:     updateConfig,
41:     speak,
42:     stopSpeaking,
43:     clearQueue,
44:     isPlaying,
45:     queueLength
46:   };
47: };
````

## File: src/integrations/supabase/client.ts
````typescript
 1: // This file is automatically generated. Do not edit it directly.
 2: import { createClient } from '@supabase/supabase-js';
 3: import type { Database } from './types';
 4: 
 5: const SUPABASE_URL = "https://jfocambuvgkztcktukar.supabase.co";
 6: const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmb2NhbWJ1dmdrenRja3R1a2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxOTIzOTcsImV4cCI6MjA2Nzc2ODM5N30.6uRI4_6dbyqGJTu_AKd18I4Khsgqpk4KT3Vizs0pOLE";
 7: 
 8: // Import the supabase client like this:
 9: // import { supabase } from "@/integrations/supabase/client";
10: 
11: export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
12:   auth: {
13:     storage: localStorage,
14:     persistSession: true,
15:     autoRefreshToken: true,
16:   }
17: });
````

## File: src/integrations/supabase/types.ts
````typescript
  1: export type Json =
  2:   | string
  3:   | number
  4:   | boolean
  5:   | null
  6:   | { [key: string]: Json | undefined }
  7:   | Json[]
  8: 
  9: export type Database = {
 10:   // Allows to automatically instanciate createClient with right options
 11:   // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
 12:   __InternalSupabase: {
 13:     PostgrestVersion: "12.2.3 (519615d)"
 14:   }
 15:   public: {
 16:     Tables: {
 17:       food_categories: {
 18:         Row: {
 19:           created_at: string
 20:           icon: string | null
 21:           id: string
 22:           name: string
 23:           sort_order: number | null
 24:           updated_at: string
 25:           user_id: string | null
 26:         }
 27:         Insert: {
 28:           created_at?: string
 29:           icon?: string | null
 30:           id?: string
 31:           name: string
 32:           sort_order?: number | null
 33:           updated_at?: string
 34:           user_id?: string | null
 35:         }
 36:         Update: {
 37:           created_at?: string
 38:           icon?: string | null
 39:           id?: string
 40:           name?: string
 41:           sort_order?: number | null
 42:           updated_at?: string
 43:           user_id?: string | null
 44:         }
 45:         Relationships: []
 46:       }
 47:       ingredient_aliases: {
 48:         Row: {
 49:           alias_name: string
 50:           canonical_name: string
 51:           category_id: string | null
 52:           created_at: string
 53:           id: string
 54:         }
 55:         Insert: {
 56:           alias_name: string
 57:           canonical_name: string
 58:           category_id?: string | null
 59:           created_at?: string
 60:           id?: string
 61:         }
 62:         Update: {
 63:           alias_name?: string
 64:           canonical_name?: string
 65:           category_id?: string | null
 66:           created_at?: string
 67:           id?: string
 68:         }
 69:         Relationships: [
 70:           {
 71:             foreignKeyName: "ingredient_aliases_category_id_fkey"
 72:             columns: ["category_id"]
 73:             isOneToOne: false
 74:             referencedRelation: "food_categories"
 75:             referencedColumns: ["id"]
 76:           },
 77:         ]
 78:       }
 79:       profiles: {
 80:         Row: {
 81:           avatar_url: string | null
 82:           created_at: string
 83:           display_name: string | null
 84:           id: string
 85:           updated_at: string
 86:           user_id: string
 87:         }
 88:         Insert: {
 89:           avatar_url?: string | null
 90:           created_at?: string
 91:           display_name?: string | null
 92:           id?: string
 93:           updated_at?: string
 94:           user_id: string
 95:         }
 96:         Update: {
 97:           avatar_url?: string | null
 98:           created_at?: string
 99:           display_name?: string | null
100:           id?: string
101:           updated_at?: string
102:           user_id?: string
103:         }
104:         Relationships: []
105:       }
106:       shopping_list_collaborators: {
107:         Row: {
108:           created_at: string
109:           id: string
110:           permission_level: string
111:           shopping_list_id: string
112:           user_id: string
113:         }
114:         Insert: {
115:           created_at?: string
116:           id?: string
117:           permission_level?: string
118:           shopping_list_id: string
119:           user_id: string
120:         }
121:         Update: {
122:           created_at?: string
123:           id?: string
124:           permission_level?: string
125:           shopping_list_id?: string
126:           user_id?: string
127:         }
128:         Relationships: [
129:           {
130:             foreignKeyName: "shopping_list_collaborators_shopping_list_id_fkey"
131:             columns: ["shopping_list_id"]
132:             isOneToOne: false
133:             referencedRelation: "shopping_lists"
134:             referencedColumns: ["id"]
135:           },
136:         ]
137:       }
138:       shopping_list_items: {
139:         Row: {
140:           category: string | null
141:           category_id: string | null
142:           checked: boolean
143:           created_at: string
144:           id: string
145:           ingredient_name: string
146:           quantity: string | null
147:           recipe_id: string | null
148:           recipe_name: string | null
149:           shopping_list_id: string
150:           updated_at: string
151:         }
152:         Insert: {
153:           category?: string | null
154:           category_id?: string | null
155:           checked?: boolean
156:           created_at?: string
157:           id?: string
158:           ingredient_name: string
159:           quantity?: string | null
160:           recipe_id?: string | null
161:           recipe_name?: string | null
162:           shopping_list_id: string
163:           updated_at?: string
164:         }
165:         Update: {
166:           category?: string | null
167:           category_id?: string | null
168:           checked?: boolean
169:           created_at?: string
170:           id?: string
171:           ingredient_name?: string
172:           quantity?: string | null
173:           recipe_id?: string | null
174:           recipe_name?: string | null
175:           shopping_list_id?: string
176:           updated_at?: string
177:         }
178:         Relationships: [
179:           {
180:             foreignKeyName: "shopping_list_items_category_id_fkey"
181:             columns: ["category_id"]
182:             isOneToOne: false
183:             referencedRelation: "food_categories"
184:             referencedColumns: ["id"]
185:           },
186:           {
187:             foreignKeyName: "shopping_list_items_shopping_list_id_fkey"
188:             columns: ["shopping_list_id"]
189:             isOneToOne: false
190:             referencedRelation: "shopping_lists"
191:             referencedColumns: ["id"]
192:           },
193:         ]
194:       }
195:       shopping_list_templates: {
196:         Row: {
197:           created_at: string
198:           id: string
199:           items: Json
200:           name: string
201:           updated_at: string
202:           user_id: string
203:         }
204:         Insert: {
205:           created_at?: string
206:           id?: string
207:           items: Json
208:           name: string
209:           updated_at?: string
210:           user_id: string
211:         }
212:         Update: {
213:           created_at?: string
214:           id?: string
215:           items?: Json
216:           name?: string
217:           updated_at?: string
218:           user_id?: string
219:         }
220:         Relationships: []
221:       }
222:       shopping_lists: {
223:         Row: {
224:           created_at: string
225:           id: string
226:           name: string
227:           updated_at: string
228:           user_id: string
229:         }
230:         Insert: {
231:           created_at?: string
232:           id?: string
233:           name?: string
234:           updated_at?: string
235:           user_id: string
236:         }
237:         Update: {
238:           created_at?: string
239:           id?: string
240:           name?: string
241:           updated_at?: string
242:           user_id?: string
243:         }
244:         Relationships: []
245:       }
246:     }
247:     Views: {
248:       [_ in never]: never
249:     }
250:     Functions: {
251:       [_ in never]: never
252:     }
253:     Enums: {
254:       [_ in never]: never
255:     }
256:     CompositeTypes: {
257:       [_ in never]: never
258:     }
259:   }
260: }
261: 
262: type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">
263: 
264: type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]
265: 
266: export type Tables<
267:   DefaultSchemaTableNameOrOptions extends
268:     | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
269:     | { schema: keyof DatabaseWithoutInternals },
270:   TableName extends DefaultSchemaTableNameOrOptions extends {
271:     schema: keyof DatabaseWithoutInternals
272:   }
273:     ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
274:         DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
275:     : never = never,
276: > = DefaultSchemaTableNameOrOptions extends {
277:   schema: keyof DatabaseWithoutInternals
278: }
279:   ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
280:       DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
281:       Row: infer R
282:     }
283:     ? R
284:     : never
285:   : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
286:         DefaultSchema["Views"])
287:     ? (DefaultSchema["Tables"] &
288:         DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
289:         Row: infer R
290:       }
291:       ? R
292:       : never
293:     : never
294: 
295: export type TablesInsert<
296:   DefaultSchemaTableNameOrOptions extends
297:     | keyof DefaultSchema["Tables"]
298:     | { schema: keyof DatabaseWithoutInternals },
299:   TableName extends DefaultSchemaTableNameOrOptions extends {
300:     schema: keyof DatabaseWithoutInternals
301:   }
302:     ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
303:     : never = never,
304: > = DefaultSchemaTableNameOrOptions extends {
305:   schema: keyof DatabaseWithoutInternals
306: }
307:   ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
308:       Insert: infer I
309:     }
310:     ? I
311:     : never
312:   : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
313:     ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
314:         Insert: infer I
315:       }
316:       ? I
317:       : never
318:     : never
319: 
320: export type TablesUpdate<
321:   DefaultSchemaTableNameOrOptions extends
322:     | keyof DefaultSchema["Tables"]
323:     | { schema: keyof DatabaseWithoutInternals },
324:   TableName extends DefaultSchemaTableNameOrOptions extends {
325:     schema: keyof DatabaseWithoutInternals
326:   }
327:     ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
328:     : never = never,
329: > = DefaultSchemaTableNameOrOptions extends {
330:   schema: keyof DatabaseWithoutInternals
331: }
332:   ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
333:       Update: infer U
334:     }
335:     ? U
336:     : never
337:   : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
338:     ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
339:         Update: infer U
340:       }
341:       ? U
342:       : never
343:     : never
344: 
345: export type Enums<
346:   DefaultSchemaEnumNameOrOptions extends
347:     | keyof DefaultSchema["Enums"]
348:     | { schema: keyof DatabaseWithoutInternals },
349:   EnumName extends DefaultSchemaEnumNameOrOptions extends {
350:     schema: keyof DatabaseWithoutInternals
351:   }
352:     ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
353:     : never = never,
354: > = DefaultSchemaEnumNameOrOptions extends {
355:   schema: keyof DatabaseWithoutInternals
356: }
357:   ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
358:   : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
359:     ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
360:     : never
361: 
362: export type CompositeTypes<
363:   PublicCompositeTypeNameOrOptions extends
364:     | keyof DefaultSchema["CompositeTypes"]
365:     | { schema: keyof DatabaseWithoutInternals },
366:   CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
367:     schema: keyof DatabaseWithoutInternals
368:   }
369:     ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
370:     : never = never,
371: > = PublicCompositeTypeNameOrOptions extends {
372:   schema: keyof DatabaseWithoutInternals
373: }
374:   ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
375:   : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
376:     ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
377:     : never
378: 
379: export const Constants = {
380:   public: {
381:     Enums: {},
382:   },
383: } as const
````

## File: src/lib/utils.ts
````typescript
1: import { clsx, type ClassValue } from "clsx"
2: import { twMerge } from "tailwind-merge"
3: 
4: export function cn(...inputs: ClassValue[]) {
5:   return twMerge(clsx(inputs))
6: }
````

## File: src/pages/Auth.tsx
````typescript
  1: import { useState } from 'react';
  2: import { useNavigate } from 'react-router-dom';
  3: import { Button } from '@/components/ui/button';
  4: import { Input } from '@/components/ui/input';
  5: import { Label } from '@/components/ui/label';
  6: import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
  7: import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
  8: import { Alert, AlertDescription } from '@/components/ui/alert';
  9: import { useAuth } from '@/contexts/AuthContext';
 10: import { useToast } from '@/hooks/use-toast';
 11: import { ChefHat, Mail, Lock, User, ArrowLeft } from 'lucide-react';
 12: import { useEffect } from 'react';
 13: 
 14: export default function Auth() {
 15:   const navigate = useNavigate();
 16:   const { signIn, signUp, user } = useAuth();
 17:   const { toast } = useToast();
 18:   const [loading, setLoading] = useState(false);
 19:   const [error, setError] = useState<string | null>(null);
 20: 
 21:   // Redirect if already authenticated
 22:   useEffect(() => {
 23:     if (user) {
 24:       navigate('/');
 25:     }
 26:   }, [user, navigate]);
 27: 
 28:   const [signInForm, setSignInForm] = useState({
 29:     email: '',
 30:     password: ''
 31:   });
 32: 
 33:   const [signUpForm, setSignUpForm] = useState({
 34:     email: '',
 35:     password: '',
 36:     confirmPassword: '',
 37:     displayName: ''
 38:   });
 39: 
 40:   const handleSignIn = async (e: React.FormEvent) => {
 41:     e.preventDefault();
 42:     setLoading(true);
 43:     setError(null);
 44: 
 45:     const { error } = await signIn(signInForm.email, signInForm.password);
 46:     
 47:     if (error) {
 48:       setError(error.message);
 49:       toast({
 50:         title: "Sign In Failed",
 51:         description: error.message,
 52:         variant: "destructive"
 53:       });
 54:     } else {
 55:       toast({
 56:         title: "Welcome back!",
 57:         description: "You've successfully signed in."
 58:       });
 59:       navigate('/');
 60:     }
 61:     
 62:     setLoading(false);
 63:   };
 64: 
 65:   const handleSignUp = async (e: React.FormEvent) => {
 66:     e.preventDefault();
 67:     setLoading(true);
 68:     setError(null);
 69: 
 70:     if (signUpForm.password !== signUpForm.confirmPassword) {
 71:       setError("Passwords don't match");
 72:       setLoading(false);
 73:       return;
 74:     }
 75: 
 76:     if (signUpForm.password.length < 6) {
 77:       setError("Password must be at least 6 characters");
 78:       setLoading(false);
 79:       return;
 80:     }
 81: 
 82:     const { error } = await signUp(signUpForm.email, signUpForm.password, signUpForm.displayName);
 83:     
 84:     if (error) {
 85:       setError(error.message);
 86:       toast({
 87:         title: "Sign Up Failed",
 88:         description: error.message,
 89:         variant: "destructive"
 90:       });
 91:     } else {
 92:       toast({
 93:         title: "Account Created!",
 94:         description: "Welcome to MAMIA! You can now start cooking with our grandmothers."
 95:       });
 96:       navigate('/');
 97:     }
 98:     
 99:     setLoading(false);
100:   };
101: 
102:   return (
103:     <div className="min-h-screen bg-gradient-to-br from-cream via-cream/80 to-orange-50 flex items-center justify-center p-4">
104:       <div className="w-full max-w-md">
105:         {/* Header */}
106:         <div className="text-center mb-8">
107:           <Button 
108:             variant="ghost" 
109:             size="sm" 
110:             onClick={() => navigate('/')}
111:             className="mb-4 text-warm-brown hover:text-primary"
112:           >
113:             <ArrowLeft className="h-4 w-4 mr-2" />
114:             Back to Mamas
115:           </Button>
116:           
117:           <div className="flex items-center justify-center gap-3 mb-4">
118:             <div className="bg-primary/10 p-3 rounded-full">
119:               <ChefHat className="h-8 w-8 text-primary" />
120:             </div>
121:             <h1 className="text-3xl font-heading font-bold text-warm-brown">MAMIA</h1>
122:           </div>
123:           <p className="text-muted-foreground text-sm">
124:             Join our family of traditional cooks
125:           </p>
126:         </div>
127: 
128:         <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
129:           <CardHeader className="text-center pb-6">
130:             <CardTitle className="text-xl font-heading text-warm-brown">
131:               Welcome to the Kitchen
132:             </CardTitle>
133:             <CardDescription>
134:               Sign in to save recipes and create shopping lists
135:             </CardDescription>
136:           </CardHeader>
137:           
138:           <CardContent>
139:             <Tabs defaultValue="signin" className="w-full">
140:               <TabsList className="grid w-full grid-cols-2 mb-6">
141:                 <TabsTrigger value="signin">Sign In</TabsTrigger>
142:                 <TabsTrigger value="signup">Sign Up</TabsTrigger>
143:               </TabsList>
144: 
145:               {error && (
146:                 <Alert variant="destructive" className="mb-4">
147:                   <AlertDescription>{error}</AlertDescription>
148:                 </Alert>
149:               )}
150: 
151:               <TabsContent value="signin">
152:                 <form onSubmit={handleSignIn} className="space-y-4">
153:                   <div className="space-y-2">
154:                     <Label htmlFor="signin-email">Email</Label>
155:                     <div className="relative">
156:                       <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
157:                       <Input
158:                         id="signin-email"
159:                         type="email"
160:                         placeholder="your@email.com"
161:                         className="pl-10"
162:                         value={signInForm.email}
163:                         onChange={(e) => setSignInForm(prev => ({ ...prev, email: e.target.value }))}
164:                         required
165:                       />
166:                     </div>
167:                   </div>
168:                   
169:                   <div className="space-y-2">
170:                     <Label htmlFor="signin-password">Password</Label>
171:                     <div className="relative">
172:                       <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
173:                       <Input
174:                         id="signin-password"
175:                         type="password"
176:                         placeholder="Your password"
177:                         className="pl-10"
178:                         value={signInForm.password}
179:                         onChange={(e) => setSignInForm(prev => ({ ...prev, password: e.target.value }))}
180:                         required
181:                       />
182:                     </div>
183:                   </div>
184: 
185:                   <Button type="submit" className="w-full" disabled={loading}>
186:                     {loading ? "Signing In..." : "Sign In"}
187:                   </Button>
188:                 </form>
189:               </TabsContent>
190: 
191:               <TabsContent value="signup">
192:                 <form onSubmit={handleSignUp} className="space-y-4">
193:                   <div className="space-y-2">
194:                     <Label htmlFor="signup-name">Display Name</Label>
195:                     <div className="relative">
196:                       <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
197:                       <Input
198:                         id="signup-name"
199:                         type="text"
200:                         placeholder="What should we call you?"
201:                         className="pl-10"
202:                         value={signUpForm.displayName}
203:                         onChange={(e) => setSignUpForm(prev => ({ ...prev, displayName: e.target.value }))}
204:                       />
205:                     </div>
206:                   </div>
207: 
208:                   <div className="space-y-2">
209:                     <Label htmlFor="signup-email">Email</Label>
210:                     <div className="relative">
211:                       <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
212:                       <Input
213:                         id="signup-email"
214:                         type="email"
215:                         placeholder="your@email.com"
216:                         className="pl-10"
217:                         value={signUpForm.email}
218:                         onChange={(e) => setSignUpForm(prev => ({ ...prev, email: e.target.value }))}
219:                         required
220:                       />
221:                     </div>
222:                   </div>
223:                   
224:                   <div className="space-y-2">
225:                     <Label htmlFor="signup-password">Password</Label>
226:                     <div className="relative">
227:                       <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
228:                       <Input
229:                         id="signup-password"
230:                         type="password"
231:                         placeholder="Choose a password (6+ characters)"
232:                         className="pl-10"
233:                         value={signUpForm.password}
234:                         onChange={(e) => setSignUpForm(prev => ({ ...prev, password: e.target.value }))}
235:                         required
236:                       />
237:                     </div>
238:                   </div>
239: 
240:                   <div className="space-y-2">
241:                     <Label htmlFor="signup-confirm">Confirm Password</Label>
242:                     <div className="relative">
243:                       <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
244:                       <Input
245:                         id="signup-confirm"
246:                         type="password"
247:                         placeholder="Confirm your password"
248:                         className="pl-10"
249:                         value={signUpForm.confirmPassword}
250:                         onChange={(e) => setSignUpForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
251:                         required
252:                       />
253:                     </div>
254:                   </div>
255: 
256:                   <Button type="submit" className="w-full" disabled={loading}>
257:                     {loading ? "Creating Account..." : "Create Account"}
258:                   </Button>
259:                 </form>
260:               </TabsContent>
261:             </Tabs>
262:           </CardContent>
263:         </Card>
264: 
265:         <p className="text-center text-xs text-muted-foreground mt-6">
266:           By continuing, you agree to learn authentic recipes from our Mamas
267:         </p>
268:       </div>
269:     </div>
270:   );
271: }
````

## File: src/pages/Cook.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { useParams, useNavigate } from 'react-router-dom';
  3: import { ArrowLeft, Volume2, ChevronLeft, ChevronRight, Upload, X, Settings, ChefHat } from 'lucide-react';
  4: import { Button } from '@/components/ui/button';
  5: import { VoiceStatusIndicator } from '@/components/VoiceStatusIndicator';
  6: import { CookingTimer } from '@/components/CookingTimer';
  7: import { ConversationInterface } from '@/components/ConversationInterface';
  8: import { PreCookingChat } from '@/components/PreCookingChat';
  9: import { EnhancedVoiceInterface } from '@/components/EnhancedVoiceInterface';
 10: import { getRecipeWithMama, recipes } from '@/data/recipes';
 11: import { getMamaById } from '@/data/mamas';
 12: import { useVoice } from '@/hooks/useVoice';
 13: import { useConversation } from '@/hooks/useConversation';
 14: import { useConversationMemory } from '@/hooks/useConversationMemory';
 15: 
 16: const Cook = () => {
 17:   const { recipeId } = useParams();
 18:   const navigate = useNavigate();
 19:   const [conversationPhase, setConversationPhase] = useState<'pre-cooking' | 'cooking'>('pre-cooking');
 20:   const [currentStep, setCurrentStep] = useState(1);
 21:   const [voiceStatus, setVoiceStatus] = useState<'speaking' | 'listening' | 'processing' | 'idle'>('idle');
 22:   const [timerExpanded, setTimerExpanded] = useState(false);
 23:   const [timerCompleted, setTimerCompleted] = useState(false);
 24: 
 25:   const { speak, isPlaying, config } = useVoice();
 26:   const conversation = useConversation();
 27: 
 28:   // Find the recipe with mama info
 29:   const recipeData = recipeId ? getRecipeWithMama(recipeId) : null;
 30:   
 31:   // Initialize conversation memory
 32:   const conversationMemory = recipeData ? useConversationMemory(recipeData.recipe, recipeData.mama) : null;
 33:   
 34:   // Store current recipe in localStorage when entering cooking mode
 35:   useEffect(() => {
 36:     if (recipeId && recipeData) {
 37:       localStorage.setItem('lastCookingRecipe', recipeId);
 38:     }
 39:   }, [recipeId, recipeData]);
 40:   
 41:   // If no recipe ID provided, show recipe selection
 42:   if (!recipeId) {
 43:     return (
 44:       <div className="min-h-[calc(100vh-8rem)] p-6">
 45:         <div className="text-center mb-8">
 46:           <ChefHat size={64} className="mx-auto mb-4 text-orange-500" />
 47:           <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
 48:             Choose a Recipe to Cook
 49:           </h1>
 50:           <p className="text-lg text-muted-foreground">
 51:             Select from your collection to start cooking
 52:           </p>
 53:         </div>
 54: 
 55:         <div className="grid gap-4 max-w-2xl mx-auto">
 56:           {recipes.map((recipe) => {
 57:             const mama = getMamaById(recipe.mamaId);
 58:             return (
 59:               <div
 60:                 key={recipe.id}
 61:                 onClick={() => navigate(`/cook/${recipe.id}`)}
 62:                 className="bg-card rounded-xl p-4 border border-border hover:border-orange-500 transition-colors cursor-pointer group"
 63:               >
 64:                 <div className="flex items-center gap-4">
 65:                   <img
 66:                     src={recipe.image}
 67:                     alt={recipe.title}
 68:                     className="w-16 h-16 rounded-lg object-cover"
 69:                   />
 70:                   <div className="flex-1">
 71:                     <h3 className="font-heading font-bold text-foreground group-hover:text-orange-500 transition-colors">
 72:                       {recipe.title}
 73:                     </h3>
 74:                     <p className="text-sm text-muted-foreground">
 75:                       with {mama?.name} {mama?.emoji} • {recipe.cookingTime}
 76:                     </p>
 77:                   </div>
 78:                   <ChevronRight className="text-muted-foreground group-hover:text-orange-500 transition-colors" />
 79:                 </div>
 80:               </div>
 81:             );
 82:           })}
 83:         </div>
 84:       </div>
 85:     );
 86:   }
 87:   
 88:   if (!recipeData) {
 89:     return <div>Recipe not found</div>;
 90:   }
 91:   
 92:   const { recipe, mama } = recipeData;
 93:   const totalSteps = recipe.instructions.length;
 94: 
 95:   // Keep screen awake in cooking mode
 96:   useEffect(() => {
 97:     let wakeLock: any = null;
 98: 
 99:     if (conversationPhase === 'cooking' && 'wakeLock' in navigator) {
100:       navigator.wakeLock.request('screen').then((lock) => {
101:         wakeLock = lock;
102:       }).catch(() => {
103:         // Wake lock failed, but continue anyway
104:       });
105:     }
106: 
107:     return () => {
108:       if (wakeLock) {
109:         wakeLock.release();
110:       }
111:     };
112:   }, [conversationPhase]);
113: 
114:   const handleStartCooking = () => {
115:     setConversationPhase('cooking');
116:     conversationMemory?.startCookingPhase(currentStep);
117:   };
118: 
119:   if (conversationPhase === 'pre-cooking') {
120:     // Phase 1: Pre-Cooking Chat Interface
121:     return (
122:       <div className="min-h-[calc(100vh-8rem)]">
123:         <PreCookingChat
124:           recipe={recipe}
125:           mama={mama}
126:           onStartCooking={handleStartCooking}
127:         />
128:       </div>
129:     );
130:   }
131: 
132:   // Page 2: Full Cooking Interface
133:   const currentInstruction = recipe.instructions[currentStep - 1];
134:   const currentStepTimer = recipe.stepTimers?.[currentStep - 1];
135: 
136:   const handleTimerComplete = () => {
137:     setTimerCompleted(true);
138:     // Could add notification sound here
139:   };
140: 
141:   const handleStartConversation = async () => {
142:     if (!recipe || !mama) return;
143:     
144:     const stepText = recipe.instructions[currentStep - 1];
145:     await conversation.startConversation(
146:       mama.voiceId, 
147:       stepText,
148:       handleVoiceCommand
149:     );
150:   };
151: 
152:   const handleVoiceCommand = (command: string) => {
153:     switch (command.toLowerCase()) {
154:       case 'next':
155:         if (currentStep < totalSteps) {
156:           conversationMemory?.markStepComplete(currentStep);
157:           setCurrentStep(currentStep + 1);
158:           setTimerCompleted(false);
159:         }
160:         break;
161:       case 'back':
162:       case 'previous':
163:         if (currentStep > 1) {
164:           setCurrentStep(currentStep - 1);
165:           setTimerCompleted(false);
166:         }
167:         break;
168:       case 'repeat':
169:         if (recipe && mama) {
170:           speak(recipe.instructions[currentStep - 1], mama.id.toString());
171:         }
172:         break;
173:       case 'help':
174:         conversationMemory?.markStepStruggling(currentStep);
175:         break;
176:       default:
177:         conversationMemory?.addUserQuestion(command);
178:         console.log('Unknown voice command:', command);
179:     }
180:   };
181: 
182:   const handleInterrupt = () => {
183:     conversationMemory?.handleInterruption();
184:     conversation.stopConversation();
185:   };
186: 
187:   return (
188:     <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-orange-50/20 to-background">
189:       {/* Header with Exit */}
190:       <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur-sm sticky top-16 z-40">
191:         <Button
192:           variant="ghost"
193:           onClick={() => navigate('/')}
194:           className="text-red-600 hover:text-red-700 hover:bg-red-50 text-lg"
195:         >
196:           <X size={20} className="mr-2" />
197:           Exit Cooking
198:         </Button>
199:         
200:         <Button variant="ghost" size="sm">
201:           <Settings size={20} />
202:         </Button>
203:       </div>
204: 
205:       {/* Progress Bar */}
206:       <div className="p-4 bg-background/50">
207:         <div className="flex items-center justify-between mb-2">
208:           <span className="text-lg font-medium text-foreground">Step {currentStep} of {totalSteps}</span>
209:           <span className="text-sm text-muted-foreground">~{Math.ceil(totalSteps * 3 - currentStep * 3)} min left</span>
210:         </div>
211:         <div className="w-full bg-muted rounded-full h-3">
212:           <div 
213:             className="bg-orange-500 h-3 rounded-full transition-all duration-300"
214:             style={{ width: `${(currentStep / totalSteps) * 100}%` }}
215:           />
216:         </div>
217:       </div>
218: 
219:       {/* Main Instruction Card */}
220:       <div className="p-4">
221:         <div className="bg-card rounded-2xl p-6 shadow-lg border border-border w-full max-w-md mx-auto mb-6">
222:           <h2 className="text-2xl font-heading font-bold text-foreground mb-4 leading-tight">
223:             {currentInstruction}
224:           </h2>
225:           
226:           {/* Timer suggestion for current step */}
227:           {currentStepTimer && (
228:             <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-3 mb-4">
229:               <p className="text-orange-700 dark:text-orange-300 font-medium text-lg">
230:                 ⏰ This step takes {currentStepTimer.display}
231:               </p>
232:               <p className="text-orange-600 dark:text-orange-400 text-sm mt-1">
233:                 {currentStepTimer.description}
234:               </p>
235:             </div>
236:           )}
237: 
238:           {/* Timer completion notification */}
239:           {timerCompleted && (
240:             <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 mb-4">
241:               <p className="text-green-700 dark:text-green-300 font-medium text-lg">
242:                 ✅ Timer finished! Ready for the next step?
243:               </p>
244:             </div>
245:           )}
246:         </div>
247: 
248:         {/* Mama's Tips */}
249:         {recipe.voiceTips && recipe.voiceTips.length > 0 && currentStep >= Math.ceil(totalSteps / 2) && (
250:             <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-4 mx-4 mb-6 border-l-4 border-yellow-400">
251:             <div className="flex items-start gap-3">
252:               <div className="text-2xl">{mama?.emoji}</div>
253:               <div>
254:                 <h3 className="font-handwritten text-lg text-yellow-800 dark:text-yellow-200 mb-1">
255:                   Tip from {mama?.name}
256:                 </h3>
257:                 <p className="font-handwritten text-yellow-700 dark:text-yellow-300 text-lg leading-relaxed">
258:                   "{recipe.voiceTips[(currentStep - Math.ceil(totalSteps / 2)) % recipe.voiceTips.length]}"
259:                 </p>
260:               </div>
261:             </div>
262:           </div>
263:         )}
264:       </div>
265: 
266:         {/* Enhanced Voice Interface */}
267:         <div className="px-4 mb-6">
268:           <EnhancedVoiceInterface
269:             mama={mama}
270:             isConnected={conversation.isConnected}
271:             isSpeaking={isPlaying}
272:             isListening={conversation.isConnected && !isPlaying}
273:             currentTranscript={conversation.currentTranscript}
274:             partialTranscript={conversation.partialTranscript}
275:             error={conversation.error}
276:             currentStep={currentStep}
277:             totalSteps={totalSteps}
278:             onStartConversation={handleStartConversation}
279:             onStopConversation={conversation.stopConversation}
280:             onInterrupt={handleInterrupt}
281:           />
282:         </div>
283: 
284:         {/* Voice Status Indicator */}
285:         <VoiceStatusIndicator className="justify-center" />
286: 
287:       {/* Controls */}
288:       <div className="px-4 mb-6">
289:         <div className="flex items-center justify-center gap-4">
290:           <Button
291:             onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
292:             disabled={currentStep === 1}
293:             variant="outline"
294:             className="text-lg py-6 px-8 min-h-[56px]"
295:           >
296:             <ChevronLeft size={24} className="mr-2" />
297:             Previous
298:           </Button>
299: 
300:           <Button
301:             onClick={() => setVoiceStatus(voiceStatus === 'idle' ? 'speaking' : 'idle')}
302:             className="bg-orange-500 text-white hover:bg-orange-600 text-lg py-6 px-8 min-h-[56px] rounded-xl"
303:           >
304:             <Volume2 size={24} className="mr-2" />
305:             Repeat
306:           </Button>
307: 
308:           <Button
309:             onClick={() => {
310:               setCurrentStep(Math.min(totalSteps, currentStep + 1));
311:               setTimerCompleted(false);
312:             }}
313:             disabled={currentStep === totalSteps}
314:             variant="outline"
315:             className="text-lg py-6 px-8 min-h-[56px]"
316:           >
317:             Next
318:             <ChevronRight size={24} className="ml-2" />
319:           </Button>
320:         </div>
321:       </div>
322: 
323:       {/* Bottom Section */}
324:       <div className="px-4 pb-6">
325:         <Button
326:           className="w-full bg-orange-500 text-white hover:bg-orange-600 text-xl py-6 rounded-2xl font-heading font-bold mb-4 min-h-[64px]"
327:         >
328:           <Upload size={24} className="mr-3" />
329:           Show {mama?.name} your progress
330:         </Button>
331:         
332:         <p className="text-center text-sm text-muted-foreground font-handwritten">
333:           Upload a photo if you're stuck on a step or want to show {mama?.name} how it looks!
334:         </p>
335:       </div>
336: 
337:       {/* Floating Timer */}
338:       <CookingTimer 
339:         isExpanded={timerExpanded}
340:         onToggle={() => setTimerExpanded(!timerExpanded)}
341:         suggestedTimer={currentStepTimer}
342:         onTimerComplete={handleTimerComplete}
343:       />
344:     </div>
345:   );
346: };
347: 
348: export default Cook;
````

## File: src/pages/Index.tsx
````typescript
 1: // Update this page (the content is just a fallback if you fail to update the page)
 2: 
 3: const Index = () => {
 4:   return (
 5:     <div className="min-h-screen flex items-center justify-center bg-background">
 6:       <div className="text-center">
 7:         <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
 8:         <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
 9:       </div>
10:     </div>
11:   );
12: };
13: 
14: export default Index;
````

## File: src/pages/Kitchen.tsx
````typescript
  1: import React from 'react';
  2: import { BookmarkCheck, Clock, Star, Plus, LogIn } from 'lucide-react';
  3: import { useAuth } from '@/contexts/AuthContext';
  4: import { useNavigate } from 'react-router-dom';
  5: import { Button } from '@/components/ui/button';
  6: import ShoppingListCard from '@/components/ShoppingListCard';
  7: 
  8: const Kitchen = () => {
  9:   const { user, signOut } = useAuth();
 10:   const navigate = useNavigate();
 11: 
 12:   if (!user) {
 13:     return (
 14:       <div className="text-center py-12">
 15:         <div className="bg-muted/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
 16:           <LogIn className="h-8 w-8 text-muted-foreground" />
 17:         </div>
 18:         <h3 className="text-lg font-heading font-semibold text-warm-brown mb-2">
 19:           Sign in to access your kitchen
 20:         </h3>
 21:         <p className="text-muted-foreground mb-4">
 22:           Save recipes, create shopping lists, and track your cooking journey
 23:         </p>
 24:         <Button onClick={() => navigate('/auth')}>
 25:           Sign In
 26:         </Button>
 27:       </div>
 28:     );
 29:   }
 30: 
 31:   return (
 32:     <div className="space-y-6">
 33:       {/* User Info & Logout */}
 34:       <div className="flex justify-between items-center">
 35:         <div>
 36:           <h2 className="text-xl font-heading font-bold text-warm-brown">
 37:             Welcome back!
 38:           </h2>
 39:           <p className="text-muted-foreground text-sm">{user.email}</p>
 40:         </div>
 41:         <Button variant="outline" size="sm" onClick={signOut}>
 42:           Sign Out
 43:         </Button>
 44:       </div>
 45: 
 46:       {/* Shopping List Card - First Priority */}
 47:       <ShoppingListCard />
 48: 
 49:       <div className="grid gap-4">
 50:         <div className="bg-card rounded-2xl p-6 shadow-paper border border-border">
 51:           <div className="flex items-center gap-3 mb-4">
 52:             <BookmarkCheck className="text-primary" size={24} />
 53:             <h3 className="font-heading font-bold text-lg text-foreground">
 54:               Saved Recipes
 55:             </h3>
 56:           </div>
 57:           <p className="text-muted-foreground mb-4">
 58:             You have 12 recipes saved from your favorite mamas
 59:           </p>
 60:           <button className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors min-h-[48px]">
 61:             View All Saved
 62:           </button>
 63:         </div>
 64: 
 65:         <div className="bg-card rounded-2xl p-6 shadow-paper border border-border">
 66:           <div className="flex items-center gap-3 mb-4">
 67:             <Clock className="text-mexican" size={24} />
 68:             <h3 className="font-heading font-bold text-lg text-foreground">
 69:               Cooking History
 70:             </h3>
 71:           </div>
 72:           <p className="text-muted-foreground mb-4">
 73:             Track your cooking journey and favorite dishes
 74:           </p>
 75:           <button className="w-full bg-mexican text-white font-heading font-semibold py-3 rounded-xl hover:bg-mexican/90 transition-colors min-h-[48px]">
 76:             View History
 77:           </button>
 78:         </div>
 79: 
 80:         <div className="bg-card rounded-2xl p-6 shadow-paper border border-border">
 81:           <div className="flex items-center gap-3 mb-4">
 82:             <Star className="text-thai" size={24} />
 83:             <h3 className="font-heading font-bold text-lg text-foreground">
 84:               My Reviews
 85:             </h3>
 86:           </div>
 87:           <p className="text-muted-foreground mb-4">
 88:             Share your cooking experiences with the community
 89:           </p>
 90:           <button className="w-full bg-thai text-white font-heading font-semibold py-3 rounded-xl hover:bg-thai/90 transition-colors min-h-[48px]">
 91:             Write Review
 92:           </button>
 93:         </div>
 94: 
 95:         <div className="bg-card rounded-2xl p-6 shadow-paper border border-border">
 96:           <div className="flex items-center gap-3 mb-4">
 97:             <Plus className="text-primary" size={24} />
 98:             <h3 className="font-heading font-bold text-lg text-foreground">
 99:               Family Recipe
100:             </h3>
101:           </div>
102:           <p className="text-muted-foreground mb-4 font-handwritten">
103:             Share your own family recipes with the MAMIA community
104:           </p>
105:           <button className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors min-h-[48px]">
106:             Add Recipe
107:           </button>
108:         </div>
109:       </div>
110:     </div>
111:   );
112: };
113: 
114: export default Kitchen;
````

## File: src/pages/MamaCookbook.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { useParams, useNavigate } from 'react-router-dom';
  3: import { ArrowLeft } from 'lucide-react';
  4: import { getRecipesByMama, recipes } from '@/data/recipes';
  5: import RecipeCard from '@/components/RecipeCard';
  6: import LoadingSkeleton from '@/components/LoadingSkeleton';
  7: 
  8: const mamasData = [
  9:   { id: 1, name: "Nonna Lucia", emoji: "🍷", cuisine: "Italian" },
 10:   { id: 2, name: "Abuela Rosa", emoji: "🌶️", cuisine: "Mexican" },
 11:   { id: 3, name: "Mae Malai", emoji: "🌿", cuisine: "Thai" }
 12: ];
 13: 
 14: const MamaCookbook = () => {
 15:   const { mamaId } = useParams();
 16:   const navigate = useNavigate();
 17:   const [loading, setLoading] = useState(true);
 18:   const [mamaRecipes, setMamaRecipes] = useState<any[]>([]);
 19:   
 20:   const mama = mamasData.find(m => m.id === parseInt(mamaId || '1'));
 21: 
 22:   useEffect(() => {
 23:     // Simulate loading
 24:     setLoading(true);
 25:     setTimeout(() => {
 26:       const recipes = getRecipesByMama(parseInt(mamaId || '1'));
 27:       setMamaRecipes(recipes);
 28:       setLoading(false);
 29:     }, 800);
 30:   }, [mamaId]);
 31: 
 32:   if (!mama) {
 33:     return (
 34:       <div className="h-full flex items-center justify-center">
 35:         <div className="text-center">
 36:           <h2 className="font-heading text-2xl text-foreground mb-2">Mama not found</h2>
 37:           <p className="text-muted-foreground mb-4">The cooking guide you're looking for doesn't exist.</p>
 38:           <button 
 39:             onClick={() => navigate('/mamas')}
 40:             className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-heading font-bold"
 41:           >
 42:             Back to Mamas
 43:           </button>
 44:         </div>
 45:       </div>
 46:     );
 47:   }
 48: 
 49:   return (
 50:     <div className="h-full flex flex-col">
 51:       {/* Header */}
 52:       <div className="flex items-center gap-4 mb-6">
 53:         <button 
 54:           onClick={() => navigate('/mamas')}
 55:           className="p-2 hover:bg-muted rounded-lg transition-colors"
 56:         >
 57:           <ArrowLeft size={24} className="text-foreground" />
 58:         </button>
 59:         
 60:         <div className="flex items-center gap-3">
 61:           <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
 62:             <span className="text-2xl">{mama.emoji}</span>
 63:           </div>
 64:           <div>
 65:             <h1 className="font-heading font-bold text-2xl text-foreground">
 66:               {mama.name}'s Cookbook
 67:             </h1>
 68:             <p className="text-muted-foreground font-handwritten">
 69:               Authentic {mama.cuisine} recipes from the heart
 70:             </p>
 71:           </div>
 72:         </div>
 73:       </div>
 74: 
 75:       {/* Content */}
 76:       <div className="flex-1">
 77:         {loading ? (
 78:           <div className="grid grid-cols-2 gap-4">
 79:             <LoadingSkeleton variant="polaroid" count={6} />
 80:           </div>
 81:         ) : mamaRecipes.length === 0 ? (
 82:           <div className="h-full flex items-center justify-center">
 83:             <div className="text-center max-w-sm">
 84:               <span className="text-6xl mb-4 block">{mama.emoji}</span>
 85:               <h3 className="font-heading font-bold text-xl text-foreground mb-2">
 86:                 No recipes yet
 87:               </h3>
 88:               <p className="text-muted-foreground font-handwritten">
 89:                 {mama.name} is still preparing her collection. Check back soon for delicious {mama.cuisine.toLowerCase()} recipes!
 90:               </p>
 91:             </div>
 92:           </div>
 93:         ) : (
 94:           <>
 95:             <div className="flex items-center justify-between mb-4">
 96:               <p className="text-muted-foreground">
 97:                 {mamaRecipes.length} recipe{mamaRecipes.length !== 1 ? 's' : ''} available
 98:               </p>
 99:               <div className="text-sm text-muted-foreground">
100:                 Swipe for more recipes
101:               </div>
102:             </div>
103:             
104:             <div className="grid grid-cols-2 gap-4">
105:               {mamaRecipes.map((recipe) => (
106:                 <RecipeCard
107:                   key={recipe.id}
108:                   recipe={recipe}
109:                   variant="polaroid"
110:                   onClick={() => navigate(`/recipe/${recipe.id}`)}
111:                 />
112:               ))}
113:             </div>
114:           </>
115:         )}
116:       </div>
117:     </div>
118:   );
119: };
120: 
121: export default MamaCookbook;
````

## File: src/pages/Mamas.tsx
````typescript
 1: import React, { useState } from 'react';
 2: import { useNavigate } from 'react-router-dom';
 3: import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
 4: import { Wine, Flower2, Leaf, ChefHat, User, LogIn } from 'lucide-react';
 5: import { mamas } from '@/data/mamas';
 6: import { useAuth } from '@/contexts/AuthContext';
 7: import { Button } from '@/components/ui/button';
 8: 
 9: // Using mamas from centralized data with character card images
10: const mamasDisplay = mamas.map(mama => ({
11:   id: mama.id,
12:   name: mama.name,
13:   cuisine: `${mama.country} Cuisine`,
14:   background: mama.themeColor,
15:   signatureDish: mama.signatureDish,
16:   description: `Authentic ${mama.country} cooking with traditional family recipes.`,
17:   philosophy: mama.philosophy,
18:   greeting: mama.emoji === '🍷' ? "Ciao, bambino!" : 
19:            mama.emoji === '🌶️' ? "¡Hola, mi nieto!" : "สวัสดีค่ะ ลูกรัก",
20:   greetingTranslation: mama.emoji === '🍷' ? "Hello, little one!" :
21:                       mama.emoji === '🌶️' ? "Hello, my grandchild!" : "Hello, my dear child",
22:   action: mama.emoji === '🍷' ? "stirring risotto" :
23:           mama.emoji === '🌶️' ? "grinding spices" : "pounding curry paste",
24:   watermark: mama.emoji === '🍷' ? Wine : mama.emoji === '🌶️' ? Flower2 : Leaf,
25:   accent: mama.emoji,
26:   characterImage: mama.id === 1 ? "/lovable-uploads/f93a6daa-6445-4c83-aaf2-c75c2b4824bc.png" :
27:                  mama.id === 2 ? "/lovable-uploads/95d2de88-6de2-4a87-b5e5-deda3096c455.png" :
28:                  "/lovable-uploads/35c616ae-06a9-49cb-b3e3-287c89fb124d.png"
29: }));
30: 
31: const Mamas = () => {
32:   const navigate = useNavigate();
33:   const { user, signOut } = useAuth();
34:   const [api, setApi] = useState<CarouselApi>();
35:   const [current, setCurrent] = useState(0);
36: 
37:   React.useEffect(() => {
38:     if (!api) return;
39: 
40:     setCurrent(api.selectedScrollSnap());
41: 
42:     api.on("select", () => {
43:       setCurrent(api.selectedScrollSnap());
44:     });
45:   }, [api]);
46: 
47:   return (
48:     <div className="h-full flex flex-col pb-4">
49:       <div className="flex-1 relative">
50:         <Carousel
51:           setApi={setApi}
52:           className="w-full h-full"
53:           opts={{
54:             align: "center",
55:             loop: true,
56:           }}
57:         >
58:           <CarouselContent className="h-[55vh] max-h-[480px] min-h-[400px]">
59:             {mamasDisplay.map((mama) => {
60:               const WatermarkIcon = mama.watermark;
61:               return (
62:                 <CarouselItem key={mama.id} className="basis-[85%] pl-4">
63:                   <div 
64:                     onClick={() => navigate(`/mama/${mama.id}`)}
65:                     className="relative h-full rounded-3xl overflow-hidden shadow-warm cursor-pointer transition-transform duration-200 hover:scale-105 bg-cream"
66:                   >
67:                     {/* Character Card Image */}
68:                     <img 
69:                       src={mama.characterImage} 
70:                       alt={`${mama.name} character card`}
71:                       className="w-full h-full object-contain"
72:                     />
73:                   </div>
74:                 </CarouselItem>
75:               );
76:             })}
77:           </CarouselContent>
78:         </Carousel>
79: 
80:         {/* Progress dots */}
81:         <div className="flex justify-center gap-2 mt-4">
82:           {mamasDisplay.map((_, index) => (
83:             <button
84:               key={index}
85:               className={`w-2 h-2 rounded-full transition-all duration-200 ${
86:                 index === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'
87:               }`}
88:               onClick={() => api?.scrollTo(index)}
89:             />
90:           ))}
91:         </div>
92:       </div>
93:     </div>
94:   );
95: };
96: 
97: export default Mamas;
````

## File: src/pages/NotFound.tsx
````typescript
 1: import { useLocation } from "react-router-dom";
 2: import { useEffect } from "react";
 3: 
 4: const NotFound = () => {
 5:   const location = useLocation();
 6: 
 7:   useEffect(() => {
 8:     console.error(
 9:       "404 Error: User attempted to access non-existent route:",
10:       location.pathname
11:     );
12:   }, [location.pathname]);
13: 
14:   return (
15:     <div className="min-h-screen flex items-center justify-center bg-gray-100">
16:       <div className="text-center">
17:         <h1 className="text-4xl font-bold mb-4">404</h1>
18:         <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
19:         <a href="/" className="text-blue-500 hover:text-blue-700 underline">
20:           Return to Home
21:         </a>
22:       </div>
23:     </div>
24:   );
25: };
26: 
27: export default NotFound;
````

## File: src/pages/RecipeDetail.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { useParams, useNavigate } from 'react-router-dom';
  3: import { ArrowLeft, Clock, Users, ChefHat, Plus, Minus, ShoppingCart, Timer } from 'lucide-react';
  4: import { recipes } from '@/data/recipes';
  5: import { getMamaById } from '@/data/mamas';
  6: import { Button } from '@/components/ui/button';
  7: import { useAuth } from '@/contexts/AuthContext';
  8: import { useShoppingList } from '@/contexts/ShoppingListContext';
  9: import ShoppingListModal from '@/components/ShoppingListModal';
 10: import { QuantityCalculationService } from '@/services/quantityCalculationService';
 11: import { IngredientAnimation } from '@/components/CelebrationEffects';
 12: 
 13: const RecipeDetail = () => {
 14:   const { recipeId } = useParams();
 15:   const navigate = useNavigate();
 16:   const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
 17:   const [servings, setServings] = useState(4);
 18:   const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
 19:   const [isSticky, setIsSticky] = useState(false);
 20:   const [showShoppingModal, setShowShoppingModal] = useState(false);
 21:   const [ingredientAnimations, setIngredientAnimations] = useState<Array<{
 22:     ingredient: string;
 23:     category: string;
 24:     position: { x: number; y: number };
 25:     id: string;
 26:   }>>([]);
 27:   const { user } = useAuth();
 28:   const { addIngredientsToShoppingList } = useShoppingList();
 29: 
 30:   const recipe = recipes.find(r => r.id === recipeId);
 31:   const mama = recipe ? getMamaById(recipe.mamaId) : null;
 32: 
 33:   useEffect(() => {
 34:     if (recipe) {
 35:       setServings(recipe.servings);
 36:     }
 37:   }, [recipe]);
 38: 
 39:   useEffect(() => {
 40:     const handleScroll = () => {
 41:       setIsSticky(window.scrollY > 300);
 42:     };
 43: 
 44:     window.addEventListener('scroll', handleScroll);
 45:     return () => window.removeEventListener('scroll', handleScroll);
 46:   }, []);
 47: 
 48:   if (!recipe) {
 49:     return (
 50:       <div className="h-full flex items-center justify-center">
 51:         <div className="text-center">
 52:           <h2 className="font-heading text-2xl text-foreground mb-2">Recipe not found</h2>
 53:           <p className="text-muted-foreground mb-4">The recipe you're looking for doesn't exist.</p>
 54:           <button 
 55:             onClick={() => navigate('/recipes')}
 56:             className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-heading font-bold"
 57:           >
 58:             Back to Recipes
 59:           </button>
 60:         </div>
 61:       </div>
 62:     );
 63:   }
 64: 
 65:   const adjustedIngredients = recipe.ingredients.map(ingredient => {
 66:     // Check if this is a section header (ends with colon)
 67:     const isSectionHeader = ingredient.trim().endsWith(':');
 68:     if (isSectionHeader) {
 69:       return ingredient; // Don't adjust section headers
 70:     }
 71:     
 72:     // Enhanced quantity calculation using QuantityCalculationService
 73:     try {
 74:       const parsed = QuantityCalculationService.parseQuantity(ingredient);
 75:       const scaled = QuantityCalculationService.scaleQuantity(parsed, servings / recipe.servings);
 76:       const formatted = QuantityCalculationService.formatQuantity(scaled);
 77:       
 78:       // Replace the quantity part while preserving the ingredient name
 79:       const quantityPattern = /^([^a-zA-Z]*)/;
 80:       const match = ingredient.match(quantityPattern);
 81:       if (match && match[1].trim()) {
 82:         return ingredient.replace(match[1], formatted + ' ');
 83:       }
 84:       return formatted + ' ' + ingredient.replace(/^[^a-zA-Z]*/, '');
 85:     } catch (error) {
 86:       // Fallback to simple calculation if parsing fails
 87:       const ratio = servings / recipe.servings;
 88:       return ingredient.replace(/\d+/g, (match) => {
 89:         const num = parseInt(match);
 90:         return Math.round(num * ratio).toString();
 91:       });
 92:     }
 93:   });
 94: 
 95:   const toggleIngredient = (index: number) => {
 96:     // Check if this is a section header (ends with colon)
 97:     const ingredient = adjustedIngredients[index];
 98:     const isSectionHeader = ingredient.trim().endsWith(':');
 99:     if (isSectionHeader) {
100:       return; // Don't toggle section headers
101:     }
102:     
103:     const newChecked = new Set(checkedIngredients);
104:     if (newChecked.has(index)) {
105:       newChecked.delete(index);
106:     } else {
107:       newChecked.add(index);
108:     }
109:     setCheckedIngredients(newChecked);
110:   };
111: 
112:   const handleStartCooking = () => {
113:     navigate(`/cook/${recipe.id}`);
114:   };
115: 
116:   const getUncheckedIngredients = () => {
117:     return adjustedIngredients.filter((ingredient, index) => {
118:       const isSectionHeader = ingredient.trim().endsWith(':');
119:       return !isSectionHeader && !checkedIngredients.has(index);
120:     }).map(ingredient => {
121:       try {
122:         const parsed = QuantityCalculationService.parseQuantity(ingredient);
123:         return {
124:           name: ingredient.replace(/^[^a-zA-Z]*/, '').trim(),
125:           quantity: QuantityCalculationService.formatQuantity(parsed)
126:         };
127:       } catch (error) {
128:         return {
129:           name: ingredient,
130:           quantity: undefined
131:         };
132:       }
133:     });
134:   };
135: 
136:   const handleAddToShoppingList = async () => {
137:     if (!user) {
138:       navigate('/auth');
139:       return;
140:     }
141: 
142:     const uncheckedIngredients = getUncheckedIngredients();
143:     if (uncheckedIngredients.length === 0) return;
144: 
145:     // Create ingredient animations
146:     const animations = uncheckedIngredients.slice(0, 8).map((ingredient, index) => ({
147:       ingredient: ingredient.name,
148:       category: 'pantry', // Default category, would be determined by categorization service
149:       position: { 
150:         x: Math.random() * 200 - 100,
151:         y: Math.random() * 200 - 100
152:       },
153:       id: `anim-${Date.now()}-${index}`
154:     }));
155:     
156:     setIngredientAnimations(animations);
157: 
158:     await addIngredientsToShoppingList({
159:       ingredients: uncheckedIngredients,
160:       recipeId: recipeId || '',
161:       recipeName: recipe?.title || 'Unknown Recipe'
162:     });
163: 
164:     setShowShoppingModal(true);
165:   };
166: 
167:   const renderInstructions = (instruction: string, index: number) => {
168:     // Check if this is a section header (ends with colon)
169:     const isSectionHeader = instruction.trim().endsWith(':');
170:     
171:     // Use structured timer data if available, otherwise fall back to regex
172:     const stepTimer = recipe.stepTimers?.[index];
173:     const timerRegex = /(\d+\s*(?:minutes?|mins?|hours?|hrs?))/gi;
174:     const timerMatch = !stepTimer ? instruction.match(timerRegex) : null;
175:     
176:     if (isSectionHeader) {
177:       return (
178:         <div key={index} className="mb-4">
179:           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg px-4 py-2">
180:             <div className="w-2 h-2 bg-primary rounded-full"></div>
181:             <span className="font-heading font-bold text-primary text-sm uppercase tracking-wider">
182:               {instruction}
183:             </span>
184:           </div>
185:         </div>
186:       );
187:     }
188:     
189:     return (
190:       <div key={index} className="flex gap-4 mb-6">
191:         <div className="relative">
192:           <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 mt-1">
193:             {index + 1}
194:           </div>
195:           {(stepTimer || timerMatch) && (
196:             <div className="absolute -right-2 top-10 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md whitespace-nowrap">
197:               <Timer size={12} className="inline mr-1" />
198:               {stepTimer?.display || timerMatch?.[0]}
199:             </div>
200:           )}
201:         </div>
202:         <div className="flex-1">
203:           <p className="text-foreground leading-relaxed">
204:             {instruction}
205:           </p>
206:         </div>
207:       </div>
208:     );
209:   };
210: 
211:   return (
212:     <div className="min-h-screen bg-background">
213:       {/* Hero Section */}
214:       <div className="relative h-64 overflow-hidden">
215:         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
216:         <img 
217:           src={recipe.image} 
218:           alt={recipe.title}
219:           className="w-full h-full object-cover"
220:         />
221:         
222:         {/* Header Controls */}
223:         <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
224:           <button 
225:             onClick={() => navigate(-1)}
226:             className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
227:           >
228:             <ArrowLeft size={20} />
229:           </button>
230:         </div>
231: 
232:         {/* Recipe Info Overlay */}
233:         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
234:           <div className="flex items-center gap-2 mb-2">
235:             <span className="text-2xl">{recipe.mamaEmoji}</span>
236:             <span className="text-sm opacity-90">by {recipe.mamaName}</span>
237:           </div>
238:           <h1 className="font-heading font-bold text-3xl mb-4">{recipe.title}</h1>
239:           
240:           {/* Stats */}
241:           <div className="flex gap-3">
242:             <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-1">
243:               <Clock size={16} />
244:               <span className="text-sm font-medium">{recipe.cookingTime}</span>
245:             </div>
246:             <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-1">
247:               <Users size={16} />
248:               <span className="text-sm font-medium">{recipe.servings} servings</span>
249:             </div>
250:             <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-1">
251:               <ChefHat size={16} />
252:               <span className="text-sm font-medium">{recipe.difficulty}</span>
253:             </div>
254:           </div>
255:         </div>
256:       </div>
257: 
258:       {/* Description */}
259:       <div className="p-6 bg-white">
260:         <p className="text-muted-foreground leading-relaxed font-handwritten text-lg">
261:           {recipe.description}
262:         </p>
263:       </div>
264: 
265:       {/* Start Cooking Button */}
266:       <div className="px-6 pb-6 bg-white">
267:         <button
268:           onClick={handleStartCooking}
269:           className={`w-full ${mama?.country === 'Italy' ? 'bg-gradient-to-r from-italian-marble to-italian-marble-warm' : 
270:                      mama?.country === 'Mexico' ? 'bg-gradient-to-r from-mexican-tile to-mexican-tile-warm' :
271:                      'bg-gradient-to-r from-thai-silk to-thai-silk-warm'} 
272:                    text-white font-heading font-bold py-4 px-6 rounded-xl shadow-warm hover:shadow-elegant transition-all duration-300 
273:                    flex items-center justify-center gap-3`}
274:         >
275:           <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
276:             <span className="text-xl">{recipe.mamaEmoji}</span>
277:           </div>
278:           <span className="text-lg">Let's cook together with {recipe.mamaName.split(' ')[0]}!</span>
279:         </button>
280:       </div>
281: 
282:       {/* Sticky Tab Navigation */}
283:       <div className={`sticky top-0 z-10 bg-white border-b transition-all duration-200 ${
284:         isSticky ? 'shadow-md' : ''
285:       }`}>
286:         <div className="p-4">
287:           <div className="bg-muted rounded-lg p-1 flex">
288:             <button
289:               onClick={() => setActiveTab('ingredients')}
290:               className={`flex-1 py-2 px-4 rounded-md font-heading font-bold text-sm transition-all duration-200 ${
291:                 activeTab === 'ingredients'
292:                   ? 'bg-white text-foreground shadow-sm'
293:                   : 'text-muted-foreground hover:text-foreground'
294:               }`}
295:             >
296:               Ingredients
297:             </button>
298:             <button
299:               onClick={() => setActiveTab('instructions')}
300:               className={`flex-1 py-2 px-4 rounded-md font-heading font-bold text-sm transition-all duration-200 ${
301:                 activeTab === 'instructions'
302:                   ? 'bg-white text-foreground shadow-sm'
303:                   : 'text-muted-foreground hover:text-foreground'
304:               }`}
305:             >
306:               Instructions
307:             </button>
308:           </div>
309:         </div>
310:       </div>
311: 
312:       {/* Content */}
313:       <div className="px-6 py-4">
314:         {activeTab === 'ingredients' && (
315:           <div className="space-y-6">
316:             {/* Serving Adjuster */}
317:             <div className="bg-white rounded-xl p-4 shadow-warm">
318:               <div className="flex items-center justify-between">
319:                 <span className="font-heading font-bold text-foreground">Servings</span>
320:                 <div className="flex items-center gap-3">
321:                   <button
322:                     onClick={() => setServings(Math.max(1, servings - 1))}
323:                     className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
324:                   >
325:                     <Minus size={16} />
326:                   </button>
327:                   <span className="font-heading font-bold text-xl w-8 text-center">{servings}</span>
328:                   <button
329:                     onClick={() => setServings(servings + 1)}
330:                     className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
331:                   >
332:                     <Plus size={16} />
333:                   </button>
334:                 </div>
335:               </div>
336:             </div>
337: 
338:             {/* Ingredients List */}
339:             <div className="space-y-3">
340:               {adjustedIngredients.map((ingredient, index) => {
341:                 const isSectionHeader = ingredient.trim().endsWith(':');
342:                 
343:                 if (isSectionHeader) {
344:                   return (
345:                     <div key={index} className="mt-6 mb-3">
346:                       <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg px-4 py-2">
347:                         <div className="w-2 h-2 bg-primary rounded-full"></div>
348:                         <span className="font-heading font-bold text-primary text-sm uppercase tracking-wider">
349:                           {ingredient}
350:                         </span>
351:                       </div>
352:                     </div>
353:                   );
354:                 }
355:                 
356:                 return (
357:                   <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
358:                     <button
359:                       onClick={() => toggleIngredient(index)}
360:                       className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
361:                         checkedIngredients.has(index)
362:                           ? 'bg-primary border-primary text-primary-foreground'
363:                           : 'border-muted-foreground/30 hover:border-primary'
364:                       }`}
365:                     >
366:                       {checkedIngredients.has(index) && (
367:                         <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
368:                           <polyline points="20,6 9,17 4,12"></polyline>
369:                         </svg>
370:                       )}
371:                     </button>
372:                     <span className={`flex-1 transition-all duration-200 ${
373:                       checkedIngredients.has(index) 
374:                         ? 'text-muted-foreground line-through' 
375:                         : 'text-foreground'
376:                     }`}>
377:                       {ingredient}
378:                     </span>
379:                   </div>
380:                 );
381:               })}
382:             </div>
383: 
384:             {/* Add to Shopping List */}
385:             <Button 
386:               onClick={handleAddToShoppingList}
387:               disabled={getUncheckedIngredients().length === 0}
388:               className="w-full font-heading font-bold py-3 h-12 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
389:               variant={getUncheckedIngredients().length > 0 ? "default" : "outline"}
390:             >
391:               <ShoppingCart size={20} />
392:               {!user 
393:                 ? 'Sign In to Add to Shopping List'
394:                 : getUncheckedIngredients().length === 0 
395:                   ? 'All Ingredients Checked'
396:                   : `Add ${getUncheckedIngredients().length} Items to Shopping List`
397:               }
398:             </Button>
399:           </div>
400:         )}
401: 
402:         {activeTab === 'instructions' && (
403:           <div className="space-y-6">
404:             {/* Display Tips */}
405:             {recipe.displayTips && recipe.displayTips.length > 0 && (
406:               <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-primary rounded-lg p-4">
407:                 <h3 className="font-handwritten text-lg text-primary font-bold mb-2 flex items-center gap-2">
408:                   <span className="text-xl">{recipe.mamaEmoji}</span>
409:                   {recipe.mamaName}'s Essential Tips
410:                 </h3>
411:                 <ul className="space-y-2 font-handwritten text-foreground">
412:                   {recipe.displayTips.map((tip, index) => (
413:                     <li key={index} className="flex items-start gap-2">
414:                       <span className="text-primary mt-1">•</span>
415:                       <span>{tip}</span>
416:                     </li>
417:                   ))}
418:                 </ul>
419:               </div>
420:             )}
421: 
422:             {/* Instructions */}
423:             <div className="space-y-6">
424:               {recipe.instructions.map((instruction, index) => 
425:                 renderInstructions(instruction, index)
426:               )}
427:             </div>
428:           </div>
429:         )}
430:       </div>
431: 
432:       {/* Ingredient Animations */}
433:       {ingredientAnimations.map((animation) => (
434:         <IngredientAnimation
435:           key={animation.id}
436:           ingredient={animation.ingredient}
437:           category={animation.category}
438:           startPosition={animation.position}
439:           onComplete={() => {
440:             setIngredientAnimations(prev => 
441:               prev.filter(a => a.id !== animation.id)
442:             );
443:           }}
444:         />
445:       ))}
446: 
447:       {/* Shopping List Modal */}
448:       <ShoppingListModal
449:         isOpen={showShoppingModal}
450:         onClose={() => setShowShoppingModal(false)}
451:         addedCount={getUncheckedIngredients().length}
452:         recipeName={recipe?.title || 'Unknown Recipe'}
453:         ingredientPositions={ingredientAnimations.map(a => a.position)}
454:       />
455:     </div>
456:   );
457: };
458: 
459: export default RecipeDetail;
````

## File: src/pages/Recipes.tsx
````typescript
  1: import React, { useState, useEffect } from 'react';
  2: import { useNavigate } from 'react-router-dom';
  3: import { Search, Heart, Clock, Star, Crown } from 'lucide-react';
  4: import { Input } from '@/components/ui/input';
  5: import { Badge } from '@/components/ui/badge';
  6: import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
  7: import { getRecipeOfWeek, getFeaturedRecipes, getRecipesByCategory, Recipe } from '@/data/recipes';
  8: import RecipeCardStack from '@/components/RecipeCardStack';
  9: import LoadingSkeleton from '@/components/LoadingSkeleton';
 10: import CulturalEmptyState from '@/components/CulturalEmptyState';
 11: import { CelebrationEffects } from '@/components/CelebrationEffects';
 12: import PageTransition from '@/components/PageTransition';
 13: import { useToast } from '@/hooks/use-toast';
 14: 
 15: const Recipes = () => {
 16:   const navigate = useNavigate();
 17:   const { toast } = useToast();
 18:   const [loading, setLoading] = useState(true);
 19:   const [searchQuery, setSearchQuery] = useState('');
 20:   const [selectedCategory, setSelectedCategory] = useState('All');
 21:   const [stackRecipes, setStackRecipes] = useState<Recipe[]>([]);
 22:   const [likedRecipes, setLikedRecipes] = useState<Set<string>>(new Set());
 23:   const [celebrationTrigger, setCelebrationTrigger] = useState(false);
 24:   const [celebrationType, setCelebrationType] = useState<'heart' | 'confetti' | 'cultural'>('heart');
 25:   const [culturalTheme, setCulturalTheme] = useState<'italian' | 'mexican' | 'thai' | undefined>(undefined);
 26: 
 27:   const categories = [
 28:     { id: 'All', label: 'All', emoji: '✨' },
 29:     { id: 'Meat', label: 'Meat', emoji: '🥩' },
 30:     { id: 'Fish', label: 'Fish', emoji: '🐟' },
 31:     { id: 'Vegetarian', label: 'Vegetarian', emoji: '🥬' },
 32:     { id: 'Quick', label: 'Quick', emoji: '⚡' },
 33:     { id: 'Weekend', label: 'Weekend', emoji: '🏠' },
 34:   ];
 35: 
 36:   useEffect(() => {
 37:     // Simulate loading time
 38:     setLoading(true);
 39:     setTimeout(() => {
 40:       setLoading(false);
 41:     }, 1000);
 42:   }, []);
 43: 
 44:   useEffect(() => {
 45:     let recipesToShow: Recipe[] = [];
 46:     
 47:     if (searchQuery) {
 48:       // Independent search - search all recipes
 49:       const allRecipes = [...getFeaturedRecipes(), ...getRecipesByCategory('Meat'), ...getRecipesByCategory('Fish'), ...getRecipesByCategory('Rice/Pasta'), ...getRecipesByCategory('Dessert')];
 50:       const uniqueRecipes = allRecipes.filter((recipe, index, self) => 
 51:         index === self.findIndex(r => r.id === recipe.id)
 52:       );
 53:       
 54:       recipesToShow = uniqueRecipes.filter(recipe =>
 55:         recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 56:         recipe.mamaName.toLowerCase().includes(searchQuery.toLowerCase()) ||
 57:         recipe.ingredients.some(ingredient => 
 58:           ingredient.toLowerCase().includes(searchQuery.toLowerCase())
 59:         )
 60:       );
 61:     } else {
 62:       // Category browsing with 3D stack
 63:       if (selectedCategory === 'All') {
 64:         recipesToShow = getFeaturedRecipes();
 65:       } else {
 66:         recipesToShow = getRecipesByCategory(selectedCategory);
 67:       }
 68:     }
 69:     
 70:     setStackRecipes(recipesToShow);
 71:   }, [searchQuery, selectedCategory]);
 72: 
 73:   const handleLikeRecipe = (recipe: Recipe) => {
 74:     const newLiked = new Set(likedRecipes);
 75:     newLiked.add(recipe.id);
 76:     setLikedRecipes(newLiked);
 77:     
 78:     // Determine cultural theme and trigger celebration
 79:     const cultural = recipe.mamaId === 1 ? 'italian' : recipe.mamaId === 2 ? 'mexican' : recipe.mamaId === 3 ? 'thai' : undefined;
 80:     setCulturalTheme(cultural);
 81:     setCelebrationType('heart');
 82:     setCelebrationTrigger(true);
 83:     
 84:     // Reset celebration trigger
 85:     setTimeout(() => setCelebrationTrigger(false), 100);
 86:     
 87:     toast({
 88:       title: "Added to favorites! ❤️",
 89:       description: `${recipe.title} has been saved to your favorites.`,
 90:     });
 91:   };
 92: 
 93:   const handleDislikeRecipe = (recipe: Recipe) => {
 94:     toast({
 95:       title: "Not interested",
 96:       description: `We'll show you fewer recipes like ${recipe.title}.`,
 97:     });
 98:   };
 99: 
100:   const handleRecipeClick = (recipe: Recipe) => {
101:     navigate(`/recipe/${recipe.id}`);
102:   };
103: 
104:   const recipeOfWeek = getRecipeOfWeek();
105: 
106:   if (loading) {
107:     return (
108:       <PageTransition>
109:         <div className="h-full flex flex-col">
110:           <LoadingSkeleton variant="hero" />
111:           <div className="flex-1 flex items-center justify-center">
112:             <LoadingSkeleton 
113:               variant="cooking" 
114:               cultural={selectedCategory === 'All' ? undefined : 
115:                 selectedCategory === 'Meat' ? 'italian' :
116:                 selectedCategory === 'Fish' ? 'thai' :
117:                 selectedCategory === 'Vegetarian' ? 'mexican' : undefined
118:               }
119:             />
120:           </div>
121:         </div>
122:       </PageTransition>
123:     );
124:   }
125: 
126:   return (
127:     <PageTransition>
128:       <div className="h-full flex flex-col">
129:         {/* Compact Recipe of the Week Hero */}
130:         {recipeOfWeek && !searchQuery && (
131:           <div className="mb-6 relative overflow-hidden rounded-xl bg-slate-900 shadow-xl">
132:             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90"></div>
133:             <div className="p-3 text-white relative">
134:               <div className="absolute top-3 right-3 opacity-20">
135:                 <Star size={40} className="text-white" />
136:               </div>
137:               <div className="relative">
138:                 <div className="flex items-center gap-2 mb-1">
139:                   <Crown size={16} className="text-yellow-300" />
140:                   <span className="text-xs font-bold tracking-wider opacity-90">RECIPE OF THE WEEK</span>
141:                 </div>
142:                 <h3 className="font-heading font-bold text-lg mb-1">{recipeOfWeek.title}</h3>
143:                 <p className="text-xs opacity-90 mb-2">by {recipeOfWeek.mamaName}</p>
144:                 <div className="flex items-center gap-3 text-xs">
145:                   <div className="flex items-center gap-1">
146:                     <Clock size={14} />
147:                     <span>{recipeOfWeek.cookingTime}</span>
148:                   </div>
149:                   <div className="flex items-center gap-1">
150:                     <Heart size={14} />
151:                     <span>{recipeOfWeek.difficulty}</span>
152:                   </div>
153:                 </div>
154:                 <button 
155:                   onClick={() => handleRecipeClick(recipeOfWeek)}
156:                   className="mt-3 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-heading font-medium hover:bg-white/30 transition-all duration-200"
157:                 >
158:                   Cook This Week's Special
159:                 </button>
160:               </div>
161:             </div>
162:           </div>
163:         )}
164: 
165:         {/* Search Bar */}
166:         <div className="relative mb-4">
167:           <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
168:           <Input
169:             placeholder="Search recipes, ingredients, or cooking guides..."
170:             value={searchQuery}
171:             onChange={(e) => setSearchQuery(e.target.value)}
172:             className="pl-10 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary rounded-xl"
173:           />
174:         </div>
175: 
176:         {/* Category Carousel - Only show when not searching */}
177:         {!searchQuery && (
178:           <div className="mb-6 relative">
179:             <Carousel
180:               opts={{
181:                 align: "start",
182:                 dragFree: true,
183:                 loop: true,
184:               }}
185:               className="w-full"
186:             >
187:               <CarouselContent className="-ml-2 md:-ml-4">
188:                 {categories.map((category) => (
189:                   <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-auto">
190:                     <div
191:                       className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 hover-scale min-w-[120px] text-center ${
192:                         selectedCategory === category.id
193:                           ? 'bg-primary text-primary-foreground shadow-lg scale-105'
194:                           : 'bg-card hover:bg-muted border border-border'
195:                       }`}
196:                       onClick={() => setSelectedCategory(category.id)}
197:                     >
198:                       <div className="text-2xl mb-2">{category.emoji}</div>
199:                       <div className="font-medium text-sm">{category.label}</div>
200:                     </div>
201:                   </CarouselItem>
202:                 ))}
203:               </CarouselContent>
204:               <CarouselPrevious className="hidden md:flex" />
205:               <CarouselNext className="hidden md:flex" />
206:             </Carousel>
207:           </div>
208:         )}
209: 
210:         {/* Main Content */}
211:         <div className="flex-1">
212:           {searchQuery ? (
213:             /* Search Results Mode */
214:             <div>
215:               <div className="mb-4">
216:                 <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">
217:                   Search Results
218:                 </h3>
219:                 <p className="text-slate-600">
220:                   {stackRecipes.length} result{stackRecipes.length !== 1 ? 's' : ''} for "{searchQuery}"
221:                 </p>
222:               </div>
223:               
224:               {stackRecipes.length > 0 ? (
225:                 <div className="grid gap-4">
226:                   {stackRecipes.map((recipe) => (
227:                     <div 
228:                       key={recipe.id}
229:                       onClick={() => handleRecipeClick(recipe)}
230:                       className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 border border-slate-100"
231:                     >
232:                       <h4 className="font-heading font-bold text-lg text-slate-800 mb-1">{recipe.title}</h4>
233:                       <p className="text-slate-600 text-sm mb-2">by {recipe.mamaName}</p>
234:                       <div className="flex items-center gap-4 text-sm text-slate-500">
235:                         <div className="flex items-center gap-1">
236:                           <Clock size={14} />
237:                           <span>{recipe.cookingTime}</span>
238:                         </div>
239:                         <div className="flex items-center gap-1">
240:                           <Heart size={14} />
241:                           <span>{recipe.difficulty}</span>
242:                         </div>
243:                       </div>
244:                     </div>
245:                   ))}
246:                 </div>
247:               ) : (
248:                 <CulturalEmptyState 
249:                   message="No recipes found matching your search. Try different keywords!"
250:                   className="py-12"
251:                 />
252:               )}
253:             </div>
254:           ) : (
255:             /* Category Browsing Mode - 3D Card Stack */
256:             <div>
257:               {stackRecipes.length > 0 ? (
258:                 <div>
259:                    <h3 className="font-heading font-bold text-xl text-slate-800 mb-4 flex items-center gap-2">
260:                      <span className="text-xl">
261:                        {categories.find(cat => cat.id === selectedCategory)?.emoji || '✨'}
262:                      </span>
263:                      {selectedCategory === 'All' ? 'Featured' : selectedCategory} Recipes
264:                      <span className="text-sm text-slate-500 font-normal">
265:                        ({stackRecipes.length})
266:                      </span>
267:                    </h3>
268:                   <RecipeCardStack
269:                     recipes={stackRecipes}
270:                     onLike={handleLikeRecipe}
271:                     onDislike={handleDislikeRecipe}
272:                     onTap={handleRecipeClick}
273:                   />
274:                 </div>
275:               ) : (
276:                 <CulturalEmptyState 
277:                   cultural={
278:                     selectedCategory === 'Meat' ? 'italian' :
279:                     selectedCategory === 'Fish' ? 'thai' :
280:                     selectedCategory === 'Vegetarian' ? 'mexican' : undefined
281:                   }
282:                   message={
283:                     selectedCategory === 'All' 
284:                       ? "No recipes available right now."
285:                       : `No ${selectedCategory.toLowerCase()} recipes available yet.`
286:                   }
287:                 />
288:               )}
289:             </div>
290:           )}
291:         </div>
292: 
293:         {/* Celebration Effects */}
294:         <CelebrationEffects
295:           type={celebrationType}
296:           cultural={culturalTheme}
297:           trigger={celebrationTrigger}
298:           onComplete={() => setCelebrationTrigger(false)}
299:         />
300:       </div>
301:     </PageTransition>
302:   );
303: };
304: 
305: export default Recipes;
````

## File: src/pages/ShoppingList.tsx
````typescript
  1: import { useState, useEffect } from 'react';
  2: import { motion, AnimatePresence } from 'framer-motion';
  3: import { ArrowLeft, Plus, Trash2, Copy, Sparkles } from 'lucide-react';
  4: import { 
  5:   DndContext, 
  6:   closestCenter,
  7:   KeyboardSensor,
  8:   PointerSensor,
  9:   useSensor,
 10:   useSensors,
 11:   DragEndEvent
 12: } from '@dnd-kit/core';
 13: import {
 14:   arrayMove,
 15:   SortableContext,
 16:   sortableKeyboardCoordinates,
 17:   verticalListSortingStrategy,
 18: } from '@dnd-kit/sortable';
 19: import { Button } from '@/components/ui/button';
 20: import { Input } from '@/components/ui/input';
 21: import { Label } from '@/components/ui/label';
 22: import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
 23: import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
 24: import { Badge } from '@/components/ui/badge';
 25: import { Progress } from '@/components/ui/progress';
 26: import { useShoppingList } from '@/contexts/ShoppingListContext';
 27: import { useNavigate } from 'react-router-dom';
 28: import { useToast } from '@/hooks/use-toast';
 29: import { Tables } from '@/integrations/supabase/types';
 30: import DraggableShoppingItem from '@/components/DraggableShoppingItem';
 31: import FloatingCartButton from '@/components/FloatingCartButton';
 32: 
 33: export default function ShoppingList() {
 34:   const navigate = useNavigate();
 35:   const { toast } = useToast();
 36:   const { shoppingListItems, toggleItemChecked, addManualItem, deleteItem, currentList } = useShoppingList();
 37:   const [isAddingItem, setIsAddingItem] = useState(false);
 38:   const [newItem, setNewItem] = useState({ name: '', quantity: '', category: 'Other' });
 39:   const [sortedItems, setSortedItems] = useState(shoppingListItems);
 40:   const [draggedItem, setDraggedItem] = useState<string | null>(null);
 41: 
 42:   // Sensors for drag and drop
 43:   const sensors = useSensors(
 44:     useSensor(PointerSensor, {
 45:       activationConstraint: {
 46:         distance: 8,
 47:       },
 48:     }),
 49:     useSensor(KeyboardSensor, {
 50:       coordinateGetter: sortableKeyboardCoordinates,
 51:     })
 52:   );
 53: 
 54:   // Update sorted items when shopping list changes
 55:   useEffect(() => {
 56:     setSortedItems(shoppingListItems);
 57:   }, [shoppingListItems]);
 58: 
 59:   // Group items by category using sorted items
 60:   const groupedItems = sortedItems.reduce((groups, item) => {
 61:     const category = item.category || 'Other';
 62:     if (!groups[category]) {
 63:       groups[category] = [];
 64:     }
 65:     groups[category].push(item);
 66:     return groups;
 67:   }, {} as Record<string, typeof sortedItems>);
 68: 
 69:   const categories = Object.keys(groupedItems).sort();
 70:   const totalItems = sortedItems.length;
 71:   const checkedItems = sortedItems.filter(item => item.checked).length;
 72: 
 73:   const handleAddItem = async () => {
 74:     if (!newItem.name.trim()) return;
 75:     
 76:     await addManualItem(newItem.name, newItem.quantity || undefined, newItem.category);
 77:     setNewItem({ name: '', quantity: '', category: 'Other' });
 78:     setIsAddingItem(false);
 79:   };
 80: 
 81:   const handleDragStart = (event: any) => {
 82:     setDraggedItem(event.active.id);
 83:   };
 84: 
 85:   const handleDragEnd = (event: DragEndEvent) => {
 86:     const { active, over } = event;
 87:     setDraggedItem(null);
 88: 
 89:     if (!over || active.id === over.id) {
 90:       return;
 91:     }
 92: 
 93:     const oldIndex = sortedItems.findIndex(item => item.id === active.id);
 94:     const newIndex = sortedItems.findIndex(item => item.id === over.id);
 95: 
 96:     if (oldIndex !== -1 && newIndex !== -1) {
 97:       const newItems = arrayMove(sortedItems, oldIndex, newIndex);
 98:       setSortedItems(newItems);
 99:       
100:       toast({
101:         title: "Item Reordered",
102:         description: "Shopping list order updated!",
103:       });
104:     }
105:   };
106: 
107:   const handleShare = async () => {
108:     const uncheckedItems = sortedItems.filter(item => !item.checked);
109:     const shareText = `Shopping List - ${currentList?.name || 'My List'}\n\n` + 
110:       uncheckedItems.map(item => `• ${item.ingredient_name}${item.quantity ? ` (${item.quantity})` : ''}`).join('\n');
111:     
112:     try {
113:       await navigator.clipboard.writeText(shareText);
114:       toast({
115:         title: "✨ Copied to Clipboard",
116:         description: "Shopping list copied! You can now share it with friends and family.",
117:       });
118:     } catch (error) {
119:       toast({
120:         title: "Error",
121:         description: "Failed to copy shopping list",
122:         variant: "destructive"
123:       });
124:     }
125:   };
126: 
127:   return (
128:     <div className="container mx-auto px-4 py-8 max-w-2xl relative">
129:       {/* Enhanced Header */}
130:       <motion.div 
131:         className="flex items-center gap-4 mb-6"
132:         initial={{ opacity: 0, y: -20 }}
133:         animate={{ opacity: 1, y: 0 }}
134:         transition={{ duration: 0.3 }}
135:       >
136:         <Button
137:           variant="ghost"
138:           size="sm"
139:           onClick={() => navigate('/kitchen')}
140:           className="text-warm-brown hover:text-primary hover:scale-105 transition-transform"
141:         >
142:           <ArrowLeft className="h-4 w-4 mr-2" />
143:           Back to Kitchen
144:         </Button>
145:       </motion.div>
146: 
147:       <motion.div 
148:         className="flex items-center justify-between mb-6"
149:         initial={{ opacity: 0, y: 20 }}
150:         animate={{ opacity: 1, y: 0 }}
151:         transition={{ delay: 0.1 }}
152:       >
153:         <div>
154:           <motion.h1 
155:             className="text-2xl font-heading font-bold text-warm-brown flex items-center gap-2"
156:             initial={{ opacity: 0, x: -20 }}
157:             animate={{ opacity: 1, x: 0 }}
158:             transition={{ delay: 0.2 }}
159:           >
160:             {currentList?.name || 'Shopping List'}
161:             {totalItems > 0 && (
162:               <motion.span
163:                 initial={{ scale: 0 }}
164:                 animate={{ scale: 1 }}
165:                 transition={{ delay: 0.4, type: "spring" }}
166:               >
167:                 🛒
168:               </motion.span>
169:             )}
170:           </motion.h1>
171:           <motion.p 
172:             className="text-muted-foreground"
173:             initial={{ opacity: 0 }}
174:             animate={{ opacity: 1 }}
175:             transition={{ delay: 0.3 }}
176:           >
177:             {totalItems} items • {checkedItems} completed
178:             {draggedItem && (
179:               <span className="ml-2 text-primary animate-pulse">• Reordering...</span>
180:             )}
181:           </motion.p>
182:         </div>
183:         
184:         <motion.div 
185:           className="flex gap-2"
186:           initial={{ opacity: 0, x: 20 }}
187:           animate={{ opacity: 1, x: 0 }}
188:           transition={{ delay: 0.3 }}
189:         >
190:           <Button 
191:             variant="outline" 
192:             size="sm" 
193:             onClick={handleShare}
194:             className="hover:scale-105 transition-transform"
195:           >
196:             <Copy className="h-4 w-4 mr-2" />
197:             Share
198:           </Button>
199:           
200:           <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
201:             <DialogTrigger asChild>
202:               <Button 
203:                 size="sm"
204:                 className="hover:scale-105 transition-transform bg-gradient-to-r from-primary to-primary/80"
205:               >
206:                 <Plus className="h-4 w-4 mr-2" />
207:                 Add Item
208:               </Button>
209:             </DialogTrigger>
210:             <DialogContent>
211:               <DialogHeader>
212:                 <DialogTitle>Add New Item</DialogTitle>
213:               </DialogHeader>
214:               <div className="space-y-4">
215:                 <div>
216:                   <Label htmlFor="item-name">Item Name</Label>
217:                   <Input
218:                     id="item-name"
219:                     placeholder="e.g., Tomatoes"
220:                     value={newItem.name}
221:                     onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
222:                   />
223:                 </div>
224:                 <div>
225:                   <Label htmlFor="item-quantity">Quantity (optional)</Label>
226:                   <Input
227:                     id="item-quantity"
228:                     placeholder="e.g., 2 lbs, 1 cup"
229:                     value={newItem.quantity}
230:                     onChange={(e) => setNewItem(prev => ({ ...prev, quantity: e.target.value }))}
231:                   />
232:                 </div>
233:                 <div>
234:                   <Label htmlFor="item-category">Category</Label>
235:                   <Input
236:                     id="item-category"
237:                     placeholder="e.g., Produce, Dairy"
238:                     value={newItem.category}
239:                     onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value }))}
240:                   />
241:                 </div>
242:                 <div className="flex gap-2">
243:                   <Button onClick={handleAddItem} className="flex-1">Add Item</Button>
244:                   <Button variant="outline" onClick={() => setIsAddingItem(false)}>Cancel</Button>
245:                 </div>
246:               </div>
247:             </DialogContent>
248:           </Dialog>
249:         </motion.div>
250:       </motion.div>
251: 
252:       {/* Enhanced Progress Bar */}
253:       {totalItems > 0 && (
254:         <motion.div 
255:           className="mb-6"
256:           initial={{ opacity: 0, y: 20 }}
257:           animate={{ opacity: 1, y: 0 }}
258:           transition={{ delay: 0.4 }}
259:         >
260:           <div className="flex justify-between text-sm mb-2">
261:             <span className="text-muted-foreground flex items-center gap-2">
262:               Progress
263:               {checkedItems === totalItems && (
264:                 <motion.span
265:                   initial={{ scale: 0 }}
266:                   animate={{ scale: 1 }}
267:                   className="text-green-600"
268:                 >
269:                   <Sparkles className="w-4 h-4" />
270:                 </motion.span>
271:               )}
272:             </span>
273:             <motion.span 
274:               className="text-warm-brown font-medium"
275:               key={checkedItems}
276:               initial={{ scale: 1.2 }}
277:               animate={{ scale: 1 }}
278:               transition={{ type: "spring", stiffness: 300 }}
279:             >
280:               {Math.round((checkedItems / totalItems) * 100)}%
281:             </motion.span>
282:           </div>
283:           <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
284:             <motion.div 
285:               className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full"
286:               initial={{ width: 0 }}
287:               animate={{ width: `${(checkedItems / totalItems) * 100}%` }}
288:               transition={{ duration: 0.8, ease: "easeOut" }}
289:             />
290:             {checkedItems === totalItems && totalItems > 0 && (
291:               <motion.div
292:                 className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full"
293:                 initial={{ opacity: 0 }}
294:                 animate={{ opacity: [0, 1, 0] }}
295:                 transition={{ duration: 2, repeat: 3 }}
296:               />
297:             )}
298:           </div>
299:         </motion.div>
300:       )}
301: 
302:       {/* Enhanced Shopping List Items with Drag & Drop */}
303:       <AnimatePresence>
304:         {totalItems === 0 ? (
305:           <motion.div
306:             initial={{ opacity: 0, y: 20 }}
307:             animate={{ opacity: 1, y: 0 }}
308:             exit={{ opacity: 0, y: -20 }}
309:           >
310:             <Card className="text-center py-12">
311:               <CardContent>
312:                 <motion.div 
313:                   className="bg-muted/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
314:                   animate={{ 
315:                     scale: [1, 1.05, 1],
316:                     rotate: [0, -5, 5, 0]
317:                   }}
318:                   transition={{ 
319:                     duration: 2,
320:                     repeat: Infinity,
321:                     repeatDelay: 3
322:                   }}
323:                 >
324:                   <Plus className="h-8 w-8 text-muted-foreground" />
325:                 </motion.div>
326:                 <h3 className="text-lg font-heading font-semibold text-warm-brown mb-2">
327:                   Your shopping list is empty
328:                 </h3>
329:                 <p className="text-muted-foreground mb-4">
330:                   Add ingredients from recipes or create manual items
331:                 </p>
332:                 <Button 
333:                   onClick={() => setIsAddingItem(true)}
334:                   className="hover:scale-105 transition-transform"
335:                 >
336:                   <Plus className="h-4 w-4 mr-2" />
337:                   Add First Item
338:                 </Button>
339:               </CardContent>
340:             </Card>
341:           </motion.div>
342:         ) : (
343:           <DndContext 
344:             sensors={sensors}
345:             collisionDetection={closestCenter}
346:             onDragStart={handleDragStart}
347:             onDragEnd={handleDragEnd}
348:           >
349:             <motion.div 
350:               className="space-y-6"
351:               initial={{ opacity: 0 }}
352:               animate={{ opacity: 1 }}
353:               transition={{ delay: 0.5 }}
354:             >
355:               {categories.map(category => (
356:                 <motion.div
357:                   key={category}
358:                   initial={{ opacity: 0, y: 20 }}
359:                   animate={{ opacity: 1, y: 0 }}
360:                   transition={{ delay: 0.1 }}
361:                 >
362:                   <Card className="overflow-hidden">
363:                     <CardHeader className="pb-3">
364:                       <CardTitle className="text-lg text-warm-brown flex items-center gap-2">
365:                         {category}
366:                         <motion.div
367:                           key={groupedItems[category].length}
368:                           initial={{ scale: 1.3 }}
369:                           animate={{ scale: 1 }}
370:                           transition={{ type: "spring" }}
371:                         >
372:                           <Badge variant="outline" className="text-xs">
373:                             {groupedItems[category].length}
374:                           </Badge>
375:                         </motion.div>
376:                       </CardTitle>
377:                     </CardHeader>
378:                     <CardContent>
379:                       <SortableContext 
380:                         items={groupedItems[category].map(item => item.id)}
381:                         strategy={verticalListSortingStrategy}
382:                       >
383:                         <div className="space-y-2">
384:                           <AnimatePresence>
385:                             {groupedItems[category].map((item, index) => (
386:                               <motion.div
387:                                 key={item.id}
388:                                 initial={{ opacity: 0, y: 20 }}
389:                                 animate={{ opacity: 1, y: 0 }}
390:                                 exit={{ opacity: 0, x: -100 }}
391:                                 transition={{ delay: index * 0.05 }}
392:                                 layout
393:                               >
394:                                 <DraggableShoppingItem 
395:                                   item={item as Tables<'shopping_list_items'>}
396:                                   isDragging={draggedItem === item.id}
397:                                 />
398:                               </motion.div>
399:                             ))}
400:                           </AnimatePresence>
401:                         </div>
402:                       </SortableContext>
403:                     </CardContent>
404:                   </Card>
405:                 </motion.div>
406:               ))}
407:             </motion.div>
408:           </DndContext>
409:         )}
410:       </AnimatePresence>
411: 
412:       {/* Floating Cart Button */}
413:       <FloatingCartButton />
414:     </div>
415:   );
416: }
````

## File: src/services/categorizationService.ts
````typescript
  1: import { supabase } from "@/integrations/supabase/client";
  2: 
  3: export interface FoodCategory {
  4:   id: string;
  5:   name: string;
  6:   icon: string | null;
  7:   sort_order: number;
  8:   user_id: string | null;
  9: }
 10: 
 11: export interface IngredientAlias {
 12:   id: string;
 13:   canonical_name: string;
 14:   alias_name: string;
 15:   category_id: string | null;
 16: }
 17: 
 18: class CategorizationService {
 19:   private categories: FoodCategory[] = [];
 20:   private aliases: IngredientAlias[] = [];
 21:   private initialized = false;
 22: 
 23:   async initialize() {
 24:     if (this.initialized) return;
 25:     
 26:     try {
 27:       // Fetch categories
 28:       const { data: categories } = await supabase
 29:         .from('food_categories')
 30:         .select('*')
 31:         .order('sort_order');
 32:       
 33:       // Fetch aliases
 34:       const { data: aliases } = await supabase
 35:         .from('ingredient_aliases')
 36:         .select('*');
 37:       
 38:       this.categories = categories || [];
 39:       this.aliases = aliases || [];
 40:       this.initialized = true;
 41:     } catch (error) {
 42:       console.error('Failed to initialize categorization service:', error);
 43:     }
 44:   }
 45: 
 46:   async getCategories(): Promise<FoodCategory[]> {
 47:     await this.initialize();
 48:     return this.categories;
 49:   }
 50: 
 51:   async categorizeIngredient(ingredientName: string): Promise<FoodCategory | null> {
 52:     await this.initialize();
 53:     
 54:     const normalizedName = this.normalizeIngredientName(ingredientName);
 55:     
 56:     // First, check for exact alias match
 57:     const alias = this.aliases.find(a => 
 58:       a.alias_name.toLowerCase() === normalizedName ||
 59:       a.canonical_name.toLowerCase() === normalizedName
 60:     );
 61:     
 62:     if (alias && alias.category_id) {
 63:       const category = this.categories.find(c => c.id === alias.category_id);
 64:       if (category) return category;
 65:     }
 66:     
 67:     // Fallback to pattern matching
 68:     return this.categorizeByPattern(normalizedName);
 69:   }
 70: 
 71:   private normalizeIngredientName(name: string): string {
 72:     return name.toLowerCase()
 73:       .replace(/\b(fresh|dried|organic|raw|cooked|chopped|diced|sliced)\b/g, '')
 74:       .replace(/\d+/g, '')
 75:       .replace(/[^\w\s]/g, '')
 76:       .trim();
 77:   }
 78: 
 79:   private categorizeByPattern(normalizedName: string): FoodCategory | null {
 80:     const patterns = {
 81:       'Produce': [
 82:         'tomato', 'onion', 'garlic', 'carrot', 'celery', 'potato', 'lettuce',
 83:         'spinach', 'bell pepper', 'mushroom', 'cucumber', 'avocado', 'lemon',
 84:         'lime', 'apple', 'banana', 'orange', 'basil', 'parsley', 'cilantro'
 85:       ],
 86:       'Meat & Seafood': [
 87:         'chicken', 'beef', 'pork', 'turkey', 'fish', 'salmon', 'tuna',
 88:         'shrimp', 'lamb', 'bacon', 'ham', 'sausage', 'ground'
 89:       ],
 90:       'Dairy & Eggs': [
 91:         'milk', 'cheese', 'yogurt', 'butter', 'cream', 'eggs', 'cottage cheese',
 92:         'sour cream', 'mozzarella', 'cheddar', 'parmesan'
 93:       ],
 94:       'Pantry': [
 95:         'flour', 'sugar', 'salt', 'pepper', 'oil', 'vinegar', 'pasta',
 96:         'rice', 'beans', 'lentils', 'quinoa', 'breadcrumbs', 'vanilla',
 97:         'cinnamon', 'paprika', 'cumin', 'oregano', 'thyme', 'bay leaves'
 98:       ],
 99:       'Bakery': [
100:         'bread', 'bagel', 'muffin', 'croissant', 'baguette', 'tortilla', 'pita'
101:       ],
102:       'Beverages': [
103:         'juice', 'soda', 'water', 'tea', 'coffee', 'wine', 'beer', 'broth', 'stock'
104:       ],
105:       'Frozen': [
106:         'frozen', 'ice cream', 'popsicle'
107:       ]
108:     };
109: 
110:     for (const [categoryName, keywords] of Object.entries(patterns)) {
111:       if (keywords.some(keyword => normalizedName.includes(keyword))) {
112:         return this.categories.find(c => c.name === categoryName && !c.user_id) || null;
113:       }
114:     }
115: 
116:     // Default to "Other" category
117:     return this.categories.find(c => c.name === 'Other' && !c.user_id) || null;
118:   }
119: 
120:   async createCustomCategory(name: string, icon?: string): Promise<FoodCategory | null> {
121:     try {
122:       const { data: user } = await supabase.auth.getUser();
123:       if (!user.user) return null;
124: 
125:       const { data, error } = await supabase
126:         .from('food_categories')
127:         .insert({
128:           name,
129:           icon,
130:           user_id: user.user.id,
131:           sort_order: this.categories.length + 1
132:         })
133:         .select()
134:         .single();
135: 
136:       if (error) throw error;
137:       
138:       this.categories.push(data);
139:       return data;
140:     } catch (error) {
141:       console.error('Failed to create custom category:', error);
142:       return null;
143:     }
144:   }
145: 
146:   async getDefaultCategory(): Promise<FoodCategory | null> {
147:     await this.initialize();
148:     return this.categories.find(c => c.name === 'Other' && !c.user_id) || null;
149:   }
150: }
151: 
152: export const categorizationService = new CategorizationService();
````

## File: src/services/conversationalService.ts
````typescript
  1: import { VoiceService } from './voiceService';
  2: 
  3: // TypeScript declarations for Web Speech API
  4: declare global {
  5:   interface Window {
  6:     SpeechRecognition: any;
  7:     webkitSpeechRecognition: any;
  8:   }
  9: }
 10: 
 11: interface ConversationConfig {
 12:   voiceId: string;
 13:   mamaId: string;
 14:   onTranscript?: (text: string, isFinal: boolean) => void;
 15:   onCommand?: (command: string) => void;
 16:   onError?: (error: string) => void;
 17: }
 18: 
 19: const VOICE_COMMANDS = {
 20:   navigation: ["next", "back", "previous", "repeat"],
 21:   quantities: ["how much", "how many", "what amount"],
 22:   confirmation: ["yes", "no", "done", "finished"]
 23: };
 24: 
 25: export class ConversationalService {
 26:   private static instance: ConversationalService;
 27:   private recognition: any | null = null;
 28:   private config: ConversationConfig | null = null;
 29:   private isListening = false;
 30:   private voiceService = VoiceService.getInstance();
 31: 
 32:   static getInstance(): ConversationalService {
 33:     if (!ConversationalService.instance) {
 34:       ConversationalService.instance = new ConversationalService();
 35:     }
 36:     return ConversationalService.instance;
 37:   }
 38: 
 39:   private constructor() {}
 40: 
 41:   async startConversation(config: ConversationConfig, stepText: string): Promise<void> {
 42:     try {
 43:       this.config = config;
 44:       
 45:       // Check for Speech Recognition support
 46:       if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
 47:         throw new Error('Speech recognition not supported in this browser');
 48:       }
 49: 
 50:       // Initialize speech recognition
 51:       const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 52:       this.recognition = new SpeechRecognition();
 53:       
 54:       this.recognition.continuous = true;
 55:       this.recognition.interimResults = true;
 56:       this.recognition.lang = 'en-US';
 57: 
 58:       this.recognition.onstart = () => {
 59:         console.log('Speech recognition started');
 60:         this.isListening = true;
 61:       };
 62: 
 63:       this.recognition.onresult = (event) => {
 64:         let interimTranscript = '';
 65:         let finalTranscript = '';
 66: 
 67:         for (let i = event.resultIndex; i < event.results.length; i++) {
 68:           const transcript = event.results[i][0].transcript;
 69:           if (event.results[i].isFinal) {
 70:             finalTranscript += transcript;
 71:           } else {
 72:             interimTranscript += transcript;
 73:           }
 74:         }
 75: 
 76:         if (interimTranscript) {
 77:           this.config?.onTranscript?.(interimTranscript, false);
 78:         }
 79: 
 80:         if (finalTranscript) {
 81:           this.config?.onTranscript?.(finalTranscript, true);
 82:           this.detectVoiceCommand(finalTranscript.toLowerCase());
 83:           this.handleUserInput(finalTranscript);
 84:         }
 85:       };
 86: 
 87:       this.recognition.onerror = (event) => {
 88:         console.error('Speech recognition error:', event.error);
 89:         this.config?.onError?.(`Speech recognition error: ${event.error}`);
 90:       };
 91: 
 92:       this.recognition.onend = () => {
 93:         console.log('Speech recognition ended');
 94:         this.isListening = false;
 95:         // Auto-restart if we're still in conversation mode
 96:         if (this.config && this.recognition) {
 97:           setTimeout(() => {
 98:             if (this.recognition && this.config) {
 99:               this.recognition.start();
100:             }
101:           }, 100);
102:         }
103:       };
104: 
105:       // Start listening
106:       this.recognition.start();
107: 
108:       // Speak the initial step text
109:       await this.voiceService.speak(stepText, config.mamaId);
110: 
111:     } catch (error) {
112:       console.error('Failed to start conversation:', error);
113:       this.config?.onError?.('Failed to start conversation: ' + (error instanceof Error ? error.message : String(error)));
114:       throw error;
115:     }
116:   }
117: 
118:   async stopConversation(): Promise<void> {
119:     this.isListening = false;
120:     
121:     if (this.recognition) {
122:       this.recognition.stop();
123:       this.recognition = null;
124:     }
125:     
126:     this.voiceService.stopCurrentAudio();
127:     this.config = null;
128:   }
129: 
130:   private detectVoiceCommand(text: string): void {
131:     for (const [category, commands] of Object.entries(VOICE_COMMANDS)) {
132:       for (const command of commands) {
133:         if (text.includes(command)) {
134:           this.config?.onCommand?.(command);
135:           return;
136:         }
137:       }
138:     }
139:   }
140: 
141:   private async handleUserInput(text: string): Promise<void> {
142:     if (!this.config) return;
143: 
144:     console.log(`[ConversationalService] Handling user input: "${text}" for mama: ${this.config.mamaId}`);
145: 
146:     // Generate contextual response based on input
147:     const responses = this.generateMamaResponse(text, this.config.mamaId);
148:     
149:     if (responses.length > 0) {
150:       const randomResponse = responses[Math.floor(Math.random() * responses.length)];
151:       console.log(`[ConversationalService] Generated response: "${randomResponse}"`);
152:       await this.voiceService.speak(randomResponse, this.config.mamaId);
153:     }
154:   }
155: 
156:   private generateMamaResponse(input: string, mamaId: string): string[] {
157:     const lowerInput = input.toLowerCase();
158:     console.log(`[ConversationalService] Generating response for mama: ${mamaId}, input: ${lowerInput}`);
159:     
160:     // Convert numeric ID to mama voice ID if needed
161:     const resolvedMamaId = this.resolveMamaId(mamaId);
162:     console.log(`[ConversationalService] Resolved mama ID: ${resolvedMamaId}`);
163:     
164:     // Common cooking questions and responses
165:     if (lowerInput.includes('how') && (lowerInput.includes('long') || lowerInput.includes('time'))) {
166:       if (resolvedMamaId === 'nonna_lucia') {
167:         return [
168:           "Caro, trust your nose! When it smells perfect, it's ready.",
169:           "Cooking time depends on your stove, tesoro. Watch and taste!"
170:         ];
171:       } else if (resolvedMamaId === 'abuela_rosa') {
172:         return [
173:           "Mijo, cooking is not about the clock, it's about the love you put in!",
174:           "Watch the color change, that's how you know, corazón."
175:         ];
176:       } else {
177:         return [
178:           "In Thai cooking, we cook with our hearts, not just timers.",
179:           "Let your senses guide you, little one."
180:         ];
181:       }
182:     }
183: 
184:     if (lowerInput.includes('help') || lowerInput.includes('stuck') || lowerInput.includes('wrong')) {
185:       if (resolvedMamaId === 'nonna_lucia') {
186:         return [
187:           "Non ti preoccupare! Even I make mistakes. What's troubling you?",
188:           "Tell Nonna what happened, we'll fix it together!"
189:         ];
190:       } else if (resolvedMamaId === 'abuela_rosa') {
191:         return [
192:           "Ay, mi amor, don't worry! Every cook has these moments.",
193:           "Tell me what's wrong, mijo. Abuela will help you."
194:         ];
195:       } else {
196:         return [
197:           "Take a deep breath. In Thai cooking, patience solves many problems.",
198:           "Tell me what you're seeing, child. We'll work through it."
199:         ];
200:       }
201:     }
202: 
203:     if (lowerInput.includes('good') || lowerInput.includes('great') || lowerInput.includes('perfect')) {
204:       if (resolvedMamaId === 'nonna_lucia') {
205:         return [
206:           "Bravissimo! You're becoming a real chef!",
207:           "Perfetto! Nonna is so proud of you!"
208:         ];
209:       } else if (resolvedMamaId === 'abuela_rosa') {
210:         return [
211:           "¡Qué bueno! You're doing fantastic, mijo!",
212:           "Sí, sí! That's the spirit of a true cook!"
213:         ];
214:       } else {
215:         return [
216:           "Very good! Your cooking energy is beautiful.",
217:           "Excellent! You're learning the Thai way well."
218:         ];
219:       }
220:     }
221: 
222:     // Default encouraging responses
223:     if (resolvedMamaId === 'nonna_lucia') {
224:       return [
225:         "Sì, sì, you're doing well, caro!",
226:         "Keep going, tesoro. You've got this!"
227:       ];
228:     } else if (resolvedMamaId === 'abuela_rosa') {
229:       return [
230:         "Muy bien, mijo! You're doing great!",
231:         "That's it, corazón! Trust yourself!"
232:       ];
233:     } else {
234:       return [
235:         "Yes, you're on the right path.",
236:         "Good, keep following your instincts."
237:       ];
238:     }
239:   }
240: 
241:   sendMessage(text: string): void {
242:     // For compatibility with existing interface
243:     this.handleUserInput(text);
244:   }
245: 
246:   private resolveMamaId(mamaId: string): string {
247:     // Handle numeric IDs from Cook page
248:     switch (mamaId) {
249:       case '1':
250:         return 'nonna_lucia';
251:       case '2':
252:         return 'abuela_rosa';
253:       case '3':
254:         return 'mae_malai';
255:       default:
256:         return mamaId; // Already in correct format
257:     }
258:   }
259: 
260:   isConnected(): boolean {
261:     return this.isListening && this.recognition !== null;
262:   }
263: }
````

## File: src/services/ingredientConsolidationService.ts
````typescript
  1: interface ParsedQuantity {
  2:   amount: number;
  3:   unit: string;
  4:   originalText: string;
  5: }
  6: 
  7: interface ConsolidatedIngredient {
  8:   canonical_name: string;
  9:   total_quantity: string;
 10:   category_id: string | null;
 11:   aliases: string[];
 12:   recipe_names: string[];
 13: }
 14: 
 15: export class IngredientConsolidationService {
 16:   private unitConversions: { [key: string]: { [key: string]: number } } = {
 17:     // Volume conversions (to cups)
 18:     volume: {
 19:       'cup': 1,
 20:       'cups': 1,
 21:       'c': 1,
 22:       'tablespoon': 1/16,
 23:       'tablespoons': 1/16,
 24:       'tbsp': 1/16,
 25:       'teaspoon': 1/48,
 26:       'teaspoons': 1/48,
 27:       'tsp': 1/48,
 28:       'fluid ounce': 1/8,
 29:       'fluid ounces': 1/8,
 30:       'fl oz': 1/8,
 31:       'pint': 2,
 32:       'pints': 2,
 33:       'pt': 2,
 34:       'quart': 4,
 35:       'quarts': 4,
 36:       'qt': 4,
 37:       'gallon': 16,
 38:       'gallons': 16,
 39:       'gal': 16,
 40:       'liter': 4.227,
 41:       'liters': 4.227,
 42:       'l': 4.227,
 43:       'milliliter': 0.004227,
 44:       'milliliters': 0.004227,
 45:       'ml': 0.004227
 46:     },
 47:     // Weight conversions (to pounds)
 48:     weight: {
 49:       'pound': 1,
 50:       'pounds': 1,
 51:       'lb': 1,
 52:       'lbs': 1,
 53:       'ounce': 1/16,
 54:       'ounces': 1/16,
 55:       'oz': 1/16,
 56:       'gram': 0.00220462,
 57:       'grams': 0.00220462,
 58:       'g': 0.00220462,
 59:       'kilogram': 2.20462,
 60:       'kilograms': 2.20462,
 61:       'kg': 2.20462
 62:     }
 63:   };
 64: 
 65:   parseQuantity(quantityText: string): ParsedQuantity | null {
 66:     if (!quantityText) return null;
 67: 
 68:     // Common patterns for quantities
 69:     const patterns = [
 70:       // "2 cups", "1.5 tablespoons"
 71:       /^(\d+(?:\.\d+)?)\s+([a-zA-Z\s]+)$/,
 72:       // "2-3 cups", "1-2 tablespoons"
 73:       /^(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)\s+([a-zA-Z\s]+)$/,
 74:       // "1/2 cup", "3/4 teaspoon"
 75:       /^(\d+)\/(\d+)\s+([a-zA-Z\s]+)$/,
 76:       // "2 1/2 cups"
 77:       /^(\d+)\s+(\d+)\/(\d+)\s+([a-zA-Z\s]+)$/,
 78:       // Just numbers: "2", "1.5"
 79:       /^(\d+(?:\.\d+)?)$/
 80:     ];
 81: 
 82:     for (const pattern of patterns) {
 83:       const match = quantityText.trim().match(pattern);
 84:       if (match) {
 85:         let amount: number;
 86:         let unit = '';
 87: 
 88:         if (pattern === patterns[0]) {
 89:           // "2 cups"
 90:           amount = parseFloat(match[1]);
 91:           unit = match[2].trim().toLowerCase();
 92:         } else if (pattern === patterns[1]) {
 93:           // "2-3 cups" - take average
 94:           amount = (parseFloat(match[1]) + parseFloat(match[2])) / 2;
 95:           unit = match[3].trim().toLowerCase();
 96:         } else if (pattern === patterns[2]) {
 97:           // "1/2 cup"
 98:           amount = parseFloat(match[1]) / parseFloat(match[2]);
 99:           unit = match[3].trim().toLowerCase();
100:         } else if (pattern === patterns[3]) {
101:           // "2 1/2 cups"
102:           amount = parseFloat(match[1]) + (parseFloat(match[2]) / parseFloat(match[3]));
103:           unit = match[4].trim().toLowerCase();
104:         } else if (pattern === patterns[4]) {
105:           // Just number
106:           amount = parseFloat(match[1]);
107:           unit = 'unit';
108:         }
109: 
110:         return {
111:           amount,
112:           unit,
113:           originalText: quantityText
114:         };
115:       }
116:     }
117: 
118:     return null;
119:   }
120: 
121:   normalizeIngredientName(name: string): string {
122:     return name.toLowerCase()
123:       .replace(/\b(fresh|dried|organic|raw|cooked|chopped|diced|sliced|minced|grated)\b/g, '')
124:       .replace(/[^\w\s]/g, '')
125:       .replace(/\s+/g, ' ')
126:       .trim();
127:   }
128: 
129:   findSimilarIngredients(ingredients: Array<{ ingredient_name: string; quantity?: string }>): ConsolidatedIngredient[] {
130:     const groups: { [key: string]: Array<{ ingredient_name: string; quantity?: string; recipe_name?: string }> } = {};
131:     
132:     // Group similar ingredients
133:     ingredients.forEach(item => {
134:       const normalized = this.normalizeIngredientName(item.ingredient_name);
135:       
136:       // Find existing group or create new one
137:       let groupKey = normalized;
138:       for (const existingKey of Object.keys(groups)) {
139:         if (this.areIngredientsSimilar(existingKey, normalized)) {
140:           groupKey = existingKey;
141:           break;
142:         }
143:       }
144:       
145:       if (!groups[groupKey]) {
146:         groups[groupKey] = [];
147:       }
148:       
149:       groups[groupKey].push(item);
150:     });
151: 
152:     // Consolidate quantities for each group
153:     return Object.entries(groups).map(([canonicalName, items]) => {
154:       const consolidatedQuantity = this.consolidateQuantities(items.map(item => item.quantity || ''));
155:       
156:       return {
157:         canonical_name: canonicalName,
158:         total_quantity: consolidatedQuantity,
159:         category_id: null, // Will be set by categorization service
160:         aliases: [...new Set(items.map(item => item.ingredient_name))],
161:         recipe_names: [...new Set(items.map(item => item.recipe_name).filter(Boolean))] as string[]
162:       };
163:     });
164:   }
165: 
166:   private areIngredientsSimilar(name1: string, name2: string): boolean {
167:     // Simple similarity check - can be enhanced with more sophisticated algorithms
168:     const words1 = name1.split(' ');
169:     const words2 = name2.split(' ');
170:     
171:     // Check if they share significant words
172:     const sharedWords = words1.filter(word => 
173:       words2.includes(word) && word.length > 2
174:     );
175:     
176:     return sharedWords.length > 0 && 
177:            (sharedWords.length / Math.max(words1.length, words2.length)) >= 0.5;
178:   }
179: 
180:   private consolidateQuantities(quantities: string[]): string {
181:     const validQuantities = quantities.filter(q => q && q.trim());
182:     
183:     if (validQuantities.length === 0) return '';
184:     if (validQuantities.length === 1) return validQuantities[0];
185: 
186:     // Try to parse and sum quantities
187:     const parsed = validQuantities.map(q => this.parseQuantity(q)).filter(Boolean) as ParsedQuantity[];
188:     
189:     if (parsed.length === 0) {
190:       return validQuantities.join(', ');
191:     }
192: 
193:     // Group by unit type
194:     const volumeUnits = parsed.filter(p => this.unitConversions.volume[p.unit]);
195:     const weightUnits = parsed.filter(p => this.unitConversions.weight[p.unit]);
196:     const countUnits = parsed.filter(p => p.unit === 'unit' || !this.unitConversions.volume[p.unit] && !this.unitConversions.weight[p.unit]);
197: 
198:     const results: string[] = [];
199: 
200:     // Consolidate volume units
201:     if (volumeUnits.length > 0) {
202:       const totalCups = volumeUnits.reduce((sum, p) => 
203:         sum + (p.amount * this.unitConversions.volume[p.unit]), 0
204:       );
205:       results.push(this.formatQuantity(totalCups, 'cup'));
206:     }
207: 
208:     // Consolidate weight units
209:     if (weightUnits.length > 0) {
210:       const totalPounds = weightUnits.reduce((sum, p) => 
211:         sum + (p.amount * this.unitConversions.weight[p.unit]), 0
212:       );
213:       results.push(this.formatQuantity(totalPounds, 'lb'));
214:     }
215: 
216:     // Consolidate count units
217:     if (countUnits.length > 0) {
218:       const totalCount = countUnits.reduce((sum, p) => sum + p.amount, 0);
219:       results.push(totalCount === 1 ? '1' : `${totalCount}`);
220:     }
221: 
222:     // If we couldn't consolidate, return original quantities
223:     if (results.length === 0) {
224:       return validQuantities.join(', ');
225:     }
226: 
227:     return results.join(', ');
228:   }
229: 
230:   private formatQuantity(amount: number, unit: string): string {
231:     if (amount < 0.125) {
232:       return `${Math.round(amount * 48)} tsp`;
233:     } else if (amount < 1) {
234:       return `${Math.round(amount * 16)} tbsp`;
235:     } else if (amount % 1 === 0) {
236:       return `${amount} ${unit}${amount > 1 ? 's' : ''}`;
237:     } else {
238:       return `${amount.toFixed(2).replace(/\.?0+$/, '')} ${unit}${amount > 1 ? 's' : ''}`;
239:     }
240:   }
241: }
242: 
243: export const ingredientConsolidationService = new IngredientConsolidationService();
````

## File: src/services/intelligentResponseService.ts
````typescript
  1: import { Recipe } from '@/data/recipes';
  2: import { Mama } from '@/data/mamas';
  3: 
  4: interface ResponseContext {
  5:   mama: Mama;
  6:   recipe: Recipe;
  7:   currentStep: number;
  8:   conversationPhase: 'pre-cooking' | 'cooking';
  9:   userInput: string;
 10:   isInterruption?: boolean;
 11: }
 12: 
 13: export class IntelligentResponseService {
 14:   private static instance: IntelligentResponseService;
 15: 
 16:   static getInstance(): IntelligentResponseService {
 17:     if (!IntelligentResponseService.instance) {
 18:       IntelligentResponseService.instance = new IntelligentResponseService();
 19:     }
 20:     return IntelligentResponseService.instance;
 21:   }
 22: 
 23:   // Template responses for common cooking scenarios (60-80%)
 24:   private readonly templateResponses = {
 25:     italian: {
 26:       encouragement: [
 27:         "Bene! You're doing magnifico!",
 28:         "Perfetto! Just like my nonna taught me!",
 29:         "Sì, sì! You have good instincts, caro!",
 30:         "Bellissimo! You're a natural in the kitchen!"
 31:       ],
 32:       stepConfirmation: [
 33:         "Bene! Now we...",
 34:         "Perfetto! Next step is...",
 35:         "Sì! Now let's...",
 36:         "Excellent! Time to..."
 37:       ],
 38:       interruption: [
 39:         "Sì, tesoro? What do you need?",
 40:         "Certo! Tell me, what's happening?",
 41:         "Dimmi tutto! What can I help you with?",
 42:         "Of course, cara! What's the matter?"
 43:       ],
 44:       troubleshooting: [
 45:         "Eh, no problem! This happens sometimes...",
 46:         "Madonna mia! Don't worry, we fix this together!",
 47:         "Listen to me - this is not so bad. We can save this!",
 48:         "Tranquillo! Even Nonna made mistakes!"
 49:       ]
 50:     },
 51:     mexican: {
 52:       encouragement: [
 53:         "¡Qué bueno! You're learning fast, mija!",
 54:         "¡Perfecto! You have good hands for cooking!",
 55:         "¡Órale! That's exactly right!",
 56:         "¡Excelente! You make your abuela proud!"
 57:       ],
 58:       stepConfirmation: [
 59:         "¡Perfecto! Now we...",
 60:         "¡Sí! Next thing is...",
 61:         "¡Bueno! Time to...",
 62:         "¡Órale! Let's..."
 63:       ],
 64:       interruption: [
 65:         "¿Sí, mija? What do you need?",
 66:         "¡Claro! Tell me what's happening!",
 67:         "¿Qué pasa? How can abuela help?",
 68:         "Of course, mi amor! What's wrong?"
 69:       ],
 70:       troubleshooting: [
 71:         "¡Ay, no te preocupes! We fix this together!",
 72:         "¡No problema! This happened to me too when I was learning!",
 73:         "¡Tranquila! Even your abuela burned things sometimes!",
 74:         "Don't worry, mija! We make it work!"
 75:       ]
 76:     },
 77:     thai: {
 78:       encouragement: [
 79:         "Beautiful work, darling! You have good intuition!",
 80:         "Perfect technique! You're learning the Thai way!",
 81:         "Wonderful! You understand the balance!",
 82:         "Excellent! Your hands know what they're doing!"
 83:       ],
 84:       stepConfirmation: [
 85:         "Beautiful! Now we...",
 86:         "Perfect! Time to...",
 87:         "Lovely! Next we...",
 88:         "Wonderful! Let's..."
 89:       ],
 90:       interruption: [
 91:         "Yes, dear? How can I help?",
 92:         "Of course! What do you need to know?",
 93:         "Tell me, darling - what's happening?",
 94:         "Sabai sabai! What can I explain?"
 95:       ],
 96:       troubleshooting: [
 97:         "No worries, dear! Like the river, we find another way!",
 98:         "This is normal! Even in Thailand, we adjust as we cook!",
 99:         "Don't stress, darling! Cooking is about patience and flow!",
100:         "It's okay! Every cook learns through these moments!"
101:       ]
102:     }
103:   };
104: 
105:   private readonly voiceCommands = {
106:     next: ['next', 'continue', 'move on', 'what\'s next'],
107:     previous: ['back', 'previous', 'go back', 'last step'],
108:     repeat: ['repeat', 'say again', 'what did you say', 'again'],
109:     help: ['help', 'stuck', 'confused', 'don\'t understand'],
110:     timer: ['timer', 'time', 'how long', 'when'],
111:     ingredients: ['ingredients', 'what do i need', 'shopping'],
112:     technique: ['how', 'why', 'technique', 'method']
113:   };
114: 
115:   detectVoiceCommand(input: string): string | null {
116:     const lowercaseInput = input.toLowerCase();
117:     
118:     for (const [command, phrases] of Object.entries(this.voiceCommands)) {
119:       if (phrases.some(phrase => lowercaseInput.includes(phrase))) {
120:         return command;
121:       }
122:     }
123:     
124:     return null;
125:   }
126: 
127:   isTemplateResponse(input: string, context: ResponseContext): boolean {
128:     const command = this.detectVoiceCommand(input);
129:     
130:     // Common commands and simple questions use templates
131:     if (command) return true;
132:     
133:     // Simple greetings and acknowledgments
134:     if (/^(yes|no|ok|good|great|thanks|hello|hi)$/i.test(input.trim())) {
135:       return true;
136:     }
137:     
138:     // Short responses (< 5 words) typically use templates
139:     if (input.split(' ').length < 5) return true;
140:     
141:     return false;
142:   }
143: 
144:   getTemplateResponse(input: string, context: ResponseContext): string {
145:     const { mama, isInterruption } = context;
146:     const accent = mama.accent.toLowerCase() as keyof typeof this.templateResponses;
147:     const responses = this.templateResponses[accent] || this.templateResponses.italian;
148:     
149:     if (isInterruption) {
150:       return this.getRandomResponse(responses.interruption);
151:     }
152:     
153:     const command = this.detectVoiceCommand(input);
154:     
155:     switch (command) {
156:       case 'help':
157:         return this.getRandomResponse(responses.troubleshooting);
158:       default:
159:         return this.getRandomResponse(responses.encouragement);
160:     }
161:   }
162: 
163:   async generateDynamicResponse(input: string, context: ResponseContext): Promise<string> {
164:     // For complex questions, cultural context, and detailed explanations
165:     // This would integrate with OpenAI for dynamic responses
166:     
167:     const { mama, recipe, currentStep, conversationPhase } = context;
168:     
169:     const systemPrompt = `You are ${mama.name}, a ${mama.accent} cooking teacher. 
170:     You're helping someone ${conversationPhase === 'pre-cooking' ? 'learn about' : 'cook'} ${recipe.title}.
171:     ${conversationPhase === 'cooking' ? `They're currently on step ${currentStep}.` : ''}
172:     
173:     Respond in character with your ${mama.accent} personality, accent, and cultural expressions.
174:     Keep responses warm, encouraging, and conversational (2-3 sentences max).
175:     
176:     User said: "${input}"`;
177:     
178:     try {
179:       // This would call OpenAI API for dynamic responses
180:       // For now, return a fallback template response
181:       const accent = mama.accent.toLowerCase() as keyof typeof this.templateResponses;
182:       const responses = this.templateResponses[accent] || this.templateResponses.italian;
183:       return this.getRandomResponse(responses.encouragement);
184:     } catch (error) {
185:       console.error('Dynamic response generation failed:', error);
186:       // Fallback to template
187:       return this.getTemplateResponse(input, context);
188:     }
189:   }
190: 
191:   private getRandomResponse(responses: string[]): string {
192:     return responses[Math.floor(Math.random() * responses.length)];
193:   }
194: 
195:   // Enhanced response with cooking context
196:   addCookingContext(response: string, context: ResponseContext): string {
197:     const { recipe, currentStep, conversationPhase } = context;
198:     
199:     if (conversationPhase === 'cooking' && currentStep <= recipe.instructions.length) {
200:       const currentInstruction = recipe.instructions[currentStep - 1];
201:       
202:       // Add step reference for longer responses
203:       if (response.length > 50 && Math.random() > 0.7) {
204:         return `${response} Remember, we're ${currentInstruction.toLowerCase()}.`;
205:       }
206:     }
207:     
208:     return response;
209:   }
210: }
211: 
212: export const intelligentResponseService = IntelligentResponseService.getInstance();
````

## File: src/services/quantityCalculationService.ts
````typescript
  1: interface ParsedQuantity {
  2:   amount: number;
  3:   unit: string;
  4:   originalText: string;
  5:   isRange: boolean;
  6:   minAmount?: number;
  7:   maxAmount?: number;
  8: }
  9: 
 10: interface UnitConversion {
 11:   factor: number;
 12:   baseUnit: string;
 13: }
 14: 
 15: const UNIT_CONVERSIONS: Record<string, UnitConversion> = {
 16:   // Volume conversions (to cups)
 17:   'tsp': { factor: 1/48, baseUnit: 'cup' },
 18:   'teaspoon': { factor: 1/48, baseUnit: 'cup' },
 19:   'teaspoons': { factor: 1/48, baseUnit: 'cup' },
 20:   'tbsp': { factor: 1/16, baseUnit: 'cup' },
 21:   'tablespoon': { factor: 1/16, baseUnit: 'cup' },
 22:   'tablespoons': { factor: 1/16, baseUnit: 'cup' },
 23:   'fluid ounce': { factor: 1/8, baseUnit: 'cup' },
 24:   'fl oz': { factor: 1/8, baseUnit: 'cup' },
 25:   'cup': { factor: 1, baseUnit: 'cup' },
 26:   'cups': { factor: 1, baseUnit: 'cup' },
 27:   'pint': { factor: 2, baseUnit: 'cup' },
 28:   'pints': { factor: 2, baseUnit: 'cup' },
 29:   'quart': { factor: 4, baseUnit: 'cup' },
 30:   'quarts': { factor: 4, baseUnit: 'cup' },
 31:   'gallon': { factor: 16, baseUnit: 'cup' },
 32:   'gallons': { factor: 16, baseUnit: 'cup' },
 33:   
 34:   // Weight conversions (to ounces)
 35:   'oz': { factor: 1, baseUnit: 'oz' },
 36:   'ounce': { factor: 1, baseUnit: 'oz' },
 37:   'ounces': { factor: 1, baseUnit: 'oz' },
 38:   'lb': { factor: 16, baseUnit: 'oz' },
 39:   'pound': { factor: 16, baseUnit: 'oz' },
 40:   'pounds': { factor: 16, baseUnit: 'oz' },
 41:   'g': { factor: 0.035274, baseUnit: 'oz' },
 42:   'gram': { factor: 0.035274, baseUnit: 'oz' },
 43:   'grams': { factor: 0.035274, baseUnit: 'oz' },
 44:   'kg': { factor: 35.274, baseUnit: 'oz' },
 45:   'kilogram': { factor: 35.274, baseUnit: 'oz' },
 46:   'kilograms': { factor: 35.274, baseUnit: 'oz' },
 47: };
 48: 
 49: const FRACTION_MAP: Record<string, number> = {
 50:   '1/8': 0.125,
 51:   '1/4': 0.25,
 52:   '1/3': 0.333,
 53:   '1/2': 0.5,
 54:   '2/3': 0.667,
 55:   '3/4': 0.75,
 56:   '⅛': 0.125,
 57:   '¼': 0.25,
 58:   '⅓': 0.333,
 59:   '½': 0.5,
 60:   '⅔': 0.667,
 61:   '¾': 0.75,
 62: };
 63: 
 64: export class QuantityCalculationService {
 65:   static parseQuantity(quantityText: string): ParsedQuantity {
 66:     const normalized = quantityText.toLowerCase().trim();
 67:     
 68:     // Handle special cases
 69:     if (normalized.includes('pinch') || normalized.includes('dash')) {
 70:       return {
 71:         amount: 0.25,
 72:         unit: 'tsp',
 73:         originalText: quantityText,
 74:         isRange: false
 75:       };
 76:     }
 77: 
 78:     if (normalized.includes('handful')) {
 79:       return {
 80:         amount: 0.5,
 81:         unit: 'cup',
 82:         originalText: quantityText,
 83:         isRange: false
 84:       };
 85:     }
 86: 
 87:     // Parse ranges like "2-3", "1 to 2"
 88:     const rangeMatch = normalized.match(/(\d+(?:\.\d+)?)\s*(?:to|-)\s*(\d+(?:\.\d+)?)/);
 89:     if (rangeMatch) {
 90:       const min = parseFloat(rangeMatch[1]);
 91:       const max = parseFloat(rangeMatch[2]);
 92:       const unit = this.extractUnit(normalized);
 93:       
 94:       return {
 95:         amount: (min + max) / 2,
 96:         unit,
 97:         originalText: quantityText,
 98:         isRange: true,
 99:         minAmount: min,
100:         maxAmount: max
101:       };
102:     }
103: 
104:     // Parse fractions and mixed numbers
105:     let amount = this.parseFractions(normalized);
106:     
107:     // If no fractions found, try to parse regular numbers
108:     if (amount === 0) {
109:       const numberMatch = normalized.match(/(\d+(?:\.\d+)?)/);
110:       amount = numberMatch ? parseFloat(numberMatch[1]) : 1;
111:     }
112: 
113:     const unit = this.extractUnit(normalized);
114: 
115:     return {
116:       amount,
117:       unit,
118:       originalText: quantityText,
119:       isRange: false
120:     };
121:   }
122: 
123:   private static parseFractions(text: string): number {
124:     // Handle mixed numbers like "1 1/2"
125:     const mixedMatch = text.match(/(\d+)\s+(\d+\/\d+|\S)/);
126:     if (mixedMatch) {
127:       const wholeNumber = parseInt(mixedMatch[1]);
128:       const fractionPart = FRACTION_MAP[mixedMatch[2]] || this.evaluateFraction(mixedMatch[2]);
129:       return wholeNumber + fractionPart;
130:     }
131: 
132:     // Handle pure fractions
133:     for (const [fraction, value] of Object.entries(FRACTION_MAP)) {
134:       if (text.includes(fraction)) {
135:         return value;
136:       }
137:     }
138: 
139:     // Handle slash fractions like "3/4"
140:     const fractionMatch = text.match(/(\d+)\/(\d+)/);
141:     if (fractionMatch) {
142:       return parseInt(fractionMatch[1]) / parseInt(fractionMatch[2]);
143:     }
144: 
145:     return 0;
146:   }
147: 
148:   private static evaluateFraction(fraction: string): number {
149:     const parts = fraction.split('/');
150:     if (parts.length === 2) {
151:       return parseInt(parts[0]) / parseInt(parts[1]);
152:     }
153:     return 0;
154:   }
155: 
156:   private static extractUnit(text: string): string {
157:     // Remove numbers and fractions to isolate the unit
158:     const cleaned = text.replace(/\d+(?:\.\d+)?/g, '')
159:                        .replace(/\d+\/\d+/g, '')
160:                        .replace(/[⅛¼⅓½⅔¾]/g, '')
161:                        .trim();
162: 
163:     // Common unit patterns
164:     const unitPatterns = [
165:       'tablespoons?', 'tbsp', 'teaspoons?', 'tsp', 'cups?', 'cup',
166:       'ounces?', 'oz', 'pounds?', 'lbs?', 'lb', 'grams?', 'g',
167:       'kilograms?', 'kg', 'pints?', 'quarts?', 'gallons?',
168:       'fluid ounces?', 'fl oz', 'milliliters?', 'ml', 'liters?', 'l'
169:     ];
170: 
171:     for (const pattern of unitPatterns) {
172:       const regex = new RegExp(`\\b${pattern}\\b`, 'i');
173:       if (regex.test(cleaned)) {
174:         return cleaned.match(regex)?.[0].toLowerCase() || '';
175:       }
176:     }
177: 
178:     return cleaned.replace(/[^\w\s]/g, '').trim() || 'item';
179:   }
180: 
181:   static scaleQuantity(parsedQuantity: ParsedQuantity, scaleFactor: number): ParsedQuantity {
182:     const scaledAmount = parsedQuantity.amount * scaleFactor;
183:     const scaledMin = parsedQuantity.minAmount ? parsedQuantity.minAmount * scaleFactor : undefined;
184:     const scaledMax = parsedQuantity.maxAmount ? parsedQuantity.maxAmount * scaleFactor : undefined;
185: 
186:     return {
187:       ...parsedQuantity,
188:       amount: scaledAmount,
189:       minAmount: scaledMin,
190:       maxAmount: scaledMax
191:     };
192:   }
193: 
194:   static formatQuantity(parsedQuantity: ParsedQuantity): string {
195:     const { amount, unit, isRange, minAmount, maxAmount } = parsedQuantity;
196: 
197:     if (isRange && minAmount && maxAmount) {
198:       return `${this.formatNumber(minAmount)}-${this.formatNumber(maxAmount)} ${unit}`;
199:     }
200: 
201:     return `${this.formatNumber(amount)} ${unit}`;
202:   }
203: 
204:   private static formatNumber(num: number): string {
205:     // Convert decimals back to fractions for common values
206:     const commonFractions: Record<number, string> = {
207:       0.125: '⅛',
208:       0.25: '¼', 
209:       0.333: '⅓',
210:       0.5: '½',
211:       0.667: '⅔',
212:       0.75: '¾'
213:     };
214: 
215:     const rounded = Math.round(num * 1000) / 1000;
216:     
217:     if (commonFractions[rounded]) {
218:       return commonFractions[rounded];
219:     }
220: 
221:     // Handle mixed numbers
222:     if (rounded > 1) {
223:       const whole = Math.floor(rounded);
224:       const decimal = rounded - whole;
225:       const fraction = commonFractions[Math.round(decimal * 1000) / 1000];
226:       
227:       if (fraction) {
228:         return `${whole} ${fraction}`;
229:       }
230:     }
231: 
232:     // Default to decimal with appropriate precision
233:     return rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(2).replace(/\.?0+$/, '');
234:   }
235: 
236:   static canConvertUnits(unit1: string, unit2: string): boolean {
237:     const conv1 = UNIT_CONVERSIONS[unit1.toLowerCase()];
238:     const conv2 = UNIT_CONVERSIONS[unit2.toLowerCase()];
239:     
240:     return conv1 && conv2 && conv1.baseUnit === conv2.baseUnit;
241:   }
242: 
243:   static convertUnits(parsedQuantity: ParsedQuantity, targetUnit: string): ParsedQuantity | null {
244:     const sourceUnit = parsedQuantity.unit.toLowerCase();
245:     const target = targetUnit.toLowerCase();
246: 
247:     if (sourceUnit === target) {
248:       return parsedQuantity;
249:     }
250: 
251:     const sourceConv = UNIT_CONVERSIONS[sourceUnit];
252:     const targetConv = UNIT_CONVERSIONS[target];
253: 
254:     if (!sourceConv || !targetConv || sourceConv.baseUnit !== targetConv.baseUnit) {
255:       return null; // Cannot convert
256:     }
257: 
258:     // Convert to base unit first, then to target
259:     const baseAmount = parsedQuantity.amount * sourceConv.factor;
260:     const convertedAmount = baseAmount / targetConv.factor;
261: 
262:     return {
263:       ...parsedQuantity,
264:       amount: convertedAmount,
265:       unit: targetUnit,
266:       minAmount: parsedQuantity.minAmount ? (parsedQuantity.minAmount * sourceConv.factor) / targetConv.factor : undefined,
267:       maxAmount: parsedQuantity.maxAmount ? (parsedQuantity.maxAmount * sourceConv.factor) / targetConv.factor : undefined
268:     };
269:   }
270: }
````

## File: src/services/sharingService.ts
````typescript
  1: interface ShoppingListItem {
  2:   ingredient_name: string;
  3:   quantity?: string;
  4:   category?: string;
  5:   checked: boolean;
  6: }
  7: 
  8: interface ShareOptions {
  9:   title?: string;
 10:   includeCheckedItems?: boolean;
 11:   format?: 'simple' | 'detailed' | 'emoji';
 12: }
 13: 
 14: export class SharingService {
 15:   async shareShoppingList(items: ShoppingListItem[], options: ShareOptions = {}): Promise<boolean> {
 16:     const {
 17:       title = 'My Shopping List',
 18:       includeCheckedItems = false,
 19:       format = 'simple'
 20:     } = options;
 21: 
 22:     const content = this.formatShoppingList(items, { title, includeCheckedItems, format });
 23: 
 24:     // Try native Web Share API first (mobile browsers)
 25:     if (navigator.share && this.isMobileDevice()) {
 26:       try {
 27:         await navigator.share({
 28:           title,
 29:           text: content,
 30:         });
 31:         return true;
 32:       } catch (error) {
 33:         console.log('Native sharing failed, falling back to clipboard');
 34:       }
 35:     }
 36: 
 37:     // Fallback to clipboard
 38:     return this.copyToClipboard(content);
 39:   }
 40: 
 41:   async shareViaEmail(items: ShoppingListItem[], options: ShareOptions = {}): Promise<void> {
 42:     const {
 43:       title = 'My Shopping List',
 44:       includeCheckedItems = false,
 45:       format = 'detailed'
 46:     } = options;
 47: 
 48:     const content = this.formatShoppingList(items, { title, includeCheckedItems, format });
 49:     const subject = encodeURIComponent(title);
 50:     const body = encodeURIComponent(content);
 51:     
 52:     const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
 53:     window.open(mailtoUrl, '_blank');
 54:   }
 55: 
 56:   async shareViaSMS(items: ShoppingListItem[], options: ShareOptions = {}): Promise<void> {
 57:     const {
 58:       title = 'Shopping List',
 59:       includeCheckedItems = false,
 60:       format = 'simple'
 61:     } = options;
 62: 
 63:     const content = this.formatShoppingList(items, { title, includeCheckedItems, format });
 64:     const body = encodeURIComponent(content);
 65:     
 66:     const smsUrl = `sms:?body=${body}`;
 67:     window.open(smsUrl, '_blank');
 68:   }
 69: 
 70:   async shareViaWhatsApp(items: ShoppingListItem[], options: ShareOptions = {}): Promise<void> {
 71:     const {
 72:       title = 'Shopping List',
 73:       includeCheckedItems = false,
 74:       format = 'emoji'
 75:     } = options;
 76: 
 77:     const content = this.formatShoppingList(items, { title, includeCheckedItems, format });
 78:     const text = encodeURIComponent(content);
 79:     
 80:     const whatsappUrl = `https://wa.me/?text=${text}`;
 81:     window.open(whatsappUrl, '_blank');
 82:   }
 83: 
 84:   generateQRCode(items: ShoppingListItem[], options: ShareOptions = {}): string {
 85:     const content = this.formatShoppingList(items, options);
 86:     const encodedContent = encodeURIComponent(content);
 87:     
 88:     // Using QR Server API for simplicity
 89:     return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedContent}`;
 90:   }
 91: 
 92:   private formatShoppingList(items: ShoppingListItem[], options: ShareOptions): string {
 93:     const {
 94:       title = 'Shopping List',
 95:       includeCheckedItems = false,
 96:       format = 'simple'
 97:     } = options;
 98: 
 99:     const filteredItems = includeCheckedItems 
100:       ? items 
101:       : items.filter(item => !item.checked);
102: 
103:     if (filteredItems.length === 0) {
104:       return `${title}\n\nNo items to buy! 🎉`;
105:     }
106: 
107:     let content = `${title}\n`;
108:     content += '='.repeat(title.length) + '\n\n';
109: 
110:     if (format === 'emoji') {
111:       content += this.formatWithEmojis(filteredItems);
112:     } else if (format === 'detailed') {
113:       content += this.formatDetailed(filteredItems);
114:     } else {
115:       content += this.formatSimple(filteredItems);
116:     }
117: 
118:     content += `\n\nGenerated by MAMIA Cooking App 👩‍🍳`;
119:     
120:     return content;
121:   }
122: 
123:   private formatSimple(items: ShoppingListItem[]): string {
124:     return items.map(item => {
125:       const quantity = item.quantity ? `${item.quantity} ` : '';
126:       const check = item.checked ? '✅' : '☐';
127:       return `${check} ${quantity}${item.ingredient_name}`;
128:     }).join('\n');
129:   }
130: 
131:   private formatDetailed(items: ShoppingListItem[]): string {
132:     // Group by category
133:     const grouped = items.reduce((acc, item) => {
134:       const category = item.category || 'Other';
135:       if (!acc[category]) acc[category] = [];
136:       acc[category].push(item);
137:       return acc;
138:     }, {} as { [key: string]: ShoppingListItem[] });
139: 
140:     let content = '';
141:     Object.entries(grouped).forEach(([category, categoryItems]) => {
142:       content += `📂 ${category.toUpperCase()}\n`;
143:       categoryItems.forEach(item => {
144:         const quantity = item.quantity ? `${item.quantity} ` : '';
145:         const check = item.checked ? '✅' : '☐';
146:         content += `  ${check} ${quantity}${item.ingredient_name}\n`;
147:       });
148:       content += '\n';
149:     });
150: 
151:     return content;
152:   }
153: 
154:   private formatWithEmojis(items: ShoppingListItem[]): string {
155:     const emojiMap: { [key: string]: string } = {
156:       'produce': '🥬',
157:       'meat': '🥩',
158:       'dairy': '🥛',
159:       'pantry': '🥫',
160:       'frozen': '🧊',
161:       'bakery': '🍞',
162:       'beverages': '🥤',
163:       'snacks': '🍿',
164:       'health': '🧴',
165:       'other': '📦'
166:     };
167: 
168:     return items.map(item => {
169:       const quantity = item.quantity ? `${item.quantity} ` : '';
170:       const check = item.checked ? '✅' : '☐';
171:       const category = item.category?.toLowerCase() || 'other';
172:       const emoji = emojiMap[category] || '📦';
173:       return `${check} ${emoji} ${quantity}${item.ingredient_name}`;
174:     }).join('\n');
175:   }
176: 
177:   private async copyToClipboard(text: string): Promise<boolean> {
178:     try {
179:       if (navigator.clipboard) {
180:         await navigator.clipboard.writeText(text);
181:       } else {
182:         // Fallback for older browsers
183:         const textArea = document.createElement('textarea');
184:         textArea.value = text;
185:         textArea.style.position = 'fixed';
186:         textArea.style.left = '-999999px';
187:         textArea.style.top = '-999999px';
188:         document.body.appendChild(textArea);
189:         textArea.focus();
190:         textArea.select();
191:         document.execCommand('copy');
192:         textArea.remove();
193:       }
194:       return true;
195:     } catch (err) {
196:       console.error('Failed to copy to clipboard:', err);
197:       return false;
198:     }
199:   }
200: 
201:   private isMobileDevice(): boolean {
202:     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
203:   }
204: }
205: 
206: export const sharingService = new SharingService();
````

## File: src/services/voiceService.ts
````typescript
  1: // Voice Service for ElevenLabs Integration
  2: import { getMamaById } from '@/data/mamas';
  3: import { supabase } from '@/integrations/supabase/client';
  4: 
  5: export interface VoiceConfig {
  6:   mode: 'full' | 'essential' | 'text';
  7:   volume: number;
  8:   speed: number;
  9:   enabled: boolean;
 10: }
 11: 
 12: export interface MamaVoice {
 13:   id: string;
 14:   name: string;
 15:   voiceId: string;
 16:   accent: string;
 17: }
 18: 
 19: // Voice mappings for different Mamas - voice IDs will be fetched from Supabase secrets
 20: export const MAMA_VOICES: Record<string, MamaVoice> = {
 21:   'nonna_lucia': {
 22:     id: 'nonna_lucia',
 23:     name: 'Nonna Lucia',
 24:     voiceId: 'nonna-voice', // Will be replaced with actual ID from secrets
 25:     accent: 'Italian'
 26:   },
 27:   'abuela_rosa': {
 28:     id: 'abuela_rosa', 
 29:     name: 'Abuela Rosa',
 30:     voiceId: 'abuela-voice', // Will be replaced with actual ID from secrets
 31:     accent: 'Mexican'
 32:   },
 33:   'mae_malai': {
 34:     id: 'mae_malai',
 35:     name: 'Mae Malai', 
 36:     voiceId: 'mae-voice', // Will be replaced with actual ID from secrets
 37:     accent: 'Thai'
 38:   }
 39: };
 40: 
 41: // Pre-cached common phrases for Essential Mode
 42: const ESSENTIAL_PHRASES: Record<string, Record<string, string>> = {
 43:   'nonna_lucia': {
 44:     welcome: "Benvenuti nella mia cucina, cari!",
 45:     start_cooking: "Iniziamo a cucinare insieme!",
 46:     next_step: "Ora, il prossimo passo...",
 47:     well_done: "Bravissimi! Perfetto!",
 48:     timer_done: "Il tempo è finito, tesoro!",
 49:     taste_check: "Assaggia e dimmi com'è!"
 50:   },
 51:   'abuela_rosa': {
 52:     welcome: "¡Bienvenidos a mi cocina, mis queridos!",
 53:     start_cooking: "¡Vamos a cocinar juntos!",
 54:     next_step: "Ahora, el siguiente paso...",
 55:     well_done: "¡Muy bien! ¡Perfecto!",
 56:     timer_done: "¡Se acabó el tiempo, mi amor!",
 57:     taste_check: "¡Pruébalo y dime qué tal!"
 58:   },
 59:   'mae_malai': {
 60:     welcome: "Welcome to my kitchen, sugar!",
 61:     start_cooking: "Let's get cookin' together!",
 62:     next_step: "Now honey, the next step...",
 63:     well_done: "Well done, darlin'! Perfect!",
 64:     timer_done: "Time's up, sweet pea!",
 65:     taste_check: "Go ahead and taste that for me!"
 66:   }
 67: };
 68: 
 69: export class VoiceService {
 70:   private static instance: VoiceService;
 71:   private currentAudio: HTMLAudioElement | null = null;
 72:   private audioQueue: Array<{ text: string; voiceId: string }> = [];
 73:   private isProcessingQueue = false;
 74:   private isCurrentlyPlayingState = false;
 75:   private voiceIds: Record<string, string> = {};
 76:   private config: VoiceConfig = {
 77:     mode: 'full', // Changed to 'full' for better reliability
 78:     volume: 0.8,
 79:     speed: 1.0,
 80:     enabled: true
 81:   };
 82: 
 83:   private constructor() {
 84:     // Initialize voice IDs immediately
 85:     this.initializeVoiceIds();
 86:   }
 87: 
 88:   private async initializeVoiceIds() {
 89:     try {
 90:       // Get voice IDs from Supabase Edge Function secrets via a helper function
 91:       const { data, error } = await supabase.functions.invoke('get-voice-ids');
 92:       if (data && !error) {
 93:         this.voiceIds = {
 94:           nonna_lucia: data.ELEVENLABS_NONNA_VOICE_ID,
 95:           abuela_rosa: data.ELEVENLABS_ABUELA_VOICE_ID,
 96:           mae_malai: data.ELEVENLABS_MAE_VOICE_ID
 97:         };
 98:         console.log('Voice IDs initialized successfully', this.voiceIds);
 99:       } else {
100:         console.error('Error fetching voice IDs:', error);
101:       }
102:     } catch (error) {
103:       console.warn('Could not fetch voice IDs, using defaults:', error);
104:     }
105:   }
106: 
107:   public static getInstance(): VoiceService {
108:     if (!VoiceService.instance) {
109:       VoiceService.instance = new VoiceService();
110:     }
111:     return VoiceService.instance;
112:   }
113: 
114:   public updateConfig(config: Partial<VoiceConfig>): void {
115:     this.config = { ...this.config, ...config };
116:   }
117: 
118:   public getConfig(): VoiceConfig {
119:     return { ...this.config };
120:   }
121: 
122:   async speak(text: string, mamaId: string): Promise<void> {
123:     if (!this.config.enabled) return;
124: 
125:     console.log(`[VoiceService] Speaking text: "${text}" for mama: ${mamaId}`);
126: 
127:     // Wait for voice IDs to be initialized if needed
128:     if (Object.keys(this.voiceIds).length === 0) {
129:       console.log('[VoiceService] Waiting for voice IDs to initialize...');
130:       await this.initializeVoiceIds();
131:     }
132: 
133:     // Resolve mama ID (handle both numeric and voice IDs)
134:     const resolvedMamaId = this.resolveMamaId(mamaId);
135:     console.log(`[VoiceService] Resolved mama ID: ${resolvedMamaId}`);
136: 
137:     // In essential mode, try pre-cached phrases first, then fall back to full TTS
138:     if (this.config.mode === 'essential') {
139:       const phrase = ESSENTIAL_PHRASES[resolvedMamaId]?.[text];
140:       if (phrase) {
141:         console.log(`[VoiceService] Playing cached phrase for ${resolvedMamaId}: ${phrase}`);
142:         await this.playEssentialPhrase(phrase);
143:         return;
144:       }
145:       console.log(`[VoiceService] No cached phrase found, falling back to full TTS`);
146:     }
147: 
148:     // Fall back to full TTS mode for any text not in essential phrases
149:     const actualVoiceId = this.voiceIds[resolvedMamaId];
150:     console.log(`[VoiceService] Using voice ID: ${actualVoiceId} for ${resolvedMamaId}`);
151:     
152:     if (actualVoiceId) {
153:       this.addToQueue(text, actualVoiceId);
154:     } else {
155:       console.warn(`[VoiceService] No voice ID found for ${resolvedMamaId}. Available IDs:`, this.voiceIds);
156:     }
157:   }
158: 
159:   async speakRecipeIntro(recipeId: string, mamaId: string): Promise<void> {
160:     const mama = getMamaById(parseInt(mamaId));
161:     if (!mama) return;
162: 
163:     // This would fetch the recipe's voice intro from the data
164:     // For now, we'll use a placeholder
165:     const introText = `Welcome to ${mama.name}'s kitchen! Let's cook together with love.`;
166:     await this.speak(introText, mamaId);
167:   }
168: 
169:   async speakVoiceTip(tip: string, mamaId: string): Promise<void> {
170:     const mama = getMamaById(parseInt(mamaId));
171:     if (!mama) return;
172: 
173:     // Add mama's personality to the tip
174:     const personalizedTip = this.addMamaPersonality(tip, mama.accent);
175:     await this.speak(personalizedTip, mamaId);
176:   }
177: 
178:   private addMamaPersonality(text: string, accent: string): string {
179:     switch (accent) {
180:       case 'Italian':
181:         return `Ecco! ${text} Bene!`;
182:       case 'Mexican':
183:         return `¡Órale! ${text} ¿Sí, mija?`;
184:       case 'Thai':
185:         return `${text} Ka!`;
186:       default:
187:         return text;
188:     }
189:   }
190: 
191:   private getCachedPhrase(text: string, mamaId: string): string | null {
192:     const phrases = ESSENTIAL_PHRASES[mamaId];
193:     if (!phrases) return null;
194: 
195:     // Simple text matching for common phrases
196:     const lowerText = text.toLowerCase();
197:     for (const [key, phrase] of Object.entries(phrases)) {
198:       if (lowerText.includes(key.replace('_', ' '))) {
199:         return phrase;
200:       }
201:     }
202:     return null;
203:   }
204: 
205:   private async playEssentialPhrase(phrase: string): Promise<void> {
206:     // For now, just log the phrase - in production this would play pre-recorded audio
207:     console.log(`Playing essential phrase: ${phrase}`);
208:     
209:     // Simulate audio playback delay
210:     await new Promise(resolve => setTimeout(resolve, phrase.length * 50));
211:   }
212: 
213:   private addToQueue(text: string, voiceId: string): void {
214:     this.audioQueue.push({ text, voiceId });
215:     if (!this.isProcessingQueue) {
216:       this.processQueue();
217:     }
218:   }
219: 
220:   private async processQueue(): Promise<void> {
221:     if (this.isProcessingQueue || this.audioQueue.length === 0) {
222:       return;
223:     }
224: 
225:     this.isProcessingQueue = true;
226: 
227:     while (this.audioQueue.length > 0) {
228:       const { text, voiceId } = this.audioQueue.shift()!;
229:       
230:       try {
231:         await this.generateAndPlaySpeech(text, voiceId);
232:       } catch (error) {
233:         console.error('[VoiceService] Error processing queue item:', error);
234:         this.isCurrentlyPlayingState = false;
235:         // Continue with next item instead of stopping the queue
236:       }
237:     }
238: 
239:     this.isProcessingQueue = false;
240:   }
241: 
242:   private async generateAndPlaySpeech(text: string, voiceId: string): Promise<void> {
243:     try {
244:       // Stop any currently playing audio
245:       this.stopCurrentAudio();
246:       this.isCurrentlyPlayingState = true;
247:       
248:       console.log(`[VoiceService] Calling TTS for: "${text.substring(0, 50)}..." with voiceId: ${voiceId}`);
249:       
250:       const { data, error } = await supabase.functions.invoke('text-to-speech', {
251:         body: {
252:           text,
253:           voiceId
254:         }
255:       });
256: 
257:       if (error) {
258:         console.error('[VoiceService] Edge function error details:', error);
259:         this.isCurrentlyPlayingState = false;
260:         throw new Error(`Voice service error: ${error.message || 'Edge Function error'}`);
261:       }
262: 
263:       if (!data?.audioData) {
264:         console.error('[VoiceService] No audio data in response:', data);
265:         this.isCurrentlyPlayingState = false;
266:         throw new Error('No audio data received from voice service');
267:       }
268: 
269:       console.log(`[VoiceService] Received audio data, length: ${data.audioData.length}`);
270: 
271:       // Create audio blob from base64 data
272:       const audioBlob = new Blob(
273:         [Uint8Array.from(atob(data.audioData), c => c.charCodeAt(0))], 
274:         { type: 'audio/mpeg' }
275:       );
276:       const audioUrl = URL.createObjectURL(audioBlob);
277: 
278:       // Create and play audio
279:       this.currentAudio = new Audio(audioUrl);
280:       
281:       return new Promise((resolve, reject) => {
282:         if (!this.currentAudio) {
283:           this.isCurrentlyPlayingState = false;
284:           reject(new Error('Failed to create audio element'));
285:           return;
286:         }
287: 
288:         this.currentAudio.onloadeddata = () => {
289:           console.log(`[VoiceService] Audio loaded and playing: "${text.substring(0, 30)}..."`);
290:         };
291: 
292:         this.currentAudio.onended = () => {
293:           console.log('[VoiceService] Audio playback ended');
294:           if (this.currentAudio) {
295:             URL.revokeObjectURL(this.currentAudio.src);
296:           }
297:           this.currentAudio = null;
298:           this.isCurrentlyPlayingState = false;
299:           resolve();
300:         };
301: 
302:         this.currentAudio.onerror = (error) => {
303:           console.error('[VoiceService] Audio playback error:', error);
304:           if (this.currentAudio) {
305:             URL.revokeObjectURL(this.currentAudio.src);
306:           }
307:           this.currentAudio = null;
308:           this.isCurrentlyPlayingState = false;
309:           reject(new Error('Audio playback failed'));
310:         };
311: 
312:         this.currentAudio.play().catch(error => {
313:           console.error('[VoiceService] Failed to play audio:', error);
314:           if (this.currentAudio) {
315:             URL.revokeObjectURL(this.currentAudio.src);
316:           }
317:           this.currentAudio = null;
318:           this.isCurrentlyPlayingState = false;
319:           reject(error);
320:         });
321:       });
322: 
323:     } catch (error) {
324:       console.error('[VoiceService] Speech generation failed:', error);
325:       this.isCurrentlyPlayingState = false;
326:       throw error;
327:     }
328:   }
329: 
330:   public stopCurrentAudio(): void {
331:     if (this.currentAudio) {
332:       this.currentAudio.pause();
333:       this.currentAudio.currentTime = 0;
334:       URL.revokeObjectURL(this.currentAudio.src);
335:       this.currentAudio = null;
336:     }
337:     this.isCurrentlyPlayingState = false;
338:   }
339: 
340:   public clearQueue(): void {
341:     this.audioQueue = [];
342:     this.stopCurrentAudio();
343:     this.isCurrentlyPlayingState = false;
344:   }
345: 
346:   public isCurrentlyPlaying(): boolean {
347:     return this.isCurrentlyPlayingState || (this.currentAudio !== null && !this.currentAudio.paused);
348:   }
349: 
350:   public getQueueLength(): number {
351:     return this.audioQueue.length;
352:   }
353: 
354:   private resolveMamaId(mamaId: string): string {
355:     // Handle numeric IDs from Cook page
356:     switch (mamaId) {
357:       case '1':
358:         return 'nonna_lucia';
359:       case '2':
360:         return 'abuela_rosa';
361:       case '3':
362:         return 'mae_malai';
363:       default:
364:         // Try to find by voice ID from mamas.ts
365:         const mama = getMamaById(parseInt(mamaId));
366:         return mama?.voiceId || mamaId;
367:     }
368:   }
369: }
````

## File: src/types/shopping.ts
````typescript
 1: export interface ShoppingList {
 2:   id: string;
 3:   user_id: string;
 4:   name: string;
 5:   created_at: string;
 6:   updated_at: string;
 7: }
 8: 
 9: export interface ShoppingListItem {
10:   id: string;
11:   shopping_list_id: string;
12:   ingredient_name: string;
13:   quantity?: string;
14:   recipe_id?: string;
15:   recipe_name?: string;
16:   category: string;
17:   category_id?: string;
18:   checked: boolean;
19:   created_at: string;
20:   updated_at: string;
21: }
22: 
23: export interface Ingredient {
24:   name: string;
25:   quantity?: string;
26: }
27: 
28: export interface AddToShoppingListRequest {
29:   ingredients: Ingredient[];
30:   recipeId: string;
31:   recipeName: string;
32: }
````

## File: src/types/userProgress.ts
````typescript
 1: export interface UserProgress {
 2:   id: string;
 3:   userId?: string; // For future user authentication
 4:   recipeId: string;
 5:   currentStep: number;
 6:   totalSteps: number;
 7:   startedAt: Date;
 8:   lastUpdatedAt: Date;
 9:   completedAt?: Date;
10:   cookingTimer?: {
11:     startTime: Date;
12:     duration: number; // in minutes
13:     isActive: boolean;
14:   };
15:   notes?: string[];
16:   rating?: number;
17:   difficulty_experienced?: 'Easy' | 'Medium' | 'Hard';
18:   // Voice-related progress
19:   voiceSettings?: {
20:     mode: 'full' | 'essential' | 'text';
21:     volume: number;
22:     speed: number;
23:     enabled: boolean;
24:     preferredVoice?: string;
25:   };
26: }
27: 
28: export interface CookingSession {
29:   recipeId: string;
30:   currentStep: number;
31:   isActive: boolean;
32:   startTime: Date;
33:   voiceEnabled: boolean;
34:   notes: string[];
35: }
36: 
37: // Local storage helpers for offline functionality
38: export const saveUserProgress = (progress: UserProgress): void => {
39:   const existing = getUserProgress();
40:   const updated = existing.filter(p => p.id !== progress.id);
41:   updated.push(progress);
42:   localStorage.setItem('cooking_progress', JSON.stringify(updated));
43: };
44: 
45: export const getUserProgress = (): UserProgress[] => {
46:   const stored = localStorage.getItem('cooking_progress');
47:   return stored ? JSON.parse(stored) : [];
48: };
49: 
50: export const getProgressByRecipe = (recipeId: string): UserProgress | undefined => {
51:   const progress = getUserProgress();
52:   return progress.find(p => p.recipeId === recipeId);
53: };
54: 
55: export const createNewProgress = (recipeId: string, totalSteps: number): UserProgress => {
56:   return {
57:     id: `${recipeId}_${Date.now()}`,
58:     recipeId,
59:     currentStep: 0,
60:     totalSteps,
61:     startedAt: new Date(),
62:     lastUpdatedAt: new Date(),
63:     notes: []
64:   };
65: };
````

## File: src/App.css
````css
 1: #root {
 2:   max-width: 1280px;
 3:   margin: 0 auto;
 4:   padding: 2rem;
 5:   text-align: center;
 6: }
 7: 
 8: .logo {
 9:   height: 6em;
10:   padding: 1.5em;
11:   will-change: filter;
12:   transition: filter 300ms;
13: }
14: .logo:hover {
15:   filter: drop-shadow(0 0 2em #646cffaa);
16: }
17: .logo.react:hover {
18:   filter: drop-shadow(0 0 2em #61dafbaa);
19: }
20: 
21: @keyframes logo-spin {
22:   from {
23:     transform: rotate(0deg);
24:   }
25:   to {
26:     transform: rotate(360deg);
27:   }
28: }
29: 
30: @media (prefers-reduced-motion: no-preference) {
31:   a:nth-of-type(2) .logo {
32:     animation: logo-spin infinite 20s linear;
33:   }
34: }
35: 
36: .card {
37:   padding: 2em;
38: }
39: 
40: .read-the-docs {
41:   color: #888;
42: }
````

## File: src/App.tsx
````typescript
 1: import { Toaster } from "@/components/ui/toaster";
 2: import { Toaster as Sonner } from "@/components/ui/sonner";
 3: import { TooltipProvider } from "@/components/ui/tooltip";
 4: import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 5: import { BrowserRouter, Routes, Route } from "react-router-dom";
 6: import { Layout } from "./components/Layout";
 7: import { AuthProvider } from "./contexts/AuthContext";
 8: import { ShoppingListProvider } from "./contexts/ShoppingListContext";
 9: import Mamas from "./pages/Mamas";
10: import MamaCookbook from "./pages/MamaCookbook";
11: import Recipes from "./pages/Recipes";
12: import RecipeDetail from "./pages/RecipeDetail";
13: import Cook from "./pages/Cook";
14: import Kitchen from "./pages/Kitchen";
15: import Auth from "./pages/Auth";
16: import ShoppingList from "./pages/ShoppingList";
17: import NotFound from "./pages/NotFound";
18: 
19: const queryClient = new QueryClient();
20: 
21: const App = () => (
22:   <QueryClientProvider client={queryClient}>
23:     <TooltipProvider>
24:       <AuthProvider>
25:         <ShoppingListProvider>
26:           <Toaster />
27:           <Sonner />
28:           <BrowserRouter>
29:             <Routes>
30:               <Route path="/" element={<Layout pageTitle="Choose Your Cooking Guide" pageSubtitle="Learn authentic recipes from traditional cooks"><Mamas /></Layout>} />
31:               <Route path="/mama/:mamaId" element={<Layout><MamaCookbook /></Layout>} />
32:               <Route path="/recipes" element={<Layout pageTitle="Discover Recipes" pageSubtitle="Find the perfect dish for any occasion"><Recipes /></Layout>} />
33:               <Route path="/recipe/:recipeId" element={<Layout><RecipeDetail /></Layout>} />
34:               <Route path="/cook" element={<Layout pageTitle="Cook" pageSubtitle="Choose a recipe to start cooking"><Cook /></Layout>} />
35:               <Route path="/cook/:recipeId" element={<Layout><Cook /></Layout>} />
36:               <Route path="/kitchen" element={<Layout pageTitle="My Kitchen" pageSubtitle="Your personal cooking space"><Kitchen /></Layout>} />
37:               <Route path="/auth" element={<Auth />} />
38:               <Route path="/shopping-list" element={<Layout pageTitle="Shopping List" pageSubtitle="Your ingredients for cooking"><ShoppingList /></Layout>} />
39:               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
40:               <Route path="*" element={<Layout><NotFound /></Layout>} />
41:             </Routes>
42:           </BrowserRouter>
43:         </ShoppingListProvider>
44:       </AuthProvider>
45:     </TooltipProvider>
46:   </QueryClientProvider>
47: );
48: 
49: export default App;
````

## File: src/index.css
````css
  1: @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Kalam:wght@300;400;700&family=Playfair+Display:wght@400;700;900&family=Fraunces:wght@400;600;900&family=Dancing+Script:wght@400;600;700&display=swap');
  2: @tailwind base;
  3: @tailwind components;
  4: @tailwind utilities;
  5: 
  6: /* MAMIA Design System - Warm Cooking App Colors */
  7: @layer base {
  8:   :root {
  9:     --background: 43 23% 96%;  /* Soft cream #FFF8DC */
 10:     --foreground: 14 26% 15%;  /* Rich brown #3E2723 */
 11: 
 12:     --card: 43 23% 98%;
 13:     --card-foreground: 14 26% 15%;
 14: 
 15:     --popover: 43 23% 96%;
 16:     --popover-foreground: 14 26% 15%;
 17: 
 18:     --primary: 11 75% 55%;     /* Warm terracotta #E35336 */
 19:     --primary-foreground: 43 23% 96%;
 20: 
 21:     --secondary: 43 15% 90%;
 22:     --secondary-foreground: 14 26% 15%;
 23: 
 24:     --muted: 43 15% 92%;
 25:     --muted-foreground: 14 16% 46%;
 26: 
 27:     --accent: 43 15% 88%;
 28:     --accent-foreground: 14 26% 15%;
 29: 
 30:     --destructive: 0 100% 27%;  /* Deep red #8B0000 */
 31:     --destructive-foreground: 43 23% 96%;
 32: 
 33:     --border: 43 20% 85%;
 34:     --input: 43 20% 85%;
 35:     --ring: 11 75% 55%;
 36: 
 37:     --radius: 0.75rem;
 38: 
 39:     /* Logo and Header Colors */
 40:     --logo-cream: 37 87% 84%;         /* Cream background #FBDFB3 from logo */
 41:     --logo-brown: 24 62% 24%;         /* Brown frame #643617 from logo */
 42:     --logo-brown-accent: 35 65% 56%;  /* Medium brown accent #D49856 */
 43: 
 44:     /* Cultural accent colors with gradients */
 45:     --italian-accent: 0 75% 45%;      /* Rich red #CC3333 */
 46:     --italian-secondary: 14 60% 35%;  /* Warm brown #8B4513 */
 47:     --italian-gold: 45 85% 60%;       /* Tuscan gold #D4AF37 */
 48:     
 49:     --mexican-accent: 18 90% 55%;     /* Vibrant orange #FF6B35 */
 50:     --mexican-secondary: 40 85% 50%;  /* Warm yellow #FFB347 */
 51:     --mexican-pink: 320 70% 65%;      /* Mexican pink #E91E63 */
 52:     
 53:     --thai-accent: 140 30% 45%;       /* Forest green #4A7C59 */
 54:     --thai-secondary: 60 40% 50%;     /* Lime green #9ACD32 */
 55:     --thai-gold: 50 90% 55%;          /* Thai gold #FFD700 */
 56: 
 57:     /* Dynamic backgrounds */
 58:     --marble-texture: linear-gradient(45deg, hsl(43 23% 96%) 0%, hsl(43 23% 98%) 50%, hsl(43 23% 94%) 100%);
 59:     --tile-pattern: repeating-conic-gradient(hsl(18 90% 55%) 0deg 90deg, hsl(40 85% 50%) 90deg 180deg);
 60:     --silk-texture: radial-gradient(ellipse at center, hsl(140 30% 45%) 0%, hsl(60 40% 50%) 70%, hsl(50 90% 55%) 100%);
 61: 
 62:     /* Cultural Background Patterns */
 63:     --pattern-basil: radial-gradient(circle at 10% 20%, rgba(46, 125, 50, 0.03) 0%, transparent 30%),
 64:                      radial-gradient(circle at 90% 80%, rgba(46, 125, 50, 0.02) 0%, transparent 25%);
 65:     
 66:     --pattern-papel: linear-gradient(45deg, transparent 40%, rgba(255, 87, 34, 0.02) 40%, rgba(255, 87, 34, 0.02) 60%, transparent 60%),
 67:                      linear-gradient(-45deg, transparent 40%, rgba(255, 193, 7, 0.015) 40%, rgba(255, 193, 7, 0.015) 60%, transparent 60%);
 68:     
 69:     --pattern-lotus: radial-gradient(ellipse at 30% 30%, rgba(255, 215, 0, 0.025) 0%, transparent 40%),
 70:                      radial-gradient(ellipse at 70% 70%, rgba(255, 215, 0, 0.015) 0%, transparent 35%);
 71:     
 72:     --pattern-checkered: linear-gradient(90deg, transparent 48%, rgba(139, 69, 19, 0.015) 48%, rgba(139, 69, 19, 0.015) 52%, transparent 52%),
 73:                          linear-gradient(0deg, transparent 48%, rgba(139, 69, 19, 0.015) 48%, rgba(139, 69, 19, 0.015) 52%, transparent 52%);
 74: 
 75:     --sidebar-background: 43 23% 96%;
 76:     --sidebar-foreground: 14 26% 15%;
 77:     --sidebar-primary: 11 75% 55%;
 78:     --sidebar-primary-foreground: 43 23% 96%;
 79:     --sidebar-accent: 43 15% 88%;
 80:     --sidebar-accent-foreground: 14 26% 15%;
 81:     --sidebar-border: 43 20% 85%;
 82:     --sidebar-ring: 11 75% 55%;
 83:   }
 84: }
 85: 
 86: @layer base {
 87:   * {
 88:     @apply border-border;
 89:   }
 90: 
 91:   body {
 92:     @apply bg-background text-foreground font-sans;
 93:     background-image: 
 94:       radial-gradient(circle at 1px 1px, rgba(62, 39, 35, 0.08) 1px, transparent 0);
 95:     background-size: 20px 20px;
 96:     font-family: system-ui, -apple-system, sans-serif;
 97:   }
 98: 
 99:   .font-heading {
100:     font-family: 'Nunito', system-ui, sans-serif;
101:   }
102: 
103:   /* Scrollbar utilities */
104:   .scrollbar-hide {
105:     -ms-overflow-style: none;
106:     scrollbar-width: none;
107:   }
108:   .scrollbar-hide::-webkit-scrollbar {
109:     display: none;
110:   }
111: 
112:   /* Recipe detail animations */
113:   .recipe-fade-in {
114:     animation: fade-in 0.4s ease-out;
115:   }
116: 
117:   /* Gentle pulse for CTA button */
118:   @keyframes gentle-pulse {
119:     0%, 100% { transform: scale(1); }
120:     50% { transform: scale(1.02); }
121:   }
122: 
123:   .gentle-pulse {
124:     animation: gentle-pulse 2s ease-in-out infinite;
125:   }
126: 
127:   .font-handwritten {
128:     font-family: 'Kalam', cursive;
129:   }
130: 
131:   /* Cultural typography */
132:   .font-italian {
133:     font-family: 'Playfair Display', serif;
134:   }
135:   
136:   .font-mexican {
137:     font-family: 'Fraunces', serif;
138:   }
139:   
140:   .font-thai {
141:     font-family: 'Dancing Script', cursive;
142:   }
143: 
144:   /* Page transition animations */
145:   @keyframes book-page-turn {
146:     0% { transform: perspective(1000px) rotateY(0deg); opacity: 1; }
147:     50% { transform: perspective(1000px) rotateY(-90deg); opacity: 0.5; }
148:     100% { transform: perspective(1000px) rotateY(-180deg); opacity: 0; }
149:   }
150: 
151:   @keyframes book-page-enter {
152:     0% { transform: perspective(1000px) rotateY(180deg); opacity: 0; }
153:     50% { transform: perspective(1000px) rotateY(90deg); opacity: 0.5; }
154:     100% { transform: perspective(1000px) rotateY(0deg); opacity: 1; }
155:   }
156: 
157:   /* 3D card stack animations */
158:   @keyframes card-swipe-left {
159:     0% { transform: translateX(0) rotate(0deg); opacity: 1; }
160:     100% { transform: translateX(-100vw) rotate(-30deg); opacity: 0; }
161:   }
162: 
163:   @keyframes card-swipe-right {
164:     0% { transform: translateX(0) rotate(0deg); opacity: 1; }
165:     100% { transform: translateX(100vw) rotate(30deg); opacity: 0; }
166:   }
167: 
168:   @keyframes card-stack-reveal {
169:     0% { transform: translateY(20px) scale(0.9); opacity: 0; }
170:     100% { transform: translateY(0) scale(1); opacity: 1; }
171:   }
172: 
173:   /* Voice waveform animations */
174:   @keyframes waveform-speaking {
175:     0%, 100% { height: 4px; }
176:     50% { height: 20px; }
177:   }
178: 
179:   @keyframes waveform-listening {
180:     0%, 100% { height: 8px; background-color: hsl(220 90% 60%); }
181:     50% { height: 16px; background-color: hsl(220 90% 70%); }
182:   }
183: 
184:   @keyframes waveform-processing {
185:     0%, 100% { transform: scale(1); background-color: hsl(18 90% 55%); }
186:     50% { transform: scale(1.2); background-color: hsl(18 90% 65%); }
187:   }
188: 
189:   /* Parallax cultural backgrounds */
190:   .parallax-italian {
191:     background: var(--marble-texture);
192:     background-attachment: fixed;
193:   }
194: 
195:   .parallax-mexican {
196:     background: var(--tile-pattern);
197:     background-size: 40px 40px;
198:   }
199: 
200:   .parallax-thai {
201:     background: var(--silk-texture);
202:     background-attachment: fixed;
203:   }
204: 
205:   /* Masonry layout */
206:   .masonry-grid {
207:     column-count: 3;
208:     column-gap: 1rem;
209:     break-inside: avoid;
210:   }
211: 
212:   @media (max-width: 768px) {
213:     .masonry-grid {
214:       column-count: 2;
215:     }
216:   }
217: 
218:   @media (max-width: 480px) {
219:     .masonry-grid {
220:       column-count: 1;
221:     }
222:   }
223: 
224:   /* Cooking streak progress */
225:   @keyframes streak-glow {
226:     0%, 100% { box-shadow: 0 0 5px hsl(18 90% 55%); }
227:     50% { box-shadow: 0 0 20px hsl(18 90% 55%), 0 0 30px hsl(18 90% 65%); }
228:   }
229: 
230:   .streak-glow {
231:     animation: streak-glow 2s ease-in-out infinite;
232:   }
233: 
234:   /* Cooking animations */
235:   @keyframes cooking-pot {
236:     0%, 100% { transform: rotate(0deg) scale(1); }
237:     25% { transform: rotate(-2deg) scale(1.02); }
238:     50% { transform: rotate(0deg) scale(1.05); }
239:     75% { transform: rotate(2deg) scale(1.02); }
240:   }
241: 
242:   @keyframes steam-rise {
243:     0% { 
244:       transform: translateY(0) scale(1); 
245:       opacity: 0.8; 
246:     }
247:     50% { 
248:       transform: translateY(-20px) scale(1.1); 
249:       opacity: 0.6; 
250:     }
251:     100% { 
252:       transform: translateY(-40px) scale(1.2); 
253:       opacity: 0; 
254:     }
255:   }
256: 
257:   @keyframes spoon-stir {
258:     0% { transform: rotate(0deg); }
259:     25% { transform: rotate(15deg); }
260:     50% { transform: rotate(0deg); }
261:     75% { transform: rotate(-15deg); }
262:     100% { transform: rotate(0deg); }
263:   }
264: 
265:   @keyframes cultural-notes {
266:     0% { 
267:       transform: translateY(0) rotate(0deg) scale(1); 
268:       opacity: 0.7; 
269:     }
270:     50% { 
271:       transform: translateY(-30px) rotate(180deg) scale(0.8); 
272:       opacity: 0.5; 
273:     }
274:     100% { 
275:       transform: translateY(-60px) rotate(360deg) scale(0.6); 
276:       opacity: 0; 
277:     }
278:   }
279: 
280:   @keyframes heart-float {
281:     0% { 
282:       transform: translateY(0) scale(1); 
283:       opacity: 1; 
284:     }
285:     100% { 
286:       transform: translateY(-50px) scale(1.2); 
287:       opacity: 0; 
288:     }
289:   }
290: 
291:   /* Achievement celebrations */
292:   @keyframes confetti-fall {
293:     0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
294:     100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
295:   }
296: 
297:   .confetti {
298:     position: fixed;
299:     width: 10px;
300:     height: 10px;
301:     background: hsl(18 90% 55%);
302:     animation: confetti-fall 3s linear infinite;
303:   }
304: 
305:   /* Animation classes */
306:   .cooking-pot { animation: cooking-pot 2s ease-in-out infinite; }
307:   .steam-rise { animation: steam-rise 3s ease-out infinite; }
308:   .spoon-stir { animation: spoon-stir 1.5s ease-in-out infinite; }
309:   .cultural-notes { animation: cultural-notes 4s ease-out infinite; }
310:   .heart-float { animation: heart-float 2s ease-out forwards; }
311: }
312: 
313: @layer utilities {
314:   /* Cultural colors */
315:   .text-italian { color: hsl(var(--italian-accent)); }
316:   .text-italian-gold { color: hsl(var(--italian-gold)); }
317:   .text-mexican { color: hsl(var(--mexican-accent)); }
318:   .text-mexican-pink { color: hsl(var(--mexican-pink)); }
319:   .text-thai { color: hsl(var(--thai-accent)); }
320:   .text-thai-gold { color: hsl(var(--thai-gold)); }
321:   
322:   .bg-italian { background-color: hsl(var(--italian-accent)); }
323:   .bg-italian-gradient { background: linear-gradient(135deg, hsl(var(--italian-accent)), hsl(var(--italian-gold))); }
324:   .bg-mexican { background-color: hsl(var(--mexican-accent)); }
325:   .bg-mexican-gradient { background: linear-gradient(135deg, hsl(var(--mexican-accent)), hsl(var(--mexican-pink))); }
326:   .bg-thai { background-color: hsl(var(--thai-accent)); }
327:   .bg-thai-gradient { background: linear-gradient(135deg, hsl(var(--thai-accent)), hsl(var(--thai-gold))); }
328: 
329:   /* Enhanced shadows */
330:   .shadow-warm {
331:     box-shadow: 0 4px 6px -1px rgba(227, 83, 54, 0.1), 0 2px 4px -1px rgba(227, 83, 54, 0.06);
332:   }
333: 
334:   .shadow-paper {
335:     box-shadow: 
336:       0 1px 3px rgba(62, 39, 35, 0.12),
337:       0 1px 2px rgba(62, 39, 35, 0.08);
338:   }
339: 
340:   .shadow-cultural {
341:     box-shadow: 
342:       0 10px 25px -5px rgba(227, 83, 54, 0.1),
343:       0 8px 10px -6px rgba(227, 83, 54, 0.1);
344:   }
345: 
346:   .shadow-3d {
347:     box-shadow: 
348:       0 25px 50px -12px rgba(0, 0, 0, 0.25),
349:       0 0 0 1px rgba(255, 255, 255, 0.1);
350:   }
351: 
352:   /* 3D transforms */
353:   .transform-3d {
354:     transform-style: preserve-3d;
355:   }
356: 
357:   .perspective-1000 {
358:     perspective: 1000px;
359:   }
360: 
361:   /* Card stack utilities */
362:   .card-stack-1 { transform: translateY(0px) scale(1) rotate(0deg); z-index: 3; }
363:   .card-stack-2 { transform: translateY(8px) scale(0.96) rotate(1deg); z-index: 2; }
364:   .card-stack-3 { transform: translateY(16px) scale(0.92) rotate(-1deg); z-index: 1; }
365: 
366:   /* Cultural Background Patterns */
367:   .bg-italian-pattern { 
368:     background: var(--pattern-basil), var(--pattern-checkered);
369:   }
370:   .bg-mexican-pattern { 
371:     background: var(--pattern-papel);
372:   }
373:   .bg-thai-pattern { 
374:     background: var(--pattern-lotus);
375:   }
376: 
377:   /* Cultural Borders */
378:   .border-italian {
379:     border: 2px solid;
380:     border-image: linear-gradient(45deg, 
381:       hsl(var(--italian-accent)), 
382:       rgba(139, 69, 19, 0.6),
383:       hsl(var(--italian-accent))
384:     ) 1;
385:   }
386:   
387:   .border-mexican {
388:     border: 3px solid;
389:     border-image: repeating-linear-gradient(45deg,
390:       hsl(var(--mexican-accent)) 0px,
391:       hsl(var(--mexican-accent)) 10px,
392:       rgba(255, 193, 7, 0.8) 10px,
393:       rgba(255, 193, 7, 0.8) 20px
394:     ) 1;
395:   }
396:   
397:   .border-thai {
398:     border: 2px solid;
399:     border-image: linear-gradient(45deg,
400:       hsl(var(--thai-accent)),
401:       rgba(255, 215, 0, 0.6),
402:       hsl(var(--thai-accent))
403:     ) 1;
404:   }
405: 
406:   /* Accessibility Enhancements */
407:   .focus-visible:focus-visible {
408:     outline: 2px solid hsl(var(--primary));
409:     outline-offset: 2px;
410:   }
411: 
412:   /* High contrast mode */
413:   .high-contrast {
414:     --background: 0 0% 100%;
415:     --foreground: 0 0% 0%;
416:     --primary: 240 100% 50%;
417:     --primary-foreground: 0 0% 100%;
418:     --secondary: 0 0% 90%;
419:     --secondary-foreground: 0 0% 0%;
420:     --muted: 0 0% 85%;
421:     --muted-foreground: 0 0% 20%;
422:     --accent: 0 0% 80%;
423:     --accent-foreground: 0 0% 0%;
424:     --border: 0 0% 60%;
425:     --input: 0 0% 60%;
426:   }
427: 
428:   .high-contrast img {
429:     filter: contrast(1.2) brightness(1.1);
430:   }
431: 
432:   .high-contrast .bg-pattern {
433:     display: none;
434:   }
435: 
436:   /* Reduced motion preferences */
437:   .reduce-motion,
438:   .reduce-motion * {
439:     animation-duration: 0.01ms !important;
440:     animation-iteration-count: 1 !important;
441:     transition-duration: 0.01ms !important;
442:     scroll-behavior: auto !important;
443:   }
444: 
445:   /* Enhanced focus indicators */
446:   button:focus-visible,
447:   input:focus-visible,
448:   textarea:focus-visible,
449:   select:focus-visible,
450:   [tabindex]:focus-visible {
451:     outline: 2px solid hsl(var(--primary));
452:     outline-offset: 2px;
453:     border-radius: 4px;
454:   }
455: 
456:   /* Screen reader only content */
457:   .sr-only {
458:     position: absolute;
459:     width: 1px;
460:     height: 1px;
461:     padding: 0;
462:     margin: -1px;
463:     overflow: hidden;
464:     clip: rect(0, 0, 0, 0);
465:     white-space: nowrap;
466:     border: 0;
467:   }
468: 
469:   /* Skip links */
470:   .skip-link {
471:     position: absolute;
472:     top: -40px;
473:     left: 6px;
474:     background: hsl(var(--primary));
475:     color: hsl(var(--primary-foreground));
476:     padding: 8px;
477:     text-decoration: none;
478:     border-radius: 4px;
479:     z-index: 100;
480:   }
481: 
482:   .skip-link:focus {
483:     top: 6px;
484:   }
485: }
````

## File: src/main.tsx
````typescript
1: import { createRoot } from 'react-dom/client'
2: import App from './App.tsx'
3: import './index.css'
4: 
5: createRoot(document.getElementById("root")!).render(<App />);
````

## File: src/vite-env.d.ts
````typescript
1: /// <reference types="vite/client" />
````

## File: supabase/functions/get-voice-ids/index.ts
````typescript
 1: import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
 2: 
 3: const corsHeaders = {
 4:   'Access-Control-Allow-Origin': '*',
 5:   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
 6: };
 7: 
 8: serve(async (req) => {
 9:   // Handle CORS preflight requests
10:   if (req.method === 'OPTIONS') {
11:     return new Response(null, { headers: corsHeaders });
12:   }
13: 
14:   try {
15:     // Return the voice IDs from environment variables
16:     const voiceIds = {
17:       ELEVENLABS_NONNA_VOICE_ID: Deno.env.get('ELEVENLABS_NONNA_VOICE_ID'),
18:       ELEVENLABS_ABUELA_VOICE_ID: Deno.env.get('ELEVENLABS_ABUELA_VOICE_ID'),
19:       ELEVENLABS_MAE_VOICE_ID: Deno.env.get('ELEVENLABS_MAE_VOICE_ID')
20:     };
21: 
22:     return new Response(
23:       JSON.stringify(voiceIds),
24:       { 
25:         headers: { 
26:           ...corsHeaders, 
27:           'Content-Type': 'application/json' 
28:         } 
29:       }
30:     );
31: 
32:   } catch (error) {
33:     console.error('Get voice IDs function error:', error);
34:     return new Response(
35:       JSON.stringify({ error: 'Internal server error' }),
36:       { 
37:         status: 500, 
38:         headers: { 
39:           ...corsHeaders, 
40:           'Content-Type': 'application/json' 
41:         } 
42:       }
43:     );
44:   }
45: });
````

## File: supabase/functions/text-to-speech/index.ts
````typescript
  1: import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
  2: 
  3: const corsHeaders = {
  4:   'Access-Control-Allow-Origin': '*',
  5:   'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  6: };
  7: 
  8: interface TextToSpeechRequest {
  9:   text: string;
 10:   voiceId: string;
 11:   model?: string;
 12:   stability?: number;
 13:   similarity_boost?: number;
 14: }
 15: 
 16: serve(async (req) => {
 17:   // Handle CORS preflight requests
 18:   if (req.method === 'OPTIONS') {
 19:     return new Response(null, { headers: corsHeaders });
 20:   }
 21: 
 22:   try {
 23:     console.log('[TTS] Request received:', req.method);
 24:     
 25:     let requestBody;
 26:     try {
 27:       requestBody = await req.json();
 28:       console.log('[TTS] Request body parsed:', { 
 29:         textLength: requestBody.text?.length, 
 30:         voiceId: requestBody.voiceId,
 31:         model: requestBody.model 
 32:       });
 33:     } catch (parseError) {
 34:       console.error('[TTS] Failed to parse request body:', parseError);
 35:       return new Response(
 36:         JSON.stringify({ error: 'Invalid JSON in request body' }),
 37:         { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
 38:       );
 39:     }
 40: 
 41:     const { text, voiceId, model = "eleven_multilingual_v2", stability = 0.5, similarity_boost = 0.75 }: TextToSpeechRequest = requestBody;
 42: 
 43:     // Validate required fields
 44:     if (!text || !voiceId) {
 45:       console.error('[TTS] Missing required fields:', { hasText: !!text, hasVoiceId: !!voiceId });
 46:       return new Response(
 47:         JSON.stringify({ error: 'Text and voiceId are required' }),
 48:         { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
 49:       );
 50:     }
 51: 
 52:     // Validate text length (ElevenLabs has limits)
 53:     if (text.length > 5000) {
 54:       console.error('[TTS] Text too long:', text.length);
 55:       return new Response(
 56:         JSON.stringify({ error: 'Text too long (max 5000 characters)' }),
 57:         { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
 58:       );
 59:     }
 60: 
 61:     const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
 62:     if (!ELEVENLABS_API_KEY) {
 63:       console.error('[TTS] ElevenLabs API key not configured');
 64:       return new Response(
 65:         JSON.stringify({ error: 'ElevenLabs API key not configured' }),
 66:         { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
 67:       );
 68:     }
 69: 
 70:     console.log(`[TTS] Generating speech for voice ${voiceId}: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
 71: 
 72:     // Add timeout to ElevenLabs request
 73:     const controller = new AbortController();
 74:     const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
 75: 
 76:     try {
 77:       const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
 78:         method: 'POST',
 79:         headers: {
 80:           'Accept': 'audio/mpeg',
 81:           'Content-Type': 'application/json',
 82:           'xi-api-key': ELEVENLABS_API_KEY,
 83:         },
 84:         body: JSON.stringify({
 85:           text,
 86:           model_id: model,
 87:           voice_settings: {
 88:             stability,
 89:             similarity_boost,
 90:           },
 91:         }),
 92:         signal: controller.signal,
 93:       });
 94: 
 95:       clearTimeout(timeoutId);
 96: 
 97:       console.log(`[TTS] ElevenLabs response status: ${response.status}`);
 98: 
 99:       if (!response.ok) {
100:         const errorText = await response.text();
101:         console.error('[TTS] ElevenLabs API error:', response.status, errorText);
102:         return new Response(
103:           JSON.stringify({ 
104:             error: `ElevenLabs API error: ${response.status}`,
105:             details: errorText 
106:           }),
107:           { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
108:         );
109:       }
110: 
111:       const audioBuffer = await response.arrayBuffer();
112:       console.log(`[TTS] Audio buffer received: ${audioBuffer.byteLength} bytes`);
113: 
114:       if (audioBuffer.byteLength === 0) {
115:         console.error('[TTS] Empty audio buffer received');
116:         return new Response(
117:           JSON.stringify({ error: 'Empty audio buffer received from ElevenLabs' }),
118:           { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
119:         );
120:       }
121: 
122:       const base64Audio = btoa(String.fromCharCode(...new Uint8Array(audioBuffer)));
123:       console.log(`[TTS] Successfully generated ${audioBuffer.byteLength} bytes of audio, base64 length: ${base64Audio.length}`);
124: 
125:       return new Response(
126:         JSON.stringify({ 
127:           audioData: base64Audio,
128:           contentType: 'audio/mpeg'
129:         }),
130:         { 
131:           headers: { 
132:             ...corsHeaders, 
133:             'Content-Type': 'application/json' 
134:           } 
135:         }
136:       );
137: 
138:     } catch (fetchError) {
139:       clearTimeout(timeoutId);
140:       if (fetchError.name === 'AbortError') {
141:         console.error('[TTS] Request timeout');
142:         return new Response(
143:           JSON.stringify({ error: 'Request timeout' }),
144:           { status: 408, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
145:         );
146:       }
147:       throw fetchError;
148:     }
149: 
150:   } catch (error) {
151:     console.error('Text-to-speech function error:', error);
152:     return new Response(
153:       JSON.stringify({ error: 'Internal server error' }),
154:       { 
155:         status: 500, 
156:         headers: { 
157:           ...corsHeaders, 
158:           'Content-Type': 'application/json' 
159:         } 
160:       }
161:     );
162:   }
163: });
````

## File: supabase/migrations/20250711064419-ad7b1d1c-9e6d-4161-b159-6525cb751fdc.sql
````sql
  1: -- Create shopping lists table
  2: CREATE TABLE public.shopping_lists (
  3:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  4:   user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  5:   name TEXT NOT NULL DEFAULT 'My Shopping List',
  6:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  7:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
  8: );
  9: 
 10: -- Create shopping list items table
 11: CREATE TABLE public.shopping_list_items (
 12:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
 13:   shopping_list_id UUID NOT NULL REFERENCES public.shopping_lists(id) ON DELETE CASCADE,
 14:   ingredient_name TEXT NOT NULL,
 15:   quantity TEXT,
 16:   recipe_id TEXT,
 17:   recipe_name TEXT,
 18:   category TEXT DEFAULT 'Other',
 19:   checked BOOLEAN NOT NULL DEFAULT FALSE,
 20:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 21:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 22: );
 23: 
 24: -- Create profiles table for user data
 25: CREATE TABLE public.profiles (
 26:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
 27:   user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
 28:   display_name TEXT,
 29:   avatar_url TEXT,
 30:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 31:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 32: );
 33: 
 34: -- Enable Row Level Security
 35: ALTER TABLE public.shopping_lists ENABLE ROW LEVEL SECURITY;
 36: ALTER TABLE public.shopping_list_items ENABLE ROW LEVEL SECURITY;
 37: ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
 38: 
 39: -- Create policies for shopping_lists
 40: CREATE POLICY "Users can view their own shopping lists" 
 41: ON public.shopping_lists 
 42: FOR SELECT 
 43: USING (auth.uid() = user_id);
 44: 
 45: CREATE POLICY "Users can create their own shopping lists" 
 46: ON public.shopping_lists 
 47: FOR INSERT 
 48: WITH CHECK (auth.uid() = user_id);
 49: 
 50: CREATE POLICY "Users can update their own shopping lists" 
 51: ON public.shopping_lists 
 52: FOR UPDATE 
 53: USING (auth.uid() = user_id);
 54: 
 55: CREATE POLICY "Users can delete their own shopping lists" 
 56: ON public.shopping_lists 
 57: FOR DELETE 
 58: USING (auth.uid() = user_id);
 59: 
 60: -- Create policies for shopping_list_items
 61: CREATE POLICY "Users can view their own shopping list items" 
 62: ON public.shopping_list_items 
 63: FOR SELECT 
 64: USING (auth.uid() = (SELECT user_id FROM public.shopping_lists WHERE id = shopping_list_id));
 65: 
 66: CREATE POLICY "Users can create their own shopping list items" 
 67: ON public.shopping_list_items 
 68: FOR INSERT 
 69: WITH CHECK (auth.uid() = (SELECT user_id FROM public.shopping_lists WHERE id = shopping_list_id));
 70: 
 71: CREATE POLICY "Users can update their own shopping list items" 
 72: ON public.shopping_list_items 
 73: FOR UPDATE 
 74: USING (auth.uid() = (SELECT user_id FROM public.shopping_lists WHERE id = shopping_list_id));
 75: 
 76: CREATE POLICY "Users can delete their own shopping list items" 
 77: ON public.shopping_list_items 
 78: FOR DELETE 
 79: USING (auth.uid() = (SELECT user_id FROM public.shopping_lists WHERE id = shopping_list_id));
 80: 
 81: -- Create policies for profiles
 82: CREATE POLICY "Profiles are viewable by everyone" 
 83: ON public.profiles 
 84: FOR SELECT 
 85: USING (true);
 86: 
 87: CREATE POLICY "Users can update their own profile" 
 88: ON public.profiles 
 89: FOR UPDATE 
 90: USING (auth.uid() = user_id);
 91: 
 92: CREATE POLICY "Users can insert their own profile" 
 93: ON public.profiles 
 94: FOR INSERT 
 95: WITH CHECK (auth.uid() = user_id);
 96: 
 97: -- Create function to update timestamps
 98: CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 99: RETURNS TRIGGER AS $$
100: BEGIN
101:   NEW.updated_at = now();
102:   RETURN NEW;
103: END;
104: $$ LANGUAGE plpgsql;
105: 
106: -- Create triggers for automatic timestamp updates
107: CREATE TRIGGER update_shopping_lists_updated_at
108:   BEFORE UPDATE ON public.shopping_lists
109:   FOR EACH ROW
110:   EXECUTE FUNCTION public.update_updated_at_column();
111: 
112: CREATE TRIGGER update_shopping_list_items_updated_at
113:   BEFORE UPDATE ON public.shopping_list_items
114:   FOR EACH ROW
115:   EXECUTE FUNCTION public.update_updated_at_column();
116: 
117: CREATE TRIGGER update_profiles_updated_at
118:   BEFORE UPDATE ON public.profiles
119:   FOR EACH ROW
120:   EXECUTE FUNCTION public.update_updated_at_column();
121: 
122: -- Create function to handle new user signup
123: CREATE OR REPLACE FUNCTION public.handle_new_user()
124: RETURNS TRIGGER AS $$
125: BEGIN
126:   INSERT INTO public.profiles (user_id, display_name)
127:   VALUES (NEW.id, NEW.raw_user_meta_data ->> 'display_name');
128:   
129:   -- Create default shopping list for new user
130:   INSERT INTO public.shopping_lists (user_id, name)
131:   VALUES (NEW.id, 'My Shopping List');
132:   
133:   RETURN NEW;
134: END;
135: $$ LANGUAGE plpgsql SECURITY DEFINER;
136: 
137: -- Trigger the function every time a user is created
138: CREATE TRIGGER on_auth_user_created
139:   AFTER INSERT ON auth.users
140:   FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
````

## File: supabase/migrations/20250711070342-48a98a78-baff-433b-827c-08513153f1e9.sql
````sql
  1: -- Create food categories table
  2: CREATE TABLE public.food_categories (
  3:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  4:   name TEXT NOT NULL,
  5:   icon TEXT,
  6:   sort_order INTEGER DEFAULT 0,
  7:   user_id UUID REFERENCES auth.users(id), -- NULL for system categories
  8:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  9:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 10: );
 11: 
 12: -- Enable RLS
 13: ALTER TABLE public.food_categories ENABLE ROW LEVEL SECURITY;
 14: 
 15: -- Create policies for food categories
 16: CREATE POLICY "Food categories are viewable by everyone" 
 17: ON public.food_categories 
 18: FOR SELECT 
 19: USING (true);
 20: 
 21: CREATE POLICY "Users can create their own categories" 
 22: ON public.food_categories 
 23: FOR INSERT 
 24: WITH CHECK (auth.uid() = user_id OR user_id IS NULL);
 25: 
 26: CREATE POLICY "Users can update their own categories" 
 27: ON public.food_categories 
 28: FOR UPDATE 
 29: USING (auth.uid() = user_id);
 30: 
 31: CREATE POLICY "Users can delete their own categories" 
 32: ON public.food_categories 
 33: FOR DELETE 
 34: USING (auth.uid() = user_id);
 35: 
 36: -- Create ingredient aliases table
 37: CREATE TABLE public.ingredient_aliases (
 38:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
 39:   canonical_name TEXT NOT NULL,
 40:   alias_name TEXT NOT NULL,
 41:   category_id UUID REFERENCES food_categories(id),
 42:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 43: );
 44: 
 45: -- Enable RLS
 46: ALTER TABLE public.ingredient_aliases ENABLE ROW LEVEL SECURITY;
 47: 
 48: -- Create policies for ingredient aliases
 49: CREATE POLICY "Ingredient aliases are viewable by everyone" 
 50: ON public.ingredient_aliases 
 51: FOR SELECT 
 52: USING (true);
 53: 
 54: -- Create shopping list templates table
 55: CREATE TABLE public.shopping_list_templates (
 56:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
 57:   user_id UUID NOT NULL REFERENCES auth.users(id),
 58:   name TEXT NOT NULL,
 59:   items JSONB NOT NULL,
 60:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
 61:   updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 62: );
 63: 
 64: -- Enable RLS
 65: ALTER TABLE public.shopping_list_templates ENABLE ROW LEVEL SECURITY;
 66: 
 67: -- Create policies for shopping list templates
 68: CREATE POLICY "Users can view their own templates" 
 69: ON public.shopping_list_templates 
 70: FOR SELECT 
 71: USING (auth.uid() = user_id);
 72: 
 73: CREATE POLICY "Users can create their own templates" 
 74: ON public.shopping_list_templates 
 75: FOR INSERT 
 76: WITH CHECK (auth.uid() = user_id);
 77: 
 78: CREATE POLICY "Users can update their own templates" 
 79: ON public.shopping_list_templates 
 80: FOR UPDATE 
 81: USING (auth.uid() = user_id);
 82: 
 83: CREATE POLICY "Users can delete their own templates" 
 84: ON public.shopping_list_templates 
 85: FOR DELETE 
 86: USING (auth.uid() = user_id);
 87: 
 88: -- Create collaborative shopping lists table
 89: CREATE TABLE public.shopping_list_collaborators (
 90:   id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
 91:   shopping_list_id UUID NOT NULL REFERENCES shopping_lists(id) ON DELETE CASCADE,
 92:   user_id UUID NOT NULL REFERENCES auth.users(id),
 93:   permission_level TEXT NOT NULL DEFAULT 'edit', -- 'view', 'edit', 'admin'
 94:   created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
 95: );
 96: 
 97: -- Enable RLS
 98: ALTER TABLE public.shopping_list_collaborators ENABLE ROW LEVEL SECURITY;
 99: 
100: -- Create policies for collaborators
101: CREATE POLICY "Users can view collaborators of their lists" 
102: ON public.shopping_list_collaborators 
103: FOR SELECT 
104: USING (
105:   auth.uid() = user_id OR 
106:   auth.uid() = (SELECT user_id FROM shopping_lists WHERE id = shopping_list_id)
107: );
108: 
109: CREATE POLICY "List owners can manage collaborators" 
110: ON public.shopping_list_collaborators 
111: FOR ALL 
112: USING (auth.uid() = (SELECT user_id FROM shopping_lists WHERE id = shopping_list_id));
113: 
114: -- Add category_id to shopping_list_items
115: ALTER TABLE public.shopping_list_items 
116: ADD COLUMN category_id UUID REFERENCES food_categories(id);
117: 
118: -- Create triggers for updated_at
119: CREATE TRIGGER update_food_categories_updated_at
120: BEFORE UPDATE ON public.food_categories
121: FOR EACH ROW
122: EXECUTE FUNCTION public.update_updated_at_column();
123: 
124: CREATE TRIGGER update_shopping_list_templates_updated_at
125: BEFORE UPDATE ON public.shopping_list_templates
126: FOR EACH ROW
127: EXECUTE FUNCTION public.update_updated_at_column();
128: 
129: -- Insert default system categories
130: INSERT INTO public.food_categories (name, icon, sort_order, user_id) VALUES
131: ('Produce', '🥬', 1, NULL),
132: ('Meat & Seafood', '🥩', 2, NULL),
133: ('Dairy & Eggs', '🥛', 3, NULL),
134: ('Pantry', '🥫', 4, NULL),
135: ('Frozen', '🧊', 5, NULL),
136: ('Bakery', '🍞', 6, NULL),
137: ('Beverages', '🥤', 7, NULL),
138: ('Snacks', '🍿', 8, NULL),
139: ('Health & Beauty', '🧴', 9, NULL),
140: ('Other', '📦', 10, NULL);
141: 
142: -- Insert common ingredient aliases
143: INSERT INTO public.ingredient_aliases (canonical_name, alias_name, category_id) VALUES
144: ('onions', 'onion', (SELECT id FROM food_categories WHERE name = 'Produce' AND user_id IS NULL)),
145: ('onions', 'yellow onions', (SELECT id FROM food_categories WHERE name = 'Produce' AND user_id IS NULL)),
146: ('onions', 'white onions', (SELECT id FROM food_categories WHERE name = 'Produce' AND user_id IS NULL)),
147: ('tomatoes', 'tomato', (SELECT id FROM food_categories WHERE name = 'Produce' AND user_id IS NULL)),
148: ('garlic', 'garlic cloves', (SELECT id FROM food_categories WHERE name = 'Produce' AND user_id IS NULL)),
149: ('chicken breast', 'chicken breasts', (SELECT id FROM food_categories WHERE name = 'Meat & Seafood' AND user_id IS NULL)),
150: ('ground beef', 'beef mince', (SELECT id FROM food_categories WHERE name = 'Meat & Seafood' AND user_id IS NULL)),
151: ('milk', 'whole milk', (SELECT id FROM food_categories WHERE name = 'Dairy & Eggs' AND user_id IS NULL)),
152: ('eggs', 'large eggs', (SELECT id FROM food_categories WHERE name = 'Dairy & Eggs' AND user_id IS NULL)),
153: ('olive oil', 'extra virgin olive oil', (SELECT id FROM food_categories WHERE name = 'Pantry' AND user_id IS NULL)),
154: ('salt', 'sea salt', (SELECT id FROM food_categories WHERE name = 'Pantry' AND user_id IS NULL)),
155: ('salt', 'kosher salt', (SELECT id FROM food_categories WHERE name = 'Pantry' AND user_id IS NULL)),
156: ('black pepper', 'pepper', (SELECT id FROM food_categories WHERE name = 'Pantry' AND user_id IS NULL)),
157: ('flour', 'all-purpose flour', (SELECT id FROM food_categories WHERE name = 'Pantry' AND user_id IS NULL)),
158: ('sugar', 'granulated sugar', (SELECT id FROM food_categories WHERE name = 'Pantry' AND user_id IS NULL)),
159: ('butter', 'unsalted butter', (SELECT id FROM food_categories WHERE name = 'Dairy & Eggs' AND user_id IS NULL));
````

## File: supabase/config.toml
````toml
1: project_id = "jfocambuvgkztcktukar"
2: 
3: [functions.text-to-speech]
4: verify_jwt = false
5: 
6: [functions.get-voice-ids]
7: verify_jwt = false
````

## File: .gitignore
````
 1: # Logs
 2: logs
 3: *.log
 4: npm-debug.log*
 5: yarn-debug.log*
 6: yarn-error.log*
 7: pnpm-debug.log*
 8: lerna-debug.log*
 9: 
10: node_modules
11: dist
12: dist-ssr
13: *.local
14: 
15: # Editor directories and files
16: .vscode/*
17: !.vscode/extensions.json
18: .idea
19: .DS_Store
20: *.suo
21: *.ntvs*
22: *.njsproj
23: *.sln
24: *.sw?
````

## File: components.json
````json
 1: {
 2:   "$schema": "https://ui.shadcn.com/schema.json",
 3:   "style": "default",
 4:   "rsc": false,
 5:   "tsx": true,
 6:   "tailwind": {
 7:     "config": "tailwind.config.ts",
 8:     "css": "src/index.css",
 9:     "baseColor": "slate",
10:     "cssVariables": true,
11:     "prefix": ""
12:   },
13:   "aliases": {
14:     "components": "@/components",
15:     "utils": "@/lib/utils",
16:     "ui": "@/components/ui",
17:     "lib": "@/lib",
18:     "hooks": "@/hooks"
19:   }
20: }
````

## File: eslint.config.js
````javascript
 1: import js from "@eslint/js";
 2: import globals from "globals";
 3: import reactHooks from "eslint-plugin-react-hooks";
 4: import reactRefresh from "eslint-plugin-react-refresh";
 5: import tseslint from "typescript-eslint";
 6: 
 7: export default tseslint.config(
 8:   { ignores: ["dist"] },
 9:   {
10:     extends: [js.configs.recommended, ...tseslint.configs.recommended],
11:     files: ["**/*.{ts,tsx}"],
12:     languageOptions: {
13:       ecmaVersion: 2020,
14:       globals: globals.browser,
15:     },
16:     plugins: {
17:       "react-hooks": reactHooks,
18:       "react-refresh": reactRefresh,
19:     },
20:     rules: {
21:       ...reactHooks.configs.recommended.rules,
22:       "react-refresh/only-export-components": [
23:         "warn",
24:         { allowConstantExport: true },
25:       ],
26:       "@typescript-eslint/no-unused-vars": "off",
27:     },
28:   }
29: );
````

## File: index.html
````html
 1: <!DOCTYPE html>
 2: <html lang="en">
 3:   <head>
 4:     <meta charset="UTF-8" />
 5:     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 6:     <title>MAMIA - Recipes from the Heart</title>
 7:     <meta name="description" content="Learn traditional cooking from grandmothers around the world" />
 8:     <meta name="author" content="MAMIA Cooking App" />
 9: 
10:     <meta property="og:title" content="MAMIA - Recipes from the Heart" />
11:     <meta property="og:description" content="Learn traditional cooking from grandmothers around the world" />
12:     <meta property="og:type" content="website" />
13:     <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
14: 
15:     <meta name="twitter:card" content="summary_large_image" />
16:     <meta name="twitter:site" content="@mamia_cooking" />
17:     <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
18:     
19:     <link rel="preconnect" href="https://fonts.googleapis.com">
20:     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
21:     <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Kalam:wght@400;700&family=Cormorant+SC:wght@400;600;700&display=swap" rel="stylesheet">
22:     
23:     <link rel="icon" href="/lovable-uploads/729341a6-699e-4408-9689-7eaa81e90081.png" type="image/png">
24:   </head>
25: 
26:   <body>
27:     <div id="root"></div>
28:     <script type="module" src="/src/main.tsx"></script>
29:   </body>
30: </html>
````

## File: package.json
````json
 1: {
 2:   "name": "vite_react_shadcn_ts",
 3:   "private": true,
 4:   "version": "0.0.0",
 5:   "type": "module",
 6:   "scripts": {
 7:     "dev": "vite",
 8:     "build": "vite build",
 9:     "build:dev": "vite build --mode development",
10:     "lint": "eslint .",
11:     "preview": "vite preview"
12:   },
13:   "dependencies": {
14:     "@11labs/react": "^0.1.4",
15:     "@dnd-kit/core": "^6.3.1",
16:     "@dnd-kit/sortable": "^10.0.0",
17:     "@dnd-kit/utilities": "^3.2.2",
18:     "@hookform/resolvers": "^3.9.0",
19:     "@radix-ui/react-accordion": "^1.2.0",
20:     "@radix-ui/react-alert-dialog": "^1.1.1",
21:     "@radix-ui/react-aspect-ratio": "^1.1.0",
22:     "@radix-ui/react-avatar": "^1.1.0",
23:     "@radix-ui/react-checkbox": "^1.1.1",
24:     "@radix-ui/react-collapsible": "^1.1.0",
25:     "@radix-ui/react-context-menu": "^2.2.1",
26:     "@radix-ui/react-dialog": "^1.1.2",
27:     "@radix-ui/react-dropdown-menu": "^2.1.1",
28:     "@radix-ui/react-hover-card": "^1.1.1",
29:     "@radix-ui/react-label": "^2.1.0",
30:     "@radix-ui/react-menubar": "^1.1.1",
31:     "@radix-ui/react-navigation-menu": "^1.2.0",
32:     "@radix-ui/react-popover": "^1.1.1",
33:     "@radix-ui/react-progress": "^1.1.0",
34:     "@radix-ui/react-radio-group": "^1.2.0",
35:     "@radix-ui/react-scroll-area": "^1.1.0",
36:     "@radix-ui/react-select": "^2.1.1",
37:     "@radix-ui/react-separator": "^1.1.0",
38:     "@radix-ui/react-slider": "^1.2.0",
39:     "@radix-ui/react-slot": "^1.1.0",
40:     "@radix-ui/react-switch": "^1.1.0",
41:     "@radix-ui/react-tabs": "^1.1.0",
42:     "@radix-ui/react-toast": "^1.2.1",
43:     "@radix-ui/react-toggle": "^1.1.0",
44:     "@radix-ui/react-toggle-group": "^1.1.0",
45:     "@radix-ui/react-tooltip": "^1.1.4",
46:     "@supabase/supabase-js": "^2.50.5",
47:     "@tanstack/react-query": "^5.56.2",
48:     "class-variance-authority": "^0.7.1",
49:     "clsx": "^2.1.1",
50:     "cmdk": "^1.0.0",
51:     "date-fns": "^3.6.0",
52:     "embla-carousel-react": "^8.3.0",
53:     "framer-motion": "^12.23.1",
54:     "input-otp": "^1.2.4",
55:     "lucide-react": "^0.462.0",
56:     "next-themes": "^0.3.0",
57:     "react": "^18.3.1",
58:     "react-day-picker": "^8.10.1",
59:     "react-dom": "^18.3.1",
60:     "react-hook-form": "^7.53.0",
61:     "react-intersection-observer": "^9.16.0",
62:     "react-resizable-panels": "^2.1.3",
63:     "react-router-dom": "^6.26.2",
64:     "recharts": "^2.12.7",
65:     "sonner": "^1.5.0",
66:     "tailwind-merge": "^2.5.2",
67:     "tailwindcss-animate": "^1.0.7",
68:     "vaul": "^0.9.3",
69:     "workbox-core": "^7.3.0",
70:     "workbox-strategies": "^7.3.0",
71:     "zod": "^3.23.8"
72:   },
73:   "devDependencies": {
74:     "@eslint/js": "^9.9.0",
75:     "@tailwindcss/typography": "^0.5.15",
76:     "@types/node": "^22.5.5",
77:     "@types/react": "^18.3.3",
78:     "@types/react-dom": "^18.3.0",
79:     "@vitejs/plugin-react-swc": "^3.5.0",
80:     "autoprefixer": "^10.4.20",
81:     "eslint": "^9.9.0",
82:     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
83:     "eslint-plugin-react-refresh": "^0.4.9",
84:     "globals": "^15.9.0",
85:     "lovable-tagger": "^1.1.7",
86:     "postcss": "^8.4.47",
87:     "tailwindcss": "^3.4.11",
88:     "typescript": "^5.5.3",
89:     "typescript-eslint": "^8.0.1",
90:     "vite": "^5.4.1"
91:   }
92: }
````

## File: postcss.config.js
````javascript
1: export default {
2:   plugins: {
3:     tailwindcss: {},
4:     autoprefixer: {},
5:   },
6: }
````

## File: README.md
````markdown
 1: # Welcome to your Lovable project
 2: 
 3: ## Project info
 4: 
 5: **URL**: https://lovable.dev/projects/9176da10-2120-4bc5-bc5b-8424dc855b7b
 6: 
 7: ## How can I edit this code?
 8: 
 9: There are several ways of editing your application.
10: 
11: **Use Lovable**
12: 
13: Simply visit the [Lovable Project](https://lovable.dev/projects/9176da10-2120-4bc5-bc5b-8424dc855b7b) and start prompting.
14: 
15: Changes made via Lovable will be committed automatically to this repo.
16: 
17: **Use your preferred IDE**
18: 
19: If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.
20: 
21: The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
22: 
23: Follow these steps:
24: 
25: ```sh
26: # Step 1: Clone the repository using the project's Git URL.
27: git clone <YOUR_GIT_URL>
28: 
29: # Step 2: Navigate to the project directory.
30: cd <YOUR_PROJECT_NAME>
31: 
32: # Step 3: Install the necessary dependencies.
33: npm i
34: 
35: # Step 4: Start the development server with auto-reloading and an instant preview.
36: npm run dev
37: ```
38: 
39: **Edit a file directly in GitHub**
40: 
41: - Navigate to the desired file(s).
42: - Click the "Edit" button (pencil icon) at the top right of the file view.
43: - Make your changes and commit the changes.
44: 
45: **Use GitHub Codespaces**
46: 
47: - Navigate to the main page of your repository.
48: - Click on the "Code" button (green button) near the top right.
49: - Select the "Codespaces" tab.
50: - Click on "New codespace" to launch a new Codespace environment.
51: - Edit files directly within the Codespace and commit and push your changes once you're done.
52: 
53: ## What technologies are used for this project?
54: 
55: This project is built with:
56: 
57: - Vite
58: - TypeScript
59: - React
60: - shadcn-ui
61: - Tailwind CSS
62: 
63: ## How can I deploy this project?
64: 
65: Simply open [Lovable](https://lovable.dev/projects/9176da10-2120-4bc5-bc5b-8424dc855b7b) and click on Share -> Publish.
66: 
67: ## Can I connect a custom domain to my Lovable project?
68: 
69: Yes, you can!
70: 
71: To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.
72: 
73: Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
````

## File: tailwind.config.ts
````typescript
  1: import type { Config } from "tailwindcss";
  2: 
  3: export default {
  4: 	darkMode: ["class"],
  5: 	content: [
  6: 		"./pages/**/*.{ts,tsx}",
  7: 		"./components/**/*.{ts,tsx}",
  8: 		"./app/**/*.{ts,tsx}",
  9: 		"./src/**/*.{ts,tsx}",
 10: 	],
 11: 	prefix: "",
 12: 	theme: {
 13: 		container: {
 14: 			center: true,
 15: 			padding: '1rem',
 16: 			screens: {
 17: 				'sm': '428px',
 18: 				'md': '428px', 
 19: 				'lg': '428px',
 20: 				'xl': '428px',
 21: 				'2xl': '428px'
 22: 			}
 23: 		},
 24: 		extend: {
 25: 			colors: {
 26: 				border: 'hsl(var(--border))',
 27: 				input: 'hsl(var(--input))',
 28: 				ring: 'hsl(var(--ring))',
 29: 				background: 'hsl(var(--background))',
 30: 				foreground: 'hsl(var(--foreground))',
 31: 				primary: {
 32: 					DEFAULT: 'hsl(var(--primary))',
 33: 					foreground: 'hsl(var(--primary-foreground))'
 34: 				},
 35: 				secondary: {
 36: 					DEFAULT: 'hsl(var(--secondary))',
 37: 					foreground: 'hsl(var(--secondary-foreground))'
 38: 				},
 39: 				destructive: {
 40: 					DEFAULT: 'hsl(var(--destructive))',
 41: 					foreground: 'hsl(var(--destructive-foreground))'
 42: 				},
 43: 				muted: {
 44: 					DEFAULT: 'hsl(var(--muted))',
 45: 					foreground: 'hsl(var(--muted-foreground))'
 46: 				},
 47: 				accent: {
 48: 					DEFAULT: 'hsl(var(--accent))',
 49: 					foreground: 'hsl(var(--accent-foreground))'
 50: 				},
 51: 				popover: {
 52: 					DEFAULT: 'hsl(var(--popover))',
 53: 					foreground: 'hsl(var(--popover-foreground))'
 54: 				},
 55: 				card: {
 56: 					DEFAULT: 'hsl(var(--card))',
 57: 					foreground: 'hsl(var(--card-foreground))'
 58: 				},
 59: 				sidebar: {
 60: 					DEFAULT: 'hsl(var(--sidebar-background))',
 61: 					foreground: 'hsl(var(--sidebar-foreground))',
 62: 					primary: 'hsl(var(--sidebar-primary))',
 63: 					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
 64: 					accent: 'hsl(var(--sidebar-accent))',
 65: 					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
 66: 					border: 'hsl(var(--sidebar-border))',
 67: 					ring: 'hsl(var(--sidebar-ring))'
 68: 				},
 69: 				italian: 'hsl(var(--italian-accent))',
 70: 				'italian-marble': '#8B4513',
 71: 				'italian-marble-warm': '#A0522D',
 72: 				mexican: 'hsl(var(--mexican-accent))',
 73: 				'mexican-tile': '#D2691E',
 74: 				'mexican-tile-warm': '#FF8C00',
 75: 				thai: 'hsl(var(--thai-accent))',
 76: 				'thai-silk': '#228B22',
 77: 				'thai-silk-warm': '#32CD32'
 78: 			},
 79: 			borderRadius: {
 80: 				lg: 'var(--radius)',
 81: 				md: 'calc(var(--radius) - 2px)',
 82: 				sm: 'calc(var(--radius) - 4px)'
 83: 			},
 84: 			fontFamily: {
 85: 				'heading': ['Nunito', 'system-ui', 'sans-serif'],
 86: 				'handwritten': ['Kalam', 'cursive'],
 87: 				'cinzel': ['Cormorant SC', 'serif']
 88: 			},
 89: 			keyframes: {
 90: 				'accordion-down': {
 91: 					from: {
 92: 						height: '0'
 93: 					},
 94: 					to: {
 95: 						height: 'var(--radix-accordion-content-height)'
 96: 					}
 97: 				},
 98: 				'accordion-up': {
 99: 					from: {
100: 						height: 'var(--radix-accordion-content-height)'
101: 					},
102: 					to: {
103: 						height: '0'
104: 					}
105: 				},
106: 				'fade-in': {
107: 					'0%': {
108: 						opacity: '0',
109: 						transform: 'translateY(10px)'
110: 					},
111: 					'100%': {
112: 						opacity: '1',
113: 						transform: 'translateY(0)'
114: 					}
115: 				},
116: 				'slide-in': {
117: 					'0%': { transform: 'translateX(100%)' },
118: 					'100%': { transform: 'translateX(0)' }
119: 				}
120: 			},
121: 			animation: {
122: 				'accordion-down': 'accordion-down 0.2s ease-out',
123: 				'accordion-up': 'accordion-up 0.2s ease-out',
124: 				'fade-in': 'fade-in 0.3s ease-out',
125: 				'slide-in': 'slide-in 0.3s ease-out'
126: 			}
127: 		}
128: 	},
129: 	plugins: [require("tailwindcss-animate")],
130: } satisfies Config;
````

## File: tsconfig.app.json
````json
 1: {
 2:   "compilerOptions": {
 3:     "target": "ES2020",
 4:     "useDefineForClassFields": true,
 5:     "lib": ["ES2020", "DOM", "DOM.Iterable"],
 6:     "module": "ESNext",
 7:     "skipLibCheck": true,
 8: 
 9:     /* Bundler mode */
10:     "moduleResolution": "bundler",
11:     "allowImportingTsExtensions": true,
12:     "isolatedModules": true,
13:     "moduleDetection": "force",
14:     "noEmit": true,
15:     "jsx": "react-jsx",
16: 
17:     /* Linting */
18:     "strict": false,
19:     "noUnusedLocals": false,
20:     "noUnusedParameters": false,
21:     "noImplicitAny": false,
22:     "noFallthroughCasesInSwitch": false,
23: 
24:     "baseUrl": ".",
25:     "paths": {
26:       "@/*": ["./src/*"]
27:     }
28:   },
29:   "include": ["src"]
30: }
````

## File: tsconfig.json
````json
 1: {
 2:   "files": [],
 3:   "references": [
 4:     { "path": "./tsconfig.app.json" },
 5:     { "path": "./tsconfig.node.json" }
 6:   ],
 7:   "compilerOptions": {
 8:     "baseUrl": ".",
 9:     "paths": {
10:       "@/*": ["./src/*"]
11:     },
12:     "noImplicitAny": false,
13:     "noUnusedParameters": false,
14:     "skipLibCheck": true,
15:     "allowJs": true,
16:     "noUnusedLocals": false,
17:     "strictNullChecks": false
18:   }
19: }
````

## File: tsconfig.node.json
````json
 1: {
 2:   "compilerOptions": {
 3:     "target": "ES2022",
 4:     "lib": ["ES2023"],
 5:     "module": "ESNext",
 6:     "skipLibCheck": true,
 7: 
 8:     /* Bundler mode */
 9:     "moduleResolution": "bundler",
10:     "allowImportingTsExtensions": true,
11:     "isolatedModules": true,
12:     "moduleDetection": "force",
13:     "noEmit": true,
14: 
15:     /* Linting */
16:     "strict": true,
17:     "noUnusedLocals": false,
18:     "noUnusedParameters": false,
19:     "noFallthroughCasesInSwitch": true
20:   },
21:   "include": ["vite.config.ts"]
22: }
````

## File: vite.config.ts
````typescript
 1: import { defineConfig } from "vite";
 2: import react from "@vitejs/plugin-react-swc";
 3: import path from "path";
 4: import { componentTagger } from "lovable-tagger";
 5: 
 6: // https://vitejs.dev/config/
 7: export default defineConfig(({ mode }) => ({
 8:   server: {
 9:     host: "::",
10:     port: 8080,
11:   },
12:   plugins: [
13:     react(),
14:     mode === 'development' &&
15:     componentTagger(),
16:   ].filter(Boolean),
17:   resolve: {
18:     alias: {
19:       "@": path.resolve(__dirname, "./src"),
20:     },
21:   },
22: }));
````
