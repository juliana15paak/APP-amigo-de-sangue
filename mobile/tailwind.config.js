/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#ED1C24',
        }
      },
      fontFamily: {
        semibold: "Poppins_600SemiBold",
        medium: "Poppins_500Medium",
      }
    },
  },
  plugins: [],
}