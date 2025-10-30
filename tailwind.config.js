const { isLabelWithInternallyDisabledControl } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#66ffcc",     // Main accent
        secondary: "#66ccff",   // Highlight / secondary
        accent: "#3399ff",      // Section backgrounds
        muted: "#4b5563",       // Muted text
        text: "#111827",        // Main text
      },
      backgroundImage: {
        neutral: "#FFFFFF",
      },
    },
  },
  plugins: [],
};