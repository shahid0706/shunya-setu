/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette
      colors: {
        // Primary colors
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c3d66",
          950: "#082f49",
        },
        // Secondary colors
        secondary: {
          50: "#f8f4ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3f0f5c",
        },
        // Accent colors
        accent: {
          50: "#fef3c7",
          100: "#fef08a",
          200: "#fde047",
          300: "#facc15",
          400: "#eab308",
          500: "#ca8a04",
          600: "#a16207",
          700: "#854d0e",
          800: "#713f12",
          900: "#3f2305",
          950: "#262305",
        },
        // Success colors
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#145231",
          950: "#0c2818",
        },
        // Warning colors
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        // Error/Danger colors
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        // Neutral colors
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      // Custom spacing
      spacing: {
        128: "32rem",
        144: "36rem",
        "safe-top": "max(0px, env(safe-area-inset-top))",
        "safe-bottom": "max(0px, env(safe-area-inset-bottom))",
        "safe-left": "max(0px, env(safe-area-inset-left))",
        "safe-right": "max(0px, env(safe-area-inset-right))",
      },
      // Custom typography
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
      },
      // Custom animations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "fade-out": "fadeOut 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-up": "slideInUp 0.5s ease-out",
        "slide-in-down": "slideInDown 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 3s linear infinite",
        "shimmer": "shimmer 2s infinite",
        "gradient-shift": "gradientShift 3s ease infinite",
        "flip": "flip 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
        gradientShift: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        flip: {
          "0%": {
            transform: "perspective(400px) rotateY(0)",
          },
          "100%": {
            transform: "perspective(400px) rotateY(360deg)",
          },
        },
      },
      // Custom shadows
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        "glow-sm": "0 0 4px rgba(14, 165, 233, 0.5)",
        "glow-md": "0 0 8px rgba(14, 165, 233, 0.5)",
        "glow-lg": "0 0 16px rgba(14, 165, 233, 0.5)",
      },
      // Custom border radius
      borderRadius: {
        none: "0",
        xs: "0.125rem",
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },
      // Custom backdrop blur
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        base: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
      },
      // Custom transitions
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "750": "750ms",
      },
      // Custom z-index
      zIndex: {
        "-1": "-1",
        "0": "0",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        "auto": "auto",
      },
      // Custom container
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    // Utility function for creating custom variants
    function ({ addUtilities }) {
      const newUtilities = {
        ".glass": {
          "@apply bg-white/30 backdrop-blur-md border border-white/20": {},
        },
        ".glass-dark": {
          "@apply bg-black/30 backdrop-blur-md border border-white/10": {},
        },
        ".gradient-text": {
          "@apply bg-clip-text text-transparent": {},
        },
        ".gradient-primary": {
          "@apply bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent":
            {},
        },
        ".gradient-accent": {
          "@apply bg-gradient-to-r from-accent-400 to-primary-500 bg-clip-text text-transparent":
            {},
        },
        ".safe-area-top": {
          paddingTop: "var(--safe-area-top)",
        },
        ".safe-area-bottom": {
          paddingBottom: "var(--safe-area-bottom)",
        },
        ".safe-area-left": {
          paddingLeft: "var(--safe-area-left)",
        },
        ".safe-area-right": {
          paddingRight: "var(--safe-area-right)",
        },
        ".focus-ring": {
          "@apply outline-none ring-2 ring-primary-500 ring-offset-2": {},
        },
        ".focus-ring-secondary": {
          "@apply outline-none ring-2 ring-secondary-500 ring-offset-2": {},
        },
        ".truncate-lines-2": {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".truncate-lines-3": {
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        },
        ".scroll-smooth-x": {
          "scroll-behavior": "smooth",
          "@supports (scroll-snap-type: x mandatory)": {
            "scroll-snap-type": "x mandatory",
          },
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  corePlugins: {
    // You can disable core plugins if needed
    // Example: preflight: false,
  },
  // Dark mode configuration
  darkMode: ["class", "[data-theme='dark']"],
  // Important configuration - uncomment if needed
  // important: true,
}
