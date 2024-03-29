import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // primary: '#FCFC03',
        // secondary: '#FCFDC7',
        // third: '#9BA885',
        // light: '#C3D4A5',
        // camo: '#75835D',
        primary: '#03e9fc',
        secondary: '#c7e6fd',
        third: '#85a2a8',
        light: '#a5c4d4',
        camo: '#5d7383',
      },
    },
  },
  plugins: [],
}
export default config
