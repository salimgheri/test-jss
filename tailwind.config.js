/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '425px' /** 0 to mobile @media (min-width: 425px) { ... }  */,
      md: '768px' /** mobile to tablets @media (min-width: 768px) { ... }  */,
      lg: '1024px' /** tablets to desktop @media (min-width: 1024px) { ... }  */,
      xl: '1280px' /** desktop to large desktop @media (min-width: 1280px) { ... }  */,
    },
    fontFamily: {
      poppin: ['Poppins', 'Arial', 'Verdana', 'Trebuchet MS'],
    },
    fontWeight: {
      thin: 250,
      extralight: '275',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    colors: {
      'primary-green': {
        tint: {
          100: 'rgb(var(--color-green-tint-1) / <alpha-value>)' /** #e2f0cd */,
          200: 'rgb(var(--color-green-tint-2) / <alpha-value>)' /** #e9f4da */,
          300: 'rgb(var(--color-green-tint-3) / <alpha-value>)' /** #f0f8e6 */,
          400: 'rgb(var(--color-green-tint-4) / <alpha-value>)' /** #f8fbf3 */,
        },
        DEFAULT: 'rgb(var(--color-primary-green) / <alpha-value>)' /** #96c94f */,
        shade: {
          100: 'rgb(var(--color-green-shade-1) / <alpha-value>)' /** #7bac34 */,
          200: 'rgb(var(--color-green-shade-2) / <alpha-value>)' /** #5c8127 */,
          300: 'rgb(var(--color-green-shade-3) / <alpha-value>)' /** #3d561a */,
          400: 'rgb(var(--color-green-shade-4) / <alpha-value>)' /** #1f2b0d */,
        },
      },
      'primary-blue': {
        tint: {
          100: 'rgb(var(--color-blue-tint-1) / <alpha-value>)' /** #cce2f1 */,
          200: 'rgb(var(--color-blue-tint-2) / <alpha-value>)' /** #d9e9f4 */,
          300: 'rgb(var(--color-blue-tint-3) / <alpha-value>)' /** #e6f1f8 */,
          400: 'rgb(var(--color-blue-tint-4) / <alpha-value>)' /** #f2f8fb */,
        },
        DEFAULT: 'rgb(var(--color-primary-blue) / <alpha-value>)' /** #006eb8 */,
        shade: {
          100: 'rgb(var(--color-blue-shade-1) / <alpha-value>)' /** #0f61a2 */,
          200: 'rgb(var(--color-blue-shade-2) / <alpha-value>)' /** #184977 */,
          300: 'rgb(var(--color-blue-shade-3) / <alpha-value>)' /** #18324a */,
          400: 'rgb(var(--color-blue-shade-4) / <alpha-value>)' /** #121c29 */,
        },
      },
      'primary-gray': {
        tint: {
          100: 'rgb(var(--color-gray-tint-1) / <alpha-value>)' /** #d6d6d6 */,
          200: 'rgb(var(--color-gray-tint-2) / <alpha-value>)' /** #e0e0e0 */,
          300: 'rgb(var(--color-gray-tint-3) / <alpha-value>)' /** #eaeaea */,
          400: 'rgb(var(--color-gray-tint-4) / <alpha-value>)' /** #f8f8f8 */,
        },
      },
      'primary-less-black': 'rgb(var(--color-primary-less-black) / <alpha-value>)' /** #303030 */,
      'primary-white': 'rgb(var(--color-primary-white) / <alpha-value>)' /** #ffffff */,
      // Secondary Colors
      'secondary-gray': {
        dark: 'rgb(var(--color-secondary-dark-gray) / <alpha-value>)' /** #888888 */,
        light: 'rgb(var(--color-secondary-light-gray) / <alpha-value>)' /** #f5f5f5 */,
      },
      'secondary-green': {
        dark: 'rgb(var(--color-secondary-dark-green) / <alpha-value>)' /** #244435 */,
        aqua: 'rgb(var(--color-secondary-aqua-green) / <alpha-value>)' /** #96d5d2 */,
      },
      // Special color
      special: {
        success: 'rgb(var(--color-special-success) / <alpha-value>)' /** #7cb031 */,
        warning: 'rgb(var(--color-special-warning) / <alpha-value>)' /** #ffb902 */,
        error: 'rgb(var(--color-special-error) / <alpha-value>)' /** #da4352 */,
      },
      transparent: 'transparent',
    },
    fontSize: {
      2.5: '0.625rem' /** 10px */,
      3: '0.75rem' /** 12px */,
      3.5: '0.875rem' /** 14px */,
      4: '1rem' /** 16px */,
      4.5: '1.125rem' /** 18px */,
      5: '1.25rem' /** 20px */,
      5.5: '1.375rem' /** 22px */,
      6: '1.5rem' /** 24px */,
      7: '1.75rem' /** 28px */,
      8: '2rem' /** 32px */,
      9: '2.25rem' /** 36px */,
      10: '2.5rem' /** 40px */,
      11: '2.75rem' /** 44px */,
      12: '3rem' /** 48px */,
      15: '3.74rem' /** 60px */,
      'heading-1': ['3rem', { lineHeight: '60px', letterSpacing: '0' }],
      'heading-2': ['2.5rem', { lineHeight: '46px', letterSpacing: '0' }],
      'heading-3': ['2.25rem', { lineHeight: '42px', letterSpacing: '0' }],
      'heading-4': ['1.625rem', { lineHeight: '30px', letterSpacing: '0' }],
      'heading-5': ['1.375rem', { lineHeight: '26px', letterSpacing: '0' }],
      intro: ['1.125rem', { lineHeight: '28px', letterSpacing: '0' }],
      body: ['1rem', { lineHeight: '20px', letterSpacing: '0' }],
      'body-small': ['0.875rem', { lineHeight: '20px', letterSpacing: '0' }],
    },
    extend: {},
  },
  plugins: [],
};
