import { keepTheme } from './src/themes/keepTheme'

const config = {
  content: [
    './mdx-components.tsx',
    "./components/**/*.{js,vue,ts,mdx}",
    "./src/components/**/*.{js,vue,ts,mdx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '4rem',
        '3xl': '5rem',
      },
    },
    extend: {
      screens: {
        laptop: '1140px',
        '4k': '1980px',
      },
    },
  },
}

export default keepTheme(config)
