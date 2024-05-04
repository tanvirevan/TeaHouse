/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: ["daisyui"],
    daisyui: {
      themes: ["light", "dark", "cupcake"], 
    },
  }