/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adicione outros tipos de arquivos se necessário, como jsx, tsx, etc.
  theme: {
    extend: {
      colors: {
        primary: "#0F1D3F",
        secondary: "#1FE4CE",
      },
      gradientColorStops: {

        '10': '10%',
        '90': '90%',
      },
    },
  },
  plugins: [],
};