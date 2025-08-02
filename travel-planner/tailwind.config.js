/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "romantic-pink": "#FF6B6B",
        "dreamy-blue": "#4A90E2",
      },
    },
  },
  plugins: [],
};
