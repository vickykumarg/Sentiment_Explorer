/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Trebuchet MS', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
