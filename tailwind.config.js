// module.exports = {
//   mode: "jit",
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         Poppins: "Poppins",
//       },
//     },
//   },
//   plugins: [],
// };

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
});
