/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C50E3",
        secondary: "#858396",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)",
        "footer-gradient":
          "linear-gradient(rgb(255, 255, 255) 0%, rgb(253, 249, 243) 100%)",
      },
    },
  },
  plugins: [],
};
