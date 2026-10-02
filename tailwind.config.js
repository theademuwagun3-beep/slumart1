/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2d6cff',
        secondary: '#3400d3',
        tertiary: '#dcf2e1',
        surface: '#ffffff',
        background: '#dcf2e1',
        error: '#d92d20',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      spacing: {
        xs: '2px',
        sm: '12px',
        md: '20px',
        lg: '30px',
        xl: '48px',
      },
    },
  },
  plugins: [],
};
