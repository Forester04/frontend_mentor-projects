/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
      },
      screens: {
        xs: ["320px"],
      },
    },
  },
  plugins: [],
};
