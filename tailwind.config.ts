import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#3283F1',
      white: '#FFF',
      black: '#10141E',
      gray: {
        100: '#F3F3F3',
        200: '#F2F2F4',
        700: '#707987',
        800: '#616974',
        900: '#1A1E27',
      },
      blue: {
        100: '#E8F3FF',
      },
    },
  },
  plugins: [],
} satisfies Config;
