/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans Variable', 'sans-serif'],
        retro: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        primary: {
          light: '#FF6B6B',
          dark: '#4A90E2',
        },
        secondary: {
          light: '#4ECDC4',
          dark: '#9B59B6',
        },
        background: {
          light: '#F7F7F7',
          dark: '#1A1A1A',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}