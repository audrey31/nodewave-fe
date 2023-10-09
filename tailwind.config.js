/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/hero-background.png')",
        "works-1": "url('/works-bg-1.png')",
        "works-2": "url('/works-bg-2.png')",
        procedure: "url('/procedure-bg.svg')",
        "procedure-content": "url('/procedure-content-bg.png')",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        primary: "#00AD98",
      },
    },
  },
  plugins: [],
};
