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
      padding: 9,
      center: true,
    },
    extend: {
      colors: {
        borderColor: "#FFCF00",
        cardBg: "#EFF0F5",
        primaryTextColor: "#3a4562",
        secondaryTextColor: "#878d9d",
        postedColorInDetail: "rgba(56, 65, 93, 0.355988)",
        mapTextColor: "#e8ebf3",
        employmentTypeTextColor: "#55699e",
        employmentTypeBackgroundColor: "rgba(161, 177, 219, 0.317343)",
        employmentTypeBorderColor: " 1px solid rgba(85, 105, 158, 0.3)",
        benefitsTextColor: "#988b49",
        benefitsBackgroundColor: "rgba(255, 207, 0, 0.15)",
        buttonBgColor: "#384564",
      },
    },
  },
  plugins: [],
};
