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
        },
        blueTheme: {
          500: '#089AA8',
          600: '#00a495',
          700: '#007A86'
        },
        grayTheme: {
          50: '#EFEFEF',
          100: '#D4D4D4',
          200: '#9f9f9f',
          300: '#929292',
          400: '#737373'
        },
        green: {
          500: '#22c55e'
        }
      },
      fontFamily: {
        regular: "Poppins_400Regular",
        medium: "Poppins_500Medium",
        semibold: "Poppins_600SemiBold",
        bold: "Poppins_700Bold"
      }
    },
  },
  plugins: [],
}