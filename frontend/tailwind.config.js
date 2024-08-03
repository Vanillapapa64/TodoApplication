/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-radial': 'radial-gradient(circle, #e66465, transparent)'
      }),
    },
  },
  plugins: [],
}

