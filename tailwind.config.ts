import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecaff",
          400: "#58a8ff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#0b2545",
          950: "#061324",
        },
        navy: {
          800: "#0e1e38",
          900: "#081426",
          950: "#040b17",
        },
        accent: {
          cyan: "#06b6d4",
          teal: "#14b8a6",
          purple: "#8b5cf6",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["'Google Sans'", "var(--font-sans)", "'Product Sans'", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "'Montserrat'", "'Google Sans'", "sans-serif"],
        montserrat: ["var(--font-heading)", "'Montserrat'", "sans-serif"],
        google: ["'Google Sans'", "'Product Sans'", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
