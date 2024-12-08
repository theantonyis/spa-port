/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Шляхи до файлів вашого проекту
  ],
  theme: {
    extend: {
      colors: {
          primary: '#007bff',
          darkBg: '#121212',
        },
      },
    },
  plugins: [],
}

