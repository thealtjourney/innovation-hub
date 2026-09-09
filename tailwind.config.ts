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
          900: "#203E32",
          700: "#344A3E",
          500: "#626D61",
          300: "#81917D",
        },
        brand: {
          50: "#EFF2E8",
          100: "#E1E8D7",
          500: "#55785B",
          600: "#3E664D",
          700: "#2B513C",
        },
        accent: {
          500: "#4E825C",
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
