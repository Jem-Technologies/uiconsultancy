import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ui: {
          navy: {
            50: "#f0f4f8",
            100: "#d9e2ec",
            200: "#bcccdc",
            300: "#9fb3c8",
            400: "#829ab1",
            500: "#627d98",
            600: "#486581",
            700: "#334e68",
            800: "#102a43",
            900: "#002147",
            950: "#00142e",
          },
          gold: {
            50: "#fffdf0",
            100: "#fff9c2",
            200: "#fff085",
            300: "#ffe247",
            400: "#ffd014",
            500: "#e6b000",
            600: "#d4af37",
            700: "#a37f0a",
            800: "#82620d",
            900: "#6d4e10",
          },
          cream: "#FAF9F5",
          sand: "#F4EFEA",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["'DM Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
