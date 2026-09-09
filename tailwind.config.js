/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Hind Siliguri' as fallback: Inter/Plus Jakarta Sans have no Bangla glyphs,
        // so the browser auto-falls-back to it per-glyph — Bangla and English can sit
        // in the same sentence without a font mismatch or manual lang-switching.
        sans: ['Inter', 'Hind Siliguri', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Hind Siliguri', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        surfaceHover: '#1c1c1c',
        border: '#27272a', // zinc-800
        foreground: '#fafafa',
        muted: '#a1a1aa', // zinc-400
        accent: '#3b82f6', // blue-500
        accentMuted: 'rgba(59, 130, 246, 0.15)'
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      lineHeight: {
        bn: '1.8', // Bangla conjuncts/matras need more vertical room than Latin-only 1.5
      }
    },
  },
  plugins: [],
}
