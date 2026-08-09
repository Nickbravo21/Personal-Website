import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0B0E",
        charcoal: "#121418",
        steel: "#1E2229",
        slateGlass: "#2A2F3A",
        radar: "#10B981",
        amber: "#F59E0B",
        cyan: "#06B6D4",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(16, 185, 129, 0.2), 0 0 30px rgba(16, 185, 129, 0.08)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "hud-grid":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        "scan-line":
          "linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      letterSpacing: {
        tactical: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;