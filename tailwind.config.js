/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#4731D3",
        yellow: "#CBF281",
        dark: "#171043",
        brown: "#1A210B",
      },
    },
  },
  plugins: [],
};
