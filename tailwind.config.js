/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    
    './pages/**/*.{js,ts,jsx,tsx}',  
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#121212',  // Negro profundo, no totalmente negro absoluto
          light: '#1e1e1e',    // Negro un poco más claro
        },
        white: {
          DEFAULT: '#f5f5f5',  // Blanco suave, no tan brillante
          light: '#fafafa',    // Blanco aún más suave
        },
      },
    },
  },
  plugins: [],
}
