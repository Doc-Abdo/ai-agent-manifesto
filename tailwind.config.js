/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.{md,html}",
    "./*.html",
    "./*.md",
  ],

  safelist: [
    // Classes that might only appear in generated HTML / markdown
    'border-border/50',
    'bg-surface/30',
    'text-primary',
  ],

  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        surface: '#161b22',
        border: '#30363d',
        primary: '#38bdf8',
        text: '#c9d1d9',
        muted: '#8b949e'
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },

  plugins: [],
};