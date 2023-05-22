/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'veronica': '#AD1FEA',
      'savoy-blue': '#4661E6',
      'delft-blue': '#373F68',
      'white': '#FFFFFF',
      'ghost-white': '#F2F4FF',
      'ghost-white-light': '#F7F8FD',
      'marian-blue': '#3A4374',
      'glaucous': '#647196',
      'atomic-tangerine': '#F49F85',
      'maya-blue': '#62BCFA'
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
