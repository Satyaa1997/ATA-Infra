/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#BA8E2E',       /* Antique Gold */
          hover: '#A37A24',         /* Hover Deep Gold */
          light: 'rgba(186, 142, 46, 0.12)',
        },
        primary: '#F9F8F5',
        dark: '#121212',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,               /* Automatically adds mx-auto */
        padding: {
          DEFAULT: '1.5rem',        /* Mobile (24px safe margin from edge) */
          sm: '2rem',               /* 32px margin */
          md: '3.5rem',             /* 56px margin */
          lg: '4.5rem',             /* 72px margin */
          xl: '6rem',               /* 96px margin */
          '2xl': '7rem',            /* Large desktop balanced margin */
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1380px',
        },
      },
    },
  },
  plugins: [],
}