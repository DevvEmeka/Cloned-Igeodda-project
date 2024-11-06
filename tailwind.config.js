/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Add paths to all JS and TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        public_sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

