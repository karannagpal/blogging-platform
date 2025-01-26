import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        jumbo: "2.25rem", // 36px
        xl: "1.5rem", // 24px
        lg: "1.25rem", // 20px
        base: "1rem", // 16px
        sm: "0.75rem", // 12px
      },
      colors: {
        primary: {
          100: "#fce7f3",
          300: "#fce7f3",
          500: "#fce7f3",
          700: "#fce7f3",
          900: "#fce7f3",
        },
        secondary: {
          100: "#fce7f3",
          300: "#f9a8d4",
          500: "#fce7f3",
          700: "#fce7f3",
          900: "#fce7f3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
