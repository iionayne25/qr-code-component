/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightGray: "hsl(212, 45%, 89%)",
      grayisBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)",
    },
    fontFamily:{
      outfit: ['Outfit','sans-serif']
    }
  },
  plugins: [],
};
