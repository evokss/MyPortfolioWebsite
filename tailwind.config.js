/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-up-down": "updown 8s ease-in-out infinite", // Smooth up-and-down motion
      },
      keyframes: {
        updown: {
          "0%, 100%": {
            transform: "translateY(-10px)", // Moves up by 20px
          },
          "50%": {
            transform: "translateY(10px)", // Moves down by 20px
          },
        },
      },
    },
  },
  plugins: [],
};
