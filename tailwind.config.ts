import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // MAMIA custom colors
        mamia: {
          50: "#fef7ee",
          100: "#fdead7",
          200: "#fbd2ae",
          300: "#f8b17a",
          400: "#f48744",
          500: "#E35336", // Primary terracotta
          600: "#e24d15",
          700: "#bb3a14",
          800: "#952f18",
          900: "#782a16",
          950: "#41130a",
        },
        // Core theme colors
        cream: "#FFF8DC",
        terracotta: "#E35336",
        warmBrown: "#3E2723",
        sage: "#9CAF88",
        // Mama-specific accent colors
        nonna: {
          primary: "#8B4513", // Rustic Brown
          secondary: "#DAA520", // Antique Gold
        },
        abuela: {
          primary: "#D2001F", // Fiesta Red
          secondary: "#FFD700", // Sunshine Yellow
        },
        mae: {
          primary: "#F4A460", // Saffron Gold
          secondary: "#8FBC8F", // Bamboo Green
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        warmGray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Consolas", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        handwritten: ["var(--font-kalam)", "var(--font-caveat)", "cursive"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px minimum
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px for cooking mode
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        // Kitchen-safe sizes
        "kitchen-sm": ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        "kitchen-base": ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "kitchen-lg": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "kitchen-xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        // Touch targets - minimum 48px
        "touch": "3rem", // 48px
        "touch-lg": "3.5rem", // 56px
        "touch-xl": "4rem", // 64px
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        // Voice interface animations
        "waveform": "waveform 1.5s ease-in-out infinite",
        "listening": "listening 2s ease-in-out infinite",
        "speaking": "speaking 0.8s ease-in-out infinite alternate",
        "polaroid-tilt": "polaroid-tilt 0.3s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        // Voice interface keyframes
        "waveform": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.5)" },
        },
        "listening": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "speaking": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "polaroid-tilt": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-2deg)" },
        },
      },
      boxShadow: {
        "soft": "0 2px 8px 0 rgba(0, 0, 0, 0.05)",
        "medium": "0 4px 16px 0 rgba(0, 0, 0, 0.1)",
        "hard": "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
        // Polaroid-specific shadows
        "polaroid": "0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08)",
        "polaroid-hover": "0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config; 