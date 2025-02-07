/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px", // Thiết lập kích thước tối đa cho sm là 640px
      },
      spacing: {
        "2xs": "8rem", // Thêm spacing tuỳ chỉnh
      },
    },
  },
  plugins: [],
};
