import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057e2',
          50: '#edf7fd',
        },
        neutral: {
          50: '#fafafa',
          200: '#8f9291',
          300: '#5c615e',
          500: '#0c130f',
        }
      },
      fontFamily: {
        manrope: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },

      boxShadow: {
        'sm': '0px 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0px 4px 8px rgba(0, 0, 0, 0.1)',
        'button': '0px 1px 2px rgba(29, 72, 100, 0.2)',
      }
    },
  },
  plugins: [],
} satisfies Config
