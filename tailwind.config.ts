import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      rotate: {
        270: '270deg',
      },
      transitionDuration: {
        '500': '500ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bigger: ['Bigger', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#EFFEFC',
          100: '#C8FFF5',
          200: '#91FEED',
          300: '#53F5E2',
          400: '#1FE2D1',
          500: '#07C5B7',
          600: '#02A199',
          700: '#077E7A',
          800: '#0B6461',
          900: '#0E5351',
          950: '#003333',
        },
        'surface-back': {
          white: '#f9fafb',
          black: '#111827',
          cardblack: '#1f2937'
        },
        'shadows-colors': {
          cardShadow: '#1f2937',
          customShadow: '0px 0px 50px 0px rgba(31,41,55,1)'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
