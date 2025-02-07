import type { Config } from "tailwindcss";

export default {
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
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'bounce-in': 'bounceIn 1s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: "0", transform: 'translateY(20px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
