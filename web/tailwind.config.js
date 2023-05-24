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
      'maya-blue': '#62BCFA',
      'poppy': '#D73737',
      'periwinkle': '#CFD7FF'
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif']
    },
    fontSize: {
      'xs': ['0.813rem', {
        lineHeight: '1.187rem',
        fontWeight: '600'
      }],
      'sm': ['0.937rem', {
        lineHeight: '1.375rem',
        fontWeight: '400'
      }],
      'base': ['1rem', {
        lineHeight: '1.437rem',
        fontWeight: '400',
      }],
      'lg': ['0.875rem', {
        lineHeight: '1.25rem',
        fontWeight: '700',
        letterSpacing: '-0.012em',
      }],
      'xl': ['1.125rem', {
        lineHeight: '1.625rem',
        fontWeight: '700',
        letterSpacing: '-0.015em'
      }],
      '2xl': ['1.25rem', {
        lineHeight: '1.812rem',
        fontWeight: '700',
        letterSpacing: '-0.015em',
      }],
      '3xl': ['1.5rem', {
        lineHeight: '2.187rem',
        fontWeight: '700',
        letterSpacing: '-0.02em',
      }],
    },
    extend: {
      spacing: {
        'h-18': '4.5rem',
      },
    },
  },
  plugins: [],
}
