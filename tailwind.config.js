/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        card: 'var(--card)',
        elevated: 'var(--elevated)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        borderLight: 'var(--border-light)',
        borderStrong: 'var(--border-strong)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
