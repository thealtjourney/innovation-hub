import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          700: "#1F2937",
          500: "#475569",
          300: "#94A3B8",
        },
        brand: {
          50: "#EEF4FF",
          100: "#DCE7FF",
          500: "#3B6BE3",
          600: "#2C55C7",
          700: "#1F3FA0",
        },
        accent: {
          500: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
        ring: "0 0 0 1px rgba(15,23,42,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
