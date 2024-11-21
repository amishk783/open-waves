/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        card: "#191919",
      },
      backgroundImage: {
        "gradient-card":
          "linear-gradient(180deg,#191919 0%,rgba(26,26,26,0) 100%)",
        "gradient-custom":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(205,89,89,1) 53%, rgba(255,239,0,1) 100%)",
      },
      keyframes: {
        "rotate-circle": {
          to: {
            transform: "rotate(1turn)",
          },
        },
      },
      animation: {
        "rotate-text": "rotate-circle 10s linear infinite",
      },
    },
  },
  plugins: [],
};
