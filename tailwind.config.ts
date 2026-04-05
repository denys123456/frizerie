import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#f5f5f2",
        card: "#151515",
        muted: "#1c1c1c",
        border: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#d8c3a5",
          soft: "#9fb5c9",
          dark: "#8f775b"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(216,195,165,0.14), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))",
        mesh:
          "radial-gradient(circle at 18% 12%, rgba(216,195,165,0.14), transparent 24%), radial-gradient(circle at 84% 0%, rgba(159,181,201,0.08), transparent 28%), radial-gradient(circle at 55% 82%, rgba(255,255,255,0.06), transparent 22%)"
      },
      boxShadow: {
        glow: "0 18px 50px rgba(216,195,165,0.14)",
        panel: "0 24px 80px rgba(0,0,0,0.42)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
