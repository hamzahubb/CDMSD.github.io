import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#123047',
          dark: '#0c2030',
          light: '#1c4565',
        },
        teal: {
          DEFAULT: '#168A8A',
          dark: '#0f6363',
          light: '#e6f4f4',
        },
        forest: {
          DEFAULT: '#4F8A45',
          light: '#eef7ec',
        },
        amber: {
          DEFAULT: '#E49A45',
          light: '#fef5ea',
        },
        slate: {
          DEFAULT: '#17252D',
          light: '#4A5568',
          muted: '#718096',
        },
        offwhite: '#F7F8F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
