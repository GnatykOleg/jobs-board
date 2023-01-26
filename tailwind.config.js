/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      smMin: { min: "425px" },
      smMax: { max: "767px" },

      mdMin: { min: "768px" },
      mdMax: { max: "1023px" },

      lgMin: { min: "1024px" },
      lgMax: { max: "1279px" },

      xlMin: { min: "1280px" },
      xlMax: { max: "1535px" },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        cardBg: "#EFF0F5",
        primaryTextColor: "#3a4562",
        secondaryTextColor: "#878d9d",
        postedColorInDetail: "rgba(56, 65, 93, 0.355988)",
        mapTextColor: "#e8ebf3",
        employmentTypeTextColor: "#55699e",
        employmentTypeBackgroundColor: "rgba(161, 177, 219, 0.317343)",
        employmentTypeBorderColor: " 1px solid rgba(85, 105, 158, 0.3)",
        benefitsTextColor: "#988b49",
        benefitsBackgroundColor: "#ffcf00",
        buttonBgColor: "#384564",
      },
    },
  },
  plugins: [],
};
