/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
